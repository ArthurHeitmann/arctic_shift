# Arctic Shift API

An API for querying reddit data.

Still work in progress. No uptime or performance guarantees :)

Base URL: https://arctic-shift.photon-reddit.com

Status page: https://status.arctic-shift.photon-reddit.com

## ID lookup

- `/api/posts/ids`
- `/api/comments/ids`
- Limit: 500
- Examples
	- [`/api/posts/ids?ids=ei30r4,eitwb3`](https://arctic-shift.photon-reddit.com/api/posts/ids?ids=ei30r4,eitwb3)

Retrieve things based on their ID

| Parameter | Type      | Default | Notes                                                            |
|-----------|-----------|---------|------------------------------------------------------------------|
| `ids`     | `ID[]`    |         | Comma separated list                                             |
| `md2html` | `boolean` | `false` | If `true`, adds auto generated `selftext_html`/`body_html` field |

## Search

- `/api/posts/search`
- `/api/comments/search`
- Examples:
	- [`/api/posts/search?sort=asc&after=2019-12-01&subreddit=worldnews&title=wuhan`](https://arctic-shift.photon-reddit.com/api/posts/search?sort=asc&after=2019-12-01&subreddit=worldnews&title=wuhan)

Search for posts or comments

Common parameters:

| Parameter   | Type            | Default | Notes                                                            |
|-------------|-----------------|---------|------------------------------------------------------------------|
| `author`    | `string`        |         |                                                                  |
| `subreddit` | `string`        |         |                                                                  |
| `after`     | `Date`          |         |                                                                  |
| `before`    | `Date`          |         |                                                                  |
| `limit`     | `int` (1 - 100) | 25      |                                                                  |
| `sort`      | `asc`\|`desc`   |         | Results are sorted by `created_utc`                              |
| `md2html`   | `boolean`       | `false` | If `true`, adds auto generated `selftext_html`/`body_html` field |

Post search parameters:

| Parameter  | Type                        | Default | Notes                                              |
|------------|-----------------------------|---------|----------------------------------------------------|
| `over_18`  | `boolean`                   |         |                                                    |
| `spoiler`  | `boolean`                   |         |                                                    |
| `selftext` | `string` (full text search) |         | Only in use with `author` or `subreddit` parameter |
| `title`    | `string` (full text search) |         | Only in use with `author` or `subreddit` parameter |

Comment search parameters:

| Parameter   | Type                        | Default | Notes                                                         |
|-------------|-----------------------------|---------|---------------------------------------------------------------|
| `body`      | `string` (full text search) |         | Only in use with `author`, `link_id` or `parent_id` parameter |
| `link_id`   | `ID`                        |         | ID of post                                                    |
| `parent_id` | `ID`\|`null`                |         | `null` means top level comment                                |

## Comments tree

- `/api/comments/tree`
- Examples
	- [`/api/comments/tree?link_id=t3_7cff0b&parent_id=t1_dppum98`](https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_7cff0b&parent_id=t1_dppum98)

Retrieve comments in a tree structure, similar to how they are displayed on reddit.

If `limit` is exceeded, comments are collapsed. Collapsed comments use `"kind": "more"` and have a `children` field
containing the IDs of the comments that are collapsed, the same way the reddit API does it. `start_breadth` and `start_depth`
decrease by 1 for each depth level. Comments outside the current breadth or depth are collapsed.

| Parameter       | Type         | Default | Notes                                            |
|-----------------|--------------|---------|--------------------------------------------------|
| `link_id`       | `ID`         |         | ID of post (required)                            |
| `parent_id`     | `ID`\| empty |         | empty means top level comment (`parent_id=`)     |
| `limit`         | `int` (>= 1) | 50      | Something like 999999 returns all comments       |
| `start_breadth` | `int` (>= 0) | 4       | For comment collapsing                           |
| `start_depth`   | `int` (>= 0) | 4       | For comment collapsing                           |
| `md2html`       | `boolean`    | `false` | If `true`, adds auto generated `body_html` field |

## Aggregations

- `/api/posts/search/aggregate`
- `/api/comments/search/aggregate`

Aggregate results based on date, author or subreddit.

All filtering related parameters from the search endpoints are supported.

| Parameter   | Type                                 | Default                                              | Notes                                 |
|-------------|--------------------------------------|------------------------------------------------------|---------------------------------------|
| `aggregate` | `created_utc`\|`author`\|`subreddit` |                                                      |                                       |
| `frequency` | `string` (interval)                  |                                                      | Required with `aggregate=created_utc` |
| `limit`     | `int` (>= 1) \| empty                | empty                                                | empty means no limit (`limit=`)       |
| `min_count` | `int` (>= 0)                         |                                                      |                                       |
| `sort`      | `asc`\|`desc`                        | `asc` with `aggregate=created_utc`, otherwise `desc` |                                       |

## User interactions data

### User to user interactions

- `/api/user_interactions/users`

Aggregates number of interactions between users.

- `/api/user_interactions/users/list`

Lists all individual interactions between users.

As an interactions counts:
- author commented under a post
- author commented under a comment
- someone replied to author's post
- someone replied to author's comment

| Parameter   | Type         | Default | Notes    |
|-------------|--------------|---------|----------|
| `author`    | `string`     |         | required |
| `subreddit` | `string`     |         |          |
| `after`     | `Date`       |         |          |
| `before`    | `Date`       |         |          |
| `limit`     | `int` (>= 1) |         |          |
| `min_count` | `int` (>= 0) |         |          |

### User to subreddit interactions

- `/api/user_interactions/subreddits`

## Data type notes

**ID**

Base 36 encoded number. Can optionally start with a t3_/t1_ prefix for posts/comments.
The ID is part of the link to a post/comment. (reddit.com/.../comments/<post_id>/.../<comment_id>).

Example valid IDs: `sphocx`, `t3_sphocx`, `dppum98`, `t1_dppum98`

**Date**

Dates can be specified in the following formats:

- Epoch time in seconds
- Epoch time in milliseconds
- ISO 8601 (partial)
	- `2020-01-01T00:00:00.000Z`
	- `2020-01-01 00:00:00`
	- `2020-01-01`
- Offset from current time (e.g. `1year`, `3m`, `2d`, `1hour`, `5min` or `10s`)

**Full text search**

For details, see [here](https://www.postgresql.org/docs/current/textsearch-controls.html), specifically the `websearch_to_tsquery` function.

But in short:
- `Word1 Word2` searches for `Word1` and `Word2`, regardless of order
- `"Word1 Word2"` searches for `Word1` followed by `Word2`, possibly with other words in between
- `Word1 OR Word2` searches for `Word1` or `Word2`
- `Word1 -Word2` searches for `Word1` but not `Word2`
