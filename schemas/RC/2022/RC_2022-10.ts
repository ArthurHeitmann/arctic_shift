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
		award_sub_type: "GLOBAL"|"PREMIUM"|"COMMUNITY"|"APPRECIATION"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null,
		coin_price: number,
		coin_reward: null|number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
		description: string,
		end_date: null,
		giver_coin_reward: null,
		icon_format: null|"APNG"|"PNG",
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
		subreddit_id: null|"t5_3psukr"|"t5_2dptrd"|"t5_2htmve"|"t5_2dpsxy"|"t5_54nt3y"|"t5_32g3v"|"t5_2dptqa"|"t5_2dpthm"|"t5_2ry83"|"t5_2kpaa5"|"t5_2dptgf"|"t5_45hzl5",
		tiers_by_required_awardings: null,
	},
	author: string,
	author_cakeday?: boolean, // 1130131/237365072 (0.48%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19267223/46686726 (41.27%)
		e: "text"|"emoji",
		t?: string, // 27419503/46686726 (58.73%)
		u?: string, // 19267223/46686726 (41.27%)
	}[], // 213936699/237365072 (90.13%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 213936699/237365072 (90.13%)
	author_fullname?: string, // 213936699/237365072 (90.13%)
	author_patreon_flair?: boolean, // 213936699/237365072 (90.13%)
	author_premium?: boolean, // 213936699/237365072 (90.13%)
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
	editable?: boolean, // 70916/237365072 (0.03%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 103693/237365072 (0.04%)
		gid_2?: number, // 37817/237365072 (0.02%)
		gid_3?: number, // 3397/237365072 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "AnimatedImage"|"Image", // 779797/779798 (100.00%)
			ext?: string, // 377687/779798 (48.43%)
			id?: string, // 779797/779798 (100.00%)
			m?: "image/gif"|"image/png"|"image/jpeg", // 779797/779798 (100.00%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 378186/779798 (48.50%)
			s?: {
				gif?: string, // 457214/779797 (58.63%)
				mp4?: string, // 377794/779797 (48.45%)
				u?: string, // 322583/779797 (41.37%)
				x: number,
				y: number,
			}, // 779797/779798 (100.00%)
			status: "valid"|"unprocessed",
			t?: "giphy"|"emoji"|"sticker", // 779298/779798 (99.94%)
		},
	}, // 717848/237365072 (0.30%)
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
	treatment_tags: string[],
	unrepliable_reason: null,
}