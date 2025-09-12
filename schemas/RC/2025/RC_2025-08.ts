interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 19403631/329834187 (5.88%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12921203/329834187 (3.92%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 11122427/329834187 (3.37%)
		was_initially_deleted?: boolean, // 1798776/329834187 (0.55%)
	}, // 329834187/330560784 (99.78%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1081956/330560784 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 22735301/54809931 (41.48%)
		e: "text"|"emoji",
		t?: string, // 32074630/54809931 (58.52%)
		u?: string, // 22735301/54809931 (41.48%)
	}[], // 318596690/330560784 (96.38%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 318596690/330560784 (96.38%)
	author_fullname?: string, // 316797333/330560784 (95.84%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 318596690/330560784 (96.38%)
	author_premium?: boolean, // 318596690/330560784 (96.38%)
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
	editable?: boolean, // 280177/330560784 (0.08%)
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
			e?: "Image"|"AnimatedImage", // 8591702/8598251 (99.92%)
			ext?: string, // 1948107/8598251 (22.66%)
			id?: string, // 8591702/8598251 (99.92%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 8591702/8598251 (99.92%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 8591681/8598251 (99.92%)
			s?: {
				gif?: string, // 2327894/8591702 (27.09%)
				mp4?: string, // 2327873/8591702 (27.09%)
				u?: string, // 6263808/8591702 (72.91%)
				x: number,
				y: number,
			}, // 8591702/8598251 (99.92%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"sticker"|"emoji", // 1948128/8598251 (22.66%)
		},
	}, // 8598202/330560784 (2.60%)
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