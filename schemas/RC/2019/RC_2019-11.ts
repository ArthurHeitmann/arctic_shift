interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION"|"PREMIUM",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null|number,
		giver_coin_reward?: null, // 18087/122966 (14.71%)
		icon_format?: null, // 91598/122966 (74.49%)
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate?: null, // 18087/122966 (14.71%)
		penny_price?: null, // 18087/122966 (14.71%)
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	}[],
	associated_award: null|{
		award_sub_type: "GLOBAL"|"COMMUNITY",
		award_type: "global"|"community",
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: "Silver"|"Gold"|"Musical skills!"|"Doggles"|"Artistic skills!"|"Platinum"|"SHOW ME YOUR FRIDGE"|"Eek!"|"Gamer alert!"|"Top chef!"|"Bee Happy"|"Thirsty..."|"Space Goat"|"PANANAS"|"Golden PAN",
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
	author_cakeday?: boolean, // 513064/138512489 (0.37%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 9602753/27234477 (35.26%)
		e: "text"|"emoji",
		t?: string, // 17631724/27234477 (64.74%)
		u?: string, // 9602753/27234477 (35.26%)
	}[], // 125142165/138512489 (90.35%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 125142165/138512489 (90.35%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 125142165/138512489 (90.35%)
	author_premium?: boolean, // 125142165/138512489 (90.35%)
	awarders: string[],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 81636/138512489 (0.06%)
		gid_2?: number, // 34036/138512489 (0.02%)
		gid_3?: number, // 3696/138512489 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string, // 854/7846 (10.88%)
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 854/7846 (10.88%)
			s: {
				gif: string,
				mp4?: string, // 854/7846 (10.88%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "emoji"|"sticker"|"giphy",
		},
	}, // 7045/138512489 (0.01%)
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	total_awards_received: number,
}