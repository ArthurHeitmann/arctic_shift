interface RedditPost {
	author?: string, // 3118988/3121163 (99.93%)
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
		content?: string, // 44/311586 (0.01%)
		height?: number, // 44/311586 (0.01%)
		oembed?: {
			author_name?: string, // 283679/311542 (91.06%)
			author_url?: string, // 283607/311542 (91.03%)
			cache_age?: number, // 379/311542 (0.12%)
			description?: string, // 310091/311542 (99.53%)
			height: number,
			html: string,
			mean_alpha?: number, // 1587/311542 (0.51%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 310226/311542 (99.58%)
			thumbnail_url?: string, // 310219/311542 (99.58%)
			thumbnail_width?: number, // 310226/311542 (99.58%)
			title?: string, // 311189/311542 (99.89%)
			type: "video"|"rich",
			url?: string, // 263229/311542 (84.49%)
			version: "1.0",
			width: number,
		}, // 311542/311586 (99.99%)
		type: string,
		width?: number, // 44/311586 (0.01%)
	},
	media_embed: {
		content?: string, // 311586/3121163 (9.98%)
		height?: number, // 311586/3121163 (9.98%)
		scrolling?: boolean, // 311586/3121163 (9.98%)
		width?: number, // 311586/3121163 (9.98%)
	},
	mod_reports: [],
	num_comments: number,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 2175/3121163 (0.07%)
	report_reasons: null,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 197133/198814 (99.15%)
			author_url?: string, // 197133/198814 (99.15%)
			description?: string, // 198419/198814 (99.80%)
			height: number,
			html: string,
			mean_alpha?: number, // 1/198814 (0.00%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Wistia, Inc.",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://wistia.com",
			thumbnail_height?: number, // 198602/198814 (99.89%)
			thumbnail_url?: string, // 198597/198814 (99.89%)
			thumbnail_width?: number, // 198602/198814 (99.89%)
			title?: string, // 198781/198814 (99.98%)
			type: "video"|"rich",
			url?: string, // 184151/198814 (92.62%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string, // 198814/3121163 (6.37%)
		height?: number, // 198814/3121163 (6.37%)
		scrolling?: boolean, // 198814/3121163 (6.37%)
		width?: number, // 198814/3121163 (6.37%)
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