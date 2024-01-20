interface RedditPost {
	adserver_click_url?: null, // 7/283915 (0.00%)
	adserver_imp_pixel?: null, // 7/283915 (0.00%)
	approved?: boolean, // 5136/283915 (1.81%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 251/283915 (0.09%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 226571/283915 (79.80%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 226571/283915 (79.80%)
	author_id?: "t2_1wh0"|"t2_1w72"|null, // 7/283915 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator",
	domain: string,
	domain_override?: null, // 7/283915 (0.00%)
	edited: boolean|number,
	embed_type?: null, // 7/283915 (0.00%)
	embed_url?: null, // 7/283915 (0.00%)
	events?: [], // 7/283915 (0.00%)
	eventsOnRender?: [], // 7/283915 (0.00%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 7/283915 (0.00%)
	id: string,
	ignore_reports?: boolean, // 5136/283915 (1.81%)
	is_blank?: boolean, // 7/283915 (0.00%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/283915 (0.00%)
	link_flair_css_class: null|"legal"|""|"transportation"|"seventeen",
	link_flair_richtext: {
		e: "text",
		t: "Legal"|"FIRST CJ POST"|"Transportation"|"Mathematics",
	}[],
	link_flair_text: null|"Legal"|"FIRST CJ POST"|"Transportation"|"Mathematics",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: "oilycassandra"|"themnkey"|"MP Anon"|"Mats Holm"|"Erik Nohlin"|"Mat Jang"|"vandoras"|"coolaun", // 8/11 (72.73%)
			author_url?: string, // 10/11 (90.91%)
			cache_age?: number, // 3/11 (27.27%)
			description?: string, // 7/11 (63.64%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Scribd"|"Behance"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"https://www.scribd.com/"|"http://www.behance.net"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 4/11 (36.36%)
			version: "1.0",
			width: number,
		},
		type: "uk.youtube.com"|"youtube.com"|"scribd.com"|"behance.net"|"maps.google.com",
	},
	media_embed: {
		content?: string, // 11/283915 (0.00%)
		height?: number, // 11/283915 (0.00%)
		media_domain_url?: string, // 11/283915 (0.00%)
		scrolling?: boolean, // 11/283915 (0.00%)
		width?: number, // 11/283915 (0.00%)
	},
	mobile_ad_url?: "", // 7/283915 (0.00%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 7/283915 (0.00%)
	outbound_link?: {
		created?: number, // 2/7 (28.57%)
		expiration?: number, // 2/7 (28.57%)
		url?: string, // 2/7 (28.57%)
	}, // 7/283915 (0.00%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|"no_ads"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 125/283915 (0.04%)
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
				}, // 2/125 (1.60%)
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
				}, // 2/125 (1.60%)
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
				}, // 6/125 (4.80%)
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
				}, // 6/125 (4.80%)
			},
		}[],
	}, // 125/283915 (0.04%)
	priority_id?: null, // 7/283915 (0.00%)
	promoted?: boolean, // 7/283915 (0.00%)
	promoted_by?: number, // 7/283915 (0.00%)
	promoted_display_name?: null, // 7/283915 (0.00%)
	promoted_url?: null, // 7/283915 (0.00%)
	removed?: boolean, // 5136/283915 (1.81%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: "oilycassandra"|"themnkey"|"MP Anon"|"Mats Holm"|"Erik Nohlin"|"Mat Jang"|"vandoras"|"coolaun", // 8/11 (72.73%)
			author_url?: string, // 10/11 (90.91%)
			cache_age?: number, // 3/11 (27.27%)
			description?: string, // 7/11 (63.64%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Scribd"|"Behance"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"https://www.scribd.com/"|"http://www.behance.net"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 4/11 (36.36%)
			version: "1.0",
			width: number,
		},
		type: "uk.youtube.com"|"youtube.com"|"scribd.com"|"behance.net"|"maps.google.com",
	},
	secure_media_embed: {
		content?: string, // 11/283915 (0.00%)
		height?: number, // 11/283915 (0.00%)
		media_domain_url?: string, // 11/283915 (0.00%)
		scrolling?: boolean, // 11/283915 (0.00%)
		width?: number, // 11/283915 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 5136/283915 (1.81%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"qa",
	third_party_trackers?: [], // 7/283915 (0.00%)
	third_party_tracking?: null, // 7/283915 (0.00%)
	third_party_tracking_2?: null, // 7/283915 (0.00%)
	thumbnail: string,
	thumbnail_height?: null|number, // 190341/283915 (67.04%)
	thumbnail_width?: null|number, // 190341/283915 (67.04%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|"no_ads"|"house_only"|null,
}