interface RedditPost {
	adserver_click_url?: null, // 42471/28567813 (0.15%)
	adserver_imp_pixel?: null, // 42471/28567813 (0.15%)
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
	app_store_data?: null, // 42471/28567813 (0.15%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 157128/28567813 (0.55%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 756276/2028390 (37.28%)
		e: "text"|"emoji",
		t?: string, // 1272114/2028390 (62.72%)
		u?: string, // 756276/2028390 (37.28%)
	}[], // 19970804/28567813 (69.91%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 19970804/28567813 (69.91%)
	author_fullname?: string, // 19970804/28567813 (69.91%)
	author_id?: string|null, // 42471/28567813 (0.15%)
	author_patreon_flair?: boolean, // 19970804/28567813 (69.91%)
	author_premium?: boolean, // 19970804/28567813 (69.91%)
	awarders: [],
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|""|"View More"|"Install"|"Watch Now"|"Apply Now"|"Play Now"|"See Menu"|"Pre-order Now"|"Get a Quote"|"Contact Us"|"Get Showtimes", // 40120/28567813 (0.14%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"food"|"memes"|"music"|"funny",
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
			display_name: "travel"|"AEWOfficial",
			display_name_prefixed: "r/travel"|"r/AEWOfficial",
			icon_img: string,
			icon_size: null|number[],
			key_color: "#0079d3"|"#222222",
			mod_permissions: [],
			name: "t5_2qh41"|"t5_ubkze",
			over_18: boolean,
			primary_color: "#0079d3"|"#d404cc",
			sr: "travel"|"AEWOfficial",
			sr_display_name_prefixed: "r/travel"|"r/AEWOfficial",
			subreddit_type: "public",
			subscribers: number,
			title: "travel"|"All Elite Wrestling",
			url: "/r/travel/"|"/r/AEWOfficial/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads"|"some_ads",
		}, // 2/9675 (0.02%)
		subreddit_id: string,
		title: string,
	}[], // 9675/28567813 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1286369/28567813 (4.50%)
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
		author_cakeday?: boolean, // 4506/879692 (0.51%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 35269/91442 (38.57%)
			e: "text"|"emoji",
			t?: string, // 56173/91442 (61.43%)
			u?: string, // 35269/91442 (38.57%)
		}[], // 752421/879692 (85.53%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 752421/879692 (85.53%)
		author_fullname?: string, // 752421/879692 (85.53%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 752421/879692 (85.53%)
		author_premium?: boolean, // 752421/879692 (85.53%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 158/879692 (0.02%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"entertainment"|"photography"|"animals"|"gaming"|"food",
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
		}[], // 898/879692 (0.10%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 161/879692 (0.02%)
		event_is_live?: boolean, // 161/879692 (0.02%)
		event_start?: number, // 161/879692 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 32904/218880 (15.03%)
				id: number,
				media_id: string,
				outbound_url?: string, // 12747/218880 (5.82%)
			}[],
		}|null, // 48815/879692 (5.55%)
		gilded: number,
		gildings: {
			gid_1?: number, // 211938/879692 (24.09%)
			gid_2?: number, // 32393/879692 (3.68%)
			gid_3?: number, // 8975/879692 (1.02%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 48815/879692 (5.55%)
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
			a?: string, // 26666/159706 (16.70%)
			e: "text"|"emoji",
			t?: string, // 133040/159706 (83.30%)
			u?: string, // 26666/159706 (16.70%)
		}[],
		link_flair_template_id?: string, // 283186/879692 (32.19%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			room_id: "708ad81f-8959-4655-bd73-150d053b11bd"|"17d8ad5d-00e5-4a9c-94f2-dda5430e14ec"|"c8c487ee-6090-4496-8630-adab07a30d08",
		}, // 5/879692 (0.00%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 173178/177198 (97.73%)
				author_url?: string, // 164746/177198 (92.97%)
				cache_age?: number, // 4899/177198 (2.76%)
				description?: string, // 11914/177198 (6.72%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 42/177198 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 171471/177198 (96.77%)
				thumbnail_url?: string, // 171530/177198 (96.80%)
				thumbnail_width?: number, // 171471/177198 (96.77%)
				title?: string, // 172137/177198 (97.14%)
				type: "video"|"rich",
				url?: string, // 7011/177198 (3.96%)
				version: "1.0",
				width: number,
			}, // 177198/279857 (63.32%)
			reddit_video?: {
				bitrate_kbps?: number, // 101683/102659 (99.05%)
				dash_url?: string, // 102657/102659 (100.00%)
				duration?: number, // 102657/102659 (100.00%)
				fallback_url?: string, // 102657/102659 (100.00%)
				height?: number, // 102657/102659 (100.00%)
				hls_url?: string, // 102657/102659 (100.00%)
				is_gif?: boolean, // 102657/102659 (100.00%)
				scrubber_media_url?: string, // 102657/102659 (100.00%)
				transcoding_message?: string, // 2/102659 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 102657/102659 (100.00%)
			}, // 102659/279857 (36.68%)
			type?: string, // 177198/279857 (63.32%)
		},
		media_embed: {
			content?: string, // 177198/879692 (20.14%)
			height?: number, // 177198/879692 (20.14%)
			scrolling?: boolean, // 177198/879692 (20.14%)
			width?: number, // 177198/879692 (20.14%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1016/247092 (0.41%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 246958/247092 (99.95%)
				hlsUrl?: string, // 1016/247092 (0.41%)
				id?: string, // 246958/247092 (99.95%)
				isGif?: boolean, // 1016/247092 (0.41%)
				m?: "image/jpg"|"image/png"|"image/gif", // 245942/247092 (99.53%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 108789/247092 (44.03%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 245942/247092 (99.53%)
				s?: {
					gif?: string, // 7937/245942 (3.23%)
					mp4?: string, // 7937/245942 (3.23%)
					u?: string, // 238005/245942 (96.77%)
					x: number,
					y: number,
				}, // 245942/247092 (99.53%)
				status: "valid"|"failed",
				x?: number, // 1016/247092 (0.41%)
				y?: number, // 1016/247092 (0.41%)
			},
		}|null, // 59560/879692 (6.77%)
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
				total_stake_amount?: number, // 43/7111 (0.60%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"11483488"|"11042930"|"11042805"|"11166214"|"11238326"|"11315055"|"11388604"|"11462693"|"11477832"|"11423132"|"11423130"|"11388612",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 1827/879692 (0.21%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 616640/879692 (70.10%)
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
					}, // 19425/616640 (3.15%)
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
					}, // 19425/616640 (3.15%)
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
					}, // 280013/616640 (45.41%)
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
					}, // 284052/616640 (46.06%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 141538/141675 (99.90%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 141675/616640 (22.98%)
		}, // 616640/879692 (70.10%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"reddit"|"deleted"|"author"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 206/879692 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 173178/177198 (97.73%)
				author_url?: string, // 164746/177198 (92.97%)
				cache_age?: number, // 4899/177198 (2.76%)
				description?: string, // 11914/177198 (6.72%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 42/177198 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 171471/177198 (96.77%)
				thumbnail_url?: string, // 171530/177198 (96.80%)
				thumbnail_width?: number, // 171471/177198 (96.77%)
				title?: string, // 172137/177198 (97.14%)
				type: "video"|"rich",
				url?: string, // 7011/177198 (3.96%)
				version: "1.0",
				width: number,
			}, // 177198/279857 (63.32%)
			reddit_video?: {
				bitrate_kbps?: number, // 101683/102659 (99.05%)
				dash_url?: string, // 102657/102659 (100.00%)
				duration?: number, // 102657/102659 (100.00%)
				fallback_url?: string, // 102657/102659 (100.00%)
				height?: number, // 102657/102659 (100.00%)
				hls_url?: string, // 102657/102659 (100.00%)
				is_gif?: boolean, // 102657/102659 (100.00%)
				scrubber_media_url?: string, // 102657/102659 (100.00%)
				transcoding_message?: string, // 2/102659 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 102657/102659 (100.00%)
			}, // 102659/279857 (36.68%)
			type?: string, // 177198/279857 (63.32%)
		},
		secure_media_embed: {
			content?: string, // 177198/879692 (20.14%)
			height?: number, // 177198/879692 (20.14%)
			media_domain_url?: string, // 177198/879692 (20.14%)
			scrolling?: boolean, // 177198/879692 (20.14%)
			width?: number, // 177198/879692 (20.14%)
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
		thumbnail_height?: number|null, // 879341/879692 (99.96%)
		thumbnail_width?: number|null, // 879341/879692 (99.96%)
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: "Predictions Tournament"|"HOL'UPREDICTIONS"|"T20 World Cup Predictions Tournament"|"T20 World Cup Tournament",
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
			status: "CLOSED",
			subreddit_id: "t5_qir9n"|"t5_2qhe0"|"t5_2qh89"|"t5_2sb3a"|"t5_fknyy",
			theme_id: "theme_4"|"theme_6"|"theme_1"|"theme_5"|"theme_3",
			total_participants: number,
			tournament_id: string,
		}, // 5/879692 (0.00%)
		treatment_tags: ("econ:render:lottie:bulb"|"econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat"|"econ:render:lottie:halloween2020")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 739237/879692 (84.03%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1286369/28567813 (4.50%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 42471/28567813 (0.15%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 42471/28567813 (0.15%)
	embed_url?: null|string, // 42471/28567813 (0.15%)
	event_end?: number, // 1677/28567813 (0.01%)
	event_is_live?: boolean, // 1677/28567813 (0.01%)
	event_start?: number, // 1677/28567813 (0.01%)
	events?: [], // 42471/28567813 (0.15%)
	eventsOnRender?: [], // 42471/28567813 (0.15%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Install"|"See Menu"|"View More"|"Download"|"Pre-order Now"|"Watch Now"|"Contact Us"|"Get Showtimes"|"Get a Quote"|"Play Now"|"Apply Now", // 2898/3444566 (0.08%)
			caption?: string, // 396375/3444566 (11.51%)
			display_url?: string, // 2408/3444566 (0.07%)
			id: number,
			media_id: string,
			outbound_url?: string, // 76260/3444566 (2.21%)
		}[],
	}|null, // 1203028/28567813 (4.21%)
	gilded: number,
	gildings: {
		gid_1?: number, // 431570/28567813 (1.51%)
		gid_2?: number, // 35695/28567813 (0.12%)
		gid_3?: number, // 7295/28567813 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 42471/28567813 (0.15%)
	id: string,
	impression_id?: null, // 42471/28567813 (0.15%)
	impression_id_str?: null, // 42471/28567813 (0.15%)
	is_blank?: boolean, // 42471/28567813 (0.15%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1203028/28567813 (4.21%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 42471/28567813 (0.15%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 407544/4623398 (8.81%)
		e: "text"|"emoji",
		t?: string, // 4215854/4623398 (91.19%)
		u?: string, // 407544/4623398 (8.81%)
	}[],
	link_flair_template_id?: string, // 7322504/28567813 (25.63%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		room_id: string,
	}, // 67/28567813 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "17urge99ug9jn"|"17l54k3hkys5n"|"17r175s8sl1c4"|"17tqipi1bof7q"|"17tqkhwlx1mzy"|"17tt3i17gmy3l"|"17tvg7wsd2v18"|"17ug5rlilbzhm"|"17v72hqke8cy3"|"17vtqr1k2pkwk"|"17wl087aqs5nf", // 13/3034269 (0.00%)
		oembed?: {
			author_name?: string, // 2217104/2362851 (93.83%)
			author_url?: string, // 2170466/2362851 (91.86%)
			cache_age?: number, // 148064/2362851 (6.27%)
			description?: string, // 208124/2362851 (8.81%)
			height?: number|null, // 2362847/2362851 (100.00%)
			html?: string, // 2362847/2362851 (100.00%)
			marginheight?: number, // 3/2362851 (0.00%)
			marginwidth?: number, // 3/2362851 (0.00%)
			mean_alpha?: number, // 3002/2362851 (0.13%)
			provider_name?: string, // 2362847/2362851 (100.00%)
			provider_url?: string, // 2362847/2362851 (100.00%)
			thumbnail_height?: number, // 2207520/2362851 (93.43%)
			thumbnail_url?: string, // 2208965/2362851 (93.49%)
			thumbnail_width?: number, // 2207520/2362851 (93.43%)
			title?: string, // 2210878/2362851 (93.57%)
			type?: "video"|"rich", // 2362847/2362851 (100.00%)
			url?: string, // 229625/2362851 (9.72%)
			version?: "1.0", // 2362844/2362851 (100.00%)
			width?: number, // 2362847/2362851 (100.00%)
		}, // 2362851/3034269 (77.87%)
		reddit_video?: {
			bitrate_kbps?: number, // 668728/671405 (99.60%)
			dash_url?: string, // 668745/671405 (99.60%)
			duration?: number, // 668745/671405 (99.60%)
			fallback_url?: string, // 668745/671405 (99.60%)
			height?: number|null, // 668891/671405 (99.63%)
			hls_url?: string, // 668745/671405 (99.60%)
			is_gif?: boolean, // 668745/671405 (99.60%)
			scrubber_media_url?: string, // 668745/671405 (99.60%)
			transcoding_message?: string, // 2660/671405 (0.40%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 668891/671405 (99.63%)
		}, // 671405/3034269 (22.13%)
		type?: string, // 2362864/3034269 (77.87%)
	},
	media_embed: {
		content?: string|null, // 2362864/28567813 (8.27%)
		height?: number, // 2362864/28567813 (8.27%)
		scrolling?: boolean, // 2362864/28567813 (8.27%)
		width?: number, // 2362864/28567813 (8.27%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14169/3774157 (0.38%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 3768426/3774157 (99.85%)
			hlsUrl?: string, // 14169/3774157 (0.38%)
			id?: string, // 3768426/3774157 (99.85%)
			isGif?: boolean, // 14169/3774157 (0.38%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3754257/3774157 (99.47%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 992902/3774157 (26.31%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3754257/3774157 (99.47%)
			s?: {
				gif?: string, // 37056/3754257 (0.99%)
				mp4?: string, // 37056/3754257 (0.99%)
				u?: string, // 3717201/3754257 (99.01%)
				x: number,
				y: number,
			}, // 3754257/3774157 (99.47%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 14169/3774157 (0.38%)
			y?: number, // 14169/3774157 (0.38%)
		},
	}|null, // 1569550/28567813 (5.49%)
	media_only: boolean,
	mobile_ad_url?: string, // 42471/28567813 (0.15%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 42471/28567813 (0.15%)
	outbound_link?: {
	}, // 42471/28567813 (0.15%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 2582/421697 (0.61%)
			vote_count?: number, // 421695/421697 (100.00%)
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
	}|null, // 138492/28567813 (0.48%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 9328398/28567813 (32.65%)
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
				}, // 133070/9328398 (1.43%)
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
				}, // 133070/9328398 (1.43%)
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
				}, // 2648529/9328398 (28.39%)
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
				}, // 2706569/9328398 (29.01%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 647221/647395 (99.97%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 647395/9328398 (6.94%)
	}, // 9328398/28567813 (32.65%)
	priority_id?: null, // 42471/28567813 (0.15%)
	promo_layout?: null, // 42471/28567813 (0.15%)
	promoted?: boolean, // 42471/28567813 (0.15%)
	promoted_by?: null, // 42471/28567813 (0.15%)
	promoted_display_name?: null, // 42471/28567813 (0.15%)
	promoted_url?: null, // 42471/28567813 (0.15%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"deleted"|"automod_filtered"|"author"|"copyright_takedown"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 16490/28567813 (0.06%)
	score: number,
	secure_media: null|{
		event_id?: "17urge99ug9jn"|"17l54k3hkys5n"|"17r175s8sl1c4"|"17tqipi1bof7q"|"17tqkhwlx1mzy"|"17tt3i17gmy3l"|"17tvg7wsd2v18"|"17ug5rlilbzhm"|"17v72hqke8cy3"|"17vtqr1k2pkwk"|"17wl087aqs5nf", // 13/3034269 (0.00%)
		oembed?: {
			author_name?: string, // 2217104/2362851 (93.83%)
			author_url?: string, // 2170466/2362851 (91.86%)
			cache_age?: number, // 148064/2362851 (6.27%)
			description?: string, // 208124/2362851 (8.81%)
			height?: number|null, // 2362847/2362851 (100.00%)
			html?: string, // 2362847/2362851 (100.00%)
			marginheight?: number, // 3/2362851 (0.00%)
			marginwidth?: number, // 3/2362851 (0.00%)
			mean_alpha?: number, // 3002/2362851 (0.13%)
			provider_name?: string, // 2362847/2362851 (100.00%)
			provider_url?: string, // 2362847/2362851 (100.00%)
			thumbnail_height?: number, // 2207520/2362851 (93.43%)
			thumbnail_url?: string, // 2208965/2362851 (93.49%)
			thumbnail_width?: number, // 2207520/2362851 (93.43%)
			title?: string, // 2210878/2362851 (93.57%)
			type?: "video"|"rich", // 2362847/2362851 (100.00%)
			url?: string, // 229625/2362851 (9.72%)
			version?: "1.0", // 2362844/2362851 (100.00%)
			width?: number, // 2362847/2362851 (100.00%)
		}, // 2362851/3034269 (77.87%)
		reddit_video?: {
			bitrate_kbps?: number, // 668728/671405 (99.60%)
			dash_url?: string, // 668745/671405 (99.60%)
			duration?: number, // 668745/671405 (99.60%)
			fallback_url?: string, // 668745/671405 (99.60%)
			height?: number|null, // 668891/671405 (99.63%)
			hls_url?: string, // 668745/671405 (99.60%)
			is_gif?: boolean, // 668745/671405 (99.60%)
			scrubber_media_url?: string, // 668745/671405 (99.60%)
			transcoding_message?: string, // 2660/671405 (0.40%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 668891/671405 (99.63%)
		}, // 671405/3034269 (22.13%)
		type?: string, // 2362864/3034269 (77.87%)
	},
	secure_media_embed: {
		content?: string|null, // 2362864/28567813 (8.27%)
		height?: number, // 2362864/28567813 (8.27%)
		media_domain_url?: string, // 2362864/28567813 (8.27%)
		scrolling?: boolean, // 2362864/28567813 (8.27%)
		width?: number, // 2362864/28567813 (8.27%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 42471/28567813 (0.15%)
	sk_ad_network_data?: null, // 42471/28567813 (0.15%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 42471/28567813 (0.15%)
	third_party_tracking?: null, // 42471/28567813 (0.15%)
	third_party_tracking_2?: null, // 42471/28567813 (0.15%)
	thumbnail: string,
	thumbnail_height?: number|null, // 28558653/28567813 (99.97%)
	thumbnail_width?: number|null, // 28558653/28567813 (99.97%)
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
		}[], // 36/49 (73.47%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_3"|"theme_5"|"theme_7"|"theme_6"|"theme_1"|"theme_4"|"theme_2"|"theme_8",
		total_participants: number,
		tournament_id: string,
	}, // 49/28567813 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 14064653/28567813 (49.23%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}