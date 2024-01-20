interface RedditPost {
	adserver_click_url?: null, // 12/331060 (0.00%)
	adserver_imp_pixel?: null, // 12/331060 (0.00%)
	approved?: boolean, // 5700/331060 (1.72%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 297/331060 (0.09%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 260369/331060 (78.65%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 260369/331060 (78.65%)
	author_id?: "t2_1ed7b"|"t2_1s9v"|"t2_1wh0"|"t2_1w72", // 12/331060 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator",
	domain: string,
	domain_override?: null, // 12/331060 (0.00%)
	edited: boolean|number,
	embed_type?: null, // 12/331060 (0.00%)
	embed_url?: null, // 12/331060 (0.00%)
	events?: [], // 12/331060 (0.00%)
	eventsOnRender?: [], // 12/331060 (0.00%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 12/331060 (0.00%)
	id: string,
	ignore_reports?: boolean, // 5700/331060 (1.72%)
	is_blank?: boolean, // 12/331060 (0.00%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/331060 (0.00%)
	link_flair_css_class: null|""|"article"|"legal"|"history"|"brown"|"normal",
	link_flair_richtext: {
		e: "text",
		t: "Video"|"Article"|"Legal"|"HISTORY"|"[suicidewatch]"|"Politics"|"No videos",
	}[],
	link_flair_text: null|"Video"|"Article"|"Legal"|"HISTORY"|"[suicidewatch]"|"Politics"|"No videos",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: "manchesterunitedpimp"|"Bright"|"RT"|"pirateonboard"|"Hagit Leibowitz"|"Machinima"|"britpod"|"The Young Turks"|"lulusparky"|"MASS LBP", // 10/11 (90.91%)
			author_url?: string, // 10/11 (90.91%)
			cache_age?: number, // 1/11 (9.09%)
			description?: string, // 2/11 (18.18%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Scribd",
			provider_url: "https://www.youtube.com/"|"http://youtube.com"|"https://www.scribd.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 2/11 (18.18%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"jp.youtube.com"|"uk.youtube.com"|"scribd.com",
	},
	media_embed: {
		content?: string, // 11/331060 (0.00%)
		height?: number, // 11/331060 (0.00%)
		media_domain_url?: string, // 11/331060 (0.00%)
		scrolling?: boolean, // 11/331060 (0.00%)
		width?: number, // 11/331060 (0.00%)
	},
	mobile_ad_url?: "", // 12/331060 (0.00%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 12/331060 (0.00%)
	outbound_link?: {
	}, // 12/331060 (0.00%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 157/331060 (0.05%)
	preview?: {
		enabled: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
				gif?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 2/157 (1.27%)
				mp4?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 2/157 (1.27%)
				nsfw?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 7/157 (4.46%)
				obfuscated?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 7/157 (4.46%)
			},
		}[],
	}, // 157/331060 (0.05%)
	priority_id?: null, // 12/331060 (0.00%)
	promoted?: boolean, // 12/331060 (0.00%)
	promoted_by?: number|null, // 12/331060 (0.00%)
	promoted_display_name?: null, // 12/331060 (0.00%)
	promoted_url?: null, // 12/331060 (0.00%)
	removed?: boolean, // 5700/331060 (1.72%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: "manchesterunitedpimp"|"Bright"|"RT"|"pirateonboard"|"Hagit Leibowitz"|"Machinima"|"britpod"|"The Young Turks"|"lulusparky"|"MASS LBP", // 10/11 (90.91%)
			author_url?: string, // 10/11 (90.91%)
			cache_age?: number, // 1/11 (9.09%)
			description?: string, // 2/11 (18.18%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Scribd",
			provider_url: "https://www.youtube.com/"|"http://youtube.com"|"https://www.scribd.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 2/11 (18.18%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"jp.youtube.com"|"uk.youtube.com"|"scribd.com",
	},
	secure_media_embed: {
		content?: string, // 11/331060 (0.00%)
		height?: number, // 11/331060 (0.00%)
		media_domain_url?: string, // 11/331060 (0.00%)
		scrolling?: boolean, // 11/331060 (0.00%)
		width?: number, // 11/331060 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 5700/331060 (1.72%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top",
	third_party_trackers?: [], // 12/331060 (0.00%)
	third_party_tracking?: null, // 12/331060 (0.00%)
	third_party_tracking_2?: null, // 12/331060 (0.00%)
	thumbnail: string,
	thumbnail_height?: null|number, // 223592/331060 (67.54%)
	thumbnail_width?: null|number, // 223592/331060 (67.54%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}