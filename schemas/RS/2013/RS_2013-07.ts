interface RedditPost {
	author?: string, // 3372590/3374406 (99.95%)
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
		content?: string, // 20/306470 (0.01%)
		height?: number, // 20/306470 (0.01%)
		oembed?: {
			author_name?: string, // 295804/306450 (96.53%)
			author_url?: string, // 295680/306450 (96.49%)
			cache_age?: number, // 634/306450 (0.21%)
			description?: string, // 306070/306450 (99.88%)
			height: number,
			html: string,
			mean_alpha?: number, // 195/306450 (0.06%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 305963/306450 (99.84%)
			thumbnail_url?: string, // 305961/306450 (99.84%)
			thumbnail_width?: number, // 305963/306450 (99.84%)
			title?: string, // 306421/306450 (99.99%)
			type: "video"|"rich",
			url?: string, // 286424/306450 (93.47%)
			version: "1.0",
			width: number,
		}, // 306450/306470 (99.99%)
		type: string,
		width?: number, // 20/306470 (0.01%)
	},
	media_embed: {
		content?: string, // 306470/3374406 (9.08%)
		height?: number, // 306470/3374406 (9.08%)
		scrolling?: boolean, // 306470/3374406 (9.08%)
		width?: number, // 306470/3374406 (9.08%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1816/3374406 (0.05%)
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
			provider_name: "YouTube"|"SoundCloud",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 18/19 (94.74%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"soundcloud.com"|"m.youtube.com",
	},
	secure_media_embed: {
		content?: string, // 19/3374406 (0.00%)
		height?: number, // 19/3374406 (0.00%)
		scrolling?: boolean, // 19/3374406 (0.00%)
		width?: number, // 19/3374406 (0.00%)
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