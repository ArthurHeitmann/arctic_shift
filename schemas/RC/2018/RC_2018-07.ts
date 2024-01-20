interface RedditComment {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 370776/108151359 (0.34%)
	author_created_utc?: number|null, // 99551067/108151359 (92.05%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1048102/10904673 (9.61%)
		e: "text"|"emoji",
		t?: string, // 9856571/10904673 (90.39%)
		u?: string, // 1048102/10904673 (9.61%)
	}[], // 99551067/108151359 (92.05%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 99551067/108151359 (92.05%)
	author_fullname?: string, // 99551067/108151359 (92.05%)
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
	id: string,
	is_submitter: boolean,
	link_id: string,
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user",
}