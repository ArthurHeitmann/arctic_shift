interface RedditPost {
	adserver_click_url?: null, // 16258/13305762 (0.12%)
	adserver_imp_pixel?: null, // 16258/13305762 (0.12%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 35913/13305762 (0.27%)
	author_created_utc?: number|null, // 10778771/13305762 (81.01%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 41948/481878 (8.71%)
		e: "text"|"emoji",
		t?: string, // 439930/481878 (91.29%)
		u?: string, // 41948/481878 (8.71%)
	}[], // 10778771/13305762 (81.01%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 10778771/13305762 (81.01%)
	author_fullname?: string, // 10778771/13305762 (81.01%)
	author_id?: string|null, // 16258/13305762 (0.12%)
	call_to_action?: "Learn More"|"Shop Now"|"View More"|"Sign Up"|"Install"|"Watch Now"|"Download"|"Play Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|null, // 9897/13305762 (0.07%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"videos"|"gaming"|"drawing_and_painting"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"music"|"animals"|"memes"|"food"|"funny",
	content_categories: null|("gaming"|"photography"|"drawing_and_painting"|"entertainment"|"videos"|"diy_and_crafts"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 268394/13305762 (2.02%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 845/265910 (0.32%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 2645/15861 (16.68%)
			e: "text"|"emoji",
			t?: string, // 13216/15861 (83.32%)
			u?: string, // 2645/15861 (16.68%)
		}[], // 239589/265910 (90.10%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 239589/265910 (90.10%)
		author_fullname?: string, // 239589/265910 (90.10%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"art"|"pics_and_gifs"|"funny"|"food",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"videos"|"writing"|"music")[],
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
			a?: string, // 460/21847 (2.11%)
			e: "text"|"emoji",
			t?: string, // 21387/21847 (97.89%)
			u?: string, // 460/21847 (2.11%)
		}[],
		link_flair_template_id: null|string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 2/56813 (0.00%)
			event_id?: "11aod8o20ixmw"|"11ct9f4lzy09w", // 2/56813 (0.00%)
			height?: number, // 2/56813 (0.00%)
			oembed?: {
				author_name?: string, // 12778/34830 (36.69%)
				author_url?: string, // 12776/34830 (36.68%)
				cache_age?: number, // 1/34830 (0.00%)
				description?: string, // 24658/34830 (70.80%)
				height: number,
				html: string,
				mean_alpha?: number, // 35/34830 (0.10%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 34723/34830 (99.69%)
				thumbnail_url?: string, // 34741/34830 (99.74%)
				thumbnail_width?: number, // 34723/34830 (99.69%)
				title?: string, // 34815/34830 (99.96%)
				type: "video"|"rich",
				url?: string, // 1806/34830 (5.19%)
				version: "1.0",
				width: number,
			}, // 34830/56813 (61.31%)
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
			}, // 21979/56813 (38.69%)
			type?: string, // 34834/56813 (61.31%)
			width?: number, // 2/56813 (0.00%)
		},
		media_embed: {
			content?: string, // 34834/265910 (13.10%)
			height?: number, // 34834/265910 (13.10%)
			scrolling?: boolean, // 34834/265910 (13.10%)
			width?: number, // 34834/265910 (13.10%)
		},
		media_metadata?: null, // 580/265910 (0.22%)
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
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 201323/265910 (75.71%)
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
					}, // 26540/201323 (13.18%)
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
					}, // 26540/201323 (13.18%)
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
					}, // 37725/201323 (18.74%)
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
					}, // 38434/201323 (19.09%)
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
			}, // 27620/201323 (13.72%)
		}, // 201323/265910 (75.71%)
		previous_visits?: number[], // 9562/265910 (3.60%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 2/56813 (0.00%)
			event_id?: "11aod8o20ixmw"|"11ct9f4lzy09w", // 2/56813 (0.00%)
			height?: number, // 2/56813 (0.00%)
			oembed?: {
				author_name?: string, // 12778/34830 (36.69%)
				author_url?: string, // 12776/34830 (36.68%)
				cache_age?: number, // 1/34830 (0.00%)
				description?: string, // 24658/34830 (70.80%)
				height: number,
				html: string,
				mean_alpha?: number, // 35/34830 (0.10%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 34723/34830 (99.69%)
				thumbnail_url?: string, // 34741/34830 (99.74%)
				thumbnail_width?: number, // 34723/34830 (99.69%)
				title?: string, // 34815/34830 (99.96%)
				type: "video"|"rich",
				url?: string, // 1806/34830 (5.19%)
				version: "1.0",
				width: number,
			}, // 34830/56813 (61.31%)
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
			}, // 21979/56813 (38.69%)
			type?: string, // 34834/56813 (61.31%)
			width?: number, // 2/56813 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 34834/265910 (13.10%)
			height?: number, // 34834/265910 (13.10%)
			media_domain_url?: string, // 34834/265910 (13.10%)
			scrolling?: boolean, // 34834/265910 (13.10%)
			width?: number, // 34834/265910 (13.10%)
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
		subreddit_type: "public"|"restricted"|"user"|"archived",
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial",
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
	}[], // 268394/13305762 (2.02%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 16258/13305762 (0.12%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 16258/13305762 (0.12%)
	embed_url?: null|string, // 16258/13305762 (0.12%)
	events?: [], // 16258/13305762 (0.12%)
	eventsOnRender?: [], // 16258/13305762 (0.12%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 16258/13305762 (0.12%)
	id: string,
	is_blank?: boolean, // 16258/13305762 (0.12%)
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 8734/1154093 (0.76%)
		e: "text"|"emoji",
		t?: string, // 1145359/1154093 (99.24%)
		u?: string, // 8734/1154093 (0.76%)
	}[],
	link_flair_template_id: null|string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 48/1281680 (0.00%)
		oembed?: {
			author_name?: string, // 844218/1123590 (75.14%)
			author_url?: string, // 843886/1123590 (75.11%)
			cache_age?: number, // 333/1123590 (0.03%)
			description?: string, // 482352/1123590 (42.93%)
			height: number,
			html: string,
			marginheight?: number, // 7/1123590 (0.00%)
			marginwidth?: number, // 7/1123590 (0.00%)
			mean_alpha?: number, // 3951/1123590 (0.35%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1122533/1123590 (99.91%)
			thumbnail_url?: string, // 1123145/1123590 (99.96%)
			thumbnail_width?: number, // 1122533/1123590 (99.91%)
			title?: string, // 1123183/1123590 (99.96%)
			type: "video"|"rich",
			url?: string, // 125087/1123590 (11.13%)
			version?: "1.0", // 1123583/1123590 (100.00%)
			width: number,
		}, // 1123590/1281680 (87.67%)
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
		}, // 158042/1281680 (12.33%)
		type?: string, // 1123638/1281680 (87.67%)
	},
	media_embed: {
		content?: string, // 1123638/13305762 (8.44%)
		height?: number, // 1123638/13305762 (8.44%)
		scrolling?: boolean, // 1123638/13305762 (8.44%)
		width?: number, // 1123638/13305762 (8.44%)
	},
	media_metadata?: null, // 108937/13305762 (0.82%)
	media_only: boolean,
	mobile_ad_url?: string, // 16258/13305762 (0.12%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 16258/13305762 (0.12%)
	outbound_link?: {
	}, // 16258/13305762 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"house_only"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 5150446/13305762 (38.71%)
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
				}, // 133972/5150446 (2.60%)
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
				}, // 133972/5150446 (2.60%)
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
				}, // 435169/5150446 (8.45%)
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
				}, // 457387/5150446 (8.88%)
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
		}, // 101511/5150446 (1.97%)
	}, // 5150446/13305762 (38.71%)
	previous_visits?: number[], // 71034/13305762 (0.53%)
	priority_id?: null, // 16258/13305762 (0.12%)
	promoted?: boolean, // 16258/13305762 (0.12%)
	promoted_by?: null, // 16258/13305762 (0.12%)
	promoted_display_name?: null, // 16258/13305762 (0.12%)
	promoted_url?: null, // 16258/13305762 (0.12%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 48/1281680 (0.00%)
		oembed?: {
			author_name?: string, // 844218/1123590 (75.14%)
			author_url?: string, // 843886/1123590 (75.11%)
			cache_age?: number, // 333/1123590 (0.03%)
			description?: string, // 482352/1123590 (42.93%)
			height: number,
			html: string,
			marginheight?: number, // 7/1123590 (0.00%)
			marginwidth?: number, // 7/1123590 (0.00%)
			mean_alpha?: number, // 3951/1123590 (0.35%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1122533/1123590 (99.91%)
			thumbnail_url?: string, // 1123145/1123590 (99.96%)
			thumbnail_width?: number, // 1122533/1123590 (99.91%)
			title?: string, // 1123183/1123590 (99.96%)
			type: "video"|"rich",
			url?: string, // 125087/1123590 (11.13%)
			version?: "1.0", // 1123583/1123590 (100.00%)
			width: number,
		}, // 1123590/1281680 (87.67%)
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
		}, // 158042/1281680 (12.33%)
		type?: string, // 1123638/1281680 (87.67%)
	},
	secure_media_embed: {
		content?: string, // 1123638/13305762 (8.44%)
		height?: number, // 1123638/13305762 (8.44%)
		media_domain_url?: string, // 1123638/13305762 (8.44%)
		scrolling?: boolean, // 1123638/13305762 (8.44%)
		width?: number, // 1123638/13305762 (8.44%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 16258/13305762 (0.12%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 16258/13305762 (0.12%)
	third_party_tracking?: null, // 16258/13305762 (0.12%)
	third_party_tracking_2?: null, // 16258/13305762 (0.12%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
	wls: number|null,
}