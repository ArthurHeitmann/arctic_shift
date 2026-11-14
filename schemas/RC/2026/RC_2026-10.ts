interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 14079939/324295397 (4.34%)
		removal_type?: "removed"|"deleted"|"removed by reddit", // 7846424/324295397 (2.42%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7092031/324295397 (2.19%)
		was_initially_deleted?: boolean, // 766776/324295397 (0.24%)
	}, // 324295397/363367566 (89.25%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award?: null, // 363367559/363367566 (100.00%)
	author: string,
	author_cakeday?: boolean, // 525505/363367566 (0.14%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 33708980/75847695 (44.44%)
		e: "text"|"emoji",
		t?: string, // 42138715/75847695 (55.56%)
		u?: string, // 33708980/75847695 (44.44%)
	}[], // 355252371/363367566 (97.77%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 355252371/363367566 (97.77%)
	author_fullname?: string, // 354211996/363367566 (97.48%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 355252371/363367566 (97.77%)
	author_premium?: boolean, // 355252371/363367566 (97.77%)
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
	depth?: number, // 320440965/363367566 (88.19%)
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 528758/363367566 (0.15%)
	edited: boolean|number,
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_author?: string|null, // 307023737/363367566 (84.49%)
	link_id: string,
	link_permalink?: string, // 307023737/363367566 (84.49%)
	link_title?: string, // 307023737/363367566 (84.49%)
	link_url?: string, // 307023737/363367566 (84.49%)
	locked: boolean,
	media_id?: null, // 8419069/363367566 (2.32%)
	media_metadata?: {
		[key: string]: {
			dashUrl?: string|null, // 138700/12551171 (1.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 9640321/12551171 (76.81%)
			ext?: string, // 108591/12551171 (0.87%)
			hlsUrl?: string|null, // 138700/12551171 (1.11%)
			id?: string, // 9640321/12551171 (76.81%)
			isGif?: boolean, // 138700/12551171 (1.11%)
			m?: "image/jpeg"|"image/gif"|"image/png"|"image/jpg"|"image/webp", // 9501621/12551171 (75.70%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[]|null, // 9501621/12551171 (75.70%)
			s?: {
				gif?: string, // 2110641/9501621 (22.21%)
				mp4?: string, // 2110634/9501621 (22.21%)
				u?: string|null, // 7390980/9501621 (77.79%)
				x: number|null,
				y: number|null,
			}, // 9501621/12551171 (75.70%)
			status: "valid"|"invalid"|"unprocessed"|"failed",
			t?: "giphy", // 108591/12551171 (0.87%)
			x?: number|null, // 138700/12551171 (1.11%)
			y?: number|null, // 138700/12551171 (1.11%)
		},
	}, // 12549362/363367566 (3.45%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments?: number, // 307015885/363367566 (84.49%)
	num_reports: null,
	over_18?: boolean, // 307023737/363367566 (84.49%)
	parent_id: string,
	permalink: string,
	profile_img?: string|null, // 355144774/363367566 (97.74%)
	profile_over_18?: boolean, // 355144774/363367566 (97.74%)
	quarantine?: boolean, // 307023737/363367566 (84.49%)
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
	subreddit_type: "public"|"restricted"|"user"|"archived"|null,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: null, // 363367559/363367566 (100.00%)
	ups: number,
	user_reports: [],
}