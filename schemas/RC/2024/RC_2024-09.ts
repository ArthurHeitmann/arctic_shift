interface RedditComment {
	_meta?: {
		corrupted_body?: string, // 1/289324531 (0.00%)
		is_edited?: boolean, // 17647517/289324531 (6.10%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 11599054/289324531 (4.01%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 9982472/289324531 (3.45%)
		was_initially_deleted?: boolean, // 1616582/289324531 (0.56%)
	}, // 289324531/290214139 (99.69%)
	all_awardings: [],
	approved?: boolean, // 7/290214139 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 928026/290214139 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 21399522/49124511 (43.56%)
		e: "text"|"emoji",
		t?: string, // 27724989/49124511 (56.44%)
		u?: string, // 21399522/49124511 (43.56%)
	}[], // 278980274/290214139 (96.13%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 278980274/290214139 (96.13%)
	author_fullname?: string, // 277363334/290214139 (95.57%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 278980274/290214139 (96.13%)
	author_premium?: boolean, // 278980274/290214139 (96.13%)
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
	editable?: boolean, // 82606/290214139 (0.03%)
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
				n: "fire"|"heart"|"laugh"|"dizziness",
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
	}, // 4/290214139 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 7/290214139 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 5798038/5805865 (99.87%)
			ext?: string, // 1141410/5805865 (19.66%)
			id?: string, // 5798038/5805865 (99.87%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 5798038/5805865 (99.87%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5347948/5805865 (92.11%)
			s?: {
				gif?: string, // 1419102/5798038 (24.48%)
				mp4?: string, // 1340011/5798038 (23.11%)
				u?: string, // 4378936/5798038 (75.52%)
				x: number,
				y: number,
			}, // 5798038/5805865 (99.87%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1591500/5805865 (27.41%)
		},
	}, // 5729587/290214139 (1.97%)
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
	removed?: boolean, // 7/290214139 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 7/290214139 (0.00%)
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