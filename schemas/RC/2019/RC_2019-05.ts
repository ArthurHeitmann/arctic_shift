interface RedditComment {
	all_awardings: {
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		name: string,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		subreddit_id: null|"t5_2rjz2"|"t5_2qo4s"|"t5_m1n8r"|"t5_3hx3r"|"t5_2tk95"|"t5_mouw"|"t5_35fmc",
	}[],
	archived?: boolean, // 303760/142463421 (0.21%)
	author: string,
	author_cakeday?: boolean, // 431089/142463421 (0.30%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 6922347/21978054 (31.50%)
		e: "text"|"emoji",
		t?: string, // 15055707/21978054 (68.50%)
		u?: string, // 6922347/21978054 (31.50%)
	}[], // 124462147/142463421 (87.36%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 124462147/142463421 (87.36%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 124462147/142463421 (87.36%)
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
		gid_1?: number, // 87449/142463421 (0.06%)
		gid_2?: number, // 44471/142463421 (0.03%)
		gid_3?: number, // 7737/142463421 (0.01%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
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
	subreddit_type: "public"|"restricted"|"user"|"archived",
	total_awards_received: number,
}