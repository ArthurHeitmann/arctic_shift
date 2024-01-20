interface RedditPost {
	adserver_click_url?: null, // 20485/28297185 (0.07%)
	adserver_imp_pixel?: null, // 20485/28297185 (0.07%)
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
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 42296/28297185 (0.15%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 800851/2356573 (33.98%)
		e: "text"|"emoji",
		t?: string, // 1555722/2356573 (66.02%)
		u?: string, // 800851/2356573 (33.98%)
	}[], // 19561703/28297185 (69.13%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 19561703/28297185 (69.13%)
	author_fullname?: string, // 19561703/28297185 (69.13%)
	author_id?: string|null, // 20485/28297185 (0.07%)
	author_patreon_flair?: boolean, // 19561703/28297185 (69.13%)
	author_premium?: boolean, // 19561703/28297185 (69.13%)
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Play Now"|"View More"|"Install"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"See Menu"|""|"Get Showtimes", // 18162/28297185 (0.06%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"entertainment"|"animals"|""|"diy_and_crafts"|"videos"|"memes"|"writing"|"funny"|"music"|"food",
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
	}[], // 5898/28297185 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"entertainment"|"gaming"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1115423/28297185 (3.94%)
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
		author_cakeday?: boolean, // 2963/1027305 (0.29%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 38362/100715 (38.09%)
			e: "text"|"emoji",
			t?: string, // 62353/100715 (61.91%)
			u?: string, // 38362/100715 (38.09%)
		}[], // 823368/1027305 (80.15%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 823368/1027305 (80.15%)
		author_fullname?: string, // 823368/1027305 (80.15%)
		author_patreon_flair?: boolean, // 823368/1027305 (80.15%)
		author_premium?: boolean, // 823368/1027305 (80.15%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"Download"|"Install"|"Play Now"|"Shop Now"|"Watch Now"|"Sign Up"|"View More"|"Contact Us", // 94/1027305 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"animals"|"photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"memes"|""|"funny",
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
		}[], // 941/1027305 (0.09%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"comics"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 243/1027305 (0.02%)
		event_is_live?: boolean, // 243/1027305 (0.02%)
		event_start?: number, // 243/1027305 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 66273/1027305 (6.45%)
			gid_2?: number, // 62107/1027305 (6.05%)
			gid_3?: number, // 13433/1027305 (1.31%)
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
			a?: string, // 6554/138857 (4.72%)
			e: "text"|"emoji",
			t?: string, // 132303/138857 (95.28%)
			u?: string, // 6554/138857 (4.72%)
		}[],
		link_flair_template_id?: string, // 254390/1027305 (24.76%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "14d816ty1ylvo"|"14yfgzskx6ixc", // 4/255259 (0.00%)
			oembed?: {
				author_name?: string, // 120593/150943 (79.89%)
				author_url?: string, // 74996/150943 (49.68%)
				cache_age?: number, // 4289/150943 (2.84%)
				description?: string, // 53752/150943 (35.61%)
				height?: number|null, // 150768/150943 (99.88%)
				html?: string, // 150768/150943 (99.88%)
				mean_alpha?: number, // 45/150943 (0.03%)
				provider_name?: string, // 150768/150943 (99.88%)
				provider_url?: string, // 150768/150943 (99.88%)
				thumbnail_height?: number, // 123692/150943 (81.95%)
				thumbnail_url?: string, // 124024/150943 (82.17%)
				thumbnail_width?: number, // 123692/150943 (81.95%)
				title?: string, // 145818/150943 (96.60%)
				type?: "video"|"rich", // 150768/150943 (99.88%)
				url?: string, // 9705/150943 (6.43%)
				version?: "1.0", // 150768/150943 (99.88%)
				width?: number, // 150768/150943 (99.88%)
			}, // 150943/255259 (59.13%)
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
			}, // 104312/255259 (40.87%)
			type?: string, // 150947/255259 (59.13%)
		},
		media_embed: {
			content?: string|null, // 150947/1027305 (14.69%)
			height?: number, // 150947/1027305 (14.69%)
			scrolling?: boolean, // 150947/1027305 (14.69%)
			width?: number, // 150947/1027305 (14.69%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 381/15608 (2.44%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 15603/15608 (99.97%)
				hlsUrl?: string, // 381/15608 (2.44%)
				id?: string, // 15603/15608 (99.97%)
				isGif?: boolean, // 381/15608 (2.44%)
				m?: "image/jpg"|"image/png"|"image/gif", // 15222/15608 (97.53%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 680/15608 (4.36%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 15222/15608 (97.53%)
				s?: {
					gif?: string, // 234/15222 (1.54%)
					mp4?: string, // 234/15222 (1.54%)
					u?: string, // 14988/15222 (98.46%)
					x: number,
					y: number,
				}, // 15222/15608 (97.53%)
				status: "valid"|"failed",
				x?: number, // 381/15608 (2.44%)
				y?: number, // 381/15608 (2.44%)
			},
		}|null, // 6784/1027305 (0.66%)
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
		}|null, // 1871/1027305 (0.18%)
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 701874/1027305 (68.32%)
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
					}, // 20207/701874 (2.88%)
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
					}, // 20207/701874 (2.88%)
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
					}, // 292794/701874 (41.72%)
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
					}, // 294950/701874 (42.02%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 11952/33299 (35.89%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 33299/701874 (4.74%)
		}, // 701874/1027305 (68.32%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"content_takedown"|"automod_filtered"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 198/1027305 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "14d816ty1ylvo"|"14yfgzskx6ixc", // 4/255259 (0.00%)
			oembed?: {
				author_name?: string, // 120593/150943 (79.89%)
				author_url?: string, // 74996/150943 (49.68%)
				cache_age?: number, // 4289/150943 (2.84%)
				description?: string, // 53752/150943 (35.61%)
				height?: number|null, // 150768/150943 (99.88%)
				html?: string, // 150768/150943 (99.88%)
				mean_alpha?: number, // 45/150943 (0.03%)
				provider_name?: string, // 150768/150943 (99.88%)
				provider_url?: string, // 150768/150943 (99.88%)
				thumbnail_height?: number, // 123692/150943 (81.95%)
				thumbnail_url?: string, // 124024/150943 (82.17%)
				thumbnail_width?: number, // 123692/150943 (81.95%)
				title?: string, // 145818/150943 (96.60%)
				type?: "video"|"rich", // 150768/150943 (99.88%)
				url?: string, // 9705/150943 (6.43%)
				version?: "1.0", // 150768/150943 (99.88%)
				width?: number, // 150768/150943 (99.88%)
			}, // 150943/255259 (59.13%)
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
			}, // 104312/255259 (40.87%)
			type?: string, // 150947/255259 (59.13%)
		},
		secure_media_embed: {
			content?: string|null, // 150947/1027305 (14.69%)
			height?: number, // 150947/1027305 (14.69%)
			media_domain_url?: string, // 150947/1027305 (14.69%)
			scrolling?: boolean, // 150947/1027305 (14.69%)
			width?: number, // 150947/1027305 (14.69%)
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
		treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 944931/1027305 (91.98%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1115423/28297185 (3.94%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 20485/28297185 (0.07%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 20485/28297185 (0.07%)
	embed_url?: null|string, // 20485/28297185 (0.07%)
	event_end?: number, // 1960/28297185 (0.01%)
	event_is_live?: boolean, // 1960/28297185 (0.01%)
	event_start?: number, // 1960/28297185 (0.01%)
	events?: [], // 20485/28297185 (0.07%)
	eventsOnRender?: [], // 20485/28297185 (0.07%)
	gilded: number,
	gildings: {
		gid_1?: number, // 47975/28297185 (0.17%)
		gid_2?: number, // 44938/28297185 (0.16%)
		gid_3?: number, // 7012/28297185 (0.02%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 20485/28297185 (0.07%)
	id: string,
	impression_id?: null, // 20485/28297185 (0.07%)
	impression_id_str?: null, // 20485/28297185 (0.07%)
	is_blank?: boolean, // 20485/28297185 (0.07%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 243214/5735543 (4.24%)
		e: "text"|"emoji",
		t?: string, // 5492329/5735543 (95.76%)
		u?: string, // 243214/5735543 (4.24%)
	}[],
	link_flair_template_id?: string, // 7990423/28297185 (28.24%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "14d816ty1ylvo"|"14mpc1u5zq28o"|"14x7jcyn7h7fx"|"14j4tfj9egfds"|"14y2kkzfls9bi"|"14yfgzskx6ixc"|"14ylk4atxhf3l"|"14yqv010rha10"|"14yytlncxz4x5"|"14yyumkgu980z"|"14zhlibyvj2o4"|"150kzr5qr8hdi"|"1514otayqzge8"|"151lh9fqtg8yp", // 16/3095166 (0.00%)
		oembed?: {
			author_name?: string, // 1879847/2286042 (82.23%)
			author_url?: string, // 1645036/2286042 (71.96%)
			cache_age?: number, // 287414/2286042 (12.57%)
			description?: string, // 530990/2286042 (23.23%)
			height?: number|null, // 2283211/2286042 (99.88%)
			html?: string, // 2283211/2286042 (99.88%)
			mean_alpha?: number, // 6070/2286042 (0.27%)
			provider_name?: string, // 2283211/2286042 (99.88%)
			provider_url?: string, // 2283211/2286042 (99.88%)
			thumbnail_height?: number, // 1837615/2286042 (80.38%)
			thumbnail_url?: string, // 1843797/2286042 (80.65%)
			thumbnail_width?: number, // 1837615/2286042 (80.38%)
			title?: string, // 1986572/2286042 (86.90%)
			type?: "video"|"rich", // 2283211/2286042 (99.88%)
			url?: string, // 459710/2286042 (20.11%)
			version?: "1.0", // 2283211/2286042 (99.88%)
			width?: number, // 2283211/2286042 (99.88%)
		}, // 2286042/3095166 (73.86%)
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
		}, // 809108/3095166 (26.14%)
		type?: string, // 2286058/3095166 (73.86%)
	},
	media_embed: {
		content?: string|null, // 2286058/28297185 (8.08%)
		height?: number, // 2286058/28297185 (8.08%)
		scrolling?: boolean, // 2286058/28297185 (8.08%)
		width?: number, // 2286058/28297185 (8.08%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 11659/302041 (3.86%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 301549/302041 (99.84%)
			hlsUrl?: string, // 11659/302041 (3.86%)
			id?: string, // 301549/302041 (99.84%)
			isGif?: boolean, // 11659/302041 (3.86%)
			m?: "image/jpg"|"image/png"|"image/gif", // 289890/302041 (95.98%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 17027/302041 (5.64%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 289890/302041 (95.98%)
			s?: {
				gif?: string, // 2704/289890 (0.93%)
				mp4?: string, // 2704/289890 (0.93%)
				u?: string, // 287186/289890 (99.07%)
				x: number,
				y: number,
			}, // 289890/302041 (95.98%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 11659/302041 (3.86%)
			y?: number, // 11659/302041 (3.86%)
		},
	}|null, // 331267/28297185 (1.17%)
	media_only: boolean,
	mobile_ad_url?: string, // 20485/28297185 (0.07%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 20485/28297185 (0.07%)
	outbound_link?: {
	}, // 20485/28297185 (0.07%)
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
	}|null, // 160950/28297185 (0.57%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 9855220/28297185 (34.83%)
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
				}, // 87497/9855220 (0.89%)
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
				}, // 87497/9855220 (0.89%)
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
				}, // 1634977/9855220 (16.59%)
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
				}, // 1682508/9855220 (17.07%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 22576/125332 (18.01%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 125332/9855220 (1.27%)
	}, // 9855220/28297185 (34.83%)
	priority_id?: null, // 20485/28297185 (0.07%)
	promoted?: boolean, // 20485/28297185 (0.07%)
	promoted_by?: null, // 20485/28297185 (0.07%)
	promoted_display_name?: null, // 20485/28297185 (0.07%)
	promoted_url?: null, // 20485/28297185 (0.07%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 63011/28297185 (0.22%)
	score: number,
	secure_media: null|{
		event_id?: "14d816ty1ylvo"|"14mpc1u5zq28o"|"14x7jcyn7h7fx"|"14j4tfj9egfds"|"14y2kkzfls9bi"|"14yfgzskx6ixc"|"14ylk4atxhf3l"|"14yqv010rha10"|"14yytlncxz4x5"|"14yyumkgu980z"|"14zhlibyvj2o4"|"150kzr5qr8hdi"|"1514otayqzge8"|"151lh9fqtg8yp", // 16/3095166 (0.00%)
		oembed?: {
			author_name?: string, // 1879847/2286042 (82.23%)
			author_url?: string, // 1645036/2286042 (71.96%)
			cache_age?: number, // 287414/2286042 (12.57%)
			description?: string, // 530990/2286042 (23.23%)
			height?: number|null, // 2283211/2286042 (99.88%)
			html?: string, // 2283211/2286042 (99.88%)
			mean_alpha?: number, // 6070/2286042 (0.27%)
			provider_name?: string, // 2283211/2286042 (99.88%)
			provider_url?: string, // 2283211/2286042 (99.88%)
			thumbnail_height?: number, // 1837615/2286042 (80.38%)
			thumbnail_url?: string, // 1843797/2286042 (80.65%)
			thumbnail_width?: number, // 1837615/2286042 (80.38%)
			title?: string, // 1986572/2286042 (86.90%)
			type?: "video"|"rich", // 2283211/2286042 (99.88%)
			url?: string, // 459710/2286042 (20.11%)
			version?: "1.0", // 2283211/2286042 (99.88%)
			width?: number, // 2283211/2286042 (99.88%)
		}, // 2286042/3095166 (73.86%)
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
		}, // 809108/3095166 (26.14%)
		type?: string, // 2286058/3095166 (73.86%)
	},
	secure_media_embed: {
		content?: string|null, // 2286058/28297185 (8.08%)
		height?: number, // 2286058/28297185 (8.08%)
		media_domain_url?: string, // 2286058/28297185 (8.08%)
		scrolling?: boolean, // 2286058/28297185 (8.08%)
		width?: number, // 2286058/28297185 (8.08%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 20485/28297185 (0.07%)
	sk_ad_network_data?: null, // 20485/28297185 (0.07%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 20485/28297185 (0.07%)
	third_party_tracking?: null, // 20485/28297185 (0.07%)
	third_party_tracking_2?: null, // 20485/28297185 (0.07%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 17289000/28297185 (61.10%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}