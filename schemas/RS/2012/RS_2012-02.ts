interface RedditPost {
	approved_by: null,
	author?: string, // 1960421/1961817 (99.93%)
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
		content?: string, // 4/187861 (0.00%)
		height?: number, // 4/187861 (0.00%)
		oembed?: {
			author_name?: string, // 174485/187857 (92.88%)
			author_url?: string, // 173802/187857 (92.52%)
			cache_age?: number, // 797/187857 (0.42%)
			description?: string, // 187392/187857 (99.75%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 186894/187857 (99.49%)
			thumbnail_size?: number, // 4099/187857 (2.18%)
			thumbnail_url?: string, // 186894/187857 (99.49%)
			thumbnail_width?: number, // 186894/187857 (99.49%)
			title?: string, // 187844/187857 (99.99%)
			type: "video"|"rich",
			url?: string, // 167625/187857 (89.23%)
			version: "1.0",
			width: number,
		}, // 187857/187861 (100.00%)
		type: string,
		width?: number, // 4/187861 (0.00%)
	},
	media_embed: {
		content?: string, // 187861/1961817 (9.58%)
		height?: number, // 187861/1961817 (9.58%)
		scrolling?: boolean, // 187861/1961817 (9.58%)
		width?: number, // 187861/1961817 (9.58%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1396/1961817 (0.07%)
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