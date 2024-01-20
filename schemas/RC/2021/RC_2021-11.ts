interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"GROUP"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number|null,
		days_of_premium: number|null,
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
		sticky_duration_seconds?: null, // 806/890223 (0.09%)
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "APNG"|"PNG",
					height: number,
					url: string,
					width: number,
				},
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
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		},
	}[],
	archived: boolean,
	associated_award: null|{
		award_sub_type: "GLOBAL"|"PREMIUM"|"COMMUNITY"|"GROUP"|"APPRECIATION"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: null|"APNG"|"PNG",
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
		tiers_by_required_awardings: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "APNG"|"PNG",
					height: number,
					url: string,
					width: number,
				},
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
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		},
	},
	author: string,
	author_cakeday?: boolean, // 769987/228289963 (0.34%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19935687/48836471 (40.82%)
		e: "text"|"emoji",
		t?: string, // 28900784/48836471 (59.18%)
		u?: string, // 19935687/48836471 (40.82%)
	}[], // 200091537/228289963 (87.65%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 200091537/228289963 (87.65%)
	author_fullname?: string, // 200091537/228289963 (87.65%)
	author_patreon_flair?: boolean, // 200091537/228289963 (87.65%)
	author_premium?: boolean, // 200091537/228289963 (87.65%)
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
	editable?: boolean, // 6310/228289963 (0.00%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 198118/228289963 (0.09%)
		gid_2?: number, // 44577/228289963 (0.02%)
		gid_3?: number, // 4867/228289963 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage"|"Image",
			ext?: string, // 143896/290813 (49.48%)
			id: string,
			m: "image/gif"|"image/png"|"image/jpeg",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 143896/290813 (49.48%)
			s: {
				gif?: string, // 193773/290813 (66.63%)
				mp4?: string, // 143896/290813 (49.48%)
				u?: string, // 97040/290813 (33.37%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "giphy"|"emoji"|"sticker",
		},
	}, // 274245/228289963 (0.12%)
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
	treatment_tags: string[],
	unrepliable_reason: null,
}