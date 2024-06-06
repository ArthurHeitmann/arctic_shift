import sys
version = sys.version_info
if version.major < 3 or (version.major == 3 and version.minor < 10):
	raise RuntimeError("This script requires Python 3.10 or higher")
import os
from typing import Any, Iterable

from fileStreams import getFileJsonStream


fileOrFolderPath = r"<path to file or folder>"
recursive = False

def processRow(row: dict[str, Any]):
	# Do something with the row
	pass

def processFile(path: str):
	jsonStream = getFileJsonStream(path)
	if jsonStream is None:
		print(f"Skipping unknown file {path}")
		return
        i = 0 # in case jsonStream is corrupt
	for i, (lineLength, row) in enumerate(jsonStream):
		if i % 10_000 == 0:
			print(f"\rRow {i}", end="")
		processRow(row)
	print(f"\rRow {i+1}")

def processFolder(path: str):
	fileIterator: Iterable[str]
	if recursive:
		def recursiveFileIterator():
			for root, dirs, files in os.walk(path):
				for file in files:
					yield os.path.join(root, file)
		fileIterator = recursiveFileIterator()
	else:
		fileIterator = os.listdir(path)
		fileIterator = (os.path.join(path, file) for file in fileIterator)
	
	for i, file in enumerate(fileIterator):
		print(f"Processing file {i+1: 3} {file}")
		processFile(file)

def main():
	if os.path.isdir(fileOrFolderPath):
		processFolder(fileOrFolderPath)
	else:
		processFile(fileOrFolderPath)
	
	print("Done :>")

if __name__ == "__main__":
	main()
