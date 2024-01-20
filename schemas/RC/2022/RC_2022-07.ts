interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"CHAT_REACTION"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
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
		subreddit_id: null|"t5_3psukr"|"t5_2dptrd"|"t5_2htmve"|"t5_2kpaa5"|"t5_54nt3y"|"t5_2dpsxy"|"t5_32g3v"|"t5_2dptgf"|"t5_2dptqa"|"t5_2ry83"|"t5_2dpthm"|"t5_45hzl5",
		tiers_by_required_awardings: null,
	},
	author: string,
	author_cakeday?: boolean, // 858420/242504279 (0.35%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 17821185/45049641 (39.56%)
		e: "text"|"emoji",
		t?: string, // 27228456/45049641 (60.44%)
		u?: string, // 17821185/45049641 (39.56%)
	}[], // 219903632/242504279 (90.68%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 219903632/242504279 (90.68%)
	author_fullname?: string, // 219903632/242504279 (90.68%)
	author_patreon_flair?: boolean, // 219903632/242504279 (90.68%)
	author_premium?: boolean, // 219903632/242504279 (90.68%)
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
	editable?: boolean, // 26106/242504279 (0.01%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 126910/242504279 (0.05%)
		gid_2?: number, // 39431/242504279 (0.02%)
		gid_3?: number, // 3795/242504279 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage"|"Image",
			ext?: string, // 227299/498740 (45.57%)
			id: string,
			m: "image/gif"|"image/png"|"image/jpeg",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 227299/498740 (45.57%)
			s: {
				gif?: string, // 278893/498740 (55.92%)
				mp4?: string, // 227299/498740 (45.57%)
				u?: string, // 219847/498740 (44.08%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "giphy"|"emoji"|"sticker",
		},
	}, // 465845/242504279 (0.19%)
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