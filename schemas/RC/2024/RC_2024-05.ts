interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 17164242/271213338 (6.33%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 10216708/271213338 (3.77%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 8641808/271213338 (3.19%)
		was_initially_deleted?: boolean, // 1574974/271213338 (0.58%)
	}, // 271213338/272927436 (99.37%)
	all_awardings: [],
	approved?: boolean, // 12/272927436 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 778863/272927436 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19212051/45667574 (42.07%)
		e: "text"|"emoji",
		t?: string, // 26455523/45667574 (57.93%)
		u?: string, // 19212051/45667574 (42.07%)
	}[], // 263030629/272927436 (96.37%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 263030629/272927436 (96.37%)
	author_fullname?: string, // 261964975/272927436 (95.98%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 263030629/272927436 (96.37%)
	author_premium?: boolean, // 263030629/272927436 (96.37%)
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
	editable?: boolean, // 80538/272927436 (0.03%)
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
				n: "bravo"|"heart"|"fire"|"starstruck"|"take_my_energy"|"clown"|"holo_card"|"cry"|"dizziness"|"laugh"|"winner"|"webman"|"nani",
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
	}, // 4076/272927436 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 12/272927436 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 4802983/4827329 (99.50%)
			ext?: string, // 886815/4827329 (18.37%)
			id?: string, // 4802983/4827329 (99.50%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 4802983/4827329 (99.50%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4297903/4827329 (89.03%)
			s?: {
				gif?: string, // 1152528/4802983 (24.00%)
				mp4?: string, // 1068666/4802983 (22.25%)
				u?: string, // 3650455/4802983 (76.00%)
				x: number,
				y: number,
			}, // 4802983/4827329 (99.50%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1391895/4827329 (28.83%)
		},
	}, // 4755791/272927436 (1.74%)
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
	removed?: boolean, // 12/272927436 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 12/272927436 (0.00%)
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