interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "flow-a"|"roosterCoder"|"beefstickmcrocket"|"MarvelsGrantMan136"|"ChiefLeef22"|"Dismal-Location1901"|"damagedgoodz99824"|"lawrencedun2002",
		author_cakeday?: boolean, // 4/39 (10.26%)
		author_flair_background_color: null|"",
		author_flair_css_class: null,
		author_flair_richtext: {
			e: "text",
			t: "r/Movies contributor"|"Good Burger > The Godfather",
		}[],
		author_flair_template_id: null,
		author_flair_text: null|"r/Movies contributor"|"Good Burger > The Godfather",
		author_flair_text_color: null|"dark",
		author_flair_type: "text"|"richtext",
		author_fullname: "t2_ybulq"|"t2_1xze948v"|"t2_9hi0u"|"t2_5adwlxvn"|"t2_7a7qkhpq"|"t2_8344i8um"|"t2_7e9fps7i"|"t2_578lnma4",
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
		domain: "self.Frugal"|"i.redd.it"|"self.TMNT"|"deadline.com"|"youtu.be",
		downs: number,
		edited: boolean|number,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "69k04f"|"134lj9m"|"1w7vew"|"15b7ena"|"15bxdw9"|"15ctq4q"|"14yktqq"|"11ijtk9"|"14jl948",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#cc5289"|"#007373"|"#0aa18f"|"#373c3f"|"#ccac2b",
		link_flair_css_class: ""|"news"|"poster"|null,
		link_flair_richtext: {
			e: "text",
			t: "News"|"Poster",
		}[],
		link_flair_template_id?: "5e336912-4020-11eb-8142-0e0fcfb7ac91"|"dab2bec8-22f1-11e4-a89b-12313b0e827d"|"2b89defa-381e-11e2-8c5e-12313d28169d"|"953714ce-22f2-11e4-a7a1-12313d14361a"|"046c0942-c9ae-11e3-8e8b-12313d056e4a", // 21/39 (53.85%)
		link_flair_text: "Tip/advice 💁‍♀️"|"[Movie]"|"News"|"[Spoiler]"|"Poster"|null,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed: {
				author_name: "Paramount Pictures",
				author_url: string,
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
			},
			type: "youtube.com",
		},
		media_embed: {
			content?: string, // 2/39 (5.13%)
			height?: number, // 2/39 (5.13%)
			scrolling?: boolean, // 2/39 (5.13%)
			width?: number, // 2/39 (5.13%)
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_69k04f"|"t3_134lj9m"|"t3_1w7vew"|"t3_15b7ena"|"t3_15bxdw9"|"t3_15ctq4q"|"t3_14yktqq"|"t3_11ijtk9"|"t3_14jl948",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"self"|"link"|"rich:video", // 12/39 (30.77%)
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
		}, // 12/39 (30.77%)
		pwls: number,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed: {
				author_name: "Paramount Pictures",
				author_url: string,
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
			},
			type: "youtube.com",
		},
		secure_media_embed: {
			content?: string, // 2/39 (5.13%)
			height?: number, // 2/39 (5.13%)
			media_domain_url?: string, // 2/39 (5.13%)
			scrolling?: boolean, // 2/39 (5.13%)
			width?: number, // 2/39 (5.13%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation: boolean,
			allowed_media_in_comments: ("expression"|"static"|"giphy"|"animated")[],
			banner_img: "",
			banner_size: null,
			community_icon: null|string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "Frugal"|"TMNT"|"movies",
			display_name_prefixed: "r/Frugal"|"r/TMNT"|"r/movies",
			free_form_reports: boolean,
			header_img: string,
			header_size: number[],
			icon_color: "",
			icon_img: "",
			icon_size: null,
			is_chat_post_feature_enabled: boolean,
			key_color: ""|"#545452",
			link_flair_enabled: boolean,
			link_flair_position: "left",
			name: "t5_2qhbe"|"t5_2scgh"|"t5_2qh3s",
			over_18: boolean,
			previous_names: [],
			primary_color: "#014980"|"#349e48"|"#ffb000",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit link",
			submit_text_label: ""|"Submit text",
			subreddit_type: "public",
			subscribers: number,
			title: "Frugal Living: Waste Less, Gain More!"|"Anything Teenage Mutant Ninja Turtles"|"Movie News and Discussion",
			url: "/r/Frugal/"|"/r/TMNT/"|"/r/movies/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "Frugal"|"TMNT"|"movies",
		subreddit_id: "t5_2qhbe"|"t5_2scgh"|"t5_2qh3s",
		subreddit_name_prefixed: "r/Frugal"|"r/TMNT"|"r/movies",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null,
		thumbnail: string,
		thumbnail_height: null|number,
		thumbnail_width: null|number,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 10/39 (25.64%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 104385/46191305 (0.23%)
	ad_supplementary_text_md?: null|string, // 104385/46191305 (0.23%)
	adserver_click_url?: null, // 104385/46191305 (0.23%)
	adserver_imp_pixel?: null, // 104385/46191305 (0.23%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION",
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
		icon_format: "APNG"|"PNG"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null,
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
		subreddit_id: null,
		tiers_by_required_awardings: null,
	}[],
	allow_live_comments: boolean,
	app_store_data?: null, // 104385/46191305 (0.23%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 105523/46191305 (0.23%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 789005/2211427 (35.68%)
		e: "text"|"emoji",
		t?: string, // 1422422/2211427 (64.32%)
		u?: string, // 789005/2211427 (35.68%)
	}[], // 45887786/46191305 (99.34%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 45887786/46191305 (99.34%)
	author_fullname?: string, // 45887786/46191305 (99.34%)
	author_id?: string|null, // 104385/46191305 (0.23%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 45887786/46191305 (99.34%)
	author_premium?: boolean, // 45887786/46191305 (99.34%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"View More"|"Install"|"Play Now"|"Order Now"|"Watch Now"|"Apply Now"|"Contact Us"|"Pre-order Now"|"Get Showtimes"|"Get a Quote"|"See Menu", // 84381/46191305 (0.18%)
	campaign_id?: null, // 104385/46191305 (0.23%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"gaming"|"photography"|"animals"|"memes",
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
			key_color: ""|"#222222"|"#0079d3"|"#24a0ed"|"#0dd3bb"|"#ea0027"|"#46d160"|"#ffb000"|"#7e53c1",
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
			whitelist_status: null|"all_ads",
		}, // 61/6234 (0.98%)
		subreddit_id: string,
		title: string,
	}[], // 6234/46191305 (0.01%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1461374/46191305 (3.16%)
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
		author_cakeday?: boolean, // 4764/1461295 (0.33%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 38352/106659 (35.96%)
			e: "text"|"emoji",
			t?: string, // 68307/106659 (64.04%)
			u?: string, // 38352/106659 (35.96%)
		}[], // 1450925/1461295 (99.29%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1450925/1461295 (99.29%)
		author_fullname?: string, // 1450925/1461295 (99.29%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1450925/1461295 (99.29%)
		author_premium?: boolean, // 1450925/1461295 (99.29%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 62/1461295 (0.00%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"drawing_and_painting"|"photography"|"animals"|"gaming",
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
				display_name: "smallbusinessgiftshop"|"TheDefenceHorizon"|"MMGCommunity"|"InsideBerryStories"|"CruxoriumBeatz"|"PetiteShoesAdviceByDF"|"XMLTV"|"MozinationCommunity"|"INDYCAR"|"MadokaYuri",
				display_name_prefixed: "r/smallbusinessgiftshop"|"r/TheDefenceHorizon"|"r/MMGCommunity"|"r/InsideBerryStories"|"r/CruxoriumBeatz"|"r/PetiteShoesAdviceByDF"|"r/XMLTV"|"r/MozinationCommunity"|"r/INDYCAR"|"r/MadokaYuri",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#0079d3"|"#7e53c1",
				mod_permissions: [],
				name: "t5_8sqyxm"|"t5_6ru8z8"|"t5_5u77uj"|"t5_90vm6k"|"t5_82rtwo"|"t5_84qs19"|"t5_8c6bjs"|"t5_961h33"|"t5_2sdeq"|"t5_2xu9d",
				over_18: boolean,
				primary_color: ""|"#080808"|"#ff4500"|"#cc3605"|"#9e8d49"|"#6f00ff"|"#0075c9"|"#014980",
				sr: "smallbusinessgiftshop"|"TheDefenceHorizon"|"MMGCommunity"|"InsideBerryStories"|"CruxoriumBeatz"|"PetiteShoesAdviceByDF"|"XMLTV"|"MozinationCommunity"|"INDYCAR"|"MadokaYuri",
				sr_display_name_prefixed: "r/smallbusinessgiftshop"|"r/TheDefenceHorizon"|"r/MMGCommunity"|"r/InsideBerryStories"|"r/CruxoriumBeatz"|"r/PetiteShoesAdviceByDF"|"r/XMLTV"|"r/MozinationCommunity"|"r/INDYCAR"|"r/MadokaYuri",
				subreddit_type: "public"|"restricted",
				subscribers: number,
				title: string,
				url: "/r/smallbusinessgiftshop/"|"/r/TheDefenceHorizon/"|"/r/MMGCommunity/"|"/r/InsideBerryStories/"|"/r/CruxoriumBeatz/"|"/r/PetiteShoesAdviceByDF/"|"/r/XMLTV/"|"/r/MozinationCommunity/"|"/r/INDYCAR/"|"/r/MadokaYuri/",
				user_can_crosspost: boolean,
				whitelist_status: null|"all_ads",
			}, // 15/537 (2.79%)
			subreddit_id: string,
			title: string,
		}[], // 537/1461295 (0.04%)
		content_categories: null|("photography"|"drawing_and_painting"|"writing"|"comics"|"gaming"|"diy_and_crafts"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 4/1461295 (0.00%)
		event_is_live?: boolean, // 4/1461295 (0.00%)
		event_start?: number, // 4/1461295 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 61421/1092253 (5.62%)
				id: number,
				media_id: string,
				outbound_url?: string, // 18247/1092253 (1.67%)
			}[],
		}|null, // 177906/1461295 (12.17%)
		gilded: number,
		gildings: {
			gid_1?: number, // 12213/1461295 (0.84%)
			gid_2?: number, // 12320/1461295 (0.84%)
			gid_3?: number, // 3799/1461295 (0.26%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 177906/1461295 (12.17%)
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
			a?: string, // 41919/216034 (19.40%)
			e: "text"|"emoji",
			t?: string, // 174115/216034 (80.60%)
			u?: string, // 41919/216034 (19.40%)
		}[],
		link_flair_template_id?: string, // 457170/1461295 (31.29%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 1/441516 (0.00%)
			oembed?: {
				author_name?: string, // 41898/335999 (12.47%)
				author_url?: string, // 40824/335999 (12.15%)
				cache_age?: number, // 3609/335999 (1.07%)
				description?: string, // 3423/335999 (1.02%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 57/335999 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number|null, // 309969/335999 (92.25%)
				thumbnail_url?: string, // 332145/335999 (98.85%)
				thumbnail_width?: number|null, // 309969/335999 (92.25%)
				title?: string, // 332368/335999 (98.92%)
				type: "video"|"rich",
				url?: string, // 4545/335999 (1.35%)
				version: "1.0",
				width: number,
			}, // 335999/441516 (76.10%)
			reddit_video?: {
				bitrate_kbps?: number, // 105298/105516 (99.79%)
				dash_url?: string, // 105509/105516 (99.99%)
				duration?: number, // 105509/105516 (99.99%)
				fallback_url?: string, // 105509/105516 (99.99%)
				has_audio?: boolean, // 14768/105516 (14.00%)
				height?: number|null, // 105515/105516 (100.00%)
				hls_url?: string, // 105509/105516 (99.99%)
				is_gif?: boolean, // 105509/105516 (99.99%)
				scrubber_media_url?: string, // 105509/105516 (99.99%)
				transcoding_message?: string, // 7/105516 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 105515/105516 (100.00%)
			}, // 105516/441516 (23.90%)
			type?: string, // 336000/441516 (76.10%)
		},
		media_embed: {
			content?: string, // 336000/1461295 (22.99%)
			height?: number, // 336000/1461295 (22.99%)
			scrolling?: boolean, // 336000/1461295 (22.99%)
			width?: number, // 336000/1461295 (22.99%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1350/1142969 (0.12%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1141374/1142969 (99.86%)
				hlsUrl?: string, // 1350/1142969 (0.12%)
				id?: string, // 1141374/1142969 (99.86%)
				isGif?: boolean, // 1350/1142969 (0.12%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1140024/1142969 (99.74%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 844707/1142969 (73.90%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1140024/1142969 (99.74%)
				s?: {
					gif?: string, // 21060/1140024 (1.85%)
					mp4?: string, // 21060/1140024 (1.85%)
					u?: string, // 1118964/1140024 (98.15%)
					x: number,
					y: number,
				}, // 1140024/1142969 (99.74%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 1350/1142969 (0.12%)
				y?: number, // 1350/1142969 (0.12%)
			},
		}|null, // 202194/1461295 (13.84%)
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
				vote_count?: number, // 296/7272 (4.07%)
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
		}|null, // 1899/1461295 (0.13%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 1142721/1461295 (78.20%)
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
					}, // 130248/1142721 (11.40%)
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
					}, // 130248/1142721 (11.40%)
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
					}, // 822617/1142721 (71.99%)
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
					}, // 824636/1142721 (72.16%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 377656/377705 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 377705/1142721 (33.05%)
		}, // 1142721/1461295 (78.20%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"moderator"|"deleted"|"copyright_takedown"|"author"|"content_takedown"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 1/441516 (0.00%)
			oembed?: {
				author_name?: string, // 41898/335999 (12.47%)
				author_url?: string, // 40824/335999 (12.15%)
				cache_age?: number, // 3609/335999 (1.07%)
				description?: string, // 3423/335999 (1.02%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 57/335999 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number|null, // 309969/335999 (92.25%)
				thumbnail_url?: string, // 332145/335999 (98.85%)
				thumbnail_width?: number|null, // 309969/335999 (92.25%)
				title?: string, // 332368/335999 (98.92%)
				type: "video"|"rich",
				url?: string, // 4545/335999 (1.35%)
				version: "1.0",
				width: number,
			}, // 335999/441516 (76.10%)
			reddit_video?: {
				bitrate_kbps?: number, // 105298/105516 (99.79%)
				dash_url?: string, // 105509/105516 (99.99%)
				duration?: number, // 105509/105516 (99.99%)
				fallback_url?: string, // 105509/105516 (99.99%)
				has_audio?: boolean, // 14768/105516 (14.00%)
				height?: number|null, // 105515/105516 (100.00%)
				hls_url?: string, // 105509/105516 (99.99%)
				is_gif?: boolean, // 105509/105516 (99.99%)
				scrubber_media_url?: string, // 105509/105516 (99.99%)
				transcoding_message?: string, // 7/105516 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 105515/105516 (100.00%)
			}, // 105516/441516 (23.90%)
			type?: string, // 336000/441516 (76.10%)
		},
		secure_media_embed: {
			content?: string, // 336000/1461295 (22.99%)
			height?: number, // 336000/1461295 (22.99%)
			media_domain_url?: string, // 336000/1461295 (22.99%)
			scrolling?: boolean, // 336000/1461295 (22.99%)
			width?: number, // 336000/1461295 (22.99%)
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
		top_awarded_type: null|"INACTIVE"|"ACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1307282/1461295 (89.46%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1461374/46191305 (3.16%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 104385/46191305 (0.23%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 104385/46191305 (0.23%)
	embed_url?: null|string, // 104385/46191305 (0.23%)
	event_end?: number, // 80/46191305 (0.00%)
	event_is_live?: boolean, // 80/46191305 (0.00%)
	event_start?: number, // 80/46191305 (0.00%)
	events?: [], // 104385/46191305 (0.23%)
	eventsOnRender?: [], // 104385/46191305 (0.23%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Download"|"Install"|"Play Now"|"Apply Now"|"See Menu"|"Watch Now"|"Order Now"|"Pre-order Now"|"Contact Us"|"Get a Quote"|"Get Showtimes", // 16945/11838870 (0.14%)
			caption?: string, // 478367/11838870 (4.04%)
			display_url?: string, // 18898/11838870 (0.16%)
			id: number,
			media_id: string,
			outbound_url?: string, // 147382/11838870 (1.24%)
			product?: {
				description: string,
				price?: string, // 610/625 (97.60%)
				title: string,
			}, // 625/11838870 (0.01%)
		}[],
	}|null, // 3372259/46191305 (7.30%)
	gilded: number,
	gildings: {
		gid_1?: number, // 3/46191305 (0.00%)
		gid_2?: number, // 11/46191305 (0.00%)
		gid_3?: number, // 1/46191305 (0.00%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 104385/46191305 (0.23%)
	id: string,
	impression_id?: null, // 104385/46191305 (0.23%)
	impression_id_str?: null, // 104385/46191305 (0.23%)
	is_blank?: boolean, // 104385/46191305 (0.23%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3372259/46191305 (7.30%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 104385/46191305 (0.23%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 804484/6910273 (11.64%)
		e: "text"|"emoji",
		t?: string, // 6105789/6910273 (88.36%)
		u?: string, // 804484/6910273 (11.64%)
	}[],
	link_flair_template_id?: string, // 13584113/46191305 (29.41%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1bjqt23w5u3o9"|"1bgnmc2imtyk4"|"1bhafy4ro9h61"|"1bgxi1pkh4xn5"|"1bhmthbzbrqfa"|"1bj1oa8ynafa7"|"1bkenz9g1t967"|"1bl4v15e56rnk", // 64/3820766 (0.00%)
		oembed?: {
			author_name?: string, // 862432/3112265 (27.71%)
			author_url?: string, // 857849/3112265 (27.56%)
			cache_age?: number, // 62231/3112265 (2.00%)
			description?: string, // 156739/3112265 (5.04%)
			height?: number|null, // 3112224/3112265 (100.00%)
			html?: string, // 3112224/3112265 (100.00%)
			marginheight?: number, // 7/3112265 (0.00%)
			marginwidth?: number, // 7/3112265 (0.00%)
			mean_alpha?: number, // 2069/3112265 (0.07%)
			provider_name?: string, // 3112224/3112265 (100.00%)
			provider_url?: string, // 3112224/3112265 (100.00%)
			thumbnail_height?: number|null, // 2911200/3112265 (93.54%)
			thumbnail_url?: string, // 3050285/3112265 (98.01%)
			thumbnail_width?: number|null, // 2911200/3112265 (93.54%)
			title?: string, // 3049546/3112265 (97.98%)
			type?: "video"|"rich", // 3112224/3112265 (100.00%)
			url?: string, // 119722/3112265 (3.85%)
			version?: "1.0", // 3112217/3112265 (100.00%)
			width?: number, // 3112224/3112265 (100.00%)
		}, // 3112265/3820766 (81.46%)
		reddit_video?: {
			bitrate_kbps?: number, // 704805/708437 (99.49%)
			dash_url?: string, // 704805/708437 (99.49%)
			duration?: number, // 704805/708437 (99.49%)
			fallback_url?: string, // 704805/708437 (99.49%)
			has_audio?: boolean, // 24944/708437 (3.52%)
			height?: number|null, // 708347/708437 (99.99%)
			hls_url?: string, // 704805/708437 (99.49%)
			is_gif?: boolean, // 704805/708437 (99.49%)
			scrubber_media_url?: string, // 704805/708437 (99.49%)
			transcoding_message?: string, // 3632/708437 (0.51%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 708347/708437 (99.99%)
		}, // 708437/3820766 (18.54%)
		type?: string, // 3112329/3820766 (81.46%)
	},
	media_embed: {
		content?: string|null, // 3112329/46191305 (6.74%)
		height?: number, // 3112329/46191305 (6.74%)
		scrolling?: boolean, // 3112329/46191305 (6.74%)
		width?: number, // 3112329/46191305 (6.74%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17358/12393659 (0.14%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 12198497/12393659 (98.43%)
			hlsUrl?: string, // 17358/12393659 (0.14%)
			id?: string, // 12198497/12393659 (98.43%)
			isGif?: boolean, // 17358/12393659 (0.14%)
			m?: "image/jpg"|"image/png"|"image/gif", // 12181139/12393659 (98.29%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6126999/12393659 (49.44%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 12181139/12393659 (98.29%)
			s?: {
				gif?: string, // 115566/12181139 (0.95%)
				mp4?: string, // 115566/12181139 (0.95%)
				u?: string, // 12065573/12181139 (99.05%)
				x: number,
				y: number,
			}, // 12181139/12393659 (98.29%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 17358/12393659 (0.14%)
			y?: number, // 17358/12393659 (0.14%)
		},
	}|null, // 3841671/46191305 (8.32%)
	media_only: boolean,
	mobile_ad_url?: string, // 104385/46191305 (0.23%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 104385/46191305 (0.23%)
	outbound_link?: {
	}, // 104385/46191305 (0.23%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
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
	}|null, // 121266/46191305 (0.26%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 24737588/46191305 (53.55%)
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
				}, // 1935538/24737588 (7.82%)
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
				}, // 1935538/24737588 (7.82%)
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
				}, // 13998779/24737588 (56.59%)
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
				}, // 14088941/24737588 (56.95%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 3309184/3309235 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 3309235/24737588 (13.38%)
	}, // 24737588/46191305 (53.55%)
	priority_id?: null, // 104385/46191305 (0.23%)
	product_ids?: [], // 104385/46191305 (0.23%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 104385/46191305 (0.23%)
	promoted?: boolean, // 104385/46191305 (0.23%)
	promoted_by?: null, // 104385/46191305 (0.23%)
	promoted_display_name?: null, // 104385/46191305 (0.23%)
	promoted_url?: null, // 104385/46191305 (0.23%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"author"|"content_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1bjqt23w5u3o9"|"1bgnmc2imtyk4"|"1bhafy4ro9h61"|"1bgxi1pkh4xn5"|"1bhmthbzbrqfa"|"1bj1oa8ynafa7"|"1bkenz9g1t967"|"1bl4v15e56rnk", // 64/3820766 (0.00%)
		oembed?: {
			author_name?: string, // 862432/3112265 (27.71%)
			author_url?: string, // 857849/3112265 (27.56%)
			cache_age?: number, // 62231/3112265 (2.00%)
			description?: string, // 156739/3112265 (5.04%)
			height?: number|null, // 3112224/3112265 (100.00%)
			html?: string, // 3112224/3112265 (100.00%)
			marginheight?: number, // 7/3112265 (0.00%)
			marginwidth?: number, // 7/3112265 (0.00%)
			mean_alpha?: number, // 2069/3112265 (0.07%)
			provider_name?: string, // 3112224/3112265 (100.00%)
			provider_url?: string, // 3112224/3112265 (100.00%)
			thumbnail_height?: number|null, // 2911200/3112265 (93.54%)
			thumbnail_url?: string, // 3050285/3112265 (98.01%)
			thumbnail_width?: number|null, // 2911200/3112265 (93.54%)
			title?: string, // 3049546/3112265 (97.98%)
			type?: "video"|"rich", // 3112224/3112265 (100.00%)
			url?: string, // 119722/3112265 (3.85%)
			version?: "1.0", // 3112217/3112265 (100.00%)
			width?: number, // 3112224/3112265 (100.00%)
		}, // 3112265/3820766 (81.46%)
		reddit_video?: {
			bitrate_kbps?: number, // 704805/708437 (99.49%)
			dash_url?: string, // 704805/708437 (99.49%)
			duration?: number, // 704805/708437 (99.49%)
			fallback_url?: string, // 704805/708437 (99.49%)
			has_audio?: boolean, // 24944/708437 (3.52%)
			height?: number|null, // 708347/708437 (99.99%)
			hls_url?: string, // 704805/708437 (99.49%)
			is_gif?: boolean, // 704805/708437 (99.49%)
			scrubber_media_url?: string, // 704805/708437 (99.49%)
			transcoding_message?: string, // 3632/708437 (0.51%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 708347/708437 (99.99%)
		}, // 708437/3820766 (18.54%)
		type?: string, // 3112329/3820766 (81.46%)
	},
	secure_media_embed: {
		content?: string|null, // 3112329/46191305 (6.74%)
		height?: number, // 3112329/46191305 (6.74%)
		media_domain_url?: string, // 3112329/46191305 (6.74%)
		scrolling?: boolean, // 3112329/46191305 (6.74%)
		width?: number, // 3112329/46191305 (6.74%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 104385/46191305 (0.23%)
	sk_ad_network_data?: null, // 104385/46191305 (0.23%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 715/46191305 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"private",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 104385/46191305 (0.23%)
	third_party_tracking?: null, // 104385/46191305 (0.23%)
	third_party_tracking_2?: null, // 104385/46191305 (0.23%)
	thumbnail: string,
	thumbnail_height?: number|null, // 46191007/46191305 (100.00%)
	thumbnail_width?: number|null, // 46191007/46191305 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 29085149/46191305 (62.97%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}