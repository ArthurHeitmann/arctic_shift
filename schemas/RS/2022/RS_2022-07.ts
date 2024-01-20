interface RedditPost {
	adserver_click_url?: null, // 39757/37222497 (0.11%)
	adserver_imp_pixel?: null, // 39757/37222497 (0.11%)
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
	app_store_data?: null, // 39757/37222497 (0.11%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 106967/37222497 (0.29%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 711960/2022977 (35.19%)
		e: "text"|"emoji",
		t?: string, // 1311017/2022977 (64.81%)
		u?: string, // 711960/2022977 (35.19%)
	}[], // 27510941/37222497 (73.91%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 27510941/37222497 (73.91%)
	author_fullname?: string, // 27510941/37222497 (73.91%)
	author_id?: string|null, // 39757/37222497 (0.11%)
	author_patreon_flair?: boolean, // 27510941/37222497 (73.91%)
	author_premium?: boolean, // 27510941/37222497 (73.91%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 355190/37222497 (0.95%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"animals"|"drawing_and_painting"|"photography"|"entertainment"|"gaming"|"diy_and_crafts"|"food"|"videos"|"writing"|"memes"|"funny"|"music",
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
			display_name: "Dislyte"|"sysadmin"|"pcgaming"|"pengu"|"apexlegends",
			display_name_prefixed: "r/Dislyte"|"r/sysadmin"|"r/pcgaming"|"r/pengu"|"r/apexlegends",
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#545452"|"#24a0ed",
			mod_permissions: [],
			name: "t5_436za6"|"t5_2qnp7"|"t5_2qhfg"|"t5_2qo2d"|"t5_rgzzt",
			over_18: boolean,
			primary_color: "#8f78ff"|"#7193ff"|"#014980"|"#00cbf7"|"#edeff1",
			sr: "Dislyte"|"sysadmin"|"pcgaming"|"pengu"|"apexlegends",
			sr_display_name_prefixed: "r/Dislyte"|"r/sysadmin"|"r/pcgaming"|"r/pengu"|"r/apexlegends",
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: "Dislyte"|"Sysadmin"|"PC Gaming"|"Pengu"|"Apex Legends",
			url: "/r/Dislyte/"|"/r/sysadmin/"|"/r/pcgaming/"|"/r/pengu/"|"/r/apexlegends/",
			user_can_crosspost: null|boolean,
			whitelist_status: "all_ads"|null,
		}, // 5/13027 (0.04%)
		subreddit_id: string,
		title: string,
	}[], // 13027/37222497 (0.03%)
	content_categories: null|("drawing_and_painting"|"entertainment"|"photography"|"gaming"|"diy_and_crafts"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1717678/37222497 (4.61%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"GROUP"|"MODERATOR"|"CHAT_REACTION",
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
		author_cakeday?: boolean, // 6357/1654262 (0.38%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 59867/160597 (37.28%)
			e: "text"|"emoji",
			t?: string, // 100730/160597 (62.72%)
			u?: string, // 59867/160597 (37.28%)
		}[], // 1459260/1654262 (88.21%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1459260/1654262 (88.21%)
		author_fullname?: string, // 1459260/1654262 (88.21%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1459260/1654262 (88.21%)
		author_premium?: boolean, // 1459260/1654262 (88.21%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 21938/1654262 (1.33%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"photography"|"animals"|"food"|"entertainment"|"gaming"|"memes",
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
		}[], // 1058/1654262 (0.06%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"music"|"entertainment"|"writing"|"diy_and_crafts"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 276/1654262 (0.02%)
		event_is_live?: boolean, // 276/1654262 (0.02%)
		event_start?: number, // 276/1654262 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 84943/566176 (15.00%)
				id: number,
				media_id: string,
				outbound_url?: string, // 30851/566176 (5.45%)
			}[],
		}|null, // 141550/1654262 (8.56%)
		gilded: number,
		gildings: {
			gid_1?: number, // 181451/1654262 (10.97%)
			gid_2?: number, // 33947/1654262 (2.05%)
			gid_3?: number, // 9698/1654262 (0.59%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 141550/1654262 (8.56%)
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
			a?: string, // 35120/259691 (13.52%)
			e: "text"|"emoji",
			t?: string, // 224571/259691 (86.48%)
			u?: string, // 35120/259691 (13.52%)
		}[],
		link_flair_template_id?: string, // 496205/1654262 (30.00%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_duration_seconds: number,
			recording_fallback_url?: string, // 2/35 (5.71%)
			recording_status: number,
			room_id: string,
		}, // 35/1654262 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 7/578965 (0.00%)
			oembed?: {
				author_name?: string, // 412986/420728 (98.16%)
				author_url?: string, // 405082/420728 (96.28%)
				cache_age?: number, // 5904/420728 (1.40%)
				description?: string, // 16159/420728 (3.84%)
				height?: number|null, // 420717/420728 (100.00%)
				html?: string, // 420725/420728 (100.00%)
				mean_alpha?: number, // 23/420728 (0.01%)
				provider_name?: string, // 420725/420728 (100.00%)
				provider_url?: string, // 420725/420728 (100.00%)
				thumbnail_height?: number, // 413015/420728 (98.17%)
				thumbnail_url?: string, // 413061/420728 (98.18%)
				thumbnail_width?: number, // 413015/420728 (98.17%)
				title?: string, // 414774/420728 (98.58%)
				type?: "video"|"rich", // 420725/420728 (100.00%)
				url?: string, // 9931/420728 (2.36%)
				version?: "1.0", // 420725/420728 (100.00%)
				width?: number, // 420725/420728 (100.00%)
			}, // 420728/578965 (72.67%)
			reddit_video?: {
				bitrate_kbps?: number, // 157680/158230 (99.65%)
				dash_url?: string, // 158223/158230 (100.00%)
				duration?: number, // 158223/158230 (100.00%)
				fallback_url?: string, // 158223/158230 (100.00%)
				height?: number, // 158223/158230 (100.00%)
				hls_url?: string, // 158223/158230 (100.00%)
				is_gif?: boolean, // 158223/158230 (100.00%)
				scrubber_media_url?: string, // 158223/158230 (100.00%)
				transcoding_message?: string, // 7/158230 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 158223/158230 (100.00%)
			}, // 158230/578965 (27.33%)
			type?: string, // 420735/578965 (72.67%)
		},
		media_embed: {
			content?: string|null, // 420735/1654262 (25.43%)
			height?: number, // 420735/1654262 (25.43%)
			scrolling?: boolean, // 420735/1654262 (25.43%)
			width?: number, // 420735/1654262 (25.43%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 931/598400 (0.16%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 598313/598400 (99.99%)
				hlsUrl?: string, // 931/598400 (0.16%)
				id?: string, // 598313/598400 (99.99%)
				isGif?: boolean, // 931/598400 (0.16%)
				m?: "image/jpg"|"image/png"|"image/gif", // 597382/598400 (99.83%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 381163/598400 (63.70%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 597382/598400 (99.83%)
				s?: {
					gif?: string, // 10833/597382 (1.81%)
					mp4?: string, // 10833/597382 (1.81%)
					u?: string, // 586549/597382 (98.19%)
					x: number,
					y: number,
				}, // 597382/598400 (99.83%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 931/598400 (0.16%)
				y?: number, // 931/598400 (0.16%)
			},
		}|null, // 156542/1654262 (9.46%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 45/13263 (0.34%)
				vote_count?: number, // 13210/13263 (99.60%)
			}[],
			prediction_status: null|"RESOLVED"|"OPEN",
			resolved_option_id: null|"16958837"|"16992924"|"17070215"|"16679493"|"17146027"|"11260441"|"17190483"|"17219079"|"15895479"|"17248498"|"12105949",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 4081/1654262 (0.25%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1120008/1654262 (67.70%)
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
					}, // 55217/1120008 (4.93%)
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
					}, // 55217/1120008 (4.93%)
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
					}, // 682572/1120008 (60.94%)
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
					}, // 687459/1120008 (61.38%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 338886/339033 (99.96%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 339033/1120008 (30.27%)
		}, // 1120008/1654262 (67.70%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"author"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 111/1654262 (0.01%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 7/578965 (0.00%)
			oembed?: {
				author_name?: string, // 412986/420728 (98.16%)
				author_url?: string, // 405082/420728 (96.28%)
				cache_age?: number, // 5904/420728 (1.40%)
				description?: string, // 16159/420728 (3.84%)
				height?: number|null, // 420717/420728 (100.00%)
				html?: string, // 420725/420728 (100.00%)
				mean_alpha?: number, // 23/420728 (0.01%)
				provider_name?: string, // 420725/420728 (100.00%)
				provider_url?: string, // 420725/420728 (100.00%)
				thumbnail_height?: number, // 413015/420728 (98.17%)
				thumbnail_url?: string, // 413061/420728 (98.18%)
				thumbnail_width?: number, // 413015/420728 (98.17%)
				title?: string, // 414774/420728 (98.58%)
				type?: "video"|"rich", // 420725/420728 (100.00%)
				url?: string, // 9931/420728 (2.36%)
				version?: "1.0", // 420725/420728 (100.00%)
				width?: number, // 420725/420728 (100.00%)
			}, // 420728/578965 (72.67%)
			reddit_video?: {
				bitrate_kbps?: number, // 157680/158230 (99.65%)
				dash_url?: string, // 158223/158230 (100.00%)
				duration?: number, // 158223/158230 (100.00%)
				fallback_url?: string, // 158223/158230 (100.00%)
				height?: number, // 158223/158230 (100.00%)
				hls_url?: string, // 158223/158230 (100.00%)
				is_gif?: boolean, // 158223/158230 (100.00%)
				scrubber_media_url?: string, // 158223/158230 (100.00%)
				transcoding_message?: string, // 7/158230 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 158223/158230 (100.00%)
			}, // 158230/578965 (27.33%)
			type?: string, // 420735/578965 (72.67%)
		},
		secure_media_embed: {
			content?: string|null, // 420735/1654262 (25.43%)
			height?: number, // 420735/1654262 (25.43%)
			media_domain_url?: string, // 420735/1654262 (25.43%)
			scrolling?: boolean, // 420735/1654262 (25.43%)
			width?: number, // 420735/1654262 (25.43%)
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
			subreddit_id: "t5_31m0v"|"t5_2st2l"|"t5_2qimj"|"t5_2th52"|"t5_muhts"|"t5_2wlj3",
			theme_id: "theme_1"|"theme_5"|"theme_4",
			total_participants: number,
			tournament_id: string,
		}, // 59/1654262 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1468373/1654262 (88.76%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1717678/37222497 (4.61%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 39757/37222497 (0.11%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 39757/37222497 (0.11%)
	embed_url?: null|string, // 39757/37222497 (0.11%)
	event_end?: number, // 1663/37222497 (0.00%)
	event_is_live?: boolean, // 1663/37222497 (0.00%)
	event_start?: number, // 1663/37222497 (0.00%)
	events?: [], // 39757/37222497 (0.11%)
	eventsOnRender?: [], // 39757/37222497 (0.11%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Download"|"Watch Now"|"Play Now"|"Install"|"Order Now"|"Contact Us"|"Apply Now"|"Get a Quote"|"See Menu"|"Get Showtimes"|"Pre-order Now", // 4152/6030517 (0.07%)
			caption?: string, // 639855/6030517 (10.61%)
			display_url?: string, // 3907/6030517 (0.06%)
			id: number,
			media_id: string,
			outbound_url?: string, // 121208/6030517 (2.01%)
		}[],
	}|null, // 2823383/37222497 (7.59%)
	gilded: number,
	gildings: {
		gid_1?: number, // 226535/37222497 (0.61%)
		gid_2?: number, // 30608/37222497 (0.08%)
		gid_3?: number, // 6006/37222497 (0.02%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 39757/37222497 (0.11%)
	id: string,
	impression_id?: null, // 39757/37222497 (0.11%)
	impression_id_str?: null, // 39757/37222497 (0.11%)
	is_blank?: boolean, // 39757/37222497 (0.11%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2823383/37222497 (7.59%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 39757/37222497 (0.11%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 625774/6740716 (9.28%)
		e: "text"|"emoji",
		t?: string, // 6114942/6740716 (90.72%)
		u?: string, // 625774/6740716 (9.28%)
	}[],
	link_flair_template_id?: string, // 12077087/37222497 (32.45%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds: number,
		recording_fallback_url?: string, // 41/717 (5.72%)
		recording_status: number,
		room_id: string,
	}, // 717/37222497 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"199ir65iyaacw"|"19c5r23qq7x69"|"19ejmwp8nniaq", // 41/4417156 (0.00%)
		oembed?: {
			author_name?: string, // 3057096/3283724 (93.10%)
			author_url?: string, // 3011541/3283724 (91.71%)
			cache_age?: number, // 126141/3283724 (3.84%)
			description?: string, // 293863/3283724 (8.95%)
			height?: number|null, // 3283630/3283724 (100.00%)
			html?: string, // 3283656/3283724 (100.00%)
			marginheight?: number, // 17/3283724 (0.00%)
			marginwidth?: number, // 17/3283724 (0.00%)
			mean_alpha?: number, // 2632/3283724 (0.08%)
			provider_name?: string, // 3283656/3283724 (100.00%)
			provider_url?: string, // 3283656/3283724 (100.00%)
			thumbnail_height?: number, // 3151543/3283724 (95.97%)
			thumbnail_url?: string, // 3153172/3283724 (96.02%)
			thumbnail_width?: number, // 3151543/3283724 (95.97%)
			title?: string, // 3156246/3283724 (96.12%)
			type?: "video"|"rich", // 3283656/3283724 (100.00%)
			url?: string, // 271044/3283724 (8.25%)
			version?: "1.0", // 3283639/3283724 (100.00%)
			width?: number, // 3283656/3283724 (100.00%)
		}, // 3283724/4417156 (74.34%)
		reddit_video?: {
			bitrate_kbps?: number, // 1123287/1133391 (99.11%)
			dash_url?: string, // 1123287/1133391 (99.11%)
			duration?: number, // 1123287/1133391 (99.11%)
			fallback_url?: string, // 1123287/1133391 (99.11%)
			height?: number|null, // 1123864/1133391 (99.16%)
			hls_url?: string, // 1123287/1133391 (99.11%)
			is_gif?: boolean, // 1123287/1133391 (99.11%)
			scrubber_media_url?: string, // 1123287/1133391 (99.11%)
			transcoding_message?: string, // 10104/1133391 (0.89%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1123864/1133391 (99.16%)
		}, // 1133391/4417156 (25.66%)
		type?: string, // 3283765/4417156 (74.34%)
	},
	media_embed: {
		content?: string|null, // 3283765/37222497 (8.82%)
		height?: number, // 3283765/37222497 (8.82%)
		scrolling?: boolean, // 3283765/37222497 (8.82%)
		width?: number, // 3283765/37222497 (8.82%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 21110/6473500 (0.33%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 6470322/6473500 (99.95%)
			hlsUrl?: string, // 21110/6473500 (0.33%)
			id?: string, // 6470322/6473500 (99.95%)
			isGif?: boolean, // 21110/6473500 (0.33%)
			m?: "image/jpg"|"image/png"|"image/gif", // 6449212/6473500 (99.62%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2642870/6473500 (40.83%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6449212/6473500 (99.62%)
			s?: {
				gif?: string, // 54145/6449212 (0.84%)
				mp4?: string, // 54145/6449212 (0.84%)
				u?: string, // 6395067/6449212 (99.16%)
				x: number,
				y: number,
			}, // 6449212/6473500 (99.62%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 21110/6473500 (0.33%)
			y?: number, // 21110/6473500 (0.33%)
		},
	}|null, // 3237428/37222497 (8.70%)
	media_only: boolean,
	mobile_ad_url?: string, // 39757/37222497 (0.11%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 39757/37222497 (0.11%)
	outbound_link?: {
	}, // 39757/37222497 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 3949/433182 (0.91%)
			vote_count?: number, // 432208/433182 (99.78%)
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
	}|null, // 165119/37222497 (0.44%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 12360895/37222497 (33.21%)
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
				}, // 295377/12360895 (2.39%)
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
				}, // 295377/12360895 (2.39%)
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
				}, // 5333607/12360895 (43.15%)
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
				}, // 5396598/12360895 (43.66%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1312795/1312917 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1312917/12360895 (10.62%)
	}, // 12360895/37222497 (33.21%)
	priority_id?: null, // 39757/37222497 (0.11%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 39757/37222497 (0.11%)
	promoted?: boolean, // 39757/37222497 (0.11%)
	promoted_by?: null, // 39757/37222497 (0.11%)
	promoted_display_name?: null, // 39757/37222497 (0.11%)
	promoted_url?: null, // 39757/37222497 (0.11%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 24790/37222497 (0.07%)
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"199ir65iyaacw"|"19c5r23qq7x69"|"19ejmwp8nniaq", // 41/4417156 (0.00%)
		oembed?: {
			author_name?: string, // 3057096/3283724 (93.10%)
			author_url?: string, // 3011541/3283724 (91.71%)
			cache_age?: number, // 126141/3283724 (3.84%)
			description?: string, // 293863/3283724 (8.95%)
			height?: number|null, // 3283630/3283724 (100.00%)
			html?: string, // 3283656/3283724 (100.00%)
			marginheight?: number, // 17/3283724 (0.00%)
			marginwidth?: number, // 17/3283724 (0.00%)
			mean_alpha?: number, // 2632/3283724 (0.08%)
			provider_name?: string, // 3283656/3283724 (100.00%)
			provider_url?: string, // 3283656/3283724 (100.00%)
			thumbnail_height?: number, // 3151543/3283724 (95.97%)
			thumbnail_url?: string, // 3153172/3283724 (96.02%)
			thumbnail_width?: number, // 3151543/3283724 (95.97%)
			title?: string, // 3156246/3283724 (96.12%)
			type?: "video"|"rich", // 3283656/3283724 (100.00%)
			url?: string, // 271044/3283724 (8.25%)
			version?: "1.0", // 3283639/3283724 (100.00%)
			width?: number, // 3283656/3283724 (100.00%)
		}, // 3283724/4417156 (74.34%)
		reddit_video?: {
			bitrate_kbps?: number, // 1123287/1133391 (99.11%)
			dash_url?: string, // 1123287/1133391 (99.11%)
			duration?: number, // 1123287/1133391 (99.11%)
			fallback_url?: string, // 1123287/1133391 (99.11%)
			height?: number|null, // 1123864/1133391 (99.16%)
			hls_url?: string, // 1123287/1133391 (99.11%)
			is_gif?: boolean, // 1123287/1133391 (99.11%)
			scrubber_media_url?: string, // 1123287/1133391 (99.11%)
			transcoding_message?: string, // 10104/1133391 (0.89%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1123864/1133391 (99.16%)
		}, // 1133391/4417156 (25.66%)
		type?: string, // 3283765/4417156 (74.34%)
	},
	secure_media_embed: {
		content?: string|null, // 3283765/37222497 (8.82%)
		height?: number, // 3283765/37222497 (8.82%)
		media_domain_url?: string, // 3283765/37222497 (8.82%)
		scrolling?: boolean, // 3283765/37222497 (8.82%)
		width?: number, // 3283765/37222497 (8.82%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 39757/37222497 (0.11%)
	sk_ad_network_data?: null, // 39757/37222497 (0.11%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: null, // 39475/37222497 (0.11%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 39757/37222497 (0.11%)
	third_party_tracking?: null, // 39757/37222497 (0.11%)
	third_party_tracking_2?: null, // 39757/37222497 (0.11%)
	thumbnail: string,
	thumbnail_height?: number|null, // 37219076/37222497 (99.99%)
	thumbnail_width?: number|null, // 37219076/37222497 (99.99%)
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
		}[], // 138/199 (69.35%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_6"|"theme_4"|"theme_7"|"theme_3"|"theme_8",
		total_participants: number,
		tournament_id: string,
	}, // 199/37222497 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 24831599/37222497 (66.71%)
	view_count: null,
	whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}