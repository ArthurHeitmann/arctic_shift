interface RedditPost {
	author?: string, // 3260188/3261976 (99.95%)
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
		content?: string, // 31/297614 (0.01%)
		height?: number, // 31/297614 (0.01%)
		oembed?: {
			author_name?: string, // 287429/297583 (96.59%)
			author_url?: string, // 287274/297583 (96.54%)
			cache_age?: number, // 477/297583 (0.16%)
			description?: string, // 297191/297583 (99.87%)
			height: number,
			html: string,
			mean_alpha?: number, // 227/297583 (0.08%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 297098/297583 (99.84%)
			thumbnail_url?: string, // 297096/297583 (99.84%)
			thumbnail_width?: number, // 297098/297583 (99.84%)
			title?: string, // 297562/297583 (99.99%)
			type: "video"|"rich",
			url?: string, // 277455/297583 (93.24%)
			version: "1.0",
			width: number,
		}, // 297583/297614 (99.99%)
		type: string,
		width?: number, // 31/297614 (0.01%)
	},
	media_embed: {
		content?: string, // 297614/3261976 (9.12%)
		height?: number, // 297614/3261976 (9.12%)
		scrolling?: boolean, // 297614/3261976 (9.12%)
		width?: number, // 297614/3261976 (9.12%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1788/3261976 (0.05%)
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
		content?: string, // 19/3261976 (0.00%)
		height?: number, // 19/3261976 (0.00%)
		scrolling?: boolean, // 19/3261976 (0.00%)
		width?: number, // 19/3261976 (0.00%)
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