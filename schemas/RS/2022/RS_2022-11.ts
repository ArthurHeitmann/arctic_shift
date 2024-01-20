interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"MODERATOR",
			award_type: "global"|"moderator",
			awardings_required_to_grant_benefits: null,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null|number,
			days_of_premium: null|number,
			description: string,
			end_date: null,
			giver_coin_reward: null,
			icon_format: "APNG"|"PNG"|null,
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: "All-Seeing Upvote"|"Helpful"|"Silver"|"Wholesome"|"Starstruck"|"Endless Coolness"|"I'll Drink to That"|"Gold"|"LOVE!"|"1800"|"Take My Energy"|"Helpful (Pro)"|"Powerups Post",
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
			subreddit_id: null|"t5_2qtjz",
			tiers_by_required_awardings: null,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_flair_background_color: null|""|"transparent",
		author_flair_css_class: null,
		author_flair_richtext?: {
			a?: ":Chiefs:"|":Broncos:", // 3/6 (50.00%)
			e: "emoji"|"text",
			t?: " Chiefs"|" Broncos", // 3/6 (50.00%)
			u?: string, // 3/6 (50.00%)
		}[], // 53/61 (86.89%)
		author_flair_template_id: null|"db77db14-0f93-11eb-a8e0-0ecf334df345"|"bed002ca-0f93-11eb-90ba-0ece1a96350b",
		author_flair_text: null|":Chiefs: Chiefs"|":Broncos: Broncos",
		author_flair_text_color: null|"dark",
		author_flair_type?: "text"|"richtext", // 53/61 (86.89%)
		author_fullname?: string, // 53/61 (86.89%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 53/61 (86.89%)
		author_premium?: boolean, // 53/61 (86.89%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null,
		clicked: boolean,
		collections?: {
			author_id: "t2_1ebjv3pj",
			author_name: "h0neybe8r",
			collection_id: "f5f1d3a0-a6cb-4173-be6c-8e92a17d5edd",
			created_at_utc: number,
			description: string,
			display_layout: "GALLERY",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: "t5_2rnvp",
			title: "Product Updates &amp; Announcements",
		}[], // 1/61 (1.64%)
		content_categories: null,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null,
		distinguished: null|"admin",
		domain: "i.redd.it"|"theguardian.com"|"reuters.com"|"self.fidelityinvestments"|"self.redditads"|"self.BoiseTech"|"v.redd.it"|"self.nfl"|"reddit.com"|"self.qa_ads_native_video"|"boisestate.edu",
		downs: number,
		edited: boolean,
		gallery_data?: {
			items: {
				caption?: string, // 1/3 (33.33%)
				id: number,
				media_id: "b8jivalmv6x91"|"ocpshblmv6x91"|"vaq7talmv6x91",
			}[],
		}, // 1/61 (1.64%)
		gilded: number,
		gildings: {
			gid_1?: number, // 12/61 (19.67%)
			gid_2?: number, // 9/61 (14.75%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 1/61 (1.64%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#373c3f"|"#358728"|"#ffd635"|"#94e044"|"#73ad34",
		link_flair_css_class: null|""|"imagegif"|"highlight-thread",
		link_flair_richtext: {
			e: "text",
			t: "Aww"|"Official Response"|"Update"|"Highlight"|"Art"|"Discussion"|"Feedback",
		}[],
		link_flair_template_id?: "fba32e6a-ec7c-11e4-884f-22000b2b048c"|"0227c9e0-7880-11eb-9366-0e78f3a72cb9"|"683cde62-6ac8-11ea-b62a-0ee4b26eb27b"|"09e0f392-d5e6-11ea-bb23-0e2e8fbe2d65"|"6f88946a-9314-11e2-a075-12313d192208"|"869a43ec-7ae2-11eb-a5c8-0ec685a262c3"|"6a93c3d4-8bfa-11eb-a02e-0e6030977837", // 19/61 (31.15%)
		link_flair_text: null|"image/gif"|"Aww"|"Official Response"|"Update"|"Highlight"|"WDYWT"|"Art"|"Discussion"|"Feedback",
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			reddit_video: {
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
			},
		},
		media_embed: {
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "b8jivalmv6x91"|"ocpshblmv6x91"|"vaq7talmv6x91",
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
		}, // 1/61 (1.64%)
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
		parent_whitelist_status: "all_ads"|"no_ads"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link"|"hosted:video"|"self", // 47/61 (77.05%)
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
		}, // 47/61 (77.05%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			reddit_video: {
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
			},
		},
		secure_media_embed: {
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation: boolean,
			allowed_media_in_comments: ("static"|"animated"|"giphy")[],
			banner_img: string,
			banner_size: null|number[],
			community_icon: string|null,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "worldnews"|"space"|"Images"|"AnarchyChess"|"fidelityinvestments"|"nfl"|"BoiseTech"|"BeMesmerized"|"redditads"|"japanesestreetwear"|"qa_ads_native_video",
			display_name_prefixed: "r/worldnews"|"r/space"|"r/Images"|"r/AnarchyChess"|"r/fidelityinvestments"|"r/nfl"|"r/BoiseTech"|"r/BeMesmerized"|"r/redditads"|"r/japanesestreetwear"|"r/qa_ads_native_video",
			free_form_reports: boolean,
			header_img: string|null,
			header_size: number[]|null,
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled: boolean,
			key_color: ""|"#222222"|"#ea0027"|"#0079d3",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"right"|"",
			name: "t5_2qh13"|"t5_2qh87"|"t5_2qtjz"|"t5_2yvry"|"t5_40w64h"|"t5_2qmg3"|"t5_6fhkj2"|"t5_1231n7"|"t5_2rnvp"|"t5_33vxy"|"t5_lqqzr",
			over_18: boolean,
			previous_names: [],
			primary_color: ""|"#0079d3"|"#373c3f"|"#bbbdbf"|"#358728"|"#013369"|"#ff4500"|"#d0f0c0",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit a link",
			submit_text_label: ""|"Submit a new post"|"Submit content",
			subreddit_type: "public",
			subscribers: number,
			title: "World News"|"/r/space: news, articles and discussion"|"/r/images"|"Chess Humour"|"fidelityinvestments"|"NFL: National Football League Discussion"|"BoiseTech"|"Be Mesmerized"|"Reddit Ads"|"Japanese Streetwear"|"qa_ads_native_video",
			url: "/r/worldnews/"|"/r/space/"|"/r/Images/"|"/r/AnarchyChess/"|"/r/fidelityinvestments/"|"/r/nfl/"|"/r/BoiseTech/"|"/r/BeMesmerized/"|"/r/redditads/"|"/r/japanesestreetwear/"|"/r/qa_ads_native_video/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "worldnews"|"space"|"Images"|"AnarchyChess"|"fidelityinvestments"|"nfl"|"BoiseTech"|"BeMesmerized"|"redditads"|"japanesestreetwear"|"qa_ads_native_video",
		subreddit_id: "t5_2qh13"|"t5_2qh87"|"t5_2qtjz"|"t5_2yvry"|"t5_40w64h"|"t5_2qmg3"|"t5_6fhkj2"|"t5_1231n7"|"t5_2rnvp"|"t5_33vxy"|"t5_lqqzr",
		subreddit_name_prefixed: "r/worldnews"|"r/space"|"r/Images"|"r/AnarchyChess"|"r/fidelityinvestments"|"r/nfl"|"r/BoiseTech"|"r/BeMesmerized"|"r/redditads"|"r/japanesestreetwear"|"r/qa_ads_native_video",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null|"confidence"|"top",
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
		url_overridden_by_dest?: string, // 47/61 (77.05%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|null,
		wls: number|null,
	}[], // 59509/33166596 (0.18%)
	ad_supplementary_text_md?: null|string, // 59509/33166596 (0.18%)
	adserver_click_url?: null, // 59509/33166596 (0.18%)
	adserver_imp_pixel?: null, // 59509/33166596 (0.18%)
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
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings: null,
	}[],
	allow_live_comments: boolean,
	app_store_data?: null, // 59509/33166596 (0.18%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 70082/33166596 (0.21%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 719862/1976306 (36.42%)
		e: "text"|"emoji",
		t?: string, // 1256444/1976306 (63.58%)
		u?: string, // 719862/1976306 (36.42%)
	}[], // 24577970/33166596 (74.10%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 24577970/33166596 (74.10%)
	author_fullname?: string, // 24577970/33166596 (74.10%)
	author_id?: string|null, // 59509/33166596 (0.18%)
	author_patreon_flair?: boolean, // 24577970/33166596 (74.10%)
	author_premium?: boolean, // 24577970/33166596 (74.10%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 51944/33166596 (0.16%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"food"|"videos"|"writing"|"memes"|"music",
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
			display_name: "ilovelesbians"|"WWEMatchGraphics",
			display_name_prefixed: "r/ilovelesbians"|"r/WWEMatchGraphics",
			icon_img: "",
			icon_size: null,
			key_color: "",
			mod_permissions: [],
			name: "t5_5e99b0"|"t5_uzbha",
			over_18: boolean,
			primary_color: "#ff66ac"|"#ff0000",
			sr: "ilovelesbians"|"WWEMatchGraphics",
			sr_display_name_prefixed: "r/ilovelesbians"|"r/WWEMatchGraphics",
			subreddit_type: "public",
			subscribers: number,
			title: "ilovelesbians"|"WWEMatchGraphics",
			url: "/r/ilovelesbians/"|"/r/WWEMatchGraphics/",
			user_can_crosspost: boolean,
			whitelist_status: "no_ads"|null,
		}, // 2/11717 (0.02%)
		subreddit_id: string,
		title: string,
	}[], // 11717/33166596 (0.04%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1560240/33166596 (4.70%)
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
		author_cakeday?: boolean, // 3399/1422632 (0.24%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 43119/119439 (36.10%)
			e: "text"|"emoji",
			t?: string, // 76320/119439 (63.90%)
			u?: string, // 43119/119439 (36.10%)
		}[], // 1229933/1422632 (86.45%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1229933/1422632 (86.45%)
		author_fullname?: string, // 1229933/1422632 (86.45%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1229933/1422632 (86.45%)
		author_premium?: boolean, // 1229933/1422632 (86.45%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 1298/1422632 (0.09%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"drawing_and_painting"|"animals"|"diy_and_crafts"|"gaming"|"entertainment"|"photography",
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
				display_name: "CelebsArchive"|"AIRemastered",
				display_name_prefixed: "r/CelebsArchive"|"r/AIRemastered",
				icon_img: "",
				icon_size: null,
				key_color: "#222222"|"",
				mod_permissions: [],
				name: "t5_79xb0l"|"t5_5llpna",
				over_18: boolean,
				primary_color: ""|"#373c3f",
				sr: "CelebsArchive"|"AIRemastered",
				sr_display_name_prefixed: "r/CelebsArchive"|"r/AIRemastered",
				subreddit_type: "restricted"|"public",
				subscribers: number,
				title: "Celebs Pictures, Gifs, and Videos"|"AIRemastered",
				url: "/r/CelebsArchive/"|"/r/AIRemastered/",
				user_can_crosspost: boolean,
				whitelist_status: null,
			}, // 4/2239 (0.18%)
			subreddit_id: string,
			title: string,
		}[], // 2239/1422632 (0.16%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"diy_and_crafts"|"writing"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 272/1422632 (0.02%)
		event_is_live?: boolean, // 272/1422632 (0.02%)
		event_start?: number, // 272/1422632 (0.02%)
		gallery_data?: {
			items: {
				caption?: string, // 70890/458384 (15.47%)
				id: number,
				media_id: string,
				outbound_url?: string, // 24876/458384 (5.43%)
			}[],
		}|null, // 105937/1422632 (7.45%)
		gilded: number,
		gildings: {
			gid_1?: number, // 133909/1422632 (9.41%)
			gid_2?: number, // 28041/1422632 (1.97%)
			gid_3?: number, // 6247/1422632 (0.44%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 105937/1422632 (7.45%)
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
			a?: string, // 34034/236744 (14.38%)
			e: "text"|"emoji",
			t?: string, // 202710/236744 (85.62%)
			u?: string, // 34034/236744 (14.38%)
		}[],
		link_flair_template_id?: string, // 437994/1422632 (30.79%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "", // 77/104 (74.04%)
			recording_duration_seconds?: number, // 77/104 (74.04%)
			recording_fallback_url?: string, // 77/104 (74.04%)
			recording_hls_url?: "", // 77/104 (74.04%)
			recording_status?: number, // 100/104 (96.15%)
			room_id: string,
			room_status: number,
		}, // 104/1422632 (0.01%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"19ou5cq6ex2vh"|"19ylr47b550d5"|"1a0bo5c1wle6m", // 10/477550 (0.00%)
			oembed?: {
				author_name?: string, // 326381/331113 (98.57%)
				author_url?: string, // 318782/331113 (96.28%)
				cache_age?: number, // 5088/331113 (1.54%)
				description?: string, // 12356/331113 (3.73%)
				height?: number|null, // 331110/331113 (100.00%)
				html?: string, // 331110/331113 (100.00%)
				mean_alpha?: number, // 67/331113 (0.02%)
				provider_name?: string, // 331110/331113 (100.00%)
				provider_url?: string, // 331110/331113 (100.00%)
				thumbnail_height?: number, // 324057/331113 (97.87%)
				thumbnail_url?: string, // 324077/331113 (97.88%)
				thumbnail_width?: number, // 324057/331113 (97.87%)
				title?: string, // 325916/331113 (98.43%)
				type?: "video"|"rich", // 331110/331113 (100.00%)
				url?: string, // 8170/331113 (2.47%)
				version?: "1.0", // 331110/331113 (100.00%)
				width?: number, // 331110/331113 (100.00%)
			}, // 331113/477550 (69.34%)
			reddit_video?: {
				bitrate_kbps?: number, // 145854/146427 (99.61%)
				dash_url?: string, // 146408/146427 (99.99%)
				duration?: number, // 146408/146427 (99.99%)
				fallback_url?: string, // 146408/146427 (99.99%)
				height?: number|null, // 146413/146427 (99.99%)
				hls_url?: string, // 146408/146427 (99.99%)
				is_gif?: boolean, // 146408/146427 (99.99%)
				scrubber_media_url?: string, // 146408/146427 (99.99%)
				transcoding_message?: string, // 19/146427 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 146413/146427 (99.99%)
			}, // 146427/477550 (30.66%)
			type?: string, // 331123/477550 (69.34%)
		},
		media_embed: {
			content?: string|null, // 331123/1422632 (23.28%)
			height?: number, // 331123/1422632 (23.28%)
			scrolling?: boolean, // 331123/1422632 (23.28%)
			width?: number, // 331123/1422632 (23.28%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 984/504580 (0.20%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 504479/504580 (99.98%)
				hlsUrl?: string, // 984/504580 (0.20%)
				id?: string, // 504479/504580 (99.98%)
				isGif?: boolean, // 984/504580 (0.20%)
				m?: "image/jpg"|"image/png"|"image/gif", // 503495/504580 (99.78%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 299436/504580 (59.34%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 503495/504580 (99.78%)
				s?: {
					gif?: string, // 7174/503495 (1.42%)
					mp4?: string, // 7174/503495 (1.42%)
					u?: string, // 496321/503495 (98.58%)
					x: number,
					y: number,
				}, // 503495/504580 (99.78%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 984/504580 (0.20%)
				y?: number, // 984/504580 (0.20%)
			},
		}|null, // 119930/1422632 (8.43%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 74/12132 (0.61%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|string,
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 3432/1422632 (0.24%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 966933/1422632 (67.97%)
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
					}, // 52677/966933 (5.45%)
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
					}, // 52677/966933 (5.45%)
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
					}, // 586445/966933 (60.65%)
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
					}, // 590729/966933 (61.09%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 313432/313574 (99.95%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 313574/966933 (32.43%)
		}, // 966933/1422632 (67.97%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 1/1422632 (0.00%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"19ou5cq6ex2vh"|"19ylr47b550d5"|"1a0bo5c1wle6m", // 10/477550 (0.00%)
			oembed?: {
				author_name?: string, // 326381/331113 (98.57%)
				author_url?: string, // 318782/331113 (96.28%)
				cache_age?: number, // 5088/331113 (1.54%)
				description?: string, // 12356/331113 (3.73%)
				height?: number|null, // 331110/331113 (100.00%)
				html?: string, // 331110/331113 (100.00%)
				mean_alpha?: number, // 67/331113 (0.02%)
				provider_name?: string, // 331110/331113 (100.00%)
				provider_url?: string, // 331110/331113 (100.00%)
				thumbnail_height?: number, // 324057/331113 (97.87%)
				thumbnail_url?: string, // 324077/331113 (97.88%)
				thumbnail_width?: number, // 324057/331113 (97.87%)
				title?: string, // 325916/331113 (98.43%)
				type?: "video"|"rich", // 331110/331113 (100.00%)
				url?: string, // 8170/331113 (2.47%)
				version?: "1.0", // 331110/331113 (100.00%)
				width?: number, // 331110/331113 (100.00%)
			}, // 331113/477550 (69.34%)
			reddit_video?: {
				bitrate_kbps?: number, // 145854/146427 (99.61%)
				dash_url?: string, // 146408/146427 (99.99%)
				duration?: number, // 146408/146427 (99.99%)
				fallback_url?: string, // 146408/146427 (99.99%)
				height?: number|null, // 146413/146427 (99.99%)
				hls_url?: string, // 146408/146427 (99.99%)
				is_gif?: boolean, // 146408/146427 (99.99%)
				scrubber_media_url?: string, // 146408/146427 (99.99%)
				transcoding_message?: string, // 19/146427 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 146413/146427 (99.99%)
			}, // 146427/477550 (30.66%)
			type?: string, // 331123/477550 (69.34%)
		},
		secure_media_embed: {
			content?: string|null, // 331123/1422632 (23.28%)
			height?: number, // 331123/1422632 (23.28%)
			media_domain_url?: string, // 331123/1422632 (23.28%)
			scrolling?: boolean, // 331123/1422632 (23.28%)
			width?: number, // 331123/1422632 (23.28%)
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
				resolved_option_id: string,
				status: "RESOLVED",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "CLOSED",
			subreddit_id: "t5_2qjpg"|"t5_5s38go"|"t5_2th52"|"t5_2qimj"|"t5_351wl",
			theme_id: "theme_1"|"theme_5"|"theme_3",
			total_participants: number,
			tournament_id: string,
		}, // 18/1422632 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1242587/1422632 (87.34%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|null,
		wls: number|null,
	}[], // 1560240/33166596 (4.70%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 59509/33166596 (0.18%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 59509/33166596 (0.18%)
	embed_url?: null|string, // 59509/33166596 (0.18%)
	event_end?: number, // 1661/33166596 (0.01%)
	event_is_live?: boolean, // 1661/33166596 (0.01%)
	event_start?: number, // 1661/33166596 (0.01%)
	events?: [], // 59509/33166596 (0.18%)
	eventsOnRender?: [], // 59509/33166596 (0.18%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Order Now"|"Play Now"|"Get a Quote"|"Watch Now"|"Install"|"Apply Now"|"Pre-order Now"|"Contact Us"|"Get Showtimes"|"See Menu", // 9746/4867716 (0.20%)
			caption?: string, // 577756/4867716 (11.87%)
			display_url?: string, // 8547/4867716 (0.18%)
			id: number,
			media_id: string,
			outbound_url?: string, // 114628/4867716 (2.35%)
			product?: {
				description: string,
				price: "$131.45"|"$17.85"|"$139.99",
				title: string,
			}, // 3/4867716 (0.00%)
		}[],
	}|null, // 2223797/33166596 (6.70%)
	gilded: number,
	gildings: {
		gid_1?: number, // 127767/33166596 (0.39%)
		gid_2?: number, // 26233/33166596 (0.08%)
		gid_3?: number, // 4751/33166596 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 59509/33166596 (0.18%)
	id: string,
	impression_id?: null, // 59509/33166596 (0.18%)
	impression_id_str?: null, // 59509/33166596 (0.18%)
	is_blank?: boolean, // 59509/33166596 (0.18%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2223797/33166596 (6.70%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 59509/33166596 (0.18%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 553499/6503566 (8.51%)
		e: "text"|"emoji",
		t?: string, // 5950067/6503566 (91.49%)
		u?: string, // 553499/6503566 (8.51%)
	}[],
	link_flair_template_id?: string, // 11659763/33166596 (35.16%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: "", // 875/1179 (74.22%)
		recording_duration_seconds?: number, // 896/1179 (76.00%)
		recording_fallback_url?: string, // 875/1179 (74.22%)
		recording_hls_url?: "", // 875/1179 (74.22%)
		recording_status?: number, // 1157/1179 (98.13%)
		room_id: string,
		room_status: number,
	}, // 1179/33166596 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"19ou5cq6ex2vh"|"19ylr47b550d5"|"1a0bo5c1wle6m"|"19xl5wp7vn1x3"|"19xq71z8s68a1"|"19y4x7xx3q32o"|"19ybpoerv1b3y"|"19yr9cedtlnfb"|"19yt6cyyh44mc"|"19ytwa0ewb91y"|"19yvd1j3az6cg"|"19zddfc1zwfw5", // 59/3791101 (0.00%)
		oembed?: {
			author_name?: string, // 2666663/2844086 (93.76%)
			author_url?: string, // 2620122/2844086 (92.13%)
			cache_age?: number, // 147399/2844086 (5.18%)
			description?: string, // 255036/2844086 (8.97%)
			height?: number|null, // 2843941/2844086 (99.99%)
			html?: string, // 2843941/2844086 (99.99%)
			marginheight?: number, // 1/2844086 (0.00%)
			marginwidth?: number, // 1/2844086 (0.00%)
			mean_alpha?: number, // 3011/2844086 (0.11%)
			provider_name?: string, // 2843941/2844086 (99.99%)
			provider_url?: string, // 2843941/2844086 (99.99%)
			thumbnail_height?: number, // 2687973/2844086 (94.51%)
			thumbnail_url?: string, // 2689932/2844086 (94.58%)
			thumbnail_width?: number, // 2687973/2844086 (94.51%)
			title?: string, // 2688216/2844086 (94.52%)
			type?: "video"|"rich", // 2843941/2844086 (99.99%)
			url?: string, // 270535/2844086 (9.51%)
			version?: "1.0", // 2843940/2844086 (99.99%)
			width?: number, // 2843941/2844086 (99.99%)
		}, // 2844086/3791101 (75.02%)
		reddit_video?: {
			bitrate_kbps?: number, // 941127/946956 (99.38%)
			dash_url?: string, // 941127/946956 (99.38%)
			duration?: number, // 941127/946956 (99.38%)
			fallback_url?: string, // 941127/946956 (99.38%)
			height?: number|null, // 942284/946956 (99.51%)
			hls_url?: string, // 941127/946956 (99.38%)
			is_gif?: boolean, // 941127/946956 (99.38%)
			scrubber_media_url?: string, // 941127/946956 (99.38%)
			transcoding_message?: string, // 5829/946956 (0.62%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 942284/946956 (99.51%)
		}, // 946956/3791101 (24.98%)
		type?: string, // 2844145/3791101 (75.02%)
	},
	media_embed: {
		content?: string|null, // 2844145/33166596 (8.58%)
		height?: number, // 2844145/33166596 (8.58%)
		scrolling?: boolean, // 2844145/33166596 (8.58%)
		width?: number, // 2844145/33166596 (8.58%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20512/5300208 (0.39%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 5297184/5300208 (99.94%)
			hlsUrl?: string, // 20512/5300208 (0.39%)
			id?: string, // 5297184/5300208 (99.94%)
			isGif?: boolean, // 20512/5300208 (0.39%)
			m?: "image/jpg"|"image/png"|"image/gif", // 5276672/5300208 (99.56%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 1825719/5300208 (34.45%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5276672/5300208 (99.56%)
			s?: {
				gif?: string, // 45800/5276672 (0.87%)
				mp4?: string, // 45800/5276672 (0.87%)
				u?: string, // 5230872/5276672 (99.13%)
				x: number,
				y: number,
			}, // 5276672/5300208 (99.56%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 20512/5300208 (0.39%)
			y?: number, // 20512/5300208 (0.39%)
		},
	}|null, // 2625658/33166596 (7.92%)
	media_only: boolean,
	mobile_ad_url?: string, // 59509/33166596 (0.18%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 59509/33166596 (0.18%)
	outbound_link?: {
	}, // 59509/33166596 (0.18%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 6549/371616 (1.76%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED"|"CANCELLED"|"OPEN"|"CLOSED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 149502/33166596 (0.45%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 10672275/33166596 (32.18%)
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
				}, // 274650/10672275 (2.57%)
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
				}, // 274650/10672275 (2.57%)
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
				}, // 4173946/10672275 (39.11%)
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
				}, // 4237563/10672275 (39.71%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1028211/1028338 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1028338/10672275 (9.64%)
	}, // 10672275/33166596 (32.18%)
	priority_id?: null, // 59509/33166596 (0.18%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 59509/33166596 (0.18%)
	promoted?: boolean, // 59509/33166596 (0.18%)
	promoted_by?: null, // 59509/33166596 (0.18%)
	promoted_display_name?: null, // 59509/33166596 (0.18%)
	promoted_url?: null, // 59509/33166596 (0.18%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"anti_evil_ops"|"community_ops",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 94/33166596 (0.00%)
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"19ou5cq6ex2vh"|"19ylr47b550d5"|"1a0bo5c1wle6m"|"19xl5wp7vn1x3"|"19xq71z8s68a1"|"19y4x7xx3q32o"|"19ybpoerv1b3y"|"19yr9cedtlnfb"|"19yt6cyyh44mc"|"19ytwa0ewb91y"|"19yvd1j3az6cg"|"19zddfc1zwfw5", // 59/3791101 (0.00%)
		oembed?: {
			author_name?: string, // 2666663/2844086 (93.76%)
			author_url?: string, // 2620122/2844086 (92.13%)
			cache_age?: number, // 147399/2844086 (5.18%)
			description?: string, // 255036/2844086 (8.97%)
			height?: number|null, // 2843941/2844086 (99.99%)
			html?: string, // 2843941/2844086 (99.99%)
			marginheight?: number, // 1/2844086 (0.00%)
			marginwidth?: number, // 1/2844086 (0.00%)
			mean_alpha?: number, // 3011/2844086 (0.11%)
			provider_name?: string, // 2843941/2844086 (99.99%)
			provider_url?: string, // 2843941/2844086 (99.99%)
			thumbnail_height?: number, // 2687973/2844086 (94.51%)
			thumbnail_url?: string, // 2689932/2844086 (94.58%)
			thumbnail_width?: number, // 2687973/2844086 (94.51%)
			title?: string, // 2688216/2844086 (94.52%)
			type?: "video"|"rich", // 2843941/2844086 (99.99%)
			url?: string, // 270535/2844086 (9.51%)
			version?: "1.0", // 2843940/2844086 (99.99%)
			width?: number, // 2843941/2844086 (99.99%)
		}, // 2844086/3791101 (75.02%)
		reddit_video?: {
			bitrate_kbps?: number, // 941127/946956 (99.38%)
			dash_url?: string, // 941127/946956 (99.38%)
			duration?: number, // 941127/946956 (99.38%)
			fallback_url?: string, // 941127/946956 (99.38%)
			height?: number|null, // 942284/946956 (99.51%)
			hls_url?: string, // 941127/946956 (99.38%)
			is_gif?: boolean, // 941127/946956 (99.38%)
			scrubber_media_url?: string, // 941127/946956 (99.38%)
			transcoding_message?: string, // 5829/946956 (0.62%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 942284/946956 (99.51%)
		}, // 946956/3791101 (24.98%)
		type?: string, // 2844145/3791101 (75.02%)
	},
	secure_media_embed: {
		content?: string|null, // 2844145/33166596 (8.58%)
		height?: number, // 2844145/33166596 (8.58%)
		media_domain_url?: string, // 2844145/33166596 (8.58%)
		scrolling?: boolean, // 2844145/33166596 (8.58%)
		width?: number, // 2844145/33166596 (8.58%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 59509/33166596 (0.18%)
	sk_ad_network_data?: null, // 59509/33166596 (0.18%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 2122/33166596 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 59509/33166596 (0.18%)
	third_party_tracking?: null, // 59509/33166596 (0.18%)
	third_party_tracking_2?: null, // 59509/33166596 (0.18%)
	thumbnail: string,
	thumbnail_height?: number|null, // 33163962/33166596 (99.99%)
	thumbnail_width?: number|null, // 33163962/33166596 (99.99%)
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
				image_url: null|"https://google.com",
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
		}[], // 119/129 (92.25%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_5"|"theme_2"|"theme_4"|"theme_8"|"theme_3"|"theme_7"|"theme_6",
		total_participants: number,
		tournament_id: string,
	}, // 129/33166596 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 21127461/33166596 (63.70%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}