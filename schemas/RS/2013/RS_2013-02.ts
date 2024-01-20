interface RedditPost {
	author?: string, // 2885152/2886631 (99.95%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by: null|"NorthboundFox",
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
		content?: string, // 27/285086 (0.01%)
		height?: number, // 27/285086 (0.01%)
		oembed?: {
			author_name?: string, // 276251/285059 (96.91%)
			author_url?: string, // 276054/285059 (96.84%)
			cache_age?: number, // 529/285059 (0.19%)
			description?: string, // 284794/285059 (99.91%)
			dominant_colors?: {
				color: number[],
				weight: number,
			}[], // 8355/285059 (2.93%)
			entropy?: number, // 8395/285059 (2.95%)
			height: number,
			html: string,
			mean_alpha?: number, // 190/285059 (0.07%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 283749/285059 (99.54%)
			thumbnail_url?: string, // 283745/285059 (99.54%)
			thumbnail_width?: number, // 283749/285059 (99.54%)
			title?: string, // 285039/285059 (99.99%)
			type: "video"|"rich",
			url?: string, // 267637/285059 (93.89%)
			version: "1.0",
			width: number,
		}, // 285059/285086 (99.99%)
		type: string,
		width?: number, // 27/285086 (0.01%)
	},
	media_embed: {
		content?: string, // 285086/2886631 (9.88%)
		height?: number, // 285086/2886631 (9.88%)
		scrolling?: boolean, // 285086/2886631 (9.88%)
		width?: number, // 285086/2886631 (9.88%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1479/2886631 (0.05%)
	report_reasons: null|[],
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: "STP"|"officialcaravan"|"HondzikCZ"|"Pareti Sportcenter"|"szcatye"|"destroyeroffuturedof"|"emimusic"|"InfrasonicRec"|"AlunaGeorge", // 9/10 (90.00%)
			author_url?: string, // 9/10 (90.00%)
			description: string,
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"SoundCloud",
			provider_url: "http://www.youtube.com/"|"https://vimeo.com/"|"http://soundcloud.com"|"http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 7/10 (70.00%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"soundcloud.com",
	},
	secure_media_embed: {
		content?: string, // 10/2886631 (0.00%)
		height?: number, // 10/2886631 (0.00%)
		scrolling?: boolean, // 10/2886631 (0.00%)
		width?: number, // 10/2886631 (0.00%)
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