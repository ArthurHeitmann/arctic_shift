interface RedditPost {
	adserver_click_url?: null, // 29758/28384220 (0.10%)
	adserver_imp_pixel?: null, // 29758/28384220 (0.10%)
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
	app_store_data?: null, // 29758/28384220 (0.10%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 103914/28384220 (0.37%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 807929/2154900 (37.49%)
		e: "text"|"emoji",
		t?: string, // 1346971/2154900 (62.51%)
		u?: string, // 807929/2154900 (37.49%)
	}[], // 19430613/28384220 (68.46%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 19430613/28384220 (68.46%)
	author_fullname?: string, // 19430613/28384220 (68.46%)
	author_id?: string|null, // 29758/28384220 (0.10%)
	author_patreon_flair?: boolean, // 19430613/28384220 (68.46%)
	author_premium?: boolean, // 19430613/28384220 (68.46%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 27926/28384220 (0.10%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"photography"|"entertainment"|"gaming"|"animals"|"diy_and_crafts"|"videos"|"memes"|"food"|"music"|"funny",
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
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: "MagicArena",
			display_name_prefixed: "r/MagicArena",
			icon_img: string,
			icon_size: number[],
			key_color: "",
			mod_permissions: [],
			name: "t5_3nbzd",
			over_18: boolean,
			primary_color: "",
			sr: "MagicArena",
			sr_display_name_prefixed: "r/MagicArena",
			subreddit_type: "public",
			subscribers: number,
			title: "Magic The Gathering: Arena",
			url: "/r/MagicArena/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads",
		}, // 1/8527 (0.01%)
		subreddit_id: string,
		title: string,
	}[], // 8527/28384220 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1214450/28384220 (4.28%)
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
		author_cakeday?: boolean, // 2657/959555 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 43831/107496 (40.77%)
			e: "text"|"emoji",
			t?: string, // 63665/107496 (59.23%)
			u?: string, // 43831/107496 (40.77%)
		}[], // 791810/959555 (82.52%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 791810/959555 (82.52%)
		author_fullname?: string, // 791810/959555 (82.52%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 791810/959555 (82.52%)
		author_premium?: boolean, // 791810/959555 (82.52%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 98/959555 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"art"|"memes",
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
		}[], // 1160/959555 (0.12%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"writing"|"diy_and_crafts"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 256/959555 (0.03%)
		event_is_live?: boolean, // 256/959555 (0.03%)
		event_start?: number, // 256/959555 (0.03%)
		gallery_data?: {
			items: {
				caption?: string, // 30766/219924 (13.99%)
				id: number,
				media_id: string,
				outbound_url?: string, // 10220/219924 (4.65%)
			}[],
		}|null, // 58565/959555 (6.10%)
		gilded: number,
		gildings: {
			gid_1?: number, // 254034/959555 (26.47%)
			gid_2?: number, // 41778/959555 (4.35%)
			gid_3?: number, // 12819/959555 (1.34%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 58565/959555 (6.10%)
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
			a?: string, // 23230/176642 (13.15%)
			e: "text"|"emoji",
			t?: string, // 153412/176642 (86.85%)
			u?: string, // 23230/176642 (13.15%)
		}[],
		link_flair_template_id?: string, // 310037/959555 (32.31%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			room_id: "f88ecfc3-cb4b-48c4-b2a0-82319ffbfc06"|"11710c58-2fc5-4622-8a8e-3a8f2cfbc520",
		}, // 2/959555 (0.00%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 190854/196289 (97.23%)
				author_url?: string, // 183113/196289 (93.29%)
				cache_age?: number, // 6000/196289 (3.06%)
				description?: string, // 12177/196289 (6.20%)
				height?: number|null, // 196283/196289 (100.00%)
				html?: string, // 196283/196289 (100.00%)
				mean_alpha?: number, // 42/196289 (0.02%)
				provider_name?: string, // 196283/196289 (100.00%)
				provider_url?: string, // 196283/196289 (100.00%)
				thumbnail_height?: number, // 188896/196289 (96.23%)
				thumbnail_url?: string, // 188945/196289 (96.26%)
				thumbnail_width?: number, // 188896/196289 (96.23%)
				title?: string, // 189980/196289 (96.79%)
				type?: "video"|"rich", // 196283/196289 (100.00%)
				url?: string, // 8072/196289 (4.11%)
				version?: "1.0", // 196283/196289 (100.00%)
				width?: number, // 196283/196289 (100.00%)
			}, // 196289/306395 (64.06%)
			reddit_video?: {
				bitrate_kbps?: number, // 108907/110106 (98.91%)
				dash_url?: string, // 110099/110106 (99.99%)
				duration?: number, // 110099/110106 (99.99%)
				fallback_url?: string, // 110099/110106 (99.99%)
				height?: number|null, // 110102/110106 (100.00%)
				hls_url?: string, // 110099/110106 (99.99%)
				is_gif?: boolean, // 110099/110106 (99.99%)
				scrubber_media_url?: string, // 110099/110106 (99.99%)
				transcoding_message?: string, // 7/110106 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 110102/110106 (100.00%)
			}, // 110106/306395 (35.94%)
			type?: string, // 196289/306395 (64.06%)
		},
		media_embed: {
			content?: string|null, // 196289/959555 (20.46%)
			height?: number, // 196289/959555 (20.46%)
			scrolling?: boolean, // 196289/959555 (20.46%)
			width?: number, // 196289/959555 (20.46%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 952/251501 (0.38%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 251246/251501 (99.90%)
				hlsUrl?: string, // 952/251501 (0.38%)
				id?: string, // 251246/251501 (99.90%)
				isGif?: boolean, // 952/251501 (0.38%)
				m?: "image/jpg"|"image/png"|"image/gif", // 250294/251501 (99.52%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 111101/251501 (44.18%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 250294/251501 (99.52%)
				s?: {
					gif?: string, // 3781/250294 (1.51%)
					mp4?: string, // 3781/250294 (1.51%)
					u?: string, // 246513/250294 (98.49%)
					x: number,
					y: number,
				}, // 250294/251501 (99.52%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 952/251501 (0.38%)
				y?: number, // 952/251501 (0.38%)
			},
		}|null, // 69674/959555 (7.26%)
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
				total_stake_amount?: number, // 18/8244 (0.22%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"9740777"|"9513165"|"9601531"|"9473227",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2282/959555 (0.24%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 629934/959555 (65.65%)
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
					}, // 19362/629934 (3.07%)
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
					}, // 19362/629934 (3.07%)
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
					}, // 274111/629934 (43.51%)
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
					}, // 277970/629934 (44.13%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 131987/132254 (99.80%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 132254/629934 (20.99%)
		}, // 629934/959555 (65.65%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 255/959555 (0.03%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 190854/196289 (97.23%)
				author_url?: string, // 183113/196289 (93.29%)
				cache_age?: number, // 6000/196289 (3.06%)
				description?: string, // 12177/196289 (6.20%)
				height?: number|null, // 196283/196289 (100.00%)
				html?: string, // 196283/196289 (100.00%)
				mean_alpha?: number, // 42/196289 (0.02%)
				provider_name?: string, // 196283/196289 (100.00%)
				provider_url?: string, // 196283/196289 (100.00%)
				thumbnail_height?: number, // 188896/196289 (96.23%)
				thumbnail_url?: string, // 188945/196289 (96.26%)
				thumbnail_width?: number, // 188896/196289 (96.23%)
				title?: string, // 189980/196289 (96.79%)
				type?: "video"|"rich", // 196283/196289 (100.00%)
				url?: string, // 8072/196289 (4.11%)
				version?: "1.0", // 196283/196289 (100.00%)
				width?: number, // 196283/196289 (100.00%)
			}, // 196289/306395 (64.06%)
			reddit_video?: {
				bitrate_kbps?: number, // 108907/110106 (98.91%)
				dash_url?: string, // 110099/110106 (99.99%)
				duration?: number, // 110099/110106 (99.99%)
				fallback_url?: string, // 110099/110106 (99.99%)
				height?: number|null, // 110102/110106 (100.00%)
				hls_url?: string, // 110099/110106 (99.99%)
				is_gif?: boolean, // 110099/110106 (99.99%)
				scrubber_media_url?: string, // 110099/110106 (99.99%)
				transcoding_message?: string, // 7/110106 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 110102/110106 (100.00%)
			}, // 110106/306395 (35.94%)
			type?: string, // 196289/306395 (64.06%)
		},
		secure_media_embed: {
			content?: string|null, // 196289/959555 (20.46%)
			height?: number, // 196289/959555 (20.46%)
			media_domain_url?: string, // 196289/959555 (20.46%)
			scrolling?: boolean, // 196289/959555 (20.46%)
			width?: number, // 196289/959555 (20.46%)
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
		thumbnail_height?: number|null, // 959178/959555 (99.96%)
		thumbnail_width?: number|null, // 959178/959555 (99.96%)
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:santasnoo")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 835199/959555 (87.04%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1214450/28384220 (4.28%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 29758/28384220 (0.10%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 29758/28384220 (0.10%)
	embed_url?: null|string, // 29758/28384220 (0.10%)
	event_end?: number, // 1566/28384220 (0.01%)
	event_is_live?: boolean, // 1566/28384220 (0.01%)
	event_start?: number, // 1566/28384220 (0.01%)
	events?: [], // 29758/28384220 (0.10%)
	eventsOnRender?: [], // 29758/28384220 (0.10%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"See Menu"|"Watch Now"|"Pre-order Now"|"Apply Now"|"Contact Us"|"Get Showtimes", // 4273/3248502 (0.13%)
			caption?: string, // 400424/3248502 (12.33%)
			display_url?: string, // 3375/3248502 (0.10%)
			id: number,
			media_id: string,
			outbound_url?: string, // 78031/3248502 (2.40%)
		}[],
	}|null, // 1586049/28384220 (5.59%)
	gilded: number,
	gildings: {
		gid_1?: number, // 510055/28384220 (1.80%)
		gid_2?: number, // 40533/28384220 (0.14%)
		gid_3?: number, // 8151/28384220 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 29758/28384220 (0.10%)
	id: string,
	impression_id?: null, // 29758/28384220 (0.10%)
	impression_id_str?: null, // 29758/28384220 (0.10%)
	is_blank?: boolean, // 29758/28384220 (0.10%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1586049/28384220 (5.59%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 29758/28384220 (0.10%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 470511/5909788 (7.96%)
		e: "text"|"emoji",
		t?: string, // 5439277/5909788 (92.04%)
		u?: string, // 470511/5909788 (7.96%)
	}[],
	link_flair_template_id?: string, // 9347236/28384220 (32.93%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		room_id: string,
	}, // 39/28384220 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: string, // 19/3252878 (0.00%)
		oembed?: {
			author_name?: string, // 2231051/2411487 (92.52%)
			author_url?: string, // 2180549/2411487 (90.42%)
			cache_age?: number, // 182347/2411487 (7.56%)
			description?: string, // 242168/2411487 (10.04%)
			height?: number|null, // 2411471/2411487 (100.00%)
			html?: string, // 2411471/2411487 (100.00%)
			marginheight?: number, // 2/2411487 (0.00%)
			marginwidth?: number, // 2/2411487 (0.00%)
			mean_alpha?: number, // 3218/2411487 (0.13%)
			provider_name?: string, // 2411471/2411487 (100.00%)
			provider_url?: string, // 2411471/2411487 (100.00%)
			thumbnail_height?: number, // 2212836/2411487 (91.76%)
			thumbnail_url?: string, // 2215113/2411487 (91.86%)
			thumbnail_width?: number, // 2212836/2411487 (91.76%)
			title?: string, // 2217437/2411487 (91.95%)
			type?: "video"|"rich", // 2411471/2411487 (100.00%)
			url?: string, // 278488/2411487 (11.55%)
			version?: "1.0", // 2411469/2411487 (100.00%)
			width?: number, // 2411471/2411487 (100.00%)
		}, // 2411487/3252878 (74.13%)
		reddit_video?: {
			bitrate_kbps?: number, // 835913/841372 (99.35%)
			dash_url?: string, // 835923/841372 (99.35%)
			duration?: number, // 835923/841372 (99.35%)
			fallback_url?: string, // 835923/841372 (99.35%)
			height?: number|null, // 836194/841372 (99.38%)
			hls_url?: string, // 835923/841372 (99.35%)
			is_gif?: boolean, // 835923/841372 (99.35%)
			scrubber_media_url?: string, // 835923/841372 (99.35%)
			transcoding_message?: string, // 5449/841372 (0.65%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 836194/841372 (99.38%)
		}, // 841372/3252878 (25.87%)
		type?: string, // 2411506/3252878 (74.13%)
	},
	media_embed: {
		content?: string|null, // 2411506/28384220 (8.50%)
		height?: number, // 2411506/28384220 (8.50%)
		scrolling?: boolean, // 2411506/28384220 (8.50%)
		width?: number, // 2411506/28384220 (8.50%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14340/3605097 (0.40%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 3597008/3605097 (99.78%)
			hlsUrl?: string, // 14340/3605097 (0.40%)
			id?: string, // 3597008/3605097 (99.78%)
			isGif?: boolean, // 14340/3605097 (0.40%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3582668/3605097 (99.38%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 859520/3605097 (23.84%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3582668/3605097 (99.38%)
			s?: {
				gif?: string, // 28371/3582668 (0.79%)
				mp4?: string, // 28371/3582668 (0.79%)
				u?: string, // 3554297/3582668 (99.21%)
				x: number,
				y: number,
			}, // 3582668/3605097 (99.38%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 14340/3605097 (0.40%)
			y?: number, // 14340/3605097 (0.40%)
		},
	}|null, // 1939492/28384220 (6.83%)
	media_only: boolean,
	mobile_ad_url?: string, // 29758/28384220 (0.10%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 29758/28384220 (0.10%)
	outbound_link?: {
	}, // 29758/28384220 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 761/415102 (0.18%)
			vote_count?: number, // 415100/415102 (100.00%)
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
	}|null, // 164883/28384220 (0.58%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 9170994/28384220 (32.31%)
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
				}, // 117382/9170994 (1.28%)
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
				}, // 117382/9170994 (1.28%)
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
				}, // 2460918/9170994 (26.83%)
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
				}, // 2517622/9170994 (27.45%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 523218/523532 (99.94%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 523532/9170994 (5.71%)
	}, // 9170994/28384220 (32.31%)
	priority_id?: null, // 29758/28384220 (0.10%)
	promo_layout?: null, // 29758/28384220 (0.10%)
	promoted?: boolean, // 29758/28384220 (0.10%)
	promoted_by?: null, // 29758/28384220 (0.10%)
	promoted_display_name?: null, // 29758/28384220 (0.10%)
	promoted_url?: null, // 29758/28384220 (0.10%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 27252/28384220 (0.10%)
	score: number,
	secure_media: null|{
		event_id?: string, // 19/3252878 (0.00%)
		oembed?: {
			author_name?: string, // 2231051/2411487 (92.52%)
			author_url?: string, // 2180549/2411487 (90.42%)
			cache_age?: number, // 182347/2411487 (7.56%)
			description?: string, // 242168/2411487 (10.04%)
			height?: number|null, // 2411471/2411487 (100.00%)
			html?: string, // 2411471/2411487 (100.00%)
			marginheight?: number, // 2/2411487 (0.00%)
			marginwidth?: number, // 2/2411487 (0.00%)
			mean_alpha?: number, // 3218/2411487 (0.13%)
			provider_name?: string, // 2411471/2411487 (100.00%)
			provider_url?: string, // 2411471/2411487 (100.00%)
			thumbnail_height?: number, // 2212836/2411487 (91.76%)
			thumbnail_url?: string, // 2215113/2411487 (91.86%)
			thumbnail_width?: number, // 2212836/2411487 (91.76%)
			title?: string, // 2217437/2411487 (91.95%)
			type?: "video"|"rich", // 2411471/2411487 (100.00%)
			url?: string, // 278488/2411487 (11.55%)
			version?: "1.0", // 2411469/2411487 (100.00%)
			width?: number, // 2411471/2411487 (100.00%)
		}, // 2411487/3252878 (74.13%)
		reddit_video?: {
			bitrate_kbps?: number, // 835913/841372 (99.35%)
			dash_url?: string, // 835923/841372 (99.35%)
			duration?: number, // 835923/841372 (99.35%)
			fallback_url?: string, // 835923/841372 (99.35%)
			height?: number|null, // 836194/841372 (99.38%)
			hls_url?: string, // 835923/841372 (99.35%)
			is_gif?: boolean, // 835923/841372 (99.35%)
			scrubber_media_url?: string, // 835923/841372 (99.35%)
			transcoding_message?: string, // 5449/841372 (0.65%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 836194/841372 (99.38%)
		}, // 841372/3252878 (25.87%)
		type?: string, // 2411506/3252878 (74.13%)
	},
	secure_media_embed: {
		content?: string|null, // 2411506/28384220 (8.50%)
		height?: number, // 2411506/28384220 (8.50%)
		media_domain_url?: string, // 2411506/28384220 (8.50%)
		scrolling?: boolean, // 2411506/28384220 (8.50%)
		width?: number, // 2411506/28384220 (8.50%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 29758/28384220 (0.10%)
	sk_ad_network_data?: null, // 29758/28384220 (0.10%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 29758/28384220 (0.10%)
	third_party_tracking?: null, // 29758/28384220 (0.10%)
	third_party_tracking_2?: null, // 29758/28384220 (0.10%)
	thumbnail: string,
	thumbnail_height?: number|null, // 28375945/28384220 (99.97%)
	thumbnail_width?: number|null, // 28375945/28384220 (99.97%)
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
			resolved_option_id: string,
			status: "RESOLVED",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[], // 17/18 (94.44%)
		status: "CLOSED"|"LIVE",
		subreddit_id: "t5_2qsev"|"t5_2wlj3"|"t5_11v5r4"|"t5_2r0th"|"t5_2umu4"|"t5_2lxv7f"|"t5_2rcxy"|"t5_2qlit"|"t5_2qpoa"|"t5_2we4j"|"t5_2qhj4"|"t5_2r4or"|"t5_31x7o",
		theme_id: "theme_1",
		total_participants: number,
		tournament_id: string,
	}, // 18/28384220 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 17199136/28384220 (60.59%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}