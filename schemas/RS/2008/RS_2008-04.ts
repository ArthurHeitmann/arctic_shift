interface RedditPost {
	approved?: boolean, // 4723/167472 (2.82%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 2000/167472 (1.19%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 137758/167472 (82.26%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 137758/167472 (82.26%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	edited: boolean,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	id: string,
	ignore_reports?: boolean, // 4723/167472 (2.82%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 3/167472 (0.00%)
	link_flair_css_class: null|"three"|"normal"|"camera"|"nonwhitelistedchannel",
	link_flair_richtext: {
		e: "text",
		t: "Real Life"|"No videos"|"Picture/Video"|"Non-whitelisted Youtube Channel",
	}[],
	link_flair_text: null|"Real Life"|"No videos"|"Picture/Video"|"Non-whitelisted Youtube Channel",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: "xenutv1"|"ToryMagoo44"|"mdotstrange"|"Chuck Love", // 4/6 (66.67%)
			author_url?: string, // 4/6 (66.67%)
			description?: string, // 1/6 (16.67%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Trailer Addict",
			provider_url: "https://www.youtube.com/"|"https://www.traileraddict.com"|"http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/6 (16.67%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"traileraddict.com"|"uk.youtube.com",
	},
	media_embed: {
		content?: string, // 6/167472 (0.00%)
		height?: number, // 6/167472 (0.00%)
		media_domain_url?: string, // 6/167472 (0.00%)
		scrolling?: boolean, // 6/167472 (0.00%)
		width?: number, // 6/167472 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|"no_ads"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"rich:video"|"image", // 61/167472 (0.04%)
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
				}, // 3/61 (4.92%)
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
				}, // 3/61 (4.92%)
			},
		}[],
	}, // 61/167472 (0.04%)
	removed?: boolean, // 4723/167472 (2.82%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: "xenutv1"|"ToryMagoo44"|"mdotstrange"|"Chuck Love", // 4/6 (66.67%)
			author_url?: string, // 4/6 (66.67%)
			description?: string, // 1/6 (16.67%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Trailer Addict",
			provider_url: "https://www.youtube.com/"|"https://www.traileraddict.com"|"http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/6 (16.67%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"traileraddict.com"|"uk.youtube.com",
	},
	secure_media_embed: {
		content?: string, // 6/167472 (0.00%)
		height?: number, // 6/167472 (0.00%)
		media_domain_url?: string, // 6/167472 (0.00%)
		scrolling?: boolean, // 6/167472 (0.00%)
		width?: number, // 6/167472 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4723/167472 (2.82%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"qa",
	thumbnail: string,
	thumbnail_height?: null|number, // 167471/167472 (100.00%)
	thumbnail_width?: null|number, // 167471/167472 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"promo_all"|"no_ads"|"house_only"|null,
}