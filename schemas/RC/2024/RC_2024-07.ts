interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 18127060/290258422 (6.25%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 11843272/290258422 (4.08%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10162584/290258422 (3.50%)
		was_initially_deleted?: boolean, // 1680812/290258422 (0.58%)
	}, // 290258422/291794367 (99.47%)
	all_awardings: [],
	approved?: boolean, // 5/291794367 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 968926/291794367 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19513839/46541908 (41.93%)
		e: "text"|"emoji",
		t?: string, // 27028069/46541908 (58.07%)
		u?: string, // 19513839/46541908 (41.93%)
	}[], // 280259148/291794367 (96.05%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 280259148/291794367 (96.05%)
	author_fullname?: string, // 278578061/291794367 (95.47%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 280259148/291794367 (96.05%)
	author_premium?: boolean, // 280259148/291794367 (96.05%)
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
	editable?: boolean, // 96723/291794367 (0.03%)
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
				n: "bravo"|"heart"|"fire"|"starstruck"|"clown"|"take_my_energy"|"laugh"|"cry"|"holo_card"|"dizziness"|"winner"|"nani"|"webman",
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
	}, // 3818/291794367 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 5/291794367 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 5157001/5161398 (99.91%)
			ext?: string, // 980063/5161398 (18.99%)
			id?: string, // 5157001/5161398 (99.91%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 5157001/5161398 (99.91%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4690837/5161398 (90.88%)
			s?: {
				gif?: string, // 1233100/5157001 (23.91%)
				mp4?: string, // 1153413/5157001 (22.37%)
				u?: string, // 3923901/5157001 (76.09%)
				x: number,
				y: number,
			}, // 5157001/5161398 (99.91%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1446227/5161398 (28.02%)
		},
	}, // 5090406/291794367 (1.74%)
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
	removed?: boolean, // 5/291794367 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 5/291794367 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null|"NEAR_BLOCKER",
	ups: number,
	user_reports: [],
}