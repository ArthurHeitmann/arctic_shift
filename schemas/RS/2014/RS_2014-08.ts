interface RedditPost {
	adserver_click_url?: null, // 4705/4596551 (0.10%)
	adserver_imp_pixel?: null, // 4705/4596551 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4705/4596551 (0.10%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4591846/4596551 (99.90%)
	from_id?: null, // 4591846/4596551 (99.90%)
	from_kind?: null, // 4591846/4596551 (99.90%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4705/4596551 (0.10%)
	id: string,
	imp_pixel?: null, // 4705/4596551 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 3/451620 (0.00%)
		event_id?: string, // 178/451620 (0.04%)
		height?: number, // 3/451620 (0.00%)
		oembed?: {
			author_name?: string, // 342309/451439 (75.83%)
			author_url?: string, // 342233/451439 (75.81%)
			cache_age?: number, // 784/451439 (0.17%)
			description?: string, // 448293/451439 (99.30%)
			height: number,
			html: string,
			mean_alpha?: number, // 6179/451439 (1.37%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 449875/451439 (99.65%)
			thumbnail_url?: string, // 449879/451439 (99.65%)
			thumbnail_width?: number, // 449875/451439 (99.65%)
			title?: string, // 450137/451439 (99.71%)
			type: "video"|"rich",
			url?: string, // 310891/451439 (68.87%)
			version: "1.0",
			width: number,
		}, // 451439/451620 (99.96%)
		type: string,
		width?: number, // 3/451620 (0.00%)
	},
	media_embed: {
		content?: string, // 451620/4596551 (9.83%)
		height?: number, // 451620/4596551 (9.83%)
		scrolling?: boolean, // 451620/4596551 (9.83%)
		width?: number, // 451620/4596551 (9.83%)
	},
	mobile_ad_url?: "", // 4705/4596551 (0.10%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image"|"rich:video", // 224/4596551 (0.00%)
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
	}, // 224/4596551 (0.00%)
	promoted?: boolean, // 4705/4596551 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		content?: string, // 2/338951 (0.00%)
		event_id?: string, // 178/338951 (0.05%)
		height?: number, // 2/338951 (0.00%)
		oembed?: {
			author_name?: string, // 336591/338771 (99.36%)
			author_url?: string, // 336591/338771 (99.36%)
			description?: string, // 338358/338771 (99.88%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://wistia.com",
			thumbnail_height?: number, // 338559/338771 (99.94%)
			thumbnail_url?: string, // 338558/338771 (99.94%)
			thumbnail_width?: number, // 338559/338771 (99.94%)
			title?: string, // 338612/338771 (99.95%)
			type: "video"|"rich",
			url?: string, // 309700/338771 (91.42%)
			version: "1.0",
			width: number,
		}, // 338771/338951 (99.95%)
		type: string,
		width?: number, // 2/338951 (0.00%)
	},
	secure_media_embed: {
		content?: string, // 338951/4596551 (7.37%)
		height?: number, // 338951/4596551 (7.37%)
		scrolling?: boolean, // 338951/4596551 (7.37%)
		width?: number, // 338951/4596551 (7.37%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4591846/4596551 (99.90%)
	subreddit_id?: string, // 4591846/4596551 (99.90%)
	third_party_tracking?: null, // 4705/4596551 (0.10%)
	third_party_tracking_2?: null, // 4705/4596551 (0.10%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}