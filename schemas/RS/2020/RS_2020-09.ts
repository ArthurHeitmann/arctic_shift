interface RedditPost {
	adserver_click_url?: null, // 22447/27814712 (0.08%)
	adserver_imp_pixel?: null, // 22447/27814712 (0.08%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"GROUP"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
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
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 96513/27814712 (0.35%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 799791/2156729 (37.08%)
		e: "text"|"emoji",
		t?: string, // 1356938/2156729 (62.92%)
		u?: string, // 799791/2156729 (37.08%)
	}[], // 19698828/27814712 (70.82%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 19698828/27814712 (70.82%)
	author_fullname?: string, // 19698828/27814712 (70.82%)
	author_id?: string|null, // 22447/27814712 (0.08%)
	author_patreon_flair?: boolean, // 19698828/27814712 (70.82%)
	author_premium?: boolean, // 19698828/27814712 (70.82%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Play Now"|"View More"|"Install"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|"", // 19996/27814712 (0.07%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"diy_and_crafts"|""|"videos"|"memes"|"food"|"writing"|"funny",
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
	}[], // 6440/27814712 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1431592/27814712 (5.15%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"GROUP"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
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
		author_cakeday?: boolean, // 4379/1036460 (0.42%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 40574/107142 (37.87%)
			e: "text"|"emoji",
			t?: string, // 66568/107142 (62.13%)
			u?: string, // 40574/107142 (37.87%)
		}[], // 858570/1036460 (82.84%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 858570/1036460 (82.84%)
		author_fullname?: string, // 858570/1036460 (82.84%)
		author_patreon_flair?: boolean, // 858570/1036460 (82.84%)
		author_premium?: boolean, // 858570/1036460 (82.84%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Shop Now", // 1/1036460 (0.00%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"animals"|"diy_and_crafts"|"memes"|"photography"|"entertainment"|"",
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
		}[], // 950/1036460 (0.09%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 158/1036460 (0.02%)
		event_is_live?: boolean, // 158/1036460 (0.02%)
		event_start?: number, // 158/1036460 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 15824/112026 (14.13%)
				id: number,
				media_id: string,
				outbound_url?: string, // 5985/112026 (5.34%)
			}[],
		}|null, // 37305/1036460 (3.60%)
		gilded: number,
		gildings: {
			gid_1?: number, // 52988/1036460 (5.11%)
			gid_2?: number, // 51582/1036460 (4.98%)
			gid_3?: number, // 12782/1036460 (1.23%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 37305/1036460 (3.60%)
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
			a?: string, // 13256/147587 (8.98%)
			e: "text"|"emoji",
			t?: string, // 134331/147587 (91.02%)
			u?: string, // 13256/147587 (8.98%)
		}[],
		link_flair_template_id?: string, // 273214/1036460 (26.36%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "15oqe3rs08s69", // 1/286223 (0.00%)
			oembed?: {
				author_name?: string, // 50745/178478 (28.43%)
				author_url?: string, // 35290/178478 (19.77%)
				cache_age?: number, // 5390/178478 (3.02%)
				description?: string, // 23784/178478 (13.33%)
				height?: number|null, // 178473/178478 (100.00%)
				html?: string, // 178473/178478 (100.00%)
				mean_alpha?: number, // 57/178478 (0.03%)
				provider_name?: string, // 178473/178478 (100.00%)
				provider_url?: string, // 178473/178478 (100.00%)
				thumbnail_height?: number, // 52886/178478 (29.63%)
				thumbnail_url?: string, // 52938/178478 (29.66%)
				thumbnail_width?: number, // 52886/178478 (29.63%)
				title?: string, // 172947/178478 (96.90%)
				type?: "video"|"rich", // 178473/178478 (100.00%)
				url?: string, // 10743/178478 (6.02%)
				version?: "1.0", // 178473/178478 (100.00%)
				width?: number, // 178473/178478 (100.00%)
			}, // 178478/286223 (62.36%)
			reddit_video?: {
				dash_url?: string, // 107742/107744 (100.00%)
				duration?: number, // 107742/107744 (100.00%)
				fallback_url?: string, // 107742/107744 (100.00%)
				height?: number, // 107742/107744 (100.00%)
				hls_url?: string, // 107742/107744 (100.00%)
				is_gif?: boolean, // 107742/107744 (100.00%)
				scrubber_media_url?: string, // 107742/107744 (100.00%)
				transcoding_message?: string, // 2/107744 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 107742/107744 (100.00%)
			}, // 107744/286223 (37.64%)
			type?: string, // 178479/286223 (62.36%)
		},
		media_embed: {
			content?: string|null, // 178479/1036460 (17.22%)
			height?: number, // 178479/1036460 (17.22%)
			scrolling?: boolean, // 178479/1036460 (17.22%)
			width?: number, // 178479/1036460 (17.22%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 458/126501 (0.36%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 126361/126501 (99.89%)
				hlsUrl?: string, // 458/126501 (0.36%)
				id?: string, // 126361/126501 (99.89%)
				isGif?: boolean, // 458/126501 (0.36%)
				m?: "image/jpg"|"image/png"|"image/gif", // 125903/126501 (99.53%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 48622/126501 (38.44%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 125903/126501 (99.53%)
				s?: {
					gif?: string, // 934/125903 (0.74%)
					mp4?: string, // 934/125903 (0.74%)
					u?: string, // 124969/125903 (99.26%)
					x: number,
					y: number,
				}, // 125903/126501 (99.53%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 458/126501 (0.36%)
				y?: number, // 458/126501 (0.36%)
			},
		}|null, // 43967/1036460 (4.24%)
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
		parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count: number,
			}[],
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2103/1036460 (0.20%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 717742/1036460 (69.25%)
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
					}, // 18074/717742 (2.52%)
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
					}, // 18074/717742 (2.52%)
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
					}, // 309912/717742 (43.18%)
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
					}, // 312117/717742 (43.49%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 58784/125742 (46.75%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 125742/717742 (17.52%)
		}, // 717742/1036460 (69.25%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 188/1036460 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "15oqe3rs08s69", // 1/286223 (0.00%)
			oembed?: {
				author_name?: string, // 50745/178478 (28.43%)
				author_url?: string, // 35290/178478 (19.77%)
				cache_age?: number, // 5390/178478 (3.02%)
				description?: string, // 23784/178478 (13.33%)
				height?: number|null, // 178473/178478 (100.00%)
				html?: string, // 178473/178478 (100.00%)
				mean_alpha?: number, // 57/178478 (0.03%)
				provider_name?: string, // 178473/178478 (100.00%)
				provider_url?: string, // 178473/178478 (100.00%)
				thumbnail_height?: number, // 52886/178478 (29.63%)
				thumbnail_url?: string, // 52938/178478 (29.66%)
				thumbnail_width?: number, // 52886/178478 (29.63%)
				title?: string, // 172947/178478 (96.90%)
				type?: "video"|"rich", // 178473/178478 (100.00%)
				url?: string, // 10743/178478 (6.02%)
				version?: "1.0", // 178473/178478 (100.00%)
				width?: number, // 178473/178478 (100.00%)
			}, // 178478/286223 (62.36%)
			reddit_video?: {
				dash_url?: string, // 107742/107744 (100.00%)
				duration?: number, // 107742/107744 (100.00%)
				fallback_url?: string, // 107742/107744 (100.00%)
				height?: number, // 107742/107744 (100.00%)
				hls_url?: string, // 107742/107744 (100.00%)
				is_gif?: boolean, // 107742/107744 (100.00%)
				scrubber_media_url?: string, // 107742/107744 (100.00%)
				transcoding_message?: string, // 2/107744 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 107742/107744 (100.00%)
			}, // 107744/286223 (37.64%)
			type?: string, // 178479/286223 (62.36%)
		},
		secure_media_embed: {
			content?: string|null, // 178479/1036460 (17.22%)
			height?: number, // 178479/1036460 (17.22%)
			media_domain_url?: string, // 178479/1036460 (17.22%)
			scrolling?: boolean, // 178479/1036460 (17.22%)
			width?: number, // 178479/1036460 (17.22%)
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
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:cutie"|"econ:render:lottie:redstar"|"econ:render:lottie:heartbeat"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 957263/1036460 (92.36%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1431592/27814712 (5.15%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 22447/27814712 (0.08%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 22447/27814712 (0.08%)
	embed_url?: null|string, // 22447/27814712 (0.08%)
	event_end?: number, // 1447/27814712 (0.01%)
	event_is_live?: boolean, // 1447/27814712 (0.01%)
	event_start?: number, // 1447/27814712 (0.01%)
	events?: [], // 22447/27814712 (0.08%)
	eventsOnRender?: [], // 22447/27814712 (0.08%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Download"|"View More"|"Get Showtimes", // 121/1865980 (0.01%)
			caption?: string, // 201992/1865980 (10.82%)
			display_url?: "bestbuy.com"|"microsoft.com"|"microsoft.com/teams"|"google.com"|"reddit.com"|"cnn.com"|"bing.com"|"yahoo.com", // 130/1865980 (0.01%)
			id: number,
			media_id: string,
			outbound_url?: string, // 48145/1865980 (2.58%)
		}[],
	}|null, // 943474/27814712 (3.39%)
	gilded: number,
	gildings: {
		gid_1?: number, // 52823/27814712 (0.19%)
		gid_2?: number, // 46686/27814712 (0.17%)
		gid_3?: number, // 9013/27814712 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 22447/27814712 (0.08%)
	id: string,
	impression_id?: null, // 22447/27814712 (0.08%)
	impression_id_str?: null, // 22447/27814712 (0.08%)
	is_blank?: boolean, // 22447/27814712 (0.08%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 943474/27814712 (3.39%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 288069/5226565 (5.51%)
		e: "text"|"emoji",
		t?: string, // 4938496/5226565 (94.49%)
		u?: string, // 288069/5226565 (5.51%)
	}[],
	link_flair_template_id?: string, // 8013499/27814712 (28.81%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 46/3329640 (0.00%)
		oembed?: {
			author_name?: string, // 1564357/2549592 (61.36%)
			author_url?: string, // 1502188/2549592 (58.92%)
			cache_age?: number, // 275457/2549592 (10.80%)
			description?: string, // 356873/2549592 (14.00%)
			height?: number|null, // 2549580/2549592 (100.00%)
			html?: string, // 2549580/2549592 (100.00%)
			marginheight?: number, // 15/2549592 (0.00%)
			marginwidth?: number, // 15/2549592 (0.00%)
			mean_alpha?: number, // 6348/2549592 (0.25%)
			provider_name?: string, // 2549580/2549592 (100.00%)
			provider_url?: string, // 2549580/2549592 (100.00%)
			thumbnail_height?: number, // 1540373/2549592 (60.42%)
			thumbnail_url?: string, // 1541426/2549592 (60.46%)
			thumbnail_width?: number, // 1540373/2549592 (60.42%)
			title?: string, // 2271276/2549592 (89.08%)
			type?: "video"|"rich", // 2549580/2549592 (100.00%)
			url?: string, // 426717/2549592 (16.74%)
			version?: "1.0", // 2549565/2549592 (100.00%)
			width?: number, // 2549580/2549592 (100.00%)
		}, // 2549592/3329640 (76.57%)
		reddit_video?: {
			dash_url?: string, // 771974/780002 (98.97%)
			duration?: number, // 771974/780002 (98.97%)
			fallback_url?: string, // 771974/780002 (98.97%)
			height?: number, // 771974/780002 (98.97%)
			hls_url?: string, // 771974/780002 (98.97%)
			is_gif?: boolean, // 771974/780002 (98.97%)
			scrubber_media_url?: string, // 771974/780002 (98.97%)
			transcoding_message?: string, // 8028/780002 (1.03%)
			transcoding_status: "completed"|"error",
			width?: number, // 771974/780002 (98.97%)
		}, // 780002/3329640 (23.43%)
		type?: string, // 2549638/3329640 (76.57%)
	},
	media_embed: {
		content?: string|null, // 2549638/27814712 (9.17%)
		height?: number, // 2549638/27814712 (9.17%)
		scrolling?: boolean, // 2549638/27814712 (9.17%)
		width?: number, // 2549638/27814712 (9.17%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 13184/2165961 (0.61%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 2163393/2165961 (99.88%)
			hlsUrl?: string, // 13184/2165961 (0.61%)
			id?: string, // 2163393/2165961 (99.88%)
			isGif?: boolean, // 13184/2165961 (0.61%)
			m?: "image/jpg"|"image/png"|"image/gif", // 2150209/2165961 (99.27%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 472285/2165961 (21.80%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 2150209/2165961 (99.27%)
			s?: {
				gif?: string, // 9386/2150209 (0.44%)
				mp4?: string, // 9386/2150209 (0.44%)
				u?: string, // 2140823/2150209 (99.56%)
				x: number,
				y: number,
			}, // 2150209/2165961 (99.27%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 13184/2165961 (0.61%)
			y?: number, // 13184/2165961 (0.61%)
		},
	}|null, // 1254393/27814712 (4.51%)
	media_only: boolean,
	mobile_ad_url?: string, // 22447/27814712 (0.08%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 22447/27814712 (0.08%)
	outbound_link?: {
	}, // 22447/27814712 (0.08%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count: number,
		}[],
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 153631/27814712 (0.55%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 9830310/27814712 (35.34%)
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
				}, // 70298/9830310 (0.72%)
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
				}, // 70298/9830310 (0.72%)
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
				}, // 2274240/9830310 (23.13%)
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
				}, // 2319688/9830310 (23.60%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 100543/405188 (24.81%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 405188/9830310 (4.12%)
	}, // 9830310/27814712 (35.34%)
	priority_id?: null, // 22447/27814712 (0.08%)
	promoted?: boolean, // 22447/27814712 (0.08%)
	promoted_by?: null, // 22447/27814712 (0.08%)
	promoted_display_name?: null, // 22447/27814712 (0.08%)
	promoted_url?: null, // 22447/27814712 (0.08%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 44362/27814712 (0.16%)
	score: number,
	secure_media: null|{
		event_id?: string, // 46/3329640 (0.00%)
		oembed?: {
			author_name?: string, // 1564357/2549592 (61.36%)
			author_url?: string, // 1502188/2549592 (58.92%)
			cache_age?: number, // 275457/2549592 (10.80%)
			description?: string, // 356873/2549592 (14.00%)
			height?: number|null, // 2549580/2549592 (100.00%)
			html?: string, // 2549580/2549592 (100.00%)
			marginheight?: number, // 15/2549592 (0.00%)
			marginwidth?: number, // 15/2549592 (0.00%)
			mean_alpha?: number, // 6348/2549592 (0.25%)
			provider_name?: string, // 2549580/2549592 (100.00%)
			provider_url?: string, // 2549580/2549592 (100.00%)
			thumbnail_height?: number, // 1540373/2549592 (60.42%)
			thumbnail_url?: string, // 1541426/2549592 (60.46%)
			thumbnail_width?: number, // 1540373/2549592 (60.42%)
			title?: string, // 2271276/2549592 (89.08%)
			type?: "video"|"rich", // 2549580/2549592 (100.00%)
			url?: string, // 426717/2549592 (16.74%)
			version?: "1.0", // 2549565/2549592 (100.00%)
			width?: number, // 2549580/2549592 (100.00%)
		}, // 2549592/3329640 (76.57%)
		reddit_video?: {
			dash_url?: string, // 771974/780002 (98.97%)
			duration?: number, // 771974/780002 (98.97%)
			fallback_url?: string, // 771974/780002 (98.97%)
			height?: number, // 771974/780002 (98.97%)
			hls_url?: string, // 771974/780002 (98.97%)
			is_gif?: boolean, // 771974/780002 (98.97%)
			scrubber_media_url?: string, // 771974/780002 (98.97%)
			transcoding_message?: string, // 8028/780002 (1.03%)
			transcoding_status: "completed"|"error",
			width?: number, // 771974/780002 (98.97%)
		}, // 780002/3329640 (23.43%)
		type?: string, // 2549638/3329640 (76.57%)
	},
	secure_media_embed: {
		content?: string|null, // 2549638/27814712 (9.17%)
		height?: number, // 2549638/27814712 (9.17%)
		media_domain_url?: string, // 2549638/27814712 (9.17%)
		scrolling?: boolean, // 2549638/27814712 (9.17%)
		width?: number, // 2549638/27814712 (9.17%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 22447/27814712 (0.08%)
	sk_ad_network_data?: null, // 22447/27814712 (0.08%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 22447/27814712 (0.08%)
	third_party_tracking?: null, // 22447/27814712 (0.08%)
	third_party_tracking_2?: null, // 22447/27814712 (0.08%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:heartbeat"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 18097165/27814712 (65.06%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}