interface RedditPost {
	adserver_click_url?: null, // 30386/28922711 (0.11%)
	adserver_imp_pixel?: null, // 30386/28922711 (0.11%)
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
	app_store_data?: null, // 30386/28922711 (0.11%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 218285/28922711 (0.75%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 802754/2162482 (37.12%)
		e: "text"|"emoji",
		t?: string, // 1359728/2162482 (62.88%)
		u?: string, // 802754/2162482 (37.12%)
	}[], // 19882548/28922711 (68.74%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 19882548/28922711 (68.74%)
	author_fullname?: string, // 19882548/28922711 (68.74%)
	author_id?: string|null, // 30386/28922711 (0.11%)
	author_patreon_flair?: boolean, // 19882548/28922711 (68.74%)
	author_premium?: boolean, // 19882548/28922711 (68.74%)
	awarders: [],
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"View More"|""|"Play Now"|"Install"|"Apply Now"|"Watch Now"|"Get a Quote"|"Contact Us"|"Pre-order Now"|"Get Showtimes"|"See Menu", // 27526/28922711 (0.10%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|"diy_and_crafts"|"videos"|"memes"|"food"|"funny"|"music",
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
		sr_detail?: {
			banner_img: "",
			banner_size: null,
			community_icon: "",
			created: number,
			created_utc: number,
			display_name: "HardwareSwapUK",
			display_name_prefixed: "r/HardwareSwapUK",
			icon_img: string,
			icon_size: number[],
			key_color: "#0079d3",
			mod_permissions: [],
			name: "t5_2sp1c",
			over_18: boolean,
			primary_color: "#014980",
			sr: "HardwareSwapUK",
			sr_display_name_prefixed: "r/HardwareSwapUK",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/HardwareSwapUK/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads",
		}, // 1/8479 (0.01%)
		subreddit_id: string,
		title: string,
	}[], // 8479/28922711 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1123886/28922711 (3.89%)
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
		author_cakeday?: boolean, // 5374/952940 (0.56%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 41482/106192 (39.06%)
			e: "text"|"emoji",
			t?: string, // 64710/106192 (60.94%)
			u?: string, // 41482/106192 (39.06%)
		}[], // 772352/952940 (81.05%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 772352/952940 (81.05%)
		author_fullname?: string, // 772352/952940 (81.05%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 772352/952940 (81.05%)
		author_premium?: boolean, // 772352/952940 (81.05%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 98/952940 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"animals"|"memes"|"art"|"food"|"videos",
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
		}[], // 1155/952940 (0.12%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"writing"|"entertainment"|"diy_and_crafts"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 306/952940 (0.03%)
		event_is_live?: boolean, // 306/952940 (0.03%)
		event_start?: number, // 306/952940 (0.03%)
		gallery_data?: {
			items: {
				caption?: string, // 30817/206079 (14.95%)
				id: number,
				media_id: string,
				outbound_url?: string, // 9851/206079 (4.78%)
			}[],
		}|null, // 58284/952940 (6.12%)
		gilded: number,
		gildings: {
			gid_1?: number, // 255042/952940 (26.76%)
			gid_2?: number, // 39626/952940 (4.16%)
			gid_3?: number, // 11483/952940 (1.21%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 58284/952940 (6.12%)
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
			a?: string, // 22692/179239 (12.66%)
			e: "text"|"emoji",
			t?: string, // 156547/179239 (87.34%)
			u?: string, // 22692/179239 (12.66%)
		}[],
		link_flair_template_id?: string, // 313808/952940 (32.93%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 175888/182391 (96.43%)
				author_url?: string, // 168024/182391 (92.12%)
				cache_age?: number, // 5532/182391 (3.03%)
				description?: string, // 12533/182391 (6.87%)
				height?: number|null, // 182380/182391 (99.99%)
				html?: string, // 182380/182391 (99.99%)
				mean_alpha?: number, // 31/182391 (0.02%)
				provider_name?: string, // 182380/182391 (99.99%)
				provider_url?: string, // 182380/182391 (99.99%)
				thumbnail_height?: number, // 174949/182391 (95.92%)
				thumbnail_url?: string, // 175014/182391 (95.96%)
				thumbnail_width?: number, // 174949/182391 (95.92%)
				title?: string, // 176420/182391 (96.73%)
				type?: "video"|"rich", // 182380/182391 (99.99%)
				url?: string, // 7845/182391 (4.30%)
				version?: "1.0", // 182380/182391 (99.99%)
				width?: number, // 182380/182391 (99.99%)
			}, // 182391/286729 (63.61%)
			reddit_video?: {
				bitrate_kbps?: number, // 103087/104338 (98.80%)
				dash_url?: string, // 104336/104338 (100.00%)
				duration?: number, // 104336/104338 (100.00%)
				fallback_url?: string, // 104336/104338 (100.00%)
				height?: number, // 104336/104338 (100.00%)
				hls_url?: string, // 104336/104338 (100.00%)
				is_gif?: boolean, // 104336/104338 (100.00%)
				scrubber_media_url?: string, // 104336/104338 (100.00%)
				transcoding_message?: string, // 2/104338 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 104336/104338 (100.00%)
			}, // 104338/286729 (36.39%)
			type?: string, // 182391/286729 (63.61%)
		},
		media_embed: {
			content?: string|null, // 182391/952940 (19.14%)
			height?: number, // 182391/952940 (19.14%)
			scrolling?: boolean, // 182391/952940 (19.14%)
			width?: number, // 182391/952940 (19.14%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 657/239282 (0.27%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 239148/239282 (99.94%)
				hlsUrl?: string, // 657/239282 (0.27%)
				id?: string, // 239148/239282 (99.94%)
				isGif?: boolean, // 657/239282 (0.27%)
				m?: "image/jpg"|"image/png"|"image/gif", // 238491/239282 (99.67%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 102169/239282 (42.70%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 238491/239282 (99.67%)
				s?: {
					gif?: string, // 3272/238491 (1.37%)
					mp4?: string, // 3272/238491 (1.37%)
					u?: string, // 235219/238491 (98.63%)
					x: number,
					y: number,
				}, // 238491/239282 (99.67%)
				status: "valid"|"failed",
				x?: number, // 657/239282 (0.27%)
				y?: number, // 657/239282 (0.27%)
			},
		}|null, // 69567/952940 (7.30%)
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
				total_stake_amount?: number, // 16/7798 (0.21%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"8942415"|"8965999"|"9315657"|"9473311",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2313/952940 (0.24%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 613769/952940 (64.41%)
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
					}, // 15325/613769 (2.50%)
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
					}, // 15325/613769 (2.50%)
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
					}, // 258132/613769 (42.06%)
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
					}, // 262141/613769 (42.71%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 111460/111749 (99.74%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 111749/613769 (18.21%)
		}, // 613769/952940 (64.41%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 275/952940 (0.03%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 175888/182391 (96.43%)
				author_url?: string, // 168024/182391 (92.12%)
				cache_age?: number, // 5532/182391 (3.03%)
				description?: string, // 12533/182391 (6.87%)
				height?: number|null, // 182380/182391 (99.99%)
				html?: string, // 182380/182391 (99.99%)
				mean_alpha?: number, // 31/182391 (0.02%)
				provider_name?: string, // 182380/182391 (99.99%)
				provider_url?: string, // 182380/182391 (99.99%)
				thumbnail_height?: number, // 174949/182391 (95.92%)
				thumbnail_url?: string, // 175014/182391 (95.96%)
				thumbnail_width?: number, // 174949/182391 (95.92%)
				title?: string, // 176420/182391 (96.73%)
				type?: "video"|"rich", // 182380/182391 (99.99%)
				url?: string, // 7845/182391 (4.30%)
				version?: "1.0", // 182380/182391 (99.99%)
				width?: number, // 182380/182391 (99.99%)
			}, // 182391/286729 (63.61%)
			reddit_video?: {
				bitrate_kbps?: number, // 103087/104338 (98.80%)
				dash_url?: string, // 104336/104338 (100.00%)
				duration?: number, // 104336/104338 (100.00%)
				fallback_url?: string, // 104336/104338 (100.00%)
				height?: number, // 104336/104338 (100.00%)
				hls_url?: string, // 104336/104338 (100.00%)
				is_gif?: boolean, // 104336/104338 (100.00%)
				scrubber_media_url?: string, // 104336/104338 (100.00%)
				transcoding_message?: string, // 2/104338 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 104336/104338 (100.00%)
			}, // 104338/286729 (36.39%)
			type?: string, // 182391/286729 (63.61%)
		},
		secure_media_embed: {
			content?: string|null, // 182391/952940 (19.14%)
			height?: number, // 182391/952940 (19.14%)
			media_domain_url?: string, // 182391/952940 (19.14%)
			scrolling?: boolean, // 182391/952940 (19.14%)
			width?: number, // 182391/952940 (19.14%)
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
		suggested_sort: null|"top"|"confidence"|"qa"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height?: number|null, // 952562/952940 (99.96%)
		thumbnail_width?: number|null, // 952562/952940 (99.96%)
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: string,
			predictions: {
				body: string,
				created_at: number,
				id: "t3_ovac9z"|"t3_ovac9s"|"t3_ovac9d"|"t3_ovac92"|"t3_ovac8r"|"t3_ovac89"|"t3_ovac7z"|"t3_ovac7n"|"t3_ovac7a"|"t3_ovac73"|"t3_ovac6o"|"t3_ovac6c"|"t3_ovac60"|"t3_ovac5p",
				is_nsfw: boolean,
				is_rtjson: boolean,
				is_spoiler: boolean,
				options: {
					id: string,
					image_url: null,
					text: string,
					total_amount: number,
					user_amount: null,
					vote_count: number,
				}[],
				resolved_option_id: "9473311"|"9473305"|"9473299"|"9473293"|"9473287"|"9473281"|"9473273"|"9473268"|"9473260"|"9473255"|"9473246"|"9473239"|"9473233"|"9473227",
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
			subreddit_id: "t5_2wlj3",
			theme_id: "theme_1",
			total_participants: number,
			tournament_id: string,
		}, // 2/952940 (0.00%)
		treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 834672/952940 (87.59%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1123886/28922711 (3.89%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 30386/28922711 (0.11%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 30386/28922711 (0.11%)
	embed_url?: null|string, // 30386/28922711 (0.11%)
	event_end?: number, // 1639/28922711 (0.01%)
	event_is_live?: boolean, // 1639/28922711 (0.01%)
	event_start?: number, // 1639/28922711 (0.01%)
	events?: [], // 30386/28922711 (0.11%)
	eventsOnRender?: [], // 30386/28922711 (0.11%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Apply Now"|"Install"|"Download"|"Contact Us"|"Play Now"|"Get a Quote"|"Watch Now"|"Get Showtimes"|"Pre-order Now"|"See Menu", // 5338/3215514 (0.17%)
			caption?: string, // 390755/3215514 (12.15%)
			display_url?: string, // 3971/3215514 (0.12%)
			id: number,
			media_id: string,
			outbound_url?: string, // 74843/3215514 (2.33%)
		}[],
	}|null, // 1597131/28922711 (5.52%)
	gilded: number,
	gildings: {
		gid_1?: number, // 506803/28922711 (1.75%)
		gid_2?: number, // 42445/28922711 (0.15%)
		gid_3?: number, // 8818/28922711 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 30386/28922711 (0.11%)
	id: string,
	impression_id?: null, // 30386/28922711 (0.11%)
	impression_id_str?: null, // 30386/28922711 (0.11%)
	is_blank?: boolean, // 30386/28922711 (0.11%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1597131/28922711 (5.52%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 30386/28922711 (0.11%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 464392/5988818 (7.75%)
		e: "text"|"emoji",
		t?: string, // 5524426/5988818 (92.25%)
		u?: string, // 464392/5988818 (7.75%)
	}[],
	link_flair_template_id?: string, // 9402391/28922711 (32.51%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		room_id: "992d5196-249f-4774-8202-a8ea7f544634"|"9c24ffc6-dd4e-4c94-989a-2c75257f8881"|"c8022880-ced2-4347-a163-98e9338025de",
	}, // 3/28922711 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "17e4bmf03bve3"|"179j7zwxosgje"|"17a759zzfuoup"|"17d61ji9274jy"|"17dauirnbtx38"|"178p7pffnuyvy"|"17afodgy4ngen"|"17ah1fmbow52p"|"17ahrr4899sb9"|"17ahuyo5dc417"|"17bfh4owdgtnk"|"17btlxxavosfv"|"17dctf7z13b4o", // 19/3152749 (0.00%)
		oembed?: {
			author_name?: string, // 2112108/2308921 (91.48%)
			author_url?: string, // 2065263/2308921 (89.45%)
			cache_age?: number, // 170431/2308921 (7.38%)
			description?: string, // 250606/2308921 (10.85%)
			height?: number|null, // 2308892/2308921 (100.00%)
			html?: string, // 2308892/2308921 (100.00%)
			marginheight?: number, // 2/2308921 (0.00%)
			marginwidth?: number, // 2/2308921 (0.00%)
			mean_alpha?: number, // 3187/2308921 (0.14%)
			provider_name?: string, // 2308892/2308921 (100.00%)
			provider_url?: string, // 2308892/2308921 (100.00%)
			thumbnail_height?: number, // 2119044/2308921 (91.78%)
			thumbnail_url?: string, // 2121643/2308921 (91.89%)
			thumbnail_width?: number, // 2119044/2308921 (91.78%)
			title?: string, // 2126070/2308921 (92.08%)
			type?: "video"|"rich", // 2308892/2308921 (100.00%)
			url?: string, // 270046/2308921 (11.70%)
			version?: "1.0", // 2308890/2308921 (100.00%)
			width?: number, // 2308892/2308921 (100.00%)
		}, // 2308921/3152749 (73.24%)
		reddit_video?: {
			bitrate_kbps?: number, // 838496/843809 (99.37%)
			dash_url?: string, // 838514/843809 (99.37%)
			duration?: number, // 838514/843809 (99.37%)
			fallback_url?: string, // 838514/843809 (99.37%)
			height?: number|null, // 838761/843809 (99.40%)
			hls_url?: string, // 838514/843809 (99.37%)
			is_gif?: boolean, // 838514/843809 (99.37%)
			scrubber_media_url?: string, // 838514/843809 (99.37%)
			transcoding_message?: string, // 5295/843809 (0.63%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 838761/843809 (99.40%)
		}, // 843809/3152749 (26.76%)
		type?: string, // 2308940/3152749 (73.24%)
	},
	media_embed: {
		content?: string|null, // 2308940/28922711 (7.98%)
		height?: number, // 2308940/28922711 (7.98%)
		scrolling?: boolean, // 2308940/28922711 (7.98%)
		width?: number, // 2308940/28922711 (7.98%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 13548/3577877 (0.38%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 3573025/3577877 (99.86%)
			hlsUrl?: string, // 13548/3577877 (0.38%)
			id?: string, // 3573025/3577877 (99.86%)
			isGif?: boolean, // 13548/3577877 (0.38%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3559477/3577877 (99.49%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 885308/3577877 (24.74%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3559477/3577877 (99.49%)
			s?: {
				gif?: string, // 27225/3559477 (0.76%)
				mp4?: string, // 27225/3559477 (0.76%)
				u?: string, // 3532252/3559477 (99.24%)
				x: number,
				y: number,
			}, // 3559477/3577877 (99.49%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 13548/3577877 (0.38%)
			y?: number, // 13548/3577877 (0.38%)
		},
	}|null, // 1950547/28922711 (6.74%)
	media_only: boolean,
	mobile_ad_url?: string, // 30386/28922711 (0.11%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 30386/28922711 (0.11%)
	outbound_link?: {
	}, // 30386/28922711 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 1138/396457 (0.29%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 157466/28922711 (0.54%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 8984020/28922711 (31.06%)
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
				}, // 100170/8984020 (1.11%)
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
				}, // 100170/8984020 (1.11%)
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
				}, // 2419114/8984020 (26.93%)
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
				}, // 2478829/8984020 (27.59%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 455548/455878 (99.93%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 455878/8984020 (5.07%)
	}, // 8984020/28922711 (31.06%)
	priority_id?: null, // 30386/28922711 (0.11%)
	promo_layout?: null, // 30386/28922711 (0.11%)
	promoted?: boolean, // 30386/28922711 (0.11%)
	promoted_by?: null, // 30386/28922711 (0.11%)
	promoted_display_name?: null, // 30386/28922711 (0.11%)
	promoted_url?: null, // 30386/28922711 (0.11%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"reddit"|"moderator"|"automod_filtered"|"author"|"copyright_takedown"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 27726/28922711 (0.10%)
	score: number,
	secure_media: null|{
		event_id?: "17e4bmf03bve3"|"179j7zwxosgje"|"17a759zzfuoup"|"17d61ji9274jy"|"17dauirnbtx38"|"178p7pffnuyvy"|"17afodgy4ngen"|"17ah1fmbow52p"|"17ahrr4899sb9"|"17ahuyo5dc417"|"17bfh4owdgtnk"|"17btlxxavosfv"|"17dctf7z13b4o", // 19/3152749 (0.00%)
		oembed?: {
			author_name?: string, // 2112108/2308921 (91.48%)
			author_url?: string, // 2065263/2308921 (89.45%)
			cache_age?: number, // 170431/2308921 (7.38%)
			description?: string, // 250606/2308921 (10.85%)
			height?: number|null, // 2308892/2308921 (100.00%)
			html?: string, // 2308892/2308921 (100.00%)
			marginheight?: number, // 2/2308921 (0.00%)
			marginwidth?: number, // 2/2308921 (0.00%)
			mean_alpha?: number, // 3187/2308921 (0.14%)
			provider_name?: string, // 2308892/2308921 (100.00%)
			provider_url?: string, // 2308892/2308921 (100.00%)
			thumbnail_height?: number, // 2119044/2308921 (91.78%)
			thumbnail_url?: string, // 2121643/2308921 (91.89%)
			thumbnail_width?: number, // 2119044/2308921 (91.78%)
			title?: string, // 2126070/2308921 (92.08%)
			type?: "video"|"rich", // 2308892/2308921 (100.00%)
			url?: string, // 270046/2308921 (11.70%)
			version?: "1.0", // 2308890/2308921 (100.00%)
			width?: number, // 2308892/2308921 (100.00%)
		}, // 2308921/3152749 (73.24%)
		reddit_video?: {
			bitrate_kbps?: number, // 838496/843809 (99.37%)
			dash_url?: string, // 838514/843809 (99.37%)
			duration?: number, // 838514/843809 (99.37%)
			fallback_url?: string, // 838514/843809 (99.37%)
			height?: number|null, // 838761/843809 (99.40%)
			hls_url?: string, // 838514/843809 (99.37%)
			is_gif?: boolean, // 838514/843809 (99.37%)
			scrubber_media_url?: string, // 838514/843809 (99.37%)
			transcoding_message?: string, // 5295/843809 (0.63%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 838761/843809 (99.40%)
		}, // 843809/3152749 (26.76%)
		type?: string, // 2308940/3152749 (73.24%)
	},
	secure_media_embed: {
		content?: string|null, // 2308940/28922711 (7.98%)
		height?: number, // 2308940/28922711 (7.98%)
		media_domain_url?: string, // 2308940/28922711 (7.98%)
		scrolling?: boolean, // 2308940/28922711 (7.98%)
		width?: number, // 2308940/28922711 (7.98%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 30386/28922711 (0.11%)
	sk_ad_network_data?: null, // 30386/28922711 (0.11%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 30386/28922711 (0.11%)
	third_party_tracking?: null, // 30386/28922711 (0.11%)
	third_party_tracking_2?: null, // 30386/28922711 (0.11%)
	thumbnail: string,
	thumbnail_height?: number|null, // 28914167/28922711 (99.97%)
	thumbnail_width?: number|null, // 28914167/28922711 (99.97%)
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	tournament_data?: {
		currency: "GAME_TOKENS"|"COINS",
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
			resolved_option_id: string,
			status: "RESOLVED",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[], // 20/24 (83.33%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1",
		total_participants: number,
		tournament_id: string,
	}, // 24/28922711 (0.00%)
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 18083957/28922711 (62.53%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}