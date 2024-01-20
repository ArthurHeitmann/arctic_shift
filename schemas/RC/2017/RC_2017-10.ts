interface RedditComment {
	author: string,
	author_cakeday?: boolean, // 285279/85828912 (0.33%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	body: string,
	can_gild?: boolean, // 85718899/85828912 (99.87%)
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	id: string,
	is_submitter: boolean,
	link_id: string,
	parent_id: string,
	permalink?: string, // 85759581/85828912 (99.92%)
	permalink_url?: string, // 1388/85828912 (0.00%)
	retrieved_on: number,
	score: number|null,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
}