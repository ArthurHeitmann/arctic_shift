interface RedditComment {
	_meta?: {
		corrupted_body?: string, // 1/331457015 (0.00%)
		is_edited?: boolean, // 20157997/331457015 (6.08%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12992971/331457015 (3.92%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 11131558/331457015 (3.36%)
		was_initially_deleted?: boolean, // 1861413/331457015 (0.56%)
	}, // 331457015/331981953 (99.84%)
	all_awardings: [],
	approved?: boolean, // 13/331981953 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1719382/331981953 (0.52%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 23976787/55555036 (43.16%)
		e: "text"|"emoji",
		t?: string, // 31578249/55555036 (56.84%)
		u?: string, // 23976787/55555036 (43.16%)
	}[], // 319661187/331981953 (96.29%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 319661187/331981953 (96.29%)
	author_fullname?: string, // 317799566/331981953 (95.73%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 319661187/331981953 (96.29%)
	author_premium?: boolean, // 319661187/331981953 (96.29%)
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
	editable?: boolean, // 111122/331981953 (0.03%)
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
				n: "bravo"|"fire",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "CROPPED"|"FULL_BODY",
			position: "CENTER",
			size: "SIZE_1_X_1"|"SIZE_1_X_2",
		},
	}, // 2/331981953 (0.00%)
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean, // 13/331981953 (0.00%)
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 7940267/7945000 (99.94%)
			ext?: string, // 1560812/7945000 (19.65%)
			id?: string, // 7940267/7945000 (99.94%)
			m?: "image/jpeg"|"image/gif"|"image/png", // 7940267/7945000 (99.94%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 7443675/7945000 (93.69%)
			s?: {
				gif?: string, // 1948994/7940267 (24.55%)
				mp4?: string, // 1867280/7940267 (23.52%)
				u?: string, // 5991273/7940267 (75.45%)
				x: number,
				y: number,
			}, // 7940267/7945000 (99.94%)
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker", // 2057404/7945000 (25.90%)
		},
	}, // 7859553/331981953 (2.37%)
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
	removed?: boolean, // 13/331981953 (0.00%)
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean, // 13/331981953 (0.00%)
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