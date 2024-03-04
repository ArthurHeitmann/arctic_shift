interface RedditComment {
	_meta: {
		is_edited?: boolean, // 15367102/265388801 (5.79%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 1697951/265388801 (0.64%)
		removal_type?: "deleted"|"removed", // 9724367/265388801 (3.66%)
		retrieved_2nd_on?: number, // 263690850/265388801 (99.36%)
		was_deleted_later?: boolean, // 8358054/265388801 (3.15%)
		was_initially_deleted?: boolean, // 1366313/265388801 (0.51%)
	},
	all_awardings: [],
	approved?: boolean, // 3/265388801 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 809904/265388801 (0.31%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 17550116/41254139 (42.54%)
		e: "text"|"emoji",
		t?: string, // 23704023/41254139 (57.46%)
		u?: string, // 17550116/41254139 (42.54%)
	}[], // 256082413/265388801 (96.49%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 256082413/265388801 (96.49%)
	author_fullname?: string, // 256082413/265388801 (96.49%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 256082413/265388801 (96.49%)
	author_premium?: boolean, // 256082413/265388801 (96.49%)
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
	editable?: boolean, // 99949/265388801 (0.04%)
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
				l: "FRONT"|"BACK",
				m: "image/png",
				n: "bravo"|"heart"|"fire"|"starstruck"|"clown"|"take_my_energy"|"holo_card"|"winner"|"cry"|"laugh"|"dizziness"|"webman"|"nani",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "CROPPED"|"FULL_BODY",
			position: "CENTER"|"LEFT",
			size: "SIZE_1_X_1"|"SIZE_1_X_2",
		},
	}, // 15207/265388801 (0.01%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 3/265388801 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 4381871/4387585 (99.87%)
			ext?: string, // 829927/4387585 (18.92%)
			id?: string, // 4381871/4387585 (99.87%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 4381871/4387585 (99.87%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3858924/4387585 (87.95%)
			s?: {
				gif?: string, // 1060800/4381871 (24.21%)
				mp4?: string, // 982446/4381871 (22.42%)
				u?: string, // 3321071/4381871 (75.79%)
				x: number,
				y: number,
			}, // 4381871/4387585 (99.87%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1352874/4387585 (30.83%)
		},
	}, // 4318530/265388801 (1.63%)
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
	removed?: boolean, // 3/265388801 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown"|"richtext", // 5/265388801 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 3/265388801 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived"|"private",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null|"NEAR_BLOCKER",
	ups: number,
	user_reports: [],
}