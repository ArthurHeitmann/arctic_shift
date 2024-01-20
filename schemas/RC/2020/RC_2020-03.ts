interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons?: {
			height: number,
			url: string,
			width: number,
		}[], // 127621/206583 (61.78%)
		start_date: null|number,
		static_icon_height?: number, // 127621/206583 (61.78%)
		static_icon_url?: string, // 127621/206583 (61.78%)
		static_icon_width?: number, // 127621/206583 (61.78%)
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	}[],
	associated_award: null|{
		award_sub_type: "GLOBAL"|"COMMUNITY"|"PREMIUM"|"APPRECIATION"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons?: {
			height: number,
			url: string,
			width: number,
		}[], // 11419/12841 (88.93%)
		start_date: null|number,
		static_icon_height?: number, // 11419/12841 (88.93%)
		static_icon_url?: string, // 11419/12841 (88.93%)
		static_icon_width?: number, // 11419/12841 (88.93%)
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	},
	author: string,
	author_cakeday?: boolean, // 536981/166266315 (0.32%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 9288608/26856874 (34.59%)
		e: "text"|"emoji",
		t?: string, // 17568266/26856874 (65.41%)
		u?: string, // 9288608/26856874 (34.59%)
	}[], // 149365806/166266315 (89.84%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 149365806/166266315 (89.84%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 149365806/166266315 (89.84%)
	author_premium?: boolean, // 149365806/166266315 (89.84%)
	awarders: [],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 78277/166266315 (0.05%)
		gid_2?: number, // 37544/166266315 (0.02%)
		gid_3?: number, // 4066/166266315 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string, // 237/3899 (6.08%)
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 237/3899 (6.08%)
			s: {
				gif: string,
				mp4?: string, // 237/3899 (6.08%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "emoji"|"sticker"|"giphy",
		},
	}, // 3416/166266315 (0.00%)
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
	top_awarded_type?: null, // 155943906/166266315 (93.79%)
	total_awards_received: number,
	treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
}