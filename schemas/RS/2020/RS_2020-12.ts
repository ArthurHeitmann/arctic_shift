interface RedditPost {
	adserver_click_url?: null, // 22202/29695450 (0.07%)
	adserver_imp_pixel?: null, // 22202/29695450 (0.07%)
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
	author_cakeday?: boolean, // 92399/29695450 (0.31%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 798684/2141078 (37.30%)
		e: "text"|"emoji",
		t?: string, // 1342394/2141078 (62.70%)
		u?: string, // 798684/2141078 (37.30%)
	}[], // 21376444/29695450 (71.99%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 21376444/29695450 (71.99%)
	author_fullname?: string, // 21376444/29695450 (71.99%)
	author_id?: string|null, // 22202/29695450 (0.07%)
	author_patreon_flair?: boolean, // 21376444/29695450 (71.99%)
	author_premium?: boolean, // 21376444/29695450 (71.99%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Install"|"View More"|"Play Now"|"Apply Now"|"Watch Now"|"Get a Quote"|"Contact Us"|"See Menu"|"Get Showtimes"|"", // 20228/29695450 (0.07%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"diy_and_crafts"|""|"videos"|"food"|"memes"|"writing"|"funny",
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
	}[], // 6855/29695450 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"entertainment"|"gaming"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1465303/29695450 (4.93%)
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
		author_cakeday?: boolean, // 4145/1173186 (0.35%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 39977/106696 (37.47%)
			e: "text"|"emoji",
			t?: string, // 66719/106696 (62.53%)
			u?: string, // 39977/106696 (37.47%)
		}[], // 975186/1173186 (83.12%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 975186/1173186 (83.12%)
		author_fullname?: string, // 975186/1173186 (83.12%)
		author_patreon_flair?: boolean, // 975186/1173186 (83.12%)
		author_premium?: boolean, // 975186/1173186 (83.12%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"animals"|"photography"|"gaming"|"diy_and_crafts"|"entertainment"|"funny"|""|"memes",
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
		}[], // 1196/1173186 (0.10%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 171/1173186 (0.01%)
		event_is_live?: boolean, // 171/1173186 (0.01%)
		event_start?: number, // 171/1173186 (0.01%)
		gallery_data?: {
			items: {
				caption?: string, // 21026/177625 (11.84%)
				display_url?: "bestbuy.com", // 3/177625 (0.00%)
				id: number,
				media_id: string,
				outbound_url?: string, // 7252/177625 (4.08%)
			}[],
		}|null, // 54192/1173186 (4.62%)
		gilded: number,
		gildings: {
			gid_1?: number, // 297433/1173186 (25.35%)
			gid_2?: number, // 46668/1173186 (3.98%)
			gid_3?: number, // 13385/1173186 (1.14%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 54192/1173186 (4.62%)
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
			a?: string, // 13533/159658 (8.48%)
			e: "text"|"emoji",
			t?: string, // 146125/159658 (91.52%)
			u?: string, // 13533/159658 (8.48%)
		}[],
		link_flair_template_id?: string, // 307130/1173186 (26.18%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "166tu37ksfs29"|"1676cpboehveb", // 2/372495 (0.00%)
			oembed?: {
				author_name?: string, // 50882/260968 (19.50%)
				author_url?: string, // 38956/260968 (14.93%)
				cache_age?: number, // 5017/260968 (1.92%)
				description?: string, // 20484/260968 (7.85%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 78/260968 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 53693/260968 (20.57%)
				thumbnail_url?: string, // 53760/260968 (20.60%)
				thumbnail_width?: number, // 53693/260968 (20.57%)
				title?: string, // 255666/260968 (97.97%)
				type: "video"|"rich",
				url?: string, // 11141/260968 (4.27%)
				version: "1.0",
				width: number,
			}, // 260968/372495 (70.06%)
			reddit_video?: {
				bitrate_kbps?: number, // 104997/111525 (94.15%)
				dash_url?: string, // 111523/111525 (100.00%)
				duration?: number, // 111523/111525 (100.00%)
				fallback_url?: string, // 111523/111525 (100.00%)
				height?: number, // 111523/111525 (100.00%)
				hls_url?: string, // 111523/111525 (100.00%)
				is_gif?: boolean, // 111523/111525 (100.00%)
				scrubber_media_url?: string, // 111523/111525 (100.00%)
				transcoding_message?: string, // 2/111525 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 111523/111525 (100.00%)
			}, // 111525/372495 (29.94%)
			type?: string, // 260970/372495 (70.06%)
		},
		media_embed: {
			content?: string, // 260970/1173186 (22.24%)
			height?: number, // 260970/1173186 (22.24%)
			scrolling?: boolean, // 260970/1173186 (22.24%)
			width?: number, // 260970/1173186 (22.24%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 384/193449 (0.20%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 193284/193449 (99.91%)
				hlsUrl?: string, // 384/193449 (0.20%)
				id?: string, // 193284/193449 (99.91%)
				isGif?: boolean, // 384/193449 (0.20%)
				m?: "image/jpg"|"image/png"|"image/gif", // 192900/193449 (99.72%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 94726/193449 (48.97%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 192900/193449 (99.72%)
				s?: {
					gif?: string, // 2054/192900 (1.06%)
					mp4?: string, // 2054/192900 (1.06%)
					u?: string, // 190846/192900 (98.94%)
					x: number,
					y: number,
				}, // 192900/193449 (99.72%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 384/193449 (0.20%)
				y?: number, // 384/193449 (0.20%)
			},
		}|null, // 60529/1173186 (5.16%)
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
				total_stake_amount?: number, // 5/6930 (0.07%)
				vote_count: number,
			}[],
			resolved_option_id: null|"4461315"|"4461715",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2198/1173186 (0.19%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 805990/1173186 (68.70%)
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
					}, // 20588/805990 (2.55%)
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
					}, // 20588/805990 (2.55%)
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
					}, // 404791/805990 (50.22%)
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
					}, // 407606/805990 (50.57%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 178895/179933 (99.42%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 179933/805990 (22.32%)
		}, // 805990/1173186 (68.70%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"automod_filtered"|"anti_evil_ops"|"content_takedown",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 379/1173186 (0.03%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "166tu37ksfs29"|"1676cpboehveb", // 2/372495 (0.00%)
			oembed?: {
				author_name?: string, // 50882/260968 (19.50%)
				author_url?: string, // 38956/260968 (14.93%)
				cache_age?: number, // 5017/260968 (1.92%)
				description?: string, // 20484/260968 (7.85%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 78/260968 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 53693/260968 (20.57%)
				thumbnail_url?: string, // 53760/260968 (20.60%)
				thumbnail_width?: number, // 53693/260968 (20.57%)
				title?: string, // 255666/260968 (97.97%)
				type: "video"|"rich",
				url?: string, // 11141/260968 (4.27%)
				version: "1.0",
				width: number,
			}, // 260968/372495 (70.06%)
			reddit_video?: {
				bitrate_kbps?: number, // 104997/111525 (94.15%)
				dash_url?: string, // 111523/111525 (100.00%)
				duration?: number, // 111523/111525 (100.00%)
				fallback_url?: string, // 111523/111525 (100.00%)
				height?: number, // 111523/111525 (100.00%)
				hls_url?: string, // 111523/111525 (100.00%)
				is_gif?: boolean, // 111523/111525 (100.00%)
				scrubber_media_url?: string, // 111523/111525 (100.00%)
				transcoding_message?: string, // 2/111525 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 111523/111525 (100.00%)
			}, // 111525/372495 (29.94%)
			type?: string, // 260970/372495 (70.06%)
		},
		secure_media_embed: {
			content?: string, // 260970/1173186 (22.24%)
			height?: number, // 260970/1173186 (22.24%)
			media_domain_url?: string, // 260970/1173186 (22.24%)
			scrolling?: boolean, // 260970/1173186 (22.24%)
			width?: number, // 260970/1173186 (22.24%)
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
		treatment_tags: ("econ:render:lottie:cutie"|"econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:heartbeat"|"econ:render:lottie:bulb"|"econ:render:lottie:champagne"|"econ:render:lottie:santasnoo"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:halloween2020")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1094991/1173186 (93.33%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1465303/29695450 (4.93%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 22202/29695450 (0.07%)
	edited: boolean|number,
	embed_type?: null, // 22202/29695450 (0.07%)
	embed_url?: null, // 22202/29695450 (0.07%)
	event_end?: number, // 1357/29695450 (0.00%)
	event_is_live?: boolean, // 1357/29695450 (0.00%)
	event_start?: number, // 1357/29695450 (0.00%)
	events?: [], // 22202/29695450 (0.07%)
	eventsOnRender?: [], // 22202/29695450 (0.07%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Watch Now"|"Learn More"|"Install"|"Play Now"|"Download"|"Sign Up"|"View More", // 233/2681877 (0.01%)
			caption?: string, // 289583/2681877 (10.80%)
			display_url?: string, // 228/2681877 (0.01%)
			id: number,
			media_id: string,
			outbound_url?: string, // 68168/2681877 (2.54%)
		}[],
	}|null, // 1332319/29695450 (4.49%)
	gilded: number,
	gildings: {
		gid_1?: number, // 524733/29695450 (1.77%)
		gid_2?: number, // 46306/29695450 (0.16%)
		gid_3?: number, // 10372/29695450 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 22202/29695450 (0.07%)
	id: string,
	impression_id?: null, // 22202/29695450 (0.07%)
	impression_id_str?: null, // 22202/29695450 (0.07%)
	is_blank?: boolean, // 22202/29695450 (0.07%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1332319/29695450 (4.49%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 384800/5748061 (6.69%)
		e: "text"|"emoji",
		t?: string, // 5363261/5748061 (93.31%)
		u?: string, // 384800/5748061 (6.69%)
	}[],
	link_flair_template_id?: string, // 8811656/29695450 (29.67%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 86/3538535 (0.00%)
		oembed?: {
			author_name?: string, // 1571509/2687966 (58.46%)
			author_url?: string, // 1482846/2687966 (55.17%)
			cache_age?: number, // 201832/2687966 (7.51%)
			description?: string, // 367120/2687966 (13.66%)
			height?: number|null, // 2687934/2687966 (100.00%)
			html?: string, // 2687934/2687966 (100.00%)
			mean_alpha?: number, // 4885/2687966 (0.18%)
			provider_name?: string, // 2687934/2687966 (100.00%)
			provider_url?: string, // 2687934/2687966 (100.00%)
			thumbnail_height?: number, // 1611740/2687966 (59.96%)
			thumbnail_url?: string, // 1612699/2687966 (60.00%)
			thumbnail_width?: number, // 1611740/2687966 (59.96%)
			title?: string, // 2480673/2687966 (92.29%)
			type?: "video"|"rich", // 2687934/2687966 (100.00%)
			url?: string, // 351726/2687966 (13.09%)
			version?: "1.0", // 2687934/2687966 (100.00%)
			width?: number, // 2687934/2687966 (100.00%)
		}, // 2687966/3538535 (75.96%)
		reddit_video?: {
			bitrate_kbps?: number, // 842398/850483 (99.05%)
			dash_url?: string, // 842404/850483 (99.05%)
			duration?: number, // 842404/850483 (99.05%)
			fallback_url?: string, // 842404/850483 (99.05%)
			height?: number, // 842404/850483 (99.05%)
			hls_url?: string, // 842404/850483 (99.05%)
			is_gif?: boolean, // 842404/850483 (99.05%)
			scrubber_media_url?: string, // 842404/850483 (99.05%)
			transcoding_message?: string, // 8079/850483 (0.95%)
			transcoding_status: "completed"|"error",
			width?: number, // 842404/850483 (99.05%)
		}, // 850483/3538535 (24.03%)
		type?: string, // 2688052/3538535 (75.97%)
	},
	media_embed: {
		content?: string|null, // 2688052/29695450 (9.05%)
		height?: number, // 2688052/29695450 (9.05%)
		scrolling?: boolean, // 2688052/29695450 (9.05%)
		width?: number, // 2688052/29695450 (9.05%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14941/3010092 (0.50%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 3001308/3010092 (99.71%)
			hlsUrl?: string, // 14941/3010092 (0.50%)
			id?: string, // 3001308/3010092 (99.71%)
			isGif?: boolean, // 14941/3010092 (0.50%)
			m?: "image/jpg"|"image/png"|"image/gif", // 2986367/3010092 (99.21%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 813233/3010092 (27.02%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 2986367/3010092 (99.21%)
			s?: {
				gif?: string, // 14508/2986367 (0.49%)
				mp4?: string, // 14508/2986367 (0.49%)
				u?: string, // 2971859/2986367 (99.51%)
				x: number,
				y: number,
			}, // 2986367/3010092 (99.21%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 14941/3010092 (0.50%)
			y?: number, // 14941/3010092 (0.50%)
		},
	}|null, // 1670070/29695450 (5.62%)
	media_only: boolean,
	mobile_ad_url?: string, // 22202/29695450 (0.07%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 22202/29695450 (0.07%)
	outbound_link?: {
	}, // 22202/29695450 (0.07%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 194/413918 (0.05%)
			vote_count: number,
		}[],
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 176738/29695450 (0.60%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 10814902/29695450 (36.42%)
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
				}, // 90326/10814902 (0.84%)
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
				}, // 90326/10814902 (0.84%)
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
				}, // 2927034/10814902 (27.06%)
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
				}, // 2986786/10814902 (27.62%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 526339/527497 (99.78%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 527497/10814902 (4.88%)
	}, // 10814902/29695450 (36.42%)
	priority_id?: null, // 22202/29695450 (0.07%)
	promoted?: boolean, // 22202/29695450 (0.07%)
	promoted_by?: null, // 22202/29695450 (0.07%)
	promoted_display_name?: null, // 22202/29695450 (0.07%)
	promoted_url?: null, // 22202/29695450 (0.07%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 47750/29695450 (0.16%)
	score: number,
	secure_media: null|{
		event_id?: string, // 86/3538535 (0.00%)
		oembed?: {
			author_name?: string, // 1571509/2687966 (58.46%)
			author_url?: string, // 1482846/2687966 (55.17%)
			cache_age?: number, // 201832/2687966 (7.51%)
			description?: string, // 367120/2687966 (13.66%)
			height?: number|null, // 2687934/2687966 (100.00%)
			html?: string, // 2687934/2687966 (100.00%)
			mean_alpha?: number, // 4885/2687966 (0.18%)
			provider_name?: string, // 2687934/2687966 (100.00%)
			provider_url?: string, // 2687934/2687966 (100.00%)
			thumbnail_height?: number, // 1611740/2687966 (59.96%)
			thumbnail_url?: string, // 1612699/2687966 (60.00%)
			thumbnail_width?: number, // 1611740/2687966 (59.96%)
			title?: string, // 2480673/2687966 (92.29%)
			type?: "video"|"rich", // 2687934/2687966 (100.00%)
			url?: string, // 351726/2687966 (13.09%)
			version?: "1.0", // 2687934/2687966 (100.00%)
			width?: number, // 2687934/2687966 (100.00%)
		}, // 2687966/3538535 (75.96%)
		reddit_video?: {
			bitrate_kbps?: number, // 842398/850483 (99.05%)
			dash_url?: string, // 842404/850483 (99.05%)
			duration?: number, // 842404/850483 (99.05%)
			fallback_url?: string, // 842404/850483 (99.05%)
			height?: number, // 842404/850483 (99.05%)
			hls_url?: string, // 842404/850483 (99.05%)
			is_gif?: boolean, // 842404/850483 (99.05%)
			scrubber_media_url?: string, // 842404/850483 (99.05%)
			transcoding_message?: string, // 8079/850483 (0.95%)
			transcoding_status: "completed"|"error",
			width?: number, // 842404/850483 (99.05%)
		}, // 850483/3538535 (24.03%)
		type?: string, // 2688052/3538535 (75.97%)
	},
	secure_media_embed: {
		content?: string|null, // 2688052/29695450 (9.05%)
		height?: number, // 2688052/29695450 (9.05%)
		media_domain_url?: string, // 2688052/29695450 (9.05%)
		scrolling?: boolean, // 2688052/29695450 (9.05%)
		width?: number, // 2688052/29695450 (9.05%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 22202/29695450 (0.07%)
	sk_ad_network_data?: null, // 22202/29695450 (0.07%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted"|"private",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 22202/29695450 (0.07%)
	third_party_tracking?: null, // 22202/29695450 (0.07%)
	third_party_tracking_2?: null, // 22202/29695450 (0.07%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:cutie"|"econ:render:lottie:sunny2"|"econ:render:lottie:heartbeat"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:champagne"|"econ:render:lottie:santasnoo")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 19765061/29695450 (66.56%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}