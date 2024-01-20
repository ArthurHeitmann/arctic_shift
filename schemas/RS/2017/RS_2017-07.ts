interface RedditPost {
	adserver_click_url?: null, // 9144/9989122 (0.09%)
	adserver_imp_pixel?: null, // 9144/9989122 (0.09%)
	approved_at_utc: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 25031/9989122 (0.25%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 9144/9989122 (0.09%)
	banned_at_utc: null,
	brand_safe: boolean,
	can_mod_post: boolean,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 9144/9989122 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 9144/9989122 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 9144/9989122 (0.09%)
	embed_url?: null|string, // 9144/9989122 (0.09%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 9144/9989122 (0.09%)
	id: string,
	imp_pixel?: null, // 9144/9989122 (0.09%)
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 67/1077191 (0.01%)
		oembed?: {
			author_name?: string, // 778055/1073114 (72.50%)
			author_url?: string, // 776669/1073114 (72.38%)
			cache_age?: number, // 1467/1073114 (0.14%)
			description?: string, // 480900/1073114 (44.81%)
			height: number,
			html: string,
			marginheight?: number, // 15/1073114 (0.00%)
			marginwidth?: number, // 15/1073114 (0.00%)
			mean_alpha?: number, // 3798/1073114 (0.35%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1072716/1073114 (99.96%)
			thumbnail_url?: string, // 1072716/1073114 (99.96%)
			thumbnail_width?: number, // 1072716/1073114 (99.96%)
			title?: string, // 1073080/1073114 (100.00%)
			type: "video"|"rich",
			url?: string, // 107064/1073114 (9.98%)
			version?: "1.0", // 1073099/1073114 (100.00%)
			width: number,
		}, // 1073114/1077191 (99.62%)
		reddit_video?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 4010/1077191 (0.37%)
		type?: string, // 1073181/1077191 (99.63%)
	},
	media_embed: {
		content?: string, // 1073181/9989122 (10.74%)
		height?: number, // 1073181/9989122 (10.74%)
		scrolling?: boolean, // 1073181/9989122 (10.74%)
		width?: number, // 1073181/9989122 (10.74%)
	},
	mobile_ad_url?: string, // 9144/9989122 (0.09%)
	num_comments: number,
	original_link?: null|"t3_6nveob"|"t3_6ob3jn"|"t3_6ppg26"|"t3_6p12wv", // 9144/9989122 (0.09%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video"|"hosted:video", // 4013082/9989122 (40.17%)
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
				}, // 117024/4013082 (2.92%)
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
				}, // 117024/4013082 (2.92%)
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
				}, // 342613/4013082 (8.54%)
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
				}, // 357697/4013082 (8.91%)
			},
		}[],
	}, // 4013082/9989122 (40.17%)
	promoted?: boolean, // 9144/9989122 (0.09%)
	promoted_by?: null, // 9144/9989122 (0.09%)
	promoted_display_name?: null|"TBS_Official"|"TheDarkTowerMovie"|"TruTV_Official"|"SYFY_official", // 9144/9989122 (0.09%)
	promoted_url?: null|string, // 9144/9989122 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 67/1064200 (0.01%)
		oembed?: {
			author_name?: string, // 775745/1064133 (72.90%)
			author_url?: string, // 774359/1064133 (72.77%)
			cache_age?: number, // 1459/1064133 (0.14%)
			description?: string, // 471928/1064133 (44.35%)
			height: number,
			html: string,
			marginheight?: number, // 15/1064133 (0.00%)
			marginwidth?: number, // 15/1064133 (0.00%)
			mean_alpha?: number, // 2517/1064133 (0.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1063735/1064133 (99.96%)
			thumbnail_url?: string, // 1063735/1064133 (99.96%)
			thumbnail_width?: number, // 1063735/1064133 (99.96%)
			title?: string, // 1064099/1064133 (100.00%)
			type: "video"|"rich",
			url?: string, // 106574/1064133 (10.02%)
			version?: "1.0", // 1064118/1064133 (100.00%)
			width: number,
		}, // 1064133/1064200 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 1064200/9989122 (10.65%)
		height?: number, // 1064200/9989122 (10.65%)
		scrolling?: boolean, // 1064200/9989122 (10.65%)
		width?: number, // 1064200/9989122 (10.65%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 9979978/9989122 (99.91%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 9144/9989122 (0.09%)
	third_party_tracking?: null|string, // 9144/9989122 (0.09%)
	third_party_tracking_2?: null|string, // 9144/9989122 (0.09%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 9989105/9989122 (100.00%)
	thumbnail_width?: number|null, // 9989105/9989122 (100.00%)
	title: string,
	url: string,
	view_count: null,
}