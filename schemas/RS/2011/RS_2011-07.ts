interface RedditPost {
	approved_by: null,
	author?: string, // 1263936/1264991 (99.92%)
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
		content?: string, // 2/105438 (0.00%)
		height?: number, // 2/105438 (0.00%)
		oembed?: {
			author_name?: string, // 97114/105436 (92.11%)
			author_url?: string, // 96692/105436 (91.71%)
			cache_age?: number, // 472/105436 (0.45%)
			description?: string, // 105200/105436 (99.78%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 104836/105436 (99.43%)
			thumbnail_url?: string, // 104836/105436 (99.43%)
			thumbnail_width?: number, // 104836/105436 (99.43%)
			title?: string, // 105387/105436 (99.95%)
			type: "video"|"rich",
			url?: string, // 92058/105436 (87.31%)
			version: "1.0",
			width: number,
		}, // 105436/105438 (100.00%)
		type: string,
		width?: number, // 2/105438 (0.00%)
	},
	media_embed: {
		content?: string, // 105437/1264991 (8.34%)
		height?: number, // 105437/1264991 (8.34%)
		scrolling?: boolean, // 105437/1264991 (8.34%)
		width?: number, // 105437/1264991 (8.34%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1055/1264991 (0.08%)
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