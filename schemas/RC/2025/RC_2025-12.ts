interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 18437514/322532298 (5.72%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12522257/322532298 (3.88%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10993092/322532298 (3.41%)
		was_initially_deleted?: boolean, // 1529165/322532298 (0.47%)
	}, // 322532298/323740583 (99.63%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1033615/323740583 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 24096923/56192151 (42.88%)
		e: "text"|"emoji",
		t?: string, // 32095228/56192151 (57.12%)
		u?: string, // 24096923/56192151 (42.88%)
	}[], // 312729076/323740583 (96.60%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 312729076/323740583 (96.60%)
	author_fullname?: string, // 311199731/323740583 (96.13%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 312729076/323740583 (96.60%)
	author_premium?: boolean, // 312729076/323740583 (96.60%)
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
	editable?: boolean, // 236134/323740583 (0.07%)
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
			e?: "Image"|"AnimatedImage", // 8934699/8940244 (99.94%)
			ext?: string, // 2286273/8940244 (25.57%)
			id?: string, // 8934699/8940244 (99.94%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 8934699/8940244 (99.94%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 8934685/8940244 (99.94%)
			s?: {
				gif?: string, // 2693862/8934699 (30.15%)
				mp4?: string, // 2693848/8934699 (30.15%)
				u?: string, // 6240837/8934699 (69.85%)
				x: number,
				y: number,
			}, // 8934699/8940244 (99.94%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"sticker"|"emoji", // 2286287/8940244 (25.57%)
		},
	}, // 8940199/323740583 (2.76%)
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
	subreddit_type: "public"|"restricted"|"user",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null,
	ups: number,
	user_reports: [],
}