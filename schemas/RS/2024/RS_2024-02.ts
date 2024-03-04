interface RedditPost {
	_meta: {
		is_edited?: boolean, // 985490/39026336 (2.53%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 1716421/39026336 (4.40%)
		removal_type?: "deleted"|"reddit"|"moderator"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops", // 8415326/39026336 (21.56%)
		retrieved_2nd_on?: number, // 37309915/39026336 (95.60%)
		was_deleted_later?: boolean, // 7722141/39026336 (19.79%)
		was_initially_deleted?: boolean, // 693185/39026336 (1.78%)
	},
	ad_business?: null, // 103658/39026336 (0.27%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "Foobibby"|"Alone_Policy2132"|"Expensive-Cupcake150"|"furtherdimensions"|"Itchy-Asparagus-3304"|"Consistent-Reach504"|"thattallpaligirl"|"Hello_____Sunshine"|"ladyladdox",
		author_flair_background_color: null,
		author_flair_css_class: null,
		author_flair_richtext: [],
		author_flair_template_id: null,
		author_flair_text: null,
		author_flair_text_color: null,
		author_flair_type: "text",
		author_fullname: "t2_137jzh"|"t2_cn19yyw0"|"t2_mgiyskly8"|"t2_392t1zle"|"t2_d9lrcq1w"|"t2_nq96atxo"|"t2_o10afazbg"|"t2_nun7ug17k"|"t2_4mqbp5i4",
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
		domain: "self.dataannotation"|"i.redd.it",
		downs: number,
		edited: boolean|number,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "17pztjf"|"17la3sz"|"17np90j"|"17l1ete"|"18pvpq6"|"17f1yxa"|"1armmrx"|"1amdr9o"|"1ai2079",
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
		link_flair_css_class: null|"two",
		link_flair_richtext: {
			e: "text",
			t: "Haul",
		}[],
		link_flair_template_id?: "e7588e1e-5990-11e6-b602-0e587fe1a7db", // 6/18 (33.33%)
		link_flair_text: null|"Haul",
		link_flair_text_color: "dark",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null,
		media_embed: {
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_17pztjf"|"t3_17la3sz"|"t3_17np90j"|"t3_17l1ete"|"t3_18pvpq6"|"t3_17f1yxa"|"t3_1armmrx"|"t3_1amdr9o"|"t3_1ai2079",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image", // 6/18 (33.33%)
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
		}, // 6/18 (33.33%)
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
		selftext_html: string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allowed_media_in_comments: ("giphy"|"static"|"animated"|"expression")[],
			banner_img: "",
			banner_size: null,
			community_icon: null,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "dataannotation"|"Ulta",
			display_name_prefixed: "r/dataannotation"|"r/Ulta",
			free_form_reports: boolean,
			header_img: null|string,
			header_size: null|number[],
			icon_color: "",
			icon_img: "",
			icon_size: null,
			key_color: ""|"#ff8717",
			link_flair_enabled: boolean,
			link_flair_position: ""|"left",
			name: "t5_2fd34i"|"t5_30vvl",
			over_18: boolean,
			previous_names: [],
			primary_color: "",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "",
			subreddit_type: "public",
			subscribers: number,
			title: "dataannotation"|"Unofficial subreddit for Ulta Beauty",
			url: "/r/dataannotation/"|"/r/Ulta/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "dataannotation"|"Ulta",
		subreddit_id: "t5_2fd34i"|"t5_30vvl",
		subreddit_name_prefixed: "r/dataannotation"|"r/Ulta",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null,
		thumbnail: string,
		thumbnail_height: null|number,
		thumbnail_width: null|number,
		title: "Two weeks in and absolutely loving this"|"1 week in, I’m addicted and loving it!"|"What does this job mean to you?"|"DA timeline - an update"|"Highest Pay?"|"New? Ask questions here!"|"BIG Ulta Point Haul!!"|"Favorite Haul Ever!"|"10X lippie Haul",
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: "https://i.redd.it/3jcoe53ensic1.jpeg"|"https://i.redd.it/dgza8pi74hhc1.jpeg"|"https://i.redd.it/xq0tzimftegc1.jpeg", // 6/18 (33.33%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 103658/39026336 (0.27%)
	ad_supplementary_text_md?: null|string, // 103658/39026336 (0.27%)
	ad_user_targeting?: null, // 103658/39026336 (0.27%)
	adserver_click_url?: null, // 103658/39026336 (0.27%)
	adserver_imp_pixel?: null, // 103658/39026336 (0.27%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 103658/39026336 (0.27%)
	approved?: boolean, // 1/39026336 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 97542/39026336 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 771851/2083377 (37.05%)
		e: "text"|"emoji",
		t?: string, // 1311526/2083377 (62.95%)
		u?: string, // 771851/2083377 (37.05%)
	}[], // 38646702/39026336 (99.03%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 38646702/39026336 (99.03%)
	author_fullname?: string, // 38646702/39026336 (99.03%)
	author_id?: string|null, // 103658/39026336 (0.27%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 38646702/39026336 (99.03%)
	author_premium?: boolean, // 38646702/39026336 (99.03%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Apply Now"|"Order Now"|"Watch Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"Pre-order Now"|"See Menu", // 83910/39026336 (0.22%)
	campaign_id?: null, // 103658/39026336 (0.27%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"photography"|"animals"|""|"videos",
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
			key_color: ""|"#ea0027"|"#545452"|"#24a0ed"|"#46d160"|"#7e53c1",
			mod_permissions: [],
			name: string,
			over_18: boolean,
			primary_color: ""|"#373c3f"|"#b8001f"|"#edeff1"|"#003ca3"|"#ddbd37"|"#923232"|"#bbbdbf"|"#f00505"|"#ffd635"|"#cf9cf5"|"#7a28d7"|"#cc3600"|"#cc2030",
			sr: string,
			sr_display_name_prefixed: string,
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: string,
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads",
		}, // 46/7941 (0.58%)
		subreddit_id: string,
		title: string,
	}[], // 7941/39026336 (0.02%)
	content_categories: null|("drawing_and_painting"|"gaming"|"diy_and_crafts"|"photography"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1288935/39026336 (3.30%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3650/1287621 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 41023/113895 (36.02%)
			e: "text"|"emoji",
			t?: string, // 72872/113895 (63.98%)
			u?: string, // 41023/113895 (36.02%)
		}[], // 1275020/1287621 (99.02%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1275020/1287621 (99.02%)
		author_fullname?: string, // 1275020/1287621 (99.02%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1275020/1287621 (99.02%)
		author_premium?: boolean, // 1275020/1287621 (99.02%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 562/1287621 (0.04%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"animals"|"drawing_and_painting"|"photography",
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
				banner_img: "",
				banner_size: null,
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: "trueearthscience"|"lisa"|"POROSOSVODKA",
				display_name_prefixed: "r/trueearthscience"|"r/lisa"|"r/POROSOSVODKA",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_9qx9h6"|"t5_2qpri"|"t5_arczhq",
				over_18: boolean,
				primary_color: "#6b6031"|"#e1f0f7"|"",
				sr: "trueearthscience"|"lisa"|"POROSOSVODKA",
				sr_display_name_prefixed: "r/trueearthscience"|"r/lisa"|"r/POROSOSVODKA",
				subreddit_type: "public"|"restricted",
				subscribers: number,
				title: "trueearthscience"|"LiSA"|"POROSOSVODKA",
				url: "/r/trueearthscience/"|"/r/lisa/"|"/r/POROSOSVODKA/",
				user_can_crosspost: boolean,
				whitelist_status: null|"all_ads",
			}, // 3/471 (0.64%)
			subreddit_id: string,
			title: string,
		}[], // 471/1287621 (0.04%)
		content_categories: null|("photography"|"writing"|"drawing_and_painting"|"comics"|"gaming"|"diy_and_crafts"|"entertainment"|"music"|"videos")[],
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
				caption?: string, // 48672/1191032 (4.09%)
				id: number,
				media_id: string,
				outbound_url?: string, // 25305/1191032 (2.12%)
			}[],
		}|null, // 187295/1287621 (14.55%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 187295/1287621 (14.55%)
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
			a?: string, // 33230/227082 (14.63%)
			e: "text"|"emoji",
			t?: string, // 193852/227082 (85.37%)
			u?: string, // 33230/227082 (14.63%)
		}[],
		link_flair_template_id?: string, // 466594/1287621 (36.24%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "1bsso361afr0r"|"18hnzysb1elcs", // 2/382412 (0.00%)
			oembed?: {
				author_name?: string, // 27912/275009 (10.15%)
				author_url?: string, // 27717/275009 (10.08%)
				cache_age?: number, // 5063/275009 (1.84%)
				description?: string, // 2141/275009 (0.78%)
				height?: number|null, // 275002/275009 (100.00%)
				html?: string, // 275002/275009 (100.00%)
				mean_alpha?: number, // 57/275009 (0.02%)
				provider_name?: string, // 275002/275009 (100.00%)
				provider_url?: string, // 275002/275009 (100.00%)
				thumbnail_height?: number|null, // 262144/275009 (95.32%)
				thumbnail_url?: string, // 269747/275009 (98.09%)
				thumbnail_width?: number|null, // 262144/275009 (95.32%)
				title?: string, // 269911/275009 (98.15%)
				type?: "video"|"rich", // 275002/275009 (100.00%)
				url?: string, // 5724/275009 (2.08%)
				version?: "1.0", // 275002/275009 (100.00%)
				width?: number, // 275002/275009 (100.00%)
			}, // 275009/382412 (71.91%)
			reddit_video?: {
				bitrate_kbps?: number, // 107134/107401 (99.75%)
				dash_url?: string, // 107385/107401 (99.99%)
				duration?: number, // 107385/107401 (99.99%)
				fallback_url?: string, // 107385/107401 (99.99%)
				has_audio?: boolean, // 103940/107401 (96.78%)
				height?: number|null, // 107395/107401 (99.99%)
				hls_url?: string, // 107385/107401 (99.99%)
				is_gif?: boolean, // 107385/107401 (99.99%)
				scrubber_media_url?: string, // 107385/107401 (99.99%)
				transcoding_message?: string, // 16/107401 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 107395/107401 (99.99%)
			}, // 107401/382412 (28.09%)
			type?: string, // 275011/382412 (71.91%)
		},
		media_embed: {
			content?: string|null, // 275011/1287621 (21.36%)
			height?: number, // 275011/1287621 (21.36%)
			scrolling?: boolean, // 275011/1287621 (21.36%)
			width?: number, // 275011/1287621 (21.36%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1161/1231235 (0.09%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1230487/1231235 (99.94%)
				hlsUrl?: string, // 1161/1231235 (0.09%)
				id?: string, // 1230487/1231235 (99.94%)
				isGif?: boolean, // 1161/1231235 (0.09%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1229326/1231235 (99.84%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 884769/1231235 (71.86%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1229326/1231235 (99.84%)
				s?: {
					gif?: string, // 57667/1229326 (4.69%)
					mp4?: string, // 57667/1229326 (4.69%)
					u?: string, // 1171659/1229326 (95.31%)
					x: number,
					y: number,
				}, // 1229326/1231235 (99.84%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1161/1231235 (0.09%)
				y?: number, // 1161/1231235 (0.09%)
			},
		}|null, // 204367/1287621 (15.87%)
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
				vote_count?: number, // 314/6689 (4.69%)
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
		}|null, // 1798/1287621 (0.14%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video", // 949234/1287621 (73.72%)
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
					}, // 75021/949234 (7.90%)
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
					}, // 75021/949234 (7.90%)
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
					}, // 607819/949234 (64.03%)
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
					}, // 609977/949234 (64.26%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 286890/286920 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 286920/949234 (30.23%)
		}, // 949234/1287621 (73.72%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"deleted"|"reddit"|"copyright_takedown"|"content_takedown"|"author"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "1bsso361afr0r"|"18hnzysb1elcs", // 2/382412 (0.00%)
			oembed?: {
				author_name?: string, // 27912/275009 (10.15%)
				author_url?: string, // 27717/275009 (10.08%)
				cache_age?: number, // 5063/275009 (1.84%)
				description?: string, // 2141/275009 (0.78%)
				height?: number|null, // 275002/275009 (100.00%)
				html?: string, // 275002/275009 (100.00%)
				mean_alpha?: number, // 57/275009 (0.02%)
				provider_name?: string, // 275002/275009 (100.00%)
				provider_url?: string, // 275002/275009 (100.00%)
				thumbnail_height?: number|null, // 262144/275009 (95.32%)
				thumbnail_url?: string, // 269747/275009 (98.09%)
				thumbnail_width?: number|null, // 262144/275009 (95.32%)
				title?: string, // 269911/275009 (98.15%)
				type?: "video"|"rich", // 275002/275009 (100.00%)
				url?: string, // 5724/275009 (2.08%)
				version?: "1.0", // 275002/275009 (100.00%)
				width?: number, // 275002/275009 (100.00%)
			}, // 275009/382412 (71.91%)
			reddit_video?: {
				bitrate_kbps?: number, // 107134/107401 (99.75%)
				dash_url?: string, // 107385/107401 (99.99%)
				duration?: number, // 107385/107401 (99.99%)
				fallback_url?: string, // 107385/107401 (99.99%)
				has_audio?: boolean, // 103940/107401 (96.78%)
				height?: number|null, // 107395/107401 (99.99%)
				hls_url?: string, // 107385/107401 (99.99%)
				is_gif?: boolean, // 107385/107401 (99.99%)
				scrubber_media_url?: string, // 107385/107401 (99.99%)
				transcoding_message?: string, // 16/107401 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 107395/107401 (99.99%)
			}, // 107401/382412 (28.09%)
			type?: string, // 275011/382412 (71.91%)
		},
		secure_media_embed: {
			content?: string|null, // 275011/1287621 (21.36%)
			height?: number, // 275011/1287621 (21.36%)
			media_domain_url?: string, // 275011/1287621 (21.36%)
			scrolling?: boolean, // 275011/1287621 (21.36%)
			width?: number, // 275011/1287621 (21.36%)
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
		url_overridden_by_dest?: string, // 1121037/1287621 (87.06%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1288935/39026336 (3.30%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 103658/39026336 (0.27%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 103658/39026336 (0.27%)
	embed_url?: null|string, // 103658/39026336 (0.27%)
	events?: [], // 103658/39026336 (0.27%)
	eventsOnRender?: [], // 103658/39026336 (0.27%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Order Now"|"Play Now"|"Install"|"Apply Now"|"Contact Us"|"Get a Quote"|"Watch Now"|"Get Showtimes"|"Pre-order Now"|"See Menu", // 54695/12886709 (0.42%)
			caption?: string, // 324877/12886709 (2.52%)
			display_url?: string, // 57821/12886709 (0.45%)
			id: number,
			media_id: string,
			outbound_url?: string, // 141991/12886709 (1.10%)
			product?: {
				description: string,
				price?: string, // 16821/17517 (96.03%)
				title: string,
			}, // 17517/12886709 (0.14%)
		}[],
	}|null, // 3399855/39026336 (8.71%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 103658/39026336 (0.27%)
	id: string,
	ignore_reports?: boolean, // 1/39026336 (0.00%)
	impression_id?: null, // 103658/39026336 (0.27%)
	impression_id_str?: null, // 103658/39026336 (0.27%)
	is_blank?: boolean, // 103658/39026336 (0.27%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3399855/39026336 (8.71%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 103658/39026336 (0.27%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 840346/7635265 (11.01%)
		e: "text"|"emoji",
		t?: string, // 6794919/7635265 (88.99%)
		u?: string, // 840346/7635265 (11.01%)
	}[],
	link_flair_template_id?: string, // 14866719/39026336 (38.09%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 409/3418239 (0.01%)
		oembed?: {
			author_name?: string, // 728142/2399961 (30.34%)
			author_url?: string, // 726649/2399961 (30.28%)
			cache_age?: number, // 39543/2399961 (1.65%)
			description?: string, // 78068/2399961 (3.25%)
			height?: number|null, // 2398775/2399961 (99.95%)
			html?: string, // 2398775/2399961 (99.95%)
			mean_alpha?: number, // 2432/2399961 (0.10%)
			provider_name?: string, // 2398775/2399961 (99.95%)
			provider_url?: string, // 2398775/2399961 (99.95%)
			thumbnail_height?: number|null, // 2321405/2399961 (96.73%)
			thumbnail_url?: string, // 2359430/2399961 (98.31%)
			thumbnail_width?: number|null, // 2321405/2399961 (96.73%)
			title?: string, // 2359264/2399961 (98.30%)
			type?: "video"|"rich", // 2398775/2399961 (99.95%)
			url?: string, // 69925/2399961 (2.91%)
			version?: "1.0", // 2398775/2399961 (99.95%)
			width?: number, // 2398775/2399961 (99.95%)
		}, // 2399961/3418239 (70.21%)
		reddit_video?: {
			bitrate_kbps?: number, // 1014068/1017869 (99.63%)
			dash_url?: string, // 1014071/1017869 (99.63%)
			duration?: number, // 1014071/1017869 (99.63%)
			fallback_url?: string, // 1014071/1017869 (99.63%)
			has_audio?: boolean, // 1013237/1017869 (99.54%)
			height?: number|null, // 1016264/1017869 (99.84%)
			hls_url?: string, // 1014071/1017869 (99.63%)
			is_gif?: boolean, // 1014071/1017869 (99.63%)
			scrubber_media_url?: string, // 1014071/1017869 (99.63%)
			transcoding_message?: string, // 3798/1017869 (0.37%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1016264/1017869 (99.84%)
		}, // 1017869/3418239 (29.78%)
		type?: string, // 2400370/3418239 (70.22%)
	},
	media_embed: {
		content?: string|null, // 2400370/39026336 (6.15%)
		height?: number, // 2400370/39026336 (6.15%)
		scrolling?: boolean, // 2400370/39026336 (6.15%)
		width?: number, // 2400370/39026336 (6.15%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 19340/13476625 (0.14%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 13423945/13476625 (99.61%)
			hlsUrl?: string, // 19340/13476625 (0.14%)
			id?: string, // 13423945/13476625 (99.61%)
			isGif?: boolean, // 19340/13476625 (0.14%)
			m?: "image/jpg"|"image/png"|"image/gif", // 13404605/13476625 (99.47%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6257493/13476625 (46.43%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 13404605/13476625 (99.47%)
			s?: {
				gif?: string, // 180659/13404605 (1.35%)
				mp4?: string, // 180659/13404605 (1.35%)
				u?: string, // 13223946/13404605 (98.65%)
				x: number,
				y: number,
			}, // 13404605/13476625 (99.47%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 19340/13476625 (0.14%)
			y?: number, // 19340/13476625 (0.14%)
		},
	}|null, // 3839696/39026336 (9.84%)
	media_only: boolean,
	mobile_ad_url?: string, // 103658/39026336 (0.27%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 103658/39026336 (0.27%)
	outbound_link?: {
	}, // 103658/39026336 (0.27%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 21831/250587 (8.71%)
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
	}|null, // 91022/39026336 (0.23%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 19809084/39026336 (50.76%)
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
				}, // 1233959/19809084 (6.23%)
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
				}, // 1233959/19809084 (6.23%)
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
				}, // 11101341/19809084 (56.04%)
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
				}, // 11176258/19809084 (56.42%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1570525/1570562 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1570562/19809084 (7.93%)
	}, // 19809084/39026336 (50.76%)
	priority_id?: null, // 103658/39026336 (0.27%)
	product_ids?: [], // 103658/39026336 (0.27%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 103658/39026336 (0.27%)
	promoted?: boolean, // 103658/39026336 (0.27%)
	promoted_by?: null, // 103658/39026336 (0.27%)
	promoted_display_name?: null, // 103658/39026336 (0.27%)
	promoted_url?: null, // 103658/39026336 (0.27%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 1/39026336 (0.00%)
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown", // 1/39026336 (0.00%)
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 409/3418239 (0.01%)
		oembed?: {
			author_name?: string, // 728142/2399961 (30.34%)
			author_url?: string, // 726649/2399961 (30.28%)
			cache_age?: number, // 39543/2399961 (1.65%)
			description?: string, // 78068/2399961 (3.25%)
			height?: number|null, // 2398775/2399961 (99.95%)
			html?: string, // 2398775/2399961 (99.95%)
			mean_alpha?: number, // 2432/2399961 (0.10%)
			provider_name?: string, // 2398775/2399961 (99.95%)
			provider_url?: string, // 2398775/2399961 (99.95%)
			thumbnail_height?: number|null, // 2321405/2399961 (96.73%)
			thumbnail_url?: string, // 2359430/2399961 (98.31%)
			thumbnail_width?: number|null, // 2321405/2399961 (96.73%)
			title?: string, // 2359264/2399961 (98.30%)
			type?: "video"|"rich", // 2398775/2399961 (99.95%)
			url?: string, // 69925/2399961 (2.91%)
			version?: "1.0", // 2398775/2399961 (99.95%)
			width?: number, // 2398775/2399961 (99.95%)
		}, // 2399961/3418239 (70.21%)
		reddit_video?: {
			bitrate_kbps?: number, // 1014068/1017869 (99.63%)
			dash_url?: string, // 1014071/1017869 (99.63%)
			duration?: number, // 1014071/1017869 (99.63%)
			fallback_url?: string, // 1014071/1017869 (99.63%)
			has_audio?: boolean, // 1013237/1017869 (99.54%)
			height?: number|null, // 1016264/1017869 (99.84%)
			hls_url?: string, // 1014071/1017869 (99.63%)
			is_gif?: boolean, // 1014071/1017869 (99.63%)
			scrubber_media_url?: string, // 1014071/1017869 (99.63%)
			transcoding_message?: string, // 3798/1017869 (0.37%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1016264/1017869 (99.84%)
		}, // 1017869/3418239 (29.78%)
		type?: string, // 2400370/3418239 (70.22%)
	},
	secure_media_embed: {
		content?: string|null, // 2400370/39026336 (6.15%)
		height?: number, // 2400370/39026336 (6.15%)
		media_domain_url?: string, // 2400370/39026336 (6.15%)
		scrolling?: boolean, // 2400370/39026336 (6.15%)
		width?: number, // 2400370/39026336 (6.15%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 103658/39026336 (0.27%)
	sk_ad_network_data?: null, // 103658/39026336 (0.27%)
	spam?: boolean, // 1/39026336 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 1681/39026336 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 103658/39026336 (0.27%)
	third_party_tracking?: null, // 103658/39026336 (0.27%)
	third_party_tracking_2?: null, // 103658/39026336 (0.27%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 39025822/39026336 (100.00%)
	thumbnail_width?: number|null, // 39025822/39026336 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 3/39026336 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23357899/39026336 (59.85%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}