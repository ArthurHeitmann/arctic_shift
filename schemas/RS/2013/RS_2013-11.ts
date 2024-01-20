interface RedditPost {
	author?: string, // 3519657/3522378 (99.92%)
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
		content?: string, // 41/377009 (0.01%)
		height?: number, // 41/377009 (0.01%)
		oembed?: {
			author_name?: string, // 290756/376968 (77.13%)
			author_url?: string, // 290647/376968 (77.10%)
			cache_age?: number, // 426/376968 (0.11%)
			description?: string, // 375743/376968 (99.68%)
			height: number,
			html: string,
			mean_alpha?: number, // 4536/376968 (1.20%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 376061/376968 (99.76%)
			thumbnail_url?: string, // 376054/376968 (99.76%)
			thumbnail_width?: number, // 376061/376968 (99.76%)
			title?: string, // 376468/376968 (99.87%)
			type: "video"|"rich",
			url?: string, // 261149/376968 (69.28%)
			version: "1.0",
			width: number,
		}, // 376968/377009 (99.99%)
		type: string,
		width?: number, // 41/377009 (0.01%)
	},
	media_embed: {
		content?: string, // 377009/3522378 (10.70%)
		height?: number, // 377009/3522378 (10.70%)
		scrolling?: boolean, // 377009/3522378 (10.70%)
		width?: number, // 377009/3522378 (10.70%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 2721/3522378 (0.08%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 282528/284525 (99.30%)
			author_url?: string, // 282528/284525 (99.30%)
			description?: string, // 284145/284525 (99.87%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Wistia, Inc.",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://wistia.com",
			thumbnail_height?: number, // 284450/284525 (99.97%)
			thumbnail_url?: string, // 284443/284525 (99.97%)
			thumbnail_width?: number, // 284450/284525 (99.97%)
			title?: string, // 284505/284525 (99.99%)
			type: "video"|"rich",
			url?: string, // 259950/284525 (91.36%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string, // 284525/3522378 (8.08%)
		height?: number, // 284525/3522378 (8.08%)
		scrolling?: boolean, // 284525/3522378 (8.08%)
		width?: number, // 284525/3522378 (8.08%)
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