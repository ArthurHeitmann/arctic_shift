import os
import time
from typing import BinaryIO


class FileProgressLog:
	file: BinaryIO
	fileSize: int
	i: int
	startTime: float
	printEvery: int
	maxLineLength: int

	def __init__(self, path: str, file: BinaryIO):
		self.file = file
		self.fileSize = os.path.getsize(path)
		self.i = 0
		self.startTime = time.time()
		self.printEvery = 10_000
		self.maxLineLength = 0
	
	def onRow(self):
		self.i += 1
		if self.i % self.printEvery == 0 and self.i > 0:
			self.logProgress()
		
	def logProgress(self, end=""):
		progress = self.file.tell() / self.fileSize if not self.file.closed else 1
		elapsed = time.time() - self.startTime
		remaining = (elapsed / progress - elapsed) if progress > 0 else 0
		timePerRow = elapsed / self.i
		printStr = f"{self.i:,} - {progress:.2%} - elapsed: {formatTime(elapsed)} - remaining: {formatTime(remaining)} - {formatTime(timePerRow)}/row"
		self.maxLineLength = max(self.maxLineLength, len(printStr))
		printStr = printStr.ljust(self.maxLineLength)
		print(f"\r{printStr}", end=end)

		if timePerRow < 20/1000/1000:
			self.printEvery = 20_000
		elif timePerRow < 50/1000/1000:
			self.printEvery = 10_000
		else:
			self.printEvery = 5_000

def formatTime(seconds: float) -> str:
	if seconds == 0:
		return "0s"
	if seconds < 0.001:
		return f"{seconds * 1_000_000:.1f}µs"
	if seconds < 1:
		return f"{seconds * 1_000:.2f}ms"
	elapsedHr = int(seconds // 3600)
	elapsedMin = int((seconds % 3600) // 60)
	elapsedSec = int(seconds % 60)
	return f"{elapsedHr:02}:{elapsedMin:02}:{elapsedSec:02}"
