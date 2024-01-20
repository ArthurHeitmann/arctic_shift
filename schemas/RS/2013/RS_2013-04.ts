interface RedditPost {
	author?: string, // 3374325/3376188 (99.94%)
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
		content?: string, // 37/306347 (0.01%)
		height?: number, // 37/306347 (0.01%)
		oembed?: {
			author_name?: string, // 296009/306310 (96.64%)
			author_url?: string, // 295866/306310 (96.59%)
			cache_age?: number, // 478/306310 (0.16%)
			description?: string, // 305830/306310 (99.84%)
			height: number,
			html: string,
			mean_alpha?: number, // 210/306310 (0.07%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 305764/306310 (99.82%)
			thumbnail_url?: string, // 305764/306310 (99.82%)
			thumbnail_width?: number, // 305764/306310 (99.82%)
			title?: string, // 306302/306310 (100.00%)
			type: "video"|"rich",
			url?: string, // 286009/306310 (93.37%)
			version: "1.0",
			width: number,
		}, // 306310/306347 (99.99%)
		type: string,
		width?: number, // 37/306347 (0.01%)
	},
	media_embed: {
		content?: string, // 306347/3376188 (9.07%)
		height?: number, // 306347/3376188 (9.07%)
		scrolling?: boolean, // 306347/3376188 (9.07%)
		width?: number, // 306347/3376188 (9.07%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1863/3376188 (0.06%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			description: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 13/3376188 (0.00%)
		height?: number, // 13/3376188 (0.00%)
		scrolling?: boolean, // 13/3376188 (0.00%)
		width?: number, // 13/3376188 (0.00%)
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