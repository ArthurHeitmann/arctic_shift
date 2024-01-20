interface RedditPost {
	author?: string, // 3313038/3315090 (99.94%)
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
		content?: string, // 18/304704 (0.01%)
		height?: number, // 18/304704 (0.01%)
		oembed?: {
			author_name?: string, // 294563/304686 (96.68%)
			author_url?: string, // 294439/304686 (96.64%)
			cache_age?: number, // 465/304686 (0.15%)
			description?: string, // 304188/304686 (99.84%)
			height: number,
			html: string,
			mean_alpha?: number, // 195/304686 (0.06%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 304072/304686 (99.80%)
			thumbnail_url?: string, // 304065/304686 (99.80%)
			thumbnail_width?: number, // 304072/304686 (99.80%)
			title?: string, // 304650/304686 (99.99%)
			type: "video"|"rich",
			url?: string, // 285382/304686 (93.66%)
			version: "1.0",
			width: number,
		}, // 304686/304704 (99.99%)
		type: string,
		width?: number, // 18/304704 (0.01%)
	},
	media_embed: {
		content?: string, // 304704/3315090 (9.19%)
		height?: number, // 304704/3315090 (9.19%)
		scrolling?: boolean, // 304704/3315090 (9.19%)
		width?: number, // 304704/3315090 (9.19%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 2052/3315090 (0.06%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "ARIRANG ISSUE"|"2013xgame44"|"ben1996123"|"Bruningable"|"Patrick Buhler"|"CBSNewsOnline"|"MindCrackNetwork"|"Thelichalex"|"311VEVO"|"Bulsh and Scribe"|"Der Commissar",
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
		content?: string, // 11/3315090 (0.00%)
		height?: number, // 11/3315090 (0.00%)
		scrolling?: boolean, // 11/3315090 (0.00%)
		width?: number, // 11/3315090 (0.00%)
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