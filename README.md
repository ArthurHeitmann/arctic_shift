# Project Arctic Shift

Making Reddit data accessible to researchers, moderators and everyone else.

Interact with the data through large dumps, an API or web interface.

## Downloads


All download links are organized [here](./download_links.md). Once a new dump is available, it will
also be added on the [releases page](https://github.com/ArthurHeitmann/arctic_shift/releases).

Alternatively for downloading data of users or smaller subreddits, you can use [this tool](https://arctic-shift.photon-reddit.com/download-tool).

For information on how the data was collected and modified, see [here](./file_content_explanations.md).

## API

Depending on your use case, you can try my (limited) [API](./api). For manual queries, you can use [this tool](https://arctic-shift.photon-reddit.com/search).

## Usage

First download one more dumps from the above links.

Generally I'd recommend to work with the compressed files instead of unpacking them. Unless of
course you have seemingly infinite disk space.

With the helper scripts in this repository you can quickly get started. If you don't want to
use those files or want to use a CLI tool, head over to the [zst_blocks repository](https://github.com/ArthurHeitmann/zst_blocks_format) for processing .zst_blocks files.

For using the helper scripts:

(You need at least Python 3.10)

1. Clone this repository and its submodules

```bash
git clone https://github.com/ArthurHeitmann/arctic_shift.git
cd arctic_shift
git submodule update --init
```
or
```bash
git clone --recursive https://github.com/ArthurHeitmann/arctic_shift.git
```

2. Install the zstandard library

```bash
pip install zstandard
```

3. Open [scripts/processFiles.py](scripts/processFiles.py) in your editor. That script can process .zst_blocks,
   .zst and new line delimited .json files.

4. Enter the path to a file or folder in `fileOrFolderPath` (since it is a raw string, you don't have to escape
   backslashes). If you enter a folder, all files in that folder will be processed.

5. Add your code to the `processRow` function.

6. Run the file and be (very) patient.

## Contact & Removal requests

Removal requests and generic support requests can be submitted [here](https://docs.google.com/forms/d/e/1FAIpQLSfzkmE8Bg6K_xii7aRm66ljzvo2tR59lTsdJ99acW4WX786Vw/viewform?usp=sf_link).
To check if your data is in the dataset, search for your username [here](https://arctic-shift.photon-reddit.com/search).

Removal forms of other archives: [Pushshift](https://docs.google.com/forms/d/1JSYY0HbudmYYjnZaAMgf2y_GDFgHzZTolK6Yqaz6_kQ) | [PullPush](https://removals.pullpush.io) | potentially [archive.org](https://help.archive.org/help/how-do-i-request-to-remove-something-from-archive-org/#:~:text=If%20you%20would%20like%20to%20submit%20a%20request%20for%20archives,you%20wish%20to%20have%20excluded).

If you have questions, you can DM me on [reddit](https://reddit.com/user/RaiderBDev), [discord](https://discord.com/users/282513022734565377) (*raiderbv* if the link doesn't work) or [email](mailto:arctic.shift.contact@gmail.com
).
Alternatively open an issue or pull request.
