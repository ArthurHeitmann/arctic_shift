interface RedditComment {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 342686/100009462 (0.34%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 332395/14831764 (2.24%)
		e: "text"|"emoji",
		t?: string, // 14499369/14831764 (97.76%)
		u?: string, // 332395/14831764 (2.24%)
	}[], // 92427070/100009462 (92.42%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 92427070/100009462 (92.42%)
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	edited: boolean|number,
	gilded: number,
	id: string,
	is_submitter: boolean,
	link_id: string,
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	removal_reason: null|"legal",
	retrieved_on: number,
	rte_mode: "markdown"|"richtext",
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_type: "public"|"restricted"|"user",
}