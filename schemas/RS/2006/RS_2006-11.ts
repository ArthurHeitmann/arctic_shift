interface RedditPost {
	approved?: boolean, // 1035/36824 (2.81%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 59/36824 (0.16%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|"compsci"|"chem",
	author_flair_richtext?: {
		e: "text",
		t: "MS | Computer Science"|"PhD | Synthetic Organic Chemistry",
	}[], // 32906/36824 (89.36%)
	author_flair_text: null|"MS | Computer Science"|"PhD | Synthetic Organic Chemistry",
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 32906/36824 (89.36%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	edited: boolean,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	id: string,
	ignore_reports?: boolean, // 1035/36824 (2.81%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null,
	link_flair_richtext: [],
	link_flair_text: null,
	link_flair_text_color: "dark",
	link_flair_type: "text",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: "lincolnshep", // 1/2 (50.00%)
			author_url?: "http://www.youtube.com/user/lincolnshep", // 1/2 (50.00%)
			description?: string, // 1/2 (50.00%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://www.youtube.com/"|"http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title?: string, // 1/2 (50.00%)
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 2/36824 (0.01%)
		height?: number, // 2/36824 (0.01%)
		media_domain_url?: string, // 2/36824 (0.01%)
		scrolling?: boolean, // 2/36824 (0.01%)
		width?: number, // 2/36824 (0.01%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link", // 13/36824 (0.04%)
	preview?: {
		enabled: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
			},
		}[],
	}, // 13/36824 (0.04%)
	removed?: boolean, // 1035/36824 (2.81%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: "lincolnshep", // 1/2 (50.00%)
			author_url?: "http://www.youtube.com/user/lincolnshep", // 1/2 (50.00%)
			description?: string, // 1/2 (50.00%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://www.youtube.com/"|"http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title?: string, // 1/2 (50.00%)
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 2/36824 (0.01%)
		height?: number, // 2/36824 (0.01%)
		media_domain_url?: string, // 2/36824 (0.01%)
		scrolling?: boolean, // 2/36824 (0.01%)
		width?: number, // 2/36824 (0.01%)
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spam?: boolean, // 1035/36824 (2.81%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new",
	thumbnail: string,
	thumbnail_height: null|number,
	thumbnail_width: null|number,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
}