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
	author_cakeday?: boolean, // 780862/224927265 (0.35%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 14819432/36410543 (40.70%)
		e: "text"|"emoji",
		t?: string, // 21591111/36410543 (59.30%)
		u?: string, // 14819432/36410543 (40.70%)
	}[], // 203615075/224927265 (90.52%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 203615075/224927265 (90.52%)
	author_fullname?: string, // 203615075/224927265 (90.52%)
	author_is_blocked?: boolean, // 221321181/224927265 (98.40%)
	author_patreon_flair?: boolean, // 196297189/224927265 (87.27%)
	author_premium?: boolean, // 196297189/224927265 (87.27%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control?: null, // 221321181/224927265 (98.40%)
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 113228/224927265 (0.05%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 13003/224927265 (0.01%)
		gid_2?: number, // 28277/224927265 (0.01%)
		gid_3?: number, // 3500/224927265 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	likes: null|boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 2040929/2041026 (100.00%)
			ext?: string, // 561130/2041026 (27.49%)
			id?: string, // 2040929/2041026 (100.00%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 2040929/2041026 (100.00%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1630794/2041026 (79.90%)
			s?: {
				gif?: string, // 695576/2040929 (34.08%)
				mp4?: string, // 616356/2040929 (30.20%)
				u?: string, // 1345353/2040929 (65.92%)
				x: number,
				y: number,
			}, // 2040929/2041026 (100.00%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 971265/2041026 (47.59%)
		},
	}, // 1981015/224927265 (0.88%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports?: null, // 221321181/224927265 (98.40%)
	parent_id: string,
	permalink: string,
	removal_reason?: null|"legal", // 221321181/224927265 (98.40%)
	replies: "",
	report_reasons?: null, // 221321181/224927265 (98.40%)
	retrieved_on: number,
	rte_mode?: "markdown"|"richtext", // 15/224927265 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed?: string, // 221321181/224927265 (98.40%)
	subreddit_type: "public"|"restricted"|"user"|"archived"|"private",
	top_awarded_type?: null, // 221321181/224927265 (98.40%)
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2")[],
	unrepliable_reason?: null|"NEAR_BLOCKER", // 221321181/224927265 (98.40%)
	ups: number,
	user_reports: [],
}