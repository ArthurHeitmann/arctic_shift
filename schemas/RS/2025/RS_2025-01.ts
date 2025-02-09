interface RedditPost {
	_meta?: {
		corrupted_selftext?: string, // 1/39662696 (0.00%)
		edited_title?: string, // 53643/39662696 (0.14%)
		is_edited?: boolean, // 1605524/39662696 (4.05%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops", // 8068076/39662696 (20.34%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7261634/39662696 (18.31%)
		was_initially_deleted?: boolean, // 806442/39662696 (2.03%)
	}, // 39662696/39905721 (99.39%)
	ad_business?: null, // 157807/39905721 (0.40%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "BorbWhisperer",
		author_flair_background_color: null,
		author_flair_css_class: null,
		author_flair_richtext: [],
		author_flair_template_id: null,
		author_flair_text: null,
		author_flair_text_color: null,
		author_flair_type: "text",
		author_fullname: "t2_ltqb3m7s",
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
		domain: "i.redd.it",
		downs: number,
		edited: boolean,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "112kg94",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
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
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_112kg94",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		post_hint: "image",
		preview: {
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
			allowed_media_in_comments: ("giphy"|"static"|"animated")[],
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: "",
			disable_contributor_requests: boolean,
			display_name: "BorbWhispererOfficial",
			display_name_prefixed: "r/BorbWhispererOfficial",
			free_form_reports: boolean,
			header_img: null,
			header_size: null,
			icon_color: "",
			icon_img: "",
			icon_size: null,
			key_color: "",
			link_flair_enabled: boolean,
			link_flair_position: "",
			name: "t5_7x1x4x",
			over_18: boolean,
			previous_names: [],
			primary_color: "",
			public_description: "",
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "",
			subreddit_type: "public",
			subscribers: number,
			title: "BorbWhispererOfficial",
			url: "/r/BorbWhispererOfficial/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "BorbWhispererOfficial",
		subreddit_id: "t5_7x1x4x",
		subreddit_name_prefixed: "r/BorbWhispererOfficial",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null,
		thumbnail: string,
		thumbnail_height: number,
		thumbnail_width: number,
		title: "Snoo",
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: "https://i.redd.it/vac2owhtv8ia1.jpg",
		url_overridden_by_dest: "https://i.redd.it/vac2owhtv8ia1.jpg",
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: number,
	}[], // 157807/39905721 (0.40%)
	ad_supplementary_text_md?: null|string, // 157807/39905721 (0.40%)
	ad_user_targeting?: null, // 157807/39905721 (0.40%)
	adserver_click_url?: null, // 157807/39905721 (0.40%)
	adserver_imp_pixel?: null, // 157807/39905721 (0.40%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 157807/39905721 (0.40%)
	approved?: boolean, // 2/39905721 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 122322/39905721 (0.31%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1070999/2791151 (38.37%)
		e: "text"|"emoji",
		t?: string, // 1720152/2791151 (61.63%)
		u?: string, // 1070999/2791151 (38.37%)
	}[], // 39531304/39905721 (99.06%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 39531304/39905721 (99.06%)
	author_fullname?: string, // 39531304/39905721 (99.06%)
	author_id?: string|null, // 157807/39905721 (0.40%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 39531304/39905721 (99.06%)
	author_premium?: boolean, // 39531304/39905721 (99.06%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Apply Now"|"Play Now"|"Contact Us"|"Order Now"|"Pre-order Now"|"Watch Now"|"Get a Quote"|"Get Showtimes"|"See Menu", // 125042/39905721 (0.31%)
	campaign_id?: null, // 157807/39905721 (0.40%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment"|"memes",
	clicked: boolean,
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1397679/39905721 (3.50%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4699/1397517 (0.34%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 45844/119050 (38.51%)
			e: "text"|"emoji",
			t?: string, // 73206/119050 (61.49%)
			u?: string, // 45844/119050 (38.51%)
		}[], // 1386962/1397517 (99.24%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1386962/1397517 (99.24%)
		author_fullname?: string, // 1386962/1397517 (99.24%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1386962/1397517 (99.24%)
		author_premium?: boolean, // 1386962/1397517 (99.24%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"photography"|"gaming"|"drawing_and_painting",
		clicked: boolean,
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
				caption?: string, // 453666/1536054 (29.53%)
				id: number,
				media_id: string,
				outbound_url?: string, // 20139/1536054 (1.31%)
			}[],
		}|null, // 254282/1397517 (18.20%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 254282/1397517 (18.20%)
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
			a?: string, // 34026/243054 (14.00%)
			e: "text"|"emoji",
			t?: string, // 209028/243054 (86.00%)
			u?: string, // 34026/243054 (14.00%)
		}[],
		link_flair_template_id?: string, // 537834/1397517 (38.48%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 17170/284678 (6.03%)
				author_url?: string, // 17109/284678 (6.01%)
				cache_age?: number, // 653/284678 (0.23%)
				description?: string, // 2299/284678 (0.81%)
				height?: number|null, // 284677/284678 (100.00%)
				html?: string, // 284677/284678 (100.00%)
				mean_alpha?: number, // 116/284678 (0.04%)
				provider_name?: string, // 284677/284678 (100.00%)
				provider_url?: string, // 284677/284678 (100.00%)
				thumbnail_height?: number, // 272188/284678 (95.61%)
				thumbnail_url?: string, // 284046/284678 (99.78%)
				thumbnail_width?: number, // 272188/284678 (95.61%)
				title?: string, // 284139/284678 (99.81%)
				type?: "video"|"rich", // 284677/284678 (100.00%)
				url?: string, // 1400/284678 (0.49%)
				version?: "1.0", // 284677/284678 (100.00%)
				width?: number, // 284677/284678 (100.00%)
			}, // 284678/422664 (67.35%)
			reddit_video?: {
				bitrate_kbps?: number, // 137816/137986 (99.88%)
				dash_url?: string, // 137980/137986 (100.00%)
				duration?: number, // 137980/137986 (100.00%)
				fallback_url?: string, // 137980/137986 (100.00%)
				has_audio?: boolean, // 136183/137986 (98.69%)
				height: number|null,
				hls_url?: string, // 137980/137986 (100.00%)
				is_gif?: boolean, // 137980/137986 (100.00%)
				scrubber_media_url?: string, // 137980/137986 (100.00%)
				transcoding_message?: string, // 6/137986 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 137986/422664 (32.65%)
			type?: string, // 284678/422664 (67.35%)
		},
		media_embed: {
			content?: string|null, // 284678/1397517 (20.37%)
			height?: number, // 284678/1397517 (20.37%)
			scrolling?: boolean, // 284678/1397517 (20.37%)
			width?: number, // 284678/1397517 (20.37%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1360/1574491 (0.09%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1573653/1574491 (99.95%)
				hlsUrl?: string, // 1360/1574491 (0.09%)
				id?: string, // 1573653/1574491 (99.95%)
				isGif?: boolean, // 1360/1574491 (0.09%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 1572293/1574491 (99.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1039790/1574491 (66.04%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1572293/1574491 (99.86%)
				s?: {
					gif?: string, // 80680/1572293 (5.13%)
					mp4?: string, // 80680/1572293 (5.13%)
					u?: string, // 1491613/1572293 (94.87%)
					x: number,
					y: number,
				}, // 1572293/1574491 (99.86%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1360/1574491 (0.09%)
				y?: number, // 1360/1574491 (0.09%)
			},
		}|null, // 268333/1397517 (19.20%)
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
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 195/5436 (3.59%)
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
		}|null, // 1466/1397517 (0.10%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery", // 985996/1397517 (70.55%)
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
					}, // 47823/985996 (4.85%)
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
					}, // 47823/985996 (4.85%)
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
					}, // 565168/985996 (57.32%)
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
					}, // 567408/985996 (57.55%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 273810/273825 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 273825/985996 (27.77%)
		}, // 985996/1397517 (70.55%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"automod_filtered"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 17170/284678 (6.03%)
				author_url?: string, // 17109/284678 (6.01%)
				cache_age?: number, // 653/284678 (0.23%)
				description?: string, // 2299/284678 (0.81%)
				height?: number|null, // 284677/284678 (100.00%)
				html?: string, // 284677/284678 (100.00%)
				mean_alpha?: number, // 116/284678 (0.04%)
				provider_name?: string, // 284677/284678 (100.00%)
				provider_url?: string, // 284677/284678 (100.00%)
				thumbnail_height?: number, // 272188/284678 (95.61%)
				thumbnail_url?: string, // 284046/284678 (99.78%)
				thumbnail_width?: number, // 272188/284678 (95.61%)
				title?: string, // 284139/284678 (99.81%)
				type?: "video"|"rich", // 284677/284678 (100.00%)
				url?: string, // 1400/284678 (0.49%)
				version?: "1.0", // 284677/284678 (100.00%)
				width?: number, // 284677/284678 (100.00%)
			}, // 284678/422664 (67.35%)
			reddit_video?: {
				bitrate_kbps?: number, // 137816/137986 (99.88%)
				dash_url?: string, // 137980/137986 (100.00%)
				duration?: number, // 137980/137986 (100.00%)
				fallback_url?: string, // 137980/137986 (100.00%)
				has_audio?: boolean, // 136183/137986 (98.69%)
				height: number|null,
				hls_url?: string, // 137980/137986 (100.00%)
				is_gif?: boolean, // 137980/137986 (100.00%)
				scrubber_media_url?: string, // 137980/137986 (100.00%)
				transcoding_message?: string, // 6/137986 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 137986/422664 (32.65%)
			type?: string, // 284678/422664 (67.35%)
		},
		secure_media_embed: {
			content?: string|null, // 284678/1397517 (20.37%)
			height?: number, // 284678/1397517 (20.37%)
			media_domain_url?: string, // 284678/1397517 (20.37%)
			scrolling?: boolean, // 284678/1397517 (20.37%)
			width?: number, // 284678/1397517 (20.37%)
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
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"live"|"controversial"|"random",
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
		url_overridden_by_dest?: string, // 1226291/1397517 (87.75%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 1397679/39905721 (3.50%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 157807/39905721 (0.40%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 157807/39905721 (0.40%)
	embed_url?: null|string, // 157807/39905721 (0.40%)
	events?: [], // 157807/39905721 (0.40%)
	eventsOnRender?: [], // 157807/39905721 (0.40%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"View More"|"Sign Up"|"Download"|"Contact Us"|"Get a Quote"|"Order Now"|"Play Now"|"Install"|"Apply Now"|"Get Showtimes"|"Watch Now"|"Pre-order Now"|"See Menu", // 60845/16685954 (0.36%)
			caption?: string, // 5656981/16685954 (33.90%)
			display_url?: string, // 67396/16685954 (0.40%)
			id: number,
			media_id: string,
			outbound_url?: string, // 97568/16685954 (0.58%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 14080/16685954 (0.08%)
		}[],
	}|null, // 4500155/39905721 (11.28%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 157807/39905721 (0.40%)
	id: string,
	ignore_reports?: boolean, // 2/39905721 (0.00%)
	impression_id?: null, // 157807/39905721 (0.40%)
	impression_id_str?: null, // 157807/39905721 (0.40%)
	is_blank?: boolean, // 157807/39905721 (0.40%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 4500155/39905721 (11.28%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 157807/39905721 (0.40%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1112732/9141540 (12.17%)
		e: "text"|"emoji",
		t?: string, // 8028808/9141540 (87.83%)
		u?: string, // 1112732/9141540 (12.17%)
	}[],
	link_flair_template_id?: string, // 17541716/39905721 (43.96%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1eah8fw2darq8"|"1ec65d0zaty1o"|"1ecy3e6t8yzib"|"1edkfkek3rs6c"|"1eecsm0l7siek"|"1ef3onylbnekd"|"1efxysl6tad1u", // 42/3752685 (0.00%)
		oembed?: {
			author_name?: string, // 672416/2546711 (26.40%)
			author_url?: string, // 671826/2546711 (26.38%)
			cache_age?: number, // 22055/2546711 (0.87%)
			description?: string, // 78991/2546711 (3.10%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2624/2546711 (0.10%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2498353/2546711 (98.10%)
			thumbnail_url?: string, // 2526603/2546711 (99.21%)
			thumbnail_width?: number, // 2498353/2546711 (98.10%)
			title?: string, // 2526174/2546711 (99.19%)
			type: "video"|"rich",
			url?: string, // 52052/2546711 (2.04%)
			version: "1.0",
			width: number,
		}, // 2546711/3752685 (67.86%)
		reddit_video?: {
			bitrate_kbps?: number, // 1200947/1205932 (99.59%)
			dash_url?: string, // 1200947/1205932 (99.59%)
			duration?: number, // 1200947/1205932 (99.59%)
			fallback_url?: string, // 1200947/1205932 (99.59%)
			has_audio?: boolean, // 1200908/1205932 (99.58%)
			height: number|null,
			hls_url?: string, // 1200947/1205932 (99.59%)
			is_gif?: boolean, // 1200947/1205932 (99.59%)
			scrubber_media_url?: string, // 1200947/1205932 (99.59%)
			transcoding_message?: string, // 4985/1205932 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1205932/3752685 (32.14%)
		type?: string, // 2546753/3752685 (67.86%)
	},
	media_embed: {
		content?: string, // 2525314/39905721 (6.33%)
		height?: number, // 2525314/39905721 (6.33%)
		scrolling?: boolean, // 2525314/39905721 (6.33%)
		width?: number, // 2525314/39905721 (6.33%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 21327/17362820 (0.12%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 17283439/17362820 (99.54%)
			hlsUrl?: string, // 21327/17362820 (0.12%)
			id?: string, // 17283439/17362820 (99.54%)
			isGif?: boolean, // 21327/17362820 (0.12%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 17262112/17362820 (99.42%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 7566865/17362820 (43.58%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 17262112/17362820 (99.42%)
			s?: {
				gif?: string, // 323624/17262112 (1.87%)
				mp4?: string, // 323624/17262112 (1.87%)
				u?: string, // 16938488/17262112 (98.13%)
				x: number,
				y: number,
			}, // 17262112/17362820 (99.42%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 21327/17362820 (0.12%)
			y?: number, // 21327/17362820 (0.12%)
		},
	}|null, // 5028094/39905721 (12.60%)
	media_only: boolean,
	mobile_ad_url?: string, // 157807/39905721 (0.40%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 157807/39905721 (0.40%)
	outbound_link?: {
	}, // 157807/39905721 (0.40%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 17630/226828 (7.77%)
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
	}|null, // 73409/39905721 (0.18%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 18949553/39905721 (47.49%)
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
				}, // 546258/19018473 (2.87%)
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
				}, // 546258/19018473 (2.87%)
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
				}, // 9207424/19018473 (48.41%)
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
				}, // 9288473/19018473 (48.84%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1714598/1714613 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1714613/19018473 (9.02%)
	}, // 19018473/39905721 (47.66%)
	priority_id?: null, // 157807/39905721 (0.40%)
	product_ids?: [], // 157807/39905721 (0.40%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 157807/39905721 (0.40%)
	promoted?: boolean, // 157807/39905721 (0.40%)
	promoted_by?: null, // 157807/39905721 (0.40%)
	promoted_display_name?: null, // 157807/39905721 (0.40%)
	promoted_url?: null, // 157807/39905721 (0.40%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 2/39905721 (0.00%)
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1eah8fw2darq8"|"1ec65d0zaty1o"|"1ecy3e6t8yzib"|"1edkfkek3rs6c"|"1eecsm0l7siek"|"1ef3onylbnekd"|"1efxysl6tad1u", // 42/3752685 (0.00%)
		oembed?: {
			author_name?: string, // 672416/2546711 (26.40%)
			author_url?: string, // 671826/2546711 (26.38%)
			cache_age?: number, // 22055/2546711 (0.87%)
			description?: string, // 78991/2546711 (3.10%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2624/2546711 (0.10%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2498353/2546711 (98.10%)
			thumbnail_url?: string, // 2526603/2546711 (99.21%)
			thumbnail_width?: number, // 2498353/2546711 (98.10%)
			title?: string, // 2526174/2546711 (99.19%)
			type: "video"|"rich",
			url?: string, // 52052/2546711 (2.04%)
			version: "1.0",
			width: number,
		}, // 2546711/3752685 (67.86%)
		reddit_video?: {
			bitrate_kbps?: number, // 1200947/1205932 (99.59%)
			dash_url?: string, // 1200947/1205932 (99.59%)
			duration?: number, // 1200947/1205932 (99.59%)
			fallback_url?: string, // 1200947/1205932 (99.59%)
			has_audio?: boolean, // 1200908/1205932 (99.58%)
			height: number|null,
			hls_url?: string, // 1200947/1205932 (99.59%)
			is_gif?: boolean, // 1200947/1205932 (99.59%)
			scrubber_media_url?: string, // 1200947/1205932 (99.59%)
			transcoding_message?: string, // 4985/1205932 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1205932/3752685 (32.14%)
		type?: string, // 2546753/3752685 (67.86%)
	},
	secure_media_embed: {
		content?: string, // 2525314/39905721 (6.33%)
		height?: number, // 2525314/39905721 (6.33%)
		media_domain_url?: string, // 2525314/39905721 (6.33%)
		scrolling?: boolean, // 2525314/39905721 (6.33%)
		width?: number, // 2525314/39905721 (6.33%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 157807/39905721 (0.40%)
	sk_ad_network_data?: null, // 157807/39905721 (0.40%)
	spam?: boolean, // 2/39905721 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 4733/39905721 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 157807/39905721 (0.40%)
	third_party_tracking?: null, // 157807/39905721 (0.40%)
	third_party_tracking_2?: null, // 157807/39905721 (0.40%)
	thumbnail: string,
	thumbnail_height?: number|null, // 39904717/39905721 (100.00%)
	thumbnail_width?: number|null, // 39904717/39905721 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23678351/39905721 (59.34%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}