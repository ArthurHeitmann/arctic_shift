interface RedditPost {
	adserver_click_url?: null, // 15567/11904498 (0.13%)
	adserver_imp_pixel?: null, // 15567/11904498 (0.13%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 32170/11904498 (0.27%)
	author_created_utc?: number|null, // 9513013/11904498 (79.91%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 33991/436283 (7.79%)
		e: "text"|"emoji",
		t?: string, // 402292/436283 (92.21%)
		u?: string, // 33991/436283 (7.79%)
	}[], // 9513013/11904498 (79.91%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 9513013/11904498 (79.91%)
	author_fullname?: string, // 9513013/11904498 (79.91%)
	author_id?: string|null, // 15567/11904498 (0.13%)
	call_to_action?: "Learn More"|"Sign Up"|"Shop Now"|"Download"|"View More"|"Watch Now"|null, // 94/11904498 (0.00%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|string,
	content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"entertainment"|"videos"|"music"|"diy_and_crafts"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 212859/11904498 (1.79%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 459/211158 (0.22%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 2015/12515 (16.10%)
			e: "text"|"emoji",
			t?: string, // 10500/12515 (83.90%)
			u?: string, // 2015/12515 (16.10%)
		}[], // 187178/211158 (88.64%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 187178/211158 (88.64%)
		author_fullname?: string, // 187178/211158 (88.64%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"entertainment"|"animals"|"art"|"gaming"|"photography"|"drawing_and_painting"|"video_games"|"videos"|"pics_and_gifs"|"food"|"diy"|"memes",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"music"|"entertainment"|"comics"|"videos"|"diy_and_crafts"|"writing")[],
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
			a?: string, // 103/16749 (0.61%)
			e: "text"|"emoji",
			t?: string, // 16646/16749 (99.39%)
			u?: string, // 103/16749 (0.61%)
		}[],
		link_flair_template_id: null|string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 4/43125 (0.01%)
			event_id?: "112d0lcnv7gn0"|"112zldp8yb267"|"113fz8lgiq6ke"|"111f3xvejmnnf"|"113j7pok6jv9v"|"113dxx47acxwe"|"116z1tcab3rl5", // 7/43125 (0.02%)
			height?: number, // 4/43125 (0.01%)
			oembed?: {
				author_name?: string, // 12272/29370 (41.78%)
				author_url?: string, // 12274/29370 (41.79%)
				cache_age?: number, // 4/29370 (0.01%)
				description?: string, // 19131/29370 (65.14%)
				height: number,
				html: string,
				mean_alpha?: number, // 54/29370 (0.18%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 29309/29370 (99.79%)
				thumbnail_url?: string, // 29330/29370 (99.86%)
				thumbnail_width?: number, // 29309/29370 (99.79%)
				title?: string, // 29351/29370 (99.94%)
				type: "video"|"rich",
				url?: string, // 1261/29370 (4.29%)
				version: "1.0",
				width: number,
			}, // 29370/43125 (68.10%)
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
			}, // 13744/43125 (31.87%)
			type?: string, // 29381/43125 (68.13%)
			width?: number, // 4/43125 (0.01%)
		},
		media_embed: {
			content?: string, // 29381/211158 (13.91%)
			height?: number, // 29381/211158 (13.91%)
			scrolling?: boolean, // 29381/211158 (13.91%)
			width?: number, // 29381/211158 (13.91%)
		},
		media_metadata?: null, // 462/211158 (0.22%)
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
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 157839/211158 (74.75%)
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
					}, // 21133/157839 (13.39%)
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
					}, // 21133/157839 (13.39%)
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
					}, // 28763/157839 (18.22%)
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
					}, // 29465/157839 (18.67%)
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
			}, // 21977/157839 (13.92%)
		}, // 157839/211158 (74.75%)
		previous_visits?: number[], // 7407/211158 (3.51%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 4/43125 (0.01%)
			event_id?: "112d0lcnv7gn0"|"112zldp8yb267"|"113fz8lgiq6ke"|"111f3xvejmnnf"|"113j7pok6jv9v"|"113dxx47acxwe"|"116z1tcab3rl5", // 7/43125 (0.02%)
			height?: number, // 4/43125 (0.01%)
			oembed?: {
				author_name?: string, // 12272/29370 (41.78%)
				author_url?: string, // 12274/29370 (41.79%)
				cache_age?: number, // 4/29370 (0.01%)
				description?: string, // 19131/29370 (65.14%)
				height: number,
				html: string,
				mean_alpha?: number, // 54/29370 (0.18%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 29309/29370 (99.79%)
				thumbnail_url?: string, // 29330/29370 (99.86%)
				thumbnail_width?: number, // 29309/29370 (99.79%)
				title?: string, // 29351/29370 (99.94%)
				type: "video"|"rich",
				url?: string, // 1261/29370 (4.29%)
				version: "1.0",
				width: number,
			}, // 29370/43125 (68.10%)
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
			}, // 13744/43125 (31.87%)
			type?: string, // 29381/43125 (68.13%)
			width?: number, // 4/43125 (0.01%)
		},
		secure_media_embed: {
			content?: string, // 29381/211158 (13.91%)
			height?: number, // 29381/211158 (13.91%)
			media_domain_url?: string, // 29381/211158 (13.91%)
			scrolling?: boolean, // 29381/211158 (13.91%)
			width?: number, // 29381/211158 (13.91%)
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
	}[], // 212859/11904498 (1.79%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 15567/11904498 (0.13%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 15567/11904498 (0.13%)
	embed_url?: null|string, // 15567/11904498 (0.13%)
	events?: [], // 15567/11904498 (0.13%)
	eventsOnRender?: [], // 15567/11904498 (0.13%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 15567/11904498 (0.13%)
	id: string,
	is_blank?: boolean, // 15567/11904498 (0.13%)
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 4749/1033359 (0.46%)
		e: "text"|"emoji",
		t?: string, // 1028610/1033359 (99.54%)
		u?: string, // 4749/1033359 (0.46%)
	}[],
	link_flair_template_id: null|string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 79/1173131 (0.01%)
		oembed?: {
			author_name?: string, // 770399/1041637 (73.96%)
			author_url?: string, // 770096/1041637 (73.93%)
			cache_age?: number, // 318/1041637 (0.03%)
			description?: string, // 447228/1041637 (42.94%)
			height: number,
			html: string,
			marginheight?: number, // 5/1041637 (0.00%)
			marginwidth?: number, // 5/1041637 (0.00%)
			mean_alpha?: number, // 3832/1041637 (0.37%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1040603/1041637 (99.90%)
			thumbnail_url?: string, // 1041246/1041637 (99.96%)
			thumbnail_width?: number, // 1040603/1041637 (99.90%)
			title?: string, // 1041198/1041637 (99.96%)
			type: "video"|"rich",
			url?: string, // 106427/1041637 (10.22%)
			version?: "1.0", // 1041632/1041637 (100.00%)
			width: number,
		}, // 1041637/1173131 (88.79%)
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
		}, // 131415/1173131 (11.20%)
		type?: string, // 1041716/1173131 (88.80%)
	},
	media_embed: {
		content?: string, // 1041716/11904498 (8.75%)
		height?: number, // 1041716/11904498 (8.75%)
		scrolling?: boolean, // 1041716/11904498 (8.75%)
		width?: number, // 1041716/11904498 (8.75%)
	},
	media_metadata?: null, // 64998/11904498 (0.55%)
	media_only: boolean,
	mobile_ad_url?: string, // 15567/11904498 (0.13%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 15567/11904498 (0.13%)
	outbound_link?: {
	}, // 15567/11904498 (0.13%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"house_only"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "link"|"image"|"rich:video"|"self"|"hosted:video"|"video", // 4603814/11904498 (38.67%)
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
				}, // 117217/4603814 (2.55%)
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
				}, // 117217/4603814 (2.55%)
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
				}, // 385869/4603814 (8.38%)
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
				}, // 407692/4603814 (8.86%)
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
		}, // 92365/4603814 (2.01%)
	}, // 4603814/11904498 (38.67%)
	previous_visits?: number[], // 60019/11904498 (0.50%)
	priority_id?: null, // 15567/11904498 (0.13%)
	promoted?: boolean, // 15567/11904498 (0.13%)
	promoted_by?: null, // 15567/11904498 (0.13%)
	promoted_display_name?: null, // 15567/11904498 (0.13%)
	promoted_url?: null, // 15567/11904498 (0.13%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 79/1173131 (0.01%)
		oembed?: {
			author_name?: string, // 770399/1041637 (73.96%)
			author_url?: string, // 770096/1041637 (73.93%)
			cache_age?: number, // 318/1041637 (0.03%)
			description?: string, // 447228/1041637 (42.94%)
			height: number,
			html: string,
			marginheight?: number, // 5/1041637 (0.00%)
			marginwidth?: number, // 5/1041637 (0.00%)
			mean_alpha?: number, // 3832/1041637 (0.37%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1040603/1041637 (99.90%)
			thumbnail_url?: string, // 1041246/1041637 (99.96%)
			thumbnail_width?: number, // 1040603/1041637 (99.90%)
			title?: string, // 1041198/1041637 (99.96%)
			type: "video"|"rich",
			url?: string, // 106427/1041637 (10.22%)
			version?: "1.0", // 1041632/1041637 (100.00%)
			width: number,
		}, // 1041637/1173131 (88.79%)
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
		}, // 131415/1173131 (11.20%)
		type?: string, // 1041716/1173131 (88.80%)
	},
	secure_media_embed: {
		content?: string, // 1041716/11904498 (8.75%)
		height?: number, // 1041716/11904498 (8.75%)
		media_domain_url?: string, // 1041716/11904498 (8.75%)
		scrolling?: boolean, // 1041716/11904498 (8.75%)
		width?: number, // 1041716/11904498 (8.75%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 15567/11904498 (0.13%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 15567/11904498 (0.13%)
	third_party_tracking?: null, // 15567/11904498 (0.13%)
	third_party_tracking_2?: null, // 15567/11904498 (0.13%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"house_only"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
	wls: number|null,
}