interface RedditPost {
	adserver_click_url?: null, // 8700/9597725 (0.09%)
	adserver_imp_pixel?: null, // 8700/9597725 (0.09%)
	approved_at_utc: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 25011/9597725 (0.26%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 8700/9597725 (0.09%)
	banned_at_utc: null,
	brand_safe: boolean,
	can_mod_post: boolean,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 8700/9597725 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 8700/9597725 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 8700/9597725 (0.09%)
	embed_url?: null|string, // 8700/9597725 (0.09%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 8700/9597725 (0.09%)
	id: string,
	imp_pixel?: null, // 8700/9597725 (0.09%)
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 241/1005057 (0.02%)
		oembed?: {
			author_name?: string, // 720300/1004644 (71.70%)
			author_url?: string, // 718951/1004644 (71.56%)
			cache_age?: number, // 1731/1004644 (0.17%)
			description?: string, // 456017/1004644 (45.39%)
			height: number,
			html: string,
			marginheight?: number, // 12/1004644 (0.00%)
			marginwidth?: number, // 12/1004644 (0.00%)
			mean_alpha?: number, // 3804/1004644 (0.38%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1004311/1004644 (99.97%)
			thumbnail_url?: string, // 1004312/1004644 (99.97%)
			thumbnail_width?: number, // 1004311/1004644 (99.97%)
			title?: string, // 1004612/1004644 (100.00%)
			type: "video"|"rich",
			url?: string, // 100577/1004644 (10.01%)
			version?: "1.0", // 1004632/1004644 (100.00%)
			width: number,
		}, // 1004644/1005057 (99.96%)
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
		}, // 172/1005057 (0.02%)
		type?: string, // 1004885/1005057 (99.98%)
	},
	media_embed: {
		content?: string, // 1004885/9597725 (10.47%)
		height?: number, // 1004885/9597725 (10.47%)
		scrolling?: boolean, // 1004885/9597725 (10.47%)
		width?: number, // 1004885/9597725 (10.47%)
	},
	mobile_ad_url?: string, // 8700/9597725 (0.09%)
	num_comments: number,
	original_link?: null|"t3_6fhc1j"|"t3_6g9phk"|"t3_6h9s6l", // 8700/9597725 (0.09%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video"|"hosted:video", // 3801386/9597725 (39.61%)
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
				}, // 110460/3801386 (2.91%)
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
				}, // 110460/3801386 (2.91%)
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
				}, // 310356/3801386 (8.16%)
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
				}, // 324425/3801386 (8.53%)
			},
		}[],
	}, // 3801386/9597725 (39.61%)
	promoted?: boolean, // 8700/9597725 (0.09%)
	promoted_by?: null, // 8700/9597725 (0.09%)
	promoted_display_name?: null|"RedbullReady"|"LuciaAniello"|"Nintendo_america", // 8700/9597725 (0.09%)
	promoted_url?: null|string, // 8700/9597725 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 241/993575 (0.02%)
		oembed?: {
			author_name?: string, // 716082/993334 (72.09%)
			author_url?: string, // 714736/993334 (71.95%)
			cache_age?: number, // 1728/993334 (0.17%)
			description?: string, // 444711/993334 (44.77%)
			height: number,
			html: string,
			marginheight?: number, // 12/993334 (0.00%)
			marginwidth?: number, // 12/993334 (0.00%)
			mean_alpha?: number, // 2534/993334 (0.26%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 993001/993334 (99.97%)
			thumbnail_url?: string, // 993002/993334 (99.97%)
			thumbnail_width?: number, // 993001/993334 (99.97%)
			title?: string, // 993302/993334 (100.00%)
			type: "video"|"rich",
			url?: string, // 100017/993334 (10.07%)
			version?: "1.0", // 993322/993334 (100.00%)
			width: number,
		}, // 993334/993575 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 993575/9597725 (10.35%)
		height?: number, // 993575/9597725 (10.35%)
		scrolling?: boolean, // 993575/9597725 (10.35%)
		width?: number, // 993575/9597725 (10.35%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 9589025/9597725 (99.91%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 8700/9597725 (0.09%)
	third_party_tracking?: null|string, // 8700/9597725 (0.09%)
	third_party_tracking_2?: null|string, // 8700/9597725 (0.09%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 9597719/9597725 (100.00%)
	thumbnail_width?: number|null, // 9597719/9597725 (100.00%)
	title: string,
	url: string,
	view_count: null,
}