interface RedditPost {
	adserver_click_url?: null, // 39052/33002461 (0.12%)
	adserver_imp_pixel?: null, // 39052/33002461 (0.12%)
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
		sticky_duration_seconds?: null, // 1921/1106426 (0.17%)
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
	app_store_data?: null, // 39052/33002461 (0.12%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 73141/33002461 (0.22%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 683030/1939679 (35.21%)
		e: "text"|"emoji",
		t?: string, // 1256649/1939679 (64.79%)
		u?: string, // 683030/1939679 (35.21%)
	}[], // 24649215/33002461 (74.69%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 24649215/33002461 (74.69%)
	author_fullname?: string, // 24649215/33002461 (74.69%)
	author_id?: string|null, // 39052/33002461 (0.12%)
	author_patreon_flair?: boolean, // 24649215/33002461 (74.69%)
	author_premium?: boolean, // 24649215/33002461 (74.69%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 346840/33002461 (1.05%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"funny"|"writing"|"food"|"memes"|"music",
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
			display_name: "Denmark"|"wallstreetbets"|"chloe",
			display_name_prefixed: "r/Denmark"|"r/wallstreetbets"|"r/chloe",
			icon_img: string,
			icon_size: number[],
			key_color: "#ea0027"|"",
			mod_permissions: [],
			name: "t5_2qjto"|"t5_2th52"|"t5_2qpoa",
			over_18: boolean,
			primary_color: "#e31836"|"#2c3e50"|"#014980",
			sr: "Denmark"|"wallstreetbets"|"chloe",
			sr_display_name_prefixed: "r/Denmark"|"r/wallstreetbets"|"r/chloe",
			subreddit_type: "public",
			subscribers: number,
			title: "r/Denmark - Danmarks største subreddit"|"wallstreetbets"|"Chloe",
			url: "/r/Denmark/"|"/r/wallstreetbets/"|"/r/chloe/",
			user_can_crosspost: boolean|null,
			whitelist_status: "all_ads"|"some_ads"|"no_ads",
		}, // 4/11738 (0.03%)
		subreddit_id: string,
		title: string,
	}[], // 11738/33002461 (0.04%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1675153/33002461 (5.08%)
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
			sticky_duration_seconds?: null, // 372/1035001 (0.04%)
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
		author_cakeday?: boolean, // 3143/1452877 (0.22%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 53939/128116 (42.10%)
			e: "text"|"emoji",
			t?: string, // 74177/128116 (57.90%)
			u?: string, // 53939/128116 (42.10%)
		}[], // 1275639/1452877 (87.80%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1275639/1452877 (87.80%)
		author_fullname?: string, // 1275639/1452877 (87.80%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1275639/1452877 (87.80%)
		author_premium?: boolean, // 1275639/1452877 (87.80%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 14998/1452877 (1.03%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"animals"|"drawing_and_painting"|"funny"|"photography"|"gaming"|"food"|"entertainment",
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
		}[], // 1231/1452877 (0.08%)
		content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"music"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 386/1452877 (0.03%)
		event_is_live?: boolean, // 386/1452877 (0.03%)
		event_start?: number, // 386/1452877 (0.03%)
		gallery_data?: {
			items: {
				caption?: string, // 57604/421504 (13.67%)
				id: number,
				media_id: string,
				outbound_url?: string, // 25311/421504 (6.00%)
			}[],
		}|null, // 107543/1452877 (7.40%)
		gilded: number,
		gildings: {
			gid_1?: number, // 210737/1452877 (14.50%)
			gid_2?: number, // 36850/1452877 (2.54%)
			gid_3?: number, // 11561/1452877 (0.80%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 107543/1452877 (7.40%)
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
			a?: string, // 37774/248750 (15.19%)
			e: "text"|"emoji",
			t?: string, // 210976/248750 (84.81%)
			u?: string, // 37774/248750 (15.19%)
		}[],
		link_flair_template_id?: string, // 453714/1452877 (31.23%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_duration_seconds: number,
			recording_fallback_url?: string, // 21/23 (91.30%)
			recording_status: number,
			room_id: "c380c195-cf05-4d8f-b3c8-9f3c46b01158"|"04dab3f4-7441-4ee1-970f-99386c019e89"|"6fc3fbfb-7cfc-49d9-8662-16723ef7d523"|"77ea2818-bf44-4b7f-80fd-e42e59aacaa5"|"b1fb67a9-9150-46eb-beb6-ec91f5634d79"|"463f655c-a2bd-436a-8bc9-cb609522f6b6"|"56d72a9c-d5d7-42b9-a070-8d06a47ef797"|"9ac25b11-fac7-472b-bf6f-ae8cb4678581"|"9d767aa2-0903-425b-a3eb-3ca438a8f0ec"|"a365218e-b0af-48ee-988e-3e60874e803e"|"be35379c-b906-498a-88a7-2fb56dc59c5e"|"12cb83a0-daa7-4743-a96f-491686b34724"|"61b7ee9e-c132-4a78-801e-3074ae7a4f88"|"674fb96c-1183-4e8b-9777-b32b617e3ebd"|"d92fdce1-4fb5-4f01-9442-f0d6ef173827",
		}, // 23/1452877 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"18qniatld5rd4"|"18t3uyo8p0wpu", // 4/556766 (0.00%)
			oembed?: {
				author_name?: string, // 382934/392266 (97.62%)
				author_url?: string, // 375921/392266 (95.83%)
				cache_age?: number, // 5934/392266 (1.51%)
				description?: string, // 16868/392266 (4.30%)
				height?: number|null, // 392261/392266 (100.00%)
				html?: string, // 392261/392266 (100.00%)
				mean_alpha?: number, // 20/392266 (0.01%)
				provider_name?: string, // 392261/392266 (100.00%)
				provider_url?: string, // 392261/392266 (100.00%)
				thumbnail_height?: number, // 384233/392266 (97.95%)
				thumbnail_url?: string, // 384313/392266 (97.97%)
				thumbnail_width?: number, // 384233/392266 (97.95%)
				title?: string, // 386243/392266 (98.46%)
				type?: "video"|"rich", // 392261/392266 (100.00%)
				url?: string, // 9942/392266 (2.53%)
				version?: "1.0", // 392261/392266 (100.00%)
				width?: number, // 392261/392266 (100.00%)
			}, // 392266/556766 (70.45%)
			reddit_video?: {
				bitrate_kbps?: number, // 163661/164496 (99.49%)
				dash_url?: string, // 164485/164496 (99.99%)
				duration?: number, // 164485/164496 (99.99%)
				fallback_url?: string, // 164485/164496 (99.99%)
				height?: number|null, // 164487/164496 (99.99%)
				hls_url?: string, // 164485/164496 (99.99%)
				is_gif?: boolean, // 164485/164496 (99.99%)
				scrubber_media_url?: string, // 164485/164496 (99.99%)
				transcoding_message?: string, // 11/164496 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 164487/164496 (99.99%)
			}, // 164496/556766 (29.54%)
			type?: string, // 392270/556766 (70.46%)
		},
		media_embed: {
			content?: string|null, // 392270/1452877 (27.00%)
			height?: number, // 392270/1452877 (27.00%)
			scrolling?: boolean, // 392270/1452877 (27.00%)
			width?: number, // 392270/1452877 (27.00%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 984/452119 (0.22%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 451964/452119 (99.97%)
				hlsUrl?: string, // 984/452119 (0.22%)
				id?: string, // 451964/452119 (99.97%)
				isGif?: boolean, // 984/452119 (0.22%)
				m?: "image/jpg"|"image/png"|"image/gif", // 450980/452119 (99.75%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 274418/452119 (60.70%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 450980/452119 (99.75%)
				s?: {
					gif?: string, // 10761/450980 (2.39%)
					mp4?: string, // 10761/450980 (2.39%)
					u?: string, // 440219/450980 (97.61%)
					x: number,
					y: number,
				}, // 450980/452119 (99.75%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 984/452119 (0.22%)
				y?: number, // 984/452119 (0.22%)
			},
		}|null, // 121309/1452877 (8.35%)
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
				total_stake_amount?: number, // 70/12618 (0.55%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED"|"CANCELLED"|"CLOSED",
			resolved_option_id: null|"15107583"|"14893621"|"14986868"|"14942333"|"15145988"|"13508936"|"15107580"|"14556598"|"15289529"|"15386358"|"15386263"|"15483592"|"15370344"|"15504281",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 3891/1452877 (0.27%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery", // 978758/1452877 (67.37%)
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
					}, // 44685/978758 (4.57%)
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
					}, // 44685/978758 (4.57%)
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
					}, // 532872/978758 (54.44%)
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
					}, // 537648/978758 (54.93%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 278912/279107 (99.93%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 279107/978758 (28.52%)
		}, // 978758/1452877 (67.37%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"author"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 167/1452877 (0.01%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"18qniatld5rd4"|"18t3uyo8p0wpu", // 4/556766 (0.00%)
			oembed?: {
				author_name?: string, // 382934/392266 (97.62%)
				author_url?: string, // 375921/392266 (95.83%)
				cache_age?: number, // 5934/392266 (1.51%)
				description?: string, // 16868/392266 (4.30%)
				height?: number|null, // 392261/392266 (100.00%)
				html?: string, // 392261/392266 (100.00%)
				mean_alpha?: number, // 20/392266 (0.01%)
				provider_name?: string, // 392261/392266 (100.00%)
				provider_url?: string, // 392261/392266 (100.00%)
				thumbnail_height?: number, // 384233/392266 (97.95%)
				thumbnail_url?: string, // 384313/392266 (97.97%)
				thumbnail_width?: number, // 384233/392266 (97.95%)
				title?: string, // 386243/392266 (98.46%)
				type?: "video"|"rich", // 392261/392266 (100.00%)
				url?: string, // 9942/392266 (2.53%)
				version?: "1.0", // 392261/392266 (100.00%)
				width?: number, // 392261/392266 (100.00%)
			}, // 392266/556766 (70.45%)
			reddit_video?: {
				bitrate_kbps?: number, // 163661/164496 (99.49%)
				dash_url?: string, // 164485/164496 (99.99%)
				duration?: number, // 164485/164496 (99.99%)
				fallback_url?: string, // 164485/164496 (99.99%)
				height?: number|null, // 164487/164496 (99.99%)
				hls_url?: string, // 164485/164496 (99.99%)
				is_gif?: boolean, // 164485/164496 (99.99%)
				scrubber_media_url?: string, // 164485/164496 (99.99%)
				transcoding_message?: string, // 11/164496 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 164487/164496 (99.99%)
			}, // 164496/556766 (29.54%)
			type?: string, // 392270/556766 (70.46%)
		},
		secure_media_embed: {
			content?: string|null, // 392270/1452877 (27.00%)
			height?: number, // 392270/1452877 (27.00%)
			media_domain_url?: string, // 392270/1452877 (27.00%)
			scrolling?: boolean, // 392270/1452877 (27.00%)
			width?: number, // 392270/1452877 (27.00%)
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
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height?: number|null, // 1452876/1452877 (100.00%)
		thumbnail_width?: number|null, // 1452876/1452877 (100.00%)
		title: string,
		top_awarded_type: null|"INACTIVE",
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
			}[],
			status: "LIVE"|"CLOSED",
			subreddit_id: "t5_2qh1f"|"t5_2th52"|"t5_2sgj8"|"t5_qir9n"|"t5_fknyy"|"t5_2vt38"|"t5_2qhqk"|"t5_31m0v",
			theme_id: "theme_1"|"theme_8"|"theme_4"|"theme_5"|"theme_6",
			total_participants: number,
			tournament_id: string,
		}, // 12/1452877 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1318140/1452877 (90.73%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1675153/33002461 (5.08%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 39052/33002461 (0.12%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 39052/33002461 (0.12%)
	embed_url?: null|string, // 39052/33002461 (0.12%)
	event_end?: number, // 1496/33002461 (0.00%)
	event_is_live?: boolean, // 1496/33002461 (0.00%)
	event_start?: number, // 1496/33002461 (0.00%)
	events?: [], // 39052/33002461 (0.12%)
	eventsOnRender?: [], // 39052/33002461 (0.12%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Apply Now"|"View More"|"Install"|"Download"|"Play Now"|"Get Showtimes"|"Contact Us"|"Order Now"|"Get a Quote"|"Pre-order Now"|"Watch Now"|"See Menu", // 3069/5298442 (0.06%)
			caption?: string, // 532091/5298442 (10.04%)
			display_url?: string, // 2819/5298442 (0.05%)
			id: number,
			media_id: string,
			outbound_url?: string, // 98266/5298442 (1.85%)
		}[],
	}|null, // 2344723/33002461 (7.10%)
	gilded: number,
	gildings: {
		gid_1?: number, // 281640/33002461 (0.85%)
		gid_2?: number, // 32871/33002461 (0.10%)
		gid_3?: number, // 6504/33002461 (0.02%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 39052/33002461 (0.12%)
	id: string,
	impression_id?: null, // 39052/33002461 (0.12%)
	impression_id_str?: null, // 39052/33002461 (0.12%)
	is_blank?: boolean, // 39052/33002461 (0.12%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2344723/33002461 (7.10%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 39052/33002461 (0.12%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 675748/6598840 (10.24%)
		e: "text"|"emoji",
		t?: string, // 5923092/6598840 (89.76%)
		u?: string, // 675748/6598840 (10.24%)
	}[],
	link_flair_template_id?: string, // 11206394/33002461 (33.96%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_duration_seconds: number,
		recording_fallback_url?: string, // 253/368 (68.75%)
		recording_status: number,
		room_id: string,
	}, // 368/33002461 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: string, // 54/4227929 (0.00%)
		oembed?: {
			author_name?: string, // 2937480/3172847 (92.58%)
			author_url?: string, // 2889785/3172847 (91.08%)
			cache_age?: number, // 146633/3172847 (4.62%)
			description?: string, // 308643/3172847 (9.73%)
			height?: number|null, // 3172792/3172847 (100.00%)
			html?: string, // 3172792/3172847 (100.00%)
			marginheight?: number, // 5/3172847 (0.00%)
			marginwidth?: number, // 5/3172847 (0.00%)
			mean_alpha?: number, // 2669/3172847 (0.08%)
			provider_name?: string, // 3172792/3172847 (100.00%)
			provider_url?: string, // 3172792/3172847 (100.00%)
			thumbnail_height?: number, // 3018758/3172847 (95.14%)
			thumbnail_url?: string, // 3020559/3172847 (95.20%)
			thumbnail_width?: number, // 3018758/3172847 (95.14%)
			title?: string, // 3024750/3172847 (95.33%)
			type?: "video"|"rich", // 3172792/3172847 (100.00%)
			url?: string, // 285768/3172847 (9.01%)
			version?: "1.0", // 3172787/3172847 (100.00%)
			width?: number, // 3172792/3172847 (100.00%)
		}, // 3172847/4227929 (75.04%)
		reddit_video?: {
			bitrate_kbps?: number, // 1048660/1055028 (99.40%)
			dash_url?: string, // 1048660/1055028 (99.40%)
			duration?: number, // 1048660/1055028 (99.40%)
			fallback_url?: string, // 1048660/1055028 (99.40%)
			height?: number|null, // 1048997/1055028 (99.43%)
			hls_url?: string, // 1048660/1055028 (99.40%)
			is_gif?: boolean, // 1048660/1055028 (99.40%)
			scrubber_media_url?: string, // 1048660/1055028 (99.40%)
			transcoding_message?: string, // 6368/1055028 (0.60%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1048997/1055028 (99.43%)
		}, // 1055028/4227929 (24.95%)
		type?: string, // 3172901/4227929 (75.05%)
	},
	media_embed: {
		content?: string|null, // 3172901/33002461 (9.61%)
		height?: number, // 3172901/33002461 (9.61%)
		scrolling?: boolean, // 3172901/33002461 (9.61%)
		width?: number, // 3172901/33002461 (9.61%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17543/5742866 (0.31%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 5739359/5742866 (99.94%)
			hlsUrl?: string, // 17543/5742866 (0.31%)
			id?: string, // 5739359/5742866 (99.94%)
			isGif?: boolean, // 17543/5742866 (0.31%)
			m?: "image/jpg"|"image/png"|"image/gif", // 5721816/5742866 (99.63%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2175920/5742866 (37.89%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5721816/5742866 (99.63%)
			s?: {
				gif?: string, // 49739/5721816 (0.87%)
				mp4?: string, // 49739/5721816 (0.87%)
				u?: string, // 5672077/5721816 (99.13%)
				x: number,
				y: number,
			}, // 5721816/5742866 (99.63%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 17543/5742866 (0.31%)
			y?: number, // 17543/5742866 (0.31%)
		},
	}|null, // 2775790/33002461 (8.41%)
	media_only: boolean,
	mobile_ad_url?: string, // 39052/33002461 (0.12%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 39052/33002461 (0.12%)
	outbound_link?: {
	}, // 39052/33002461 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 5135/442350 (1.16%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED"|"OPEN"|"CANCELLED"|"CLOSED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 171289/33002461 (0.52%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 10986898/33002461 (33.29%)
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
				}, // 209388/10986898 (1.91%)
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
				}, // 209388/10986898 (1.91%)
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
				}, // 4191533/10986898 (38.15%)
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
				}, // 4254978/10986898 (38.73%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1021372/1021547 (99.98%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1021547/10986898 (9.30%)
	}, // 10986898/33002461 (33.29%)
	priority_id?: null, // 39052/33002461 (0.12%)
	promo_layout?: null, // 39052/33002461 (0.12%)
	promoted?: boolean, // 39052/33002461 (0.12%)
	promoted_by?: null, // 39052/33002461 (0.12%)
	promoted_display_name?: null, // 39052/33002461 (0.12%)
	promoted_url?: null, // 39052/33002461 (0.12%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 21545/33002461 (0.07%)
	score: number,
	secure_media: null|{
		event_id?: string, // 54/4227929 (0.00%)
		oembed?: {
			author_name?: string, // 2937480/3172847 (92.58%)
			author_url?: string, // 2889785/3172847 (91.08%)
			cache_age?: number, // 146633/3172847 (4.62%)
			description?: string, // 308643/3172847 (9.73%)
			height?: number|null, // 3172792/3172847 (100.00%)
			html?: string, // 3172792/3172847 (100.00%)
			marginheight?: number, // 5/3172847 (0.00%)
			marginwidth?: number, // 5/3172847 (0.00%)
			mean_alpha?: number, // 2669/3172847 (0.08%)
			provider_name?: string, // 3172792/3172847 (100.00%)
			provider_url?: string, // 3172792/3172847 (100.00%)
			thumbnail_height?: number, // 3018758/3172847 (95.14%)
			thumbnail_url?: string, // 3020559/3172847 (95.20%)
			thumbnail_width?: number, // 3018758/3172847 (95.14%)
			title?: string, // 3024750/3172847 (95.33%)
			type?: "video"|"rich", // 3172792/3172847 (100.00%)
			url?: string, // 285768/3172847 (9.01%)
			version?: "1.0", // 3172787/3172847 (100.00%)
			width?: number, // 3172792/3172847 (100.00%)
		}, // 3172847/4227929 (75.04%)
		reddit_video?: {
			bitrate_kbps?: number, // 1048660/1055028 (99.40%)
			dash_url?: string, // 1048660/1055028 (99.40%)
			duration?: number, // 1048660/1055028 (99.40%)
			fallback_url?: string, // 1048660/1055028 (99.40%)
			height?: number|null, // 1048997/1055028 (99.43%)
			hls_url?: string, // 1048660/1055028 (99.40%)
			is_gif?: boolean, // 1048660/1055028 (99.40%)
			scrubber_media_url?: string, // 1048660/1055028 (99.40%)
			transcoding_message?: string, // 6368/1055028 (0.60%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1048997/1055028 (99.43%)
		}, // 1055028/4227929 (24.95%)
		type?: string, // 3172901/4227929 (75.05%)
	},
	secure_media_embed: {
		content?: string|null, // 3172901/33002461 (9.61%)
		height?: number, // 3172901/33002461 (9.61%)
		media_domain_url?: string, // 3172901/33002461 (9.61%)
		scrolling?: boolean, // 3172901/33002461 (9.61%)
		width?: number, // 3172901/33002461 (9.61%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 39052/33002461 (0.12%)
	sk_ad_network_data?: null, // 39052/33002461 (0.12%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 39052/33002461 (0.12%)
	third_party_tracking?: null, // 39052/33002461 (0.12%)
	third_party_tracking_2?: null, // 39052/33002461 (0.12%)
	thumbnail: string,
	thumbnail_height?: number|null, // 32996899/33002461 (99.98%)
	thumbnail_width?: number|null, // 32996899/33002461 (99.98%)
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
			status: "RESOLVED"|"OPEN"|"CLOSED",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[], // 93/96 (96.88%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_8"|"theme_4"|"theme_3"|"theme_7"|"theme_6",
		total_participants: number,
		tournament_id: string,
	}, // 96/33002461 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 21635474/33002461 (65.56%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}