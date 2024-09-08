interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 18224501/299829455 (6.08%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 11351018/299829455 (3.79%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 9640815/299829455 (3.22%)
		was_initially_deleted?: boolean, // 1710203/299829455 (0.57%)
	}, // 299829455/302096472 (99.25%)
	all_awardings: [],
	approved?: boolean, // 6/302096472 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1002426/302096472 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19827811/47437957 (41.80%)
		e: "text"|"emoji",
		t?: string, // 27610146/47437957 (58.20%)
		u?: string, // 19827811/47437957 (41.80%)
	}[], // 290016653/302096472 (96.00%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 290016653/302096472 (96.00%)
	author_fullname?: string, // 288999495/302096472 (95.66%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 290016653/302096472 (96.00%)
	author_premium?: boolean, // 290016653/302096472 (96.00%)
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
	editable?: boolean, // 81984/302096472 (0.03%)
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
				n: "bravo"|"heart"|"fire"|"starstruck"|"clown"|"take_my_energy"|"laugh"|"dizziness"|"winner"|"holo_card"|"cry"|"nani"|"webman",
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
	}, // 670/302096472 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 6/302096472 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 5259936/5269471 (99.82%)
			ext?: string, // 969674/5269471 (18.40%)
			id?: string, // 5259936/5269471 (99.82%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 5259936/5269471 (99.82%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4738047/5269471 (89.92%)
			s?: {
				gif?: string, // 1225213/5259936 (23.29%)
				mp4?: string, // 1140002/5259936 (21.67%)
				u?: string, // 4034723/5259936 (76.71%)
				x: number,
				y: number,
			}, // 5259936/5269471 (99.82%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1491563/5269471 (28.31%)
		},
	}, // 5184742/302096472 (1.72%)
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
	removed?: boolean, // 6/302096472 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 6/302096472 (0.00%)
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