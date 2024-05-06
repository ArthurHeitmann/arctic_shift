interface RedditPost {
	_meta: {
		is_edited?: boolean, // 32509/41914348 (0.08%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 40650484/41914348 (96.98%)
		removal_type?: "deleted"|"reddit"|"moderator"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"author", // 315638/41914348 (0.75%)
		retrieved_2nd_on?: number, // 1263864/41914348 (3.02%)
		was_deleted_later?: boolean, // 291091/41914348 (0.69%)
		was_initially_deleted?: boolean, // 24547/41914348 (0.06%)
	},
	ad_business?: null, // 130238/41914348 (0.31%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "indig0sixalpha"|"tr3sleches"|"millerhighlife"|"galaxy_rae"|"MarvelsGrantMan136",
		author_flair_background_color: null|"#ff4500"|"",
		author_flair_css_class: null|"staff",
		author_flair_richtext: {
			e: "text",
			t: "Employee"|"r/Movies contributor",
		}[],
		author_flair_template_id: null|"cfbf8436-fc09-11ea-831e-0e3ffcf5271b",
		author_flair_text: null|"Employee"|"r/Movies contributor",
		author_flair_text_color: null|"light"|"dark",
		author_flair_type: "text"|"richtext",
		author_fullname: "t2_ht9gq"|"t2_13oc81"|"t2_3jdkz"|"t2_j9k21"|"t2_5adwlxvn",
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
		domain: "reddit.com"|"i.redd.it"|"self.Ulta"|"youtube.com",
		downs: number,
		edited: boolean,
		gallery_data?: {
			items: {
				caption?: string, // 6/21 (28.57%)
				id: number,
				media_id: "hoo0fdvjnslc1"|"8dlqmlpknslc1"|"a7rdcig4qnmc1"|"tls53ig4qnmc1"|"gkzbrig4qnmc1"|"gpu8mig4qnmc1"|"d9c29ig4qnmc1",
			}[],
		}, // 6/15 (40.00%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "1b8b6hr"|"1b46sa1"|"1b7sryd"|"18np0kv"|"19fb9zq"|"19ej1fh",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 6/15 (40.00%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "#ccac2b"|""|null,
		link_flair_css_class: ""|"media"|"trailer"|"poster",
		link_flair_richtext: {
			e: "text",
			t: "Discussion"|"Customer"|"Media"|"Trailer"|"Poster",
		}[],
		link_flair_template_id: "b7f4003e-ec64-11ea-9e3d-0eccd226b929"|"abbab9b6-ec64-11ea-88e0-0ef06dc2c713"|"28272772-381e-11e2-a4e1-12313d168e98"|"f247769a-7baf-11e2-800d-12313d18803b"|"046c0942-c9ae-11e3-8e8b-12313d056e4a",
		link_flair_text: "Discussion"|"Customer"|"Media"|"Trailer"|"Poster",
		link_flair_text_color: "dark",
		link_flair_type: "richtext",
		locked: boolean,
		media: null|{
			oembed: {
				author_name: "Prime Video",
				author_url: "https://www.youtube.com/@PrimeVideo",
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
			content?: string, // 2/15 (13.33%)
			height?: number, // 2/15 (13.33%)
			scrolling?: boolean, // 2/15 (13.33%)
			width?: number, // 2/15 (13.33%)
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "8dlqmlpknslc1"|"hoo0fdvjnslc1"|"a7rdcig4qnmc1"|"d9c29ig4qnmc1"|"gkzbrig4qnmc1"|"gpu8mig4qnmc1"|"tls53ig4qnmc1",
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
		}, // 6/15 (40.00%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_1b8b6hr"|"t3_1b46sa1"|"t3_1b7sryd"|"t3_18np0kv"|"t3_19fb9zq"|"t3_19ej1fh",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"rich:video", // 6/15 (40.00%)
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
		}, // 6/15 (40.00%)
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
				author_name: "Prime Video",
				author_url: "https://www.youtube.com/@PrimeVideo",
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
			content?: string, // 2/15 (13.33%)
			height?: number, // 2/15 (13.33%)
			media_domain_url?: string, // 2/15 (13.33%)
			scrolling?: boolean, // 2/15 (13.33%)
			width?: number, // 2/15 (13.33%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allowed_media_in_comments: ("giphy"|"static"|"animated"|"expression")[],
			banner_img: "",
			banner_size: null,
			community_icon: null|string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "Ulta"|"movies",
			display_name_prefixed: "r/Ulta"|"r/movies",
			free_form_reports: boolean,
			header_img: string,
			header_size: number[],
			icon_color: "",
			icon_img: "",
			icon_size: null,
			key_color: "#ff8717"|"",
			link_flair_enabled: boolean,
			link_flair_position: "left",
			name: "t5_30vvl"|"t5_2qh3s",
			over_18: boolean,
			previous_names: [],
			primary_color: ""|"#ffb000",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit link",
			submit_text_label: ""|"Submit text",
			subreddit_type: "public",
			subscribers: number,
			title: "Unofficial subreddit for Ulta Beauty"|"Movie News and Discussion",
			url: "/r/Ulta/"|"/r/movies/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "Ulta"|"movies",
		subreddit_id: "t5_30vvl"|"t5_2qh3s",
		subreddit_name_prefixed: "r/Ulta"|"r/movies",
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
		url_overridden_by_dest?: string, // 12/15 (80.00%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 130238/41914348 (0.31%)
	ad_supplementary_text_md?: null|string, // 130238/41914348 (0.31%)
	ad_user_targeting?: null, // 130238/41914348 (0.31%)
	adserver_click_url?: null, // 130238/41914348 (0.31%)
	adserver_imp_pixel?: null, // 130238/41914348 (0.31%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 130238/41914348 (0.31%)
	approved?: boolean, // 1/41914348 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 96726/41914348 (0.23%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 831381/2246752 (37.00%)
		e: "text"|"emoji",
		t?: string, // 1415371/2246752 (63.00%)
		u?: string, // 831381/2246752 (37.00%)
	}[], // 41524132/41914348 (99.07%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 41524132/41914348 (99.07%)
	author_fullname?: string, // 41524132/41914348 (99.07%)
	author_id?: string|null, // 130238/41914348 (0.31%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 41524132/41914348 (99.07%)
	author_premium?: boolean, // 41524132/41914348 (99.07%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Apply Now"|"Play Now"|"Order Now"|"Contact Us"|"Watch Now"|"Get a Quote"|"Get Showtimes"|"Pre-order Now"|"See Menu", // 106575/41914348 (0.25%)
	campaign_id?: null, // 130238/41914348 (0.31%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"photography"|"gaming"|"funny",
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
			key_color: ""|"#0dd3bb"|"#ffb000"|"#46d160"|"#0079d3"|"#25b79f",
			mod_permissions: [],
			name: string,
			over_18: boolean,
			primary_color: ""|"#0a2255"|"#373c3f"|"#fd8ba8"|"#0dd3bb"|"#fb5050"|"#ffffff"|"#19e6b9"|"#bbbdbf"|"#ffb000"|"#007373"|"#7a28d7"|"#ff002b"|"#1b1c1d"|"#5876ee",
			sr: string,
			sr_display_name_prefixed: string,
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads",
		}, // 28/5245 (0.53%)
		subreddit_id: string,
		title: string,
	}[], // 5245/41914348 (0.01%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1413843/41914348 (3.37%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4076/1410343 (0.29%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 40072/108706 (36.86%)
			e: "text"|"emoji",
			t?: string, // 68634/108706 (63.14%)
			u?: string, // 40072/108706 (36.86%)
		}[], // 1395675/1410343 (98.96%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1395675/1410343 (98.96%)
		author_fullname?: string, // 1395675/1410343 (98.96%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1395675/1410343 (98.96%)
		author_premium?: boolean, // 1395675/1410343 (98.96%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 57/1410343 (0.00%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"food"|"memes"|"entertainment",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string,
			display_layout: null|"TIMELINE"|"GALLERY",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			sr_detail?: {
				banner_img: string,
				banner_size: null|number[],
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: "TheOriginOfTheSongs"|"The_Guardian_Temple"|"CGLightsC"|"ClassicAJPW",
				display_name_prefixed: "r/TheOriginOfTheSongs"|"r/The_Guardian_Temple"|"r/CGLightsC"|"r/ClassicAJPW",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#24a0ed",
				mod_permissions: [],
				name: "t5_aukdxj"|"t5_xg9hh"|"t5_9broja"|"t5_ahxm0g",
				over_18: boolean,
				primary_color: "",
				sr: "TheOriginOfTheSongs"|"The_Guardian_Temple"|"CGLightsC"|"ClassicAJPW",
				sr_display_name_prefixed: "r/TheOriginOfTheSongs"|"r/The_Guardian_Temple"|"r/CGLightsC"|"r/ClassicAJPW",
				subreddit_type: "public",
				subscribers: number,
				title: "TheOriginOfTheSongs"|"The_Guardian_Temple"|"CGLightsC"|"ClassicAJPW",
				url: "/r/TheOriginOfTheSongs/"|"/r/The_Guardian_Temple/"|"/r/CGLightsC/"|"/r/ClassicAJPW/",
				user_can_crosspost: boolean,
				whitelist_status: null|"some_ads"|"all_ads",
			}, // 4/480 (0.83%)
			subreddit_id: string,
			title: string,
		}[], // 480/1410343 (0.03%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 44029/1233918 (3.57%)
				id: number,
				media_id: string,
				outbound_url?: string, // 25719/1233918 (2.08%)
			}[],
		}|null, // 200717/1410343 (14.23%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 200717/1410343 (14.23%)
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
			a?: string, // 37351/231482 (16.14%)
			e: "text"|"emoji",
			t?: string, // 194131/231482 (83.86%)
			u?: string, // 37351/231482 (16.14%)
		}[],
		link_flair_template_id?: string, // 487090/1410343 (34.54%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 1/457691 (0.00%)
			oembed?: {
				author_name?: string, // 25666/341874 (7.51%)
				author_url?: string, // 25518/341874 (7.46%)
				cache_age?: number, // 3324/341874 (0.97%)
				description?: string, // 2135/341874 (0.62%)
				height?: number|null, // 341726/341874 (99.96%)
				html?: string, // 341726/341874 (99.96%)
				mean_alpha?: number, // 59/341874 (0.02%)
				provider_name?: string, // 341726/341874 (99.96%)
				provider_url?: string, // 341726/341874 (99.96%)
				thumbnail_height?: number|null, // 318460/341874 (93.15%)
				thumbnail_url?: string, // 338138/341874 (98.91%)
				thumbnail_width?: number|null, // 318460/341874 (93.15%)
				title?: string, // 338391/341874 (98.98%)
				type?: "video"|"rich", // 341726/341874 (99.96%)
				url?: string, // 3937/341874 (1.15%)
				version?: "1.0", // 341726/341874 (99.96%)
				width?: number, // 341726/341874 (99.96%)
			}, // 341874/457691 (74.70%)
			reddit_video?: {
				bitrate_kbps?: number, // 115522/115816 (99.75%)
				dash_url?: string, // 115803/115816 (99.99%)
				duration?: number, // 115803/115816 (99.99%)
				fallback_url?: string, // 115803/115816 (99.99%)
				has_audio?: boolean, // 112692/115816 (97.30%)
				height: number|null,
				hls_url?: string, // 115803/115816 (99.99%)
				is_gif?: boolean, // 115803/115816 (99.99%)
				scrubber_media_url?: string, // 115803/115816 (99.99%)
				transcoding_message?: string, // 13/115816 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 115816/457691 (25.30%)
			type?: string, // 341875/457691 (74.70%)
		},
		media_embed: {
			content?: string|null, // 341875/1410343 (24.24%)
			height?: number, // 341875/1410343 (24.24%)
			scrolling?: boolean, // 341875/1410343 (24.24%)
			width?: number, // 341875/1410343 (24.24%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1499/1273837 (0.12%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1273378/1273837 (99.96%)
				hlsUrl?: string, // 1499/1273837 (0.12%)
				id?: string, // 1273378/1273837 (99.96%)
				isGif?: boolean, // 1499/1273837 (0.12%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1271879/1273837 (99.85%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 908876/1273837 (71.35%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1271879/1273837 (99.85%)
				s?: {
					gif?: string, // 44761/1271879 (3.52%)
					mp4?: string, // 44761/1271879 (3.52%)
					u?: string, // 1227118/1271879 (96.48%)
					x: number,
					y: number,
				}, // 1271879/1273837 (99.85%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1499/1273837 (0.12%)
				y?: number, // 1499/1273837 (0.12%)
			},
		}|null, // 216767/1410343 (15.37%)
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
				vote_count?: number, // 205/6604 (3.10%)
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
		}|null, // 1796/1410343 (0.13%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video", // 1074641/1410343 (76.20%)
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
					}, // 81788/1074641 (7.61%)
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
					}, // 81788/1074641 (7.61%)
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
					}, // 725296/1074641 (67.49%)
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
					}, // 727773/1074641 (67.72%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 372339/372380 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 372380/1074641 (34.65%)
		}, // 1074641/1410343 (76.20%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"deleted"|"reddit"|"author"|"automod_filtered"|"copyright_takedown"|"content_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 1/457691 (0.00%)
			oembed?: {
				author_name?: string, // 25666/341874 (7.51%)
				author_url?: string, // 25518/341874 (7.46%)
				cache_age?: number, // 3324/341874 (0.97%)
				description?: string, // 2135/341874 (0.62%)
				height?: number|null, // 341726/341874 (99.96%)
				html?: string, // 341726/341874 (99.96%)
				mean_alpha?: number, // 59/341874 (0.02%)
				provider_name?: string, // 341726/341874 (99.96%)
				provider_url?: string, // 341726/341874 (99.96%)
				thumbnail_height?: number|null, // 318460/341874 (93.15%)
				thumbnail_url?: string, // 338138/341874 (98.91%)
				thumbnail_width?: number|null, // 318460/341874 (93.15%)
				title?: string, // 338391/341874 (98.98%)
				type?: "video"|"rich", // 341726/341874 (99.96%)
				url?: string, // 3937/341874 (1.15%)
				version?: "1.0", // 341726/341874 (99.96%)
				width?: number, // 341726/341874 (99.96%)
			}, // 341874/457691 (74.70%)
			reddit_video?: {
				bitrate_kbps?: number, // 115522/115816 (99.75%)
				dash_url?: string, // 115803/115816 (99.99%)
				duration?: number, // 115803/115816 (99.99%)
				fallback_url?: string, // 115803/115816 (99.99%)
				has_audio?: boolean, // 112692/115816 (97.30%)
				height: number|null,
				hls_url?: string, // 115803/115816 (99.99%)
				is_gif?: boolean, // 115803/115816 (99.99%)
				scrubber_media_url?: string, // 115803/115816 (99.99%)
				transcoding_message?: string, // 13/115816 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 115816/457691 (25.30%)
			type?: string, // 341875/457691 (74.70%)
		},
		secure_media_embed: {
			content?: string|null, // 341875/1410343 (24.24%)
			height?: number, // 341875/1410343 (24.24%)
			media_domain_url?: string, // 341875/1410343 (24.24%)
			scrolling?: boolean, // 341875/1410343 (24.24%)
			width?: number, // 341875/1410343 (24.24%)
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
		url_overridden_by_dest?: string, // 1260494/1410343 (89.37%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1413843/41914348 (3.37%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 130238/41914348 (0.31%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 130238/41914348 (0.31%)
	embed_url?: null|string, // 130238/41914348 (0.31%)
	events?: [], // 130238/41914348 (0.31%)
	eventsOnRender?: [], // 130238/41914348 (0.31%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Order Now"|"Install"|"Apply Now"|"Contact Us"|"Play Now"|"Watch Now"|"See Menu"|"Get a Quote"|"Get Showtimes"|"Pre-order Now", // 84398/13992763 (0.60%)
			caption?: string, // 353055/13992763 (2.52%)
			display_url?: string, // 88650/13992763 (0.63%)
			id: number,
			media_id: string,
			outbound_url?: string, // 176247/13992763 (1.26%)
			product?: {
				description: string,
				price?: string, // 36514/38380 (95.14%)
				title: string,
			}, // 38380/13992763 (0.27%)
		}[],
	}|null, // 3763035/41914348 (8.98%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 130238/41914348 (0.31%)
	id: string,
	ignore_reports?: boolean, // 1/41914348 (0.00%)
	impression_id?: null, // 130238/41914348 (0.31%)
	impression_id_str?: null, // 130238/41914348 (0.31%)
	is_blank?: boolean, // 130238/41914348 (0.31%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3763035/41914348 (8.98%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 130238/41914348 (0.31%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 903662/8182725 (11.04%)
		e: "text"|"emoji",
		t?: string, // 7279063/8182725 (88.96%)
		u?: string, // 903662/8182725 (11.04%)
	}[],
	link_flair_template_id?: string, // 15749961/41914348 (37.58%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 403/3164536 (0.01%)
		oembed?: {
			author_name?: string, // 738098/2432411 (30.34%)
			author_url?: string, // 736676/2432411 (30.29%)
			cache_age?: number, // 40920/2432411 (1.68%)
			description?: string, // 81620/2432411 (3.36%)
			height?: number|null, // 2431038/2432411 (99.94%)
			html?: string, // 2431038/2432411 (99.94%)
			mean_alpha?: number, // 2686/2432411 (0.11%)
			provider_name?: string, // 2431038/2432411 (99.94%)
			provider_url?: string, // 2431038/2432411 (99.94%)
			thumbnail_height?: number|null, // 2324458/2432411 (95.56%)
			thumbnail_url?: string, // 2390361/2432411 (98.27%)
			thumbnail_width?: number|null, // 2324458/2432411 (95.56%)
			title?: string, // 2390218/2432411 (98.27%)
			type?: "video"|"rich", // 2431038/2432411 (99.94%)
			url?: string, // 66890/2432411 (2.75%)
			version?: "1.0", // 2431038/2432411 (99.94%)
			width?: number, // 2431038/2432411 (99.94%)
		}, // 2432411/3164536 (76.86%)
		reddit_video?: {
			bitrate_kbps?: number, // 728475/731722 (99.56%)
			dash_url?: string, // 728475/731722 (99.56%)
			duration?: number, // 728475/731722 (99.56%)
			fallback_url?: string, // 728475/731722 (99.56%)
			has_audio?: boolean, // 727015/731722 (99.36%)
			height?: number|null, // 731583/731722 (99.98%)
			hls_url?: string, // 728475/731722 (99.56%)
			is_gif?: boolean, // 728475/731722 (99.56%)
			scrubber_media_url?: string, // 728475/731722 (99.56%)
			transcoding_message?: string, // 3247/731722 (0.44%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 731583/731722 (99.98%)
		}, // 731722/3164536 (23.12%)
		type?: string, // 2432814/3164536 (76.88%)
	},
	media_embed: {
		content?: string|null, // 2432814/41914348 (5.80%)
		height?: number, // 2432814/41914348 (5.80%)
		scrolling?: boolean, // 2432814/41914348 (5.80%)
		width?: number, // 2432814/41914348 (5.80%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 18098/14569005 (0.12%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 14513298/14569005 (99.62%)
			hlsUrl?: string, // 18098/14569005 (0.12%)
			id?: string, // 14513298/14569005 (99.62%)
			isGif?: boolean, // 18098/14569005 (0.12%)
			m?: "image/jpg"|"image/png"|"image/gif", // 14495200/14569005 (99.49%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6787198/14569005 (46.59%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14495200/14569005 (99.49%)
			s?: {
				gif?: string, // 189857/14495200 (1.31%)
				mp4?: string, // 189857/14495200 (1.31%)
				u?: string, // 14305343/14495200 (98.69%)
				x: number,
				y: number,
			}, // 14495200/14569005 (99.49%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 18098/14569005 (0.12%)
			y?: number, // 18098/14569005 (0.12%)
		},
	}|null, // 4202998/41914348 (10.03%)
	media_only: boolean,
	mobile_ad_url?: string, // 130238/41914348 (0.31%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 130238/41914348 (0.31%)
	outbound_link?: {
	}, // 130238/41914348 (0.31%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 743/303902 (0.24%)
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
	}|null, // 94587/41914348 (0.23%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"gallery"|"video", // 20693479/41914348 (49.37%)
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
				}, // 1075119/20693479 (5.20%)
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
				}, // 1075119/20693479 (5.20%)
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
				}, // 11496724/20693479 (55.56%)
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
				}, // 11578378/20693479 (55.95%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1597764/1597818 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1597818/20693479 (7.72%)
	}, // 20693479/41914348 (49.37%)
	priority_id?: null, // 130238/41914348 (0.31%)
	product_ids?: [], // 130238/41914348 (0.31%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 130238/41914348 (0.31%)
	promoted?: boolean, // 130238/41914348 (0.31%)
	promoted_by?: null, // 130238/41914348 (0.31%)
	promoted_display_name?: null, // 130238/41914348 (0.31%)
	promoted_url?: null, // 130238/41914348 (0.31%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 1/41914348 (0.00%)
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"author"|"content_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 403/3164536 (0.01%)
		oembed?: {
			author_name?: string, // 738098/2432411 (30.34%)
			author_url?: string, // 736676/2432411 (30.29%)
			cache_age?: number, // 40920/2432411 (1.68%)
			description?: string, // 81620/2432411 (3.36%)
			height?: number|null, // 2431038/2432411 (99.94%)
			html?: string, // 2431038/2432411 (99.94%)
			mean_alpha?: number, // 2686/2432411 (0.11%)
			provider_name?: string, // 2431038/2432411 (99.94%)
			provider_url?: string, // 2431038/2432411 (99.94%)
			thumbnail_height?: number|null, // 2324458/2432411 (95.56%)
			thumbnail_url?: string, // 2390361/2432411 (98.27%)
			thumbnail_width?: number|null, // 2324458/2432411 (95.56%)
			title?: string, // 2390218/2432411 (98.27%)
			type?: "video"|"rich", // 2431038/2432411 (99.94%)
			url?: string, // 66890/2432411 (2.75%)
			version?: "1.0", // 2431038/2432411 (99.94%)
			width?: number, // 2431038/2432411 (99.94%)
		}, // 2432411/3164536 (76.86%)
		reddit_video?: {
			bitrate_kbps?: number, // 728475/731722 (99.56%)
			dash_url?: string, // 728475/731722 (99.56%)
			duration?: number, // 728475/731722 (99.56%)
			fallback_url?: string, // 728475/731722 (99.56%)
			has_audio?: boolean, // 727015/731722 (99.36%)
			height?: number|null, // 731583/731722 (99.98%)
			hls_url?: string, // 728475/731722 (99.56%)
			is_gif?: boolean, // 728475/731722 (99.56%)
			scrubber_media_url?: string, // 728475/731722 (99.56%)
			transcoding_message?: string, // 3247/731722 (0.44%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 731583/731722 (99.98%)
		}, // 731722/3164536 (23.12%)
		type?: string, // 2432814/3164536 (76.88%)
	},
	secure_media_embed: {
		content?: string|null, // 2432814/41914348 (5.80%)
		height?: number, // 2432814/41914348 (5.80%)
		media_domain_url?: string, // 2432814/41914348 (5.80%)
		scrolling?: boolean, // 2432814/41914348 (5.80%)
		width?: number, // 2432814/41914348 (5.80%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 130238/41914348 (0.31%)
	sk_ad_network_data?: null, // 130238/41914348 (0.31%)
	spam?: boolean, // 1/41914348 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 4540/41914348 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 130238/41914348 (0.31%)
	third_party_tracking?: null, // 130238/41914348 (0.31%)
	third_party_tracking_2?: null, // 130238/41914348 (0.31%)
	thumbnail: string,
	thumbnail_height?: number|null, // 41913937/41914348 (100.00%)
	thumbnail_width?: number|null, // 41913937/41914348 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 24668315/41914348 (58.85%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}