interface RedditPost {
	adserver_click_url?: null, // 12392/11997150 (0.10%)
	adserver_imp_pixel?: null, // 12392/11997150 (0.10%)
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 34574/11997150 (0.29%)
	author_flair_background_color: null|"",
	author_flair_css_class: null,
	author_flair_richtext?: [], // 9695161/11997150 (80.81%)
	author_flair_template_id: null,
	author_flair_text: null,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text", // 9695161/11997150 (80.81%)
	author_id?: string|null, // 12392/11997150 (0.10%)
	banned_by: null,
	call_to_action?: "Install"|"Shop Now"|"Download"|"View More"|"Sign Up"|"Get a Quote"|"Watch Now"|"Get Showtimes", // 13/11997150 (0.00%)
	can_gild: boolean,
	category: null|"art"|"videos"|"pics_and_gifs"|"animals"|"video_games"|"diy"|"gaming"|"writing"|"entertainment"|"food"|"music"|"photography"|"funny"|"memes",
	clicked: boolean,
	content_categories: null|("gaming"|"photography"|"drawing_and_painting"|"entertainment"|"videos"|"music"|"diy_and_crafts"|"comics"|"writing")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 206554/11997150 (1.72%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 759/205065 (0.37%)
		author_flair_background_color: null|"",
		author_flair_css_class: null,
		author_flair_richtext?: [], // 185158/205065 (90.29%)
		author_flair_template_id: null,
		author_flair_text: null,
		author_flair_text_color: null|"dark",
		author_flair_type?: "text", // 185158/205065 (90.29%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"animals"|"pics_and_gifs"|"art"|"entertainment"|"video_games"|"gaming"|"videos",
		clicked: boolean,
		content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"comics"|"entertainment"|"music"|"videos"|"diy_and_crafts"|"writing")[],
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
		link_flair_background_color?: string, // 51804/205065 (25.26%)
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 36/51228 (0.07%)
			e: "text"|"emoji",
			t?: string, // 51192/51228 (99.93%)
			u?: string, // 36/51228 (0.07%)
		}[],
		link_flair_template_id?: string|null, // 33137/205065 (16.16%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 1296/41919 (3.09%)
			event_id?: "10unwyw17np08"|"10pr5cof8gf2a"|"10prjcwendql1"|"10usznahj6apy", // 5/41919 (0.01%)
			height?: number, // 1296/41919 (3.09%)
			oembed?: {
				author_name?: string, // 13658/29865 (45.73%)
				author_url?: string, // 13647/29865 (45.70%)
				cache_age?: number, // 11/29865 (0.04%)
				description?: string, // 18650/29865 (62.45%)
				height: number,
				html: string,
				mean_alpha?: number, // 62/29865 (0.21%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 29800/29865 (99.78%)
				thumbnail_url?: string, // 29818/29865 (99.84%)
				thumbnail_width?: number, // 29800/29865 (99.78%)
				title?: string, // 29863/29865 (99.99%)
				type: "video"|"rich",
				url?: string, // 1546/29865 (5.18%)
				version: "1.0",
				width: number,
			}, // 29865/41919 (71.24%)
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
			}, // 10753/41919 (25.65%)
			type?: string, // 31166/41919 (74.35%)
			width?: number, // 1296/41919 (3.09%)
		},
		media_embed: {
			content?: string, // 31166/205065 (15.20%)
			height?: number, // 31166/205065 (15.20%)
			scrolling?: boolean, // 31166/205065 (15.20%)
			width?: number, // 31166/205065 (15.20%)
		},
		media_metadata?: null, // 42/205065 (0.02%)
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
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 153421/205065 (74.82%)
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
					}, // 20405/153421 (13.30%)
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
					}, // 20405/153421 (13.30%)
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
					}, // 25772/153421 (16.80%)
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
					}, // 26537/153421 (17.30%)
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
			}, // 19502/153421 (12.71%)
		}, // 153421/205065 (74.82%)
		previous_visits?: number[], // 8440/205065 (4.12%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		rte_mode: "markdown"|"richtext",
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 1296/41919 (3.09%)
			event_id?: "10unwyw17np08"|"10pr5cof8gf2a"|"10prjcwendql1"|"10usznahj6apy", // 5/41919 (0.01%)
			height?: number, // 1296/41919 (3.09%)
			oembed?: {
				author_name?: string, // 13658/29865 (45.73%)
				author_url?: string, // 13647/29865 (45.70%)
				cache_age?: number, // 11/29865 (0.04%)
				description?: string, // 18650/29865 (62.45%)
				height: number,
				html: string,
				mean_alpha?: number, // 62/29865 (0.21%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 29800/29865 (99.78%)
				thumbnail_url?: string, // 29818/29865 (99.84%)
				thumbnail_width?: number, // 29800/29865 (99.78%)
				title?: string, // 29863/29865 (99.99%)
				type: "video"|"rich",
				url?: string, // 1546/29865 (5.18%)
				version: "1.0",
				width: number,
			}, // 29865/41919 (71.24%)
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
			}, // 10753/41919 (25.65%)
			type?: string, // 31166/41919 (74.35%)
			width?: number, // 1296/41919 (3.09%)
		},
		secure_media_embed: {
			content?: string, // 31166/205065 (15.20%)
			height?: number, // 31166/205065 (15.20%)
			media_domain_url?: string, // 31166/205065 (15.20%)
			scrolling?: boolean, // 31166/205065 (15.20%)
			width?: number, // 31166/205065 (15.20%)
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
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"house_only"|"no_ads"|"promo_adult"|"promo_all"|null,
		wls: number|null,
	}[], // 206554/11997150 (1.72%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 12392/11997150 (0.10%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 12392/11997150 (0.10%)
	embed_url?: null|string, // 12392/11997150 (0.10%)
	events?: [], // 12392/11997150 (0.10%)
	eventsOnRender?: [], // 12392/11997150 (0.10%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 12392/11997150 (0.10%)
	id: string,
	is_blank?: boolean, // 12392/11997150 (0.10%)
	is_crosspostable: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	likes: null,
	link_flair_background_color?: string, // 2851510/11997150 (23.77%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 2354/2642372 (0.09%)
		e: "text"|"emoji",
		t?: string, // 2640018/2642372 (99.91%)
		u?: string, // 2354/2642372 (0.09%)
	}[],
	link_flair_template_id?: string|null, // 1493936/11997150 (12.45%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		content?: string, // 425896/1598803 (26.64%)
		event_id?: string, // 77/1598803 (0.00%)
		height?: number, // 425896/1598803 (26.64%)
		oembed?: {
			author_name?: string, // 785310/1060381 (74.06%)
			author_url?: string, // 783605/1060381 (73.90%)
			cache_age?: number, // 329/1060381 (0.03%)
			description?: string, // 467304/1060381 (44.07%)
			height: number,
			html: string,
			marginheight?: number, // 7/1060381 (0.00%)
			marginwidth?: number, // 7/1060381 (0.00%)
			mean_alpha?: number, // 3082/1060381 (0.29%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1056613/1060381 (99.64%)
			thumbnail_url?: string, // 1059003/1060381 (99.87%)
			thumbnail_width?: number, // 1056613/1060381 (99.64%)
			title?: string, // 1060189/1060381 (99.98%)
			type: "video"|"rich",
			url?: string, // 121992/1060381 (11.50%)
			version?: "1.0", // 1060374/1060381 (100.00%)
			width: number,
		}, // 1060381/1598803 (66.32%)
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
		}, // 112449/1598803 (7.03%)
		type?: string, // 1486354/1598803 (92.97%)
		width?: number, // 425896/1598803 (26.64%)
	},
	media_embed: {
		content?: string, // 1486354/11997150 (12.39%)
		height?: number, // 1486354/11997150 (12.39%)
		scrolling?: boolean, // 1486354/11997150 (12.39%)
		width?: number, // 1486354/11997150 (12.39%)
	},
	media_metadata?: null, // 7065/11997150 (0.06%)
	media_only: boolean,
	mobile_ad_url?: string, // 12392/11997150 (0.10%)
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 12392/11997150 (0.10%)
	outbound_link?: {
	}, // 12392/11997150 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"house_only"|"promo_adult"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_categories: null,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4628486/11997150 (38.58%)
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
				}, // 122455/4628486 (2.65%)
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
				}, // 122455/4628486 (2.65%)
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
				}, // 376899/4628486 (8.14%)
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
				}, // 397047/4628486 (8.58%)
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
		}, // 93460/4628486 (2.02%)
	}, // 4628486/11997150 (38.58%)
	previous_visits?: number[], // 196601/11997150 (1.64%)
	priority_id?: null, // 12392/11997150 (0.10%)
	promoted?: boolean, // 12392/11997150 (0.10%)
	promoted_by?: null, // 12392/11997150 (0.10%)
	promoted_display_name?: null, // 12392/11997150 (0.10%)
	promoted_url?: null, // 12392/11997150 (0.10%)
	pwls: number|null,
	removal_reason: null|"legal",
	report_reasons: null,
	retrieved_on: number,
	rte_mode: "markdown"|"richtext",
	saved: boolean,
	score: number,
	secure_media: null|{
		content?: string, // 425896/1598803 (26.64%)
		event_id?: string, // 77/1598803 (0.00%)
		height?: number, // 425896/1598803 (26.64%)
		oembed?: {
			author_name?: string, // 785310/1060381 (74.06%)
			author_url?: string, // 783605/1060381 (73.90%)
			cache_age?: number, // 329/1060381 (0.03%)
			description?: string, // 467304/1060381 (44.07%)
			height: number,
			html: string,
			marginheight?: number, // 7/1060381 (0.00%)
			marginwidth?: number, // 7/1060381 (0.00%)
			mean_alpha?: number, // 3082/1060381 (0.29%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1056613/1060381 (99.64%)
			thumbnail_url?: string, // 1059003/1060381 (99.87%)
			thumbnail_width?: number, // 1056613/1060381 (99.64%)
			title?: string, // 1060189/1060381 (99.98%)
			type: "video"|"rich",
			url?: string, // 121992/1060381 (11.50%)
			version?: "1.0", // 1060374/1060381 (100.00%)
			width: number,
		}, // 1060381/1598803 (66.32%)
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
		}, // 112449/1598803 (7.03%)
		type?: string, // 1486354/1598803 (92.97%)
		width?: number, // 425896/1598803 (26.64%)
	},
	secure_media_embed: {
		content?: string, // 1486354/11997150 (12.39%)
		height?: number, // 1486354/11997150 (12.39%)
		media_domain_url?: string, // 1486354/11997150 (12.39%)
		scrolling?: boolean, // 1486354/11997150 (12.39%)
		width?: number, // 1486354/11997150 (12.39%)
	},
	selftext: string,
	selftext_html: null|string,
	send_replies: boolean,
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted"|"archived",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null, // 12392/11997150 (0.10%)
	third_party_tracking?: null, // 12392/11997150 (0.10%)
	third_party_tracking_2?: null, // 12392/11997150 (0.10%)
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