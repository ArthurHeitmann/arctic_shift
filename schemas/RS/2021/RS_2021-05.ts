interface RedditPost {
	adserver_click_url?: null, // 28898/36310673 (0.08%)
	adserver_imp_pixel?: null, // 28898/36310673 (0.08%)
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
	author_cakeday?: boolean, // 68909/36310673 (0.19%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 791447/2140006 (36.98%)
		e: "text"|"emoji",
		t?: string, // 1348559/2140006 (63.02%)
		u?: string, // 791447/2140006 (36.98%)
	}[], // 28799023/36310673 (79.31%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 28799023/36310673 (79.31%)
	author_fullname?: string, // 28799023/36310673 (79.31%)
	author_id?: string|null, // 28898/36310673 (0.08%)
	author_patreon_flair?: boolean, // 28799023/36310673 (79.31%)
	author_premium?: boolean, // 28799023/36310673 (79.31%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Play Now"|"Install"|"View More"|"Apply Now"|"Watch Now"|"Contact Us"|"Get a Quote"|"See Menu"|"Get Showtimes"|"Pre-order Now"|"", // 26712/36310673 (0.07%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"videos"|""|"diy_and_crafts"|"memes"|"food"|"writing"|"funny",
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description: string|null,
		display_layout: null|"TIMELINE"|"GALLERY",
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		subreddit_id: string,
		title: string,
	}[], // 8485/36310673 (0.02%)
	content_categories: null|("drawing_and_painting"|"photography"|"entertainment"|"gaming"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1582837/36310673 (4.36%)
	crosspost_parent_list?: {
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
		author_cakeday?: boolean, // 2731/1469777 (0.19%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 44928/114182 (39.35%)
			e: "text"|"emoji",
			t?: string, // 69254/114182 (60.65%)
			u?: string, // 44928/114182 (39.35%)
		}[], // 1316803/1469777 (89.59%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1316803/1469777 (89.59%)
		author_fullname?: string, // 1316803/1469777 (89.59%)
		author_patreon_flair?: boolean, // 1316803/1469777 (89.59%)
		author_premium?: boolean, // 1316803/1469777 (89.59%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"animals"|"drawing_and_painting"|"photography"|"gaming"|"diy_and_crafts"|"entertainment"|"",
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
		}[], // 1535/1469777 (0.10%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 545/1469777 (0.04%)
		event_is_live?: boolean, // 545/1469777 (0.04%)
		event_start?: number, // 545/1469777 (0.04%)
		gallery_data?: {
			items: {
				caption?: string, // 42474/323258 (13.14%)
				id: number,
				media_id: string,
				outbound_url?: string, // 20450/323258 (6.33%)
			}[],
		}|null, // 84465/1469777 (5.75%)
		gilded: number,
		gildings: {
			gid_1?: number, // 339572/1469777 (23.10%)
			gid_2?: number, // 50713/1469777 (3.45%)
			gid_3?: number, // 16191/1469777 (1.10%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 84465/1469777 (5.75%)
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
			a?: string, // 31050/203828 (15.23%)
			e: "text"|"emoji",
			t?: string, // 172778/203828 (84.77%)
			u?: string, // 31050/203828 (15.23%)
		}[],
		link_flair_template_id?: string, // 419672/1469777 (28.55%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "16zyr6zbsvfog", // 1/502771 (0.00%)
			oembed?: {
				author_name?: string, // 341509/381899 (89.42%)
				author_url?: string, // 331436/381899 (86.79%)
				cache_age?: number, // 5322/381899 (1.39%)
				description?: string, // 15673/381899 (4.10%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 27/381899 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 342470/381899 (89.68%)
				thumbnail_url?: string, // 342591/381899 (89.71%)
				thumbnail_width?: number, // 342470/381899 (89.68%)
				title?: string, // 372673/381899 (97.58%)
				type: "video"|"rich",
				url?: string, // 8482/381899 (2.22%)
				version: "1.0",
				width: number,
			}, // 381899/502771 (75.96%)
			reddit_video?: {
				bitrate_kbps?: number, // 118427/120871 (97.98%)
				dash_url?: string, // 120862/120871 (99.99%)
				duration?: number, // 120862/120871 (99.99%)
				fallback_url?: string, // 120862/120871 (99.99%)
				height?: number, // 120862/120871 (99.99%)
				hls_url?: string, // 120862/120871 (99.99%)
				is_gif?: boolean, // 120862/120871 (99.99%)
				scrubber_media_url?: string, // 120862/120871 (99.99%)
				transcoding_message?: string, // 9/120871 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number, // 120862/120871 (99.99%)
			}, // 120871/502771 (24.04%)
			type?: string, // 381900/502771 (75.96%)
		},
		media_embed: {
			content?: string, // 381900/1469777 (25.98%)
			height?: number, // 381900/1469777 (25.98%)
			scrolling?: boolean, // 381900/1469777 (25.98%)
			width?: number, // 381900/1469777 (25.98%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1045/359696 (0.29%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 359466/359696 (99.94%)
				hlsUrl?: string, // 1045/359696 (0.29%)
				id?: string, // 359466/359696 (99.94%)
				isGif?: boolean, // 1045/359696 (0.29%)
				m?: "image/jpg"|"image/png"|"image/gif", // 358421/359696 (99.65%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 190205/359696 (52.88%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 358421/359696 (99.65%)
				s?: {
					gif?: string, // 6560/358421 (1.83%)
					mp4?: string, // 6560/358421 (1.83%)
					u?: string, // 351861/358421 (98.17%)
					x: number,
					y: number,
				}, // 358421/359696 (99.65%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1045/359696 (0.29%)
				y?: number, // 1045/359696 (0.29%)
			},
		}|null, // 97296/1469777 (6.62%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 61/12042 (0.51%)
				vote_count: number,
			}[],
			resolved_option_id: null|"7709309"|"7709511"|"8274592"|"7709375"|"7558851"|"7558887"|"7709792"|"8005200"|"8206267",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 3418/1469777 (0.23%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 1083547/1469777 (73.72%)
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
					}, // 38839/1083547 (3.58%)
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
					}, // 38839/1083547 (3.58%)
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
					}, // 618902/1083547 (57.12%)
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
					}, // 622880/1083547 (57.49%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 316387/317249 (99.73%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 317249/1083547 (29.28%)
		}, // 1083547/1469777 (73.72%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 617/1469777 (0.04%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "16zyr6zbsvfog", // 1/502771 (0.00%)
			oembed?: {
				author_name?: string, // 341509/381899 (89.42%)
				author_url?: string, // 331436/381899 (86.79%)
				cache_age?: number, // 5322/381899 (1.39%)
				description?: string, // 15673/381899 (4.10%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 27/381899 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 342470/381899 (89.68%)
				thumbnail_url?: string, // 342591/381899 (89.71%)
				thumbnail_width?: number, // 342470/381899 (89.68%)
				title?: string, // 372673/381899 (97.58%)
				type: "video"|"rich",
				url?: string, // 8482/381899 (2.22%)
				version: "1.0",
				width: number,
			}, // 381899/502771 (75.96%)
			reddit_video?: {
				bitrate_kbps?: number, // 118427/120871 (97.98%)
				dash_url?: string, // 120862/120871 (99.99%)
				duration?: number, // 120862/120871 (99.99%)
				fallback_url?: string, // 120862/120871 (99.99%)
				height?: number, // 120862/120871 (99.99%)
				hls_url?: string, // 120862/120871 (99.99%)
				is_gif?: boolean, // 120862/120871 (99.99%)
				scrubber_media_url?: string, // 120862/120871 (99.99%)
				transcoding_message?: string, // 9/120871 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number, // 120862/120871 (99.99%)
			}, // 120871/502771 (24.04%)
			type?: string, // 381900/502771 (75.96%)
		},
		secure_media_embed: {
			content?: string, // 381900/1469777 (25.98%)
			height?: number, // 381900/1469777 (25.98%)
			media_domain_url?: string, // 381900/1469777 (25.98%)
			scrolling?: boolean, // 381900/1469777 (25.98%)
			width?: number, // 381900/1469777 (25.98%)
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
		treatment_tags: ("econ:render:lottie:bulb"|"econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:halloween2020")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1354675/1469777 (92.17%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1582837/36310673 (4.36%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 28898/36310673 (0.08%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 28898/36310673 (0.08%)
	embed_url?: null|string, // 28898/36310673 (0.08%)
	event_end?: number, // 2256/36310673 (0.01%)
	event_is_live?: boolean, // 2256/36310673 (0.01%)
	event_start?: number, // 2256/36310673 (0.01%)
	events?: [], // 28898/36310673 (0.08%)
	eventsOnRender?: [], // 28898/36310673 (0.08%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Sign Up"|"Learn More"|"Download"|"Install"|"View More"|"Play Now"|"Apply Now"|"Pre-order Now"|"Watch Now", // 2368/3672788 (0.06%)
			caption?: string, // 411290/3672788 (11.20%)
			display_url?: string, // 2305/3672788 (0.06%)
			id: number,
			media_id: string,
			outbound_url?: string, // 102412/3672788 (2.79%)
		}[],
	}|null, // 1674682/36310673 (4.61%)
	gilded: number,
	gildings: {
		gid_1?: number, // 614338/36310673 (1.69%)
		gid_2?: number, // 48793/36310673 (0.13%)
		gid_3?: number, // 11177/36310673 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 28898/36310673 (0.08%)
	id: string,
	impression_id?: null, // 28898/36310673 (0.08%)
	impression_id_str?: null, // 28898/36310673 (0.08%)
	is_blank?: boolean, // 28898/36310673 (0.08%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1674682/36310673 (4.61%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 516316/6069516 (8.51%)
		e: "text"|"emoji",
		t?: string, // 5553200/6069516 (91.49%)
		u?: string, // 516316/6069516 (8.51%)
	}[],
	link_flair_template_id?: string, // 10683665/36310673 (29.42%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 26/3867076 (0.00%)
		oembed?: {
			author_name?: string, // 2696970/2896685 (93.11%)
			author_url?: string, // 2627136/2896685 (90.69%)
			cache_age?: number, // 183406/2896685 (6.33%)
			description?: string, // 271424/2896685 (9.37%)
			height?: number|null, // 2896655/2896685 (100.00%)
			html?: string, // 2896655/2896685 (100.00%)
			marginheight?: number, // 2/2896685 (0.00%)
			marginwidth?: number, // 2/2896685 (0.00%)
			mean_alpha?: number, // 3267/2896685 (0.11%)
			provider_name?: string, // 2896655/2896685 (100.00%)
			provider_url?: string, // 2896655/2896685 (100.00%)
			thumbnail_height?: number, // 2680022/2896685 (92.52%)
			thumbnail_url?: string, // 2687239/2896685 (92.77%)
			thumbnail_width?: number, // 2680022/2896685 (92.52%)
			title?: string, // 2698190/2896685 (93.15%)
			type?: "video"|"rich", // 2896655/2896685 (100.00%)
			url?: string, // 274245/2896685 (9.47%)
			version?: "1.0", // 2896653/2896685 (100.00%)
			width?: number, // 2896655/2896685 (100.00%)
		}, // 2896685/3867076 (74.91%)
		reddit_video?: {
			bitrate_kbps?: number, // 963686/970365 (99.31%)
			dash_url?: string, // 963686/970365 (99.31%)
			duration?: number, // 963686/970365 (99.31%)
			fallback_url?: string, // 963686/970365 (99.31%)
			height?: number, // 963686/970365 (99.31%)
			hls_url?: string, // 963686/970365 (99.31%)
			is_gif?: boolean, // 963686/970365 (99.31%)
			scrubber_media_url?: string, // 963686/970365 (99.31%)
			transcoding_message?: string, // 6679/970365 (0.69%)
			transcoding_status: "completed"|"error",
			width?: number, // 963686/970365 (99.31%)
		}, // 970365/3867076 (25.09%)
		type?: string, // 2896711/3867076 (74.91%)
	},
	media_embed: {
		content?: string|null, // 2896711/36310673 (7.98%)
		height?: number, // 2896711/36310673 (7.98%)
		scrolling?: boolean, // 2896711/36310673 (7.98%)
		width?: number, // 2896711/36310673 (7.98%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17588/4092984 (0.43%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 4085837/4092984 (99.83%)
			hlsUrl?: string, // 17588/4092984 (0.43%)
			id?: string, // 4085837/4092984 (99.83%)
			isGif?: boolean, // 17588/4092984 (0.43%)
			m?: "image/jpg"|"image/png"|"image/gif", // 4068249/4092984 (99.40%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1176065/4092984 (28.73%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4068249/4092984 (99.40%)
			s?: {
				gif?: string, // 33799/4068249 (0.83%)
				mp4?: string, // 33799/4068249 (0.83%)
				u?: string, // 4034450/4068249 (99.17%)
				x: number,
				y: number,
			}, // 4068249/4092984 (99.40%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 17588/4092984 (0.43%)
			y?: number, // 17588/4092984 (0.43%)
		},
	}|null, // 2084978/36310673 (5.74%)
	media_only: boolean,
	mobile_ad_url?: string, // 28898/36310673 (0.08%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 28898/36310673 (0.08%)
	outbound_link?: {
	}, // 28898/36310673 (0.08%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 316/459510 (0.07%)
			vote_count: number,
		}[],
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 175655/36310673 (0.48%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 13046804/36310673 (35.93%)
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
				}, // 189421/13046804 (1.45%)
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
				}, // 189421/13046804 (1.45%)
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
				}, // 4376665/13046804 (33.55%)
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
				}, // 4442918/13046804 (34.05%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 832448/833315 (99.90%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 833315/13046804 (6.39%)
	}, // 13046804/36310673 (35.93%)
	priority_id?: null, // 28898/36310673 (0.08%)
	promoted?: boolean, // 28898/36310673 (0.08%)
	promoted_by?: null, // 28898/36310673 (0.08%)
	promoted_display_name?: null, // 28898/36310673 (0.08%)
	promoted_url?: null, // 28898/36310673 (0.08%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"reddit"|"moderator"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 34299/36310673 (0.09%)
	score: number,
	secure_media: null|{
		event_id?: string, // 26/3867076 (0.00%)
		oembed?: {
			author_name?: string, // 2696970/2896685 (93.11%)
			author_url?: string, // 2627136/2896685 (90.69%)
			cache_age?: number, // 183406/2896685 (6.33%)
			description?: string, // 271424/2896685 (9.37%)
			height?: number|null, // 2896655/2896685 (100.00%)
			html?: string, // 2896655/2896685 (100.00%)
			marginheight?: number, // 2/2896685 (0.00%)
			marginwidth?: number, // 2/2896685 (0.00%)
			mean_alpha?: number, // 3267/2896685 (0.11%)
			provider_name?: string, // 2896655/2896685 (100.00%)
			provider_url?: string, // 2896655/2896685 (100.00%)
			thumbnail_height?: number, // 2680022/2896685 (92.52%)
			thumbnail_url?: string, // 2687239/2896685 (92.77%)
			thumbnail_width?: number, // 2680022/2896685 (92.52%)
			title?: string, // 2698190/2896685 (93.15%)
			type?: "video"|"rich", // 2896655/2896685 (100.00%)
			url?: string, // 274245/2896685 (9.47%)
			version?: "1.0", // 2896653/2896685 (100.00%)
			width?: number, // 2896655/2896685 (100.00%)
		}, // 2896685/3867076 (74.91%)
		reddit_video?: {
			bitrate_kbps?: number, // 963686/970365 (99.31%)
			dash_url?: string, // 963686/970365 (99.31%)
			duration?: number, // 963686/970365 (99.31%)
			fallback_url?: string, // 963686/970365 (99.31%)
			height?: number, // 963686/970365 (99.31%)
			hls_url?: string, // 963686/970365 (99.31%)
			is_gif?: boolean, // 963686/970365 (99.31%)
			scrubber_media_url?: string, // 963686/970365 (99.31%)
			transcoding_message?: string, // 6679/970365 (0.69%)
			transcoding_status: "completed"|"error",
			width?: number, // 963686/970365 (99.31%)
		}, // 970365/3867076 (25.09%)
		type?: string, // 2896711/3867076 (74.91%)
	},
	secure_media_embed: {
		content?: string|null, // 2896711/36310673 (7.98%)
		height?: number, // 2896711/36310673 (7.98%)
		media_domain_url?: string, // 2896711/36310673 (7.98%)
		scrolling?: boolean, // 2896711/36310673 (7.98%)
		width?: number, // 2896711/36310673 (7.98%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 28898/36310673 (0.08%)
	sk_ad_network_data?: null, // 28898/36310673 (0.08%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 28898/36310673 (0.08%)
	third_party_tracking?: null, // 28898/36310673 (0.08%)
	third_party_tracking_2?: null, // 28898/36310673 (0.08%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 24328770/36310673 (67.00%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}