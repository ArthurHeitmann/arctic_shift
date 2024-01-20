interface RedditPost {
	approved_by: null,
	author?: string, // 1151770/1153048 (99.89%)
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
		content?: string, // 18/95222 (0.02%)
		height?: number, // 18/95222 (0.02%)
		oembed?: {
			author_name?: string, // 87700/95204 (92.12%)
			author_url?: string, // 87116/95204 (91.50%)
			cache_age?: number, // 480/95204 (0.50%)
			description?: string, // 94996/95204 (99.78%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 94466/95204 (99.22%)
			thumbnail_url?: string, // 94467/95204 (99.23%)
			thumbnail_width?: number, // 94466/95204 (99.22%)
			title?: string, // 95160/95204 (99.95%)
			type: "video"|"rich",
			url?: string, // 82498/95204 (86.65%)
			version: "1.0",
			width: number,
		}, // 95204/95222 (99.98%)
		type: string,
		width?: number, // 18/95222 (0.02%)
	},
	media_embed: {
		content?: string, // 95219/1153048 (8.26%)
		height?: number, // 95219/1153048 (8.26%)
		scrolling?: boolean, // 95219/1153048 (8.26%)
		width?: number, // 95219/1153048 (8.26%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1278/1153048 (0.11%)
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