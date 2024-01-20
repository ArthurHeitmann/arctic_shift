interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY",
			award_type: "global"|"community",
			awardings_required_to_grant_benefits: null,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null,
			days_of_premium: null,
			description: string,
			end_date: null,
			giver_coin_reward: null,
			icon_format: null|"APNG"|"PNG",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: string,
			penny_donate: null,
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
			start_date: null,
			static_icon_height: number,
			static_icon_url: string,
			static_icon_width: number,
			sticky_duration_seconds: null,
			subreddit_coin_reward: number,
			subreddit_id: null|"t5_2qhta",
			tiers_by_required_awardings: null,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "ProETC"|"imaginfinite"|"chuckiemag99"|"DagmarTheCat"|"Cement-umbrella"|"KushPiglet"|"nycspine"|"beer-isgood45"|"OG-JRICH",
		author_flair_background_color: null,
		author_flair_css_class: null,
		author_flair_richtext: [],
		author_flair_template_id: null,
		author_flair_text: null,
		author_flair_text_color: null,
		author_flair_type: "text",
		author_fullname: "t2_k1p9tbh9"|"t2_93x4z"|"t2_cmpgc7nw"|"t2_5z9fl859"|"t2_bletih9o"|"t2_832i41ks"|"t2_54sb5aqr"|"t2_4h7r2yjx"|"t2_4fv7llin",
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
		domain: "i.redd.it"|"i.imgur.com"|"reddit.com"|"self.fanduel",
		downs: number,
		edited: boolean,
		gallery_data?: {
			items: {
				id: number,
				media_id: "79qe2bupud3a1"|"f6176aupud3a1",
			}[],
		}, // 2/15 (13.33%)
		gilded: number,
		gildings: {
			gid_1?: number, // 8/15 (53.33%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: "yxdv4x"|"ypufmb"|"yj741n"|"yo17rw"|"za615e"|"zcqqjy"|"u64fh6"|"zg1rpi"|"sprnec",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 2/15 (13.33%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#cc5289"|"#47b2b2",
		link_flair_css_class: null|"catpic"|"advice",
		link_flair_richtext: {
			e: "text",
			t: "Cat Picture"|"Advice",
		}[],
		link_flair_template_id?: "9b021bc6-b875-11ec-aa94-8e28dbb24a96"|"7e252220-f6c9-11e4-ba11-0e7d3bf7865f", // 6/15 (40.00%)
		link_flair_text: null|"Cat Picture"|"Advice",
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null,
		media_embed: {
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "79qe2bupud3a1"|"f6176aupud3a1",
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
		}, // 2/15 (13.33%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_yxdv4x"|"t3_ypufmb"|"t3_yj741n"|"t3_yo17rw"|"t3_za615e"|"t3_zcqqjy"|"t3_u64fh6"|"t3_zg1rpi"|"t3_sprnec",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image", // 12/15 (80.00%)
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
		}, // 12/15 (80.00%)
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
			allowed_media_in_comments: ("giphy"|"static"|"animated")[],
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "fanduel"|"cats",
			display_name_prefixed: "r/fanduel"|"r/cats",
			free_form_reports: boolean,
			header_img: string|null,
			header_size: null|number[],
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled: boolean,
			key_color: ""|"#ff4500",
			link_flair_enabled: boolean,
			link_flair_position: "right",
			name: "t5_2vhn0"|"t5_2qhta",
			over_18: boolean,
			previous_names: [],
			primary_color: ""|"#fe3f00",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "",
			submit_text_label: "",
			subreddit_type: "public",
			subscribers: number,
			title: "FanDuel"|"Cats",
			url: "/r/fanduel/"|"/r/cats/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "fanduel"|"cats",
		subreddit_id: "t5_2vhn0"|"t5_2qhta",
		subreddit_name_prefixed: "r/fanduel"|"r/cats",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null,
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: "https://i.redd.it/5zp48sbyqg0a1.jpg"|"https://i.imgur.com/tPhjCxD.jpg"|"https://i.redd.it/pqz8decbhdx91.jpg"|"https://i.redd.it/es8u8hkm1ey91.jpg"|"https://www.reddit.com/gallery/za615e"|"https://i.redd.it/1vk6irnvj04a1.jpg"|"https://i.redd.it/pj4q7wjmq7u81.jpg"|"https://i.redd.it/mbpnofygfq4a1.jpg", // 14/15 (93.33%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 47274/35865148 (0.13%)
	ad_supplementary_text_md?: null|string, // 47274/35865148 (0.13%)
	adserver_click_url?: null, // 47274/35865148 (0.13%)
	adserver_imp_pixel?: null, // 47274/35865148 (0.13%)
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
		icon_format: null|"PNG"|"APNG"|"JPG",
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
		tiers_by_required_awardings: null,
	}[],
	allow_live_comments: boolean,
	app_store_data?: null, // 47274/35865148 (0.13%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 83074/35865148 (0.23%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 743672/2056470 (36.16%)
		e: "text"|"emoji",
		t?: string, // 1312798/2056470 (63.84%)
		u?: string, // 743672/2056470 (36.16%)
	}[], // 27711887/35865148 (77.27%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 27711887/35865148 (77.27%)
	author_fullname?: string, // 27711887/35865148 (77.27%)
	author_id?: string|null, // 47274/35865148 (0.13%)
	author_patreon_flair?: boolean, // 27711887/35865148 (77.27%)
	author_premium?: boolean, // 27711887/35865148 (77.27%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 37579/35865148 (0.10%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|""|"drawing_and_painting"|"animals"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"memes"|"food"|"videos"|"funny"|"music",
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
			display_name: "Starcitizen_trades"|"khiphop"|"CelebsArchive"|"fantasyhockey"|"Crunchyroll"|"KoreanCelebrityFap",
			display_name_prefixed: "r/Starcitizen_trades"|"r/khiphop"|"r/CelebsArchive"|"r/fantasyhockey"|"r/Crunchyroll"|"r/KoreanCelebrityFap",
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#222222"|"#ff8717",
			mod_permissions: [],
			name: "t5_2xwvq"|"t5_2vuc3"|"t5_79xb0l"|"t5_2s0tu"|"t5_2sgc7"|"t5_7irfmy",
			over_18: boolean,
			primary_color: "#373c3f"|""|"#014980",
			sr: "Starcitizen_trades"|"khiphop"|"CelebsArchive"|"fantasyhockey"|"Crunchyroll"|"KoreanCelebrityFap",
			sr_display_name_prefixed: "r/Starcitizen_trades"|"r/khiphop"|"r/CelebsArchive"|"r/fantasyhockey"|"r/Crunchyroll"|"r/KoreanCelebrityFap",
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: "Starcitizen_trades"|"Korean Hip Hop and R&amp;B"|"Celebs Pictures, Gifs, and Videos"|"Fantasy Hockey"|"Crunchyroll"|"KoreanCelebrityFap",
			url: "/r/Starcitizen_trades/"|"/r/khiphop/"|"/r/CelebsArchive/"|"/r/fantasyhockey/"|"/r/Crunchyroll/"|"/r/KoreanCelebrityFap/",
			user_can_crosspost: boolean,
			whitelist_status: "all_ads"|"some_ads"|null,
		}, // 6/10604 (0.06%)
		subreddit_id: string,
		title: string,
	}[], // 10604/35865148 (0.03%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1755565/35865148 (4.89%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"GROUP"|"MODERATOR",
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
			icon_format: null|"APNG"|"PNG"|"JPG",
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
		author_cakeday?: boolean, // 3717/1681762 (0.22%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 46877/134387 (34.88%)
			e: "text"|"emoji",
			t?: string, // 87510/134387 (65.12%)
			u?: string, // 46877/134387 (34.88%)
		}[], // 1505017/1681762 (89.49%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1505017/1681762 (89.49%)
		author_fullname?: string, // 1505017/1681762 (89.49%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1505017/1681762 (89.49%)
		author_premium?: boolean, // 1505017/1681762 (89.49%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 1256/1681762 (0.07%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"photography"|"drawing_and_painting"|"gaming"|"diy_and_crafts"|"animals"|"entertainment"|"memes",
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
				banner_size: number[],
				community_icon: string,
				created: number,
				created_utc: number,
				display_name: "audiophile",
				display_name_prefixed: "r/audiophile",
				icon_img: string,
				icon_size: number[],
				key_color: "#545452",
				mod_permissions: [],
				name: "t5_2qmiy",
				over_18: boolean,
				primary_color: "#b08622",
				sr: "audiophile",
				sr_display_name_prefixed: "r/audiophile",
				subreddit_type: "public",
				subscribers: number,
				title: string,
				url: "/r/audiophile/",
				user_can_crosspost: null,
				whitelist_status: "all_ads",
			}, // 1/1868 (0.05%)
			subreddit_id: string,
			title: string,
		}[], // 1868/1681762 (0.11%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 28/1681762 (0.00%)
		event_is_live?: boolean, // 28/1681762 (0.00%)
		event_start?: number, // 28/1681762 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 77454/544293 (14.23%)
				id: number,
				media_id: string,
				outbound_url?: string, // 20177/544293 (3.71%)
			}[],
		}|null, // 120284/1681762 (7.15%)
		gilded: number,
		gildings: {
			gid_1?: number, // 138556/1681762 (8.24%)
			gid_2?: number, // 31683/1681762 (1.88%)
			gid_3?: number, // 7526/1681762 (0.45%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 120284/1681762 (7.15%)
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
			a?: string, // 35083/261277 (13.43%)
			e: "text"|"emoji",
			t?: string, // 226194/261277 (86.57%)
			u?: string, // 35083/261277 (13.43%)
		}[],
		link_flair_template_id?: string, // 501956/1681762 (29.85%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "", // 52/70 (74.29%)
			recording_duration_seconds?: number, // 53/70 (75.71%)
			recording_fallback_url?: string, // 52/70 (74.29%)
			recording_hls_url?: "", // 52/70 (74.29%)
			recording_status?: number, // 68/70 (97.14%)
			room_id: string,
			room_status?: number, // 68/70 (97.14%)
		}, // 70/1681762 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 45/585495 (0.01%)
			oembed?: {
				author_name?: string, // 427253/432427 (98.80%)
				author_url?: string, // 415185/432427 (96.01%)
				cache_age?: number, // 5809/432427 (1.34%)
				description?: string, // 17047/432427 (3.94%)
				height?: number|null, // 432426/432427 (100.00%)
				html?: string, // 432426/432427 (100.00%)
				mean_alpha?: number, // 30/432427 (0.01%)
				provider_name?: string, // 432426/432427 (100.00%)
				provider_url?: string, // 432426/432427 (100.00%)
				thumbnail_height?: number, // 423818/432427 (98.01%)
				thumbnail_url?: string, // 423846/432427 (98.02%)
				thumbnail_width?: number, // 423818/432427 (98.01%)
				title?: string, // 426571/432427 (98.65%)
				type?: "video"|"rich", // 432426/432427 (100.00%)
				url?: string, // 9144/432427 (2.11%)
				version?: "1.0", // 432426/432427 (100.00%)
				width?: number, // 432426/432427 (100.00%)
			}, // 432427/585495 (73.86%)
			reddit_video?: {
				bitrate_kbps?: number, // 152466/153023 (99.64%)
				dash_url?: string, // 153010/153023 (99.99%)
				duration?: number, // 153010/153023 (99.99%)
				fallback_url?: string, // 153010/153023 (99.99%)
				height?: number|null, // 153014/153023 (99.99%)
				hls_url?: string, // 153010/153023 (99.99%)
				is_gif?: boolean, // 153010/153023 (99.99%)
				scrubber_media_url?: string, // 153010/153023 (99.99%)
				transcoding_message?: string, // 13/153023 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 153014/153023 (99.99%)
			}, // 153023/585495 (26.14%)
			type?: string, // 432472/585495 (73.86%)
		},
		media_embed: {
			content?: string|null, // 432472/1681762 (25.72%)
			height?: number, // 432472/1681762 (25.72%)
			scrolling?: boolean, // 432472/1681762 (25.72%)
			width?: number, // 432472/1681762 (25.72%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1936/615781 (0.31%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 615662/615781 (99.98%)
				hlsUrl?: string, // 1936/615781 (0.31%)
				id?: string, // 615662/615781 (99.98%)
				isGif?: boolean, // 1936/615781 (0.31%)
				m?: "image/jpg"|"image/png"|"image/gif", // 613726/615781 (99.67%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 382984/615781 (62.19%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 613726/615781 (99.67%)
				s?: {
					gif?: string, // 8493/613726 (1.38%)
					mp4?: string, // 8493/613726 (1.38%)
					u?: string, // 605233/613726 (98.62%)
					x: number,
					y: number,
				}, // 613726/615781 (99.67%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1936/615781 (0.31%)
				y?: number, // 1936/615781 (0.31%)
			},
		}|null, // 140016/1681762 (8.33%)
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
		parent_whitelist_status: "no_ads"|"all_ads"|"some_ads"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 69/9917 (0.70%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED"|"CANCELLED"|"CLOSED",
			resolved_option_id: null|string,
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 2960/1681762 (0.18%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 1170715/1681762 (69.61%)
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
					}, // 72275/1170715 (6.17%)
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
					}, // 72275/1170715 (6.17%)
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
					}, // 767024/1170715 (65.52%)
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
					}, // 771780/1170715 (65.92%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 425008/425201 (99.95%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 425201/1170715 (36.32%)
		}, // 1170715/1681762 (69.61%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 45/585495 (0.01%)
			oembed?: {
				author_name?: string, // 427253/432427 (98.80%)
				author_url?: string, // 415185/432427 (96.01%)
				cache_age?: number, // 5809/432427 (1.34%)
				description?: string, // 17047/432427 (3.94%)
				height?: number|null, // 432426/432427 (100.00%)
				html?: string, // 432426/432427 (100.00%)
				mean_alpha?: number, // 30/432427 (0.01%)
				provider_name?: string, // 432426/432427 (100.00%)
				provider_url?: string, // 432426/432427 (100.00%)
				thumbnail_height?: number, // 423818/432427 (98.01%)
				thumbnail_url?: string, // 423846/432427 (98.02%)
				thumbnail_width?: number, // 423818/432427 (98.01%)
				title?: string, // 426571/432427 (98.65%)
				type?: "video"|"rich", // 432426/432427 (100.00%)
				url?: string, // 9144/432427 (2.11%)
				version?: "1.0", // 432426/432427 (100.00%)
				width?: number, // 432426/432427 (100.00%)
			}, // 432427/585495 (73.86%)
			reddit_video?: {
				bitrate_kbps?: number, // 152466/153023 (99.64%)
				dash_url?: string, // 153010/153023 (99.99%)
				duration?: number, // 153010/153023 (99.99%)
				fallback_url?: string, // 153010/153023 (99.99%)
				height?: number|null, // 153014/153023 (99.99%)
				hls_url?: string, // 153010/153023 (99.99%)
				is_gif?: boolean, // 153010/153023 (99.99%)
				scrubber_media_url?: string, // 153010/153023 (99.99%)
				transcoding_message?: string, // 13/153023 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 153014/153023 (99.99%)
			}, // 153023/585495 (26.14%)
			type?: string, // 432472/585495 (73.86%)
		},
		secure_media_embed: {
			content?: string|null, // 432472/1681762 (25.72%)
			height?: number, // 432472/1681762 (25.72%)
			media_domain_url?: string, // 432472/1681762 (25.72%)
			scrolling?: boolean, // 432472/1681762 (25.72%)
			width?: number, // 432472/1681762 (25.72%)
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
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: string,
			predictions: {
				body: string,
				created_at: number,
				id: string,
				is_nsfw: boolean,
				is_rtjson: boolean,
				is_spoiler: boolean,
				options: {
					id: string,
					image_url: null,
					text: string,
					total_amount: number,
					user_amount: null,
					vote_count: number,
				}[],
				resolved_option_id: string|null,
				status: "RESOLVED"|"OPEN"|"CLOSED",
				title: string,
				total_stake_amount: number,
				total_vote_count: number,
				user_selection: null,
				user_won_amount: null,
				vote_updates_remained: null,
				voting_end_timestamp: number,
			}[],
			status: "CLOSED"|"LIVE",
			subreddit_id: "t5_2qjpg"|"t5_3ouxm"|"t5_79vh26",
			theme_id: "theme_1",
			total_participants: number,
			tournament_id: string,
		}, // 13/1681762 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1471453/1681762 (87.49%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "no_ads"|"all_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1755565/35865148 (4.89%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 47274/35865148 (0.13%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 47274/35865148 (0.13%)
	embed_url?: null|string, // 47274/35865148 (0.13%)
	event_end?: number, // 128/35865148 (0.00%)
	event_is_live?: boolean, // 128/35865148 (0.00%)
	event_start?: number, // 128/35865148 (0.00%)
	events?: [], // 47274/35865148 (0.13%)
	eventsOnRender?: [], // 47274/35865148 (0.13%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Order Now"|"View More"|"Sign Up"|"Download"|"Pre-order Now"|"Play Now"|"Install"|"See Menu"|"Apply Now"|"Get Showtimes"|"Contact Us"|"Watch Now"|"Get a Quote", // 7288/5483666 (0.13%)
			caption?: string, // 603701/5483666 (11.01%)
			display_url?: string, // 6401/5483666 (0.12%)
			id: number,
			media_id: string,
			outbound_url?: string, // 114393/5483666 (2.09%)
		}[],
	}|null, // 2572609/35865148 (7.17%)
	gilded: number,
	gildings: {
		gid_1?: number, // 118930/35865148 (0.33%)
		gid_2?: number, // 25872/35865148 (0.07%)
		gid_3?: number, // 4945/35865148 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 47274/35865148 (0.13%)
	id: string,
	impression_id?: null, // 47274/35865148 (0.13%)
	impression_id_str?: null, // 47274/35865148 (0.13%)
	is_blank?: boolean, // 47274/35865148 (0.13%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2572609/35865148 (7.17%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 47274/35865148 (0.13%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 606882/6858620 (8.85%)
		e: "text"|"emoji",
		t?: string, // 6251738/6858620 (91.15%)
		u?: string, // 606882/6858620 (8.85%)
	}[],
	link_flair_template_id?: string, // 12657281/35865148 (35.29%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: "", // 903/1178 (76.66%)
		recording_duration_seconds?: number, // 916/1178 (77.76%)
		recording_fallback_url?: string, // 903/1178 (76.66%)
		recording_hls_url?: "", // 903/1178 (76.66%)
		recording_status?: number, // 1161/1178 (98.56%)
		room_id: string,
		room_status: number,
	}, // 1178/35865148 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1a4civdcm4u7q"|"17afolaidk8h9"|"1a4ya0b6gxse3"|"1a60oaapi411r"|"1a60xly5npgm4", // 80/4046724 (0.00%)
		oembed?: {
			author_name?: string, // 2887627/3086654 (93.55%)
			author_url?: string, // 2831040/3086654 (91.72%)
			cache_age?: number, // 132781/3086654 (4.30%)
			description?: string, // 293642/3086654 (9.51%)
			height?: number|null, // 3086567/3086654 (100.00%)
			html?: string, // 3086567/3086654 (100.00%)
			marginheight?: number, // 1/3086654 (0.00%)
			marginwidth?: number, // 1/3086654 (0.00%)
			mean_alpha?: number, // 2567/3086654 (0.08%)
			provider_name?: string, // 3086567/3086654 (100.00%)
			provider_url?: string, // 3086567/3086654 (100.00%)
			thumbnail_height?: number, // 2944082/3086654 (95.38%)
			thumbnail_url?: string, // 2945812/3086654 (95.44%)
			thumbnail_width?: number, // 2944082/3086654 (95.38%)
			title?: string, // 2952344/3086654 (95.65%)
			type?: "video"|"rich", // 3086567/3086654 (100.00%)
			url?: string, // 264948/3086654 (8.58%)
			version?: "1.0", // 3086566/3086654 (100.00%)
			width?: number, // 3086567/3086654 (100.00%)
		}, // 3086654/4046724 (76.28%)
		reddit_video?: {
			bitrate_kbps?: number, // 954106/959990 (99.39%)
			dash_url?: string, // 954106/959990 (99.39%)
			duration?: number, // 954106/959990 (99.39%)
			fallback_url?: string, // 954106/959990 (99.39%)
			height?: number|null, // 955258/959990 (99.51%)
			hls_url?: string, // 954106/959990 (99.39%)
			is_gif?: boolean, // 954106/959990 (99.39%)
			scrubber_media_url?: string, // 954106/959990 (99.39%)
			transcoding_message?: string, // 5884/959990 (0.61%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 955258/959990 (99.51%)
		}, // 959990/4046724 (23.72%)
		type?: string, // 3086734/4046724 (76.28%)
	},
	media_embed: {
		content?: string|null, // 3086734/35865148 (8.61%)
		height?: number, // 3086734/35865148 (8.61%)
		scrolling?: boolean, // 3086734/35865148 (8.61%)
		width?: number, // 3086734/35865148 (8.61%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20790/5935867 (0.35%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 5932526/5935867 (99.94%)
			hlsUrl?: string, // 20790/5935867 (0.35%)
			id?: string, // 5932526/5935867 (99.94%)
			isGif?: boolean, // 20790/5935867 (0.35%)
			m?: "image/jpg"|"image/png"|"image/gif", // 5911736/5935867 (99.59%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2244465/5935867 (37.81%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 5911736/5935867 (99.59%)
			s?: {
				gif?: string, // 48984/5911736 (0.83%)
				mp4?: string, // 48984/5911736 (0.83%)
				u?: string, // 5862752/5911736 (99.17%)
				x: number,
				y: number,
			}, // 5911736/5935867 (99.59%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 20790/5935867 (0.35%)
			y?: number, // 20790/5935867 (0.35%)
		},
	}|null, // 2983943/35865148 (8.32%)
	media_only: boolean,
	mobile_ad_url?: string, // 47274/35865148 (0.13%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 47274/35865148 (0.13%)
	outbound_link?: {
	}, // 47274/35865148 (0.13%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 3812/374769 (1.02%)
			vote_count: number,
		}[],
		prediction_status: null|"RESOLVED"|"OPEN"|"CLOSED"|"CANCELLED",
		resolved_option_id: null|string,
		total_stake_amount: null|number,
		total_vote_count: number,
		tournament_id: null|string,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 142478/35865148 (0.40%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 11894541/35865148 (33.16%)
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
				}, // 384531/11894541 (3.23%)
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
				}, // 384531/11894541 (3.23%)
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
				}, // 5212276/11894541 (43.82%)
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
				}, // 5277350/11894541 (44.37%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1291067/1291246 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1291246/11894541 (10.86%)
	}, // 11894541/35865148 (33.16%)
	priority_id?: null, // 47274/35865148 (0.13%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 47274/35865148 (0.13%)
	promoted?: boolean, // 47274/35865148 (0.13%)
	promoted_by?: null, // 47274/35865148 (0.13%)
	promoted_display_name?: null, // 47274/35865148 (0.13%)
	promoted_url?: null, // 47274/35865148 (0.13%)
	pwls: number|null,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1a4civdcm4u7q"|"17afolaidk8h9"|"1a4ya0b6gxse3"|"1a60oaapi411r"|"1a60xly5npgm4", // 80/4046724 (0.00%)
		oembed?: {
			author_name?: string, // 2887627/3086654 (93.55%)
			author_url?: string, // 2831040/3086654 (91.72%)
			cache_age?: number, // 132781/3086654 (4.30%)
			description?: string, // 293642/3086654 (9.51%)
			height?: number|null, // 3086567/3086654 (100.00%)
			html?: string, // 3086567/3086654 (100.00%)
			marginheight?: number, // 1/3086654 (0.00%)
			marginwidth?: number, // 1/3086654 (0.00%)
			mean_alpha?: number, // 2567/3086654 (0.08%)
			provider_name?: string, // 3086567/3086654 (100.00%)
			provider_url?: string, // 3086567/3086654 (100.00%)
			thumbnail_height?: number, // 2944082/3086654 (95.38%)
			thumbnail_url?: string, // 2945812/3086654 (95.44%)
			thumbnail_width?: number, // 2944082/3086654 (95.38%)
			title?: string, // 2952344/3086654 (95.65%)
			type?: "video"|"rich", // 3086567/3086654 (100.00%)
			url?: string, // 264948/3086654 (8.58%)
			version?: "1.0", // 3086566/3086654 (100.00%)
			width?: number, // 3086567/3086654 (100.00%)
		}, // 3086654/4046724 (76.28%)
		reddit_video?: {
			bitrate_kbps?: number, // 954106/959990 (99.39%)
			dash_url?: string, // 954106/959990 (99.39%)
			duration?: number, // 954106/959990 (99.39%)
			fallback_url?: string, // 954106/959990 (99.39%)
			height?: number|null, // 955258/959990 (99.51%)
			hls_url?: string, // 954106/959990 (99.39%)
			is_gif?: boolean, // 954106/959990 (99.39%)
			scrubber_media_url?: string, // 954106/959990 (99.39%)
			transcoding_message?: string, // 5884/959990 (0.61%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 955258/959990 (99.51%)
		}, // 959990/4046724 (23.72%)
		type?: string, // 3086734/4046724 (76.28%)
	},
	secure_media_embed: {
		content?: string|null, // 3086734/35865148 (8.61%)
		height?: number, // 3086734/35865148 (8.61%)
		media_domain_url?: string, // 3086734/35865148 (8.61%)
		scrolling?: boolean, // 3086734/35865148 (8.61%)
		width?: number, // 3086734/35865148 (8.61%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 47274/35865148 (0.13%)
	sk_ad_network_data?: null, // 47274/35865148 (0.13%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: "$399.99"|"$0.50", // 16/35865148 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 47274/35865148 (0.13%)
	third_party_tracking?: null, // 47274/35865148 (0.13%)
	third_party_tracking_2?: null, // 47274/35865148 (0.13%)
	thumbnail: string,
	thumbnail_height?: number|null, // 35862665/35865148 (99.99%)
	thumbnail_width?: number|null, // 35862665/35865148 (99.99%)
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	tournament_data?: {
		currency: "GAME_TOKENS",
		name: string,
		predictions: {
			body: string,
			created_at: number,
			id: string,
			is_nsfw: boolean,
			is_rtjson: boolean,
			is_spoiler: boolean,
			options: {
				id: string,
				image_url: null,
				text: string,
				total_amount: number|null,
				user_amount: null,
				vote_count: number|null,
			}[],
			resolved_option_id: string|null,
			status: "RESOLVED"|"OPEN"|"CLOSED",
			title: string,
			total_stake_amount: number,
			total_vote_count: number,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}[],
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_2"|"theme_5"|"theme_6"|"theme_8"|"theme_3"|"theme_4"|"theme_7",
		total_participants: number,
		tournament_id: string,
	}, // 99/35865148 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:redstar")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22616749/35865148 (63.06%)
	view_count: null,
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}