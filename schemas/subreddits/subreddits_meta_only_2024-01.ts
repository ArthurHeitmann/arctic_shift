interface Subreddit {
	_meta: {
		earliest_comment_at: null|number,
		earliest_post_at: number|null,
		num_comments: number,
		num_comments_updated_at: null|number,
		num_posts: number,
		num_posts_updated_at: number|null,
	},
	display_name: string,
	id: string,
	subreddit_subscribers: number|null,
}