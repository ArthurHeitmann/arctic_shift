FROM python:3.10

LABEL org.opencontainers.image.source=https://github.com/CASM-Consulting/arctic_shift
LABEL org.opencontainers.image.description="Reddit dump ingestion package"

COPY ./as_reddit ./code/as_reddit
COPY ./requirements.txt ./code
COPY ./pyproject.toml ./code

WORKDIR /code

RUN pip3 install -e .

CMD ["bash"]