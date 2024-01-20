interface RedditPost {
	adserver_click_url?: null, // 23561/28659441 (0.08%)
	adserver_imp_pixel?: null, // 23561/28659441 (0.08%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"GROUP"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null|number,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG"|"JPG",
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
		resized_static_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "APNG"|"PNG",
					height: number,
					url: string,
					width: number,
				},
				resized_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				resized_static_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		},
	}[],
	allow_live_comments: boolean,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 100857/28659441 (0.35%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 799257/2137742 (37.39%)
		e: "text"|"emoji",
		t?: string, // 1338485/2137742 (62.61%)
		u?: string, // 799257/2137742 (37.39%)
	}[], // 20476077/28659441 (71.45%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 20476077/28659441 (71.45%)
	author_fullname?: string, // 20476077/28659441 (71.45%)
	author_id?: string|null, // 23561/28659441 (0.08%)
	author_patreon_flair?: boolean, // 20476077/28659441 (71.45%)
	author_premium?: boolean, // 20476077/28659441 (71.45%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"View More"|"Play Now"|"Watch Now"|"Install"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|"", // 21449/28659441 (0.07%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"diy_and_crafts"|""|"videos"|"food"|"memes"|"writing"|"music"|"funny",
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
	}[], // 6120/28659441 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1747444/28659441 (6.10%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"GROUP"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
			award_type: "global"|"community"|"moderator",
			awardings_required_to_grant_benefits: null|number,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number,
			days_of_premium: number,
			description: string,
			end_date: null|number,
			giver_coin_reward: null|number,
			icon_format: null|"PNG"|"APNG"|"JPG",
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
			resized_static_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			start_date: null|number,
			static_icon_height: number,
			static_icon_url: string,
			static_icon_width: number,
			subreddit_coin_reward: number,
			subreddit_id: null|string,
			tiers_by_required_awardings: null|{
				[key: string]: {
					awardings_required: number,
					icon: {
						format: "APNG"|"PNG",
						height: number,
						url: string,
						width: number,
					},
					resized_icons: {
						height: number,
						url: string,
						width: number,
					}[],
					resized_static_icons: {
						height: number,
						url: string,
						width: number,
					}[],
					static_icon: {
						format: null,
						height: number,
						url: string,
						width: number,
					},
				},
			},
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 5248/1155495 (0.45%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 44592/116423 (38.30%)
			e: "text"|"emoji",
			t?: string, // 71831/116423 (61.70%)
			u?: string, // 44592/116423 (38.30%)
		}[], // 952963/1155495 (82.47%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 952963/1155495 (82.47%)
		author_fullname?: string, // 952963/1155495 (82.47%)
		author_patreon_flair?: boolean, // 952963/1155495 (82.47%)
		author_premium?: boolean, // 952963/1155495 (82.47%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"animals"|"entertainment"|"photography"|"diy_and_crafts"|""|"gaming"|"food"|"videos"|"memes",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string,
			display_layout: null|"TIMELINE"|"GALLERY",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 1098/1155495 (0.10%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 181/1155495 (0.02%)
		event_is_live?: boolean, // 181/1155495 (0.02%)
		event_start?: number, // 181/1155495 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 16993/133953 (12.69%)
				id: number,
				media_id: string,
				outbound_url?: string, // 5495/133953 (4.10%)
			}[],
		}|null, // 42744/1155495 (3.70%)
		gilded: number,
		gildings: {
			gid_1?: number, // 260714/1155495 (22.56%)
			gid_2?: number, // 53008/1155495 (4.59%)
			gid_3?: number, // 14139/1155495 (1.22%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 42744/1155495 (3.70%)
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
			a?: string, // 13272/161244 (8.23%)
			e: "text"|"emoji",
			t?: string, // 147972/161244 (91.77%)
			u?: string, // 13272/161244 (8.23%)
		}[],
		link_flair_template_id?: string, // 295686/1155495 (25.59%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "15rrr5d5nu8dq", // 2/337222 (0.00%)
			oembed?: {
				author_name?: string, // 54378/228691 (23.78%)
				author_url?: string, // 40150/228691 (17.56%)
				cache_age?: number, // 5583/228691 (2.44%)
				description?: string, // 22218/228691 (9.72%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 62/228691 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 56002/228691 (24.49%)
				thumbnail_url?: string, // 56071/228691 (24.52%)
				thumbnail_width?: number, // 56002/228691 (24.49%)
				title?: string, // 223027/228691 (97.52%)
				type: "video"|"rich",
				url?: string, // 10515/228691 (4.60%)
				version: "1.0",
				width: number,
			}, // 228691/337222 (67.82%)
			reddit_video?: {
				dash_url?: string, // 108524/108529 (100.00%)
				duration?: number, // 108524/108529 (100.00%)
				fallback_url?: string, // 108524/108529 (100.00%)
				height?: number, // 108524/108529 (100.00%)
				hls_url?: string, // 108524/108529 (100.00%)
				is_gif?: boolean, // 108524/108529 (100.00%)
				scrubber_media_url?: string, // 108524/108529 (100.00%)
				transcoding_message?: string, // 5/108529 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 108524/108529 (100.00%)
			}, // 108529/337222 (32.18%)
			type?: string, // 228693/337222 (67.82%)
		},
		media_embed: {
			content?: string, // 228693/1155495 (19.79%)
			height?: number, // 228693/1155495 (19.79%)
			scrolling?: boolean, // 228693/1155495 (19.79%)
			width?: number, // 228693/1155495 (19.79%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 714/149295 (0.48%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 149132/149295 (99.89%)
				hlsUrl?: string, // 714/149295 (0.48%)
				id?: string, // 149132/149295 (99.89%)
				isGif?: boolean, // 714/149295 (0.48%)
				m?: "image/jpg"|"image/png"|"image/gif", // 148418/149295 (99.41%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 59079/149295 (39.57%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 148418/149295 (99.41%)
				s?: {
					gif?: string, // 1139/148418 (0.77%)
					mp4?: string, // 1139/148418 (0.77%)
					u?: string, // 147279/148418 (99.23%)
					x: number,
					y: number,
				}, // 148418/149295 (99.41%)
				status: "valid"|"failed",
				x?: number, // 714/149295 (0.48%)
				y?: number, // 714/149295 (0.48%)
			},
		}|null, // 49634/1155495 (4.30%)
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
		parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 2/7374 (0.03%)
				vote_count: number,
			}[],
			resolved_option_id: null|"3748820",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2143/1155495 (0.19%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 795681/1155495 (68.86%)
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
					}, // 19356/795681 (2.43%)
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
					}, // 19356/795681 (2.43%)
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
					}, // 370148/795681 (46.52%)
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
					}, // 372227/795681 (46.78%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 83666/158852 (52.67%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 158852/795681 (19.96%)
		}, // 795681/1155495 (68.86%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 186/1155495 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "15rrr5d5nu8dq", // 2/337222 (0.00%)
			oembed?: {
				author_name?: string, // 54378/228691 (23.78%)
				author_url?: string, // 40150/228691 (17.56%)
				cache_age?: number, // 5583/228691 (2.44%)
				description?: string, // 22218/228691 (9.72%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 62/228691 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 56002/228691 (24.49%)
				thumbnail_url?: string, // 56071/228691 (24.52%)
				thumbnail_width?: number, // 56002/228691 (24.49%)
				title?: string, // 223027/228691 (97.52%)
				type: "video"|"rich",
				url?: string, // 10515/228691 (4.60%)
				version: "1.0",
				width: number,
			}, // 228691/337222 (67.82%)
			reddit_video?: {
				dash_url?: string, // 108524/108529 (100.00%)
				duration?: number, // 108524/108529 (100.00%)
				fallback_url?: string, // 108524/108529 (100.00%)
				height?: number, // 108524/108529 (100.00%)
				hls_url?: string, // 108524/108529 (100.00%)
				is_gif?: boolean, // 108524/108529 (100.00%)
				scrubber_media_url?: string, // 108524/108529 (100.00%)
				transcoding_message?: string, // 5/108529 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 108524/108529 (100.00%)
			}, // 108529/337222 (32.18%)
			type?: string, // 228693/337222 (67.82%)
		},
		secure_media_embed: {
			content?: string, // 228693/1155495 (19.79%)
			height?: number, // 228693/1155495 (19.79%)
			media_domain_url?: string, // 228693/1155495 (19.79%)
			scrolling?: boolean, // 228693/1155495 (19.79%)
			width?: number, // 228693/1155495 (19.79%)
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
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:heartbeat"|"econ:render:lottie:cutie"|"econ:render:lottie:sunny"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:halloween2020")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1077077/1155495 (93.21%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1747444/28659441 (6.10%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 23561/28659441 (0.08%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 23561/28659441 (0.08%)
	embed_url?: null|"https://d1rv9hk8pvw4g3.cloudfront.net"|"https://d15okhdghbfysy.cloudfront.net"|"http://twitch.tv/xfinity"|"https://www.twitch.tv/radioya"|"https://www.twitch.tv/noelmiller"|"http://d1rv9hk8pvw4g3.cloudfront.net"|"https://d3gd82zhqhbx6t.cloudfront.net", // 23561/28659441 (0.08%)
	event_end?: number, // 1448/28659441 (0.01%)
	event_is_live?: boolean, // 1448/28659441 (0.01%)
	event_start?: number, // 1448/28659441 (0.01%)
	events?: [], // 23561/28659441 (0.08%)
	eventsOnRender?: [], // 23561/28659441 (0.08%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Download"|"View More"|"Install"|"Apply Now"|"Get Showtimes", // 861/2210944 (0.04%)
			caption?: string, // 243152/2210944 (11.00%)
			display_url?: "wetransfer.com"|"BestBuy.com"|"miniusa.com"|"SAMSUNG.COM"|"www.madewell.com"|"adobe.com/students"|"madewell.com/womens/sale/jeans-for-75"|"google.com"|"adobe.com"|"youtube.com"|"https://reddit.com"|"abobe.com"|"MBTest.com", // 862/2210944 (0.04%)
			id: number,
			media_id: string,
			outbound_url?: string, // 58550/2210944 (2.65%)
		}[],
	}|null, // 1091443/28659441 (3.81%)
	gilded: number,
	gildings: {
		gid_1?: number, // 347115/28659441 (1.21%)
		gid_2?: number, // 44301/28659441 (0.15%)
		gid_3?: number, // 8981/28659441 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 23561/28659441 (0.08%)
	id: string,
	impression_id?: null, // 23561/28659441 (0.08%)
	impression_id_str?: null, // 23561/28659441 (0.08%)
	is_blank?: boolean, // 23561/28659441 (0.08%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1091443/28659441 (3.81%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 324307/5522113 (5.87%)
		e: "text"|"emoji",
		t?: string, // 5197806/5522113 (94.13%)
		u?: string, // 324307/5522113 (5.87%)
	}[],
	link_flair_template_id?: string, // 8463931/28659441 (29.53%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 56/3619957 (0.00%)
		oembed?: {
			author_name?: string, // 1638524/2823806 (58.03%)
			author_url?: string, // 1568765/2823806 (55.55%)
			cache_age?: number, // 284845/2823806 (10.09%)
			description?: string, // 368954/2823806 (13.07%)
			height?: number|null, // 2823785/2823806 (100.00%)
			html?: string, // 2823785/2823806 (100.00%)
			marginheight?: number, // 13/2823806 (0.00%)
			marginwidth?: number, // 13/2823806 (0.00%)
			mean_alpha?: number, // 7024/2823806 (0.25%)
			provider_name?: string, // 2823785/2823806 (100.00%)
			provider_url?: string, // 2823785/2823806 (100.00%)
			thumbnail_height?: number, // 1611839/2823806 (57.08%)
			thumbnail_url?: string, // 1613082/2823806 (57.12%)
			thumbnail_width?: number, // 1611839/2823806 (57.08%)
			title?: string, // 2537399/2823806 (89.86%)
			type?: "video"|"rich", // 2823785/2823806 (100.00%)
			url?: string, // 436127/2823806 (15.44%)
			version?: "1.0", // 2823772/2823806 (100.00%)
			width?: number, // 2823785/2823806 (100.00%)
		}, // 2823806/3619957 (78.01%)
		reddit_video?: {
			dash_url?: string, // 783702/796095 (98.44%)
			duration?: number, // 783702/796095 (98.44%)
			fallback_url?: string, // 783702/796095 (98.44%)
			height?: number, // 783702/796095 (98.44%)
			hls_url?: string, // 783702/796095 (98.44%)
			is_gif?: boolean, // 783702/796095 (98.44%)
			scrubber_media_url?: string, // 783702/796095 (98.44%)
			transcoding_message?: string, // 12393/796095 (1.56%)
			transcoding_status: "completed"|"error",
			width?: number, // 783702/796095 (98.44%)
		}, // 796095/3619957 (21.99%)
		type?: string, // 2823862/3619957 (78.01%)
	},
	media_embed: {
		content?: string|null, // 2823862/28659441 (9.85%)
		height?: number, // 2823862/28659441 (9.85%)
		scrolling?: boolean, // 2823862/28659441 (9.85%)
		width?: number, // 2823862/28659441 (9.85%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14107/2518900 (0.56%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 2515618/2518900 (99.87%)
			hlsUrl?: string, // 14107/2518900 (0.56%)
			id?: string, // 2515618/2518900 (99.87%)
			isGif?: boolean, // 14107/2518900 (0.56%)
			m?: "image/jpg"|"image/png"|"image/gif", // 2501511/2518900 (99.31%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 583935/2518900 (23.18%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 2501511/2518900 (99.31%)
			s?: {
				gif?: string, // 10418/2501511 (0.42%)
				mp4?: string, // 10418/2501511 (0.42%)
				u?: string, // 2491093/2501511 (99.58%)
				x: number,
				y: number,
			}, // 2501511/2518900 (99.31%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 14107/2518900 (0.56%)
			y?: number, // 14107/2518900 (0.56%)
		},
	}|null, // 1417104/28659441 (4.94%)
	media_only: boolean,
	mobile_ad_url?: string, // 23561/28659441 (0.08%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 23561/28659441 (0.08%)
	outbound_link?: {
	}, // 23561/28659441 (0.08%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 115/374142 (0.03%)
			vote_count: number,
		}[],
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 170286/28659441 (0.59%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 10236120/28659441 (35.72%)
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
				}, // 77324/10236120 (0.76%)
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
				}, // 77324/10236120 (0.76%)
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
				}, // 2555442/10236120 (24.96%)
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
				}, // 2603231/10236120 (25.43%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 169643/486007 (34.91%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 486007/10236120 (4.75%)
	}, // 10236120/28659441 (35.72%)
	priority_id?: null, // 23561/28659441 (0.08%)
	promoted?: boolean, // 23561/28659441 (0.08%)
	promoted_by?: null, // 23561/28659441 (0.08%)
	promoted_display_name?: null, // 23561/28659441 (0.08%)
	promoted_url?: null, // 23561/28659441 (0.08%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 46346/28659441 (0.16%)
	score: number,
	secure_media: null|{
		event_id?: string, // 56/3619957 (0.00%)
		oembed?: {
			author_name?: string, // 1638524/2823806 (58.03%)
			author_url?: string, // 1568765/2823806 (55.55%)
			cache_age?: number, // 284845/2823806 (10.09%)
			description?: string, // 368954/2823806 (13.07%)
			height?: number|null, // 2823785/2823806 (100.00%)
			html?: string, // 2823785/2823806 (100.00%)
			marginheight?: number, // 13/2823806 (0.00%)
			marginwidth?: number, // 13/2823806 (0.00%)
			mean_alpha?: number, // 7024/2823806 (0.25%)
			provider_name?: string, // 2823785/2823806 (100.00%)
			provider_url?: string, // 2823785/2823806 (100.00%)
			thumbnail_height?: number, // 1611839/2823806 (57.08%)
			thumbnail_url?: string, // 1613082/2823806 (57.12%)
			thumbnail_width?: number, // 1611839/2823806 (57.08%)
			title?: string, // 2537399/2823806 (89.86%)
			type?: "video"|"rich", // 2823785/2823806 (100.00%)
			url?: string, // 436127/2823806 (15.44%)
			version?: "1.0", // 2823772/2823806 (100.00%)
			width?: number, // 2823785/2823806 (100.00%)
		}, // 2823806/3619957 (78.01%)
		reddit_video?: {
			dash_url?: string, // 783702/796095 (98.44%)
			duration?: number, // 783702/796095 (98.44%)
			fallback_url?: string, // 783702/796095 (98.44%)
			height?: number, // 783702/796095 (98.44%)
			hls_url?: string, // 783702/796095 (98.44%)
			is_gif?: boolean, // 783702/796095 (98.44%)
			scrubber_media_url?: string, // 783702/796095 (98.44%)
			transcoding_message?: string, // 12393/796095 (1.56%)
			transcoding_status: "completed"|"error",
			width?: number, // 783702/796095 (98.44%)
		}, // 796095/3619957 (21.99%)
		type?: string, // 2823862/3619957 (78.01%)
	},
	secure_media_embed: {
		content?: string|null, // 2823862/28659441 (9.85%)
		height?: number, // 2823862/28659441 (9.85%)
		media_domain_url?: string, // 2823862/28659441 (9.85%)
		scrolling?: boolean, // 2823862/28659441 (9.85%)
		width?: number, // 2823862/28659441 (9.85%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 23561/28659441 (0.08%)
	sk_ad_network_data?: null, // 23561/28659441 (0.08%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 23561/28659441 (0.08%)
	third_party_tracking?: null, // 23561/28659441 (0.08%)
	third_party_tracking_2?: null, // 23561/28659441 (0.08%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:heartbeat"|"econ:render:lottie:cutie"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:sunny"|"econ:render:lottie:halloween2020"|"econ:render:lottie:santasnoo")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 18947905/28659441 (66.11%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}