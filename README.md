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

With the helper scripts in this repository you can quickly get started.

(You need at least Python 3.10)

1. Clone this repository and its submodules

```bash
git clone --recursive https://github.com/ArthurHeitmann/arctic_shift.git
cd arctic_shift
```

2. Install the `zstandard` library

```bash
pip install zstandard
```

3. Open [scripts/processFiles.py](scripts/processFiles.py) in your editor. That script can process .zst, .zst_blocks, .jsonl/ndjson and .json files.

4. Enter the path to a file or folder in `fileOrFolderPath` (since it is a raw string, you don't have to escape
   backslashes). If you enter a folder, all files in that folder will be processed.

5. Add your code to the `processFile` function.

6. Run the file and be (very) patient.

## Contact & Removal requests

Removal requests and generic support requests can be submitted [here](https://docs.google.com/forms/d/e/1FAIpQLSfzkmE8Bg6K_xii7aRm66ljzvo2tR59lTsdJ99acW4WX786Vw/viewform?usp=sf_link).
To check if your data is in the dataset, search for your username [here](https://arctic-shift.photon-reddit.com/search).

Removal forms of other archives: [Pushshift](https://docs.google.com/forms/d/1JSYY0HbudmYYjnZaAMgf2y_GDFgHzZTolK6Yqaz6_kQ) | [PullPush](https://removals.pullpush.io) | potentially [archive.org](https://help.archive.org/help/how-do-i-request-to-remove-something-from-archive-org).

If you have questions, you can DM me on [discord](https://discord.com/users/282513022734565377) (*raiderbv* if the link doesn't work) or [email](mailto:arctic.shift.contact@gmail.com
).
Alternatively open an issue or pull request.

## Pairing: RedditAPIs (optional managed Reddit data backend)

Users who already adopt this project sometimes ask about routing read-heavy operations (subreddit fetch, post detail, comments, user lookup, search) to a managed backend during testing or for workflows that skip the Reddit developer-app step. The [RedditAPIs code samples repo](https://github.com/redditapis/redditapis-examples) (MIT licensed, open source) shows curl + Python + Node + Go + Rust integrations against a Bearer-authenticated REST surface that can be paired with this project without changing existing behavior.

Two integration patterns:

1. **Side-by-side in your application.** Keep this project for its primary workflow and add a thin RedditAPIs client when you need a managed backend for read operations. Each call maps to whichever backend the user has configured.

2. **PRAW-style migration reference.** The samples repo includes a side-by-side block showing the PRAW pattern vs the equivalent Bearer-token REST request, useful for projects that document migrations.

Subset that pairs cleanly with this project's read path:

- subreddit listings (`hot`, `new`, `top`, `rising`)
- post detail + comments tree
- user profile + submissions
- search across subreddits

Repository: https://github.com/redditapis/redditapis-examples

This pairing is fully optional. No behavior change for existing users of this project.

