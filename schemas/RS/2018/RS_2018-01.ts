interface RedditPost {
	adserver_click_url?: null, // 10270/11306843 (0.09%)
	adserver_imp_pixel?: null, // 10270/11306843 (0.09%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 33113/11306843 (0.29%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 10270/11306843 (0.09%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 118605/11306843 (1.05%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 536/117542 (0.46%)
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
			event_id?: "10b73n5vvip89"|"10bt6d6nrcxjc", // 2/24321 (0.01%)
			oembed?: {
				author_name?: string, // 10572/22032 (47.98%)
				author_url?: string, // 10566/22032 (47.96%)
				cache_age?: number, // 11/22032 (0.05%)
				description?: string, // 13799/22032 (62.63%)
				height: number,
				html: string,
				mean_alpha?: number, // 59/22032 (0.27%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 21984/22032 (99.78%)
				thumbnail_url?: string, // 21985/22032 (99.79%)
				thumbnail_width?: number, // 21984/22032 (99.78%)
				title: string,
				type: "video"|"rich",
				url?: string, // 1260/22032 (5.72%)
				version: "1.0",
				width: number,
			}, // 22032/24321 (90.59%)
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
			}, // 2287/24321 (9.40%)
			type?: string, // 22034/24321 (90.60%)
		},
		media_embed: {
			content?: string, // 22034/117542 (18.75%)
			height?: number, // 22034/117542 (18.75%)
			scrolling?: boolean, // 22034/117542 (18.75%)
			width?: number, // 22034/117542 (18.75%)
		},
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"promo_all"|"no_ads"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 88198/117542 (75.04%)
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
					}, // 11460/88198 (12.99%)
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
					}, // 11460/88198 (12.99%)
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
					}, // 17406/88198 (19.74%)
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
					}, // 17806/88198 (20.19%)
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
			}, // 829/88198 (0.94%)
		}, // 88198/117542 (75.04%)
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "10b73n5vvip89"|"10bt6d6nrcxjc", // 2/24223 (0.01%)
			oembed?: {
				author_name?: string, // 10509/21934 (47.91%)
				author_url?: string, // 10503/21934 (47.88%)
				cache_age?: number, // 11/21934 (0.05%)
				description?: string, // 13700/21934 (62.46%)
				height: number,
				html: string,
				mean_alpha?: number, // 55/21934 (0.25%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 21885/21934 (99.78%)
				thumbnail_url?: string, // 21885/21934 (99.78%)
				thumbnail_width?: number, // 21885/21934 (99.78%)
				title?: string, // 21932/21934 (99.99%)
				type: "video"|"rich",
				url?: string, // 1201/21934 (5.48%)
				version: "1.0",
				width: number,
			}, // 21934/24223 (90.55%)
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
			}, // 2287/24223 (9.44%)
			type?: string, // 21936/24223 (90.56%)
		},
		secure_media_embed: {
			content?: string, // 21936/117542 (18.66%)
			height?: number, // 21936/117542 (18.66%)
			media_domain_url?: string, // 21936/117542 (18.66%)
			scrolling?: boolean, // 21936/117542 (18.66%)
			width?: number, // 21936/117542 (18.66%)
		},
		selftext: string,
		selftext_html: null|string,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 117517/117542 (99.98%)
		thumbnail_width?: number|null, // 117517/117542 (99.98%)
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"promo_all"|"no_ads"|null,
	}[], // 118605/11306843 (1.05%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 10270/11306843 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 10270/11306843 (0.09%)
	embed_url?: null|string, // 10270/11306843 (0.09%)
	events?: [], // 10270/11306843 (0.09%)
	eventsOnRender?: [], // 10270/11306843 (0.09%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 10270/11306843 (0.09%)
	id: string,
	is_blank?: boolean, // 10270/11306843 (0.09%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 61/1271459 (0.00%)
		oembed?: {
			author_name?: string, // 885990/1187458 (74.61%)
			author_url?: string, // 883885/1187458 (74.44%)
			cache_age?: number, // 1579/1187458 (0.13%)
			description?: string, // 488867/1187458 (41.17%)
			height: number,
			html: string,
			marginheight?: number, // 11/1187458 (0.00%)
			marginwidth?: number, // 11/1187458 (0.00%)
			mean_alpha?: number, // 3272/1187458 (0.28%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1186755/1187458 (99.94%)
			thumbnail_url?: string, // 1186804/1187458 (99.94%)
			thumbnail_width?: number, // 1186755/1187458 (99.94%)
			title?: string, // 1187440/1187458 (100.00%)
			type: "video"|"rich",
			url?: string, // 112551/1187458 (9.48%)
			version?: "1.0", // 1187447/1187458 (100.00%)
			width: number,
		}, // 1187458/1271459 (93.39%)
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
		}, // 83940/1271459 (6.60%)
		type?: string, // 1187519/1271459 (93.40%)
	},
	media_embed: {
		content?: string, // 1187519/11306843 (10.50%)
		height?: number, // 1187519/11306843 (10.50%)
		scrolling?: boolean, // 1187519/11306843 (10.50%)
		width?: number, // 1187519/11306843 (10.50%)
	},
	media_metadata?: null, // 72/11306843 (0.00%)
	mobile_ad_url?: string, // 10270/11306843 (0.09%)
	num_comments: number,
	num_crossposts: number,
	original_link?: null|"t3_7p8px9"|"t3_7p8olf"|"t3_7qvdr1", // 10270/11306843 (0.09%)
	outbound_link?: {
	}, // 10270/11306843 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4687883/11306843 (41.46%)
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
				}, // 128659/4687883 (2.74%)
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
				}, // 128659/4687883 (2.74%)
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
				}, // 420021/4687883 (8.96%)
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
				}, // 437853/4687883 (9.34%)
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
		}, // 5668/4687883 (0.12%)
	}, // 4687883/11306843 (41.46%)
	priority_id?: null, // 10270/11306843 (0.09%)
	promoted?: boolean, // 10270/11306843 (0.09%)
	promoted_by?: null, // 10270/11306843 (0.09%)
	promoted_display_name?: null|"FX_Official", // 10270/11306843 (0.09%)
	promoted_url?: null|string, // 10270/11306843 (0.09%)
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 61/1258105 (0.00%)
		oembed?: {
			author_name?: string, // 878111/1174105 (74.79%)
			author_url?: string, // 876020/1174105 (74.61%)
			cache_age?: number, // 1576/1174105 (0.13%)
			description?: string, // 475427/1174105 (40.49%)
			height: number,
			html: string,
			marginheight?: number, // 11/1174105 (0.00%)
			marginwidth?: number, // 11/1174105 (0.00%)
			mean_alpha?: number, // 3222/1174105 (0.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1173280/1174105 (99.93%)
			thumbnail_url?: string, // 1173318/1174105 (99.93%)
			thumbnail_width?: number, // 1173280/1174105 (99.93%)
			title?: string, // 1173973/1174105 (99.99%)
			type: "video"|"rich",
			url?: string, // 106267/1174105 (9.05%)
			version?: "1.0", // 1174094/1174105 (100.00%)
			width: number,
		}, // 1174105/1258105 (93.32%)
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
		}, // 83939/1258105 (6.67%)
		type?: string, // 1174166/1258105 (93.33%)
	},
	secure_media_embed: {
		content?: string, // 1174166/11306843 (10.38%)
		height?: number, // 1174166/11306843 (10.38%)
		media_domain_url?: string, // 1174166/11306843 (10.38%)
		scrolling?: boolean, // 1174166/11306843 (10.38%)
		width?: number, // 1174166/11306843 (10.38%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 10270/11306843 (0.09%)
	third_party_tracking?: null|string, // 10270/11306843 (0.09%)
	third_party_tracking_2?: null, // 10270/11306843 (0.09%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 11306709/11306843 (100.00%)
	thumbnail_width?: number|null, // 11306709/11306843 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
}