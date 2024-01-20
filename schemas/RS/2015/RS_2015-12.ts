interface RedditPost {
	adserver_click_url?: null, // 4855/6322479 (0.08%)
	adserver_imp_pixel?: null, // 4855/6322479 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 4855/6322479 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 6317624/6322479 (99.92%)
	from_id?: null, // 6317624/6322479 (99.92%)
	from_kind?: null, // 6317624/6322479 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4855/6322479 (0.08%)
	id: string,
	imp_pixel?: null, // 4855/6322479 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 114/722130 (0.02%)
		oembed?: {
			author_name?: string, // 528188/722016 (73.15%)
			author_url?: string, // 527079/722016 (73.00%)
			cache_age?: number, // 1667/722016 (0.23%)
			description?: string, // 705287/722016 (97.68%)
			height: number,
			html: string,
			mean_alpha?: number, // 4449/722016 (0.62%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 721879/722016 (99.98%)
			thumbnail_url?: string, // 722015/722016 (100.00%)
			thumbnail_width?: number, // 721879/722016 (99.98%)
			title?: string, // 721947/722016 (99.99%)
			type: "video"|"rich",
			url?: string, // 487834/722016 (67.57%)
			version?: "1.0", // 722015/722016 (100.00%)
			width: number,
		}, // 722016/722130 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 722130/6322479 (11.42%)
		height?: number, // 722130/6322479 (11.42%)
		scrolling?: boolean, // 722130/6322479 (11.42%)
		width?: number, // 722130/6322479 (11.42%)
	},
	mobile_ad_url?: string, // 4855/6322479 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 1910057/6322479 (30.21%)
	preview?: {
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
	}, // 1910057/6322479 (30.21%)
	promoted?: boolean, // 4855/6322479 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 114/696967 (0.02%)
		oembed?: {
			author_name?: string, // 517857/696853 (74.31%)
			author_url?: string, // 517565/696853 (74.27%)
			cache_age?: number, // 1598/696853 (0.23%)
			description?: string, // 680243/696853 (97.62%)
			height: number,
			html: string,
			mean_alpha?: number, // 1757/696853 (0.25%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 696716/696853 (99.98%)
			thumbnail_url?: string, // 696852/696853 (100.00%)
			thumbnail_width?: number, // 696716/696853 (99.98%)
			title?: string, // 696836/696853 (100.00%)
			type: "video"|"rich",
			url?: string, // 487751/696853 (69.99%)
			version?: "1.0", // 696852/696853 (100.00%)
			width: number,
		}, // 696853/696967 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 696967/6322479 (11.02%)
		height?: number, // 696967/6322479 (11.02%)
		scrolling?: boolean, // 696967/6322479 (11.02%)
		width?: number, // 696967/6322479 (11.02%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 6317624/6322479 (99.92%)
	subreddit_id?: string, // 6317624/6322479 (99.92%)
	third_party_tracking?: null, // 4855/6322479 (0.08%)
	third_party_tracking_2?: null, // 4855/6322479 (0.08%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}