interface RedditComment_2019 {
	all_awardings?: {
		award_sub_type?: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION"|"PREMIUM",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string|null,
		end_date?: null|number,
		giver_coin_reward?: null|number,
		icon_format?: null|"PNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new?: boolean,
		name: string|null,
		penny_donate?: null|number,
		penny_price?: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date?: null|number,
		subreddit_coin_reward?: number,
		subreddit_id: null|string,
	}[],
	archived?: boolean,
	associated_award?: null|{
		award_sub_type: "GLOBAL"|"COMMUNITY"|"APPRECIATION",
		award_type: "global"|"community",
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward?: null,
		icon_format?: null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate?: null,
		penny_price?: null,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null,
		subreddit_coin_reward: number,
		subreddit_id: null|"t5_228jbi",
	},
	author: string,
	author_cakeday?: boolean,
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext",
	author_fullname: string|null,
	author_patreon_flair?: boolean,
	author_premium?: boolean,
	awarders?: string[],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control?: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic"|"potentially toxic content",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number,
		gid_2?: number,
		gid_3?: number,
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked?: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string,
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[],
			s: {
				gif: string,
				mp4?: string,
				x: number,
				y: number,
			},
			status: "valid",
			t: "sticker"|"emoji"|"giphy",
		},
	},
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined?: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	steward_reports?: [],
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	total_awards_received?: number,
	treatment_tags?: [],
}
