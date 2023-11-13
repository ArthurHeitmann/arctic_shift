# Arctic Shift API

An API for querying reddit data.

Still work in progress. No uptime or performance guarantees :)

Base URL: https://arctic-shift.photon-reddit.com

Status page: https://status.arctic-shift.photon-reddit.com

## ID lookup

- Endpoints:
	- `/api/posts/ids`
	- `/api/comments/ids`
- Limit: 500

Retrieve things based on their ID

| Parameter | Type      | Default | Notes                                                            |
|-----------|-----------|---------|------------------------------------------------------------------|
| `ids`     | `ID[]`    |         |                                                                  |
| `md2html` | `boolean` | `false` | If `true`, adds auto generated `selftext_html`/`body_html` field |

## Search

- Endpoints:
	- `/api/posts/search`
	- `/api/comments/search`

Search for posts or comments

Common parameters:

| Parameter   | Type            | Default | Notes                                                            |
|-------------|-----------------|---------|------------------------------------------------------------------|
| `author`    | `string`        |         |                                                                  |
| `subreddit` | `string`        |         |                                                                  |
| `before`    | `Date`          |         |                                                                  |
| `after`     | `Date`          |         |                                                                  |
| `limit`     | `int` (1 - 100) | 25      |                                                                  |
| `sort`      | `asc`\|`desc`   |         | Results are sorted by `created_utc`                              |
| `md2html`   | `boolean`       | `false` | If `true`, adds auto generated `selftext_html`/`body_html` field |

Post search parameters:

| Parameter  | Type                        | Default | Notes                                             |
|------------|-----------------------------|---------|---------------------------------------------------|
| `over_18`  | `boolean`                   |         |                                                   |
| `spoiler`  | `boolean`                   |         |                                                   |
| `selftext` | `string` (full text search) |         | Only works with `author` or `subreddit` parameter |
| `title`    | `string` (full text search) |         | Only works with `author` or `subreddit` parameter |

Comment search parameters:

| Parameter   | Type                        | Default | Notes                              |
|-------------|-----------------------------|---------|------------------------------------|
| `body`      | `string` (full text search) |         | Only works with `author` parameter |
| `link_id`   | `ID`                        |         | ID of post                         |
| `parent_id` | `ID`\|`null`                |         | `null` means top level comment     |

## Comments tree

- Endpoints:
	- `/api/comments/tree`

Retrieve comments in a tree structure, similar to how they are displayed on reddit.

If `limit` is exceeded, comments are collapsed. Collapsed comments use `"kind": "more"` and have a `children` field
containing the IDs of the comments that are collapsed, the same way the reddit API does it. `start_breadth` and `start_depth`
decrease by 1 for each depth level. Comments outside the current breadth or depth are collapsed.

| Parameter       | Type         | Default | Notes                                                            |
|-----------------|--------------|---------|------------------------------------------------------------------|
| `link_id`       | `ID`         |         | ID of post (required)                                            |
| `parent_id`     | `ID`\|`null` |         | `null` means top level comment                                   |
| `limit`         | `int` (>= 1) | 50      | Something like 999999 returns all comments                       |
| `start_breadth` | `int` (>= 0) | 4       | For comment collapsing                                           |
| `start_depth`   | `int` (>= 0) | 4       | For comment collapsing                                           |
| `md2html`       | `boolean`    | `false` | If `true`, adds auto generated `body_html` field                 |

## Aggregations

- Endpoints:
	- `/api/posts/search/aggregate`
	- `/api/comments/search/aggregate`

Aggregate results based on date, author or subreddit.

All filtering related parameters from the search endpoints are supported.

| Parameter   | Type                                 | Default                                              | Notes                                      |
|-------------|--------------------------------------|------------------------------------------------------|--------------------------------------------|
| `aggregate` | `created_utc`\|`author`\|`subreddit` |                                                      |                                            |
| `frequency` | `string` (interval)                  |                                                      | Required with `aggregate=created_utc`      |
| `limit`     | `int` (>= 1)                         | 50                                                   | Something like 999999 returns all comments |
| `min_count` | `int` (>= 0)                         |                                                      |                                            |
| `sort`      | `asc`\|`desc`                        | `asc` with `aggregate=created_utc`, otherwise `desc` |                                            |
|             |                                      |                                                      |                                            |

## User interactions data

TODO

- Endpoints:
	- `/api/user_interactions/...`

## Data type notes

TODO
