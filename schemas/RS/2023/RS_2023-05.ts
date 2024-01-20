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
			days_of_premium: null|number,
			description: string,
			end_date: null,
			giver_coin_reward: null,
			icon_format: "PNG"|null,
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: "Go Vote!"|"Gold",
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
		author_flair_background_color: null|""|"#373c3f",
		author_flair_css_class: null,
		author_flair_richtext?: {
			e: "text",
			t: string,
		}[], // 65/67 (97.01%)
		author_flair_template_id: null|"fa68947a-b331-11ed-a92d-8e8c3886af15",
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 65/67 (97.01%)
		author_fullname?: string, // 65/67 (97.01%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 65/67 (97.01%)
		author_premium?: boolean, // 65/67 (97.01%)
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
		domain: "reddit.com"|"v.redd.it"|"i.redd.it"|"decider.com"|"youtube.com"|"self.movies"|"self.printforgood"|"collider.com",
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				caption?: "Finished Product"|"Original Picture of Yaya"|"Original Picture of Cat", // 30/52 (57.69%)
				id: number,
				media_id: string,
			}[],
		}, // 14/67 (20.90%)
		gilded: number,
		gildings: {
			gid_2?: number, // 2/67 (2.99%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 14/67 (20.90%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "#ccac2b"|"#ffbe33"|"#0079d3"|"#00a6a5"|""|"#46d160"|"#005ba1"|"#346400"|"#5a74cc",
		link_flair_css_class: "artwork"|"Dive"|"article"|"trailer"|""|"poster"|null,
		link_flair_richtext: {
			a?: ":Dive:", // 12/57 (21.05%)
			e: "text"|"emoji",
			t?: " Dive"|"Article"|"Trailer"|"Official Discussion"|"Poster"|"Request: North America", // 45/57 (78.95%)
			u?: string, // 12/57 (21.05%)
		}[],
		link_flair_template_id?: "1fd9be24-622f-11eb-9d49-0e0440bc3185"|"a33d4980-b786-11ed-9a7d-6a1ce61c980c"|"af49ed64-681d-11e2-b862-12313b088941"|"f247769a-7baf-11e2-800d-12313d18803b"|"fe9ded54-be65-11ec-8841-5239e2f82279"|"046c0942-c9ae-11e3-8e8b-12313d056e4a"|"4b75986e-c6aa-11ed-b9c5-9e3262950f78"|"8e15ff9a-6d73-11e9-b737-0ed4276b831e"|"c02252e8-6d75-11e9-b4b7-0e55b532602e", // 61/67 (91.04%)
		link_flair_text: "Artwork / Design"|":Dive: Dive"|"Article"|"Trailer"|"Official Discussion"|"Poster"|"Request: North America"|"Integral Calculus"|"Meme"|null,
		link_flair_text_color: "light"|"dark"|null,
		link_flair_type: "richtext"|"text",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name: "Lionsgate Movies",
				author_url: "https://www.youtube.com/@LionsgateMovies",
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
			}, // 8/20 (40.00%)
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
			}, // 12/20 (60.00%)
			type?: "youtube.com", // 8/20 (40.00%)
		},
		media_embed: {
			content?: string, // 8/67 (11.94%)
			height?: number, // 8/67 (11.94%)
			scrolling?: boolean, // 8/67 (11.94%)
			width?: number, // 8/67 (11.94%)
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: string,
				m: "image/jpg"|"image/png",
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
		}, // 14/67 (20.90%)
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
		post_hint?: "link"|"hosted:video"|"image"|"rich:video", // 43/67 (64.18%)
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
		}, // 43/67 (64.18%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name: "Lionsgate Movies",
				author_url: "https://www.youtube.com/@LionsgateMovies",
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
			}, // 8/20 (40.00%)
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
			}, // 12/20 (60.00%)
			type?: "youtube.com", // 8/20 (40.00%)
		},
		secure_media_embed: {
			content?: string, // 8/67 (11.94%)
			height?: number, // 8/67 (11.94%)
			media_domain_url?: string, // 8/67 (11.94%)
			scrolling?: boolean, // 8/67 (11.94%)
			width?: number, // 8/67 (11.94%)
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
			community_icon: string|null,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "movies"|"photoshop"|"underwatervideography"|"printforgood"|"SamePlot"|"entertainment"|"calculus",
			display_name_prefixed: "r/movies"|"r/photoshop"|"r/underwatervideography"|"r/printforgood"|"r/SamePlot"|"r/entertainment"|"r/calculus",
			free_form_reports: boolean,
			header_img: string|null,
			header_size: number[]|null,
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled: boolean,
			key_color: ""|"#24a0ed"|"#ea0027",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"right",
			name: "t5_2qh3s"|"t5_2qhcb"|"t5_2xglf"|"t5_82mo25"|"t5_5y9972"|"t5_2qh0f"|"t5_2qxm5",
			over_18: boolean,
			previous_names: [],
			primary_color: "#ffb000"|""|"#ffffff"|"#b8001f"|"#ea0027",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit link",
			submit_text_label: ""|"Submit text",
			subreddit_type: "public",
			subscribers: number,
			title: "Movie News and Discussion"|"Adobe Photoshop"|"Underwater Videography"|"Print for Good"|"Movies that have the same plot"|"Entertainment"|"Calculus",
			url: "/r/movies/"|"/r/photoshop/"|"/r/underwatervideography/"|"/r/printforgood/"|"/r/SamePlot/"|"/r/entertainment/"|"/r/calculus/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "movies"|"photoshop"|"underwatervideography"|"printforgood"|"SamePlot"|"entertainment"|"calculus",
		subreddit_id: "t5_2qh3s"|"t5_2qhcb"|"t5_2xglf"|"t5_82mo25"|"t5_5y9972"|"t5_2qh0f"|"t5_2qxm5",
		subreddit_name_prefixed: "r/movies"|"r/photoshop"|"r/underwatervideography"|"r/printforgood"|"r/SamePlot"|"r/entertainment"|"r/calculus",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null,
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
		url_overridden_by_dest?: string, // 57/67 (85.07%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|null,
		wls: number|null,
	}[], // 139133/35483768 (0.39%)
	ad_supplementary_text_md?: null|string, // 139133/35483768 (0.39%)
	adserver_click_url?: null, // 139133/35483768 (0.39%)
	adserver_imp_pixel?: null, // 139133/35483768 (0.39%)
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
	app_store_data?: null, // 139133/35483768 (0.39%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 115252/35483768 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 699843/1878433 (37.26%)
		e: "text"|"emoji",
		t?: string, // 1178590/1878433 (62.74%)
		u?: string, // 699843/1878433 (37.26%)
	}[], // 25347766/35483768 (71.43%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 25347766/35483768 (71.43%)
	author_fullname?: string, // 25347766/35483768 (71.43%)
	author_id?: string|null, // 139133/35483768 (0.39%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 25347766/35483768 (71.43%)
	author_premium?: boolean, // 25347766/35483768 (71.43%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Download"|"View More"|"Shop Now"|"Sign Up"|"Install"|"Order Now"|"Play Now"|"Apply Now"|"Watch Now"|"Contact Us"|"Pre-order Now"|"Get a Quote"|"Get Showtimes"|"See Menu", // 113628/35483768 (0.32%)
	campaign_id?: null, // 139133/35483768 (0.39%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"animals"|"gaming"|"photography"|"entertainment"|"food"|"videos"|"writing",
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
			display_name: "Youmo"|"UK_Celebs_Boots",
			display_name_prefixed: "r/Youmo"|"r/UK_Celebs_Boots",
			icon_img: "",
			icon_size: null,
			key_color: "",
			mod_permissions: [],
			name: "t5_6xbnwd"|"t5_6qvjto",
			over_18: boolean,
			primary_color: "#277bc0"|"#cc8b00",
			sr: "Youmo"|"UK_Celebs_Boots",
			sr_display_name_prefixed: "r/Youmo"|"r/UK_Celebs_Boots",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/Youmo/"|"/r/UK_Celebs_Boots/",
			user_can_crosspost: null|boolean,
			whitelist_status: null,
		}, // 3/9441 (0.03%)
		subreddit_id: string,
		title: string,
	}[], // 9441/35483768 (0.03%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1512066/35483768 (4.26%)
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
		author_cakeday?: boolean, // 4784/1273149 (0.38%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 38870/109964 (35.35%)
			e: "text"|"emoji",
			t?: string, // 71094/109964 (64.65%)
			u?: string, // 38870/109964 (35.35%)
		}[], // 1094729/1273149 (85.99%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1094729/1273149 (85.99%)
		author_fullname?: string, // 1094729/1273149 (85.99%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1094729/1273149 (85.99%)
		author_premium?: boolean, // 1094729/1273149 (85.99%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"animals"|"photography"|"entertainment",
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
				display_name: "AnarchoMeme",
				display_name_prefixed: "r/AnarchoMeme",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_80iqj8",
				over_18: boolean,
				primary_color: "#b8001f",
				sr: "AnarchoMeme",
				sr_display_name_prefixed: "r/AnarchoMeme",
				subreddit_type: "public",
				subscribers: number,
				title: "AnarchoMeme",
				url: "/r/AnarchoMeme/",
				user_can_crosspost: boolean,
				whitelist_status: null,
			}, // 2/1975 (0.10%)
			subreddit_id: string,
			title: string,
		}[], // 1975/1273149 (0.16%)
		content_categories: null|("photography"|"drawing_and_painting"|"writing"|"comics"|"gaming"|"diy_and_crafts"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 1/1273149 (0.00%)
		event_is_live?: boolean, // 1/1273149 (0.00%)
		event_start?: number, // 1/1273149 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 76245/556705 (13.70%)
				id: number,
				media_id: string,
				outbound_url?: string, // 16315/556705 (2.93%)
			}[],
		}|null, // 116723/1273149 (9.17%)
		gilded: number,
		gildings: {
			gid_1?: number, // 16018/1273149 (1.26%)
			gid_2?: number, // 17580/1273149 (1.38%)
			gid_3?: number, // 3918/1273149 (0.31%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 116723/1273149 (9.17%)
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
			a?: string, // 35155/223345 (15.74%)
			e: "text"|"emoji",
			t?: string, // 188190/223345 (84.26%)
			u?: string, // 35155/223345 (15.74%)
		}[],
		link_flair_template_id?: string, // 422556/1273149 (33.19%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 3/382655 (0.00%)
			oembed?: {
				author_name?: string, // 56536/252215 (22.42%)
				author_url?: string, // 54702/252215 (21.69%)
				cache_age?: number, // 4835/252215 (1.92%)
				description?: string, // 5190/252215 (2.06%)
				height?: number|null, // 252164/252215 (99.98%)
				html?: string, // 252164/252215 (99.98%)
				mean_alpha?: number, // 19/252215 (0.01%)
				provider_name?: string, // 252164/252215 (99.98%)
				provider_url?: string, // 252164/252215 (99.98%)
				thumbnail_height?: number, // 229479/252215 (90.99%)
				thumbnail_url?: string, // 247049/252215 (97.95%)
				thumbnail_width?: number, // 229479/252215 (90.99%)
				title?: string, // 247315/252215 (98.06%)
				type?: "video"|"rich", // 252164/252215 (99.98%)
				url?: string, // 6565/252215 (2.60%)
				version?: "1.0", // 252164/252215 (99.98%)
				width?: number, // 252164/252215 (99.98%)
			}, // 252215/382655 (65.91%)
			reddit_video?: {
				bitrate_kbps?: number, // 130100/130437 (99.74%)
				dash_url?: string, // 130426/130437 (99.99%)
				duration?: number, // 130426/130437 (99.99%)
				fallback_url?: string, // 130426/130437 (99.99%)
				has_audio?: boolean, // 8/130437 (0.01%)
				height: number|null,
				hls_url?: string, // 130426/130437 (99.99%)
				is_gif?: boolean, // 130426/130437 (99.99%)
				scrubber_media_url?: string, // 130426/130437 (99.99%)
				transcoding_message?: string, // 11/130437 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 130437/382655 (34.09%)
			type?: string, // 252218/382655 (65.91%)
		},
		media_embed: {
			content?: string|null, // 252218/1273149 (19.81%)
			height?: number, // 252218/1273149 (19.81%)
			scrolling?: boolean, // 252218/1273149 (19.81%)
			width?: number, // 252218/1273149 (19.81%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 885/593361 (0.15%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 592857/593361 (99.92%)
				hlsUrl?: string, // 885/593361 (0.15%)
				id?: string, // 592857/593361 (99.92%)
				isGif?: boolean, // 885/593361 (0.15%)
				m?: "image/jpg"|"image/png"|"image/gif", // 591972/593361 (99.77%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 350503/593361 (59.07%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 591972/593361 (99.77%)
				s?: {
					gif?: string, // 8751/591972 (1.48%)
					mp4?: string, // 8751/591972 (1.48%)
					u?: string, // 583221/591972 (98.52%)
					x: number,
					y: number,
				}, // 591972/593361 (99.77%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 885/593361 (0.15%)
				y?: number, // 885/593361 (0.15%)
			},
		}|null, // 130696/1273149 (10.27%)
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
				total_stake_amount?: number, // 17/7504 (0.23%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"22558457"|"22845823"|"22715442",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2305/1273149 (0.18%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 857106/1273149 (67.32%)
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
					}, // 85032/857106 (9.92%)
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
					}, // 85032/857106 (9.92%)
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
					}, // 536998/857106 (62.65%)
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
					}, // 539253/857106 (62.92%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 282101/282128 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 282128/857106 (32.92%)
		}, // 857106/1273149 (67.32%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"content_takedown"|"author"|"copyright_takedown"|"automod_filtered"|"community_ops",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 3/382655 (0.00%)
			oembed?: {
				author_name?: string, // 56536/252215 (22.42%)
				author_url?: string, // 54702/252215 (21.69%)
				cache_age?: number, // 4835/252215 (1.92%)
				description?: string, // 5190/252215 (2.06%)
				height?: number|null, // 252164/252215 (99.98%)
				html?: string, // 252164/252215 (99.98%)
				mean_alpha?: number, // 19/252215 (0.01%)
				provider_name?: string, // 252164/252215 (99.98%)
				provider_url?: string, // 252164/252215 (99.98%)
				thumbnail_height?: number, // 229479/252215 (90.99%)
				thumbnail_url?: string, // 247049/252215 (97.95%)
				thumbnail_width?: number, // 229479/252215 (90.99%)
				title?: string, // 247315/252215 (98.06%)
				type?: "video"|"rich", // 252164/252215 (99.98%)
				url?: string, // 6565/252215 (2.60%)
				version?: "1.0", // 252164/252215 (99.98%)
				width?: number, // 252164/252215 (99.98%)
			}, // 252215/382655 (65.91%)
			reddit_video?: {
				bitrate_kbps?: number, // 130100/130437 (99.74%)
				dash_url?: string, // 130426/130437 (99.99%)
				duration?: number, // 130426/130437 (99.99%)
				fallback_url?: string, // 130426/130437 (99.99%)
				has_audio?: boolean, // 8/130437 (0.01%)
				height: number|null,
				hls_url?: string, // 130426/130437 (99.99%)
				is_gif?: boolean, // 130426/130437 (99.99%)
				scrubber_media_url?: string, // 130426/130437 (99.99%)
				transcoding_message?: string, // 11/130437 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 130437/382655 (34.09%)
			type?: string, // 252218/382655 (65.91%)
		},
		secure_media_embed: {
			content?: string|null, // 252218/1273149 (19.81%)
			height?: number, // 252218/1273149 (19.81%)
			media_domain_url?: string, // 252218/1273149 (19.81%)
			scrolling?: boolean, // 252218/1273149 (19.81%)
			width?: number, // 252218/1273149 (19.81%)
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
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:lottie:cutie"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:santasnoo"|"econ:render:lottie:champagne")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1135068/1273149 (89.15%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1512066/35483768 (4.26%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 139133/35483768 (0.39%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 139133/35483768 (0.39%)
	embed_url?: null|string, // 139133/35483768 (0.39%)
	event_end?: number, // 150/35483768 (0.00%)
	event_is_live?: boolean, // 150/35483768 (0.00%)
	event_start?: number, // 150/35483768 (0.00%)
	events?: [], // 139133/35483768 (0.39%)
	eventsOnRender?: [], // 139133/35483768 (0.39%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Order Now"|"View More"|"Download"|"Watch Now"|"Apply Now"|"Contact Us"|"Install"|"Play Now"|"See Menu"|"Pre-order Now"|"Get Showtimes"|"Get a Quote", // 17217/5729796 (0.30%)
			caption?: string, // 501827/5729796 (8.76%)
			display_url?: string, // 18739/5729796 (0.33%)
			id: number,
			media_id: string,
			outbound_url?: string, // 134763/5729796 (2.35%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 515/5729796 (0.01%)
		}[],
	}|null, // 2321218/35483768 (6.54%)
	gilded: number,
	gildings: {
		gid_1?: number, // 6576/35483768 (0.02%)
		gid_2?: number, // 20005/35483768 (0.06%)
		gid_3?: number, // 3594/35483768 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 139133/35483768 (0.39%)
	id: string,
	impression_id?: null, // 139133/35483768 (0.39%)
	impression_id_str?: null, // 139133/35483768 (0.39%)
	is_blank?: boolean, // 139133/35483768 (0.39%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2321218/35483768 (6.54%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 139133/35483768 (0.39%)
	is_video: boolean,
	likes: null|boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 582192/6038871 (9.64%)
		e: "text"|"emoji",
		t?: string, // 5456679/6038871 (90.36%)
		u?: string, // 582192/6038871 (9.64%)
	}[],
	link_flair_template_id?: string, // 11373300/35483768 (32.05%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1ayf679q12v3t"|"1azmazo11zo1p"|"1b0997cnusn2s"|"1b173jqbtfant"|"1b2dbk9vlae6p"|"1b2lpv5kjnoll", // 40/3591633 (0.00%)
		oembed?: {
			author_name?: string, // 836622/2628777 (31.83%)
			author_url?: string, // 827836/2628777 (31.49%)
			cache_age?: number, // 102544/2628777 (3.90%)
			description?: string, // 190320/2628777 (7.24%)
			height?: number|null, // 2626294/2628777 (99.91%)
			html?: string, // 2626294/2628777 (99.91%)
			mean_alpha?: number, // 2115/2628777 (0.08%)
			provider_name?: string, // 2626294/2628777 (99.91%)
			provider_url?: string, // 2626294/2628777 (99.91%)
			thumbnail_height?: number, // 2425519/2628777 (92.27%)
			thumbnail_url?: string, // 2524063/2628777 (96.02%)
			thumbnail_width?: number, // 2425519/2628777 (92.27%)
			title?: string, // 2523659/2628777 (96.00%)
			type?: "video"|"rich", // 2626294/2628777 (99.91%)
			url?: string, // 185228/2628777 (7.05%)
			version?: "1.0", // 2626294/2628777 (99.91%)
			width?: number, // 2626294/2628777 (99.91%)
		}, // 2628777/3591633 (73.19%)
		reddit_video?: {
			bitrate_kbps?: number, // 959633/962816 (99.67%)
			dash_url?: string, // 959633/962816 (99.67%)
			duration?: number, // 959633/962816 (99.67%)
			fallback_url?: string, // 959633/962816 (99.67%)
			height: number|null,
			hls_url?: string, // 959633/962816 (99.67%)
			is_gif?: boolean, // 959633/962816 (99.67%)
			scrubber_media_url?: string, // 959633/962816 (99.67%)
			transcoding_message?: string, // 3183/962816 (0.33%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 962816/3591633 (26.81%)
		type?: string, // 2628817/3591633 (73.19%)
	},
	media_embed: {
		content?: string|null, // 2628817/35483768 (7.41%)
		height?: number, // 2628817/35483768 (7.41%)
		scrolling?: boolean, // 2628817/35483768 (7.41%)
		width?: number, // 2628817/35483768 (7.41%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 21536/6210450 (0.35%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 6193919/6210450 (99.73%)
			hlsUrl?: string, // 21536/6210450 (0.35%)
			id?: string, // 6193919/6210450 (99.73%)
			isGif?: boolean, // 21536/6210450 (0.35%)
			m?: "image/jpg"|"image/png"|"image/gif", // 6172383/6210450 (99.39%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2013391/6210450 (32.42%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6172383/6210450 (99.39%)
			s?: {
				gif?: string, // 50276/6172383 (0.81%)
				mp4?: string, // 50276/6172383 (0.81%)
				u?: string, // 6122107/6172383 (99.19%)
				x: number,
				y: number,
			}, // 6172383/6210450 (99.39%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 21536/6210450 (0.35%)
			y?: number, // 21536/6210450 (0.35%)
		},
	}|null, // 2749488/35483768 (7.75%)
	media_only: boolean,
	mobile_ad_url?: string, // 139133/35483768 (0.39%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 139133/35483768 (0.39%)
	outbound_link?: {
	}, // 139133/35483768 (0.39%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 652/320770 (0.20%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED"|"CLOSED"|"OPEN"|"CANCELLED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 114215/35483768 (0.32%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 11415447/35483768 (32.17%)
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
				}, // 474960/11415447 (4.16%)
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
				}, // 474960/11415447 (4.16%)
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
				}, // 5382235/11415447 (47.15%)
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
				}, // 5447898/11415447 (47.72%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1080057/1080091 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1080091/11415447 (9.46%)
	}, // 11415447/35483768 (32.17%)
	priority_id?: null, // 139133/35483768 (0.39%)
	product_ids?: [], // 139133/35483768 (0.39%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 139133/35483768 (0.39%)
	promoted?: boolean, // 139133/35483768 (0.39%)
	promoted_by?: null, // 139133/35483768 (0.39%)
	promoted_display_name?: null, // 139133/35483768 (0.39%)
	promoted_url?: null, // 139133/35483768 (0.39%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"author"|"community_ops"|"anti_evil_ops",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "richtext", // 1/35483768 (0.00%)
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1ayf679q12v3t"|"1azmazo11zo1p"|"1b0997cnusn2s"|"1b173jqbtfant"|"1b2dbk9vlae6p"|"1b2lpv5kjnoll", // 40/3591633 (0.00%)
		oembed?: {
			author_name?: string, // 836622/2628777 (31.83%)
			author_url?: string, // 827836/2628777 (31.49%)
			cache_age?: number, // 102544/2628777 (3.90%)
			description?: string, // 190320/2628777 (7.24%)
			height?: number|null, // 2626294/2628777 (99.91%)
			html?: string, // 2626294/2628777 (99.91%)
			mean_alpha?: number, // 2115/2628777 (0.08%)
			provider_name?: string, // 2626294/2628777 (99.91%)
			provider_url?: string, // 2626294/2628777 (99.91%)
			thumbnail_height?: number, // 2425519/2628777 (92.27%)
			thumbnail_url?: string, // 2524063/2628777 (96.02%)
			thumbnail_width?: number, // 2425519/2628777 (92.27%)
			title?: string, // 2523659/2628777 (96.00%)
			type?: "video"|"rich", // 2626294/2628777 (99.91%)
			url?: string, // 185228/2628777 (7.05%)
			version?: "1.0", // 2626294/2628777 (99.91%)
			width?: number, // 2626294/2628777 (99.91%)
		}, // 2628777/3591633 (73.19%)
		reddit_video?: {
			bitrate_kbps?: number, // 959633/962816 (99.67%)
			dash_url?: string, // 959633/962816 (99.67%)
			duration?: number, // 959633/962816 (99.67%)
			fallback_url?: string, // 959633/962816 (99.67%)
			height: number|null,
			hls_url?: string, // 959633/962816 (99.67%)
			is_gif?: boolean, // 959633/962816 (99.67%)
			scrubber_media_url?: string, // 959633/962816 (99.67%)
			transcoding_message?: string, // 3183/962816 (0.33%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 962816/3591633 (26.81%)
		type?: string, // 2628817/3591633 (73.19%)
	},
	secure_media_embed: {
		content?: string|null, // 2628817/35483768 (7.41%)
		height?: number, // 2628817/35483768 (7.41%)
		media_domain_url?: string, // 2628817/35483768 (7.41%)
		scrolling?: boolean, // 2628817/35483768 (7.41%)
		width?: number, // 2628817/35483768 (7.41%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 139133/35483768 (0.39%)
	sk_ad_network_data?: null, // 139133/35483768 (0.39%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 2281/35483768 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"archived"|"private",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 139133/35483768 (0.39%)
	third_party_tracking?: null, // 139133/35483768 (0.39%)
	third_party_tracking_2?: null, // 139133/35483768 (0.39%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 35483462/35483768 (100.00%)
	thumbnail_width?: number|null, // 35483462/35483768 (100.00%)
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
			status: "RESOLVED"|"CLOSED"|"OPEN",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[], // 22/25 (88.00%)
		status: "LIVE"|"CLOSED",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_2"|"theme_8"|"theme_6"|"theme_4"|"theme_5"|"theme_3",
		total_participants: number,
		tournament_id: string,
	}, // 25/35483768 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	unrepliable_reason?: "BLOCK", // 8/35483768 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 21549439/35483768 (60.73%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}