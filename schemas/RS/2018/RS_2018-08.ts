interface RedditPost {
	adserver_click_url?: null, // 16581/13408255 (0.12%)
	adserver_imp_pixel?: null, // 16581/13408255 (0.12%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 33372/13408255 (0.25%)
	author_created_utc?: number|null, // 11124484/13408255 (82.97%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 51466/489881 (10.51%)
		e: "text"|"emoji",
		t?: string, // 438415/489881 (89.49%)
		u?: string, // 51466/489881 (10.51%)
	}[], // 11124484/13408255 (82.97%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 11124484/13408255 (82.97%)
	author_fullname?: string, // 11124484/13408255 (82.97%)
	author_id?: string|null, // 16581/13408255 (0.12%)
	call_to_action?: "Learn More"|"Shop Now"|"View More"|"Sign Up"|"Install"|"Watch Now"|"Download"|"Play Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|null, // 12466/13408255 (0.09%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"videos"|"gaming"|"drawing_and_painting"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"music"|"animals"|"memes"|"food"|"funny",
	content_categories: null|("gaming"|"photography"|"drawing_and_painting"|"entertainment"|"videos"|"diy_and_crafts"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 328532/13408255 (2.45%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 793/325662 (0.24%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 3272/18158 (18.02%)
			e: "text"|"emoji",
			t?: string, // 14886/18158 (81.98%)
			u?: string, // 3272/18158 (18.02%)
		}[], // 299908/325662 (92.09%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 299908/325662 (92.09%)
		author_fullname?: string, // 299908/325662 (92.09%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"photography"|"drawing_and_painting"|"gaming"|"animals"|"entertainment"|"videos"|"music"|"diy_and_crafts"|"food"|"memes",
		clicked: boolean,
		content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"comics"|"entertainment"|"videos"|"diy_and_crafts"|"writing"|"music")[],
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
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 1170/26580 (4.40%)
			e: "text"|"emoji",
			t?: string, // 25410/26580 (95.60%)
			u?: string, // 1170/26580 (4.40%)
		}[],
		link_flair_template_id: null|string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 1/67395 (0.00%)
			event_id?: "11er4gtigyv2a"|"11fbzxw1i0so4"|"11i6e928k6pzz"|"11iwskt0che63"|"yxqpthqf8dff", // 5/67395 (0.01%)
			height?: number, // 1/67395 (0.00%)
			oembed?: {
				author_name?: string, // 14964/38444 (38.92%)
				author_url?: string, // 14956/38444 (38.90%)
				cache_age?: number, // 3/38444 (0.01%)
				description?: string, // 26311/38444 (68.44%)
				height: number,
				html: string,
				mean_alpha?: number, // 21/38444 (0.05%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 38388/38444 (99.85%)
				thumbnail_url?: string, // 38412/38444 (99.92%)
				thumbnail_width?: number, // 38388/38444 (99.85%)
				title?: string, // 38427/38444 (99.96%)
				type: "video"|"rich",
				url?: string, // 2199/38444 (5.72%)
				version: "1.0",
				width: number,
			}, // 38444/67395 (57.04%)
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
			}, // 28945/67395 (42.95%)
			type?: string, // 38450/67395 (57.05%)
			width?: number, // 1/67395 (0.00%)
		},
		media_embed: {
			content?: string, // 38450/325662 (11.81%)
			height?: number, // 38450/325662 (11.81%)
			scrolling?: boolean, // 38450/325662 (11.81%)
			width?: number, // 38450/325662 (11.81%)
		},
		media_metadata?: null, // 2549/325662 (0.78%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 246078/325662 (75.56%)
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
					}, // 31806/246078 (12.93%)
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
					}, // 31806/246078 (12.93%)
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
					}, // 42549/246078 (17.29%)
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
					}, // 43473/246078 (17.67%)
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
			}, // 34647/246078 (14.08%)
		}, // 246078/325662 (75.56%)
		previous_visits?: number[], // 2801/325662 (0.86%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 1/67395 (0.00%)
			event_id?: "11er4gtigyv2a"|"11fbzxw1i0so4"|"11i6e928k6pzz"|"11iwskt0che63"|"yxqpthqf8dff", // 5/67395 (0.01%)
			height?: number, // 1/67395 (0.00%)
			oembed?: {
				author_name?: string, // 14964/38444 (38.92%)
				author_url?: string, // 14956/38444 (38.90%)
				cache_age?: number, // 3/38444 (0.01%)
				description?: string, // 26311/38444 (68.44%)
				height: number,
				html: string,
				mean_alpha?: number, // 21/38444 (0.05%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 38388/38444 (99.85%)
				thumbnail_url?: string, // 38412/38444 (99.92%)
				thumbnail_width?: number, // 38388/38444 (99.85%)
				title?: string, // 38427/38444 (99.96%)
				type: "video"|"rich",
				url?: string, // 2199/38444 (5.72%)
				version: "1.0",
				width: number,
			}, // 38444/67395 (57.04%)
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
			}, // 28945/67395 (42.95%)
			type?: string, // 38450/67395 (57.05%)
			width?: number, // 1/67395 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 38450/325662 (11.81%)
			height?: number, // 38450/325662 (11.81%)
			media_domain_url?: string, // 38450/325662 (11.81%)
			scrolling?: boolean, // 38450/325662 (11.81%)
			width?: number, // 38450/325662 (11.81%)
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
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|null,
		wls: number|null,
	}[], // 328532/13408255 (2.45%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 16581/13408255 (0.12%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 16581/13408255 (0.12%)
	embed_url?: null|string, // 16581/13408255 (0.12%)
	events?: [], // 16581/13408255 (0.12%)
	eventsOnRender?: [], // 16581/13408255 (0.12%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 16581/13408255 (0.12%)
	id: string,
	is_blank?: boolean, // 16581/13408255 (0.12%)
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 16155/1163757 (1.39%)
		e: "text"|"emoji",
		t?: string, // 1147602/1163757 (98.61%)
		u?: string, // 16155/1163757 (1.39%)
	}[],
	link_flair_template_id: null|string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 95/1258901 (0.01%)
		oembed?: {
			author_name?: string, // 826413/1092503 (75.64%)
			author_url?: string, // 825892/1092503 (75.60%)
			cache_age?: number, // 244/1092503 (0.02%)
			description?: string, // 452315/1092503 (41.40%)
			height: number,
			html: string,
			marginheight?: number, // 18/1092503 (0.00%)
			marginwidth?: number, // 18/1092503 (0.00%)
			mean_alpha?: number, // 3534/1092503 (0.32%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1090332/1092503 (99.80%)
			thumbnail_url?: string, // 1092293/1092503 (99.98%)
			thumbnail_width?: number, // 1090332/1092503 (99.80%)
			title?: string, // 1091057/1092503 (99.87%)
			type: "video"|"rich",
			url?: string, // 120549/1092503 (11.03%)
			version?: "1.0", // 1092485/1092503 (100.00%)
			width: number,
		}, // 1092503/1258901 (86.78%)
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
		}, // 166303/1258901 (13.21%)
		type?: string, // 1092598/1258901 (86.79%)
	},
	media_embed: {
		content?: string, // 1092598/13408255 (8.15%)
		height?: number, // 1092598/13408255 (8.15%)
		scrolling?: boolean, // 1092598/13408255 (8.15%)
		width?: number, // 1092598/13408255 (8.15%)
	},
	media_metadata?: null, // 128097/13408255 (0.96%)
	media_only: boolean,
	mobile_ad_url?: string, // 16581/13408255 (0.12%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 16581/13408255 (0.12%)
	outbound_link?: {
	}, // 16581/13408255 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 5272421/13408255 (39.32%)
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
				}, // 133587/5272421 (2.53%)
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
				}, // 133587/5272421 (2.53%)
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
				}, // 461813/5272421 (8.76%)
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
				}, // 482187/5272421 (9.15%)
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
		}, // 112847/5272421 (2.14%)
	}, // 5272421/13408255 (39.32%)
	previous_visits?: number[], // 18153/13408255 (0.14%)
	priority_id?: null, // 16581/13408255 (0.12%)
	promoted?: boolean, // 16581/13408255 (0.12%)
	promoted_by?: null, // 16581/13408255 (0.12%)
	promoted_display_name?: null, // 16581/13408255 (0.12%)
	promoted_url?: null, // 16581/13408255 (0.12%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 95/1258901 (0.01%)
		oembed?: {
			author_name?: string, // 826413/1092503 (75.64%)
			author_url?: string, // 825892/1092503 (75.60%)
			cache_age?: number, // 244/1092503 (0.02%)
			description?: string, // 452315/1092503 (41.40%)
			height: number,
			html: string,
			marginheight?: number, // 18/1092503 (0.00%)
			marginwidth?: number, // 18/1092503 (0.00%)
			mean_alpha?: number, // 3534/1092503 (0.32%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1090332/1092503 (99.80%)
			thumbnail_url?: string, // 1092293/1092503 (99.98%)
			thumbnail_width?: number, // 1090332/1092503 (99.80%)
			title?: string, // 1091057/1092503 (99.87%)
			type: "video"|"rich",
			url?: string, // 120549/1092503 (11.03%)
			version?: "1.0", // 1092485/1092503 (100.00%)
			width: number,
		}, // 1092503/1258901 (86.78%)
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
		}, // 166303/1258901 (13.21%)
		type?: string, // 1092598/1258901 (86.79%)
	},
	secure_media_embed: {
		content?: string, // 1092598/13408255 (8.15%)
		height?: number, // 1092598/13408255 (8.15%)
		media_domain_url?: string, // 1092598/13408255 (8.15%)
		scrolling?: boolean, // 1092598/13408255 (8.15%)
		width?: number, // 1092598/13408255 (8.15%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 16581/13408255 (0.12%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 16581/13408255 (0.12%)
	third_party_tracking?: null, // 16581/13408255 (0.12%)
	third_party_tracking_2?: null, // 16581/13408255 (0.12%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
	wls: number|null,
}