interface RedditComment {
	_meta: {
		is_edited?: boolean, // 13900178/256958636 (5.41%)
		note?: "initially_unavailable"|"no_2nd_retrieval", // 2271239/256958636 (0.88%)
		removal_type?: "deleted"|"removed", // 8585237/256958636 (3.34%)
		retrieved_2nd_on?: number, // 254687397/256958636 (99.12%)
		was_deleted_later?: boolean, // 7387773/256958636 (2.88%)
		was_initially_deleted?: boolean, // 1197464/256958636 (0.47%)
	},
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 808088/256958636 (0.31%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19361782/44458928 (43.55%)
		e: "text"|"emoji",
		t?: string, // 25097146/44458928 (56.45%)
		u?: string, // 19361782/44458928 (43.55%)
	}[], // 245418477/256958636 (95.51%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 245418477/256958636 (95.51%)
	author_fullname?: string, // 245418477/256958636 (95.51%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 245418477/256958636 (95.51%)
	author_premium?: boolean, // 245418477/256958636 (95.51%)
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
	editable?: boolean, // 5670/256958636 (0.00%)
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
				n: "bravo"|"heart"|"starstruck"|"fire"|"clown"|"take_my_energy"|"holo_card"|"winner"|"laugh"|"cry"|"dizziness"|"webman"|"nani",
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
	}, // 18219/256958636 (0.01%)
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
			e?: "Image"|"AnimatedImage", // 3822391/3826823 (99.88%)
			ext?: string, // 765346/3826823 (20.00%)
			id?: string, // 3822391/3826823 (99.88%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 3822391/3826823 (99.88%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3375874/3826823 (88.22%)
			s?: {
				gif?: string, // 962970/3822391 (25.19%)
				mp4?: string, // 887517/3822391 (23.22%)
				u?: string, // 2859421/3822391 (74.81%)
				x: number,
				y: number,
			}, // 3822391/3826823 (99.88%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1211863/3826823 (31.67%)
		},
	}, // 3773193/256958636 (1.47%)
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
	rte_mode?: "markdown", // 5/256958636 (0.00%)
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