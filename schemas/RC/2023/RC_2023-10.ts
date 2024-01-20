interface RedditComment {
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 839575/261933389 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 19993865/45969159 (43.49%)
		e: "text"|"emoji",
		t?: string, // 25975294/45969159 (56.51%)
		u?: string, // 19993865/45969159 (43.49%)
	}[], // 250878983/261933389 (95.78%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 250878983/261933389 (95.78%)
	author_fullname?: string, // 250878983/261933389 (95.78%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 250878983/261933389 (95.78%)
	author_premium?: boolean, // 250878983/261933389 (95.78%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"potentially toxic"|"comment score below threshold",
	collapsed_reason_code: null|"DELETED"|"POTENTIALLY_TOXIC"|"LOW_SCORE",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 1659/261933389 (0.00%)
	edited: boolean|number,
	expression_asset_data?: {
		[key: string]: {
			avatar: {
				e: "Image",
				m: "image/png",
				s: {
					u: string,
					x: number,
					y: number,
				},
			},
			expression: {
				e: " Image",
				l: "FRONT"|"BACK",
				m: "image/png",
				n: "bravo"|"fire"|"starstruck"|"heart"|"clown"|"take_my_energy"|"holo_card"|"winner"|"cry"|"nani"|"laugh"|"webman"|"dizziness"|"spooky",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "CROPPED"|"FULL_BODY",
			position: "CENTER"|"LEFT",
			size: "SIZE_1_X_1"|"SIZE_1_X_2",
		},
	}, // 16174/261933389 (0.01%)
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null|boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 3216033/3217657 (99.95%)
			ext?: string, // 731563/3217657 (22.74%)
			id?: string, // 3216033/3217657 (99.95%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 3216033/3217657 (99.95%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 2796574/3217657 (86.91%)
			s?: {
				gif?: string, // 907000/3216033 (28.20%)
				mp4?: string, // 826272/3216033 (25.69%)
				u?: string, // 2309033/3216033 (71.80%)
				x: number,
				y: number,
			}, // 3216033/3217657 (99.95%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1151022/3217657 (35.77%)
		},
	}, // 3171094/261933389 (1.21%)
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
	rte_mode?: "markdown", // 3/261933389 (0.00%)
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"private",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null|"NEAR_BLOCKER",
	ups: number,
	user_reports: [],
}