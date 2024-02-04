interface RedditComment {
	_meta: {
		is_edited?: boolean, // 16095646/284080628 (5.67%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 1450752/284080628 (0.51%)
		removal_type?: "deleted"|"removed", // 10182970/284080628 (3.58%)
		retrieved_2nd_on?: number, // 282629876/284080628 (99.49%)
		was_deleted_later?: boolean, // 8747465/284080628 (3.08%)
		was_initially_deleted?: boolean, // 1435505/284080628 (0.51%)
	},
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1492421/284080628 (0.53%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 20049227/46477275 (43.14%)
		e: "text"|"emoji",
		t?: string, // 26428048/46477275 (56.86%)
		u?: string, // 20049227/46477275 (43.14%)
	}[], // 273119983/284080628 (96.14%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 273119983/284080628 (96.14%)
	author_fullname?: string, // 273119983/284080628 (96.14%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 273119983/284080628 (96.14%)
	author_premium?: boolean, // 273119983/284080628 (96.14%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 1086/284080628 (0.00%)
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
				n: "bravo"|"heart"|"fire"|"starstruck"|"take_my_energy"|"clown"|"holo_card"|"laugh"|"winner"|"cry"|"dizziness"|"webman"|"nani",
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
	}, // 16902/284080628 (0.01%)
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 4515108/4520033 (99.89%)
			ext?: string, // 922188/4520033 (20.40%)
			id?: string, // 4515108/4520033 (99.89%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 4515108/4520033 (99.89%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4020952/4520033 (88.96%)
			s?: {
				gif?: string, // 1153425/4515108 (25.55%)
				mp4?: string, // 1070449/4515108 (23.71%)
				u?: string, // 3361683/4515108 (74.45%)
				x: number,
				y: number,
			}, // 4515108/4520033 (99.89%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1416344/4520033 (31.33%)
		},
	}, // 4454396/284080628 (1.57%)
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
	rte_mode?: "markdown", // 3/284080628 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
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