interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"MODERATOR"|"APPRECIATION",
		award_type: "global"|"moderator",
		awardings_required_to_grant_benefits: null,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
		description: string,
		end_date: null,
		giver_coin_reward: null,
		icon_format: "PNG"|"APNG"|null,
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
		subreddit_id: null|"t5_j4b3a"|"t5_ljzro"|"t5_2hnraa"|"t5_2w5ga"|"t5_ui358"|"t5_3ntp6"|"t5_2sfn3"|"t5_2xhvq"|"t5_27uuuy"|"t5_2th52"|"t5_3aqd5",
		tiers_by_required_awardings: null,
	}[],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 856080/259387827 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 17378040/42130485 (41.25%)
		e: "text"|"emoji",
		t?: string, // 24752445/42130485 (58.75%)
		u?: string, // 17378040/42130485 (41.25%)
	}[], // 247421142/259387827 (95.39%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 247421142/259387827 (95.39%)
	author_fullname?: string, // 247421142/259387827 (95.39%)
	author_is_blocked?: boolean, // 258721879/259387827 (99.74%)
	author_patreon_flair?: boolean, // 247421076/259387827 (95.39%)
	author_premium?: boolean, // 247421076/259387827 (95.39%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control?: null, // 258721879/259387827 (99.74%)
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 7231/259387827 (0.00%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 12/259387827 (0.00%)
		gid_2?: number, // 45/259387827 (0.00%)
		gid_3?: number, // 10/259387827 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	likes: null|boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 2851917/2853005 (99.96%)
			ext?: string, // 712347/2853005 (24.97%)
			id?: string, // 2851917/2853005 (99.96%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 2851917/2853005 (99.96%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 2405358/2853005 (84.31%)
			s?: {
				gif?: string, // 877347/2851917 (30.76%)
				mp4?: string, // 786456/2851917 (27.58%)
				u?: string, // 1974570/2851917 (69.24%)
				x: number,
				y: number,
			}, // 2851917/2853005 (99.96%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1158906/2853005 (40.62%)
		},
	}, // 2786099/259387827 (1.07%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports?: null, // 258721879/259387827 (99.74%)
	parent_id: string,
	permalink: string,
	removal_reason?: null|"legal", // 258721879/259387827 (99.74%)
	replies: "",
	report_reasons?: null, // 258721879/259387827 (99.74%)
	retrieved_on: number,
	rte_mode?: "markdown", // 4/259387827 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed?: string, // 258721879/259387827 (99.74%)
	subreddit_type: "public"|"restricted"|"user"|"archived"|"private",
	top_awarded_type?: null, // 258721879/259387827 (99.74%)
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2")[],
	unrepliable_reason?: null|"NEAR_BLOCKER", // 258721879/259387827 (99.74%)
	ups: number,
	user_reports: [],
}