interface RedditPost {
	approved_by: null,
	author?: string, // 1480887/1482575 (99.89%)
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
		content?: string, // 23/119163 (0.02%)
		height?: number, // 23/119163 (0.02%)
		oembed?: {
			author_name?: string, // 110439/119140 (92.70%)
			author_url?: string, // 109977/119140 (92.31%)
			cache_age?: number, // 480/119140 (0.40%)
			description?: string, // 118843/119140 (99.75%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 118518/119140 (99.48%)
			thumbnail_url?: string, // 118519/119140 (99.48%)
			thumbnail_width?: number, // 118518/119140 (99.48%)
			title?: string, // 119084/119140 (99.95%)
			type: "video"|"rich",
			url?: string, // 105192/119140 (88.29%)
			version: "1.0",
			width: number,
		}, // 119140/119163 (99.98%)
		type: string,
		width?: number, // 23/119163 (0.02%)
	},
	media_embed: {
		content?: string, // 119163/1482575 (8.04%)
		height?: number, // 119163/1482575 (8.04%)
		scrolling?: boolean, // 119163/1482575 (8.04%)
		width?: number, // 119163/1482575 (8.04%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1688/1482575 (0.11%)
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