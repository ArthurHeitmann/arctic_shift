interface RedditPost {
	adserver_click_url?: null, // 15225/10281718 (0.15%)
	adserver_imp_pixel?: null, // 15225/10281718 (0.15%)
	archived?: boolean, // 10271860/10281718 (99.90%)
	author: string,
	author_cakeday?: boolean, // 25217/10281718 (0.25%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 15225/10281718 (0.15%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 10041/10281718 (0.10%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 29/10030 (0.29%)
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
			oembed?: {
				author_name?: string, // 631/1448 (43.58%)
				author_url?: string, // 631/1448 (43.58%)
				cache_age?: number, // 4/1448 (0.28%)
				description?: string, // 945/1448 (65.26%)
				height: number,
				html: string,
				provider_name: "YouTube"|"gfycat"|"Imgur"|"Streamable"|"Instagram"|"SoundCloud"|"Twitch"|"Vimeo"|"BandCamp"|"Spotify"|"Vid.me"|"Facebook"|"Oddshot.tv"|"Tumblr"|"Vidme",
				provider_url: string,
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video"|"rich",
				url?: string, // 89/1448 (6.15%)
				version: "1.0",
				width: number,
			}, // 1448/1591 (91.01%)
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
			}, // 143/1591 (8.99%)
			type?: string, // 1448/1591 (91.01%)
		},
		media_embed: {
			content?: string, // 1448/10030 (14.44%)
			height?: number, // 1448/10030 (14.44%)
			scrolling?: boolean, // 1448/10030 (14.44%)
			width?: number, // 1448/10030 (14.44%)
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
		post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7813/10030 (77.90%)
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
					}, // 1112/7813 (14.23%)
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
					}, // 1112/7813 (14.23%)
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
					}, // 417/7813 (5.34%)
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
					}, // 491/7813 (6.28%)
				},
			}[],
		}, // 7813/10030 (77.90%)
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed: {
				author_name?: string, // 630/1446 (43.57%)
				author_url?: string, // 630/1446 (43.57%)
				cache_age?: number, // 4/1446 (0.28%)
				description?: string, // 943/1446 (65.21%)
				height: number,
				html: string,
				provider_name: "YouTube"|"gfycat"|"Imgur"|"Streamable"|"Instagram"|"SoundCloud"|"Twitch"|"Vimeo"|"BandCamp"|"Spotify"|"Vid.me"|"Facebook"|"Oddshot.tv"|"Tumblr"|"Vidme",
				provider_url: string,
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video"|"rich",
				url?: string, // 88/1446 (6.09%)
				version: "1.0",
				width: number,
			},
			type: string,
		},
		secure_media_embed: {
			content?: string, // 1446/10030 (14.42%)
			height?: number, // 1446/10030 (14.42%)
			media_domain_url?: string, // 1446/10030 (14.42%)
			scrolling?: boolean, // 1446/10030 (14.42%)
			width?: number, // 1446/10030 (14.42%)
		},
		selftext: string,
		selftext_html: null|string,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 10029/10030 (99.99%)
		thumbnail_width?: number|null, // 10029/10030 (99.99%)
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	}[], // 10041/10281718 (0.10%)
	disable_comments?: boolean, // 15225/10281718 (0.15%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 15225/10281718 (0.15%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 15225/10281718 (0.15%)
	embed_url?: null|string, // 15225/10281718 (0.15%)
	gilded: number,
	hidden: boolean,
	hide_score?: boolean, // 10271860/10281718 (99.90%)
	href_url?: string, // 15225/10281718 (0.15%)
	id: string,
	is_crosspostable: boolean,
	is_reddit_media_domain?: boolean, // 10281112/10281718 (99.99%)
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 329/1169196 (0.03%)
		oembed?: {
			author_name?: string, // 845927/1134713 (74.55%)
			author_url?: string, // 844248/1134713 (74.40%)
			cache_age?: number, // 6208/1134713 (0.55%)
			description?: string, // 479038/1134713 (42.22%)
			height: number,
			html: string,
			marginheight?: number, // 4/1134713 (0.00%)
			marginwidth?: number, // 4/1134713 (0.00%)
			mean_alpha?: number, // 1857/1134713 (0.16%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1134142/1134713 (99.95%)
			thumbnail_url?: string, // 1134144/1134713 (99.95%)
			thumbnail_width?: number, // 1134142/1134713 (99.95%)
			title?: string, // 1134692/1134713 (100.00%)
			type: "video"|"rich",
			url?: string, // 115687/1134713 (10.20%)
			version?: "1.0", // 1134709/1134713 (100.00%)
			width: number,
		}, // 1134713/1169196 (97.05%)
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
		}, // 34153/1169196 (2.92%)
		reddit_videos?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1/1169196 (0.00%)
		type?: string, // 1135042/1169196 (97.08%)
	},
	media_embed: {
		content?: string, // 1135042/10281718 (11.04%)
		height?: number, // 1135042/10281718 (11.04%)
		scrolling?: boolean, // 1135042/10281718 (11.04%)
		width?: number, // 1135042/10281718 (11.04%)
	},
	mobile_ad_url?: string, // 15225/10281718 (0.15%)
	num_comments: number,
	num_crossposts: number,
	original_link?: null|"t3_6g15il"|"t3_6xvqfa"|"t3_75cgfd", // 15225/10281718 (0.15%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4148782/10281718 (40.35%)
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
				}, // 118814/4148782 (2.86%)
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
				}, // 118814/4148782 (2.86%)
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
				}, // 351050/4148782 (8.46%)
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
				}, // 368278/4148782 (8.88%)
			},
		}[],
	}, // 4148782/10281718 (40.35%)
	promoted?: boolean, // 15225/10281718 (0.15%)
	promoted_by?: null, // 15225/10281718 (0.15%)
	promoted_display_name?: null|"Russells_Reserve"|"syfy", // 15225/10281718 (0.15%)
	promoted_url?: null|string, // 15225/10281718 (0.15%)
	retrieved_on: number,
	score: number|null,
	secure_media: null|{
		event_id?: string, // 329/1126562 (0.03%)
		oembed?: {
			author_name?: string, // 842833/1126233 (74.84%)
			author_url?: string, // 841186/1126233 (74.69%)
			cache_age?: number, // 6198/1126233 (0.55%)
			description?: string, // 470562/1126233 (41.78%)
			height: number,
			html: string,
			marginheight?: number, // 4/1126233 (0.00%)
			marginwidth?: number, // 4/1126233 (0.00%)
			mean_alpha?: number, // 1804/1126233 (0.16%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1125660/1126233 (99.95%)
			thumbnail_url?: string, // 1125662/1126233 (99.95%)
			thumbnail_width?: number, // 1125660/1126233 (99.95%)
			title?: string, // 1126211/1126233 (100.00%)
			type: "video"|"rich",
			url?: string, // 114577/1126233 (10.17%)
			version?: "1.0", // 1126229/1126233 (100.00%)
			width: number,
		}, // 1126233/1126562 (99.97%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 1126562/10281718 (10.96%)
		height?: number, // 1126562/10281718 (10.96%)
		media_domain_url?: string, // 1126562/10281718 (10.96%)
		scrolling?: boolean, // 1126562/10281718 (10.96%)
		width?: number, // 1126562/10281718 (10.96%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 10266493/10281718 (99.85%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 15225/10281718 (0.15%)
	third_party_tracking?: null|string, // 15225/10281718 (0.15%)
	third_party_tracking_2?: null|string, // 15225/10281718 (0.15%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 10281665/10281718 (100.00%)
	thumbnail_width?: number|null, // 10281665/10281718 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
}