interface RedditPost {
	adserver_click_url?: null, // 9618/10567492 (0.09%)
	adserver_imp_pixel?: null, // 9618/10567492 (0.09%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 28068/10567492 (0.27%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 9618/10567492 (0.09%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 93892/10567492 (0.89%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 355/93153 (0.38%)
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
				author_name?: string, // 7817/15868 (49.26%)
				author_url?: string, // 7817/15868 (49.26%)
				cache_age?: number, // 17/15868 (0.11%)
				description?: string, // 9626/15868 (60.66%)
				height: number,
				html: string,
				mean_alpha?: number, // 29/15868 (0.18%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 15839/15868 (99.82%)
				thumbnail_url?: string, // 15839/15868 (99.82%)
				thumbnail_width?: number, // 15839/15868 (99.82%)
				title?: string, // 15867/15868 (99.99%)
				type: "video"|"rich",
				url?: string, // 959/15868 (6.04%)
				version: "1.0",
				width: number,
			}, // 15868/17174 (92.40%)
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
			}, // 1306/17174 (7.60%)
			type?: string, // 15868/17174 (92.40%)
		},
		media_embed: {
			content?: string, // 15868/93153 (17.03%)
			height?: number, // 15868/93153 (17.03%)
			scrolling?: boolean, // 15868/93153 (17.03%)
			width?: number, // 15868/93153 (17.03%)
		},
		mod_note?: null, // 85463/93153 (91.74%)
		mod_reason_by?: null, // 85463/93153 (91.74%)
		mod_reason_title?: null, // 85463/93153 (91.74%)
		mod_reports: [],
		name: string,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"promo_all"|"no_ads"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 69047/93153 (74.12%)
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
					}, // 8064/69047 (11.68%)
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
					}, // 8064/69047 (11.68%)
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
					}, // 13291/69047 (19.25%)
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
					}, // 13658/69047 (19.78%)
				},
			}[],
		}, // 69047/93153 (74.12%)
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed: {
				author_name?: string, // 7794/15815 (49.28%)
				author_url?: string, // 7794/15815 (49.28%)
				cache_age?: number, // 17/15815 (0.11%)
				description?: string, // 9576/15815 (60.55%)
				height: number,
				html: string,
				mean_alpha?: number, // 28/15815 (0.18%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 15787/15815 (99.82%)
				thumbnail_url?: string, // 15787/15815 (99.82%)
				thumbnail_width?: number, // 15787/15815 (99.82%)
				title?: string, // 15814/15815 (99.99%)
				type: "video"|"rich",
				url?: string, // 941/15815 (5.95%)
				version: "1.0",
				width: number,
			},
			type: string,
		},
		secure_media_embed: {
			content?: string, // 15815/93153 (16.98%)
			height?: number, // 15815/93153 (16.98%)
			media_domain_url?: string, // 15815/93153 (16.98%)
			scrolling?: boolean, // 15815/93153 (16.98%)
			width?: number, // 15815/93153 (16.98%)
		},
		selftext: string,
		selftext_html: null|string,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random",
		thumbnail: string,
		thumbnail_height?: number|null, // 93147/93153 (99.99%)
		thumbnail_width?: number|null, // 93147/93153 (99.99%)
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	}[], // 93892/10567492 (0.89%)
	disable_comments?: boolean, // 9618/10567492 (0.09%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	domain_override?: null|string, // 9618/10567492 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 9618/10567492 (0.09%)
	embed_url?: null|string, // 9618/10567492 (0.09%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 9618/10567492 (0.09%)
	id: string,
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 94/1146406 (0.01%)
		oembed?: {
			author_name?: string, // 811667/1092261 (74.31%)
			author_url?: string, // 809916/1092261 (74.15%)
			cache_age?: number, // 1824/1092261 (0.17%)
			description?: string, // 453867/1092261 (41.55%)
			height: number,
			html: string,
			marginheight?: number, // 4/1092261 (0.00%)
			marginwidth?: number, // 4/1092261 (0.00%)
			mean_alpha?: number, // 2710/1092261 (0.25%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1091827/1092261 (99.96%)
			thumbnail_url?: string, // 1091829/1092261 (99.96%)
			thumbnail_width?: number, // 1091827/1092261 (99.96%)
			title?: string, // 1092247/1092261 (100.00%)
			type: "video"|"rich",
			url?: string, // 109823/1092261 (10.05%)
			version?: "1.0", // 1092257/1092261 (100.00%)
			width: number,
		}, // 1092261/1146406 (95.28%)
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
		}, // 54051/1146406 (4.71%)
		type?: string, // 1092355/1146406 (95.29%)
	},
	media_embed: {
		content?: string, // 1092355/10567492 (10.34%)
		height?: number, // 1092355/10567492 (10.34%)
		scrolling?: boolean, // 1092355/10567492 (10.34%)
		width?: number, // 1092355/10567492 (10.34%)
	},
	mobile_ad_url?: string, // 9618/10567492 (0.09%)
	mod_note?: null, // 9560790/10567492 (90.47%)
	mod_reason_by?: null, // 9560790/10567492 (90.47%)
	mod_reason_title?: null, // 9560790/10567492 (90.47%)
	num_comments: number,
	num_crossposts: number,
	original_link?: null|"t3_7gylr2"|"t3_7hlgfy"|"t3_7gzpo3"|"t3_6subtn"|"t3_7hudh7"|"t3_7hzfo2"|"t3_7ia0v4"|"t3_7jv5ku"|"t3_7jvkmb"|"t3_7jxcci"|"t3_7l2x0l", // 9618/10567492 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4265409/10567492 (40.36%)
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
				}, // 120577/4265409 (2.83%)
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
				}, // 120577/4265409 (2.83%)
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
				}, // 364429/4265409 (8.54%)
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
				}, // 383932/4265409 (9.00%)
			},
		}[],
	}, // 4265409/10567492 (40.36%)
	promoted?: boolean, // 9618/10567492 (0.09%)
	promoted_by?: null, // 9618/10567492 (0.09%)
	promoted_display_name?: null|"MILD22011"|"AudiSportUSA"|"DisasterArtistMovie"|"MILD22011testsub"|"amccollum", // 9618/10567492 (0.09%)
	promoted_url?: null|string, // 9618/10567492 (0.09%)
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 94/1084860 (0.01%)
		oembed?: {
			author_name?: string, // 808932/1084766 (74.57%)
			author_url?: string, // 807211/1084766 (74.41%)
			cache_age?: number, // 1816/1084766 (0.17%)
			description?: string, // 446389/1084766 (41.15%)
			height: number,
			html: string,
			marginheight?: number, // 4/1084766 (0.00%)
			marginwidth?: number, // 4/1084766 (0.00%)
			mean_alpha?: number, // 2657/1084766 (0.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1084333/1084766 (99.96%)
			thumbnail_url?: string, // 1084334/1084766 (99.96%)
			thumbnail_width?: number, // 1084333/1084766 (99.96%)
			title?: string, // 1084752/1084766 (100.00%)
			type: "video"|"rich",
			url?: string, // 108727/1084766 (10.02%)
			version?: "1.0", // 1084762/1084766 (100.00%)
			width: number,
		}, // 1084766/1084860 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 1084860/10567492 (10.27%)
		height?: number, // 1084860/10567492 (10.27%)
		media_domain_url?: string, // 1084860/10567492 (10.27%)
		scrolling?: boolean, // 1084860/10567492 (10.27%)
		width?: number, // 1084860/10567492 (10.27%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 10557874/10567492 (99.91%)
	subreddit_id: string|null,
	subreddit_type?: "public"|"restricted"|"user"|"gold_restricted", // 10557874/10567492 (99.91%)
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null, // 9618/10567492 (0.09%)
	third_party_tracking?: null|string, // 9618/10567492 (0.09%)
	third_party_tracking_2?: null|string, // 9618/10567492 (0.09%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 10567469/10567492 (100.00%)
	thumbnail_width?: number|null, // 10567469/10567492 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
}