interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"CHAT_REACTION"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: null|"APNG"|"PNG"|"JPG",
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
		resized_static_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings: null,
	}[],
	archived: boolean,
	associated_award: null|{
		award_sub_type: "GLOBAL"|"PREMIUM"|"MODERATOR"|"COMMUNITY"|"APPRECIATION",
		award_type: "global"|"moderator"|"community",
		awardings_required_to_grant_benefits: null,
		coin_price: number,
		coin_reward: null|number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
		description: string,
		end_date: null,
		giver_coin_reward: null,
		icon_format: "APNG"|"PNG"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings: null,
	},
	author: string,
	author_cakeday?: boolean, // 768936/229478878 (0.34%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19175279/46110022 (41.59%)
		e: "text"|"emoji",
		t?: string, // 26934743/46110022 (58.41%)
		u?: string, // 19175279/46110022 (41.59%)
	}[], // 206616672/229478878 (90.04%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 206616672/229478878 (90.04%)
	author_fullname?: string, // 206616672/229478878 (90.04%)
	author_patreon_flair?: boolean, // 206616672/229478878 (90.04%)
	author_premium?: boolean, // 206616672/229478878 (90.04%)
	body: string,
	can_gild: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null|"PREDICTION",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	editable?: boolean, // 66621/229478878 (0.03%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 97510/229478878 (0.04%)
		gid_2?: number, // 33203/229478878 (0.01%)
		gid_3?: number, // 2914/229478878 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 1013584/1013637 (99.99%)
			ext?: string, // 390183/1013637 (38.49%)
			id?: string, // 1013584/1013637 (99.99%)
			m?: "image/gif"|"image/png"|"image/jpeg", // 1013584/1013637 (99.99%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 595834/1013637 (58.78%)
			s?: {
				gif?: string, // 495253/1013584 (48.86%)
				mp4?: string, // 402757/1013584 (39.74%)
				u?: string, // 518331/1013584 (51.14%)
				x: number,
				y: number,
			}, // 1013584/1013637 (99.99%)
			status: "valid"|"unprocessed",
			t?: "giphy"|"emoji"|"sticker", // 807933/1013637 (79.71%)
		},
	}, // 948536/229478878 (0.41%)
	name: string,
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	retrieved_on: number,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2")[],
	unrepliable_reason: null,
}