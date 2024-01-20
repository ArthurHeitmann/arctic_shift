interface RedditPost {
	adserver_click_url?: null, // 19047/21927461 (0.09%)
	adserver_imp_pixel?: null, // 19047/21927461 (0.09%)
	all_awardings: {
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		name: string,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	}[],
	allow_live_comments: boolean,
	archived?: boolean, // 19615299/21927461 (89.46%)
	author: string,
	author_cakeday?: boolean, // 47029/21927461 (0.21%)
	author_created_utc?: number|null, // 21927264/21927461 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 411643/1277024 (32.23%)
		e: "text"|"emoji",
		t?: string, // 865381/1277024 (67.77%)
		u?: string, // 411643/1277024 (32.23%)
	}[], // 18646006/21927461 (85.03%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 18646006/21927461 (85.03%)
	author_fullname?: string|null, // 21927264/21927461 (100.00%)
	author_id?: string|null, // 19047/21927461 (0.09%)
	author_patreon_flair?: boolean, // 18646006/21927461 (85.03%)
	call_to_action?: "Learn More"|"Sign Up"|"Shop Now"|"Play Now"|"View More"|"Install"|"Download"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|"", // 16541/21927461 (0.08%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"videos"|"photography"|"entertainment"|"animals"|"music"|"diy_and_crafts"|"writing"|"memes"|""|"food"|"funny",
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description: string|null,
		display_layout: null|"TIMELINE"|"GALLERY",
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		sr_detail?: {
			banner_img: string,
			banner_size: number[],
			community_icon: string,
			icon_img: string,
			icon_size: number[],
			key_color: "#46d160",
			mod_permissions: [],
			name: "t5_2qs08",
			over_18: boolean,
			primary_color: "#bbbdbf",
			sr: "NASCAR",
			sr_display_name_prefixed: "r/NASCAR",
			subreddit_type: "public",
			subscribers: number,
			title: "NASCAR on Reddit: News from the oval",
			url: "/r/NASCAR/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads",
		}, // 1/4625 (0.02%)
		subreddit_id: string,
		title: string,
	}[], // 4625/21927461 (0.02%)
	content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 843789/21927461 (3.85%)
	crosspost_parent_list?: {
		all_awardings: {
			award_type: "global"|"community"|"moderator",
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number,
			days_of_premium: number,
			description: string,
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			name: string,
			resized_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			subreddit_coin_reward: number,
			subreddit_id: null|string,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 2019/840575 (0.24%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 18610/55820 (33.34%)
			e: "text"|"emoji",
			t?: string, // 37210/55820 (66.66%)
			u?: string, // 18610/55820 (33.34%)
		}[], // 792798/840575 (94.32%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 792798/840575 (94.32%)
		author_fullname?: string, // 792798/840575 (94.32%)
		author_patreon_flair?: boolean, // 792798/840575 (94.32%)
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Shop Now", // 1/840575 (0.00%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"memes"|"videos"|"diy_and_crafts"|"music"|"",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string|null,
			display_layout: null|"GALLERY"|"TIMELINE",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 403/840575 (0.05%)
		content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 219/840575 (0.03%)
		event_is_live?: boolean, // 219/840575 (0.03%)
		event_start?: number, // 219/840575 (0.03%)
		gilded: number,
		gildings: {
			gid_1?: number, // 84148/840575 (10.01%)
			gid_2?: number, // 55410/840575 (6.59%)
			gid_3?: number, // 14532/840575 (1.73%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 2374/80783 (2.94%)
			e: "text"|"emoji",
			t?: string, // 78409/80783 (97.06%)
			u?: string, // 2374/80783 (2.94%)
		}[],
		link_flair_template_id?: string, // 159492/840575 (18.97%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 5/247034 (0.00%)
			event_id?: "133sixros7tu5", // 1/247034 (0.00%)
			height?: number, // 5/247034 (0.00%)
			oembed?: {
				author_name?: string, // 136879/162926 (84.01%)
				author_url?: string, // 27031/162926 (16.59%)
				cache_age?: number, // 5249/162926 (3.22%)
				description?: string, // 138170/162926 (84.81%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 31/162926 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 156396/162926 (95.99%)
				thumbnail_url?: string, // 157433/162926 (96.63%)
				thumbnail_width?: number, // 156396/162926 (95.99%)
				title?: string, // 157391/162926 (96.60%)
				type: "video"|"rich",
				url?: string, // 12520/162926 (7.68%)
				version: "1.0",
				width: number,
			}, // 162926/247034 (65.95%)
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
			}, // 84102/247034 (34.04%)
			type?: string, // 162932/247034 (65.96%)
			width?: number, // 5/247034 (0.00%)
		},
		media_embed: {
			content?: string, // 162932/840575 (19.38%)
			height?: number, // 162932/840575 (19.38%)
			scrolling?: boolean, // 162932/840575 (19.38%)
			width?: number, // 162932/840575 (19.38%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 259/11953 (2.17%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 11935/11953 (99.85%)
				hlsUrl?: string, // 259/11953 (2.17%)
				id?: string, // 11935/11953 (99.85%)
				isGif?: boolean, // 259/11953 (2.17%)
				m?: "image/jpg"|"image/png"|"image/gif", // 11676/11953 (97.68%)
				s?: {
					gif?: string, // 118/11676 (1.01%)
					mp4?: string, // 118/11676 (1.01%)
					u?: string, // 11558/11676 (98.99%)
					x: number,
					y: number,
				}, // 11676/11953 (97.68%)
				status: "valid"|"failed",
				x?: number, // 259/11953 (2.17%)
				y?: number, // 259/11953 (2.17%)
			},
		}|null, // 6231/840575 (0.74%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 678550/840575 (80.72%)
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
					}, // 138744/678550 (20.45%)
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
					}, // 138744/678550 (20.45%)
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
					}, // 267051/678550 (39.36%)
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
					}, // 268895/678550 (39.63%)
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
			}, // 142267/678550 (20.97%)
		}, // 678550/840575 (80.72%)
		previous_visits?: number[], // 1/840575 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 5/247034 (0.00%)
			event_id?: "133sixros7tu5", // 1/247034 (0.00%)
			height?: number, // 5/247034 (0.00%)
			oembed?: {
				author_name?: string, // 136879/162926 (84.01%)
				author_url?: string, // 27031/162926 (16.59%)
				cache_age?: number, // 5249/162926 (3.22%)
				description?: string, // 138170/162926 (84.81%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 31/162926 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 156396/162926 (95.99%)
				thumbnail_url?: string, // 157433/162926 (96.63%)
				thumbnail_width?: number, // 156396/162926 (95.99%)
				title?: string, // 157391/162926 (96.60%)
				type: "video"|"rich",
				url?: string, // 12520/162926 (7.68%)
				version: "1.0",
				width: number,
			}, // 162926/247034 (65.95%)
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
			}, // 84102/247034 (34.04%)
			type?: string, // 162932/247034 (65.96%)
			width?: number, // 5/247034 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 162932/840575 (19.38%)
			height?: number, // 162932/840575 (19.38%)
			media_domain_url?: string, // 162932/840575 (19.38%)
			scrolling?: boolean, // 162932/840575 (19.38%)
			width?: number, // 162932/840575 (19.38%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		steward_reports?: [], // 50/840575 (0.01%)
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"random"|"live",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		total_awards_received: number,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 843789/21927461 (3.85%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 19047/21927461 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 19047/21927461 (0.09%)
	embed_url?: null|string, // 19047/21927461 (0.09%)
	event_end?: number, // 1514/21927461 (0.01%)
	event_is_live?: boolean, // 1514/21927461 (0.01%)
	event_start?: number, // 1514/21927461 (0.01%)
	events?: [], // 19047/21927461 (0.09%)
	eventsOnRender?: [], // 19047/21927461 (0.09%)
	gilded: number,
	gildings: {
		gid_1?: number, // 49152/21927461 (0.22%)
		gid_2?: number, // 27744/21927461 (0.13%)
		gid_3?: number, // 5031/21927461 (0.02%)
	},
	hidden: boolean,
	href_url?: string, // 19047/21927461 (0.09%)
	id: string,
	is_blank?: boolean, // 19047/21927461 (0.09%)
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 74535/2569131 (2.90%)
		e: "text"|"emoji",
		t?: string, // 2494596/2569131 (97.10%)
		u?: string, // 74535/2569131 (2.90%)
	}[],
	link_flair_template_id?: string, // 3937661/21927461 (17.96%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 1275209/1451792 (87.84%)
			author_url?: string, // 1081182/1451792 (74.47%)
			cache_age?: number, // 151314/1451792 (10.42%)
			description?: string, // 556397/1451792 (38.32%)
			height?: number|null, // 1451787/1451792 (100.00%)
			html?: string, // 1451787/1451792 (100.00%)
			mean_alpha?: number, // 2080/1451792 (0.14%)
			provider_name?: string, // 1451787/1451792 (100.00%)
			provider_url?: string, // 1451787/1451792 (100.00%)
			thumbnail_height?: number, // 1276636/1451792 (87.94%)
			thumbnail_url?: string, // 1296872/1451792 (89.33%)
			thumbnail_width?: number, // 1276636/1451792 (87.94%)
			title?: string, // 1296598/1451792 (89.31%)
			type?: "video"|"rich", // 1451787/1451792 (100.00%)
			url?: string, // 401275/1451792 (27.64%)
			version?: "1.0", // 1451787/1451792 (100.00%)
			width?: number, // 1451787/1451792 (100.00%)
		}, // 1451792/1862800 (77.94%)
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
		}, // 411008/1862800 (22.06%)
		type?: string, // 1451792/1862800 (77.94%)
	},
	media_embed: {
		content?: string|null, // 1451792/21927461 (6.62%)
		height?: number, // 1451792/21927461 (6.62%)
		scrolling?: boolean, // 1451792/21927461 (6.62%)
		width?: number, // 1451792/21927461 (6.62%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 7029/239096 (2.94%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 237551/239096 (99.35%)
			hlsUrl?: string, // 7029/239096 (2.94%)
			id?: string, // 237551/239096 (99.35%)
			isGif?: boolean, // 7029/239096 (2.94%)
			m?: "image/jpg"|"image/png"|"image/gif", // 230522/239096 (96.41%)
			s?: {
				gif?: string, // 1311/230522 (0.57%)
				mp4?: string, // 1311/230522 (0.57%)
				u?: string, // 229211/230522 (99.43%)
				x: number,
				y: number,
			}, // 230522/239096 (96.41%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 7029/239096 (2.94%)
			y?: number, // 7029/239096 (2.94%)
		},
	}|null, // 231929/21927461 (1.06%)
	media_only: boolean,
	mobile_ad_url?: string, // 19047/21927461 (0.09%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 19047/21927461 (0.09%)
	outbound_link?: {
	}, // 19047/21927461 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 8538147/21927461 (38.94%)
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
				}, // 318641/8538147 (3.73%)
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
				}, // 318641/8538147 (3.73%)
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
				}, // 1279001/8538147 (14.98%)
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
				}, // 1312632/8538147 (15.37%)
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
		}, // 286324/8538147 (3.35%)
	}, // 8538147/21927461 (38.94%)
	priority_id?: null, // 19047/21927461 (0.09%)
	promoted?: boolean, // 19047/21927461 (0.09%)
	promoted_by?: null, // 19047/21927461 (0.09%)
	promoted_display_name?: null, // 19047/21927461 (0.09%)
	promoted_url?: null, // 19047/21927461 (0.09%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 1275209/1451792 (87.84%)
			author_url?: string, // 1081182/1451792 (74.47%)
			cache_age?: number, // 151314/1451792 (10.42%)
			description?: string, // 556397/1451792 (38.32%)
			height?: number|null, // 1451787/1451792 (100.00%)
			html?: string, // 1451787/1451792 (100.00%)
			mean_alpha?: number, // 2080/1451792 (0.14%)
			provider_name?: string, // 1451787/1451792 (100.00%)
			provider_url?: string, // 1451787/1451792 (100.00%)
			thumbnail_height?: number, // 1276636/1451792 (87.94%)
			thumbnail_url?: string, // 1296872/1451792 (89.33%)
			thumbnail_width?: number, // 1276636/1451792 (87.94%)
			title?: string, // 1296598/1451792 (89.31%)
			type?: "video"|"rich", // 1451787/1451792 (100.00%)
			url?: string, // 401275/1451792 (27.64%)
			version?: "1.0", // 1451787/1451792 (100.00%)
			width?: number, // 1451787/1451792 (100.00%)
		}, // 1451792/1862800 (77.94%)
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
		}, // 411008/1862800 (22.06%)
		type?: string, // 1451792/1862800 (77.94%)
	},
	secure_media_embed: {
		content?: string|null, // 1451792/21927461 (6.62%)
		height?: number, // 1451792/21927461 (6.62%)
		media_domain_url?: string, // 1451792/21927461 (6.62%)
		scrolling?: boolean, // 1451792/21927461 (6.62%)
		width?: number, // 1451792/21927461 (6.62%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 19047/21927461 (0.09%)
	spoiler: boolean,
	steward_reports?: [], // 911/21927461 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted",
	suggested_sort: null|"qa"|"top"|"confidence"|"new"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[], // 19047/21927461 (0.09%)
	third_party_tracking?: null, // 19047/21927461 (0.09%)
	third_party_tracking_2?: null, // 19047/21927461 (0.09%)
	thumbnail: string,
	thumbnail_height?: number|null, // 21927002/21927461 (100.00%)
	thumbnail_width?: number|null, // 21927002/21927461 (100.00%)
	title: string,
	total_awards_received: number,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}