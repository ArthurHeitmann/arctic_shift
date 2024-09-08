interface RedditPost {
	_meta?: {
		corrupted_selftext?: string, // 1/40593341 (0.00%)
		edited_title?: string, // 196496/40593341 (0.48%)
		is_edited?: boolean, // 1574648/40593341 (3.88%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops", // 8500484/40593341 (20.94%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7760784/40593341 (19.12%)
		was_initially_deleted?: boolean, // 739700/40593341 (1.82%)
	}, // 40593341/41477291 (97.87%)
	ad_business?: null, // 222108/41477291 (0.54%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "matthew27104"|"Censorious"|"Champ_Crawdad"|"Acrobatic-Bet2860"|"hkondabeatz"|"GrabberSmurf"|"Revali993"|"The-Fourth-Hokage"|"IcyCommunication679"|"kratomburneraccount"|"WhiteWithNavy"|"Nebulous_Inferno",
		author_flair_background_color: null,
		author_flair_css_class: null|"logo",
		author_flair_richtext: [],
		author_flair_template_id: null|"a2fa6764-6564-11e4-9cec-12313d0568ea",
		author_flair_text: null|"19' Forester Premium"|"'09 XT",
		author_flair_text_color: null|"dark",
		author_flair_type: "text",
		author_fullname: "t2_ql7lj"|"t2_7yupj"|"t2_6ouq71gm"|"t2_8bwhspzd"|"t2_8g38hqow"|"t2_o8n0w18m"|"t2_8urovxrs"|"t2_4841f127"|"t2_cxd9k67h"|"t2_6hvjhzfv"|"t2_6nn45ttq"|"t2_6a525btb",
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
		domain: "self.NootropicsDepot"|"i.redd.it"|"youtu.be",
		downs: number,
		edited: boolean|number,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "1anwxa7"|"e1rr7h"|"1asjma3"|"18zdyuv"|"1c0g1gx"|"1cevruv"|"1bgud4m"|"1ciwizv"|"1c5fgw4"|"1cbszzs"|"15haxj2"|"1caiw8f",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#ff66ac"|"#82bad9"|"#00a6a5"|"#0079d3",
		link_flair_css_class: "review"|"discussion"|"stacks"|"compare"|null,
		link_flair_richtext: {
			a?: ":Review:"|":Discussion:"|":Stacks:"|":Comparison:", // 15/30 (50.00%)
			e: "text"|"emoji",
			t?: "Review "|"Discussion "|"Stacks "|"Comparison ", // 15/30 (50.00%)
			u?: string, // 15/30 (50.00%)
		}[],
		link_flair_template_id?: "b2473004-da39-11e9-a1ad-0e7bf7e2d84e"|"cd60a684-d97d-11e9-9c85-0e719a76249c"|"b8bb7f34-c281-11ec-a3a5-d26a6916fd81"|"4da73bce-d982-11e9-bd98-0e7d5d357cb4", // 15/27 (55.56%)
		link_flair_text: "Review :Review:"|"Discussion :Discussion:"|"Stacks :Stacks:"|"Comparison :Comparison:"|null,
		link_flair_text_color: "light"|"dark",
		link_flair_type: "richtext"|"text",
		locked: boolean,
		media: null|{
			oembed: {
				author_name: "Matthew Heiskell",
				author_url: "https://www.youtube.com/@MatthewHeiskell",
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
			content?: string, // 4/27 (14.81%)
			height?: number, // 4/27 (14.81%)
			scrolling?: boolean, // 4/27 (14.81%)
			width?: number, // 4/27 (14.81%)
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_1anwxa7"|"t3_e1rr7h"|"t3_1asjma3"|"t3_18zdyuv"|"t3_1c0g1gx"|"t3_1cevruv"|"t3_1bgud4m"|"t3_1ciwizv"|"t3_1c5fgw4"|"t3_1cbszzs"|"t3_15haxj2"|"t3_1caiw8f",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: null|"all_ads",
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: "27442307"|"27442308"|"27442309"|"27442310"|"27442311"|"27442312",
				text: "Shilajit"|"L-Arginine + L-Citrulline together"|"Pregnenolone"|"N-Acetyl L-Tyrosine"|"Boron Glycinate"|"Cistanche tubulosa",
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
		}, // 2/27 (7.41%)
		post_hint?: "image"|"rich:video", // 15/27 (55.56%)
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
		}, // 15/27 (55.56%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed: {
				author_name: "Matthew Heiskell",
				author_url: "https://www.youtube.com/@MatthewHeiskell",
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
			content?: string, // 4/27 (14.81%)
			height?: number, // 4/27 (14.81%)
			media_domain_url?: string, // 4/27 (14.81%)
			scrolling?: boolean, // 4/27 (14.81%)
			width?: number, // 4/27 (14.81%)
		},
		selftext: string,
		selftext_html: string|null,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allowed_media_in_comments: [],
			banner_img: string,
			banner_size: number[]|null,
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "NootropicsDepot"|"SubaruForester",
			display_name_prefixed: "r/NootropicsDepot"|"r/SubaruForester",
			free_form_reports: boolean,
			header_img: string,
			header_size: number[],
			icon_color: "",
			icon_img: string,
			icon_size: number[]|null,
			key_color: "#24a0ed"|"",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"right",
			name: "t5_39ru5"|"t5_2y78a",
			over_18: boolean,
			previous_names: [],
			primary_color: "#fef9ec"|"#00a6a5",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "",
			subreddit_type: "public",
			subscribers: number,
			title: string,
			url: "/r/NootropicsDepot/"|"/r/SubaruForester/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "NootropicsDepot"|"SubaruForester",
		subreddit_id: "t5_39ru5"|"t5_2y78a",
		subreddit_name_prefixed: "r/NootropicsDepot"|"r/SubaruForester",
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
		url_overridden_by_dest?: "https://youtu.be/UrMHHYK8Tiw"|"https://i.redd.it/pi8hyx5k5y041.jpg"|"https://i.redd.it/u0cjlu2ji0jc1.jpeg"|"https://i.redd.it/huy2jrdd1oac1.jpeg", // 15/27 (55.56%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads",
		wls: null|number,
	}[], // 222108/41477291 (0.54%)
	ad_supplementary_text_md?: null|string, // 222108/41477291 (0.54%)
	ad_user_targeting?: null, // 222108/41477291 (0.54%)
	adserver_click_url?: null, // 222108/41477291 (0.54%)
	adserver_imp_pixel?: null, // 222108/41477291 (0.54%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 222108/41477291 (0.54%)
	approved?: boolean, // 1/41477291 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 110892/41477291 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 933628/2534717 (36.83%)
		e: "text"|"emoji",
		t?: string, // 1601089/2534717 (63.17%)
		u?: string, // 933628/2534717 (36.83%)
	}[], // 40896653/41477291 (98.60%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 40896653/41477291 (98.60%)
	author_fullname?: string, // 40896653/41477291 (98.60%)
	author_id?: string|null, // 222108/41477291 (0.54%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 40896653/41477291 (98.60%)
	author_premium?: boolean, // 40896653/41477291 (98.60%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Order Now"|"Apply Now"|"Contact Us"|"Watch Now"|"Get a Quote"|"Pre-order Now"|"Get Showtimes"|"See Menu", // 123129/41477291 (0.30%)
	campaign_id?: null, // 222108/41477291 (0.54%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment"|"drawing_and_painting",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1294592/41477291 (3.12%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4283/1293887 (0.33%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 40048/109146 (36.69%)
			e: "text"|"emoji",
			t?: string, // 69098/109146 (63.31%)
			u?: string, // 40048/109146 (36.69%)
		}[], // 1281950/1293887 (99.08%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1281950/1293887 (99.08%)
		author_fullname?: string, // 1281950/1293887 (99.08%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1281950/1293887 (99.08%)
		author_premium?: boolean, // 1281950/1293887 (99.08%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"photography"|"memes"|"animals"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("photography"|"comics"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos")[],
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
				caption?: string, // 480581/1396724 (34.41%)
				id: number,
				media_id: string,
				outbound_url?: string, // 80780/1396724 (5.78%)
			}[],
		}|null, // 217124/1293887 (16.78%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 217124/1293887 (16.78%)
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
			a?: string, // 31010/216862 (14.30%)
			e: "text"|"emoji",
			t?: string, // 185852/216862 (85.70%)
			u?: string, // 31010/216862 (14.30%)
		}[],
		link_flair_template_id?: string, // 480616/1293887 (37.15%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 1/361324 (0.00%)
			oembed?: {
				author_name?: string, // 18490/244882 (7.55%)
				author_url?: string, // 18432/244882 (7.53%)
				cache_age?: number, // 1497/244882 (0.61%)
				description?: string, // 2009/244882 (0.82%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 76/244882 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 231103/244882 (94.37%)
				thumbnail_url?: string, // 243248/244882 (99.33%)
				thumbnail_width?: number, // 231103/244882 (94.37%)
				title?: string, // 243375/244882 (99.38%)
				type: "video"|"rich",
				url?: string, // 2198/244882 (0.90%)
				version: "1.0",
				width: number,
			}, // 244882/361324 (67.77%)
			reddit_video?: {
				bitrate_kbps?: number, // 116249/116441 (99.84%)
				dash_url?: string, // 116432/116441 (99.99%)
				duration?: number, // 116432/116441 (99.99%)
				fallback_url?: string, // 116432/116441 (99.99%)
				has_audio?: boolean, // 113861/116441 (97.78%)
				height: number|null,
				hls_url?: string, // 116432/116441 (99.99%)
				is_gif?: boolean, // 116432/116441 (99.99%)
				scrubber_media_url?: string, // 116432/116441 (99.99%)
				transcoding_message?: string, // 9/116441 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 116441/361324 (32.23%)
			type?: string, // 244883/361324 (67.77%)
		},
		media_embed: {
			content?: string, // 244883/1293887 (18.93%)
			height?: number, // 244883/1293887 (18.93%)
			scrolling?: boolean, // 244883/1293887 (18.93%)
			width?: number, // 244883/1293887 (18.93%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 999/1431913 (0.07%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1430868/1431913 (99.93%)
				hlsUrl?: string, // 999/1431913 (0.07%)
				id?: string, // 1430868/1431913 (99.93%)
				isGif?: boolean, // 999/1431913 (0.07%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1429869/1431913 (99.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1040987/1431913 (72.70%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1429869/1431913 (99.86%)
				s?: {
					gif?: string, // 91656/1429869 (6.41%)
					mp4?: string, // 91656/1429869 (6.41%)
					u?: string, // 1338213/1429869 (93.59%)
					x: number,
					y: number,
				}, // 1429869/1431913 (99.86%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 999/1431913 (0.07%)
				y?: number, // 999/1431913 (0.07%)
			},
		}|null, // 230945/1293887 (17.85%)
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
				vote_count?: number, // 200/6407 (3.12%)
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
		}|null, // 1641/1293887 (0.13%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 936353/1293887 (72.37%)
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
					}, // 78143/936353 (8.35%)
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
					}, // 78143/936353 (8.35%)
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
					}, // 587126/936353 (62.70%)
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
					}, // 589096/936353 (62.91%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 250552/250580 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 250580/936353 (26.76%)
		}, // 936353/1293887 (72.37%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"copyright_takedown"|"automod_filtered"|"content_takedown"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 1/361324 (0.00%)
			oembed?: {
				author_name?: string, // 18490/244882 (7.55%)
				author_url?: string, // 18432/244882 (7.53%)
				cache_age?: number, // 1497/244882 (0.61%)
				description?: string, // 2009/244882 (0.82%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 76/244882 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 231103/244882 (94.37%)
				thumbnail_url?: string, // 243248/244882 (99.33%)
				thumbnail_width?: number, // 231103/244882 (94.37%)
				title?: string, // 243375/244882 (99.38%)
				type: "video"|"rich",
				url?: string, // 2198/244882 (0.90%)
				version: "1.0",
				width: number,
			}, // 244882/361324 (67.77%)
			reddit_video?: {
				bitrate_kbps?: number, // 116249/116441 (99.84%)
				dash_url?: string, // 116432/116441 (99.99%)
				duration?: number, // 116432/116441 (99.99%)
				fallback_url?: string, // 116432/116441 (99.99%)
				has_audio?: boolean, // 113861/116441 (97.78%)
				height: number|null,
				hls_url?: string, // 116432/116441 (99.99%)
				is_gif?: boolean, // 116432/116441 (99.99%)
				scrubber_media_url?: string, // 116432/116441 (99.99%)
				transcoding_message?: string, // 9/116441 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 116441/361324 (32.23%)
			type?: string, // 244883/361324 (67.77%)
		},
		secure_media_embed: {
			content?: string, // 244883/1293887 (18.93%)
			height?: number, // 244883/1293887 (18.93%)
			media_domain_url?: string, // 244883/1293887 (18.93%)
			scrolling?: boolean, // 244883/1293887 (18.93%)
			width?: number, // 244883/1293887 (18.93%)
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
		url_overridden_by_dest?: string, // 1133154/1293887 (87.58%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1294592/41477291 (3.12%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 222108/41477291 (0.54%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 222108/41477291 (0.54%)
	embed_url?: null|"https://www.buildex.com.au/"|"https://www.itwcap.com/", // 222108/41477291 (0.54%)
	events?: [], // 222108/41477291 (0.54%)
	eventsOnRender?: [], // 222108/41477291 (0.54%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Download"|"View More"|"Sign Up"|"Install"|"Order Now"|"Contact Us"|"Apply Now"|"Watch Now"|"Play Now"|"See Menu"|"Get a Quote"|"Pre-order Now"|"Get Showtimes", // 64552/14346793 (0.45%)
			caption?: string, // 5025304/14346793 (35.03%)
			display_url?: string, // 70467/14346793 (0.49%)
			id: number,
			media_id: string,
			outbound_url?: string, // 107214/14346793 (0.75%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 11791/14346793 (0.08%)
		}[],
	}|null, // 3966950/41477291 (9.56%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 222108/41477291 (0.54%)
	id: string,
	ignore_reports?: boolean, // 1/41477291 (0.00%)
	impression_id?: null, // 222108/41477291 (0.54%)
	impression_id_str?: null, // 222108/41477291 (0.54%)
	is_blank?: boolean, // 222108/41477291 (0.54%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3966950/41477291 (9.56%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 222108/41477291 (0.54%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1000141/8961798 (11.16%)
		e: "text"|"emoji",
		t?: string, // 7961657/8961798 (88.84%)
		u?: string, // 1000141/8961798 (11.16%)
	}[],
	link_flair_template_id?: string, // 17409109/41477291 (41.97%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 444/3511020 (0.01%)
		oembed?: {
			author_name?: string, // 680635/2373793 (28.67%)
			author_url?: string, // 680013/2373793 (28.65%)
			cache_age?: number, // 11342/2373793 (0.48%)
			description?: string, // 81192/2373793 (3.42%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2345/2373793 (0.10%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2320775/2373793 (97.77%)
			thumbnail_url?: string, // 2362749/2373793 (99.53%)
			thumbnail_width?: number, // 2320775/2373793 (97.77%)
			title?: string, // 2362138/2373793 (99.51%)
			type: "video"|"rich",
			url?: string, // 42847/2373793 (1.81%)
			version: "1.0",
			width: number,
		}, // 2373793/3511020 (67.61%)
		reddit_video?: {
			bitrate_kbps?: number, // 1132109/1136783 (99.59%)
			dash_url?: string, // 1132110/1136783 (99.59%)
			duration?: number, // 1132110/1136783 (99.59%)
			fallback_url?: string, // 1132110/1136783 (99.59%)
			has_audio?: boolean, // 1132069/1136783 (99.59%)
			height: number|null,
			hls_url?: string, // 1132110/1136783 (99.59%)
			is_gif?: boolean, // 1132110/1136783 (99.59%)
			scrubber_media_url?: string, // 1132110/1136783 (99.59%)
			transcoding_message?: string, // 4673/1136783 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1136783/3511020 (32.38%)
		type?: string, // 2374237/3511020 (67.62%)
	},
	media_embed: {
		content?: string, // 2355643/41477291 (5.68%)
		height?: number, // 2355643/41477291 (5.68%)
		scrolling?: boolean, // 2355643/41477291 (5.68%)
		width?: number, // 2355643/41477291 (5.68%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 21135/15041819 (0.14%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 14966872/15041819 (99.50%)
			hlsUrl?: string, // 21135/15041819 (0.14%)
			id?: string, // 14966872/15041819 (99.50%)
			isGif?: boolean, // 21135/15041819 (0.14%)
			m?: "image/jpg"|"image/png"|"image/gif", // 14945737/15041819 (99.36%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6509308/15041819 (43.27%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14945737/15041819 (99.36%)
			s?: {
				gif?: string, // 254665/14945737 (1.70%)
				mp4?: string, // 254665/14945737 (1.70%)
				u?: string, // 14691072/14945737 (98.30%)
				x: number,
				y: number,
			}, // 14945737/15041819 (99.36%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 21135/15041819 (0.14%)
			y?: number, // 21135/15041819 (0.14%)
		},
	}|null, // 4477311/41477291 (10.79%)
	media_only: boolean,
	mobile_ad_url?: string, // 222108/41477291 (0.54%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 222108/41477291 (0.54%)
	outbound_link?: {
	}, // 222108/41477291 (0.54%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 22552/236061 (9.55%)
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
	}|null, // 72460/41477291 (0.17%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 20310117/41477291 (48.97%)
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
				}, // 887035/20370540 (4.35%)
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
				}, // 887035/20370540 (4.35%)
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
				}, // 11186680/20370540 (54.92%)
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
				}, // 11269055/20370540 (55.32%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1566287/1566315 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1566315/20370540 (7.69%)
	}, // 20370540/41477291 (49.11%)
	priority_id?: null, // 222108/41477291 (0.54%)
	product_ids?: [], // 222108/41477291 (0.54%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 222108/41477291 (0.54%)
	promoted?: boolean, // 222108/41477291 (0.54%)
	promoted_by?: null, // 222108/41477291 (0.54%)
	promoted_display_name?: null, // 222108/41477291 (0.54%)
	promoted_url?: null, // 222108/41477291 (0.54%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 1/41477291 (0.00%)
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 444/3511020 (0.01%)
		oembed?: {
			author_name?: string, // 680635/2373793 (28.67%)
			author_url?: string, // 680013/2373793 (28.65%)
			cache_age?: number, // 11342/2373793 (0.48%)
			description?: string, // 81192/2373793 (3.42%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2345/2373793 (0.10%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2320775/2373793 (97.77%)
			thumbnail_url?: string, // 2362749/2373793 (99.53%)
			thumbnail_width?: number, // 2320775/2373793 (97.77%)
			title?: string, // 2362138/2373793 (99.51%)
			type: "video"|"rich",
			url?: string, // 42847/2373793 (1.81%)
			version: "1.0",
			width: number,
		}, // 2373793/3511020 (67.61%)
		reddit_video?: {
			bitrate_kbps?: number, // 1132109/1136783 (99.59%)
			dash_url?: string, // 1132110/1136783 (99.59%)
			duration?: number, // 1132110/1136783 (99.59%)
			fallback_url?: string, // 1132110/1136783 (99.59%)
			has_audio?: boolean, // 1132069/1136783 (99.59%)
			height: number|null,
			hls_url?: string, // 1132110/1136783 (99.59%)
			is_gif?: boolean, // 1132110/1136783 (99.59%)
			scrubber_media_url?: string, // 1132110/1136783 (99.59%)
			transcoding_message?: string, // 4673/1136783 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1136783/3511020 (32.38%)
		type?: string, // 2374237/3511020 (67.62%)
	},
	secure_media_embed: {
		content?: string, // 2355643/41477291 (5.68%)
		height?: number, // 2355643/41477291 (5.68%)
		media_domain_url?: string, // 2355643/41477291 (5.68%)
		scrolling?: boolean, // 2355643/41477291 (5.68%)
		width?: number, // 2355643/41477291 (5.68%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 222108/41477291 (0.54%)
	sk_ad_network_data?: null, // 222108/41477291 (0.54%)
	spam?: boolean, // 1/41477291 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 3551/41477291 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 222108/41477291 (0.54%)
	third_party_tracking?: null, // 222108/41477291 (0.54%)
	third_party_tracking_2?: null, // 222108/41477291 (0.54%)
	thumbnail: string,
	thumbnail_height?: number|null, // 41476162/41477291 (100.00%)
	thumbnail_width?: number|null, // 41476162/41477291 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 24885289/41477291 (60.00%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only",
	wls: null|number,
}