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
	author_cakeday?: boolean, // 814192/228065496 (0.36%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 17819057/43247834 (41.20%)
		e: "text"|"emoji",
		t?: string, // 25428777/43247834 (58.80%)
		u?: string, // 17819057/43247834 (41.20%)
	}[], // 200662011/228065496 (87.98%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 200662011/228065496 (87.98%)
	author_fullname?: string, // 200662011/228065496 (87.98%)
	author_is_blocked?: boolean, // 226112580/228065496 (99.14%)
	author_patreon_flair?: boolean, // 197654170/228065496 (86.67%)
	author_premium?: boolean, // 197654170/228065496 (86.67%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control?: null, // 226112580/228065496 (99.14%)
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null|"PREDICTION",
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 74921/228065496 (0.03%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 14496/228065496 (0.01%)
		gid_2?: number, // 30758/228065496 (0.01%)
		gid_3?: number, // 2809/228065496 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	likes: null|boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 1825581/1826198 (99.97%)
			ext?: string, // 558301/1826198 (30.57%)
			id?: string, // 1825581/1826198 (99.97%)
			m?: "image/gif"|"image/jpeg"|"image/png", // 1825581/1826198 (99.97%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1391387/1826198 (76.19%)
			s?: {
				gif?: string, // 690273/1825581 (37.81%)
				mp4?: string, // 604031/1825581 (33.09%)
				u?: string, // 1135308/1825581 (62.19%)
				x: number,
				y: number,
			}, // 1825581/1826198 (99.97%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 992495/1826198 (54.35%)
		},
	}, // 1757805/228065496 (0.77%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports?: null, // 226112580/228065496 (99.14%)
	parent_id: string,
	permalink: string,
	removal_reason?: null|"legal", // 226112580/228065496 (99.14%)
	replies: "",
	report_reasons?: null, // 226112580/228065496 (99.14%)
	retrieved_on: number,
	rte_mode?: "markdown", // 1/228065496 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed?: string, // 226112580/228065496 (99.14%)
	subreddit_type: "public"|"restricted"|"user"|"archived",
	top_awarded_type?: null, // 226112580/228065496 (99.14%)
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2")[],
	unrepliable_reason?: null|"NEAR_BLOCKER", // 226112580/228065496 (99.14%)
	ups: number,
	user_reports: [],
}