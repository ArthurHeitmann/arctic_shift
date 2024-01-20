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
		award_sub_type: "GLOBAL",
		award_type: "global",
		awardings_required_to_grant_benefits: null,
		coin_price: number,
		coin_reward: null|number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
		description: string,
		end_date: null,
		giver_coin_reward: null,
		icon_format: null|"PNG"|"APNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: "Heartwarming"|"Platinum"|"Helpful"|"Wholesome"|"I'll Drink to That"|"Gold"|"Take My Energy"|"Faith In Humanity Restored"|"Rocket Like"|"Silver"|"Bless Up",
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
		start_date: null,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null,
		tiers_by_required_awardings: null,
	},
	author: string,
	author_cakeday?: boolean, // 844041/238862690 (0.35%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 18562769/44596275 (41.62%)
		e: "text"|"emoji",
		t?: string, // 26033506/44596275 (58.38%)
		u?: string, // 18562769/44596275 (41.62%)
	}[], // 215104121/238862690 (90.05%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 215104121/238862690 (90.05%)
	author_fullname?: string, // 215104121/238862690 (90.05%)
	author_patreon_flair?: boolean, // 215104121/238862690 (90.05%)
	author_premium?: boolean, // 215104121/238862690 (90.05%)
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
	editable?: boolean, // 65858/238862690 (0.03%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 99274/238862690 (0.04%)
		gid_2?: number, // 37016/238862690 (0.02%)
		gid_3?: number, // 3339/238862690 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 1293028/1293220 (99.99%)
			ext?: string, // 440087/1293220 (34.03%)
			id?: string, // 1293028/1293220 (99.99%)
			m?: "image/gif"|"image/png"|"image/jpeg", // 1293028/1293220 (99.99%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 849984/1293220 (65.73%)
			s?: {
				gif?: string, // 556102/1293028 (43.01%)
				mp4?: string, // 456280/1293028 (35.29%)
				u?: string, // 736926/1293028 (56.99%)
				x: number,
				y: number,
			}, // 1293028/1293220 (99.99%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 883131/1293220 (68.29%)
		},
	}, // 1216137/238862690 (0.51%)
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