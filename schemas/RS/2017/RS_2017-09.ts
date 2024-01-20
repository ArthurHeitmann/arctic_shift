interface RedditPost {
	adserver_click_url?: null, // 13222/9787604 (0.14%)
	adserver_imp_pixel?: null, // 13222/9787604 (0.14%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 23609/9787604 (0.24%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 13222/9787604 (0.14%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 7271/9787604 (0.07%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 27/7254 (0.37%)
		author_flair_css_class: null|string,
		author_flair_text: null|string,
		banned_at_utc: null,
		banned_by: null,
		brand_safe: boolean,
		can_gild: boolean,
		can_mod_post: boolean,
		clicked: boolean,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		gilded: number,
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_crosspostable: boolean,
		is_reddit_media_domain: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_css_class: null|string,
		link_flair_text: null|string,
		locked: boolean,
		media: null|{
			event_id?: "zbttfot73znr", // 1/1124 (0.09%)
			oembed?: {
				author_name?: string, // 478/1035 (46.18%)
				author_url?: string, // 478/1035 (46.18%)
				cache_age?: number, // 16/1035 (1.55%)
				description?: string, // 647/1035 (62.51%)
				height: number,
				html: string,
				mean_alpha?: number, // 1/1035 (0.10%)
				provider_name: "YouTube"|"gfycat"|"Imgur"|"Streamable"|"Vid.me"|"Instagram"|"Vimeo"|"Spotify"|"Twitch"|"SoundCloud"|"Facebook"|"BandCamp"|"Giphy"|"Oddshot.tv"|"Ustream.tv",
				provider_url: string,
				thumbnail_height?: number, // 1034/1035 (99.90%)
				thumbnail_url?: string, // 1034/1035 (99.90%)
				thumbnail_width?: number, // 1034/1035 (99.90%)
				title: string,
				type: "video"|"rich",
				url?: string, // 66/1035 (6.38%)
				version: "1.0",
				width: number,
			}, // 1035/1124 (92.08%)
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
			}, // 88/1124 (7.83%)
			type?: string, // 1036/1124 (92.17%)
		},
		media_embed: {
			content?: string, // 1036/7254 (14.28%)
			height?: number, // 1036/7254 (14.28%)
			scrolling?: boolean, // 1036/7254 (14.28%)
			width?: number, // 1036/7254 (14.28%)
		},
		mod_reports: [],
		name: string,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 5551/7254 (76.52%)
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
					}, // 862/5551 (15.53%)
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
					}, // 862/5551 (15.53%)
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
					}, // 284/5551 (5.12%)
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
					}, // 334/5551 (6.02%)
				},
			}[],
		}, // 5551/7254 (76.52%)
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "zbttfot73znr", // 1/1034 (0.10%)
			oembed?: {
				author_name?: string, // 478/1033 (46.27%)
				author_url?: string, // 478/1033 (46.27%)
				cache_age?: number, // 16/1033 (1.55%)
				description?: string, // 645/1033 (62.44%)
				height: number,
				html: string,
				mean_alpha?: number, // 1/1033 (0.10%)
				provider_name: "YouTube"|"gfycat"|"Imgur"|"Streamable"|"Vid.me"|"Instagram"|"Vimeo"|"Spotify"|"Twitch"|"SoundCloud"|"Facebook"|"BandCamp"|"Giphy"|"Oddshot.tv"|"Ustream.tv",
				provider_url: string,
				thumbnail_height?: number, // 1032/1033 (99.90%)
				thumbnail_url?: string, // 1032/1033 (99.90%)
				thumbnail_width?: number, // 1032/1033 (99.90%)
				title: string,
				type: "video"|"rich",
				url?: string, // 66/1033 (6.39%)
				version: "1.0",
				width: number,
			}, // 1033/1034 (99.90%)
			type: string,
		},
		secure_media_embed: {
			content?: string, // 1034/7254 (14.25%)
			height?: number, // 1034/7254 (14.25%)
			media_domain_url?: string, // 1034/7254 (14.25%)
			scrolling?: boolean, // 1034/7254 (14.25%)
			width?: number, // 1034/7254 (14.25%)
		},
		selftext: string,
		selftext_html: null|string,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_type: "public"|"user"|"restricted",
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"controversial",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 7251/7254 (99.96%)
		thumbnail_width?: number|null, // 7251/7254 (99.96%)
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	}[], // 7271/9787604 (0.07%)
	disable_comments?: boolean, // 13222/9787604 (0.14%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 13222/9787604 (0.14%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 13222/9787604 (0.14%)
	embed_url?: null|string, // 13222/9787604 (0.14%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 13222/9787604 (0.14%)
	id: string,
	imp_pixel?: null, // 13222/9787604 (0.14%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 657/1105015 (0.06%)
		oembed?: {
			author_name?: string, // 806244/1075248 (74.98%)
			author_url?: string, // 805192/1075248 (74.88%)
			cache_age?: number, // 6204/1075248 (0.58%)
			description?: string, // 448421/1075248 (41.70%)
			height: number,
			html: string,
			marginheight?: number, // 8/1075248 (0.00%)
			marginwidth?: number, // 8/1075248 (0.00%)
			mean_alpha?: number, // 2120/1075248 (0.20%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1075009/1075248 (99.98%)
			thumbnail_url?: string, // 1075010/1075248 (99.98%)
			thumbnail_width?: number, // 1075009/1075248 (99.98%)
			title?: string, // 1075234/1075248 (100.00%)
			type: "video"|"rich",
			url?: string, // 109066/1075248 (10.14%)
			version?: "1.0", // 1075240/1075248 (100.00%)
			width: number,
		}, // 1075248/1105015 (97.31%)
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
		}, // 29110/1105015 (2.63%)
		type?: string, // 1075905/1105015 (97.37%)
	},
	media_embed: {
		content?: string, // 1075905/9787604 (10.99%)
		height?: number, // 1075905/9787604 (10.99%)
		scrolling?: boolean, // 1075905/9787604 (10.99%)
		width?: number, // 1075905/9787604 (10.99%)
	},
	mobile_ad_url?: string, // 13222/9787604 (0.14%)
	num_comments: number,
	num_crossposts: number,
	original_link?: null|string, // 13222/9787604 (0.14%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 3920114/9787604 (40.05%)
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
				}, // 108610/3920114 (2.77%)
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
				}, // 108610/3920114 (2.77%)
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
				}, // 335839/3920114 (8.57%)
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
				}, // 352196/3920114 (8.98%)
			},
		}[],
	}, // 3920114/9787604 (40.05%)
	promoted?: boolean, // 13222/9787604 (0.14%)
	promoted_by?: null, // 13222/9787604 (0.14%)
	promoted_display_name?: null|"dave"|"E-League_Official"|"The_Gifted_on_Fox"|"AudiSportUSA"|"MotherMovie"|"TheChrisGethardShow"|"AudiUSA"|"GiftedonFox"|"AudiSportUSA "|"Audi"|"Depends", // 13222/9787604 (0.14%)
	promoted_url?: null|string, // 13222/9787604 (0.14%)
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 657/1068319 (0.06%)
		oembed?: {
			author_name?: string, // 803665/1067662 (75.27%)
			author_url?: string, // 802648/1067662 (75.18%)
			cache_age?: number, // 6202/1067662 (0.58%)
			description?: string, // 440845/1067662 (41.29%)
			height: number,
			html: string,
			marginheight?: number, // 8/1067662 (0.00%)
			marginwidth?: number, // 8/1067662 (0.00%)
			mean_alpha?: number, // 2081/1067662 (0.19%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1067422/1067662 (99.98%)
			thumbnail_url?: string, // 1067423/1067662 (99.98%)
			thumbnail_width?: number, // 1067422/1067662 (99.98%)
			title?: string, // 1067647/1067662 (100.00%)
			type: "video"|"rich",
			url?: string, // 108513/1067662 (10.16%)
			version?: "1.0", // 1067654/1067662 (100.00%)
			width: number,
		}, // 1067662/1068319 (99.94%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 1068319/9787604 (10.92%)
		height?: number, // 1068319/9787604 (10.92%)
		media_domain_url?: string, // 1068319/9787604 (10.92%)
		scrolling?: boolean, // 1068319/9787604 (10.92%)
		width?: number, // 1068319/9787604 (10.92%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 9774382/9787604 (99.86%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null, // 13222/9787604 (0.14%)
	third_party_tracking?: null|string, // 13222/9787604 (0.14%)
	third_party_tracking_2?: null|string, // 13222/9787604 (0.14%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 9787593/9787604 (100.00%)
	thumbnail_width?: number|null, // 9787593/9787604 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
}