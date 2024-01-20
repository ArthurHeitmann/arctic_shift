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
		sticky_duration_seconds?: null, // 325302/967784 (33.61%)
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
		coin_reward: number|null,
		count?: number, // 18881/55735 (33.88%)
		days_of_drip_extension: number|null,
		days_of_premium: number|null,
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
	author_cakeday?: boolean, // 896382/235807471 (0.38%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19129099/47682722 (40.12%)
		e: "text"|"emoji",
		t?: string, // 28553623/47682722 (59.88%)
		u?: string, // 19129099/47682722 (40.12%)
	}[], // 206660489/235807471 (87.64%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 206660489/235807471 (87.64%)
	author_fullname?: string, // 206660489/235807471 (87.64%)
	author_patreon_flair?: boolean, // 206660489/235807471 (87.64%)
	author_premium?: boolean, // 206660489/235807471 (87.64%)
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
	editable?: boolean, // 7197/235807471 (0.00%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 225395/235807471 (0.10%)
		gid_2?: number, // 49930/235807471 (0.02%)
		gid_3?: number, // 4942/235807471 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage"|"Image",
			ext?: string, // 168259/330567 (50.90%)
			id: string,
			m: "image/gif"|"image/png"|"image/jpeg",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 168259/330567 (50.90%)
			s: {
				gif?: string, // 221450/330567 (66.99%)
				mp4?: string, // 168259/330567 (50.90%)
				u?: string, // 109117/330567 (33.01%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "giphy"|"emoji"|"sticker",
		},
	}, // 312142/235807471 (0.13%)
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