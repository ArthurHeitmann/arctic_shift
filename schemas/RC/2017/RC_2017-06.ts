interface RedditComment {
	approved_at_utc?: null, // 9147524/79901711 (11.45%)
	author: string,
	author_cakeday?: boolean, // 265710/79901711 (0.33%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	body: string,
	can_gild: boolean,
	can_mod_post?: boolean, // 248293/79901711 (0.31%)
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	id: string,
	link_id: string,
	parent_id: string,
	retrieved_on: number,
	score: number,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
}