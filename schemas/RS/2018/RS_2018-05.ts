interface RedditPost {
	adserver_click_url?: null, // 14907/12079652 (0.12%)
	adserver_imp_pixel?: null, // 14907/12079652 (0.12%)
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 26832/12079652 (0.22%)
	author_flair_background_color: null|"",
	author_flair_css_class: null,
	author_flair_richtext?: [], // 9947922/12079652 (82.35%)
	author_flair_template_id: null,
	author_flair_text: null,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text", // 9947922/12079652 (82.35%)
	author_id?: string|null, // 14907/12079652 (0.12%)
	banned_by: null,
	call_to_action?: "Play Now"|"Get Showtimes"|"Shop Now", // 3/12079652 (0.00%)
	can_gild: boolean,
	category: null|"art"|"videos"|"entertainment"|"pics_and_gifs"|"animals"|"writing"|"video_games"|"gaming"|"diy"|"music"|"food"|"photography"|"memes"|"funny",
	clicked: boolean,
	content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"entertainment"|"videos"|"music"|"diy_and_crafts"|"writing"|"comics")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 229324/12079652 (1.90%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 540/227730 (0.24%)
		author_flair_background_color: null|"",
		author_flair_css_class: null,
		author_flair_richtext?: [], // 206955/227730 (90.88%)
		author_flair_template_id: null,
		author_flair_text: null,
		author_flair_text_color: null|"dark",
		author_flair_type?: "text", // 206955/227730 (90.88%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"pics_and_gifs"|"animals"|"art"|"gaming"|"entertainment"|"video_games"|"food"|"memes"|"diy"|"funny"|"videos",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"music"|"videos"|"diy_and_crafts"|"writing")[],
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
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color?: string, // 56565/227730 (24.84%)
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 105/55745 (0.19%)
			e: "text"|"emoji",
			t?: string, // 55640/55745 (99.81%)
			u?: string, // 105/55745 (0.19%)
		}[],
		link_flair_template_id?: string|null, // 36813/227730 (16.17%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 2/44983 (0.00%)
			event_id?: "10vrzj7efqof7"|"10wpf1b7zmawj"|"10y871fdhojzw", // 7/44983 (0.02%)
			height?: number, // 2/44983 (0.00%)
			oembed?: {
				author_name?: string, // 14074/32645 (43.11%)
				author_url?: string, // 14059/32645 (43.07%)
				cache_age?: number, // 4/32645 (0.01%)
				description?: string, // 20858/32645 (63.89%)
				height: number,
				html: string,
				mean_alpha?: number, // 38/32645 (0.12%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 32515/32645 (99.60%)
				thumbnail_url?: string, // 32587/32645 (99.82%)
				thumbnail_width?: number, // 32515/32645 (99.60%)
				title?: string, // 32641/32645 (99.99%)
				type: "video"|"rich",
				url?: string, // 1359/32645 (4.16%)
				version: "1.0",
				width: number,
			}, // 32645/44983 (72.57%)
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
			}, // 12329/44983 (27.41%)
			type?: string, // 32654/44983 (72.59%)
			width?: number, // 2/44983 (0.00%)
		},
		media_embed: {
			content?: string, // 32654/227730 (14.34%)
			height?: number, // 32654/227730 (14.34%)
			scrolling?: boolean, // 32654/227730 (14.34%)
			width?: number, // 32654/227730 (14.34%)
		},
		media_metadata?: null, // 205/227730 (0.09%)
		media_only: boolean,
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"house_only"|"promo_adult"|"no_ads"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_categories: null,
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 171579/227730 (75.34%)
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
					}, // 23098/171579 (13.46%)
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
					}, // 23098/171579 (13.46%)
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
					}, // 30445/171579 (17.74%)
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
					}, // 31490/171579 (18.35%)
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
			}, // 22530/171579 (13.13%)
		}, // 171579/227730 (75.34%)
		previous_visits?: number[], // 6827/227730 (3.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		rte_mode: "markdown"|"richtext",
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 2/44983 (0.00%)
			event_id?: "10vrzj7efqof7"|"10wpf1b7zmawj"|"10y871fdhojzw", // 7/44983 (0.02%)
			height?: number, // 2/44983 (0.00%)
			oembed?: {
				author_name?: string, // 14074/32645 (43.11%)
				author_url?: string, // 14059/32645 (43.07%)
				cache_age?: number, // 4/32645 (0.01%)
				description?: string, // 20858/32645 (63.89%)
				height: number,
				html: string,
				mean_alpha?: number, // 38/32645 (0.12%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 32515/32645 (99.60%)
				thumbnail_url?: string, // 32587/32645 (99.82%)
				thumbnail_width?: number, // 32515/32645 (99.60%)
				title?: string, // 32641/32645 (99.99%)
				type: "video"|"rich",
				url?: string, // 1359/32645 (4.16%)
				version: "1.0",
				width: number,
			}, // 32645/44983 (72.57%)
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
			}, // 12329/44983 (27.41%)
			type?: string, // 32654/44983 (72.59%)
			width?: number, // 2/44983 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 32654/227730 (14.34%)
			height?: number, // 32654/227730 (14.34%)
			media_domain_url?: string, // 32654/227730 (14.34%)
			scrolling?: boolean, // 32654/227730 (14.34%)
			width?: number, // 32654/227730 (14.34%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"house_only"|"promo_adult"|"no_ads"|"promo_all"|null,
		wls: number|null,
	}[], // 229324/12079652 (1.90%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 14907/12079652 (0.12%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 14907/12079652 (0.12%)
	embed_url?: null|string, // 14907/12079652 (0.12%)
	events?: [], // 14907/12079652 (0.12%)
	eventsOnRender?: [], // 14907/12079652 (0.12%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 14907/12079652 (0.12%)
	id: string,
	is_blank?: boolean, // 14907/12079652 (0.12%)
	is_crosspostable: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	likes: null,
	link_flair_background_color?: string, // 2983262/12079652 (24.70%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 4279/2771427 (0.15%)
		e: "text"|"emoji",
		t?: string, // 2767148/2771427 (99.85%)
		u?: string, // 4279/2771427 (0.15%)
	}[],
	link_flair_template_id?: string|null, // 1606697/12079652 (13.30%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 87/1223211 (0.01%)
		oembed?: {
			author_name?: string, // 790730/1098619 (71.97%)
			author_url?: string, // 790397/1098619 (71.94%)
			cache_age?: number, // 337/1098619 (0.03%)
			description?: string, // 495984/1098619 (45.15%)
			height: number,
			html: string,
			marginheight?: number, // 23/1098619 (0.00%)
			marginwidth?: number, // 23/1098619 (0.00%)
			mean_alpha?: number, // 2958/1098619 (0.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1091560/1098619 (99.36%)
			thumbnail_url?: string, // 1097315/1098619 (99.88%)
			thumbnail_width?: number, // 1091560/1098619 (99.36%)
			title?: string, // 1098377/1098619 (99.98%)
			type: "video"|"rich",
			url?: string, // 118708/1098619 (10.81%)
			version?: "1.0", // 1098596/1098619 (100.00%)
			width: number,
		}, // 1098619/1223211 (89.81%)
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
		}, // 124505/1223211 (10.18%)
		type?: string, // 1098706/1223211 (89.82%)
	},
	media_embed: {
		content?: string, // 1098706/12079652 (9.10%)
		height?: number, // 1098706/12079652 (9.10%)
		scrolling?: boolean, // 1098706/12079652 (9.10%)
		width?: number, // 1098706/12079652 (9.10%)
	},
	media_metadata?: null, // 33139/12079652 (0.27%)
	media_only: boolean,
	mobile_ad_url?: string, // 14907/12079652 (0.12%)
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 14907/12079652 (0.12%)
	outbound_link?: {
	}, // 14907/12079652 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"house_only"|"promo_adult"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_categories: null,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4927696/12079652 (40.79%)
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
				}, // 139630/4927696 (2.83%)
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
				}, // 139630/4927696 (2.83%)
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
				}, // 422632/4927696 (8.58%)
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
				}, // 448927/4927696 (9.11%)
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
		}, // 110036/4927696 (2.23%)
	}, // 4927696/12079652 (40.79%)
	previous_visits?: number[], // 72460/12079652 (0.60%)
	priority_id?: null, // 14907/12079652 (0.12%)
	promoted?: boolean, // 14907/12079652 (0.12%)
	promoted_by?: null, // 14907/12079652 (0.12%)
	promoted_display_name?: null, // 14907/12079652 (0.12%)
	promoted_url?: null, // 14907/12079652 (0.12%)
	pwls: number|null,
	removal_reason: null|"legal",
	report_reasons: null,
	retrieved_on: number,
	rte_mode: "markdown"|"richtext",
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 87/1223211 (0.01%)
		oembed?: {
			author_name?: string, // 790730/1098619 (71.97%)
			author_url?: string, // 790397/1098619 (71.94%)
			cache_age?: number, // 337/1098619 (0.03%)
			description?: string, // 495984/1098619 (45.15%)
			height: number,
			html: string,
			marginheight?: number, // 23/1098619 (0.00%)
			marginwidth?: number, // 23/1098619 (0.00%)
			mean_alpha?: number, // 2958/1098619 (0.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1091560/1098619 (99.36%)
			thumbnail_url?: string, // 1097315/1098619 (99.88%)
			thumbnail_width?: number, // 1091560/1098619 (99.36%)
			title?: string, // 1098377/1098619 (99.98%)
			type: "video"|"rich",
			url?: string, // 118708/1098619 (10.81%)
			version?: "1.0", // 1098596/1098619 (100.00%)
			width: number,
		}, // 1098619/1223211 (89.81%)
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
		}, // 124505/1223211 (10.18%)
		type?: string, // 1098706/1223211 (89.82%)
	},
	secure_media_embed: {
		content?: string, // 1098706/12079652 (9.10%)
		height?: number, // 1098706/12079652 (9.10%)
		media_domain_url?: string, // 1098706/12079652 (9.10%)
		scrolling?: boolean, // 1098706/12079652 (9.10%)
		width?: number, // 1098706/12079652 (9.10%)
	},
	selftext: string,
	selftext_html: null|string,
	send_replies: boolean,
	show_media?: boolean, // 9366/12079652 (0.08%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 14907/12079652 (0.12%)
	third_party_tracking?: null, // 14907/12079652 (0.12%)
	third_party_tracking_2?: null, // 14907/12079652 (0.12%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	ups: number,
	url: string,
	user_reports: [],
	visited: boolean,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"house_only"|"promo_adult"|"promo_all"|null,
	wls: number|null,
}