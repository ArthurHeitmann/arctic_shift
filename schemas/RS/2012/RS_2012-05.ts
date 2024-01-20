interface RedditPost {
	approved_by: null,
	author?: string, // 2292628/2293901 (99.94%)
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
		content?: string, // 14/205257 (0.01%)
		height?: number, // 14/205257 (0.01%)
		oembed?: {
			author_name?: string, // 192657/205243 (93.87%)
			author_url?: string, // 192154/205243 (93.62%)
			cache_age?: number, // 692/205243 (0.34%)
			description?: string, // 204877/205243 (99.82%)
			duration?: number, // 215/205243 (0.10%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 203490/205243 (99.15%)
			thumbnail_url?: string, // 203489/205243 (99.15%)
			thumbnail_width?: number, // 203490/205243 (99.15%)
			title?: string, // 205228/205243 (99.99%)
			type: "video"|"rich",
			url?: string, // 183826/205243 (89.57%)
			version: "1.0",
			width: number,
		}, // 205243/205257 (99.99%)
		type: string,
		width?: number, // 14/205257 (0.01%)
	},
	media_embed: {
		content?: string, // 205257/2293901 (8.95%)
		height?: number, // 205257/2293901 (8.95%)
		scrolling?: boolean, // 205257/2293901 (8.95%)
		width?: number, // 205257/2293901 (8.95%)
	},
	name: string,
	num_comments: number,
	num_reports: null|number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1273/2293901 (0.06%)
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