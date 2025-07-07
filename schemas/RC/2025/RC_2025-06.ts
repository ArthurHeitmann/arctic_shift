interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 19416498/320946573 (6.05%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12954027/320946573 (4.04%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 11062298/320946573 (3.45%)
		was_initially_deleted?: boolean, // 1891729/320946573 (0.59%)
	}, // 320946573/321538008 (99.82%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 967698/321538008 (0.30%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 21834663/53008658 (41.19%)
		e: "text"|"emoji",
		t?: string, // 31173995/53008658 (58.81%)
		u?: string, // 21834663/53008658 (41.19%)
	}[], // 309928575/321538008 (96.39%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 309928575/321538008 (96.39%)
	author_fullname?: string, // 308036218/321538008 (95.80%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 309928575/321538008 (96.39%)
	author_premium?: boolean, // 309928575/321538008 (96.39%)
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
	editable?: boolean, // 254967/321538008 (0.08%)
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
			e?: "Image"|"AnimatedImage", // 8411364/8415704 (99.95%)
			ext?: string, // 1752892/8415704 (20.83%)
			id?: string, // 8411364/8415704 (99.95%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 8411364/8415704 (99.95%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 8271055/8415704 (98.28%)
			s?: {
				gif?: string, // 2132326/8411364 (25.35%)
				mp4?: string, // 2123067/8411364 (25.24%)
				u?: string, // 6279038/8411364 (74.65%)
				x: number,
				y: number,
			}, // 8411364/8415704 (99.95%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1893201/8415704 (22.50%)
		},
	}, // 8343421/321538008 (2.59%)
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