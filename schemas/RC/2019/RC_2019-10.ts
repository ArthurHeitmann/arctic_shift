interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION",
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
	associated_award: null|{
		award_sub_type: "GLOBAL",
		award_type: "global",
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: "gid_1"|"gid_2"|"gid_3",
		is_enabled: boolean,
		is_new: boolean,
		name: "Silver"|"Gold"|"Platinum",
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null,
		subreddit_coin_reward: number,
		subreddit_id: null,
	},
	author: string,
	author_cakeday?: boolean, // 686951/145909884 (0.47%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 10374209/28061019 (36.97%)
		e: "text"|"emoji",
		t?: string, // 17686810/28061019 (63.03%)
		u?: string, // 10374209/28061019 (36.97%)
	}[], // 131574795/145909884 (90.18%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 131574795/145909884 (90.18%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 131574795/145909884 (90.18%)
	author_premium?: boolean, // 131574795/145909884 (90.18%)
	awarders: string[],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 84108/145909884 (0.06%)
		gid_2?: number, // 36325/145909884 (0.02%)
		gid_3?: number, // 4208/145909884 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string, // 1375/14603 (9.42%)
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1375/14603 (9.42%)
			s: {
				gif: string,
				mp4?: string, // 1375/14603 (9.42%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "emoji"|"sticker"|"giphy",
		},
	}, // 13404/145909884 (0.01%)
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	steward_reports?: [], // 96270843/145909884 (65.98%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user",
	total_awards_received: number,
}