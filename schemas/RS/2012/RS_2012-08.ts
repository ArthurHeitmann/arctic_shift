interface RedditPost {
	approved_by: null,
	author?: string, // 2781273/2782752 (99.95%)
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
		content?: string, // 66/248689 (0.03%)
		height?: number, // 66/248689 (0.03%)
		oembed?: {
			author_name?: string, // 239901/248623 (96.49%)
			author_url?: string, // 239392/248623 (96.29%)
			cache_age?: number, // 706/248623 (0.28%)
			description?: string, // 248320/248623 (99.88%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 240525/248623 (96.74%)
			thumbnail_url?: string, // 240520/248623 (96.74%)
			thumbnail_width?: number, // 240525/248623 (96.74%)
			title?: string, // 248563/248623 (99.98%)
			type: "video"|"rich",
			url?: string, // 224609/248623 (90.34%)
			version: "1.0",
			width: number,
		}, // 248623/248689 (99.97%)
		type: string,
		width?: number, // 66/248689 (0.03%)
	},
	media_embed: {
		content?: string, // 248689/2782752 (8.94%)
		height?: number, // 248689/2782752 (8.94%)
		scrolling?: boolean, // 248689/2782752 (8.94%)
		width?: number, // 248689/2782752 (8.94%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1479/2782752 (0.05%)
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