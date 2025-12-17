interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 17249456/308489316 (5.59%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 11419187/308489316 (3.70%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 9990022/308489316 (3.24%)
		was_initially_deleted?: boolean, // 1429165/308489316 (0.46%)
	}, // 308489316/311247864 (99.11%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 989653/311247864 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 24169575/55524812 (43.53%)
		e: "text"|"emoji",
		t?: string, // 31355237/55524812 (56.47%)
		u?: string, // 24169575/55524812 (43.53%)
	}[], // 299964033/311247864 (96.37%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 299964033/311247864 (96.37%)
	author_fullname?: string, // 298534800/311247864 (95.92%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 299964033/311247864 (96.37%)
	author_premium?: boolean, // 299964033/311247864 (96.37%)
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
	editable?: boolean, // 233677/311247864 (0.08%)
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
			e?: "Image"|"AnimatedImage", // 8319500/8324632 (99.94%)
			ext?: string, // 2038192/8324632 (24.48%)
			id?: string, // 8319500/8324632 (99.94%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 8319500/8324632 (99.94%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 8319479/8324632 (99.94%)
			s?: {
				gif?: string, // 2418233/8319500 (29.07%)
				mp4?: string, // 2418212/8319500 (29.07%)
				u?: string, // 5901267/8319500 (70.93%)
				x: number,
				y: number,
			}, // 8319500/8324632 (99.94%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 2038213/8324632 (24.48%)
		},
	}, // 8324581/311247864 (2.67%)
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