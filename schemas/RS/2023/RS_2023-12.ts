interface RedditPost {
	_meta: {
		is_edited?: boolean, // 941289/39053769 (2.41%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 1783972/39053769 (4.57%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops", // 7331808/39053769 (18.77%)
		retrieved_2nd_on?: number, // 37269797/39053769 (95.43%)
		was_deleted_later?: boolean, // 6749257/39053769 (17.28%)
		was_initially_deleted?: boolean, // 582551/39053769 (1.49%)
	},
	ad_business?: null, // 89304/39053769 (0.23%)
	ad_promoted_user_posts?: null, // 89304/39053769 (0.23%)
	ad_supplementary_text_md?: null|string, // 89304/39053769 (0.23%)
	ad_user_targeting?: null, // 89304/39053769 (0.23%)
	adserver_click_url?: null, // 89304/39053769 (0.23%)
	adserver_imp_pixel?: null, // 89304/39053769 (0.23%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 89304/39053769 (0.23%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 104349/39053769 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 799999/2110759 (37.90%)
		e: "text"|"emoji",
		t?: string, // 1310760/2110759 (62.10%)
		u?: string, // 799999/2110759 (37.90%)
	}[], // 38262520/39053769 (97.97%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 38262520/39053769 (97.97%)
	author_fullname?: string, // 38262520/39053769 (97.97%)
	author_id?: string|null, // 89304/39053769 (0.23%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 38262520/39053769 (97.97%)
	author_premium?: boolean, // 38262520/39053769 (97.97%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Apply Now"|"Order Now"|"Watch Now"|"Contact Us"|"Get Showtimes"|"Get a Quote"|"Pre-order Now"|"See Menu", // 68324/39053769 (0.17%)
	campaign_id?: null, // 89304/39053769 (0.23%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"gaming"|"animals"|"photography",
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
			key_color: ""|"#0079d3"|"#0dd3bb"|"#7e53c1"|"#ff66ac"|"#222222"|"#46d160"|"#545452"|"#24a0ed",
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
			whitelist_status: null|"all_ads"|"some_ads",
		}, // 60/5990 (1.00%)
		subreddit_id: string,
		title: string,
	}[], // 5990/39053769 (0.02%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1301209/39053769 (3.33%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3881/1300653 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 37354/102851 (36.32%)
			e: "text"|"emoji",
			t?: string, // 65497/102851 (63.68%)
			u?: string, // 37354/102851 (36.32%)
		}[], // 1286251/1300653 (98.89%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1286251/1300653 (98.89%)
		author_fullname?: string, // 1286251/1300653 (98.89%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1286251/1300653 (98.89%)
		author_premium?: boolean, // 1286251/1300653 (98.89%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 137/1300653 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"photography"|"entertainment",
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
				display_name: "MadokaYuri"|"F1DataAnalysis"|"books",
				display_name_prefixed: "r/MadokaYuri"|"r/F1DataAnalysis"|"r/books",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#7e53c1",
				mod_permissions: [],
				name: "t5_2xu9d"|"t5_5o1r4x"|"t5_2qh4i",
				over_18: boolean,
				primary_color: "#014980"|"#212121"|"#a1887f",
				sr: "MadokaYuri"|"F1DataAnalysis"|"books",
				sr_display_name_prefixed: "r/MadokaYuri"|"r/F1DataAnalysis"|"r/books",
				subreddit_type: "public",
				subscribers: number,
				title: "MadoMagi Yuri Paradise"|"Formula Data Analysis (@FDataAnalysis)"|"So many books, so little time",
				url: "/r/MadokaYuri/"|"/r/F1DataAnalysis/"|"/r/books/",
				user_can_crosspost: boolean|null,
				whitelist_status: "all_ads"|null,
			}, // 3/509 (0.59%)
			subreddit_id: string,
			title: string,
		}[], // 509/1300653 (0.04%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"writing"|"diy_and_crafts"|"gaming"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 4/1300653 (0.00%)
		event_is_live?: boolean, // 4/1300653 (0.00%)
		event_start?: number, // 4/1300653 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 39696/1082273 (3.67%)
				id: number,
				media_id: string,
				outbound_url?: string, // 20711/1082273 (1.91%)
			}[],
		}|null, // 171207/1300653 (13.16%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 171207/1300653 (13.16%)
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
			a?: string, // 31220/198891 (15.70%)
			e: "text"|"emoji",
			t?: string, // 167671/198891 (84.30%)
			u?: string, // 31220/198891 (15.70%)
		}[],
		link_flair_template_id?: string, // 424270/1300653 (32.62%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 39014/324009 (12.04%)
				author_url?: string, // 38528/324009 (11.89%)
				cache_age?: number, // 11322/324009 (3.49%)
				description?: string, // 2174/324009 (0.67%)
				height?: number|null, // 323978/324009 (99.99%)
				html?: string, // 323978/324009 (99.99%)
				mean_alpha?: number, // 25/324009 (0.01%)
				provider_name?: string, // 323978/324009 (99.99%)
				provider_url?: string, // 323978/324009 (99.99%)
				thumbnail_height?: number|null, // 300012/324009 (92.59%)
				thumbnail_url?: string, // 312386/324009 (96.41%)
				thumbnail_width?: number|null, // 300012/324009 (92.59%)
				title?: string, // 312631/324009 (96.49%)
				type?: "video"|"rich", // 323978/324009 (99.99%)
				url?: string, // 11997/324009 (3.70%)
				version?: "1.0", // 323978/324009 (99.99%)
				width?: number, // 323978/324009 (99.99%)
			}, // 324009/423086 (76.58%)
			reddit_video?: {
				bitrate_kbps?: number, // 98810/99077 (99.73%)
				dash_url?: string, // 99072/99077 (99.99%)
				duration?: number, // 99072/99077 (99.99%)
				fallback_url?: string, // 99072/99077 (99.99%)
				has_audio?: boolean, // 95736/99077 (96.63%)
				height?: number|null, // 99074/99077 (100.00%)
				hls_url?: string, // 99072/99077 (99.99%)
				is_gif?: boolean, // 99072/99077 (99.99%)
				scrubber_media_url?: string, // 99072/99077 (99.99%)
				transcoding_message?: string, // 5/99077 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 99074/99077 (100.00%)
			}, // 99077/423086 (23.42%)
			type?: string, // 324009/423086 (76.58%)
		},
		media_embed: {
			content?: string|null, // 324009/1300653 (24.91%)
			height?: number, // 324009/1300653 (24.91%)
			scrolling?: boolean, // 324009/1300653 (24.91%)
			width?: number, // 324009/1300653 (24.91%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 978/1116934 (0.09%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1116413/1116934 (99.95%)
				hlsUrl?: string, // 978/1116934 (0.09%)
				id?: string, // 1116413/1116934 (99.95%)
				isGif?: boolean, // 978/1116934 (0.09%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1115435/1116934 (99.87%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 827282/1116934 (74.07%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1115435/1116934 (99.87%)
				s?: {
					gif?: string, // 40735/1115435 (3.65%)
					mp4?: string, // 40735/1115435 (3.65%)
					u?: string, // 1074700/1115435 (96.35%)
					x: number,
					y: number,
				}, // 1115435/1116934 (99.87%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 978/1116934 (0.09%)
				y?: number, // 978/1116934 (0.09%)
			},
		}|null, // 187794/1300653 (14.44%)
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
				vote_count?: number, // 209/6315 (3.31%)
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
		}|null, // 1722/1300653 (0.13%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video", // 998006/1300653 (76.73%)
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
					}, // 87659/998006 (8.78%)
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
					}, // 87659/998006 (8.78%)
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
					}, // 704661/998006 (70.61%)
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
					}, // 706336/998006 (70.77%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 326197/326237 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 326237/998006 (32.69%)
		}, // 998006/1300653 (76.73%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"content_takedown"|"copyright_takedown"|"automod_filtered"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 39014/324009 (12.04%)
				author_url?: string, // 38528/324009 (11.89%)
				cache_age?: number, // 11322/324009 (3.49%)
				description?: string, // 2174/324009 (0.67%)
				height?: number|null, // 323978/324009 (99.99%)
				html?: string, // 323978/324009 (99.99%)
				mean_alpha?: number, // 25/324009 (0.01%)
				provider_name?: string, // 323978/324009 (99.99%)
				provider_url?: string, // 323978/324009 (99.99%)
				thumbnail_height?: number|null, // 300012/324009 (92.59%)
				thumbnail_url?: string, // 312386/324009 (96.41%)
				thumbnail_width?: number|null, // 300012/324009 (92.59%)
				title?: string, // 312631/324009 (96.49%)
				type?: "video"|"rich", // 323978/324009 (99.99%)
				url?: string, // 11997/324009 (3.70%)
				version?: "1.0", // 323978/324009 (99.99%)
				width?: number, // 323978/324009 (99.99%)
			}, // 324009/423086 (76.58%)
			reddit_video?: {
				bitrate_kbps?: number, // 98810/99077 (99.73%)
				dash_url?: string, // 99072/99077 (99.99%)
				duration?: number, // 99072/99077 (99.99%)
				fallback_url?: string, // 99072/99077 (99.99%)
				has_audio?: boolean, // 95736/99077 (96.63%)
				height?: number|null, // 99074/99077 (100.00%)
				hls_url?: string, // 99072/99077 (99.99%)
				is_gif?: boolean, // 99072/99077 (99.99%)
				scrubber_media_url?: string, // 99072/99077 (99.99%)
				transcoding_message?: string, // 5/99077 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 99074/99077 (100.00%)
			}, // 99077/423086 (23.42%)
			type?: string, // 324009/423086 (76.58%)
		},
		secure_media_embed: {
			content?: string|null, // 324009/1300653 (24.91%)
			height?: number, // 324009/1300653 (24.91%)
			media_domain_url?: string, // 324009/1300653 (24.91%)
			scrolling?: boolean, // 324009/1300653 (24.91%)
			width?: number, // 324009/1300653 (24.91%)
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
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1158777/1300653 (89.09%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1301209/39053769 (3.33%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 89304/39053769 (0.23%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 89304/39053769 (0.23%)
	embed_url?: null|"https://google.com"|"https://www.google.com/", // 89304/39053769 (0.23%)
	event_end?: number, // 47/39053769 (0.00%)
	event_is_live?: boolean, // 47/39053769 (0.00%)
	event_start?: number, // 47/39053769 (0.00%)
	events?: [], // 89304/39053769 (0.23%)
	eventsOnRender?: [], // 89304/39053769 (0.23%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Download"|"Sign Up"|"View More"|"Order Now"|"Play Now"|"Apply Now"|"Install"|"Contact Us"|"Pre-order Now"|"Watch Now"|"Get a Quote"|"Get Showtimes"|"See Menu", // 49133/11796656 (0.42%)
			caption?: string, // 318218/11796656 (2.70%)
			display_url?: string, // 51155/11796656 (0.43%)
			id: number,
			media_id: string,
			outbound_url?: string, // 140408/11796656 (1.19%)
			product?: {
				description: string,
				price?: string, // 25248/25478 (99.10%)
				title: string,
			}, // 25478/11796656 (0.22%)
		}[],
	}|null, // 3266553/39053769 (8.36%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 89304/39053769 (0.23%)
	id: string,
	impression_id?: null, // 89304/39053769 (0.23%)
	impression_id_str?: null, // 89304/39053769 (0.23%)
	is_blank?: boolean, // 89304/39053769 (0.23%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3266553/39053769 (8.36%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 89304/39053769 (0.23%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 818404/7041843 (11.62%)
		e: "text"|"emoji",
		t?: string, // 6223439/7041843 (88.38%)
		u?: string, // 818404/7041843 (11.62%)
	}[],
	link_flair_template_id?: string, // 13788664/39053769 (35.31%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1bsso361afr0r"|"1c7bnq302go5w"|"1c4267pre5gkr"|"1c426gbgs3hgo"|"1c4ogsqits0vn"|"1c5yqmnktuthf"|"1c62jw5bzq7b2"|"1c6melm9ysilr"|"1c78oyfn5p6lu"|"1c79cvtfw2jdu", // 48/3589383 (0.00%)
		oembed?: {
			author_name?: string, // 726584/2886227 (25.17%)
			author_url?: string, // 724734/2886227 (25.11%)
			cache_age?: number, // 47996/2886227 (1.66%)
			description?: string, // 106778/2886227 (3.70%)
			height?: number|null, // 2884971/2886227 (99.96%)
			html?: string, // 2884971/2886227 (99.96%)
			marginheight?: number, // 10/2886227 (0.00%)
			marginwidth?: number, // 10/2886227 (0.00%)
			mean_alpha?: number, // 2057/2886227 (0.07%)
			provider_name?: string, // 2884971/2886227 (99.96%)
			provider_url?: string, // 2884971/2886227 (99.96%)
			thumbnail_height?: number|null, // 2777474/2886227 (96.23%)
			thumbnail_url?: string, // 2837160/2886227 (98.30%)
			thumbnail_width?: number|null, // 2777474/2886227 (96.23%)
			title?: string, // 2836861/2886227 (98.29%)
			type?: "video"|"rich", // 2884971/2886227 (99.96%)
			url?: string, // 81687/2886227 (2.83%)
			version?: "1.0", // 2884961/2886227 (99.96%)
			width?: number, // 2884971/2886227 (99.96%)
		}, // 2886227/3589383 (80.41%)
		reddit_video?: {
			bitrate_kbps?: number, // 700067/703108 (99.57%)
			dash_url?: string, // 700068/703108 (99.57%)
			duration?: number, // 700068/703108 (99.57%)
			fallback_url?: string, // 700068/703108 (99.57%)
			has_audio?: boolean, // 698748/703108 (99.38%)
			height?: number|null, // 702338/703108 (99.89%)
			hls_url?: string, // 700068/703108 (99.57%)
			is_gif?: boolean, // 700068/703108 (99.57%)
			scrubber_media_url?: string, // 700068/703108 (99.57%)
			transcoding_message?: string, // 3040/703108 (0.43%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 702338/703108 (99.89%)
		}, // 703108/3589383 (19.59%)
		type?: string, // 2886275/3589383 (80.41%)
	},
	media_embed: {
		content?: string|null, // 2886275/39053769 (7.39%)
		height?: number, // 2886275/39053769 (7.39%)
		scrolling?: boolean, // 2886275/39053769 (7.39%)
		width?: number, // 2886275/39053769 (7.39%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 16591/12256067 (0.14%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 12205320/12256067 (99.59%)
			hlsUrl?: string, // 16591/12256067 (0.14%)
			id?: string, // 12205320/12256067 (99.59%)
			isGif?: boolean, // 16591/12256067 (0.14%)
			m?: "image/jpg"|"image/png"|"image/gif", // 12188729/12256067 (99.45%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 5733287/12256067 (46.78%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 12188729/12256067 (99.45%)
			s?: {
				gif?: string, // 152531/12188729 (1.25%)
				mp4?: string, // 152531/12188729 (1.25%)
				u?: string, // 12036198/12188729 (98.75%)
				x: number,
				y: number,
			}, // 12188729/12256067 (99.45%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 16591/12256067 (0.14%)
			y?: number, // 16591/12256067 (0.14%)
		},
	}|null, // 3644654/39053769 (9.33%)
	media_only: boolean,
	mobile_ad_url?: string, // 89304/39053769 (0.23%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 89304/39053769 (0.23%)
	outbound_link?: {
	}, // 89304/39053769 (0.23%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 795/325399 (0.24%)
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
	}|null, // 101621/39053769 (0.26%)
	post_hint?: "image"|"rich:video"|"link"|"self"|"hosted:video"|"gallery"|"video", // 20090852/39053769 (51.44%)
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
				}, // 1413956/20090852 (7.04%)
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
				}, // 1413956/20090852 (7.04%)
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
				}, // 11674185/20090852 (58.11%)
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
				}, // 11747933/20090852 (58.47%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2013606/2013645 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 2013645/20090852 (10.02%)
	}, // 20090852/39053769 (51.44%)
	priority_id?: null, // 89304/39053769 (0.23%)
	product_ids?: [], // 89304/39053769 (0.23%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 89304/39053769 (0.23%)
	promoted?: boolean, // 89304/39053769 (0.23%)
	promoted_by?: null, // 89304/39053769 (0.23%)
	promoted_display_name?: null, // 89304/39053769 (0.23%)
	promoted_url?: null, // 89304/39053769 (0.23%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1bsso361afr0r"|"1c7bnq302go5w"|"1c4267pre5gkr"|"1c426gbgs3hgo"|"1c4ogsqits0vn"|"1c5yqmnktuthf"|"1c62jw5bzq7b2"|"1c6melm9ysilr"|"1c78oyfn5p6lu"|"1c79cvtfw2jdu", // 48/3589383 (0.00%)
		oembed?: {
			author_name?: string, // 726584/2886227 (25.17%)
			author_url?: string, // 724734/2886227 (25.11%)
			cache_age?: number, // 47996/2886227 (1.66%)
			description?: string, // 106778/2886227 (3.70%)
			height?: number|null, // 2884971/2886227 (99.96%)
			html?: string, // 2884971/2886227 (99.96%)
			marginheight?: number, // 10/2886227 (0.00%)
			marginwidth?: number, // 10/2886227 (0.00%)
			mean_alpha?: number, // 2057/2886227 (0.07%)
			provider_name?: string, // 2884971/2886227 (99.96%)
			provider_url?: string, // 2884971/2886227 (99.96%)
			thumbnail_height?: number|null, // 2777474/2886227 (96.23%)
			thumbnail_url?: string, // 2837160/2886227 (98.30%)
			thumbnail_width?: number|null, // 2777474/2886227 (96.23%)
			title?: string, // 2836861/2886227 (98.29%)
			type?: "video"|"rich", // 2884971/2886227 (99.96%)
			url?: string, // 81687/2886227 (2.83%)
			version?: "1.0", // 2884961/2886227 (99.96%)
			width?: number, // 2884971/2886227 (99.96%)
		}, // 2886227/3589383 (80.41%)
		reddit_video?: {
			bitrate_kbps?: number, // 700067/703108 (99.57%)
			dash_url?: string, // 700068/703108 (99.57%)
			duration?: number, // 700068/703108 (99.57%)
			fallback_url?: string, // 700068/703108 (99.57%)
			has_audio?: boolean, // 698748/703108 (99.38%)
			height?: number|null, // 702338/703108 (99.89%)
			hls_url?: string, // 700068/703108 (99.57%)
			is_gif?: boolean, // 700068/703108 (99.57%)
			scrubber_media_url?: string, // 700068/703108 (99.57%)
			transcoding_message?: string, // 3040/703108 (0.43%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 702338/703108 (99.89%)
		}, // 703108/3589383 (19.59%)
		type?: string, // 2886275/3589383 (80.41%)
	},
	secure_media_embed: {
		content?: string|null, // 2886275/39053769 (7.39%)
		height?: number, // 2886275/39053769 (7.39%)
		media_domain_url?: string, // 2886275/39053769 (7.39%)
		scrolling?: boolean, // 2886275/39053769 (7.39%)
		width?: number, // 2886275/39053769 (7.39%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 89304/39053769 (0.23%)
	sk_ad_network_data?: null, // 89304/39053769 (0.23%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 2604/39053769 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 89304/39053769 (0.23%)
	third_party_tracking?: null, // 89304/39053769 (0.23%)
	third_party_tracking_2?: null, // 89304/39053769 (0.23%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 39053117/39053769 (100.00%)
	thumbnail_width?: number|null, // 39053117/39053769 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 2/39053769 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 24228424/39053769 (62.04%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}