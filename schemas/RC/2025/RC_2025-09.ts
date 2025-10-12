interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 18805314/320637365 (5.86%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12762740/320637365 (3.98%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 11047161/320637365 (3.45%)
		was_initially_deleted?: boolean, // 1715579/320637365 (0.54%)
	}, // 320637365/322032261 (99.57%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1022068/322032261 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 23750106/55555656 (42.75%)
		e: "text"|"emoji",
		t?: string, // 31805550/55555656 (57.25%)
		u?: string, // 23750106/55555656 (42.75%)
	}[], // 309437989/322032261 (96.09%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 309437989/322032261 (96.09%)
	author_fullname?: string, // 307722043/322032261 (95.56%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 309437989/322032261 (96.09%)
	author_premium?: boolean, // 309437989/322032261 (96.09%)
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
	editable?: boolean, // 258633/322032261 (0.08%)
	edited: boolean|number,
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 8021629/8027987 (99.92%)
			ext?: string, // 1939890/8027987 (24.16%)
			id?: string, // 8021629/8027987 (99.92%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 8021629/8027987 (99.92%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 8021624/8027987 (99.92%)
			s?: {
				gif?: string, // 2290806/8021629 (28.56%)
				mp4?: string, // 2290801/8021629 (28.56%)
				u?: string, // 5730823/8021629 (71.44%)
				x: number,
				y: number,
			}, // 8021629/8027987 (99.92%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1939895/8027987 (24.16%)
		},
	}, // 8027929/322032261 (2.49%)
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
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
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