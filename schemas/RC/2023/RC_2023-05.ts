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
	author_cakeday?: boolean, // 863393/238192194 (0.36%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 17598633/42693159 (41.22%)
		e: "text"|"emoji",
		t?: string, // 25094526/42693159 (58.78%)
		u?: string, // 17598633/42693159 (41.22%)
	}[], // 211147529/238192194 (88.65%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 211147529/238192194 (88.65%)
	author_fullname?: string, // 211147529/238192194 (88.65%)
	author_is_blocked?: boolean, // 235650448/238192194 (98.93%)
	author_patreon_flair?: boolean, // 206790272/238192194 (86.82%)
	author_premium?: boolean, // 206790272/238192194 (86.82%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control?: null, // 235650448/238192194 (98.93%)
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null|"PREDICTION",
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 104869/238192194 (0.04%)
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
				n: "cry",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "CROPPED",
			position: "CENTER",
			size: "SIZE_1_X_1",
		},
	}, // 1/238192194 (0.00%)
	gilded: number,
	gildings: {
		gid_1?: number, // 14627/238192194 (0.01%)
		gid_2?: number, // 30779/238192194 (0.01%)
		gid_3?: number, // 2816/238192194 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	likes: null|boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 1960685/1961490 (99.96%)
			ext?: string, // 583505/1961490 (29.75%)
			id?: string, // 1960685/1961490 (99.96%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 1960685/1961490 (99.96%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1535182/1961490 (78.27%)
			s?: {
				gif?: string, // 720479/1960685 (36.75%)
				mp4?: string, // 633112/1960685 (32.29%)
				u?: string, // 1240206/1960685 (63.25%)
				x: number,
				y: number,
			}, // 1960685/1961490 (99.96%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1009008/1961490 (51.44%)
		},
	}, // 1897140/238192194 (0.80%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports?: null, // 235650448/238192194 (98.93%)
	parent_id: string,
	permalink: string,
	removal_reason?: null|"legal", // 235650448/238192194 (98.93%)
	replies: "",
	report_reasons?: null, // 235650448/238192194 (98.93%)
	retrieved_on: number,
	rte_mode?: "markdown", // 3/238192194 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed?: string, // 235650448/238192194 (98.93%)
	subreddit_type: "public"|"restricted"|"user"|"archived"|"private",
	top_awarded_type?: null, // 235650448/238192194 (98.93%)
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2")[],
	unrepliable_reason?: null|"NEAR_BLOCKER", // 235650448/238192194 (98.93%)
	ups: number,
	user_reports: [],
}