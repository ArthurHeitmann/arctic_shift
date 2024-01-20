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
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 882971/253577512 (0.35%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19713753/47328098 (41.65%)
		e: "text"|"emoji",
		t?: string, // 27614345/47328098 (58.35%)
		u?: string, // 19713753/47328098 (41.65%)
	}[], // 228827830/253577512 (90.24%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 228827830/253577512 (90.24%)
	author_fullname?: string, // 228827830/253577512 (90.24%)
	author_patreon_flair?: boolean, // 228827830/253577512 (90.24%)
	author_premium?: boolean, // 228827830/253577512 (90.24%)
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
	editable?: boolean, // 70710/253577512 (0.03%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 30299/253577512 (0.01%)
		gid_2?: number, // 36300/253577512 (0.01%)
		gid_3?: number, // 3306/253577512 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 1551139/1551388 (99.98%)
			ext?: string, // 521614/1551388 (33.62%)
			id?: string, // 1551139/1551388 (99.98%)
			m?: "image/gif"|"image/png"|"image/jpeg", // 1551139/1551388 (99.98%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1071709/1551388 (69.08%)
			s?: {
				gif?: string, // 649662/1551139 (41.88%)
				mp4?: string, // 544599/1551139 (35.11%)
				u?: string, // 901477/1551139 (58.12%)
				x: number,
				y: number,
			}, // 1551139/1551388 (99.98%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1001044/1551388 (64.53%)
		},
	}, // 1470640/253577512 (0.58%)
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
	subreddit_type: "public"|"restricted"|"user"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2")[],
	unrepliable_reason: null,
}