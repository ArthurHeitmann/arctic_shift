interface RedditPost {
	approved_by: null,
	author?: string, // 970382/971371 (99.90%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by: null,
	clicked: boolean,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	hidden: boolean,
	id: string,
	is_self: boolean,
	likes: null|boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 5/80064 (0.01%)
		height?: number, // 5/80064 (0.01%)
		oembed?: {
			author_name?: string, // 72857/80059 (91.00%)
			author_url?: string, // 72118/80059 (90.08%)
			cache_age?: number, // 608/80059 (0.76%)
			description?: string, // 79894/80059 (99.79%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 79496/80059 (99.30%)
			thumbnail_url?: string, // 79497/80059 (99.30%)
			thumbnail_width?: number, // 79496/80059 (99.30%)
			title?: string, // 79984/80059 (99.91%)
			type: "video"|"rich",
			url?: string, // 67939/80059 (84.86%)
			version: "1.0",
			width: number,
		}, // 80059/80064 (99.99%)
		type: string,
		width?: number, // 5/80064 (0.01%)
	},
	media_embed: {
		content?: string, // 80063/971371 (8.24%)
		height?: number, // 80063/971371 (8.24%)
		scrolling?: boolean, // 80063/971371 (8.24%)
		width?: number, // 80063/971371 (8.24%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 989/971371 (0.10%)
	saved: boolean,
	score: number,
	selftext: string,
	selftext_html: null|string,
	subreddit: string,
	subreddit_id: string,
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}