interface RedditPost {
	_meta: {
		is_edited?: boolean, // 1046786/88380667 (1.18%)
		note?: "initially_unavailable"|"no_2nd_retrieval", // 48242432/88380667 (54.58%)
		removal_type?: "deleted"|"reddit"|"moderator"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"author"|"anti_evil_ops"|"community_ops", // 9292179/88380667 (10.51%)
		retrieved_2nd_on?: number, // 40138235/88380667 (45.42%)
		was_deleted_later?: boolean, // 8473650/88380667 (9.59%)
		was_initially_deleted?: boolean, // 818529/88380667 (0.93%)
	},
	ad_business?: null, // 273657/88380667 (0.31%)
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
				caption?: string, // 12/42 (28.57%)
				id: number,
				media_id: "hoo0fdvjnslc1"|"8dlqmlpknslc1"|"a7rdcig4qnmc1"|"tls53ig4qnmc1"|"gkzbrig4qnmc1"|"gpu8mig4qnmc1"|"d9c29ig4qnmc1",
			}[],
		}, // 12/30 (40.00%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "1b8b6hr"|"1b46sa1"|"1b7sryd"|"18np0kv"|"19fb9zq"|"19ej1fh",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 12/30 (40.00%)
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
			content?: string, // 4/30 (13.33%)
			height?: number, // 4/30 (13.33%)
			scrolling?: boolean, // 4/30 (13.33%)
			width?: number, // 4/30 (13.33%)
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
		}, // 12/30 (40.00%)
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
		post_hint?: "image"|"rich:video", // 12/30 (40.00%)
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
		}, // 12/30 (40.00%)
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
			content?: string, // 4/30 (13.33%)
			height?: number, // 4/30 (13.33%)
			media_domain_url?: string, // 4/30 (13.33%)
			scrolling?: boolean, // 4/30 (13.33%)
			width?: number, // 4/30 (13.33%)
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
		url_overridden_by_dest?: string, // 24/30 (80.00%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 273657/88380667 (0.31%)
	ad_supplementary_text_md?: null|string, // 273657/88380667 (0.31%)
	ad_user_targeting?: null, // 273657/88380667 (0.31%)
	adserver_click_url?: null, // 273657/88380667 (0.31%)
	adserver_imp_pixel?: null, // 273657/88380667 (0.31%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 273657/88380667 (0.31%)
	approved?: boolean, // 1/88380667 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 223192/88380667 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1684343/4538169 (37.12%)
		e: "text"|"emoji",
		t?: string, // 2853826/4538169 (62.88%)
		u?: string, // 1684343/4538169 (37.12%)
	}[], // 79252555/88380667 (89.67%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 79252555/88380667 (89.67%)
	author_fullname?: string, // 79252555/88380667 (89.67%)
	author_id?: string|null, // 273657/88380667 (0.31%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 79252555/88380667 (89.67%)
	author_premium?: boolean, // 79252555/88380667 (89.67%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 223269/88380667 (0.25%)
	campaign_id?: null, // 273657/88380667 (0.31%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"gaming"|"photography"|"animals"|"videos"|"food"|"music"|"funny"|""|"memes",
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
			key_color: ""|"#0dd3bb"|"#ddbd37"|"#ffb000"|"#46d160"|"#0079d3"|"#25b79f"|"#ea0027",
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
			whitelist_status: null|"all_ads",
		}, // 37/14317 (0.26%)
		subreddit_id: string,
		title: string,
	}[], // 14317/88380667 (0.02%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3015668/88380667 (3.41%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 9237/2990759 (0.31%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 84529/229493 (36.83%)
			e: "text"|"emoji",
			t?: string, // 144964/229493 (63.17%)
			u?: string, // 84529/229493 (36.83%)
		}[], // 2875696/2990759 (96.15%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 2875696/2990759 (96.15%)
		author_fullname?: string, // 2875696/2990759 (96.15%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 2875696/2990759 (96.15%)
		author_premium?: boolean, // 2875696/2990759 (96.15%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 161/2990759 (0.01%)
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
				display_name: "ClassicAJPW"|"TheOriginOfTheSongs"|"The_Guardian_Temple"|"CGLightsC",
				display_name_prefixed: "r/ClassicAJPW"|"r/TheOriginOfTheSongs"|"r/The_Guardian_Temple"|"r/CGLightsC",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#24a0ed",
				mod_permissions: [],
				name: "t5_ahxm0g"|"t5_aukdxj"|"t5_xg9hh"|"t5_9broja",
				over_18: boolean,
				primary_color: "",
				sr: "ClassicAJPW"|"TheOriginOfTheSongs"|"The_Guardian_Temple"|"CGLightsC",
				sr_display_name_prefixed: "r/ClassicAJPW"|"r/TheOriginOfTheSongs"|"r/The_Guardian_Temple"|"r/CGLightsC",
				subreddit_type: "public",
				subscribers: number,
				title: "ClassicAJPW"|"TheOriginOfTheSongs"|"The_Guardian_Temple"|"CGLightsC",
				url: "/r/ClassicAJPW/"|"/r/TheOriginOfTheSongs/"|"/r/The_Guardian_Temple/"|"/r/CGLightsC/",
				user_can_crosspost: boolean,
				whitelist_status: "all_ads"|"some_ads"|null,
			}, // 5/1147 (0.44%)
			subreddit_id: string,
			title: string,
		}[], // 1147/2990759 (0.04%)
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
				caption?: string, // 92602/2436213 (3.80%)
				id: number,
				media_id: string,
				outbound_url?: string, // 54429/2436213 (2.23%)
			}[],
		}|null, // 423359/2990759 (14.16%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 423359/2990759 (14.16%)
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
			a?: string, // 78888/491692 (16.04%)
			e: "text"|"emoji",
			t?: string, // 412804/491692 (83.96%)
			u?: string, // 78888/491692 (16.04%)
		}[],
		link_flair_template_id?: string, // 1041155/2990759 (34.81%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 2/969515 (0.00%)
			oembed?: {
				author_name?: string, // 55045/723237 (7.61%)
				author_url?: string, // 54740/723237 (7.57%)
				cache_age?: number, // 6918/723237 (0.96%)
				description?: string, // 4469/723237 (0.62%)
				height?: number|null, // 722945/723237 (99.96%)
				html?: string, // 722945/723237 (99.96%)
				mean_alpha?: number, // 123/723237 (0.02%)
				provider_name?: string, // 722945/723237 (99.96%)
				provider_url?: string, // 722945/723237 (99.96%)
				thumbnail_height?: number|null, // 674865/723237 (93.31%)
				thumbnail_url?: string, // 715468/723237 (98.93%)
				thumbnail_width?: number|null, // 674865/723237 (93.31%)
				title?: string, // 716005/723237 (99.00%)
				type?: "video"|"rich", // 722945/723237 (99.96%)
				url?: string, // 8170/723237 (1.13%)
				version?: "1.0", // 722945/723237 (99.96%)
				width?: number, // 722945/723237 (99.96%)
			}, // 723237/969515 (74.60%)
			reddit_video?: {
				bitrate_kbps?: number, // 245644/246276 (99.74%)
				dash_url?: string, // 246245/246276 (99.99%)
				duration?: number, // 246245/246276 (99.99%)
				fallback_url?: string, // 246245/246276 (99.99%)
				has_audio?: boolean, // 239524/246276 (97.26%)
				height?: number|null, // 246275/246276 (100.00%)
				hls_url?: string, // 246245/246276 (99.99%)
				is_gif?: boolean, // 246245/246276 (99.99%)
				scrubber_media_url?: string, // 246245/246276 (99.99%)
				transcoding_message?: string, // 31/246276 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 246275/246276 (100.00%)
			}, // 246276/969515 (25.40%)
			type?: string, // 723239/969515 (74.60%)
		},
		media_embed: {
			content?: string|null, // 723239/2990759 (24.18%)
			height?: number, // 723239/2990759 (24.18%)
			scrolling?: boolean, // 723239/2990759 (24.18%)
			width?: number, // 723239/2990759 (24.18%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3091/2519726 (0.12%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 2519008/2519726 (99.97%)
				hlsUrl?: string, // 3091/2519726 (0.12%)
				id?: string, // 2519008/2519726 (99.97%)
				isGif?: boolean, // 3091/2519726 (0.12%)
				m?: "image/jpg"|"image/png"|"image/gif", // 2515917/2519726 (99.85%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1799701/2519726 (71.42%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 2515917/2519726 (99.85%)
				s?: {
					gif?: string, // 91801/2515917 (3.65%)
					mp4?: string, // 91801/2515917 (3.65%)
					u?: string, // 2424116/2515917 (96.35%)
					x: number,
					y: number,
				}, // 2515917/2519726 (99.85%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 3091/2519726 (0.12%)
				y?: number, // 3091/2519726 (0.12%)
			},
		}|null, // 457673/2990759 (15.30%)
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
				vote_count?: number, // 1340/13359 (10.03%)
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
		}|null, // 3818/2990759 (0.13%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video", // 2201746/2990759 (73.62%)
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
					}, // 170324/2201746 (7.74%)
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
					}, // 170324/2201746 (7.74%)
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
					}, // 1499726/2201746 (68.12%)
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
					}, // 1504947/2201746 (68.35%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 775246/775334 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 775334/2201746 (35.21%)
		}, // 2201746/2990759 (73.62%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 2/969515 (0.00%)
			oembed?: {
				author_name?: string, // 55045/723237 (7.61%)
				author_url?: string, // 54740/723237 (7.57%)
				cache_age?: number, // 6918/723237 (0.96%)
				description?: string, // 4469/723237 (0.62%)
				height?: number|null, // 722945/723237 (99.96%)
				html?: string, // 722945/723237 (99.96%)
				mean_alpha?: number, // 123/723237 (0.02%)
				provider_name?: string, // 722945/723237 (99.96%)
				provider_url?: string, // 722945/723237 (99.96%)
				thumbnail_height?: number|null, // 674865/723237 (93.31%)
				thumbnail_url?: string, // 715468/723237 (98.93%)
				thumbnail_width?: number|null, // 674865/723237 (93.31%)
				title?: string, // 716005/723237 (99.00%)
				type?: "video"|"rich", // 722945/723237 (99.96%)
				url?: string, // 8170/723237 (1.13%)
				version?: "1.0", // 722945/723237 (99.96%)
				width?: number, // 722945/723237 (99.96%)
			}, // 723237/969515 (74.60%)
			reddit_video?: {
				bitrate_kbps?: number, // 245644/246276 (99.74%)
				dash_url?: string, // 246245/246276 (99.99%)
				duration?: number, // 246245/246276 (99.99%)
				fallback_url?: string, // 246245/246276 (99.99%)
				has_audio?: boolean, // 239524/246276 (97.26%)
				height?: number|null, // 246275/246276 (100.00%)
				hls_url?: string, // 246245/246276 (99.99%)
				is_gif?: boolean, // 246245/246276 (99.99%)
				scrubber_media_url?: string, // 246245/246276 (99.99%)
				transcoding_message?: string, // 31/246276 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 246275/246276 (100.00%)
			}, // 246276/969515 (25.40%)
			type?: string, // 723239/969515 (74.60%)
		},
		secure_media_embed: {
			content?: string|null, // 723239/2990759 (24.18%)
			height?: number, // 723239/2990759 (24.18%)
			media_domain_url?: string, // 723239/2990759 (24.18%)
			scrolling?: boolean, // 723239/2990759 (24.18%)
			width?: number, // 723239/2990759 (24.18%)
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
		url_overridden_by_dest?: string, // 2674147/2990759 (89.41%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 3015668/88380667 (3.41%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 273657/88380667 (0.31%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 273657/88380667 (0.31%)
	embed_url?: null|string, // 273657/88380667 (0.31%)
	event_end?: number, // 3/88380667 (0.00%)
	event_is_live?: boolean, // 3/88380667 (0.00%)
	event_start?: number, // 3/88380667 (0.00%)
	events?: [], // 273657/88380667 (0.31%)
	eventsOnRender?: [], // 273657/88380667 (0.31%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Order Now"|"Install"|"Apply Now"|"Contact Us"|"Watch Now"|"Play Now"|"Get a Quote"|"See Menu"|"Get Showtimes"|"Pre-order Now", // 173672/26207237 (0.66%)
			caption?: string, // 734426/26207237 (2.80%)
			display_url?: string, // 182569/26207237 (0.70%)
			id: number,
			media_id: string,
			outbound_url?: string, // 373800/26207237 (1.43%)
			product?: {
				description: string,
				price?: string, // 74464/78221 (95.20%)
				title: string,
			}, // 78221/26207237 (0.30%)
		}[],
	}|null, // 7915970/88380667 (8.96%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 273657/88380667 (0.31%)
	id: string,
	ignore_reports?: boolean, // 1/88380667 (0.00%)
	impression_id?: null, // 273657/88380667 (0.31%)
	impression_id_str?: null, // 273657/88380667 (0.31%)
	is_blank?: boolean, // 273657/88380667 (0.31%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 7915970/88380667 (8.96%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 273657/88380667 (0.31%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1949676/17810847 (10.95%)
		e: "text"|"emoji",
		t?: string, // 15861171/17810847 (89.05%)
		u?: string, // 1949676/17810847 (10.95%)
	}[],
	link_flair_template_id?: string, // 34381359/88380667 (38.90%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 457/7572676 (0.01%)
		oembed?: {
			author_name?: string, // 1595882/5309538 (30.06%)
			author_url?: string, // 1592773/5309538 (30.00%)
			cache_age?: number, // 87328/5309538 (1.64%)
			description?: string, // 183456/5309538 (3.46%)
			height?: number|null, // 5306592/5309538 (99.94%)
			html?: string, // 5306592/5309538 (99.94%)
			mean_alpha?: number, // 5851/5309538 (0.11%)
			provider_name?: string, // 5306592/5309538 (99.94%)
			provider_url?: string, // 5306592/5309538 (99.94%)
			thumbnail_height?: number|null, // 5080860/5309538 (95.69%)
			thumbnail_url?: string, // 5219771/5309538 (98.31%)
			thumbnail_width?: number|null, // 5080860/5309538 (95.69%)
			title?: string, // 5219420/5309538 (98.30%)
			type?: "video"|"rich", // 5306592/5309538 (99.94%)
			url?: string, // 144809/5309538 (2.73%)
			version?: "1.0", // 5306592/5309538 (99.94%)
			width?: number, // 5306592/5309538 (99.94%)
		}, // 5309538/7572676 (70.11%)
		reddit_video?: {
			bitrate_kbps?: number, // 2254029/2262681 (99.62%)
			dash_url?: string, // 2254029/2262681 (99.62%)
			duration?: number, // 2254029/2262681 (99.62%)
			fallback_url?: string, // 2254029/2262681 (99.62%)
			has_audio?: boolean, // 2250986/2262681 (99.48%)
			height?: number|null, // 2262105/2262681 (99.97%)
			hls_url?: string, // 2254029/2262681 (99.62%)
			is_gif?: boolean, // 2254029/2262681 (99.62%)
			scrubber_media_url?: string, // 2254029/2262681 (99.62%)
			transcoding_message?: string, // 8652/2262681 (0.38%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 2262105/2262681 (99.97%)
		}, // 2262681/7572676 (29.88%)
		type?: string, // 5309995/7572676 (70.12%)
	},
	media_embed: {
		content?: string|null, // 5309995/88380667 (6.01%)
		height?: number, // 5309995/88380667 (6.01%)
		scrolling?: boolean, // 5309995/88380667 (6.01%)
		width?: number, // 5309995/88380667 (6.01%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 46556/27481071 (0.17%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 27416574/27481071 (99.77%)
			hlsUrl?: string, // 46556/27481071 (0.17%)
			id?: string, // 27416574/27481071 (99.77%)
			isGif?: boolean, // 46556/27481071 (0.17%)
			m?: "image/jpg"|"image/png"|"image/gif", // 27370018/27481071 (99.60%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 11885213/27481071 (43.25%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 27370018/27481071 (99.60%)
			s?: {
				gif?: string, // 349784/27370018 (1.28%)
				mp4?: string, // 349784/27370018 (1.28%)
				u?: string, // 27020234/27370018 (98.72%)
				x: number,
				y: number,
			}, // 27370018/27481071 (99.60%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 46556/27481071 (0.17%)
			y?: number, // 46556/27481071 (0.17%)
		},
	}|null, // 8929983/88380667 (10.10%)
	media_only: boolean,
	mobile_ad_url?: string, // 273657/88380667 (0.31%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 273657/88380667 (0.31%)
	outbound_link?: {
	}, // 273657/88380667 (0.31%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 51602/565348 (9.13%)
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
	}|null, // 204422/88380667 (0.23%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"gallery"|"video", // 36510661/88380667 (41.31%)
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
				}, // 1989257/36510661 (5.45%)
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
				}, // 1989257/36510661 (5.45%)
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
				}, // 19710920/36510661 (53.99%)
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
				}, // 19865986/36510661 (54.41%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2995320/2995427 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 2995427/36510661 (8.20%)
	}, // 36510661/88380667 (41.31%)
	priority_id?: null, // 273657/88380667 (0.31%)
	product_ids?: [], // 273657/88380667 (0.31%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 273657/88380667 (0.31%)
	promoted?: boolean, // 273657/88380667 (0.31%)
	promoted_by?: null, // 273657/88380667 (0.31%)
	promoted_display_name?: null, // 273657/88380667 (0.31%)
	promoted_url?: null, // 273657/88380667 (0.31%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 1/88380667 (0.00%)
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown", // 2/88380667 (0.00%)
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 457/7572676 (0.01%)
		oembed?: {
			author_name?: string, // 1595882/5309538 (30.06%)
			author_url?: string, // 1592773/5309538 (30.00%)
			cache_age?: number, // 87328/5309538 (1.64%)
			description?: string, // 183456/5309538 (3.46%)
			height?: number|null, // 5306592/5309538 (99.94%)
			html?: string, // 5306592/5309538 (99.94%)
			mean_alpha?: number, // 5851/5309538 (0.11%)
			provider_name?: string, // 5306592/5309538 (99.94%)
			provider_url?: string, // 5306592/5309538 (99.94%)
			thumbnail_height?: number|null, // 5080860/5309538 (95.69%)
			thumbnail_url?: string, // 5219771/5309538 (98.31%)
			thumbnail_width?: number|null, // 5080860/5309538 (95.69%)
			title?: string, // 5219420/5309538 (98.30%)
			type?: "video"|"rich", // 5306592/5309538 (99.94%)
			url?: string, // 144809/5309538 (2.73%)
			version?: "1.0", // 5306592/5309538 (99.94%)
			width?: number, // 5306592/5309538 (99.94%)
		}, // 5309538/7572676 (70.11%)
		reddit_video?: {
			bitrate_kbps?: number, // 2254029/2262681 (99.62%)
			dash_url?: string, // 2254029/2262681 (99.62%)
			duration?: number, // 2254029/2262681 (99.62%)
			fallback_url?: string, // 2254029/2262681 (99.62%)
			has_audio?: boolean, // 2250986/2262681 (99.48%)
			height?: number|null, // 2262105/2262681 (99.97%)
			hls_url?: string, // 2254029/2262681 (99.62%)
			is_gif?: boolean, // 2254029/2262681 (99.62%)
			scrubber_media_url?: string, // 2254029/2262681 (99.62%)
			transcoding_message?: string, // 8652/2262681 (0.38%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 2262105/2262681 (99.97%)
		}, // 2262681/7572676 (29.88%)
		type?: string, // 5309995/7572676 (70.12%)
	},
	secure_media_embed: {
		content?: string|null, // 5309995/88380667 (6.01%)
		height?: number, // 5309995/88380667 (6.01%)
		media_domain_url?: string, // 5309995/88380667 (6.01%)
		scrolling?: boolean, // 5309995/88380667 (6.01%)
		width?: number, // 5309995/88380667 (6.01%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 273657/88380667 (0.31%)
	sk_ad_network_data?: null, // 273657/88380667 (0.31%)
	spam?: boolean, // 1/88380667 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 9275/88380667 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 273657/88380667 (0.31%)
	third_party_tracking?: null, // 273657/88380667 (0.31%)
	third_party_tracking_2?: null, // 273657/88380667 (0.31%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 88379690/88380667 (100.00%)
	thumbnail_width?: number|null, // 88379690/88380667 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 5/88380667 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 52581876/88380667 (59.49%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}