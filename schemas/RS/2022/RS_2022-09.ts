interface RedditPost {
	ad_supplementary_text_md?: null|string, // 77035/35115349 (0.22%)
	adserver_click_url?: null, // 77035/35115349 (0.22%)
	adserver_imp_pixel?: null, // 77035/35115349 (0.22%)
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
	app_store_data?: null, // 77035/35115349 (0.22%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 103027/35115349 (0.29%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 698823/1950859 (35.82%)
		e: "text"|"emoji",
		t?: string, // 1252036/1950859 (64.18%)
		u?: string, // 698823/1950859 (35.82%)
	}[], // 26792544/35115349 (76.30%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 26792544/35115349 (76.30%)
	author_fullname?: string, // 26792544/35115349 (76.30%)
	author_id?: string|null, // 77035/35115349 (0.22%)
	author_patreon_flair?: boolean, // 26792544/35115349 (76.30%)
	author_premium?: boolean, // 26792544/35115349 (76.30%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 373285/35115349 (1.06%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"photography"|"entertainment"|"gaming"|"diy_and_crafts"|"videos"|"food"|"music"|"memes"|"writing",
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
			display_name: "CKsTechNews"|"vancouver"|"rickandmorty"|"freefolk"|"HealthAnxiety",
			display_name_prefixed: "r/CKsTechNews"|"r/vancouver"|"r/rickandmorty"|"r/freefolk"|"r/HealthAnxiety",
			icon_img: string,
			icon_size: number[]|null,
			key_color: ""|"#222222"|"#25b79f"|"#7e53c1",
			mod_permissions: [],
			name: "t5_41mynz"|"t5_2qhov"|"t5_2u4lp"|"t5_37tpy"|"t5_2vmoc",
			over_18: boolean,
			primary_color: ""|"#349e48"|"#94e044",
			sr: "CKsTechNews"|"vancouver"|"rickandmorty"|"freefolk"|"HealthAnxiety",
			sr_display_name_prefixed: "r/CKsTechNews"|"r/vancouver"|"r/rickandmorty"|"r/freefolk"|"r/HealthAnxiety",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/CKsTechNews/"|"/r/vancouver/"|"/r/rickandmorty/"|"/r/freefolk/"|"/r/HealthAnxiety/",
			user_can_crosspost: boolean|null,
			whitelist_status: "all_ads"|"no_ads"|null,
		}, // 9/10754 (0.08%)
		subreddit_id: string,
		title: string,
	}[], // 10754/35115349 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1573623/35115349 (4.48%)
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
		author_cakeday?: boolean, // 3765/1431835 (0.26%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 42287/120678 (35.04%)
			e: "text"|"emoji",
			t?: string, // 78391/120678 (64.96%)
			u?: string, // 42287/120678 (35.04%)
		}[], // 1262796/1431835 (88.19%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1262796/1431835 (88.19%)
		author_fullname?: string, // 1262796/1431835 (88.19%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1262796/1431835 (88.19%)
		author_premium?: boolean, // 1262796/1431835 (88.19%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 20472/1431835 (1.43%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"photography"|"animals"|"gaming"|"diy_and_crafts",
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
		}[], // 1207/1431835 (0.08%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string|null,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 320/1431835 (0.02%)
		event_is_live?: boolean, // 320/1431835 (0.02%)
		event_start?: number, // 320/1431835 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 73792/462583 (15.95%)
				id: number,
				media_id: string,
				outbound_url?: string, // 20388/462583 (4.41%)
			}[],
		}|null, // 107960/1431835 (7.54%)
		gilded: number,
		gildings: {
			gid_1?: number, // 169323/1431835 (11.83%)
			gid_2?: number, // 31421/1431835 (2.19%)
			gid_3?: number, // 7260/1431835 (0.51%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 107960/1431835 (7.54%)
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
			a?: string, // 34534/239744 (14.40%)
			e: "text"|"emoji",
			t?: string, // 205210/239744 (85.60%)
			u?: string, // 34534/239744 (14.40%)
		}[],
		link_flair_template_id?: string, // 460735/1431835 (32.18%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "", // 14/132 (10.61%)
			recording_duration_seconds?: number, // 128/132 (96.97%)
			recording_fallback_url?: string, // 16/132 (12.12%)
			recording_hls_url?: "", // 14/132 (10.61%)
			recording_status: number,
			room_id: string,
			room_status?: number, // 129/132 (97.73%)
		}, // 132/1431835 (0.01%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 16/450070 (0.00%)
			oembed?: {
				author_name?: string, // 285015/290157 (98.23%)
				author_url?: string, // 277076/290157 (95.49%)
				cache_age?: number, // 4945/290157 (1.70%)
				description?: string, // 13028/290157 (4.49%)
				height?: number|null, // 290153/290157 (100.00%)
				html?: string, // 290153/290157 (100.00%)
				mean_alpha?: number, // 173/290157 (0.06%)
				provider_name?: string, // 290153/290157 (100.00%)
				provider_url?: string, // 290153/290157 (100.00%)
				thumbnail_height?: number, // 283488/290157 (97.70%)
				thumbnail_url?: string, // 283504/290157 (97.71%)
				thumbnail_width?: number, // 283488/290157 (97.70%)
				title?: string, // 285172/290157 (98.28%)
				type?: "video"|"rich", // 290153/290157 (100.00%)
				url?: string, // 7558/290157 (2.60%)
				version?: "1.0", // 290153/290157 (100.00%)
				width?: number, // 290153/290157 (100.00%)
			}, // 290157/450070 (64.47%)
			reddit_video?: {
				bitrate_kbps?: number, // 159189/159897 (99.56%)
				dash_url?: string, // 159856/159897 (99.97%)
				duration?: number, // 159856/159897 (99.97%)
				fallback_url?: string, // 159856/159897 (99.97%)
				height?: number|null, // 159859/159897 (99.98%)
				hls_url?: string, // 159856/159897 (99.97%)
				is_gif?: boolean, // 159856/159897 (99.97%)
				scrubber_media_url?: string, // 159856/159897 (99.97%)
				transcoding_message?: string, // 41/159897 (0.03%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 159859/159897 (99.98%)
			}, // 159897/450070 (35.53%)
			type?: string, // 290173/450070 (64.47%)
		},
		media_embed: {
			content?: string|null, // 290173/1431835 (20.27%)
			height?: number, // 290173/1431835 (20.27%)
			scrolling?: boolean, // 290173/1431835 (20.27%)
			width?: number, // 290173/1431835 (20.27%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1039/491421 (0.21%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 491323/491421 (99.98%)
				hlsUrl?: string, // 1039/491421 (0.21%)
				id?: string, // 491323/491421 (99.98%)
				isGif?: boolean, // 1039/491421 (0.21%)
				m?: "image/jpg"|"image/png"|"image/gif", // 490284/491421 (99.77%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 279951/491421 (56.97%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 490284/491421 (99.77%)
				s?: {
					gif?: string, // 7853/490284 (1.60%)
					mp4?: string, // 7853/490284 (1.60%)
					u?: string, // 482431/490284 (98.40%)
					x: number,
					y: number,
				}, // 490284/491421 (99.77%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1039/491421 (0.21%)
				y?: number, // 1039/491421 (0.21%)
			},
		}|null, // 122583/1431835 (8.56%)
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
				total_stake_amount?: number, // 50/16432 (0.30%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED"|"CLOSED",
			resolved_option_id: null|"18117578"|"18268267"|"18401113"|"18401119"|"18514019"|"16774491"|"18672533"|"18781612"|"18802760"|"18792304"|"18825099",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 4286/1431835 (0.30%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 971943/1431835 (67.88%)
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
					}, // 52203/971943 (5.37%)
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
					}, // 52203/971943 (5.37%)
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
					}, // 553029/971943 (56.90%)
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
					}, // 557465/971943 (57.36%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 275336/275467 (99.95%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 275467/971943 (28.34%)
		}, // 971943/1431835 (67.88%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 99/1431835 (0.01%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 16/450070 (0.00%)
			oembed?: {
				author_name?: string, // 285015/290157 (98.23%)
				author_url?: string, // 277076/290157 (95.49%)
				cache_age?: number, // 4945/290157 (1.70%)
				description?: string, // 13028/290157 (4.49%)
				height?: number|null, // 290153/290157 (100.00%)
				html?: string, // 290153/290157 (100.00%)
				mean_alpha?: number, // 173/290157 (0.06%)
				provider_name?: string, // 290153/290157 (100.00%)
				provider_url?: string, // 290153/290157 (100.00%)
				thumbnail_height?: number, // 283488/290157 (97.70%)
				thumbnail_url?: string, // 283504/290157 (97.71%)
				thumbnail_width?: number, // 283488/290157 (97.70%)
				title?: string, // 285172/290157 (98.28%)
				type?: "video"|"rich", // 290153/290157 (100.00%)
				url?: string, // 7558/290157 (2.60%)
				version?: "1.0", // 290153/290157 (100.00%)
				width?: number, // 290153/290157 (100.00%)
			}, // 290157/450070 (64.47%)
			reddit_video?: {
				bitrate_kbps?: number, // 159189/159897 (99.56%)
				dash_url?: string, // 159856/159897 (99.97%)
				duration?: number, // 159856/159897 (99.97%)
				fallback_url?: string, // 159856/159897 (99.97%)
				height?: number|null, // 159859/159897 (99.98%)
				hls_url?: string, // 159856/159897 (99.97%)
				is_gif?: boolean, // 159856/159897 (99.97%)
				scrubber_media_url?: string, // 159856/159897 (99.97%)
				transcoding_message?: string, // 41/159897 (0.03%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 159859/159897 (99.98%)
			}, // 159897/450070 (35.53%)
			type?: string, // 290173/450070 (64.47%)
		},
		secure_media_embed: {
			content?: string|null, // 290173/1431835 (20.27%)
			height?: number, // 290173/1431835 (20.27%)
			media_domain_url?: string, // 290173/1431835 (20.27%)
			scrolling?: boolean, // 290173/1431835 (20.27%)
			width?: number, // 290173/1431835 (20.27%)
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
			subreddit_id: "t5_2th52"|"t5_2qh1f"|"t5_40w64h"|"t5_3e7dq"|"t5_3mnyi"|"t5_t9z3q",
			theme_id: "theme_1"|"theme_8"|"theme_5"|"theme_7",
			total_participants: number,
			tournament_id: string,
		}, // 16/1431835 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string|null,
		url_overridden_by_dest?: string|null, // 1231230/1431835 (85.99%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1573623/35115349 (4.48%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string|null,
	domain_override?: string|null, // 77035/35115349 (0.22%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 77035/35115349 (0.22%)
	embed_url?: null|string, // 77035/35115349 (0.22%)
	event_end?: number, // 1668/35115349 (0.00%)
	event_is_live?: boolean, // 1668/35115349 (0.00%)
	event_start?: number, // 1668/35115349 (0.00%)
	events?: [], // 77035/35115349 (0.22%)
	eventsOnRender?: [], // 77035/35115349 (0.22%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Download"|"Order Now"|"Install"|"Play Now"|"Get Showtimes"|"Contact Us"|"Watch Now"|"Apply Now"|"Pre-order Now"|"See Menu"|"Get a Quote", // 8322/5098540 (0.16%)
			caption?: string, // 593006/5098540 (11.63%)
			display_url?: string, // 9591/5098540 (0.19%)
			id: number,
			media_id: string,
			outbound_url?: string, // 136992/5098540 (2.69%)
			product?: {
				description: string,
				price: "$5.00"|"$25.00",
				title: string,
			}, // 25/5098540 (0.00%)
		}[],
	}|null, // 2323054/35115349 (6.62%)
	gilded: number,
	gildings: {
		gid_1?: number, // 192361/35115349 (0.55%)
		gid_2?: number, // 28249/35115349 (0.08%)
		gid_3?: number, // 4729/35115349 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 77035/35115349 (0.22%)
	id: string,
	impression_id?: null, // 77035/35115349 (0.22%)
	impression_id_str?: null, // 77035/35115349 (0.22%)
	is_blank?: boolean, // 77035/35115349 (0.22%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2323054/35115349 (6.62%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 77035/35115349 (0.22%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 601197/6486441 (9.27%)
		e: "text"|"emoji",
		t?: string, // 5885244/6486441 (90.73%)
		u?: string, // 601197/6486441 (9.27%)
	}[],
	link_flair_template_id?: string, // 11706200/35115349 (33.34%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: "", // 198/2380 (8.32%)
		recording_duration_seconds?: number, // 2229/2380 (93.66%)
		recording_fallback_url?: string, // 248/2380 (10.42%)
		recording_hls_url?: "", // 198/2380 (8.32%)
		recording_status?: number, // 2340/2380 (98.32%)
		room_id: string,
		room_status?: number, // 2379/2380 (99.96%)
	}, // 2380/35115349 (0.01%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"19ou5cq6ex2vh"|"19lhdl44ju0c6"|"19m9d9uxt0tx5"|"19n0y2cngky1p"|"19np6ggm8ci1l"|"19nv3v7fh21dx"|"19oew7veepj5x"|"19pgvucwujte0"|"19qlfwzm5o8qc", // 60/3948218 (0.00%)
		oembed?: {
			author_name?: string, // 2704190/2883013 (93.80%)
			author_url?: string, // 2657993/2883013 (92.19%)
			cache_age?: number, // 168513/2883013 (5.85%)
			description?: string, // 240430/2883013 (8.34%)
			height?: number|null, // 2882965/2883013 (100.00%)
			html?: string, // 2882965/2883013 (100.00%)
			mean_alpha?: number, // 2458/2883013 (0.09%)
			provider_name?: string, // 2882965/2883013 (100.00%)
			provider_url?: string, // 2882965/2883013 (100.00%)
			thumbnail_height?: number, // 2709197/2883013 (93.97%)
			thumbnail_url?: string, // 2709856/2883013 (93.99%)
			thumbnail_width?: number, // 2709197/2883013 (93.97%)
			title?: string, // 2714729/2883013 (94.16%)
			type?: "video"|"rich", // 2882965/2883013 (100.00%)
			url?: string, // 270376/2883013 (9.38%)
			version?: "1.0", // 2882965/2883013 (100.00%)
			width?: number, // 2882965/2883013 (100.00%)
		}, // 2883013/3948218 (73.02%)
		reddit_video?: {
			bitrate_kbps?: number, // 1054990/1065145 (99.05%)
			dash_url?: string, // 1054990/1065145 (99.05%)
			duration?: number, // 1054990/1065145 (99.05%)
			fallback_url?: string, // 1054990/1065145 (99.05%)
			height?: number|null, // 1055522/1065145 (99.10%)
			hls_url?: string, // 1054990/1065145 (99.05%)
			is_gif?: boolean, // 1054990/1065145 (99.05%)
			scrubber_media_url?: string, // 1054990/1065145 (99.05%)
			transcoding_message?: string, // 10155/1065145 (0.95%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1055522/1065145 (99.10%)
		}, // 1065145/3948218 (26.98%)
		type?: string, // 2883073/3948218 (73.02%)
	},
	media_embed: {
		content?: string|null, // 2883073/35115349 (8.21%)
		height?: number, // 2883073/35115349 (8.21%)
		scrolling?: boolean, // 2883073/35115349 (8.21%)
		width?: number, // 2883073/35115349 (8.21%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 29477/5538598 (0.53%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 5535507/5538598 (99.94%)
			hlsUrl?: string, // 29477/5538598 (0.53%)
			id?: string, // 5535507/5538598 (99.94%)
			isGif?: boolean, // 29477/5538598 (0.53%)
			m?: "image/jpg"|"image/png"|"image/gif", // 5506030/5538598 (99.41%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1914054/5538598 (34.56%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5506030/5538598 (99.41%)
			s?: {
				gif?: string, // 46336/5506030 (0.84%)
				mp4?: string, // 46336/5506030 (0.84%)
				u?: string, // 5459694/5506030 (99.16%)
				x: number,
				y: number,
			}, // 5506030/5538598 (99.41%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 29477/5538598 (0.53%)
			y?: number, // 29477/5538598 (0.53%)
		},
	}|null, // 2734091/35115349 (7.79%)
	media_only: boolean,
	mobile_ad_url?: string, // 77035/35115349 (0.22%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 77035/35115349 (0.22%)
	outbound_link?: {
	}, // 77035/35115349 (0.22%)
	over_18: boolean,
	parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 5129/399703 (1.28%)
			vote_count?: number, // 399696/399703 (100.00%)
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
	}|null, // 157583/35115349 (0.45%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 11586253/35115349 (32.99%)
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
				}, // 254606/11586253 (2.20%)
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
				}, // 254606/11586253 (2.20%)
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
				}, // 4426283/11586253 (38.20%)
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
				}, // 4491870/11586253 (38.77%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1012948/1013067 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1013067/11586253 (8.74%)
	}, // 11586253/35115349 (32.99%)
	priority_id?: null, // 77035/35115349 (0.22%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 77035/35115349 (0.22%)
	promoted?: boolean, // 77035/35115349 (0.22%)
	promoted_by?: null, // 77035/35115349 (0.22%)
	promoted_display_name?: null, // 77035/35115349 (0.22%)
	promoted_url?: null, // 77035/35115349 (0.22%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"reddit"|"moderator"|"automod_filtered"|"author"|"copyright_takedown"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 8976/35115349 (0.03%)
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"19ou5cq6ex2vh"|"19lhdl44ju0c6"|"19m9d9uxt0tx5"|"19n0y2cngky1p"|"19np6ggm8ci1l"|"19nv3v7fh21dx"|"19oew7veepj5x"|"19pgvucwujte0"|"19qlfwzm5o8qc", // 60/3948218 (0.00%)
		oembed?: {
			author_name?: string, // 2704190/2883013 (93.80%)
			author_url?: string, // 2657993/2883013 (92.19%)
			cache_age?: number, // 168513/2883013 (5.85%)
			description?: string, // 240430/2883013 (8.34%)
			height?: number|null, // 2882965/2883013 (100.00%)
			html?: string, // 2882965/2883013 (100.00%)
			mean_alpha?: number, // 2458/2883013 (0.09%)
			provider_name?: string, // 2882965/2883013 (100.00%)
			provider_url?: string, // 2882965/2883013 (100.00%)
			thumbnail_height?: number, // 2709197/2883013 (93.97%)
			thumbnail_url?: string, // 2709856/2883013 (93.99%)
			thumbnail_width?: number, // 2709197/2883013 (93.97%)
			title?: string, // 2714729/2883013 (94.16%)
			type?: "video"|"rich", // 2882965/2883013 (100.00%)
			url?: string, // 270376/2883013 (9.38%)
			version?: "1.0", // 2882965/2883013 (100.00%)
			width?: number, // 2882965/2883013 (100.00%)
		}, // 2883013/3948218 (73.02%)
		reddit_video?: {
			bitrate_kbps?: number, // 1054990/1065145 (99.05%)
			dash_url?: string, // 1054990/1065145 (99.05%)
			duration?: number, // 1054990/1065145 (99.05%)
			fallback_url?: string, // 1054990/1065145 (99.05%)
			height?: number|null, // 1055522/1065145 (99.10%)
			hls_url?: string, // 1054990/1065145 (99.05%)
			is_gif?: boolean, // 1054990/1065145 (99.05%)
			scrubber_media_url?: string, // 1054990/1065145 (99.05%)
			transcoding_message?: string, // 10155/1065145 (0.95%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1055522/1065145 (99.10%)
		}, // 1065145/3948218 (26.98%)
		type?: string, // 2883073/3948218 (73.02%)
	},
	secure_media_embed: {
		content?: string|null, // 2883073/35115349 (8.21%)
		height?: number, // 2883073/35115349 (8.21%)
		media_domain_url?: string, // 2883073/35115349 (8.21%)
		scrolling?: boolean, // 2883073/35115349 (8.21%)
		width?: number, // 2883073/35115349 (8.21%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 77035/35115349 (0.22%)
	sk_ad_network_data?: null, // 77035/35115349 (0.22%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: null|"$5.00"|"$25.00"|"$309.99", // 1309/35115349 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 77035/35115349 (0.22%)
	third_party_tracking?: null, // 77035/35115349 (0.22%)
	third_party_tracking_2?: null, // 77035/35115349 (0.22%)
	thumbnail: string,
	thumbnail_height?: number|null, // 35112438/35115349 (99.99%)
	thumbnail_width?: number|null, // 35112438/35115349 (99.99%)
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
				image_url: null|"https://google.com",
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
		}[], // 125/130 (96.15%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_6"|"theme_8"|"theme_4"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 130/35115349 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string|null,
	url_overridden_by_dest?: string|null, // 22985259/35115349 (65.46%)
	view_count: null,
	whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}