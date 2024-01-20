interface RedditPost {
	adserver_click_url?: null, // 9087/9498553 (0.10%)
	adserver_imp_pixel?: null, // 9087/9498553 (0.10%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 32136/9498553 (0.34%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 9087/9498553 (0.10%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 9087/9498553 (0.10%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	edited: boolean|number,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 9087/9498553 (0.10%)
	id: string,
	imp_pixel?: null, // 9087/9498553 (0.10%)
	is_self: boolean,
	is_video?: boolean, // 8800927/9498553 (92.66%)
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 104/1010894 (0.01%)
		oembed?: {
			author_name?: string, // 719346/1010784 (71.17%)
			author_url?: string, // 717758/1010784 (71.01%)
			cache_age?: number, // 1660/1010784 (0.16%)
			description?: string, // 464998/1010784 (46.00%)
			height: number,
			html: string,
			marginheight?: number, // 30/1010784 (0.00%)
			marginwidth?: number, // 30/1010784 (0.00%)
			mean_alpha?: number, // 3590/1010784 (0.36%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1010504/1010784 (99.97%)
			thumbnail_url?: string, // 1010505/1010784 (99.97%)
			thumbnail_width?: number, // 1010504/1010784 (99.97%)
			title?: string, // 1010739/1010784 (100.00%)
			type: "video"|"rich",
			url?: string, // 102166/1010784 (10.11%)
			version?: "1.0", // 1010754/1010784 (100.00%)
			width: number,
		}, // 1010784/1010894 (99.99%)
		reddit_video?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			poster_url: string,
			scrubber_media_url: string,
			thumbnail_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 6/1010894 (0.00%)
		type?: string, // 1010888/1010894 (100.00%)
	},
	media_embed: {
		content?: string, // 1010888/9498553 (10.64%)
		height?: number, // 1010888/9498553 (10.64%)
		scrolling?: boolean, // 1010888/9498553 (10.64%)
		width?: number, // 1010888/9498553 (10.64%)
	},
	mobile_ad_url?: string, // 9087/9498553 (0.10%)
	num_comments: number,
	original_link?: null|"t3_67o00k"|"t3_68lutl"|"t3_6cqhv4", // 9087/9498553 (0.10%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 3649355/9498553 (38.42%)
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
				}, // 102423/3649355 (2.81%)
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
				}, // 102423/3649355 (2.81%)
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
				}, // 300390/3649355 (8.23%)
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
				}, // 315599/3649355 (8.65%)
			},
		}[],
	}, // 3649355/9498553 (38.42%)
	promoted?: boolean, // 9087/9498553 (0.10%)
	promoted_by?: null, // 9087/9498553 (0.10%)
	promoted_display_name?: null|"handmaidsonhulu"|"ItComesAtNight"|"HandmaidsOnHulu", // 9087/9498553 (0.10%)
	promoted_url?: null|string, // 9087/9498553 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 104/997665 (0.01%)
		oembed?: {
			author_name?: string, // 713254/997561 (71.50%)
			author_url?: string, // 711886/997561 (71.36%)
			cache_age?: number, // 1557/997561 (0.16%)
			description?: string, // 451791/997561 (45.29%)
			height: number,
			html: string,
			marginheight?: number, // 30/997561 (0.00%)
			marginwidth?: number, // 30/997561 (0.00%)
			mean_alpha?: number, // 2298/997561 (0.23%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 997281/997561 (99.97%)
			thumbnail_url?: string, // 997282/997561 (99.97%)
			thumbnail_width?: number, // 997281/997561 (99.97%)
			title?: string, // 997516/997561 (100.00%)
			type: "video"|"rich",
			url?: string, // 101547/997561 (10.18%)
			version?: "1.0", // 997531/997561 (100.00%)
			width: number,
		}, // 997561/997665 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 997665/9498553 (10.50%)
		height?: number, // 997665/9498553 (10.50%)
		scrolling?: boolean, // 997665/9498553 (10.50%)
		width?: number, // 997665/9498553 (10.50%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 9489466/9498553 (99.90%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random",
	third_party_trackers?: ("https://www.google.com"|"https://www.reddit.com"|"wikipedia.com"|"www.wikipedia.com"|"google.com")[]|null, // 8426/9498553 (0.09%)
	third_party_tracking?: null|string, // 9087/9498553 (0.10%)
	third_party_tracking_2?: null|string, // 9087/9498553 (0.10%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 9498549/9498553 (100.00%)
	thumbnail_width?: number|null, // 9498549/9498553 (100.00%)
	title: string,
	url: string,
	view_count: null,
}