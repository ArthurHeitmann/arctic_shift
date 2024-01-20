interface RedditPost {
	approved?: boolean, // 1384/47317 (2.92%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 57/47317 (0.12%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|"   reward2"|"chem"|"bio",
	author_flair_richtext?: {
		e: "text",
		t: "PhD | Synthetic Organic Chemistry"|"BS | Zoology | Ecology and Entomology",
	}[], // 42424/47317 (89.66%)
	author_flair_text: null|"PhD | Synthetic Organic Chemistry"|"BS | Zoology | Ecology and Entomology",
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 42424/47317 (89.66%)
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
	ignore_reports?: boolean, // 1384/47317 (2.92%)
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
			author_name: "chrisofduke",
			author_url: "https://www.youtube.com/user/chrisofduke",
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "The Wilhelm Scream Compilation",
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 1/47317 (0.00%)
		height?: number, // 1/47317 (0.00%)
		media_domain_url?: string, // 1/47317 (0.00%)
		scrolling?: boolean, // 1/47317 (0.00%)
		width?: number, // 1/47317 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link"|"rich:video", // 15/47317 (0.03%)
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
	}, // 15/47317 (0.03%)
	removed?: boolean, // 1384/47317 (2.92%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "chrisofduke",
			author_url: "https://www.youtube.com/user/chrisofduke",
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "The Wilhelm Scream Compilation",
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 1/47317 (0.00%)
		height?: number, // 1/47317 (0.00%)
		media_domain_url?: string, // 1/47317 (0.00%)
		scrolling?: boolean, // 1/47317 (0.00%)
		width?: number, // 1/47317 (0.00%)
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spam?: boolean, // 1384/47317 (2.92%)
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