interface RedditComment {
	_meta?: {
		corrupted_body?: string, // 1/301087477 (0.00%)
		is_edited?: boolean, // 18104558/301087477 (6.01%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 11794699/301087477 (3.92%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10180597/301087477 (3.38%)
		was_initially_deleted?: boolean, // 1614102/301087477 (0.54%)
	}, // 301087477/301704034 (99.80%)
	all_awardings: [],
	approved?: boolean, // 18/301704034 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 990246/301704034 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 22031165/51431706 (42.84%)
		e: "text"|"emoji",
		t?: string, // 29400541/51431706 (57.16%)
		u?: string, // 22031165/51431706 (42.84%)
	}[], // 289208240/301704034 (95.86%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 289208240/301704034 (95.86%)
	author_fullname?: string, // 287593947/301704034 (95.32%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 289208240/301704034 (95.86%)
	author_premium?: boolean, // 289208240/301704034 (95.86%)
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
	editable?: boolean, // 126260/301704034 (0.04%)
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
				n: "holo_card",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "FULL_BODY",
			position: "CENTER",
			size: "SIZE_1_X_1",
		},
	}, // 2/301704034 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 18/301704034 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 6301879/6307394 (99.91%)
			ext?: string, // 1256873/6307394 (19.93%)
			id?: string, // 6301879/6307394 (99.91%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 6301879/6307394 (99.91%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5865538/6307394 (92.99%)
			s?: {
				gif?: string, // 1558894/6301879 (24.74%)
				mp4?: string, // 1477645/6301879 (23.45%)
				u?: string, // 4742985/6301879 (75.26%)
				x: number,
				y: number,
			}, // 6301879/6307394 (99.91%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1693214/6307394 (26.84%)
		},
	}, // 6234264/301704034 (2.07%)
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
	removed?: boolean, // 18/301704034 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 18/301704034 (0.00%)
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