interface RedditPost {
	adserver_click_url?: null, // 11176/10567231 (0.11%)
	adserver_imp_pixel?: null, // 11176/10567231 (0.11%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 29117/10567231 (0.28%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 11176/10567231 (0.11%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 157720/10567231 (1.49%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 533/155726 (0.34%)
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
			event_id?: "10efcyk8vkso3"|"10fe9ga7tl2yd", // 4/31198 (0.01%)
			oembed?: {
				author_name?: string, // 12074/26350 (45.82%)
				author_url?: string, // 12070/26350 (45.81%)
				cache_age?: number, // 11/26350 (0.04%)
				description?: string, // 16527/26350 (62.72%)
				height: number,
				html: string,
				mean_alpha?: number, // 36/26350 (0.14%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 26304/26350 (99.83%)
				thumbnail_url?: string, // 26305/26350 (99.83%)
				thumbnail_width?: number, // 26304/26350 (99.83%)
				title?: string, // 26340/26350 (99.96%)
				type: "video"|"rich",
				url?: string, // 1367/26350 (5.19%)
				version: "1.0",
				width: number,
			}, // 26350/31198 (84.46%)
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
			}, // 4844/31198 (15.53%)
			type?: string, // 26354/31198 (84.47%)
		},
		media_embed: {
			content?: string, // 26354/155726 (16.92%)
			height?: number, // 26354/155726 (16.92%)
			media_domain_url?: string, // 26354/155726 (16.92%)
			scrolling?: boolean, // 26354/155726 (16.92%)
			width?: number, // 26354/155726 (16.92%)
		},
		media_metadata?: null, // 1/155726 (0.00%)
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"no_ads"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 120510/155726 (77.39%)
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
					}, // 18615/120510 (15.45%)
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
					}, // 18615/120510 (15.45%)
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
					}, // 21080/120510 (17.49%)
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
					}, // 21579/120510 (17.91%)
				},
			}[],
			reddit_video_preview?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 15083/120510 (12.52%)
		}, // 120510/155726 (77.39%)
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "10efcyk8vkso3"|"10fe9ga7tl2yd", // 4/31198 (0.01%)
			oembed?: {
				author_name?: string, // 12074/26350 (45.82%)
				author_url?: string, // 12070/26350 (45.81%)
				cache_age?: number, // 11/26350 (0.04%)
				description?: string, // 16527/26350 (62.72%)
				height: number,
				html: string,
				mean_alpha?: number, // 36/26350 (0.14%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 26304/26350 (99.83%)
				thumbnail_url?: string, // 26305/26350 (99.83%)
				thumbnail_width?: number, // 26304/26350 (99.83%)
				title?: string, // 26340/26350 (99.96%)
				type: "video"|"rich",
				url?: string, // 1367/26350 (5.19%)
				version: "1.0",
				width: number,
			}, // 26350/31198 (84.46%)
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
			}, // 4844/31198 (15.53%)
			type?: string, // 26354/31198 (84.47%)
		},
		secure_media_embed: {
			content?: string, // 26354/155726 (16.92%)
			height?: number, // 26354/155726 (16.92%)
			media_domain_url?: string, // 26354/155726 (16.92%)
			scrolling?: boolean, // 26354/155726 (16.92%)
			width?: number, // 26354/155726 (16.92%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_type: "public"|"user"|"restricted"|"archived"|"gold_restricted",
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 155705/155726 (99.99%)
		thumbnail_width?: number|null, // 155705/155726 (99.99%)
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"no_ads"|"house_only"|"promo_all"|null,
	}[], // 157720/10567231 (1.49%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 11176/10567231 (0.11%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 11176/10567231 (0.11%)
	embed_url?: null|string, // 11176/10567231 (0.11%)
	events?: [], // 11176/10567231 (0.11%)
	eventsOnRender?: [], // 11176/10567231 (0.11%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 11176/10567231 (0.11%)
	id: string,
	is_blank?: boolean, // 11176/10567231 (0.11%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 62/1147174 (0.01%)
		oembed?: {
			author_name?: string, // 794468/1062315 (74.79%)
			author_url?: string, // 792451/1062315 (74.60%)
			cache_age?: number, // 603/1062315 (0.06%)
			description?: string, // 457511/1062315 (43.07%)
			height: number,
			html: string,
			marginheight?: number, // 36/1062315 (0.00%)
			marginwidth?: number, // 36/1062315 (0.00%)
			mean_alpha?: number, // 3101/1062315 (0.29%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1061106/1062315 (99.89%)
			thumbnail_url?: string, // 1061273/1062315 (99.90%)
			thumbnail_width?: number, // 1061106/1062315 (99.89%)
			title?: string, // 1061746/1062315 (99.95%)
			type: "video"|"rich",
			url?: string, // 119659/1062315 (11.26%)
			version?: "1.0", // 1062279/1062315 (100.00%)
			width: number,
		}, // 1062315/1147174 (92.60%)
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
		}, // 84797/1147174 (7.39%)
		type?: string, // 1062377/1147174 (92.61%)
	},
	media_embed: {
		content?: string, // 1062377/10567231 (10.05%)
		height?: number, // 1062377/10567231 (10.05%)
		media_domain_url?: string, // 1062377/10567231 (10.05%)
		scrolling?: boolean, // 1062377/10567231 (10.05%)
		width?: number, // 1062377/10567231 (10.05%)
	},
	media_metadata?: null, // 356/10567231 (0.00%)
	mobile_ad_url?: string, // 11176/10567231 (0.11%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 11176/10567231 (0.11%)
	outbound_link?: {
	}, // 11176/10567231 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4456811/10567231 (42.18%)
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
				}, // 126859/4456811 (2.85%)
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
				}, // 126859/4456811 (2.85%)
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
				}, // 366598/4456811 (8.23%)
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
				}, // 383833/4456811 (8.61%)
			},
		}[],
		reddit_video_preview?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 82755/4456811 (1.86%)
	}, // 4456811/10567231 (42.18%)
	priority_id?: null, // 11176/10567231 (0.11%)
	promoted?: boolean, // 11176/10567231 (0.11%)
	promoted_by?: null, // 11176/10567231 (0.11%)
	promoted_display_name?: null, // 11176/10567231 (0.11%)
	promoted_url?: null, // 11176/10567231 (0.11%)
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 62/1147174 (0.01%)
		oembed?: {
			author_name?: string, // 794468/1062315 (74.79%)
			author_url?: string, // 792451/1062315 (74.60%)
			cache_age?: number, // 603/1062315 (0.06%)
			description?: string, // 457511/1062315 (43.07%)
			height: number,
			html: string,
			marginheight?: number, // 36/1062315 (0.00%)
			marginwidth?: number, // 36/1062315 (0.00%)
			mean_alpha?: number, // 3101/1062315 (0.29%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1061106/1062315 (99.89%)
			thumbnail_url?: string, // 1061273/1062315 (99.90%)
			thumbnail_width?: number, // 1061106/1062315 (99.89%)
			title?: string, // 1061746/1062315 (99.95%)
			type: "video"|"rich",
			url?: string, // 119659/1062315 (11.26%)
			version?: "1.0", // 1062279/1062315 (100.00%)
			width: number,
		}, // 1062315/1147174 (92.60%)
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
		}, // 84797/1147174 (7.39%)
		type?: string, // 1062377/1147174 (92.61%)
	},
	secure_media_embed: {
		content?: string, // 1062377/10567231 (10.05%)
		height?: number, // 1062377/10567231 (10.05%)
		media_domain_url?: string, // 1062377/10567231 (10.05%)
		scrolling?: boolean, // 1062377/10567231 (10.05%)
		width?: number, // 1062377/10567231 (10.05%)
	},
	selftext: string,
	send_replies: boolean,
	spoiler: boolean|null,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null, // 11176/10567231 (0.11%)
	third_party_tracking?: null, // 11176/10567231 (0.11%)
	third_party_tracking_2?: null, // 11176/10567231 (0.11%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 10567165/10567231 (100.00%)
	thumbnail_width?: number|null, // 10567165/10567231 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"no_ads"|"house_only"|"promo_all"|null,
}