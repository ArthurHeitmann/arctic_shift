interface RedditPost {
	adserver_click_url?: null, // 8249/8660144 (0.10%)
	adserver_imp_pixel?: null, // 8249/8660144 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 8249/8660144 (0.10%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 8249/8660144 (0.10%)
	id: string,
	imp_pixel?: null, // 8249/8660144 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 142/966387 (0.01%)
		oembed?: {
			author_name?: string, // 717725/966245 (74.28%)
			author_url?: string, // 717119/966245 (74.22%)
			cache_age?: number, // 843/966245 (0.09%)
			description?: string, // 408132/966245 (42.24%)
			height: number,
			html: string,
			marginheight?: number, // 1/966245 (0.00%)
			marginwidth?: number, // 1/966245 (0.00%)
			mean_alpha?: number, // 5044/966245 (0.52%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 966026/966245 (99.98%)
			thumbnail_url?: string, // 966026/966245 (99.98%)
			thumbnail_width?: number, // 966026/966245 (99.98%)
			title?: string, // 965743/966245 (99.95%)
			type: "video"|"rich",
			url?: string, // 107957/966245 (11.17%)
			version?: "1.0", // 966131/966245 (99.99%)
			width: number,
		}, // 966245/966387 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 966387/8660144 (11.16%)
		height?: number, // 966387/8660144 (11.16%)
		scrolling?: boolean, // 966387/8660144 (11.16%)
		width?: number, // 966387/8660144 (11.16%)
	},
	mobile_ad_url?: string, // 8249/8660144 (0.10%)
	name: string,
	num_comments: number,
	original_link?: null|"t3_465ch0"|"t3_4p8ybi"|"t3_5b79lk"|"t3_5cmwj7"|"t3_59v1eu"|"t3_5fqia5", // 8249/8660144 (0.10%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 3124606/8660144 (36.08%)
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
				gif?: {
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
				}, // 82412/3124606 (2.64%)
				mp4?: {
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
				}, // 82412/3124606 (2.64%)
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
				}, // 264001/3124606 (8.45%)
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
				}, // 265337/3124606 (8.49%)
			},
		}[],
	}, // 3124606/8660144 (36.08%)
	promoted?: boolean, // 8249/8660144 (0.10%)
	promoted_by?: null, // 8249/8660144 (0.10%)
	promoted_display_name?: null|"SoFiCommunity"|"eBayOfficial"|"Amazon_Official"|"2k_Gaming", // 8249/8660144 (0.10%)
	promoted_url?: null|string, // 8249/8660144 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 142/950134 (0.01%)
		oembed?: {
			author_name?: string, // 710620/949992 (74.80%)
			author_url?: string, // 710074/949992 (74.75%)
			cache_age?: number, // 470/949992 (0.05%)
			description?: string, // 392315/949992 (41.30%)
			height: number,
			html: string,
			marginheight?: number, // 1/949992 (0.00%)
			marginwidth?: number, // 1/949992 (0.00%)
			mean_alpha?: number, // 2292/949992 (0.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 949773/949992 (99.98%)
			thumbnail_url?: string, // 949773/949992 (99.98%)
			thumbnail_width?: number, // 949773/949992 (99.98%)
			title?: string, // 949797/949992 (99.98%)
			type: "video"|"rich",
			url?: string, // 106683/949992 (11.23%)
			version?: "1.0", // 949878/949992 (99.99%)
			width: number,
		}, // 949992/950134 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 950134/8660144 (10.97%)
		height?: number, // 950134/8660144 (10.97%)
		scrolling?: boolean, // 950134/8660144 (10.97%)
		width?: number, // 950134/8660144 (10.97%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 8651895/8660144 (99.90%)
	subreddit_id?: string, // 8651895/8660144 (99.90%)
	third_party_tracking?: null|string, // 8249/8660144 (0.10%)
	third_party_tracking_2?: null|string, // 8249/8660144 (0.10%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}