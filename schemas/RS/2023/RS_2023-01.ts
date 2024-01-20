interface RedditPost {
	ad_promoted_user_posts?: null, // 53442/36090941 (0.15%)
	ad_supplementary_text_md?: null|string, // 53442/36090941 (0.15%)
	adserver_click_url?: null, // 53442/36090941 (0.15%)
	adserver_imp_pixel?: null, // 53442/36090941 (0.15%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: "PNG"|"APNG"|"JPG"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: number|null,
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
		tiers_by_required_awardings: null,
	}[],
	allow_live_comments: boolean,
	app_store_data?: null, // 53442/36090941 (0.15%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 70932/36090941 (0.20%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 743734/1998293 (37.22%)
		e: "text"|"emoji",
		t?: string, // 1254559/1998293 (62.78%)
		u?: string, // 743734/1998293 (37.22%)
	}[], // 27414237/36090941 (75.96%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 27414237/36090941 (75.96%)
	author_fullname?: string, // 27414237/36090941 (75.96%)
	author_id?: string|null, // 53442/36090941 (0.15%)
	author_patreon_flair?: boolean, // 27414237/36090941 (75.96%)
	author_premium?: boolean, // 27414237/36090941 (75.96%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 40135/36090941 (0.11%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|"diy_and_crafts"|"food"|"writing"|"memes"|"music"|"videos"|"funny",
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
			display_name: "chloe"|"BleachBraveSouls"|"UnearthedArcana"|"CelebsArchive"|"pcgaming"|"AIRemastered"|"pengu"|"CKsTechNews"|"ArgentinaBenderStyle",
			display_name_prefixed: "r/chloe"|"r/BleachBraveSouls"|"r/UnearthedArcana"|"r/CelebsArchive"|"r/pcgaming"|"r/AIRemastered"|"r/pengu"|"r/CKsTechNews"|"r/ArgentinaBenderStyle",
			icon_img: string,
			icon_size: number[]|null,
			key_color: ""|"#222222"|"#545452"|"#0dd3bb"|"#a5a4a4",
			mod_permissions: [],
			name: "t5_2qpoa"|"t5_399jv"|"t5_384bx"|"t5_79xb0l"|"t5_2qhfg"|"t5_5llpna"|"t5_2qo2d"|"t5_41mynz"|"t5_q369p",
			over_18: boolean,
			primary_color: "#014980"|"#373c3f"|""|"#bbbdbf"|"#00cbf7",
			sr: "chloe"|"BleachBraveSouls"|"UnearthedArcana"|"CelebsArchive"|"pcgaming"|"AIRemastered"|"pengu"|"CKsTechNews"|"ArgentinaBenderStyle",
			sr_display_name_prefixed: "r/chloe"|"r/BleachBraveSouls"|"r/UnearthedArcana"|"r/CelebsArchive"|"r/pcgaming"|"r/AIRemastered"|"r/pengu"|"r/CKsTechNews"|"r/ArgentinaBenderStyle",
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: "/r/chloe/"|"/r/BleachBraveSouls/"|"/r/UnearthedArcana/"|"/r/CelebsArchive/"|"/r/pcgaming/"|"/r/AIRemastered/"|"/r/pengu/"|"/r/CKsTechNews/"|"/r/ArgentinaBenderStyle/",
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads"|"no_ads",
		}, // 10/11626 (0.09%)
		subreddit_id: string,
		title: string,
	}[], // 11626/36090941 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"diy_and_crafts"|"entertainment"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1670094/36090941 (4.63%)
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
			icon_format: "PNG"|"APNG"|"JPG"|null,
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
		author_cakeday?: boolean, // 3472/1610453 (0.22%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 45825/127488 (35.94%)
			e: "text"|"emoji",
			t?: string, // 81663/127488 (64.06%)
			u?: string, // 45825/127488 (35.94%)
		}[], // 1429980/1610453 (88.79%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1429980/1610453 (88.79%)
		author_fullname?: string, // 1429980/1610453 (88.79%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1429980/1610453 (88.79%)
		author_premium?: boolean, // 1429980/1610453 (88.79%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 759/1610453 (0.05%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"photography"|"entertainment"|"drawing_and_painting"|"diy_and_crafts"|"animals"|"gaming"|"music"|"food",
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
				display_name: "CelebsArchive",
				display_name_prefixed: "r/CelebsArchive",
				icon_img: "",
				icon_size: null,
				key_color: "#222222",
				mod_permissions: [],
				name: "t5_79xb0l",
				over_18: boolean,
				primary_color: "",
				sr: "CelebsArchive",
				sr_display_name_prefixed: "r/CelebsArchive",
				subreddit_type: "restricted",
				subscribers: number,
				title: "Celebs Pictures, Gifs, and Videos",
				url: "/r/CelebsArchive/",
				user_can_crosspost: boolean,
				whitelist_status: null,
			}, // 2/2144 (0.09%)
			subreddit_id: string,
			title: string,
		}[], // 2144/1610453 (0.13%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"diy_and_crafts"|"writing"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 1/1610453 (0.00%)
		event_is_live?: boolean, // 1/1610453 (0.00%)
		event_start?: number, // 1/1610453 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 102085/616363 (16.56%)
				id: number,
				media_id: string,
				outbound_url?: string, // 19863/616363 (3.22%)
			}[],
		}|null, // 126784/1610453 (7.87%)
		gilded: number,
		gildings: {
			gid_1?: number, // 48846/1610453 (3.03%)
			gid_2?: number, // 26289/1610453 (1.63%)
			gid_3?: number, // 6143/1610453 (0.38%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 126784/1610453 (7.87%)
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
			a?: string, // 35994/258225 (13.94%)
			e: "text"|"emoji",
			t?: string, // 222231/258225 (86.06%)
			u?: string, // 35994/258225 (13.94%)
		}[],
		link_flair_template_id?: string, // 499554/1610453 (31.02%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "", // 67/82 (81.71%)
			recording_duration_seconds?: number, // 67/82 (81.71%)
			recording_fallback_url?: string, // 67/82 (81.71%)
			recording_hls_url?: "", // 67/82 (81.71%)
			recording_status?: number, // 81/82 (98.78%)
			room_id: string,
			room_status: number,
		}, // 82/1610453 (0.01%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 47/523850 (0.01%)
			oembed?: {
				author_name?: string, // 369382/375776 (98.30%)
				author_url?: string, // 351938/375776 (93.66%)
				cache_age?: number, // 6471/375776 (1.72%)
				description?: string, // 23628/375776 (6.29%)
				height?: number|null, // 375775/375776 (100.00%)
				html?: string, // 375775/375776 (100.00%)
				mean_alpha?: number, // 48/375776 (0.01%)
				provider_name?: string, // 375775/375776 (100.00%)
				provider_url?: string, // 375775/375776 (100.00%)
				thumbnail_height?: number|null, // 366619/375776 (97.56%)
				thumbnail_url?: string, // 366657/375776 (97.57%)
				thumbnail_width?: number|null, // 366619/375776 (97.56%)
				title?: string, // 369264/375776 (98.27%)
				type?: "video"|"rich", // 375775/375776 (100.00%)
				url?: string, // 9973/375776 (2.65%)
				version?: "1.0", // 375775/375776 (100.00%)
				width?: number, // 375775/375776 (100.00%)
			}, // 375776/523850 (71.73%)
			reddit_video?: {
				bitrate_kbps?: number, // 147483/148027 (99.63%)
				dash_url?: string, // 148015/148027 (99.99%)
				duration?: number, // 148015/148027 (99.99%)
				fallback_url?: string, // 148015/148027 (99.99%)
				height?: number|null, // 148017/148027 (99.99%)
				hls_url?: string, // 148015/148027 (99.99%)
				is_gif?: boolean, // 148015/148027 (99.99%)
				scrubber_media_url?: string, // 148015/148027 (99.99%)
				transcoding_message?: string, // 12/148027 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 148017/148027 (99.99%)
			}, // 148027/523850 (28.26%)
			type?: string, // 375823/523850 (71.74%)
		},
		media_embed: {
			content?: string|null, // 375823/1610453 (23.34%)
			height?: number, // 375823/1610453 (23.34%)
			scrolling?: boolean, // 375823/1610453 (23.34%)
			width?: number, // 375823/1610453 (23.34%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1014/647851 (0.16%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 647727/647851 (99.98%)
				hlsUrl?: string, // 1014/647851 (0.16%)
				id?: string, // 647727/647851 (99.98%)
				isGif?: boolean, // 1014/647851 (0.16%)
				m?: "image/jpg"|"image/png"|"image/gif", // 646713/647851 (99.82%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 420355/647851 (64.88%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 646713/647851 (99.82%)
				s?: {
					gif?: string, // 10011/646713 (1.55%)
					mp4?: string, // 10011/646713 (1.55%)
					u?: string, // 636702/646713 (98.45%)
					x: number,
					y: number,
				}, // 646713/647851 (99.82%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1014/647851 (0.16%)
				y?: number, // 1014/647851 (0.16%)
			},
		}|null, // 143089/1610453 (8.89%)
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
				total_stake_amount?: number, // 47/11614 (0.40%)
				vote_count?: number, // 11560/11614 (99.54%)
			}[],
			prediction_status: null|"RESOLVED"|"OPEN",
			resolved_option_id: null|"19294137"|"20955750"|"20943749"|"20971912"|"21011638"|"20312657"|"20312606"|"19920776"|"19920660"|"19920552"|"21097332"|"21117975"|"21125159"|"21084572"|"20994094",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 3279/1610453 (0.20%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video"|"gallery", // 1115608/1610453 (69.27%)
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
					}, // 73015/1115608 (6.54%)
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
					}, // 73015/1115608 (6.54%)
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
					}, // 719156/1115608 (64.46%)
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
					}, // 722134/1115608 (64.73%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 389571/389707 (99.97%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 389707/1115608 (34.93%)
		}, // 1115608/1610453 (69.27%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"content_takedown"|"automod_filtered"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 47/523850 (0.01%)
			oembed?: {
				author_name?: string, // 369382/375776 (98.30%)
				author_url?: string, // 351938/375776 (93.66%)
				cache_age?: number, // 6471/375776 (1.72%)
				description?: string, // 23628/375776 (6.29%)
				height?: number|null, // 375775/375776 (100.00%)
				html?: string, // 375775/375776 (100.00%)
				mean_alpha?: number, // 48/375776 (0.01%)
				provider_name?: string, // 375775/375776 (100.00%)
				provider_url?: string, // 375775/375776 (100.00%)
				thumbnail_height?: number|null, // 366619/375776 (97.56%)
				thumbnail_url?: string, // 366657/375776 (97.57%)
				thumbnail_width?: number|null, // 366619/375776 (97.56%)
				title?: string, // 369264/375776 (98.27%)
				type?: "video"|"rich", // 375775/375776 (100.00%)
				url?: string, // 9973/375776 (2.65%)
				version?: "1.0", // 375775/375776 (100.00%)
				width?: number, // 375775/375776 (100.00%)
			}, // 375776/523850 (71.73%)
			reddit_video?: {
				bitrate_kbps?: number, // 147483/148027 (99.63%)
				dash_url?: string, // 148015/148027 (99.99%)
				duration?: number, // 148015/148027 (99.99%)
				fallback_url?: string, // 148015/148027 (99.99%)
				height?: number|null, // 148017/148027 (99.99%)
				hls_url?: string, // 148015/148027 (99.99%)
				is_gif?: boolean, // 148015/148027 (99.99%)
				scrubber_media_url?: string, // 148015/148027 (99.99%)
				transcoding_message?: string, // 12/148027 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 148017/148027 (99.99%)
			}, // 148027/523850 (28.26%)
			type?: string, // 375823/523850 (71.74%)
		},
		secure_media_embed: {
			content?: string|null, // 375823/1610453 (23.34%)
			height?: number, // 375823/1610453 (23.34%)
			media_domain_url?: string, // 375823/1610453 (23.34%)
			scrolling?: boolean, // 375823/1610453 (23.34%)
			width?: number, // 375823/1610453 (23.34%)
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
			status: "LIVE"|"CLOSED",
			subreddit_id: "t5_3ouxm"|"t5_79vh26"|"t5_481xkf"|"t5_5rj68d"|"t5_2dfnk0",
			theme_id: "theme_4"|"theme_5"|"theme_1"|"theme_6",
			total_participants: number,
			tournament_id: string,
		}, // 9/1610453 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:heartbeat")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1410176/1610453 (87.56%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1670094/36090941 (4.63%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 53442/36090941 (0.15%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 53442/36090941 (0.15%)
	embed_url?: null|string, // 53442/36090941 (0.15%)
	event_end?: number, // 47/36090941 (0.00%)
	event_is_live?: boolean, // 47/36090941 (0.00%)
	event_start?: number, // 47/36090941 (0.00%)
	events?: [], // 53442/36090941 (0.15%)
	eventsOnRender?: [], // 53442/36090941 (0.15%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Watch Now"|"Download"|"Pre-order Now"|"Order Now"|"Install"|"Contact Us"|"Play Now"|"Apply Now"|"Get a Quote"|"Get Showtimes"|"See Menu", // 12150/5777052 (0.21%)
			caption?: string, // 662265/5777052 (11.46%)
			display_url?: string, // 11209/5777052 (0.19%)
			id: number,
			media_id: string,
			outbound_url?: string, // 116874/5777052 (2.02%)
		}[],
	}|null, // 2437019/36090941 (6.75%)
	gilded: number,
	gildings: {
		gid_1?: number, // 22071/36090941 (0.06%)
		gid_2?: number, // 25073/36090941 (0.07%)
		gid_3?: number, // 4131/36090941 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 53442/36090941 (0.15%)
	id: string,
	impression_id?: null, // 53442/36090941 (0.15%)
	impression_id_str?: null, // 53442/36090941 (0.15%)
	is_blank?: boolean, // 53442/36090941 (0.15%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2437019/36090941 (6.75%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 53442/36090941 (0.15%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 593795/6700569 (8.86%)
		e: "text"|"emoji",
		t?: string, // 6106774/6700569 (91.14%)
		u?: string, // 593795/6700569 (8.86%)
	}[],
	link_flair_template_id?: string, // 12643753/36090941 (35.03%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: "", // 808/1006 (80.32%)
		recording_duration_seconds?: number, // 813/1006 (80.82%)
		recording_fallback_url?: string, // 808/1006 (80.32%)
		recording_hls_url?: "", // 808/1006 (80.32%)
		recording_status?: number, // 993/1006 (98.71%)
		room_id: string,
		room_status: number,
	}, // 1006/36090941 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1adljcghevzr7"|"1ae82hsaul0ja"|"1aevm9xj6rfdo"|"1af03qxu6cyiq"|"ta535s1hq2je", // 84/4183063 (0.00%)
		oembed?: {
			author_name?: string, // 2957622/3172492 (93.23%)
			author_url?: string, // 2897855/3172492 (91.34%)
			cache_age?: number, // 138067/3172492 (4.35%)
			description?: string, // 315307/3172492 (9.94%)
			height?: number|null, // 3172403/3172492 (100.00%)
			html?: string, // 3172403/3172492 (100.00%)
			mean_alpha?: number, // 2728/3172492 (0.09%)
			provider_name?: string, // 3172403/3172492 (100.00%)
			provider_url?: string, // 3172403/3172492 (100.00%)
			thumbnail_height?: number, // 3023030/3172492 (95.29%)
			thumbnail_url?: string, // 3025398/3172492 (95.36%)
			thumbnail_width?: number, // 3023030/3172492 (95.29%)
			title?: string, // 3032501/3172492 (95.59%)
			type?: "video"|"rich", // 3172403/3172492 (100.00%)
			url?: string, // 274708/3172492 (8.66%)
			version?: "1.0", // 3172403/3172492 (100.00%)
			width?: number, // 3172403/3172492 (100.00%)
		}, // 3172492/4183063 (75.84%)
		reddit_video?: {
			bitrate_kbps?: number, // 1004874/1010487 (99.44%)
			dash_url?: string, // 1004874/1010487 (99.44%)
			duration?: number, // 1004874/1010487 (99.44%)
			fallback_url?: string, // 1004874/1010487 (99.44%)
			height?: number|null, // 1006033/1010487 (99.56%)
			hls_url?: string, // 1004874/1010487 (99.44%)
			is_gif?: boolean, // 1004874/1010487 (99.44%)
			scrubber_media_url?: string, // 1004874/1010487 (99.44%)
			transcoding_message?: string, // 5613/1010487 (0.56%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1006033/1010487 (99.56%)
		}, // 1010487/4183063 (24.16%)
		type?: string, // 3172576/4183063 (75.84%)
	},
	media_embed: {
		content?: string|null, // 3172576/36090941 (8.79%)
		height?: number, // 3172576/36090941 (8.79%)
		scrolling?: boolean, // 3172576/36090941 (8.79%)
		width?: number, // 3172576/36090941 (8.79%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 22521/6219475 (0.36%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 6215955/6219475 (99.94%)
			hlsUrl?: string, // 22521/6219475 (0.36%)
			id?: string, // 6215955/6219475 (99.94%)
			isGif?: boolean, // 22521/6219475 (0.36%)
			m?: "image/jpg"|"image/png"|"image/gif", // 6193434/6219475 (99.58%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2284058/6219475 (36.72%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6193434/6219475 (99.58%)
			s?: {
				gif?: string, // 52566/6193434 (0.85%)
				mp4?: string, // 52566/6193434 (0.85%)
				u?: string, // 6140868/6193434 (99.15%)
				x: number,
				y: number,
			}, // 6193434/6219475 (99.58%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 22521/6219475 (0.36%)
			y?: number, // 22521/6219475 (0.36%)
		},
	}|null, // 2850536/36090941 (7.90%)
	media_only: boolean,
	mobile_ad_url?: string, // 53442/36090941 (0.15%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 53442/36090941 (0.15%)
	outbound_link?: {
	}, // 53442/36090941 (0.15%)
	over_18: boolean,
	parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 4133/386597 (1.07%)
			vote_count?: number, // 386202/386597 (99.90%)
		}[],
		prediction_status: null|"RESOLVED"|"OPEN"|"CANCELLED"|"CLOSED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 143926/36090941 (0.40%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 12539250/36090941 (34.74%)
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
				}, // 371458/12539250 (2.96%)
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
				}, // 371458/12539250 (2.96%)
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
				}, // 5818051/12539250 (46.40%)
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
				}, // 5880490/12539250 (46.90%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1304001/1304136 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1304136/12539250 (10.40%)
	}, // 12539250/36090941 (34.74%)
	priority_id?: null, // 53442/36090941 (0.15%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 53442/36090941 (0.15%)
	promoted?: boolean, // 53442/36090941 (0.15%)
	promoted_by?: null, // 53442/36090941 (0.15%)
	promoted_display_name?: null, // 53442/36090941 (0.15%)
	promoted_url?: null, // 53442/36090941 (0.15%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1adljcghevzr7"|"1ae82hsaul0ja"|"1aevm9xj6rfdo"|"1af03qxu6cyiq"|"ta535s1hq2je", // 84/4183063 (0.00%)
		oembed?: {
			author_name?: string, // 2957622/3172492 (93.23%)
			author_url?: string, // 2897855/3172492 (91.34%)
			cache_age?: number, // 138067/3172492 (4.35%)
			description?: string, // 315307/3172492 (9.94%)
			height?: number|null, // 3172403/3172492 (100.00%)
			html?: string, // 3172403/3172492 (100.00%)
			mean_alpha?: number, // 2728/3172492 (0.09%)
			provider_name?: string, // 3172403/3172492 (100.00%)
			provider_url?: string, // 3172403/3172492 (100.00%)
			thumbnail_height?: number, // 3023030/3172492 (95.29%)
			thumbnail_url?: string, // 3025398/3172492 (95.36%)
			thumbnail_width?: number, // 3023030/3172492 (95.29%)
			title?: string, // 3032501/3172492 (95.59%)
			type?: "video"|"rich", // 3172403/3172492 (100.00%)
			url?: string, // 274708/3172492 (8.66%)
			version?: "1.0", // 3172403/3172492 (100.00%)
			width?: number, // 3172403/3172492 (100.00%)
		}, // 3172492/4183063 (75.84%)
		reddit_video?: {
			bitrate_kbps?: number, // 1004874/1010487 (99.44%)
			dash_url?: string, // 1004874/1010487 (99.44%)
			duration?: number, // 1004874/1010487 (99.44%)
			fallback_url?: string, // 1004874/1010487 (99.44%)
			height?: number|null, // 1006033/1010487 (99.56%)
			hls_url?: string, // 1004874/1010487 (99.44%)
			is_gif?: boolean, // 1004874/1010487 (99.44%)
			scrubber_media_url?: string, // 1004874/1010487 (99.44%)
			transcoding_message?: string, // 5613/1010487 (0.56%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1006033/1010487 (99.56%)
		}, // 1010487/4183063 (24.16%)
		type?: string, // 3172576/4183063 (75.84%)
	},
	secure_media_embed: {
		content?: string|null, // 3172576/36090941 (8.79%)
		height?: number, // 3172576/36090941 (8.79%)
		media_domain_url?: string, // 3172576/36090941 (8.79%)
		scrolling?: boolean, // 3172576/36090941 (8.79%)
		width?: number, // 3172576/36090941 (8.79%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 53442/36090941 (0.15%)
	sk_ad_network_data?: null, // 53442/36090941 (0.15%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 281/36090941 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 53442/36090941 (0.15%)
	third_party_tracking?: null, // 53442/36090941 (0.15%)
	third_party_tracking_2?: null, // 53442/36090941 (0.15%)
	thumbnail: string,
	thumbnail_height?: number|null, // 36088403/36090941 (99.99%)
	thumbnail_width?: number|null, // 36088403/36090941 (99.99%)
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
		}[], // 77/80 (96.25%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_8"|"theme_2"|"theme_4"|"theme_3"|"theme_7"|"theme_6",
		total_participants: number,
		tournament_id: string,
	}, // 80/36090941 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23244451/36090941 (64.41%)
	view_count: null,
	whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}