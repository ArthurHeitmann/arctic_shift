interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM",
			award_type: "global",
			awardings_required_to_grant_benefits: null,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null|number,
			days_of_premium: null|number,
			description: string,
			end_date: null,
			giver_coin_reward: null,
			icon_format: null|"APNG"|"PNG",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: "Gold"|"Helpful"|"Narwhal Salute"|"Helpful (Pro)"|"Powerups Post"|"Platinum"|"Starstruck"|"Bravo Grande!"|"Go Vote!"|"Silver"|"Wholesome"|"I'm Deceased",
			penny_donate: null,
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
			start_date: null,
			static_icon_height: number,
			static_icon_url: string,
			static_icon_width: number,
			sticky_duration_seconds: null,
			subreddit_coin_reward: number,
			subreddit_id: null,
			tiers_by_required_awardings: null,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_flair_background_color: null|"#ffb000"|""|"transparent"|"#94e044"|"#0266b3",
		author_flair_css_class: null|"zBowser",
		author_flair_richtext?: {
			a?: ":Bowser:", // 4/18 (22.22%)
			e: "text"|"emoji",
			t?: string, // 14/18 (77.78%)
			u?: string, // 4/18 (22.22%)
		}[], // 78/80 (97.50%)
		author_flair_template_id: null|"b7a69992-5c7b-11ec-b7b1-562e97fb6ee5"|"aa2d08fa-15ed-11ee-9302-cea35fb0f6b0"|"0737efca-97bf-11ea-96b7-0e031196668f"|"1e3d65b8-e5b8-11eb-877a-0ecde198d0f7"|"89bb523c-d998-11ea-8320-0e0f7f229d6b",
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 78/80 (97.50%)
		author_fullname?: string, // 78/80 (97.50%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 78/80 (97.50%)
		author_premium?: boolean, // 78/80 (97.50%)
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
		distinguished: null|"moderator",
		domain: "i.redd.it"|"reddit.com"|"self.Yellowjackets"|"deadline.com"|"youtube.com"|"self.movies"|"self.FromTVEpix"|"youtu.be"|"self.nintendo"|"variety.com"|"moviesr.net"|"decider.com"|"collider.com"|"v.redd.it",
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				caption?: string, // 17/70 (24.29%)
				id: number,
				media_id: string,
			}[],
		}, // 14/80 (17.50%)
		gilded: number,
		gildings: {
			gid_1?: number, // 1/80 (1.25%)
			gid_2?: number, // 6/80 (7.50%)
			gid_3?: number, // 2/80 (2.50%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 14/80 (17.50%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#ffbe33"|"#a06324"|"#b70713"|"#ffd635"|"#ccac2b"|"#dadada"|"#ff4500"|"#94e044"|"#0aa18f"|"#0079d3"|"#ff8717"|"#46d160"|"#00a6a5"|"#0dd3bb",
		link_flair_css_class: ""|"artwork"|"discussion"|"trailer"|"news"|"article"|"poster"|null,
		link_flair_richtext: {
			a?: ":Discussion:", // 9/48 (18.75%)
			e: "text"|"emoji",
			t?: "General Discussion"|"Discussion "|"News"|"Trailer"|"Episode Discussion"|"Cast/Crew Post"|"Discussion"|"Official Discussion"|"Article"|"Poster", // 39/48 (81.25%)
			u?: string, // 9/48 (18.75%)
		}[],
		link_flair_template_id?: string, // 65/80 (81.25%)
		link_flair_text: string|null,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name: "The Tonight Show Starring Jimmy Fallon"|"Illumination"|"Lionsgate Movies",
				author_url: "https://www.youtube.com/@fallontonight"|"https://www.youtube.com/@illumination"|"https://www.youtube.com/@LionsgateMovies",
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
			}, // 6/7 (85.71%)
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 1/7 (14.29%)
			type?: "youtube.com", // 6/7 (85.71%)
		},
		media_embed: {
			content?: string, // 6/80 (7.50%)
			height?: number, // 6/80 (7.50%)
			scrolling?: boolean, // 6/80 (7.50%)
			width?: number, // 6/80 (7.50%)
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: string,
				m: "image/jpg",
				p: {
					u: string,
					x: number,
					y: number,
				}[],
				s: {
					u: string,
					x: number,
					y: number,
				},
				status: "valid",
			},
		}, // 14/80 (17.50%)
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
		parent_whitelist_status: "all_ads"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video", // 54/80 (67.50%)
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
		}, // 54/80 (67.50%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean
		score: number,
		secure_media: null|{
			oembed?: {
				author_name: "The Tonight Show Starring Jimmy Fallon"|"Illumination"|"Lionsgate Movies",
				author_url: "https://www.youtube.com/@fallontonight"|"https://www.youtube.com/@illumination"|"https://www.youtube.com/@LionsgateMovies",
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
			}, // 6/7 (85.71%)
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 1/7 (14.29%)
			type?: "youtube.com", // 6/7 (85.71%)
		},
		secure_media_embed: {
			content?: string, // 6/80 (7.50%)
			height?: number, // 6/80 (7.50%)
			media_domain_url?: string, // 6/80 (7.50%)
			scrolling?: boolean, // 6/80 (7.50%)
			width?: number, // 6/80 (7.50%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation: boolean,
			allowed_media_in_comments: ("expression"|"giphy"|"static"|"animated")[],
			banner_img: string,
			banner_size: null|number[],
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "Yellowjackets"|"photoshop"|"movies"|"Mario"|"nintendo"|"FromTVEpix"|"japanesetattoo"|"LegoStarWarsVideoGame"|"CountryMusicMemes"|"entertainment",
			display_name_prefixed: "r/Yellowjackets"|"r/photoshop"|"r/movies"|"r/Mario"|"r/nintendo"|"r/FromTVEpix"|"r/japanesetattoo"|"r/LegoStarWarsVideoGame"|"r/CountryMusicMemes"|"r/entertainment",
			free_form_reports: boolean,
			header_img: string|null,
			header_size: number[]|null,
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled: boolean,
			key_color: ""|"#ea0027"|"#24a0ed"|"#222222"|"#ddbd37"|"#a5a4a4",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"right",
			name: "t5_j07gx"|"t5_2qhcb"|"t5_2qh3s"|"t5_2qlqx"|"t5_2qhnk"|"t5_5vyivp"|"t5_3aiie"|"t5_13aj6l"|"t5_3ewjq"|"t5_2qh0f",
			over_18: boolean,
			previous_names: ("japanesetattoo"|"a:t5_3aiie")[],
			primary_color: "#ffb000"|"#ffffff"|"#ff0000"|"#ec1b2e"|""|"#ffd635"|"#014980"|"#ea0027",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit link"|"Submit a Link Post"|"Share a URL",
			submit_text_label: ""|"Submit text"|"Submit a Text Post"|"Start a Text Discussion",
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: "/r/Yellowjackets/"|"/r/photoshop/"|"/r/movies/"|"/r/Mario/"|"/r/nintendo/"|"/r/FromTVEpix/"|"/r/japanesetattoo/"|"/r/LegoStarWarsVideoGame/"|"/r/CountryMusicMemes/"|"/r/entertainment/",
			user_is_banned: null|boolean,
			user_is_contributor: null|boolean,
			user_is_moderator: null|boolean,
			user_is_muted: null,
			user_is_subscriber: null|boolean,
		},
		stickied: boolean,
		subreddit: "Yellowjackets"|"photoshop"|"movies"|"Mario"|"nintendo"|"FromTVEpix"|"japanesetattoo"|"LegoStarWarsVideoGame"|"CountryMusicMemes"|"entertainment",
		subreddit_id: "t5_j07gx"|"t5_2qhcb"|"t5_2qh3s"|"t5_2qlqx"|"t5_2qhnk"|"t5_5vyivp"|"t5_3aiie"|"t5_13aj6l"|"t5_3ewjq"|"t5_2qh0f",
		subreddit_name_prefixed: "r/Yellowjackets"|"r/photoshop"|"r/movies"|"r/Mario"|"r/nintendo"|"r/FromTVEpix"|"r/japanesetattoo"|"r/LegoStarWarsVideoGame"|"r/CountryMusicMemes"|"r/entertainment",
		subreddit_subscribers: number,
		subreddit_type: "public"|"restricted",
		suggested_sort: null|"new",
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
		url_overridden_by_dest?: string, // 66/80 (82.50%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|null,
		wls: number|null,
	}[], // 88892/34878741 (0.25%)
	ad_supplementary_text_md?: null|string, // 88892/34878741 (0.25%)
	adserver_click_url?: null, // 88892/34878741 (0.25%)
	adserver_imp_pixel?: null, // 88892/34878741 (0.25%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: null|number,
		days_of_premium: null|number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: "PNG"|"APNG"|"JPG"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: number|null,
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
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings: null,
	}[],
	allow_live_comments: boolean,
	app_store_data?: null, // 88892/34878741 (0.25%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 109622/34878741 (0.31%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 715869/1903277 (37.61%)
		e: "text"|"emoji",
		t?: string, // 1187408/1903277 (62.39%)
		u?: string, // 715869/1903277 (37.61%)
	}[], // 24757929/34878741 (70.98%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 24757929/34878741 (70.98%)
	author_fullname?: string, // 24757929/34878741 (70.98%)
	author_id?: string|null, // 88892/34878741 (0.25%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 24757929/34878741 (70.98%)
	author_premium?: boolean, // 24757929/34878741 (70.98%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 68658/34878741 (0.20%)
	campaign_id?: null, // 88892/34878741 (0.25%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"animals"|"gaming"|"photography"|""|"entertainment"|"music"|"writing"|"food",
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
			display_name: "onlinesoccermanager"|"ilovelesbians",
			display_name_prefixed: "r/onlinesoccermanager"|"r/ilovelesbians",
			icon_img: "",
			icon_size: null,
			key_color: "",
			mod_permissions: [],
			name: "t5_2ye6j"|"t5_5e99b0",
			over_18: boolean,
			primary_color: ""|"#ea0027",
			sr: "onlinesoccermanager"|"ilovelesbians",
			sr_display_name_prefixed: "r/onlinesoccermanager"|"r/ilovelesbians",
			subreddit_type: "public",
			subscribers: number,
			title: "Online Soccer Manager"|"ilovelesbians",
			url: "/r/onlinesoccermanager/"|"/r/ilovelesbians/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads"|null,
		}, // 2/9669 (0.02%)
		subreddit_id: string,
		title: string,
	}[], // 9669/34878741 (0.03%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1534293/34878741 (4.40%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR"|"GROUP",
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
			icon_format: "PNG"|"APNG"|"JPG"|null,
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
			sticky_duration_seconds: null,
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
		author_cakeday?: boolean, // 5548/1242565 (0.45%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 38812/107569 (36.08%)
			e: "text"|"emoji",
			t?: string, // 68757/107569 (63.92%)
			u?: string, // 38812/107569 (36.08%)
		}[], // 1079816/1242565 (86.90%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1079816/1242565 (86.90%)
		author_fullname?: string, // 1079816/1242565 (86.90%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1079816/1242565 (86.90%)
		author_premium?: boolean, // 1079816/1242565 (86.90%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 81/1242565 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"photography"|"drawing_and_painting"|"gaming"|"animals"|"music",
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
		}[], // 1551/1242565 (0.12%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"writing"|"entertainment"|"diy_and_crafts"|"music"|"videos")[],
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
				caption?: string, // 74289/539544 (13.77%)
				id: number,
				media_id: string,
				outbound_url?: string, // 14381/539544 (2.67%)
			}[],
		}|null, // 105020/1242565 (8.45%)
		gilded: number,
		gildings: {
			gid_1?: number, // 19055/1242565 (1.53%)
			gid_2?: number, // 20600/1242565 (1.66%)
			gid_3?: number, // 5242/1242565 (0.42%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 105020/1242565 (8.45%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null|boolean,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 28473/204788 (13.90%)
			e: "text"|"emoji",
			t?: string, // 176315/204788 (86.10%)
			u?: string, // 28473/204788 (13.90%)
		}[],
		link_flair_template_id?: string, // 391181/1242565 (31.48%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_status: number,
			room_id: "a9651c8e-bc0c-43c6-855f-bfd27745c0e4",
		}, // 1/1242565 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 2/351738 (0.00%)
			oembed?: {
				author_name?: string, // 64976/227627 (28.54%)
				author_url?: string, // 62327/227627 (27.38%)
				cache_age?: number, // 4081/227627 (1.79%)
				description?: string, // 6991/227627 (3.07%)
				height?: number|null, // 227591/227627 (99.98%)
				html?: string, // 227591/227627 (99.98%)
				mean_alpha?: number, // 17/227627 (0.01%)
				provider_name?: string, // 227591/227627 (99.98%)
				provider_url?: string, // 227591/227627 (99.98%)
				thumbnail_height?: number|null, // 206107/227627 (90.55%)
				thumbnail_url?: string, // 223029/227627 (97.98%)
				thumbnail_width?: number|null, // 206107/227627 (90.55%)
				title?: string, // 223490/227627 (98.18%)
				type?: "video"|"rich", // 227591/227627 (99.98%)
				url?: string, // 6800/227627 (2.99%)
				version?: "1.0", // 227591/227627 (99.98%)
				width?: number, // 227591/227627 (99.98%)
			}, // 227627/351738 (64.71%)
			reddit_video?: {
				bitrate_kbps?: number, // 123738/124109 (99.70%)
				dash_url?: string, // 124101/124109 (99.99%)
				duration?: number, // 124101/124109 (99.99%)
				fallback_url?: string, // 124101/124109 (99.99%)
				height?: number|null, // 124107/124109 (100.00%)
				hls_url?: string, // 124101/124109 (99.99%)
				is_gif?: boolean, // 124101/124109 (99.99%)
				scrubber_media_url?: string, // 124101/124109 (99.99%)
				transcoding_message?: string, // 8/124109 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 124107/124109 (100.00%)
			}, // 124109/351738 (35.28%)
			type?: string, // 227629/351738 (64.72%)
		},
		media_embed: {
			content?: string|null, // 227629/1242565 (18.32%)
			height?: number, // 227629/1242565 (18.32%)
			scrolling?: boolean, // 227629/1242565 (18.32%)
			width?: number, // 227629/1242565 (18.32%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 739/570661 (0.13%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 570540/570661 (99.98%)
				hlsUrl?: string, // 739/570661 (0.13%)
				id?: string, // 570540/570661 (99.98%)
				isGif?: boolean, // 739/570661 (0.13%)
				m?: "image/jpg"|"image/png"|"image/gif", // 569801/570661 (99.85%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 332699/570661 (58.30%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 569801/570661 (99.85%)
				s?: {
					gif?: string, // 8209/569801 (1.44%)
					mp4?: string, // 8209/569801 (1.44%)
					u?: string, // 561592/569801 (98.56%)
					x: number,
					y: number,
				}, // 569801/570661 (99.85%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 739/570661 (0.13%)
				y?: number, // 739/570661 (0.13%)
			},
		}|null, // 121824/1242565 (9.80%)
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
				total_stake_amount?: number, // 51/7597 (0.67%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"22365589"|"22422947"|"22401772"|"22537202"|"22611158"|"20994065"|"22651519"|"22712295"|"22763037"|"22762957"|"22762935"|"22762917"|"12308732",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2081/1242565 (0.17%)
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 825995/1242565 (66.47%)
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
					}, // 64773/825995 (7.84%)
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
					}, // 64773/825995 (7.84%)
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
					}, // 509176/825995 (61.64%)
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
					}, // 511360/825995 (61.91%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 282123/282164 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 282164/825995 (34.16%)
		}, // 825995/1242565 (66.47%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"author"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 2/351738 (0.00%)
			oembed?: {
				author_name?: string, // 64976/227627 (28.54%)
				author_url?: string, // 62327/227627 (27.38%)
				cache_age?: number, // 4081/227627 (1.79%)
				description?: string, // 6991/227627 (3.07%)
				height?: number|null, // 227591/227627 (99.98%)
				html?: string, // 227591/227627 (99.98%)
				mean_alpha?: number, // 17/227627 (0.01%)
				provider_name?: string, // 227591/227627 (99.98%)
				provider_url?: string, // 227591/227627 (99.98%)
				thumbnail_height?: number|null, // 206107/227627 (90.55%)
				thumbnail_url?: string, // 223029/227627 (97.98%)
				thumbnail_width?: number|null, // 206107/227627 (90.55%)
				title?: string, // 223490/227627 (98.18%)
				type?: "video"|"rich", // 227591/227627 (99.98%)
				url?: string, // 6800/227627 (2.99%)
				version?: "1.0", // 227591/227627 (99.98%)
				width?: number, // 227591/227627 (99.98%)
			}, // 227627/351738 (64.71%)
			reddit_video?: {
				bitrate_kbps?: number, // 123738/124109 (99.70%)
				dash_url?: string, // 124101/124109 (99.99%)
				duration?: number, // 124101/124109 (99.99%)
				fallback_url?: string, // 124101/124109 (99.99%)
				height?: number|null, // 124107/124109 (100.00%)
				hls_url?: string, // 124101/124109 (99.99%)
				is_gif?: boolean, // 124101/124109 (99.99%)
				scrubber_media_url?: string, // 124101/124109 (99.99%)
				transcoding_message?: string, // 8/124109 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 124107/124109 (100.00%)
			}, // 124109/351738 (35.28%)
			type?: string, // 227629/351738 (64.72%)
		},
		secure_media_embed: {
			content?: string|null, // 227629/1242565 (18.32%)
			height?: number, // 227629/1242565 (18.32%)
			media_domain_url?: string, // 227629/1242565 (18.32%)
			scrolling?: boolean, // 227629/1242565 (18.32%)
			width?: number, // 227629/1242565 (18.32%)
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
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: "R/MEMES MEME QUIZ #3"|"2023 r/Formula1 Predictions Tournament"|"History Memes Quiz"|"Sharks Rugby"|"Liga de Campeones de la UEFA"|"New features for 2022",
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
				status: "RESOLVED"|"CLOSED",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "CLOSED"|"LIVE",
			subreddit_id: "t5_2qjpg"|"t5_2qimj"|"t5_2v2cd"|"t5_2sma6"|"t5_qjv65"|"t5_2sy6e",
			theme_id: "theme_1"|"theme_5"|"theme_3"|"theme_8",
			total_participants: number,
			tournament_id: string,
		}, // 8/1242565 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1092515/1242565 (87.92%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1534293/34878741 (4.40%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 88892/34878741 (0.25%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 88892/34878741 (0.25%)
	embed_url?: null|string, // 88892/34878741 (0.25%)
	event_end?: number, // 86/34878741 (0.00%)
	event_is_live?: boolean, // 86/34878741 (0.00%)
	event_start?: number, // 86/34878741 (0.00%)
	events?: [], // 88892/34878741 (0.25%)
	eventsOnRender?: [], // 88892/34878741 (0.25%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Order Now"|"View More"|"Contact Us"|"Download"|"Install"|"Apply Now"|"Watch Now"|"Get Showtimes"|"Get a Quote"|"Play Now"|"See Menu"|"Pre-order Now", // 14864/5456376 (0.27%)
			caption?: string, // 546716/5456376 (10.02%)
			display_url?: string, // 14634/5456376 (0.27%)
			id: number,
			media_id: string,
			outbound_url?: string, // 117870/5456376 (2.16%)
			product?: {
				description: string,
				price?: string, // 647/745 (86.85%)
				title: string,
			}, // 745/5456376 (0.01%)
		}[],
	}|null, // 2097758/34878741 (6.01%)
	gilded: number,
	gildings: {
		gid_1?: number, // 7120/34878741 (0.02%)
		gid_2?: number, // 20318/34878741 (0.06%)
		gid_3?: number, // 3483/34878741 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 88892/34878741 (0.25%)
	id: string,
	impression_id?: null, // 88892/34878741 (0.25%)
	impression_id_str?: null, // 88892/34878741 (0.25%)
	is_blank?: boolean, // 88892/34878741 (0.25%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2097758/34878741 (6.01%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 88892/34878741 (0.25%)
	is_video: boolean,
	likes: null|boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 495057/5507694 (8.99%)
		e: "text"|"emoji",
		t?: string, // 5012637/5507694 (91.01%)
		u?: string, // 495057/5507694 (8.99%)
	}[],
	link_flair_template_id?: string, // 10211248/34878741 (29.28%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1aramqtcta9f8"|"1aru7fz1gtpac"|"1ary7fc151zwx"|"1as3stsdoc7d4"|"1asnn2c0rdk0o"|"1au1l9pkcupc3"|"1avgfnhv1k0b9"|"1awit9fvnt77q"|"1awo6t07e7k3n", // 42/3012110 (0.00%)
		oembed?: {
			author_name?: string, // 821594/2152697 (38.17%)
			author_url?: string, // 807540/2152697 (37.51%)
			cache_age?: number, // 92977/2152697 (4.32%)
			description?: string, // 214859/2152697 (9.98%)
			height?: number|null, // 2150915/2152697 (99.92%)
			html?: string, // 2150915/2152697 (99.92%)
			mean_alpha?: number, // 1967/2152697 (0.09%)
			provider_name?: string, // 2150915/2152697 (99.92%)
			provider_url?: string, // 2150915/2152697 (99.92%)
			thumbnail_height?: number|null, // 1982543/2152697 (92.10%)
			thumbnail_url?: string, // 2058172/2152697 (95.61%)
			thumbnail_width?: number|null, // 1982543/2152697 (92.10%)
			title?: string, // 2057844/2152697 (95.59%)
			type?: "video"|"rich", // 2150915/2152697 (99.92%)
			url?: string, // 199847/2152697 (9.28%)
			version?: "1.0", // 2150915/2152697 (99.92%)
			width?: number, // 2150915/2152697 (99.92%)
		}, // 2152697/3012110 (71.47%)
		reddit_video?: {
			bitrate_kbps?: number, // 856845/859371 (99.71%)
			dash_url?: string, // 856845/859371 (99.71%)
			duration?: number, // 856845/859371 (99.71%)
			fallback_url?: string, // 856845/859371 (99.71%)
			height?: number|null, // 858887/859371 (99.94%)
			hls_url?: string, // 856845/859371 (99.71%)
			is_gif?: boolean, // 856845/859371 (99.71%)
			scrubber_media_url?: string, // 856845/859371 (99.71%)
			transcoding_message?: string, // 2526/859371 (0.29%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 858887/859371 (99.94%)
		}, // 859371/3012110 (28.53%)
		type?: string, // 2152739/3012110 (71.47%)
	},
	media_embed: {
		content?: string|null, // 2152739/34878741 (6.17%)
		height?: number, // 2152739/34878741 (6.17%)
		scrolling?: boolean, // 2152739/34878741 (6.17%)
		width?: number, // 2152739/34878741 (6.17%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20912/5922360 (0.35%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 5918047/5922360 (99.93%)
			hlsUrl?: string, // 20912/5922360 (0.35%)
			id?: string, // 5918047/5922360 (99.93%)
			isGif?: boolean, // 20912/5922360 (0.35%)
			m?: "image/jpg"|"image/png"|"image/gif", // 5897135/5922360 (99.57%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1857517/5922360 (31.36%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5897135/5922360 (99.57%)
			s?: {
				gif?: string, // 48284/5897135 (0.82%)
				mp4?: string, // 48284/5897135 (0.82%)
				u?: string, // 5848851/5897135 (99.18%)
				x: number,
				y: number,
			}, // 5897135/5922360 (99.57%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 20912/5922360 (0.35%)
			y?: number, // 20912/5922360 (0.35%)
		},
	}|null, // 2500061/34878741 (7.17%)
	media_only: boolean,
	mobile_ad_url?: string, // 88892/34878741 (0.25%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 88892/34878741 (0.25%)
	outbound_link?: {
	}, // 88892/34878741 (0.25%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 3616/330517 (1.09%)
			vote_count?: number, // 330503/330517 (100.00%)
		}[],
		prediction_status: null|"RESOLVED"|"CLOSED"|"CANCELLED"|"OPEN",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 119132/34878741 (0.34%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 11175118/34878741 (32.04%)
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
				}, // 394036/11175118 (3.53%)
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
				}, // 394036/11175118 (3.53%)
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
				}, // 5245420/11175118 (46.94%)
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
				}, // 5307851/11175118 (47.50%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1129775/1129829 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1129829/11175118 (10.11%)
	}, // 11175118/34878741 (32.04%)
	priority_id?: null, // 88892/34878741 (0.25%)
	product_ids?: [], // 88892/34878741 (0.25%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 88892/34878741 (0.25%)
	promoted?: boolean, // 88892/34878741 (0.25%)
	promoted_by?: null, // 88892/34878741 (0.25%)
	promoted_display_name?: null, // 88892/34878741 (0.25%)
	promoted_url?: null, // 88892/34878741 (0.25%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"deleted"|"reddit"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"author"|"anti_evil_ops"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1aramqtcta9f8"|"1aru7fz1gtpac"|"1ary7fc151zwx"|"1as3stsdoc7d4"|"1asnn2c0rdk0o"|"1au1l9pkcupc3"|"1avgfnhv1k0b9"|"1awit9fvnt77q"|"1awo6t07e7k3n", // 42/3012110 (0.00%)
		oembed?: {
			author_name?: string, // 821594/2152697 (38.17%)
			author_url?: string, // 807540/2152697 (37.51%)
			cache_age?: number, // 92977/2152697 (4.32%)
			description?: string, // 214859/2152697 (9.98%)
			height?: number|null, // 2150915/2152697 (99.92%)
			html?: string, // 2150915/2152697 (99.92%)
			mean_alpha?: number, // 1967/2152697 (0.09%)
			provider_name?: string, // 2150915/2152697 (99.92%)
			provider_url?: string, // 2150915/2152697 (99.92%)
			thumbnail_height?: number|null, // 1982543/2152697 (92.10%)
			thumbnail_url?: string, // 2058172/2152697 (95.61%)
			thumbnail_width?: number|null, // 1982543/2152697 (92.10%)
			title?: string, // 2057844/2152697 (95.59%)
			type?: "video"|"rich", // 2150915/2152697 (99.92%)
			url?: string, // 199847/2152697 (9.28%)
			version?: "1.0", // 2150915/2152697 (99.92%)
			width?: number, // 2150915/2152697 (99.92%)
		}, // 2152697/3012110 (71.47%)
		reddit_video?: {
			bitrate_kbps?: number, // 856845/859371 (99.71%)
			dash_url?: string, // 856845/859371 (99.71%)
			duration?: number, // 856845/859371 (99.71%)
			fallback_url?: string, // 856845/859371 (99.71%)
			height?: number|null, // 858887/859371 (99.94%)
			hls_url?: string, // 856845/859371 (99.71%)
			is_gif?: boolean, // 856845/859371 (99.71%)
			scrubber_media_url?: string, // 856845/859371 (99.71%)
			transcoding_message?: string, // 2526/859371 (0.29%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 858887/859371 (99.94%)
		}, // 859371/3012110 (28.53%)
		type?: string, // 2152739/3012110 (71.47%)
	},
	secure_media_embed: {
		content?: string|null, // 2152739/34878741 (6.17%)
		height?: number, // 2152739/34878741 (6.17%)
		media_domain_url?: string, // 2152739/34878741 (6.17%)
		scrolling?: boolean, // 2152739/34878741 (6.17%)
		width?: number, // 2152739/34878741 (6.17%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 88892/34878741 (0.25%)
	sk_ad_network_data?: null, // 88892/34878741 (0.25%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 935/34878741 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 88892/34878741 (0.25%)
	third_party_tracking?: null, // 88892/34878741 (0.25%)
	third_party_tracking_2?: null, // 88892/34878741 (0.25%)
	thumbnail: string,
	thumbnail_height?: number|null, // 34878630/34878741 (100.00%)
	thumbnail_width?: number|null, // 34878630/34878741 (100.00%)
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
			status: "RESOLVED"|"CLOSED",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[], // 53/56 (94.64%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_6"|"theme_7"|"theme_4"|"theme_3"|"theme_8",
		total_participants: number,
		tournament_id: string,
	}, // 56/34878741 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 19862064/34878741 (56.95%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}