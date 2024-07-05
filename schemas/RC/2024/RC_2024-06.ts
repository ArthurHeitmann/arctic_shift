interface RedditComment {
	_meta?: {
		corrupted_body?: string, // 20/269356606 (0.00%)
		is_edited?: boolean, // 17162524/269356606 (6.37%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 10856742/269356606 (4.03%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 9255702/269356606 (3.44%)
		was_initially_deleted?: boolean, // 1601083/269356606 (0.59%)
	}, // 269356606/270886311 (99.44%)
	all_awardings: [],
	approved?: boolean, // 2/270886311 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 806961/270886311 (0.30%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 18688956/44149553 (42.33%)
		e: "text"|"emoji",
		t?: string, // 25460597/44149553 (57.67%)
		u?: string, // 18688956/44149553 (42.33%)
	}[], // 260977726/270886311 (96.34%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 260977726/270886311 (96.34%)
	author_fullname?: string, // 259376467/270886311 (95.75%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 260977726/270886311 (96.34%)
	author_premium?: boolean, // 260977726/270886311 (96.34%)
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
	editable?: boolean, // 77161/270886311 (0.03%)
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
				n: "bravo"|"heart"|"fire"|"starstruck"|"take_my_energy"|"clown"|"cry"|"laugh"|"winner"|"holo_card"|"dizziness"|"webman"|"nani",
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
	}, // 9828/270886311 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 2/270886311 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 4748419/4753615 (99.89%)
			ext?: string, // 952463/4753615 (20.04%)
			id?: string, // 4748419/4753615 (99.89%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 4748419/4753615 (99.89%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4280428/4753615 (90.05%)
			s?: {
				gif?: string, // 1193475/4748419 (25.13%)
				mp4?: string, // 1114247/4748419 (23.47%)
				u?: string, // 3554944/4748419 (74.87%)
				x: number,
				y: number,
			}, // 4748419/4753615 (99.89%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1420454/4753615 (29.88%)
		},
	}, // 4690820/270886311 (1.73%)
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
	removed?: boolean, // 2/270886311 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 2/270886311 (0.00%)
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