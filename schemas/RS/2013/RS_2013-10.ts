interface RedditPost {
	author?: string, // 3464020/3467225 (99.91%)
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
		content?: string, // 26/366397 (0.01%)
		height?: number, // 26/366397 (0.01%)
		oembed?: {
			author_name?: string, // 283833/366371 (77.47%)
			author_url?: string, // 283743/366371 (77.45%)
			cache_age?: number, // 426/366371 (0.12%)
			description?: string, // 364869/366371 (99.59%)
			height: number,
			html: string,
			mean_alpha?: number, // 4071/366371 (1.11%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 364880/366371 (99.59%)
			thumbnail_url?: string, // 364878/366371 (99.59%)
			thumbnail_width?: number, // 364880/366371 (99.59%)
			title?: string, // 365559/366371 (99.78%)
			type: "video"|"rich",
			url?: string, // 256742/366371 (70.08%)
			version: "1.0",
			width: number,
		}, // 366371/366397 (99.99%)
		type: string,
		width?: number, // 26/366397 (0.01%)
	},
	media_embed: {
		content?: string, // 366397/3467225 (10.57%)
		height?: number, // 366397/3467225 (10.57%)
		scrolling?: boolean, // 366397/3467225 (10.57%)
		width?: number, // 366397/3467225 (10.57%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 3205/3467225 (0.09%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 276554/278512 (99.30%)
			author_url?: string, // 276555/278512 (99.30%)
			description?: string, // 278136/278512 (99.86%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Wistia, Inc.",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://wistia.com",
			thumbnail_height?: number, // 278374/278512 (99.95%)
			thumbnail_url?: string, // 278371/278512 (99.95%)
			thumbnail_width?: number, // 278374/278512 (99.95%)
			title?: string, // 278493/278512 (99.99%)
			type: "video"|"rich",
			url?: string, // 255520/278512 (91.74%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string, // 278512/3467225 (8.03%)
		height?: number, // 278512/3467225 (8.03%)
		scrolling?: boolean, // 278512/3467225 (8.03%)
		width?: number, // 278512/3467225 (8.03%)
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