interface RedditComment {
	_meta: {
		is_edited?: boolean, // 14541848/250753234 (5.80%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 2119651/250753234 (0.85%)
		removal_type?: "deleted"|"removed", // 10113321/250753234 (4.03%)
		retrieved_2nd_on?: number, // 248633583/250753234 (99.15%)
		was_deleted_later?: boolean, // 8743045/250753234 (3.49%)
		was_initially_deleted?: boolean, // 1370276/250753234 (0.55%)
	},
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 839365/250753234 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19251525/44346016 (43.41%)
		e: "text"|"emoji",
		t?: string, // 25094491/44346016 (56.59%)
		u?: string, // 19251525/44346016 (43.41%)
	}[], // 240276142/250753234 (95.82%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 240276142/250753234 (95.82%)
	author_fullname?: string, // 240276142/250753234 (95.82%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 240276142/250753234 (95.82%)
	author_premium?: boolean, // 240276142/250753234 (95.82%)
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
	editable?: boolean, // 3760/250753234 (0.00%)
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
				n: "bravo"|"heart"|"fire"|"clown"|"starstruck"|"take_my_energy"|"cry"|"holo_card"|"winner"|"laugh"|"dizziness"|"nani"|"webman"|"spooky",
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
	}, // 21007/250753234 (0.01%)
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null|boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 3527123/3531093 (99.89%)
			ext?: string, // 728417/3531093 (20.63%)
			id?: string, // 3527123/3531093 (99.89%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 3527123/3531093 (99.89%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3108085/3531093 (88.02%)
			s?: {
				gif?: string, // 917199/3527123 (26.00%)
				mp4?: string, // 837741/3527123 (23.75%)
				u?: string, // 2609924/3527123 (74.00%)
				x: number,
				y: number,
			}, // 3527123/3531093 (99.89%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1147455/3531093 (32.50%)
		},
	}, // 3488964/250753234 (1.39%)
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
	rte_mode?: "markdown", // 5/250753234 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"private",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null|"NEAR_BLOCKER",
	ups: number,
	user_reports: [],
}