interface RedditComment {
	_meta?: {
		corrupted_body?: string, // 2/303438403 (0.00%)
		is_edited?: boolean, // 18472112/303438403 (6.09%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 11946091/303438403 (3.94%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10305449/303438403 (3.40%)
		was_initially_deleted?: boolean, // 1640642/303438403 (0.54%)
	}, // 303438403/304008295 (99.81%)
	all_awardings: [],
	approved?: boolean, // 12/304008295 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 989079/304008295 (0.33%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 22177365/51171007 (43.34%)
		e: "text"|"emoji",
		t?: string, // 28993642/51171007 (56.66%)
		u?: string, // 22177365/51171007 (43.34%)
	}[], // 292577640/304008295 (96.24%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 292577640/304008295 (96.24%)
	author_fullname?: string, // 290936139/304008295 (95.70%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 292577640/304008295 (96.24%)
	author_premium?: boolean, // 292577640/304008295 (96.24%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 131382/304008295 (0.04%)
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
				l: "FRONT",
				m: "image/png",
				n: "fire"|"heart",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "FULL_BODY"|"CROPPED",
			position: "CENTER",
			size: "SIZE_1_X_2",
		},
	}, // 2/304008295 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 12/304008295 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 6259240/6266253 (99.89%)
			ext?: string, // 1240955/6266253 (19.80%)
			id?: string, // 6259240/6266253 (99.89%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 6259240/6266253 (99.89%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5804700/6266253 (92.63%)
			s?: {
				gif?: string, // 1530611/6259240 (24.45%)
				mp4?: string, // 1447680/6259240 (23.13%)
				u?: string, // 4728629/6259240 (75.55%)
				x: number,
				y: number,
			}, // 6259240/6266253 (99.89%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 1695495/6266253 (27.06%)
		},
	}, // 6192186/304008295 (2.04%)
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
	removed?: boolean, // 12/304008295 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 12/304008295 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null|"NEAR_BLOCKER",
	ups: number,
	user_reports: [],
}