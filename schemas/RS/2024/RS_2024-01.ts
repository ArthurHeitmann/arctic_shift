interface RedditPost {
	_meta: {
		is_edited?: boolean, // 889788/41235982 (2.16%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 8355958/41235982 (20.26%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 7128541/41235982 (17.29%)
		retrieved_2nd_on?: number, // 32880024/41235982 (79.74%)
		was_deleted_later?: boolean, // 6589293/41235982 (15.98%)
		was_initially_deleted?: boolean, // 539248/41235982 (1.31%)
	},
	ad_business?: null, // 100596/41235982 (0.24%)
	ad_promoted_user_posts?: null, // 100596/41235982 (0.24%)
	ad_supplementary_text_md?: null|string, // 100596/41235982 (0.24%)
	ad_user_targeting?: null, // 100596/41235982 (0.24%)
	adserver_click_url?: null, // 100596/41235982 (0.24%)
	adserver_imp_pixel?: null, // 100596/41235982 (0.24%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 100596/41235982 (0.24%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 121057/41235982 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 806273/2132521 (37.81%)
		e: "text"|"emoji",
		t?: string, // 1326248/2132521 (62.19%)
		u?: string, // 806273/2132521 (37.81%)
	}[], // 40776061/41235982 (98.88%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 40776061/41235982 (98.88%)
	author_fullname?: string, // 40776061/41235982 (98.88%)
	author_id?: string, // 100596/41235982 (0.24%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 40776061/41235982 (98.88%)
	author_premium?: boolean, // 40776061/41235982 (98.88%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Install"|"View More"|"Apply Now"|"Play Now"|"Order Now"|"Watch Now"|"Contact Us"|"Pre-order Now"|"Get a Quote"|"Get Showtimes"|"See Menu", // 76308/41235982 (0.19%)
	campaign_id?: null, // 100596/41235982 (0.24%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"photography"|"gaming"|"music"|"animals"|"memes",
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
		sr_detail?: {
			banner_img: string,
			banner_size: null|number[],
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: string,
			display_name_prefixed: string,
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#7e53c1"|"#ffb000"|"#0079d3"|"#ea0027"|"#46d160"|"#ddbd37"|"#24a0ed",
			mod_permissions: [],
			name: string,
			over_18: boolean,
			primary_color: string,
			sr: string,
			sr_display_name_prefixed: string,
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads"|"some_ads",
		}, // 57/6217 (0.92%)
		subreddit_id: string,
		title: string,
	}[], // 6217/41235982 (0.02%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1390169/41235982 (3.37%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 5939/1389998 (0.43%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 46160/122652 (37.63%)
			e: "text"|"emoji",
			t?: string, // 76492/122652 (62.37%)
			u?: string, // 46160/122652 (37.63%)
		}[], // 1378054/1389998 (99.14%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1378054/1389998 (99.14%)
		author_fullname?: string, // 1378054/1389998 (99.14%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1378054/1389998 (99.14%)
		author_premium?: boolean, // 1378054/1389998 (99.14%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 485/1389998 (0.03%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"drawing_and_painting"|"videos"|"gaming"|"food",
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
			sr_detail?: {
				banner_img: "",
				banner_size: null,
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: "workcules"|"vktoons"|"lovehair",
				display_name_prefixed: "r/workcules"|"r/vktoons"|"r/lovehair",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_7ovi2c"|"t5_65xl5n"|"t5_6g68ad",
				over_18: boolean,
				primary_color: "#000000"|"",
				sr: "workcules"|"vktoons"|"lovehair",
				sr_display_name_prefixed: "r/workcules"|"r/vktoons"|"r/lovehair",
				subreddit_type: "restricted"|"public",
				subscribers: number,
				title: "Workcules"|"vktoons"|"lovehair",
				url: "/r/workcules/"|"/r/vktoons/"|"/r/lovehair/",
				user_can_crosspost: boolean,
				whitelist_status: null,
			}, // 4/525 (0.76%)
			subreddit_id: string,
			title: string,
		}[], // 525/1389998 (0.04%)
		content_categories: null|("photography"|"drawing_and_painting"|"writing"|"comics"|"diy_and_crafts"|"gaming"|"entertainment"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 1/1389998 (0.00%)
		event_is_live?: boolean, // 1/1389998 (0.00%)
		event_start?: number, // 1/1389998 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 47769/1236523 (3.86%)
				id: number,
				media_id: string,
				outbound_url?: string, // 25966/1236523 (2.10%)
			}[],
		}|null, // 195020/1389998 (14.03%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 195020/1389998 (14.03%)
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
			a?: string, // 34254/237029 (14.45%)
			e: "text"|"emoji",
			t?: string, // 202775/237029 (85.55%)
			u?: string, // 34254/237029 (14.45%)
		}[],
		link_flair_template_id?: string, // 486957/1389998 (35.03%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 2/426876 (0.00%)
			oembed?: {
				author_name?: string, // 31308/312216 (10.03%)
				author_url?: string, // 31043/312216 (9.94%)
				cache_age?: number, // 4731/312216 (1.52%)
				description?: string, // 2306/312216 (0.74%)
				height?: number|null, // 312204/312216 (100.00%)
				html?: string, // 312204/312216 (100.00%)
				mean_alpha?: number, // 54/312216 (0.02%)
				provider_name?: string, // 312204/312216 (100.00%)
				provider_url?: string, // 312204/312216 (100.00%)
				thumbnail_height?: number|null, // 297401/312216 (95.25%)
				thumbnail_url?: string, // 307270/312216 (98.42%)
				thumbnail_width?: number|null, // 297401/312216 (95.25%)
				title?: string, // 307456/312216 (98.48%)
				type?: "video"|"rich", // 312204/312216 (100.00%)
				url?: string, // 5432/312216 (1.74%)
				version?: "1.0", // 312204/312216 (100.00%)
				width?: number, // 312204/312216 (100.00%)
			}, // 312216/426876 (73.14%)
			reddit_video?: {
				bitrate_kbps?: number, // 114383/114658 (99.76%)
				dash_url?: string, // 114648/114658 (99.99%)
				duration?: number, // 114648/114658 (99.99%)
				fallback_url?: string, // 114648/114658 (99.99%)
				has_audio?: boolean, // 110932/114658 (96.75%)
				height?: number|null, // 114655/114658 (100.00%)
				hls_url?: string, // 114648/114658 (99.99%)
				is_gif?: boolean, // 114648/114658 (99.99%)
				scrubber_media_url?: string, // 114648/114658 (99.99%)
				transcoding_message?: string, // 10/114658 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 114655/114658 (100.00%)
			}, // 114658/426876 (26.86%)
			type?: string, // 312218/426876 (73.14%)
		},
		media_embed: {
			content?: string|null, // 312218/1389998 (22.46%)
			height?: number, // 312218/1389998 (22.46%)
			scrolling?: boolean, // 312218/1389998 (22.46%)
			width?: number, // 312218/1389998 (22.46%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1164/1276974 (0.09%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1276369/1276974 (99.95%)
				hlsUrl?: string, // 1164/1276974 (0.09%)
				id?: string, // 1276369/1276974 (99.95%)
				isGif?: boolean, // 1164/1276974 (0.09%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1275205/1276974 (99.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 924113/1276974 (72.37%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1275205/1276974 (99.86%)
				s?: {
					gif?: string, // 62034/1275205 (4.86%)
					mp4?: string, // 62034/1275205 (4.86%)
					u?: string, // 1213171/1275205 (95.14%)
					x: number,
					y: number,
				}, // 1275205/1276974 (99.86%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1164/1276974 (0.09%)
				y?: number, // 1164/1276974 (0.09%)
			},
		}|null, // 213033/1389998 (15.33%)
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
		parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 279/8396 (3.32%)
			}[],
			prediction_status: null,
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2270/1389998 (0.16%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery", // 1030090/1389998 (74.11%)
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
					}, // 86210/1030090 (8.37%)
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
					}, // 86210/1030090 (8.37%)
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
					}, // 677270/1030090 (65.75%)
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
					}, // 679298/1030090 (65.95%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 316637/316678 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 316678/1030090 (30.74%)
		}, // 1030090/1389998 (74.11%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"content_takedown"|"author"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 2/426876 (0.00%)
			oembed?: {
				author_name?: string, // 31308/312216 (10.03%)
				author_url?: string, // 31043/312216 (9.94%)
				cache_age?: number, // 4731/312216 (1.52%)
				description?: string, // 2306/312216 (0.74%)
				height?: number|null, // 312204/312216 (100.00%)
				html?: string, // 312204/312216 (100.00%)
				mean_alpha?: number, // 54/312216 (0.02%)
				provider_name?: string, // 312204/312216 (100.00%)
				provider_url?: string, // 312204/312216 (100.00%)
				thumbnail_height?: number|null, // 297401/312216 (95.25%)
				thumbnail_url?: string, // 307270/312216 (98.42%)
				thumbnail_width?: number|null, // 297401/312216 (95.25%)
				title?: string, // 307456/312216 (98.48%)
				type?: "video"|"rich", // 312204/312216 (100.00%)
				url?: string, // 5432/312216 (1.74%)
				version?: "1.0", // 312204/312216 (100.00%)
				width?: number, // 312204/312216 (100.00%)
			}, // 312216/426876 (73.14%)
			reddit_video?: {
				bitrate_kbps?: number, // 114383/114658 (99.76%)
				dash_url?: string, // 114648/114658 (99.99%)
				duration?: number, // 114648/114658 (99.99%)
				fallback_url?: string, // 114648/114658 (99.99%)
				has_audio?: boolean, // 110932/114658 (96.75%)
				height?: number|null, // 114655/114658 (100.00%)
				hls_url?: string, // 114648/114658 (99.99%)
				is_gif?: boolean, // 114648/114658 (99.99%)
				scrubber_media_url?: string, // 114648/114658 (99.99%)
				transcoding_message?: string, // 10/114658 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 114655/114658 (100.00%)
			}, // 114658/426876 (26.86%)
			type?: string, // 312218/426876 (73.14%)
		},
		secure_media_embed: {
			content?: string|null, // 312218/1389998 (22.46%)
			height?: number, // 312218/1389998 (22.46%)
			media_domain_url?: string, // 312218/1389998 (22.46%)
			scrolling?: boolean, // 312218/1389998 (22.46%)
			width?: number, // 312218/1389998 (22.46%)
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
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1207877/1389998 (86.90%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1390169/41235982 (3.37%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 100596/41235982 (0.24%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 100596/41235982 (0.24%)
	embed_url?: null|string, // 100596/41235982 (0.24%)
	event_end?: number, // 7/41235982 (0.00%)
	event_is_live?: boolean, // 7/41235982 (0.00%)
	event_start?: number, // 7/41235982 (0.00%)
	events?: [], // 100596/41235982 (0.24%)
	eventsOnRender?: [], // 100596/41235982 (0.24%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Watch Now"|"Order Now"|"Install"|"Pre-order Now"|"Apply Now"|"Contact Us"|"Play Now"|"Get a Quote"|"Get Showtimes"|"See Menu", // 45727/13770505 (0.33%)
			caption?: string, // 343885/13770505 (2.50%)
			display_url?: string, // 48379/13770505 (0.35%)
			id: number,
			media_id: string,
			outbound_url?: string, // 147665/13770505 (1.07%)
			product?: {
				description: string,
				price?: string, // 12169/12209 (99.67%)
				title: string,
			}, // 12209/13770505 (0.09%)
		}[],
	}|null, // 3610176/41235982 (8.75%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 100596/41235982 (0.24%)
	id: string,
	impression_id?: null, // 100596/41235982 (0.24%)
	impression_id_str?: null, // 100596/41235982 (0.24%)
	is_blank?: boolean, // 100596/41235982 (0.24%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3610176/41235982 (8.75%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 100596/41235982 (0.24%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 835837/7553787 (11.07%)
		e: "text"|"emoji",
		t?: string, // 6717950/7553787 (88.93%)
		u?: string, // 835837/7553787 (11.07%)
	}[],
	link_flair_template_id?: string, // 15020818/41235982 (36.43%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 190/3740547 (0.01%)
		oembed?: {
			author_name?: string, // 767703/2702553 (28.41%)
			author_url?: string, // 766083/2702553 (28.35%)
			cache_age?: number, // 40689/2702553 (1.51%)
			description?: string, // 120813/2702553 (4.47%)
			height?: number|null, // 2701326/2702553 (99.95%)
			html?: string, // 2701326/2702553 (99.95%)
			marginheight?: number, // 1/2702553 (0.00%)
			marginwidth?: number, // 1/2702553 (0.00%)
			mean_alpha?: number, // 2935/2702553 (0.11%)
			provider_name?: string, // 2701326/2702553 (99.95%)
			provider_url?: string, // 2701326/2702553 (99.95%)
			thumbnail_height?: number|null, // 2612728/2702553 (96.68%)
			thumbnail_url?: string, // 2660853/2702553 (98.46%)
			thumbnail_width?: number|null, // 2612728/2702553 (96.68%)
			title?: string, // 2660477/2702553 (98.44%)
			type?: "video"|"rich", // 2701326/2702553 (99.95%)
			url?: string, // 74888/2702553 (2.77%)
			version?: "1.0", // 2701325/2702553 (99.95%)
			width?: number, // 2701326/2702553 (99.95%)
		}, // 2702553/3740547 (72.25%)
		reddit_video?: {
			bitrate_kbps?: number, // 1033787/1037804 (99.61%)
			dash_url?: string, // 1033787/1037804 (99.61%)
			duration?: number, // 1033787/1037804 (99.61%)
			fallback_url?: string, // 1033787/1037804 (99.61%)
			has_audio?: boolean, // 1032738/1037804 (99.51%)
			height?: number|null, // 1036259/1037804 (99.85%)
			hls_url?: string, // 1033787/1037804 (99.61%)
			is_gif?: boolean, // 1033787/1037804 (99.61%)
			scrubber_media_url?: string, // 1033787/1037804 (99.61%)
			transcoding_message?: string, // 4017/1037804 (0.39%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1036259/1037804 (99.85%)
		}, // 1037804/3740547 (27.74%)
		type?: string, // 2702743/3740547 (72.26%)
	},
	media_embed: {
		content?: string|null, // 2702743/41235982 (6.55%)
		height?: number, // 2702743/41235982 (6.55%)
		scrolling?: boolean, // 2702743/41235982 (6.55%)
		width?: number, // 2702743/41235982 (6.55%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20922/14370651 (0.15%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 14313419/14370651 (99.60%)
			hlsUrl?: string, // 20922/14370651 (0.15%)
			id?: string, // 14313419/14370651 (99.60%)
			isGif?: boolean, // 20922/14370651 (0.15%)
			m?: "image/jpg"|"image/png"|"image/gif", // 14292497/14370651 (99.46%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6522853/14370651 (45.39%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14292497/14370651 (99.46%)
			s?: {
				gif?: string, // 179158/14292497 (1.25%)
				mp4?: string, // 179158/14292497 (1.25%)
				u?: string, // 14113339/14292497 (98.75%)
				x: number,
				y: number,
			}, // 14292497/14370651 (99.46%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 20922/14370651 (0.15%)
			y?: number, // 20922/14370651 (0.15%)
		},
	}|null, // 4064796/41235982 (9.86%)
	media_only: boolean,
	mobile_ad_url?: string, // 100596/41235982 (0.24%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 100596/41235982 (0.24%)
	outbound_link?: {
	}, // 100596/41235982 (0.24%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 167/324851 (0.05%)
		}[],
		prediction_status: null,
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 98633/41235982 (0.24%)
	post_hint?: "image"|"rich:video"|"link"|"self"|"hosted:video"|"gallery"|"video", // 20996809/41235982 (50.92%)
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
				}, // 1390517/20996809 (6.62%)
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
				}, // 1390517/20996809 (6.62%)
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
				}, // 11754998/20996809 (55.98%)
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
				}, // 11829692/20996809 (56.34%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1839433/1839475 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1839475/20996809 (8.76%)
	}, // 20996809/41235982 (50.92%)
	priority_id?: null, // 100596/41235982 (0.24%)
	product_ids?: [], // 100596/41235982 (0.24%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 100596/41235982 (0.24%)
	promoted?: boolean, // 100596/41235982 (0.24%)
	promoted_by?: null, // 100596/41235982 (0.24%)
	promoted_display_name?: null, // 100596/41235982 (0.24%)
	promoted_url?: null, // 100596/41235982 (0.24%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 190/3740547 (0.01%)
		oembed?: {
			author_name?: string, // 767703/2702553 (28.41%)
			author_url?: string, // 766083/2702553 (28.35%)
			cache_age?: number, // 40689/2702553 (1.51%)
			description?: string, // 120813/2702553 (4.47%)
			height?: number|null, // 2701326/2702553 (99.95%)
			html?: string, // 2701326/2702553 (99.95%)
			marginheight?: number, // 1/2702553 (0.00%)
			marginwidth?: number, // 1/2702553 (0.00%)
			mean_alpha?: number, // 2935/2702553 (0.11%)
			provider_name?: string, // 2701326/2702553 (99.95%)
			provider_url?: string, // 2701326/2702553 (99.95%)
			thumbnail_height?: number|null, // 2612728/2702553 (96.68%)
			thumbnail_url?: string, // 2660853/2702553 (98.46%)
			thumbnail_width?: number|null, // 2612728/2702553 (96.68%)
			title?: string, // 2660477/2702553 (98.44%)
			type?: "video"|"rich", // 2701326/2702553 (99.95%)
			url?: string, // 74888/2702553 (2.77%)
			version?: "1.0", // 2701325/2702553 (99.95%)
			width?: number, // 2701326/2702553 (99.95%)
		}, // 2702553/3740547 (72.25%)
		reddit_video?: {
			bitrate_kbps?: number, // 1033787/1037804 (99.61%)
			dash_url?: string, // 1033787/1037804 (99.61%)
			duration?: number, // 1033787/1037804 (99.61%)
			fallback_url?: string, // 1033787/1037804 (99.61%)
			has_audio?: boolean, // 1032738/1037804 (99.51%)
			height?: number|null, // 1036259/1037804 (99.85%)
			hls_url?: string, // 1033787/1037804 (99.61%)
			is_gif?: boolean, // 1033787/1037804 (99.61%)
			scrubber_media_url?: string, // 1033787/1037804 (99.61%)
			transcoding_message?: string, // 4017/1037804 (0.39%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1036259/1037804 (99.85%)
		}, // 1037804/3740547 (27.74%)
		type?: string, // 2702743/3740547 (72.26%)
	},
	secure_media_embed: {
		content?: string|null, // 2702743/41235982 (6.55%)
		height?: number, // 2702743/41235982 (6.55%)
		media_domain_url?: string, // 2702743/41235982 (6.55%)
		scrolling?: boolean, // 2702743/41235982 (6.55%)
		width?: number, // 2702743/41235982 (6.55%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 100596/41235982 (0.24%)
	sk_ad_network_data?: null, // 100596/41235982 (0.24%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 1063/41235982 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 100596/41235982 (0.24%)
	third_party_tracking?: null, // 100596/41235982 (0.24%)
	third_party_tracking_2?: null, // 100596/41235982 (0.24%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 41235399/41235982 (100.00%)
	thumbnail_width?: number|null, // 41235399/41235982 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 4/41235982 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 24794216/41235982 (60.13%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}