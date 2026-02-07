interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 19858453/352964143 (5.63%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 13920078/352964143 (3.94%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 12212768/352964143 (3.46%)
		was_initially_deleted?: boolean, // 1707310/352964143 (0.48%)
	}, // 352964143/354266325 (99.63%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1788661/354266325 (0.50%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 25408085/59943143 (42.39%)
		e: "text"|"emoji",
		t?: string, // 34535058/59943143 (57.61%)
		u?: string, // 25408085/59943143 (42.39%)
	}[], // 341272672/354266325 (96.33%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 341272672/354266325 (96.33%)
	author_fullname?: string, // 339565221/354266325 (95.85%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 341272672/354266325 (96.33%)
	author_premium?: boolean, // 341272672/354266325 (96.33%)
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
	editable?: boolean, // 290581/354266325 (0.08%)
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
			e?: "Image"|"AnimatedImage", // 10386920/10448741 (99.41%)
			ext?: string, // 2688165/10448741 (25.73%)
			id?: string, // 10386920/10448741 (99.41%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 10386920/10448741 (99.41%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 10386912/10448741 (99.41%)
			s?: {
				gif?: string, // 3156811/10386920 (30.39%)
				mp4?: string, // 3156803/10386920 (30.39%)
				u?: string, // 7230109/10386920 (69.61%)
				x: number,
				y: number,
			}, // 10386920/10448741 (99.41%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"sticker"|"emoji", // 2688173/10448741 (25.73%)
		},
	}, // 10448691/354266325 (2.95%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports: null,
	parent_id: string,
	permalink: string,
	profile_img?: string, // 7491233/354266325 (2.11%)
	profile_over_18?: boolean, // 7491233/354266325 (2.11%)
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
	subreddit_type: "public"|"user"|"restricted",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null,
	ups: number,
	user_reports: [],
}