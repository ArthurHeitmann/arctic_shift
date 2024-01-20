interface RedditPost {
	approved?: boolean, // 4052/212552 (1.91%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 832/212552 (0.39%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 173169/212552 (81.47%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 173169/212552 (81.47%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	edited: boolean|number,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	id: string,
	ignore_reports?: boolean, // 4052/212552 (1.91%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|"nine"|"red"|"seventeen"|"fourteen"|"",
	link_flair_richtext: {
		e: "text",
		t: "Physics"|"R1: Political"|"Mathematics"|"Philosophy"|"Image Gallery",
	}[],
	link_flair_text: null|"Physics"|"R1: Political"|"Mathematics"|"Philosophy"|"Image Gallery",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "MachineGun Smith",
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
		content?: string, // 1/212552 (0.00%)
		height?: number, // 1/212552 (0.00%)
		media_domain_url?: string, // 1/212552 (0.00%)
		scrolling?: boolean, // 1/212552 (0.00%)
		width?: number, // 1/212552 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_all"|"promo_adult"|"no_ads"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image", // 71/212552 (0.03%)
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
	}, // 71/212552 (0.03%)
	removed?: boolean, // 4052/212552 (1.91%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "MachineGun Smith",
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
		content?: string, // 1/212552 (0.00%)
		height?: number, // 1/212552 (0.00%)
		media_domain_url?: string, // 1/212552 (0.00%)
		scrolling?: boolean, // 1/212552 (0.00%)
		width?: number, // 1/212552 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4052/212552 (1.91%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top",
	thumbnail: string,
	thumbnail_height?: null|number, // 139799/212552 (65.77%)
	thumbnail_width?: null|number, // 139799/212552 (65.77%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_all"|"promo_adult"|"no_ads"|"house_only"|null,
}