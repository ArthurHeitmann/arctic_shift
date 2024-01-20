interface RedditPost {
	approved_by: null,
	author?: string, // 2392651/2393973 (99.94%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by: null|"aphexcoil",
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
		content?: string, // 24/213294 (0.01%)
		height?: number, // 24/213294 (0.01%)
		oembed?: {
			author_name?: string, // 205396/213270 (96.31%)
			author_url?: string, // 204993/213270 (96.12%)
			cache_age?: number, // 582/213270 (0.27%)
			description?: string, // 212915/213270 (99.83%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 211456/213270 (99.15%)
			thumbnail_url?: string, // 211450/213270 (99.15%)
			thumbnail_width?: number, // 211456/213270 (99.15%)
			title?: string, // 213252/213270 (99.99%)
			type: "video"|"rich",
			url?: string, // 191561/213270 (89.82%)
			version: "1.0",
			width: number,
		}, // 213270/213294 (99.99%)
		type: string,
		width?: number, // 24/213294 (0.01%)
	},
	media_embed: {
		content?: string, // 213294/2393973 (8.91%)
		height?: number, // 213294/2393973 (8.91%)
		scrolling?: boolean, // 213294/2393973 (8.91%)
		width?: number, // 213294/2393973 (8.91%)
	},
	name: string,
	num_comments: number,
	num_reports: null|number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1322/2393973 (0.06%)
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