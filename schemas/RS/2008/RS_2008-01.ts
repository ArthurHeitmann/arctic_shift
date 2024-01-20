interface RedditPost {
	approved?: boolean, // 4610/142310 (3.24%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 98/142310 (0.07%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 115335/142310 (81.04%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 115335/142310 (81.04%)
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
	ignore_reports?: boolean, // 4610/142310 (3.24%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|""|"kultura",
	link_flair_richtext: {
		e: "text",
		t: "First /r/Firefox post ever!"|"KULTURA",
	}[],
	link_flair_text: null|"First /r/Firefox post ever!"|"KULTURA",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "My Damn Channel",
			author_url: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 1/142310 (0.00%)
		height?: number, // 1/142310 (0.00%)
		media_domain_url?: string, // 1/142310 (0.00%)
		scrolling?: boolean, // 1/142310 (0.00%)
		width?: number, // 1/142310 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_all"|"house_only"|"no_ads"|"promo_adult"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 57/142310 (0.04%)
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
	}, // 57/142310 (0.04%)
	removed?: boolean, // 4610/142310 (3.24%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "My Damn Channel",
			author_url: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 1/142310 (0.00%)
		height?: number, // 1/142310 (0.00%)
		media_domain_url?: string, // 1/142310 (0.00%)
		scrolling?: boolean, // 1/142310 (0.00%)
		width?: number, // 1/142310 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4610/142310 (3.24%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new",
	thumbnail: string,
	thumbnail_height?: null|number, // 142309/142310 (100.00%)
	thumbnail_width?: null|number, // 142309/142310 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_all"|"house_only"|"no_ads"|"promo_adult"|null,
}