interface RedditPost {
	adserver_click_url?: null, // 31752/31616206 (0.10%)
	adserver_imp_pixel?: null, // 31752/31616206 (0.10%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
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
	author_cakeday?: boolean, // 97311/31616206 (0.31%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 815102/2137674 (38.13%)
		e: "text"|"emoji",
		t?: string, // 1322572/2137674 (61.87%)
		u?: string, // 815102/2137674 (38.13%)
	}[], // 24047166/31616206 (76.06%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 24047166/31616206 (76.06%)
	author_fullname?: string, // 24047166/31616206 (76.06%)
	author_id?: string|null, // 31752/31616206 (0.10%)
	author_patreon_flair?: boolean, // 24047166/31616206 (76.06%)
	author_premium?: boolean, // 24047166/31616206 (76.06%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Play Now"|"Install"|"View More"|"Apply Now"|"Watch Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu", // 29109/31616206 (0.09%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|""|"videos"|"diy_and_crafts"|"memes"|"food"|"writing"|"music",
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description: string,
		display_layout: null|"GALLERY"|"TIMELINE",
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		subreddit_id: string,
		title: string,
	}[], // 7798/31616206 (0.02%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1347172/31616206 (4.26%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
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
		author_cakeday?: boolean, // 4227/1235999 (0.34%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 41870/106225 (39.42%)
			e: "text"|"emoji",
			t?: string, // 64355/106225 (60.58%)
			u?: string, // 41870/106225 (39.42%)
		}[], // 1090027/1235999 (88.19%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1090027/1235999 (88.19%)
		author_fullname?: string, // 1090027/1235999 (88.19%)
		author_patreon_flair?: boolean, // 1090027/1235999 (88.19%)
		author_premium?: boolean, // 1090027/1235999 (88.19%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"animals"|"gaming"|"entertainment"|"photography"|""|"diy_and_crafts"|"memes"|"music",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string,
			display_layout: null|"GALLERY"|"TIMELINE",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 1078/1235999 (0.09%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 273/1235999 (0.02%)
		event_is_live?: boolean, // 273/1235999 (0.02%)
		event_start?: number, // 273/1235999 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 36779/256297 (14.35%)
				id: number,
				media_id: string,
				outbound_url?: string, // 16891/256297 (6.59%)
			}[],
		}|null, // 69888/1235999 (5.65%)
		gilded: number,
		gildings: {
			gid_1?: number, // 311974/1235999 (25.24%)
			gid_2?: number, // 46713/1235999 (3.78%)
			gid_3?: number, // 14969/1235999 (1.21%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 69888/1235999 (5.65%)
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
			a?: string, // 27221/182926 (14.88%)
			e: "text"|"emoji",
			t?: string, // 155705/182926 (85.12%)
			u?: string, // 27221/182926 (14.88%)
		}[],
		link_flair_template_id?: string, // 367268/1235999 (29.71%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 75853/283544 (26.75%)
				author_url?: string, // 66823/283544 (23.57%)
				cache_age?: number, // 5645/283544 (1.99%)
				description?: string, // 13951/283544 (4.92%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 39/283544 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 74361/283544 (26.23%)
				thumbnail_url?: string, // 74532/283544 (26.29%)
				thumbnail_width?: number, // 74361/283544 (26.23%)
				title?: string, // 271452/283544 (95.74%)
				type: "video"|"rich",
				url?: string, // 8392/283544 (2.96%)
				version: "1.0",
				width: number,
			}, // 283544/391272 (72.47%)
			reddit_video?: {
				bitrate_kbps?: number, // 105129/107728 (97.59%)
				dash_url?: string, // 107726/107728 (100.00%)
				duration?: number, // 107726/107728 (100.00%)
				fallback_url?: string, // 107726/107728 (100.00%)
				height?: number, // 107726/107728 (100.00%)
				hls_url?: string, // 107726/107728 (100.00%)
				is_gif?: boolean, // 107726/107728 (100.00%)
				scrubber_media_url?: string, // 107726/107728 (100.00%)
				transcoding_message?: string, // 2/107728 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 107726/107728 (100.00%)
			}, // 107728/391272 (27.53%)
			type?: string, // 283544/391272 (72.47%)
		},
		media_embed: {
			content?: string, // 283544/1235999 (22.94%)
			height?: number, // 283544/1235999 (22.94%)
			scrolling?: boolean, // 283544/1235999 (22.94%)
			width?: number, // 283544/1235999 (22.94%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 693/295152 (0.23%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 294910/295152 (99.92%)
				hlsUrl?: string, // 693/295152 (0.23%)
				id?: string, // 294910/295152 (99.92%)
				isGif?: boolean, // 693/295152 (0.23%)
				m?: "image/jpg"|"image/png"|"image/gif", // 294217/295152 (99.68%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 141356/295152 (47.89%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 294217/295152 (99.68%)
				s?: {
					gif?: string, // 4531/294217 (1.54%)
					mp4?: string, // 4531/294217 (1.54%)
					u?: string, // 289686/294217 (98.46%)
					x: number,
					y: number,
				}, // 294217/295152 (99.68%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 693/295152 (0.23%)
				y?: number, // 693/295152 (0.23%)
			},
		}|null, // 81547/1235999 (6.60%)
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
				total_stake_amount?: number, // 28/8916 (0.31%)
				vote_count: number,
			}[],
			resolved_option_id: null|"7552328"|"7248088"|"7248101"|"7552737"|"7558851",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 3032/1235999 (0.25%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 889610/1235999 (71.97%)
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
					}, // 26464/889610 (2.97%)
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
					}, // 26464/889610 (2.97%)
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
					}, // 464096/889610 (52.17%)
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
					}, // 467655/889610 (52.57%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 221101/221923 (99.63%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 221923/889610 (24.95%)
		}, // 889610/1235999 (71.97%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 386/1235999 (0.03%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 75853/283544 (26.75%)
				author_url?: string, // 66823/283544 (23.57%)
				cache_age?: number, // 5645/283544 (1.99%)
				description?: string, // 13951/283544 (4.92%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 39/283544 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 74361/283544 (26.23%)
				thumbnail_url?: string, // 74532/283544 (26.29%)
				thumbnail_width?: number, // 74361/283544 (26.23%)
				title?: string, // 271452/283544 (95.74%)
				type: "video"|"rich",
				url?: string, // 8392/283544 (2.96%)
				version: "1.0",
				width: number,
			}, // 283544/391272 (72.47%)
			reddit_video?: {
				bitrate_kbps?: number, // 105129/107728 (97.59%)
				dash_url?: string, // 107726/107728 (100.00%)
				duration?: number, // 107726/107728 (100.00%)
				fallback_url?: string, // 107726/107728 (100.00%)
				height?: number, // 107726/107728 (100.00%)
				hls_url?: string, // 107726/107728 (100.00%)
				is_gif?: boolean, // 107726/107728 (100.00%)
				scrubber_media_url?: string, // 107726/107728 (100.00%)
				transcoding_message?: string, // 2/107728 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 107726/107728 (100.00%)
			}, // 107728/391272 (27.53%)
			type?: string, // 283544/391272 (72.47%)
		},
		secure_media_embed: {
			content?: string, // 283544/1235999 (22.94%)
			height?: number, // 283544/1235999 (22.94%)
			media_domain_url?: string, // 283544/1235999 (22.94%)
			scrolling?: boolean, // 283544/1235999 (22.94%)
			width?: number, // 283544/1235999 (22.94%)
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
		subreddit_type: "public"|"restricted"|"user"|"archived"|"gold_restricted",
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1133875/1235999 (91.74%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1347172/31616206 (4.26%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 31752/31616206 (0.10%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 31752/31616206 (0.10%)
	embed_url?: null|string, // 31752/31616206 (0.10%)
	event_end?: number, // 1915/31616206 (0.01%)
	event_is_live?: boolean, // 1915/31616206 (0.01%)
	event_start?: number, // 1915/31616206 (0.01%)
	events?: [], // 31752/31616206 (0.10%)
	eventsOnRender?: [], // 31752/31616206 (0.10%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Watch Now"|"Get Showtimes"|"View More"|"Download"|"Install"|"See Menu"|"Apply Now", // 696/3425811 (0.02%)
			caption?: string, // 371727/3425811 (10.85%)
			display_url?: string, // 947/3425811 (0.03%)
			id: number,
			media_id: string,
			outbound_url?: string, // 89558/3425811 (2.61%)
		}[],
	}|null, // 1592258/31616206 (5.04%)
	gilded: number,
	gildings: {
		gid_1?: number, // 637314/31616206 (2.02%)
		gid_2?: number, // 48220/31616206 (0.15%)
		gid_3?: number, // 10310/31616206 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 31752/31616206 (0.10%)
	id: string,
	impression_id?: null, // 31752/31616206 (0.10%)
	impression_id_str?: null, // 31752/31616206 (0.10%)
	is_blank?: boolean, // 31752/31616206 (0.10%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1592258/31616206 (5.04%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 512411/5940192 (8.63%)
		e: "text"|"emoji",
		t?: string, // 5427781/5940192 (91.37%)
		u?: string, // 512411/5940192 (8.63%)
	}[],
	link_flair_template_id?: string, // 9882206/31616206 (31.26%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 57/3566609 (0.00%)
		oembed?: {
			author_name?: string, // 1731885/2628425 (65.89%)
			author_url?: string, // 1662378/2628425 (63.25%)
			cache_age?: number, // 184467/2628425 (7.02%)
			description?: string, // 258666/2628425 (9.84%)
			height?: number|null, // 2628403/2628425 (100.00%)
			html?: string, // 2628403/2628425 (100.00%)
			marginheight?: number, // 1/2628425 (0.00%)
			marginwidth?: number, // 1/2628425 (0.00%)
			mean_alpha?: number, // 2961/2628425 (0.11%)
			provider_name?: string, // 2628403/2628425 (100.00%)
			provider_url?: string, // 2628403/2628425 (100.00%)
			thumbnail_height?: number, // 1702906/2628425 (64.79%)
			thumbnail_url?: string, // 1709349/2628425 (65.03%)
			thumbnail_width?: number, // 1702906/2628425 (64.79%)
			title?: string, // 2432456/2628425 (92.54%)
			type?: "video"|"rich", // 2628403/2628425 (100.00%)
			url?: string, // 258888/2628425 (9.85%)
			version?: "1.0", // 2628402/2628425 (100.00%)
			width?: number, // 2628403/2628425 (100.00%)
		}, // 2628425/3566609 (73.70%)
		reddit_video?: {
			bitrate_kbps?: number, // 931836/938127 (99.33%)
			dash_url?: string, // 931837/938127 (99.33%)
			duration?: number, // 931837/938127 (99.33%)
			fallback_url?: string, // 931837/938127 (99.33%)
			height?: number, // 931837/938127 (99.33%)
			hls_url?: string, // 931837/938127 (99.33%)
			is_gif?: boolean, // 931837/938127 (99.33%)
			scrubber_media_url?: string, // 931837/938127 (99.33%)
			transcoding_message?: string, // 6290/938127 (0.67%)
			transcoding_status: "completed"|"error",
			width?: number, // 931837/938127 (99.33%)
		}, // 938127/3566609 (26.30%)
		type?: string, // 2628482/3566609 (73.70%)
	},
	media_embed: {
		content?: string|null, // 2628482/31616206 (8.31%)
		height?: number, // 2628482/31616206 (8.31%)
		scrolling?: boolean, // 2628482/31616206 (8.31%)
		width?: number, // 2628482/31616206 (8.31%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17116/3817281 (0.45%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 3811157/3817281 (99.84%)
			hlsUrl?: string, // 17116/3817281 (0.45%)
			id?: string, // 3811157/3817281 (99.84%)
			isGif?: boolean, // 17116/3817281 (0.45%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3794041/3817281 (99.39%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1080888/3817281 (28.32%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3794041/3817281 (99.39%)
			s?: {
				gif?: string, // 29779/3794041 (0.78%)
				mp4?: string, // 29779/3794041 (0.78%)
				u?: string, // 3764262/3794041 (99.22%)
				x: number,
				y: number,
			}, // 3794041/3817281 (99.39%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 17116/3817281 (0.45%)
			y?: number, // 17116/3817281 (0.45%)
		},
	}|null, // 1980422/31616206 (6.26%)
	media_only: boolean,
	mobile_ad_url?: string, // 31752/31616206 (0.10%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 31752/31616206 (0.10%)
	outbound_link?: {
	}, // 31752/31616206 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 416/469624 (0.09%)
			vote_count: number,
		}[],
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 185694/31616206 (0.59%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 11958065/31616206 (37.82%)
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
				}, // 133644/11958065 (1.12%)
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
				}, // 133644/11958065 (1.12%)
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
				}, // 3675080/11958065 (30.73%)
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
				}, // 3739645/11958065 (31.27%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 634395/635438 (99.84%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 635438/11958065 (5.31%)
	}, // 11958065/31616206 (37.82%)
	priority_id?: null, // 31752/31616206 (0.10%)
	promoted?: boolean, // 31752/31616206 (0.10%)
	promoted_by?: null, // 31752/31616206 (0.10%)
	promoted_display_name?: null, // 31752/31616206 (0.10%)
	promoted_url?: null, // 31752/31616206 (0.10%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 34448/31616206 (0.11%)
	score: number,
	secure_media: null|{
		event_id?: string, // 57/3566609 (0.00%)
		oembed?: {
			author_name?: string, // 1731885/2628425 (65.89%)
			author_url?: string, // 1662378/2628425 (63.25%)
			cache_age?: number, // 184467/2628425 (7.02%)
			description?: string, // 258666/2628425 (9.84%)
			height?: number|null, // 2628403/2628425 (100.00%)
			html?: string, // 2628403/2628425 (100.00%)
			marginheight?: number, // 1/2628425 (0.00%)
			marginwidth?: number, // 1/2628425 (0.00%)
			mean_alpha?: number, // 2961/2628425 (0.11%)
			provider_name?: string, // 2628403/2628425 (100.00%)
			provider_url?: string, // 2628403/2628425 (100.00%)
			thumbnail_height?: number, // 1702906/2628425 (64.79%)
			thumbnail_url?: string, // 1709349/2628425 (65.03%)
			thumbnail_width?: number, // 1702906/2628425 (64.79%)
			title?: string, // 2432456/2628425 (92.54%)
			type?: "video"|"rich", // 2628403/2628425 (100.00%)
			url?: string, // 258888/2628425 (9.85%)
			version?: "1.0", // 2628402/2628425 (100.00%)
			width?: number, // 2628403/2628425 (100.00%)
		}, // 2628425/3566609 (73.70%)
		reddit_video?: {
			bitrate_kbps?: number, // 931836/938127 (99.33%)
			dash_url?: string, // 931837/938127 (99.33%)
			duration?: number, // 931837/938127 (99.33%)
			fallback_url?: string, // 931837/938127 (99.33%)
			height?: number, // 931837/938127 (99.33%)
			hls_url?: string, // 931837/938127 (99.33%)
			is_gif?: boolean, // 931837/938127 (99.33%)
			scrubber_media_url?: string, // 931837/938127 (99.33%)
			transcoding_message?: string, // 6290/938127 (0.67%)
			transcoding_status: "completed"|"error",
			width?: number, // 931837/938127 (99.33%)
		}, // 938127/3566609 (26.30%)
		type?: string, // 2628482/3566609 (73.70%)
	},
	secure_media_embed: {
		content?: string|null, // 2628482/31616206 (8.31%)
		height?: number, // 2628482/31616206 (8.31%)
		media_domain_url?: string, // 2628482/31616206 (8.31%)
		scrolling?: boolean, // 2628482/31616206 (8.31%)
		width?: number, // 2628482/31616206 (8.31%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 31752/31616206 (0.10%)
	sk_ad_network_data?: null, // 31752/31616206 (0.10%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 31752/31616206 (0.10%)
	third_party_tracking?: null, // 31752/31616206 (0.10%)
	third_party_tracking_2?: null, // 31752/31616206 (0.10%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 20969593/31616206 (66.33%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}