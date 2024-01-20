interface RedditPost {
	approved_by: null,
	author?: string, // 2157630/2158965 (99.94%)
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
		content?: string, // 3/208319 (0.00%)
		height?: number, // 3/208319 (0.00%)
		oembed?: {
			author_name?: string, // 193851/208316 (93.06%)
			author_url?: string, // 193331/208316 (92.81%)
			cache_age?: number, // 708/208316 (0.34%)
			description?: string, // 207882/208316 (99.79%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 206700/208316 (99.22%)
			thumbnail_url?: string|{
				height: number,
				time?: "00:13:41"|"00:06:50.500"|"00:20:31.500", // 4/5 (80.00%)
				url: string,
				width: number,
				yt$name: "default"|"hqdefault"|"start"|"middle"|"end",
			}[], // 206701/208316 (99.22%)
			thumbnail_width?: number, // 206700/208316 (99.22%)
			title?: string, // 208291/208316 (99.99%)
			type: "video"|"rich",
			url?: string, // 186942/208316 (89.74%)
			version: "1.0",
			width: number,
		}, // 208316/208319 (100.00%)
		type: string,
		width?: number, // 3/208319 (0.00%)
	},
	media_embed: {
		content?: string, // 208319/2158965 (9.65%)
		height?: number, // 208319/2158965 (9.65%)
		scrolling?: boolean, // 208319/2158965 (9.65%)
		width?: number, // 208319/2158965 (9.65%)
	},
	name: string,
	num_comments: number,
	num_reports: null|number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1335/2158965 (0.06%)
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