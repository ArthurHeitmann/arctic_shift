interface RedditComment {
	archived?: boolean, // 159698/120645639 (0.13%)
	author: string,
	author_cakeday?: boolean, // 408564/120645639 (0.34%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 4649621/17090024 (27.21%)
		e: "text"|"emoji",
		t?: string, // 12440403/17090024 (72.79%)
		u?: string, // 4649621/17090024 (27.21%)
	}[], // 110448530/120645639 (91.55%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 110448530/120645639 (91.55%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 110448530/120645639 (91.55%)
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
	quarantined: boolean,
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