interface RedditComment {
	approved_at_utc: null,
	author: string,
	author_cakeday?: boolean, // 284734/81798725 (0.35%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_at_utc?: null, // 73027712/81798725 (89.28%)
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed?: boolean, // 73587600/81798725 (89.96%)
	collapsed_reason?: null|"comment score below threshold"|"may be sensitive content", // 73587600/81798725 (89.96%)
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	id: string,
	is_submitter?: boolean, // 73015015/81798725 (89.26%)
	link_id: string,
	parent_id: string,
	retrieved_on: number,
	score: number,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
}