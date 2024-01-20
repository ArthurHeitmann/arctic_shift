interface RedditPost {
	approved?: boolean, // 1195/43725 (2.73%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 9/43725 (0.02%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|"bio"|"chem"|"   reward2",
	author_flair_richtext?: {
		e: "text",
		t: "BS | Zoology | Ecology and Entomology"|"PhD | Synthetic Organic Chemistry",
	}[], // 39659/43725 (90.70%)
	author_flair_text: null|"BS | Zoology | Ecology and Entomology"|"PhD | Synthetic Organic Chemistry",
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 39659/43725 (90.70%)
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
	ignore_reports?: boolean, // 1195/43725 (2.73%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|"env",
	link_flair_richtext: {
		e: "text",
		t: "Environment",
	}[],
	link_flair_text: null|"Environment",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 1/43725 (0.00%)
		height?: number, // 1/43725 (0.00%)
		media_domain_url?: string, // 1/43725 (0.00%)
		scrolling?: boolean, // 1/43725 (0.00%)
		width?: number, // 1/43725 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link", // 15/43725 (0.03%)
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
	}, // 15/43725 (0.03%)
	removed?: boolean, // 1195/43725 (2.73%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 1/43725 (0.00%)
		height?: number, // 1/43725 (0.00%)
		media_domain_url?: string, // 1/43725 (0.00%)
		scrolling?: boolean, // 1/43725 (0.00%)
		width?: number, // 1/43725 (0.00%)
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spam?: boolean, // 1195/43725 (2.73%)
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