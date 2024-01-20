interface RedditComment {
	all_awardings: {
		award_sub_type: "CHAT_REACTION"|"GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
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
	author_cakeday?: boolean, // 692130/221285501 (0.31%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 16555967/40055659 (41.33%)
		e: "text"|"emoji",
		t?: string, // 23499692/40055659 (58.67%)
		u?: string, // 16555967/40055659 (41.33%)
	}[], // 199555839/221285501 (90.18%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 199555839/221285501 (90.18%)
	author_fullname?: string, // 199555839/221285501 (90.18%)
	author_patreon_flair?: boolean, // 199555839/221285501 (90.18%)
	author_premium?: boolean, // 199555839/221285501 (90.18%)
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
	editable?: boolean, // 60138/221285501 (0.03%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 16101/221285501 (0.01%)
		gid_2?: number, // 30213/221285501 (0.01%)
		gid_3?: number, // 2642/221285501 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 1505833/1506821 (99.93%)
			ext?: string, // 509658/1506821 (33.82%)
			id?: string, // 1505833/1506821 (99.93%)
			m?: "image/gif"|"image/jpeg"|"image/png", // 1505833/1506821 (99.93%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1075249/1506821 (71.36%)
			s?: {
				gif?: string, // 629419/1505833 (41.80%)
				mp4?: string, // 534585/1505833 (35.50%)
				u?: string, // 876414/1505833 (58.20%)
				x: number,
				y: number,
			}, // 1505833/1506821 (99.93%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 940242/1506821 (62.40%)
		},
	}, // 1438513/221285501 (0.65%)
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