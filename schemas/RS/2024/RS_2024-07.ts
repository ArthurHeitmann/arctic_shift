interface RedditPost {
	_meta?: {
		corrupted_selftext?: string, // 1/40113424 (0.00%)
		edited_title?: string, // 181564/40113424 (0.45%)
		is_edited?: boolean, // 1494605/40113424 (3.73%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8575680/40113424 (21.38%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7833762/40113424 (19.53%)
		was_initially_deleted?: boolean, // 741918/40113424 (1.85%)
	}, // 40113424/40924291 (98.02%)
	ad_business?: null, // 181559/40924291 (0.44%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "AdSpecialist6598"|"wewewawa",
		author_flair_background_color: "transparent"|null,
		author_flair_css_class: null,
		author_flair_richtext: {
			a?: ":Eagles:", // 2/4 (50.00%)
			e: "emoji"|"text",
			t?: " Eagles", // 2/4 (50.00%)
			u?: string, // 2/4 (50.00%)
		}[],
		author_flair_template_id: "0ae60c22-0f94-11eb-af82-0ebaaf71a0d3"|null,
		author_flair_text: ":Eagles: Eagles"|null,
		author_flair_text_color: "dark"|null,
		author_flair_type: "richtext"|"text",
		author_fullname: "t2_cc0n0rs5"|"t2_3a4wg",
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
		domain: "nfl.com"|"cnbc.com",
		downs: number,
		edited: boolean,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "1dti98z"|"1dtpptq",
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
		name: "t3_1dti98z"|"t3_1dtpptq",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint: "link",
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
			allowed_media_in_comments: ("giphy"|"expression")[],
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "nfl"|"finance",
			display_name_prefixed: "r/nfl"|"r/finance",
			free_form_reports: boolean,
			header_img: null|string,
			header_size: null|number[],
			icon_color: "",
			icon_img: string,
			icon_size: number[]|null,
			key_color: "#0079d3"|"",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"right",
			name: "t5_2qmg3"|"t5_2qhfj",
			over_18: boolean,
			previous_names: [],
			primary_color: "#1e3752"|"#f2dfce",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "Submit content"|"",
			subreddit_type: "public",
			subscribers: number,
			title: "NFL: National Football League Discussion"|"Financial news and views",
			url: "/r/nfl/"|"/r/finance/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "nfl"|"finance",
		subreddit_id: "t5_2qmg3"|"t5_2qhfj",
		subreddit_name_prefixed: "r/nfl"|"r/finance",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null,
		thumbnail: string,
		thumbnail_height: number,
		thumbnail_width: number,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 181559/40924291 (0.44%)
	ad_supplementary_text_md?: null|string, // 181559/40924291 (0.44%)
	ad_user_targeting?: null, // 181559/40924291 (0.44%)
	adserver_click_url?: null, // 181559/40924291 (0.44%)
	adserver_imp_pixel?: null, // 181559/40924291 (0.44%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 181559/40924291 (0.44%)
	approved?: boolean, // 1/40924291 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 109883/40924291 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 975825/2654064 (36.77%)
		e: "text"|"emoji",
		t?: string, // 1678239/2654064 (63.23%)
		u?: string, // 975825/2654064 (36.77%)
	}[], // 40473999/40924291 (98.90%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 40473999/40924291 (98.90%)
	author_fullname?: string, // 40473999/40924291 (98.90%)
	author_id?: string|null, // 181559/40924291 (0.44%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 40473999/40924291 (98.90%)
	author_premium?: boolean, // 40473999/40924291 (98.90%)
	awarders: [],
	ban_note?: "reinforce spam", // 1/40924291 (0.00%)
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Download"|"Install"|"View More"|"Play Now"|"Apply Now"|"Order Now"|"Contact Us"|"Watch Now"|"Get Showtimes"|"Get a Quote"|"Pre-order Now"|"See Menu", // 140634/40924291 (0.34%)
	campaign_id?: null, // 181559/40924291 (0.44%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"photography",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1224545/40924291 (2.99%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3271/1224352 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 35258/97721 (36.08%)
			e: "text"|"emoji",
			t?: string, // 62463/97721 (63.92%)
			u?: string, // 35258/97721 (36.08%)
		}[], // 1213798/1224352 (99.14%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1213798/1224352 (99.14%)
		author_fullname?: string, // 1213798/1224352 (99.14%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1213798/1224352 (99.14%)
		author_premium?: boolean, // 1213798/1224352 (99.14%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"animals"|"entertainment"|"drawing_and_painting"|"memes",
		clicked: boolean,
		content_categories: null|("photography"|"comics"|"drawing_and_painting"|"gaming"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 990824/1284806 (77.12%)
				id: number,
				media_id: string,
				outbound_url?: string, // 897944/1284806 (69.89%)
			}[],
		}|null, // 203155/1224352 (16.59%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 203155/1224352 (16.59%)
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
			a?: string, // 29198/194499 (15.01%)
			e: "text"|"emoji",
			t?: string, // 165301/194499 (84.99%)
			u?: string, // 29198/194499 (15.01%)
		}[],
		link_flair_template_id?: string, // 446592/1224352 (36.48%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 18326/223916 (8.18%)
				author_url?: string, // 18262/223916 (8.16%)
				cache_age?: number, // 1464/223916 (0.65%)
				description?: string, // 1997/223916 (0.89%)
				height?: number|null, // 223914/223916 (100.00%)
				html?: string, // 223914/223916 (100.00%)
				mean_alpha?: number, // 106/223916 (0.05%)
				provider_name?: string, // 223914/223916 (100.00%)
				provider_url?: string, // 223914/223916 (100.00%)
				thumbnail_height?: number, // 211995/223916 (94.68%)
				thumbnail_url?: string, // 222319/223916 (99.29%)
				thumbnail_width?: number, // 211995/223916 (94.68%)
				title?: string, // 222427/223916 (99.34%)
				type?: "video"|"rich", // 223914/223916 (100.00%)
				url?: string, // 2174/223916 (0.97%)
				version?: "1.0", // 223914/223916 (100.00%)
				width?: number, // 223914/223916 (100.00%)
			}, // 223916/330398 (67.77%)
			reddit_video?: {
				bitrate_kbps?: number, // 106281/106482 (99.81%)
				dash_url?: string, // 106476/106482 (99.99%)
				duration?: number, // 106476/106482 (99.99%)
				fallback_url?: string, // 106476/106482 (99.99%)
				has_audio?: boolean, // 103873/106482 (97.55%)
				height: number|null,
				hls_url?: string, // 106476/106482 (99.99%)
				is_gif?: boolean, // 106476/106482 (99.99%)
				scrubber_media_url?: string, // 106476/106482 (99.99%)
				transcoding_message?: string, // 6/106482 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 106482/330398 (32.23%)
			type?: string, // 223916/330398 (67.77%)
		},
		media_embed: {
			content?: string|null, // 223916/1224352 (18.29%)
			height?: number, // 223916/1224352 (18.29%)
			scrolling?: boolean, // 223916/1224352 (18.29%)
			width?: number, // 223916/1224352 (18.29%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 977/1316288 (0.07%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1315415/1316288 (99.93%)
				hlsUrl?: string, // 977/1316288 (0.07%)
				id?: string, // 1315415/1316288 (99.93%)
				isGif?: boolean, // 977/1316288 (0.07%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1314438/1316288 (99.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 969605/1316288 (73.66%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1314438/1316288 (99.86%)
				s?: {
					gif?: string, // 74701/1314438 (5.68%)
					mp4?: string, // 74701/1314438 (5.68%)
					u?: string, // 1239737/1314438 (94.32%)
					x: number,
					y: number,
				}, // 1314438/1316288 (99.86%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 977/1316288 (0.07%)
				y?: number, // 977/1316288 (0.07%)
			},
		}|null, // 215806/1224352 (17.63%)
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
				vote_count?: number, // 209/6688 (3.12%)
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
		}|null, // 1833/1224352 (0.15%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video", // 893228/1224352 (72.96%)
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
					}, // 79093/893228 (8.85%)
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
					}, // 79093/893228 (8.85%)
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
					}, // 579601/893228 (64.89%)
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
					}, // 581422/893228 (65.09%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 249485/249508 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 249508/893228 (27.93%)
		}, // 893228/1224352 (72.96%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"copyright_takedown"|"automod_filtered"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 18326/223916 (8.18%)
				author_url?: string, // 18262/223916 (8.16%)
				cache_age?: number, // 1464/223916 (0.65%)
				description?: string, // 1997/223916 (0.89%)
				height?: number|null, // 223914/223916 (100.00%)
				html?: string, // 223914/223916 (100.00%)
				mean_alpha?: number, // 106/223916 (0.05%)
				provider_name?: string, // 223914/223916 (100.00%)
				provider_url?: string, // 223914/223916 (100.00%)
				thumbnail_height?: number, // 211995/223916 (94.68%)
				thumbnail_url?: string, // 222319/223916 (99.29%)
				thumbnail_width?: number, // 211995/223916 (94.68%)
				title?: string, // 222427/223916 (99.34%)
				type?: "video"|"rich", // 223914/223916 (100.00%)
				url?: string, // 2174/223916 (0.97%)
				version?: "1.0", // 223914/223916 (100.00%)
				width?: number, // 223914/223916 (100.00%)
			}, // 223916/330398 (67.77%)
			reddit_video?: {
				bitrate_kbps?: number, // 106281/106482 (99.81%)
				dash_url?: string, // 106476/106482 (99.99%)
				duration?: number, // 106476/106482 (99.99%)
				fallback_url?: string, // 106476/106482 (99.99%)
				has_audio?: boolean, // 103873/106482 (97.55%)
				height: number|null,
				hls_url?: string, // 106476/106482 (99.99%)
				is_gif?: boolean, // 106476/106482 (99.99%)
				scrubber_media_url?: string, // 106476/106482 (99.99%)
				transcoding_message?: string, // 6/106482 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 106482/330398 (32.23%)
			type?: string, // 223916/330398 (67.77%)
		},
		secure_media_embed: {
			content?: string|null, // 223916/1224352 (18.29%)
			height?: number, // 223916/1224352 (18.29%)
			media_domain_url?: string, // 223916/1224352 (18.29%)
			scrolling?: boolean, // 223916/1224352 (18.29%)
			width?: number, // 223916/1224352 (18.29%)
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
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
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
		url_overridden_by_dest?: string, // 944636/1224352 (77.15%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1224545/40924291 (2.99%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 181559/40924291 (0.44%)
	downs: number,
	edited: boolean|number,
	embed_type?: null, // 181559/40924291 (0.44%)
	embed_url?: null, // 181559/40924291 (0.44%)
	events?: [], // 181559/40924291 (0.44%)
	eventsOnRender?: [], // 181559/40924291 (0.44%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Download"|"View More"|"Order Now"|"Apply Now"|"Install"|"Contact Us"|"Play Now"|"Pre-order Now"|"Watch Now"|"Get a Quote"|"See Menu"|"Get Showtimes", // 91657/14276366 (0.64%)
			caption?: string, // 11608241/14276366 (81.31%)
			display_url?: string, // 96669/14276366 (0.68%)
			id: number,
			media_id: string,
			outbound_url?: string, // 10319358/14276366 (72.28%)
			product?: {
				description: string,
				price?: string, // 39832/41377 (96.27%)
				title: string,
			}, // 41377/14276366 (0.29%)
		}[],
	}|null, // 3872974/40924291 (9.46%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 181559/40924291 (0.44%)
	id: string,
	ignore_reports?: boolean, // 1/40924291 (0.00%)
	impression_id?: null, // 181559/40924291 (0.44%)
	impression_id_str?: null, // 181559/40924291 (0.44%)
	is_blank?: boolean, // 181559/40924291 (0.44%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3872974/40924291 (9.46%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 181559/40924291 (0.44%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1026966/8939721 (11.49%)
		e: "text"|"emoji",
		t?: string, // 7912755/8939721 (88.51%)
		u?: string, // 1026966/8939721 (11.49%)
	}[],
	link_flair_template_id?: string, // 17173214/40924291 (41.96%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 233/3212119 (0.01%)
		oembed?: {
			author_name?: string, // 645439/2114457 (30.53%)
			author_url?: string, // 644692/2114457 (30.49%)
			cache_age?: number, // 12091/2114457 (0.57%)
			description?: string, // 80598/2114457 (3.81%)
			height?: number|null, // 2114255/2114457 (99.99%)
			html?: string, // 2114255/2114457 (99.99%)
			mean_alpha?: number, // 2257/2114457 (0.11%)
			provider_name?: string, // 2114255/2114457 (99.99%)
			provider_url?: string, // 2114255/2114457 (99.99%)
			thumbnail_height?: number, // 2063633/2114457 (97.60%)
			thumbnail_url?: string, // 2102359/2114457 (99.43%)
			thumbnail_width?: number, // 2063633/2114457 (97.60%)
			title?: string, // 2101846/2114457 (99.40%)
			type?: "video"|"rich", // 2114255/2114457 (99.99%)
			url?: string, // 43297/2114457 (2.05%)
			version?: "1.0", // 2114255/2114457 (99.99%)
			width?: number, // 2114255/2114457 (99.99%)
		}, // 2114457/3212119 (65.83%)
		reddit_video?: {
			bitrate_kbps?: number, // 1092721/1097429 (99.57%)
			dash_url?: string, // 1092723/1097429 (99.57%)
			duration?: number, // 1092723/1097429 (99.57%)
			fallback_url?: string, // 1092723/1097429 (99.57%)
			has_audio?: boolean, // 1092596/1097429 (99.56%)
			height: number|null,
			hls_url?: string, // 1092723/1097429 (99.57%)
			is_gif?: boolean, // 1092723/1097429 (99.57%)
			scrubber_media_url?: string, // 1092723/1097429 (99.57%)
			transcoding_message?: string, // 4706/1097429 (0.43%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1097429/3212119 (34.17%)
		type?: string, // 2114690/3212119 (65.83%)
	},
	media_embed: {
		content?: string|null, // 2089182/40924291 (5.10%)
		height?: number, // 2089182/40924291 (5.10%)
		scrolling?: boolean, // 2089182/40924291 (5.10%)
		width?: number, // 2089182/40924291 (5.10%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20418/14950209 (0.14%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 14881415/14950209 (99.54%)
			hlsUrl?: string, // 20418/14950209 (0.14%)
			id?: string, // 14881415/14950209 (99.54%)
			isGif?: boolean, // 20418/14950209 (0.14%)
			m?: "image/jpg"|"image/png"|"image/gif", // 14860997/14950209 (99.40%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6478833/14950209 (43.34%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14860997/14950209 (99.40%)
			s?: {
				gif?: string, // 238936/14860997 (1.61%)
				mp4?: string, // 238936/14860997 (1.61%)
				u?: string, // 14622061/14860997 (98.39%)
				x: number,
				y: number,
			}, // 14860997/14950209 (99.40%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 20418/14950209 (0.14%)
			y?: number, // 20418/14950209 (0.14%)
		},
	}|null, // 4367734/40924291 (10.67%)
	media_only: boolean,
	mobile_ad_url?: string, // 181559/40924291 (0.44%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 181559/40924291 (0.44%)
	outbound_link?: {
	}, // 181559/40924291 (0.44%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 19894/246378 (8.07%)
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
	}|null, // 74692/40924291 (0.18%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 20035339/40924291 (48.96%)
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
				}, // 909569/20132698 (4.52%)
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
				}, // 909569/20132698 (4.52%)
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
				}, // 11027483/20132698 (54.77%)
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
				}, // 11113005/20132698 (55.20%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1405270/1405293 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1405293/20132698 (6.98%)
	}, // 20132698/40924291 (49.19%)
	priority_id?: null, // 181559/40924291 (0.44%)
	product_ids?: [], // 181559/40924291 (0.44%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 181559/40924291 (0.44%)
	promoted?: boolean, // 181559/40924291 (0.44%)
	promoted_by?: null, // 181559/40924291 (0.44%)
	promoted_display_name?: null, // 181559/40924291 (0.44%)
	promoted_url?: null, // 181559/40924291 (0.44%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 1/40924291 (0.00%)
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 233/3212119 (0.01%)
		oembed?: {
			author_name?: string, // 645439/2114457 (30.53%)
			author_url?: string, // 644692/2114457 (30.49%)
			cache_age?: number, // 12091/2114457 (0.57%)
			description?: string, // 80598/2114457 (3.81%)
			height?: number|null, // 2114255/2114457 (99.99%)
			html?: string, // 2114255/2114457 (99.99%)
			mean_alpha?: number, // 2257/2114457 (0.11%)
			provider_name?: string, // 2114255/2114457 (99.99%)
			provider_url?: string, // 2114255/2114457 (99.99%)
			thumbnail_height?: number, // 2063633/2114457 (97.60%)
			thumbnail_url?: string, // 2102359/2114457 (99.43%)
			thumbnail_width?: number, // 2063633/2114457 (97.60%)
			title?: string, // 2101846/2114457 (99.40%)
			type?: "video"|"rich", // 2114255/2114457 (99.99%)
			url?: string, // 43297/2114457 (2.05%)
			version?: "1.0", // 2114255/2114457 (99.99%)
			width?: number, // 2114255/2114457 (99.99%)
		}, // 2114457/3212119 (65.83%)
		reddit_video?: {
			bitrate_kbps?: number, // 1092721/1097429 (99.57%)
			dash_url?: string, // 1092723/1097429 (99.57%)
			duration?: number, // 1092723/1097429 (99.57%)
			fallback_url?: string, // 1092723/1097429 (99.57%)
			has_audio?: boolean, // 1092596/1097429 (99.56%)
			height: number|null,
			hls_url?: string, // 1092723/1097429 (99.57%)
			is_gif?: boolean, // 1092723/1097429 (99.57%)
			scrubber_media_url?: string, // 1092723/1097429 (99.57%)
			transcoding_message?: string, // 4706/1097429 (0.43%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1097429/3212119 (34.17%)
		type?: string, // 2114690/3212119 (65.83%)
	},
	secure_media_embed: {
		content?: string|null, // 2089182/40924291 (5.10%)
		height?: number, // 2089182/40924291 (5.10%)
		media_domain_url?: string, // 2089182/40924291 (5.10%)
		scrolling?: boolean, // 2089182/40924291 (5.10%)
		width?: number, // 2089182/40924291 (5.10%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 181559/40924291 (0.44%)
	sk_ad_network_data?: null, // 181559/40924291 (0.44%)
	spam?: boolean, // 1/40924291 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 9352/40924291 (0.02%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 181559/40924291 (0.44%)
	third_party_tracking?: null, // 181559/40924291 (0.44%)
	third_party_tracking_2?: null, // 181559/40924291 (0.44%)
	thumbnail: string,
	thumbnail_height?: number|null, // 40923124/40924291 (100.00%)
	thumbnail_width?: number|null, // 40923124/40924291 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 2/40924291 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22550926/40924291 (55.10%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only",
	wls: null|number,
}