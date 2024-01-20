interface RedditPost {
	adserver_click_url?: null, // 29617/34118481 (0.09%)
	adserver_imp_pixel?: null, // 29617/34118481 (0.09%)
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
	author_cakeday?: boolean, // 91740/34118481 (0.27%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 742362/1980789 (37.48%)
		e: "text"|"emoji",
		t?: string, // 1238427/1980789 (62.52%)
		u?: string, // 742362/1980789 (37.48%)
	}[], // 27773161/34118481 (81.40%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 27773161/34118481 (81.40%)
	author_fullname?: string, // 27773161/34118481 (81.40%)
	author_id?: string|null, // 29617/34118481 (0.09%)
	author_patreon_flair?: boolean, // 27773161/34118481 (81.40%)
	author_premium?: boolean, // 27773161/34118481 (81.40%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Install"|"Play Now"|"View More"|"Apply Now"|"Watch Now"|"Contact Us"|"Get a Quote"|"Pre-order Now"|"Get Showtimes"|"See Menu"|"", // 26675/34118481 (0.08%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|""|"videos"|"diy_and_crafts"|"food"|"memes"|"writing"|"music"|"funny",
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
		sr_detail?: {
			banner_img: string,
			banner_size: number[],
			community_icon: "",
			created: number,
			created_utc: number,
			display_name: "soccer",
			display_name_prefixed: "r/soccer",
			icon_img: string,
			icon_size: number[],
			key_color: "",
			mod_permissions: [],
			name: "t5_2qi58",
			over_18: boolean,
			primary_color: "#1d4169",
			sr: "soccer",
			sr_display_name_prefixed: "r/soccer",
			subreddit_type: "public",
			subscribers: number,
			title: "The back page of the internet ",
			url: "/r/soccer/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads",
		}, // 1/8378 (0.01%)
		subreddit_id: string,
		title: string,
	}[], // 8378/34118481 (0.02%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1593371/34118481 (4.67%)
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
		author_cakeday?: boolean, // 5797/1515630 (0.38%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 44179/112564 (39.25%)
			e: "text"|"emoji",
			t?: string, // 68385/112564 (60.75%)
			u?: string, // 44179/112564 (39.25%)
		}[], // 1373217/1515630 (90.60%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1373217/1515630 (90.60%)
		author_fullname?: string, // 1373217/1515630 (90.60%)
		author_patreon_flair?: boolean, // 1373217/1515630 (90.60%)
		author_premium?: boolean, // 1373217/1515630 (90.60%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"animals"|"photography"|"gaming"|"entertainment"|"videos"|"food",
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
		}[], // 1156/1515630 (0.08%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 352/1515630 (0.02%)
		event_is_live?: boolean, // 352/1515630 (0.02%)
		event_start?: number, // 352/1515630 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 65092/375236 (17.35%)
				id: number,
				media_id: string,
				outbound_url?: string, // 42367/375236 (11.29%)
			}[],
		}|null, // 96317/1515630 (6.35%)
		gilded: number,
		gildings: {
			gid_1?: number, // 327345/1515630 (21.60%)
			gid_2?: number, // 48491/1515630 (3.20%)
			gid_3?: number, // 14842/1515630 (0.98%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 96317/1515630 (6.35%)
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
			a?: string, // 29597/198293 (14.93%)
			e: "text"|"emoji",
			t?: string, // 168696/198293 (85.07%)
			u?: string, // 29597/198293 (14.93%)
		}[],
		link_flair_template_id?: string, // 420295/1515630 (27.73%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "1777if88ox2qy"|"176441f8jidh7", // 3/520728 (0.00%)
			oembed?: {
				author_name?: string, // 369024/396845 (92.99%)
				author_url?: string, // 358321/396845 (90.29%)
				cache_age?: number, // 6098/396845 (1.54%)
				description?: string, // 16520/396845 (4.16%)
				height?: number|null, // 396826/396845 (100.00%)
				html?: string, // 396826/396845 (100.00%)
				mean_alpha?: number, // 35/396845 (0.01%)
				provider_name?: string, // 396826/396845 (100.00%)
				provider_url?: string, // 396826/396845 (100.00%)
				thumbnail_height?: number, // 370003/396845 (93.24%)
				thumbnail_url?: string, // 370114/396845 (93.26%)
				thumbnail_width?: number, // 370003/396845 (93.24%)
				title?: string, // 388124/396845 (97.80%)
				type?: "video"|"rich", // 396826/396845 (100.00%)
				url?: string, // 9775/396845 (2.46%)
				version?: "1.0", // 396826/396845 (100.00%)
				width?: number, // 396826/396845 (100.00%)
			}, // 396845/520728 (76.21%)
			reddit_video?: {
				bitrate_kbps?: number, // 122004/123880 (98.49%)
				dash_url?: string, // 123875/123880 (100.00%)
				duration?: number, // 123875/123880 (100.00%)
				fallback_url?: string, // 123875/123880 (100.00%)
				height?: number, // 123875/123880 (100.00%)
				hls_url?: string, // 123875/123880 (100.00%)
				is_gif?: boolean, // 123875/123880 (100.00%)
				scrubber_media_url?: string, // 123875/123880 (100.00%)
				transcoding_message?: string, // 5/123880 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 123875/123880 (100.00%)
			}, // 123880/520728 (23.79%)
			type?: string, // 396848/520728 (76.21%)
		},
		media_embed: {
			content?: string|null, // 396848/1515630 (26.18%)
			height?: number, // 396848/1515630 (26.18%)
			scrolling?: boolean, // 396848/1515630 (26.18%)
			width?: number, // 396848/1515630 (26.18%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 785/416634 (0.19%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 416443/416634 (99.95%)
				hlsUrl?: string, // 785/416634 (0.19%)
				id?: string, // 416443/416634 (99.95%)
				isGif?: boolean, // 785/416634 (0.19%)
				m?: "image/jpg"|"image/png"|"image/gif", // 415658/416634 (99.77%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 242254/416634 (58.15%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 415658/416634 (99.77%)
				s?: {
					gif?: string, // 5909/415658 (1.42%)
					mp4?: string, // 5909/415658 (1.42%)
					u?: string, // 409749/415658 (98.58%)
					x: number,
					y: number,
				}, // 415658/416634 (99.77%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 785/416634 (0.19%)
				y?: number, // 785/416634 (0.19%)
			},
		}|null, // 110518/1515630 (7.29%)
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
				total_stake_amount?: number, // 112/10554 (1.06%)
				vote_count?: number, // 9354/10554 (88.63%)
			}[],
			prediction_status?: null|"RESOLVED", // 1046/2687 (38.93%)
			resolved_option_id: null|string,
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 3054/1515630 (0.20%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 1138747/1515630 (75.13%)
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
					}, // 41969/1138747 (3.69%)
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
					}, // 41969/1138747 (3.69%)
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
					}, // 683016/1138747 (59.98%)
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
					}, // 687092/1138747 (60.34%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 334013/334740 (99.78%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 334740/1138747 (29.40%)
		}, // 1138747/1515630 (75.13%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 340/1515630 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "1777if88ox2qy"|"176441f8jidh7", // 3/520728 (0.00%)
			oembed?: {
				author_name?: string, // 369024/396845 (92.99%)
				author_url?: string, // 358321/396845 (90.29%)
				cache_age?: number, // 6098/396845 (1.54%)
				description?: string, // 16520/396845 (4.16%)
				height?: number|null, // 396826/396845 (100.00%)
				html?: string, // 396826/396845 (100.00%)
				mean_alpha?: number, // 35/396845 (0.01%)
				provider_name?: string, // 396826/396845 (100.00%)
				provider_url?: string, // 396826/396845 (100.00%)
				thumbnail_height?: number, // 370003/396845 (93.24%)
				thumbnail_url?: string, // 370114/396845 (93.26%)
				thumbnail_width?: number, // 370003/396845 (93.24%)
				title?: string, // 388124/396845 (97.80%)
				type?: "video"|"rich", // 396826/396845 (100.00%)
				url?: string, // 9775/396845 (2.46%)
				version?: "1.0", // 396826/396845 (100.00%)
				width?: number, // 396826/396845 (100.00%)
			}, // 396845/520728 (76.21%)
			reddit_video?: {
				bitrate_kbps?: number, // 122004/123880 (98.49%)
				dash_url?: string, // 123875/123880 (100.00%)
				duration?: number, // 123875/123880 (100.00%)
				fallback_url?: string, // 123875/123880 (100.00%)
				height?: number, // 123875/123880 (100.00%)
				hls_url?: string, // 123875/123880 (100.00%)
				is_gif?: boolean, // 123875/123880 (100.00%)
				scrubber_media_url?: string, // 123875/123880 (100.00%)
				transcoding_message?: string, // 5/123880 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 123875/123880 (100.00%)
			}, // 123880/520728 (23.79%)
			type?: string, // 396848/520728 (76.21%)
		},
		secure_media_embed: {
			content?: string|null, // 396848/1515630 (26.18%)
			height?: number, // 396848/1515630 (26.18%)
			media_domain_url?: string, // 396848/1515630 (26.18%)
			scrolling?: boolean, // 396848/1515630 (26.18%)
			width?: number, // 396848/1515630 (26.18%)
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
		top_awarded_type: null|"INACTIVE"|"ACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:cutie"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat"|"econ:render:lottie:halloween2020")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1399395/1515630 (92.33%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1593371/34118481 (4.67%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 29617/34118481 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 29617/34118481 (0.09%)
	embed_url?: null|string, // 29617/34118481 (0.09%)
	event_end?: number, // 2516/34118481 (0.01%)
	event_is_live?: boolean, // 2516/34118481 (0.01%)
	event_start?: number, // 2516/34118481 (0.01%)
	events?: [], // 29617/34118481 (0.09%)
	eventsOnRender?: [], // 29617/34118481 (0.09%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Pre-order Now"|"Install"|"Apply Now"|"Contact Us"|"See Menu"|"Get a Quote"|"Get Showtimes"|"Play Now", // 2233/3935925 (0.06%)
			caption?: string, // 414809/3935925 (10.54%)
			display_url?: string, // 1689/3935925 (0.04%)
			id: number,
			media_id: string,
			outbound_url?: string, // 95997/3935925 (2.44%)
		}[],
	}|null, // 1723575/34118481 (5.05%)
	gilded: number,
	gildings: {
		gid_1?: number, // 539452/34118481 (1.58%)
		gid_2?: number, // 43794/34118481 (0.13%)
		gid_3?: number, // 9782/34118481 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 29617/34118481 (0.09%)
	id: string,
	impression_id?: null, // 29617/34118481 (0.09%)
	impression_id_str?: null, // 29617/34118481 (0.09%)
	is_blank?: boolean, // 29617/34118481 (0.09%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1723575/34118481 (5.05%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 484576/5702044 (8.50%)
		e: "text"|"emoji",
		t?: string, // 5217468/5702044 (91.50%)
		u?: string, // 484576/5702044 (8.50%)
	}[],
	link_flair_template_id?: string, // 10144398/34118481 (29.73%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 45/3772229 (0.00%)
		oembed?: {
			author_name?: string, // 2641437/2848894 (92.72%)
			author_url?: string, // 2585447/2848894 (90.75%)
			cache_age?: number, // 187588/2848894 (6.58%)
			description?: string, // 263125/2848894 (9.24%)
			height?: number|null, // 2848860/2848894 (100.00%)
			html?: string, // 2848860/2848894 (100.00%)
			marginheight?: number, // 21/2848894 (0.00%)
			marginwidth?: number, // 21/2848894 (0.00%)
			mean_alpha?: number, // 3318/2848894 (0.12%)
			provider_name?: string, // 2848860/2848894 (100.00%)
			provider_url?: string, // 2848860/2848894 (100.00%)
			thumbnail_height?: number, // 2634708/2848894 (92.48%)
			thumbnail_url?: string, // 2638021/2848894 (92.60%)
			thumbnail_width?: number, // 2634708/2848894 (92.48%)
			title?: string, // 2646364/2848894 (92.89%)
			type?: "video"|"rich", // 2848860/2848894 (100.00%)
			url?: string, // 291260/2848894 (10.22%)
			version?: "1.0", // 2848839/2848894 (100.00%)
			width?: number, // 2848860/2848894 (100.00%)
		}, // 2848894/3772229 (75.52%)
		reddit_video?: {
			bitrate_kbps?: number, // 916795/923290 (99.30%)
			dash_url?: string, // 916798/923290 (99.30%)
			duration?: number, // 916798/923290 (99.30%)
			fallback_url?: string, // 916798/923290 (99.30%)
			height?: number, // 916798/923290 (99.30%)
			hls_url?: string, // 916798/923290 (99.30%)
			is_gif?: boolean, // 916798/923290 (99.30%)
			scrubber_media_url?: string, // 916798/923290 (99.30%)
			transcoding_message?: string, // 6492/923290 (0.70%)
			transcoding_status: "completed"|"error",
			width?: number, // 916798/923290 (99.30%)
		}, // 923290/3772229 (24.48%)
		type?: string, // 2848939/3772229 (75.52%)
	},
	media_embed: {
		content?: string|null, // 2848939/34118481 (8.35%)
		height?: number, // 2848939/34118481 (8.35%)
		scrolling?: boolean, // 2848939/34118481 (8.35%)
		width?: number, // 2848939/34118481 (8.35%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 15975/4349951 (0.37%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 4345247/4349951 (99.89%)
			hlsUrl?: string, // 15975/4349951 (0.37%)
			id?: string, // 4345247/4349951 (99.89%)
			isGif?: boolean, // 15975/4349951 (0.37%)
			m?: "image/jpg"|"image/png"|"image/gif", // 4329272/4349951 (99.52%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1406690/4349951 (32.34%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4329272/4349951 (99.52%)
			s?: {
				gif?: string, // 34114/4329272 (0.79%)
				mp4?: string, // 34114/4329272 (0.79%)
				u?: string, // 4295158/4329272 (99.21%)
				x: number,
				y: number,
			}, // 4329272/4349951 (99.52%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 15975/4349951 (0.37%)
			y?: number, // 15975/4349951 (0.37%)
		},
	}|null, // 2117911/34118481 (6.21%)
	media_only: boolean,
	mobile_ad_url?: string, // 29617/34118481 (0.09%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 29617/34118481 (0.09%)
	outbound_link?: {
	}, // 29617/34118481 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 649/426034 (0.15%)
			vote_count?: number, // 366382/426034 (86.00%)
		}[],
		prediction_status?: null|"RESOLVED", // 45156/116376 (38.80%)
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 158878/34118481 (0.47%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 12576140/34118481 (36.86%)
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
				}, // 169208/12576140 (1.35%)
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
				}, // 169208/12576140 (1.35%)
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
				}, // 4570441/12576140 (36.34%)
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
				}, // 4633271/12576140 (36.84%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 878736/879446 (99.92%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 879446/12576140 (6.99%)
	}, // 12576140/34118481 (36.86%)
	priority_id?: null, // 29617/34118481 (0.09%)
	promoted?: boolean, // 29617/34118481 (0.09%)
	promoted_by?: null, // 29617/34118481 (0.09%)
	promoted_display_name?: null, // 29617/34118481 (0.09%)
	promoted_url?: null, // 29617/34118481 (0.09%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"reddit"|"moderator"|"automod_filtered"|"author"|"copyright_takedown"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 30075/34118481 (0.09%)
	score: number,
	secure_media: null|{
		event_id?: string, // 45/3772229 (0.00%)
		oembed?: {
			author_name?: string, // 2641437/2848894 (92.72%)
			author_url?: string, // 2585447/2848894 (90.75%)
			cache_age?: number, // 187588/2848894 (6.58%)
			description?: string, // 263125/2848894 (9.24%)
			height?: number|null, // 2848860/2848894 (100.00%)
			html?: string, // 2848860/2848894 (100.00%)
			marginheight?: number, // 21/2848894 (0.00%)
			marginwidth?: number, // 21/2848894 (0.00%)
			mean_alpha?: number, // 3318/2848894 (0.12%)
			provider_name?: string, // 2848860/2848894 (100.00%)
			provider_url?: string, // 2848860/2848894 (100.00%)
			thumbnail_height?: number, // 2634708/2848894 (92.48%)
			thumbnail_url?: string, // 2638021/2848894 (92.60%)
			thumbnail_width?: number, // 2634708/2848894 (92.48%)
			title?: string, // 2646364/2848894 (92.89%)
			type?: "video"|"rich", // 2848860/2848894 (100.00%)
			url?: string, // 291260/2848894 (10.22%)
			version?: "1.0", // 2848839/2848894 (100.00%)
			width?: number, // 2848860/2848894 (100.00%)
		}, // 2848894/3772229 (75.52%)
		reddit_video?: {
			bitrate_kbps?: number, // 916795/923290 (99.30%)
			dash_url?: string, // 916798/923290 (99.30%)
			duration?: number, // 916798/923290 (99.30%)
			fallback_url?: string, // 916798/923290 (99.30%)
			height?: number, // 916798/923290 (99.30%)
			hls_url?: string, // 916798/923290 (99.30%)
			is_gif?: boolean, // 916798/923290 (99.30%)
			scrubber_media_url?: string, // 916798/923290 (99.30%)
			transcoding_message?: string, // 6492/923290 (0.70%)
			transcoding_status: "completed"|"error",
			width?: number, // 916798/923290 (99.30%)
		}, // 923290/3772229 (24.48%)
		type?: string, // 2848939/3772229 (75.52%)
	},
	secure_media_embed: {
		content?: string|null, // 2848939/34118481 (8.35%)
		height?: number, // 2848939/34118481 (8.35%)
		media_domain_url?: string, // 2848939/34118481 (8.35%)
		scrolling?: boolean, // 2848939/34118481 (8.35%)
		width?: number, // 2848939/34118481 (8.35%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 29617/34118481 (0.09%)
	sk_ad_network_data?: null, // 29617/34118481 (0.09%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"private",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 29617/34118481 (0.09%)
	third_party_tracking?: null, // 29617/34118481 (0.09%)
	third_party_tracking_2?: null, // 29617/34118481 (0.09%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE"|"ACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22572764/34118481 (66.16%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}