interface RedditPost {
	adserver_click_url?: null, // 13274/10377379 (0.13%)
	adserver_imp_pixel?: null, // 13274/10377379 (0.13%)
	archived?: boolean, // 10376666/10377379 (99.99%)
	author: string,
	author_cakeday?: boolean, // 24051/10377379 (0.23%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 13274/10377379 (0.13%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 48529/10377379 (0.47%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 94/48424 (0.19%)
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
				author_name?: string, // 4726/9059 (52.17%)
				author_url?: string, // 4726/9059 (52.17%)
				cache_age?: number, // 46/9059 (0.51%)
				description?: string, // 5341/9059 (58.96%)
				height: number,
				html: string,
				mean_alpha?: number, // 10/9059 (0.11%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 9058/9059 (99.99%)
				thumbnail_url?: string, // 9058/9059 (99.99%)
				thumbnail_width?: number, // 9058/9059 (99.99%)
				title: string,
				type: "video"|"rich",
				url?: string, // 666/9059 (7.35%)
				version: "1.0",
				width: number,
			}, // 9059/9815 (92.30%)
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
			}, // 756/9815 (7.70%)
			type?: string, // 9059/9815 (92.30%)
		},
		media_embed: {
			content?: string, // 9059/48424 (18.71%)
			height?: number, // 9059/48424 (18.71%)
			scrolling?: boolean, // 9059/48424 (18.71%)
			width?: number, // 9059/48424 (18.71%)
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
		post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 36752/48424 (75.90%)
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
					}, // 4545/36752 (12.37%)
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
					}, // 4545/36752 (12.37%)
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
					}, // 6697/36752 (18.22%)
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
					}, // 6949/36752 (18.91%)
				},
			}[],
		}, // 36752/48424 (75.90%)
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed: {
				author_name?: string, // 4714/9025 (52.23%)
				author_url?: string, // 4714/9025 (52.23%)
				cache_age?: number, // 46/9025 (0.51%)
				description?: string, // 5309/9025 (58.83%)
				height: number,
				html: string,
				mean_alpha?: number, // 10/9025 (0.11%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 9024/9025 (99.99%)
				thumbnail_url?: string, // 9024/9025 (99.99%)
				thumbnail_width?: number, // 9024/9025 (99.99%)
				title: string,
				type: "video"|"rich",
				url?: string, // 657/9025 (7.28%)
				version: "1.0",
				width: number,
			},
			type: string,
		},
		secure_media_embed: {
			content?: string, // 9025/48424 (18.64%)
			height?: number, // 9025/48424 (18.64%)
			media_domain_url?: string, // 9025/48424 (18.64%)
			scrolling?: boolean, // 9025/48424 (18.64%)
			width?: number, // 9025/48424 (18.64%)
		},
		selftext: string,
		selftext_html: null|string,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_type: "public"|"restricted"|"user"|"archived",
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 48421/48424 (99.99%)
		thumbnail_width?: number|null, // 48421/48424 (99.99%)
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	}[], // 48529/10377379 (0.47%)
	disable_comments?: boolean, // 13274/10377379 (0.13%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 13274/10377379 (0.13%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 13274/10377379 (0.13%)
	embed_url?: null|string, // 13274/10377379 (0.13%)
	gilded: number,
	hidden: boolean,
	hide_score?: boolean, // 10376666/10377379 (99.99%)
	href_url?: string, // 13274/10377379 (0.13%)
	id: string,
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 95/1117991 (0.01%)
		oembed?: {
			author_name?: string, // 804064/1081330 (74.36%)
			author_url?: string, // 802465/1081330 (74.21%)
			cache_age?: number, // 5394/1081330 (0.50%)
			description?: string, // 457407/1081330 (42.30%)
			height: number,
			html: string,
			marginheight?: number, // 12/1081330 (0.00%)
			marginwidth?: number, // 12/1081330 (0.00%)
			mean_alpha?: number, // 2475/1081330 (0.23%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1080968/1081330 (99.97%)
			thumbnail_url?: string, // 1080968/1081330 (99.97%)
			thumbnail_width?: number, // 1080968/1081330 (99.97%)
			title?: string, // 1081305/1081330 (100.00%)
			type: "video"|"rich",
			url?: string, // 110405/1081330 (10.21%)
			version?: "1.0", // 1081318/1081330 (100.00%)
			width: number,
		}, // 1081330/1117991 (96.72%)
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
		}, // 36566/1117991 (3.27%)
		type?: string, // 1081425/1117991 (96.73%)
	},
	media_embed: {
		content?: string, // 1081425/10377379 (10.42%)
		height?: number, // 1081425/10377379 (10.42%)
		scrolling?: boolean, // 1081425/10377379 (10.42%)
		width?: number, // 1081425/10377379 (10.42%)
	},
	mobile_ad_url?: string, // 13274/10377379 (0.13%)
	num_comments: number,
	num_crossposts: number,
	original_link?: null|"t3_7bufbc"|"t3_7cta9p"|"t3_7cwaxv"|"t3_7cuxco"|"t3_7cvswu"|"t3_7cv6xh"|"t3_7cvvvp", // 13274/10377379 (0.13%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4148438/10377379 (39.98%)
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
				}, // 117830/4148438 (2.84%)
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
				}, // 117830/4148438 (2.84%)
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
				}, // 357931/4148438 (8.63%)
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
				}, // 374982/4148438 (9.04%)
			},
		}[],
	}, // 4148438/10377379 (39.98%)
	promoted?: boolean, // 13274/10377379 (0.13%)
	promoted_by?: null, // 13274/10377379 (0.13%)
	promoted_display_name?: null|"FirefoxOffical"|"BlackRifleCoffeeCo"|"Anki_Inc"|"FirefoxOfficial", // 13274/10377379 (0.13%)
	promoted_url?: null|string, // 13274/10377379 (0.13%)
	retrieved_on: number,
	score: number|null,
	secure_media: null|{
		event_id?: string, // 95/1073454 (0.01%)
		oembed?: {
			author_name?: string, // 801186/1073359 (74.64%)
			author_url?: string, // 799626/1073359 (74.50%)
			cache_age?: number, // 5390/1073359 (0.50%)
			description?: string, // 449441/1073359 (41.87%)
			height: number,
			html: string,
			marginheight?: number, // 12/1073359 (0.00%)
			marginwidth?: number, // 12/1073359 (0.00%)
			mean_alpha?: number, // 2401/1073359 (0.22%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1072997/1073359 (99.97%)
			thumbnail_url?: string, // 1072997/1073359 (99.97%)
			thumbnail_width?: number, // 1072997/1073359 (99.97%)
			title?: string, // 1073334/1073359 (100.00%)
			type: "video"|"rich",
			url?: string, // 109324/1073359 (10.19%)
			version?: "1.0", // 1073347/1073359 (100.00%)
			width: number,
		}, // 1073359/1073454 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 1073454/10377379 (10.34%)
		height?: number, // 1073454/10377379 (10.34%)
		media_domain_url?: string, // 1073454/10377379 (10.34%)
		scrolling?: boolean, // 1073454/10377379 (10.34%)
		width?: number, // 1073454/10377379 (10.34%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 10364105/10377379 (99.87%)
	subreddit_id: string|null,
	subreddit_type?: "public"|"restricted"|"user"|"gold_restricted", // 10363392/10377379 (99.87%)
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null, // 13274/10377379 (0.13%)
	third_party_tracking?: null|string, // 13274/10377379 (0.13%)
	third_party_tracking_2?: null|string, // 13274/10377379 (0.13%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 10377351/10377379 (100.00%)
	thumbnail_width?: number|null, // 10377351/10377379 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
}