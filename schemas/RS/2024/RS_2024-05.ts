interface RedditPost {
	_meta?: {
		edited_title?: string, // 85882/38555268 (0.22%)
		is_edited?: boolean, // 1420700/38555268 (3.68%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8417191/38555268 (21.83%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7668247/38555268 (19.89%)
		was_initially_deleted?: boolean, // 748944/38555268 (1.94%)
	}, // 38555268/39877545 (96.68%)
	ad_business?: null, // 180206/39877545 (0.45%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "TheBlackSwarm"|"BatmanTold"|"kingpinsnephew420"|"ConsiderationLife513"|"Diligent_Classic"|"Sad_Examination5696",
		author_flair_background_color: "#dadada"|"#1a1a1b"|null,
		author_flair_css_class: null|"blueflair",
		author_flair_richtext: [],
		author_flair_template_id: "7a712216-64d9-11e7-8803-0e2d9340df48"|"94ae63a4-a632-11ee-b9d1-d2c64dc70d44"|null,
		author_flair_text: "we cancellin’ christmas"|"411"|null,
		author_flair_text_color: "dark"|"light"|null,
		author_flair_type: "text",
		author_fullname: "t2_4l8rbaej"|"t2_8sgjp1gp"|"t2_67eu0eo2"|"t2_8h9uy1nh"|"t2_63q93r18"|"t2_c3y7qj5j",
		author_is_blocked: boolean,
		author_patreon_flair: boolean,
		author_premium: boolean,
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null,
		clicked: boolean,
		content_categories: null,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null,
		distinguished: null,
		domain: "self.dataannotation"|"youtu.be"|"v.redd.it"|"i.redd.it",
		downs: number,
		edited: boolean|number,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "1co0wq3"|"1crurwh"|"1cpq88r"|"1bnz2ff"|"1bnrbsc"|"1bkw32t",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "#dadada"|"",
		link_flair_css_class: ""|null,
		link_flair_richtext: [],
		link_flair_template_id?: "bb58ac36-722b-11ec-9a02-ceea19a19ce4"|"132626f6-8af4-11ec-8b57-aa1b659c4a8a", // 9/15 (60.00%)
		link_flair_text: "Book II: Ghost"|"Discussion "|null,
		link_flair_text_color: "dark",
		link_flair_type: "text",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name: "STARZ",
				author_url: "https://www.youtube.com/@Starz",
				height: number,
				html: string,
				provider_name: "YouTube",
				provider_url: "https://www.youtube.com/",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video",
				version: "1.0",
				width: number,
			}, // 3/6 (50.00%)
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				has_audio: boolean,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 3/6 (50.00%)
			type?: "youtube.com", // 3/6 (50.00%)
		},
		media_embed: {
			content?: string, // 3/15 (20.00%)
			height?: number, // 3/15 (20.00%)
			scrolling?: boolean, // 3/15 (20.00%)
			width?: number, // 3/15 (20.00%)
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_1co0wq3"|"t3_1crurwh"|"t3_1cpq88r"|"t3_1bnz2ff"|"t3_1bnrbsc"|"t3_1bkw32t",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "rich:video"|"hosted:video"|"image", // 9/15 (60.00%)
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
				},
			}[],
		}, // 9/15 (60.00%)
		pwls: number,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name: "STARZ",
				author_url: "https://www.youtube.com/@Starz",
				height: number,
				html: string,
				provider_name: "YouTube",
				provider_url: "https://www.youtube.com/",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: string,
				type: "video",
				version: "1.0",
				width: number,
			}, // 3/6 (50.00%)
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				has_audio: boolean,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 3/6 (50.00%)
			type?: "youtube.com", // 3/6 (50.00%)
		},
		secure_media_embed: {
			content?: string, // 3/15 (20.00%)
			height?: number, // 3/15 (20.00%)
			media_domain_url?: string, // 3/15 (20.00%)
			scrolling?: boolean, // 3/15 (20.00%)
			width?: number, // 3/15 (20.00%)
		},
		selftext: string,
		selftext_html: string|null,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allowed_media_in_comments: ("expression"|"animated"|"static"|"giphy")[],
			banner_img: "",
			banner_size: null,
			community_icon: string|null,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "PowerTV"|"dataannotation",
			display_name_prefixed: "r/PowerTV"|"r/dataannotation",
			free_form_reports: boolean,
			header_img: null,
			header_size: null,
			icon_color: "",
			icon_img: "",
			icon_size: null,
			key_color: "#545452"|"",
			link_flair_enabled: boolean,
			link_flair_position: "right"|"",
			name: "t5_322kj"|"t5_2fd34i",
			over_18: boolean,
			previous_names: [],
			primary_color: "",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "",
			subreddit_type: "public",
			subscribers: number,
			title: "Power - TV show"|"dataannotation",
			url: "/r/PowerTV/"|"/r/dataannotation/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "PowerTV"|"dataannotation",
		subreddit_id: "t5_322kj"|"t5_2fd34i",
		subreddit_name_prefixed: "r/PowerTV"|"r/dataannotation",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: "top"|null,
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
		url_overridden_by_dest?: "https://youtu.be/ZUmTlGMt4SI"|"https://v.redd.it/9vnfl6u6te0d1"|"https://i.redd.it/9jcub50mvuzc1.jpeg", // 9/15 (60.00%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 180206/39877545 (0.45%)
	ad_supplementary_text_md?: null|string, // 180206/39877545 (0.45%)
	ad_user_targeting?: null, // 180206/39877545 (0.45%)
	adserver_click_url?: null, // 180206/39877545 (0.45%)
	adserver_imp_pixel?: null, // 180206/39877545 (0.45%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 180206/39877545 (0.45%)
	approved?: boolean, // 3/39877545 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 96970/39877545 (0.24%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 863939/2318148 (37.27%)
		e: "text"|"emoji",
		t?: string, // 1454209/2318148 (62.73%)
		u?: string, // 863939/2318148 (37.27%)
	}[], // 39421233/39877545 (98.86%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 39421233/39877545 (98.86%)
	author_fullname?: string, // 39421219/39877545 (98.86%)
	author_id?: string|null, // 180206/39877545 (0.45%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 39421233/39877545 (98.86%)
	author_premium?: boolean, // 39421233/39877545 (98.86%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Download"|"Install"|"View More"|"Apply Now"|"Play Now"|"Order Now"|"Contact Us"|"Watch Now"|"Pre-order Now"|"Get Showtimes"|"Get a Quote"|"See Menu", // 154926/39877545 (0.39%)
	campaign_id?: null, // 180206/39877545 (0.45%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment",
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
			display_name: "On9CrazyClips"|"TuesdayNightTakeover"|"CompetitiveApex"|"ShowMeHistory"|"Nursing_Test_Bank"|"QuakeChampions"|"Fallout_New_Genesis"|"GaylorSwift"|"survivor",
			display_name_prefixed: "r/On9CrazyClips"|"r/TuesdayNightTakeover"|"r/CompetitiveApex"|"r/ShowMeHistory"|"r/Nursing_Test_Bank"|"r/QuakeChampions"|"r/Fallout_New_Genesis"|"r/GaylorSwift"|"r/survivor",
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#ea0027"|"#222222"|"#545452"|"#7e53c1"|"#0dd3bb",
			mod_permissions: [],
			name: "t5_b5mdlt"|"t5_9sxby0"|"t5_vz6gk"|"t5_98vsbh"|"t5_bgg7dz"|"t5_3f0ug"|"t5_bfsvew"|"t5_mnhlw"|"t5_2qhu3",
			over_18: boolean,
			primary_color: ""|"#373c3f"|"#77b14e"|"#99629d"|"#0a2255",
			sr: "On9CrazyClips"|"TuesdayNightTakeover"|"CompetitiveApex"|"ShowMeHistory"|"Nursing_Test_Bank"|"QuakeChampions"|"Fallout_New_Genesis"|"GaylorSwift"|"survivor",
			sr_display_name_prefixed: "r/On9CrazyClips"|"r/TuesdayNightTakeover"|"r/CompetitiveApex"|"r/ShowMeHistory"|"r/Nursing_Test_Bank"|"r/QuakeChampions"|"r/Fallout_New_Genesis"|"r/GaylorSwift"|"r/survivor",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/On9CrazyClips/"|"/r/TuesdayNightTakeover/"|"/r/CompetitiveApex/"|"/r/ShowMeHistory/"|"/r/Nursing_Test_Bank/"|"/r/QuakeChampions/"|"/r/Fallout_New_Genesis/"|"/r/GaylorSwift/"|"/r/survivor/",
			user_can_crosspost: boolean,
			whitelist_status: null|"all_ads",
		}, // 9/2410 (0.37%)
		subreddit_id: string,
		title: string,
	}[], // 2410/39877545 (0.01%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1162526/39877545 (2.92%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3188/1159540 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 34027/95520 (35.62%)
			e: "text"|"emoji",
			t?: string, // 61493/95520 (64.38%)
			u?: string, // 34027/95520 (35.62%)
		}[], // 1148231/1159540 (99.02%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1148231/1159540 (99.02%)
		author_fullname?: string, // 1148231/1159540 (99.02%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1148231/1159540 (99.02%)
		author_premium?: boolean, // 1148231/1159540 (99.02%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"photography",
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
				display_name: "BigBlckLips",
				display_name_prefixed: "r/BigBlckLips",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_bfikgk",
				over_18: boolean,
				primary_color: "",
				sr: "BigBlckLips",
				sr_display_name_prefixed: "r/BigBlckLips",
				subreddit_type: "restricted",
				subscribers: number,
				title: "BigBlckLips",
				url: "/r/BigBlckLips/",
				user_can_crosspost: boolean,
				whitelist_status: null,
			}, // 1/154 (0.65%)
			subreddit_id: string,
			title: string,
		}[], // 154/1159540 (0.01%)
		content_categories: null|("photography"|"comics"|"drawing_and_painting"|"gaming"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				caption?: string, // 680913/1175438 (57.93%)
				id: number,
				media_id: string,
				outbound_url?: string, // 672032/1175438 (57.17%)
			}[],
		}|null, // 190451/1159540 (16.42%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 190451/1159540 (16.42%)
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
			a?: string, // 29680/191287 (15.52%)
			e: "text"|"emoji",
			t?: string, // 161607/191287 (84.48%)
			u?: string, // 29680/191287 (15.52%)
		}[],
		link_flair_template_id?: string, // 423935/1159540 (36.56%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 25536/231410 (11.03%)
				author_url?: string, // 25461/231410 (11.00%)
				cache_age?: number, // 7783/231410 (3.36%)
				description?: string, // 2189/231410 (0.95%)
				height?: number|null, // 231299/231410 (99.95%)
				html?: string, // 231299/231410 (99.95%)
				mean_alpha?: number, // 117/231410 (0.05%)
				provider_name?: string, // 231299/231410 (99.95%)
				provider_url?: string, // 231299/231410 (99.95%)
				thumbnail_height?: number, // 208907/231410 (90.28%)
				thumbnail_url?: string, // 223309/231410 (96.50%)
				thumbnail_width?: number, // 208907/231410 (90.28%)
				title?: string, // 223501/231410 (96.58%)
				type?: "video"|"rich", // 231299/231410 (99.95%)
				url?: string, // 8544/231410 (3.69%)
				version?: "1.0", // 231299/231410 (99.95%)
				width?: number, // 231299/231410 (99.95%)
			}, // 231410/322382 (71.78%)
			reddit_video?: {
				bitrate_kbps?: number, // 90606/90972 (99.60%)
				dash_url?: string, // 90951/90972 (99.98%)
				duration?: number, // 90951/90972 (99.98%)
				fallback_url?: string, // 90951/90972 (99.98%)
				has_audio?: boolean, // 88383/90972 (97.15%)
				height: number|null,
				hls_url?: string, // 90951/90972 (99.98%)
				is_gif?: boolean, // 90951/90972 (99.98%)
				scrubber_media_url?: string, // 90951/90972 (99.98%)
				transcoding_message?: string, // 21/90972 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 90972/322382 (28.22%)
			type?: string, // 231410/322382 (71.78%)
		},
		media_embed: {
			content?: string|null, // 231410/1159540 (19.96%)
			height?: number, // 231410/1159540 (19.96%)
			scrolling?: boolean, // 231410/1159540 (19.96%)
			width?: number, // 231410/1159540 (19.96%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 796/1206408 (0.07%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1204372/1206408 (99.83%)
				hlsUrl?: string, // 796/1206408 (0.07%)
				id?: string, // 1204372/1206408 (99.83%)
				isGif?: boolean, // 796/1206408 (0.07%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1203576/1206408 (99.77%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 879306/1206408 (72.89%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1203576/1206408 (99.77%)
				s?: {
					gif?: string, // 41899/1203576 (3.48%)
					mp4?: string, // 41899/1203576 (3.48%)
					u?: string, // 1161677/1203576 (96.52%)
					x: number,
					y: number,
				}, // 1203576/1206408 (99.77%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 796/1206408 (0.07%)
				y?: number, // 796/1206408 (0.07%)
			},
		}|null, // 203533/1159540 (17.55%)
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
				vote_count?: number, // 154/7074 (2.18%)
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
		}|null, // 1810/1159540 (0.16%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self", // 843231/1159540 (72.72%)
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
					}, // 64598/843231 (7.66%)
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
					}, // 64598/843231 (7.66%)
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
					}, // 524256/843231 (62.17%)
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
					}, // 526127/843231 (62.39%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 231426/231463 (99.98%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 231463/843231 (27.45%)
		}, // 843231/1159540 (72.72%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"reddit"|"deleted"|"author"|"automod_filtered"|"copyright_takedown"|"content_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 25536/231410 (11.03%)
				author_url?: string, // 25461/231410 (11.00%)
				cache_age?: number, // 7783/231410 (3.36%)
				description?: string, // 2189/231410 (0.95%)
				height?: number|null, // 231299/231410 (99.95%)
				html?: string, // 231299/231410 (99.95%)
				mean_alpha?: number, // 117/231410 (0.05%)
				provider_name?: string, // 231299/231410 (99.95%)
				provider_url?: string, // 231299/231410 (99.95%)
				thumbnail_height?: number, // 208907/231410 (90.28%)
				thumbnail_url?: string, // 223309/231410 (96.50%)
				thumbnail_width?: number, // 208907/231410 (90.28%)
				title?: string, // 223501/231410 (96.58%)
				type?: "video"|"rich", // 231299/231410 (99.95%)
				url?: string, // 8544/231410 (3.69%)
				version?: "1.0", // 231299/231410 (99.95%)
				width?: number, // 231299/231410 (99.95%)
			}, // 231410/322382 (71.78%)
			reddit_video?: {
				bitrate_kbps?: number, // 90606/90972 (99.60%)
				dash_url?: string, // 90951/90972 (99.98%)
				duration?: number, // 90951/90972 (99.98%)
				fallback_url?: string, // 90951/90972 (99.98%)
				has_audio?: boolean, // 88383/90972 (97.15%)
				height: number|null,
				hls_url?: string, // 90951/90972 (99.98%)
				is_gif?: boolean, // 90951/90972 (99.98%)
				scrubber_media_url?: string, // 90951/90972 (99.98%)
				transcoding_message?: string, // 21/90972 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 90972/322382 (28.22%)
			type?: string, // 231410/322382 (71.78%)
		},
		secure_media_embed: {
			content?: string|null, // 231410/1159540 (19.96%)
			height?: number, // 231410/1159540 (19.96%)
			media_domain_url?: string, // 231410/1159540 (19.96%)
			scrolling?: boolean, // 231410/1159540 (19.96%)
			width?: number, // 231410/1159540 (19.96%)
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
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
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
		url_overridden_by_dest?: string, // 916226/1159540 (79.02%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1162526/39877545 (2.92%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 180206/39877545 (0.45%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 180206/39877545 (0.45%)
	embed_url?: null|string, // 180206/39877545 (0.45%)
	events?: [], // 180206/39877545 (0.45%)
	eventsOnRender?: [], // 180206/39877545 (0.45%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"View More"|"Sign Up"|"Install"|"Download"|"Order Now"|"Play Now"|"Contact Us"|"See Menu"|"Pre-order Now"|"Apply Now"|"Get a Quote"|"Watch Now"|"Get Showtimes", // 152791/13800333 (1.11%)
			caption?: string, // 9152420/13800333 (66.32%)
			display_url?: string, // 156345/13800333 (1.13%)
			id: number,
			media_id: string,
			outbound_url?: string, // 9103551/13800333 (65.97%)
			product?: {
				description: string,
				price?: string, // 93795/104738 (89.55%)
				title: string,
			}, // 104738/13800333 (0.76%)
		}[],
	}|null, // 3642287/39877545 (9.13%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 180206/39877545 (0.45%)
	id: string,
	ignore_reports?: boolean, // 3/39877545 (0.00%)
	impression_id?: null, // 180206/39877545 (0.45%)
	impression_id_str?: null, // 180206/39877545 (0.45%)
	is_blank?: boolean, // 180206/39877545 (0.45%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3642287/39877545 (9.13%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 180206/39877545 (0.45%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 946275/8331363 (11.36%)
		e: "text"|"emoji",
		t?: string, // 7385088/8331363 (88.64%)
		u?: string, // 946275/8331363 (11.36%)
	}[],
	link_flair_template_id?: string, // 16108595/39877545 (40.40%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 369/3151979 (0.01%)
		oembed?: {
			author_name?: string, // 670283/2085603 (32.14%)
			author_url?: string, // 669315/2085603 (32.09%)
			cache_age?: number, // 36700/2085603 (1.76%)
			description?: string, // 79525/2085603 (3.81%)
			height?: number|null, // 2084250/2085603 (99.94%)
			html?: string, // 2084250/2085603 (99.94%)
			mean_alpha?: number, // 2310/2085603 (0.11%)
			provider_name?: string, // 2084250/2085603 (99.94%)
			provider_url?: string, // 2084250/2085603 (99.94%)
			thumbnail_height?: number, // 1993493/2085603 (95.58%)
			thumbnail_url?: string, // 2047802/2085603 (98.19%)
			thumbnail_width?: number, // 1993493/2085603 (95.58%)
			title?: string, // 2047603/2085603 (98.18%)
			type?: "video"|"rich", // 2084250/2085603 (99.94%)
			url?: string, // 59606/2085603 (2.86%)
			version?: "1.0", // 2084250/2085603 (99.94%)
			width?: number, // 2084250/2085603 (99.94%)
		}, // 2085603/3151979 (66.17%)
		reddit_video?: {
			bitrate_kbps?: number, // 1061917/1066007 (99.62%)
			dash_url?: string, // 1061917/1066007 (99.62%)
			duration?: number, // 1061917/1066007 (99.62%)
			fallback_url?: string, // 1061917/1066007 (99.62%)
			has_audio?: boolean, // 1061873/1066007 (99.61%)
			height: number|null,
			hls_url?: string, // 1061917/1066007 (99.62%)
			is_gif?: boolean, // 1061917/1066007 (99.62%)
			scrubber_media_url?: string, // 1061917/1066007 (99.62%)
			transcoding_message?: string, // 4090/1066007 (0.38%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1066007/3151979 (33.82%)
		type?: string, // 2085972/3151979 (66.18%)
	},
	media_embed: {
		content?: string|null, // 2063434/39877545 (5.17%)
		height?: number, // 2063434/39877545 (5.17%)
		scrolling?: boolean, // 2063434/39877545 (5.17%)
		width?: number, // 2063434/39877545 (5.17%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 16945/14453782 (0.12%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 14297353/14453782 (98.92%)
			hlsUrl?: string, // 16945/14453782 (0.12%)
			id?: string, // 14297353/14453782 (98.92%)
			isGif?: boolean, // 16945/14453782 (0.12%)
			m?: "image/jpg"|"image/png"|"image/gif", // 14280408/14453782 (98.80%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6540244/14453782 (45.25%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14280408/14453782 (98.80%)
			s?: {
				gif?: string, // 183021/14280408 (1.28%)
				mp4?: string, // 183021/14280408 (1.28%)
				u?: string, // 14097387/14280408 (98.72%)
				x: number,
				y: number,
			}, // 14280408/14453782 (98.80%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 16945/14453782 (0.12%)
			y?: number, // 16945/14453782 (0.12%)
		},
	}|null, // 4117363/39877545 (10.33%)
	media_only: boolean,
	mobile_ad_url?: string, // 180206/39877545 (0.45%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 180206/39877545 (0.45%)
	outbound_link?: {
	}, // 180206/39877545 (0.45%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 20776/276059 (7.53%)
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
	}|null, // 83354/39877545 (0.21%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"gallery"|"video", // 19596252/39877545 (49.14%)
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
				}, // 827202/19697191 (4.20%)
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
				}, // 827202/19697191 (4.20%)
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
				}, // 10746890/19697191 (54.56%)
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
				}, // 10820862/19697191 (54.94%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1285588/1285627 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1285627/19697191 (6.53%)
	}, // 19697191/39877545 (49.39%)
	priority_id?: null, // 180206/39877545 (0.45%)
	product_ids?: [], // 180206/39877545 (0.45%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 180206/39877545 (0.45%)
	promoted?: boolean, // 180206/39877545 (0.45%)
	promoted_by?: null, // 180206/39877545 (0.45%)
	promoted_display_name?: null, // 180206/39877545 (0.45%)
	promoted_url?: null, // 180206/39877545 (0.45%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 3/39877545 (0.00%)
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"community_ops"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 369/3151979 (0.01%)
		oembed?: {
			author_name?: string, // 670283/2085603 (32.14%)
			author_url?: string, // 669315/2085603 (32.09%)
			cache_age?: number, // 36700/2085603 (1.76%)
			description?: string, // 79525/2085603 (3.81%)
			height?: number|null, // 2084250/2085603 (99.94%)
			html?: string, // 2084250/2085603 (99.94%)
			mean_alpha?: number, // 2310/2085603 (0.11%)
			provider_name?: string, // 2084250/2085603 (99.94%)
			provider_url?: string, // 2084250/2085603 (99.94%)
			thumbnail_height?: number, // 1993493/2085603 (95.58%)
			thumbnail_url?: string, // 2047802/2085603 (98.19%)
			thumbnail_width?: number, // 1993493/2085603 (95.58%)
			title?: string, // 2047603/2085603 (98.18%)
			type?: "video"|"rich", // 2084250/2085603 (99.94%)
			url?: string, // 59606/2085603 (2.86%)
			version?: "1.0", // 2084250/2085603 (99.94%)
			width?: number, // 2084250/2085603 (99.94%)
		}, // 2085603/3151979 (66.17%)
		reddit_video?: {
			bitrate_kbps?: number, // 1061917/1066007 (99.62%)
			dash_url?: string, // 1061917/1066007 (99.62%)
			duration?: number, // 1061917/1066007 (99.62%)
			fallback_url?: string, // 1061917/1066007 (99.62%)
			has_audio?: boolean, // 1061873/1066007 (99.61%)
			height: number|null,
			hls_url?: string, // 1061917/1066007 (99.62%)
			is_gif?: boolean, // 1061917/1066007 (99.62%)
			scrubber_media_url?: string, // 1061917/1066007 (99.62%)
			transcoding_message?: string, // 4090/1066007 (0.38%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1066007/3151979 (33.82%)
		type?: string, // 2085972/3151979 (66.18%)
	},
	secure_media_embed: {
		content?: string|null, // 2063434/39877545 (5.17%)
		height?: number, // 2063434/39877545 (5.17%)
		media_domain_url?: string, // 2063434/39877545 (5.17%)
		scrolling?: boolean, // 2063434/39877545 (5.17%)
		width?: number, // 2063434/39877545 (5.17%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 180206/39877545 (0.45%)
	sk_ad_network_data?: null, // 180206/39877545 (0.45%)
	spam?: boolean, // 3/39877545 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 15140/39877545 (0.04%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 180206/39877545 (0.45%)
	third_party_tracking?: null, // 180206/39877545 (0.45%)
	third_party_tracking_2?: null, // 180206/39877545 (0.45%)
	thumbnail: string,
	thumbnail_height?: number|null, // 39876541/39877545 (100.00%)
	thumbnail_width?: number|null, // 39876541/39877545 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22107151/39877545 (55.44%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw",
	wls: null|number,
}