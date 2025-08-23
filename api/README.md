# Arctic Shift API

<!-- TOC -->

- [Arctic Shift API](#arctic-shift-api)
	- [ID lookup](#id-lookup)
	- [Posts and comments](#posts-and-comments)
		- [Search](#search)
		- [Comments tree](#comments-tree)
		- [Aggregations](#aggregations)
	- [Subreddits](#subreddits)
		- [Search](#search-1)
		- [Rules](#rules)
		- [Wikis](#wikis)
	- [Users](#users)
		- [Search](#search-2)
		- [Interactions](#interactions)
			- [User to user interactions](#user-to-user-interactions)
			- [User to subreddit interactions](#user-to-subreddit-interactions)
		- [Aggregate flairs](#aggregate-flairs)
	- [Short links](#short-links)
	- [Time series](#time-series)
	- [Data type notes](#data-type-notes)
	- [Other notes](#other-notes)

<!-- /TOC -->

An API for querying reddit data.

No uptime or performance guarantees :)

Base URL: https://arctic-shift.photon-reddit.com

Status page: https://status.arctic-shift.photon-reddit.com

Search UI: https://arctic-shift.photon-reddit.com/search

## ID lookup
- `/api/posts/ids`
- `/api/comments/ids`
- `/api/subreddits/ids`
- `/api/users/ids` ([see notes](#search-2))
- Examples
	- Retrieve 2 posts with the IDs ei30r4 and eitwb3  
	  [`/api/posts/ids?ids=ei30r4,eitwb3`](https://arctic-shift.photon-reddit.com/api/posts/ids?ids=ei30r4,eitwb3)

Retrieve things based on their ID

| Parameter | Type      | Default | Notes                                                                      |
|-----------|-----------|---------|----------------------------------------------------------------------------|
| `ids`     | `ID[]`    |         | Comma separated list. Limit: 500                                           |
| `md2html` | `boolean` | `false` | If `true`, adds auto generated `selftext_html`/`body_html` field           |
| `fields`  | `string`  |         | Comma separated list of fields to return ([more info](#selectable-fields)) |

## Posts and comments

### Search

- `/api/posts/search`
- `/api/comments/search`
- Examples:
	- Search in r/worldnews for 10 posts with "wuhan" in the title, posted after 2019-12-30, sorted by ascending date  
	  [`/api/posts/search?sort=asc&after=2019-12-30&subreddit=worldnews&title=wuhan&limit=10`](https://arctic-shift.photon-reddit.com/api/posts/search?sort=asc&after=2019-12-30&subreddit=worldnews&title=wuhan&limit=10)
	- Search for up to 100 comments from u/PresidentObama under the post z1c9z  
	  [`/api/comments/search?author=PresidentObama&link_id=z1c9z&limit=100`](https://arctic-shift.photon-reddit.com/api/comments/search?author=PresidentObama&link_id=z1c9z&limit=100)

Common parameters:

| Parameter           | Type                        | Default | Notes                                                                                            |
|---------------------|-----------------------------|---------|--------------------------------------------------------------------------------------------------|
| `author`            | `string`                    |         |                                                                                                  |
| `subreddit`         | `string`                    |         |                                                                                                  |
| `author_flair_text` | `string`                    |         | (full text search) for limitations see `title` or `body` below                                   |
| `after`             | `Date`                      |         | Time when thing was posted                                                                       |
| `before`            | `Date`                      |         | Time when thing was posted                                                                       |
| `limit`             | `int` (1 - 100) \| `"auto"` | 25      | With `"auto"` between 100 and 1000 results are returned, depending on the capacity of the server |
| `sort`              | `asc` \| `desc`             |         | Results are sorted by `created_utc`                                                              |
| `md2html`           | `boolean`                   | `false` | If `true`, adds auto generated `selftext_html`/`body_html` field                                 |
| `fields`            | `string`                    |         | Comma separated list of fields to return ([more info](#selectable-fields))                       |

Post search parameters:

| Parameter             | Type      | Default | Notes                                                                                                                                      |
|-----------------------|-----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `crosspost_parent_id` | `ID`      |         |                                                                                                                                            |
| `over_18`             | `boolean` |         |                                                                                                                                            |
| `spoiler`             | `boolean` |         |                                                                                                                                            |
| `title`               | `string`  |         | (full text search) Only in use with `author` or `subreddit` parameter (not supported with very active users or subreddits)                 |
| `selftext`            | `string`  |         | (full text search) ...                                                                                                                     |
| `link_flair_text`     | `string`  |         | (full text search) ...                                                                                                                     |
| `query`               | `string`  |         | Search in both `title` and `selftext` (full text search) ...                                                                               |
| `url`                 | `string`  |         | prefix match, example: https://www.youtube.com/xyz will return https://www.youtube.com/xyz?p=abc or also https://www.youtube.com/xyz?t=15s |
| `url_exact`           | `boolean` | `false` | if `true`, `url` queries will only return exact matches                                                                                    |

Comment search parameters:

| Parameter   | Type                        | Default | Notes                                                                                                                           |
|-------------|-----------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------|
| `body`      | `string` (full text search) |         | Only in use with `author`, `subreddit`, `link_id` or `parent_id` parameter (not supported with very active users or subreddits) |
| `link_id`   | `ID`                        |         | ID of post                                                                                                                      |
| `parent_id` | `ID` \| empty               |         | Parent comment id. Empty means top level comment                                                                                |

### Comments tree

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
| `limit`         | `int` (1 - 25000)  | 50      | Something like 9999 returns all comments         |
| `start_breadth` | `int` (>= 0)  | 4       | For comment collapsing                             |
| `start_depth`   | `int` (>= 0)  | 4       | For comment collapsing                             |
| `md2html`       | `boolean`     | `false` | If `true`, adds auto generated `body_html` field   |

### Aggregations

- `/api/posts/search/aggregate`
- `/api/comments/search/aggregate`
- Examples
	- Comment frequency of u/spez since 2006  
	  [`/api/comments/search/aggregate?aggregate=created_utc&frequency=year&author=spez&after=2006-01-01`](https://arctic-shift.photon-reddit.com/api/comments/search/aggregate?aggregate=created_utc&frequency=year&author=spez&after=2006-01-01)
	- Most active posters in r/announcements  
	  [`/api/posts/search/aggregate?aggregate=author&subreddit=announcements`](https://arctic-shift.photon-reddit.com/api/posts/search/aggregate?aggregate=author&subreddit=announcements)

Aggregate results based on date, author or subreddit.

All filtering related parameters from the search endpoints are supported.

Very active users or subreddits have a high chance of timing out.

| Parameter   | Type                                     | Default                                              | Notes                                 |
|-------------|------------------------------------------|------------------------------------------------------|---------------------------------------|
| `aggregate` | `created_utc` \| `author` \| `subreddit` |                                                      |                                       |
| `frequency` | `string` (interval)                      |                                                      | Required with `aggregate=created_utc` |
| `limit`     | `int` (>= 1) \| empty                    | empty                                                | empty means no limit (`limit=`)       |
| `min_count` | `int` (>= 0)                             |                                                      | Not used with `aggregate=created_utc` |
| `sort`      | `asc` \| `desc`                          | `asc` with `aggregate=created_utc`, otherwise `desc` |                                       |

## Subreddits

### Search

- `/api/subreddits/search`
- Examples:
	- Search for subreddits starting with "r/ask" sorted by number of subscribers (default)  
	  [`/api/subreddits/search?subreddit_prefix=ask`](https://arctic-shift.photon-reddit.com/api/subreddits/search?subreddit_prefix=ask)
	- Search for oldest subreddits with more that 1000 subscribers  
	  [`/api/subreddits/search?min_subscribers=1000&sort_type=created_utc&sort=asc`](https://arctic-shift.photon-reddit.com/api/subreddits/search?min_subscribers=1000&sort_type=created_utc&sort=asc)

Note: List of subreddits and their data is only updated infrequently. Aggregate `_meta` data is updated more frequently.

| Parameter          | Type                                          | Default       | Note                                                                       |
|--------------------|-----------------------------------------------|---------------|----------------------------------------------------------------------------|
| `subreddit`        | `string`                                      |               |                                                                            |
| `subreddit_prefix` | `string`                                      |               |                                                                            |
| `after`            | `Date`                                        |               | Subreddit creation date                                                    |
| `before`           | `Date`                                        |               | Subreddit creation date                                                    |
| `min_subscribers`  | `int`                                         |               |                                                                            |
| `max_subscribers`  | `int`                                         |               |                                                                            |
| `over18`           | `boolean`                                     |               | nsfw                                                                       |
| `limit`            | `int` (1 - 1000)                              | 25            |                                                                            |
| `sort`             | `asc` \| `desc`                               | `desc`        |                                                                            |
| `sort_type`        | `created_utc` \| `subscribers` \| `subreddit` | `subscribers` |                                                                            |
| `fields`           |                                               |               | Comma separated list of fields to return ([more info](#selectable-fields)) |

### Rules

- `/api/subreddits/rules`
- Examples:
	- Get the rules of r/askreddit and r/politics  
	  [`/api/subreddits/rules?subreddits=askreddit,politics`](https://arctic-shift.photon-reddit.com/api/subreddits/rules?subreddits=askreddit,politics)

Retrieve the rules of a subreddit.

| Parameter    | Type       | Default | Notes                                                |
|--------------|------------|---------|------------------------------------------------------|
| `subreddits` | `string[]` |         | Comma separated list of subreddit names. Limit: 1000 |

### Wikis

- `/api/subreddits/wikis`
- Examples:
	- Get the wiki pages of r/askreddit  
	  [`/api/subreddits/wikis?subreddit=askreddit`](https://arctic-shift.photon-reddit.com/api/subreddits/wikis?subreddit=askreddit)
	- Get multiple wiki pages  
	  [`/api/subreddits/wikis?paths=/r/reddit.com/wiki/faq,/r/travel/wiki/faq`](https://arctic-shift.photon-reddit.com/api/subreddits/wikis?paths=/r/reddit.com/wiki/faq,/r/travel/wiki/faq)

Retrieve the wiki pages of a subreddit.

| Parameter   | Type       | Default | Notes                                                          |
|-------------|------------|---------|----------------------------------------------------------------|
| `paths`     | `string[]` |         | Comma separated list of wiki pages. Limit: 100                 |
| `subreddit` | `string`   |         | Return all wiki pages of a subreddit         		           |
| `limit`     | `int`      | 100     | Number of wiki pages to return. Max: 100                        |

- `/api/subreddits/wikis/list`
- Examples:
	- Get all wiki page paths of r/askreddit  
	  [`/api/subreddits/wikis/list?subreddit=askreddit`](https://arctic-shift.photon-reddit.com/api/subreddits/wikis/list?subreddit=askreddit)

Retrieve the paths of all wiki pages of a subreddit.

| Parameter   | Type     | Default | Notes                                |
|-------------|----------|---------|--------------------------------------|
| `subreddit` | `string` |         | Return all wiki pages of a subreddit |

## Users

### Search

- `/api/users/search`
- Examples:
	- Search for users with the most karma  
	  [`/api/users/search?sort_type=total_karma`](https://arctic-shift.photon-reddit.com/api/users/search?sort_type=total_karma)
	- Search for users starting with u/mod with at least 1000 comments sorted alphabetically  
	  [`/api/users/search?author_prefix=mod&min_num_comments=1000&sort_type=author&sort=asc`](https://arctic-shift.photon-reddit.com/api/users/search?author_prefix=mod&min_num_comments=1000&sort_type=author&sort=asc)

Note: This is endpoint only contains aggregate data of user names, ids, number of posts/comments, earliest/latest posts/comments, karma, etc.
It is only updated infrequently. `_meta` data is updated more frequently.
Ids might be `null` if the user hasn't been active in recent years.

| Parameter          | Type                      | Default       | Note                                    |
|--------------------|---------------------------|---------------|-----------------------------------------|
| `author`           | `string`                  |               |                                         |
| `author_prefix`    | `string`                  |               |                                         |
| `min_num_posts`    | `int`                     |               |                                         |
| `min_num_comments` | `int`                     |               |                                         |
| `active_since`     | `Date`                    |               | Date of first post or comment           |
| `min_karma`        | `int`                     |               |                                         |
| `limit`            | `int` (1 - 1000)          | 25            |                                         |
| `sort`             | `asc` \| `desc`           | `desc`        |                                         |
| `sort_type`        | `author` \| `total_karma` | `total_karma` | Karma is the sum of post/comment scores |

### Interactions

Note: For very active users (especially bots), this has a high chance of timing out. In that case, try narrowing the time range using the `after` and `before` parameters.

#### User to user interactions

- `/api/users/interactions/users`
- Example:
	- Get all interactions of u/spez, with more than 10 interactions, up until 2017  
	  [`/api/users/interactions/users?author=spez&before=2017-01-01&min_count=10`](https://arctic-shift.photon-reddit.com/api/users/interactions/users?author=spez&before=2017-01-01&min_count=10)

Aggregates number of interactions between users.

- `/api/users/interactions/users/list`

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

#### User to subreddit interactions

- `/api/users/interactions/subreddits`

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

### Aggregate flairs

- `/api/users/aggregate_flairs`
- Examples:
	- [`/api/users/aggregate_flairs?author=spez`](https://arctic-shift.photon-reddit.com/api/users/aggregate_flairs?author=spez)

Aggregates all `author_flair_text` values of a user and groups them by subreddit.

| Parameter | Type     | Default | Notes    |
|-----------|----------|---------|----------|
| `author`  | `string` |         | required |

## Short links

- `/api/short_links`
- Examples:
	- Get the full link of a short link  
	  [`/api/short_links?paths=/r/running/s/3TzXiyxaMD,/u/CEO_Gola/s/WO7Ro11h1a`](https://arctic-shift.photon-reddit.com/api/short_links?paths=/r/running/s/3TzXiyxaMD,/u/CEO_Gola/s/WO7Ro11h1a)

Retrieve the full link of a short link.

| Parameter | Type       | Default | Notes                                                     |
|-----------|------------|---------|-----------------------------------------------------------|
| `paths`   | `string[]` |         | Comma separated list of paths (case sensitive). Max: 1000 |

## Time series

- `/api/time_series`
- Examples
	- Get number of posts per year  
	  [`/api/time_series?key=global/posts/count&precision=year`](https://arctic-shift.photon-reddit.com/api/time_series?key=global/posts/count&precision=year)
	- Get subscribers of r/askreddit per year  
	  [`/api/time_series?key=r/askreddit/subscribers&precision=year`](https://arctic-shift.photon-reddit.com/api/time_series?key=r/askreddit/subscribers&precision=year)

Retrieve aggregated data over time. Data might not be 100% accurate, and might take a few hours or days to fully update.

| Parameter   | Type       | Default | Notes                                                              |
|-------------|------------|---------|--------------------------------------------------------------------|
| `key`       | `string`   |         | Time series type or category. See below for available values       |
| `precision` | `string`   |         | One of `year`, `quarter`, `month`, `week`, `day`, `hour`, `minute` |
| `after`     | `Date`     |         | Start date. If not set, the earliest date of the data is used      |
| `before`    | `Date`     |         | End date. If not set, the latest date of the data is used          |

Available keys:
- `global/posts/count`, `global/comments/count` - Number of posts and comments across all of reddit
- `global/posts/sum_score`, `global/comments/sum_score` - Sum of all upvotes
- `global/posts/sum_retrieved_after_seconds`, `global/comments/sum_retrieved_after_seconds` - Sum of the time between the creation of post/comment and the time it was archived
- `r/<subreddit>/posts/count`, `r/<subreddit>/comments/count` - Number of posts and comments in a subreddit
- `r/<subreddit>/posts/sum_score`, `r/<subreddit>/comments/sum_score` - Sum of all upvotes in a subreddit
- `r/<subreddit>/subscribers` - Number of subscribers in a subreddit

## Data type notes

### **Selectable fields**

By only selecting the fields you need, you can potentially reduce the response time and size.

Both posts & comments: `author`, `author_fullname`, `author_flair_text`, `created_utc`, `distinguished`, `id`, `retrieved_on`, `subreddit`, `subreddit_id`, `score`  
Posts: `crosspost_parent`, `link_flair_text`, `num_comments`, `over_18`, `post_hint`, `selftext`, `spoiler`, `title`, `url`  
Comments: `body`, `link_id`, `parent_id`  
Subreddits: `created_utc`, `description`, `public_description`, `display_name`, `id`, `over18`, `retrieved_on`, `subscribers`, `title`, (and _meta fields)

### **Boolean**

True values: `true`, `1`, `yes`, `y`  
False values: `false`, `0`, `no`, `n`

### **ID**

Base 36 encoded number. Can optionally start with a t3_/t1_ prefix for posts/comments.
The ID is part of the link to a post/comment. (reddit.com/.../comments/<post_id>/.../<comment_id>).

Example valid IDs: `sphocx`, `t3_sphocx`, `dppum98`, `t1_dppum98`

### **Author and subreddit**

If you include the `u/` or `r/` prefix, it will be ignored.

### **Date**

Dates can be specified in the following formats:

- Epoch time in seconds
- Epoch time in milliseconds
- ISO 8601 (partial)
	- `2020-01-01T00:00:00.000Z`
	- `2020-01-01 00:00:00`
	- `2020-01-01`
- Offset from current time (e.g. `1year`, `3m`, `2d`, `1hour`, `5min` or `10s`)

### **Full text search**

For details, see [here](https://www.postgresql.org/docs/current/textsearch-controls.html), specifically the `websearch_to_tsquery` function.

But in short:
- `Word1 Word2` searches for `Word1` and `Word2`, regardless of order
- `"Word1 Word2"` searches for `Word1` followed by `Word2`, possibly with other words in between
- `Word1 OR Word2` searches for `Word1` or `Word2`
- `Word1 -Word2` searches for `Word1` but not `Word2`

## Other notes

### **Rate limiting**

If you're a normal user and only make a couple requests per second, you have nothing to worry about.

But if you make excessive requests, you might get rate limited. Look at the `X-RateLimit-Remaining` header to see how many request are remaining. `X-RateLimit-Reset` shows when the rate limit is reset. Rate limits can change at any time.

Remember, this is a free service, so be considerate. If you want to process massive amounts of data, use the monthly dumps instead.

### **Query timeout**

If you receive the message `"Query timed out"`, you probably used a parameter combination that I haven't optimized.
Try reducing the `limit` parameter or use a more specific filter (`after`, `before`, `subreddit`, `author`).

This usually happens with `body`, `selftext` or `title` parameters.

Sometimes the database needs to warm up, so if you try again a second time, it might work.

### **Upvotes count and number of comments**

After roughly 36 hours, all data is updated and should then be the same as that released in .zst dumps.
Before that, `score`, `num_comments`, etc. will be 1 or 0, since data is archived initially the moment it was posted.
