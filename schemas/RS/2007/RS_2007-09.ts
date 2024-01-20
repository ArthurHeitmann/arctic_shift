interface RedditPost {
	approved?: boolean, // 2712/91294 (2.97%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 162/91294 (0.18%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|"kentucky-flag"|"northcarolina-flag"|"NHLLeafs"|"california-flag"|"alabama-flag"|"compsci"|"bio"|"physics"|"SOCarsenal"|"   reward2"|"massachusetts-flag"|"newyork-flag"|"NBAMavericks"|"NFLBrowns"|"NFLPackers",
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 82901/91294 (90.81%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 82901/91294 (90.81%)
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
	ignore_reports?: boolean, // 2712/91294 (2.97%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/91294 (0.00%)
	link_flair_css_class: null|"nonwhitelistedchannel",
	link_flair_richtext: {
		e: "text",
		t: "Non-whitelisted Youtube Channel",
	}[],
	link_flair_text: null|"Non-whitelisted Youtube Channel",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "Sidewinder77",
			author_url: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "Penn and Teller - The FCC",
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 1/91294 (0.00%)
		height?: number, // 1/91294 (0.00%)
		media_domain_url?: string, // 1/91294 (0.00%)
		scrolling?: boolean, // 1/91294 (0.00%)
		width?: number, // 1/91294 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 37/91294 (0.04%)
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
				nsfw?: {
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
				}, // 2/37 (5.41%)
				obfuscated?: {
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
				}, // 2/37 (5.41%)
			},
		}[],
	}, // 37/91294 (0.04%)
	removed?: boolean, // 2712/91294 (2.97%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "Sidewinder77",
			author_url: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "Penn and Teller - The FCC",
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 1/91294 (0.00%)
		height?: number, // 1/91294 (0.00%)
		media_domain_url?: string, // 1/91294 (0.00%)
		scrolling?: boolean, // 1/91294 (0.00%)
		width?: number, // 1/91294 (0.00%)
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spam?: boolean, // 2712/91294 (2.97%)
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