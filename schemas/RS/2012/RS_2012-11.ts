interface RedditPost {
	author?: string, // 2704407/2706118 (99.94%)
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
		content?: string, // 34/256545 (0.01%)
		height?: number, // 34/256545 (0.01%)
		oembed?: {
			author_name?: string, // 247845/256511 (96.62%)
			author_url?: string, // 247632/256511 (96.54%)
			cache_age?: number, // 534/256511 (0.21%)
			description?: string, // 256200/256511 (99.88%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 256246/256511 (99.90%)
			thumbnail_url?: string, // 256246/256511 (99.90%)
			thumbnail_width?: number, // 256246/256511 (99.90%)
			title?: string, // 256425/256511 (99.97%)
			type: "video"|"rich",
			url?: string, // 232414/256511 (90.61%)
			version: "1.0",
			width: number,
		}, // 256511/256545 (99.99%)
		type: string,
		width?: number, // 34/256545 (0.01%)
	},
	media_embed: {
		content?: string, // 256545/2706118 (9.48%)
		height?: number, // 256545/2706118 (9.48%)
		scrolling?: boolean, // 256545/2706118 (9.48%)
		width?: number, // 256545/2706118 (9.48%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1711/2706118 (0.06%)
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
		content?: string, // 31/2706118 (0.00%)
		height?: number, // 31/2706118 (0.00%)
		scrolling?: boolean, // 31/2706118 (0.00%)
		width?: number, // 31/2706118 (0.00%)
	},
	selftext: string,
	selftext_html: null|string,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
	user_reports: [],
}