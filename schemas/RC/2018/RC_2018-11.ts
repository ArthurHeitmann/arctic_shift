interface RedditComment {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 354438/112573001 (0.31%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 4217883/15708242 (26.85%)
		e: "text"|"emoji",
		t?: string, // 11490359/15708242 (73.15%)
		u?: string, // 4217883/15708242 (26.85%)
	}[], // 102241857/112573001 (90.82%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 102241857/112573001 (90.82%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 102241857/112573001 (90.82%)
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_reason: null|"comment score below threshold",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1: number,
		gid_2: number,
		gid_3: number,
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"gold_restricted",
}