interface RedditPost {
	adserver_click_url?: null, // 13133/12022694 (0.11%)
	adserver_imp_pixel?: null, // 13133/12022694 (0.11%)
	approved_by?: null, // 9582/12022694 (0.08%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 44441/12022694 (0.37%)
	author_flair_background_color?: null|"", // 9582/12022694 (0.08%)
	author_flair_css_class: string|null,
	author_flair_richtext?: [], // 7749/12022694 (0.06%)
	author_flair_template_id?: null, // 9582/12022694 (0.08%)
	author_flair_text: string|null,
	author_flair_text_color?: null|"dark", // 9582/12022694 (0.08%)
	author_flair_type?: "text", // 7749/12022694 (0.06%)
	author_id?: string|null, // 13133/12022694 (0.11%)
	banned_by?: null, // 9582/12022694 (0.08%)
	brand_safe?: boolean, // 12013112/12022694 (99.92%)
	call_to_action?: "Install"|"Download"|"Shop Now"|"View More"|"Sign Up", // 32/12022694 (0.00%)
	can_gild: boolean,
	category?: null, // 9582/12022694 (0.08%)
	clicked?: boolean, // 9582/12022694 (0.08%)
	content_categories?: null|("gaming"|"photography"|"entertainment"|"drawing_and_painting"|"videos")[], // 9582/12022694 (0.08%)
	contest_mode: boolean,
	created?: number, // 9582/12022694 (0.08%)
	created_utc: number,
	crosspost_parent?: string, // 203951/12022694 (1.70%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 429/202772 (0.21%)
		author_flair_background_color?: null|"", // 86/202772 (0.04%)
		author_flair_css_class: string|null,
		author_flair_richtext?: [], // 75/202772 (0.04%)
		author_flair_template_id?: null, // 86/202772 (0.04%)
		author_flair_text: string|null,
		author_flair_text_color?: null|"dark", // 86/202772 (0.04%)
		author_flair_type?: "text", // 75/202772 (0.04%)
		banned_at_utc: null,
		banned_by: null,
		brand_safe?: boolean, // 202686/202772 (99.96%)
		can_gild: boolean,
		can_mod_post: boolean,
		category?: null, // 86/202772 (0.04%)
		clicked: boolean,
		content_categories?: null|("diy_and_crafts")[], // 86/202772 (0.04%)
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
		is_original_content?: boolean, // 86/202772 (0.04%)
		is_reddit_media_domain: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color?: ""|"#dadada"|"#ffd635"|"#00a6a5"|"#ff66ac"|"#ffb000", // 26/202772 (0.01%)
		link_flair_css_class: null|string,
		link_flair_richtext?: {
			e: "text",
			t: string,
		}[], // 86/202772 (0.04%)
		link_flair_template_id?: string, // 20/202772 (0.01%)
		link_flair_text: null|string,
		link_flair_text_color?: "dark"|"light", // 86/202772 (0.04%)
		link_flair_type?: "text"|"richtext", // 86/202772 (0.04%)
		locked: boolean,
		media: null|{
			event_id?: "ta40l9u2ermf", // 1/39057 (0.00%)
			oembed?: {
				author_name?: string, // 14362/31419 (45.71%)
				author_url?: string, // 14362/31419 (45.71%)
				cache_age?: number, // 3/31419 (0.01%)
				description?: string, // 19790/31419 (62.99%)
				height: number,
				html: string,
				mean_alpha?: number, // 62/31419 (0.20%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 31374/31419 (99.86%)
				thumbnail_url?: string, // 31374/31419 (99.86%)
				thumbnail_width?: number, // 31374/31419 (99.86%)
				title: string,
				type: "video"|"rich",
				url?: string, // 1803/31419 (5.74%)
				version: "1.0",
				width: number,
			}, // 31419/39057 (80.44%)
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
			}, // 7637/39057 (19.55%)
			type?: string, // 31420/39057 (80.45%)
		},
		media_embed: {
			content?: string, // 31420/202772 (15.50%)
			height?: number, // 31420/202772 (15.50%)
			media_domain_url?: string, // 31406/202772 (15.49%)
			scrolling?: boolean, // 31420/202772 (15.50%)
			width?: number, // 31420/202772 (15.50%)
		},
		media_metadata?: null, // 13/202772 (0.01%)
		media_only?: boolean, // 86/202772 (0.04%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"house_only"|"no_ads"|"promo_adult"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_categories?: null, // 86/202772 (0.04%)
		post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 159691/202772 (78.75%)
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
					}, // 23191/159691 (14.52%)
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
					}, // 23191/159691 (14.52%)
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
					}, // 24373/159691 (15.26%)
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
					}, // 25037/159691 (15.68%)
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
			}, // 22347/159691 (13.99%)
		}, // 159691/202772 (78.75%)
		previous_visits?: [], // 1/202772 (0.00%)
		pwls?: null|number, // 86/202772 (0.04%)
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		rte_mode?: "markdown"|"richtext", // 86/202772 (0.04%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "ta40l9u2ermf", // 1/39057 (0.00%)
			oembed?: {
				author_name?: string, // 14362/31419 (45.71%)
				author_url?: string, // 14362/31419 (45.71%)
				cache_age?: number, // 3/31419 (0.01%)
				description?: string, // 19790/31419 (62.99%)
				height: number,
				html: string,
				mean_alpha?: number, // 62/31419 (0.20%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 31374/31419 (99.86%)
				thumbnail_url?: string, // 31374/31419 (99.86%)
				thumbnail_width?: number, // 31374/31419 (99.86%)
				title: string,
				type: "video"|"rich",
				url?: string, // 1803/31419 (5.74%)
				version: "1.0",
				width: number,
			}, // 31419/39057 (80.44%)
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
			}, // 7637/39057 (19.55%)
			type?: string, // 31420/39057 (80.45%)
		},
		secure_media_embed: {
			content?: string, // 31420/202772 (15.50%)
			height?: number, // 31420/202772 (15.50%)
			media_domain_url?: string, // 31420/202772 (15.50%)
			scrolling?: boolean, // 31420/202772 (15.50%)
			width?: number, // 31420/202772 (15.50%)
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
		subreddit_type: "public"|"user"|"restricted",
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 202722/202772 (99.98%)
		thumbnail_width?: number|null, // 202722/202772 (99.98%)
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"house_only"|"no_ads"|"promo_adult"|"promo_all"|null,
		wls?: null|number, // 86/202772 (0.04%)
	}[], // 203951/12022694 (1.70%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 13133/12022694 (0.11%)
	downs?: number, // 9582/12022694 (0.08%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 13133/12022694 (0.11%)
	embed_url?: null|string, // 13133/12022694 (0.11%)
	events?: [], // 13133/12022694 (0.11%)
	eventsOnRender?: [], // 13133/12022694 (0.11%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 13133/12022694 (0.11%)
	id: string,
	is_blank?: boolean, // 13133/12022694 (0.11%)
	is_crosspostable: boolean,
	is_original_content?: boolean, // 9582/12022694 (0.08%)
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	likes?: null, // 9582/12022694 (0.08%)
	link_flair_background_color?: string, // 3244/12022694 (0.03%)
	link_flair_css_class: null|string,
	link_flair_richtext?: {
		a?: ":snoo_facepalm:"|":snoo_hearteyes:"|":thumbsup:"|":snoo_dealwithit:"|":snoo_shrug:"|":partyparrot:"|":snoo_simple_smile:", // 1003/4230 (23.71%)
		e: "text"|"emoji",
		t?: string, // 3227/4230 (76.29%)
		u?: string, // 1003/4230 (23.71%)
	}[], // 9582/12022694 (0.08%)
	link_flair_template_id?: string|null, // 2350/12022694 (0.02%)
	link_flair_text: null|string,
	link_flair_text_color?: "dark"|"light", // 9582/12022694 (0.08%)
	link_flair_type?: "text"|"richtext", // 9582/12022694 (0.08%)
	locked: boolean,
	media: null|{
		content?: string, // 332/1263401 (0.03%)
		event_id?: string, // 85/1263401 (0.01%)
		height?: number, // 332/1263401 (0.03%)
		oembed?: {
			author_name?: string, // 857618/1158664 (74.02%)
			author_url?: string, // 855289/1158664 (73.82%)
			cache_age?: number, // 315/1158664 (0.03%)
			description?: string, // 516989/1158664 (44.62%)
			height: number,
			html: string,
			marginheight?: number, // 28/1158664 (0.00%)
			marginwidth?: number, // 28/1158664 (0.00%)
			mean_alpha?: number, // 3619/1158664 (0.31%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1158032/1158664 (99.95%)
			thumbnail_url?: string, // 1158062/1158664 (99.95%)
			thumbnail_width?: number, // 1158032/1158664 (99.95%)
			title?: string, // 1158430/1158664 (99.98%)
			type: "video"|"rich",
			url?: string, // 137070/1158664 (11.83%)
			version?: "1.0", // 1158636/1158664 (100.00%)
			width: number,
		}, // 1158664/1263401 (91.71%)
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
		}, // 104320/1263401 (8.26%)
		type?: string, // 1159081/1263401 (91.74%)
		width?: number, // 332/1263401 (0.03%)
	},
	media_embed: {
		content?: string, // 1159081/12022694 (9.64%)
		height?: number, // 1159081/12022694 (9.64%)
		media_domain_url?: string, // 1158245/12022694 (9.63%)
		scrolling?: boolean, // 1159081/12022694 (9.64%)
		width?: number, // 1159081/12022694 (9.64%)
	},
	media_metadata?: null, // 633/12022694 (0.01%)
	media_only?: boolean, // 9582/12022694 (0.08%)
	mobile_ad_url?: string, // 13133/12022694 (0.11%)
	mod_reports?: [], // 9582/12022694 (0.08%)
	name?: string, // 9582/12022694 (0.08%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports?: null, // 9582/12022694 (0.08%)
	original_link?: null, // 13133/12022694 (0.11%)
	outbound_link?: {
	}, // 13133/12022694 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_categories?: null, // 9582/12022694 (0.08%)
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 5114744/12022694 (42.54%)
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
				}, // 141930/5114744 (2.77%)
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
				}, // 141930/5114744 (2.77%)
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
				}, // 417401/5114744 (8.16%)
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
				}, // 438024/5114744 (8.56%)
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
		}, // 109564/5114744 (2.14%)
	}, // 5114744/12022694 (42.54%)
	previous_visits?: [], // 24/12022694 (0.00%)
	priority_id?: null, // 13133/12022694 (0.11%)
	promoted?: boolean, // 13133/12022694 (0.11%)
	promoted_by?: null, // 13133/12022694 (0.11%)
	promoted_display_name?: null, // 13133/12022694 (0.11%)
	promoted_url?: null, // 13133/12022694 (0.11%)
	pwls?: null|number, // 9582/12022694 (0.08%)
	removal_reason?: null, // 9582/12022694 (0.08%)
	report_reasons?: null, // 9582/12022694 (0.08%)
	retrieved_on: number,
	rte_mode?: "markdown"|"richtext", // 9582/12022694 (0.08%)
	saved?: boolean, // 9582/12022694 (0.08%)
	score: number,
	secure_media: null|{
		content?: string, // 332/1263401 (0.03%)
		event_id?: string, // 85/1263401 (0.01%)
		height?: number, // 332/1263401 (0.03%)
		oembed?: {
			author_name?: string, // 857618/1158664 (74.02%)
			author_url?: string, // 855289/1158664 (73.82%)
			cache_age?: number, // 315/1158664 (0.03%)
			description?: string, // 516989/1158664 (44.62%)
			height: number,
			html: string,
			marginheight?: number, // 28/1158664 (0.00%)
			marginwidth?: number, // 28/1158664 (0.00%)
			mean_alpha?: number, // 3619/1158664 (0.31%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1158032/1158664 (99.95%)
			thumbnail_url?: string, // 1158062/1158664 (99.95%)
			thumbnail_width?: number, // 1158032/1158664 (99.95%)
			title?: string, // 1158430/1158664 (99.98%)
			type: "video"|"rich",
			url?: string, // 137070/1158664 (11.83%)
			version?: "1.0", // 1158636/1158664 (100.00%)
			width: number,
		}, // 1158664/1263401 (91.71%)
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
		}, // 104320/1263401 (8.26%)
		type?: string, // 1159081/1263401 (91.74%)
		width?: number, // 332/1263401 (0.03%)
	},
	secure_media_embed: {
		content?: string, // 1159081/12022694 (9.64%)
		height?: number, // 1159081/12022694 (9.64%)
		media_domain_url?: string, // 1159081/12022694 (9.64%)
		scrolling?: boolean, // 1159081/12022694 (9.64%)
		width?: number, // 1159081/12022694 (9.64%)
	},
	selftext: string,
	selftext_html?: string|null, // 9582/12022694 (0.08%)
	send_replies: boolean,
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 13133/12022694 (0.11%)
	third_party_tracking?: null, // 13133/12022694 (0.11%)
	third_party_tracking_2?: null, // 13133/12022694 (0.11%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 12022614/12022694 (100.00%)
	thumbnail_width?: number|null, // 12022614/12022694 (100.00%)
	title: string,
	ups?: number, // 9582/12022694 (0.08%)
	url: string,
	user_reports?: [], // 9582/12022694 (0.08%)
	visited?: boolean, // 9582/12022694 (0.08%)
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"house_only"|"no_ads"|"promo_adult"|"promo_all"|null,
	wls?: null|number, // 9582/12022694 (0.08%)
}