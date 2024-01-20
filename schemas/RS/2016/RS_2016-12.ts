interface RedditPost {
	adserver_click_url?: null, // 6213/8921474 (0.07%)
	adserver_imp_pixel?: null, // 6213/8921474 (0.07%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 6213/8921474 (0.07%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 6213/8921474 (0.07%)
	id: string,
	imp_pixel?: null, // 6213/8921474 (0.07%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 90/988998 (0.01%)
		oembed?: {
			author_name?: string, // 720182/988908 (72.83%)
			author_url?: string, // 719736/988908 (72.78%)
			cache_age?: number, // 595/988908 (0.06%)
			description?: string, // 437477/988908 (44.24%)
			height: number,
			html: string,
			marginheight?: number, // 29/988908 (0.00%)
			marginwidth?: number, // 29/988908 (0.00%)
			mean_alpha?: number, // 3336/988908 (0.34%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 988555/988908 (99.96%)
			thumbnail_url?: string, // 988555/988908 (99.96%)
			thumbnail_width?: number, // 988555/988908 (99.96%)
			title?: string, // 988494/988908 (99.96%)
			type: "video"|"rich",
			url?: string, // 111364/988908 (11.26%)
			version?: "1.0", // 988870/988908 (100.00%)
			width: number,
		}, // 988908/988998 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 988998/8921474 (11.09%)
		height?: number, // 988998/8921474 (11.09%)
		scrolling?: boolean, // 988998/8921474 (11.09%)
		width?: number, // 988998/8921474 (11.09%)
	},
	mobile_ad_url?: string, // 6213/8921474 (0.07%)
	name: string,
	num_comments: number,
	original_link?: null|"t3_5fxwt2"|"t3_5fw33d"|"t3_5fmkxt"|"t3_5ehttf"|"t3_5fkm26"|"t3_5ii9sf"|"t3_5j1d39", // 6213/8921474 (0.07%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 3111832/8921474 (34.88%)
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
				}, // 92686/3111832 (2.98%)
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
				}, // 92686/3111832 (2.98%)
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
				}, // 295656/3111832 (9.50%)
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
				}, // 297063/3111832 (9.55%)
			},
		}[],
	}, // 3111832/8921474 (34.88%)
	promoted?: boolean, // 6213/8921474 (0.07%)
	promoted_by?: null|"TheGameAwards", // 6213/8921474 (0.07%)
	promoted_display_name?: null|"eBayOfficial"|"TheGameAwards"|"AEN_Official"|"E-League_Official"|"Adobe_Lightroom"|"WhyHimMovie", // 6213/8921474 (0.07%)
	promoted_url?: null|string, // 6213/8921474 (0.07%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 90/974102 (0.01%)
		oembed?: {
			author_name?: string, // 712824/974012 (73.18%)
			author_url?: string, // 712505/974012 (73.15%)
			cache_age?: number, // 314/974012 (0.03%)
			description?: string, // 423005/974012 (43.43%)
			height: number,
			html: string,
			marginheight?: number, // 29/974012 (0.00%)
			marginwidth?: number, // 29/974012 (0.00%)
			mean_alpha?: number, // 1944/974012 (0.20%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 973655/974012 (99.96%)
			thumbnail_url?: string, // 973655/974012 (99.96%)
			thumbnail_width?: number, // 973655/974012 (99.96%)
			title?: string, // 973917/974012 (99.99%)
			type: "video"|"rich",
			url?: string, // 110146/974012 (11.31%)
			version?: "1.0", // 973974/974012 (100.00%)
			width: number,
		}, // 974012/974102 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 974102/8921474 (10.92%)
		height?: number, // 974102/8921474 (10.92%)
		scrolling?: boolean, // 974102/8921474 (10.92%)
		width?: number, // 974102/8921474 (10.92%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 8915261/8921474 (99.93%)
	subreddit_id?: string, // 8915261/8921474 (99.93%)
	third_party_tracking?: null|string, // 6213/8921474 (0.07%)
	third_party_tracking_2?: null|string, // 6213/8921474 (0.07%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}