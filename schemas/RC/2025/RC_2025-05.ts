interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 19523801/323617267 (6.03%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12773230/323617267 (3.95%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10897819/323617267 (3.37%)
		was_initially_deleted?: boolean, // 1875411/323617267 (0.58%)
	}, // 323617267/325163510 (99.52%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 945622/325163510 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 23738533/54884529 (43.25%)
		e: "text"|"emoji",
		t?: string, // 31145996/54884529 (56.75%)
		u?: string, // 23738533/54884529 (43.25%)
	}[], // 313408244/325163510 (96.38%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 313408244/325163510 (96.38%)
	author_fullname?: string, // 311531970/325163510 (95.81%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 313408244/325163510 (96.38%)
	author_premium?: boolean, // 313408244/325163510 (96.38%)
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
	editable?: boolean, // 256879/325163510 (0.08%)
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
			e?: "Image"|"AnimatedImage", // 8668871/8673224 (99.95%)
			ext?: string, // 1671491/8673224 (19.27%)
			id?: string, // 8668871/8673224 (99.95%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 8668871/8673224 (99.95%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 8008067/8673224 (92.33%)
			s?: {
				gif?: string, // 2091624/8668871 (24.13%)
				mp4?: string, // 2020016/8668871 (23.30%)
				u?: string, // 6577247/8668871 (75.87%)
				x: number,
				y: number,
			}, // 8668871/8673224 (99.95%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 2332295/8673224 (26.89%)
		},
	}, // 8512897/325163510 (2.62%)
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