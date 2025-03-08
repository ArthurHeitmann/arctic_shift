import traceback
from typing import BinaryIO, Iterator
try:
	import orjson as json
except ImportError:
	import json
	print("Recommended to install 'orjson' for faster JSON parsing")

import zstandard

try:
	from zst_blocks_format.python_cli.ZstBlocksFile import ZstBlocksFile
except ImportError:
	pass

def getZstFileJsonStream(f: BinaryIO, chunk_size=1024*1024*10) -> Iterator[dict]:
	decompressor = zstandard.ZstdDecompressor(max_window_size=2**31)
	currentString = ""
	def yieldLinesJson():
		nonlocal currentString
		lines = currentString.split("\n")
		currentString = lines[-1]
		for line in lines[:-1]:
			try:
				yield json.loads(line)
			except json.JSONDecodeError:
				print("Error parsing line: " + line)
				traceback.print_exc()
				continue
	zstReader = decompressor.stream_reader(f)
	while True:
		try:
			chunk = zstReader.read(chunk_size)
		except zstandard.ZstdError:
			print("Error reading zst chunk")
			traceback.print_exc()
			break
		if not chunk:
			break
		currentString += chunk.decode("utf-8", "replace")
		
		yield from yieldLinesJson()
	
	yield from yieldLinesJson()
	
	if len(currentString) > 0:
		try:
			yield json.loads(currentString)
		except json.JSONDecodeError:
			print("Error parsing line: " + currentString)
			print(traceback.format_exc())
			pass

def getJsonLinesFileJsonStream(f: BinaryIO) -> Iterator[dict]:
	for line in f:
		line = line.decode("utf-8", errors="replace")
		try:
			yield json.loads(line)
		except json.JSONDecodeError:
			print("Error parsing line: " + line)
			traceback.print_exc()
			continue

def getZstBlocksFileJsonStream(f: BinaryIO) -> Iterator[dict]:
	for row in ZstBlocksFile.streamRows(f):
		line = row.decode("utf-8", errors="replace")
		try:
			yield json.loads(line)
		except json.JSONDecodeError:
			print("Error parsing line: " + line)
			traceback.print_exc()
			continue

def getJsonFileStream(f: BinaryIO) -> Iterator[dict]:
	data = json.loads(f.read())
	yield from data

def getFileJsonStream(path: str, f: BinaryIO) -> Iterator[dict]|None:
	if path.endswith(".jsonl") or path.endswith(".ndjson"):
		return getJsonLinesFileJsonStream(f)
	elif path.endswith(".zst"):
		return getZstFileJsonStream(f)
	elif path.endswith(".zst_blocks"):
		return getZstBlocksFileJsonStream(f)
	elif path.endswith(".json"):
		return getJsonFileStream(f)
	else:
		return None
