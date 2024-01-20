interface RedditPost {
	adserver_click_url?: null, // 19959/32704571 (0.06%)
	adserver_imp_pixel?: null, // 19959/32704571 (0.06%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
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
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 59967/32704571 (0.18%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 793233/2114859 (37.51%)
		e: "text"|"emoji",
		t?: string, // 1321626/2114859 (62.49%)
		u?: string, // 793233/2114859 (37.51%)
	}[], // 23772253/32704571 (72.69%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 23772253/32704571 (72.69%)
	author_fullname?: string, // 23772253/32704571 (72.69%)
	author_id?: string|null, // 19959/32704571 (0.06%)
	author_patreon_flair?: boolean, // 23772253/32704571 (72.69%)
	author_premium?: boolean, // 23772253/32704571 (72.69%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Install"|"View More"|"Play Now"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"See Menu"|"Get Showtimes"|"", // 18241/32704571 (0.06%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|""|"diy_and_crafts"|"videos"|"food"|"funny"|"writing"|"music"|"memes",
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
		subreddit_id: string,
		title: string,
	}[], // 6986/32704571 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"entertainment"|"gaming"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1850623/32704571 (5.66%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"GROUP"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
			award_type: "global"|"community"|"moderator",
			awardings_required_to_grant_benefits: null|number,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number,
			days_of_premium: number,
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
		author_cakeday?: boolean, // 2341/1253598 (0.19%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 43583/114717 (37.99%)
			e: "text"|"emoji",
			t?: string, // 71134/114717 (62.01%)
			u?: string, // 43583/114717 (37.99%)
		}[], // 1057957/1253598 (84.39%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1057957/1253598 (84.39%)
		author_fullname?: string, // 1057957/1253598 (84.39%)
		author_patreon_flair?: boolean, // 1057957/1253598 (84.39%)
		author_premium?: boolean, // 1057957/1253598 (84.39%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"animals"|"entertainment"|"photography"|"diy_and_crafts"|"funny"|""|"art"|"writing"|"videos"|"food",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string,
			display_layout: null|"TIMELINE"|"GALLERY",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 1162/1253598 (0.09%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 252/1253598 (0.02%)
		event_is_live?: boolean, // 252/1253598 (0.02%)
		event_start?: number, // 252/1253598 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 21715/187057 (11.61%)
				id: number,
				media_id: string,
				outbound_url?: string, // 8399/187057 (4.49%)
			}[],
		}|null, // 56089/1253598 (4.47%)
		gilded: number,
		gildings: {
			gid_1?: number, // 345508/1253598 (27.56%)
			gid_2?: number, // 62984/1253598 (5.02%)
			gid_3?: number, // 20603/1253598 (1.64%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 56089/1253598 (4.47%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 16890/183252 (9.22%)
			e: "text"|"emoji",
			t?: string, // 166362/183252 (90.78%)
			u?: string, // 16890/183252 (9.22%)
		}[],
		link_flair_template_id?: string, // 345983/1253598 (27.60%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "169kuo8an9msf", // 1/393102 (0.00%)
			oembed?: {
				author_name?: string, // 53987/272297 (19.83%)
				author_url?: string, // 42659/272297 (15.67%)
				cache_age?: number, // 5870/272297 (2.16%)
				description?: string, // 19889/272297 (7.30%)
				height?: number|null, // 272296/272297 (100.00%)
				html?: string, // 272296/272297 (100.00%)
				mean_alpha?: number, // 71/272297 (0.03%)
				provider_name?: string, // 272296/272297 (100.00%)
				provider_url?: string, // 272296/272297 (100.00%)
				thumbnail_height?: number, // 55958/272297 (20.55%)
				thumbnail_url?: string, // 56029/272297 (20.58%)
				thumbnail_width?: number, // 55958/272297 (20.55%)
				title?: string, // 253822/272297 (93.22%)
				type?: "video"|"rich", // 272296/272297 (100.00%)
				url?: string, // 11478/272297 (4.22%)
				version?: "1.0", // 272296/272297 (100.00%)
				width?: number, // 272296/272297 (100.00%)
			}, // 272297/393102 (69.27%)
			reddit_video?: {
				bitrate_kbps?: number, // 115628/120804 (95.72%)
				dash_url?: string, // 120799/120804 (100.00%)
				duration?: number, // 120799/120804 (100.00%)
				fallback_url?: string, // 120799/120804 (100.00%)
				height?: number, // 120799/120804 (100.00%)
				hls_url?: string, // 120799/120804 (100.00%)
				is_gif?: boolean, // 120799/120804 (100.00%)
				scrubber_media_url?: string, // 120799/120804 (100.00%)
				transcoding_message?: string, // 5/120804 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 120799/120804 (100.00%)
			}, // 120804/393102 (30.73%)
			type?: string, // 272298/393102 (69.27%)
		},
		media_embed: {
			content?: string|null, // 272298/1253598 (21.72%)
			height?: number, // 272298/1253598 (21.72%)
			scrolling?: boolean, // 272298/1253598 (21.72%)
			width?: number, // 272298/1253598 (21.72%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 701/205883 (0.34%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 205644/205883 (99.88%)
				hlsUrl?: string, // 701/205883 (0.34%)
				id?: string, // 205644/205883 (99.88%)
				isGif?: boolean, // 701/205883 (0.34%)
				m?: "image/jpg"|"image/png"|"image/gif", // 204943/205883 (99.54%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 97042/205883 (47.13%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 204943/205883 (99.54%)
				s?: {
					gif?: string, // 1634/204943 (0.80%)
					mp4?: string, // 1634/204943 (0.80%)
					u?: string, // 203309/204943 (99.20%)
					x: number,
					y: number,
				}, // 204943/205883 (99.54%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 701/205883 (0.34%)
				y?: number, // 701/205883 (0.34%)
			},
		}|null, // 63592/1253598 (5.07%)
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
		parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 20/8621 (0.23%)
				vote_count: number,
			}[],
			resolved_option_id: null|"5115499"|"5115574"|"5158151"|"5197848"|"5157721"|"5243863",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2634/1253598 (0.21%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 863404/1253598 (68.87%)
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
					}, // 21333/863404 (2.47%)
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
					}, // 21333/863404 (2.47%)
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
					}, // 423209/863404 (49.02%)
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
					}, // 426638/863404 (49.41%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 185978/186956 (99.48%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 186956/863404 (21.65%)
		}, // 863404/1253598 (68.87%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 490/1253598 (0.04%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "169kuo8an9msf", // 1/393102 (0.00%)
			oembed?: {
				author_name?: string, // 53987/272297 (19.83%)
				author_url?: string, // 42659/272297 (15.67%)
				cache_age?: number, // 5870/272297 (2.16%)
				description?: string, // 19889/272297 (7.30%)
				height?: number|null, // 272296/272297 (100.00%)
				html?: string, // 272296/272297 (100.00%)
				mean_alpha?: number, // 71/272297 (0.03%)
				provider_name?: string, // 272296/272297 (100.00%)
				provider_url?: string, // 272296/272297 (100.00%)
				thumbnail_height?: number, // 55958/272297 (20.55%)
				thumbnail_url?: string, // 56029/272297 (20.58%)
				thumbnail_width?: number, // 55958/272297 (20.55%)
				title?: string, // 253822/272297 (93.22%)
				type?: "video"|"rich", // 272296/272297 (100.00%)
				url?: string, // 11478/272297 (4.22%)
				version?: "1.0", // 272296/272297 (100.00%)
				width?: number, // 272296/272297 (100.00%)
			}, // 272297/393102 (69.27%)
			reddit_video?: {
				bitrate_kbps?: number, // 115628/120804 (95.72%)
				dash_url?: string, // 120799/120804 (100.00%)
				duration?: number, // 120799/120804 (100.00%)
				fallback_url?: string, // 120799/120804 (100.00%)
				height?: number, // 120799/120804 (100.00%)
				hls_url?: string, // 120799/120804 (100.00%)
				is_gif?: boolean, // 120799/120804 (100.00%)
				scrubber_media_url?: string, // 120799/120804 (100.00%)
				transcoding_message?: string, // 5/120804 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 120799/120804 (100.00%)
			}, // 120804/393102 (30.73%)
			type?: string, // 272298/393102 (69.27%)
		},
		secure_media_embed: {
			content?: string|null, // 272298/1253598 (21.72%)
			height?: number, // 272298/1253598 (21.72%)
			media_domain_url?: string, // 272298/1253598 (21.72%)
			scrolling?: boolean, // 272298/1253598 (21.72%)
			width?: number, // 272298/1253598 (21.72%)
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
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"live"|"controversial"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:cutie"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat"|"econ:render:lottie:champagne"|"econ:render:lottie:santasnoo")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1165002/1253598 (92.93%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1850623/32704571 (5.66%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 19959/32704571 (0.06%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 19959/32704571 (0.06%)
	embed_url?: null|string, // 19959/32704571 (0.06%)
	event_end?: number, // 1351/32704571 (0.00%)
	event_is_live?: boolean, // 1351/32704571 (0.00%)
	event_start?: number, // 1351/32704571 (0.00%)
	events?: [], // 19959/32704571 (0.06%)
	eventsOnRender?: [], // 19959/32704571 (0.06%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Watch Now"|"Play Now"|"Download"|"View More", // 313/2743398 (0.01%)
			caption?: string, // 306640/2743398 (11.18%)
			display_url?: "timhortons.ca"|"tntdrama.com/Snowpiercer"|"www.amcplus.com"|"samsung.com"|"BestBuy.com"|"www.amcplus.com/drama"|"rockstargames.com/newswire"|"http://microsoft.com/teams"|"microsoft.com/teams"|"https://lvl.co"|"navy.com"|"google.com"|"reddit.com", // 290/2743398 (0.01%)
			id: number,
			media_id: string,
			outbound_url?: string, // 70177/2743398 (2.56%)
		}[],
	}|null, // 1540336/32704571 (4.71%)
	gilded: number,
	gildings: {
		gid_1?: number, // 642913/32704571 (1.97%)
		gid_2?: number, // 55371/32704571 (0.17%)
		gid_3?: number, // 12957/32704571 (0.04%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 19959/32704571 (0.06%)
	id: string,
	impression_id?: null, // 19959/32704571 (0.06%)
	impression_id_str?: null, // 19959/32704571 (0.06%)
	is_blank?: boolean, // 19959/32704571 (0.06%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1540336/32704571 (4.71%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 413851/6375441 (6.49%)
		e: "text"|"emoji",
		t?: string, // 5961590/6375441 (93.51%)
		u?: string, // 413851/6375441 (6.49%)
	}[],
	link_flair_template_id?: string, // 9833082/32704571 (30.07%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 400/4046431 (0.01%)
		oembed?: {
			author_name?: string, // 1664646/3129586 (53.19%)
			author_url?: string, // 1568495/3129586 (50.12%)
			cache_age?: number, // 201646/3129586 (6.44%)
			description?: string, // 405755/3129586 (12.97%)
			height?: number|null, // 3129543/3129586 (100.00%)
			html?: string, // 3129543/3129586 (100.00%)
			mean_alpha?: number, // 4969/3129586 (0.16%)
			provider_name?: string, // 3129543/3129586 (100.00%)
			provider_url?: string, // 3129543/3129586 (100.00%)
			thumbnail_height?: number, // 1735790/3129586 (55.46%)
			thumbnail_url?: string, // 1737256/3129586 (55.51%)
			thumbnail_width?: number, // 1735790/3129586 (55.46%)
			title?: string, // 2865138/3129586 (91.55%)
			type?: "video"|"rich", // 3129543/3129586 (100.00%)
			url?: string, // 370817/3129586 (11.85%)
			version?: "1.0", // 3129543/3129586 (100.00%)
			width?: number, // 3129543/3129586 (100.00%)
		}, // 3129586/4046431 (77.34%)
		reddit_video?: {
			bitrate_kbps?: number, // 908295/916445 (99.11%)
			dash_url?: string, // 908307/916445 (99.11%)
			duration?: number, // 908307/916445 (99.11%)
			fallback_url?: string, // 908307/916445 (99.11%)
			height?: number, // 908307/916445 (99.11%)
			hls_url?: string, // 908307/916445 (99.11%)
			is_gif?: boolean, // 908307/916445 (99.11%)
			scrubber_media_url?: string, // 908307/916445 (99.11%)
			transcoding_message?: string, // 8138/916445 (0.89%)
			transcoding_status: "completed"|"error",
			width?: number, // 908307/916445 (99.11%)
		}, // 916445/4046431 (22.65%)
		type?: string, // 3129986/4046431 (77.35%)
	},
	media_embed: {
		content?: string|null, // 3129986/32704571 (9.57%)
		height?: number, // 3129986/32704571 (9.57%)
		scrolling?: boolean, // 3129986/32704571 (9.57%)
		width?: number, // 3129986/32704571 (9.57%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 15056/3084506 (0.49%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 3079673/3084506 (99.84%)
			hlsUrl?: string, // 15056/3084506 (0.49%)
			id?: string, // 3079673/3084506 (99.84%)
			isGif?: boolean, // 15056/3084506 (0.49%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3064617/3084506 (99.36%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 824835/3084506 (26.74%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3064617/3084506 (99.36%)
			s?: {
				gif?: string, // 13682/3064617 (0.45%)
				mp4?: string, // 13682/3064617 (0.45%)
				u?: string, // 3050935/3064617 (99.55%)
				x: number,
				y: number,
			}, // 3064617/3084506 (99.36%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 15056/3084506 (0.49%)
			y?: number, // 15056/3084506 (0.49%)
		},
	}|null, // 1900830/32704571 (5.81%)
	media_only: boolean,
	mobile_ad_url?: string, // 19959/32704571 (0.06%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 19959/32704571 (0.06%)
	outbound_link?: {
	}, // 19959/32704571 (0.06%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 205/420796 (0.05%)
			vote_count: number,
		}[],
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 177512/32704571 (0.54%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 11474920/32704571 (35.09%)
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
				}, // 95967/11474920 (0.84%)
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
				}, // 95967/11474920 (0.84%)
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
				}, // 3267481/11474920 (28.47%)
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
				}, // 3323576/11474920 (28.96%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 580797/581986 (99.80%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 581986/11474920 (5.07%)
	}, // 11474920/32704571 (35.09%)
	priority_id?: null, // 19959/32704571 (0.06%)
	promoted?: boolean, // 19959/32704571 (0.06%)
	promoted_by?: null, // 19959/32704571 (0.06%)
	promoted_display_name?: null, // 19959/32704571 (0.06%)
	promoted_url?: null, // 19959/32704571 (0.06%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 51619/32704571 (0.16%)
	score: number,
	secure_media: null|{
		event_id?: string, // 400/4046431 (0.01%)
		oembed?: {
			author_name?: string, // 1664646/3129586 (53.19%)
			author_url?: string, // 1568495/3129586 (50.12%)
			cache_age?: number, // 201646/3129586 (6.44%)
			description?: string, // 405755/3129586 (12.97%)
			height?: number|null, // 3129543/3129586 (100.00%)
			html?: string, // 3129543/3129586 (100.00%)
			mean_alpha?: number, // 4969/3129586 (0.16%)
			provider_name?: string, // 3129543/3129586 (100.00%)
			provider_url?: string, // 3129543/3129586 (100.00%)
			thumbnail_height?: number, // 1735790/3129586 (55.46%)
			thumbnail_url?: string, // 1737256/3129586 (55.51%)
			thumbnail_width?: number, // 1735790/3129586 (55.46%)
			title?: string, // 2865138/3129586 (91.55%)
			type?: "video"|"rich", // 3129543/3129586 (100.00%)
			url?: string, // 370817/3129586 (11.85%)
			version?: "1.0", // 3129543/3129586 (100.00%)
			width?: number, // 3129543/3129586 (100.00%)
		}, // 3129586/4046431 (77.34%)
		reddit_video?: {
			bitrate_kbps?: number, // 908295/916445 (99.11%)
			dash_url?: string, // 908307/916445 (99.11%)
			duration?: number, // 908307/916445 (99.11%)
			fallback_url?: string, // 908307/916445 (99.11%)
			height?: number, // 908307/916445 (99.11%)
			hls_url?: string, // 908307/916445 (99.11%)
			is_gif?: boolean, // 908307/916445 (99.11%)
			scrubber_media_url?: string, // 908307/916445 (99.11%)
			transcoding_message?: string, // 8138/916445 (0.89%)
			transcoding_status: "completed"|"error",
			width?: number, // 908307/916445 (99.11%)
		}, // 916445/4046431 (22.65%)
		type?: string, // 3129986/4046431 (77.35%)
	},
	secure_media_embed: {
		content?: string|null, // 3129986/32704571 (9.57%)
		height?: number, // 3129986/32704571 (9.57%)
		media_domain_url?: string, // 3129986/32704571 (9.57%)
		scrolling?: boolean, // 3129986/32704571 (9.57%)
		width?: number, // 3129986/32704571 (9.57%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 19959/32704571 (0.06%)
	sk_ad_network_data?: null, // 19959/32704571 (0.06%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"qa"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 19959/32704571 (0.06%)
	third_party_tracking?: null, // 19959/32704571 (0.06%)
	third_party_tracking_2?: null, // 19959/32704571 (0.06%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:cutie"|"econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:champagne")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 21811852/32704571 (66.69%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}