interface RedditPost {
	adserver_click_url?: null, // 24258/28002626 (0.09%)
	adserver_imp_pixel?: null, // 24258/28002626 (0.09%)
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
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 73638/28002626 (0.26%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 785419/2093033 (37.53%)
		e: "text"|"emoji",
		t?: string, // 1307614/2093033 (62.47%)
		u?: string, // 785419/2093033 (37.53%)
	}[], // 19966642/28002626 (71.30%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 19966642/28002626 (71.30%)
	author_fullname?: string, // 19966642/28002626 (71.30%)
	author_id?: string|null, // 24258/28002626 (0.09%)
	author_patreon_flair?: boolean, // 19966642/28002626 (71.30%)
	author_premium?: boolean, // 19966642/28002626 (71.30%)
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"Play Now"|"View More"|"Apply Now"|"Watch Now"|"Contact Us"|"Get a Quote"|"See Menu"|"Get Showtimes"|"", // 22348/28002626 (0.08%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"diy_and_crafts"|""|"videos"|"memes"|"food"|"writing"|"music",
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
	}[], // 6294/28002626 (0.02%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1577520/28002626 (5.63%)
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
		author_cakeday?: boolean, // 3261/1155097 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 40820/110014 (37.10%)
			e: "text"|"emoji",
			t?: string, // 69194/110014 (62.90%)
			u?: string, // 40820/110014 (37.10%)
		}[], // 958513/1155097 (82.98%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 958513/1155097 (82.98%)
		author_fullname?: string, // 958513/1155097 (82.98%)
		author_patreon_flair?: boolean, // 958513/1155097 (82.98%)
		author_premium?: boolean, // 958513/1155097 (82.98%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|""|"diy_and_crafts"|"memes"|"food",
		clicked: boolean,
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
		}[], // 1012/1155097 (0.09%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 227/1155097 (0.02%)
		event_is_live?: boolean, // 227/1155097 (0.02%)
		event_start?: number, // 227/1155097 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 18217/153529 (11.87%)
				id: number,
				media_id: string,
				outbound_url?: string, // 6778/153529 (4.41%)
			}[],
		}|null, // 47757/1155097 (4.13%)
		gilded: number,
		gildings: {
			gid_1?: number, // 277059/1155097 (23.99%)
			gid_2?: number, // 49075/1155097 (4.25%)
			gid_3?: number, // 13759/1155097 (1.19%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 47757/1155097 (4.13%)
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
			a?: string, // 14624/162808 (8.98%)
			e: "text"|"emoji",
			t?: string, // 148184/162808 (91.02%)
			u?: string, // 14624/162808 (8.98%)
		}[],
		link_flair_template_id?: string, // 299274/1155097 (25.91%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "15x0okshfyan8"|"15wqfyqc0nrr8"|"15x3z5c1eqm34"|"15oqe3rs08s69"|"15xiluubrthad", // 29/348333 (0.01%)
			oembed?: {
				author_name?: string, // 51760/232798 (22.23%)
				author_url?: string, // 38078/232798 (16.36%)
				cache_age?: number, // 5009/232798 (2.15%)
				description?: string, // 21812/232798 (9.37%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 68/232798 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 54123/232798 (23.25%)
				thumbnail_url?: string, // 54223/232798 (23.29%)
				thumbnail_width?: number, // 54123/232798 (23.25%)
				title?: string, // 227589/232798 (97.76%)
				type: "video"|"rich",
				url?: string, // 10607/232798 (4.56%)
				version: "1.0",
				width: number,
			}, // 232798/348333 (66.83%)
			reddit_video?: {
				bitrate_kbps?: number, // 44653/115506 (38.66%)
				dash_url?: string, // 115504/115506 (100.00%)
				duration?: number, // 115504/115506 (100.00%)
				fallback_url?: string, // 115504/115506 (100.00%)
				height?: number, // 115504/115506 (100.00%)
				hls_url?: string, // 115504/115506 (100.00%)
				is_gif?: boolean, // 115504/115506 (100.00%)
				scrubber_media_url?: string, // 115504/115506 (100.00%)
				transcoding_message?: string, // 2/115506 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 115504/115506 (100.00%)
			}, // 115506/348333 (33.16%)
			type?: string, // 232827/348333 (66.84%)
		},
		media_embed: {
			content?: string, // 232827/1155097 (20.16%)
			height?: number, // 232827/1155097 (20.16%)
			scrolling?: boolean, // 232827/1155097 (20.16%)
			width?: number, // 232827/1155097 (20.16%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 572/168143 (0.34%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 168036/168143 (99.94%)
				hlsUrl?: string, // 572/168143 (0.34%)
				id?: string, // 168036/168143 (99.94%)
				isGif?: boolean, // 572/168143 (0.34%)
				m?: "image/jpg"|"image/png"|"image/gif", // 167464/168143 (99.60%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 72581/168143 (43.17%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 167464/168143 (99.60%)
				s?: {
					gif?: string, // 1548/167464 (0.92%)
					mp4?: string, // 1548/167464 (0.92%)
					u?: string, // 165916/167464 (99.08%)
					x: number,
					y: number,
				}, // 167464/168143 (99.60%)
				status: "valid"|"failed",
				x?: number, // 572/168143 (0.34%)
				y?: number, // 572/168143 (0.34%)
			},
		}|null, // 53816/1155097 (4.66%)
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
				total_stake_amount?: number, // 20/6914 (0.29%)
				vote_count: number,
			}[],
			resolved_option_id: null|"3810135"|"4212669"|"4177995"|"4321188"|"4360242"|"4360186",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2163/1155097 (0.19%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 794578/1155097 (68.79%)
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
					}, // 17777/794578 (2.24%)
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
					}, // 17777/794578 (2.24%)
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
					}, // 385718/794578 (48.54%)
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
					}, // 388141/794578 (48.85%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 132352/166559 (79.46%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 166559/794578 (20.96%)
		}, // 794578/1155097 (68.79%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 311/1155097 (0.03%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "15x0okshfyan8"|"15wqfyqc0nrr8"|"15x3z5c1eqm34"|"15oqe3rs08s69"|"15xiluubrthad", // 29/348333 (0.01%)
			oembed?: {
				author_name?: string, // 51760/232798 (22.23%)
				author_url?: string, // 38078/232798 (16.36%)
				cache_age?: number, // 5009/232798 (2.15%)
				description?: string, // 21812/232798 (9.37%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 68/232798 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 54123/232798 (23.25%)
				thumbnail_url?: string, // 54223/232798 (23.29%)
				thumbnail_width?: number, // 54123/232798 (23.25%)
				title?: string, // 227589/232798 (97.76%)
				type: "video"|"rich",
				url?: string, // 10607/232798 (4.56%)
				version: "1.0",
				width: number,
			}, // 232798/348333 (66.83%)
			reddit_video?: {
				bitrate_kbps?: number, // 44653/115506 (38.66%)
				dash_url?: string, // 115504/115506 (100.00%)
				duration?: number, // 115504/115506 (100.00%)
				fallback_url?: string, // 115504/115506 (100.00%)
				height?: number, // 115504/115506 (100.00%)
				hls_url?: string, // 115504/115506 (100.00%)
				is_gif?: boolean, // 115504/115506 (100.00%)
				scrubber_media_url?: string, // 115504/115506 (100.00%)
				transcoding_message?: string, // 2/115506 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 115504/115506 (100.00%)
			}, // 115506/348333 (33.16%)
			type?: string, // 232827/348333 (66.84%)
		},
		secure_media_embed: {
			content?: string, // 232827/1155097 (20.16%)
			height?: number, // 232827/1155097 (20.16%)
			media_domain_url?: string, // 232827/1155097 (20.16%)
			scrolling?: boolean, // 232827/1155097 (20.16%)
			width?: number, // 232827/1155097 (20.16%)
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
		treatment_tags: ("econ:render:lottie:heartbeat"|"econ:render:lottie:sunny2"|"econ:render:lottie:cutie"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:halloween2020"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1080002/1155097 (93.50%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1577520/28002626 (5.63%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 24258/28002626 (0.09%)
	edited: boolean|number,
	embed_type?: null|"iframe", // 24258/28002626 (0.09%)
	embed_url?: null|string, // 24258/28002626 (0.09%)
	event_end?: number, // 1312/28002626 (0.00%)
	event_is_live?: boolean, // 1312/28002626 (0.00%)
	event_start?: number, // 1312/28002626 (0.00%)
	events?: [], // 24258/28002626 (0.09%)
	eventsOnRender?: [], // 24258/28002626 (0.09%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"View More"|"Download", // 699/2369913 (0.03%)
			caption?: string, // 259217/2369913 (10.94%)
			display_url?: string, // 662/2369913 (0.03%)
			id: number,
			media_id: string,
			outbound_url?: string, // 66440/2369913 (2.80%)
		}[],
	}|null, // 1162529/28002626 (4.15%)
	gilded: number,
	gildings: {
		gid_1?: number, // 389611/28002626 (1.39%)
		gid_2?: number, // 42477/28002626 (0.15%)
		gid_3?: number, // 8918/28002626 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 24258/28002626 (0.09%)
	id: string,
	impression_id?: null, // 24258/28002626 (0.09%)
	impression_id_str?: null, // 24258/28002626 (0.09%)
	is_blank?: boolean, // 24258/28002626 (0.09%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1162529/28002626 (4.15%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 383765/5533257 (6.94%)
		e: "text"|"emoji",
		t?: string, // 5149492/5533257 (93.06%)
		u?: string, // 383765/5533257 (6.94%)
	}[],
	link_flair_template_id?: string, // 8377574/28002626 (29.92%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 60/3365719 (0.00%)
		oembed?: {
			author_name?: string, // 1523040/2570909 (59.24%)
			author_url?: string, // 1445902/2570909 (56.24%)
			cache_age?: number, // 229305/2570909 (8.92%)
			description?: string, // 351194/2570909 (13.66%)
			height?: number|null, // 2570888/2570909 (100.00%)
			html?: string, // 2570888/2570909 (100.00%)
			marginheight?: number, // 6/2570909 (0.00%)
			marginwidth?: number, // 6/2570909 (0.00%)
			mean_alpha?: number, // 5649/2570909 (0.22%)
			provider_name?: string, // 2570888/2570909 (100.00%)
			provider_url?: string, // 2570888/2570909 (100.00%)
			thumbnail_height?: number, // 1533468/2570909 (59.65%)
			thumbnail_url?: string, // 1534723/2570909 (59.70%)
			thumbnail_width?: number, // 1533468/2570909 (59.65%)
			title?: string, // 2338272/2570909 (90.95%)
			type?: "video"|"rich", // 2570888/2570909 (100.00%)
			url?: string, // 372594/2570909 (14.49%)
			version?: "1.0", // 2570882/2570909 (100.00%)
			width?: number, // 2570888/2570909 (100.00%)
		}, // 2570909/3365719 (76.39%)
		reddit_video?: {
			bitrate_kbps?: number, // 347038/794750 (43.67%)
			dash_url?: string, // 787314/794750 (99.06%)
			duration?: number, // 787314/794750 (99.06%)
			fallback_url?: string, // 787314/794750 (99.06%)
			height?: number, // 787314/794750 (99.06%)
			hls_url?: string, // 787314/794750 (99.06%)
			is_gif?: boolean, // 787314/794750 (99.06%)
			scrubber_media_url?: string, // 787314/794750 (99.06%)
			transcoding_message?: string, // 7436/794750 (0.94%)
			transcoding_status: "completed"|"error",
			width?: number, // 787314/794750 (99.06%)
		}, // 794750/3365719 (23.61%)
		type?: string, // 2570969/3365719 (76.39%)
	},
	media_embed: {
		content?: string|null, // 2570969/28002626 (9.18%)
		height?: number, // 2570969/28002626 (9.18%)
		scrolling?: boolean, // 2570969/28002626 (9.18%)
		width?: number, // 2570969/28002626 (9.18%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 13768/2666609 (0.52%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 2662852/2666609 (99.86%)
			hlsUrl?: string, // 13768/2666609 (0.52%)
			id?: string, // 2662852/2666609 (99.86%)
			isGif?: boolean, // 13768/2666609 (0.52%)
			m?: "image/jpg"|"image/png"|"image/gif", // 2649084/2666609 (99.34%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 678560/2666609 (25.45%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 2649084/2666609 (99.34%)
			s?: {
				gif?: string, // 11430/2649084 (0.43%)
				mp4?: string, // 11430/2649084 (0.43%)
				u?: string, // 2637654/2649084 (99.57%)
				x: number,
				y: number,
			}, // 2649084/2666609 (99.34%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 13768/2666609 (0.52%)
			y?: number, // 13768/2666609 (0.52%)
		},
	}|null, // 1469736/28002626 (5.25%)
	media_only: boolean,
	mobile_ad_url?: string, // 24258/28002626 (0.09%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 24258/28002626 (0.09%)
	outbound_link?: {
	}, // 24258/28002626 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 179/399679 (0.04%)
			vote_count: number,
		}[],
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 176397/28002626 (0.63%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 9860840/28002626 (35.21%)
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
				}, // 81173/9860840 (0.82%)
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
				}, // 81173/9860840 (0.82%)
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
				}, // 2561059/9860840 (25.97%)
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
				}, // 2608120/9860840 (26.45%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 297711/420059 (70.87%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 420059/9860840 (4.26%)
	}, // 9860840/28002626 (35.21%)
	priority_id?: null, // 24258/28002626 (0.09%)
	promoted?: boolean, // 24258/28002626 (0.09%)
	promoted_by?: null, // 24258/28002626 (0.09%)
	promoted_display_name?: null, // 24258/28002626 (0.09%)
	promoted_url?: null, // 24258/28002626 (0.09%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 49047/28002626 (0.18%)
	score: number,
	secure_media: null|{
		event_id?: string, // 60/3365719 (0.00%)
		oembed?: {
			author_name?: string, // 1523040/2570909 (59.24%)
			author_url?: string, // 1445902/2570909 (56.24%)
			cache_age?: number, // 229305/2570909 (8.92%)
			description?: string, // 351194/2570909 (13.66%)
			height?: number|null, // 2570888/2570909 (100.00%)
			html?: string, // 2570888/2570909 (100.00%)
			marginheight?: number, // 6/2570909 (0.00%)
			marginwidth?: number, // 6/2570909 (0.00%)
			mean_alpha?: number, // 5649/2570909 (0.22%)
			provider_name?: string, // 2570888/2570909 (100.00%)
			provider_url?: string, // 2570888/2570909 (100.00%)
			thumbnail_height?: number, // 1533468/2570909 (59.65%)
			thumbnail_url?: string, // 1534723/2570909 (59.70%)
			thumbnail_width?: number, // 1533468/2570909 (59.65%)
			title?: string, // 2338272/2570909 (90.95%)
			type?: "video"|"rich", // 2570888/2570909 (100.00%)
			url?: string, // 372594/2570909 (14.49%)
			version?: "1.0", // 2570882/2570909 (100.00%)
			width?: number, // 2570888/2570909 (100.00%)
		}, // 2570909/3365719 (76.39%)
		reddit_video?: {
			bitrate_kbps?: number, // 347038/794750 (43.67%)
			dash_url?: string, // 787314/794750 (99.06%)
			duration?: number, // 787314/794750 (99.06%)
			fallback_url?: string, // 787314/794750 (99.06%)
			height?: number, // 787314/794750 (99.06%)
			hls_url?: string, // 787314/794750 (99.06%)
			is_gif?: boolean, // 787314/794750 (99.06%)
			scrubber_media_url?: string, // 787314/794750 (99.06%)
			transcoding_message?: string, // 7436/794750 (0.94%)
			transcoding_status: "completed"|"error",
			width?: number, // 787314/794750 (99.06%)
		}, // 794750/3365719 (23.61%)
		type?: string, // 2570969/3365719 (76.39%)
	},
	secure_media_embed: {
		content?: string|null, // 2570969/28002626 (9.18%)
		height?: number, // 2570969/28002626 (9.18%)
		media_domain_url?: string, // 2570969/28002626 (9.18%)
		scrolling?: boolean, // 2570969/28002626 (9.18%)
		width?: number, // 2570969/28002626 (9.18%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 24258/28002626 (0.09%)
	sk_ad_network_data?: null, // 24258/28002626 (0.09%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted"|"private",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 24258/28002626 (0.09%)
	third_party_tracking?: null, // 24258/28002626 (0.09%)
	third_party_tracking_2?: null, // 24258/28002626 (0.09%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:heartbeat"|"econ:render:lottie:cutie"|"econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:halloween2020")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 18369004/28002626 (65.60%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}