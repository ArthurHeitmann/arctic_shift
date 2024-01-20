interface RedditComment {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 310984/98101232 (0.32%)
	author_flair_background_color?: null|string, // 189004/98101232 (0.19%)
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 214/40122 (0.53%)
		e: "text"|"emoji",
		t?: string, // 39908/40122 (99.47%)
		u?: string, // 214/40122 (0.53%)
	}[], // 175506/98101232 (0.18%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color?: null|"dark"|"light", // 189004/98101232 (0.19%)
	author_flair_type?: "text"|"richtext", // 175506/98101232 (0.18%)
	body: string,
	can_gild: boolean,
	can_mod_post?: boolean, // 98101139/98101232 (100.00%)
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	id: string,
	is_submitter: boolean,
	link_id: string,
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	removal_reason: null|"legal",
	retrieved_on: number|null,
	rte_mode?: "markdown"|"richtext", // 189004/98101232 (0.19%)
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_type: "public"|"restricted"|"user",
}