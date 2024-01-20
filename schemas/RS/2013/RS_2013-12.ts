interface RedditPost {
	author?: string, // 3798091/3801410 (99.91%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by: null,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	gilded: number,
	id: string,
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 22/369451 (0.01%)
		height?: number, // 22/369451 (0.01%)
		oembed?: {
			author_name?: string, // 278394/369429 (75.36%)
			author_url?: string, // 278341/369429 (75.34%)
			cache_age?: number, // 502/369429 (0.14%)
			description?: string, // 367967/369429 (99.60%)
			height: number,
			html: string,
			mean_alpha?: number, // 4710/369429 (1.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 368515/369429 (99.75%)
			thumbnail_url?: string, // 368515/369429 (99.75%)
			thumbnail_width?: number, // 368515/369429 (99.75%)
			title?: string, // 368884/369429 (99.85%)
			type: "video"|"rich",
			url?: string, // 249605/369429 (67.57%)
			version: "1.0",
			width: number,
		}, // 369429/369451 (99.99%)
		type: string,
		width?: number, // 22/369451 (0.01%)
	},
	media_embed: {
		content?: string, // 369451/3801410 (9.72%)
		height?: number, // 369451/3801410 (9.72%)
		scrolling?: boolean, // 369451/3801410 (9.72%)
		width?: number, // 369451/3801410 (9.72%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 3319/3801410 (0.09%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 271150/272771 (99.41%)
			author_url?: string, // 271152/272771 (99.41%)
			description?: string, // 272508/272771 (99.90%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://wistia.com",
			thumbnail_height?: number, // 272744/272771 (99.99%)
			thumbnail_url?: string, // 272744/272771 (99.99%)
			thumbnail_width?: number, // 272744/272771 (99.99%)
			title?: string, // 272768/272771 (100.00%)
			type: "video"|"rich",
			url?: string, // 247645/272771 (90.79%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string, // 272771/3801410 (7.18%)
		height?: number, // 272771/3801410 (7.18%)
		scrolling?: boolean, // 272771/3801410 (7.18%)
		width?: number, // 272771/3801410 (7.18%)
	},
	selftext: string,
	selftext_html: null|string,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
	user_reports: [],
}