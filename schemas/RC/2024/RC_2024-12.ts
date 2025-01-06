interface RedditComment {
	_meta?: {
		corrupted_body?: string, // 1/299517484 (0.00%)
		is_edited?: boolean, // 17833434/299517484 (5.95%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 11692754/299517484 (3.90%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10064838/299517484 (3.36%)
		was_initially_deleted?: boolean, // 1627919/299517484 (0.54%)
	}, // 299517484/299868230 (99.88%)
	all_awardings: [],
	approved?: boolean, // 15/299868230 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 977559/299868230 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 22031906/50825304 (43.35%)
		e: "text"|"emoji",
		t?: string, // 28793398/50825304 (56.65%)
		u?: string, // 22031906/50825304 (43.35%)
	}[], // 288543294/299868230 (96.22%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 288543294/299868230 (96.22%)
	author_fullname?: string, // 286915202/299868230 (95.68%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 288543294/299868230 (96.22%)
	author_premium?: boolean, // 288543294/299868230 (96.22%)
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
	editable?: boolean, // 111646/299868230 (0.04%)
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
				n: "heart"|"cry"|"winner",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "CROPPED"|"FULL_BODY",
			position: "CENTER",
			size: "SIZE_1_X_2"|"SIZE_1_X_1",
		},
	}, // 5/299868230 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 15/299868230 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 6862306/6865989 (99.95%)
			ext?: string, // 1334027/6865989 (19.43%)
			id?: string, // 6862306/6865989 (99.95%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 6862306/6865989 (99.95%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6399766/6865989 (93.21%)
			s?: {
				gif?: string, // 1663686/6862306 (24.24%)
				mp4?: string, // 1585161/6862306 (23.10%)
				u?: string, // 5198620/6862306 (75.76%)
				x: number,
				y: number,
			}, // 6862306/6865989 (99.95%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1796567/6865989 (26.17%)
		},
	}, // 6785551/299868230 (2.26%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports: null|number,
	parent_id: string,
	permalink: string,
	removal_reason: null|"legal",
	removed?: boolean, // 15/299868230 (0.00%)
	replies: "",
	report_reasons: null|[],
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 15/299868230 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null,
	ups: number,
	user_reports: [],
}