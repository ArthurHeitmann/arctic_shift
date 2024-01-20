interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"MODERATOR"|"APPRECIATION"|"COMMUNITY",
		award_type: "global"|"moderator"|"community",
		awardings_required_to_grant_benefits: null,
		coin_price: number,
		coin_reward: number,
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
	}[],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 817691/257407027 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 18992096/44117224 (43.05%)
		e: "text"|"emoji",
		t?: string, // 25125128/44117224 (56.95%)
		u?: string, // 18992096/44117224 (43.05%)
	}[], // 246432239/257407027 (95.74%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 246432239/257407027 (95.74%)
	author_fullname?: string, // 246432239/257407027 (95.74%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 246432239/257407027 (95.74%)
	author_premium?: boolean, // 246432239/257407027 (95.74%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"potentially toxic"|"comment score below threshold",
	collapsed_reason_code: null|"DELETED"|"POTENTIALLY_TOXIC"|"LOW_SCORE",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 4122/257407027 (0.00%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 18/257407027 (0.00%)
		gid_2?: number, // 273/257407027 (0.00%)
		gid_3?: number, // 36/257407027 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	likes: null|boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 2936419/2938715 (99.92%)
			ext?: string, // 696324/2938715 (23.69%)
			id?: string, // 2936419/2938715 (99.92%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 2936419/2938715 (99.92%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 2529840/2938715 (86.09%)
			s?: {
				gif?: string, // 864883/2936419 (29.45%)
				mp4?: string, // 778321/2936419 (26.51%)
				u?: string, // 2071536/2936419 (70.55%)
				x: number,
				y: number,
			}, // 2936419/2938715 (99.92%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1102903/2938715 (37.53%)
		},
	}, // 2877394/257407027 (1.12%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports: null,
	parent_id: string,
	permalink: string,
	removal_reason: null|"legal",
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown", // 8/257407027 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"user"|"restricted"|"private"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	unrepliable_reason: null|"NEAR_BLOCKER",
	ups: number,
	user_reports: [],
}