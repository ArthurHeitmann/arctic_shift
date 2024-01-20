interface RedditComment {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 335782/107330940 (0.31%)
	author_created_utc?: number|null, // 99697007/107330940 (92.89%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1703453/11823311 (14.41%)
		e: "text"|"emoji",
		t?: string, // 10119858/11823311 (85.59%)
		u?: string, // 1703453/11823311 (14.41%)
	}[], // 99362806/107330940 (92.58%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 99362806/107330940 (92.58%)
	author_fullname?: string|null, // 99697007/107330940 (92.89%)
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
	gildings?: {
		gid_1: number,
		gid_2: number,
		gid_3: number,
	}, // 32762200/107330940 (30.52%)
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