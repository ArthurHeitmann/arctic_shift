interface RedditPost {
	approved_by: null,
	author?: string, // 2278242/2279491 (99.95%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by: null,
	clicked: boolean,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	hidden: boolean,
	id: string,
	is_self: boolean,
	likes: null|boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 15/213106 (0.01%)
		height?: number, // 15/213106 (0.01%)
		oembed?: {
			author_name?: string, // 198178/213091 (93.00%)
			author_url?: string, // 197677/213091 (92.77%)
			cache_age?: number, // 720/213091 (0.34%)
			description?: string, // 212685/213091 (99.81%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 211841/213091 (99.41%)
			thumbnail_url?: string, // 211842/213091 (99.41%)
			thumbnail_width?: number, // 211841/213091 (99.41%)
			title?: string, // 213074/213091 (99.99%)
			type: "video"|"rich",
			url?: string, // 190648/213091 (89.47%)
			version: "1.0",
			width: number,
		}, // 213091/213106 (99.99%)
		type: string,
		width?: number, // 15/213106 (0.01%)
	},
	media_embed: {
		content?: string, // 213106/2279491 (9.35%)
		height?: number, // 213106/2279491 (9.35%)
		scrolling?: boolean, // 213106/2279491 (9.35%)
		width?: number, // 213106/2279491 (9.35%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1249/2279491 (0.05%)
	saved: boolean,
	score: number,
	selftext: string,
	selftext_html: null|string,
	subreddit: string,
	subreddit_id: string,
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}