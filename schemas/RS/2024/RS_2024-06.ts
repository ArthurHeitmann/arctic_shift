interface RedditPost {
	_meta?: {
		edited_title?: string, // 152266/37451985 (0.41%)
		is_edited?: boolean, // 1447948/37451985 (3.87%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops", // 8011223/37451985 (21.39%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7258529/37451985 (19.38%)
		was_initially_deleted?: boolean, // 752694/37451985 (2.01%)
	}, // 37451985/38423968 (97.47%)
	ad_business?: null, // 172522/38423968 (0.45%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "ankhattak"|"Ok-Date-1668"|"Suspicious-advice49"|"Moparati"|"hov818"|"stardripIVs"|"Unhappy_Host"|"RayDaMan1",
		author_flair_background_color: null|"#0c173e",
		author_flair_css_class: null,
		author_flair_richtext: {
			e: "text",
			t: "Founder & CEO 🚀",
		}[],
		author_flair_template_id: null|"59ced398-7db5-11eb-9849-0edbd6a93433",
		author_flair_text: null|"Founder & CEO 🚀",
		author_flair_text_color: null|"light",
		author_flair_type: "text"|"richtext",
		author_fullname: "t2_36gs305q"|"t2_eug4cwea"|"t2_h8xwzajht"|"t2_16ieev"|"t2_4dn9thtd"|"t2_6wj2mjea"|"t2_4683idht"|"t2_f06jmove",
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
		domain: "self.USMobile"|"i.redd.it",
		downs: number,
		edited: boolean|number,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "1bl7qf4"|"1cjn4qa"|"1cfndjr"|"1cmjlmf"|"1c35zti"|"1c51vgx"|"1bzw8q8"|"1c9zz60"|"1c6rj0g",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "#58c2fd"|""|"#50caad",
		link_flair_css_class: ""|null,
		link_flair_richtext: {
			e: "text",
			t: "Feedback 🙂"|"Announcement 📢",
		}[],
		link_flair_template_id?: "af2706e6-ced0-11eb-b55c-0eb702d2e607"|"ea444ad4-7c93-11eb-ab9e-0e62976efc8f", // 6/9 (66.67%)
		link_flair_text: "Feedback 🙂"|"Announcement 📢"|null,
		link_flair_text_color: "dark"|null,
		link_flair_type: "richtext"|"text",
		locked: boolean,
		media: null,
		media_embed: {
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "9h2duo85xayc1",
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
		}, // 1/9 (11.11%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_1bl7qf4"|"t3_1cjn4qa"|"t3_1cfndjr"|"t3_1cmjlmf"|"t3_1c35zti"|"t3_1c51vgx"|"t3_1bzw8q8"|"t3_1c9zz60"|"t3_1c6rj0g",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"self", // 3/9 (33.33%)
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
		}, // 3/9 (33.33%)
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
		selftext_html: string|null,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allowed_media_in_comments: ("giphy"|"static"|"animated"|"expression")[],
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: "",
			disable_contributor_requests: boolean,
			display_name: "USMobile",
			display_name_prefixed: "r/USMobile",
			free_form_reports: boolean,
			header_img: null,
			header_size: null,
			icon_color: "",
			icon_img: "",
			icon_size: null,
			key_color: "",
			link_flair_enabled: boolean,
			link_flair_position: "right",
			name: "t5_3c9au",
			over_18: boolean,
			previous_names: [],
			primary_color: "#0c173e",
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
			url: "/r/USMobile/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "USMobile",
		subreddit_id: "t5_3c9au",
		subreddit_name_prefixed: "r/USMobile",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: "top",
		thumbnail: string,
		thumbnail_height: null|number,
		thumbnail_width: null|number,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: "https://i.redd.it/ynhaz7herbxc1.jpeg"|"https://i.redd.it/r4k7s9nb85vc1.png", // 2/9 (22.22%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 172522/38423968 (0.45%)
	ad_supplementary_text_md?: null|string, // 172522/38423968 (0.45%)
	ad_user_targeting?: null, // 172522/38423968 (0.45%)
	adserver_click_url?: null, // 172522/38423968 (0.45%)
	adserver_imp_pixel?: null, // 172522/38423968 (0.45%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 172522/38423968 (0.45%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 105193/38423968 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 922105/2459048 (37.50%)
		e: "text"|"emoji",
		t?: string, // 1536943/2459048 (62.50%)
		u?: string, // 922105/2459048 (37.50%)
	}[], // 38025932/38423968 (98.96%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 38025932/38423968 (98.96%)
	author_fullname?: string, // 38025912/38423968 (98.96%)
	author_id?: string|null, // 172522/38423968 (0.45%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 38025932/38423968 (98.96%)
	author_premium?: boolean, // 38025932/38423968 (98.96%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Download"|"Install"|"View More"|"Play Now"|"Apply Now"|"Order Now"|"Watch Now"|"Contact Us"|"Get Showtimes"|"Pre-order Now"|"Get a Quote"|"See Menu", // 138100/38423968 (0.36%)
	campaign_id?: null, // 172522/38423968 (0.45%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment",
	clicked: boolean,
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1128438/38423968 (2.94%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3116/1126210 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 34149/94631 (36.09%)
			e: "text"|"emoji",
			t?: string, // 60482/94631 (63.91%)
			u?: string, // 34149/94631 (36.09%)
		}[], // 1114373/1126210 (98.95%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1114373/1126210 (98.95%)
		author_fullname?: string, // 1114373/1126210 (98.95%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1114373/1126210 (98.95%)
		author_premium?: boolean, // 1114373/1126210 (98.95%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"photography"|"entertainment",
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
				caption?: string, // 1145582/1263012 (90.70%)
				id: number,
				media_id: string,
				outbound_url?: string, // 1142903/1263012 (90.49%)
			}[],
		}|null, // 197476/1126210 (17.53%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 197476/1126210 (17.53%)
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
			a?: string, // 27231/182737 (14.90%)
			e: "text"|"emoji",
			t?: string, // 155506/182737 (85.10%)
			u?: string, // 27231/182737 (14.90%)
		}[],
		link_flair_template_id?: string, // 415607/1126210 (36.90%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 21714/205719 (10.56%)
				author_url?: string, // 21656/205719 (10.53%)
				cache_age?: number, // 4683/205719 (2.28%)
				description?: string, // 1907/205719 (0.93%)
				height?: number|null, // 205598/205719 (99.94%)
				html?: string, // 205598/205719 (99.94%)
				mean_alpha?: number, // 95/205719 (0.05%)
				provider_name?: string, // 205598/205719 (99.94%)
				provider_url?: string, // 205598/205719 (99.94%)
				thumbnail_height?: number, // 190579/205719 (92.64%)
				thumbnail_url?: string, // 200785/205719 (97.60%)
				thumbnail_width?: number, // 190579/205719 (92.64%)
				title?: string, // 200893/205719 (97.65%)
				type?: "video"|"rich", // 205598/205719 (99.94%)
				url?: string, // 5350/205719 (2.60%)
				version?: "1.0", // 205598/205719 (99.94%)
				width?: number, // 205598/205719 (99.94%)
			}, // 205719/302955 (67.90%)
			reddit_video?: {
				bitrate_kbps?: number, // 97008/97236 (99.77%)
				dash_url?: string, // 97224/97236 (99.99%)
				duration?: number, // 97224/97236 (99.99%)
				fallback_url?: string, // 97224/97236 (99.99%)
				has_audio?: boolean, // 94512/97236 (97.20%)
				height: number|null,
				hls_url?: string, // 97224/97236 (99.99%)
				is_gif?: boolean, // 97224/97236 (99.99%)
				scrubber_media_url?: string, // 97224/97236 (99.99%)
				transcoding_message?: string, // 12/97236 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 97236/302955 (32.10%)
			type?: string, // 205719/302955 (67.90%)
		},
		media_embed: {
			content?: string|null, // 205719/1126210 (18.27%)
			height?: number, // 205719/1126210 (18.27%)
			scrolling?: boolean, // 205719/1126210 (18.27%)
			width?: number, // 205719/1126210 (18.27%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 791/1293423 (0.06%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1292317/1293423 (99.91%)
				hlsUrl?: string, // 791/1293423 (0.06%)
				id?: string, // 1292317/1293423 (99.91%)
				isGif?: boolean, // 791/1293423 (0.06%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1291526/1293423 (99.85%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 957938/1293423 (74.06%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1291526/1293423 (99.85%)
				s?: {
					gif?: string, // 54715/1291526 (4.24%)
					mp4?: string, // 54715/1291526 (4.24%)
					u?: string, // 1236811/1291526 (95.76%)
					x: number,
					y: number,
				}, // 1291526/1293423 (99.85%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 791/1293423 (0.06%)
				y?: number, // 791/1293423 (0.06%)
			},
		}|null, // 210799/1126210 (18.72%)
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
				vote_count?: number, // 173/6737 (2.57%)
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
		}, // 1805/1126210 (0.16%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery", // 803826/1126210 (71.37%)
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
					}, // 63842/803826 (7.94%)
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
					}, // 63842/803826 (7.94%)
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
					}, // 503942/803826 (62.69%)
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
					}, // 505728/803826 (62.92%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 226334/226369 (99.98%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 226369/803826 (28.16%)
		}, // 803826/1126210 (71.37%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"reddit"|"deleted"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 21714/205719 (10.56%)
				author_url?: string, // 21656/205719 (10.53%)
				cache_age?: number, // 4683/205719 (2.28%)
				description?: string, // 1907/205719 (0.93%)
				height?: number|null, // 205598/205719 (99.94%)
				html?: string, // 205598/205719 (99.94%)
				mean_alpha?: number, // 95/205719 (0.05%)
				provider_name?: string, // 205598/205719 (99.94%)
				provider_url?: string, // 205598/205719 (99.94%)
				thumbnail_height?: number, // 190579/205719 (92.64%)
				thumbnail_url?: string, // 200785/205719 (97.60%)
				thumbnail_width?: number, // 190579/205719 (92.64%)
				title?: string, // 200893/205719 (97.65%)
				type?: "video"|"rich", // 205598/205719 (99.94%)
				url?: string, // 5350/205719 (2.60%)
				version?: "1.0", // 205598/205719 (99.94%)
				width?: number, // 205598/205719 (99.94%)
			}, // 205719/302955 (67.90%)
			reddit_video?: {
				bitrate_kbps?: number, // 97008/97236 (99.77%)
				dash_url?: string, // 97224/97236 (99.99%)
				duration?: number, // 97224/97236 (99.99%)
				fallback_url?: string, // 97224/97236 (99.99%)
				has_audio?: boolean, // 94512/97236 (97.20%)
				height: number|null,
				hls_url?: string, // 97224/97236 (99.99%)
				is_gif?: boolean, // 97224/97236 (99.99%)
				scrubber_media_url?: string, // 97224/97236 (99.99%)
				transcoding_message?: string, // 12/97236 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 97236/302955 (32.10%)
			type?: string, // 205719/302955 (67.90%)
		},
		secure_media_embed: {
			content?: string|null, // 205719/1126210 (18.27%)
			height?: number, // 205719/1126210 (18.27%)
			media_domain_url?: string, // 205719/1126210 (18.27%)
			scrolling?: boolean, // 205719/1126210 (18.27%)
			width?: number, // 205719/1126210 (18.27%)
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
		url_overridden_by_dest?: string, // 813744/1126210 (72.26%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1128438/38423968 (2.94%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 172522/38423968 (0.45%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"iframe", // 172522/38423968 (0.45%)
	embed_url?: null|string, // 172522/38423968 (0.45%)
	events?: [], // 172522/38423968 (0.45%)
	eventsOnRender?: [], // 172522/38423968 (0.45%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Get a Quote"|"Download"|"Apply Now"|"Order Now"|"Play Now"|"Contact Us"|"Install"|"Watch Now"|"Pre-order Now"|"Get Showtimes"|"See Menu", // 125972/14434640 (0.87%)
			caption?: string, // 14191434/14434640 (98.32%)
			display_url?: string, // 128954/14434640 (0.89%)
			id: number,
			media_id: string,
			outbound_url?: string, // 14190110/14434640 (98.31%)
			product?: {
				description: string,
				price?: string, // 77081/77141 (99.92%)
				title: string,
			}, // 77141/14434640 (0.53%)
		}[],
	}|null, // 3791717/38423968 (9.87%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 172522/38423968 (0.45%)
	id: string,
	impression_id?: null, // 172522/38423968 (0.45%)
	impression_id_str?: null, // 172522/38423968 (0.45%)
	is_blank?: boolean, // 172522/38423968 (0.45%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3791717/38423968 (9.87%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 172522/38423968 (0.45%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1026420/8564964 (11.98%)
		e: "text"|"emoji",
		t?: string, // 7538544/8564964 (88.02%)
		u?: string, // 1026420/8564964 (11.98%)
	}[],
	link_flair_template_id?: string, // 16205774/38423968 (42.18%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 311/2957010 (0.01%)
		oembed?: {
			author_name?: string, // 607312/1931785 (31.44%)
			author_url?: string, // 606640/1931785 (31.40%)
			cache_age?: number, // 14786/1931785 (0.77%)
			description?: string, // 77055/1931785 (3.99%)
			height?: number|null, // 1931176/1931785 (99.97%)
			html?: string, // 1931176/1931785 (99.97%)
			marginheight?: number, // 2/1931785 (0.00%)
			marginwidth?: number, // 2/1931785 (0.00%)
			mean_alpha?: number, // 2186/1931785 (0.11%)
			provider_name?: string, // 1931176/1931785 (99.97%)
			provider_url?: string, // 1931176/1931785 (99.97%)
			thumbnail_height?: number, // 1871452/1931785 (96.88%)
			thumbnail_url?: string, // 1916614/1931785 (99.21%)
			thumbnail_width?: number, // 1871452/1931785 (96.88%)
			title?: string, // 1916110/1931785 (99.19%)
			type?: "video"|"rich", // 1931176/1931785 (99.97%)
			url?: string, // 43107/1931785 (2.23%)
			version?: "1.0", // 1931174/1931785 (99.97%)
			width?: number, // 1931176/1931785 (99.97%)
		}, // 1931785/2957010 (65.33%)
		reddit_video?: {
			bitrate_kbps?: number, // 1020937/1024914 (99.61%)
			dash_url?: string, // 1020937/1024914 (99.61%)
			duration?: number, // 1020937/1024914 (99.61%)
			fallback_url?: string, // 1020937/1024914 (99.61%)
			has_audio?: boolean, // 1020891/1024914 (99.61%)
			height: number|null,
			hls_url?: string, // 1020937/1024914 (99.61%)
			is_gif?: boolean, // 1020937/1024914 (99.61%)
			scrubber_media_url?: string, // 1020937/1024914 (99.61%)
			transcoding_message?: string, // 3977/1024914 (0.39%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1024914/2957010 (34.66%)
		type?: string, // 1932096/2957010 (65.34%)
	},
	media_embed: {
		content?: string|null, // 1903180/38423968 (4.95%)
		height?: number, // 1903180/38423968 (4.95%)
		scrolling?: boolean, // 1903180/38423968 (4.95%)
		width?: number, // 1903180/38423968 (4.95%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20264/15096732 (0.13%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 15017358/15096732 (99.47%)
			hlsUrl?: string, // 20264/15096732 (0.13%)
			id?: string, // 15017358/15096732 (99.47%)
			isGif?: boolean, // 20264/15096732 (0.13%)
			m?: "image/jpg"|"image/png"|"image/gif", // 14997094/15096732 (99.34%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6826685/15096732 (45.22%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14997094/15096732 (99.34%)
			s?: {
				gif?: string, // 221941/14997094 (1.48%)
				mp4?: string, // 221941/14997094 (1.48%)
				u?: string, // 14775153/14997094 (98.52%)
				x: number,
				y: number,
			}, // 14997094/15096732 (99.34%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 20264/15096732 (0.13%)
			y?: number, // 20264/15096732 (0.13%)
		},
	}|null, // 4270902/38423968 (11.12%)
	media_only: boolean,
	mobile_ad_url?: string, // 172522/38423968 (0.45%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 172522/38423968 (0.45%)
	outbound_link?: {
	}, // 172522/38423968 (0.45%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 20166/254247 (7.93%)
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
	}|null, // 76275/38423968 (0.20%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"gallery"|"video", // 18377404/38423968 (47.83%)
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
				}, // 805606/18480128 (4.36%)
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
				}, // 805606/18480128 (4.36%)
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
				}, // 9979259/18480128 (54.00%)
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
				}, // 10060884/18480128 (54.44%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1240268/1240304 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1240304/18480128 (6.71%)
	}, // 18480128/38423968 (48.10%)
	priority_id?: null, // 172522/38423968 (0.45%)
	product_ids?: [], // 172522/38423968 (0.45%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 172522/38423968 (0.45%)
	promoted?: boolean, // 172522/38423968 (0.45%)
	promoted_by?: null, // 172522/38423968 (0.45%)
	promoted_display_name?: null, // 172522/38423968 (0.45%)
	promoted_url?: null, // 172522/38423968 (0.45%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 311/2957010 (0.01%)
		oembed?: {
			author_name?: string, // 607312/1931785 (31.44%)
			author_url?: string, // 606640/1931785 (31.40%)
			cache_age?: number, // 14786/1931785 (0.77%)
			description?: string, // 77055/1931785 (3.99%)
			height?: number|null, // 1931176/1931785 (99.97%)
			html?: string, // 1931176/1931785 (99.97%)
			marginheight?: number, // 2/1931785 (0.00%)
			marginwidth?: number, // 2/1931785 (0.00%)
			mean_alpha?: number, // 2186/1931785 (0.11%)
			provider_name?: string, // 1931176/1931785 (99.97%)
			provider_url?: string, // 1931176/1931785 (99.97%)
			thumbnail_height?: number, // 1871452/1931785 (96.88%)
			thumbnail_url?: string, // 1916614/1931785 (99.21%)
			thumbnail_width?: number, // 1871452/1931785 (96.88%)
			title?: string, // 1916110/1931785 (99.19%)
			type?: "video"|"rich", // 1931176/1931785 (99.97%)
			url?: string, // 43107/1931785 (2.23%)
			version?: "1.0", // 1931174/1931785 (99.97%)
			width?: number, // 1931176/1931785 (99.97%)
		}, // 1931785/2957010 (65.33%)
		reddit_video?: {
			bitrate_kbps?: number, // 1020937/1024914 (99.61%)
			dash_url?: string, // 1020937/1024914 (99.61%)
			duration?: number, // 1020937/1024914 (99.61%)
			fallback_url?: string, // 1020937/1024914 (99.61%)
			has_audio?: boolean, // 1020891/1024914 (99.61%)
			height: number|null,
			hls_url?: string, // 1020937/1024914 (99.61%)
			is_gif?: boolean, // 1020937/1024914 (99.61%)
			scrubber_media_url?: string, // 1020937/1024914 (99.61%)
			transcoding_message?: string, // 3977/1024914 (0.39%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1024914/2957010 (34.66%)
		type?: string, // 1932096/2957010 (65.34%)
	},
	secure_media_embed: {
		content?: string|null, // 1903180/38423968 (4.95%)
		height?: number, // 1903180/38423968 (4.95%)
		media_domain_url?: string, // 1903180/38423968 (4.95%)
		scrolling?: boolean, // 1903180/38423968 (4.95%)
		width?: number, // 1903180/38423968 (4.95%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 172522/38423968 (0.45%)
	sk_ad_network_data?: null, // 172522/38423968 (0.45%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 13183/38423968 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 172522/38423968 (0.45%)
	third_party_tracking?: null, // 172522/38423968 (0.45%)
	third_party_tracking_2?: null, // 172522/38423968 (0.45%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 38422918/38423968 (100.00%)
	thumbnail_width?: number|null, // 38422918/38423968 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 5/38423968 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 20179261/38423968 (52.52%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only",
	wls: null|number,
}