interface RedditPost {
	adserver_click_url?: null, // 39977/32677372 (0.12%)
	adserver_imp_pixel?: null, // 39977/32677372 (0.12%)
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
		sticky_duration_seconds?: null, // 1791/1298542 (0.14%)
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
	app_store_data?: null, // 39977/32677372 (0.12%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 93022/32677372 (0.28%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 754341/2062375 (36.58%)
		e: "text"|"emoji",
		t?: string, // 1308034/2062375 (63.42%)
		u?: string, // 754341/2062375 (36.58%)
	}[], // 24011090/32677372 (73.48%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 24011090/32677372 (73.48%)
	author_fullname?: string, // 24011090/32677372 (73.48%)
	author_id?: string|null, // 39977/32677372 (0.12%)
	author_patreon_flair?: boolean, // 24011090/32677372 (73.48%)
	author_premium?: boolean, // 24011090/32677372 (73.48%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 327238/32677372 (1.00%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"photography"|"gaming"|"entertainment"|"videos"|"diy_and_crafts"|"food"|"writing"|"memes"|"music"|"funny",
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
			banner_img: ""|null,
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: "Warhammer"|"sysadmin"|"audiodrama"|"MUAontheCheap"|"tatilusa",
			display_name_prefixed: "r/Warhammer"|"r/sysadmin"|"r/audiodrama"|"r/MUAontheCheap"|"r/tatilusa",
			icon_img: "",
			icon_size: null,
			key_color: ""|"#ea0027"|"#a5a4a4",
			mod_permissions: [],
			name: "t5_2qqd4"|"t5_2qnp7"|"t5_2s7g2"|"t5_3m2bs"|"t5_4z3it2",
			over_18: boolean,
			primary_color: "#f9ce62"|"#7193ff"|"#ea0027"|"#fba37d"|"#cc5289",
			sr: "Warhammer"|"sysadmin"|"audiodrama"|"MUAontheCheap"|"tatilusa",
			sr_display_name_prefixed: "r/Warhammer"|"r/sysadmin"|"r/audiodrama"|"r/MUAontheCheap"|"r/tatilusa",
			subreddit_type: "public",
			subscribers: number,
			title: "All things Warhammer!"|"Sysadmin"|"Audio Drama"|"MUAonTheCheap"|"TatiLusa",
			url: "/r/Warhammer/"|"/r/sysadmin/"|"/r/audiodrama/"|"/r/MUAontheCheap/"|"/r/tatilusa/",
			user_can_crosspost: boolean|null,
			whitelist_status: "all_ads"|null,
		}, // 5/10917 (0.05%)
		subreddit_id: string,
		title: string,
	}[], // 10917/32677372 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1575311/32677372 (4.82%)
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
			sticky_duration_seconds?: null, // 1854/1163098 (0.16%)
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
		author_cakeday?: boolean, // 3968/1336842 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 51288/129728 (39.54%)
			e: "text"|"emoji",
			t?: string, // 78440/129728 (60.46%)
			u?: string, // 51288/129728 (39.54%)
		}[], // 1145693/1336842 (85.70%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1145693/1336842 (85.70%)
		author_fullname?: string, // 1145693/1336842 (85.70%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1145693/1336842 (85.70%)
		author_premium?: boolean, // 1145693/1336842 (85.70%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 13847/1336842 (1.04%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"animals"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"gaming"|"funny"|"entertainment"|"food",
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
				display_name: "chloe"|"NASCAR",
				display_name_prefixed: "r/chloe"|"r/NASCAR",
				icon_img: string,
				icon_size: number[],
				key_color: ""|"#46d160",
				mod_permissions: [],
				name: "t5_2qpoa"|"t5_2qs08",
				over_18: boolean,
				primary_color: "#014980"|"#bbbdbf",
				sr: "chloe"|"NASCAR",
				sr_display_name_prefixed: "r/chloe"|"r/NASCAR",
				subreddit_type: "public",
				subscribers: number,
				title: "Chloe"|"NASCAR on Reddit: News from the track",
				url: "/r/chloe/"|"/r/NASCAR/",
				user_can_crosspost: boolean,
				whitelist_status: "no_ads"|"all_ads",
			}, // 2/1090 (0.18%)
			subreddit_id: string,
			title: string,
		}[], // 1090/1336842 (0.08%)
		content_categories: null|("drawing_and_painting"|"photography"|"comics"|"gaming"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 362/1336842 (0.03%)
		event_is_live?: boolean, // 362/1336842 (0.03%)
		event_start?: number, // 362/1336842 (0.03%)
		gallery_data?: {
			items: {
				caption?: string, // 63678/397169 (16.03%)
				id: number,
				media_id: string,
				outbound_url?: string, // 20373/397169 (5.13%)
			}[],
		}|null, // 96726/1336842 (7.24%)
		gilded: number,
		gildings: {
			gid_1?: number, // 242967/1336842 (18.17%)
			gid_2?: number, // 40104/1336842 (3.00%)
			gid_3?: number, // 11265/1336842 (0.84%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 96726/1336842 (7.24%)
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
			a?: string, // 38796/255598 (15.18%)
			e: "text"|"emoji",
			t?: string, // 216802/255598 (84.82%)
			u?: string, // 38796/255598 (15.18%)
		}[],
		link_flair_template_id?: string, // 445888/1336842 (33.35%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_duration_seconds: number,
			recording_fallback_url?: string, // 18/19 (94.74%)
			recording_status: number,
			room_id: "349b30e8-1747-45c0-9ab0-9cec7c2a4eb7"|"592383e6-1f1b-45f8-89d2-4999928088d0"|"6012cbca-a2b1-4692-ae4d-771f70f5f4f1"|"56d83b0c-d7a3-4e29-9a11-ead9edc1c97c"|"69afafc4-db0c-45ad-9e63-700905ea8615"|"ead28541-12b7-41b4-a5d5-80c3b76af816"|"8346244b-46b5-47d7-99bb-4d3b78815bc4"|"d9794288-fb12-4ae6-9699-4780120b1d7f"|"17f6ece7-d626-4bf5-8e6f-e5c9ba479a88"|"faea6edb-ec21-433f-b016-a86ada015e5b"|"d98fbd85-d684-45e7-905e-8950c6366930"|"75210307-186a-4706-9026-081236c5ce6d"|"f836d037-f14b-40a2-bcfb-227f28075adc"|"ed2af771-9b4f-40c6-b5ca-edb65526b064",
		}, // 19/1336842 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"18k2410w0vhnd", // 31/475914 (0.01%)
			oembed?: {
				author_name?: string, // 298529/305183 (97.82%)
				author_url?: string, // 291053/305183 (95.37%)
				cache_age?: number, // 8754/305183 (2.87%)
				description?: string, // 13688/305183 (4.49%)
				height?: number|null, // 305182/305183 (100.00%)
				html?: string, // 305182/305183 (100.00%)
				mean_alpha?: number, // 25/305183 (0.01%)
				provider_name?: string, // 305182/305183 (100.00%)
				provider_url?: string, // 305182/305183 (100.00%)
				thumbnail_height?: number, // 294503/305183 (96.50%)
				thumbnail_url?: string, // 294566/305183 (96.52%)
				thumbnail_width?: number, // 294503/305183 (96.50%)
				title?: string, // 296368/305183 (97.11%)
				type?: "video"|"rich", // 305182/305183 (100.00%)
				url?: string, // 12492/305183 (4.09%)
				version?: "1.0", // 305182/305183 (100.00%)
				width?: number, // 305182/305183 (100.00%)
			}, // 305183/475914 (64.13%)
			reddit_video?: {
				bitrate_kbps?: number, // 169834/170700 (99.49%)
				dash_url?: string, // 170698/170700 (100.00%)
				duration?: number, // 170698/170700 (100.00%)
				fallback_url?: string, // 170698/170700 (100.00%)
				height?: number, // 170698/170700 (100.00%)
				hls_url?: string, // 170698/170700 (100.00%)
				is_gif?: boolean, // 170698/170700 (100.00%)
				scrubber_media_url?: string, // 170698/170700 (100.00%)
				transcoding_message?: string, // 2/170700 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 170698/170700 (100.00%)
			}, // 170700/475914 (35.87%)
			type?: string, // 305214/475914 (64.13%)
		},
		media_embed: {
			content?: string|null, // 305214/1336842 (22.83%)
			height?: number, // 305214/1336842 (22.83%)
			scrolling?: boolean, // 305214/1336842 (22.83%)
			width?: number, // 305214/1336842 (22.83%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1356/427243 (0.32%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 427131/427243 (99.97%)
				hlsUrl?: string, // 1356/427243 (0.32%)
				id?: string, // 427131/427243 (99.97%)
				isGif?: boolean, // 1356/427243 (0.32%)
				m?: "image/jpg"|"image/png"|"image/gif", // 425775/427243 (99.66%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 241126/427243 (56.44%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 425775/427243 (99.66%)
				s?: {
					gif?: string, // 9891/425775 (2.32%)
					mp4?: string, // 9891/425775 (2.32%)
					u?: string, // 415884/425775 (97.68%)
					x: number,
					y: number,
				}, // 425775/427243 (99.66%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1356/427243 (0.32%)
				y?: number, // 1356/427243 (0.32%)
			},
		}|null, // 111095/1336842 (8.31%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 52/12168 (0.43%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED"|"CANCELLED",
			resolved_option_id: null|"14181645"|"14170001"|"14180978"|"14181759"|"14218901"|"13707682"|"13576711"|"14350104"|"14199957"|"14509910"|"11955494"|"14693030"|"14797222"|"14853066",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 3406/1336842 (0.25%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 924190/1336842 (69.13%)
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
					}, // 44718/924190 (4.84%)
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
					}, // 44718/924190 (4.84%)
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
					}, // 474532/924190 (51.35%)
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
					}, // 479879/924190 (51.92%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 238944/239142 (99.92%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 239142/924190 (25.88%)
		}, // 924190/1336842 (69.13%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"content_takedown"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 222/1336842 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"18k2410w0vhnd", // 31/475914 (0.01%)
			oembed?: {
				author_name?: string, // 298529/305183 (97.82%)
				author_url?: string, // 291053/305183 (95.37%)
				cache_age?: number, // 8754/305183 (2.87%)
				description?: string, // 13688/305183 (4.49%)
				height?: number|null, // 305182/305183 (100.00%)
				html?: string, // 305182/305183 (100.00%)
				mean_alpha?: number, // 25/305183 (0.01%)
				provider_name?: string, // 305182/305183 (100.00%)
				provider_url?: string, // 305182/305183 (100.00%)
				thumbnail_height?: number, // 294503/305183 (96.50%)
				thumbnail_url?: string, // 294566/305183 (96.52%)
				thumbnail_width?: number, // 294503/305183 (96.50%)
				title?: string, // 296368/305183 (97.11%)
				type?: "video"|"rich", // 305182/305183 (100.00%)
				url?: string, // 12492/305183 (4.09%)
				version?: "1.0", // 305182/305183 (100.00%)
				width?: number, // 305182/305183 (100.00%)
			}, // 305183/475914 (64.13%)
			reddit_video?: {
				bitrate_kbps?: number, // 169834/170700 (99.49%)
				dash_url?: string, // 170698/170700 (100.00%)
				duration?: number, // 170698/170700 (100.00%)
				fallback_url?: string, // 170698/170700 (100.00%)
				height?: number, // 170698/170700 (100.00%)
				hls_url?: string, // 170698/170700 (100.00%)
				is_gif?: boolean, // 170698/170700 (100.00%)
				scrubber_media_url?: string, // 170698/170700 (100.00%)
				transcoding_message?: string, // 2/170700 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 170698/170700 (100.00%)
			}, // 170700/475914 (35.87%)
			type?: string, // 305214/475914 (64.13%)
		},
		secure_media_embed: {
			content?: string|null, // 305214/1336842 (22.83%)
			height?: number, // 305214/1336842 (22.83%)
			media_domain_url?: string, // 305214/1336842 (22.83%)
			scrolling?: boolean, // 305214/1336842 (22.83%)
			width?: number, // 305214/1336842 (22.83%)
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
		thumbnail_height?: number|null, // 1336831/1336842 (100.00%)
		thumbnail_width?: number|null, // 1336831/1336842 (100.00%)
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
					total_amount: number,
					user_amount: null,
					vote_count: number,
				}[],
				resolved_option_id: string|null,
				status: "RESOLVED"|"CLOSED"|"OPEN",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "LIVE"|"CLOSED",
			subreddit_id: "t5_3bx7j"|"t5_2qimj"|"t5_2r1ky"|"t5_2s3v4"|"t5_2qh1f"|"t5_2v2cd"|"t5_fknyy"|"t5_3zn656",
			theme_id: "theme_1"|"theme_5"|"theme_7"|"theme_3"|"theme_8"|"theme_4",
			total_participants: number,
			tournament_id: string,
		}|null, // 12/1336842 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1208639/1336842 (90.41%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1575311/32677372 (4.82%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 39977/32677372 (0.12%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 39977/32677372 (0.12%)
	embed_url?: null|string, // 39977/32677372 (0.12%)
	event_end?: number, // 1614/32677372 (0.00%)
	event_is_live?: boolean, // 1614/32677372 (0.00%)
	event_start?: number, // 1614/32677372 (0.00%)
	events?: [], // 39977/32677372 (0.12%)
	eventsOnRender?: [], // 39977/32677372 (0.12%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Install"|"View More"|"Download"|"Order Now"|"Apply Now"|"Play Now"|"Pre-order Now"|"Watch Now"|"Get a Quote"|"Contact Us", // 3067/4875744 (0.06%)
			caption?: string, // 513155/4875744 (10.52%)
			display_url?: string, // 2610/4875744 (0.05%)
			id: number,
			media_id: string,
			outbound_url?: string, // 89343/4875744 (1.83%)
		}[],
	}|null, // 2151035/32677372 (6.58%)
	gilded: number,
	gildings: {
		gid_1?: number, // 335987/32677372 (1.03%)
		gid_2?: number, // 35889/32677372 (0.11%)
		gid_3?: number, // 7360/32677372 (0.02%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 39977/32677372 (0.12%)
	id: string,
	impression_id?: null, // 39977/32677372 (0.12%)
	impression_id_str?: null, // 39977/32677372 (0.12%)
	is_blank?: boolean, // 39977/32677372 (0.12%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2151035/32677372 (6.58%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 39977/32677372 (0.12%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 645757/6767570 (9.54%)
		e: "text"|"emoji",
		t?: string, // 6121813/6767570 (90.46%)
		u?: string, // 645757/6767570 (9.54%)
	}[],
	link_flair_template_id?: string, // 11231605/32677372 (34.37%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: string, // 1/309 (0.32%)
		recording_duration_seconds: number,
		recording_fallback_url?: string, // 230/309 (74.43%)
		recording_status: number,
		room_id: string,
	}, // 309/32677372 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"18k2410w0vhnd"|"18ku9dk4lwdqc"|"ta535s1hq2je"|"18lftzh8b93od"|"18mu16wao2l07"|"18n658mjna6va"|"18n82zpp49pya"|"18nrvtb7i4l1i"|"18nzr1xhbj13v"|"18okqf1vp7muq"|"18p5j747sw0es"|"18pjjh2laxfc1"|"18pmx6upw9fdu"|"18pvusix2modj", // 152/4145749 (0.00%)
		oembed?: {
			author_name?: string, // 2858425/3095641 (92.34%)
			author_url?: string, // 2812555/3095641 (90.86%)
			cache_age?: number, // 168791/3095641 (5.45%)
			description?: string, // 309027/3095641 (9.98%)
			height?: number|null, // 3095628/3095641 (100.00%)
			html?: string, // 3095628/3095641 (100.00%)
			marginheight?: number, // 7/3095641 (0.00%)
			marginwidth?: number, // 7/3095641 (0.00%)
			mean_alpha?: number, // 3001/3095641 (0.10%)
			provider_name?: string, // 3095628/3095641 (100.00%)
			provider_url?: string, // 3095628/3095641 (100.00%)
			thumbnail_height?: number, // 2920209/3095641 (94.33%)
			thumbnail_url?: string, // 2921770/3095641 (94.38%)
			thumbnail_width?: number, // 2920209/3095641 (94.33%)
			title?: string, // 2925662/3095641 (94.51%)
			type?: "video"|"rich", // 3095628/3095641 (100.00%)
			url?: string, // 312443/3095641 (10.09%)
			version?: "1.0", // 3095621/3095641 (100.00%)
			width?: number, // 3095628/3095641 (100.00%)
		}, // 3095641/4145749 (74.67%)
		reddit_video?: {
			bitrate_kbps?: number, // 1043519/1049956 (99.39%)
			dash_url?: string, // 1043529/1049956 (99.39%)
			duration?: number, // 1043529/1049956 (99.39%)
			fallback_url?: string, // 1043529/1049956 (99.39%)
			height?: number|null, // 1043868/1049956 (99.42%)
			hls_url?: string, // 1043529/1049956 (99.39%)
			is_gif?: boolean, // 1043529/1049956 (99.39%)
			scrubber_media_url?: string, // 1043529/1049956 (99.39%)
			transcoding_message?: string, // 6427/1049956 (0.61%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1043868/1049956 (99.42%)
		}, // 1049956/4145749 (25.33%)
		type?: string, // 3095793/4145749 (74.67%)
	},
	media_embed: {
		content?: string|null, // 3095793/32677372 (9.47%)
		height?: number, // 3095793/32677372 (9.47%)
		scrolling?: boolean, // 3095793/32677372 (9.47%)
		width?: number, // 3095793/32677372 (9.47%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17028/5306293 (0.32%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 5304281/5306293 (99.96%)
			hlsUrl?: string, // 17028/5306293 (0.32%)
			id?: string, // 5304281/5306293 (99.96%)
			isGif?: boolean, // 17028/5306293 (0.32%)
			m?: "image/jpg"|"image/png"|"image/gif", // 5287253/5306293 (99.64%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1809222/5306293 (34.10%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5287253/5306293 (99.64%)
			s?: {
				gif?: string, // 45985/5287253 (0.87%)
				mp4?: string, // 45985/5287253 (0.87%)
				u?: string, // 5241268/5287253 (99.13%)
				x: number,
				y: number,
			}, // 5287253/5306293 (99.64%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 17028/5306293 (0.32%)
			y?: number, // 17028/5306293 (0.32%)
		},
	}|null, // 2569709/32677372 (7.86%)
	media_only: boolean,
	mobile_ad_url?: string, // 39977/32677372 (0.12%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 39977/32677372 (0.12%)
	outbound_link?: {
	}, // 39977/32677372 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 5428/424662 (1.28%)
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
	}|null, // 166485/32677372 (0.51%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 10935348/32677372 (33.46%)
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
				}, // 210775/10935348 (1.93%)
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
				}, // 210775/10935348 (1.93%)
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
				}, // 3924142/10935348 (35.88%)
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
				}, // 3993558/10935348 (36.52%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 974777/974977 (99.98%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 974977/10935348 (8.92%)
	}, // 10935348/32677372 (33.46%)
	priority_id?: null, // 39977/32677372 (0.12%)
	promo_layout?: null, // 39977/32677372 (0.12%)
	promoted?: boolean, // 39977/32677372 (0.12%)
	promoted_by?: null, // 39977/32677372 (0.12%)
	promoted_display_name?: null, // 39977/32677372 (0.12%)
	promoted_url?: null, // 39977/32677372 (0.12%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 23756/32677372 (0.07%)
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"18k2410w0vhnd"|"18ku9dk4lwdqc"|"ta535s1hq2je"|"18lftzh8b93od"|"18mu16wao2l07"|"18n658mjna6va"|"18n82zpp49pya"|"18nrvtb7i4l1i"|"18nzr1xhbj13v"|"18okqf1vp7muq"|"18p5j747sw0es"|"18pjjh2laxfc1"|"18pmx6upw9fdu"|"18pvusix2modj", // 152/4145749 (0.00%)
		oembed?: {
			author_name?: string, // 2858425/3095641 (92.34%)
			author_url?: string, // 2812555/3095641 (90.86%)
			cache_age?: number, // 168791/3095641 (5.45%)
			description?: string, // 309027/3095641 (9.98%)
			height?: number|null, // 3095628/3095641 (100.00%)
			html?: string, // 3095628/3095641 (100.00%)
			marginheight?: number, // 7/3095641 (0.00%)
			marginwidth?: number, // 7/3095641 (0.00%)
			mean_alpha?: number, // 3001/3095641 (0.10%)
			provider_name?: string, // 3095628/3095641 (100.00%)
			provider_url?: string, // 3095628/3095641 (100.00%)
			thumbnail_height?: number, // 2920209/3095641 (94.33%)
			thumbnail_url?: string, // 2921770/3095641 (94.38%)
			thumbnail_width?: number, // 2920209/3095641 (94.33%)
			title?: string, // 2925662/3095641 (94.51%)
			type?: "video"|"rich", // 3095628/3095641 (100.00%)
			url?: string, // 312443/3095641 (10.09%)
			version?: "1.0", // 3095621/3095641 (100.00%)
			width?: number, // 3095628/3095641 (100.00%)
		}, // 3095641/4145749 (74.67%)
		reddit_video?: {
			bitrate_kbps?: number, // 1043519/1049956 (99.39%)
			dash_url?: string, // 1043529/1049956 (99.39%)
			duration?: number, // 1043529/1049956 (99.39%)
			fallback_url?: string, // 1043529/1049956 (99.39%)
			height?: number|null, // 1043868/1049956 (99.42%)
			hls_url?: string, // 1043529/1049956 (99.39%)
			is_gif?: boolean, // 1043529/1049956 (99.39%)
			scrubber_media_url?: string, // 1043529/1049956 (99.39%)
			transcoding_message?: string, // 6427/1049956 (0.61%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1043868/1049956 (99.42%)
		}, // 1049956/4145749 (25.33%)
		type?: string, // 3095793/4145749 (74.67%)
	},
	secure_media_embed: {
		content?: string|null, // 3095793/32677372 (9.47%)
		height?: number, // 3095793/32677372 (9.47%)
		media_domain_url?: string, // 3095793/32677372 (9.47%)
		scrolling?: boolean, // 3095793/32677372 (9.47%)
		width?: number, // 3095793/32677372 (9.47%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 39977/32677372 (0.12%)
	sk_ad_network_data?: null, // 39977/32677372 (0.12%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 39977/32677372 (0.12%)
	third_party_tracking?: null, // 39977/32677372 (0.12%)
	third_party_tracking_2?: null, // 39977/32677372 (0.12%)
	thumbnail: string,
	thumbnail_height?: number|null, // 32663033/32677372 (99.96%)
	thumbnail_width?: number|null, // 32663033/32677372 (99.96%)
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
		}[], // 101/104 (97.12%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_8"|"theme_2"|"theme_5"|"theme_4"|"theme_6"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 104/32677372 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 21049155/32677372 (64.42%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}