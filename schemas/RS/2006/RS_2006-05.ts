interface RedditPost {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 61/14701 (0.41%)
	author_flair_background_color: null|"",
	author_flair_css_class: null,
	author_flair_richtext?: [], // 13777/14701 (93.71%)
	author_flair_text: null,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text", // 13777/14701 (93.71%)
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
			author_name: "Zoltarkill",
			author_url: "http://www.youtube.com/user/Zoltarkill",
			description: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "Pac Man: The Movie",
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 1/14701 (0.01%)
		height?: number, // 1/14701 (0.01%)
		media_domain_url?: string, // 1/14701 (0.01%)
		scrolling?: boolean, // 1/14701 (0.01%)
		width?: number, // 1/14701 (0.01%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link", // 3/14701 (0.02%)
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
	}, // 3/14701 (0.02%)
	retrieved_on?: number, // 208/14701 (1.41%)
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "Zoltarkill",
			author_url: "http://www.youtube.com/user/Zoltarkill",
			description: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "Pac Man: The Movie",
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 1/14701 (0.01%)
		height?: number, // 1/14701 (0.01%)
		media_domain_url?: string, // 1/14701 (0.01%)
		scrolling?: boolean, // 1/14701 (0.01%)
		width?: number, // 1/14701 (0.01%)
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"new"|"confidence",
	thumbnail: string,
	thumbnail_height: null|number,
	thumbnail_width: null|number,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
}