interface RedditPost {
	ad_supplementary_text_md?: null|string, // 47025/38178282 (0.12%)
	adserver_click_url?: null, // 47214/38178282 (0.12%)
	adserver_imp_pixel?: null, // 47214/38178282 (0.12%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR"|"CHAT_REACTION",
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
		tiers_by_required_awardings: null,
	}[],
	allow_live_comments: boolean,
	app_store_data?: null, // 47214/38178282 (0.12%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 112988/38178282 (0.30%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 718955/2062960 (34.85%)
		e: "text"|"emoji",
		t?: string, // 1344005/2062960 (65.15%)
		u?: string, // 718955/2062960 (34.85%)
	}[], // 28746920/38178282 (75.30%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 28746920/38178282 (75.30%)
	author_fullname?: string, // 28746920/38178282 (75.30%)
	author_id?: string|null, // 47214/38178282 (0.12%)
	author_patreon_flair?: boolean, // 28746920/38178282 (75.30%)
	author_premium?: boolean, // 28746920/38178282 (75.30%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 369197/38178282 (0.97%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"animals"|"drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"food"|"memes"|"videos"|"music"|"writing",
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
			display_name: "vancouver"|"goodmythicalmorning"|"Overwatch",
			display_name_prefixed: "r/vancouver"|"r/goodmythicalmorning"|"r/Overwatch",
			icon_img: string,
			icon_size: number[]|null,
			key_color: ""|"#ff4500"|"#24a0ed",
			mod_permissions: [],
			name: "t5_2qhov"|"t5_2w24y"|"t5_2u5kl",
			over_18: boolean,
			primary_color: ""|"#ff4500"|"#0098d9",
			sr: "vancouver"|"goodmythicalmorning"|"Overwatch",
			sr_display_name_prefixed: "r/vancouver"|"r/goodmythicalmorning"|"r/Overwatch",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/vancouver/"|"/r/goodmythicalmorning/"|"/r/Overwatch/",
			user_can_crosspost: null|boolean,
			whitelist_status: "all_ads",
		}, // 3/12598 (0.02%)
		subreddit_id: string,
		title: string,
	}[], // 12598/38178282 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1777133/38178282 (4.65%)
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
		author_cakeday?: boolean, // 5652/1697828 (0.33%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 46442/130015 (35.72%)
			e: "text"|"emoji",
			t?: string, // 83573/130015 (64.28%)
			u?: string, // 46442/130015 (35.72%)
		}[], // 1498620/1697828 (88.27%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1498620/1697828 (88.27%)
		author_fullname?: string, // 1498620/1697828 (88.27%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1498620/1697828 (88.27%)
		author_premium?: boolean, // 1498620/1697828 (88.27%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 21595/1697828 (1.27%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"animals"|"gaming"|"videos"|"food"|"diy_and_crafts"|"entertainment"|"photography",
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
		}[], // 1008/1697828 (0.06%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"writing"|"diy_and_crafts"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string|null,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 244/1697828 (0.01%)
		event_is_live?: boolean, // 244/1697828 (0.01%)
		event_start?: number, // 244/1697828 (0.01%)
		gallery_data?: {
			items: {
				caption?: string, // 83595/601343 (13.90%)
				id: number,
				media_id: string,
				outbound_url?: string, // 40383/601343 (6.72%)
			}[],
		}|null, // 146668/1697828 (8.64%)
		gilded: number,
		gildings: {
			gid_1?: number, // 191698/1697828 (11.29%)
			gid_2?: number, // 33396/1697828 (1.97%)
			gid_3?: number, // 8956/1697828 (0.53%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 146668/1697828 (8.64%)
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
			a?: string, // 34032/249676 (13.63%)
			e: "text"|"emoji",
			t?: string, // 215644/249676 (86.37%)
			u?: string, // 34032/249676 (13.63%)
		}[],
		link_flair_template_id?: string, // 484009/1697828 (28.51%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_duration_seconds?: number, // 112/117 (95.73%)
			recording_fallback_url?: string, // 19/117 (16.24%)
			recording_status?: number, // 112/117 (95.73%)
			room_id: string,
			room_status?: number, // 9/117 (7.69%)
		}, // 117/1697828 (0.01%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 12/544419 (0.00%)
			oembed?: {
				author_name?: string, // 374410/379816 (98.58%)
				author_url?: string, // 366197/379816 (96.41%)
				cache_age?: number, // 5336/379816 (1.40%)
				description?: string, // 13539/379816 (3.56%)
				height?: number|null, // 379814/379816 (100.00%)
				html?: string, // 379814/379816 (100.00%)
				mean_alpha?: number, // 43/379816 (0.01%)
				provider_name?: string, // 379814/379816 (100.00%)
				provider_url?: string, // 379814/379816 (100.00%)
				thumbnail_height?: number, // 372427/379816 (98.05%)
				thumbnail_url?: string, // 372571/379816 (98.09%)
				thumbnail_width?: number, // 372427/379816 (98.05%)
				title?: string, // 374407/379816 (98.58%)
				type?: "video"|"rich", // 379814/379816 (100.00%)
				url?: string, // 8468/379816 (2.23%)
				version?: "1.0", // 379814/379816 (100.00%)
				width?: number, // 379814/379816 (100.00%)
			}, // 379816/544419 (69.77%)
			reddit_video?: {
				bitrate_kbps?: number, // 163972/164591 (99.62%)
				dash_url?: string, // 164579/164591 (99.99%)
				duration?: number, // 164579/164591 (99.99%)
				fallback_url?: string, // 164579/164591 (99.99%)
				height?: number|null, // 164582/164591 (99.99%)
				hls_url?: string, // 164579/164591 (99.99%)
				is_gif?: boolean, // 164579/164591 (99.99%)
				scrubber_media_url?: string, // 164579/164591 (99.99%)
				transcoding_message?: string, // 12/164591 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 164582/164591 (99.99%)
			}, // 164591/544419 (30.23%)
			type?: string, // 379828/544419 (69.77%)
		},
		media_embed: {
			content?: string|null, // 379828/1697828 (22.37%)
			height?: number, // 379828/1697828 (22.37%)
			scrolling?: boolean, // 379828/1697828 (22.37%)
			width?: number, // 379828/1697828 (22.37%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1111/633912 (0.18%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 633761/633912 (99.98%)
				hlsUrl?: string, // 1111/633912 (0.18%)
				id?: string, // 633761/633912 (99.98%)
				isGif?: boolean, // 1111/633912 (0.18%)
				m?: "image/jpg"|"image/png"|"image/gif", // 632650/633912 (99.80%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 390054/633912 (61.53%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 632650/633912 (99.80%)
				s?: {
					gif?: string, // 10853/632650 (1.72%)
					mp4?: string, // 10853/632650 (1.72%)
					u?: string, // 621797/632650 (98.28%)
					x: number,
					y: number,
				}, // 632650/633912 (99.80%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1111/633912 (0.18%)
				y?: number, // 1111/633912 (0.18%)
			},
		}|null, // 161514/1697828 (9.51%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 50/16753 (0.30%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED"|"OPEN",
			resolved_option_id: null|"17944420"|"17504248"|"17564116"|"16228888"|"17356506"|"17707885"|"17617171"|"17790994"|"17828029"|"17945060"|"17905062"|"17600055"|"18054819"|"17996758"|"18052618",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 4391/1697828 (0.26%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery", // 1133964/1697828 (66.79%)
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
					}, // 55835/1133964 (4.92%)
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
					}, // 55835/1133964 (4.92%)
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
					}, // 688514/1133964 (60.72%)
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
					}, // 693199/1133964 (61.13%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 335607/335760 (99.95%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 335760/1133964 (29.61%)
		}, // 1133964/1697828 (66.79%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 117/1697828 (0.01%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 12/544419 (0.00%)
			oembed?: {
				author_name?: string, // 374410/379816 (98.58%)
				author_url?: string, // 366197/379816 (96.41%)
				cache_age?: number, // 5336/379816 (1.40%)
				description?: string, // 13539/379816 (3.56%)
				height?: number|null, // 379814/379816 (100.00%)
				html?: string, // 379814/379816 (100.00%)
				mean_alpha?: number, // 43/379816 (0.01%)
				provider_name?: string, // 379814/379816 (100.00%)
				provider_url?: string, // 379814/379816 (100.00%)
				thumbnail_height?: number, // 372427/379816 (98.05%)
				thumbnail_url?: string, // 372571/379816 (98.09%)
				thumbnail_width?: number, // 372427/379816 (98.05%)
				title?: string, // 374407/379816 (98.58%)
				type?: "video"|"rich", // 379814/379816 (100.00%)
				url?: string, // 8468/379816 (2.23%)
				version?: "1.0", // 379814/379816 (100.00%)
				width?: number, // 379814/379816 (100.00%)
			}, // 379816/544419 (69.77%)
			reddit_video?: {
				bitrate_kbps?: number, // 163972/164591 (99.62%)
				dash_url?: string, // 164579/164591 (99.99%)
				duration?: number, // 164579/164591 (99.99%)
				fallback_url?: string, // 164579/164591 (99.99%)
				height?: number|null, // 164582/164591 (99.99%)
				hls_url?: string, // 164579/164591 (99.99%)
				is_gif?: boolean, // 164579/164591 (99.99%)
				scrubber_media_url?: string, // 164579/164591 (99.99%)
				transcoding_message?: string, // 12/164591 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 164582/164591 (99.99%)
			}, // 164591/544419 (30.23%)
			type?: string, // 379828/544419 (69.77%)
		},
		secure_media_embed: {
			content?: string|null, // 379828/1697828 (22.37%)
			height?: number, // 379828/1697828 (22.37%)
			media_domain_url?: string, // 379828/1697828 (22.37%)
			scrolling?: boolean, // 379828/1697828 (22.37%)
			width?: number, // 379828/1697828 (22.37%)
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
			status: "CLOSED"|"LIVE",
			subreddit_id: "t5_2th52"|"t5_2r1ky"|"t5_40w64h"|"t5_2qhqt"|"t5_rqy8o"|"t5_2qhqk"|"t5_2qhe0"|"t5_2r6z7"|"t5_5wptpp",
			theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_4",
			total_participants: number,
			tournament_id: string,
		}, // 13/1697828 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string|null,
		url_overridden_by_dest?: string|null, // 1497000/1697828 (88.17%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1777133/38178282 (4.65%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string|null,
	domain_override?: string|null, // 47214/38178282 (0.12%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 47214/38178282 (0.12%)
	embed_url?: null|string, // 47214/38178282 (0.12%)
	event_end?: number, // 1405/38178282 (0.00%)
	event_is_live?: boolean, // 1405/38178282 (0.00%)
	event_start?: number, // 1405/38178282 (0.00%)
	events?: [], // 47214/38178282 (0.12%)
	eventsOnRender?: [], // 47214/38178282 (0.12%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"View More"|"Sign Up"|"Download"|"Install"|"Order Now"|"Watch Now"|"Apply Now"|"Play Now"|"Contact Us"|"Get a Quote"|"Pre-order Now"|"See Menu", // 5651/6144897 (0.09%)
			caption?: string, // 671704/6144897 (10.93%)
			display_url?: string, // 6426/6144897 (0.10%)
			id: number,
			media_id: string,
			outbound_url?: string, // 130897/6144897 (2.13%)
			product?: {
				description: "test description",
				price: "$25.00",
				title: "Kevin test product #2"|"Kevin test product #6"|"Kevin test product #4",
			}, // 3/6144897 (0.00%)
		}[],
	}|null, // 2865317/38178282 (7.51%)
	gilded: number,
	gildings: {
		gid_1?: number, // 251493/38178282 (0.66%)
		gid_2?: number, // 30160/38178282 (0.08%)
		gid_3?: number, // 5764/38178282 (0.02%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 47214/38178282 (0.12%)
	id: string,
	impression_id?: null, // 47214/38178282 (0.12%)
	impression_id_str?: null, // 47214/38178282 (0.12%)
	is_blank?: boolean, // 47214/38178282 (0.12%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2865317/38178282 (7.51%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 47214/38178282 (0.12%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 658817/6959616 (9.47%)
		e: "text"|"emoji",
		t?: string, // 6300799/6959616 (90.53%)
		u?: string, // 658817/6959616 (9.47%)
	}[],
	link_flair_template_id?: string, // 12574946/38178282 (32.94%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds?: number, // 2244/2395 (93.70%)
		recording_fallback_url?: string, // 58/2395 (2.42%)
		recording_status?: number, // 2244/2395 (93.70%)
		room_id: string,
		room_status?: number, // 300/2395 (12.53%)
	}, // 2395/38178282 (0.01%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"19iv482pqjlip"|"19fdbsz07k4xu"|"19g437jfhudza"|"19go1yynfc3tg"|"19grf54x8a1en"|"19hbcy7etvf0s"|"19i5u93p8lg7t"|"19iidryn3rgmb"|"19jj6mv5544of"|"19k4oy1tgzzeh"|"19k929hrd3d4p", // 55/4404746 (0.00%)
		oembed?: {
			author_name?: string, // 3024221/3222606 (93.84%)
			author_url?: string, // 2981285/3222606 (92.51%)
			cache_age?: number, // 129035/3222606 (4.00%)
			description?: string, // 258809/3222606 (8.03%)
			height?: number|null, // 3222539/3222606 (100.00%)
			html?: string, // 3222539/3222606 (100.00%)
			marginheight?: number, // 7/3222606 (0.00%)
			marginwidth?: number, // 7/3222606 (0.00%)
			mean_alpha?: number, // 2603/3222606 (0.08%)
			provider_name?: string, // 3222539/3222606 (100.00%)
			provider_url?: string, // 3222539/3222606 (100.00%)
			thumbnail_height?: number, // 3085652/3222606 (95.75%)
			thumbnail_url?: string, // 3088721/3222606 (95.85%)
			thumbnail_width?: number, // 3085652/3222606 (95.75%)
			title?: string, // 3093237/3222606 (95.99%)
			type?: "video"|"rich", // 3222539/3222606 (100.00%)
			url?: string, // 254513/3222606 (7.90%)
			version?: "1.0", // 3222532/3222606 (100.00%)
			width?: number, // 3222539/3222606 (100.00%)
		}, // 3222606/4404746 (73.16%)
		reddit_video?: {
			bitrate_kbps?: number, // 1175824/1182085 (99.47%)
			dash_url?: string, // 1175824/1182085 (99.47%)
			duration?: number, // 1175824/1182085 (99.47%)
			fallback_url?: string, // 1175824/1182085 (99.47%)
			height?: number|null, // 1176143/1182085 (99.50%)
			hls_url?: string, // 1175824/1182085 (99.47%)
			is_gif?: boolean, // 1175824/1182085 (99.47%)
			scrubber_media_url?: string, // 1175824/1182085 (99.47%)
			transcoding_message?: string, // 6261/1182085 (0.53%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1176143/1182085 (99.50%)
		}, // 1182085/4404746 (26.84%)
		type?: string, // 3222661/4404746 (73.16%)
	},
	media_embed: {
		content?: string|null, // 3222661/38178282 (8.44%)
		height?: number, // 3222661/38178282 (8.44%)
		scrolling?: boolean, // 3222661/38178282 (8.44%)
		width?: number, // 3222661/38178282 (8.44%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 23495/6605063 (0.36%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 6601735/6605063 (99.95%)
			hlsUrl?: string, // 23495/6605063 (0.36%)
			id?: string, // 6601735/6605063 (99.95%)
			isGif?: boolean, // 23495/6605063 (0.36%)
			m?: "image/jpg"|"image/png"|"image/gif", // 6578240/6605063 (99.59%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2543467/6605063 (38.51%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6578240/6605063 (99.59%)
			s?: {
				gif?: string, // 54058/6578240 (0.82%)
				mp4?: string, // 54058/6578240 (0.82%)
				u?: string, // 6524182/6578240 (99.18%)
				x: number,
				y: number,
			}, // 6578240/6605063 (99.59%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 23495/6605063 (0.36%)
			y?: number, // 23495/6605063 (0.36%)
		},
	}|null, // 3296153/38178282 (8.63%)
	media_only: boolean,
	mobile_ad_url?: string, // 47214/38178282 (0.12%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 47214/38178282 (0.12%)
	outbound_link?: {
	}, // 47214/38178282 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 3760/437581 (0.86%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED"|"OPEN"|"CLOSED"|"CANCELLED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 168233/38178282 (0.44%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 13121791/38178282 (34.37%)
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
				}, // 295898/13121791 (2.26%)
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
				}, // 295898/13121791 (2.26%)
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
				}, // 5774521/13121791 (44.01%)
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
				}, // 5837987/13121791 (44.49%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1331921/1332068 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1332068/13121791 (10.15%)
	}, // 13121791/38178282 (34.37%)
	priority_id?: null, // 47214/38178282 (0.12%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 47214/38178282 (0.12%)
	promoted?: boolean, // 47214/38178282 (0.12%)
	promoted_by?: null, // 47214/38178282 (0.12%)
	promoted_display_name?: null, // 47214/38178282 (0.12%)
	promoted_url?: null, // 47214/38178282 (0.12%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 13465/38178282 (0.04%)
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"19iv482pqjlip"|"19fdbsz07k4xu"|"19g437jfhudza"|"19go1yynfc3tg"|"19grf54x8a1en"|"19hbcy7etvf0s"|"19i5u93p8lg7t"|"19iidryn3rgmb"|"19jj6mv5544of"|"19k4oy1tgzzeh"|"19k929hrd3d4p", // 55/4404746 (0.00%)
		oembed?: {
			author_name?: string, // 3024221/3222606 (93.84%)
			author_url?: string, // 2981285/3222606 (92.51%)
			cache_age?: number, // 129035/3222606 (4.00%)
			description?: string, // 258809/3222606 (8.03%)
			height?: number|null, // 3222539/3222606 (100.00%)
			html?: string, // 3222539/3222606 (100.00%)
			marginheight?: number, // 7/3222606 (0.00%)
			marginwidth?: number, // 7/3222606 (0.00%)
			mean_alpha?: number, // 2603/3222606 (0.08%)
			provider_name?: string, // 3222539/3222606 (100.00%)
			provider_url?: string, // 3222539/3222606 (100.00%)
			thumbnail_height?: number, // 3085652/3222606 (95.75%)
			thumbnail_url?: string, // 3088721/3222606 (95.85%)
			thumbnail_width?: number, // 3085652/3222606 (95.75%)
			title?: string, // 3093237/3222606 (95.99%)
			type?: "video"|"rich", // 3222539/3222606 (100.00%)
			url?: string, // 254513/3222606 (7.90%)
			version?: "1.0", // 3222532/3222606 (100.00%)
			width?: number, // 3222539/3222606 (100.00%)
		}, // 3222606/4404746 (73.16%)
		reddit_video?: {
			bitrate_kbps?: number, // 1175824/1182085 (99.47%)
			dash_url?: string, // 1175824/1182085 (99.47%)
			duration?: number, // 1175824/1182085 (99.47%)
			fallback_url?: string, // 1175824/1182085 (99.47%)
			height?: number|null, // 1176143/1182085 (99.50%)
			hls_url?: string, // 1175824/1182085 (99.47%)
			is_gif?: boolean, // 1175824/1182085 (99.47%)
			scrubber_media_url?: string, // 1175824/1182085 (99.47%)
			transcoding_message?: string, // 6261/1182085 (0.53%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1176143/1182085 (99.50%)
		}, // 1182085/4404746 (26.84%)
		type?: string, // 3222661/4404746 (73.16%)
	},
	secure_media_embed: {
		content?: string|null, // 3222661/38178282 (8.44%)
		height?: number, // 3222661/38178282 (8.44%)
		media_domain_url?: string, // 3222661/38178282 (8.44%)
		scrolling?: boolean, // 3222661/38178282 (8.44%)
		width?: number, // 3222661/38178282 (8.44%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 47214/38178282 (0.12%)
	sk_ad_network_data?: null, // 47214/38178282 (0.12%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: null, // 47214/38178282 (0.12%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 47214/38178282 (0.12%)
	third_party_tracking?: null, // 47214/38178282 (0.12%)
	third_party_tracking_2?: null, // 47214/38178282 (0.12%)
	thumbnail: string,
	thumbnail_height?: number|null, // 38174666/38178282 (99.99%)
	thumbnail_width?: number|null, // 38174666/38178282 (99.99%)
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
		}[], // 91/101 (90.10%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_8"|"theme_2"|"theme_4"|"theme_6"|"theme_7"|"theme_3",
		total_participants: number,
		tournament_id: string,
	}, // 101/38178282 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string|null,
	url_overridden_by_dest?: string|null, // 28657061/38178282 (75.06%)
	view_count: null,
	whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}