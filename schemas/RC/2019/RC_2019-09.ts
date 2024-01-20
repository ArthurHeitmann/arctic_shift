interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"COMMUNITY"|"MODERATOR",
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
		is_new: boolean,
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
	author_cakeday?: boolean, // 464614/137540219 (0.34%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 9574262/26294991 (36.41%)
		e: "text"|"emoji",
		t?: string, // 16720729/26294991 (63.59%)
		u?: string, // 9574262/26294991 (36.41%)
	}[], // 124895044/137540219 (90.81%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 124895044/137540219 (90.81%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 124895044/137540219 (90.81%)
	author_premium?: boolean, // 124895044/137540219 (90.81%)
	awarders: string[],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic content",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 80643/137540219 (0.06%)
		gid_2?: number, // 34456/137540219 (0.03%)
		gid_3?: number, // 4053/137540219 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string, // 200/11379 (1.76%)
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 200/11379 (1.76%)
			s: {
				gif: string,
				mp4?: string, // 200/11379 (1.76%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "emoji"|"sticker"|"giphy",
		},
	}, // 10005/137540219 (0.01%)
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
	subreddit_type: "public"|"restricted"|"user",
	total_awards_received: number,
}