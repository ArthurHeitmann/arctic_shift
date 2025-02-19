interface Subreddit {
	_meta: {
		earliest_comment: null|number,
		earliest_post: number|null,
		num_comments: null|number,
		num_comments_updated_at: null|number,
		num_posts: number|null,
		num_posts_updated_at: number|null,
	},
	display_name: string,
	id: string,
}