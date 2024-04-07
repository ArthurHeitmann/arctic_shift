interface RedditComment {
	_meta: {
		is_edited?: boolean, // 16356297/282609983 (5.79%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 1518973/282609983 (0.54%)
		removal_type?: "deleted"|"removed", // 10390049/282609983 (3.68%)
		retrieved_2nd_on?: number, // 281091010/282609983 (99.46%)
		was_deleted_later?: boolean, // 8864502/282609983 (3.14%)
		was_initially_deleted?: boolean, // 1525547/282609983 (0.54%)
	},
	all_awardings: [],
	approved?: boolean, // 14/282609983 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 813394/282609983 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19275614/45378555 (42.48%)
		e: "text"|"emoji",
		t?: string, // 26102941/45378555 (57.52%)
		u?: string, // 19275614/45378555 (42.48%)
	}[], // 272874140/282609983 (96.56%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 272874140/282609983 (96.56%)
	author_fullname?: string, // 272874140/282609983 (96.56%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 272874140/282609983 (96.56%)
	author_premium?: boolean, // 272874140/282609983 (96.56%)
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
	editable?: boolean, // 89260/282609983 (0.03%)
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
				n: "bravo"|"heart"|"starstruck"|"fire"|"take_my_energy"|"clown"|"holo_card"|"winner"|"cry"|"laugh"|"dizziness"|"webman"|"nani",
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
	}, // 13115/282609983 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 14/282609983 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 4837783/4842936 (99.89%)
			ext?: string, // 845522/4842936 (17.46%)
			id?: string, // 4837783/4842936 (99.89%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 4837783/4842936 (99.89%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4270775/4842936 (88.19%)
			s?: {
				gif?: string, // 1107731/4837783 (22.90%)
				mp4?: string, // 1025016/4837783 (21.19%)
				u?: string, // 3730052/4837783 (77.10%)
				x: number,
				y: number,
			}, // 4837783/4842936 (99.89%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1412530/4842936 (29.17%)
		},
	}, // 4760367/282609983 (1.68%)
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
	removed?: boolean, // 14/282609983 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown", // 2/282609983 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 14/282609983 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"private"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null|"NEAR_BLOCKER",
	ups: number,
	user_reports: [],
}