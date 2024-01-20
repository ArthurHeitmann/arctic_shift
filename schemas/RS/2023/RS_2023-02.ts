interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: {
			award_sub_type: "GLOBAL",
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
			icon_format: null|"PNG",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: "Wholesome"|"Silver"|"Rocket Like"|"Platinum"|"Helpful"|"Heartwarming",
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
		author: "ihatethomasnichini"|"adevine39",
		author_flair_background_color: null,
		author_flair_css_class: null,
		author_flair_richtext: [],
		author_flair_template_id: null,
		author_flair_text: null,
		author_flair_text_color: null,
		author_flair_type: "text",
		author_fullname: "t2_j3mn7"|"t2_1ximlr6",
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
		domain: "reddit.com"|"i.redd.it",
		downs: number,
		edited: boolean,
		gallery_data?: {
			items: {
				id: number,
				media_id: "gh0d3jcg51391"|"lap13jcg51391"|"79qw0jcg51391"|"st0hvicg51391"|"90fzu18cjx681"|"srtn848cjx681"|"pkqpa28cjx681",
			}[],
		}, // 10/15 (66.67%)
		gilded: number,
		gildings: {
			gid_1?: number, // 10/15 (66.67%)
			gid_3?: number, // 5/15 (33.33%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: "jvcyjt"|"v2jw5p"|"rljfgs",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 10/15 (66.67%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "",
		link_flair_css_class: null,
		link_flair_richtext: [],
		link_flair_text: null,
		link_flair_text_color: "dark",
		link_flair_type: "text",
		locked: boolean,
		media: null,
		media_embed: {
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "79qw0jcg51391"|"gh0d3jcg51391"|"lap13jcg51391"|"st0hvicg51391"|"90fzu18cjx681"|"pkqpa28cjx681"|"srtn848cjx681",
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
		}, // 10/15 (66.67%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_jvcyjt"|"t3_v2jw5p"|"t3_rljfgs",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image", // 5/15 (33.33%)
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
		}, // 5/15 (33.33%)
		pwls: number,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null,
		secure_media_embed: {
		},
		selftext: "",
		selftext_html: null,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation: boolean,
			allowed_media_in_comments: [],
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "Bumble",
			display_name_prefixed: "r/Bumble",
			free_form_reports: boolean,
			header_img: string,
			header_size: number[],
			icon_color: "",
			icon_img: "",
			icon_size: null,
			is_chat_post_feature_enabled: boolean,
			key_color: "",
			link_flair_enabled: boolean,
			link_flair_position: ""|null,
			name: "t5_3531l",
			over_18: boolean,
			previous_names: [],
			primary_color: "#ffc72b",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "",
			subreddit_type: "public",
			subscribers: number,
			title: "Best of Bumble",
			url: "/r/Bumble/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "Bumble",
		subreddit_id: "t5_3531l",
		subreddit_name_prefixed: "r/Bumble",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null,
		thumbnail: "default"|"image",
		thumbnail_height: number,
		thumbnail_width: number,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: "https://i.redd.it/b0xbc5o28nz51.jpg"|"https://www.reddit.com/gallery/v2jw5p"|"https://www.reddit.com/gallery/rljfgs",
		url_overridden_by_dest: "https://i.redd.it/b0xbc5o28nz51.jpg"|"https://www.reddit.com/gallery/v2jw5p"|"https://www.reddit.com/gallery/rljfgs",
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 84132/33928903 (0.25%)
	ad_supplementary_text_md?: null|string, // 84132/33928903 (0.25%)
	adserver_click_url?: null, // 84132/33928903 (0.25%)
	adserver_imp_pixel?: null, // 84132/33928903 (0.25%)
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
	app_store_data?: null, // 84132/33928903 (0.25%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 95784/33928903 (0.28%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 668645/1819408 (36.75%)
		e: "text"|"emoji",
		t?: string, // 1150763/1819408 (63.25%)
		u?: string, // 668645/1819408 (36.75%)
	}[], // 26072984/33928903 (76.85%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 26072984/33928903 (76.85%)
	author_fullname?: string, // 26072984/33928903 (76.85%)
	author_id?: string|null, // 84132/33928903 (0.25%)
	author_patreon_flair?: boolean, // 26072984/33928903 (76.85%)
	author_premium?: boolean, // 26072984/33928903 (76.85%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 68707/33928903 (0.20%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"food"|"videos"|"writing"|"memes"|"funny",
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
			display_name: "LongBeachCA"|"brisbane"|"chloe"|"recapped_com"|"Brawlstars"|"PronsPlaythings"|"AEWOfficial"|"2westerneurope4u"|"MalayalamMovies"|"ArgentinaBenderStyle",
			display_name_prefixed: "r/LongBeachCA"|"r/brisbane"|"r/chloe"|"r/recapped_com"|"r/Brawlstars"|"r/PronsPlaythings"|"r/AEWOfficial"|"r/2westerneurope4u"|"r/MalayalamMovies"|"r/ArgentinaBenderStyle",
			icon_img: string,
			icon_size: number[]|null,
			key_color: ""|"#0079d3"|"#222222"|"#ffb000"|"#545452",
			mod_permissions: [],
			name: "t5_2rclr"|"t5_2qutz"|"t5_2qpoa"|"t5_6ofupu"|"t5_3k7ez"|"t5_7x0frx"|"t5_ubkze"|"t5_66zq15"|"t5_3j2is"|"t5_q369p",
			over_18: boolean,
			primary_color: ""|"#003ca3"|"#014980"|"#5d5564"|"#fbeaec"|"#3b0446"|"#004494"|"#ffb000"|"#373c3f",
			sr: "LongBeachCA"|"brisbane"|"chloe"|"recapped_com"|"Brawlstars"|"PronsPlaythings"|"AEWOfficial"|"2westerneurope4u"|"MalayalamMovies"|"ArgentinaBenderStyle",
			sr_display_name_prefixed: "r/LongBeachCA"|"r/brisbane"|"r/chloe"|"r/recapped_com"|"r/Brawlstars"|"r/PronsPlaythings"|"r/AEWOfficial"|"r/2westerneurope4u"|"r/MalayalamMovies"|"r/ArgentinaBenderStyle",
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: "/r/LongBeachCA/"|"/r/brisbane/"|"/r/chloe/"|"/r/recapped_com/"|"/r/Brawlstars/"|"/r/PronsPlaythings/"|"/r/AEWOfficial/"|"/r/2westerneurope4u/"|"/r/MalayalamMovies/"|"/r/ArgentinaBenderStyle/",
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads"|"some_ads",
		}, // 10/11363 (0.09%)
		subreddit_id: string,
		title: string,
	}[], // 11363/33928903 (0.03%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1571005/33928903 (4.63%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"GROUP"|"MODERATOR",
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
		author_cakeday?: boolean, // 6512/1506898 (0.43%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 40982/113906 (35.98%)
			e: "text"|"emoji",
			t?: string, // 72924/113906 (64.02%)
			u?: string, // 40982/113906 (35.98%)
		}[], // 1354667/1506898 (89.90%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1354667/1506898 (89.90%)
		author_fullname?: string, // 1354667/1506898 (89.90%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1354667/1506898 (89.90%)
		author_premium?: boolean, // 1354667/1506898 (89.90%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 512/1506898 (0.03%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"entertainment"|"diy_and_crafts"|"photography"|"gaming"|"animals"|"memes"|"funny"|"writing",
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
				display_name: "RedditEng"|"LongBeachCA",
				display_name_prefixed: "r/RedditEng"|"r/LongBeachCA",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_49fkib"|"t5_2rclr",
				over_18: boolean,
				primary_color: "#ff4500"|"#003ca3",
				sr: "RedditEng"|"LongBeachCA",
				sr_display_name_prefixed: "r/RedditEng"|"r/LongBeachCA",
				subreddit_type: "restricted"|"public",
				subscribers: number,
				title: "RedditEng"|"🏖 Long Beach, California",
				url: "/r/RedditEng/"|"/r/LongBeachCA/",
				user_can_crosspost: boolean|null,
				whitelist_status: null,
			}, // 2/1112 (0.18%)
			subreddit_id: string,
			title: string,
		}[], // 1112/1506898 (0.07%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"writing"|"diy_and_crafts"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 10/1506898 (0.00%)
		event_is_live?: boolean, // 10/1506898 (0.00%)
		event_start?: number, // 10/1506898 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 89600/583627 (15.35%)
				id: number,
				media_id: string,
				outbound_url?: string, // 17672/583627 (3.03%)
			}[],
		}|null, // 123112/1506898 (8.17%)
		gilded: number,
		gildings: {
			gid_1?: number, // 26045/1506898 (1.73%)
			gid_2?: number, // 22117/1506898 (1.47%)
			gid_3?: number, // 5311/1506898 (0.35%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 123112/1506898 (8.17%)
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
			a?: string, // 30632/231440 (13.24%)
			e: "text"|"emoji",
			t?: string, // 200808/231440 (86.76%)
			u?: string, // 30632/231440 (13.24%)
		}[],
		link_flair_template_id?: string, // 454303/1506898 (30.15%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "", // 24/29 (82.76%)
			recording_duration_seconds?: number, // 25/29 (86.21%)
			recording_fallback_url?: string, // 24/29 (82.76%)
			recording_hls_url?: "", // 24/29 (82.76%)
			recording_status: number,
			room_id: string,
			room_status?: number, // 28/29 (96.55%)
		}, // 29/1506898 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 5/493414 (0.00%)
			oembed?: {
				author_name?: string, // 197429/367499 (53.72%)
				author_url?: string, // 169629/367499 (46.16%)
				cache_age?: number, // 5485/367499 (1.49%)
				description?: string, // 33315/367499 (9.07%)
				height?: number|null, // 367496/367499 (100.00%)
				html?: string, // 367496/367499 (100.00%)
				mean_alpha?: number, // 38/367499 (0.01%)
				provider_name?: string, // 367496/367499 (100.00%)
				provider_url?: string, // 367496/367499 (100.00%)
				thumbnail_height?: number|null, // 356145/367499 (96.91%)
				thumbnail_url?: string, // 360615/367499 (98.13%)
				thumbnail_width?: number|null, // 356145/367499 (96.91%)
				title?: string, // 361974/367499 (98.50%)
				type?: "video"|"rich", // 367496/367499 (100.00%)
				url?: string, // 8768/367499 (2.39%)
				version?: "1.0", // 367496/367499 (100.00%)
				width?: number, // 367496/367499 (100.00%)
			}, // 367499/493414 (74.48%)
			reddit_video?: {
				bitrate_kbps?: number, // 125476/125910 (99.66%)
				dash_url?: string, // 125907/125910 (100.00%)
				duration?: number, // 125907/125910 (100.00%)
				fallback_url?: string, // 125907/125910 (100.00%)
				height?: number|null, // 125908/125910 (100.00%)
				hls_url?: string, // 125907/125910 (100.00%)
				is_gif?: boolean, // 125907/125910 (100.00%)
				scrubber_media_url?: string, // 125907/125910 (100.00%)
				transcoding_message?: string, // 3/125910 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 125908/125910 (100.00%)
			}, // 125910/493414 (25.52%)
			type?: string, // 367504/493414 (74.48%)
		},
		media_embed: {
			content?: string|null, // 367504/1506898 (24.39%)
			height?: number, // 367504/1506898 (24.39%)
			scrolling?: boolean, // 367504/1506898 (24.39%)
			width?: number, // 367504/1506898 (24.39%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 973/613360 (0.16%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 613230/613360 (99.98%)
				hlsUrl?: string, // 973/613360 (0.16%)
				id?: string, // 613230/613360 (99.98%)
				isGif?: boolean, // 973/613360 (0.16%)
				m?: "image/jpg"|"image/png"|"image/gif", // 612257/613360 (99.82%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 404836/613360 (66.00%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 612257/613360 (99.82%)
				s?: {
					gif?: string, // 8578/612257 (1.40%)
					mp4?: string, // 8578/612257 (1.40%)
					u?: string, // 603679/612257 (98.60%)
					x: number,
					y: number,
				}, // 612257/613360 (99.82%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 973/613360 (0.16%)
				y?: number, // 973/613360 (0.16%)
			},
		}|null, // 137135/1506898 (9.10%)
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
		parent_whitelist_status: null|"all_ads"|"no_ads"|"some_ads"|"house_only",
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 33/9592 (0.34%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"21464124"|"21347891"|"21354911"|"21507025"|"21590982"|"21625804"|"21623724",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2900/1506898 (0.19%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video"|"gallery", // 1073293/1506898 (71.23%)
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
					}, // 71720/1073293 (6.68%)
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
					}, // 71720/1073293 (6.68%)
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
					}, // 714640/1073293 (66.58%)
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
					}, // 717033/1073293 (66.81%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 411740/411894 (99.96%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 411894/1073293 (38.38%)
		}, // 1073293/1506898 (71.23%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"community_ops",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 5/493414 (0.00%)
			oembed?: {
				author_name?: string, // 197429/367499 (53.72%)
				author_url?: string, // 169629/367499 (46.16%)
				cache_age?: number, // 5485/367499 (1.49%)
				description?: string, // 33315/367499 (9.07%)
				height?: number|null, // 367496/367499 (100.00%)
				html?: string, // 367496/367499 (100.00%)
				mean_alpha?: number, // 38/367499 (0.01%)
				provider_name?: string, // 367496/367499 (100.00%)
				provider_url?: string, // 367496/367499 (100.00%)
				thumbnail_height?: number|null, // 356145/367499 (96.91%)
				thumbnail_url?: string, // 360615/367499 (98.13%)
				thumbnail_width?: number|null, // 356145/367499 (96.91%)
				title?: string, // 361974/367499 (98.50%)
				type?: "video"|"rich", // 367496/367499 (100.00%)
				url?: string, // 8768/367499 (2.39%)
				version?: "1.0", // 367496/367499 (100.00%)
				width?: number, // 367496/367499 (100.00%)
			}, // 367499/493414 (74.48%)
			reddit_video?: {
				bitrate_kbps?: number, // 125476/125910 (99.66%)
				dash_url?: string, // 125907/125910 (100.00%)
				duration?: number, // 125907/125910 (100.00%)
				fallback_url?: string, // 125907/125910 (100.00%)
				height?: number|null, // 125908/125910 (100.00%)
				hls_url?: string, // 125907/125910 (100.00%)
				is_gif?: boolean, // 125907/125910 (100.00%)
				scrubber_media_url?: string, // 125907/125910 (100.00%)
				transcoding_message?: string, // 3/125910 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 125908/125910 (100.00%)
			}, // 125910/493414 (25.52%)
			type?: string, // 367504/493414 (74.48%)
		},
		secure_media_embed: {
			content?: string|null, // 367504/1506898 (24.39%)
			height?: number, // 367504/1506898 (24.39%)
			media_domain_url?: string, // 367504/1506898 (24.39%)
			scrolling?: boolean, // 367504/1506898 (24.39%)
			width?: number, // 367504/1506898 (24.39%)
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
				status: "RESOLVED"|"OPEN"|"CLOSED",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "LIVE"|"CLOSED",
			subreddit_id: "t5_2rr0e"|"t5_5wptpp"|"t5_2ruj5"|"t5_2r6z7"|"t5_3lrep"|"t5_2qh22"|"t5_11tk33",
			theme_id: "theme_1"|"theme_4"|"theme_2"|"theme_5"|"theme_3",
			total_participants: number,
			tournament_id: string,
		}, // 9/1506898 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1355841/1506898 (89.98%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only",
		wls: null|number,
	}[], // 1571005/33928903 (4.63%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 84132/33928903 (0.25%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 84132/33928903 (0.25%)
	embed_url?: null|string, // 84132/33928903 (0.25%)
	event_end?: number, // 38/33928903 (0.00%)
	event_is_live?: boolean, // 38/33928903 (0.00%)
	event_start?: number, // 38/33928903 (0.00%)
	events?: [], // 84132/33928903 (0.25%)
	eventsOnRender?: [], // 84132/33928903 (0.25%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Download"|"View More"|"Order Now"|"Pre-order Now"|"Watch Now"|"Install"|"Play Now"|"Contact Us"|"Apply Now"|"Get Showtimes"|"See Menu"|"Get a Quote", // 11302/5506718 (0.21%)
			caption?: string, // 578783/5506718 (10.51%)
			display_url?: string, // 10756/5506718 (0.20%)
			id: number,
			media_id: string,
			outbound_url?: string, // 119641/5506718 (2.17%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 941/5506718 (0.02%)
		}[],
	}|null, // 2272001/33928903 (6.70%)
	gilded: number,
	gildings: {
		gid_1?: number, // 8893/33928903 (0.03%)
		gid_2?: number, // 20634/33928903 (0.06%)
		gid_3?: number, // 3550/33928903 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 84132/33928903 (0.25%)
	id: string,
	impression_id?: null, // 84132/33928903 (0.25%)
	impression_id_str?: null, // 84132/33928903 (0.25%)
	is_blank?: boolean, // 84132/33928903 (0.25%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2272001/33928903 (6.70%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 84132/33928903 (0.25%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 537288/6182635 (8.69%)
		e: "text"|"emoji",
		t?: string, // 5645347/6182635 (91.31%)
		u?: string, // 537288/6182635 (8.69%)
	}[],
	link_flair_template_id?: string, // 11694553/33928903 (34.47%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: "", // 667/879 (75.88%)
		recording_duration_seconds?: number, // 674/879 (76.68%)
		recording_fallback_url?: string, // 667/879 (75.88%)
		recording_hls_url?: "", // 667/879 (75.88%)
		recording_status?: number, // 862/879 (98.07%)
		room_id: string,
		room_status: number,
	}, // 879/33928903 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1ag6c1jy3as9h"|"1ah0g3s4v86w0"|"1ahkbgmqcrz9p"|"1aiefszlfpskt"|"1aj5ybdtdossj"|"1ajm4f24suxoy"|"1akc7cfji5z98", // 44/3739779 (0.00%)
		oembed?: {
			author_name?: string, // 1511127/2817432 (53.63%)
			author_url?: string, // 1424284/2817432 (50.55%)
			cache_age?: number, // 115049/2817432 (4.08%)
			description?: string, // 327815/2817432 (11.64%)
			height?: number|null, // 2817374/2817432 (100.00%)
			html?: string, // 2817374/2817432 (100.00%)
			marginheight?: number, // 2/2817432 (0.00%)
			marginwidth?: number, // 2/2817432 (0.00%)
			mean_alpha?: number, // 2936/2817432 (0.10%)
			provider_name?: string, // 2817374/2817432 (100.00%)
			provider_url?: string, // 2817374/2817432 (100.00%)
			thumbnail_height?: number|null, // 2684358/2817432 (95.28%)
			thumbnail_url?: string, // 2699896/2817432 (95.83%)
			thumbnail_width?: number|null, // 2684358/2817432 (95.28%)
			title?: string, // 2700493/2817432 (95.85%)
			type?: "video"|"rich", // 2817374/2817432 (100.00%)
			url?: string, // 245449/2817432 (8.71%)
			version?: "1.0", // 2817372/2817432 (100.00%)
			width?: number, // 2817374/2817432 (100.00%)
		}, // 2817432/3739779 (75.34%)
		reddit_video?: {
			bitrate_kbps?: number, // 918443/922303 (99.58%)
			dash_url?: string, // 918443/922303 (99.58%)
			duration?: number, // 918443/922303 (99.58%)
			fallback_url?: string, // 918443/922303 (99.58%)
			height?: number|null, // 919218/922303 (99.67%)
			hls_url?: string, // 918443/922303 (99.58%)
			is_gif?: boolean, // 918443/922303 (99.58%)
			scrubber_media_url?: string, // 918443/922303 (99.58%)
			transcoding_message?: string, // 3860/922303 (0.42%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 919218/922303 (99.67%)
		}, // 922303/3739779 (24.66%)
		type?: string, // 2817476/3739779 (75.34%)
	},
	media_embed: {
		content?: string|null, // 2817476/33928903 (8.30%)
		height?: number, // 2817476/33928903 (8.30%)
		scrolling?: boolean, // 2817476/33928903 (8.30%)
		width?: number, // 2817476/33928903 (8.30%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20866/5910036 (0.35%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 5906295/5910036 (99.94%)
			hlsUrl?: string, // 20866/5910036 (0.35%)
			id?: string, // 5906295/5910036 (99.94%)
			isGif?: boolean, // 20866/5910036 (0.35%)
			m?: "image/jpg"|"image/png"|"image/gif", // 5885429/5910036 (99.58%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2244406/5910036 (37.98%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5885429/5910036 (99.58%)
			s?: {
				gif?: string, // 49892/5885429 (0.85%)
				mp4?: string, // 49892/5885429 (0.85%)
				u?: string, // 5835537/5885429 (99.15%)
				x: number,
				y: number,
			}, // 5885429/5910036 (99.58%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 20866/5910036 (0.35%)
			y?: number, // 20866/5910036 (0.35%)
		},
	}|null, // 2667303/33928903 (7.86%)
	media_only: boolean,
	mobile_ad_url?: string, // 84132/33928903 (0.25%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 84132/33928903 (0.25%)
	outbound_link?: {
	}, // 84132/33928903 (0.25%)
	over_18: boolean,
	parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 4138/334833 (1.24%)
			vote_count?: number, // 334832/334833 (100.00%)
		}[],
		prediction_status: null|"RESOLVED"|"OPEN"|"CLOSED"|"CANCELLED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 125242/33928903 (0.37%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 12159459/33928903 (35.84%)
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
				}, // 383059/12159459 (3.15%)
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
				}, // 383059/12159459 (3.15%)
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
				}, // 5983604/12159459 (49.21%)
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
				}, // 6040306/12159459 (49.68%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1190811/1190959 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1190959/12159459 (9.79%)
	}, // 12159459/33928903 (35.84%)
	priority_id?: null, // 84132/33928903 (0.25%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 84132/33928903 (0.25%)
	promoted?: boolean, // 84132/33928903 (0.25%)
	promoted_by?: null, // 84132/33928903 (0.25%)
	promoted_display_name?: null, // 84132/33928903 (0.25%)
	promoted_url?: null, // 84132/33928903 (0.25%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"content_takedown"|"author"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1ag6c1jy3as9h"|"1ah0g3s4v86w0"|"1ahkbgmqcrz9p"|"1aiefszlfpskt"|"1aj5ybdtdossj"|"1ajm4f24suxoy"|"1akc7cfji5z98", // 44/3739779 (0.00%)
		oembed?: {
			author_name?: string, // 1511127/2817432 (53.63%)
			author_url?: string, // 1424284/2817432 (50.55%)
			cache_age?: number, // 115049/2817432 (4.08%)
			description?: string, // 327815/2817432 (11.64%)
			height?: number|null, // 2817374/2817432 (100.00%)
			html?: string, // 2817374/2817432 (100.00%)
			marginheight?: number, // 2/2817432 (0.00%)
			marginwidth?: number, // 2/2817432 (0.00%)
			mean_alpha?: number, // 2936/2817432 (0.10%)
			provider_name?: string, // 2817374/2817432 (100.00%)
			provider_url?: string, // 2817374/2817432 (100.00%)
			thumbnail_height?: number|null, // 2684358/2817432 (95.28%)
			thumbnail_url?: string, // 2699896/2817432 (95.83%)
			thumbnail_width?: number|null, // 2684358/2817432 (95.28%)
			title?: string, // 2700493/2817432 (95.85%)
			type?: "video"|"rich", // 2817374/2817432 (100.00%)
			url?: string, // 245449/2817432 (8.71%)
			version?: "1.0", // 2817372/2817432 (100.00%)
			width?: number, // 2817374/2817432 (100.00%)
		}, // 2817432/3739779 (75.34%)
		reddit_video?: {
			bitrate_kbps?: number, // 918443/922303 (99.58%)
			dash_url?: string, // 918443/922303 (99.58%)
			duration?: number, // 918443/922303 (99.58%)
			fallback_url?: string, // 918443/922303 (99.58%)
			height?: number|null, // 919218/922303 (99.67%)
			hls_url?: string, // 918443/922303 (99.58%)
			is_gif?: boolean, // 918443/922303 (99.58%)
			scrubber_media_url?: string, // 918443/922303 (99.58%)
			transcoding_message?: string, // 3860/922303 (0.42%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 919218/922303 (99.67%)
		}, // 922303/3739779 (24.66%)
		type?: string, // 2817476/3739779 (75.34%)
	},
	secure_media_embed: {
		content?: string|null, // 2817476/33928903 (8.30%)
		height?: number, // 2817476/33928903 (8.30%)
		media_domain_url?: string, // 2817476/33928903 (8.30%)
		scrolling?: boolean, // 2817476/33928903 (8.30%)
		width?: number, // 2817476/33928903 (8.30%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 84132/33928903 (0.25%)
	sk_ad_network_data?: null, // 84132/33928903 (0.25%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 358/33928903 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 84132/33928903 (0.25%)
	third_party_tracking?: null, // 84132/33928903 (0.25%)
	third_party_tracking_2?: null, // 84132/33928903 (0.25%)
	thumbnail: string,
	thumbnail_height?: number|null, // 33926845/33928903 (99.99%)
	thumbnail_width?: number|null, // 33926845/33928903 (99.99%)
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
			status: "RESOLVED"|"CLOSED"|"OPEN",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[],
		status: "LIVE"|"CLOSED",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_2"|"theme_6"|"theme_5"|"theme_4"|"theme_8"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 92/33928903 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22445544/33928903 (66.15%)
	view_count: null,
	whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}