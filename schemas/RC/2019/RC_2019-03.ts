interface RedditComment {
	all_awardings?: {
		award_type: "global",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: "Silver Award"|"Gold Award"|"Platinum Award",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: "gid_1"|"gid_2"|"gid_3",
		is_enabled: boolean,
		name: "Silver"|"Gold"|"Platinum",
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		subreddit_id: null,
	}[], // 35868438/137650471 (26.06%)
	archived?: boolean, // 42450/137650471 (0.03%)
	author: string,
	author_cakeday?: boolean, // 413824/137650471 (0.30%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 5248245/19400779 (27.05%)
		e: "text"|"emoji",
		t?: string, // 14152534/19400779 (72.95%)
		u?: string, // 5248245/19400779 (27.05%)
	}[], // 124525548/137650471 (90.47%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 124525548/137650471 (90.47%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 124525548/137650471 (90.47%)
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
		gid_1?: number, // 101801725/137650471 (73.96%)
		gid_2?: number, // 101791355/137650471 (73.95%)
		gid_3?: number, // 101783100/137650471 (73.94%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked?: boolean, // 43168066/137650471 (31.36%)
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
	total_awards_received?: number, // 35868438/137650471 (26.06%)
}