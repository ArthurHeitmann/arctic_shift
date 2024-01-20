interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: {
			award_sub_type: "GLOBAL",
			award_type: "global",
			awardings_required_to_grant_benefits: null,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null,
			days_of_premium: null,
			description: "Shows the Silver Award... and that's it."|"Everything is better with a good hug",
			end_date: null,
			giver_coin_reward: null,
			icon_format: null|"PNG",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: "Silver"|"Hugz",
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
		author: "Anythingelse999999"|"Far-Ad9069"|"thepacksvrvives"|"edgeyworth95"|"staravi01"|"LackJolly381"|"Doomchick"|"[deleted]"|"StrikerTS"|"Far-Network-1054"|"Defiant_Space_4089"|"NrajSC"|"norsewolf"|"DemiFiendRSA",
		author_flair_background_color: null|""|"transparent",
		author_flair_css_class: null|"ModJamieYoung",
		author_flair_richtext?: {
			e: "text",
			t: string,
		}[], // 32/34 (94.12%)
		author_flair_template_id: null|"7a4443d8-fc0a-11ea-ac4f-0eee064bcd15",
		author_flair_text: null|string,
		author_flair_text_color: null|"dark",
		author_flair_type?: "text"|"richtext", // 32/34 (94.12%)
		author_fullname?: "t2_nqh6ed9"|"t2_ggiwo8ot"|"t2_3tgd8tnq"|"t2_3ighj688"|"t2_79lprx3n"|"t2_izw01cn8"|"t2_10wx11"|"t2_101kby"|"t2_84dtjwip"|"t2_mvnttk4x"|"t2_6c8xm8it"|"t2_jxcn1"|"t2_165g7s", // 32/34 (94.12%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 32/34 (94.12%)
		author_premium?: boolean, // 32/34 (94.12%)
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
		domain: "self.crowdstrike"|"self.Ulta"|"self.Outlander"|"i.redd.it"|"v.redd.it"|"youtube.com"|"deadline.com",
		downs: number,
		edited: boolean|number,
		gilded: number,
		gildings: {
			gid_1?: number, // 2/34 (5.88%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: "11lgjji"|"uxo523"|"111sbzk"|"115hofw"|"11vj0ls"|"135fkxc"|"1364i1r"|"12y24jt"|"ymb36e"|"uri3ko"|"zczvlm"|"124ofa6"|"13xnj5w"|"13xp2oy"|"11zlc4w",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "#007fff"|""|"#9dc1fd"|"#ffbe03"|"#ff66ac"|"#cc5289"|"#646d73"|"#cc3600"|"#ff007f",
		link_flair_css_class: ""|"s7"|"all"|"s1"|"s6"|null,
		link_flair_richtext: {
			a?: ":Camera:"|":619dda9a618eb:", // 4/34 (11.76%)
			e: "text"|"emoji",
			t?: "Season Seven"|"Feature Question"|"Security Article"|"Discussion"|" Stock Camera [Unedited]"|" Expert RAW [Edited]"|"General Question"|"APIs/Integrations"|"Spoilers All"|"Season One"|"Season Six", // 30/34 (88.24%)
			u?: string, // 4/34 (11.76%)
		}[],
		link_flair_template_id?: "4db93aec-b0d3-11ec-b289-ce3d4675ae44"|"8d46f256-c1d2-11e8-8d95-0ee0c164a0f6"|"b0cef55c-c1d2-11e8-8337-0ee8ceac9886"|"b7f4003e-ec64-11ea-9e3d-0eccd226b929"|"557aff1a-8c95-11ed-9a67-8e2c1485d51b"|"7bdbbc1c-8c95-11ed-b494-927cc8889a52"|"4de08614-0872-11ed-a88d-4612d857da38"|"f8005132-da40-11e9-9fe5-0e7280ffbfce"|"8949020c-25c8-11e9-80dc-0eca56a01ee8"|"6775b9be-d8a6-11e3-8e35-12313b0d5a0a"|"8fe291a6-d8a6-11e3-8d01-12313d1a208b", // 30/34 (88.24%)
		link_flair_text: "Season Seven"|"Feature Question"|"Security Article"|"Discussion"|":Camera: Stock Camera [Unedited]"|":619dda9a618eb: Expert RAW [Edited]"|"General Question"|"APIs/Integrations"|"Spoilers All"|"Season One"|"Season Six"|null,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "richtext"|"text",
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
			}, // 2/4 (50.00%)
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
			}, // 2/4 (50.00%)
			type?: "youtube.com", // 2/4 (50.00%)
		},
		media_embed: {
			content?: string, // 2/34 (5.88%)
			height?: number, // 2/34 (5.88%)
			scrolling?: boolean, // 2/34 (5.88%)
			width?: number, // 2/34 (5.88%)
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_11lgjji"|"t3_uxo523"|"t3_111sbzk"|"t3_115hofw"|"t3_11vj0ls"|"t3_135fkxc"|"t3_1364i1r"|"t3_12y24jt"|"t3_ymb36e"|"t3_uri3ko"|"t3_zczvlm"|"t3_124ofa6"|"t3_13xnj5w"|"t3_13xp2oy"|"t3_11zlc4w",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"self"|"hosted:video"|"rich:video"|"link", // 12/34 (35.29%)
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
		}, // 12/34 (35.29%)
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
			}, // 2/4 (50.00%)
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
			}, // 2/4 (50.00%)
			type?: "youtube.com", // 2/4 (50.00%)
		},
		secure_media_embed: {
			content?: string, // 2/34 (5.88%)
			height?: number, // 2/34 (5.88%)
			media_domain_url?: string, // 2/34 (5.88%)
			scrolling?: boolean, // 2/34 (5.88%)
			width?: number, // 2/34 (5.88%)
		},
		selftext: string,
		selftext_html: string|null,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation: boolean,
			allowed_media_in_comments: ("expression"|"giphy"|"static"|"animated")[],
			banner_img: "",
			banner_size: null,
			community_icon: string|null,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "crowdstrike"|"Outlander"|"Ulta"|"S23Ultra_Photography",
			display_name_prefixed: "r/crowdstrike"|"r/Outlander"|"r/Ulta"|"r/S23Ultra_Photography",
			free_form_reports: boolean,
			header_img: string|null,
			header_size: number[]|null,
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled: boolean,
			key_color: "#ff4500"|"#a5a4a4"|"#ff8717"|"",
			link_flair_enabled: boolean,
			link_flair_position: "right"|"left",
			name: "t5_3545p"|"t5_2u8ti"|"t5_30vvl"|"t5_7poj39",
			over_18: boolean,
			previous_names: [],
			primary_color: "#414142"|"#004444"|""|"#000000",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"SUBMIT LINK",
			submit_text_label: ""|"SUBMIT TEXT",
			subreddit_type: "public",
			subscribers: number,
			title: "CrowdStrike"|"Outlander"|"Unofficial subreddit for Ulta Beauty"|"S23 Ultra Photography",
			url: "/r/crowdstrike/"|"/r/Outlander/"|"/r/Ulta/"|"/r/S23Ultra_Photography/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "crowdstrike"|"Outlander"|"Ulta"|"S23Ultra_Photography",
		subreddit_id: "t5_3545p"|"t5_2u8ti"|"t5_30vvl"|"t5_7poj39",
		subreddit_name_prefixed: "r/crowdstrike"|"r/Outlander"|"r/Ulta"|"r/S23Ultra_Photography",
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
		url_overridden_by_dest?: string, // 10/34 (29.41%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 1410203/35872461 (3.93%)
	ad_supplementary_text_md?: null|string, // 1410203/35872461 (3.93%)
	adserver_click_url?: null, // 1410203/35872461 (3.93%)
	adserver_imp_pixel?: null, // 1410203/35872461 (3.93%)
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
	app_store_data?: null, // 1410203/35872461 (3.93%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 112740/35872461 (0.31%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 643642/1713542 (37.56%)
		e: "text"|"emoji",
		t?: string, // 1069900/1713542 (62.44%)
		u?: string, // 643642/1713542 (37.56%)
	}[], // 26487515/35872461 (73.84%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 26487515/35872461 (73.84%)
	author_fullname?: string, // 26487515/35872461 (73.84%)
	author_id?: string|null, // 1410203/35872461 (3.93%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 26487515/35872461 (73.84%)
	author_premium?: boolean, // 26487515/35872461 (73.84%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Apply Now"|"Order Now"|"Install"|"Play Now"|"Watch Now"|"Contact Us"|"Pre-order Now"|"Get Showtimes"|"Get a Quote"|"See Menu", // 1394351/35872461 (3.89%)
	campaign_id?: null, // 1410203/35872461 (3.93%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"animals"|"entertainment"|"photography"|"videos"|"writing"|"food"|"music",
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
			display_name: "BleachBraveSouls"|"recapped_com"|"totkmods",
			display_name_prefixed: "r/BleachBraveSouls"|"r/recapped_com"|"r/totkmods",
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#0dd3bb",
			mod_permissions: [],
			name: "t5_399jv"|"t5_6ofupu"|"t5_8ipk5h",
			over_18: boolean,
			primary_color: "#373c3f"|"",
			sr: "BleachBraveSouls"|"recapped_com"|"totkmods",
			sr_display_name_prefixed: "r/BleachBraveSouls"|"r/recapped_com"|"r/totkmods",
			subreddit_type: "public",
			subscribers: number,
			title: "Bleach Brave Souls"|"for the posterity of recapped.com"|"totkmods",
			url: "/r/BleachBraveSouls/"|"/r/recapped_com/"|"/r/totkmods/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads"|null,
		}, // 3/8882 (0.03%)
		subreddit_id: string,
		title: string,
	}[], // 8882/35872461 (0.02%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1350701/35872461 (3.77%)
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
			icon_format: "APNG"|"PNG"|"JPG"|null,
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
		author_cakeday?: boolean, // 3870/1239377 (0.31%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 35138/96553 (36.39%)
			e: "text"|"emoji",
			t?: string, // 61415/96553 (63.61%)
			u?: string, // 35138/96553 (36.39%)
		}[], // 1056461/1239377 (85.24%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1056461/1239377 (85.24%)
		author_fullname?: string, // 1056461/1239377 (85.24%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1056461/1239377 (85.24%)
		author_premium?: boolean, // 1056461/1239377 (85.24%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"entertainment"|"animals"|"photography"|"videos",
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
		}[], // 1301/1239377 (0.10%)
		content_categories: null|("photography"|"drawing_and_painting"|"writing"|"comics"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos")[],
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
				caption?: string, // 70467/626085 (11.26%)
				id: number,
				media_id: string,
				outbound_url?: string, // 16439/626085 (2.63%)
			}[],
		}|null, // 130521/1239377 (10.53%)
		gilded: number,
		gildings: {
			gid_1?: number, // 17314/1239377 (1.40%)
			gid_2?: number, // 18987/1239377 (1.53%)
			gid_3?: number, // 7157/1239377 (0.58%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 130521/1239377 (10.53%)
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
			a?: string, // 34940/206699 (16.90%)
			e: "text"|"emoji",
			t?: string, // 171759/206699 (83.10%)
			u?: string, // 34940/206699 (16.90%)
		}[],
		link_flair_template_id?: string, // 417026/1239377 (33.65%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_status: number,
			room_id: "db06449d-c88d-4cf7-9c25-188e977fe86c",
			room_status: number,
		}, // 1/1239377 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 5/360288 (0.00%)
			oembed?: {
				author_name?: string, // 49789/244688 (20.35%)
				author_url?: string, // 48178/244688 (19.69%)
				cache_age?: number, // 4525/244688 (1.85%)
				description?: string, // 4267/244688 (1.74%)
				height?: number|null, // 244671/244688 (99.99%)
				html?: string, // 244671/244688 (99.99%)
				mean_alpha?: number, // 38/244688 (0.02%)
				provider_name?: string, // 244671/244688 (99.99%)
				provider_url?: string, // 244671/244688 (99.99%)
				thumbnail_height?: number|null, // 225117/244688 (92.00%)
				thumbnail_url?: string, // 239888/244688 (98.04%)
				thumbnail_width?: number|null, // 225117/244688 (92.00%)
				title?: string, // 240130/244688 (98.14%)
				type?: "video"|"rich", // 244671/244688 (99.99%)
				url?: string, // 5458/244688 (2.23%)
				version?: "1.0", // 244671/244688 (99.99%)
				width?: number, // 244671/244688 (99.99%)
			}, // 244688/360288 (67.91%)
			reddit_video?: {
				bitrate_kbps?: number, // 115254/115595 (99.71%)
				dash_url?: string, // 115581/115595 (99.99%)
				duration?: number, // 115581/115595 (99.99%)
				fallback_url?: string, // 115581/115595 (99.99%)
				has_audio?: boolean, // 12/115595 (0.01%)
				height: number|null,
				hls_url?: string, // 115581/115595 (99.99%)
				is_gif?: boolean, // 115581/115595 (99.99%)
				scrubber_media_url?: string, // 115581/115595 (99.99%)
				transcoding_message?: string, // 14/115595 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 115595/360288 (32.08%)
			type?: string, // 244693/360288 (67.92%)
		},
		media_embed: {
			content?: string|null, // 244693/1239377 (19.74%)
			height?: number, // 244693/1239377 (19.74%)
			scrolling?: boolean, // 244693/1239377 (19.74%)
			width?: number, // 244693/1239377 (19.74%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 928/660582 (0.14%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 660312/660582 (99.96%)
				hlsUrl?: string, // 928/660582 (0.14%)
				id?: string, // 660312/660582 (99.96%)
				isGif?: boolean, // 928/660582 (0.14%)
				m?: "image/jpg"|"image/png"|"image/gif", // 659384/660582 (99.82%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 432095/660582 (65.41%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 659384/660582 (99.82%)
				s?: {
					gif?: string, // 9313/659384 (1.41%)
					mp4?: string, // 9313/659384 (1.41%)
					u?: string, // 650071/659384 (98.59%)
					x: number,
					y: number,
				}, // 659384/660582 (99.82%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 928/660582 (0.14%)
				y?: number, // 928/660582 (0.14%)
			},
		}|null, // 146492/1239377 (11.82%)
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
		parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw",
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count: number,
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
		}|null, // 2181/1239377 (0.18%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 837566/1239377 (67.58%)
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
					}, // 95065/837566 (11.35%)
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
					}, // 95065/837566 (11.35%)
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
					}, // 560158/837566 (66.88%)
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
					}, // 562040/837566 (67.10%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 287714/287744 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 287744/837566 (34.35%)
		}, // 837566/1239377 (67.58%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"content_takedown"|"author"|"copyright_takedown"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 5/360288 (0.00%)
			oembed?: {
				author_name?: string, // 49789/244688 (20.35%)
				author_url?: string, // 48178/244688 (19.69%)
				cache_age?: number, // 4525/244688 (1.85%)
				description?: string, // 4267/244688 (1.74%)
				height?: number|null, // 244671/244688 (99.99%)
				html?: string, // 244671/244688 (99.99%)
				mean_alpha?: number, // 38/244688 (0.02%)
				provider_name?: string, // 244671/244688 (99.99%)
				provider_url?: string, // 244671/244688 (99.99%)
				thumbnail_height?: number|null, // 225117/244688 (92.00%)
				thumbnail_url?: string, // 239888/244688 (98.04%)
				thumbnail_width?: number|null, // 225117/244688 (92.00%)
				title?: string, // 240130/244688 (98.14%)
				type?: "video"|"rich", // 244671/244688 (99.99%)
				url?: string, // 5458/244688 (2.23%)
				version?: "1.0", // 244671/244688 (99.99%)
				width?: number, // 244671/244688 (99.99%)
			}, // 244688/360288 (67.91%)
			reddit_video?: {
				bitrate_kbps?: number, // 115254/115595 (99.71%)
				dash_url?: string, // 115581/115595 (99.99%)
				duration?: number, // 115581/115595 (99.99%)
				fallback_url?: string, // 115581/115595 (99.99%)
				has_audio?: boolean, // 12/115595 (0.01%)
				height: number|null,
				hls_url?: string, // 115581/115595 (99.99%)
				is_gif?: boolean, // 115581/115595 (99.99%)
				scrubber_media_url?: string, // 115581/115595 (99.99%)
				transcoding_message?: string, // 14/115595 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 115595/360288 (32.08%)
			type?: string, // 244693/360288 (67.92%)
		},
		secure_media_embed: {
			content?: string|null, // 244693/1239377 (19.74%)
			height?: number, // 244693/1239377 (19.74%)
			media_domain_url?: string, // 244693/1239377 (19.74%)
			scrolling?: boolean, // 244693/1239377 (19.74%)
			width?: number, // 244693/1239377 (19.74%)
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
			name: "Taylor Swift Predictions Tournament",
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
			status: "LIVE",
			subreddit_id: "t5_2rlwe",
			theme_id: "theme_1",
			total_participants: number,
			tournament_id: string,
		}, // 1/1239377 (0.00%)
		treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:heartbeat")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1117637/1239377 (90.18%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"no_ads",
		wls: null|number,
	}[], // 1350701/35872461 (3.77%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 1410203/35872461 (3.93%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 1410203/35872461 (3.93%)
	embed_url?: null|string, // 1410203/35872461 (3.93%)
	event_end?: number, // 117/35872461 (0.00%)
	event_is_live?: boolean, // 117/35872461 (0.00%)
	event_start?: number, // 117/35872461 (0.00%)
	events?: [], // 1410203/35872461 (3.93%)
	eventsOnRender?: [], // 1410203/35872461 (3.93%)
	gallery_data?: null|{
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Order Now"|"Install"|"Play Now"|"Download"|"Apply Now"|"Contact Us"|"Get Showtimes"|"See Menu"|"Watch Now"|"Pre-order Now"|"Get a Quote", // 15931/5797245 (0.27%)
			caption?: string, // 418949/5797245 (7.23%)
			display_url?: string, // 18217/5797245 (0.31%)
			id: number,
			media_id: string,
			outbound_url?: string, // 119180/5797245 (2.06%)
			product?: {
				description: string,
				price?: string, // 1712/1767 (96.89%)
				title: string,
			}, // 1767/5797245 (0.03%)
		}[],
	}, // 2808807/35872461 (7.83%)
	gilded: number,
	gildings: {
		gid_1?: number, // 5574/35872461 (0.02%)
		gid_2?: number, // 18799/35872461 (0.05%)
		gid_3?: number, // 4012/35872461 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 1410203/35872461 (3.93%)
	id: string,
	impression_id?: null, // 1410203/35872461 (3.93%)
	impression_id_str?: null, // 1410203/35872461 (3.93%)
	is_blank?: boolean, // 1410203/35872461 (3.93%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2808807/35872461 (7.83%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 1410203/35872461 (3.93%)
	is_video: boolean,
	likes: null|boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 663225/6174676 (10.74%)
		e: "text"|"emoji",
		t?: string, // 5511451/6174676 (89.26%)
		u?: string, // 663225/6174676 (10.74%)
	}[],
	link_flair_template_id?: string, // 11749578/35872461 (32.75%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1b6wqka1tems5"|"1b7773xos8p83", // 46/3324455 (0.00%)
		oembed?: {
			author_name?: string, // 769378/2387780 (32.22%)
			author_url?: string, // 760992/2387780 (31.87%)
			cache_age?: number, // 74685/2387780 (3.13%)
			description?: string, // 158282/2387780 (6.63%)
			height?: number|null, // 2385533/2387780 (99.91%)
			html?: string, // 2385533/2387780 (99.91%)
			marginheight?: number, // 1/2387780 (0.00%)
			marginwidth?: number, // 1/2387780 (0.00%)
			mean_alpha?: number, // 3124/2387780 (0.13%)
			provider_name?: string, // 2385533/2387780 (99.91%)
			provider_url?: string, // 2385533/2387780 (99.91%)
			thumbnail_height?: number, // 2231171/2387780 (93.44%)
			thumbnail_url?: string, // 2311179/2387780 (96.79%)
			thumbnail_width?: number, // 2231171/2387780 (93.44%)
			title?: string, // 2310769/2387780 (96.77%)
			type?: "video"|"rich", // 2385533/2387780 (99.91%)
			url?: string, // 131692/2387780 (5.52%)
			version?: "1.0", // 2385532/2387780 (99.91%)
			width?: number, // 2385533/2387780 (99.91%)
		}, // 2387780/3324455 (71.82%)
		reddit_video?: {
			bitrate_kbps?: number, // 932089/936629 (99.52%)
			dash_url?: string, // 932094/936629 (99.52%)
			duration?: number, // 932094/936629 (99.52%)
			fallback_url?: string, // 932094/936629 (99.52%)
			height: number|null,
			hls_url?: string, // 932094/936629 (99.52%)
			is_gif?: boolean, // 932094/936629 (99.52%)
			scrubber_media_url?: string, // 932094/936629 (99.52%)
			transcoding_message?: string, // 4535/936629 (0.48%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 936629/3324455 (28.17%)
		type?: string, // 2387826/3324455 (71.83%)
	},
	media_embed: {
		content?: string|null, // 2387826/35872461 (6.66%)
		height?: number, // 2387826/35872461 (6.66%)
		scrolling?: boolean, // 2387826/35872461 (6.66%)
		width?: number, // 2387826/35872461 (6.66%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20229/6232660 (0.32%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 6225731/6232660 (99.89%)
			hlsUrl?: string, // 20229/6232660 (0.32%)
			id?: string, // 6225731/6232660 (99.89%)
			isGif?: boolean, // 20229/6232660 (0.32%)
			m?: "image/jpg"|"image/png"|"image/gif", // 6205502/6232660 (99.56%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2176432/6232660 (34.92%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6205502/6232660 (99.56%)
			s?: {
				gif?: string, // 55781/6205502 (0.90%)
				mp4?: string, // 55781/6205502 (0.90%)
				u?: string, // 6149721/6205502 (99.10%)
				x: number,
				y: number,
			}, // 6205502/6232660 (99.56%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 20229/6232660 (0.32%)
			y?: number, // 20229/6232660 (0.32%)
		},
	}|null, // 3218961/35872461 (8.97%)
	media_only: boolean,
	mobile_ad_url?: string, // 1410203/35872461 (3.93%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 1410203/35872461 (3.93%)
	outbound_link?: {
	}, // 1410203/35872461 (3.93%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count: number,
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
	}|null, // 109400/35872461 (0.30%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"gallery"|"video", // 11221649/35872461 (31.28%)
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
				}, // 720889/11221649 (6.42%)
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
				}, // 720889/11221649 (6.42%)
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
				}, // 5626584/11221649 (50.14%)
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
				}, // 5682140/11221649 (50.64%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1280620/1280650 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1280650/11221649 (11.41%)
	}, // 11221649/35872461 (31.28%)
	priority_id?: null, // 1410203/35872461 (3.93%)
	product_ids?: [], // 1410203/35872461 (3.93%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 1410203/35872461 (3.93%)
	promoted?: boolean, // 1410203/35872461 (3.93%)
	promoted_by?: null, // 1410203/35872461 (3.93%)
	promoted_display_name?: null, // 1410203/35872461 (3.93%)
	promoted_url?: null, // 1410203/35872461 (3.93%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"author"|"community_ops"|"anti_evil_ops",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown", // 1/35872461 (0.00%)
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1b6wqka1tems5"|"1b7773xos8p83", // 46/3324455 (0.00%)
		oembed?: {
			author_name?: string, // 769378/2387780 (32.22%)
			author_url?: string, // 760992/2387780 (31.87%)
			cache_age?: number, // 74685/2387780 (3.13%)
			description?: string, // 158282/2387780 (6.63%)
			height?: number|null, // 2385533/2387780 (99.91%)
			html?: string, // 2385533/2387780 (99.91%)
			marginheight?: number, // 1/2387780 (0.00%)
			marginwidth?: number, // 1/2387780 (0.00%)
			mean_alpha?: number, // 3124/2387780 (0.13%)
			provider_name?: string, // 2385533/2387780 (99.91%)
			provider_url?: string, // 2385533/2387780 (99.91%)
			thumbnail_height?: number, // 2231171/2387780 (93.44%)
			thumbnail_url?: string, // 2311179/2387780 (96.79%)
			thumbnail_width?: number, // 2231171/2387780 (93.44%)
			title?: string, // 2310769/2387780 (96.77%)
			type?: "video"|"rich", // 2385533/2387780 (99.91%)
			url?: string, // 131692/2387780 (5.52%)
			version?: "1.0", // 2385532/2387780 (99.91%)
			width?: number, // 2385533/2387780 (99.91%)
		}, // 2387780/3324455 (71.82%)
		reddit_video?: {
			bitrate_kbps?: number, // 932089/936629 (99.52%)
			dash_url?: string, // 932094/936629 (99.52%)
			duration?: number, // 932094/936629 (99.52%)
			fallback_url?: string, // 932094/936629 (99.52%)
			height: number|null,
			hls_url?: string, // 932094/936629 (99.52%)
			is_gif?: boolean, // 932094/936629 (99.52%)
			scrubber_media_url?: string, // 932094/936629 (99.52%)
			transcoding_message?: string, // 4535/936629 (0.48%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 936629/3324455 (28.17%)
		type?: string, // 2387826/3324455 (71.83%)
	},
	secure_media_embed: {
		content?: string|null, // 2387826/35872461 (6.66%)
		height?: number, // 2387826/35872461 (6.66%)
		media_domain_url?: string, // 2387826/35872461 (6.66%)
		scrolling?: boolean, // 2387826/35872461 (6.66%)
		width?: number, // 2387826/35872461 (6.66%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 1410203/35872461 (3.93%)
	sk_ad_network_data?: null, // 1410203/35872461 (3.93%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 2438/35872461 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"private",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 1410203/35872461 (3.93%)
	third_party_tracking?: null, // 1410203/35872461 (3.93%)
	third_party_tracking_2?: null, // 1410203/35872461 (3.93%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 35872183/35872461 (100.00%)
	thumbnail_width?: number|null, // 35872183/35872461 (100.00%)
	title: string,
	top_awarded_type: null|"INACTIVE"|"ACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	unrepliable_reason?: "BLOCK", // 2/35872461 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23962593/35872461 (66.80%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	wls: null|number,
}