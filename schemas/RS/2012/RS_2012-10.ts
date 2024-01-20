interface RedditPost {
	author?: string, // 2774419/2776156 (99.94%)
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
		content?: string, // 46/266115 (0.02%)
		height?: number, // 46/266115 (0.02%)
		oembed?: {
			author_name?: string, // 257054/266069 (96.61%)
			author_url?: string, // 256548/266069 (96.42%)
			cache_age?: number, // 809/266069 (0.30%)
			description?: string, // 265744/266069 (99.88%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 264389/266069 (99.37%)
			thumbnail_url?: string, // 264388/266069 (99.37%)
			thumbnail_width?: number, // 264389/266069 (99.37%)
			title?: string, // 265993/266069 (99.97%)
			type: "video"|"rich",
			url?: string, // 240550/266069 (90.41%)
			version: "1.0",
			width: number,
		}, // 266069/266115 (99.98%)
		type: string,
		width?: number, // 46/266115 (0.02%)
	},
	media_embed: {
		content?: string, // 266115/2776156 (9.59%)
		height?: number, // 266115/2776156 (9.59%)
		scrolling?: boolean, // 266115/2776156 (9.59%)
		width?: number, // 266115/2776156 (9.59%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1737/2776156 (0.06%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "RhinoEntertainment"|"OfficialNerdCubed"|"Danny Tecsi"|"Officiallynerdcubed"|"JadeiteNoMiko"|"Red Hot Chili Peppers"|"Patrik Gudmundsäter"|"remhq"|"RoxorMetal"|"Cinemalamour"|"kaputkbh"|"Zapping FR"|"Northman83"|"CAF TV"|"70sheavyrockfan",
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
		type: "youtube.com"|"youtu.be",
	},
	secure_media_embed: {
		content?: string, // 19/2776156 (0.00%)
		height?: number, // 19/2776156 (0.00%)
		scrolling?: boolean, // 19/2776156 (0.00%)
		width?: number, // 19/2776156 (0.00%)
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