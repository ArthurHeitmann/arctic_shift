interface RedditComment {
	_meta?: {
		corrupted_body?: string, // 5/325377154 (0.00%)
		is_edited?: boolean, // 18317382/325377154 (5.63%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12482995/325377154 (3.84%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10628353/325377154 (3.27%)
		was_initially_deleted?: boolean, // 1855157/325377154 (0.57%)
	}, // 325377154/325778061 (99.88%)
	all_awardings: [],
	approved?: boolean, // 6/325778061 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1004821/325778061 (0.31%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 22442356/52980755 (42.36%)
		e: "text"|"emoji",
		t?: string, // 30538399/52980755 (57.64%)
		u?: string, // 22442356/52980755 (42.36%)
	}[], // 312968014/325778061 (96.07%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 312968014/325778061 (96.07%)
	author_fullname?: string, // 311112509/325778061 (95.50%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 312968014/325778061 (96.07%)
	author_premium?: boolean, // 312968014/325778061 (96.07%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 127672/325778061 (0.04%)
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
				n: "winner",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "FULL_BODY",
			position: "CENTER",
			size: "SIZE_1_X_2",
		},
	}, // 1/325778061 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 6/325778061 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 8536389/8540639 (99.95%)
			ext?: string, // 1629675/8540639 (19.08%)
			id?: string, // 8536389/8540639 (99.95%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 8536389/8540639 (99.95%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 7921102/8540639 (92.75%)
			s?: {
				gif?: string, // 2034887/8536389 (23.84%)
				mp4?: string, // 1955154/8536389 (22.90%)
				u?: string, // 6501502/8536389 (76.16%)
				x: number,
				y: number,
			}, // 8536389/8540639 (99.95%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 2244962/8540639 (26.29%)
		},
	}, // 8436405/325778061 (2.59%)
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
	removed?: boolean, // 6/325778061 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 6/325778061 (0.00%)
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