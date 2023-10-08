# Project Arctic Shift

Archiving Reddit for posterity.

## Downloads

### New dumps

Download new dumps from the [releases page](https://github.com/ArthurHeitmann/arctic_shift/releases).

### Old dumps

These dumps are available thanks to Pushshift.

- [2005-06 - 2022-12 (academic torrents)](https://academictorrents.com/details/7c0645c94321311bb05bd879ddee4d0eba08aaee)
- [2023-01 (academic torrents)](https://academictorrents.com/details/c861d265525c488a9439fb874bd9c3fc38dcdfa5)
- [2023-02 (academic torrents)](https://academictorrents.com/details/9971c68d2909843a100ae955c6ab6de3e09c04a1)
- [2023-03 (archive.org)](https://archive.org/details/pushshift-reddit-2023-03/)

## Usage

First download one more dumps from the above links.

Generally I'd recommend to work with the compressed files instead of unpacking them. Unless of course you have seemingly infinite disk space.

With the helper scripts in this repository you can quickly get started. If you don't want to use those files or want to use a CLI tool, head over to the [zst_blocks repository](https://github.com/ArthurHeitmann/zst_blocks_format).

For using the helper scripts:

(You need at least Python 3.10)

1. Clone this repository

```bash
git clone https://github.com/ArthurHeitmann/arctic_shift.git
```
```bash
git submodule update --init
```

2. Install the zstandard library

```bash
pip install zstandard
```

3. Open [scripts/processFiles.py](scripts/processFiles.py) in your editor. That script can process .zst_blocks, .zst and new line delimited .json files.

4. Enter the path to a file or folder in `fileOrFolderPath` (since it is a raw string, you don't have to escape backslashes). If you enter a folder, all files in that folder will be processed.

5. Add your code to the `processRow` function.

6. Run the file and be (very) patient.

## Contributing

If you have questions or want to help archive the data from April to June 2023, DM me on [reddit](https://reddit.com/user/RaiderBDev) or [discord](https://discord.com/users/282513022734565377). Alternatively you can open an issue or pull request.
