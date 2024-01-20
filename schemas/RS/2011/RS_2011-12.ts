interface RedditPost {
	approved_by: null,
	author?: string, // 1770962/1772219 (99.93%)
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
		content?: string, // 29/163504 (0.02%)
		height?: number, // 29/163504 (0.02%)
		oembed?: {
			author_name?: string, // 152710/163475 (93.41%)
			author_url?: string, // 152370/163475 (93.21%)
			cache_age?: number, // 520/163475 (0.32%)
			description?: string, // 162915/163475 (99.66%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 162342/163475 (99.31%)
			thumbnail_url?: string, // 162342/163475 (99.31%)
			thumbnail_width?: number, // 162342/163475 (99.31%)
			title?: string, // 163433/163475 (99.97%)
			type: "video"|"rich",
			url?: string, // 146560/163475 (89.65%)
			version: "1.0",
			width: number,
		}, // 163475/163504 (99.98%)
		type: string,
		width?: number, // 29/163504 (0.02%)
	},
	media_embed: {
		content?: string, // 163504/1772219 (9.23%)
		height?: number, // 163504/1772219 (9.23%)
		scrolling?: boolean, // 163504/1772219 (9.23%)
		width?: number, // 163504/1772219 (9.23%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1257/1772219 (0.07%)
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