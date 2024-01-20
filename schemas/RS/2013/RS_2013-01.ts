interface RedditPost {
	author?: string, // 3133134/3134862 (99.94%)
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
		content?: string, // 33/286277 (0.01%)
		height?: number, // 33/286277 (0.01%)
		oembed?: {
			author_name?: string, // 276230/286244 (96.50%)
			author_url?: string, // 275980/286244 (96.41%)
			cache_age?: number, // 605/286244 (0.21%)
			description?: string, // 285905/286244 (99.88%)
			dominant_colors?: {
				color: number[],
				weight: number,
			}[], // 214146/286244 (74.81%)
			entropy?: number, // 215537/286244 (75.30%)
			height: number,
			html: string,
			mean_alpha?: number, // 223/286244 (0.08%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 285114/286244 (99.61%)
			thumbnail_url?: string, // 285108/286244 (99.60%)
			thumbnail_width?: number, // 285114/286244 (99.61%)
			title?: string, // 286196/286244 (99.98%)
			type: "video"|"rich",
			url?: string, // 267961/286244 (93.61%)
			version: "1.0",
			width: number,
		}, // 286244/286277 (99.99%)
		type: string,
		width?: number, // 33/286277 (0.01%)
	},
	media_embed: {
		content?: string, // 286277/3134862 (9.13%)
		height?: number, // 286277/3134862 (9.13%)
		scrolling?: boolean, // 286277/3134862 (9.13%)
		width?: number, // 286277/3134862 (9.13%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1728/3134862 (0.06%)
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
			url?: string, // 42/43 (97.67%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"youtu.be"|"soundcloud.com",
	},
	secure_media_embed: {
		content?: string, // 43/3134862 (0.00%)
		height?: number, // 43/3134862 (0.00%)
		scrolling?: boolean, // 43/3134862 (0.00%)
		width?: number, // 43/3134862 (0.00%)
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