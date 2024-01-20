interface RedditPost {
	adserver_click_url?: null, // 8617/9211051 (0.09%)
	adserver_imp_pixel?: null, // 8617/9211051 (0.09%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 23432/9211051 (0.25%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 8617/9211051 (0.09%)
	brand_safe: boolean,
	can_gild?: boolean, // 9126450/9211051 (99.08%)
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 8617/9211051 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	edited: boolean|number,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 8617/9211051 (0.09%)
	id: string,
	imp_pixel?: null, // 8617/9211051 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 153/1003172 (0.02%)
		oembed?: {
			author_name?: string, // 708175/1003019 (70.60%)
			author_url?: string, // 706654/1003019 (70.45%)
			cache_age?: number, // 1078/1003019 (0.11%)
			description?: string, // 461337/1003019 (45.99%)
			height: number,
			html: string,
			marginheight?: number, // 13/1003019 (0.00%)
			marginwidth?: number, // 13/1003019 (0.00%)
			mean_alpha?: number, // 3497/1003019 (0.35%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1002761/1003019 (99.97%)
			thumbnail_url?: string, // 1002762/1003019 (99.97%)
			thumbnail_width?: number, // 1002761/1003019 (99.97%)
			title?: string, // 1002723/1003019 (99.97%)
			type: "video"|"rich",
			url?: string, // 98411/1003019 (9.81%)
			version?: "1.0", // 1003006/1003019 (100.00%)
			width: number,
		}, // 1003019/1003172 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 1003172/9211051 (10.89%)
		height?: number, // 1003172/9211051 (10.89%)
		scrolling?: boolean, // 1003172/9211051 (10.89%)
		width?: number, // 1003172/9211051 (10.89%)
	},
	mobile_ad_url?: string, // 8617/9211051 (0.09%)
	num_comments: number,
	original_link?: null|"t3_64yr51"|"t3_656c0g", // 8617/9211051 (0.09%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 3486354/9211051 (37.85%)
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
				}, // 96100/3486354 (2.76%)
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
				}, // 96100/3486354 (2.76%)
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
				}, // 269954/3486354 (7.74%)
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
				}, // 283755/3486354 (8.14%)
			},
		}[],
	}, // 3486354/9211051 (37.85%)
	promoted?: boolean, // 8617/9211051 (0.09%)
	promoted_by?: null, // 8617/9211051 (0.09%)
	promoted_display_name?: null|"Bethesda Software"|"GlamourGals", // 8617/9211051 (0.09%)
	promoted_url?: null|string, // 8617/9211051 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 153/988882 (0.02%)
		oembed?: {
			author_name?: string, // 701968/988729 (71.00%)
			author_url?: string, // 700849/988729 (70.88%)
			cache_age?: number, // 968/988729 (0.10%)
			description?: string, // 447056/988729 (45.22%)
			height: number,
			html: string,
			marginheight?: number, // 13/988729 (0.00%)
			marginwidth?: number, // 13/988729 (0.00%)
			mean_alpha?: number, // 2189/988729 (0.22%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 988468/988729 (99.97%)
			thumbnail_url?: string, // 988469/988729 (99.97%)
			thumbnail_width?: number, // 988468/988729 (99.97%)
			title?: string, // 988430/988729 (99.97%)
			type: "video"|"rich",
			url?: string, // 97764/988729 (9.89%)
			version?: "1.0", // 988716/988729 (100.00%)
			width: number,
		}, // 988729/988882 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 988882/9211051 (10.74%)
		height?: number, // 988882/9211051 (10.74%)
		scrolling?: boolean, // 988882/9211051 (10.74%)
		width?: number, // 988882/9211051 (10.74%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 9202434/9211051 (99.91%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random",
	third_party_tracking?: null|string, // 8617/9211051 (0.09%)
	third_party_tracking_2?: null|string, // 8617/9211051 (0.09%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 9126446/9211051 (99.08%)
	thumbnail_width?: number|null, // 9126446/9211051 (99.08%)
	title: string,
	url: string,
	view_count?: null, // 9126450/9211051 (99.08%)
}