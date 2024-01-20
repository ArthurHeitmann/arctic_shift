interface RedditPost {
	adserver_click_url?: null, // 35431/29863861 (0.12%)
	adserver_imp_pixel?: null, // 35431/29863861 (0.12%)
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
		sticky_duration_seconds?: null, // 1582230/1843290 (85.84%)
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
	app_store_data?: null, // 35431/29863861 (0.12%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 85037/29863861 (0.28%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 758842/2041906 (37.16%)
		e: "text"|"emoji",
		t?: string, // 1283064/2041906 (62.84%)
		u?: string, // 758842/2041906 (37.16%)
	}[], // 21127195/29863861 (70.75%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 21127195/29863861 (70.75%)
	author_fullname?: string, // 21127195/29863861 (70.75%)
	author_id?: string|null, // 35431/29863861 (0.12%)
	author_patreon_flair?: boolean, // 21127195/29863861 (70.75%)
	author_premium?: boolean, // 21127195/29863861 (70.75%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 33104/29863861 (0.11%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"photography"|"animals"|"entertainment"|"gaming"|"diy_and_crafts"|"memes"|"videos"|"food"|"music",
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
			display_name: "DontDiddleDecember"|"incremental_games"|"Lineman"|"CKsTechNews",
			display_name_prefixed: "r/DontDiddleDecember"|"r/incremental_games"|"r/Lineman"|"r/CKsTechNews",
			icon_img: string,
			icon_size: number[]|null,
			key_color: "#ea0027"|"#0079d3"|""|"#222222",
			mod_permissions: [],
			name: "t5_qwtxo"|"t5_2yia0"|"t5_2tlvx"|"t5_41mynz",
			over_18: boolean,
			primary_color: "",
			sr: "DontDiddleDecember"|"incremental_games"|"Lineman"|"CKsTechNews",
			sr_display_name_prefixed: "r/DontDiddleDecember"|"r/incremental_games"|"r/Lineman"|"r/CKsTechNews",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/DontDiddleDecember/"|"/r/incremental_games/"|"/r/Lineman/"|"/r/CKsTechNews/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads"|"no_ads"|null,
		}, // 4/11139 (0.04%)
		subreddit_id: string,
		title: string,
	}[], // 11139/29863861 (0.04%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1611194/29863861 (5.40%)
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
			sticky_duration_seconds?: null, // 958052/1124127 (85.23%)
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
		author_cakeday?: boolean, // 3318/1019313 (0.33%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 37445/98871 (37.87%)
			e: "text"|"emoji",
			t?: string, // 61426/98871 (62.13%)
			u?: string, // 37445/98871 (37.87%)
		}[], // 872343/1019313 (85.58%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 872343/1019313 (85.58%)
		author_fullname?: string, // 872343/1019313 (85.58%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 872343/1019313 (85.58%)
		author_premium?: boolean, // 872343/1019313 (85.58%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 185/1019313 (0.02%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"memes"|"food",
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
		}[], // 993/1019313 (0.10%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 230/1019313 (0.02%)
		event_is_live?: boolean, // 230/1019313 (0.02%)
		event_start?: number, // 230/1019313 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 38007/274135 (13.86%)
				id: number,
				media_id: string,
				outbound_url?: string, // 18957/274135 (6.92%)
			}[],
		}|null, // 59653/1019313 (5.85%)
		gilded: number,
		gildings: {
			gid_1?: number, // 250168/1019313 (24.54%)
			gid_2?: number, // 35615/1019313 (3.49%)
			gid_3?: number, // 9828/1019313 (0.96%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 59653/1019313 (5.85%)
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
			a?: string, // 28514/177914 (16.03%)
			e: "text"|"emoji",
			t?: string, // 149400/177914 (83.97%)
			u?: string, // 28514/177914 (16.03%)
		}[],
		link_flair_template_id?: string, // 320987/1019313 (31.49%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			room_id: "03b66701-fa35-4951-bcae-3e96346481a5",
		}, // 1/1019313 (0.00%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 210190/214734 (97.88%)
				author_url?: string, // 201652/214734 (93.91%)
				cache_age?: number, // 5859/214734 (2.73%)
				description?: string, // 12585/214734 (5.86%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 34/214734 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 207527/214734 (96.64%)
				thumbnail_url?: string, // 207569/214734 (96.66%)
				thumbnail_width?: number, // 207527/214734 (96.64%)
				title?: string, // 208811/214734 (97.24%)
				type: "video"|"rich",
				url?: string, // 8428/214734 (3.92%)
				version: "1.0",
				width: number,
			}, // 214734/333072 (64.47%)
			reddit_video?: {
				bitrate_kbps?: number, // 117503/118338 (99.29%)
				dash_url?: string, // 118333/118338 (100.00%)
				duration?: number, // 118333/118338 (100.00%)
				fallback_url?: string, // 118333/118338 (100.00%)
				height?: number, // 118333/118338 (100.00%)
				hls_url?: string, // 118333/118338 (100.00%)
				is_gif?: boolean, // 118333/118338 (100.00%)
				scrubber_media_url?: string, // 118333/118338 (100.00%)
				transcoding_message?: string, // 5/118338 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 118333/118338 (100.00%)
			}, // 118338/333072 (35.53%)
			type?: string, // 214734/333072 (64.47%)
		},
		media_embed: {
			content?: string, // 214734/1019313 (21.07%)
			height?: number, // 214734/1019313 (21.07%)
			scrolling?: boolean, // 214734/1019313 (21.07%)
			width?: number, // 214734/1019313 (21.07%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 522/298316 (0.17%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 298125/298316 (99.94%)
				hlsUrl?: string, // 522/298316 (0.17%)
				id?: string, // 298125/298316 (99.94%)
				isGif?: boolean, // 522/298316 (0.17%)
				m?: "image/jpg"|"image/png"|"image/gif", // 297603/298316 (99.76%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 148487/298316 (49.78%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 297603/298316 (99.76%)
				s?: {
					gif?: string, // 11276/297603 (3.79%)
					mp4?: string, // 11276/297603 (3.79%)
					u?: string, // 286327/297603 (96.21%)
					x: number,
					y: number,
				}, // 297603/298316 (99.76%)
				status: "valid"|"failed",
				x?: number, // 522/298316 (0.17%)
				y?: number, // 522/298316 (0.17%)
			},
		}|null, // 70159/1019313 (6.88%)
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
				total_stake_amount?: number, // 82/8039 (1.02%)
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
		}|null, // 2272/1019313 (0.22%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery", // 685872/1019313 (67.29%)
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
					}, // 26320/685872 (3.84%)
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
					}, // 26320/685872 (3.84%)
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
					}, // 327982/685872 (47.82%)
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
					}, // 332033/685872 (48.41%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 158857/159008 (99.91%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 159008/685872 (23.18%)
		}, // 685872/1019313 (67.29%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"moderator"|"deleted"|"automod_filtered"|"author"|"content_takedown"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 224/1019313 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 210190/214734 (97.88%)
				author_url?: string, // 201652/214734 (93.91%)
				cache_age?: number, // 5859/214734 (2.73%)
				description?: string, // 12585/214734 (5.86%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 34/214734 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 207527/214734 (96.64%)
				thumbnail_url?: string, // 207569/214734 (96.66%)
				thumbnail_width?: number, // 207527/214734 (96.64%)
				title?: string, // 208811/214734 (97.24%)
				type: "video"|"rich",
				url?: string, // 8428/214734 (3.92%)
				version: "1.0",
				width: number,
			}, // 214734/333072 (64.47%)
			reddit_video?: {
				bitrate_kbps?: number, // 117503/118338 (99.29%)
				dash_url?: string, // 118333/118338 (100.00%)
				duration?: number, // 118333/118338 (100.00%)
				fallback_url?: string, // 118333/118338 (100.00%)
				height?: number, // 118333/118338 (100.00%)
				hls_url?: string, // 118333/118338 (100.00%)
				is_gif?: boolean, // 118333/118338 (100.00%)
				scrubber_media_url?: string, // 118333/118338 (100.00%)
				transcoding_message?: string, // 5/118338 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 118333/118338 (100.00%)
			}, // 118338/333072 (35.53%)
			type?: string, // 214734/333072 (64.47%)
		},
		secure_media_embed: {
			content?: string, // 214734/1019313 (21.07%)
			height?: number, // 214734/1019313 (21.07%)
			media_domain_url?: string, // 214734/1019313 (21.07%)
			scrolling?: boolean, // 214734/1019313 (21.07%)
			width?: number, // 214734/1019313 (21.07%)
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
		thumbnail_height?: number|null, // 1018952/1019313 (99.96%)
		thumbnail_width?: number|null, // 1018952/1019313 (99.96%)
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: "HOL'UPREDICTIONS"|"Predictions Tournament"|"2021 Predictions Tournament"|"r/196 Predictions Tournament",
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
					total_amount: number,
					user_amount: null,
					vote_count: number,
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
			subreddit_id: "t5_qir9n"|"t5_2r6z7"|"t5_2qimj"|"t5_2v92f"|"t5_2wivw",
			theme_id: "theme_4"|"theme_1"|"theme_2",
			total_participants: number,
			tournament_id: string,
		}, // 16/1019313 (0.00%)
		treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 876732/1019313 (86.01%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1611194/29863861 (5.40%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 35431/29863861 (0.12%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 35431/29863861 (0.12%)
	embed_url?: null|string, // 35431/29863861 (0.12%)
	event_end?: number, // 1332/29863861 (0.00%)
	event_is_live?: boolean, // 1332/29863861 (0.00%)
	event_start?: number, // 1332/29863861 (0.00%)
	events?: [], // 35431/29863861 (0.12%)
	eventsOnRender?: [], // 35431/29863861 (0.12%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Install"|"View More"|"Download"|"Order Now"|"Contact Us"|"Play Now"|"Get Showtimes"|"Pre-order Now"|"Apply Now"|"Get a Quote"|"Watch Now", // 3681/3716499 (0.10%)
			caption?: string, // 425893/3716499 (11.46%)
			display_url?: string, // 3015/3716499 (0.08%)
			id: number,
			media_id: string,
			outbound_url?: string, // 78969/3716499 (2.12%)
		}[],
	}|null, // 1442129/29863861 (4.83%)
	gilded: number,
	gildings: {
		gid_1?: number, // 523373/29863861 (1.75%)
		gid_2?: number, // 38560/29863861 (0.13%)
		gid_3?: number, // 8043/29863861 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 35431/29863861 (0.12%)
	id: string,
	impression_id?: null, // 35431/29863861 (0.12%)
	impression_id_str?: null, // 35431/29863861 (0.12%)
	is_blank?: boolean, // 35431/29863861 (0.12%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1442129/29863861 (4.83%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 35431/29863861 (0.12%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 466163/5263034 (8.86%)
		e: "text"|"emoji",
		t?: string, // 4796871/5263034 (91.14%)
		u?: string, // 466163/5263034 (8.86%)
	}[],
	link_flair_template_id?: string, // 8461932/29863861 (28.34%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds?: number, // 85/99 (85.86%)
		recording_fallback_url?: string, // 54/99 (54.55%)
		recording_status?: number, // 85/99 (85.86%)
		room_id: string,
	}, // 99/29863861 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18324h58km01z"|"183jygu786qyz"|"183yqkxfzhkkm"|"18461a4owks18"|"184i1tva6tidn"|"184x1qb6m8ihd"|"185r3bz8nipep"|"186bvfzv854oe"|"1877ooreca3zf"|"188exkn7hs8vu", // 10/3331417 (0.00%)
		oembed?: {
			author_name?: string, // 2381038/2554086 (93.22%)
			author_url?: string, // 2333952/2554086 (91.38%)
			cache_age?: number, // 138362/2554086 (5.42%)
			description?: string, // 238298/2554086 (9.33%)
			height?: number|null, // 2554082/2554086 (100.00%)
			html?: string, // 2554082/2554086 (100.00%)
			mean_alpha?: number, // 2866/2554086 (0.11%)
			provider_name?: string, // 2554082/2554086 (100.00%)
			provider_url?: string, // 2554082/2554086 (100.00%)
			thumbnail_height?: number, // 2410236/2554086 (94.37%)
			thumbnail_url?: string, // 2410933/2554086 (94.40%)
			thumbnail_width?: number, // 2410236/2554086 (94.37%)
			title?: string, // 2415490/2554086 (94.57%)
			type?: "video"|"rich", // 2554082/2554086 (100.00%)
			url?: string, // 246649/2554086 (9.66%)
			version?: "1.0", // 2554082/2554086 (100.00%)
			width?: number, // 2554082/2554086 (100.00%)
		}, // 2554086/3331417 (76.67%)
		reddit_video?: {
			bitrate_kbps?: number, // 773377/777321 (99.49%)
			dash_url?: string, // 773395/777321 (99.49%)
			duration?: number, // 773395/777321 (99.49%)
			fallback_url?: string, // 773395/777321 (99.49%)
			height?: number|null, // 773592/777321 (99.52%)
			hls_url?: string, // 773395/777321 (99.49%)
			is_gif?: boolean, // 773395/777321 (99.49%)
			scrubber_media_url?: string, // 773395/777321 (99.49%)
			transcoding_message?: string, // 3926/777321 (0.51%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 773592/777321 (99.52%)
		}, // 777321/3331417 (23.33%)
		type?: string, // 2554096/3331417 (76.67%)
	},
	media_embed: {
		content?: string|null, // 2554096/29863861 (8.55%)
		height?: number, // 2554096/29863861 (8.55%)
		scrolling?: boolean, // 2554096/29863861 (8.55%)
		width?: number, // 2554096/29863861 (8.55%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 16037/4091056 (0.39%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 4083833/4091056 (99.82%)
			hlsUrl?: string, // 16037/4091056 (0.39%)
			id?: string, // 4083833/4091056 (99.82%)
			isGif?: boolean, // 16037/4091056 (0.39%)
			m?: "image/jpg"|"image/png"|"image/gif", // 4067796/4091056 (99.43%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1227103/4091056 (29.99%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4067796/4091056 (99.43%)
			s?: {
				gif?: string, // 37941/4067796 (0.93%)
				mp4?: string, // 37941/4067796 (0.93%)
				u?: string, // 4029855/4067796 (99.07%)
				x: number,
				y: number,
			}, // 4067796/4091056 (99.43%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 16037/4091056 (0.39%)
			y?: number, // 16037/4091056 (0.39%)
		},
	}|null, // 1799127/29863861 (6.02%)
	media_only: boolean,
	mobile_ad_url?: string, // 35431/29863861 (0.12%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 35431/29863861 (0.12%)
	outbound_link?: {
	}, // 35431/29863861 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 4800/407604 (1.18%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED"|"CANCELLED"|"CLOSED"|"OPEN",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 141722/29863861 (0.47%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 9604879/29863861 (32.16%)
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
				}, // 152479/9604879 (1.59%)
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
				}, // 152479/9604879 (1.59%)
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
				}, // 3157959/9604879 (32.88%)
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
				}, // 3216555/9604879 (33.49%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 742083/742282 (99.97%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 742282/9604879 (7.73%)
	}, // 9604879/29863861 (32.16%)
	priority_id?: null, // 35431/29863861 (0.12%)
	promo_layout?: null, // 35431/29863861 (0.12%)
	promoted?: boolean, // 35431/29863861 (0.12%)
	promoted_by?: null, // 35431/29863861 (0.12%)
	promoted_display_name?: null, // 35431/29863861 (0.12%)
	promoted_url?: null, // 35431/29863861 (0.12%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"moderator"|"deleted"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 18939/29863861 (0.06%)
	score: number,
	secure_media: null|{
		event_id?: "18324h58km01z"|"183jygu786qyz"|"183yqkxfzhkkm"|"18461a4owks18"|"184i1tva6tidn"|"184x1qb6m8ihd"|"185r3bz8nipep"|"186bvfzv854oe"|"1877ooreca3zf"|"188exkn7hs8vu", // 10/3331417 (0.00%)
		oembed?: {
			author_name?: string, // 2381038/2554086 (93.22%)
			author_url?: string, // 2333952/2554086 (91.38%)
			cache_age?: number, // 138362/2554086 (5.42%)
			description?: string, // 238298/2554086 (9.33%)
			height?: number|null, // 2554082/2554086 (100.00%)
			html?: string, // 2554082/2554086 (100.00%)
			mean_alpha?: number, // 2866/2554086 (0.11%)
			provider_name?: string, // 2554082/2554086 (100.00%)
			provider_url?: string, // 2554082/2554086 (100.00%)
			thumbnail_height?: number, // 2410236/2554086 (94.37%)
			thumbnail_url?: string, // 2410933/2554086 (94.40%)
			thumbnail_width?: number, // 2410236/2554086 (94.37%)
			title?: string, // 2415490/2554086 (94.57%)
			type?: "video"|"rich", // 2554082/2554086 (100.00%)
			url?: string, // 246649/2554086 (9.66%)
			version?: "1.0", // 2554082/2554086 (100.00%)
			width?: number, // 2554082/2554086 (100.00%)
		}, // 2554086/3331417 (76.67%)
		reddit_video?: {
			bitrate_kbps?: number, // 773377/777321 (99.49%)
			dash_url?: string, // 773395/777321 (99.49%)
			duration?: number, // 773395/777321 (99.49%)
			fallback_url?: string, // 773395/777321 (99.49%)
			height?: number|null, // 773592/777321 (99.52%)
			hls_url?: string, // 773395/777321 (99.49%)
			is_gif?: boolean, // 773395/777321 (99.49%)
			scrubber_media_url?: string, // 773395/777321 (99.49%)
			transcoding_message?: string, // 3926/777321 (0.51%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 773592/777321 (99.52%)
		}, // 777321/3331417 (23.33%)
		type?: string, // 2554096/3331417 (76.67%)
	},
	secure_media_embed: {
		content?: string|null, // 2554096/29863861 (8.55%)
		height?: number, // 2554096/29863861 (8.55%)
		media_domain_url?: string, // 2554096/29863861 (8.55%)
		scrolling?: boolean, // 2554096/29863861 (8.55%)
		width?: number, // 2554096/29863861 (8.55%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 35431/29863861 (0.12%)
	sk_ad_network_data?: null, // 35431/29863861 (0.12%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 35431/29863861 (0.12%)
	third_party_tracking?: null, // 35431/29863861 (0.12%)
	third_party_tracking_2?: null, // 35431/29863861 (0.12%)
	thumbnail: string,
	thumbnail_height?: number|null, // 29854356/29863861 (99.97%)
	thumbnail_width?: number|null, // 29854356/29863861 (99.97%)
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
		}[], // 100/111 (90.09%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_8"|"theme_4"|"theme_2"|"theme_6"|"theme_5"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}|null, // 112/29863861 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 16093938/29863861 (53.89%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}