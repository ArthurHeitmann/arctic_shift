interface RedditPost {
	approved_by: null,
	author?: string, // 1589517/1590673 (99.93%)
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
		content?: string, // 25/132506 (0.02%)
		height?: number, // 25/132506 (0.02%)
		oembed?: {
			author_name?: string, // 123762/132481 (93.42%)
			author_url?: string, // 123321/132481 (93.09%)
			cache_age?: number, // 461/132481 (0.35%)
			description?: string, // 132033/132481 (99.66%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 131651/132481 (99.37%)
			thumbnail_url?: string, // 131652/132481 (99.37%)
			thumbnail_width?: number, // 131651/132481 (99.37%)
			title?: string, // 132455/132481 (99.98%)
			type: "video"|"rich",
			url?: string, // 117884/132481 (88.98%)
			version: "1.0",
			width: number,
		}, // 132481/132506 (99.98%)
		type: string,
		width?: number, // 25/132506 (0.02%)
	},
	media_embed: {
		content?: string, // 132506/1590673 (8.33%)
		height?: number, // 132506/1590673 (8.33%)
		scrolling?: boolean, // 132506/1590673 (8.33%)
		width?: number, // 132506/1590673 (8.33%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1156/1590673 (0.07%)
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