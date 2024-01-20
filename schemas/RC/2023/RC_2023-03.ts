interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"CHAT_REACTION"|"COMMUNITY"|"MODERATOR",
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
		icon_format: "APNG"|"PNG"|"JPG"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: number|null,
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
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 760696/240661398 (0.32%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 18167735/44770041 (40.58%)
		e: "text"|"emoji",
		t?: string, // 26602306/44770041 (59.42%)
		u?: string, // 18167735/44770041 (40.58%)
	}[], // 216267621/240661398 (89.86%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 216267621/240661398 (89.86%)
	author_fullname?: string, // 216267621/240661398 (89.86%)
	author_patreon_flair?: boolean, // 216267621/240661398 (89.86%)
	author_premium?: boolean, // 216267621/240661398 (89.86%)
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
	editable?: boolean, // 69713/240661398 (0.03%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 17068/240661398 (0.01%)
		gid_2?: number, // 34163/240661398 (0.01%)
		gid_3?: number, // 2991/240661398 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 1800266/1800679 (99.98%)
			ext?: string, // 607281/1800679 (33.73%)
			id?: string, // 1800266/1800679 (99.98%)
			m?: "image/gif"|"image/jpeg"|"image/png", // 1800266/1800679 (99.98%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1329654/1800679 (73.84%)
			s?: {
				gif?: string, // 742843/1800266 (41.26%)
				mp4?: string, // 643791/1800266 (35.76%)
				u?: string, // 1057423/1800266 (58.74%)
				x: number,
				y: number,
			}, // 1800266/1800679 (99.98%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1077893/1800679 (59.86%)
		},
	}, // 1729280/240661398 (0.72%)
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