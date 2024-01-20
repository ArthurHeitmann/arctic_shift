interface RedditPost {
	adserver_click_url?: null, // 29685/32091070 (0.09%)
	adserver_imp_pixel?: null, // 29685/32091070 (0.09%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
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
		sticky_duration_seconds?: null, // 3898/1891536 (0.21%)
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
	app_store_data?: null, // 29685/32091070 (0.09%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 87398/32091070 (0.27%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 747508/2020780 (36.99%)
		e: "text"|"emoji",
		t?: string, // 1273272/2020780 (63.01%)
		u?: string, // 747508/2020780 (36.99%)
	}[], // 22979839/32091070 (71.61%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 22979839/32091070 (71.61%)
	author_fullname?: string, // 22979839/32091070 (71.61%)
	author_id?: string|null, // 29685/32091070 (0.09%)
	author_patreon_flair?: boolean, // 22979839/32091070 (71.61%)
	author_premium?: boolean, // 22979839/32091070 (71.61%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 31183/32091070 (0.10%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"memes"|"food"|"music"|"writing",
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
			display_name: "IdleHeroes"|"DCEUleaks"|"AEWOfficial"|"cybersecurity",
			display_name_prefixed: "r/IdleHeroes"|"r/DCEUleaks"|"r/AEWOfficial"|"r/cybersecurity",
			icon_img: string,
			icon_size: number[]|null,
			key_color: "#222222"|"#ddbd37"|"",
			mod_permissions: [],
			name: "t5_3fzsh"|"t5_3d4ob"|"t5_ubkze"|"t5_2u559",
			over_18: boolean,
			primary_color: "#373c3f"|"#000001"|"#4c0629"|"#cc3600",
			sr: "IdleHeroes"|"DCEUleaks"|"AEWOfficial"|"cybersecurity",
			sr_display_name_prefixed: "r/IdleHeroes"|"r/DCEUleaks"|"r/AEWOfficial"|"r/cybersecurity",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/IdleHeroes/"|"/r/DCEUleaks/"|"/r/AEWOfficial/"|"/r/cybersecurity/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads"|"some_ads",
		}, // 4/11261 (0.04%)
		subreddit_id: string,
		title: string,
	}[], // 11261/32091070 (0.04%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1666082/32091070 (5.19%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
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
			icon_format: null|"APNG"|"PNG"|"JPG",
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
			sticky_duration_seconds?: null, // 2245/1232095 (0.18%)
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
		author_cakeday?: boolean, // 3150/1153557 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 41878/110140 (38.02%)
			e: "text"|"emoji",
			t?: string, // 68262/110140 (61.98%)
			u?: string, // 41878/110140 (38.02%)
		}[], // 1000852/1153557 (86.76%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1000852/1153557 (86.76%)
		author_fullname?: string, // 1000852/1153557 (86.76%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1000852/1153557 (86.76%)
		author_premium?: boolean, // 1000852/1153557 (86.76%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 331/1153557 (0.03%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"animals"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"food"|"memes",
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
		}[], // 1428/1153557 (0.12%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 408/1153557 (0.04%)
		event_is_live?: boolean, // 408/1153557 (0.04%)
		event_start?: number, // 408/1153557 (0.04%)
		gallery_data?: {
			items: {
				caption?: string, // 41604/311674 (13.35%)
				id: number,
				media_id: string,
				outbound_url?: string, // 14890/311674 (4.78%)
			}[],
		}|null, // 71233/1153557 (6.18%)
		gilded: number,
		gildings: {
			gid_1?: number, // 277142/1153557 (24.02%)
			gid_2?: number, // 39226/1153557 (3.40%)
			gid_3?: number, // 10497/1153557 (0.91%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 71233/1153557 (6.18%)
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
			a?: string, // 33644/204592 (16.44%)
			e: "text"|"emoji",
			t?: string, // 170948/204592 (83.56%)
			u?: string, // 33644/204592 (16.44%)
		}[],
		link_flair_template_id?: string, // 367463/1153557 (31.85%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_duration_seconds: number,
			recording_fallback_url?: string, // 7/11 (63.64%)
			recording_status: number,
			room_id: "60753f95-a756-4450-ab0f-d882003690c6"|"1a308799-295a-4524-a79d-5a5ed645c864"|"508b5887-6077-46aa-b797-a9acf223eef7"|"f60b3504-1348-4a40-ad89-3176c543c539"|"a5a7b0a8-9015-4237-8a30-154594f55a12"|"0e0ab208-a0e0-423e-8261-f3ed9d22deeb"|"71420352-e383-43e6-9b37-ed8052132efd"|"942f8700-737b-4773-a295-481895bcb1c8"|"9108fbdb-2325-4138-a6a5-3785729f6a78"|"c86955c0-1680-4661-9795-f381e52ef2ee",
		}, // 11/1153557 (0.00%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 251015/256136 (98.00%)
				author_url?: string, // 243151/256136 (94.93%)
				cache_age?: number, // 6296/256136 (2.46%)
				description?: string, // 12488/256136 (4.88%)
				height?: number|null, // 256135/256136 (100.00%)
				html?: string, // 256135/256136 (100.00%)
				mean_alpha?: number, // 47/256136 (0.02%)
				provider_name?: string, // 256135/256136 (100.00%)
				provider_url?: string, // 256135/256136 (100.00%)
				thumbnail_height?: number, // 248238/256136 (96.92%)
				thumbnail_url?: string, // 248280/256136 (96.93%)
				thumbnail_width?: number, // 248238/256136 (96.92%)
				title?: string, // 249772/256136 (97.52%)
				type?: "video"|"rich", // 256135/256136 (100.00%)
				url?: string, // 9425/256136 (3.68%)
				version?: "1.0", // 256135/256136 (100.00%)
				width?: number, // 256135/256136 (100.00%)
			}, // 256136/395041 (64.84%)
			reddit_video?: {
				bitrate_kbps?: number, // 137990/138905 (99.34%)
				dash_url?: string, // 138903/138905 (100.00%)
				duration?: number, // 138903/138905 (100.00%)
				fallback_url?: string, // 138903/138905 (100.00%)
				height?: number, // 138903/138905 (100.00%)
				hls_url?: string, // 138903/138905 (100.00%)
				is_gif?: boolean, // 138903/138905 (100.00%)
				scrubber_media_url?: string, // 138903/138905 (100.00%)
				transcoding_message?: string, // 2/138905 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 138903/138905 (100.00%)
			}, // 138905/395041 (35.16%)
			type?: string, // 256136/395041 (64.84%)
		},
		media_embed: {
			content?: string|null, // 256136/1153557 (22.20%)
			height?: number, // 256136/1153557 (22.20%)
			scrolling?: boolean, // 256136/1153557 (22.20%)
			width?: number, // 256136/1153557 (22.20%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 757/338149 (0.22%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 337794/338149 (99.90%)
				hlsUrl?: string, // 757/338149 (0.22%)
				id?: string, // 337794/338149 (99.90%)
				isGif?: boolean, // 757/338149 (0.22%)
				m?: "image/jpg"|"image/png"|"image/gif", // 337037/338149 (99.67%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 171855/338149 (50.82%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 337037/338149 (99.67%)
				s?: {
					gif?: string, // 11869/337037 (3.52%)
					mp4?: string, // 11869/337037 (3.52%)
					u?: string, // 325168/337037 (96.48%)
					x: number,
					y: number,
				}, // 337037/338149 (99.67%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 757/338149 (0.22%)
				y?: number, // 757/338149 (0.22%)
			},
		}|null, // 82610/1153557 (7.16%)
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
		parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 41/10172 (0.40%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"13416016"|"13531853"|"12966713"|"13037974"|"13108417"|"5550683"|"13240314"|"12377909"|"13251999"|"13252006"|"13380853"|"13389046"|"13419100",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2696/1153557 (0.23%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 797918/1153557 (69.17%)
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
					}, // 33806/797918 (4.24%)
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
					}, // 33806/797918 (4.24%)
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
					}, // 397810/797918 (49.86%)
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
					}, // 402371/797918 (50.43%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 197695/197873 (99.91%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 197873/797918 (24.80%)
		}, // 797918/1153557 (69.17%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"content_takedown"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 208/1153557 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 251015/256136 (98.00%)
				author_url?: string, // 243151/256136 (94.93%)
				cache_age?: number, // 6296/256136 (2.46%)
				description?: string, // 12488/256136 (4.88%)
				height?: number|null, // 256135/256136 (100.00%)
				html?: string, // 256135/256136 (100.00%)
				mean_alpha?: number, // 47/256136 (0.02%)
				provider_name?: string, // 256135/256136 (100.00%)
				provider_url?: string, // 256135/256136 (100.00%)
				thumbnail_height?: number, // 248238/256136 (96.92%)
				thumbnail_url?: string, // 248280/256136 (96.93%)
				thumbnail_width?: number, // 248238/256136 (96.92%)
				title?: string, // 249772/256136 (97.52%)
				type?: "video"|"rich", // 256135/256136 (100.00%)
				url?: string, // 9425/256136 (3.68%)
				version?: "1.0", // 256135/256136 (100.00%)
				width?: number, // 256135/256136 (100.00%)
			}, // 256136/395041 (64.84%)
			reddit_video?: {
				bitrate_kbps?: number, // 137990/138905 (99.34%)
				dash_url?: string, // 138903/138905 (100.00%)
				duration?: number, // 138903/138905 (100.00%)
				fallback_url?: string, // 138903/138905 (100.00%)
				height?: number, // 138903/138905 (100.00%)
				hls_url?: string, // 138903/138905 (100.00%)
				is_gif?: boolean, // 138903/138905 (100.00%)
				scrubber_media_url?: string, // 138903/138905 (100.00%)
				transcoding_message?: string, // 2/138905 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 138903/138905 (100.00%)
			}, // 138905/395041 (35.16%)
			type?: string, // 256136/395041 (64.84%)
		},
		secure_media_embed: {
			content?: string|null, // 256136/1153557 (22.20%)
			height?: number, // 256136/1153557 (22.20%)
			media_domain_url?: string, // 256136/1153557 (22.20%)
			scrolling?: boolean, // 256136/1153557 (22.20%)
			width?: number, // 256136/1153557 (22.20%)
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
		thumbnail_height?: number|null, // 1153551/1153557 (100.00%)
		thumbnail_width?: number|null, // 1153551/1153557 (100.00%)
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: "NFL Week 15-18"|"Prediction Tournament"|"r/CryptoCurrency Predictions Tournament "|"2022 Predictions"|"Apple Card New Features (iOS 15.4)"|"Predictions Tournament",
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
				resolved_option_id: string,
				status: "RESOLVED",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "CLOSED"|"LIVE",
			subreddit_id: "t5_2s3v4"|"t5_2qhj4"|"t5_2wlj3"|"t5_xnx04"|"t5_yq6m5"|"t5_ezypb",
			theme_id: "theme_1"|"theme_7"|"theme_3",
			total_participants: number,
			tournament_id: string,
		}, // 6/1153557 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1005670/1153557 (87.18%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1666082/32091070 (5.19%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 29685/32091070 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 29685/32091070 (0.09%)
	embed_url?: null|string, // 29685/32091070 (0.09%)
	event_end?: number, // 1462/32091070 (0.00%)
	event_is_live?: boolean, // 1462/32091070 (0.00%)
	event_start?: number, // 1462/32091070 (0.00%)
	events?: [], // 29685/32091070 (0.09%)
	eventsOnRender?: [], // 29685/32091070 (0.09%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Install"|"View More"|"Download"|"Play Now"|"Order Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Watch Now"|"Pre-order Now"|"Get Showtimes"|"See Menu", // 1688/4257039 (0.04%)
			caption?: string, // 486441/4257039 (11.43%)
			display_url?: string, // 1554/4257039 (0.04%)
			id: number,
			media_id: string,
			outbound_url?: string, // 86086/4257039 (2.02%)
		}[],
	}|null, // 1641967/32091070 (5.12%)
	gilded: number,
	gildings: {
		gid_1?: number, // 539084/32091070 (1.68%)
		gid_2?: number, // 38663/32091070 (0.12%)
		gid_3?: number, // 7856/32091070 (0.02%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 29685/32091070 (0.09%)
	id: string,
	impression_id?: null, // 29685/32091070 (0.09%)
	impression_id_str?: null, // 29685/32091070 (0.09%)
	is_blank?: boolean, // 29685/32091070 (0.09%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1641967/32091070 (5.12%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 29685/32091070 (0.09%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 514751/5613481 (9.17%)
		e: "text"|"emoji",
		t?: string, // 5098730/5613481 (90.83%)
		u?: string, // 514751/5613481 (9.17%)
	}[],
	link_flair_template_id?: string, // 9290586/32091070 (28.95%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds: number,
		recording_fallback_url?: string, // 114/192 (59.38%)
		recording_status: number,
		room_id: string,
	}, // 192/32091070 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "189ewq6cqbh09"|"189ewz01e78p3"|"189ex6xcct26x"|"18ahr0bx5iqxk"|"17xtus3lajcjg"|"18bp77kv6v6y6"|"18bxhqk36p5d4"|"18chnmuif0tr2"|"18d8rg1ji3dx7"|"17rpcckf20451"|"18dbkrgp1oigz"|"18d4jjd4puplk"|"18dr2mhx3ittv", // 14/3805813 (0.00%)
		oembed?: {
			author_name?: string, // 2726291/2910327 (93.68%)
			author_url?: string, // 2677566/2910327 (92.00%)
			cache_age?: number, // 163031/2910327 (5.60%)
			description?: string, // 252263/2910327 (8.67%)
			height?: number|null, // 2910307/2910327 (100.00%)
			html?: string, // 2910307/2910327 (100.00%)
			marginheight?: number, // 1/2910327 (0.00%)
			marginwidth?: number, // 1/2910327 (0.00%)
			mean_alpha?: number, // 3516/2910327 (0.12%)
			provider_name?: string, // 2910307/2910327 (100.00%)
			provider_url?: string, // 2910307/2910327 (100.00%)
			thumbnail_height?: number, // 2740970/2910327 (94.18%)
			thumbnail_url?: string, // 2741816/2910327 (94.21%)
			thumbnail_width?: number, // 2740970/2910327 (94.18%)
			title?: string, // 2746879/2910327 (94.38%)
			type?: "video"|"rich", // 2910307/2910327 (100.00%)
			url?: string, // 274058/2910327 (9.42%)
			version?: "1.0", // 2910306/2910327 (100.00%)
			width?: number, // 2910307/2910327 (100.00%)
		}, // 2910327/3805813 (76.47%)
		reddit_video?: {
			bitrate_kbps?: number, // 890985/895472 (99.50%)
			dash_url?: string, // 891015/895472 (99.50%)
			duration?: number, // 891015/895472 (99.50%)
			fallback_url?: string, // 891015/895472 (99.50%)
			height?: number|null, // 891247/895472 (99.53%)
			hls_url?: string, // 891015/895472 (99.50%)
			is_gif?: boolean, // 891015/895472 (99.50%)
			scrubber_media_url?: string, // 891015/895472 (99.50%)
			transcoding_message?: string, // 4457/895472 (0.50%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 891247/895472 (99.53%)
		}, // 895472/3805813 (23.53%)
		type?: string, // 2910341/3805813 (76.47%)
	},
	media_embed: {
		content?: string|null, // 2910341/32091070 (9.07%)
		height?: number, // 2910341/32091070 (9.07%)
		scrolling?: boolean, // 2910341/32091070 (9.07%)
		width?: number, // 2910341/32091070 (9.07%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 16533/4672563 (0.35%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 4661333/4672563 (99.76%)
			hlsUrl?: string, // 16533/4672563 (0.35%)
			id?: string, // 4661333/4672563 (99.76%)
			isGif?: boolean, // 16533/4672563 (0.35%)
			m?: "image/jpg"|"image/png"|"image/gif", // 4644800/4672563 (99.41%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1463283/4672563 (31.32%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4644800/4672563 (99.41%)
			s?: {
				gif?: string, // 40181/4644800 (0.87%)
				mp4?: string, // 40181/4644800 (0.87%)
				u?: string, // 4604619/4644800 (99.13%)
				x: number,
				y: number,
			}, // 4644800/4672563 (99.41%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 16533/4672563 (0.35%)
			y?: number, // 16533/4672563 (0.35%)
		},
	}|null, // 2009905/32091070 (6.26%)
	media_only: boolean,
	mobile_ad_url?: string, // 29685/32091070 (0.09%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 29685/32091070 (0.09%)
	outbound_link?: {
	}, // 29685/32091070 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 3964/419705 (0.94%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED"|"CANCELLED"|"OPEN"|"CLOSED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 146223/32091070 (0.46%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 10538404/32091070 (32.84%)
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
				}, // 182290/10538404 (1.73%)
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
				}, // 182290/10538404 (1.73%)
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
				}, // 3645962/10538404 (34.60%)
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
				}, // 3708750/10538404 (35.19%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 881215/881400 (99.98%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 881400/10538404 (8.36%)
	}, // 10538404/32091070 (32.84%)
	priority_id?: null, // 29685/32091070 (0.09%)
	promo_layout?: null, // 29685/32091070 (0.09%)
	promoted?: boolean, // 29685/32091070 (0.09%)
	promoted_by?: null, // 29685/32091070 (0.09%)
	promoted_display_name?: null, // 29685/32091070 (0.09%)
	promoted_url?: null, // 29685/32091070 (0.09%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 20064/32091070 (0.06%)
	score: number,
	secure_media: null|{
		event_id?: "189ewq6cqbh09"|"189ewz01e78p3"|"189ex6xcct26x"|"18ahr0bx5iqxk"|"17xtus3lajcjg"|"18bp77kv6v6y6"|"18bxhqk36p5d4"|"18chnmuif0tr2"|"18d8rg1ji3dx7"|"17rpcckf20451"|"18dbkrgp1oigz"|"18d4jjd4puplk"|"18dr2mhx3ittv", // 14/3805813 (0.00%)
		oembed?: {
			author_name?: string, // 2726291/2910327 (93.68%)
			author_url?: string, // 2677566/2910327 (92.00%)
			cache_age?: number, // 163031/2910327 (5.60%)
			description?: string, // 252263/2910327 (8.67%)
			height?: number|null, // 2910307/2910327 (100.00%)
			html?: string, // 2910307/2910327 (100.00%)
			marginheight?: number, // 1/2910327 (0.00%)
			marginwidth?: number, // 1/2910327 (0.00%)
			mean_alpha?: number, // 3516/2910327 (0.12%)
			provider_name?: string, // 2910307/2910327 (100.00%)
			provider_url?: string, // 2910307/2910327 (100.00%)
			thumbnail_height?: number, // 2740970/2910327 (94.18%)
			thumbnail_url?: string, // 2741816/2910327 (94.21%)
			thumbnail_width?: number, // 2740970/2910327 (94.18%)
			title?: string, // 2746879/2910327 (94.38%)
			type?: "video"|"rich", // 2910307/2910327 (100.00%)
			url?: string, // 274058/2910327 (9.42%)
			version?: "1.0", // 2910306/2910327 (100.00%)
			width?: number, // 2910307/2910327 (100.00%)
		}, // 2910327/3805813 (76.47%)
		reddit_video?: {
			bitrate_kbps?: number, // 890985/895472 (99.50%)
			dash_url?: string, // 891015/895472 (99.50%)
			duration?: number, // 891015/895472 (99.50%)
			fallback_url?: string, // 891015/895472 (99.50%)
			height?: number|null, // 891247/895472 (99.53%)
			hls_url?: string, // 891015/895472 (99.50%)
			is_gif?: boolean, // 891015/895472 (99.50%)
			scrubber_media_url?: string, // 891015/895472 (99.50%)
			transcoding_message?: string, // 4457/895472 (0.50%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 891247/895472 (99.53%)
		}, // 895472/3805813 (23.53%)
		type?: string, // 2910341/3805813 (76.47%)
	},
	secure_media_embed: {
		content?: string|null, // 2910341/32091070 (9.07%)
		height?: number, // 2910341/32091070 (9.07%)
		media_domain_url?: string, // 2910341/32091070 (9.07%)
		scrolling?: boolean, // 2910341/32091070 (9.07%)
		width?: number, // 2910341/32091070 (9.07%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 29685/32091070 (0.09%)
	sk_ad_network_data?: null, // 29685/32091070 (0.09%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 29685/32091070 (0.09%)
	third_party_tracking?: null, // 29685/32091070 (0.09%)
	third_party_tracking_2?: null, // 29685/32091070 (0.09%)
	thumbnail: string,
	thumbnail_height?: number|null, // 32080336/32091070 (99.97%)
	thumbnail_width?: number|null, // 32080336/32091070 (99.97%)
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
			status: "RESOLVED"|"OPEN",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[], // 91/101 (90.10%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_2"|"theme_5"|"theme_6"|"theme_4"|"theme_8"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 101/32091070 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 17791299/32091070 (55.44%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}