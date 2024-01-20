interface RedditComment {
	archived?: boolean, // 33963/129386587 (0.03%)
	author: string,
	author_cakeday?: boolean, // 425034/129386587 (0.33%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 4305528/17479670 (24.63%)
		e: "text"|"emoji",
		t?: string, // 13174142/17479670 (75.37%)
		u?: string, // 4305528/17479670 (24.63%)
	}[], // 118854636/129386587 (91.86%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 118854636/129386587 (91.86%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 118854636/129386587 (91.86%)
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
	subreddit_type: "public"|"restricted"|"user",
}