interface RedditComment {
	_meta: {
		is_edited?: boolean, // 15678721/272935145 (5.74%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 1333765/272935145 (0.49%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 9252379/272935145 (3.39%)
		retrieved_2nd_on?: number, // 271601380/272935145 (99.51%)
		was_deleted_later?: boolean, // 7779410/272935145 (2.85%)
		was_initially_deleted?: boolean, // 1472969/272935145 (0.54%)
	},
	all_awardings: [],
	approved?: boolean, // 23/272935145 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 821753/272935145 (0.30%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 18853749/44772616 (42.11%)
		e: "text"|"emoji",
		t?: string, // 25918867/44772616 (57.89%)
		u?: string, // 18853749/44772616 (42.11%)
	}[], // 263500796/272935145 (96.54%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 263500796/272935145 (96.54%)
	author_fullname?: string, // 263500796/272935145 (96.54%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 263500796/272935145 (96.54%)
	author_premium?: boolean, // 263500796/272935145 (96.54%)
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
	editable?: boolean, // 83988/272935145 (0.03%)
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
				n: "bravo"|"heart"|"fire"|"starstruck"|"take_my_energy"|"clown"|"holo_card"|"winner"|"laugh"|"cry"|"dizziness"|"webman"|"nani",
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
	}, // 4892/272935145 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 23/272935145 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 4866201/4874103 (99.84%)
			ext?: string, // 957963/4874103 (19.65%)
			id?: string, // 4866201/4874103 (99.84%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 4866201/4874103 (99.84%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4295526/4874103 (88.13%)
			s?: {
				gif?: string, // 1229844/4866201 (25.27%)
				mp4?: string, // 1140984/4866201 (23.45%)
				u?: string, // 3636357/4866201 (74.73%)
				x: number,
				y: number,
			}, // 4866201/4874103 (99.84%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1528638/4874103 (31.36%)
		},
	}, // 4788683/272935145 (1.75%)
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
	removed?: boolean, // 23/272935145 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 23/272935145 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived"|"private",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null,
	ups: number,
	user_reports: [],
}