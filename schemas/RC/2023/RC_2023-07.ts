interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
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
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 804335/244601556 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 16027810/39116586 (40.97%)
		e: "text"|"emoji",
		t?: string, // 23088776/39116586 (59.03%)
		u?: string, // 16027810/39116586 (40.97%)
	}[], // 231203816/244601556 (94.52%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 231203816/244601556 (94.52%)
	author_fullname?: string, // 231203816/244601556 (94.52%)
	author_is_blocked?: boolean, // 243749352/244601556 (99.65%)
	author_patreon_flair?: boolean, // 229417083/244601556 (93.79%)
	author_premium?: boolean, // 229417083/244601556 (93.79%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	body_html?: string, // 1198395/244601556 (0.49%)
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control?: null, // 243749352/244601556 (99.65%)
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 40927/244601556 (0.02%)
	edited: boolean|number,
	expression_asset_data?: {
		[key: string]: {
			avatar: {
				e: "Image",
				m: "image/png",
				s: {
					u: string,
					x: number,
					y: number,
				},
			},
			expression: {
				e: " Image",
				l: "FRONT",
				m: "image/png",
				n: "cameras",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "FULL_BODY",
			position: "CENTER",
			size: "SIZE_1_X_2",
		},
	}, // 1/244601556 (0.00%)
	gilded: number,
	gildings: {
		gid_1?: number, // 4071/244601556 (0.00%)
		gid_2?: number, // 8701/244601556 (0.00%)
		gid_3?: number, // 1175/244601556 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 2428662/2429353 (99.97%)
			ext?: string, // 659956/2429353 (27.17%)
			id?: string, // 2428662/2429353 (99.97%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 2428662/2429353 (99.97%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1982116/2429353 (81.59%)
			s?: {
				gif?: string, // 823709/2428662 (33.92%)
				mp4?: string, // 732986/2428662 (30.18%)
				u?: string, // 1604953/2428662 (66.08%)
				x: number,
				y: number,
			}, // 2428662/2429353 (99.97%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1106502/2429353 (45.55%)
		},
	}, // 2361127/244601556 (0.97%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports?: null, // 243749352/244601556 (99.65%)
	parent_id: string,
	permalink: string,
	removal_reason?: null|"legal", // 243749352/244601556 (99.65%)
	replies: "",
	report_reasons?: null, // 243749352/244601556 (99.65%)
	retrieved_on?: number, // 243403161/244601556 (99.51%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed?: string, // 243749352/244601556 (99.65%)
	subreddit_type: "public"|"restricted"|"user"|"archived",
	top_awarded_type?: null, // 243749352/244601556 (99.65%)
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2")[],
	unrepliable_reason?: null, // 243749352/244601556 (99.65%)
	ups: number,
	user_reports: [],
}