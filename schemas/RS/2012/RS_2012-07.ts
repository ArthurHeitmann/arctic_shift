interface RedditPost {
	approved_by: null,
	author?: string, // 2662144/2663529 (99.95%)
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
		content?: string, // 20/233642 (0.01%)
		height?: number, // 20/233642 (0.01%)
		oembed?: {
			author_name?: string, // 224986/233622 (96.30%)
			author_url?: string, // 224383/233622 (96.05%)
			cache_age?: number, // 717/233622 (0.31%)
			description?: string, // 233199/233622 (99.82%)
			height: number,
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 231768/233622 (99.21%)
			thumbnail_url?: string, // 231765/233622 (99.21%)
			thumbnail_width?: number, // 231768/233622 (99.21%)
			title?: string, // 233563/233622 (99.97%)
			type: "video"|"rich",
			url?: string, // 209803/233622 (89.80%)
			version: "1.0",
			width: number,
		}, // 233622/233642 (99.99%)
		type: string,
		width?: number, // 20/233642 (0.01%)
	},
	media_embed: {
		content?: string, // 233642/2663529 (8.77%)
		height?: number, // 233642/2663529 (8.77%)
		scrolling?: boolean, // 233642/2663529 (8.77%)
		width?: number, // 233642/2663529 (8.77%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 1385/2663529 (0.05%)
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