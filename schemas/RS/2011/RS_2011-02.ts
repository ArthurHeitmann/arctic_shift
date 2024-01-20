interface RedditPost {
	approved_by: null,
	author?: string, // 821524/822302 (99.91%)
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
		content?: string, // 7/62716 (0.01%)
		height?: number, // 7/62716 (0.01%)
		oembed?: {
			author_name?: string, // 58127/62709 (92.69%)
			author_url?: string, // 57683/62709 (91.99%)
			cache_age?: number, // 369/62709 (0.59%)
			description?: string, // 62581/62709 (99.80%)
			height: number,
			html: string,
			html5?: string, // 14097/62709 (22.48%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 62223/62709 (99.22%)
			thumbnail_url?: string, // 62224/62709 (99.23%)
			thumbnail_width?: number, // 62223/62709 (99.22%)
			title?: string, // 62643/62709 (99.89%)
			type: "video"|"rich",
			url?: string, // 54324/62709 (86.63%)
			version: "1.0",
			width: number,
		}, // 62709/62716 (99.99%)
		type: string,
		width?: number, // 7/62716 (0.01%)
	},
	media_embed: {
		content?: string, // 62714/822302 (7.63%)
		height?: number, // 62714/822302 (7.63%)
		scrolling?: boolean, // 62714/822302 (7.63%)
		width?: number, // 62714/822302 (7.63%)
	},
	name: string,
	num_comments: number,
	num_reports: null,
	over_18: boolean,
	permalink: string,
	promoted?: boolean, // 778/822302 (0.09%)
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