interface RedditPost {
	author?: string, // 3188019/3189490 (99.95%)
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
		content?: string, // 34/288848 (0.01%)
		height?: number, // 34/288848 (0.01%)
		oembed?: {
			author_name?: string, // 278714/288814 (96.50%)
			author_url?: string, // 278602/288814 (96.46%)
			cache_age?: number, // 522/288814 (0.18%)
			description?: string, // 288406/288814 (99.86%)
			height: number,
			html: string,
			mean_alpha?: number, // 178/288814 (0.06%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 288469/288814 (99.88%)
			thumbnail_url?: string, // 288462/288814 (99.88%)
			thumbnail_width?: number, // 288469/288814 (99.88%)
			title?: string, // 288730/288814 (99.97%)
			type: "video"|"rich",
			url?: string, // 270081/288814 (93.51%)
			version: "1.0",
			width: number,
		}, // 288814/288848 (99.99%)
		type: string,
		width?: number, // 34/288848 (0.01%)
	},
	media_embed: {
		content?: string, // 288848/3189490 (9.06%)
		height?: number, // 288848/3189490 (9.06%)
		scrolling?: boolean, // 288848/3189490 (9.06%)
		width?: number, // 288848/3189490 (9.06%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1471/3189490 (0.05%)
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
		type: "youtube.com"|"youtu.be",
	},
	secure_media_embed: {
		content?: string, // 31/3189490 (0.00%)
		height?: number, // 31/3189490 (0.00%)
		scrolling?: boolean, // 31/3189490 (0.00%)
		width?: number, // 31/3189490 (0.00%)
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