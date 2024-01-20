interface RedditComment {
	all_awardings?: {
		award_type: "global"|"community",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: "Silver Award"|"Gold Award"|"Platinum Award"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		name: "Silver"|"Gold"|"Platinum"|"Lemon Cake"|"Iron Coin"|"Apt Analysis"|"Greenseer"|"Hand of the Queen"|"Crying MJ"|"Crown"|"Hodor"|"Perfect Murder"|"Most Valuable"|"Quality OC"|"Tinfoil",
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		subreddit_id: null|"t5_2rjz2"|"t5_2qo4s"|"t5_3hx3r",
	}[], // 133895891/138473643 (96.69%)
	archived?: boolean, // 1008/138473643 (0.00%)
	author: string,
	author_cakeday?: boolean, // 393386/138473643 (0.28%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 6041465/20655907 (29.25%)
		e: "text"|"emoji",
		t?: string, // 14614442/20655907 (70.75%)
		u?: string, // 6041465/20655907 (29.25%)
	}[], // 121033367/138473643 (87.41%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 121033367/138473643 (87.41%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 121033367/138473643 (87.41%)
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
		gid_1?: number, // 4656537/138473643 (3.36%)
		gid_2?: number, // 4617431/138473643 (3.33%)
		gid_3?: number, // 4584118/138473643 (3.31%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked?: boolean, // 134055047/138473643 (96.81%)
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
	total_awards_received?: number, // 133895891/138473643 (96.69%)
}