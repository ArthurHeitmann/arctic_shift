interface RedditPost {
	author?: string, // 3199515/3201525 (99.94%)
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
		content?: string, // 13/308428 (0.00%)
		height?: number, // 13/308428 (0.00%)
		oembed?: {
			author_name?: string, // 298487/308415 (96.78%)
			author_url?: string, // 298265/308415 (96.71%)
			cache_age?: number, // 666/308415 (0.22%)
			description?: string, // 308089/308415 (99.89%)
			height: number,
			html: string,
			mean_alpha?: number, // 210/308415 (0.07%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 307331/308415 (99.65%)
			thumbnail_url?: string, // 307330/308415 (99.65%)
			thumbnail_width?: number, // 307331/308415 (99.65%)
			title?: string, // 308405/308415 (100.00%)
			type: "video"|"rich",
			url?: string, // 288923/308415 (93.68%)
			version: "1.0",
			width: number,
		}, // 308415/308428 (100.00%)
		type: string,
		width?: number, // 13/308428 (0.00%)
	},
	media_embed: {
		content?: string, // 308428/3201525 (9.63%)
		height?: number, // 308428/3201525 (9.63%)
		scrolling?: boolean, // 308428/3201525 (9.63%)
		width?: number, // 308428/3201525 (9.63%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 2010/3201525 (0.06%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "greecefrance1789"|"joeseatat"|"Trey Hair"|"shahtoosh"|"JanAnimations",
			author_url: string,
			description: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 5/3201525 (0.00%)
		height?: number, // 5/3201525 (0.00%)
		scrolling?: boolean, // 5/3201525 (0.00%)
		width?: number, // 5/3201525 (0.00%)
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