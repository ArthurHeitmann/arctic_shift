interface RedditPost {
	ad_promoted_user_posts?: null|{
		ad_promoted_user_posts?: null, // 1/20 (5.00%)
		ad_supplementary_text_md?: null, // 1/20 (5.00%)
		all_awardings: {
			award_sub_type: "PREMIUM",
			award_type: "global",
			awardings_required_to_grant_benefits: null,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null,
			days_of_premium: null,
			description: "A glowing commendation for all to see",
			end_date: null,
			giver_coin_reward: null,
			icon_format: "APNG",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: "All-Seeing Upvote",
			penny_donate: null,
			penny_price: null,
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
			start_date: null,
			static_icon_height: number,
			static_icon_url: string,
			static_icon_width: number,
			sticky_duration_seconds: null,
			subreddit_coin_reward: number,
			subreddit_id: null,
			tiers_by_required_awardings: null,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "WinterPlanet"|"[deleted]"|"AutoModerator"|"psoj4"|"twenty_yard_driver",
		author_flair_background_color: null|"",
		author_flair_css_class: null,
		author_flair_richtext?: [], // 13/20 (65.00%)
		author_flair_template_id: null,
		author_flair_text: null,
		author_flair_text_color: null|"dark",
		author_flair_type?: "text", // 13/20 (65.00%)
		author_fullname?: "t2_3e0vvbj8"|"t2_6l4z3"|"t2_10y5ylp7"|"t2_lubatj0m", // 13/20 (65.00%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 13/20 (65.00%)
		author_premium?: boolean, // 13/20 (65.00%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null,
		clicked: boolean,
		content_categories: null,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null,
		distinguished: null,
		domain: "theguardian.com"|"reuters.com"|"self.churningcanada"|"blog.rewardscanada.ca"|"self.twenty_yard_driver",
		downs: number,
		edited: boolean,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "yfmath"|"yfsjwb"|"xkv5ko"|"xewicg"|"yg2t6f",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#dadada",
		link_flair_css_class: null|"",
		link_flair_richtext: [],
		link_flair_template_id?: "c379d47a-479e-11eb-adca-0e76e82e47bb", // 3/20 (15.00%)
		link_flair_text: null|"Daily Thread",
		link_flair_text_color: "dark",
		link_flair_type: "text",
		locked: boolean,
		media: null,
		media_embed: {
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_yfmath"|"t3_yfsjwb"|"t3_xkv5ko"|"t3_xewicg"|"t3_yg2t6f",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "link", // 16/20 (80.00%)
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
				},
			}[],
		}, // 16/20 (80.00%)
		promo_layout?: null, // 1/20 (5.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null,
		secure_media_embed: {
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation?: boolean, // 19/20 (95.00%)
			allowed_media_in_comments: [],
			banner_img: "",
			banner_size: null,
			community_icon: string|null,
			created?: number, // 19/20 (95.00%)
			created_utc?: number, // 19/20 (95.00%)
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "worldnews"|"churningcanada"|"u_twenty_yard_driver",
			display_name_prefixed: "r/worldnews"|"r/churningcanada"|"u/twenty_yard_driver",
			free_form_reports: boolean,
			header_img: ""|null,
			header_size: null,
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled?: boolean, // 19/20 (95.00%)
			is_default_banner?: boolean, // 1/20 (5.00%)
			is_default_icon?: boolean, // 1/20 (5.00%)
			key_color: "",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"",
			name: "t5_2qh13"|"t5_30hws"|"t5_67hfbp",
			over_18: boolean,
			previous_names: [],
			primary_color: "#0079d3"|"",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "",
			subreddit_type: "public"|"user",
			subscribers: number,
			title: "World News"|"Churning and Welcome Bonus for Canadians"|"",
			url: "/r/worldnews/"|"/r/churningcanada/"|"/user/twenty_yard_driver/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "worldnews"|"churningcanada"|"u_twenty_yard_driver",
		subreddit_id: "t5_2qh13"|"t5_30hws"|"t5_67hfbp",
		subreddit_name_prefixed: "r/worldnews"|"r/churningcanada"|"u/twenty_yard_driver",
		subreddit_subscribers: number,
		subreddit_type: "public"|"user",
		suggested_sort: null|"new"|"qa",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 16/20 (80.00%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|null,
		wls: number|null,
	}[], // 57720/35685153 (0.16%)
	ad_supplementary_text_md?: null|string, // 58041/35685153 (0.16%)
	adserver_click_url?: null, // 58041/35685153 (0.16%)
	adserver_imp_pixel?: null, // 58041/35685153 (0.16%)
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
	app_store_data?: null, // 58041/35685153 (0.16%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 71194/35685153 (0.20%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 721567/2037526 (35.41%)
		e: "text"|"emoji",
		t?: string, // 1315959/2037526 (64.59%)
		u?: string, // 721567/2037526 (35.41%)
	}[], // 27293383/35685153 (76.48%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 27293383/35685153 (76.48%)
	author_fullname?: string, // 27293383/35685153 (76.48%)
	author_id?: string|null, // 58041/35685153 (0.16%)
	author_patreon_flair?: boolean, // 27293383/35685153 (76.48%)
	author_premium?: boolean, // 27293383/35685153 (76.48%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 232920/35685153 (0.65%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"food"|"memes"|"videos"|"writing"|"funny",
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
			display_name: "TaylorSwift",
			display_name_prefixed: "r/TaylorSwift",
			icon_img: string,
			icon_size: number[],
			key_color: "#222222",
			mod_permissions: [],
			name: "t5_2rlwe",
			over_18: boolean,
			primary_color: "#0f131d",
			sr: "TaylorSwift",
			sr_display_name_prefixed: "r/TaylorSwift",
			subreddit_type: "public",
			subscribers: number,
			title: "Taylor Swift",
			url: "/r/TaylorSwift/",
			user_can_crosspost: null,
			whitelist_status: "all_ads",
		}, // 1/12454 (0.01%)
		subreddit_id: string,
		title: string,
	}[], // 12454/35685153 (0.03%)
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1626809/35685153 (4.56%)
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
		author_cakeday?: boolean, // 3168/1546798 (0.20%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 47155/127481 (36.99%)
			e: "text"|"emoji",
			t?: string, // 80326/127481 (63.01%)
			u?: string, // 47155/127481 (36.99%)
		}[], // 1373057/1546798 (88.77%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1373057/1546798 (88.77%)
		author_fullname?: string, // 1373057/1546798 (88.77%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1373057/1546798 (88.77%)
		author_premium?: boolean, // 1373057/1546798 (88.77%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 14169/1546798 (0.92%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"animals"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"photography"|"memes",
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
		}[], // 1288/1546798 (0.08%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"writing"|"diy_and_crafts"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 257/1546798 (0.02%)
		event_is_live?: boolean, // 257/1546798 (0.02%)
		event_start?: number, // 257/1546798 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 82115/518467 (15.84%)
				id: number,
				media_id: string,
				outbound_url?: string, // 27895/518467 (5.38%)
			}[],
		}|null, // 117849/1546798 (7.62%)
		gilded: number,
		gildings: {
			gid_1?: number, // 146054/1546798 (9.44%)
			gid_2?: number, // 30070/1546798 (1.94%)
			gid_3?: number, // 7263/1546798 (0.47%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 117849/1546798 (7.62%)
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
			a?: string, // 37828/248649 (15.21%)
			e: "text"|"emoji",
			t?: string, // 210821/248649 (84.79%)
			u?: string, // 37828/248649 (15.21%)
		}[],
		link_flair_template_id?: string, // 478517/1546798 (30.94%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "", // 142/147 (96.60%)
			recording_duration_seconds?: number, // 143/147 (97.28%)
			recording_fallback_url?: string, // 142/147 (96.60%)
			recording_hls_url?: "", // 142/147 (96.60%)
			recording_status: number,
			room_id: string,
			room_status: number,
		}, // 147/1546798 (0.01%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 5/519099 (0.00%)
			oembed?: {
				author_name?: string, // 351017/355916 (98.62%)
				author_url?: string, // 340908/355916 (95.78%)
				cache_age?: number, // 6422/355916 (1.80%)
				description?: string, // 14869/355916 (4.18%)
				height?: number|null, // 355915/355916 (100.00%)
				html?: string, // 355915/355916 (100.00%)
				mean_alpha?: number, // 37/355916 (0.01%)
				provider_name?: string, // 355915/355916 (100.00%)
				provider_url?: string, // 355915/355916 (100.00%)
				thumbnail_height?: number, // 347016/355916 (97.50%)
				thumbnail_url?: string, // 347049/355916 (97.51%)
				thumbnail_width?: number, // 347016/355916 (97.50%)
				title?: string, // 349360/355916 (98.16%)
				type?: "video"|"rich", // 355915/355916 (100.00%)
				url?: string, // 9266/355916 (2.60%)
				version?: "1.0", // 355915/355916 (100.00%)
				width?: number, // 355915/355916 (100.00%)
			}, // 355916/519099 (68.56%)
			reddit_video?: {
				bitrate_kbps?: number, // 162639/163178 (99.67%)
				dash_url?: string, // 163165/163178 (99.99%)
				duration?: number, // 163165/163178 (99.99%)
				fallback_url?: string, // 163165/163178 (99.99%)
				height?: number|null, // 163166/163178 (99.99%)
				hls_url?: string, // 163165/163178 (99.99%)
				is_gif?: boolean, // 163165/163178 (99.99%)
				scrubber_media_url?: string, // 163165/163178 (99.99%)
				transcoding_message?: string, // 13/163178 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 163166/163178 (99.99%)
			}, // 163178/519099 (31.43%)
			type?: string, // 355921/519099 (68.57%)
		},
		media_embed: {
			content?: string|null, // 355921/1546798 (23.01%)
			height?: number, // 355921/1546798 (23.01%)
			scrolling?: boolean, // 355921/1546798 (23.01%)
			width?: number, // 355921/1546798 (23.01%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 924/548204 (0.17%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 548075/548204 (99.98%)
				hlsUrl?: string, // 924/548204 (0.17%)
				id?: string, // 548075/548204 (99.98%)
				isGif?: boolean, // 924/548204 (0.17%)
				m?: "image/jpg"|"image/png"|"image/gif", // 547151/548204 (99.81%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 324672/548204 (59.22%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 547151/548204 (99.81%)
				s?: {
					gif?: string, // 10131/547151 (1.85%)
					mp4?: string, // 10131/547151 (1.85%)
					u?: string, // 537020/547151 (98.15%)
					x: number,
					y: number,
				}, // 547151/548204 (99.81%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 924/548204 (0.17%)
				y?: number, // 924/548204 (0.17%)
			},
		}|null, // 131355/1546798 (8.49%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 48/14938 (0.32%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED"|"OPEN",
			resolved_option_id: null|"18946081"|"18972669"|"19146998"|"19147104"|"19137180"|"18908079"|"19317664"|"19265379"|"19294302"|"19404368"|"19407236"|"19484382",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 4064/1546798 (0.26%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1073717/1546798 (69.42%)
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
					}, // 62898/1073717 (5.86%)
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
					}, // 62898/1073717 (5.86%)
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
					}, // 649776/1073717 (60.52%)
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
					}, // 654503/1073717 (60.96%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 344377/344542 (99.95%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 344542/1073717 (32.09%)
		}, // 1073717/1546798 (69.42%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 65/1546798 (0.00%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 5/519099 (0.00%)
			oembed?: {
				author_name?: string, // 351017/355916 (98.62%)
				author_url?: string, // 340908/355916 (95.78%)
				cache_age?: number, // 6422/355916 (1.80%)
				description?: string, // 14869/355916 (4.18%)
				height?: number|null, // 355915/355916 (100.00%)
				html?: string, // 355915/355916 (100.00%)
				mean_alpha?: number, // 37/355916 (0.01%)
				provider_name?: string, // 355915/355916 (100.00%)
				provider_url?: string, // 355915/355916 (100.00%)
				thumbnail_height?: number, // 347016/355916 (97.50%)
				thumbnail_url?: string, // 347049/355916 (97.51%)
				thumbnail_width?: number, // 347016/355916 (97.50%)
				title?: string, // 349360/355916 (98.16%)
				type?: "video"|"rich", // 355915/355916 (100.00%)
				url?: string, // 9266/355916 (2.60%)
				version?: "1.0", // 355915/355916 (100.00%)
				width?: number, // 355915/355916 (100.00%)
			}, // 355916/519099 (68.56%)
			reddit_video?: {
				bitrate_kbps?: number, // 162639/163178 (99.67%)
				dash_url?: string, // 163165/163178 (99.99%)
				duration?: number, // 163165/163178 (99.99%)
				fallback_url?: string, // 163165/163178 (99.99%)
				height?: number|null, // 163166/163178 (99.99%)
				hls_url?: string, // 163165/163178 (99.99%)
				is_gif?: boolean, // 163165/163178 (99.99%)
				scrubber_media_url?: string, // 163165/163178 (99.99%)
				transcoding_message?: string, // 13/163178 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 163166/163178 (99.99%)
			}, // 163178/519099 (31.43%)
			type?: string, // 355921/519099 (68.57%)
		},
		secure_media_embed: {
			content?: string|null, // 355921/1546798 (23.01%)
			height?: number, // 355921/1546798 (23.01%)
			media_domain_url?: string, // 355921/1546798 (23.01%)
			scrolling?: boolean, // 355921/1546798 (23.01%)
			width?: number, // 355921/1546798 (23.01%)
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
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"qa"|"top"|"confidence"|"new"|"old"|"controversial"|"live"|"random",
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
			subreddit_id: "t5_2th52"|"t5_2qjpg"|"t5_2qo9i"|"t5_2rfxx"|"t5_3lrep"|"t5_2qhqk",
			theme_id: "theme_1"|"theme_8"|"theme_5",
			total_participants: number,
			tournament_id: string,
		}, // 31/1546798 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1351739/1546798 (87.39%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|null,
		wls: number|null,
	}[], // 1626809/35685153 (4.56%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 58041/35685153 (0.16%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 58041/35685153 (0.16%)
	embed_url?: null|string, // 58041/35685153 (0.16%)
	event_end?: number, // 1675/35685153 (0.00%)
	event_is_live?: boolean, // 1675/35685153 (0.00%)
	event_start?: number, // 1675/35685153 (0.00%)
	events?: [], // 58041/35685153 (0.16%)
	eventsOnRender?: [], // 58041/35685153 (0.16%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Pre-order Now"|"Order Now"|"Install"|"Download"|"Play Now"|"Watch Now"|"Apply Now"|"Contact Us"|"Get Showtimes"|"Get a Quote", // 8105/5509350 (0.15%)
			caption?: string, // 619166/5509350 (11.24%)
			display_url?: string, // 7041/5509350 (0.13%)
			id: number,
			media_id: string,
			outbound_url?: string, // 128297/5509350 (2.33%)
			product?: {
				description: string,
				price?: "$9.99"|"$59.99"|"$14.99"|"$1049.99"|"$679.99"|"$969.99"|"$1999.99"|"$569.99"|"$89.99"|"$299.95"|"$379.99"|"$249.99"|"$49.95", // 14/98 (14.29%)
				title: string,
			}, // 98/5509350 (0.00%)
		}[],
	}|null, // 2483041/35685153 (6.96%)
	gilded: number,
	gildings: {
		gid_1?: number, // 141319/35685153 (0.40%)
		gid_2?: number, // 27894/35685153 (0.08%)
		gid_3?: number, // 4940/35685153 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 58041/35685153 (0.16%)
	id: string,
	impression_id?: null, // 58041/35685153 (0.16%)
	impression_id_str?: null, // 58041/35685153 (0.16%)
	is_blank?: boolean, // 58041/35685153 (0.16%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2483041/35685153 (6.96%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 58041/35685153 (0.16%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 592892/6689377 (8.86%)
		e: "text"|"emoji",
		t?: string, // 6096485/6689377 (91.14%)
		u?: string, // 592892/6689377 (8.86%)
	}[],
	link_flair_template_id?: string, // 12047462/35685153 (33.76%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: "", // 1896/2102 (90.20%)
		recording_duration_seconds?: number, // 1934/2102 (92.01%)
		recording_fallback_url?: string, // 1896/2102 (90.20%)
		recording_hls_url?: "", // 1896/2102 (90.20%)
		recording_status?: number, // 2027/2102 (96.43%)
		room_id: string,
		room_status: number,
	}, // 2102/35685153 (0.01%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"19ou5cq6ex2vh"|"19u2j22pt0gwb"|"19r6riywmyxqv"|"19s1dlyykhe1i"|"19slrek9t210b"|"19t7pxxqg5izj"|"19tplnoqr8n63"|"19u6nrv0yeu4y"|"19us7tgre7een"|"19vcpnzgavo4n"|"18hffzrlc38aw"|"19vzotz8uc4wp"|"19w323ebnbr8f"|"19wrlvp2r3xvk", // 59/4018099 (0.00%)
		oembed?: {
			author_name?: string, // 2793126/2965640 (94.18%)
			author_url?: string, // 2747517/2965640 (92.64%)
			cache_age?: number, // 180635/2965640 (6.09%)
			description?: string, // 233254/2965640 (7.87%)
			height?: number|null, // 2965455/2965640 (99.99%)
			html?: string, // 2965455/2965640 (99.99%)
			mean_alpha?: number, // 2064/2965640 (0.07%)
			provider_name?: string, // 2965455/2965640 (99.99%)
			provider_url?: string, // 2965455/2965640 (99.99%)
			thumbnail_height?: number, // 2777405/2965640 (93.65%)
			thumbnail_url?: string, // 2778832/2965640 (93.70%)
			thumbnail_width?: number, // 2777405/2965640 (93.65%)
			title?: string, // 2771033/2965640 (93.44%)
			type?: "video"|"rich", // 2965455/2965640 (99.99%)
			url?: string, // 294539/2965640 (9.93%)
			version?: "1.0", // 2965455/2965640 (99.99%)
			width?: number, // 2965455/2965640 (99.99%)
		}, // 2965640/4018099 (73.81%)
		reddit_video?: {
			bitrate_kbps?: number, // 1046715/1052400 (99.46%)
			dash_url?: string, // 1046715/1052400 (99.46%)
			duration?: number, // 1046715/1052400 (99.46%)
			fallback_url?: string, // 1046715/1052400 (99.46%)
			height?: number|null, // 1047018/1052400 (99.49%)
			hls_url?: string, // 1046715/1052400 (99.46%)
			is_gif?: boolean, // 1046715/1052400 (99.46%)
			scrubber_media_url?: string, // 1046715/1052400 (99.46%)
			transcoding_message?: string, // 5685/1052400 (0.54%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1047018/1052400 (99.49%)
		}, // 1052400/4018099 (26.19%)
		type?: string, // 2965699/4018099 (73.81%)
	},
	media_embed: {
		content?: string|null, // 2965699/35685153 (8.31%)
		height?: number, // 2965699/35685153 (8.31%)
		scrolling?: boolean, // 2965699/35685153 (8.31%)
		width?: number, // 2965699/35685153 (8.31%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20405/5955337 (0.34%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 5951936/5955337 (99.94%)
			hlsUrl?: string, // 20405/5955337 (0.34%)
			id?: string, // 5951936/5955337 (99.94%)
			isGif?: boolean, // 20405/5955337 (0.34%)
			m?: "image/jpg"|"image/png"|"image/gif", // 5931531/5955337 (99.60%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2059410/5955337 (34.58%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5931531/5955337 (99.60%)
			s?: {
				gif?: string, // 52012/5931531 (0.88%)
				mp4?: string, // 52012/5931531 (0.88%)
				u?: string, // 5879519/5931531 (99.12%)
				x: number,
				y: number,
			}, // 5931531/5955337 (99.60%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 20405/5955337 (0.34%)
			y?: number, // 20405/5955337 (0.34%)
		},
	}|null, // 2897642/35685153 (8.12%)
	media_only: boolean,
	mobile_ad_url?: string, // 58041/35685153 (0.16%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 58041/35685153 (0.16%)
	outbound_link?: {
	}, // 58041/35685153 (0.16%)
	over_18: boolean,
	parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 6281/409750 (1.53%)
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
	}|null, // 163933/35685153 (0.46%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 11973126/35685153 (33.55%)
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
				}, // 268937/11973126 (2.25%)
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
				}, // 268937/11973126 (2.25%)
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
				}, // 4407393/11973126 (36.81%)
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
				}, // 4476288/11973126 (37.39%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1066065/1066216 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1066216/11973126 (8.91%)
	}, // 11973126/35685153 (33.55%)
	priority_id?: null, // 58041/35685153 (0.16%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 58041/35685153 (0.16%)
	promoted?: boolean, // 58041/35685153 (0.16%)
	promoted_by?: null, // 58041/35685153 (0.16%)
	promoted_display_name?: null, // 58041/35685153 (0.16%)
	promoted_url?: null, // 58041/35685153 (0.16%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 7789/35685153 (0.02%)
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"19ou5cq6ex2vh"|"19u2j22pt0gwb"|"19r6riywmyxqv"|"19s1dlyykhe1i"|"19slrek9t210b"|"19t7pxxqg5izj"|"19tplnoqr8n63"|"19u6nrv0yeu4y"|"19us7tgre7een"|"19vcpnzgavo4n"|"18hffzrlc38aw"|"19vzotz8uc4wp"|"19w323ebnbr8f"|"19wrlvp2r3xvk", // 59/4018099 (0.00%)
		oembed?: {
			author_name?: string, // 2793126/2965640 (94.18%)
			author_url?: string, // 2747517/2965640 (92.64%)
			cache_age?: number, // 180635/2965640 (6.09%)
			description?: string, // 233254/2965640 (7.87%)
			height?: number|null, // 2965455/2965640 (99.99%)
			html?: string, // 2965455/2965640 (99.99%)
			mean_alpha?: number, // 2064/2965640 (0.07%)
			provider_name?: string, // 2965455/2965640 (99.99%)
			provider_url?: string, // 2965455/2965640 (99.99%)
			thumbnail_height?: number, // 2777405/2965640 (93.65%)
			thumbnail_url?: string, // 2778832/2965640 (93.70%)
			thumbnail_width?: number, // 2777405/2965640 (93.65%)
			title?: string, // 2771033/2965640 (93.44%)
			type?: "video"|"rich", // 2965455/2965640 (99.99%)
			url?: string, // 294539/2965640 (9.93%)
			version?: "1.0", // 2965455/2965640 (99.99%)
			width?: number, // 2965455/2965640 (99.99%)
		}, // 2965640/4018099 (73.81%)
		reddit_video?: {
			bitrate_kbps?: number, // 1046715/1052400 (99.46%)
			dash_url?: string, // 1046715/1052400 (99.46%)
			duration?: number, // 1046715/1052400 (99.46%)
			fallback_url?: string, // 1046715/1052400 (99.46%)
			height?: number|null, // 1047018/1052400 (99.49%)
			hls_url?: string, // 1046715/1052400 (99.46%)
			is_gif?: boolean, // 1046715/1052400 (99.46%)
			scrubber_media_url?: string, // 1046715/1052400 (99.46%)
			transcoding_message?: string, // 5685/1052400 (0.54%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1047018/1052400 (99.49%)
		}, // 1052400/4018099 (26.19%)
		type?: string, // 2965699/4018099 (73.81%)
	},
	secure_media_embed: {
		content?: string|null, // 2965699/35685153 (8.31%)
		height?: number, // 2965699/35685153 (8.31%)
		media_domain_url?: string, // 2965699/35685153 (8.31%)
		scrolling?: boolean, // 2965699/35685153 (8.31%)
		width?: number, // 2965699/35685153 (8.31%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 58041/35685153 (0.16%)
	sk_ad_network_data?: null, // 58041/35685153 (0.16%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 457/35685153 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 58041/35685153 (0.16%)
	third_party_tracking?: null, // 58041/35685153 (0.16%)
	third_party_tracking_2?: null, // 58041/35685153 (0.16%)
	thumbnail: string,
	thumbnail_height?: number|null, // 35682389/35685153 (99.99%)
	thumbnail_width?: number|null, // 35682389/35685153 (99.99%)
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
		}[], // 133/142 (93.66%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_4"|"theme_8"|"theme_3"|"theme_6"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 142/35685153 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22972893/35685153 (64.38%)
	view_count: null,
	whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}