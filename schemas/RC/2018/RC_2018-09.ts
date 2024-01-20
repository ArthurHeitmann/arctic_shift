interface RedditComment {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 327581/104473929 (0.31%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 2918024/13907262 (20.98%)
		e: "text"|"emoji",
		t?: string, // 10989238/13907262 (79.02%)
		u?: string, // 2918024/13907262 (20.98%)
	}[], // 97102408/104473929 (92.94%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 97102408/104473929 (92.94%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 9032527/104473929 (8.65%)
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_reason: null|"comment score below threshold",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
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
	subreddit_type: "public"|"restricted"|"user",
}