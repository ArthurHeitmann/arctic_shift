interface RedditPost {
	adserver_click_url?: null, // 39531/34838318 (0.11%)
	adserver_imp_pixel?: null, // 39531/34838318 (0.11%)
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
		sticky_duration_seconds?: null, // 64795/1092214 (5.93%)
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
	app_store_data?: null, // 39531/34838318 (0.11%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 67665/34838318 (0.19%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 667650/1943838 (34.35%)
		e: "text"|"emoji",
		t?: string, // 1276188/1943838 (65.65%)
		u?: string, // 667650/1943838 (34.35%)
	}[], // 27082095/34838318 (77.74%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 27082095/34838318 (77.74%)
	author_fullname?: string, // 27082095/34838318 (77.74%)
	author_id?: string|null, // 39531/34838318 (0.11%)
	author_patreon_flair?: boolean, // 27082095/34838318 (77.74%)
	author_premium?: boolean, // 27082095/34838318 (77.74%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 333578/34838318 (0.96%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"food"|"memes"|"writing"|"music"|"funny",
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
			banner_img: string|null,
			banner_size: null|number[],
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: string,
			display_name_prefixed: string,
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#a5a4a4"|"#ea0027"|"#ddbd37"|"#545452"|"#ff8717"|"#46d160"|"#222222"|"#7e53c1",
			mod_permissions: [],
			name: string,
			over_18: boolean,
			primary_color: ""|"#fba37d"|"#00cbf7"|"#ff66ac"|"#e31836"|"#373c3f"|"#014980"|"#ddbd37"|"#b8001f"|"#007373"|"#bbbdbf"|"#5a74cc"|"#7193ff",
			sr: string,
			sr_display_name_prefixed: string,
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_can_crosspost: boolean|null,
			whitelist_status: "all_ads"|"no_ads"|"some_ads"|null,
		}, // 16/12469 (0.13%)
		subreddit_id: string,
		title: string,
	}[], // 12469/34838318 (0.04%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1821929/34838318 (5.23%)
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
			sticky_duration_seconds?: null, // 59469/1074630 (5.53%)
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
		author_cakeday?: boolean, // 3239/1724393 (0.19%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 55034/134222 (41.00%)
			e: "text"|"emoji",
			t?: string, // 79188/134222 (59.00%)
			u?: string, // 55034/134222 (41.00%)
		}[], // 1570612/1724393 (91.08%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1570612/1724393 (91.08%)
		author_fullname?: string, // 1570612/1724393 (91.08%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1570612/1724393 (91.08%)
		author_premium?: boolean, // 1570612/1724393 (91.08%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 17263/1724393 (1.00%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"photography"|"drawing_and_painting"|"animals"|"gaming"|"diy_and_crafts"|"music"|"funny"|"food",
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
				banner_img: string,
				banner_size: null|number[],
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: "NikuNikuNii"|"NASCAR",
				display_name_prefixed: "r/NikuNikuNii"|"r/NASCAR",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#46d160",
				mod_permissions: [],
				name: "t5_5cnfiu"|"t5_2qs08",
				over_18: boolean,
				primary_color: "#9c5ea1"|"#bbbdbf",
				sr: "NikuNikuNii"|"NASCAR",
				sr_display_name_prefixed: "r/NikuNikuNii"|"r/NASCAR",
				subreddit_type: "restricted"|"public",
				subscribers: number,
				title: "Niku Niku Nii"|"NASCAR on Reddit: News from the track",
				url: "/r/NikuNikuNii/"|"/r/NASCAR/",
				user_can_crosspost: boolean,
				whitelist_status: null|"all_ads",
			}, // 2/913 (0.22%)
			subreddit_id: string,
			title: string,
		}[], // 913/1724393 (0.05%)
		content_categories: null|("drawing_and_painting"|"photography"|"music"|"gaming"|"comics"|"entertainment"|"writing"|"diy_and_crafts"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 387/1724393 (0.02%)
		event_is_live?: boolean, // 387/1724393 (0.02%)
		event_start?: number, // 387/1724393 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 71729/533201 (13.45%)
				id: number,
				media_id: string,
				outbound_url?: string, // 28955/533201 (5.43%)
			}[],
		}|null, // 125507/1724393 (7.28%)
		gilded: number,
		gildings: {
			gid_1?: number, // 224037/1724393 (12.99%)
			gid_2?: number, // 39033/1724393 (2.26%)
			gid_3?: number, // 10537/1724393 (0.61%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 125507/1724393 (7.28%)
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
			a?: string, // 41066/259781 (15.81%)
			e: "text"|"emoji",
			t?: string, // 218715/259781 (84.19%)
			u?: string, // 41066/259781 (15.81%)
		}[],
		link_flair_template_id?: string, // 490054/1724393 (28.42%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_duration_seconds: number,
			recording_fallback_url?: string, // 9/27 (33.33%)
			recording_status: number,
			room_id: string,
		}, // 27/1724393 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"19161fqxudgrw", // 4/661412 (0.00%)
			oembed?: {
				author_name?: string, // 469961/481196 (97.67%)
				author_url?: string, // 461611/481196 (95.93%)
				cache_age?: number, // 5582/481196 (1.16%)
				description?: string, // 19926/481196 (4.14%)
				height?: number|null, // 481194/481196 (100.00%)
				html?: string, // 481194/481196 (100.00%)
				mean_alpha?: number, // 26/481196 (0.01%)
				provider_name?: string, // 481194/481196 (100.00%)
				provider_url?: string, // 481194/481196 (100.00%)
				thumbnail_height?: number, // 473345/481196 (98.37%)
				thumbnail_url?: string, // 473400/481196 (98.38%)
				thumbnail_width?: number, // 473345/481196 (98.37%)
				title?: string, // 475513/481196 (98.82%)
				type?: "video"|"rich", // 481194/481196 (100.00%)
				url?: string, // 10258/481196 (2.13%)
				version?: "1.0", // 481194/481196 (100.00%)
				width?: number, // 481194/481196 (100.00%)
			}, // 481196/661412 (72.75%)
			reddit_video?: {
				bitrate_kbps?: number, // 179366/180212 (99.53%)
				dash_url?: string, // 180205/180212 (100.00%)
				duration?: number, // 180205/180212 (100.00%)
				fallback_url?: string, // 180205/180212 (100.00%)
				height?: number, // 180205/180212 (100.00%)
				hls_url?: string, // 180205/180212 (100.00%)
				is_gif?: boolean, // 180205/180212 (100.00%)
				scrubber_media_url?: string, // 180205/180212 (100.00%)
				transcoding_message?: string, // 7/180212 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 180205/180212 (100.00%)
			}, // 180212/661412 (27.25%)
			type?: string, // 481200/661412 (72.75%)
		},
		media_embed: {
			content?: string|null, // 481200/1724393 (27.91%)
			height?: number, // 481200/1724393 (27.91%)
			scrolling?: boolean, // 481200/1724393 (27.91%)
			width?: number, // 481200/1724393 (27.91%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 912/566387 (0.16%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 566258/566387 (99.98%)
				hlsUrl?: string, // 912/566387 (0.16%)
				id?: string, // 566258/566387 (99.98%)
				isGif?: boolean, // 912/566387 (0.16%)
				m?: "image/jpg"|"image/png"|"image/gif", // 565346/566387 (99.82%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 385541/566387 (68.07%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 565346/566387 (99.82%)
				s?: {
					gif?: string, // 14198/565346 (2.51%)
					mp4?: string, // 14198/565346 (2.51%)
					u?: string, // 551148/565346 (97.49%)
					x: number,
					y: number,
				}, // 565346/566387 (99.82%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 912/566387 (0.16%)
				y?: number, // 912/566387 (0.16%)
			},
		}|null, // 139672/1724393 (8.10%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 88/14054 (0.63%)
				vote_count?: number, // 12438/14054 (88.50%)
			}[],
			prediction_status: null|"RESOLVED"|"OPEN"|"CLOSED"|"CANCELLED",
			resolved_option_id: null|"15684106"|"15627822"|"15793113"|"15790045"|"15849164"|"15629175"|"15928507"|"15928649"|"14155069"|"16107387"|"15684111",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 4162/1724393 (0.24%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1272027/1724393 (73.77%)
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
					}, // 72171/1272027 (5.67%)
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
					}, // 72171/1272027 (5.67%)
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
					}, // 776956/1272027 (61.08%)
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
					}, // 782616/1272027 (61.53%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 403148/403390 (99.94%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 403390/1272027 (31.71%)
		}, // 1272027/1724393 (73.77%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 183/1724393 (0.01%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"19161fqxudgrw", // 4/661412 (0.00%)
			oembed?: {
				author_name?: string, // 469961/481196 (97.67%)
				author_url?: string, // 461611/481196 (95.93%)
				cache_age?: number, // 5582/481196 (1.16%)
				description?: string, // 19926/481196 (4.14%)
				height?: number|null, // 481194/481196 (100.00%)
				html?: string, // 481194/481196 (100.00%)
				mean_alpha?: number, // 26/481196 (0.01%)
				provider_name?: string, // 481194/481196 (100.00%)
				provider_url?: string, // 481194/481196 (100.00%)
				thumbnail_height?: number, // 473345/481196 (98.37%)
				thumbnail_url?: string, // 473400/481196 (98.38%)
				thumbnail_width?: number, // 473345/481196 (98.37%)
				title?: string, // 475513/481196 (98.82%)
				type?: "video"|"rich", // 481194/481196 (100.00%)
				url?: string, // 10258/481196 (2.13%)
				version?: "1.0", // 481194/481196 (100.00%)
				width?: number, // 481194/481196 (100.00%)
			}, // 481196/661412 (72.75%)
			reddit_video?: {
				bitrate_kbps?: number, // 179366/180212 (99.53%)
				dash_url?: string, // 180205/180212 (100.00%)
				duration?: number, // 180205/180212 (100.00%)
				fallback_url?: string, // 180205/180212 (100.00%)
				height?: number, // 180205/180212 (100.00%)
				hls_url?: string, // 180205/180212 (100.00%)
				is_gif?: boolean, // 180205/180212 (100.00%)
				scrubber_media_url?: string, // 180205/180212 (100.00%)
				transcoding_message?: string, // 7/180212 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 180205/180212 (100.00%)
			}, // 180212/661412 (27.25%)
			type?: string, // 481200/661412 (72.75%)
		},
		secure_media_embed: {
			content?: string|null, // 481200/1724393 (27.91%)
			height?: number, // 481200/1724393 (27.91%)
			media_domain_url?: string, // 481200/1724393 (27.91%)
			scrolling?: boolean, // 481200/1724393 (27.91%)
			width?: number, // 481200/1724393 (27.91%)
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
		top_awarded_type: null|"INACTIVE"|"ACTIVE",
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
					total_amount: number,
					user_amount: null,
					vote_count: number,
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
			}[],
			status: "LIVE"|"CLOSED",
			subreddit_id: "t5_2ubgg"|"t5_2qimj"|"t5_2th52"|"t5_2qh1f"|"t5_t9z3q"|"t5_31m0v"|"t5_2wlj3"|"t5_2qnym",
			theme_id: "theme_5"|"theme_1"|"theme_8"|"theme_2",
			total_participants: number,
			tournament_id: string,
		}, // 147/1724393 (0.01%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1585995/1724393 (91.97%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1821929/34838318 (5.23%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 39531/34838318 (0.11%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 39531/34838318 (0.11%)
	embed_url?: null|string, // 39531/34838318 (0.11%)
	event_end?: number, // 1652/34838318 (0.00%)
	event_is_live?: boolean, // 1652/34838318 (0.00%)
	event_start?: number, // 1652/34838318 (0.00%)
	events?: [], // 39531/34838318 (0.11%)
	eventsOnRender?: [], // 39531/34838318 (0.11%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Order Now"|"Install"|"Download"|"Play Now"|"Pre-order Now"|"Contact Us"|"Apply Now"|"Get Showtimes"|"Watch Now"|"Get a Quote", // 4631/5927798 (0.08%)
			caption?: string, // 579344/5927798 (9.77%)
			display_url?: string, // 4458/5927798 (0.08%)
			id: number,
			media_id: string,
			outbound_url?: string, // 104982/5927798 (1.77%)
		}[],
	}|null, // 2507342/34838318 (7.20%)
	gilded: number,
	gildings: {
		gid_1?: number, // 277396/34838318 (0.80%)
		gid_2?: number, // 31875/34838318 (0.09%)
		gid_3?: number, // 5862/34838318 (0.02%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 39531/34838318 (0.11%)
	id: string,
	impression_id?: null, // 39531/34838318 (0.11%)
	impression_id_str?: null, // 39531/34838318 (0.11%)
	is_blank?: boolean, // 39531/34838318 (0.11%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2507342/34838318 (7.20%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 39531/34838318 (0.11%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 627538/6454710 (9.72%)
		e: "text"|"emoji",
		t?: string, // 5827172/6454710 (90.28%)
		u?: string, // 627538/6454710 (9.72%)
	}[],
	link_flair_template_id?: string, // 11514500/34838318 (33.05%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds?: number, // 423/424 (99.76%)
		recording_fallback_url?: string, // 98/424 (23.11%)
		recording_status?: number, // 423/424 (99.76%)
		room_id: string,
	}, // 424/34838318 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"19161fqxudgrw"|"18xt8lcwnans2"|"18xbryemhgn6y"|"18xzuk977yqob"|"18y1vs071k1n0"|"18yq8tmhs4pg8"|"18zflyyi9p2tn"|"1903x0jvkais4"|"191hrm98dcy5y", // 46/4511004 (0.00%)
		oembed?: {
			author_name?: string, // 3161768/3416224 (92.55%)
			author_url?: string, // 3115703/3416224 (91.20%)
			cache_age?: number, // 143248/3416224 (4.19%)
			description?: string, // 323703/3416224 (9.48%)
			height?: number|null, // 3416160/3416224 (100.00%)
			html?: string, // 3416160/3416224 (100.00%)
			mean_alpha?: number, // 2359/3416224 (0.07%)
			provider_name?: string, // 3416160/3416224 (100.00%)
			provider_url?: string, // 3416160/3416224 (100.00%)
			thumbnail_height?: number, // 3266773/3416224 (95.63%)
			thumbnail_url?: string, // 3268422/3416224 (95.67%)
			thumbnail_width?: number, // 3266773/3416224 (95.63%)
			title?: string, // 3271689/3416224 (95.77%)
			type?: "video"|"rich", // 3416160/3416224 (100.00%)
			url?: string, // 283421/3416224 (8.30%)
			version?: "1.0", // 3416160/3416224 (100.00%)
			width?: number, // 3416160/3416224 (100.00%)
		}, // 3416224/4511004 (75.73%)
		reddit_video?: {
			bitrate_kbps?: number, // 1088435/1094734 (99.42%)
			dash_url?: string, // 1088435/1094734 (99.42%)
			duration?: number, // 1088435/1094734 (99.42%)
			fallback_url?: string, // 1088435/1094734 (99.42%)
			height?: number|null, // 1088726/1094734 (99.45%)
			hls_url?: string, // 1088435/1094734 (99.42%)
			is_gif?: boolean, // 1088435/1094734 (99.42%)
			scrubber_media_url?: string, // 1088435/1094734 (99.42%)
			transcoding_message?: string, // 6299/1094734 (0.58%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1088726/1094734 (99.45%)
		}, // 1094734/4511004 (24.27%)
		type?: string, // 3416270/4511004 (75.73%)
	},
	media_embed: {
		content?: string|null, // 3416270/34838318 (9.81%)
		height?: number, // 3416270/34838318 (9.81%)
		scrolling?: boolean, // 3416270/34838318 (9.81%)
		width?: number, // 3416270/34838318 (9.81%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17925/6369614 (0.28%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 6367043/6369614 (99.96%)
			hlsUrl?: string, // 17925/6369614 (0.28%)
			id?: string, // 6367043/6369614 (99.96%)
			isGif?: boolean, // 17925/6369614 (0.28%)
			m?: "image/jpg"|"image/png"|"image/gif", // 6349118/6369614 (99.68%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2900899/6369614 (45.54%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6349118/6369614 (99.68%)
			s?: {
				gif?: string, // 60784/6349118 (0.96%)
				mp4?: string, // 60784/6349118 (0.96%)
				u?: string, // 6288334/6349118 (99.04%)
				x: number,
				y: number,
			}, // 6349118/6369614 (99.68%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 17925/6369614 (0.28%)
			y?: number, // 17925/6369614 (0.28%)
		},
	}|null, // 2918303/34838318 (8.38%)
	media_only: boolean,
	mobile_ad_url?: string, // 39531/34838318 (0.11%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 39531/34838318 (0.11%)
	outbound_link?: {
	}, // 39531/34838318 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 5875/432089 (1.36%)
			vote_count?: number, // 392408/432089 (90.82%)
		}[],
		prediction_status: null|"RESOLVED"|"CLOSED"|"OPEN"|"CANCELLED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 162280/34838318 (0.47%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 12472187/34838318 (35.80%)
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
				}, // 290519/12472187 (2.33%)
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
				}, // 290519/12472187 (2.33%)
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
				}, // 5450075/12472187 (43.70%)
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
				}, // 5516835/12472187 (44.23%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1314920/1315161 (99.98%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1315161/12472187 (10.54%)
	}, // 12472187/34838318 (35.80%)
	priority_id?: null, // 39531/34838318 (0.11%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 39531/34838318 (0.11%)
	promoted?: boolean, // 39531/34838318 (0.11%)
	promoted_by?: null, // 39531/34838318 (0.11%)
	promoted_display_name?: null, // 39531/34838318 (0.11%)
	promoted_url?: null, // 39531/34838318 (0.11%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 21235/34838318 (0.06%)
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"19161fqxudgrw"|"18xt8lcwnans2"|"18xbryemhgn6y"|"18xzuk977yqob"|"18y1vs071k1n0"|"18yq8tmhs4pg8"|"18zflyyi9p2tn"|"1903x0jvkais4"|"191hrm98dcy5y", // 46/4511004 (0.00%)
		oembed?: {
			author_name?: string, // 3161768/3416224 (92.55%)
			author_url?: string, // 3115703/3416224 (91.20%)
			cache_age?: number, // 143248/3416224 (4.19%)
			description?: string, // 323703/3416224 (9.48%)
			height?: number|null, // 3416160/3416224 (100.00%)
			html?: string, // 3416160/3416224 (100.00%)
			mean_alpha?: number, // 2359/3416224 (0.07%)
			provider_name?: string, // 3416160/3416224 (100.00%)
			provider_url?: string, // 3416160/3416224 (100.00%)
			thumbnail_height?: number, // 3266773/3416224 (95.63%)
			thumbnail_url?: string, // 3268422/3416224 (95.67%)
			thumbnail_width?: number, // 3266773/3416224 (95.63%)
			title?: string, // 3271689/3416224 (95.77%)
			type?: "video"|"rich", // 3416160/3416224 (100.00%)
			url?: string, // 283421/3416224 (8.30%)
			version?: "1.0", // 3416160/3416224 (100.00%)
			width?: number, // 3416160/3416224 (100.00%)
		}, // 3416224/4511004 (75.73%)
		reddit_video?: {
			bitrate_kbps?: number, // 1088435/1094734 (99.42%)
			dash_url?: string, // 1088435/1094734 (99.42%)
			duration?: number, // 1088435/1094734 (99.42%)
			fallback_url?: string, // 1088435/1094734 (99.42%)
			height?: number|null, // 1088726/1094734 (99.45%)
			hls_url?: string, // 1088435/1094734 (99.42%)
			is_gif?: boolean, // 1088435/1094734 (99.42%)
			scrubber_media_url?: string, // 1088435/1094734 (99.42%)
			transcoding_message?: string, // 6299/1094734 (0.58%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1088726/1094734 (99.45%)
		}, // 1094734/4511004 (24.27%)
		type?: string, // 3416270/4511004 (75.73%)
	},
	secure_media_embed: {
		content?: string|null, // 3416270/34838318 (9.81%)
		height?: number, // 3416270/34838318 (9.81%)
		media_domain_url?: string, // 3416270/34838318 (9.81%)
		scrolling?: boolean, // 3416270/34838318 (9.81%)
		width?: number, // 3416270/34838318 (9.81%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 39531/34838318 (0.11%)
	sk_ad_network_data?: null, // 39531/34838318 (0.11%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 39531/34838318 (0.11%)
	third_party_tracking?: null, // 39531/34838318 (0.11%)
	third_party_tracking_2?: null, // 39531/34838318 (0.11%)
	thumbnail: string,
	thumbnail_height?: number|null, // 34833886/34838318 (99.99%)
	thumbnail_width?: number|null, // 34833886/34838318 (99.99%)
	title: string,
	top_awarded_type: null|"INACTIVE"|"ACTIVE",
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
		}[], // 160/169 (94.67%)
		status: "LIVE"|"CLOSED",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_6"|"theme_4"|"theme_8"|"theme_7"|"theme_3",
		total_participants: number,
		tournament_id: string,
	}, // 169/34838318 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23136428/34838318 (66.41%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}