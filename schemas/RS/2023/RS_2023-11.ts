interface RedditPost {
	_meta: {
		is_edited?: boolean, // 934920/38093466 (2.45%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 1909275/38093466 (5.01%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops", // 7672829/38093466 (20.14%)
		retrieved_2nd_on?: number, // 36184191/38093466 (94.99%)
		was_deleted_later?: boolean, // 6949933/38093466 (18.24%)
		was_initially_deleted?: boolean, // 722896/38093466 (1.90%)
	},
	ad_business?: null, // 77123/38093466 (0.20%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "simonracioppa"|"yuzzy21"|"Venom1462",
		author_flair_background_color: "#23adf9"|"#373c3f"|"#dadada",
		author_flair_css_class: null,
		author_flair_richtext: {
			a?: ":invincible3:"|":burgermarttrash:"|":dudeisawit:"|":snoo_dealwithit:", // 8/14 (57.14%)
			e: "emoji"|"text",
			t?: " Simon Racioppa - Showrunner"|" Burger Mart Trash Bag"|" \"Dude, I saw it on Reddit\" ", // 6/14 (42.86%)
			u?: string, // 8/14 (57.14%)
		}[],
		author_flair_template_id: "7a2630e4-93fb-11eb-8b30-0e050e0ab639"|"9db7d72c-9ca9-11eb-a5b8-0eec8141099d"|"704f5c96-9e67-11eb-a49e-0e4a4b57d739",
		author_flair_text: string,
		author_flair_text_color: "light"|"dark",
		author_flair_type: "richtext",
		author_fullname: "t2_bk3qavfr"|"t2_jl2g8cnz4"|"t2_6l4yoijt",
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
		domain: "self.Invincible"|"i.redd.it"|"reddit.com",
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				id: number,
				media_id: "3eow21f4d9yb1"|"3dk76ld4d9yb1",
			}[],
		}, // 2/6 (33.33%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "17n1q04"|"17oow02"|"17ndu18",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 2/6 (33.33%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "#004cff"|"#ddbd37"|"#ff4500",
		link_flair_css_class: "",
		link_flair_richtext: {
			e: "text",
			t: "AMA"|"MEME"|"COMIC SPOILERS",
		}[],
		link_flair_template_id: "2f923568-a469-11eb-900d-0e4177f9f6eb"|"b8b91906-8e57-11eb-8536-0edaffbfcc05"|"97c3333e-119c-11e8-ae47-0ec1d70d99fc",
		link_flair_text: "AMA"|"MEME"|"COMIC SPOILERS",
		link_flair_text_color: "light"|"dark",
		link_flair_type: "richtext",
		locked: boolean,
		media: null,
		media_embed: {
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "3dk76ld4d9yb1"|"3eow21f4d9yb1",
				m: "image/png",
				o: {
					u: string,
					x: number,
					y: number,
				}[],
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
		}, // 2/6 (33.33%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_17n1q04"|"t3_17oow02"|"t3_17ndu18",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image", // 2/6 (33.33%)
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
		}, // 2/6 (33.33%)
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
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation: boolean,
			allowed_media_in_comments: ("animated"|"giphy"|"static"|"expression")[],
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "Invincible",
			display_name_prefixed: "r/Invincible",
			free_form_reports: boolean,
			header_img: string,
			header_size: number[],
			icon_color: "",
			icon_img: "",
			icon_size: null,
			is_chat_post_feature_enabled: boolean,
			key_color: "#0079d3",
			link_flair_enabled: boolean,
			link_flair_position: "left",
			name: "t5_2srew",
			over_18: boolean,
			previous_names: [],
			primary_color: "#014980",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "",
			subreddit_type: "public",
			subscribers: number,
			title: "Invincible and the Invincible Universe",
			url: "/r/Invincible/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "Invincible",
		subreddit_id: "t5_2srew",
		subreddit_name_prefixed: "r/Invincible",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null|"qa",
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
		url_overridden_by_dest?: "https://i.redd.it/hslxppbn5myb1.png"|"https://www.reddit.com/gallery/17ndu18", // 4/6 (66.67%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 127286/38093466 (0.33%)
	ad_supplementary_text_md?: null|string, // 127286/38093466 (0.33%)
	ad_user_targeting?: null, // 77123/38093466 (0.20%)
	adserver_click_url?: null, // 127286/38093466 (0.33%)
	adserver_imp_pixel?: null, // 127286/38093466 (0.33%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 127286/38093466 (0.33%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 95317/38093466 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 742104/2009850 (36.92%)
		e: "text"|"emoji",
		t?: string, // 1267746/2009850 (63.08%)
		u?: string, // 742104/2009850 (36.92%)
	}[], // 37860108/38093466 (99.39%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 37860108/38093466 (99.39%)
	author_fullname?: string, // 37860108/38093466 (99.39%)
	author_id?: string|null, // 127286/38093466 (0.33%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 37860108/38093466 (99.39%)
	author_premium?: boolean, // 37860108/38093466 (99.39%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Download"|"View More"|"Play Now"|"Order Now"|"Install"|"Apply Now"|"Watch Now"|"Contact Us"|"Get Showtimes"|"Pre-order Now"|"Get a Quote"|"See Menu", // 94689/38093466 (0.25%)
	campaign_id?: null, // 127286/38093466 (0.33%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"photography"|"gaming"|"animals"|"food",
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
			key_color: ""|"#7e53c1"|"#ea0027"|"#ff66ac"|"#222222"|"#25b79f",
			mod_permissions: [],
			name: string,
			over_18: boolean,
			primary_color: ""|"#373c3f"|"#014980"|"#7193ff"|"#212121"|"#b8001f"|"#001020"|"#e21a79"|"#cf3603"|"#37321a"|"#0079d3"|"#0dd3bb"|"#349e48"|"#cf9cf5",
			sr: string,
			sr_display_name_prefixed: string,
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads"|"some_ads",
		}, // 40/5581 (0.72%)
		subreddit_id: string,
		title: string,
	}[], // 5581/38093466 (0.01%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1208409/38093466 (3.17%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4530/1208255 (0.37%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 35366/96404 (36.69%)
			e: "text"|"emoji",
			t?: string, // 61038/96404 (63.31%)
			u?: string, // 35366/96404 (36.69%)
		}[], // 1198972/1208255 (99.23%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1198972/1208255 (99.23%)
		author_fullname?: string, // 1198972/1208255 (99.23%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1198972/1208255 (99.23%)
		author_premium?: boolean, // 1198972/1208255 (99.23%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 31/1208255 (0.00%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"photography"|"food",
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
				display_name: "F1DataAnalysis"|"mayhemswarriorsvoices"|"battleofthebets"|"askcroatia"|"CryptoCurrency"|"MadokaYuri"|"CreadorsCatalans"|"NikuNikuNii"|"Medical_Students"|"yorku",
				display_name_prefixed: "r/F1DataAnalysis"|"r/mayhemswarriorsvoices"|"r/battleofthebets"|"r/askcroatia"|"r/CryptoCurrency"|"r/MadokaYuri"|"r/CreadorsCatalans"|"r/NikuNikuNii"|"r/Medical_Students"|"r/yorku",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#ea0027"|"#545452"|"#7e53c1",
				mod_permissions: [],
				name: "t5_5o1r4x"|"t5_9mz6n5"|"t5_8uwia5"|"t5_4m6s1o"|"t5_2wlj3"|"t5_2xu9d"|"t5_7xrqnz"|"t5_5cnfiu"|"t5_3jx16"|"t5_2s8jd",
				over_18: boolean,
				primary_color: "#212121"|""|"#349e48"|"#0079d3"|"#014980"|"#37321a"|"#9c5ea1"|"#cc2030",
				sr: "F1DataAnalysis"|"mayhemswarriorsvoices"|"battleofthebets"|"askcroatia"|"CryptoCurrency"|"MadokaYuri"|"CreadorsCatalans"|"NikuNikuNii"|"Medical_Students"|"yorku",
				sr_display_name_prefixed: "r/F1DataAnalysis"|"r/mayhemswarriorsvoices"|"r/battleofthebets"|"r/askcroatia"|"r/CryptoCurrency"|"r/MadokaYuri"|"r/CreadorsCatalans"|"r/NikuNikuNii"|"r/Medical_Students"|"r/yorku",
				subreddit_type: "public"|"restricted",
				subscribers: number,
				title: "Formula Data Analysis (@FDataAnalysis)"|"mayhemswarriorsvoices"|"battleofthebets"|"AskCroatia"|"Cryptocurrency News & Discussion"|"MadoMagi Yuri Paradise"|"CreadorsCatalans"|"Niku Niku Nii"|"Medical Students"|"York University",
				url: "/r/F1DataAnalysis/"|"/r/mayhemswarriorsvoices/"|"/r/battleofthebets/"|"/r/askcroatia/"|"/r/CryptoCurrency/"|"/r/MadokaYuri/"|"/r/CreadorsCatalans/"|"/r/NikuNikuNii/"|"/r/Medical_Students/"|"/r/yorku/",
				user_can_crosspost: boolean,
				whitelist_status: "all_ads"|"some_ads"|null,
			}, // 13/590 (2.20%)
			subreddit_id: string,
			title: string,
		}[], // 590/1208255 (0.05%)
		content_categories: null|("photography"|"writing"|"drawing_and_painting"|"comics"|"gaming"|"diy_and_crafts"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 1/1208255 (0.00%)
		event_is_live?: boolean, // 1/1208255 (0.00%)
		event_start?: number, // 1/1208255 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 52132/1002034 (5.20%)
				id: number,
				media_id: string,
				outbound_url?: string, // 23799/1002034 (2.38%)
			}[],
		}|null, // 157076/1208255 (13.00%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 157076/1208255 (13.00%)
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
			a?: string, // 31976/187897 (17.02%)
			e: "text"|"emoji",
			t?: string, // 155921/187897 (82.98%)
			u?: string, // 31976/187897 (17.02%)
		}[],
		link_flair_template_id?: string, // 399974/1208255 (33.10%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"1bsso361afr0r", // 6/374757 (0.00%)
			oembed?: {
				author_name?: string, // 28636/276520 (10.36%)
				author_url?: string, // 28272/276520 (10.22%)
				cache_age?: number, // 2155/276520 (0.78%)
				description?: string, // 2258/276520 (0.82%)
				height?: number|null, // 276515/276520 (100.00%)
				html?: string, // 276515/276520 (100.00%)
				mean_alpha?: number, // 25/276520 (0.01%)
				provider_name?: string, // 276515/276520 (100.00%)
				provider_url?: string, // 276515/276520 (100.00%)
				thumbnail_height?: number|null, // 258173/276520 (93.37%)
				thumbnail_url?: string, // 274111/276520 (99.13%)
				thumbnail_width?: number|null, // 258173/276520 (93.37%)
				title?: string, // 274335/276520 (99.21%)
				type?: "video"|"rich", // 276515/276520 (100.00%)
				url?: string, // 2709/276520 (0.98%)
				version?: "1.0", // 276515/276520 (100.00%)
				width?: number, // 276515/276520 (100.00%)
			}, // 276520/374757 (73.79%)
			reddit_video?: {
				bitrate_kbps?: number, // 97954/98231 (99.72%)
				dash_url?: string, // 98228/98231 (100.00%)
				duration?: number, // 98228/98231 (100.00%)
				fallback_url?: string, // 98228/98231 (100.00%)
				has_audio?: boolean, // 95087/98231 (96.80%)
				height: number|null,
				hls_url?: string, // 98228/98231 (100.00%)
				is_gif?: boolean, // 98228/98231 (100.00%)
				scrubber_media_url?: string, // 98228/98231 (100.00%)
				transcoding_message?: string, // 3/98231 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 98231/374757 (26.21%)
			type?: string, // 276526/374757 (73.79%)
		},
		media_embed: {
			content?: string|null, // 276526/1208255 (22.89%)
			height?: number, // 276526/1208255 (22.89%)
			scrolling?: boolean, // 276526/1208255 (22.89%)
			width?: number, // 276526/1208255 (22.89%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1183/1041439 (0.11%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1040934/1041439 (99.95%)
				hlsUrl?: string, // 1183/1041439 (0.11%)
				id?: string, // 1040934/1041439 (99.95%)
				isGif?: boolean, // 1183/1041439 (0.11%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1039751/1041439 (99.84%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 768144/1041439 (73.76%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1039751/1041439 (99.84%)
				s?: {
					gif?: string, // 29585/1039751 (2.85%)
					mp4?: string, // 29585/1039751 (2.85%)
					u?: string, // 1010166/1039751 (97.15%)
					x: number,
					y: number,
				}, // 1039751/1041439 (99.84%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1183/1041439 (0.11%)
				y?: number, // 1183/1041439 (0.11%)
			},
		}|null, // 176466/1208255 (14.61%)
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
				vote_count?: number, // 336/6216 (5.41%)
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
		}|null, // 1707/1208255 (0.14%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery", // 926201/1208255 (76.66%)
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
					}, // 92803/926201 (10.02%)
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
					}, // 92803/926201 (10.02%)
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
					}, // 648558/926201 (70.02%)
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
					}, // 650233/926201 (70.20%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 285983/286040 (99.98%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 286040/926201 (30.88%)
		}, // 926201/1208255 (76.66%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"moderator"|"deleted"|"copyright_takedown"|"content_takedown"|"author"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"1bsso361afr0r", // 6/374757 (0.00%)
			oembed?: {
				author_name?: string, // 28636/276520 (10.36%)
				author_url?: string, // 28272/276520 (10.22%)
				cache_age?: number, // 2155/276520 (0.78%)
				description?: string, // 2258/276520 (0.82%)
				height?: number|null, // 276515/276520 (100.00%)
				html?: string, // 276515/276520 (100.00%)
				mean_alpha?: number, // 25/276520 (0.01%)
				provider_name?: string, // 276515/276520 (100.00%)
				provider_url?: string, // 276515/276520 (100.00%)
				thumbnail_height?: number|null, // 258173/276520 (93.37%)
				thumbnail_url?: string, // 274111/276520 (99.13%)
				thumbnail_width?: number|null, // 258173/276520 (93.37%)
				title?: string, // 274335/276520 (99.21%)
				type?: "video"|"rich", // 276515/276520 (100.00%)
				url?: string, // 2709/276520 (0.98%)
				version?: "1.0", // 276515/276520 (100.00%)
				width?: number, // 276515/276520 (100.00%)
			}, // 276520/374757 (73.79%)
			reddit_video?: {
				bitrate_kbps?: number, // 97954/98231 (99.72%)
				dash_url?: string, // 98228/98231 (100.00%)
				duration?: number, // 98228/98231 (100.00%)
				fallback_url?: string, // 98228/98231 (100.00%)
				has_audio?: boolean, // 95087/98231 (96.80%)
				height: number|null,
				hls_url?: string, // 98228/98231 (100.00%)
				is_gif?: boolean, // 98228/98231 (100.00%)
				scrubber_media_url?: string, // 98228/98231 (100.00%)
				transcoding_message?: string, // 3/98231 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 98231/374757 (26.21%)
			type?: string, // 276526/374757 (73.79%)
		},
		secure_media_embed: {
			content?: string|null, // 276526/1208255 (22.89%)
			height?: number, // 276526/1208255 (22.89%)
			media_domain_url?: string, // 276526/1208255 (22.89%)
			scrolling?: boolean, // 276526/1208255 (22.89%)
			width?: number, // 276526/1208255 (22.89%)
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
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"live"|"controversial"|"random",
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
		url_overridden_by_dest?: string, // 1068215/1208255 (88.41%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1208409/38093466 (3.17%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 127286/38093466 (0.33%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 127286/38093466 (0.33%)
	embed_url?: null|string, // 127286/38093466 (0.33%)
	event_end?: number, // 148/38093466 (0.00%)
	event_is_live?: boolean, // 148/38093466 (0.00%)
	event_start?: number, // 148/38093466 (0.00%)
	events?: [], // 127286/38093466 (0.33%)
	eventsOnRender?: [], // 127286/38093466 (0.33%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Download"|"View More"|"Order Now"|"Play Now"|"Install"|"Contact Us"|"Watch Now"|"Apply Now"|"Pre-order Now"|"Get a Quote"|"Get Showtimes"|"See Menu", // 48791/11099871 (0.44%)
			caption?: string, // 349924/11099871 (3.15%)
			display_url?: string, // 51459/11099871 (0.46%)
			id: number,
			media_id: string,
			outbound_url?: string, // 176007/11099871 (1.59%)
			product?: {
				description: string,
				price?: string, // 26561/26671 (99.59%)
				title: string,
			}, // 26671/11099871 (0.24%)
		}[],
	}|null, // 3071675/38093466 (8.06%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 127286/38093466 (0.33%)
	id: string,
	impression_id?: null, // 127286/38093466 (0.33%)
	impression_id_str?: null, // 127286/38093466 (0.33%)
	is_blank?: boolean, // 127286/38093466 (0.33%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3071675/38093466 (8.06%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 127286/38093466 (0.33%)
	is_video: boolean,
	likes: null|boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 780757/6710037 (11.64%)
		e: "text"|"emoji",
		t?: string, // 5929280/6710037 (88.36%)
		u?: string, // 780757/6710037 (11.64%)
	}[],
	link_flair_template_id?: string, // 13039307/38093466 (34.23%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1bsso361afr0r"|"1c2g8moih01pm"|"1bxpwyzbh7qa4"|"1by3vhy3t6bxg"|"1bybfamrbrugg"|"1byww82vajepn"|"1byyi7444egjw"|"1bz5poadj4l7j"|"1bzexiuztn9az"|"1bzojluvz47np"|"1c2gghtne7xjd"|"1c2gwwxg5hsi5"|"1c33ro22gx2na", // 63/3464743 (0.00%)
		oembed?: {
			author_name?: string, // 720895/2822228 (25.54%)
			author_url?: string, // 719106/2822228 (25.48%)
			cache_age?: number, // 41510/2822228 (1.47%)
			description?: string, // 134503/2822228 (4.77%)
			height?: number|null, // 2821374/2822228 (99.97%)
			html?: string, // 2821374/2822228 (99.97%)
			mean_alpha?: number, // 1767/2822228 (0.06%)
			provider_name?: string, // 2821374/2822228 (99.97%)
			provider_url?: string, // 2821374/2822228 (99.97%)
			thumbnail_height?: number, // 2699244/2822228 (95.64%)
			thumbnail_url?: string, // 2780093/2822228 (98.51%)
			thumbnail_width?: number, // 2699244/2822228 (95.64%)
			title?: string, // 2779094/2822228 (98.47%)
			type?: "video"|"rich", // 2821374/2822228 (99.97%)
			url?: string, // 79404/2822228 (2.81%)
			version?: "1.0", // 2821374/2822228 (99.97%)
			width?: number, // 2821374/2822228 (99.97%)
		}, // 2822228/3464743 (81.46%)
		reddit_video?: {
			bitrate_kbps?: number, // 639749/642452 (99.58%)
			dash_url?: string, // 639751/642452 (99.58%)
			duration?: number, // 639751/642452 (99.58%)
			fallback_url?: string, // 639751/642452 (99.58%)
			has_audio?: boolean, // 637702/642452 (99.26%)
			height: number|null,
			hls_url?: string, // 639751/642452 (99.58%)
			is_gif?: boolean, // 639751/642452 (99.58%)
			scrubber_media_url?: string, // 639751/642452 (99.58%)
			transcoding_message?: string, // 2701/642452 (0.42%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 642452/3464743 (18.54%)
		type?: string, // 2822291/3464743 (81.46%)
	},
	media_embed: {
		content?: string|null, // 2822291/38093466 (7.41%)
		height?: number, // 2822291/38093466 (7.41%)
		scrolling?: boolean, // 2822291/38093466 (7.41%)
		width?: number, // 2822291/38093466 (7.41%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 15420/11580794 (0.13%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 11531735/11580794 (99.58%)
			hlsUrl?: string, // 15420/11580794 (0.13%)
			id?: string, // 11531735/11580794 (99.58%)
			isGif?: boolean, // 15420/11580794 (0.13%)
			m?: "image/jpg"|"image/png"|"image/gif", // 11516315/11580794 (99.44%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 5398062/11580794 (46.61%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 11516315/11580794 (99.44%)
			s?: {
				gif?: string, // 134613/11516315 (1.17%)
				mp4?: string, // 134613/11516315 (1.17%)
				u?: string, // 11381702/11516315 (98.83%)
				x: number,
				y: number,
			}, // 11516315/11580794 (99.44%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 15420/11580794 (0.13%)
			y?: number, // 15420/11580794 (0.13%)
		},
	}|null, // 3445213/38093466 (9.04%)
	media_only: boolean,
	mobile_ad_url?: string, // 127286/38093466 (0.33%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 127286/38093466 (0.33%)
	outbound_link?: {
	}, // 127286/38093466 (0.33%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 19/344667 (0.01%)
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
	}|null, // 107054/38093466 (0.28%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"gallery"|"video", // 20390886/38093466 (53.53%)
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
				}, // 1279938/20390886 (6.28%)
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
				}, // 1279938/20390886 (6.28%)
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
				}, // 11381074/20390886 (55.81%)
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
				}, // 11454246/20390886 (56.17%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1984301/1984359 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1984359/20390886 (9.73%)
	}, // 20390886/38093466 (53.53%)
	priority_id?: null, // 127286/38093466 (0.33%)
	product_ids?: [], // 127286/38093466 (0.33%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 127286/38093466 (0.33%)
	promoted?: boolean, // 127286/38093466 (0.33%)
	promoted_by?: null, // 127286/38093466 (0.33%)
	promoted_display_name?: null, // 127286/38093466 (0.33%)
	promoted_url?: null, // 127286/38093466 (0.33%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown", // 1/38093466 (0.00%)
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1bsso361afr0r"|"1c2g8moih01pm"|"1bxpwyzbh7qa4"|"1by3vhy3t6bxg"|"1bybfamrbrugg"|"1byww82vajepn"|"1byyi7444egjw"|"1bz5poadj4l7j"|"1bzexiuztn9az"|"1bzojluvz47np"|"1c2gghtne7xjd"|"1c2gwwxg5hsi5"|"1c33ro22gx2na", // 63/3464743 (0.00%)
		oembed?: {
			author_name?: string, // 720895/2822228 (25.54%)
			author_url?: string, // 719106/2822228 (25.48%)
			cache_age?: number, // 41510/2822228 (1.47%)
			description?: string, // 134503/2822228 (4.77%)
			height?: number|null, // 2821374/2822228 (99.97%)
			html?: string, // 2821374/2822228 (99.97%)
			mean_alpha?: number, // 1767/2822228 (0.06%)
			provider_name?: string, // 2821374/2822228 (99.97%)
			provider_url?: string, // 2821374/2822228 (99.97%)
			thumbnail_height?: number, // 2699244/2822228 (95.64%)
			thumbnail_url?: string, // 2780093/2822228 (98.51%)
			thumbnail_width?: number, // 2699244/2822228 (95.64%)
			title?: string, // 2779094/2822228 (98.47%)
			type?: "video"|"rich", // 2821374/2822228 (99.97%)
			url?: string, // 79404/2822228 (2.81%)
			version?: "1.0", // 2821374/2822228 (99.97%)
			width?: number, // 2821374/2822228 (99.97%)
		}, // 2822228/3464743 (81.46%)
		reddit_video?: {
			bitrate_kbps?: number, // 639749/642452 (99.58%)
			dash_url?: string, // 639751/642452 (99.58%)
			duration?: number, // 639751/642452 (99.58%)
			fallback_url?: string, // 639751/642452 (99.58%)
			has_audio?: boolean, // 637702/642452 (99.26%)
			height: number|null,
			hls_url?: string, // 639751/642452 (99.58%)
			is_gif?: boolean, // 639751/642452 (99.58%)
			scrubber_media_url?: string, // 639751/642452 (99.58%)
			transcoding_message?: string, // 2701/642452 (0.42%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 642452/3464743 (18.54%)
		type?: string, // 2822291/3464743 (81.46%)
	},
	secure_media_embed: {
		content?: string|null, // 2822291/38093466 (7.41%)
		height?: number, // 2822291/38093466 (7.41%)
		media_domain_url?: string, // 2822291/38093466 (7.41%)
		scrolling?: boolean, // 2822291/38093466 (7.41%)
		width?: number, // 2822291/38093466 (7.41%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 127286/38093466 (0.33%)
	sk_ad_network_data?: null, // 127286/38093466 (0.33%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 3836/38093466 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 127286/38093466 (0.33%)
	third_party_tracking?: null, // 127286/38093466 (0.33%)
	third_party_tracking_2?: null, // 127286/38093466 (0.33%)
	thumbnail: string,
	thumbnail_height?: number|null, // 38092928/38093466 (100.00%)
	thumbnail_width?: number|null, // 38092928/38093466 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23257704/38093466 (61.05%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	wls: null|number,
}