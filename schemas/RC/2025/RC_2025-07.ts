interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 19459913/334709131 (5.81%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 13328930/334709131 (3.98%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 11483516/334709131 (3.43%)
		was_initially_deleted?: boolean, // 1845414/334709131 (0.55%)
	}, // 334709131/335026067 (99.91%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1094124/335026067 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 22177657/54421000 (40.75%)
		e: "text"|"emoji",
		t?: string, // 32243343/54421000 (59.25%)
		u?: string, // 22177657/54421000 (40.75%)
	}[], // 323246791/335026067 (96.48%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 323246791/335026067 (96.48%)
	author_fullname?: string, // 321400896/335026067 (95.93%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 323246791/335026067 (96.48%)
	author_premium?: boolean, // 323246791/335026067 (96.48%)
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
	editable?: boolean, // 252262/335026067 (0.08%)
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
			e?: "Image"|"AnimatedImage", // 8525080/8531676 (99.92%)
			ext?: string, // 1906417/8531676 (22.35%)
			id?: string, // 8525080/8531676 (99.92%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 8525080/8531676 (99.92%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 8525064/8531676 (99.92%)
			s?: {
				gif?: string, // 2302145/8525080 (27.00%)
				mp4?: string, // 2302129/8525080 (27.00%)
				u?: string, // 6222935/8525080 (73.00%)
				x: number,
				y: number,
			}, // 8525080/8531676 (99.92%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"sticker"|"emoji", // 1906433/8531676 (22.35%)
		},
	}, // 8531618/335026067 (2.55%)
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