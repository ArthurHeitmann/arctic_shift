interface RedditPost {
	author?: string, // 2734155/2735743 (99.94%)
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
		content?: string, // 11/237358 (0.00%)
		height?: number, // 11/237358 (0.00%)
		oembed?: {
			author_name?: string, // 228631/237347 (96.33%)
			author_url?: string, // 228440/237347 (96.25%)
			cache_age?: number, // 473/237347 (0.20%)
			description?: string, // 236999/237347 (99.85%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 236633/237347 (99.70%)
			thumbnail_url?: string, // 236632/237347 (99.70%)
			thumbnail_width?: number, // 236633/237347 (99.70%)
			title?: string, // 237282/237347 (99.97%)
			type: "video"|"rich",
			url?: string, // 220493/237347 (92.90%)
			version: "1.0",
			width: number,
		}, // 237347/237358 (100.00%)
		type: string,
		width?: number, // 11/237358 (0.00%)
	},
	media_embed: {
		content?: string, // 237358/2735743 (8.68%)
		height?: number, // 237358/2735743 (8.68%)
		scrolling?: boolean, // 237358/2735743 (8.68%)
		width?: number, // 237358/2735743 (8.68%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1588/2735743 (0.06%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 36/37 (97.30%)
			author_url?: string, // 36/37 (97.30%)
			description: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://www.youtube.com/"|"http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 34/37 (91.89%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"youtu.be",
	},
	secure_media_embed: {
		content?: string, // 37/2735743 (0.00%)
		height?: number, // 37/2735743 (0.00%)
		scrolling?: boolean, // 37/2735743 (0.00%)
		width?: number, // 37/2735743 (0.00%)
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