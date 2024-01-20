interface RedditPost {
	approved_by: null,
	author?: string, // 1980322/1981577 (99.94%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by: null,
	clicked: boolean,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
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
		content?: string, // 23/200093 (0.01%)
		height?: number, // 23/200093 (0.01%)
		oembed?: {
			author_name?: string, // 186728/200070 (93.33%)
			author_url?: string, // 186268/200070 (93.10%)
			cache_age?: number, // 568/200070 (0.28%)
			description?: string, // 199600/200070 (99.77%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 199075/200070 (99.50%)
			thumbnail_url?: string, // 199077/200070 (99.50%)
			thumbnail_width?: number, // 199075/200070 (99.50%)
			title?: string, // 200038/200070 (99.98%)
			type: "video"|"rich",
			url?: string, // 180379/200070 (90.16%)
			version: "1.0",
			width: number,
		}, // 200070/200093 (99.99%)
		type: string,
		width?: number, // 23/200093 (0.01%)
	},
	media_embed: {
		content?: string, // 200093/1981577 (10.10%)
		height?: number, // 200093/1981577 (10.10%)
		scrolling?: boolean, // 200093/1981577 (10.10%)
		width?: number, // 200093/1981577 (10.10%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1255/1981577 (0.06%)
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