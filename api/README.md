# Arctic Shift API

An API for querying reddit data.

Still work in progress. No uptime or performance guarantees :)

Base URL: https://arctic-shift.photon-reddit.com

Status page: https://status.arctic-shift.photon-reddit.com

Search UI: https://arctic-shift.photon-reddit.com/search

## ID lookup

- `/api/posts/ids`
- `/api/comments/ids`
- Limit: 500 IDs
- Examples
	- Retrieve 2 posts with the IDs ei30r4 and eitwb3  
	  [`/api/posts/ids?ids=ei30r4,eitwb3`](https://arctic-shift.photon-reddit.com/api/posts/ids?ids=ei30r4,eitwb3)

Retrieve things based on their ID

| Parameter | Type      | Default | Notes                                                            |
|-----------|-----------|---------|------------------------------------------------------------------|
| `ids`     | `ID[]`    |         | Comma separated list                                             |
| `md2html` | `boolean` | `false` | If `true`, adds auto generated `selftext_html`/`body_html` field |

## Search

- `/api/posts/search`
- `/api/comments/search`
- Examples:
	- Search in r/worldnews for 10 posts with "wuhan" in the title, starting from December 2019  
	  [`/api/posts/search?sort=asc&after=2019-12-01&subreddit=worldnews&title=wuhan&limit=10`](https://arctic-shift.photon-reddit.com/api/posts/search?sort=asc&after=2019-12-01&subreddit=worldnews&title=wuhan&limit=10)
	- Search for up to 100 comments from u/PresidentObama under the post z1c9z  
	  [`/api/comments/search?author=PresidentObama&link_id=z1c9z&limit=100`](https://arctic-shift.photon-reddit.com/api/comments/search?author=PresidentObama&link_id=z1c9z&limit=100)

Search for posts or comments

Common parameters:

| Parameter   | Type            | Default | Notes                                                            |
|-------------|-----------------|---------|------------------------------------------------------------------|
| `author`    | `string`        |         |                                                                  |
| `subreddit` | `string`        |         |                                                                  |
| `after`     | `Date`          |         |                                                                  |
| `before`    | `Date`          |         |                                                                  |
| `limit`     | `int` (1 - 100) | 25      |                                                                  |
| `sort`      | `asc` \| `desc` |         | Results are sorted by `created_utc`                              |
| `md2html`   | `boolean`       | `false` | If `true`, adds auto generated `selftext_html`/`body_html` field |

Post search parameters:

| Parameter  | Type      | Default | Notes                                                                 |
|------------|-----------|---------|-----------------------------------------------------------------------|
| `over_18`  | `boolean` |         |                                                                       |
| `spoiler`  | `boolean` |         |                                                                       |
| `selftext` | `string`  |         | (full text search) Only in use with `author` or `subreddit` parameter |
| `title`    | `string`  |         | (full text search) Only in use with `author` or `subreddit` parameter |
| `url`      | `string`  |         | (exact match)                                                         |

Comment search parameters:

| Parameter   | Type                        | Default | Notes                                                         |
|-------------|-----------------------------|---------|---------------------------------------------------------------|
| `body`      | `string` (full text search) |         | Only in use with `author`, `link_id` or `parent_id` parameter |
| `link_id`   | `ID`                        |         | ID of post                                                    |
| `parent_id` | `ID` \| empty               |         | empty means top level comment                                 |

## Comments tree

- `/api/comments/tree`
- Examples
	- Get a comment tree for the post t3_7cff0b, with t1_dppum98 as the top level comment, and generate HTML for the body
	  [`/api/comments/tree?link_id=t3_7cff0b&parent_id=t1_dppum98&md2html=true`](https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_7cff0b&parent_id=t1_dppum98&md2html=true)
	- Get all comments underneath the post x8i09x  
	  [`/api/comments/tree?link_id=t3_x8i09x&limit=9999`](https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_x8i09x&limit=9999)

Retrieve comments in a tree structure, similar to how they are displayed on reddit.

If `limit` is exceeded, comments are collapsed. Collapsed comments use `"kind": "more"` and have a `children` field
containing the IDs of the comments that are collapsed, the same way the reddit API does it. `start_breadth` and `start_depth`
decrease by 1 for each depth level. Comments outside the current breadth or depth are collapsed.

| Parameter       | Type          | Default | Notes                                              |
|-----------------|---------------|---------|----------------------------------------------------|
| `link_id`       | `ID`          |         | ID of post (required)                              |
| `parent_id`     | `ID`          |         | If unset, all comments under the post are returned |
| `limit`         | `int` (>= 1)  | 50      | Something like 999999 returns all comments         |
| `start_breadth` | `int` (>= 0)  | 4       | For comment collapsing                             |
| `start_depth`   | `int` (>= 0)  | 4       | For comment collapsing                             |
| `md2html`       | `boolean`     | `false` | If `true`, adds auto generated `body_html` field   |

## Aggregations

- `/api/posts/search/aggregate`
- `/api/comments/search/aggregate`
- Examples
	- Comment frequency of u/spez since 2006  
	  [`/api/comments/search/aggregate?aggregate=created_utc&frequency=year&author=spez&after=2006-01-01`](https://arctic-shift.photon-reddit.com/api/comments/search/aggregate?aggregate=created_utc&frequency=year&author=spez&after=2006-01-01)
	- Most active posters in r/announcements  
	  [`/api/posts/search/aggregate?aggregate=author&subreddit=announcements`](https://arctic-shift.photon-reddit.com/api/posts/search/aggregate?aggregate=author&subreddit=announcements)

Aggregate results based on date, author or subreddit.

All filtering related parameters from the search endpoints are supported.

| Parameter   | Type                                     | Default                                              | Notes                                 |
|-------------|------------------------------------------|------------------------------------------------------|---------------------------------------|
| `aggregate` | `created_utc` \| `author` \| `subreddit` |                                                      |                                       |
| `frequency` | `string` (interval)                      |                                                      | Required with `aggregate=created_utc` |
| `limit`     | `int` (>= 1) \| empty                    | empty                                                | empty means no limit (`limit=`)       |
| `min_count` | `int` (>= 0)                             |                                                      | Not used with `aggregate=created_utc` |
| `sort`      | `asc` \| `desc`                          | `asc` with `aggregate=created_utc`, otherwise `desc` |                                       |

## User interactions data

Note: For very active users (especially bots), this has a high chance of timing out. In that case, try narrowing the time range using the `after` and `before` parameters.

### User to user interactions

- `/api/user_interactions/users`
- Example:
	- Get all interactions of u/spez, with more than 10 interactions, up until 2017
	  [`/api/user_interactions/users?author=spez&before=2017-01-01&min_count=10`](https://arctic-shift.photon-reddit.com/api/user_interactions/users?author=spez&before=2017-01-01&min_count=10)

Aggregates number of interactions between users.

- `/api/user_interactions/users/list`

Lists all individual interactions between users.

As an interactions counts:
- author commented under a post
- author commented under a comment
- someone replied to author's post
- someone replied to author's comment

| Parameter   | Type                  | Default | Notes                           |
|-------------|-----------------------|---------|---------------------------------|
| `author`    | `string`              |         | required                        |
| `subreddit` | `string`              |         |                                 |
| `after`     | `Date`                |         |                                 |
| `before`    | `Date`                |         |                                 |
| `min_count` | `int` (>= 0)          |         | Minimum number of interactions  |
| `limit`     | `int` (>= 1) \| empty | 100     | empty means no limit (`limit=`) |

### User to subreddit interactions

- `/api/user_interactions/subreddits`

See in which subreddits a user has been active. Similar to the above `/api/posts/search/aggregate`
and `/api/comments/search/aggregate` endpoints, but both are combined into one, with weighting and
limiting options.

| Parameter         | Type                  | Default | Notes                           |
|-------------------|-----------------------|---------|---------------------------------|
| `author`          | `string`              |         | required                        |
| `weight_posts`    | `float`               | 1.0     |                                 |
| `weight_comments` | `float`               | 1.0     |                                 |
| `before`          | `Date`                |         |                                 |
| `after`           | `Date`                |         |                                 |
| `min_count`       | `int` (>= 0)          |         | Minimum number of interactions  |
| `limit`           | `int` (>= 1) \| empty | 100     | empty means no limit (`limit=`) |

## Data type notes

**Boolean**

True values: `true`, `1`, `yes`, `y`  
False values: `false`, `0`, `no`, `n`

**ID**

Base 36 encoded number. Can optionally start with a t3_/t1_ prefix for posts/comments.
The ID is part of the link to a post/comment. (reddit.com/.../comments/<post_id>/.../<comment_id>).

Example valid IDs: `sphocx`, `t3_sphocx`, `dppum98`, `t1_dppum98`

**Author and subreddit**

If you include the `u/` or `r/` prefix, it will be ignored.

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

## Other notes

**Query timeout**

If you receive the message `"Query timed out"`, you probably used a parameter combination that I haven't optimized.
Try reducing the `limit` parameter or use a more specific filter (`after`, `before`, `subreddit`, `author`).

This usually happens with `body`, `selftext` or `title` parameters.

Sometimes the database needs to warm up, so if you try again a second time, it might work.

**Upvotes count and number of comments**

The upvotes count and number of comments have usually not been updated since the post was created. This is because
the post/comment was archived shortly after creation, and has not been updated since.
