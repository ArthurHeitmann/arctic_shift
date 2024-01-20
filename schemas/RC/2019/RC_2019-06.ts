interface RedditComment {
	all_awardings: {
		award_type: "global"|"community",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date?: null, // 123819/124032 (99.83%)
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		name: string,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date?: null, // 123819/124032 (99.83%)
		subreddit_coin_reward?: number, // 123819/124032 (99.83%)
		subreddit_id: null|string,
	}[],
	associated_award?: null, // 35479646/134172939 (26.44%)
	author: string,
	author_cakeday?: boolean, // 453384/134172939 (0.34%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 7222218/22186778 (32.55%)
		e: "text"|"emoji",
		t?: string, // 14964560/22186778 (67.45%)
		u?: string, // 7222218/22186778 (32.55%)
	}[], // 121658083/134172939 (90.67%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 121658083/134172939 (90.67%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 121658083/134172939 (90.67%)
	awarders?: ("Bioniclegenius"|"Belli91"|"shuntzu7")[], // 92765281/134172939 (69.14%)
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
		gid_1?: number, // 82029/134172939 (0.06%)
		gid_2?: number, // 37245/134172939 (0.03%)
		gid_3?: number, // 4020/134172939 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			id: "emote|emo_pack_1|oof"|"emote|emo_pack_1|dance"|"emote|emo_pack_1|clappy"|"emote|emo_pack_1|dab"|"emote|emo_pack_1|respect"|"emote|emo_pack_1|uNfOrTuNaTeLy"|"emote|emo_pack_1|confused"|"emote|emo_pack_1|wow"|"emote|emo_pack_1|bush"|"emote|emo_pack_1|cuddle"|"emote|emo_pack_1|chug"|"emote|emo_pack_1|default"|"emote|emo_pack_1|blink"|"emote|free_emotes_pack|facepalm",
			m: "image/gif",
			s: {
				gif: string,
				x: number,
				y: number,
			},
			status: "valid",
			t: "sticker"|"emoji",
		},
	}, // 162/134172939 (0.00%)
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	steward_reports?: [], // 134165155/134172939 (99.99%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	total_awards_received: number,
}