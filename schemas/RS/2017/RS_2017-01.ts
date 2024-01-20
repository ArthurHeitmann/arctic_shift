interface RedditPost {
	adserver_click_url?: null, // 6567/9218513 (0.07%)
	adserver_imp_pixel?: null, // 6567/9218513 (0.07%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 12279/9218513 (0.13%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 6567/9218513 (0.07%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	edited: boolean|number,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 6567/9218513 (0.07%)
	id: string,
	imp_pixel?: null, // 6567/9218513 (0.07%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 113/1065148 (0.01%)
		oembed?: {
			author_name?: string, // 775609/1065035 (72.82%)
			author_url?: string, // 774988/1065035 (72.77%)
			cache_age?: number, // 923/1065035 (0.09%)
			description?: string, // 469640/1065035 (44.10%)
			height: number,
			html: string,
			marginheight?: number, // 21/1065035 (0.00%)
			marginwidth?: number, // 21/1065035 (0.00%)
			mean_alpha?: number, // 3738/1065035 (0.35%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1064677/1065035 (99.97%)
			thumbnail_url?: string, // 1064680/1065035 (99.97%)
			thumbnail_width?: number, // 1064677/1065035 (99.97%)
			title?: string, // 1064600/1065035 (99.96%)
			type: "video"|"rich",
			url?: string, // 113901/1065035 (10.69%)
			version?: "1.0", // 1065014/1065035 (100.00%)
			width: number,
		}, // 1065035/1065148 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 1065148/9218513 (11.55%)
		height?: number, // 1065148/9218513 (11.55%)
		scrolling?: boolean, // 1065148/9218513 (11.55%)
		width?: number, // 1065148/9218513 (11.55%)
	},
	mobile_ad_url?: string, // 6567/9218513 (0.07%)
	num_comments: number,
	original_link?: null|"t3_5ij1do"|"t3_4huoc5"|"t3_5q3m0p"|"t3_5qbosb", // 6567/9218513 (0.07%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 3288475/9218513 (35.67%)
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
				}, // 95142/3288475 (2.89%)
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
				}, // 95142/3288475 (2.89%)
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
				}, // 281602/3288475 (8.56%)
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
				}, // 286954/3288475 (8.73%)
			},
		}[],
	}, // 3288475/9218513 (35.67%)
	promoted?: boolean, // 6567/9218513 (0.07%)
	promoted_by?: null, // 6567/9218513 (0.07%)
	promoted_display_name?: null|"ThePathHulu"|"Bethesda"|"Resident Evil VII", // 6567/9218513 (0.07%)
	promoted_url?: null|string, // 6567/9218513 (0.07%)
	quarantine: boolean,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 113/1049481 (0.01%)
		oembed?: {
			author_name?: string, // 768219/1049368 (73.21%)
			author_url?: string, // 767802/1049368 (73.17%)
			cache_age?: number, // 784/1049368 (0.07%)
			description?: string, // 454445/1049368 (43.31%)
			height: number,
			html: string,
			marginheight?: number, // 21/1049368 (0.00%)
			marginwidth?: number, // 21/1049368 (0.00%)
			mean_alpha?: number, // 2428/1049368 (0.23%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1049011/1049368 (99.97%)
			thumbnail_url?: string, // 1049012/1049368 (99.97%)
			thumbnail_width?: number, // 1049011/1049368 (99.97%)
			title?: string, // 1049261/1049368 (99.99%)
			type: "video"|"rich",
			url?: string, // 112807/1049368 (10.75%)
			version?: "1.0", // 1049347/1049368 (100.00%)
			width: number,
		}, // 1049368/1049481 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 1049481/9218513 (11.38%)
		height?: number, // 1049481/9218513 (11.38%)
		scrolling?: boolean, // 1049481/9218513 (11.38%)
		width?: number, // 1049481/9218513 (11.38%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 9211946/9218513 (99.93%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random",
	third_party_tracking?: null|string, // 6567/9218513 (0.07%)
	third_party_tracking_2?: null|string, // 6567/9218513 (0.07%)
	thumbnail: string,
	title: string,
	url: string,
}