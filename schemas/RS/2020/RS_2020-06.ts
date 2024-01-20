interface RedditPost {
	adserver_click_url?: null, // 20311/27557757 (0.07%)
	adserver_imp_pixel?: null, // 20311/27557757 (0.07%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"GROUP"|"MODERATOR",
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
	author_cakeday?: boolean, // 305491/27557757 (1.11%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 796786/2223294 (35.84%)
		e: "text"|"emoji",
		t?: string, // 1426508/2223294 (64.16%)
		u?: string, // 796786/2223294 (35.84%)
	}[], // 19165068/27557757 (69.55%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 19165068/27557757 (69.55%)
	author_fullname?: string, // 19165068/27557757 (69.55%)
	author_id?: string|null, // 20311/27557757 (0.07%)
	author_patreon_flair?: boolean, // 19165068/27557757 (69.55%)
	author_premium?: boolean, // 19165068/27557757 (69.55%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Play Now"|"View More"|"Install"|"Watch Now"|"Apply Now"|"Get a Quote"|"Contact Us"|"See Menu"|"Get Showtimes"|"", // 18592/27557757 (0.07%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"diy_and_crafts"|""|"videos"|"memes"|"food"|"writing",
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
	}[], // 5352/27557757 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1205006/27557757 (4.37%)
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
		author_cakeday?: boolean, // 10927/1098513 (0.99%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 41660/111079 (37.50%)
			e: "text"|"emoji",
			t?: string, // 69419/111079 (62.50%)
			u?: string, // 41660/111079 (37.50%)
		}[], // 893237/1098513 (81.31%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 893237/1098513 (81.31%)
		author_fullname?: string, // 893237/1098513 (81.31%)
		author_patreon_flair?: boolean, // 893237/1098513 (81.31%)
		author_premium?: boolean, // 893237/1098513 (81.31%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"Install"|"Shop Now"|"Play Now"|"Download"|"Sign Up"|"Contact Us"|"View More"|"Apply Now", // 108/1098513 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"animals"|"photography"|"gaming"|"entertainment"|""|"diy_and_crafts"|"videos"|"memes"|"food",
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
		}[], // 893/1098513 (0.08%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 238/1098513 (0.02%)
		event_is_live?: boolean, // 238/1098513 (0.02%)
		event_start?: number, // 238/1098513 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 73005/1098513 (6.65%)
			gid_2?: number, // 72809/1098513 (6.63%)
			gid_3?: number, // 16578/1098513 (1.51%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
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
			a?: string, // 7433/147503 (5.04%)
			e: "text"|"emoji",
			t?: string, // 140070/147503 (94.96%)
			u?: string, // 7433/147503 (5.04%)
		}[],
		link_flair_template_id?: string, // 271103/1098513 (24.68%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "153yqc2y085rh"|"154s418zfbsvb"|"156qcqwq1lm6v", // 3/317391 (0.00%)
			oembed?: {
				author_name?: string, // 69489/197582 (35.17%)
				author_url?: string, // 46769/197582 (23.67%)
				cache_age?: number, // 4868/197582 (2.46%)
				description?: string, // 33258/197582 (16.83%)
				height?: number|null, // 197566/197582 (99.99%)
				html?: string, // 197566/197582 (99.99%)
				mean_alpha?: number, // 68/197582 (0.03%)
				provider_name?: string, // 197566/197582 (99.99%)
				provider_url?: string, // 197566/197582 (99.99%)
				thumbnail_height?: number, // 74543/197582 (37.73%)
				thumbnail_url?: string, // 74661/197582 (37.79%)
				thumbnail_width?: number, // 74543/197582 (37.73%)
				title?: string, // 192441/197582 (97.40%)
				type?: "video"|"rich", // 197566/197582 (99.99%)
				url?: string, // 12565/197582 (6.36%)
				version?: "1.0", // 197566/197582 (99.99%)
				width?: number, // 197566/197582 (99.99%)
			}, // 197582/317391 (62.25%)
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
			}, // 119806/317391 (37.75%)
			type?: string, // 197585/317391 (62.25%)
		},
		media_embed: {
			content?: string|null, // 197585/1098513 (17.99%)
			height?: number, // 197585/1098513 (17.99%)
			scrolling?: boolean, // 197585/1098513 (17.99%)
			width?: number, // 197585/1098513 (17.99%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 421/15830 (2.66%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 15818/15830 (99.92%)
				hlsUrl?: string, // 421/15830 (2.66%)
				id?: string, // 15818/15830 (99.92%)
				isGif?: boolean, // 421/15830 (2.66%)
				m?: "image/jpg"|"image/png"|"image/gif", // 15397/15830 (97.26%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 804/15830 (5.08%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 15397/15830 (97.26%)
				s?: {
					gif?: string, // 162/15397 (1.05%)
					mp4?: string, // 162/15397 (1.05%)
					u?: string, // 15235/15397 (98.95%)
					x: number,
					y: number,
				}, // 15397/15830 (97.26%)
				status: "valid"|"failed",
				x?: number, // 421/15830 (2.66%)
				y?: number, // 421/15830 (2.66%)
			},
		}|null, // 6597/1098513 (0.60%)
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
		}|null, // 2130/1098513 (0.19%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 775896/1098513 (70.63%)
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
					}, // 19597/775896 (2.53%)
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
					}, // 19597/775896 (2.53%)
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
					}, // 328064/775896 (42.28%)
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
					}, // 330343/775896 (42.58%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 48704/124631 (39.08%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 124631/775896 (16.06%)
		}, // 775896/1098513 (70.63%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 277/1098513 (0.03%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "153yqc2y085rh"|"154s418zfbsvb"|"156qcqwq1lm6v", // 3/317391 (0.00%)
			oembed?: {
				author_name?: string, // 69489/197582 (35.17%)
				author_url?: string, // 46769/197582 (23.67%)
				cache_age?: number, // 4868/197582 (2.46%)
				description?: string, // 33258/197582 (16.83%)
				height?: number|null, // 197566/197582 (99.99%)
				html?: string, // 197566/197582 (99.99%)
				mean_alpha?: number, // 68/197582 (0.03%)
				provider_name?: string, // 197566/197582 (99.99%)
				provider_url?: string, // 197566/197582 (99.99%)
				thumbnail_height?: number, // 74543/197582 (37.73%)
				thumbnail_url?: string, // 74661/197582 (37.79%)
				thumbnail_width?: number, // 74543/197582 (37.73%)
				title?: string, // 192441/197582 (97.40%)
				type?: "video"|"rich", // 197566/197582 (99.99%)
				url?: string, // 12565/197582 (6.36%)
				version?: "1.0", // 197566/197582 (99.99%)
				width?: number, // 197566/197582 (99.99%)
			}, // 197582/317391 (62.25%)
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
			}, // 119806/317391 (37.75%)
			type?: string, // 197585/317391 (62.25%)
		},
		secure_media_embed: {
			content?: string|null, // 197585/1098513 (17.99%)
			height?: number, // 197585/1098513 (17.99%)
			media_domain_url?: string, // 197585/1098513 (17.99%)
			scrolling?: boolean, // 197585/1098513 (17.99%)
			width?: number, // 197585/1098513 (17.99%)
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
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"random"|"live",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:redstar")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1016945/1098513 (92.57%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1205006/27557757 (4.37%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 20311/27557757 (0.07%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 20311/27557757 (0.07%)
	embed_url?: null|string, // 20311/27557757 (0.07%)
	event_end?: number, // 1787/27557757 (0.01%)
	event_is_live?: boolean, // 1787/27557757 (0.01%)
	event_start?: number, // 1787/27557757 (0.01%)
	events?: [], // 20311/27557757 (0.07%)
	eventsOnRender?: [], // 20311/27557757 (0.07%)
	gallery_data?: {
		items: {
			id: number,
			media_id: "zh1b5vm1nx751"|"e2sc7vm1nx751",
		}[],
	}, // 1/27557757 (0.00%)
	gilded: number,
	gildings: {
		gid_1?: number, // 45763/27557757 (0.17%)
		gid_2?: number, // 43622/27557757 (0.16%)
		gid_3?: number, // 6973/27557757 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 20311/27557757 (0.07%)
	id: string,
	impression_id?: null, // 20311/27557757 (0.07%)
	impression_id_str?: null, // 20311/27557757 (0.07%)
	is_blank?: boolean, // 20311/27557757 (0.07%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1/27557757 (0.00%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 252185/5467308 (4.61%)
		e: "text"|"emoji",
		t?: string, // 5215123/5467308 (95.39%)
		u?: string, // 252185/5467308 (4.61%)
	}[],
	link_flair_template_id?: string, // 7710885/27557757 (27.98%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 43/3131541 (0.00%)
		oembed?: {
			author_name?: string, // 1621781/2324709 (69.76%)
			author_url?: string, // 1535956/2324709 (66.07%)
			cache_age?: number, // 273065/2324709 (11.75%)
			description?: string, // 443508/2324709 (19.08%)
			height?: number|null, // 2324566/2324709 (99.99%)
			html?: string, // 2324566/2324709 (99.99%)
			mean_alpha?: number, // 6306/2324709 (0.27%)
			provider_name?: string, // 2324566/2324709 (99.99%)
			provider_url?: string, // 2324566/2324709 (99.99%)
			thumbnail_height?: number, // 1665652/2324709 (71.65%)
			thumbnail_url?: string, // 1667525/2324709 (71.73%)
			thumbnail_width?: number, // 1665652/2324709 (71.65%)
			title?: string, // 2048151/2324709 (88.10%)
			type?: "video"|"rich", // 2324566/2324709 (99.99%)
			url?: string, // 488974/2324709 (21.03%)
			version?: "1.0", // 2324566/2324709 (99.99%)
			width?: number, // 2324566/2324709 (99.99%)
		}, // 2324709/3131541 (74.24%)
		reddit_video?: {
			dash_url?: string, // 806163/806789 (99.92%)
			duration?: number, // 806163/806789 (99.92%)
			fallback_url?: string, // 806163/806789 (99.92%)
			height?: number, // 806163/806789 (99.92%)
			hls_url?: string, // 806163/806789 (99.92%)
			is_gif?: boolean, // 806163/806789 (99.92%)
			scrubber_media_url?: string, // 806163/806789 (99.92%)
			transcoding_message?: string, // 626/806789 (0.08%)
			transcoding_status: "completed"|"error",
			width?: number, // 806163/806789 (99.92%)
		}, // 806789/3131541 (25.76%)
		type?: string, // 2324752/3131541 (74.24%)
	},
	media_embed: {
		content?: string|null, // 2324752/27557757 (8.44%)
		height?: number, // 2324752/27557757 (8.44%)
		scrolling?: boolean, // 2324752/27557757 (8.44%)
		width?: number, // 2324752/27557757 (8.44%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 12164/277861 (4.38%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 277319/277861 (99.80%)
			hlsUrl?: string, // 12164/277861 (4.38%)
			id?: string, // 277319/277861 (99.80%)
			isGif?: boolean, // 12164/277861 (4.38%)
			m?: "image/jpg"|"image/png"|"image/gif", // 265155/277861 (95.43%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 14176/277861 (5.10%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 265155/277861 (95.43%)
			s?: {
				gif?: string, // 2816/265155 (1.06%)
				mp4?: string, // 2816/265155 (1.06%)
				u?: string, // 262339/265155 (98.94%)
				x: number,
				y: number,
			}, // 265155/277861 (95.43%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 12164/277861 (4.38%)
			y?: number, // 12164/277861 (4.38%)
		},
	}|null, // 300718/27557757 (1.09%)
	media_only: boolean,
	mobile_ad_url?: string, // 20311/27557757 (0.07%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 20311/27557757 (0.07%)
	outbound_link?: {
		created?: number, // 1/20311 (0.00%)
		expiration?: number, // 1/20311 (0.00%)
		url?: string, // 1/20311 (0.00%)
	}, // 20311/27557757 (0.07%)
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
	}|null, // 147019/27557757 (0.53%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 9710977/27557757 (35.24%)
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
				}, // 71576/9710977 (0.74%)
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
				}, // 71576/9710977 (0.74%)
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
				}, // 1726359/9710977 (17.78%)
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
				}, // 1772708/9710977 (18.25%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 71750/285712 (25.11%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 285712/9710977 (2.94%)
	}, // 9710977/27557757 (35.24%)
	priority_id?: null, // 20311/27557757 (0.07%)
	promoted?: boolean, // 20311/27557757 (0.07%)
	promoted_by?: null, // 20311/27557757 (0.07%)
	promoted_display_name?: null, // 20311/27557757 (0.07%)
	promoted_url?: null, // 20311/27557757 (0.07%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 49230/27557757 (0.18%)
	score: number,
	secure_media: null|{
		event_id?: string, // 43/3131541 (0.00%)
		oembed?: {
			author_name?: string, // 1621781/2324709 (69.76%)
			author_url?: string, // 1535956/2324709 (66.07%)
			cache_age?: number, // 273065/2324709 (11.75%)
			description?: string, // 443508/2324709 (19.08%)
			height?: number|null, // 2324566/2324709 (99.99%)
			html?: string, // 2324566/2324709 (99.99%)
			mean_alpha?: number, // 6306/2324709 (0.27%)
			provider_name?: string, // 2324566/2324709 (99.99%)
			provider_url?: string, // 2324566/2324709 (99.99%)
			thumbnail_height?: number, // 1665652/2324709 (71.65%)
			thumbnail_url?: string, // 1667525/2324709 (71.73%)
			thumbnail_width?: number, // 1665652/2324709 (71.65%)
			title?: string, // 2048151/2324709 (88.10%)
			type?: "video"|"rich", // 2324566/2324709 (99.99%)
			url?: string, // 488974/2324709 (21.03%)
			version?: "1.0", // 2324566/2324709 (99.99%)
			width?: number, // 2324566/2324709 (99.99%)
		}, // 2324709/3131541 (74.24%)
		reddit_video?: {
			dash_url?: string, // 806163/806789 (99.92%)
			duration?: number, // 806163/806789 (99.92%)
			fallback_url?: string, // 806163/806789 (99.92%)
			height?: number, // 806163/806789 (99.92%)
			hls_url?: string, // 806163/806789 (99.92%)
			is_gif?: boolean, // 806163/806789 (99.92%)
			scrubber_media_url?: string, // 806163/806789 (99.92%)
			transcoding_message?: string, // 626/806789 (0.08%)
			transcoding_status: "completed"|"error",
			width?: number, // 806163/806789 (99.92%)
		}, // 806789/3131541 (25.76%)
		type?: string, // 2324752/3131541 (74.24%)
	},
	secure_media_embed: {
		content?: string|null, // 2324752/27557757 (8.44%)
		height?: number, // 2324752/27557757 (8.44%)
		media_domain_url?: string, // 2324752/27557757 (8.44%)
		scrolling?: boolean, // 2324752/27557757 (8.44%)
		width?: number, // 2324752/27557757 (8.44%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 20311/27557757 (0.07%)
	sk_ad_network_data?: null, // 20311/27557757 (0.07%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted"|"employees_only",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 20311/27557757 (0.07%)
	third_party_tracking?: null, // 20311/27557757 (0.07%)
	third_party_tracking_2?: null, // 20311/27557757 (0.07%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:redstar"|"econ:render:lottie:heartbeat"|"econ:render:lottie:cutie")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 17055367/27557757 (61.89%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}