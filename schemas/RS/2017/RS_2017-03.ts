interface RedditPost {
	adserver_click_url?: null, // 7890/9616340 (0.08%)
	adserver_imp_pixel?: null, // 7890/9616340 (0.08%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 21966/9616340 (0.23%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 7833/9616340 (0.08%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 7890/9616340 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	edited: boolean|number,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 7890/9616340 (0.08%)
	id: string,
	imp_pixel?: null, // 7890/9616340 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 85/1073342 (0.01%)
		oembed?: {
			author_name?: string, // 769110/1073257 (71.66%)
			author_url?: string, // 767837/1073257 (71.54%)
			cache_age?: number, // 1449/1073257 (0.14%)
			description?: string, // 483584/1073257 (45.06%)
			height: number,
			html: string,
			marginheight?: number, // 22/1073257 (0.00%)
			marginwidth?: number, // 22/1073257 (0.00%)
			mean_alpha?: number, // 3905/1073257 (0.36%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1072933/1073257 (99.97%)
			thumbnail_url?: string, // 1072934/1073257 (99.97%)
			thumbnail_width?: number, // 1072933/1073257 (99.97%)
			title?: string, // 1072791/1073257 (99.96%)
			type: "video"|"rich",
			url?: string, // 111510/1073257 (10.39%)
			version?: "1.0", // 1073235/1073257 (100.00%)
			width: number,
		}, // 1073257/1073342 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 1073342/9616340 (11.16%)
		height?: number, // 1073342/9616340 (11.16%)
		scrolling?: boolean, // 1073342/9616340 (11.16%)
		width?: number, // 1073342/9616340 (11.16%)
	},
	mobile_ad_url?: string, // 7890/9616340 (0.08%)
	num_comments: number,
	original_link?: null|"t3_5xu1c9"|"t3_5zxyu7"|"t3_623w3a", // 7890/9616340 (0.08%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 3682895/9616340 (38.30%)
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
				}, // 99273/3682895 (2.70%)
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
				}, // 99273/3682895 (2.70%)
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
				}, // 281155/3682895 (7.63%)
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
				}, // 296203/3682895 (8.04%)
			},
		}[],
	}, // 3682895/9616340 (38.30%)
	promoted?: boolean, // 7890/9616340 (0.08%)
	promoted_by?: null, // 7890/9616340 (0.08%)
	promoted_display_name?: null|"walkingegg"|"Bethesda Software"|"NextVR", // 7890/9616340 (0.08%)
	promoted_url?: null|string, // 7890/9616340 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 85/1054204 (0.01%)
		oembed?: {
			author_name?: string, // 760434/1054119 (72.14%)
			author_url?: string, // 759515/1054119 (72.05%)
			cache_age?: number, // 1346/1054119 (0.13%)
			description?: string, // 464479/1054119 (44.06%)
			height: number,
			html: string,
			marginheight?: number, // 22/1054119 (0.00%)
			marginwidth?: number, // 22/1054119 (0.00%)
			mean_alpha?: number, // 2510/1054119 (0.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1053798/1054119 (99.97%)
			thumbnail_url?: string, // 1053799/1054119 (99.97%)
			thumbnail_width?: number, // 1053798/1054119 (99.97%)
			title?: string, // 1053654/1054119 (99.96%)
			type: "video"|"rich",
			url?: string, // 110335/1054119 (10.47%)
			version?: "1.0", // 1054097/1054119 (100.00%)
			width: number,
		}, // 1054119/1054204 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 1054204/9616340 (10.96%)
		height?: number, // 1054204/9616340 (10.96%)
		scrolling?: boolean, // 1054204/9616340 (10.96%)
		width?: number, // 1054204/9616340 (10.96%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 9608450/9616340 (99.92%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random",
	third_party_tracking?: null|string, // 7890/9616340 (0.08%)
	third_party_tracking_2?: null|string, // 7890/9616340 (0.08%)
	thumbnail: string|null,
	title: string,
	url: string,
}