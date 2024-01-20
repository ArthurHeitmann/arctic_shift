interface RedditPost {
	adserver_click_url?: null, // 13653/10424133 (0.13%)
	adserver_imp_pixel?: null, // 13653/10424133 (0.13%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 22027/10424133 (0.21%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null, // 13653/10424133 (0.13%)
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 847/10424133 (0.01%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
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
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_css_class: null|string,
		link_flair_text: null|string,
		locked: boolean,
		media: null|{
			event_id?: "z6u1s2kx4swc", // 1/121 (0.83%)
			oembed?: {
				author_name?: string, // 53/96 (55.21%)
				author_url?: string, // 53/96 (55.21%)
				cache_age?: number, // 2/96 (2.08%)
				description?: string, // 49/96 (51.04%)
				height: number,
				html: string,
				provider_name: "YouTube"|"gfycat"|"Imgur"|"Streamable"|"Instagram"|"Kickstarter"|"Oddshot.tv"|"Vimeo"|"Vid.me",
				provider_url: "https://www.youtube.com/"|"http://gfycat.com"|"http://imgur.com"|"https://www.streamable.com"|"https://www.instagram.com"|"http://i.imgur.com"|"https://www.kickstarter.com/"|"https://oddshot.tv"|"https://vimeo.com/"|"vid.me"|"https://imgur.com",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video"|"rich",
				url?: "http://i.imgur.com/n10d5BFh.jpg"|"https://vid.me/lqs7D", // 2/96 (2.08%)
				version: "1.0",
				width: number,
			}, // 96/121 (79.34%)
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
			}, // 24/121 (19.83%)
			type?: "youtube.com"|"gfycat.com"|"imgur.com"|"streamable.com"|"instagram.com"|"liveupdate"|"i.imgur.com"|"kickstarter.com"|"oddshot.tv"|"vimeo.com"|"vid.me", // 97/121 (80.17%)
		},
		media_embed: {
			content?: string, // 97/846 (11.47%)
			height?: number, // 97/846 (11.47%)
			scrolling?: boolean, // 97/846 (11.47%)
			width?: number, // 97/846 (11.47%)
		},
		mod_reports: [],
		name: string,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|"promo_specified"|"no_ads"|"house_only"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|null,
		permalink: string,
		post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 580/846 (68.56%)
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
					}, // 174/580 (30.00%)
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
					}, // 174/580 (30.00%)
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
					}, // 12/580 (2.07%)
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
					}, // 17/580 (2.93%)
				},
			}[],
		}, // 580/846 (68.56%)
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "z6u1s2kx4swc", // 1/96 (1.04%)
			oembed?: {
				author_name?: string, // 53/95 (55.79%)
				author_url?: string, // 53/95 (55.79%)
				cache_age?: number, // 2/95 (2.11%)
				description?: string, // 48/95 (50.53%)
				height: number,
				html: string,
				provider_name: "YouTube"|"gfycat"|"Imgur"|"Streamable"|"Instagram"|"Kickstarter"|"Oddshot.tv"|"Vimeo"|"Vid.me",
				provider_url: "https://www.youtube.com/"|"http://gfycat.com"|"http://imgur.com"|"https://www.streamable.com"|"https://www.instagram.com"|"https://www.kickstarter.com/"|"https://oddshot.tv"|"https://vimeo.com/"|"vid.me"|"https://imgur.com",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video"|"rich",
				url?: "http://i.imgur.com/n10d5BFh.jpg"|"https://vid.me/lqs7D", // 2/95 (2.11%)
				version: "1.0",
				width: number,
			}, // 95/96 (98.96%)
			type: "youtube.com"|"gfycat.com"|"imgur.com"|"streamable.com"|"instagram.com"|"liveupdate"|"kickstarter.com"|"oddshot.tv"|"vimeo.com"|"vid.me",
		},
		secure_media_embed: {
			content?: string, // 96/846 (11.35%)
			height?: number, // 96/846 (11.35%)
			scrolling?: boolean, // 96/846 (11.35%)
			width?: number, // 96/846 (11.35%)
		},
		selftext: string,
		selftext_html: null|string,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_type: "public"|"user"|"restricted",
		suggested_sort: null|"confidence"|"qa"|"new"|"top",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 844/846 (99.76%)
		thumbnail_width?: number|null, // 844/846 (99.76%)
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_adult"|"promo_all"|null,
	}[], // 847/10424133 (0.01%)
	disable_comments?: boolean, // 13653/10424133 (0.13%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 13653/10424133 (0.13%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 13653/10424133 (0.13%)
	embed_url?: null|string, // 13653/10424133 (0.13%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 13653/10424133 (0.13%)
	id: string,
	imp_pixel?: null, // 13653/10424133 (0.13%)
	is_crosspostable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 183/1188205 (0.02%)
		oembed?: {
			author_name?: string, // 870462/1169158 (74.45%)
			author_url?: string, // 869126/1169158 (74.34%)
			cache_age?: number, // 1658/1169158 (0.14%)
			description?: string, // 486685/1169158 (41.63%)
			height: number,
			html: string,
			marginheight?: number, // 9/1169158 (0.00%)
			marginwidth?: number, // 9/1169158 (0.00%)
			mean_alpha?: number, // 3698/1169158 (0.32%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1168689/1169158 (99.96%)
			thumbnail_url?: string, // 1168691/1169158 (99.96%)
			thumbnail_width?: number, // 1168689/1169158 (99.96%)
			title?: string, // 1169136/1169158 (100.00%)
			type: "video"|"rich",
			url?: string, // 114911/1169158 (9.83%)
			version?: "1.0", // 1169149/1169158 (100.00%)
			width: number,
		}, // 1169158/1188205 (98.40%)
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
		}, // 18864/1188205 (1.59%)
		type?: string, // 1169341/1188205 (98.41%)
	},
	media_embed: {
		content?: string, // 1169341/10424133 (11.22%)
		height?: number, // 1169341/10424133 (11.22%)
		scrolling?: boolean, // 1169341/10424133 (11.22%)
		width?: number, // 1169341/10424133 (11.22%)
	},
	mobile_ad_url?: string, // 13653/10424133 (0.13%)
	num_comments: number,
	num_crossposts: number,
	original_link?: null|"t3_5ecyzj"|"t3_6sazfx"|"t3_6stu5t"|"t3_6ut41s"|"t3_6p8kmh"|"t3_6w0mw1"|"t3_6d0fnv", // 13653/10424133 (0.13%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"promo_adult"|"house_only"|"promo_all"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4151284/10424133 (39.82%)
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
				}, // 115734/4151284 (2.79%)
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
				}, // 115734/4151284 (2.79%)
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
				}, // 359182/4151284 (8.65%)
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
				}, // 375937/4151284 (9.06%)
			},
		}[],
	}, // 4151284/10424133 (39.82%)
	promoted?: boolean, // 13653/10424133 (0.13%)
	promoted_by?: null, // 13653/10424133 (0.13%)
	promoted_display_name?: null|"LawBreakers_Game"|"The Orville on Fox"|"ProperGrahamer"|"MotherMovie"|"Mother! Movie", // 13653/10424133 (0.13%)
	promoted_url?: null|string, // 13653/10424133 (0.13%)
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 183/1160329 (0.02%)
		oembed?: {
			author_name?: string, // 868017/1160146 (74.82%)
			author_url?: string, // 866702/1160146 (74.71%)
			cache_age?: number, // 1654/1160146 (0.14%)
			description?: string, // 477679/1160146 (41.17%)
			height: number,
			html: string,
			marginheight?: number, // 9/1160146 (0.00%)
			marginwidth?: number, // 9/1160146 (0.00%)
			mean_alpha?: number, // 2556/1160146 (0.22%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1159678/1160146 (99.96%)
			thumbnail_url?: string, // 1159679/1160146 (99.96%)
			thumbnail_width?: number, // 1159678/1160146 (99.96%)
			title?: string, // 1160124/1160146 (100.00%)
			type: "video"|"rich",
			url?: string, // 114336/1160146 (9.86%)
			version?: "1.0", // 1160137/1160146 (100.00%)
			width: number,
		}, // 1160146/1160329 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 1160329/10424133 (11.13%)
		height?: number, // 1160329/10424133 (11.13%)
		scrolling?: boolean, // 1160329/10424133 (11.13%)
		width?: number, // 1160329/10424133 (11.13%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 10410480/10424133 (99.87%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 13653/10424133 (0.13%)
	third_party_tracking?: null|string, // 13653/10424133 (0.13%)
	third_party_tracking_2?: null|string, // 13653/10424133 (0.13%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 10424095/10424133 (100.00%)
	thumbnail_width?: number|null, // 10424095/10424133 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"promo_adult"|"house_only"|"promo_all"|null,
}