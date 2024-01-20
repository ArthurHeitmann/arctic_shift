interface RedditPost {
	adserver_click_url?: null, // 27825/31147947 (0.09%)
	adserver_imp_pixel?: null, // 27825/31147947 (0.09%)
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
	author_cakeday?: boolean, // 102283/31147947 (0.33%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 752299/2011111 (37.41%)
		e: "text"|"emoji",
		t?: string, // 1258812/2011111 (62.59%)
		u?: string, // 752299/2011111 (37.41%)
	}[], // 23169589/31147947 (74.39%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 23169589/31147947 (74.39%)
	author_fullname?: string, // 23169589/31147947 (74.39%)
	author_id?: string|null, // 27825/31147947 (0.09%)
	author_patreon_flair?: boolean, // 23169589/31147947 (74.39%)
	author_premium?: boolean, // 23169589/31147947 (74.39%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Install"|"Play Now"|"View More"|"Apply Now"|"Watch Now"|"Contact Us"|"Get a Quote"|"See Menu"|"Get Showtimes"|"", // 25772/31147947 (0.08%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|""|"videos"|"diy_and_crafts"|"food"|"memes"|"funny"|"music",
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
	}[], // 8950/31147947 (0.03%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1426233/31147947 (4.58%)
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
		author_cakeday?: boolean, // 3745/1182162 (0.32%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 39812/105251 (37.83%)
			e: "text"|"emoji",
			t?: string, // 65439/105251 (62.17%)
			u?: string, // 39812/105251 (37.83%)
		}[], // 1013727/1182162 (85.75%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1013727/1182162 (85.75%)
		author_fullname?: string, // 1013727/1182162 (85.75%)
		author_patreon_flair?: boolean, // 1013727/1182162 (85.75%)
		author_premium?: boolean, // 1013727/1182162 (85.75%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"funny"|"food"|""|"memes",
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
		}[], // 1344/1182162 (0.11%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 342/1182162 (0.03%)
		event_is_live?: boolean, // 342/1182162 (0.03%)
		event_start?: number, // 342/1182162 (0.03%)
		gallery_data?: {
			items: {
				caption?: string, // 26722/206231 (12.96%)
				id: number,
				media_id: string,
				outbound_url?: string, // 10260/206231 (4.98%)
			}[],
		}|null, // 58046/1182162 (4.91%)
		gilded: number,
		gildings: {
			gid_1?: number, // 331614/1182162 (28.05%)
			gid_2?: number, // 57112/1182162 (4.83%)
			gid_3?: number, // 16626/1182162 (1.41%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 58046/1182162 (4.91%)
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
			a?: string, // 17749/186023 (9.54%)
			e: "text"|"emoji",
			t?: string, // 168274/186023 (90.46%)
			u?: string, // 17749/186023 (9.54%)
		}[],
		link_flair_template_id?: string, // 346459/1182162 (29.31%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 49531/242715 (20.41%)
				author_url?: string, // 39802/242715 (16.40%)
				cache_age?: number, // 5007/242715 (2.06%)
				description?: string, // 16948/242715 (6.98%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 90/242715 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 50935/242715 (20.99%)
				thumbnail_url?: string, // 50975/242715 (21.00%)
				thumbnail_width?: number, // 50935/242715 (20.99%)
				title?: string, // 211150/242715 (87.00%)
				type: "video"|"rich",
				url?: string, // 9384/242715 (3.87%)
				version: "1.0",
				width: number,
			}, // 242715/359084 (67.59%)
			reddit_video?: {
				bitrate_kbps?: number, // 112434/116369 (96.62%)
				dash_url?: string, // 116361/116369 (99.99%)
				duration?: number, // 116361/116369 (99.99%)
				fallback_url?: string, // 116361/116369 (99.99%)
				height?: number, // 116361/116369 (99.99%)
				hls_url?: string, // 116361/116369 (99.99%)
				is_gif?: boolean, // 116361/116369 (99.99%)
				scrubber_media_url?: string, // 116361/116369 (99.99%)
				transcoding_message?: string, // 8/116369 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number, // 116361/116369 (99.99%)
			}, // 116369/359084 (32.41%)
			type?: string, // 242715/359084 (67.59%)
		},
		media_embed: {
			content?: string, // 242715/1182162 (20.53%)
			height?: number, // 242715/1182162 (20.53%)
			scrolling?: boolean, // 242715/1182162 (20.53%)
			width?: number, // 242715/1182162 (20.53%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 677/231354 (0.29%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 231144/231354 (99.91%)
				hlsUrl?: string, // 677/231354 (0.29%)
				id?: string, // 231144/231354 (99.91%)
				isGif?: boolean, // 677/231354 (0.29%)
				m?: "image/jpg"|"image/png"|"image/gif", // 230467/231354 (99.62%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 108128/231354 (46.74%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 230467/231354 (99.62%)
				s?: {
					gif?: string, // 2070/230467 (0.90%)
					mp4?: string, // 2070/230467 (0.90%)
					u?: string, // 228397/230467 (99.10%)
					x: number,
					y: number,
				}, // 230467/231354 (99.62%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 677/231354 (0.29%)
				y?: number, // 677/231354 (0.29%)
			},
		}|null, // 68205/1182162 (5.77%)
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
				total_stake_amount?: number, // 27/8673 (0.31%)
				vote_count: number,
			}[],
			resolved_option_id: null|"6208018"|"6208024"|"6208025"|"6208041"|"6208782"|"6249671"|"6249683"|"6249695"|"6249706"|"6249711",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2764/1182162 (0.23%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 814704/1182162 (68.92%)
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
					}, // 20716/814704 (2.54%)
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
					}, // 20716/814704 (2.54%)
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
					}, // 396691/814704 (48.69%)
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
					}, // 400294/814704 (49.13%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 169027/169794 (99.55%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 169794/814704 (20.84%)
		}, // 814704/1182162 (68.92%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 327/1182162 (0.03%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 49531/242715 (20.41%)
				author_url?: string, // 39802/242715 (16.40%)
				cache_age?: number, // 5007/242715 (2.06%)
				description?: string, // 16948/242715 (6.98%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 90/242715 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 50935/242715 (20.99%)
				thumbnail_url?: string, // 50975/242715 (21.00%)
				thumbnail_width?: number, // 50935/242715 (20.99%)
				title?: string, // 211150/242715 (87.00%)
				type: "video"|"rich",
				url?: string, // 9384/242715 (3.87%)
				version: "1.0",
				width: number,
			}, // 242715/359084 (67.59%)
			reddit_video?: {
				bitrate_kbps?: number, // 112434/116369 (96.62%)
				dash_url?: string, // 116361/116369 (99.99%)
				duration?: number, // 116361/116369 (99.99%)
				fallback_url?: string, // 116361/116369 (99.99%)
				height?: number, // 116361/116369 (99.99%)
				hls_url?: string, // 116361/116369 (99.99%)
				is_gif?: boolean, // 116361/116369 (99.99%)
				scrubber_media_url?: string, // 116361/116369 (99.99%)
				transcoding_message?: string, // 8/116369 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number, // 116361/116369 (99.99%)
			}, // 116369/359084 (32.41%)
			type?: string, // 242715/359084 (67.59%)
		},
		secure_media_embed: {
			content?: string, // 242715/1182162 (20.53%)
			height?: number, // 242715/1182162 (20.53%)
			media_domain_url?: string, // 242715/1182162 (20.53%)
			scrolling?: boolean, // 242715/1182162 (20.53%)
			width?: number, // 242715/1182162 (20.53%)
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
		treatment_tags: ("econ:render:lottie:cutie"|"econ:render:lottie:bulb"|"econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1080995/1182162 (91.44%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1426233/31147947 (4.58%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 27825/31147947 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 27825/31147947 (0.09%)
	embed_url?: null|string, // 27825/31147947 (0.09%)
	event_end?: number, // 1817/31147947 (0.01%)
	event_is_live?: boolean, // 1817/31147947 (0.01%)
	event_start?: number, // 1817/31147947 (0.01%)
	events?: [], // 27825/31147947 (0.09%)
	eventsOnRender?: [], // 27825/31147947 (0.09%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Watch Now"|"Download"|"Install"|"View More"|"Play Now"|"Get Showtimes", // 356/2673668 (0.01%)
			caption?: string, // 297119/2673668 (11.11%)
			display_url?: string, // 348/2673668 (0.01%)
			id: number,
			media_id: string,
			outbound_url?: string, // 68277/2673668 (2.55%)
		}[],
	}|null, // 1466794/31147947 (4.71%)
	gilded: number,
	gildings: {
		gid_1?: number, // 660321/31147947 (2.12%)
		gid_2?: number, // 47392/31147947 (0.15%)
		gid_3?: number, // 9570/31147947 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 27825/31147947 (0.09%)
	id: string,
	impression_id?: null, // 27825/31147947 (0.09%)
	impression_id_str?: null, // 27825/31147947 (0.09%)
	is_blank?: boolean, // 27825/31147947 (0.09%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1466794/31147947 (4.71%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 444900/6024038 (7.39%)
		e: "text"|"emoji",
		t?: string, // 5579138/6024038 (92.61%)
		u?: string, // 444900/6024038 (7.39%)
	}[],
	link_flair_template_id?: string, // 9545035/31147947 (30.64%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 48/3627087 (0.00%)
		oembed?: {
			author_name?: string, // 1564236/2734541 (57.20%)
			author_url?: string, // 1466266/2734541 (53.62%)
			cache_age?: number, // 169071/2734541 (6.18%)
			description?: string, // 379130/2734541 (13.86%)
			height?: number|null, // 2734514/2734541 (100.00%)
			html?: string, // 2734514/2734541 (100.00%)
			marginheight?: number, // 1/2734541 (0.00%)
			marginwidth?: number, // 1/2734541 (0.00%)
			mean_alpha?: number, // 5199/2734541 (0.19%)
			provider_name?: string, // 2734514/2734541 (100.00%)
			provider_url?: string, // 2734514/2734541 (100.00%)
			thumbnail_height?: number, // 1638234/2734541 (59.91%)
			thumbnail_url?: string, // 1639435/2734541 (59.95%)
			thumbnail_width?: number, // 1638234/2734541 (59.91%)
			title?: string, // 2423356/2734541 (88.62%)
			type?: "video"|"rich", // 2734514/2734541 (100.00%)
			url?: string, // 318285/2734541 (11.64%)
			version?: "1.0", // 2734513/2734541 (100.00%)
			width?: number, // 2734514/2734541 (100.00%)
		}, // 2734541/3627087 (75.39%)
		reddit_video?: {
			bitrate_kbps?: number, // 884719/892498 (99.13%)
			dash_url?: string, // 884730/892498 (99.13%)
			duration?: number, // 884730/892498 (99.13%)
			fallback_url?: string, // 884730/892498 (99.13%)
			height?: number, // 884730/892498 (99.13%)
			hls_url?: string, // 884730/892498 (99.13%)
			is_gif?: boolean, // 884730/892498 (99.13%)
			scrubber_media_url?: string, // 884730/892498 (99.13%)
			transcoding_message?: string, // 7768/892498 (0.87%)
			transcoding_status: "completed"|"error",
			width?: number, // 884730/892498 (99.13%)
		}, // 892498/3627087 (24.61%)
		type?: string, // 2734589/3627087 (75.39%)
	},
	media_embed: {
		content?: string|null, // 2734589/31147947 (8.78%)
		height?: number, // 2734589/31147947 (8.78%)
		scrolling?: boolean, // 2734589/31147947 (8.78%)
		width?: number, // 2734589/31147947 (8.78%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14932/3028983 (0.49%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 3024309/3028983 (99.85%)
			hlsUrl?: string, // 14932/3028983 (0.49%)
			id?: string, // 3024309/3028983 (99.85%)
			isGif?: boolean, // 14932/3028983 (0.49%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3009377/3028983 (99.35%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 818997/3028983 (27.04%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3009377/3028983 (99.35%)
			s?: {
				gif?: string, // 14878/3009377 (0.49%)
				mp4?: string, // 14878/3009377 (0.49%)
				u?: string, // 2994499/3009377 (99.51%)
				x: number,
				y: number,
			}, // 3009377/3028983 (99.35%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 14932/3028983 (0.49%)
			y?: number, // 14932/3028983 (0.49%)
		},
	}|null, // 1838231/31147947 (5.90%)
	media_only: boolean,
	mobile_ad_url?: string, // 27825/31147947 (0.09%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 27825/31147947 (0.09%)
	outbound_link?: {
	}, // 27825/31147947 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 168/433254 (0.04%)
			vote_count: number,
		}[],
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 180206/31147947 (0.58%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 11227806/31147947 (36.05%)
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
				}, // 85727/11227806 (0.76%)
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
				}, // 85727/11227806 (0.76%)
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
				}, // 3152392/11227806 (28.08%)
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
				}, // 3210719/11227806 (28.60%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 546536/547538 (99.82%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 547538/11227806 (4.88%)
	}, // 11227806/31147947 (36.05%)
	priority_id?: null, // 27825/31147947 (0.09%)
	promoted?: boolean, // 27825/31147947 (0.09%)
	promoted_by?: null, // 27825/31147947 (0.09%)
	promoted_display_name?: null, // 27825/31147947 (0.09%)
	promoted_url?: null, // 27825/31147947 (0.09%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 37532/31147947 (0.12%)
	score: number,
	secure_media: null|{
		event_id?: string, // 48/3627087 (0.00%)
		oembed?: {
			author_name?: string, // 1564236/2734541 (57.20%)
			author_url?: string, // 1466266/2734541 (53.62%)
			cache_age?: number, // 169071/2734541 (6.18%)
			description?: string, // 379130/2734541 (13.86%)
			height?: number|null, // 2734514/2734541 (100.00%)
			html?: string, // 2734514/2734541 (100.00%)
			marginheight?: number, // 1/2734541 (0.00%)
			marginwidth?: number, // 1/2734541 (0.00%)
			mean_alpha?: number, // 5199/2734541 (0.19%)
			provider_name?: string, // 2734514/2734541 (100.00%)
			provider_url?: string, // 2734514/2734541 (100.00%)
			thumbnail_height?: number, // 1638234/2734541 (59.91%)
			thumbnail_url?: string, // 1639435/2734541 (59.95%)
			thumbnail_width?: number, // 1638234/2734541 (59.91%)
			title?: string, // 2423356/2734541 (88.62%)
			type?: "video"|"rich", // 2734514/2734541 (100.00%)
			url?: string, // 318285/2734541 (11.64%)
			version?: "1.0", // 2734513/2734541 (100.00%)
			width?: number, // 2734514/2734541 (100.00%)
		}, // 2734541/3627087 (75.39%)
		reddit_video?: {
			bitrate_kbps?: number, // 884719/892498 (99.13%)
			dash_url?: string, // 884730/892498 (99.13%)
			duration?: number, // 884730/892498 (99.13%)
			fallback_url?: string, // 884730/892498 (99.13%)
			height?: number, // 884730/892498 (99.13%)
			hls_url?: string, // 884730/892498 (99.13%)
			is_gif?: boolean, // 884730/892498 (99.13%)
			scrubber_media_url?: string, // 884730/892498 (99.13%)
			transcoding_message?: string, // 7768/892498 (0.87%)
			transcoding_status: "completed"|"error",
			width?: number, // 884730/892498 (99.13%)
		}, // 892498/3627087 (24.61%)
		type?: string, // 2734589/3627087 (75.39%)
	},
	secure_media_embed: {
		content?: string|null, // 2734589/31147947 (8.78%)
		height?: number, // 2734589/31147947 (8.78%)
		media_domain_url?: string, // 2734589/31147947 (8.78%)
		scrolling?: boolean, // 2734589/31147947 (8.78%)
		width?: number, // 2734589/31147947 (8.78%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 27825/31147947 (0.09%)
	sk_ad_network_data?: null, // 27825/31147947 (0.09%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 27825/31147947 (0.09%)
	third_party_tracking?: null, // 27825/31147947 (0.09%)
	third_party_tracking_2?: null, // 27825/31147947 (0.09%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:cutie"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 20479299/31147947 (65.75%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}