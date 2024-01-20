interface RedditPost {
	adserver_click_url?: null, // 35618/27316260 (0.13%)
	adserver_imp_pixel?: null, // 35618/27316260 (0.13%)
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
	app_store_data?: null, // 35618/27316260 (0.13%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 145415/27316260 (0.53%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 749250/2002562 (37.41%)
		e: "text"|"emoji",
		t?: string, // 1253312/2002562 (62.59%)
		u?: string, // 749250/2002562 (37.41%)
	}[], // 18996365/27316260 (69.54%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 18996365/27316260 (69.54%)
	author_fullname?: string, // 18996365/27316260 (69.54%)
	author_id?: string|null, // 35618/27316260 (0.13%)
	author_patreon_flair?: boolean, // 18996365/27316260 (69.54%)
	author_premium?: boolean, // 18996365/27316260 (69.54%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 32616/27316260 (0.12%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"gaming"|"photography"|"entertainment"|"animals"|"diy_and_crafts"|"videos"|"food"|"memes"|"music"|"writing"|"funny",
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
	}[], // 8824/27316260 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1231751/27316260 (4.51%)
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
		author_cakeday?: boolean, // 3830/872876 (0.44%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 35678/92954 (38.38%)
			e: "text"|"emoji",
			t?: string, // 57276/92954 (61.62%)
			u?: string, // 35678/92954 (38.38%)
		}[], // 733305/872876 (84.01%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 733305/872876 (84.01%)
		author_fullname?: string, // 733305/872876 (84.01%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 733305/872876 (84.01%)
		author_premium?: boolean, // 733305/872876 (84.01%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 88/872876 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"entertainment"|"photography"|"gaming"|"animals"|"diy_and_crafts"|"funny"|"pics_and_gifs",
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
			}, // 1/1026 (0.10%)
			subreddit_id: string,
			title: string,
		}[], // 1026/872876 (0.12%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"writing"|"diy_and_crafts"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 209/872876 (0.02%)
		event_is_live?: boolean, // 209/872876 (0.02%)
		event_start?: number, // 209/872876 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 27210/210493 (12.93%)
				id: number,
				media_id: string,
				outbound_url?: string, // 8940/210493 (4.25%)
			}[],
		}|null, // 49096/872876 (5.62%)
		gilded: number,
		gildings: {
			gid_1?: number, // 212706/872876 (24.37%)
			gid_2?: number, // 33872/872876 (3.88%)
			gid_3?: number, // 9529/872876 (1.09%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 49096/872876 (5.62%)
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
			a?: string, // 21435/154541 (13.87%)
			e: "text"|"emoji",
			t?: string, // 133106/154541 (86.13%)
			u?: string, // 21435/154541 (13.87%)
		}[],
		link_flair_template_id?: string, // 274608/872876 (31.46%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			room_id: "459ac2c0-a7a4-4291-89db-273831c9d976"|"54733b98-8672-4841-8edb-e9f0066ce607"|"cbb6855e-3564-4652-b9e5-9439f38265e8"|"c111ffd7-9058-4dba-a84f-a15ab280432e",
		}, // 4/872876 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "17njpucw8rfqk", // 1/277343 (0.00%)
			oembed?: {
				author_name?: string, // 176889/180894 (97.79%)
				author_url?: string, // 169536/180894 (93.72%)
				cache_age?: number, // 4620/180894 (2.55%)
				description?: string, // 10643/180894 (5.88%)
				height?: number|null, // 180893/180894 (100.00%)
				html?: string, // 180893/180894 (100.00%)
				mean_alpha?: number, // 34/180894 (0.02%)
				provider_name?: string, // 180893/180894 (100.00%)
				provider_url?: string, // 180893/180894 (100.00%)
				thumbnail_height?: number, // 175152/180894 (96.83%)
				thumbnail_url?: string, // 175256/180894 (96.88%)
				thumbnail_width?: number, // 175152/180894 (96.83%)
				title?: string, // 176059/180894 (97.33%)
				type?: "video"|"rich", // 180893/180894 (100.00%)
				url?: string, // 6417/180894 (3.55%)
				version?: "1.0", // 180893/180894 (100.00%)
				width?: number, // 180893/180894 (100.00%)
			}, // 180894/277343 (65.22%)
			reddit_video?: {
				bitrate_kbps?: number, // 95374/96448 (98.89%)
				dash_url?: string, // 96447/96448 (100.00%)
				duration?: number, // 96447/96448 (100.00%)
				fallback_url?: string, // 96447/96448 (100.00%)
				height?: number, // 96447/96448 (100.00%)
				hls_url?: string, // 96447/96448 (100.00%)
				is_gif?: boolean, // 96447/96448 (100.00%)
				scrubber_media_url?: string, // 96447/96448 (100.00%)
				transcoding_message?: string, // 1/96448 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 96447/96448 (100.00%)
			}, // 96448/277343 (34.78%)
			type?: string, // 180895/277343 (65.22%)
		},
		media_embed: {
			content?: string|null, // 180895/872876 (20.72%)
			height?: number, // 180895/872876 (20.72%)
			scrolling?: boolean, // 180895/872876 (20.72%)
			width?: number, // 180895/872876 (20.72%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 683/239686 (0.28%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 239523/239686 (99.93%)
				hlsUrl?: string, // 683/239686 (0.28%)
				id?: string, // 239523/239686 (99.93%)
				isGif?: boolean, // 683/239686 (0.28%)
				m?: "image/jpg"|"image/png"|"image/gif", // 238840/239686 (99.65%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 110143/239686 (45.95%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 238840/239686 (99.65%)
				s?: {
					gif?: string, // 4378/238840 (1.83%)
					mp4?: string, // 4378/238840 (1.83%)
					u?: string, // 234462/238840 (98.17%)
					x: number,
					y: number,
				}, // 238840/239686 (99.65%)
				status: "valid"|"failed",
				x?: number, // 683/239686 (0.28%)
				y?: number, // 683/239686 (0.28%)
			},
		}|null, // 59427/872876 (6.81%)
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
				total_stake_amount?: number, // 29/6978 (0.42%)
				vote_count?: number, // 6943/6978 (99.50%)
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"10182266"|"9022831"|"10490259"|"10490626"|"10493095",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 1939/872876 (0.22%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 599605/872876 (68.69%)
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
					}, // 19655/599605 (3.28%)
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
					}, // 19655/599605 (3.28%)
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
					}, // 279414/599605 (46.60%)
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
					}, // 282912/599605 (47.18%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 140732/140923 (99.86%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 140923/599605 (23.50%)
		}, // 599605/872876 (68.69%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"deleted"|"reddit"|"author"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 208/872876 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "17njpucw8rfqk", // 1/277343 (0.00%)
			oembed?: {
				author_name?: string, // 176889/180894 (97.79%)
				author_url?: string, // 169536/180894 (93.72%)
				cache_age?: number, // 4620/180894 (2.55%)
				description?: string, // 10643/180894 (5.88%)
				height?: number|null, // 180893/180894 (100.00%)
				html?: string, // 180893/180894 (100.00%)
				mean_alpha?: number, // 34/180894 (0.02%)
				provider_name?: string, // 180893/180894 (100.00%)
				provider_url?: string, // 180893/180894 (100.00%)
				thumbnail_height?: number, // 175152/180894 (96.83%)
				thumbnail_url?: string, // 175256/180894 (96.88%)
				thumbnail_width?: number, // 175152/180894 (96.83%)
				title?: string, // 176059/180894 (97.33%)
				type?: "video"|"rich", // 180893/180894 (100.00%)
				url?: string, // 6417/180894 (3.55%)
				version?: "1.0", // 180893/180894 (100.00%)
				width?: number, // 180893/180894 (100.00%)
			}, // 180894/277343 (65.22%)
			reddit_video?: {
				bitrate_kbps?: number, // 95374/96448 (98.89%)
				dash_url?: string, // 96447/96448 (100.00%)
				duration?: number, // 96447/96448 (100.00%)
				fallback_url?: string, // 96447/96448 (100.00%)
				height?: number, // 96447/96448 (100.00%)
				hls_url?: string, // 96447/96448 (100.00%)
				is_gif?: boolean, // 96447/96448 (100.00%)
				scrubber_media_url?: string, // 96447/96448 (100.00%)
				transcoding_message?: string, // 1/96448 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 96447/96448 (100.00%)
			}, // 96448/277343 (34.78%)
			type?: string, // 180895/277343 (65.22%)
		},
		secure_media_embed: {
			content?: string|null, // 180895/872876 (20.72%)
			height?: number, // 180895/872876 (20.72%)
			media_domain_url?: string, // 180895/872876 (20.72%)
			scrolling?: boolean, // 180895/872876 (20.72%)
			width?: number, // 180895/872876 (20.72%)
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
		thumbnail_height?: number|null, // 872498/872876 (99.96%)
		thumbnail_width?: number|null, // 872498/872876 (99.96%)
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: "r/CryptoCurrency Predictions Tournament",
			predictions: {
				body: string,
				created_at: number,
				id: "t3_pvkqea"|"t3_pvkqe1"|"t3_pvkqdv"|"t3_pvkqdh"|"t3_pvkqd4"|"t3_pvkqcz"|"t3_pvkqcr"|"t3_pvkqce"|"t3_pvkqc0"|"t3_pvkqbn"|"t3_pvkqbf"|"t3_pvkqb1"|"t3_pvkqar",
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
				resolved_option_id: "10745038"|"10745032"|"10745029"|"10745020"|"10745014"|"10745008"|"10745003"|"10744996"|"10744987"|"10744981"|"10744976"|"10744969"|"10744964",
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
			theme_id: "theme_4",
			total_participants: number,
			tournament_id: string,
		}, // 1/872876 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 736452/872876 (84.37%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1231751/27316260 (4.51%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 35618/27316260 (0.13%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 35618/27316260 (0.13%)
	embed_url?: null|string, // 35618/27316260 (0.13%)
	event_end?: number, // 1538/27316260 (0.01%)
	event_is_live?: boolean, // 1538/27316260 (0.01%)
	event_start?: number, // 1538/27316260 (0.01%)
	events?: [], // 35618/27316260 (0.13%)
	eventsOnRender?: [], // 35618/27316260 (0.13%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"View More"|"Pre-order Now"|"Install"|"Get Showtimes"|"Get a Quote"|"Watch Now"|"Play Now"|"Contact Us"|"See Menu"|"Apply Now", // 4986/3167442 (0.16%)
			caption?: string, // 375133/3167442 (11.84%)
			display_url?: string, // 4679/3167442 (0.15%)
			id: number,
			media_id: string,
			outbound_url?: string, // 76747/3167442 (2.42%)
		}[],
	}|null, // 1223372/27316260 (4.48%)
	gilded: number,
	gildings: {
		gid_1?: number, // 428410/27316260 (1.57%)
		gid_2?: number, // 36150/27316260 (0.13%)
		gid_3?: number, // 7291/27316260 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 35618/27316260 (0.13%)
	id: string,
	impression_id?: null, // 35618/27316260 (0.13%)
	impression_id_str?: null, // 35618/27316260 (0.13%)
	is_blank?: boolean, // 35618/27316260 (0.13%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1223372/27316260 (4.48%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 35618/27316260 (0.13%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 382512/4722765 (8.10%)
		e: "text"|"emoji",
		t?: string, // 4340253/4722765 (91.90%)
		u?: string, // 382512/4722765 (8.10%)
	}[],
	link_flair_template_id?: string, // 7444713/27316260 (27.25%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		room_id: string,
	}, // 50/27316260 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: string, // 31/2959886 (0.00%)
		oembed?: {
			author_name?: string, // 2133204/2267009 (94.10%)
			author_url?: string, // 2091820/2267009 (92.27%)
			cache_age?: number, // 146030/2267009 (6.44%)
			description?: string, // 186686/2267009 (8.23%)
			height?: number|null, // 2266997/2267009 (100.00%)
			html?: string, // 2266997/2267009 (100.00%)
			marginheight?: number, // 6/2267009 (0.00%)
			marginwidth?: number, // 6/2267009 (0.00%)
			mean_alpha?: number, // 2418/2267009 (0.11%)
			provider_name?: string, // 2266997/2267009 (100.00%)
			provider_url?: string, // 2266997/2267009 (100.00%)
			thumbnail_height?: number, // 2108404/2267009 (93.00%)
			thumbnail_url?: string, // 2110381/2267009 (93.09%)
			thumbnail_width?: number, // 2108404/2267009 (93.00%)
			title?: string, // 2112464/2267009 (93.18%)
			type?: "video"|"rich", // 2266997/2267009 (100.00%)
			url?: string, // 219882/2267009 (9.70%)
			version?: "1.0", // 2266991/2267009 (100.00%)
			width?: number, // 2266997/2267009 (100.00%)
		}, // 2267009/2959886 (76.59%)
		reddit_video?: {
			bitrate_kbps?: number, // 689615/692846 (99.53%)
			dash_url?: string, // 689622/692846 (99.53%)
			duration?: number, // 689622/692846 (99.53%)
			fallback_url?: string, // 689622/692846 (99.53%)
			height?: number|null, // 689780/692846 (99.56%)
			hls_url?: string, // 689622/692846 (99.53%)
			is_gif?: boolean, // 689622/692846 (99.53%)
			scrubber_media_url?: string, // 689622/692846 (99.53%)
			transcoding_message?: string, // 3224/692846 (0.47%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 689780/692846 (99.56%)
		}, // 692846/2959886 (23.41%)
		type?: string, // 2267040/2959886 (76.59%)
	},
	media_embed: {
		content?: string|null, // 2267040/27316260 (8.30%)
		height?: number, // 2267040/27316260 (8.30%)
		scrolling?: boolean, // 2267040/27316260 (8.30%)
		width?: number, // 2267040/27316260 (8.30%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 13503/3519442 (0.38%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 3510665/3519442 (99.75%)
			hlsUrl?: string, // 13503/3519442 (0.38%)
			id?: string, // 3510665/3519442 (99.75%)
			isGif?: boolean, // 13503/3519442 (0.38%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3497162/3519442 (99.37%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 882968/3519442 (25.09%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3497162/3519442 (99.37%)
			s?: {
				gif?: string, // 30379/3497162 (0.87%)
				mp4?: string, // 30379/3497162 (0.87%)
				u?: string, // 3466783/3497162 (99.13%)
				x: number,
				y: number,
			}, // 3497162/3519442 (99.37%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 13503/3519442 (0.38%)
			y?: number, // 13503/3519442 (0.38%)
		},
	}|null, // 1545001/27316260 (5.66%)
	media_only: boolean,
	mobile_ad_url?: string, // 35618/27316260 (0.13%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 35618/27316260 (0.13%)
	outbound_link?: {
	}, // 35618/27316260 (0.13%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 1263/404984 (0.31%)
			vote_count?: number, // 404973/404984 (100.00%)
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
	}|null, // 141556/27316260 (0.52%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 9052101/27316260 (33.14%)
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
				}, // 123559/9052101 (1.36%)
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
				}, // 123559/9052101 (1.36%)
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
				}, // 2440993/9052101 (26.97%)
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
				}, // 2498670/9052101 (27.60%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 579264/579526 (99.95%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 579526/9052101 (6.40%)
	}, // 9052101/27316260 (33.14%)
	priority_id?: null, // 35618/27316260 (0.13%)
	promo_layout?: null, // 35618/27316260 (0.13%)
	promoted?: boolean, // 35618/27316260 (0.13%)
	promoted_by?: null, // 35618/27316260 (0.13%)
	promoted_display_name?: null, // 35618/27316260 (0.13%)
	promoted_url?: null, // 35618/27316260 (0.13%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"deleted"|"automod_filtered"|"author"|"copyright_takedown"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 18394/27316260 (0.07%)
	score: number,
	secure_media: null|{
		event_id?: string, // 31/2959886 (0.00%)
		oembed?: {
			author_name?: string, // 2133204/2267009 (94.10%)
			author_url?: string, // 2091820/2267009 (92.27%)
			cache_age?: number, // 146030/2267009 (6.44%)
			description?: string, // 186686/2267009 (8.23%)
			height?: number|null, // 2266997/2267009 (100.00%)
			html?: string, // 2266997/2267009 (100.00%)
			marginheight?: number, // 6/2267009 (0.00%)
			marginwidth?: number, // 6/2267009 (0.00%)
			mean_alpha?: number, // 2418/2267009 (0.11%)
			provider_name?: string, // 2266997/2267009 (100.00%)
			provider_url?: string, // 2266997/2267009 (100.00%)
			thumbnail_height?: number, // 2108404/2267009 (93.00%)
			thumbnail_url?: string, // 2110381/2267009 (93.09%)
			thumbnail_width?: number, // 2108404/2267009 (93.00%)
			title?: string, // 2112464/2267009 (93.18%)
			type?: "video"|"rich", // 2266997/2267009 (100.00%)
			url?: string, // 219882/2267009 (9.70%)
			version?: "1.0", // 2266991/2267009 (100.00%)
			width?: number, // 2266997/2267009 (100.00%)
		}, // 2267009/2959886 (76.59%)
		reddit_video?: {
			bitrate_kbps?: number, // 689615/692846 (99.53%)
			dash_url?: string, // 689622/692846 (99.53%)
			duration?: number, // 689622/692846 (99.53%)
			fallback_url?: string, // 689622/692846 (99.53%)
			height?: number|null, // 689780/692846 (99.56%)
			hls_url?: string, // 689622/692846 (99.53%)
			is_gif?: boolean, // 689622/692846 (99.53%)
			scrubber_media_url?: string, // 689622/692846 (99.53%)
			transcoding_message?: string, // 3224/692846 (0.47%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 689780/692846 (99.56%)
		}, // 692846/2959886 (23.41%)
		type?: string, // 2267040/2959886 (76.59%)
	},
	secure_media_embed: {
		content?: string|null, // 2267040/27316260 (8.30%)
		height?: number, // 2267040/27316260 (8.30%)
		media_domain_url?: string, // 2267040/27316260 (8.30%)
		scrolling?: boolean, // 2267040/27316260 (8.30%)
		width?: number, // 2267040/27316260 (8.30%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 35618/27316260 (0.13%)
	sk_ad_network_data?: null, // 35618/27316260 (0.13%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 35618/27316260 (0.13%)
	third_party_tracking?: null, // 35618/27316260 (0.13%)
	third_party_tracking_2?: null, // 35618/27316260 (0.13%)
	thumbnail: string,
	thumbnail_height?: number|null, // 27308296/27316260 (99.97%)
	thumbnail_width?: number|null, // 27308296/27316260 (99.97%)
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	tournament_data?: {
		currency: "GAME_TOKENS",
		name: "Predictions Tournament"|"🏟 UFC 266 🏟"|"2044 Close Senate Elections"|"US Open 2021 Predictions"|"🏟 Anthony Smith vs Ryan Spann 🏟"|"Sudirman Cup 2021"|"Vote"|"r/CryptoCurrency Predictions Tournament"|"🏟 Santos vs Walker 🏟",
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
		subreddit_id: "t5_2qhj4"|"t5_2qsev"|"t5_2umu4"|"t5_3ny3sj"|"t5_2qiq1"|"t5_2r6dm"|"t5_2smoo"|"t5_2wlj3",
		theme_id: "theme_1"|"theme_7"|"theme_4",
		total_participants: number,
		tournament_id: string,
	}, // 16/27316260 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 14252703/27316260 (52.18%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}