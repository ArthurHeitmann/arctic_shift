interface RedditPost {
	approved_by: null,
	author?: string, // 975843/976817 (99.90%)
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
		content?: string, // 4/79153 (0.01%)
		height?: number, // 4/79153 (0.01%)
		oembed?: {
			author_name?: string, // 72407/79149 (91.48%)
			author_url?: string, // 71717/79149 (90.61%)
			cache_age?: number, // 600/79149 (0.76%)
			description?: string, // 78961/79149 (99.76%)
			height: number,
			html: string,
			html5?: string, // 35000/79149 (44.22%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 78434/79149 (99.10%)
			thumbnail_url?: string, // 78436/79149 (99.10%)
			thumbnail_width?: number, // 78434/79149 (99.10%)
			title?: string, // 79080/79149 (99.91%)
			type: "video"|"rich",
			url?: string, // 67609/79149 (85.42%)
			version: "1.0",
			width: number,
		}, // 79149/79153 (99.99%)
		type: string,
		width?: number, // 4/79153 (0.01%)
	},
	media_embed: {
		content?: string, // 79153/976817 (8.10%)
		height?: number, // 79153/976817 (8.10%)
		scrolling?: boolean, // 79153/976817 (8.10%)
		width?: number, // 79153/976817 (8.10%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 974/976817 (0.10%)
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