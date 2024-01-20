interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "nimobo"|"Chemical-Ad-2694"|"Boss452"|"gamesofduty"|"Medical_Cat_8216"|"BenefitPale",
		author_flair_background_color: null,
		author_flair_css_class: null,
		author_flair_richtext: [],
		author_flair_template_id: null,
		author_flair_text: null,
		author_flair_text_color: null,
		author_flair_type: "text",
		author_fullname: "t2_d0rgw"|"t2_9al2smj3"|"t2_4u13jba"|"t2_5ljz9msf"|"t2_a2dgsdqd"|"t2_bbcx2qu7",
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
		domain: "variety.com"|"ign.com"|"self.movies"|"youtu.be",
		downs: number,
		edited: boolean|number,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "14jsm6p"|"14rch94"|"14e3719"|"14rf47y"|"14t04pn"|"14m8zel",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|"#00a6a5"|"#0aa18f"|"#ccac2b",
		link_flair_css_class: null|"Review"|"news"|"media",
		link_flair_richtext: {
			e: "text",
			t: "Review"|"News"|"Media",
		}[],
		link_flair_template_id?: "f86d2190-8a4c-11ec-8504-2ec50ceff1cc"|"2b89defa-381e-11e2-8c5e-12313d28169d"|"28272772-381e-11e2-a4e1-12313d168e98", // 6/12 (50.00%)
		link_flair_text: null|"Review"|"News"|"Media",
		link_flair_text_color: "dark",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed: {
				author_name: "Paramount Pictures",
				author_url: string,
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
			content?: string, // 2/12 (16.67%)
			height?: number, // 2/12 (16.67%)
			scrolling?: boolean, // 2/12 (16.67%)
			width?: number, // 2/12 (16.67%)
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_14jsm6p"|"t3_14rch94"|"t3_14e3719"|"t3_14rf47y"|"t3_14t04pn"|"t3_14m8zel",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint: "link"|"self"|"rich:video",
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
		secure_media: null|{
			oembed: {
				author_name: "Paramount Pictures",
				author_url: string,
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
			content?: string, // 2/12 (16.67%)
			height?: number, // 2/12 (16.67%)
			media_domain_url?: string, // 2/12 (16.67%)
			scrolling?: boolean, // 2/12 (16.67%)
			width?: number, // 2/12 (16.67%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation: boolean,
			allowed_media_in_comments: ("expression"|"giphy"|"animated")[],
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "entertainment"|"movies",
			display_name_prefixed: "r/entertainment"|"r/movies",
			free_form_reports: boolean,
			header_img: string,
			header_size: number[],
			icon_color: "",
			icon_img: string,
			icon_size: number[]|null,
			is_chat_post_feature_enabled: boolean,
			key_color: "#ea0027"|"",
			link_flair_enabled: boolean,
			link_flair_position: "left",
			name: "t5_2qh0f"|"t5_2qh3s",
			over_18: boolean,
			previous_names: [],
			primary_color: "#ea0027"|"#ffb000",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit link",
			submit_text_label: ""|"Submit text",
			subreddit_type: "public",
			subscribers: number,
			title: "Entertainment"|"Movie News and Discussion",
			url: "/r/entertainment/"|"/r/movies/",
			user_is_banned: null,
			user_is_contributor: null,
			user_is_moderator: null,
			user_is_muted: null,
			user_is_subscriber: null,
		},
		stickied: boolean,
		subreddit: "entertainment"|"movies",
		subreddit_id: "t5_2qh0f"|"t5_2qh3s",
		subreddit_name_prefixed: "r/entertainment"|"r/movies",
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
		url_overridden_by_dest?: string, // 10/12 (83.33%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 118909/44216130 (0.27%)
	ad_supplementary_text_md?: null|string, // 118909/44216130 (0.27%)
	adserver_click_url?: null, // 118909/44216130 (0.27%)
	adserver_imp_pixel?: null, // 118909/44216130 (0.27%)
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
		icon_format: "PNG"|"APNG"|"JPG"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: number|null,
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
	app_store_data?: null, // 118909/44216130 (0.27%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 101039/44216130 (0.23%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 755775/2068753 (36.53%)
		e: "text"|"emoji",
		t?: string, // 1312978/2068753 (63.47%)
		u?: string, // 755775/2068753 (36.53%)
	}[], // 41249375/44216130 (93.29%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 41249375/44216130 (93.29%)
	author_fullname?: string, // 41249375/44216130 (93.29%)
	author_id?: string|null, // 118909/44216130 (0.27%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 41249375/44216130 (93.29%)
	author_premium?: boolean, // 41249375/44216130 (93.29%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 98656/44216130 (0.22%)
	campaign_id?: null, // 118909/44216130 (0.27%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"gaming"|"animals"|"food"|""|"writing"|"videos"|"memes",
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
			key_color: ""|"#ea0027"|"#0079d3"|"#7e53c1"|"#222222"|"#46d160"|"#545452"|"#24a0ed"|"#ddbd37"|"#ff4500",
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
		}, // 66/7938 (0.83%)
		subreddit_id: string,
		title: string,
	}[], // 7938/44216130 (0.02%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1556613/44216130 (3.52%)
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
			icon_format: "PNG"|"APNG"|"JPG"|null,
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: string,
			penny_donate: null|number,
			penny_price: number|null,
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
		author_cakeday?: boolean, // 4610/1541709 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 39402/111237 (35.42%)
			e: "text"|"emoji",
			t?: string, // 71835/111237 (64.58%)
			u?: string, // 39402/111237 (35.42%)
		}[], // 1489725/1541709 (96.63%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1489725/1541709 (96.63%)
		author_fullname?: string, // 1489725/1541709 (96.63%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1489725/1541709 (96.63%)
		author_premium?: boolean, // 1489725/1541709 (96.63%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 218/1541709 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"entertainment"|"animals"|"photography",
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
				display_name: "F1DataAnalysis"|"TheDefenceHorizon"|"UhiveTo1Dollar"|"TroChuyenLinhTinh"|"ForBlogers"|"QuakeChampions"|"PUBATTLEGROUNDS"|"EvocaitArt"|"CryptoCurrency"|"AnarchoMeme"|"Chasriel_Squad"|"smallbusinessgiftshop",
				display_name_prefixed: "r/F1DataAnalysis"|"r/TheDefenceHorizon"|"r/UhiveTo1Dollar"|"r/TroChuyenLinhTinh"|"r/ForBlogers"|"r/QuakeChampions"|"r/PUBATTLEGROUNDS"|"r/EvocaitArt"|"r/CryptoCurrency"|"r/AnarchoMeme"|"r/Chasriel_Squad"|"r/smallbusinessgiftshop",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#545452"|"#222222",
				mod_permissions: [],
				name: "t5_5o1r4x"|"t5_6ru8z8"|"t5_8oumak"|"t5_4bcops"|"t5_8tc04a"|"t5_3f0ug"|"t5_3fmbm"|"t5_8cc0df"|"t5_2wlj3"|"t5_80iqj8"|"t5_2im171"|"t5_8sqyxm",
				over_18: boolean,
				primary_color: ""|"#212121"|"#080808"|"#373c3f"|"#323132"|"#c60094"|"#0079d3"|"#b8001f",
				sr: "F1DataAnalysis"|"TheDefenceHorizon"|"UhiveTo1Dollar"|"TroChuyenLinhTinh"|"ForBlogers"|"QuakeChampions"|"PUBATTLEGROUNDS"|"EvocaitArt"|"CryptoCurrency"|"AnarchoMeme"|"Chasriel_Squad"|"smallbusinessgiftshop",
				sr_display_name_prefixed: "r/F1DataAnalysis"|"r/TheDefenceHorizon"|"r/UhiveTo1Dollar"|"r/TroChuyenLinhTinh"|"r/ForBlogers"|"r/QuakeChampions"|"r/PUBATTLEGROUNDS"|"r/EvocaitArt"|"r/CryptoCurrency"|"r/AnarchoMeme"|"r/Chasriel_Squad"|"r/smallbusinessgiftshop",
				subreddit_type: "public",
				subscribers: number,
				title: string,
				url: "/r/F1DataAnalysis/"|"/r/TheDefenceHorizon/"|"/r/UhiveTo1Dollar/"|"/r/TroChuyenLinhTinh/"|"/r/ForBlogers/"|"/r/QuakeChampions/"|"/r/PUBATTLEGROUNDS/"|"/r/EvocaitArt/"|"/r/CryptoCurrency/"|"/r/AnarchoMeme/"|"/r/Chasriel_Squad/"|"/r/smallbusinessgiftshop/",
				user_can_crosspost: boolean,
				whitelist_status: "all_ads"|"some_ads"|null,
			}, // 16/866 (1.85%)
			subreddit_id: string,
			title: string,
		}[], // 866/1541709 (0.06%)
		content_categories: null|("drawing_and_painting"|"writing"|"photography"|"comics"|"gaming"|"diy_and_crafts"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 2/1541709 (0.00%)
		event_is_live?: boolean, // 2/1541709 (0.00%)
		event_start?: number, // 2/1541709 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 93755/1061299 (8.83%)
				id: number,
				media_id: string,
				outbound_url?: string, // 22782/1061299 (2.15%)
			}[],
		}|null, // 178824/1541709 (11.60%)
		gilded: number,
		gildings: {
			gid_1?: number, // 17047/1541709 (1.11%)
			gid_2?: number, // 19157/1541709 (1.24%)
			gid_3?: number, // 7190/1541709 (0.47%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 178824/1541709 (11.60%)
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
			a?: string, // 42252/225430 (18.74%)
			e: "text"|"emoji",
			t?: string, // 183178/225430 (81.26%)
			u?: string, // 42252/225430 (18.74%)
		}[],
		link_flair_template_id?: string, // 473415/1541709 (30.71%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs"|"1bdp3tt6z1trx", // 3/444078 (0.00%)
			oembed?: {
				author_name?: string, // 51740/325329 (15.90%)
				author_url?: string, // 49758/325329 (15.29%)
				cache_age?: number, // 3444/325329 (1.06%)
				description?: string, // 4413/325329 (1.36%)
				height?: number|null, // 325328/325329 (100.00%)
				html?: string, // 325328/325329 (100.00%)
				mean_alpha?: number, // 45/325329 (0.01%)
				provider_name?: string, // 325328/325329 (100.00%)
				provider_url?: string, // 325328/325329 (100.00%)
				thumbnail_height?: number|null, // 308244/325329 (94.75%)
				thumbnail_url?: string, // 321533/325329 (98.83%)
				thumbnail_width?: number|null, // 308244/325329 (94.75%)
				title?: string, // 321873/325329 (98.94%)
				type?: "video"|"rich", // 325328/325329 (100.00%)
				url?: string, // 4359/325329 (1.34%)
				version?: "1.0", // 325328/325329 (100.00%)
				width?: number, // 325328/325329 (100.00%)
			}, // 325329/444078 (73.26%)
			reddit_video?: {
				bitrate_kbps?: number, // 118374/118745 (99.69%)
				dash_url?: string, // 118734/118745 (99.99%)
				duration?: number, // 118734/118745 (99.99%)
				fallback_url?: string, // 118734/118745 (99.99%)
				has_audio?: boolean, // 50342/118745 (42.40%)
				height?: number|null, // 118736/118745 (99.99%)
				hls_url?: string, // 118734/118745 (99.99%)
				is_gif?: boolean, // 118734/118745 (99.99%)
				scrubber_media_url?: string, // 118734/118745 (99.99%)
				transcoding_message?: string, // 11/118745 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 118736/118745 (99.99%)
			}, // 118745/444078 (26.74%)
			type?: string, // 325333/444078 (73.26%)
		},
		media_embed: {
			content?: string|null, // 325332/1541709 (21.10%)
			height?: number, // 325332/1541709 (21.10%)
			scrolling?: boolean, // 325332/1541709 (21.10%)
			width?: number, // 325332/1541709 (21.10%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1215/1107749 (0.11%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1106862/1107749 (99.92%)
				hlsUrl?: string, // 1215/1107749 (0.11%)
				id?: string, // 1106862/1107749 (99.92%)
				isGif?: boolean, // 1215/1107749 (0.11%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1105647/1107749 (99.81%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 808351/1107749 (72.97%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1105647/1107749 (99.81%)
				s?: {
					gif?: string, // 17413/1105647 (1.57%)
					mp4?: string, // 17413/1105647 (1.57%)
					u?: string, // 1088234/1105647 (98.43%)
					x: number,
					y: number,
				}, // 1105647/1107749 (99.81%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 1215/1107749 (0.11%)
				y?: number, // 1215/1107749 (0.11%)
			},
		}|null, // 201040/1541709 (13.04%)
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
				vote_count?: number, // 2573/8749 (29.41%)
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
		}|null, // 2322/1541709 (0.15%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 1187138/1541709 (77.00%)
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
					}, // 148531/1187138 (12.51%)
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
					}, // 148531/1187138 (12.51%)
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
					}, // 860153/1187138 (72.46%)
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
					}, // 862127/1187138 (72.62%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 417430/417488 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 417488/1187138 (35.17%)
		}, // 1187138/1541709 (77.00%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"content_takedown"|"author"|"copyright_takedown"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs"|"1bdp3tt6z1trx", // 3/444078 (0.00%)
			oembed?: {
				author_name?: string, // 51740/325329 (15.90%)
				author_url?: string, // 49758/325329 (15.29%)
				cache_age?: number, // 3444/325329 (1.06%)
				description?: string, // 4413/325329 (1.36%)
				height?: number|null, // 325328/325329 (100.00%)
				html?: string, // 325328/325329 (100.00%)
				mean_alpha?: number, // 45/325329 (0.01%)
				provider_name?: string, // 325328/325329 (100.00%)
				provider_url?: string, // 325328/325329 (100.00%)
				thumbnail_height?: number|null, // 308244/325329 (94.75%)
				thumbnail_url?: string, // 321533/325329 (98.83%)
				thumbnail_width?: number|null, // 308244/325329 (94.75%)
				title?: string, // 321873/325329 (98.94%)
				type?: "video"|"rich", // 325328/325329 (100.00%)
				url?: string, // 4359/325329 (1.34%)
				version?: "1.0", // 325328/325329 (100.00%)
				width?: number, // 325328/325329 (100.00%)
			}, // 325329/444078 (73.26%)
			reddit_video?: {
				bitrate_kbps?: number, // 118374/118745 (99.69%)
				dash_url?: string, // 118734/118745 (99.99%)
				duration?: number, // 118734/118745 (99.99%)
				fallback_url?: string, // 118734/118745 (99.99%)
				has_audio?: boolean, // 50342/118745 (42.40%)
				height?: number|null, // 118736/118745 (99.99%)
				hls_url?: string, // 118734/118745 (99.99%)
				is_gif?: boolean, // 118734/118745 (99.99%)
				scrubber_media_url?: string, // 118734/118745 (99.99%)
				transcoding_message?: string, // 11/118745 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number|null, // 118736/118745 (99.99%)
			}, // 118745/444078 (26.74%)
			type?: string, // 325333/444078 (73.26%)
		},
		secure_media_embed: {
			content?: string|null, // 325332/1541709 (21.10%)
			height?: number, // 325332/1541709 (21.10%)
			media_domain_url?: string, // 325332/1541709 (21.10%)
			scrolling?: boolean, // 325332/1541709 (21.10%)
			width?: number, // 325332/1541709 (21.10%)
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
		top_awarded_type: null|"INACTIVE"|"ACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:sunny2"|"econ:render:lottie:bulb"|"econ:render:lottie:cutie"|"econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1394976/1541709 (90.48%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1556613/44216130 (3.52%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 118909/44216130 (0.27%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 118909/44216130 (0.27%)
	embed_url?: null|string, // 118909/44216130 (0.27%)
	event_end?: number, // 77/44216130 (0.00%)
	event_is_live?: boolean, // 77/44216130 (0.00%)
	event_start?: number, // 77/44216130 (0.00%)
	events?: [], // 118909/44216130 (0.27%)
	eventsOnRender?: [], // 118909/44216130 (0.27%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Order Now"|"Play Now"|"Download"|"Pre-order Now"|"Watch Now"|"Apply Now"|"Install"|"Contact Us"|"Get Showtimes"|"See Menu"|"Get a Quote", // 15888/10251671 (0.15%)
			caption?: string, // 584059/10251671 (5.70%)
			display_url?: string, // 18074/10251671 (0.18%)
			id: number,
			media_id: string,
			outbound_url?: string, // 207033/10251671 (2.02%)
			product?: {
				description: string,
				price?: string, // 1341/1515 (88.51%)
				title: string,
			}, // 1515/10251671 (0.01%)
		}[],
	}|null, // 3517346/44216130 (7.95%)
	gilded: number,
	gildings: {
		gid_1?: number, // 1561/44216130 (0.00%)
		gid_2?: number, // 5525/44216130 (0.01%)
		gid_3?: number, // 1278/44216130 (0.00%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 118909/44216130 (0.27%)
	id: string,
	impression_id?: null, // 118909/44216130 (0.27%)
	impression_id_str?: null, // 118909/44216130 (0.27%)
	is_blank?: boolean, // 118909/44216130 (0.27%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3517346/44216130 (7.95%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 118909/44216130 (0.27%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 766033/6696584 (11.44%)
		e: "text"|"emoji",
		t?: string, // 5930551/6696584 (88.56%)
		u?: string, // 766033/6696584 (11.44%)
	}[],
	link_flair_template_id?: string, // 13285577/44216130 (30.05%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1b9nq3spxh7af"|"1bdp3tt6z1trx"|"1baojffv0ubia", // 44/3790833 (0.00%)
		oembed?: {
			author_name?: string, // 844332/2925047 (28.87%)
			author_url?: string, // 834223/2925047 (28.52%)
			cache_age?: number, // 59820/2925047 (2.05%)
			description?: string, // 163046/2925047 (5.57%)
			height?: number|null, // 2925038/2925047 (100.00%)
			html?: string, // 2925038/2925047 (100.00%)
			mean_alpha?: number, // 2476/2925047 (0.08%)
			provider_name?: string, // 2925038/2925047 (100.00%)
			provider_url?: string, // 2925038/2925047 (100.00%)
			thumbnail_height?: number|null, // 2799420/2925047 (95.71%)
			thumbnail_url?: string, // 2865591/2925047 (97.97%)
			thumbnail_width?: number|null, // 2799420/2925047 (95.71%)
			title?: string, // 2865194/2925047 (97.95%)
			type?: "video"|"rich", // 2925038/2925047 (100.00%)
			url?: string, // 114903/2925047 (3.93%)
			version?: "1.0", // 2925038/2925047 (100.00%)
			width?: number, // 2925038/2925047 (100.00%)
		}, // 2925047/3790833 (77.16%)
		reddit_video?: {
			bitrate_kbps?: number, // 862238/865742 (99.60%)
			dash_url?: string, // 862238/865742 (99.60%)
			duration?: number, // 862238/865742 (99.60%)
			fallback_url?: string, // 862238/865742 (99.60%)
			has_audio?: boolean, // 394412/865742 (45.56%)
			height?: number|null, // 864125/865742 (99.81%)
			hls_url?: string, // 862238/865742 (99.60%)
			is_gif?: boolean, // 862238/865742 (99.60%)
			scrubber_media_url?: string, // 862238/865742 (99.60%)
			transcoding_message?: string, // 3504/865742 (0.40%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 864125/865742 (99.81%)
		}, // 865742/3790833 (22.84%)
		type?: string, // 2925091/3790833 (77.16%)
	},
	media_embed: {
		content?: string|null, // 2925091/44216130 (6.62%)
		height?: number, // 2925091/44216130 (6.62%)
		scrolling?: boolean, // 2925091/44216130 (6.62%)
		width?: number, // 2925091/44216130 (6.62%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 19970/10804997 (0.18%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 10703021/10804997 (99.06%)
			hlsUrl?: string, // 19970/10804997 (0.18%)
			id?: string, // 10703021/10804997 (99.06%)
			isGif?: boolean, // 19970/10804997 (0.18%)
			m?: "image/jpg"|"image/png"|"image/gif", // 10683051/10804997 (98.87%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 5060951/10804997 (46.84%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 10683051/10804997 (98.87%)
			s?: {
				gif?: string, // 94861/10683051 (0.89%)
				mp4?: string, // 94861/10683051 (0.89%)
				u?: string, // 10588190/10683051 (99.11%)
				x: number,
				y: number,
			}, // 10683051/10804997 (98.87%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 19970/10804997 (0.18%)
			y?: number, // 19970/10804997 (0.18%)
		},
	}|null, // 4034501/44216130 (9.12%)
	media_only: boolean,
	mobile_ad_url?: string, // 118909/44216130 (0.27%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 118909/44216130 (0.27%)
	outbound_link?: {
	}, // 118909/44216130 (0.27%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 105398/386651 (27.26%)
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
	}|null, // 124399/44216130 (0.28%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 21242067/44216130 (48.04%)
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
				}, // 2075322/21242067 (9.77%)
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
				}, // 2075322/21242067 (9.77%)
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
				}, // 12534806/21242067 (59.01%)
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
				}, // 12604263/21242067 (59.34%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 3076169/3076237 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 3076237/21242067 (14.48%)
	}, // 21242067/44216130 (48.04%)
	priority_id?: null, // 118909/44216130 (0.27%)
	product_ids?: [], // 118909/44216130 (0.27%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 118909/44216130 (0.27%)
	promoted?: boolean, // 118909/44216130 (0.27%)
	promoted_by?: null, // 118909/44216130 (0.27%)
	promoted_display_name?: null, // 118909/44216130 (0.27%)
	promoted_url?: null, // 118909/44216130 (0.27%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"deleted"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
	report_reasons: null,
	retrieved_on?: number, // 44006829/44216130 (99.53%)
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1b9nq3spxh7af"|"1bdp3tt6z1trx"|"1baojffv0ubia", // 44/3790833 (0.00%)
		oembed?: {
			author_name?: string, // 844332/2925047 (28.87%)
			author_url?: string, // 834223/2925047 (28.52%)
			cache_age?: number, // 59820/2925047 (2.05%)
			description?: string, // 163046/2925047 (5.57%)
			height?: number|null, // 2925038/2925047 (100.00%)
			html?: string, // 2925038/2925047 (100.00%)
			mean_alpha?: number, // 2476/2925047 (0.08%)
			provider_name?: string, // 2925038/2925047 (100.00%)
			provider_url?: string, // 2925038/2925047 (100.00%)
			thumbnail_height?: number|null, // 2799420/2925047 (95.71%)
			thumbnail_url?: string, // 2865591/2925047 (97.97%)
			thumbnail_width?: number|null, // 2799420/2925047 (95.71%)
			title?: string, // 2865194/2925047 (97.95%)
			type?: "video"|"rich", // 2925038/2925047 (100.00%)
			url?: string, // 114903/2925047 (3.93%)
			version?: "1.0", // 2925038/2925047 (100.00%)
			width?: number, // 2925038/2925047 (100.00%)
		}, // 2925047/3790833 (77.16%)
		reddit_video?: {
			bitrate_kbps?: number, // 862238/865742 (99.60%)
			dash_url?: string, // 862238/865742 (99.60%)
			duration?: number, // 862238/865742 (99.60%)
			fallback_url?: string, // 862238/865742 (99.60%)
			has_audio?: boolean, // 394412/865742 (45.56%)
			height?: number|null, // 864125/865742 (99.81%)
			hls_url?: string, // 862238/865742 (99.60%)
			is_gif?: boolean, // 862238/865742 (99.60%)
			scrubber_media_url?: string, // 862238/865742 (99.60%)
			transcoding_message?: string, // 3504/865742 (0.40%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 864125/865742 (99.81%)
		}, // 865742/3790833 (22.84%)
		type?: string, // 2925091/3790833 (77.16%)
	},
	secure_media_embed: {
		content?: string|null, // 2925091/44216130 (6.62%)
		height?: number, // 2925091/44216130 (6.62%)
		media_domain_url?: string, // 2925091/44216130 (6.62%)
		scrolling?: boolean, // 2925091/44216130 (6.62%)
		width?: number, // 2925091/44216130 (6.62%)
	},
	selftext: string,
	selftext_html?: null|string, // 209301/44216130 (0.47%)
	send_replies: boolean,
	show_media?: boolean, // 118909/44216130 (0.27%)
	sk_ad_network_data?: null, // 118909/44216130 (0.27%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 1194/44216130 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 118909/44216130 (0.27%)
	third_party_tracking?: null, // 118909/44216130 (0.27%)
	third_party_tracking_2?: null, // 118909/44216130 (0.27%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE"|"ACTIVE",
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 28075384/44216130 (63.50%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}