interface RedditPost {
	adserver_click_url?: null, // 4439/5605306 (0.08%)
	adserver_imp_pixel?: null, // 4439/5605306 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4439/5605306 (0.08%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 5600867/5605306 (99.92%)
	from_id?: null, // 5600867/5605306 (99.92%)
	from_kind?: null, // 5600867/5605306 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4439/5605306 (0.08%)
	id: string,
	imp_pixel?: null, // 4439/5605306 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 1/501481 (0.00%)
		event_id?: string, // 109/501481 (0.02%)
		height?: number, // 1/501481 (0.00%)
		oembed?: {
			author_name?: string, // 342837/501371 (68.38%)
			author_url?: string, // 342422/501371 (68.30%)
			cache_age?: number, // 2023/501371 (0.40%)
			description?: string, // 413224/501371 (82.42%)
			height: number,
			html: string,
			mean_alpha?: number, // 7532/501371 (1.50%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 500977/501371 (99.92%)
			thumbnail_url?: string, // 501370/501371 (100.00%)
			thumbnail_width?: number, // 500977/501371 (99.92%)
			title?: string, // 500428/501371 (99.81%)
			type: "video"|"rich",
			url?: string, // 311135/501371 (62.06%)
			version?: "1.0", // 501370/501371 (100.00%)
			width: number,
		}, // 501371/501481 (99.98%)
		type: string,
		width?: number, // 1/501481 (0.00%)
	},
	media_embed: {
		content?: string, // 501481/5605306 (8.95%)
		height?: number, // 501481/5605306 (8.95%)
		scrolling?: boolean, // 501481/5605306 (8.95%)
		width?: number, // 501481/5605306 (8.95%)
	},
	mobile_ad_url?: string, // 4439/5605306 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 1686378/5605306 (30.09%)
	preview?: {
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
			},
		}[],
	}, // 1686378/5605306 (30.09%)
	promoted?: boolean, // 4439/5605306 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		content?: string, // 1/339491 (0.00%)
		event_id?: string, // 109/339491 (0.03%)
		height?: number, // 1/339491 (0.00%)
		oembed?: {
			author_name?: string, // 337010/339381 (99.30%)
			author_url?: string, // 337010/339381 (99.30%)
			cache_age?: number, // 1374/339381 (0.40%)
			description?: string, // 306023/339381 (90.17%)
			height: number,
			html: string,
			mean_alpha?: number, // 5/339381 (0.00%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"Vine"|"SlideShare"|"Wistia, Inc."|"Slideshare"|"Imgur"|"Google Maps"|"Facebook"|"iframe embed",
			provider_url: string,
			thumbnail_height?: number, // 339148/339381 (99.93%)
			thumbnail_url?: string, // 339372/339381 (100.00%)
			thumbnail_width?: number, // 339148/339381 (99.93%)
			title?: string, // 338438/339381 (99.72%)
			type: "video"|"rich",
			url?: string, // 307032/339381 (90.47%)
			version?: "1.0", // 339380/339381 (100.00%)
			width: number,
		}, // 339381/339491 (99.97%)
		type: string,
		width?: number, // 1/339491 (0.00%)
	},
	secure_media_embed: {
		content?: string, // 339491/5605306 (6.06%)
		height?: number, // 339491/5605306 (6.06%)
		scrolling?: boolean, // 339491/5605306 (6.06%)
		width?: number, // 339491/5605306 (6.06%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 5600867/5605306 (99.92%)
	subreddit_id?: string, // 5600867/5605306 (99.92%)
	third_party_tracking?: null|string, // 4439/5605306 (0.08%)
	third_party_tracking_2?: null|"https://www.yahoo.com/", // 4439/5605306 (0.08%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}