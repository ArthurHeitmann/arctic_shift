interface RedditPost {
	adserver_click_url?: null, // 47648/34395243 (0.14%)
	adserver_imp_pixel?: null, // 47648/34395243 (0.14%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"GROUP"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
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
		sticky_duration_seconds?: null, // 1011010/1011015 (100.00%)
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
	app_store_data?: null, // 47648/34395243 (0.14%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 97460/34395243 (0.28%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 665077/1873008 (35.51%)
		e: "text"|"emoji",
		t?: string, // 1207931/1873008 (64.49%)
		u?: string, // 665077/1873008 (35.51%)
	}[], // 26271391/34395243 (76.38%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 26271391/34395243 (76.38%)
	author_fullname?: string, // 26271391/34395243 (76.38%)
	author_id?: string|null, // 47648/34395243 (0.14%)
	author_patreon_flair?: boolean, // 26271391/34395243 (76.38%)
	author_premium?: boolean, // 26271391/34395243 (76.38%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 331064/34395243 (0.96%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"photography"|"entertainment"|"gaming"|"diy_and_crafts"|"writing"|"food"|"videos"|"memes"|"funny",
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
		sr_detail?: {
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: "chloe"|"Superstonk"|"2021PicsPorn"|"shoujoai"|"Lineman",
			display_name_prefixed: "r/chloe"|"r/Superstonk"|"r/2021PicsPorn"|"r/shoujoai"|"r/Lineman",
			icon_img: string,
			icon_size: null|number[],
			key_color: "",
			mod_permissions: [],
			name: "t5_2qpoa"|"t5_43zwn1"|"t5_4ysds5"|"t5_2t5g1"|"t5_2tlvx",
			over_18: boolean,
			primary_color: ""|"#014980"|"#242424"|"#ffe2e2",
			sr: "chloe"|"Superstonk"|"2021PicsPorn"|"shoujoai"|"Lineman",
			sr_display_name_prefixed: "r/chloe"|"r/Superstonk"|"r/2021PicsPorn"|"r/shoujoai"|"r/Lineman",
			subreddit_type: "public",
			subscribers: number,
			title: "Chloe"|"💎🙌Superstonk🚀🦍"|"2021PicsPorn"|"Shoujo-ai"|"Lineman on the wires",
			url: "/r/chloe/"|"/r/Superstonk/"|"/r/2021PicsPorn/"|"/r/shoujoai/"|"/r/Lineman/",
			user_can_crosspost: boolean|null,
			whitelist_status: "all_ads"|"no_ads"|"some_ads"|null,
		}, // 5/12462 (0.04%)
		subreddit_id: string,
		title: string,
	}[], // 12462/34395243 (0.04%)
	content_categories: null|("drawing_and_painting"|"entertainment"|"photography"|"gaming"|"diy_and_crafts"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1702758/34395243 (4.95%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"GROUP"|"MODERATOR",
			award_type: "global"|"community"|"moderator",
			awardings_required_to_grant_benefits: null|number,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null|number,
			days_of_premium: null|number,
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
			sticky_duration_seconds: null,
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
		author_cakeday?: boolean, // 4827/1617194 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 47487/125312 (37.90%)
			e: "text"|"emoji",
			t?: string, // 77825/125312 (62.10%)
			u?: string, // 47487/125312 (37.90%)
		}[], // 1454945/1617194 (89.97%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1454945/1617194 (89.97%)
		author_fullname?: string, // 1454945/1617194 (89.97%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1454945/1617194 (89.97%)
		author_premium?: boolean, // 1454945/1617194 (89.97%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 17390/1617194 (1.08%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"animals"|"drawing_and_painting"|"photography"|"entertainment"|"gaming"|"diy_and_crafts"|"writing"|"funny"|"art",
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
			sr_detail?: {
				banner_img: "",
				banner_size: null,
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: "BestofRedditorUpdates"|"Superstonk",
				display_name_prefixed: "r/BestofRedditorUpdates"|"r/Superstonk",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_2ea6kj"|"t5_43zwn1",
				over_18: boolean,
				primary_color: ""|"#242424",
				sr: "BestofRedditorUpdates"|"Superstonk",
				sr_display_name_prefixed: "r/BestofRedditorUpdates"|"r/Superstonk",
				subreddit_type: "public",
				subscribers: number,
				title: "BestofRedditorUpdates"|"💎🙌Superstonk🚀🦍",
				url: "/r/BestofRedditorUpdates/"|"/r/Superstonk/",
				user_can_crosspost: null,
				whitelist_status: "all_ads",
			}, // 4/1067 (0.37%)
			subreddit_id: string,
			title: string,
		}[], // 1067/1617194 (0.07%)
		content_categories: null|("drawing_and_painting"|"photography"|"music"|"gaming"|"comics"|"entertainment"|"writing"|"diy_and_crafts"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 231/1617194 (0.01%)
		event_is_live?: boolean, // 231/1617194 (0.01%)
		event_start?: number, // 231/1617194 (0.01%)
		gallery_data?: {
			items: {
				caption?: string, // 65243/515838 (12.65%)
				id: number,
				media_id: string,
				outbound_url?: string, // 24093/515838 (4.67%)
			}[],
		}|null, // 124107/1617194 (7.67%)
		gilded: number,
		gildings: {
			gid_1?: number, // 212012/1617194 (13.11%)
			gid_2?: number, // 34693/1617194 (2.15%)
			gid_3?: number, // 9896/1617194 (0.61%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 124107/1617194 (7.67%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 38528/250655 (15.37%)
			e: "text"|"emoji",
			t?: string, // 212127/250655 (84.63%)
			u?: string, // 38528/250655 (15.37%)
		}[],
		link_flair_template_id?: string, // 489652/1617194 (30.28%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_duration_seconds: number,
			recording_fallback_url?: string, // 31/56 (55.36%)
			recording_status: number,
			room_id: string,
		}, // 56/1617194 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 3/595620 (0.00%)
			oembed?: {
				author_name?: string, // 412819/421776 (97.88%)
				author_url?: string, // 404609/421776 (95.93%)
				cache_age?: number, // 5172/421776 (1.23%)
				description?: string, // 17741/421776 (4.21%)
				height?: number|null, // 421774/421776 (100.00%)
				html?: string, // 421774/421776 (100.00%)
				mean_alpha?: number, // 28/421776 (0.01%)
				provider_name?: string, // 421774/421776 (100.00%)
				provider_url?: string, // 421774/421776 (100.00%)
				thumbnail_height?: number, // 414606/421776 (98.30%)
				thumbnail_url?: string, // 414661/421776 (98.31%)
				thumbnail_width?: number, // 414606/421776 (98.30%)
				title?: string, // 416516/421776 (98.75%)
				type?: "video"|"rich", // 421774/421776 (100.00%)
				url?: string, // 9388/421776 (2.23%)
				version?: "1.0", // 421774/421776 (100.00%)
				width?: number, // 421774/421776 (100.00%)
			}, // 421776/595620 (70.81%)
			reddit_video?: {
				bitrate_kbps?: number, // 173200/173841 (99.63%)
				dash_url?: string, // 173825/173841 (99.99%)
				duration?: number, // 173825/173841 (99.99%)
				fallback_url?: string, // 173825/173841 (99.99%)
				height?: number|null, // 173827/173841 (99.99%)
				hls_url?: string, // 173825/173841 (99.99%)
				is_gif?: boolean, // 173825/173841 (99.99%)
				scrubber_media_url?: string, // 173825/173841 (99.99%)
				transcoding_message?: string, // 16/173841 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 173827/173841 (99.99%)
			}, // 173841/595620 (29.19%)
			type?: string, // 421779/595620 (70.81%)
		},
		media_embed: {
			content?: string|null, // 421779/1617194 (26.08%)
			height?: number, // 421779/1617194 (26.08%)
			scrolling?: boolean, // 421779/1617194 (26.08%)
			width?: number, // 421779/1617194 (26.08%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1107/546374 (0.20%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 546181/546374 (99.96%)
				hlsUrl?: string, // 1107/546374 (0.20%)
				id?: string, // 546181/546374 (99.96%)
				isGif?: boolean, // 1107/546374 (0.20%)
				m?: "image/jpg"|"image/png"|"image/gif", // 545074/546374 (99.76%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 361947/546374 (66.25%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 545074/546374 (99.76%)
				s?: {
					gif?: string, // 9506/545074 (1.74%)
					mp4?: string, // 9506/545074 (1.74%)
					u?: string, // 535568/545074 (98.26%)
					x: number,
					y: number,
				}, // 545074/546374 (99.76%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1107/546374 (0.20%)
				y?: number, // 1107/546374 (0.20%)
			},
		}|null, // 138472/1617194 (8.56%)
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
		parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 34/13447 (0.25%)
				vote_count?: number, // 13109/13447 (97.49%)
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"16233261"|"16233178"|"16244396"|"16365334"|"14550485"|"16509097"|"16540185"|"16265282"|"16582643"|"16519129"|"16560159"|"16768575",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 4016/1617194 (0.25%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1165163/1617194 (72.05%)
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
					}, // 64312/1165163 (5.52%)
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
					}, // 64312/1165163 (5.52%)
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
					}, // 701750/1165163 (60.23%)
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
					}, // 706861/1165163 (60.67%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 361727/361947 (99.94%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 361947/1165163 (31.06%)
		}, // 1165163/1617194 (72.05%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 93/1617194 (0.01%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 3/595620 (0.00%)
			oembed?: {
				author_name?: string, // 412819/421776 (97.88%)
				author_url?: string, // 404609/421776 (95.93%)
				cache_age?: number, // 5172/421776 (1.23%)
				description?: string, // 17741/421776 (4.21%)
				height?: number|null, // 421774/421776 (100.00%)
				html?: string, // 421774/421776 (100.00%)
				mean_alpha?: number, // 28/421776 (0.01%)
				provider_name?: string, // 421774/421776 (100.00%)
				provider_url?: string, // 421774/421776 (100.00%)
				thumbnail_height?: number, // 414606/421776 (98.30%)
				thumbnail_url?: string, // 414661/421776 (98.31%)
				thumbnail_width?: number, // 414606/421776 (98.30%)
				title?: string, // 416516/421776 (98.75%)
				type?: "video"|"rich", // 421774/421776 (100.00%)
				url?: string, // 9388/421776 (2.23%)
				version?: "1.0", // 421774/421776 (100.00%)
				width?: number, // 421774/421776 (100.00%)
			}, // 421776/595620 (70.81%)
			reddit_video?: {
				bitrate_kbps?: number, // 173200/173841 (99.63%)
				dash_url?: string, // 173825/173841 (99.99%)
				duration?: number, // 173825/173841 (99.99%)
				fallback_url?: string, // 173825/173841 (99.99%)
				height?: number|null, // 173827/173841 (99.99%)
				hls_url?: string, // 173825/173841 (99.99%)
				is_gif?: boolean, // 173825/173841 (99.99%)
				scrubber_media_url?: string, // 173825/173841 (99.99%)
				transcoding_message?: string, // 16/173841 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 173827/173841 (99.99%)
			}, // 173841/595620 (29.19%)
			type?: string, // 421779/595620 (70.81%)
		},
		secure_media_embed: {
			content?: string|null, // 421779/1617194 (26.08%)
			height?: number, // 421779/1617194 (26.08%)
			media_domain_url?: string, // 421779/1617194 (26.08%)
			scrolling?: boolean, // 421779/1617194 (26.08%)
			width?: number, // 421779/1617194 (26.08%)
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
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: string,
			predictions: {
				body: string,
				created_at: number,
				id: string,
				is_nsfw: boolean,
				is_rtjson: boolean,
				is_spoiler: boolean,
				options: {
					id: string,
					image_url: null,
					text: string,
					total_amount: number|null,
					user_amount: null,
					vote_count: number|null,
				}[],
				resolved_option_id: string|null,
				status: "RESOLVED"|"OPEN",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "CLOSED"|"LIVE",
			subreddit_id: "t5_2ubgg"|"t5_2qimj"|"t5_31m0v"|"t5_t9z3q"|"t5_30c1v"|"t5_ubkze"|"t5_2st2l"|"t5_2th52"|"t5_11tk33"|"t5_2qh22",
			theme_id: "theme_5"|"theme_1"|"theme_2"|"theme_8",
			total_participants: number,
			tournament_id: string,
		}, // 333/1617194 (0.02%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1473677/1617194 (91.13%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1702758/34395243 (4.95%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 47648/34395243 (0.14%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 47648/34395243 (0.14%)
	embed_url?: null|string, // 47648/34395243 (0.14%)
	event_end?: number, // 1410/34395243 (0.00%)
	event_is_live?: boolean, // 1410/34395243 (0.00%)
	event_start?: number, // 1410/34395243 (0.00%)
	events?: [], // 47648/34395243 (0.14%)
	eventsOnRender?: [], // 47648/34395243 (0.14%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Play Now"|"Download"|"Install"|"Order Now"|"Watch Now"|"Apply Now"|"See Menu"|"Contact Us"|"Pre-order Now"|"Get a Quote", // 4695/5740732 (0.08%)
			caption?: string, // 570131/5740732 (9.93%)
			display_url?: string, // 4329/5740732 (0.08%)
			id: number,
			media_id: string,
			outbound_url?: string, // 108966/5740732 (1.90%)
		}[],
	}|null, // 2537923/34395243 (7.38%)
	gilded: number,
	gildings: {
		gid_1?: number, // 258451/34395243 (0.75%)
		gid_2?: number, // 28623/34395243 (0.08%)
		gid_3?: number, // 5079/34395243 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 47648/34395243 (0.14%)
	id: string,
	impression_id?: null, // 47648/34395243 (0.14%)
	impression_id_str?: null, // 47648/34395243 (0.14%)
	is_blank?: boolean, // 47648/34395243 (0.14%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2537923/34395243 (7.38%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 47648/34395243 (0.14%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 589163/6212515 (9.48%)
		e: "text"|"emoji",
		t?: string, // 5623352/6212515 (90.52%)
		u?: string, // 589163/6212515 (9.48%)
	}[],
	link_flair_template_id?: string, // 11306774/34395243 (32.87%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds?: number, // 416/417 (99.76%)
		recording_fallback_url?: string, // 46/417 (11.03%)
		recording_status?: number, // 416/417 (99.76%)
		room_id: string,
	}, // 417/34395243 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"193smckrycr4h"|"193x6bspp6qc9"|"193xbmgnj91gb"|"19495xitdhodq"|"1948j74zvt6ir"|"1949q56b0a5w4"|"195nm0uix5df5"|"1971sgim4h239"|"197r2uef1o22f"|"198fsrvzk5rok", // 46/4331203 (0.00%)
		oembed?: {
			author_name?: string, // 3056115/3284005 (93.06%)
			author_url?: string, // 3011021/3284005 (91.69%)
			cache_age?: number, // 130035/3284005 (3.96%)
			description?: string, // 295842/3284005 (9.01%)
			height?: number|null, // 3283928/3284005 (100.00%)
			html?: string, // 3283928/3284005 (100.00%)
			marginheight?: number, // 21/3284005 (0.00%)
			marginwidth?: number, // 21/3284005 (0.00%)
			mean_alpha?: number, // 2786/3284005 (0.08%)
			provider_name?: string, // 3283928/3284005 (100.00%)
			provider_url?: string, // 3283928/3284005 (100.00%)
			thumbnail_height?: number, // 3147864/3284005 (95.85%)
			thumbnail_url?: string, // 3149443/3284005 (95.90%)
			thumbnail_width?: number, // 3147864/3284005 (95.85%)
			title?: string, // 3152642/3284005 (96.00%)
			type?: "video"|"rich", // 3283928/3284005 (100.00%)
			url?: string, // 266602/3284005 (8.12%)
			version?: "1.0", // 3283907/3284005 (100.00%)
			width?: number, // 3283928/3284005 (100.00%)
		}, // 3284005/4331203 (75.82%)
		reddit_video?: {
			bitrate_kbps?: number, // 1041103/1047152 (99.42%)
			dash_url?: string, // 1041103/1047152 (99.42%)
			duration?: number, // 1041103/1047152 (99.42%)
			fallback_url?: string, // 1041103/1047152 (99.42%)
			height?: number|null, // 1041412/1047152 (99.45%)
			hls_url?: string, // 1041103/1047152 (99.42%)
			is_gif?: boolean, // 1041103/1047152 (99.42%)
			scrubber_media_url?: string, // 1041103/1047152 (99.42%)
			transcoding_message?: string, // 6049/1047152 (0.58%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1041412/1047152 (99.45%)
		}, // 1047152/4331203 (24.18%)
		type?: string, // 3284051/4331203 (75.82%)
	},
	media_embed: {
		content?: string|null, // 3284051/34395243 (9.55%)
		height?: number, // 3284051/34395243 (9.55%)
		scrolling?: boolean, // 3284051/34395243 (9.55%)
		width?: number, // 3284051/34395243 (9.55%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 19850/6180951 (0.32%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 6178310/6180951 (99.96%)
			hlsUrl?: string, // 19850/6180951 (0.32%)
			id?: string, // 6178310/6180951 (99.96%)
			isGif?: boolean, // 19850/6180951 (0.32%)
			m?: "image/jpg"|"image/png"|"image/gif", // 6158460/6180951 (99.64%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2740605/6180951 (44.34%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6158460/6180951 (99.64%)
			s?: {
				gif?: string, // 51222/6158460 (0.83%)
				mp4?: string, // 51222/6158460 (0.83%)
				u?: string, // 6107238/6158460 (99.17%)
				x: number,
				y: number,
			}, // 6158460/6180951 (99.64%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 19850/6180951 (0.32%)
			y?: number, // 19850/6180951 (0.32%)
		},
	}|null, // 2947621/34395243 (8.57%)
	media_only: boolean,
	mobile_ad_url?: string, // 47648/34395243 (0.14%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 47648/34395243 (0.14%)
	outbound_link?: {
	}, // 47648/34395243 (0.14%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 4209/387121 (1.09%)
			vote_count?: number, // 382404/387121 (98.78%)
		}[],
		prediction_status: null|"RESOLVED"|"OPEN"|"CLOSED"|"CANCELLED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 148500/34395243 (0.43%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 12082260/34395243 (35.13%)
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
				}, // 290238/12082260 (2.40%)
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
				}, // 290238/12082260 (2.40%)
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
				}, // 5275111/12082260 (43.66%)
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
				}, // 5336662/12082260 (44.17%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1299141/1299344 (99.98%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1299344/12082260 (10.75%)
	}, // 12082260/34395243 (35.13%)
	priority_id?: null, // 47648/34395243 (0.14%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 47648/34395243 (0.14%)
	promoted?: boolean, // 47648/34395243 (0.14%)
	promoted_by?: null, // 47648/34395243 (0.14%)
	promoted_display_name?: null, // 47648/34395243 (0.14%)
	promoted_url?: null, // 47648/34395243 (0.14%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 17746/34395243 (0.05%)
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"193smckrycr4h"|"193x6bspp6qc9"|"193xbmgnj91gb"|"19495xitdhodq"|"1948j74zvt6ir"|"1949q56b0a5w4"|"195nm0uix5df5"|"1971sgim4h239"|"197r2uef1o22f"|"198fsrvzk5rok", // 46/4331203 (0.00%)
		oembed?: {
			author_name?: string, // 3056115/3284005 (93.06%)
			author_url?: string, // 3011021/3284005 (91.69%)
			cache_age?: number, // 130035/3284005 (3.96%)
			description?: string, // 295842/3284005 (9.01%)
			height?: number|null, // 3283928/3284005 (100.00%)
			html?: string, // 3283928/3284005 (100.00%)
			marginheight?: number, // 21/3284005 (0.00%)
			marginwidth?: number, // 21/3284005 (0.00%)
			mean_alpha?: number, // 2786/3284005 (0.08%)
			provider_name?: string, // 3283928/3284005 (100.00%)
			provider_url?: string, // 3283928/3284005 (100.00%)
			thumbnail_height?: number, // 3147864/3284005 (95.85%)
			thumbnail_url?: string, // 3149443/3284005 (95.90%)
			thumbnail_width?: number, // 3147864/3284005 (95.85%)
			title?: string, // 3152642/3284005 (96.00%)
			type?: "video"|"rich", // 3283928/3284005 (100.00%)
			url?: string, // 266602/3284005 (8.12%)
			version?: "1.0", // 3283907/3284005 (100.00%)
			width?: number, // 3283928/3284005 (100.00%)
		}, // 3284005/4331203 (75.82%)
		reddit_video?: {
			bitrate_kbps?: number, // 1041103/1047152 (99.42%)
			dash_url?: string, // 1041103/1047152 (99.42%)
			duration?: number, // 1041103/1047152 (99.42%)
			fallback_url?: string, // 1041103/1047152 (99.42%)
			height?: number|null, // 1041412/1047152 (99.45%)
			hls_url?: string, // 1041103/1047152 (99.42%)
			is_gif?: boolean, // 1041103/1047152 (99.42%)
			scrubber_media_url?: string, // 1041103/1047152 (99.42%)
			transcoding_message?: string, // 6049/1047152 (0.58%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1041412/1047152 (99.45%)
		}, // 1047152/4331203 (24.18%)
		type?: string, // 3284051/4331203 (75.82%)
	},
	secure_media_embed: {
		content?: string|null, // 3284051/34395243 (9.55%)
		height?: number, // 3284051/34395243 (9.55%)
		media_domain_url?: string, // 3284051/34395243 (9.55%)
		scrolling?: boolean, // 3284051/34395243 (9.55%)
		width?: number, // 3284051/34395243 (9.55%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 47648/34395243 (0.14%)
	sk_ad_network_data?: null, // 47648/34395243 (0.14%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: null, // 30617/34395243 (0.09%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 47648/34395243 (0.14%)
	third_party_tracking?: null, // 47648/34395243 (0.14%)
	third_party_tracking_2?: null, // 47648/34395243 (0.14%)
	thumbnail: string,
	thumbnail_height?: number|null, // 34391676/34395243 (99.99%)
	thumbnail_width?: number|null, // 34391676/34395243 (99.99%)
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	tournament_data?: {
		currency: "GAME_TOKENS",
		name: string,
		predictions?: {
			body: string,
			created_at: number,
			id: string,
			is_nsfw: boolean,
			is_rtjson: boolean,
			is_spoiler: boolean,
			options: {
				id: string,
				image_url: null,
				text: string,
				total_amount: number|null,
				user_amount: null,
				vote_count: number|null,
			}[],
			resolved_option_id: string|null,
			status: "RESOLVED"|"OPEN"|"CLOSED",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[], // 87/94 (92.55%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_2"|"theme_5"|"theme_4"|"theme_8"|"theme_6"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 94/34395243 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22863702/34395243 (66.47%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}