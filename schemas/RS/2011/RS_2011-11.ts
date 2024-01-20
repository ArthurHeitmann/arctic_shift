interface RedditPost {
	approved_by: null,
	author?: string, // 1632500/1634431 (99.88%)
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
		content?: string, // 21/139763 (0.02%)
		height?: number, // 21/139763 (0.02%)
		oembed?: {
			author_name?: string, // 130164/139742 (93.15%)
			author_url?: string, // 129810/139742 (92.89%)
			cache_age?: number, // 475/139742 (0.34%)
			description?: string, // 139293/139742 (99.68%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 138705/139742 (99.26%)
			thumbnail_url?: string, // 138705/139742 (99.26%)
			thumbnail_width?: number, // 138705/139742 (99.26%)
			title?: string, // 139711/139742 (99.98%)
			type: "video"|"rich",
			url?: string, // 124385/139742 (89.01%)
			version: "1.0",
			width: number,
		}, // 139742/139763 (99.98%)
		type: string,
		width?: number, // 21/139763 (0.02%)
	},
	media_embed: {
		content?: string, // 139763/1634431 (8.55%)
		height?: number, // 139763/1634431 (8.55%)
		scrolling?: boolean, // 139763/1634431 (8.55%)
		width?: number, // 139763/1634431 (8.55%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1931/1634431 (0.12%)
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