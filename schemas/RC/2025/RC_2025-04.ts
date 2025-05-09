interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 18555488/310018559 (5.99%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12242769/310018559 (3.95%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10472023/310018559 (3.38%)
		was_initially_deleted?: boolean, // 1770870/310018559 (0.57%)
	}, // 310018559/310470641 (99.85%)
	all_awardings: [],
	approved?: boolean, // 7/310470641 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 954721/310470641 (0.31%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 21867721/51403472 (42.54%)
		e: "text"|"emoji",
		t?: string, // 29535751/51403472 (57.46%)
		u?: string, // 21867721/51403472 (42.54%)
	}[], // 298967260/310470641 (96.29%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 298967260/310470641 (96.29%)
	author_fullname?: string, // 297195583/310470641 (95.72%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 298967260/310470641 (96.29%)
	author_premium?: boolean, // 298967260/310470641 (96.29%)
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
	editable?: boolean, // 244870/310470641 (0.08%)
	edited: boolean|number,
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 7/310470641 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 8250107/8256077 (99.93%)
			ext?: string, // 1526635/8256077 (18.49%)
			id?: string, // 8250107/8256077 (99.93%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 8250107/8256077 (99.93%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 7642518/8256077 (92.57%)
			s?: {
				gif?: string, // 1917561/8250107 (23.24%)
				mp4?: string, // 1846790/8250107 (22.39%)
				u?: string, // 6332546/8250107 (76.76%)
				x: number,
				y: number,
			}, // 8250107/8256077 (99.93%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 2134224/8256077 (25.85%)
		},
	}, // 8154804/310470641 (2.63%)
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
	removed?: boolean, // 7/310470641 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 7/310470641 (0.00%)
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