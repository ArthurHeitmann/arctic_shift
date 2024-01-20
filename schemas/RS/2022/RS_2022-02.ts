interface RedditPost {
	adserver_click_url?: null, // 32856/29843162 (0.11%)
	adserver_imp_pixel?: null, // 32856/29843162 (0.11%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
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
		sticky_duration_seconds?: null, // 3919/1666737 (0.24%)
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
	app_store_data?: null, // 32854/29843162 (0.11%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 66787/29843162 (0.22%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 691386/1860379 (37.16%)
		e: "text"|"emoji",
		t?: string, // 1168993/1860379 (62.84%)
		u?: string, // 691386/1860379 (37.16%)
	}[], // 21611050/29843162 (72.42%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 21611050/29843162 (72.42%)
	author_fullname?: string, // 21611050/29843162 (72.42%)
	author_id?: string|null, // 32856/29843162 (0.11%)
	author_patreon_flair?: boolean, // 21611050/29843162 (72.42%)
	author_premium?: boolean, // 21611050/29843162 (72.42%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 177235/29843162 (0.59%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"photography"|"animals"|"entertainment"|"gaming"|"diy_and_crafts"|"videos"|"memes"|"writing"|"funny"|"food"|"music",
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
		sr_detail?: {
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: "wallstreetbets",
			display_name_prefixed: "r/wallstreetbets",
			icon_img: string,
			icon_size: number[],
			key_color: "#ea0027",
			mod_permissions: [],
			name: "t5_2th52",
			over_18: boolean,
			primary_color: "#2c3e50",
			sr: "wallstreetbets",
			sr_display_name_prefixed: "r/wallstreetbets",
			subreddit_type: "public",
			subscribers: number,
			title: "wallstreetbets",
			url: "/r/wallstreetbets/",
			user_can_crosspost: null,
			whitelist_status: "some_ads",
		}, // 2/11463 (0.02%)
		subreddit_id: string,
		title: string,
	}[], // 11463/29843162 (0.04%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1488543/29843162 (4.99%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
			award_type: "global"|"community"|"moderator",
			awardings_required_to_grant_benefits: null|number,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null|number,
			days_of_premium: null|number,
			description: string,
			end_date: null|number,
			giver_coin_reward: null|number,
			icon_format: null|"APNG"|"PNG"|"JPG",
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
			sticky_duration_seconds?: null, // 3286/1162929 (0.28%)
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
		author_cakeday?: boolean, // 2127/1103504 (0.19%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 38816/104883 (37.01%)
			e: "text"|"emoji",
			t?: string, // 66067/104883 (62.99%)
			u?: string, // 38816/104883 (37.01%)
		}[], // 958408/1103504 (86.85%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 958408/1103504 (86.85%)
		author_fullname?: string, // 958408/1103504 (86.85%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 958408/1103504 (86.85%)
		author_premium?: boolean, // 958408/1103504 (86.85%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 6581/1103504 (0.60%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"animals"|"photography"|"drawing_and_painting"|"entertainment"|"diy_and_crafts"|"funny"|"memes"|"writing"|"gaming",
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
		}[], // 1070/1103504 (0.10%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 329/1103504 (0.03%)
		event_is_live?: boolean, // 329/1103504 (0.03%)
		event_start?: number, // 329/1103504 (0.03%)
		gallery_data?: {
			items: {
				caption?: string, // 50125/332968 (15.05%)
				id: number,
				media_id: string,
				outbound_url?: string, // 17955/332968 (5.39%)
			}[],
		}|null, // 74524/1103504 (6.75%)
		gilded: number,
		gildings: {
			gid_1?: number, // 253358/1103504 (22.96%)
			gid_2?: number, // 35404/1103504 (3.21%)
			gid_3?: number, // 12198/1103504 (1.11%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 74524/1103504 (6.75%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 31022/200476 (15.47%)
			e: "text"|"emoji",
			t?: string, // 169454/200476 (84.53%)
			u?: string, // 31022/200476 (15.47%)
		}[],
		link_flair_template_id?: string, // 363772/1103504 (32.97%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_duration_seconds: number,
			recording_fallback_url?: string, // 22/24 (91.67%)
			recording_status: number,
			room_id: "744cd123-ae16-4103-bed0-a6520d04ddcf"|"7c47c149-820e-422d-b235-ddd652b011c7"|"daa787ba-d867-4b51-b417-2ac4249c946e"|"c02f1852-ee04-4e3c-a9b4-7c1c52555b7e"|"81e7759d-941b-49b8-a82b-c254e1db9984"|"55eec18e-48a6-4683-adb3-b666c8ad4eef"|"158e46ec-b567-48eb-a134-a82e735c35cd"|"3a424557-c734-47b4-b06f-271a274cb6f4"|"7b693407-4e96-4a50-b4ba-a27e851ef98a"|"0b00877e-4771-45aa-9e96-ab45741203e1",
		}, // 24/1103504 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"18jtjyt5pdj17", // 38/364084 (0.01%)
			oembed?: {
				author_name?: string, // 229421/234873 (97.68%)
				author_url?: string, // 222685/234873 (94.81%)
				cache_age?: number, // 6382/234873 (2.72%)
				description?: string, // 12050/234873 (5.13%)
				height?: number|null, // 234870/234873 (100.00%)
				html?: string, // 234870/234873 (100.00%)
				mean_alpha?: number, // 20/234873 (0.01%)
				provider_name?: string, // 234870/234873 (100.00%)
				provider_url?: string, // 234870/234873 (100.00%)
				thumbnail_height?: number, // 227240/234873 (96.75%)
				thumbnail_url?: string, // 227264/234873 (96.76%)
				thumbnail_width?: number, // 227240/234873 (96.75%)
				title?: string, // 228432/234873 (97.26%)
				type?: "video"|"rich", // 234870/234873 (100.00%)
				url?: string, // 9750/234873 (4.15%)
				version?: "1.0", // 234870/234873 (100.00%)
				width?: number, // 234870/234873 (100.00%)
			}, // 234873/364084 (64.51%)
			reddit_video?: {
				bitrate_kbps?: number, // 128407/129173 (99.41%)
				dash_url?: string, // 129170/129173 (100.00%)
				duration?: number, // 129170/129173 (100.00%)
				fallback_url?: string, // 129170/129173 (100.00%)
				height?: number, // 129170/129173 (100.00%)
				hls_url?: string, // 129170/129173 (100.00%)
				is_gif?: boolean, // 129170/129173 (100.00%)
				scrubber_media_url?: string, // 129170/129173 (100.00%)
				transcoding_message?: string, // 3/129173 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 129170/129173 (100.00%)
			}, // 129173/364084 (35.48%)
			type?: string, // 234911/364084 (64.52%)
		},
		media_embed: {
			content?: string|null, // 234911/1103504 (21.29%)
			height?: number, // 234911/1103504 (21.29%)
			scrolling?: boolean, // 234911/1103504 (21.29%)
			width?: number, // 234911/1103504 (21.29%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 815/356633 (0.23%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 356554/356633 (99.98%)
				hlsUrl?: string, // 815/356633 (0.23%)
				id?: string, // 356554/356633 (99.98%)
				isGif?: boolean, // 815/356633 (0.23%)
				m?: "image/jpg"|"image/png"|"image/gif", // 355739/356633 (99.75%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 192847/356633 (54.07%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 355739/356633 (99.75%)
				s?: {
					gif?: string, // 8440/355739 (2.37%)
					mp4?: string, // 8440/355739 (2.37%)
					u?: string, // 347299/355739 (97.63%)
					x: number,
					y: number,
				}, // 355739/356633 (99.75%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 815/356633 (0.23%)
				y?: number, // 815/356633 (0.23%)
			},
		}|null, // 85777/1103504 (7.77%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 26/9381 (0.28%)
				vote_count?: number, // 9379/9381 (99.98%)
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"13532918"|"13313169"|"13615305"|"13692223"|"13309531"|"14012226"|"14043663"|"14134251",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2481/1103504 (0.22%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 777067/1103504 (70.42%)
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
					}, // 40154/777067 (5.17%)
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
					}, // 40154/777067 (5.17%)
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
					}, // 397255/777067 (51.12%)
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
					}, // 401683/777067 (51.69%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 188271/188426 (99.92%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 188426/777067 (24.25%)
		}, // 777067/1103504 (70.42%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"content_takedown"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 215/1103504 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"18jtjyt5pdj17", // 38/364084 (0.01%)
			oembed?: {
				author_name?: string, // 229421/234873 (97.68%)
				author_url?: string, // 222685/234873 (94.81%)
				cache_age?: number, // 6382/234873 (2.72%)
				description?: string, // 12050/234873 (5.13%)
				height?: number|null, // 234870/234873 (100.00%)
				html?: string, // 234870/234873 (100.00%)
				mean_alpha?: number, // 20/234873 (0.01%)
				provider_name?: string, // 234870/234873 (100.00%)
				provider_url?: string, // 234870/234873 (100.00%)
				thumbnail_height?: number, // 227240/234873 (96.75%)
				thumbnail_url?: string, // 227264/234873 (96.76%)
				thumbnail_width?: number, // 227240/234873 (96.75%)
				title?: string, // 228432/234873 (97.26%)
				type?: "video"|"rich", // 234870/234873 (100.00%)
				url?: string, // 9750/234873 (4.15%)
				version?: "1.0", // 234870/234873 (100.00%)
				width?: number, // 234870/234873 (100.00%)
			}, // 234873/364084 (64.51%)
			reddit_video?: {
				bitrate_kbps?: number, // 128407/129173 (99.41%)
				dash_url?: string, // 129170/129173 (100.00%)
				duration?: number, // 129170/129173 (100.00%)
				fallback_url?: string, // 129170/129173 (100.00%)
				height?: number, // 129170/129173 (100.00%)
				hls_url?: string, // 129170/129173 (100.00%)
				is_gif?: boolean, // 129170/129173 (100.00%)
				scrubber_media_url?: string, // 129170/129173 (100.00%)
				transcoding_message?: string, // 3/129173 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 129170/129173 (100.00%)
			}, // 129173/364084 (35.48%)
			type?: string, // 234911/364084 (64.52%)
		},
		secure_media_embed: {
			content?: string|null, // 234911/1103504 (21.29%)
			height?: number, // 234911/1103504 (21.29%)
			media_domain_url?: string, // 234911/1103504 (21.29%)
			scrolling?: boolean, // 234911/1103504 (21.29%)
			width?: number, // 234911/1103504 (21.29%)
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
		thumbnail_height?: number|null, // 1103464/1103504 (100.00%)
		thumbnail_width?: number|null, // 1103464/1103504 (100.00%)
		title: string,
		top_awarded_type: null|"INACTIVE"|"ACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: string,
			predictions: {
				body: string,
				created_at: number,
				id: string,
				is_nsfw: boolean,
				is_rtjson: boolean,
				is_spoiler: boolean,
				options: {
					id: string,
					image_url: null,
					text: string,
					total_amount: number,
					user_amount: null,
					vote_count: number,
				}[],
				resolved_option_id: string|null,
				status: "RESOLVED"|"OPEN"|"CLOSED",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "CLOSED"|"LIVE",
			subreddit_id: "t5_2th52"|"t5_3hd4p"|"t5_2qh3s"|"t5_fknyy"|"t5_qir9n"|"t5_31m0v",
			theme_id: "theme_1"|"theme_2"|"theme_3"|"theme_6"|"theme_4",
			total_participants: number,
			tournament_id: string,
		}, // 8/1103504 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 971687/1103504 (88.05%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1488543/29843162 (4.99%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 32856/29843162 (0.11%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 32856/29843162 (0.11%)
	embed_url?: null|string, // 32856/29843162 (0.11%)
	event_end?: number, // 1484/29843162 (0.00%)
	event_is_live?: boolean, // 1484/29843162 (0.00%)
	event_start?: number, // 1484/29843162 (0.00%)
	events?: [], // 32856/29843162 (0.11%)
	eventsOnRender?: [], // 32856/29843162 (0.11%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Install"|"Download"|"View More"|"Order Now"|"Get a Quote"|"Watch Now"|"Get Showtimes"|"Pre-order Now"|"Play Now"|"Contact Us"|"Apply Now"|"See Menu", // 3165/4107874 (0.08%)
			caption?: string, // 459583/4107874 (11.19%)
			display_url?: string, // 2952/4107874 (0.07%)
			id: number,
			media_id: string,
			outbound_url?: string, // 78030/4107874 (1.90%)
		}[],
	}|null, // 1616887/29843162 (5.42%)
	gilded: number,
	gildings: {
		gid_1?: number, // 475794/29843162 (1.59%)
		gid_2?: number, // 33066/29843162 (0.11%)
		gid_3?: number, // 6610/29843162 (0.02%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 32856/29843162 (0.11%)
	id: string,
	impression_id?: null, // 32856/29843162 (0.11%)
	impression_id_str?: null, // 32856/29843162 (0.11%)
	is_blank?: boolean, // 32856/29843162 (0.11%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 1616887/29843162 (5.42%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 32854/29843162 (0.11%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 487720/5333389 (9.14%)
		e: "text"|"emoji",
		t?: string, // 4845669/5333389 (90.86%)
		u?: string, // 487720/5333389 (9.14%)
	}[],
	link_flair_template_id?: string, // 8824432/29843162 (29.57%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds?: number, // 193/194 (99.48%)
		recording_fallback_url?: string, // 143/194 (73.71%)
		recording_status?: number, // 193/194 (99.48%)
		room_id: string,
	}, // 194/29843162 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: string, // 195/3493083 (0.01%)
		oembed?: {
			author_name?: string, // 2463944/2648468 (93.03%)
			author_url?: string, // 2425208/2648468 (91.57%)
			cache_age?: number, // 156620/2648468 (5.91%)
			description?: string, // 245917/2648468 (9.29%)
			height?: number|null, // 2648449/2648468 (100.00%)
			html?: string, // 2648449/2648468 (100.00%)
			marginheight?: number, // 5/2648468 (0.00%)
			marginwidth?: number, // 5/2648468 (0.00%)
			mean_alpha?: number, // 3138/2648468 (0.12%)
			provider_name?: string, // 2648449/2648468 (100.00%)
			provider_url?: string, // 2648449/2648468 (100.00%)
			thumbnail_height?: number, // 2486819/2648468 (93.90%)
			thumbnail_url?: string, // 2487608/2648468 (93.93%)
			thumbnail_width?: number, // 2486819/2648468 (93.90%)
			title?: string, // 2491431/2648468 (94.07%)
			type?: "video"|"rich", // 2648449/2648468 (100.00%)
			url?: string, // 263501/2648468 (9.95%)
			version?: "1.0", // 2648444/2648468 (100.00%)
			width?: number, // 2648449/2648468 (100.00%)
		}, // 2648468/3493083 (75.82%)
		reddit_video?: {
			bitrate_kbps?: number, // 839914/844420 (99.47%)
			dash_url?: string, // 839935/844420 (99.47%)
			duration?: number, // 839935/844420 (99.47%)
			fallback_url?: string, // 839935/844420 (99.47%)
			height?: number|null, // 840140/844420 (99.49%)
			hls_url?: string, // 839935/844420 (99.47%)
			is_gif?: boolean, // 839935/844420 (99.47%)
			scrubber_media_url?: string, // 839935/844420 (99.47%)
			transcoding_message?: string, // 4485/844420 (0.53%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 840140/844420 (99.49%)
		}, // 844420/3493083 (24.17%)
		type?: string, // 2648663/3493083 (75.83%)
	},
	media_embed: {
		content?: string|null, // 2648663/29843162 (8.88%)
		height?: number, // 2648663/29843162 (8.88%)
		scrolling?: boolean, // 2648663/29843162 (8.88%)
		width?: number, // 2648663/29843162 (8.88%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14657/4493730 (0.33%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 4492174/4493730 (99.97%)
			hlsUrl?: string, // 14657/4493730 (0.33%)
			id?: string, // 4492174/4493730 (99.97%)
			isGif?: boolean, // 14657/4493730 (0.33%)
			m?: "image/jpg"|"image/png"|"image/gif", // 4477517/4493730 (99.64%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1527102/4493730 (33.98%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4477517/4493730 (99.64%)
			s?: {
				gif?: string, // 38108/4477517 (0.85%)
				mp4?: string, // 38108/4477517 (0.85%)
				u?: string, // 4439409/4477517 (99.15%)
				x: number,
				y: number,
			}, // 4477517/4493730 (99.64%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 14657/4493730 (0.33%)
			y?: number, // 14657/4493730 (0.33%)
		},
	}|null, // 1961133/29843162 (6.57%)
	media_only: boolean,
	mobile_ad_url?: string, // 32856/29843162 (0.11%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 32856/29843162 (0.11%)
	outbound_link?: {
	}, // 32856/29843162 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 4111/384864 (1.07%)
			vote_count?: number, // 384678/384864 (99.95%)
		}[],
		prediction_status: null|"RESOLVED"|"CANCELLED"|"OPEN",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 136590/29843162 (0.46%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 10030852/29843162 (33.61%)
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
				}, // 191988/10030852 (1.91%)
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
				}, // 191988/10030852 (1.91%)
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
				}, // 3543061/10030852 (35.32%)
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
				}, // 3605416/10030852 (35.94%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 804499/804661 (99.98%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 804661/10030852 (8.02%)
	}, // 10030852/29843162 (33.61%)
	priority_id?: null, // 32856/29843162 (0.11%)
	promo_layout?: null, // 32854/29843162 (0.11%)
	promoted?: boolean, // 32856/29843162 (0.11%)
	promoted_by?: null, // 32856/29843162 (0.11%)
	promoted_display_name?: null, // 32856/29843162 (0.11%)
	promoted_url?: null, // 32856/29843162 (0.11%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 17617/29843162 (0.06%)
	score: number,
	secure_media: null|{
		event_id?: string, // 195/3493083 (0.01%)
		oembed?: {
			author_name?: string, // 2463944/2648468 (93.03%)
			author_url?: string, // 2425208/2648468 (91.57%)
			cache_age?: number, // 156620/2648468 (5.91%)
			description?: string, // 245917/2648468 (9.29%)
			height?: number|null, // 2648449/2648468 (100.00%)
			html?: string, // 2648449/2648468 (100.00%)
			marginheight?: number, // 5/2648468 (0.00%)
			marginwidth?: number, // 5/2648468 (0.00%)
			mean_alpha?: number, // 3138/2648468 (0.12%)
			provider_name?: string, // 2648449/2648468 (100.00%)
			provider_url?: string, // 2648449/2648468 (100.00%)
			thumbnail_height?: number, // 2486819/2648468 (93.90%)
			thumbnail_url?: string, // 2487608/2648468 (93.93%)
			thumbnail_width?: number, // 2486819/2648468 (93.90%)
			title?: string, // 2491431/2648468 (94.07%)
			type?: "video"|"rich", // 2648449/2648468 (100.00%)
			url?: string, // 263501/2648468 (9.95%)
			version?: "1.0", // 2648444/2648468 (100.00%)
			width?: number, // 2648449/2648468 (100.00%)
		}, // 2648468/3493083 (75.82%)
		reddit_video?: {
			bitrate_kbps?: number, // 839914/844420 (99.47%)
			dash_url?: string, // 839935/844420 (99.47%)
			duration?: number, // 839935/844420 (99.47%)
			fallback_url?: string, // 839935/844420 (99.47%)
			height?: number|null, // 840140/844420 (99.49%)
			hls_url?: string, // 839935/844420 (99.47%)
			is_gif?: boolean, // 839935/844420 (99.47%)
			scrubber_media_url?: string, // 839935/844420 (99.47%)
			transcoding_message?: string, // 4485/844420 (0.53%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 840140/844420 (99.49%)
		}, // 844420/3493083 (24.17%)
		type?: string, // 2648663/3493083 (75.83%)
	},
	secure_media_embed: {
		content?: string|null, // 2648663/29843162 (8.88%)
		height?: number, // 2648663/29843162 (8.88%)
		media_domain_url?: string, // 2648663/29843162 (8.88%)
		scrolling?: boolean, // 2648663/29843162 (8.88%)
		width?: number, // 2648663/29843162 (8.88%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 32856/29843162 (0.11%)
	sk_ad_network_data?: null, // 32856/29843162 (0.11%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 32856/29843162 (0.11%)
	third_party_tracking?: null, // 32856/29843162 (0.11%)
	third_party_tracking_2?: null, // 32856/29843162 (0.11%)
	thumbnail: string,
	thumbnail_height?: number|null, // 29826548/29843162 (99.94%)
	thumbnail_width?: number|null, // 29826548/29843162 (99.94%)
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	tournament_data?: {
		currency: "GAME_TOKENS",
		name: string,
		predictions?: {
			body: string,
			created_at: number,
			id: string,
			is_nsfw: boolean,
			is_rtjson: boolean,
			is_spoiler: boolean,
			options: {
				id: string,
				image_url: null,
				text: string,
				total_amount: number|null,
				user_amount: null,
				vote_count: number|null,
			}[],
			resolved_option_id: string|null,
			status: "RESOLVED"|"OPEN",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[], // 85/88 (96.59%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_8"|"theme_4"|"theme_6"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 88/29843162 (0.00%)
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 17262695/29843162 (57.84%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}