interface RedditPost {
	approved_by: null,
	author?: string, // 1447285/1448347 (99.93%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by: null,
	clicked: boolean,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
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
		content?: string, // 6/122463 (0.00%)
		height?: number, // 6/122463 (0.00%)
		oembed?: {
			author_name?: string, // 113234/122457 (92.47%)
			author_url?: string, // 112820/122457 (92.13%)
			cache_age?: number, // 488/122457 (0.40%)
			description?: string, // 122118/122457 (99.72%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 121900/122457 (99.55%)
			thumbnail_url?: string, // 121900/122457 (99.55%)
			thumbnail_width?: number, // 121900/122457 (99.55%)
			title?: string, // 122408/122457 (99.96%)
			type: "video"|"rich",
			url?: string, // 107657/122457 (87.91%)
			version: "1.0",
			width: number,
		}, // 122457/122463 (100.00%)
		type: string,
		width?: number, // 6/122463 (0.00%)
	},
	media_embed: {
		content?: string, // 122463/1448347 (8.46%)
		height?: number, // 122463/1448347 (8.46%)
		scrolling?: boolean, // 122463/1448347 (8.46%)
		width?: number, // 122463/1448347 (8.46%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1062/1448347 (0.07%)
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