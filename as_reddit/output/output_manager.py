import json
from abc import ABC, abstractmethod
from typing import Optional
import json
from abc import ABC, abstractmethod
from typing import Any, Optional

from psycopg_pool import AsyncConnectionPool
from psycopg.types.json import Jsonb

class OutputManager(ABC):
    @abstractmethod
    async def write(self, item):
        """Handle a single output item (e.g. write to file or DB)."""
        pass


class PostgresOutputManager(OutputManager):
    """
    Writes JSON-serializable dicts into a `data` JSONB column of a Postgres
    table, using psycopg 3's async API. The table is expected to have (or
    will be created with, if `ensure_table=True`) an auto-generated primary
    key and a `created_at` timestamp default, e.g.:

        CREATE TABLE IF NOT EXISTS {table} (
            id BIGSERIAL PRIMARY KEY,
            data JSONB NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );

    Usage:
        manager = PostgresOutputManager(
            dsn="postgresql://user:pass@host:5432/dbname",
            table="events",
        )
        await manager.open()
        await manager.write({"foo": "bar"})
        await manager.close()

        # or as an async context manager
        async with PostgresOutputManager(dsn=dsn, table="events") as manager:
            await manager.write({"foo": "bar"})
    """

    def __init__(
            self,
            dsn: str,
            table: str,
            schema: str = "public",
            ensure_table: bool = False,
            min_size: int = 1,
            max_size: int = 10,
    ):
        self._dsn = dsn
        self._table = table
        self._schema = schema
        self._ensure_table = ensure_table
        self._min_size = min_size
        self._max_size = max_size
        self._pool: Optional[AsyncConnectionPool] = None

    @property
    def _qualified_table(self) -> str:
        return f'"{self._schema}"."{self._table}"'

    async def open(self) -> None:
        if self._pool is not None:
            return
        self._pool = AsyncConnectionPool(
            self._dsn,
            min_size=self._min_size,
            max_size=self._max_size,
            open=False,
        )
        await self._pool.open(wait=True)

        if self._ensure_table:
            async with self._pool.connection() as conn:
                await conn.execute(
                    f"""
                    CREATE TABLE IF NOT EXISTS {self._qualified_table} (
                        id BIGSERIAL PRIMARY KEY,
                        data JSONB NOT NULL,
                        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
                    )
                    """
                )

    async def close(self) -> None:
        if self._pool is not None:
            await self._pool.close()
            self._pool = None

    async def __aenter__(self) -> "PostgresOutputManager":
        await self.open()
        return self

    async def __aexit__(self, exc_type, exc, tb) -> None:
        await self.close()

    async def write(self, item: dict[str, Any]) -> None:
        """Insert a single JSON-serializable dict into the `data` column."""
        if self._pool is None:
            raise RuntimeError(
                "PostgresOutputManager is not open; call `await open()` "
                "first (or use it as an async context manager)."
            )
        if not isinstance(item, dict):
            raise TypeError(f"item must be a dict, got {type(item).__name__}")

        # Fail fast on non-JSON-serializable content rather than at insert time.
        json.dumps(item)

        async with self._pool.connection() as conn:
            await conn.execute(
                f"INSERT INTO {self._qualified_table} (data) VALUES (%s)",
                (Jsonb(item),),
            )