interface RedditComment {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 356781/112346556 (0.32%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 3152823/14211901 (22.18%)
		e: "text"|"emoji",
		t?: string, // 11059078/14211901 (77.82%)
		u?: string, // 3152823/14211901 (22.18%)
	}[], // 104414144/112346556 (92.94%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 104414144/112346556 (92.94%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 98138418/112346556 (87.35%)
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