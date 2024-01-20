interface RedditPost {
	adserver_click_url?: null, // 22460/21695713 (0.10%)
	adserver_imp_pixel?: null, // 22460/21695713 (0.10%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION"|"PREMIUM",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null|number,
		giver_coin_reward: null|number,
		icon_format: null|"JPG"|"PNG"|"APNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	}[],
	allow_live_comments: boolean,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 67280/21695713 (0.31%)
	author_created_utc?: number|null, // 16981897/21695713 (78.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 459126/1461829 (31.41%)
		e: "text"|"emoji",
		t?: string, // 1002703/1461829 (68.59%)
		u?: string, // 459126/1461829 (31.41%)
	}[], // 16981897/21695713 (78.27%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 16981897/21695713 (78.27%)
	author_fullname?: string, // 16981897/21695713 (78.27%)
	author_id?: string|null, // 22460/21695713 (0.10%)
	author_patreon_flair?: boolean, // 16981897/21695713 (78.27%)
	author_premium?: boolean, // 16981897/21695713 (78.27%)
	awarders: [],
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Play Now"|"View More"|"Install"|"Watch Now"|"Apply Now"|"Contact Us"|"Get Showtimes"|"Get a Quote"|"See Menu"|"", // 19795/21695713 (0.09%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"photography"|"videos"|"animals"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"memes"|""|"food"|"funny",
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
	}[], // 4172/21695713 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 881161/21695713 (4.06%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION"|"PREMIUM",
			award_type: "global"|"community"|"moderator",
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number,
			days_of_premium: number,
			description: string,
			end_date: null|number,
			giver_coin_reward: null|number,
			icon_format: null|"JPG"|"PNG"|"APNG",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: string,
			penny_donate: null|number,
			penny_price: null|number,
			resized_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			start_date: null|number,
			subreddit_coin_reward: number,
			subreddit_id: null|string,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3107/857365 (0.36%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 24110/77620 (31.06%)
			e: "text"|"emoji",
			t?: string, // 53510/77620 (68.94%)
			u?: string, // 24110/77620 (31.06%)
		}[], // 736416/857365 (85.89%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 736416/857365 (85.89%)
		author_fullname?: string, // 736416/857365 (85.89%)
		author_patreon_flair?: boolean, // 736416/857365 (85.89%)
		author_premium?: boolean, // 736416/857365 (85.89%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"memes"|""|"food"|"writing"|"funny",
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
		}[], // 734/857365 (0.09%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 187/857365 (0.02%)
		event_is_live?: boolean, // 187/857365 (0.02%)
		event_start?: number, // 187/857365 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 80352/857365 (9.37%)
			gid_2?: number, // 53316/857365 (6.22%)
			gid_3?: number, // 15298/857365 (1.78%)
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
			a?: string, // 3688/95304 (3.87%)
			e: "text"|"emoji",
			t?: string, // 91616/95304 (96.13%)
			u?: string, // 3688/95304 (3.87%)
		}[],
		link_flair_template_id?: string, // 174718/857365 (20.38%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 164000/176797 (92.76%)
				author_url?: string, // 28675/176797 (16.22%)
				cache_age?: number, // 5715/176797 (3.23%)
				description?: string, // 148580/176797 (84.04%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 29/176797 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 169753/176797 (96.02%)
				thumbnail_url?: string, // 170785/176797 (96.60%)
				thumbnail_width?: number, // 169753/176797 (96.02%)
				title?: string, // 170763/176797 (96.59%)
				type: "video"|"rich",
				url?: string, // 11050/176797 (6.25%)
				version: "1.0",
				width: number,
			}, // 176797/271923 (65.02%)
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
			}, // 95126/271923 (34.98%)
			type?: string, // 176797/271923 (65.02%)
		},
		media_embed: {
			content?: string, // 176797/857365 (20.62%)
			height?: number, // 176797/857365 (20.62%)
			scrolling?: boolean, // 176797/857365 (20.62%)
			width?: number, // 176797/857365 (20.62%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 515/14602 (3.53%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 14561/14602 (99.72%)
				hlsUrl?: string, // 515/14602 (3.53%)
				id?: string, // 14561/14602 (99.72%)
				isGif?: boolean, // 515/14602 (3.53%)
				m?: "image/jpg"|"image/png"|"image/gif", // 14046/14602 (96.19%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 14046/14602 (96.19%)
				s?: {
					gif?: string, // 143/14046 (1.02%)
					mp4?: string, // 143/14046 (1.02%)
					u?: string, // 13903/14046 (98.98%)
					x: number,
					y: number,
				}, // 14046/14602 (96.19%)
				status: "valid"|"failed",
				x?: number, // 515/14602 (3.53%)
				y?: number, // 515/14602 (3.53%)
			},
		}|null, // 5942/857365 (0.69%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 634668/857365 (74.03%)
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
					}, // 136376/634668 (21.49%)
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
					}, // 136376/634668 (21.49%)
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
					}, // 239033/634668 (37.66%)
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
					}, // 240732/634668 (37.93%)
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
			}, // 129240/634668 (20.36%)
		}, // 634668/857365 (74.03%)
		previous_visits?: number[], // 1/857365 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"author"|"anti_evil_ops"|"content_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 164000/176797 (92.76%)
				author_url?: string, // 28675/176797 (16.22%)
				cache_age?: number, // 5715/176797 (3.23%)
				description?: string, // 148580/176797 (84.04%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 29/176797 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 169753/176797 (96.02%)
				thumbnail_url?: string, // 170785/176797 (96.60%)
				thumbnail_width?: number, // 169753/176797 (96.02%)
				title?: string, // 170763/176797 (96.59%)
				type: "video"|"rich",
				url?: string, // 11050/176797 (6.25%)
				version: "1.0",
				width: number,
			}, // 176797/271923 (65.02%)
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
			}, // 95126/271923 (34.98%)
			type?: string, // 176797/271923 (65.02%)
		},
		secure_media_embed: {
			content?: string, // 176797/857365 (20.62%)
			height?: number, // 176797/857365 (20.62%)
			media_domain_url?: string, // 176797/857365 (20.62%)
			scrolling?: boolean, // 176797/857365 (20.62%)
			width?: number, // 176797/857365 (20.62%)
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
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		total_awards_received: number,
		treatment_tags?: [], // 831680/857365 (97.00%)
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 881161/21695713 (4.06%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 22460/21695713 (0.10%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 22460/21695713 (0.10%)
	embed_url?: null|string, // 22460/21695713 (0.10%)
	event_end?: number, // 1847/21695713 (0.01%)
	event_is_live?: boolean, // 1847/21695713 (0.01%)
	event_start?: number, // 1847/21695713 (0.01%)
	events?: [], // 22460/21695713 (0.10%)
	eventsOnRender?: [], // 22460/21695713 (0.10%)
	gilded: number,
	gildings: {
		gid_1?: number, // 50778/21695713 (0.23%)
		gid_2?: number, // 28143/21695713 (0.13%)
		gid_3?: number, // 5762/21695713 (0.03%)
	},
	hidden: boolean,
	href_url?: string, // 22460/21695713 (0.10%)
	id: string,
	is_blank?: boolean, // 22460/21695713 (0.10%)
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
		a?: string, // 91295/2880308 (3.17%)
		e: "text"|"emoji",
		t?: string, // 2789013/2880308 (96.83%)
		u?: string, // 91295/2880308 (3.17%)
	}[],
	link_flair_template_id?: string, // 4044632/21695713 (18.64%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 1253506/1414541 (88.62%)
			author_url?: string, // 1040399/1414541 (73.55%)
			cache_age?: number, // 158524/1414541 (11.21%)
			description?: string, // 428152/1414541 (30.27%)
			height?: number|null, // 1414533/1414541 (100.00%)
			html?: string, // 1414533/1414541 (100.00%)
			marginheight?: number, // 40/1414541 (0.00%)
			marginwidth?: number, // 40/1414541 (0.00%)
			mean_alpha?: number, // 2232/1414541 (0.16%)
			provider_name?: string, // 1414533/1414541 (100.00%)
			provider_url?: string, // 1414533/1414541 (100.00%)
			thumbnail_height?: number, // 1235119/1414541 (87.32%)
			thumbnail_url?: string, // 1252912/1414541 (88.57%)
			thumbnail_width?: number, // 1235119/1414541 (87.32%)
			title?: string, // 1252561/1414541 (88.55%)
			type?: "video"|"rich", // 1414533/1414541 (100.00%)
			url?: string, // 280889/1414541 (19.86%)
			version?: "1.0", // 1414493/1414541 (100.00%)
			width?: number, // 1414533/1414541 (100.00%)
		}, // 1414541/1830246 (77.29%)
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
		}, // 415705/1830246 (22.71%)
		type?: string, // 1414541/1830246 (77.29%)
	},
	media_embed: {
		content?: string|null, // 1414541/21695713 (6.52%)
		height?: number, // 1414541/21695713 (6.52%)
		scrolling?: boolean, // 1414541/21695713 (6.52%)
		width?: number, // 1414541/21695713 (6.52%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 6849/240304 (2.85%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 238398/240304 (99.21%)
			hlsUrl?: string, // 6849/240304 (2.85%)
			id?: string, // 238398/240304 (99.21%)
			isGif?: boolean, // 6849/240304 (2.85%)
			m?: "image/jpg"|"image/png"|"image/gif", // 231549/240304 (96.36%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 231549/240304 (96.36%)
			s?: {
				gif?: string, // 1811/231549 (0.78%)
				mp4?: string, // 1811/231549 (0.78%)
				u?: string, // 229738/231549 (99.22%)
				x: number,
				y: number,
			}, // 231549/240304 (96.36%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 6849/240304 (2.85%)
			y?: number, // 6849/240304 (2.85%)
		},
	}|null, // 288016/21695713 (1.33%)
	media_only: boolean,
	mobile_ad_url?: string, // 22460/21695713 (0.10%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 22460/21695713 (0.10%)
	outbound_link?: {
	}, // 22460/21695713 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7427463/21695713 (34.23%)
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
				}, // 306462/7427463 (4.13%)
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
				}, // 306462/7427463 (4.13%)
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
				}, // 1077967/7427463 (14.51%)
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
				}, // 1113145/7427463 (14.99%)
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
		}, // 267535/7427463 (3.60%)
	}, // 7427463/21695713 (34.23%)
	priority_id?: null, // 22460/21695713 (0.10%)
	promoted?: boolean, // 22460/21695713 (0.10%)
	promoted_by?: null, // 22460/21695713 (0.10%)
	promoted_display_name?: null, // 22460/21695713 (0.10%)
	promoted_url?: null, // 22460/21695713 (0.10%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"reddit"|"moderator"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"automod_filtered"|"community_ops",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 1/21695713 (0.00%)
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 1253506/1414541 (88.62%)
			author_url?: string, // 1040399/1414541 (73.55%)
			cache_age?: number, // 158524/1414541 (11.21%)
			description?: string, // 428152/1414541 (30.27%)
			height?: number|null, // 1414533/1414541 (100.00%)
			html?: string, // 1414533/1414541 (100.00%)
			marginheight?: number, // 40/1414541 (0.00%)
			marginwidth?: number, // 40/1414541 (0.00%)
			mean_alpha?: number, // 2232/1414541 (0.16%)
			provider_name?: string, // 1414533/1414541 (100.00%)
			provider_url?: string, // 1414533/1414541 (100.00%)
			thumbnail_height?: number, // 1235119/1414541 (87.32%)
			thumbnail_url?: string, // 1252912/1414541 (88.57%)
			thumbnail_width?: number, // 1235119/1414541 (87.32%)
			title?: string, // 1252561/1414541 (88.55%)
			type?: "video"|"rich", // 1414533/1414541 (100.00%)
			url?: string, // 280889/1414541 (19.86%)
			version?: "1.0", // 1414493/1414541 (100.00%)
			width?: number, // 1414533/1414541 (100.00%)
		}, // 1414541/1830246 (77.29%)
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
		}, // 415705/1830246 (22.71%)
		type?: string, // 1414541/1830246 (77.29%)
	},
	secure_media_embed: {
		content?: string|null, // 1414541/21695713 (6.52%)
		height?: number, // 1414541/21695713 (6.52%)
		media_domain_url?: string, // 1414541/21695713 (6.52%)
		scrolling?: boolean, // 1414541/21695713 (6.52%)
		width?: number, // 1414541/21695713 (6.52%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 22460/21695713 (0.10%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"gold_restricted"|"archived"|"private",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: string[], // 22460/21695713 (0.10%)
	third_party_tracking?: null, // 22460/21695713 (0.10%)
	third_party_tracking_2?: null, // 22460/21695713 (0.10%)
	thumbnail: string,
	thumbnail_height?: number|null, // 21694918/21695713 (100.00%)
	thumbnail_width?: number|null, // 21694918/21695713 (100.00%)
	title: string,
	total_awards_received: number,
	treatment_tags?: [], // 20994366/21695713 (96.77%)
	url: string,
	whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}