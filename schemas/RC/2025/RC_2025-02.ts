interface RedditComment {
	_meta?: {
		corrupted_body?: string, // 2/301921429 (0.00%)
		is_edited?: boolean, // 18206178/301921429 (6.03%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 11790357/301921429 (3.91%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10029892/301921429 (3.32%)
		was_initially_deleted?: boolean, // 1760497/301921429 (0.58%)
	}, // 301921429/304394634 (99.19%)
	all_awardings: [],
	approved?: boolean, // 19/304394634 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 993760/304394634 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 20529586/48392907 (42.42%)
		e: "text"|"emoji",
		t?: string, // 27863321/48392907 (57.58%)
		u?: string, // 20529586/48392907 (42.42%)
	}[], // 291548251/304394634 (95.78%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 291548251/304394634 (95.78%)
	author_fullname?: string, // 289787518/304394634 (95.20%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 291548251/304394634 (95.78%)
	author_premium?: boolean, // 291548251/304394634 (95.78%)
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
	editable?: boolean, // 119335/304394634 (0.04%)
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
				n: "starstruck",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "CROPPED",
			position: "CENTER",
			size: "SIZE_1_X_2",
		},
	}, // 1/304394634 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 19/304394634 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 7512318/7516476 (99.94%)
			ext?: string, // 1455375/7516476 (19.36%)
			id?: string, // 7512318/7516476 (99.94%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 7512318/7516476 (99.94%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6974996/7516476 (92.80%)
			s?: {
				gif?: string, // 1822273/7512318 (24.26%)
				mp4?: string, // 1744500/7512318 (23.22%)
				u?: string, // 5690045/7512318 (75.74%)
				x: number,
				y: number,
			}, // 7512318/7516476 (99.94%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1992697/7516476 (26.51%)
		},
	}, // 7426628/304394634 (2.44%)
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
	removed?: boolean, // 19/304394634 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 19/304394634 (0.00%)
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