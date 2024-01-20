interface RedditComment {
	all_awardings: {
		award_sub_type?: "GLOBAL"|"COMMUNITY"|"MODERATOR", // 121159/129750 (93.38%)
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null|number,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new?: boolean, // 121159/129750 (93.38%)
		name: string,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	}[],
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 491625/146854393 (0.33%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 8943309/25235417 (35.44%)
		e: "text"|"emoji",
		t?: string, // 16292108/25235417 (64.56%)
		u?: string, // 8943309/25235417 (35.44%)
	}[], // 132869482/146854393 (90.48%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 132869482/146854393 (90.48%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 132869482/146854393 (90.48%)
	author_premium?: boolean, // 31671107/146854393 (21.57%)
	awarders: string[],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control?: null, // 65670506/146854393 (44.72%)
	collapsed_reason: null|"comment score below threshold",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 84429/146854393 (0.06%)
		gid_2?: number, // 39002/146854393 (0.03%)
		gid_3?: number, // 4105/146854393 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			id: string,
			m: "image/gif",
			s: {
				gif: string,
				x: number,
				y: number,
			},
			status: "valid",
			t: "emoji"|"sticker",
		},
	}, // 1669/146854393 (0.00%)
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	steward_reports: [],
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	total_awards_received: number,
}