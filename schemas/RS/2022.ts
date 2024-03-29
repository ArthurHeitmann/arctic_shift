interface RedditPost_2022 {
	ad_promoted_user_posts?: null|{
		ad_promoted_user_posts?: null,
		ad_supplementary_text_md?: null,
		all_awardings: {
			award_sub_type: "PREMIUM"|"GLOBAL"|"MODERATOR"|"APPRECIATION"|"COMMUNITY",
			award_type: "global"|"moderator"|"community",
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
			subreddit_id: null|"t5_2qtjz"|"t5_2qhta",
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
			a?: ":Chiefs:"|":Broncos:",
			e: "emoji"|"text",
			t?: " Chiefs"|" Broncos",
			u?: string,
		}[],
		author_flair_template_id: null|"db77db14-0f93-11eb-a8e0-0ecf334df345"|"bed002ca-0f93-11eb-90ba-0ece1a96350b",
		author_flair_text: null|":Chiefs: Chiefs"|":Broncos: Broncos",
		author_flair_text_color: null|"dark",
		author_flair_type?: "text"|"richtext",
		author_fullname?: string,
		author_is_blocked: boolean,
		author_patreon_flair?: boolean,
		author_premium?: boolean,
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
		}[],
		content_categories: null,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null,
		distinguished: null|"admin",
		domain: string,
		downs: number,
		edited: boolean,
		gallery_data?: {
			items: {
				caption?: string,
				id: number,
				media_id: "b8jivalmv6x91"|"ocpshblmv6x91"|"vaq7talmv6x91"|"79qe2bupud3a1"|"f6176aupud3a1",
			}[],
		},
		gilded: number,
		gildings: {
			gid_1?: number,
			gid_2?: number,
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#dadada"|"#373c3f"|"#358728"|"#ffd635"|"#94e044"|"#73ad34"|"#cc5289"|"#47b2b2",
		link_flair_css_class: null|""|"imagegif"|"highlight-thread"|"catpic"|"advice",
		link_flair_richtext: {
			e: "text",
			t: "Aww"|"Official Response"|"Update"|"Highlight"|"Art"|"Discussion"|"Feedback"|"Cat Picture"|"Advice",
		}[],
		link_flair_template_id?: "c379d47a-479e-11eb-adca-0e76e82e47bb"|"fba32e6a-ec7c-11e4-884f-22000b2b048c"|"0227c9e0-7880-11eb-9366-0e78f3a72cb9"|"683cde62-6ac8-11ea-b62a-0ee4b26eb27b"|"09e0f392-d5e6-11ea-bb23-0e2e8fbe2d65"|"6f88946a-9314-11e2-a075-12313d192208"|"869a43ec-7ae2-11eb-a5c8-0ec685a262c3"|"6a93c3d4-8bfa-11eb-a02e-0e6030977837"|"9b021bc6-b875-11ec-aa94-8e28dbb24a96"|"7e252220-f6c9-11e4-ba11-0e7d3bf7865f",
		link_flair_text: null|"Daily Thread"|"image/gif"|"Aww"|"Official Response"|"Update"|"Highlight"|"WDYWT"|"Art"|"Discussion"|"Feedback"|"Cat Picture"|"Advice",
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
				id: "b8jivalmv6x91"|"ocpshblmv6x91"|"vaq7talmv6x91"|"79qe2bupud3a1"|"f6176aupud3a1",
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
		},
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
		post_hint?: "link"|"image"|"hosted:video"|"self",
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
		},
		promo_layout?: null,
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
			allow_chat_post_creation?: boolean,
			allowed_media_in_comments: ("static"|"animated"|"giphy")[],
			banner_img: string,
			banner_size: null|number[],
			community_icon: string|null,
			created?: number,
			created_utc?: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "worldnews"|"churningcanada"|"u_twenty_yard_driver"|"space"|"Images"|"AnarchyChess"|"fidelityinvestments"|"nfl"|"BoiseTech"|"BeMesmerized"|"redditads"|"japanesestreetwear"|"qa_ads_native_video"|"fanduel"|"cats",
			display_name_prefixed: "r/worldnews"|"r/churningcanada"|"u/twenty_yard_driver"|"r/space"|"r/Images"|"r/AnarchyChess"|"r/fidelityinvestments"|"r/nfl"|"r/BoiseTech"|"r/BeMesmerized"|"r/redditads"|"r/japanesestreetwear"|"r/qa_ads_native_video"|"r/fanduel"|"r/cats",
			free_form_reports: boolean,
			header_img: string|null,
			header_size: null|number[],
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled?: boolean,
			is_default_banner?: boolean,
			is_default_icon?: boolean,
			key_color: ""|"#222222"|"#ea0027"|"#0079d3"|"#ff4500",
			link_flair_enabled: boolean,
			link_flair_position: "left"|""|"right",
			name: "t5_2qh13"|"t5_30hws"|"t5_67hfbp"|"t5_2qh87"|"t5_2qtjz"|"t5_2yvry"|"t5_40w64h"|"t5_2qmg3"|"t5_6fhkj2"|"t5_1231n7"|"t5_2rnvp"|"t5_33vxy"|"t5_lqqzr"|"t5_2vhn0"|"t5_2qhta",
			over_18: boolean,
			previous_names: [],
			primary_color: ""|"#0079d3"|"#373c3f"|"#bbbdbf"|"#358728"|"#013369"|"#ff4500"|"#d0f0c0"|"#fe3f00",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit a link",
			submit_text_label: ""|"Submit a new post"|"Submit content",
			subreddit_type: "public"|"user",
			subscribers: number,
			title: "World News"|"Churning and Welcome Bonus for Canadians"|""|"/r/space: news, articles and discussion"|"/r/images"|"Chess Humour"|"fidelityinvestments"|"NFL: National Football League Discussion"|"BoiseTech"|"Be Mesmerized"|"Reddit Ads"|"Japanese Streetwear"|"qa_ads_native_video"|"FanDuel"|"Cats",
			url: "/r/worldnews/"|"/r/churningcanada/"|"/user/twenty_yard_driver/"|"/r/space/"|"/r/Images/"|"/r/AnarchyChess/"|"/r/fidelityinvestments/"|"/r/nfl/"|"/r/BoiseTech/"|"/r/BeMesmerized/"|"/r/redditads/"|"/r/japanesestreetwear/"|"/r/qa_ads_native_video/"|"/r/fanduel/"|"/r/cats/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "worldnews"|"churningcanada"|"u_twenty_yard_driver"|"space"|"Images"|"AnarchyChess"|"fidelityinvestments"|"nfl"|"BoiseTech"|"BeMesmerized"|"redditads"|"japanesestreetwear"|"qa_ads_native_video"|"fanduel"|"cats",
		subreddit_id: "t5_2qh13"|"t5_30hws"|"t5_67hfbp"|"t5_2qh87"|"t5_2qtjz"|"t5_2yvry"|"t5_40w64h"|"t5_2qmg3"|"t5_6fhkj2"|"t5_1231n7"|"t5_2rnvp"|"t5_33vxy"|"t5_lqqzr"|"t5_2vhn0"|"t5_2qhta",
		subreddit_name_prefixed: "r/worldnews"|"r/churningcanada"|"u/twenty_yard_driver"|"r/space"|"r/Images"|"r/AnarchyChess"|"r/fidelityinvestments"|"r/nfl"|"r/BoiseTech"|"r/BeMesmerized"|"r/redditads"|"r/japanesestreetwear"|"r/qa_ads_native_video"|"r/fanduel"|"r/cats",
		subreddit_subscribers: number,
		subreddit_type: "public"|"user",
		suggested_sort: null|"new"|"qa"|"confidence"|"top",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|null,
		wls: number|null,
	}[],
	ad_supplementary_text_md?: null|string,
	adserver_click_url?: null,
	adserver_imp_pixel?: null,
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR"|"GROUP"|"CHAT_REACTION",
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
		sticky_duration_seconds?: null,
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
	app_store_data?: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean,
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext",
	author_fullname?: string,
	author_id?: string|null,
	author_patreon_flair?: boolean,
	author_premium?: boolean,
	awarders: [],
	banned_by: null,
	call_to_action?: string,
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"memes"|"food"|"writing"|"music"|"funny",
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
			banner_img: string|null,
			banner_size: null|number[],
			community_icon: string,
			created: number,
			created_utc: number,
			display_name: string,
			display_name_prefixed: string,
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#222222"|"#ea0027"|"#ddbd37"|"#a5a4a4"|"#545452"|"#ff8717"|"#7e53c1"|"#24a0ed"|"#46d160"|"#ff4500"|"#25b79f",
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
			whitelist_status: "all_ads"|"some_ads"|"no_ads"|null,
		},
		subreddit_id: string,
		title: string,
	}[],
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string,
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR"|"CHAT_REACTION",
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
			sticky_duration_seconds?: null,
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
		author_cakeday?: boolean,
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string,
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext",
		author_fullname?: string,
		author_is_blocked: boolean,
		author_patreon_flair?: boolean,
		author_premium?: boolean,
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "",
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"animals"|"drawing_and_painting"|"photography"|"gaming"|"diy_and_crafts"|"entertainment"|"food"|"memes"|"funny"|"writing"|"music"|"art"|"videos",
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
				display_name: "NASCAR"|"chloe"|"NikuNikuNii"|"BestofRedditorUpdates"|"Superstonk"|"CelebsArchive"|"AIRemastered"|"audiophile",
				display_name_prefixed: "r/NASCAR"|"r/chloe"|"r/NikuNikuNii"|"r/BestofRedditorUpdates"|"r/Superstonk"|"r/CelebsArchive"|"r/AIRemastered"|"r/audiophile",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#46d160"|"#222222"|"#545452",
				mod_permissions: [],
				name: "t5_2qs08"|"t5_2qpoa"|"t5_5cnfiu"|"t5_2ea6kj"|"t5_43zwn1"|"t5_79xb0l"|"t5_5llpna"|"t5_2qmiy",
				over_18: boolean,
				primary_color: "#bbbdbf"|""|"#014980"|"#9c5ea1"|"#242424"|"#373c3f"|"#b08622",
				sr: "NASCAR"|"chloe"|"NikuNikuNii"|"BestofRedditorUpdates"|"Superstonk"|"CelebsArchive"|"AIRemastered"|"audiophile",
				sr_display_name_prefixed: "r/NASCAR"|"r/chloe"|"r/NikuNikuNii"|"r/BestofRedditorUpdates"|"r/Superstonk"|"r/CelebsArchive"|"r/AIRemastered"|"r/audiophile",
				subreddit_type: "public"|"restricted",
				subscribers: number,
				title: string,
				url: "/r/NASCAR/"|"/r/chloe/"|"/r/NikuNikuNii/"|"/r/BestofRedditorUpdates/"|"/r/Superstonk/"|"/r/CelebsArchive/"|"/r/AIRemastered/"|"/r/audiophile/",
				user_can_crosspost: boolean|null,
				whitelist_status: "all_ads"|"no_ads"|null,
			},
			subreddit_id: string,
			title: string,
		}[],
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string|null,
		downs: number,
		edited: boolean|number,
		event_end?: number,
		event_is_live?: boolean,
		event_start?: number,
		gallery_data?: {
			items: {
				caption?: string,
				id: number,
				media_id: string,
				outbound_url?: string,
			}[],
		}|null,
		gilded: number,
		gildings: {
			gid_1?: number,
			gid_2?: number,
			gid_3?: number,
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean,
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
			a?: string,
			e: "text"|"emoji",
			t?: string,
			u?: string,
		}[],
		link_flair_template_id?: string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "",
			recording_duration_seconds?: number,
			recording_fallback_url?: string,
			recording_hls_url?: "",
			recording_status?: number,
			room_id: string,
			room_status?: number,
		},
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"18jtjyt5pdj17"|"18k2410w0vhnd"|"18qniatld5rd4"|"18t3uyo8p0wpu"|"19161fqxudgrw"|"19ou5cq6ex2vh"|"19ylr47b550d5"|"1a0bo5c1wle6m",
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height?: number|null,
				html?: string,
				mean_alpha?: number,
				provider_name?: string,
				provider_url?: string,
				thumbnail_height?: number,
				thumbnail_url?: string,
				thumbnail_width?: number,
				title?: string,
				type?: "video"|"rich",
				url?: string,
				version?: "1.0",
				width?: number,
			},
			reddit_video?: {
				bitrate_kbps?: number,
				dash_url?: string,
				duration?: number,
				fallback_url?: string,
				height?: number|null,
				hls_url?: string,
				is_gif?: boolean,
				scrubber_media_url?: string,
				transcoding_message?: string,
				transcoding_status: "completed"|"error",
				width?: number|null,
			},
			type?: string,
		},
		media_embed: {
			content?: string|null,
			height?: number,
			scrolling?: boolean,
			width?: number,
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string,
				e?: "Image"|"AnimatedImage"|"RedditVideo",
				hlsUrl?: string,
				id?: string,
				isGif?: boolean,
				m?: "image/jpg"|"image/png"|"image/gif",
				o?: {
					u: string,
					x: number,
					y: number,
				}[],
				p?: {
					u: string,
					x: number,
					y: number,
				}[],
				s?: {
					gif?: string,
					mp4?: string,
					u?: string,
					x: number,
					y: number,
				},
				status: "valid"|"failed"|"unprocessed",
				x?: number,
				y?: number,
			},
		}|null,
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
		parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number,
				vote_count?: number,
			}[],
			prediction_status: null|"RESOLVED"|"CANCELLED"|"CLOSED"|"OPEN",
			resolved_option_id: null|string,
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null,
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video",
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
					},
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
					},
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
					},
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
					},
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number,
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
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"content_takedown"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		},
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"18jtjyt5pdj17"|"18k2410w0vhnd"|"18qniatld5rd4"|"18t3uyo8p0wpu"|"19161fqxudgrw"|"19ou5cq6ex2vh"|"19ylr47b550d5"|"1a0bo5c1wle6m",
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height?: number|null,
				html?: string,
				mean_alpha?: number,
				provider_name?: string,
				provider_url?: string,
				thumbnail_height?: number,
				thumbnail_url?: string,
				thumbnail_width?: number,
				title?: string,
				type?: "video"|"rich",
				url?: string,
				version?: "1.0",
				width?: number,
			},
			reddit_video?: {
				bitrate_kbps?: number,
				dash_url?: string,
				duration?: number,
				fallback_url?: string,
				height?: number|null,
				hls_url?: string,
				is_gif?: boolean,
				scrubber_media_url?: string,
				transcoding_message?: string,
				transcoding_status: "completed"|"error",
				width?: number|null,
			},
			type?: string,
		},
		secure_media_embed: {
			content?: string|null,
			height?: number,
			media_domain_url?: string,
			scrolling?: boolean,
			width?: number,
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
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height?: number|null,
		thumbnail_width?: number|null,
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
			status: "CLOSED"|"LIVE",
			subreddit_id: string,
			theme_id: "theme_1"|"theme_5"|"theme_8"|"theme_4"|"theme_3"|"theme_2"|"theme_7"|"theme_6",
			total_participants: number,
			tournament_id: string,
		}|null,
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat")[],
		ups: number,
		upvote_ratio: number,
		url: string|null,
		url_overridden_by_dest?: string|null,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[],
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string|null,
	domain_override?: string|null,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe",
	embed_url?: null|string,
	event_end?: number,
	event_is_live?: boolean,
	event_start?: number,
	events?: [],
	eventsOnRender?: [],
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Install"|"View More"|"Download"|"Play Now"|"Order Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Watch Now"|"Pre-order Now"|"Get Showtimes"|"See Menu",
			caption?: string,
			display_url?: string,
			id: number,
			media_id: string,
			outbound_url?: string,
			product?: {
				description: string,
				price?: string,
				title: string,
			},
		}[],
	}|null,
	gilded: number,
	gildings: {
		gid_1?: number,
		gid_2?: number,
		gid_3?: number,
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string,
	id: string,
	impression_id?: null,
	impression_id_str?: null,
	is_blank?: boolean,
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean,
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	link_flair_template_id?: string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: string,
		recording_duration_seconds?: number,
		recording_fallback_url?: string,
		recording_hls_url?: "",
		recording_status?: number,
		room_id: string,
		room_status?: number,
	},
	locked: boolean,
	media: null|{
		event_id?: string,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height?: number|null,
			html?: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name?: string,
			provider_url?: string,
			thumbnail_height?: number,
			thumbnail_url?: string,
			thumbnail_width?: number,
			title?: string,
			type?: "video"|"rich",
			url?: string,
			version?: "1.0",
			width?: number,
		},
		reddit_video?: {
			bitrate_kbps?: number,
			dash_url?: string,
			duration?: number,
			fallback_url?: string,
			height?: number|null,
			hls_url?: string,
			is_gif?: boolean,
			scrubber_media_url?: string,
			transcoding_message?: string,
			transcoding_status: "completed"|"error",
			width?: number|null,
		},
		type?: string,
	},
	media_embed: {
		content?: string|null,
		height?: number,
		scrolling?: boolean,
		width?: number,
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string,
			e?: "Image"|"AnimatedImage"|"RedditVideo",
			hlsUrl?: string,
			id?: string,
			isGif?: boolean,
			m?: "image/jpg"|"image/png"|"image/gif",
			o?: {
				u: string,
				x: number,
				y: number,
			}[],
			p?: {
				u: string,
				x: number,
				y: number,
			}[],
			s?: {
				gif?: string,
				mp4?: string,
				u?: string,
				x: number,
				y: number,
			},
			status: "valid"|"failed"|"unprocessed",
			x?: number,
			y?: number,
		},
	}|null,
	media_only: boolean,
	mobile_ad_url?: string,
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null,
	outbound_link?: {
	},
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number,
			vote_count?: number,
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
	}|null,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery",
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
				},
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
				},
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
				},
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
				},
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number,
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
	priority_id?: null,
	promo_layout?: null|"SPOTLIGHT_VIDEO",
	promoted?: boolean,
	promoted_by?: null,
	promoted_display_name?: null,
	promoted_url?: null,
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	retrieved_utc?: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	},
	score: number,
	secure_media: null|{
		event_id?: string,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height?: number|null,
			html?: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name?: string,
			provider_url?: string,
			thumbnail_height?: number,
			thumbnail_url?: string,
			thumbnail_width?: number,
			title?: string,
			type?: "video"|"rich",
			url?: string,
			version?: "1.0",
			width?: number,
		},
		reddit_video?: {
			bitrate_kbps?: number,
			dash_url?: string,
			duration?: number,
			fallback_url?: string,
			height?: number|null,
			hls_url?: string,
			is_gif?: boolean,
			scrubber_media_url?: string,
			transcoding_message?: string,
			transcoding_status: "completed"|"error",
			width?: number|null,
		},
		type?: string,
	},
	secure_media_embed: {
		content?: string|null,
		height?: number,
		media_domain_url?: string,
		scrolling?: boolean,
		width?: number,
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean,
	sk_ad_network_data?: null,
	spoiler: boolean,
	stickied: boolean,
	subcaption?: null|string,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"private",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [],
	third_party_tracking?: null,
	third_party_tracking_2?: null,
	thumbnail: string,
	thumbnail_height?: number|null,
	thumbnail_width?: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE"|"ACTIVE",
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
		}[],
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_2"|"theme_5"|"theme_6"|"theme_4"|"theme_8"|"theme_3"|"theme_7",
		total_participants: number,
		tournament_id: string,
	},
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string|null,
	url_overridden_by_dest?: string|null,
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}
