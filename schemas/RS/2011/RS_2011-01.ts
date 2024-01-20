interface RedditPost {
	approved_by: null,
	author?: string, // 837267/837995 (99.91%)
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
	likes: null,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		oembed: {
			author_name?: string, // 63132/68266 (92.48%)
			author_url?: string, // 62758/68266 (91.93%)
			cache_age?: number, // 273/68266 (0.40%)
			description?: string, // 68119/68266 (99.78%)
			height: number,
			html: string,
			html5?: string, // 380/68266 (0.56%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 67823/68266 (99.35%)
			thumbnail_url?: string, // 67823/68266 (99.35%)
			thumbnail_width?: number, // 67823/68266 (99.35%)
			title?: string, // 68146/68266 (99.82%)
			type: "video"|"rich",
			url?: string, // 59274/68266 (86.83%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	media_embed: {
		content?: string, // 68264/837995 (8.15%)
		height?: number, // 68264/837995 (8.15%)
		scrolling?: boolean, // 68264/837995 (8.15%)
		width?: number, // 68264/837995 (8.15%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 728/837995 (0.09%)
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