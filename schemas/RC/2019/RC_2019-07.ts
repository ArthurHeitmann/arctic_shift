interface RedditComment {
	all_awardings: {
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		name: string|null,
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
	author_cakeday?: boolean, // 485196/145965083 (0.33%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 7736274/23740218 (32.59%)
		e: "text"|"emoji",
		t?: string, // 16003944/23740218 (67.41%)
		u?: string, // 7736274/23740218 (32.59%)
	}[], // 132012102/145965083 (90.44%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 132012102/145965083 (90.44%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 132012102/145965083 (90.44%)
	awarders: ("wearewildwinter"|"ucbsuperfreak"|"Dragonster82"|"NovaKevin"|"Dev_h1pp0p0t4mu5"|"ForgottenLoreInAutum")[],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_reason: null|"comment score below threshold",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 84379/145965083 (0.06%)
		gid_2?: number, // 36011/145965083 (0.02%)
		gid_3?: number, // 4072/145965083 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			id: "emote|emo_pack_1|dance"|"emote|emo_pack_1|cuddle"|"emote|emo_pack_1|dab"|"emote|emo_pack_1|respect"|"emote|emo_pack_1|confused"|"emote|emo_pack_1|uNfOrTuNaTeLy"|"emote|emo_pack_1|clappy"|"emote|emo_pack_1|bush"|"emote|emo_pack_1|soon",
			m: "image/gif",
			s: {
				gif: string,
				x: number,
				y: number,
			},
			status: "valid",
			t: "emoji"|"sticker",
		},
	}, // 122/145965083 (0.00%)
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