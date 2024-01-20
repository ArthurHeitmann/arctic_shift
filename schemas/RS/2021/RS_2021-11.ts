interface RedditPost {
	adserver_click_url?: null, // 41104/29048277 (0.14%)
	adserver_imp_pixel?: null, // 41104/29048277 (0.14%)
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
	app_store_data?: null, // 41104/29048277 (0.14%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 67711/29048277 (0.23%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 753462/2013179 (37.43%)
		e: "text"|"emoji",
		t?: string, // 1259717/2013179 (62.57%)
		u?: string, // 753462/2013179 (37.43%)
	}[], // 20530434/29048277 (70.68%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 20530434/29048277 (70.68%)
	author_fullname?: string, // 20530434/29048277 (70.68%)
	author_id?: string|null, // 41104/29048277 (0.14%)
	author_patreon_flair?: boolean, // 20530434/29048277 (70.68%)
	author_premium?: boolean, // 20530434/29048277 (70.68%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 38482/29048277 (0.13%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"entertainment"|"animals"|"photography"|"gaming"|"diy_and_crafts"|"videos"|"memes"|"funny",
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
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: "OtomeIsekai",
			display_name_prefixed: "r/OtomeIsekai",
			icon_img: "",
			icon_size: null,
			key_color: "#7e53c1",
			mod_permissions: [],
			name: "t5_1zqfgn",
			over_18: boolean,
			primary_color: "#5a74cc",
			sr: "OtomeIsekai",
			sr_display_name_prefixed: "r/OtomeIsekai",
			subreddit_type: "public",
			subscribers: number,
			title: "Otome Isekai",
			url: "/r/OtomeIsekai/",
			user_can_crosspost: boolean,
			whitelist_status: "no_ads",
		}, // 1/11254 (0.01%)
		subreddit_id: string,
		title: string,
	}[], // 11254/29048277 (0.04%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1432505/29048277 (4.93%)
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
		author_cakeday?: boolean, // 2200/932624 (0.24%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 35983/93896 (38.32%)
			e: "text"|"emoji",
			t?: string, // 57913/93896 (61.68%)
			u?: string, // 35983/93896 (38.32%)
		}[], // 788457/932624 (84.54%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 788457/932624 (84.54%)
		author_fullname?: string, // 788457/932624 (84.54%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 788457/932624 (84.54%)
		author_premium?: boolean, // 788457/932624 (84.54%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: ""|"Learn More", // 164/932624 (0.02%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"animals"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"videos",
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
				display_name: "Superstonk",
				display_name_prefixed: "r/Superstonk",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_43zwn1",
				over_18: boolean,
				primary_color: "#242424",
				sr: "Superstonk",
				sr_display_name_prefixed: "r/Superstonk",
				subreddit_type: "public",
				subscribers: number,
				title: "💎🙌Superstonk🚀🦍",
				url: "/r/Superstonk/",
				user_can_crosspost: null,
				whitelist_status: "all_ads",
			}, // 1/1062 (0.09%)
			subreddit_id: string,
			title: string,
		}[], // 1062/932624 (0.11%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 161/932624 (0.02%)
		event_is_live?: boolean, // 161/932624 (0.02%)
		event_start?: number, // 161/932624 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 33673/250034 (13.47%)
				id: number,
				media_id: string,
				outbound_url?: string, // 13816/250034 (5.53%)
			}[],
		}|null, // 55290/932624 (5.93%)
		gilded: number,
		gildings: {
			gid_1?: number, // 230984/932624 (24.77%)
			gid_2?: number, // 33319/932624 (3.57%)
			gid_3?: number, // 9445/932624 (1.01%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 55290/932624 (5.93%)
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
			a?: string, // 25889/171462 (15.10%)
			e: "text"|"emoji",
			t?: string, // 145573/171462 (84.90%)
			u?: string, // 25889/171462 (15.10%)
		}[],
		link_flair_template_id?: string, // 310552/932624 (33.30%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			room_id: "3b0ce7d9-7201-4401-9b12-5f73b0fe88a8"|"89794eca-490f-4c03-9d28-00a0e11e4849",
		}, // 2/932624 (0.00%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 169719/174376 (97.33%)
				author_url?: string, // 160729/174376 (92.17%)
				cache_age?: number, // 6489/174376 (3.72%)
				description?: string, // 13172/174376 (7.55%)
				height?: number|null, // 174372/174376 (100.00%)
				html?: string, // 174372/174376 (100.00%)
				mean_alpha?: number, // 49/174376 (0.03%)
				provider_name?: string, // 174372/174376 (100.00%)
				provider_url?: string, // 174372/174376 (100.00%)
				thumbnail_height?: number, // 166906/174376 (95.72%)
				thumbnail_url?: string, // 166931/174376 (95.73%)
				thumbnail_width?: number, // 166906/174376 (95.72%)
				title?: string, // 167798/174376 (96.23%)
				type?: "video"|"rich", // 174372/174376 (100.00%)
				url?: string, // 8982/174376 (5.15%)
				version?: "1.0", // 174372/174376 (100.00%)
				width?: number, // 174372/174376 (100.00%)
			}, // 174376/282289 (61.77%)
			reddit_video?: {
				bitrate_kbps?: number, // 107034/107913 (99.19%)
				dash_url?: string, // 107909/107913 (100.00%)
				duration?: number, // 107909/107913 (100.00%)
				fallback_url?: string, // 107909/107913 (100.00%)
				height?: number, // 107909/107913 (100.00%)
				hls_url?: string, // 107909/107913 (100.00%)
				is_gif?: boolean, // 107909/107913 (100.00%)
				scrubber_media_url?: string, // 107909/107913 (100.00%)
				transcoding_message?: string, // 4/107913 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 107909/107913 (100.00%)
			}, // 107913/282289 (38.23%)
			type?: string, // 174376/282289 (61.77%)
		},
		media_embed: {
			content?: string|null, // 174376/932624 (18.70%)
			height?: number, // 174376/932624 (18.70%)
			scrolling?: boolean, // 174376/932624 (18.70%)
			width?: number, // 174376/932624 (18.70%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 780/277440 (0.28%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 277301/277440 (99.95%)
				hlsUrl?: string, // 780/277440 (0.28%)
				id?: string, // 277301/277440 (99.95%)
				isGif?: boolean, // 780/277440 (0.28%)
				m?: "image/jpg"|"image/png"|"image/gif", // 276521/277440 (99.67%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 129392/277440 (46.64%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 276521/277440 (99.67%)
				s?: {
					gif?: string, // 10198/276521 (3.69%)
					mp4?: string, // 10198/276521 (3.69%)
					u?: string, // 266323/276521 (96.31%)
					x: number,
					y: number,
				}, // 276521/277440 (99.67%)
				status: "valid"|"failed",
				x?: number, // 780/277440 (0.28%)
				y?: number, // 780/277440 (0.28%)
			},
		}|null, // 66843/932624 (7.17%)
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
				total_stake_amount?: number, // 197/7565 (2.60%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED"|"CANCELLED",
			resolved_option_id: null|string,
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2067/932624 (0.22%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery", // 643550/932624 (69.00%)
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
					}, // 23650/643550 (3.67%)
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
					}, // 23650/643550 (3.67%)
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
					}, // 288546/643550 (44.84%)
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
					}, // 292194/643550 (45.40%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 136783/137041 (99.81%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 137041/643550 (21.29%)
		}, // 643550/932624 (69.00%)
		promo_layout?: null, // 1/932624 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"deleted"|"reddit"|"automod_filtered"|"author"|"content_takedown"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 169/932624 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 169719/174376 (97.33%)
				author_url?: string, // 160729/174376 (92.17%)
				cache_age?: number, // 6489/174376 (3.72%)
				description?: string, // 13172/174376 (7.55%)
				height?: number|null, // 174372/174376 (100.00%)
				html?: string, // 174372/174376 (100.00%)
				mean_alpha?: number, // 49/174376 (0.03%)
				provider_name?: string, // 174372/174376 (100.00%)
				provider_url?: string, // 174372/174376 (100.00%)
				thumbnail_height?: number, // 166906/174376 (95.72%)
				thumbnail_url?: string, // 166931/174376 (95.73%)
				thumbnail_width?: number, // 166906/174376 (95.72%)
				title?: string, // 167798/174376 (96.23%)
				type?: "video"|"rich", // 174372/174376 (100.00%)
				url?: string, // 8982/174376 (5.15%)
				version?: "1.0", // 174372/174376 (100.00%)
				width?: number, // 174372/174376 (100.00%)
			}, // 174376/282289 (61.77%)
			reddit_video?: {
				bitrate_kbps?: number, // 107034/107913 (99.19%)
				dash_url?: string, // 107909/107913 (100.00%)
				duration?: number, // 107909/107913 (100.00%)
				fallback_url?: string, // 107909/107913 (100.00%)
				height?: number, // 107909/107913 (100.00%)
				hls_url?: string, // 107909/107913 (100.00%)
				is_gif?: boolean, // 107909/107913 (100.00%)
				scrubber_media_url?: string, // 107909/107913 (100.00%)
				transcoding_message?: string, // 4/107913 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 107909/107913 (100.00%)
			}, // 107913/282289 (38.23%)
			type?: string, // 174376/282289 (61.77%)
		},
		secure_media_embed: {
			content?: string|null, // 174376/932624 (18.70%)
			height?: number, // 174376/932624 (18.70%)
			media_domain_url?: string, // 174376/932624 (18.70%)
			scrolling?: boolean, // 174376/932624 (18.70%)
			width?: number, // 174376/932624 (18.70%)
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
		thumbnail_height?: number|null, // 932204/932624 (99.95%)
		thumbnail_width?: number|null, // 932204/932624 (99.95%)
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: "HOL'UPREDICTIONS"|"T20 World Cup Predictions Tournament"|"Predictions Tournament"|"Spider-Man: No Way Home"|"r/CryptoCurrency Predictions Tournament"|"World Tour Finals",
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
			status: "CLOSED",
			subreddit_id: "t5_qir9n"|"t5_2qhe0"|"t5_2qhj4"|"t5_3e7dq"|"t5_2wlj3"|"t5_2r6dm",
			theme_id: "theme_4"|"theme_6"|"theme_1"|"theme_5"|"theme_7"|"theme_2",
			total_participants: number,
			tournament_id: string,
		}, // 13/932624 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 782411/932624 (83.89%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1432505/29048277 (4.93%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 41104/29048277 (0.14%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 41104/29048277 (0.14%)
	embed_url?: null|"https://google.com"|"https://www.google.com"|"http://google.com/"|"http://www.google.com"|"https://wikipedia.org/wiki/Main_Page", // 41104/29048277 (0.14%)
	event_end?: number, // 1659/29048277 (0.01%)
	event_is_live?: boolean, // 1659/29048277 (0.01%)
	event_start?: number, // 1659/29048277 (0.01%)
	events?: [], // 41104/29048277 (0.14%)
	eventsOnRender?: [], // 41104/29048277 (0.14%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Play Now"|"Download"|"Order Now"|"Install"|"Apply Now"|"Watch Now"|"Contact Us"|"Pre-order Now"|"See Menu"|"Get a Quote"|"Get Showtimes", // 4110/3380280 (0.12%)
			caption?: string, // 389464/3380280 (11.52%)
			display_url?: string, // 3505/3380280 (0.10%)
			id: number,
			media_id: string,
			outbound_url?: string, // 74896/3380280 (2.22%)
		}[],
	}|null, // 1305240/29048277 (4.49%)
	gilded: number,
	gildings: {
		gid_1?: number, // 490275/29048277 (1.69%)
		gid_2?: number, // 36254/29048277 (0.12%)
		gid_3?: number, // 7650/29048277 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 41104/29048277 (0.14%)
	id: string,
	impression_id?: null, // 41104/29048277 (0.14%)
	impression_id_str?: null, // 41104/29048277 (0.14%)
	is_blank?: boolean, // 41104/29048277 (0.14%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1305240/29048277 (4.49%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 41104/29048277 (0.14%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 442909/4988192 (8.88%)
		e: "text"|"emoji",
		t?: string, // 4545283/4988192 (91.12%)
		u?: string, // 442909/4988192 (8.88%)
	}[],
	link_flair_template_id?: string, // 7982545/29048277 (27.48%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds?: number, // 1/66 (1.52%)
		recording_status?: number, // 1/66 (1.52%)
		room_id: string,
	}, // 66/29048277 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "180vqhu1yot6n"|"17xhup61gp9bt"|"17x02w800zfg3"|"17x74gldqi3ex"|"17xffviwzti18"|"17xh1xxf471bd"|"17y06jilj8i3u"|"17so3l90q8zdx"|"180r6emwjmn3h"|"17zp2gv9tki5c"|"180w0zspeihhc"|"181ld8itd1475"|"182556oqbozb1"|"182rt4aomp5al", // 18/3082963 (0.00%)
		oembed?: {
			author_name?: string, // 2212961/2369275 (93.40%)
			author_url?: string, // 2163928/2369275 (91.33%)
			cache_age?: number, // 138222/2369275 (5.83%)
			description?: string, // 224367/2369275 (9.47%)
			height?: number|null, // 2369258/2369275 (100.00%)
			html?: string, // 2369258/2369275 (100.00%)
			marginheight?: number, // 4/2369275 (0.00%)
			marginwidth?: number, // 4/2369275 (0.00%)
			mean_alpha?: number, // 2766/2369275 (0.12%)
			provider_name?: string, // 2369258/2369275 (100.00%)
			provider_url?: string, // 2369258/2369275 (100.00%)
			thumbnail_height?: number, // 2226704/2369275 (93.98%)
			thumbnail_url?: string, // 2227266/2369275 (94.01%)
			thumbnail_width?: number, // 2226704/2369275 (93.98%)
			title?: string, // 2230688/2369275 (94.15%)
			type?: "video"|"rich", // 2369258/2369275 (100.00%)
			url?: string, // 235771/2369275 (9.95%)
			version?: "1.0", // 2369254/2369275 (100.00%)
			width?: number, // 2369258/2369275 (100.00%)
		}, // 2369275/3082963 (76.85%)
		reddit_video?: {
			bitrate_kbps?: number, // 710529/713670 (99.56%)
			dash_url?: string, // 710560/713670 (99.56%)
			duration?: number, // 710560/713670 (99.56%)
			fallback_url?: string, // 710560/713670 (99.56%)
			height?: number|null, // 710723/713670 (99.59%)
			hls_url?: string, // 710560/713670 (99.56%)
			is_gif?: boolean, // 710560/713670 (99.56%)
			scrubber_media_url?: string, // 710560/713670 (99.56%)
			transcoding_message?: string, // 3110/713670 (0.44%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 710723/713670 (99.59%)
		}, // 713670/3082963 (23.15%)
		type?: string, // 2369293/3082963 (76.85%)
	},
	media_embed: {
		content?: string|null, // 2369293/29048277 (8.16%)
		height?: number, // 2369293/29048277 (8.16%)
		scrolling?: boolean, // 2369293/29048277 (8.16%)
		width?: number, // 2369293/29048277 (8.16%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14786/3741007 (0.40%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 3733745/3741007 (99.81%)
			hlsUrl?: string, // 14786/3741007 (0.40%)
			id?: string, // 3733745/3741007 (99.81%)
			isGif?: boolean, // 14786/3741007 (0.40%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3718959/3741007 (99.41%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1043226/3741007 (27.89%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3718959/3741007 (99.41%)
			s?: {
				gif?: string, // 35619/3718959 (0.96%)
				mp4?: string, // 35619/3718959 (0.96%)
				u?: string, // 3683340/3718959 (99.04%)
				x: number,
				y: number,
			}, // 3718959/3741007 (99.41%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 14786/3741007 (0.40%)
			y?: number, // 14786/3741007 (0.40%)
		},
	}|null, // 1648374/29048277 (5.67%)
	media_only: boolean,
	mobile_ad_url?: string, // 41104/29048277 (0.14%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 41104/29048277 (0.14%)
	outbound_link?: {
	}, // 41104/29048277 (0.14%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 5209/401266 (1.30%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED"|"CANCELLED"|"OPEN",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 140707/29048277 (0.48%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 9238604/29048277 (31.80%)
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
				}, // 138144/9238604 (1.50%)
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
				}, // 138144/9238604 (1.50%)
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
				}, // 2871820/9238604 (31.08%)
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
				}, // 2923124/9238604 (31.64%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 675801/676105 (99.96%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 676105/9238604 (7.32%)
	}, // 9238604/29048277 (31.80%)
	priority_id?: null, // 41104/29048277 (0.14%)
	promo_layout?: null, // 41104/29048277 (0.14%)
	promoted?: boolean, // 41104/29048277 (0.14%)
	promoted_by?: null, // 41104/29048277 (0.14%)
	promoted_display_name?: null, // 41104/29048277 (0.14%)
	promoted_url?: null, // 41104/29048277 (0.14%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"deleted"|"automod_filtered"|"author"|"copyright_takedown"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 17702/29048277 (0.06%)
	score: number,
	secure_media: null|{
		event_id?: "180vqhu1yot6n"|"17xhup61gp9bt"|"17x02w800zfg3"|"17x74gldqi3ex"|"17xffviwzti18"|"17xh1xxf471bd"|"17y06jilj8i3u"|"17so3l90q8zdx"|"180r6emwjmn3h"|"17zp2gv9tki5c"|"180w0zspeihhc"|"181ld8itd1475"|"182556oqbozb1"|"182rt4aomp5al", // 18/3082963 (0.00%)
		oembed?: {
			author_name?: string, // 2212961/2369275 (93.40%)
			author_url?: string, // 2163928/2369275 (91.33%)
			cache_age?: number, // 138222/2369275 (5.83%)
			description?: string, // 224367/2369275 (9.47%)
			height?: number|null, // 2369258/2369275 (100.00%)
			html?: string, // 2369258/2369275 (100.00%)
			marginheight?: number, // 4/2369275 (0.00%)
			marginwidth?: number, // 4/2369275 (0.00%)
			mean_alpha?: number, // 2766/2369275 (0.12%)
			provider_name?: string, // 2369258/2369275 (100.00%)
			provider_url?: string, // 2369258/2369275 (100.00%)
			thumbnail_height?: number, // 2226704/2369275 (93.98%)
			thumbnail_url?: string, // 2227266/2369275 (94.01%)
			thumbnail_width?: number, // 2226704/2369275 (93.98%)
			title?: string, // 2230688/2369275 (94.15%)
			type?: "video"|"rich", // 2369258/2369275 (100.00%)
			url?: string, // 235771/2369275 (9.95%)
			version?: "1.0", // 2369254/2369275 (100.00%)
			width?: number, // 2369258/2369275 (100.00%)
		}, // 2369275/3082963 (76.85%)
		reddit_video?: {
			bitrate_kbps?: number, // 710529/713670 (99.56%)
			dash_url?: string, // 710560/713670 (99.56%)
			duration?: number, // 710560/713670 (99.56%)
			fallback_url?: string, // 710560/713670 (99.56%)
			height?: number|null, // 710723/713670 (99.59%)
			hls_url?: string, // 710560/713670 (99.56%)
			is_gif?: boolean, // 710560/713670 (99.56%)
			scrubber_media_url?: string, // 710560/713670 (99.56%)
			transcoding_message?: string, // 3110/713670 (0.44%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 710723/713670 (99.59%)
		}, // 713670/3082963 (23.15%)
		type?: string, // 2369293/3082963 (76.85%)
	},
	secure_media_embed: {
		content?: string|null, // 2369293/29048277 (8.16%)
		height?: number, // 2369293/29048277 (8.16%)
		media_domain_url?: string, // 2369293/29048277 (8.16%)
		scrolling?: boolean, // 2369293/29048277 (8.16%)
		width?: number, // 2369293/29048277 (8.16%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 41104/29048277 (0.14%)
	sk_ad_network_data?: null, // 41104/29048277 (0.14%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 41104/29048277 (0.14%)
	third_party_tracking?: null, // 41104/29048277 (0.14%)
	third_party_tracking_2?: null, // 41104/29048277 (0.14%)
	thumbnail: string,
	thumbnail_height?: number|null, // 29039970/29048277 (99.97%)
	thumbnail_width?: number|null, // 29039970/29048277 (99.97%)
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
		}[], // 84/102 (82.35%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_2"|"theme_6"|"theme_5"|"theme_1"|"theme_8"|"theme_4"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 102/29048277 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 15285806/29048277 (52.62%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}