interface RedditPost {
	author?: string, // 2566524/2568109 (99.94%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by: null,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	gilded: number,
	id: string,
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 28/235783 (0.01%)
		height?: number, // 28/235783 (0.01%)
		oembed?: {
			author_name?: string, // 228147/235755 (96.77%)
			author_url?: string, // 227635/235755 (96.56%)
			cache_age?: number, // 725/235755 (0.31%)
			description?: string, // 235425/235755 (99.86%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 234175/235755 (99.33%)
			thumbnail_url?: string, // 234174/235755 (99.33%)
			thumbnail_width?: number, // 234175/235755 (99.33%)
			title?: string, // 235723/235755 (99.99%)
			type: "video"|"rich",
			url?: string, // 213436/235755 (90.53%)
			version: "1.0",
			width: number,
		}, // 235755/235783 (99.99%)
		type: string,
		width?: number, // 28/235783 (0.01%)
	},
	media_embed: {
		content?: string, // 235783/2568109 (9.18%)
		height?: number, // 235783/2568109 (9.18%)
		scrolling?: boolean, // 235783/2568109 (9.18%)
		width?: number, // 235783/2568109 (9.18%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1585/2568109 (0.06%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			description: string,
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo",
			provider_url: "http://www.youtube.com/"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 17/18 (94.44%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"youtu.be"|"vimeo.com",
	},
	secure_media_embed: {
		content?: string, // 18/2568109 (0.00%)
		height?: number, // 18/2568109 (0.00%)
		scrolling?: boolean, // 18/2568109 (0.00%)
		width?: number, // 18/2568109 (0.00%)
	},
	selftext: string,
	selftext_html: null|string,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
	user_reports: [],
}