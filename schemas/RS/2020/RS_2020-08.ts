interface RedditPost {
	adserver_click_url?: null, // 19990/28883496 (0.07%)
	adserver_imp_pixel?: null, // 19990/28883496 (0.07%)
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
		giver_coin_reward: number|null,
		icon_format: "PNG"|"APNG"|"JPG"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: number|null,
		penny_price: number|null,
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
	author_cakeday?: boolean, // 121279/28883496 (0.42%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 828805/2268419 (36.54%)
		e: "text"|"emoji",
		t?: string, // 1439614/2268419 (63.46%)
		u?: string, // 828805/2268419 (36.54%)
	}[], // 20220424/28883496 (70.01%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 20220424/28883496 (70.01%)
	author_fullname?: string, // 20220424/28883496 (70.01%)
	author_id?: string|null, // 19990/28883496 (0.07%)
	author_patreon_flair?: boolean, // 20220424/28883496 (70.01%)
	author_premium?: boolean, // 20220424/28883496 (70.01%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"View More"|"Play Now"|"Install"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|"", // 18173/28883496 (0.06%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|""|"diy_and_crafts"|"videos"|"food"|"memes"|"music"|"writing",
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
	}[], // 5132/28883496 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1579862/28883496 (5.47%)
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
			giver_coin_reward: number|null,
			icon_format: "PNG"|"APNG"|"JPG"|null,
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: string,
			penny_donate: number|null,
			penny_price: number|null,
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
		author_cakeday?: boolean, // 6039/1172587 (0.52%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 46002/119411 (38.52%)
			e: "text"|"emoji",
			t?: string, // 73409/119411 (61.48%)
			u?: string, // 46002/119411 (38.52%)
		}[], // 964695/1172587 (82.27%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 964695/1172587 (82.27%)
		author_fullname?: string, // 964695/1172587 (82.27%)
		author_patreon_flair?: boolean, // 964695/1172587 (82.27%)
		author_premium?: boolean, // 964695/1172587 (82.27%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Shop Now"|"Learn More"|"Download"|"View More"|"Play Now"|"Install"|"Watch Now"|"Sign Up"|"Apply Now"|"Get Showtimes", // 134/1172587 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|""|"photography"|"animals"|"gaming"|"entertainment"|"food"|"videos"|"diy_and_crafts",
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
		}[], // 802/1172587 (0.07%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 254/1172587 (0.02%)
		event_is_live?: boolean, // 254/1172587 (0.02%)
		event_start?: number, // 254/1172587 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 13179/92642 (14.23%)
				id: number,
				media_id: string,
				outbound_url?: string, // 5509/92642 (5.95%)
			}[],
		}|null, // 31666/1172587 (2.70%)
		gilded: number,
		gildings: {
			gid_1?: number, // 58132/1172587 (4.96%)
			gid_2?: number, // 64054/1172587 (5.46%)
			gid_3?: number, // 17037/1172587 (1.45%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 31666/1172587 (2.70%)
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
			a?: string, // 13403/164796 (8.13%)
			e: "text"|"emoji",
			t?: string, // 151393/164796 (91.87%)
			u?: string, // 13403/164796 (8.13%)
		}[],
		link_flair_template_id?: string, // 292000/1172587 (24.90%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "15f2ihh9ug2ae"|"15ggcwtewxd1m"|"15hfrp31u0eb1"|"15hnfn8jwpucy"|"15hud0ympr0gz"|"15huvn2k2bcx4"|"15i91tiwl1qfc"|"15j8rihvf6gb3", // 8/340176 (0.00%)
			oembed?: {
				author_name?: string, // 56247/209896 (26.80%)
				author_url?: string, // 37347/209896 (17.79%)
				cache_age?: number, // 5491/209896 (2.62%)
				description?: string, // 27279/209896 (13.00%)
				height?: number|null, // 209892/209896 (100.00%)
				html?: string, // 209892/209896 (100.00%)
				mean_alpha?: number, // 67/209896 (0.03%)
				provider_name?: string, // 209892/209896 (100.00%)
				provider_url?: string, // 209892/209896 (100.00%)
				thumbnail_height?: number, // 58114/209896 (27.69%)
				thumbnail_url?: string, // 58241/209896 (27.75%)
				thumbnail_width?: number, // 58114/209896 (27.69%)
				title?: string, // 203812/209896 (97.10%)
				type?: "video"|"rich", // 209892/209896 (100.00%)
				url?: string, // 10916/209896 (5.20%)
				version?: "1.0", // 209892/209896 (100.00%)
				width?: number, // 209892/209896 (100.00%)
			}, // 209896/340176 (61.70%)
			reddit_video?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 130272/340176 (38.30%)
			type?: string, // 209904/340176 (61.70%)
		},
		media_embed: {
			content?: string|null, // 209904/1172587 (17.90%)
			height?: number, // 209904/1172587 (17.90%)
			scrolling?: boolean, // 209904/1172587 (17.90%)
			width?: number, // 209904/1172587 (17.90%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 813/109998 (0.74%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 109920/109998 (99.93%)
				hlsUrl?: string, // 813/109998 (0.74%)
				id?: string, // 109920/109998 (99.93%)
				isGif?: boolean, // 813/109998 (0.74%)
				m?: "image/jpg"|"image/png"|"image/gif", // 109107/109998 (99.19%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 37128/109998 (33.75%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 109107/109998 (99.19%)
				s?: {
					gif?: string, // 704/109107 (0.65%)
					mp4?: string, // 704/109107 (0.65%)
					u?: string, // 108403/109107 (99.35%)
					x: number,
					y: number,
				}, // 109107/109998 (99.19%)
				status: "valid"|"failed",
				x?: number, // 813/109998 (0.74%)
				y?: number, // 813/109998 (0.74%)
			},
		}|null, // 38842/1172587 (3.31%)
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
				vote_count: number,
			}[],
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2140/1172587 (0.18%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 820465/1172587 (69.97%)
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
					}, // 21661/820465 (2.64%)
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
					}, // 21661/820465 (2.64%)
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
					}, // 370703/820465 (45.18%)
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
					}, // 373199/820465 (45.49%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 66305/151201 (43.85%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 151201/820465 (18.43%)
		}, // 820465/1172587 (69.97%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 245/1172587 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "15f2ihh9ug2ae"|"15ggcwtewxd1m"|"15hfrp31u0eb1"|"15hnfn8jwpucy"|"15hud0ympr0gz"|"15huvn2k2bcx4"|"15i91tiwl1qfc"|"15j8rihvf6gb3", // 8/340176 (0.00%)
			oembed?: {
				author_name?: string, // 56247/209896 (26.80%)
				author_url?: string, // 37347/209896 (17.79%)
				cache_age?: number, // 5491/209896 (2.62%)
				description?: string, // 27279/209896 (13.00%)
				height?: number|null, // 209892/209896 (100.00%)
				html?: string, // 209892/209896 (100.00%)
				mean_alpha?: number, // 67/209896 (0.03%)
				provider_name?: string, // 209892/209896 (100.00%)
				provider_url?: string, // 209892/209896 (100.00%)
				thumbnail_height?: number, // 58114/209896 (27.69%)
				thumbnail_url?: string, // 58241/209896 (27.75%)
				thumbnail_width?: number, // 58114/209896 (27.69%)
				title?: string, // 203812/209896 (97.10%)
				type?: "video"|"rich", // 209892/209896 (100.00%)
				url?: string, // 10916/209896 (5.20%)
				version?: "1.0", // 209892/209896 (100.00%)
				width?: number, // 209892/209896 (100.00%)
			}, // 209896/340176 (61.70%)
			reddit_video?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 130272/340176 (38.30%)
			type?: string, // 209904/340176 (61.70%)
		},
		secure_media_embed: {
			content?: string|null, // 209904/1172587 (17.90%)
			height?: number, // 209904/1172587 (17.90%)
			media_domain_url?: string, // 209904/1172587 (17.90%)
			scrolling?: boolean, // 209904/1172587 (17.90%)
			width?: number, // 209904/1172587 (17.90%)
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
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1087290/1172587 (92.73%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1579862/28883496 (5.47%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 19990/28883496 (0.07%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 19990/28883496 (0.07%)
	embed_url?: null|string, // 19990/28883496 (0.07%)
	event_end?: number, // 1567/28883496 (0.01%)
	event_is_live?: boolean, // 1567/28883496 (0.01%)
	event_start?: number, // 1567/28883496 (0.01%)
	events?: [], // 19990/28883496 (0.07%)
	eventsOnRender?: [], // 19990/28883496 (0.07%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"View More"|"Learn More"|"Install"|"Get a Quote"|"Download"|"Watch Now", // 25/1556201 (0.00%)
			caption?: string, // 174963/1556201 (11.24%)
			display_url?: string, // 41/1556201 (0.00%)
			id: number,
			media_id: string,
			outbound_url?: string, // 38564/1556201 (2.48%)
		}[],
	}|null, // 837318/28883496 (2.90%)
	gilded: number,
	gildings: {
		gid_1?: number, // 43727/28883496 (0.15%)
		gid_2?: number, // 46711/28883496 (0.16%)
		gid_3?: number, // 8819/28883496 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 19990/28883496 (0.07%)
	id: string,
	impression_id?: null, // 19990/28883496 (0.07%)
	impression_id_str?: null, // 19990/28883496 (0.07%)
	is_blank?: boolean, // 19990/28883496 (0.07%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 837318/28883496 (2.90%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 283129/5586511 (5.07%)
		e: "text"|"emoji",
		t?: string, // 5303382/5586511 (94.93%)
		u?: string, // 283129/5586511 (5.07%)
	}[],
	link_flair_template_id?: string, // 8319074/28883496 (28.80%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 60/3465298 (0.00%)
		oembed?: {
			author_name?: string, // 1638994/2578381 (63.57%)
			author_url?: string, // 1568807/2578381 (60.84%)
			cache_age?: number, // 300936/2578381 (11.67%)
			description?: string, // 360143/2578381 (13.97%)
			height?: number|null, // 2578364/2578381 (100.00%)
			html?: string, // 2578364/2578381 (100.00%)
			marginheight?: number, // 4/2578381 (0.00%)
			marginwidth?: number, // 4/2578381 (0.00%)
			mean_alpha?: number, // 7302/2578381 (0.28%)
			provider_name?: string, // 2578364/2578381 (100.00%)
			provider_url?: string, // 2578364/2578381 (100.00%)
			thumbnail_height?: number, // 1581733/2578381 (61.35%)
			thumbnail_url?: string, // 1583020/2578381 (61.40%)
			thumbnail_width?: number, // 1581733/2578381 (61.35%)
			title?: string, // 2267178/2578381 (87.93%)
			type?: "video"|"rich", // 2578364/2578381 (100.00%)
			url?: string, // 448336/2578381 (17.39%)
			version?: "1.0", // 2578360/2578381 (100.00%)
			width?: number, // 2578364/2578381 (100.00%)
		}, // 2578381/3465298 (74.41%)
		reddit_video?: {
			dash_url?: string, // 884818/886857 (99.77%)
			duration?: number, // 884818/886857 (99.77%)
			fallback_url?: string, // 884818/886857 (99.77%)
			height?: number, // 884818/886857 (99.77%)
			hls_url?: string, // 884818/886857 (99.77%)
			is_gif?: boolean, // 884818/886857 (99.77%)
			scrubber_media_url?: string, // 884818/886857 (99.77%)
			transcoding_message?: string, // 2039/886857 (0.23%)
			transcoding_status: "completed"|"error",
			width?: number, // 884818/886857 (99.77%)
		}, // 886857/3465298 (25.59%)
		type?: string, // 2578441/3465298 (74.41%)
	},
	media_embed: {
		content?: string|null, // 2578441/28883496 (8.93%)
		height?: number, // 2578441/28883496 (8.93%)
		scrolling?: boolean, // 2578441/28883496 (8.93%)
		width?: number, // 2578441/28883496 (8.93%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14835/1849921 (0.80%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 1847667/1849921 (99.88%)
			hlsUrl?: string, // 14835/1849921 (0.80%)
			id?: string, // 1847667/1849921 (99.88%)
			isGif?: boolean, // 14835/1849921 (0.80%)
			m?: "image/jpg"|"image/png"|"image/gif", // 1832832/1849921 (99.08%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 328188/1849921 (17.74%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1832832/1849921 (99.08%)
			s?: {
				gif?: string, // 7555/1832832 (0.41%)
				mp4?: string, // 7555/1832832 (0.41%)
				u?: string, // 1825277/1832832 (99.59%)
				x: number,
				y: number,
			}, // 1832832/1849921 (99.08%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 14835/1849921 (0.80%)
			y?: number, // 14835/1849921 (0.80%)
		},
	}|null, // 1149273/28883496 (3.98%)
	media_only: boolean,
	mobile_ad_url?: string, // 19990/28883496 (0.07%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 19990/28883496 (0.07%)
	outbound_link?: {
		created?: null, // 1/19990 (0.01%)
		expiration?: null, // 1/19990 (0.01%)
		url?: "https://www.reddit.com/gallery/i3nne3", // 1/19990 (0.01%)
	}, // 19990/28883496 (0.07%)
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
	}|null, // 155522/28883496 (0.54%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 10174838/28883496 (35.23%)
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
				}, // 73442/10174838 (0.72%)
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
				}, // 73442/10174838 (0.72%)
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
				}, // 2174753/10174838 (21.37%)
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
				}, // 2225783/10174838 (21.88%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 100419/405815 (24.75%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 405815/10174838 (3.99%)
	}, // 10174838/28883496 (35.23%)
	priority_id?: null, // 19990/28883496 (0.07%)
	promoted?: boolean, // 19990/28883496 (0.07%)
	promoted_by?: null, // 19990/28883496 (0.07%)
	promoted_display_name?: null, // 19990/28883496 (0.07%)
	promoted_url?: null, // 19990/28883496 (0.07%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 45008/28883496 (0.16%)
	score: number,
	secure_media: null|{
		event_id?: string, // 60/3465298 (0.00%)
		oembed?: {
			author_name?: string, // 1638994/2578381 (63.57%)
			author_url?: string, // 1568807/2578381 (60.84%)
			cache_age?: number, // 300936/2578381 (11.67%)
			description?: string, // 360143/2578381 (13.97%)
			height?: number|null, // 2578364/2578381 (100.00%)
			html?: string, // 2578364/2578381 (100.00%)
			marginheight?: number, // 4/2578381 (0.00%)
			marginwidth?: number, // 4/2578381 (0.00%)
			mean_alpha?: number, // 7302/2578381 (0.28%)
			provider_name?: string, // 2578364/2578381 (100.00%)
			provider_url?: string, // 2578364/2578381 (100.00%)
			thumbnail_height?: number, // 1581733/2578381 (61.35%)
			thumbnail_url?: string, // 1583020/2578381 (61.40%)
			thumbnail_width?: number, // 1581733/2578381 (61.35%)
			title?: string, // 2267178/2578381 (87.93%)
			type?: "video"|"rich", // 2578364/2578381 (100.00%)
			url?: string, // 448336/2578381 (17.39%)
			version?: "1.0", // 2578360/2578381 (100.00%)
			width?: number, // 2578364/2578381 (100.00%)
		}, // 2578381/3465298 (74.41%)
		reddit_video?: {
			dash_url?: string, // 884818/886857 (99.77%)
			duration?: number, // 884818/886857 (99.77%)
			fallback_url?: string, // 884818/886857 (99.77%)
			height?: number, // 884818/886857 (99.77%)
			hls_url?: string, // 884818/886857 (99.77%)
			is_gif?: boolean, // 884818/886857 (99.77%)
			scrubber_media_url?: string, // 884818/886857 (99.77%)
			transcoding_message?: string, // 2039/886857 (0.23%)
			transcoding_status: "completed"|"error",
			width?: number, // 884818/886857 (99.77%)
		}, // 886857/3465298 (25.59%)
		type?: string, // 2578441/3465298 (74.41%)
	},
	secure_media_embed: {
		content?: string|null, // 2578441/28883496 (8.93%)
		height?: number, // 2578441/28883496 (8.93%)
		media_domain_url?: string, // 2578441/28883496 (8.93%)
		scrolling?: boolean, // 2578441/28883496 (8.93%)
		width?: number, // 2578441/28883496 (8.93%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 19990/28883496 (0.07%)
	sk_ad_network_data?: null, // 19990/28883496 (0.07%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted"|"employees_only",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 19990/28883496 (0.07%)
	third_party_tracking?: null, // 19990/28883496 (0.07%)
	third_party_tracking_2?: null, // 19990/28883496 (0.07%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:redstar"|"econ:render:lottie:heartbeat"|"econ:render:lottie:cutie"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 18499142/28883496 (64.05%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}