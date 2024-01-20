interface RedditPost {
	adserver_click_url?: null, // 31158/33006103 (0.09%)
	adserver_imp_pixel?: null, // 31158/33006103 (0.09%)
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
	author_cakeday?: boolean, // 67699/33006103 (0.21%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 827813/2220687 (37.28%)
		e: "text"|"emoji",
		t?: string, // 1392874/2220687 (62.72%)
		u?: string, // 827813/2220687 (37.28%)
	}[], // 24822561/33006103 (75.21%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 24822561/33006103 (75.21%)
	author_fullname?: string, // 24822561/33006103 (75.21%)
	author_id?: string|null, // 31158/33006103 (0.09%)
	author_patreon_flair?: boolean, // 24822561/33006103 (75.21%)
	author_premium?: boolean, // 24822561/33006103 (75.21%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"View More"|"Install"|"Play Now"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|"", // 28616/33006103 (0.09%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|""|"diy_and_crafts"|"videos"|"food"|"memes"|"writing"|"funny"|"music",
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
	}[], // 8470/33006103 (0.03%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1490637/33006103 (4.52%)
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
		author_cakeday?: boolean, // 2697/1316538 (0.20%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 45430/119529 (38.01%)
			e: "text"|"emoji",
			t?: string, // 74099/119529 (61.99%)
			u?: string, // 45430/119529 (38.01%)
		}[], // 1145767/1316538 (87.03%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1145767/1316538 (87.03%)
		author_fullname?: string, // 1145767/1316538 (87.03%)
		author_patreon_flair?: boolean, // 1145767/1316538 (87.03%)
		author_premium?: boolean, // 1145767/1316538 (87.03%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"photography"|"drawing_and_painting"|""|"entertainment"|"animals"|"gaming"|"diy_and_crafts"|"music"|"videos"|"memes",
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
		}[], // 1405/1316538 (0.11%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 393/1316538 (0.03%)
		event_is_live?: boolean, // 393/1316538 (0.03%)
		event_start?: number, // 393/1316538 (0.03%)
		gallery_data?: {
			items: {
				caption?: string, // 33997/254908 (13.34%)
				id: number,
				media_id: string,
				outbound_url?: string, // 16803/254908 (6.59%)
			}[],
		}|null, // 71467/1316538 (5.43%)
		gilded: number,
		gildings: {
			gid_1?: number, // 355537/1316538 (27.01%)
			gid_2?: number, // 54709/1316538 (4.16%)
			gid_3?: number, // 16399/1316538 (1.25%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 71467/1316538 (5.43%)
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
			a?: string, // 23089/202153 (11.42%)
			e: "text"|"emoji",
			t?: string, // 179064/202153 (88.58%)
			u?: string, // 23089/202153 (11.42%)
		}[],
		link_flair_template_id?: string, // 385962/1316538 (29.32%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 54265/272824 (19.89%)
				author_url?: string, // 45131/272824 (16.54%)
				cache_age?: number, // 6334/272824 (2.32%)
				description?: string, // 14927/272824 (5.47%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 76/272824 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 52804/272824 (19.35%)
				thumbnail_url?: string, // 52997/272824 (19.43%)
				thumbnail_width?: number, // 52804/272824 (19.35%)
				title?: string, // 179360/272824 (65.74%)
				type: "video"|"rich",
				url?: string, // 9677/272824 (3.55%)
				version: "1.0",
				width: number,
			}, // 272824/399955 (68.21%)
			reddit_video?: {
				bitrate_kbps?: number, // 123844/127131 (97.41%)
				dash_url?: string, // 127125/127131 (100.00%)
				duration?: number, // 127125/127131 (100.00%)
				fallback_url?: string, // 127125/127131 (100.00%)
				height?: number, // 127125/127131 (100.00%)
				hls_url?: string, // 127125/127131 (100.00%)
				is_gif?: boolean, // 127125/127131 (100.00%)
				scrubber_media_url?: string, // 127125/127131 (100.00%)
				transcoding_message?: string, // 6/127131 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 127125/127131 (100.00%)
			}, // 127131/399955 (31.79%)
			type?: string, // 272824/399955 (68.21%)
		},
		media_embed: {
			content?: string, // 272824/1316538 (20.72%)
			height?: number, // 272824/1316538 (20.72%)
			scrolling?: boolean, // 272824/1316538 (20.72%)
			width?: number, // 272824/1316538 (20.72%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 983/290808 (0.34%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 290571/290808 (99.92%)
				hlsUrl?: string, // 983/290808 (0.34%)
				id?: string, // 290571/290808 (99.92%)
				isGif?: boolean, // 983/290808 (0.34%)
				m?: "image/jpg"|"image/png"|"image/gif", // 289588/290808 (99.58%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 137347/290808 (47.23%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 289588/290808 (99.58%)
				s?: {
					gif?: string, // 3552/289588 (1.23%)
					mp4?: string, // 3552/289588 (1.23%)
					u?: string, // 286036/289588 (98.77%)
					x: number,
					y: number,
				}, // 289588/290808 (99.58%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 983/290808 (0.34%)
				y?: number, // 983/290808 (0.34%)
			},
		}|null, // 82996/1316538 (6.30%)
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
				total_stake_amount?: number, // 16/9141 (0.18%)
				vote_count: number,
			}[],
			resolved_option_id: null|"6323753"|"6323784"|"6323800"|"6323807"|"6830892",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2879/1316538 (0.22%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 934940/1316538 (71.02%)
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
					}, // 25416/934940 (2.72%)
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
					}, // 25416/934940 (2.72%)
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
					}, // 472827/934940 (50.57%)
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
					}, // 476621/934940 (50.98%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 203526/204658 (99.45%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 204658/934940 (21.89%)
		}, // 934940/1316538 (71.02%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 345/1316538 (0.03%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 54265/272824 (19.89%)
				author_url?: string, // 45131/272824 (16.54%)
				cache_age?: number, // 6334/272824 (2.32%)
				description?: string, // 14927/272824 (5.47%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 76/272824 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 52804/272824 (19.35%)
				thumbnail_url?: string, // 52997/272824 (19.43%)
				thumbnail_width?: number, // 52804/272824 (19.35%)
				title?: string, // 179360/272824 (65.74%)
				type: "video"|"rich",
				url?: string, // 9677/272824 (3.55%)
				version: "1.0",
				width: number,
			}, // 272824/399955 (68.21%)
			reddit_video?: {
				bitrate_kbps?: number, // 123844/127131 (97.41%)
				dash_url?: string, // 127125/127131 (100.00%)
				duration?: number, // 127125/127131 (100.00%)
				fallback_url?: string, // 127125/127131 (100.00%)
				height?: number, // 127125/127131 (100.00%)
				hls_url?: string, // 127125/127131 (100.00%)
				is_gif?: boolean, // 127125/127131 (100.00%)
				scrubber_media_url?: string, // 127125/127131 (100.00%)
				transcoding_message?: string, // 6/127131 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 127125/127131 (100.00%)
			}, // 127131/399955 (31.79%)
			type?: string, // 272824/399955 (68.21%)
		},
		secure_media_embed: {
			content?: string, // 272824/1316538 (20.72%)
			height?: number, // 272824/1316538 (20.72%)
			media_domain_url?: string, // 272824/1316538 (20.72%)
			scrolling?: boolean, // 272824/1316538 (20.72%)
			width?: number, // 272824/1316538 (20.72%)
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
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:cutie"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat"|"econ:render:lottie:halloween2020")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1212467/1316538 (92.10%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1490637/33006103 (4.52%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 31158/33006103 (0.09%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 31158/33006103 (0.09%)
	embed_url?: null|string, // 31158/33006103 (0.09%)
	event_end?: number, // 2222/33006103 (0.01%)
	event_is_live?: boolean, // 2222/33006103 (0.01%)
	event_start?: number, // 2222/33006103 (0.01%)
	events?: [], // 31158/33006103 (0.09%)
	eventsOnRender?: [], // 31158/33006103 (0.09%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"View More"|"Download"|"Install", // 490/3254347 (0.02%)
			caption?: string, // 350938/3254347 (10.78%)
			display_url?: string, // 481/3254347 (0.01%)
			id: number,
			media_id: string,
			outbound_url?: string, // 80453/3254347 (2.47%)
		}[],
	}|null, // 1584269/33006103 (4.80%)
	gilded: number,
	gildings: {
		gid_1?: number, // 694160/33006103 (2.10%)
		gid_2?: number, // 49053/33006103 (0.15%)
		gid_3?: number, // 10421/33006103 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 31158/33006103 (0.09%)
	id: string,
	impression_id?: null, // 31158/33006103 (0.09%)
	impression_id_str?: null, // 31158/33006103 (0.09%)
	is_blank?: boolean, // 31158/33006103 (0.09%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1584269/33006103 (4.80%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 493824/6132830 (8.05%)
		e: "text"|"emoji",
		t?: string, // 5639006/6132830 (91.95%)
		u?: string, // 493824/6132830 (8.05%)
	}[],
	link_flair_template_id?: string, // 10089495/33006103 (30.57%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 118/3756907 (0.00%)
		oembed?: {
			author_name?: string, // 1668217/2771186 (60.20%)
			author_url?: string, // 1579181/2771186 (56.99%)
			cache_age?: number, // 194472/2771186 (7.02%)
			description?: string, // 313478/2771186 (11.31%)
			height?: number|null, // 2771161/2771186 (100.00%)
			html?: string, // 2771161/2771186 (100.00%)
			marginheight?: number, // 54/2771186 (0.00%)
			marginwidth?: number, // 54/2771186 (0.00%)
			mean_alpha?: number, // 4130/2771186 (0.15%)
			provider_name?: string, // 2771161/2771186 (100.00%)
			provider_url?: string, // 2771161/2771186 (100.00%)
			thumbnail_height?: number, // 1664555/2771186 (60.07%)
			thumbnail_url?: string, // 1669344/2771186 (60.24%)
			thumbnail_width?: number, // 1664555/2771186 (60.07%)
			title?: string, // 2170690/2771186 (78.33%)
			type?: "video"|"rich", // 2771161/2771186 (100.00%)
			url?: string, // 300172/2771186 (10.83%)
			version?: "1.0", // 2771107/2771186 (100.00%)
			width?: number, // 2771161/2771186 (100.00%)
		}, // 2771186/3756907 (73.76%)
		reddit_video?: {
			bitrate_kbps?: number, // 977318/985603 (99.16%)
			dash_url?: string, // 977319/985603 (99.16%)
			duration?: number, // 977319/985603 (99.16%)
			fallback_url?: string, // 977319/985603 (99.16%)
			height?: number, // 977319/985603 (99.16%)
			hls_url?: string, // 977319/985603 (99.16%)
			is_gif?: boolean, // 977319/985603 (99.16%)
			scrubber_media_url?: string, // 977319/985603 (99.16%)
			transcoding_message?: string, // 8284/985603 (0.84%)
			transcoding_status: "completed"|"error",
			width?: number, // 977319/985603 (99.16%)
		}, // 985603/3756907 (26.23%)
		type?: string, // 2771304/3756907 (73.77%)
	},
	media_embed: {
		content?: string|null, // 2771304/33006103 (8.40%)
		height?: number, // 2771304/33006103 (8.40%)
		scrolling?: boolean, // 2771304/33006103 (8.40%)
		width?: number, // 2771304/33006103 (8.40%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17833/3652475 (0.49%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 3646832/3652475 (99.85%)
			hlsUrl?: string, // 17833/3652475 (0.49%)
			id?: string, // 3646832/3652475 (99.85%)
			isGif?: boolean, // 17833/3652475 (0.49%)
			m?: "image/jpg"|"image/png"|"image/gif", // 3628999/3652475 (99.36%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1010813/3652475 (27.67%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 3628999/3652475 (99.36%)
			s?: {
				gif?: string, // 24250/3628999 (0.67%)
				mp4?: string, // 24250/3628999 (0.67%)
				u?: string, // 3604749/3628999 (99.33%)
				x: number,
				y: number,
			}, // 3628999/3652475 (99.36%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 17833/3652475 (0.49%)
			y?: number, // 17833/3652475 (0.49%)
		},
	}|null, // 1991708/33006103 (6.03%)
	media_only: boolean,
	mobile_ad_url?: string, // 31158/33006103 (0.09%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 31158/33006103 (0.09%)
	outbound_link?: {
	}, // 31158/33006103 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 222/480099 (0.05%)
			vote_count?: number, // 480093/480099 (100.00%)
		}[],
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 195059/33006103 (0.59%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 12243307/33006103 (37.09%)
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
				}, // 107948/12243307 (0.88%)
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
				}, // 107948/12243307 (0.88%)
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
				}, // 3572951/12243307 (29.18%)
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
				}, // 3637663/12243307 (29.71%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 618127/619376 (99.80%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 619376/12243307 (5.06%)
	}, // 12243307/33006103 (37.09%)
	priority_id?: null, // 31158/33006103 (0.09%)
	promoted?: boolean, // 31158/33006103 (0.09%)
	promoted_by?: null, // 31158/33006103 (0.09%)
	promoted_display_name?: null, // 31158/33006103 (0.09%)
	promoted_url?: null, // 31158/33006103 (0.09%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 37610/33006103 (0.11%)
	score: number,
	secure_media: null|{
		event_id?: string, // 118/3756907 (0.00%)
		oembed?: {
			author_name?: string, // 1668217/2771186 (60.20%)
			author_url?: string, // 1579181/2771186 (56.99%)
			cache_age?: number, // 194472/2771186 (7.02%)
			description?: string, // 313478/2771186 (11.31%)
			height?: number|null, // 2771161/2771186 (100.00%)
			html?: string, // 2771161/2771186 (100.00%)
			marginheight?: number, // 54/2771186 (0.00%)
			marginwidth?: number, // 54/2771186 (0.00%)
			mean_alpha?: number, // 4130/2771186 (0.15%)
			provider_name?: string, // 2771161/2771186 (100.00%)
			provider_url?: string, // 2771161/2771186 (100.00%)
			thumbnail_height?: number, // 1664555/2771186 (60.07%)
			thumbnail_url?: string, // 1669344/2771186 (60.24%)
			thumbnail_width?: number, // 1664555/2771186 (60.07%)
			title?: string, // 2170690/2771186 (78.33%)
			type?: "video"|"rich", // 2771161/2771186 (100.00%)
			url?: string, // 300172/2771186 (10.83%)
			version?: "1.0", // 2771107/2771186 (100.00%)
			width?: number, // 2771161/2771186 (100.00%)
		}, // 2771186/3756907 (73.76%)
		reddit_video?: {
			bitrate_kbps?: number, // 977318/985603 (99.16%)
			dash_url?: string, // 977319/985603 (99.16%)
			duration?: number, // 977319/985603 (99.16%)
			fallback_url?: string, // 977319/985603 (99.16%)
			height?: number, // 977319/985603 (99.16%)
			hls_url?: string, // 977319/985603 (99.16%)
			is_gif?: boolean, // 977319/985603 (99.16%)
			scrubber_media_url?: string, // 977319/985603 (99.16%)
			transcoding_message?: string, // 8284/985603 (0.84%)
			transcoding_status: "completed"|"error",
			width?: number, // 977319/985603 (99.16%)
		}, // 985603/3756907 (26.23%)
		type?: string, // 2771304/3756907 (73.77%)
	},
	secure_media_embed: {
		content?: string|null, // 2771304/33006103 (8.40%)
		height?: number, // 2771304/33006103 (8.40%)
		media_domain_url?: string, // 2771304/33006103 (8.40%)
		scrolling?: boolean, // 2771304/33006103 (8.40%)
		width?: number, // 2771304/33006103 (8.40%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 31158/33006103 (0.09%)
	sk_ad_network_data?: null, // 31158/33006103 (0.09%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 31158/33006103 (0.09%)
	third_party_tracking?: null, // 31158/33006103 (0.09%)
	third_party_tracking_2?: null, // 31158/33006103 (0.09%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:cutie"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 21923500/33006103 (66.42%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}