interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 18887832/362304512 (5.21%)
		removal_type?: "removed"|"deleted"|"removed by reddit", // 15111169/362304512 (4.17%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 13410132/362304512 (3.70%)
		was_initially_deleted?: boolean, // 1706419/362304512 (0.47%)
	}, // 362304512/362819044 (99.86%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1127481/362819044 (0.31%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 29775250/67566293 (44.07%)
		e: "text"|"emoji",
		t?: string, // 37791043/67566293 (55.93%)
		u?: string, // 29775250/67566293 (44.07%)
	}[], // 349568508/362819044 (96.35%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 349568508/362819044 (96.35%)
	author_fullname?: string, // 347875254/362819044 (95.88%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 349568508/362819044 (96.35%)
	author_premium?: boolean, // 349568508/362819044 (96.35%)
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
	depth?: number, // 3931590/362819044 (1.08%)
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 769736/362819044 (0.21%)
	edited: boolean|number,
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_author?: string, // 80365418/362819044 (22.15%)
	link_id: string,
	link_permalink?: string, // 80365418/362819044 (22.15%)
	link_title?: string, // 80365418/362819044 (22.15%)
	link_url?: string, // 80365418/362819044 (22.15%)
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 7901574/12115558 (65.22%)
			ext?: string, // 122018/12115558 (1.01%)
			id?: string, // 7901574/12115558 (65.22%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 7901574/12115558 (65.22%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[]|null, // 7901574/12115558 (65.22%)
			s?: {
				gif?: string, // 707339/7901574 (8.95%)
				mp4?: string, // 707339/7901574 (8.95%)
				u?: string, // 7194235/7901574 (91.05%)
				x: number,
				y: number,
			}, // 7901574/12115558 (65.22%)
			status: "valid"|"invalid"|"unprocessed",
			t?: "giphy", // 122018/12115558 (1.01%)
		},
	}, // 12115417/362819044 (3.34%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments?: number, // 80362775/362819044 (22.15%)
	num_reports: null,
	over_18?: boolean, // 80365418/362819044 (22.15%)
	parent_id: string,
	permalink: string,
	profile_img?: string, // 349316815/362819044 (96.28%)
	profile_over_18?: boolean, // 349316815/362819044 (96.28%)
	quarantine?: boolean, // 80365418/362819044 (22.15%)
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