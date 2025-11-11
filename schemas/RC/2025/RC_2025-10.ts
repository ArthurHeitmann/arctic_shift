interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 18755912/320807485 (5.85%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12330893/320807485 (3.84%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10621773/320807485 (3.31%)
		was_initially_deleted?: boolean, // 1709120/320807485 (0.53%)
	}, // 320807485/322613617 (99.44%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1036445/322613617 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 23872089/55941546 (42.67%)
		e: "text"|"emoji",
		t?: string, // 32069457/55941546 (57.33%)
		u?: string, // 23872089/55941546 (42.67%)
	}[], // 310332994/322613617 (96.19%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 310332994/322613617 (96.19%)
	author_fullname?: string, // 308623539/322613617 (95.66%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 310332994/322613617 (96.19%)
	author_premium?: boolean, // 310332994/322613617 (96.19%)
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
	editable?: boolean, // 248768/322613617 (0.08%)
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
			e?: "Image"|"AnimatedImage", // 8250263/8270441 (99.76%)
			ext?: string, // 2015403/8270441 (24.37%)
			id?: string, // 8250263/8270441 (99.76%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 8250263/8270441 (99.76%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 8250250/8270441 (99.76%)
			s?: {
				gif?: string, // 2386798/8250263 (28.93%)
				mp4?: string, // 2386785/8250263 (28.93%)
				u?: string, // 5863465/8250263 (71.07%)
				x: number,
				y: number,
			}, // 8250263/8270441 (99.76%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"sticker"|"emoji", // 2015416/8270441 (24.37%)
		},
	}, // 8270389/322613617 (2.56%)
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