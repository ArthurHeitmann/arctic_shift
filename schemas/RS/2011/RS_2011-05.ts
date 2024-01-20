interface RedditPost {
	approved_by: null,
	author?: string, // 1080472/1081578 (99.90%)
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
		content?: string, // 13/90610 (0.01%)
		height?: number, // 13/90610 (0.01%)
		oembed?: {
			author_name?: string, // 82897/90597 (91.50%)
			author_url?: string, // 82219/90597 (90.75%)
			cache_age?: number, // 502/90597 (0.55%)
			description?: string, // 90366/90597 (99.75%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 89844/90597 (99.17%)
			thumbnail_url?: string, // 89844/90597 (99.17%)
			thumbnail_width?: number, // 89844/90597 (99.17%)
			title?: string, // 90520/90597 (99.92%)
			type: "video"|"rich",
			url?: string, // 77286/90597 (85.31%)
			version: "1.0",
			width: number,
		}, // 90597/90610 (99.99%)
		type: string,
		width?: number, // 13/90610 (0.01%)
	},
	media_embed: {
		content?: string, // 90609/1081578 (8.38%)
		height?: number, // 90609/1081578 (8.38%)
		scrolling?: boolean, // 90609/1081578 (8.38%)
		width?: number, // 90609/1081578 (8.38%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1106/1081578 (0.10%)
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