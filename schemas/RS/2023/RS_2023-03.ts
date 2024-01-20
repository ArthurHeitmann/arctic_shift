interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM",
			award_type: "global",
			awardings_required_to_grant_benefits: null,
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: null|number,
			days_of_premium: null|number,
			description: string,
			end_date: null,
			giver_coin_reward: null,
			icon_format: "APNG"|null,
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: "Narwhal Salute"|"Helpful (Pro)"|"Powerups Post"|"Platinum"|"Helpful"|"Starstruck"|"Bravo Grande!",
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
			subreddit_id: null,
			tiers_by_required_awardings: null,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "FeatureSouthern5274"|"DA-numberfour"|"ProfMoriarty123"|"staravi01"|"ma1nutrisha"|"TayluxSwift"|"MarvelsGrantMan136"|"Sulat_Studios"|"Emilien-301"|"ComprehensiveDate591"|"emikocov"|"Csea27"|"LackJolly381"|"edgeyworth95",
		author_flair_background_color: "#ffb000"|"transparent"|"#df73ff"|null,
		author_flair_css_class: null|"zBowser",
		author_flair_richtext: {
			a?: ":Bowser:", // 4/36 (11.11%)
			e: "text"|"emoji",
			t?: "Citizen Detective"|"Heliotrope"|"Platinum"|"Diamond", // 32/36 (88.89%)
			u?: string, // 4/36 (11.11%)
		}[],
		author_flair_template_id: "b7a69992-5c7b-11ec-b7b1-562e97fb6ee5"|"a6850c46-cf81-11ed-b172-c6cf46201e36"|"8f9c45aa-fc0a-11ea-b3f3-0e2e156976a7"|"0737efca-97bf-11ea-96b7-0e031196668f"|"7a4443d8-fc0a-11ea-ac4f-0eee064bcd15"|null,
		author_flair_text: "Citizen Detective"|"Heliotrope"|"Platinum"|":Bowser:"|"Diamond"|null,
		author_flair_text_color: "dark"|null,
		author_flair_type: "richtext"|"text",
		author_fullname: "t2_gykevmk8"|"t2_7pvut"|"t2_12oyix"|"t2_79lprx3n"|"t2_5rqad2bt"|"t2_4w8yway6"|"t2_5adwlxvn"|"t2_hpjf3izh"|"t2_afm5uzz4"|"t2_6nhjdpzt"|"t2_rr9veiec"|"t2_egsucdbf"|"t2_izw01cn8"|"t2_3ighj688",
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
		distinguished: null|"moderator",
		domain: "i.redd.it"|"reddit.com"|"self.Yellowjackets"|"self.Ulta"|"deadline.com",
		downs: number,
		edited: boolean,
		gallery_data?: {
			items: {
				caption?: string, // 6/32 (18.75%)
				id: number,
				media_id: "akuhh8qpasoa1"|"k0omt7qpasoa1"|"xtmsl8qpasoa1"|"671pwt6hmina1"|"104o7u6hmina1"|"lfjb4nrgwfha1"|"uy1j7mrgwfha1",
			}[],
		}, // 13/69 (18.84%)
		gilded: number,
		gildings: {
			gid_3?: number, // 4/69 (5.80%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 13/69 (18.84%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "#a06324"|""|"#b70713"|"#ffd635"|"#ff4500"|"#94e044"|null,
		link_flair_css_class: ""|"discussion"|"two"|"question"|null,
		link_flair_richtext: {
			a?: ":Discussion:"|":Question:", // 12/68 (17.65%)
			e: "text"|"emoji",
			t?: "General Discussion"|"Discussion "|"Haul"|"Episode Discussion"|"Cast/Crew Post"|"News"|"Question "|"Discussion", // 56/68 (82.35%)
			u?: string, // 12/68 (17.65%)
		}[],
		link_flair_template_id?: "e2ee77aa-4e70-11ec-818a-e6bb6e005914"|"692b0768-c5a7-11e7-8656-0e9704df232c"|"e7588e1e-5990-11e6-b602-0e587fe1a7db"|"4319e390-4e70-11ec-be69-7a4f65e79b25"|"10aff7be-4e70-11ec-ac07-d2e02e6eb40b"|"f58a12e4-4e6f-11ec-a99f-1ac77dc2ffec"|"6d98af6c-c5a7-11e7-a600-0e8846fb8fe0"|"b7f4003e-ec64-11ea-9e3d-0eccd226b929", // 56/69 (81.16%)
		link_flair_text: "General Discussion"|"Discussion :Discussion:"|"Haul"|"Episode Discussion"|"Cast/Crew Post"|"News"|"Question :Question:"|"Discussion"|null,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "richtext"|"text",
		locked: boolean,
		media: null,
		media_embed: {
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "akuhh8qpasoa1"|"k0omt7qpasoa1"|"xtmsl8qpasoa1"|"104o7u6hmina1"|"671pwt6hmina1"|"lfjb4nrgwfha1"|"uy1j7mrgwfha1",
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
		}, // 13/69 (18.84%)
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
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link", // 37/69 (53.62%)
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
		}, // 37/69 (53.62%)
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
			community_icon: string|null,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "Yellowjackets"|"Ulta"|"Mario",
			display_name_prefixed: "r/Yellowjackets"|"r/Ulta"|"r/Mario",
			free_form_reports: boolean,
			header_img: null|string,
			header_size: null|number[],
			icon_color: "",
			icon_img: "",
			icon_size: null,
			is_chat_post_feature_enabled: boolean,
			key_color: ""|"#ff8717"|"#ea0027",
			link_flair_enabled: boolean,
			link_flair_position: "right"|"left",
			name: "t5_j07gx"|"t5_30vvl"|"t5_2qlqx",
			over_18: boolean,
			previous_names: [],
			primary_color: "#ffb000"|""|"#ff0000",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit a Link Post",
			submit_text_label: ""|"Submit a Text Post",
			subreddit_type: "public",
			subscribers: number,
			title: " Yellowjackets showtime series"|"Unofficial subreddit for Ulta Beauty"|"Let's-a Go!",
			url: "/r/Yellowjackets/"|"/r/Ulta/"|"/r/Mario/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "Yellowjackets"|"Ulta"|"Mario",
		subreddit_id: "t5_j07gx"|"t5_30vvl"|"t5_2qlqx",
		subreddit_name_prefixed: "r/Yellowjackets"|"r/Ulta"|"r/Mario",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null|"new",
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
		url_overridden_by_dest?: string, // 50/69 (72.46%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 95107/39724726 (0.24%)
	ad_supplementary_text_md?: null|string, // 95107/39724726 (0.24%)
	adserver_click_url?: null, // 95107/39724726 (0.24%)
	adserver_imp_pixel?: null, // 95107/39724726 (0.24%)
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
	app_store_data?: null, // 95107/39724726 (0.24%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 100618/39724726 (0.25%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 736028/2000254 (36.80%)
		e: "text"|"emoji",
		t?: string, // 1264226/2000254 (63.20%)
		u?: string, // 736028/2000254 (36.80%)
	}[], // 30727517/39724726 (77.35%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 30727517/39724726 (77.35%)
	author_fullname?: string, // 30727517/39724726 (77.35%)
	author_id?: string|null, // 95107/39724726 (0.24%)
	author_patreon_flair?: boolean, // 30727517/39724726 (77.35%)
	author_premium?: boolean, // 30727517/39724726 (77.35%)
	awarders: [],
	banned_by: null,
	call_to_action?: string, // 76826/39724726 (0.19%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|""|"drawing_and_painting"|"animals"|"gaming"|"photography"|"entertainment"|"videos"|"food"|"memes"|"writing",
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
			display_name: "xboxinsiders"|"DisneyNews"|"ChoicesVIP"|"ADHD"|"HealthAnxiety"|"LoveIslandTV"|"Kerala"|"ArgentinaBenderStyle"|"TheNightAgentShow",
			display_name_prefixed: "r/xboxinsiders"|"r/DisneyNews"|"r/ChoicesVIP"|"r/ADHD"|"r/HealthAnxiety"|"r/LoveIslandTV"|"r/Kerala"|"r/ArgentinaBenderStyle"|"r/TheNightAgentShow",
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#545452"|"#46d160"|"#ff8717"|"#7e53c1"|"#24a0ed"|"#222222",
			mod_permissions: [],
			name: "t5_3hrub"|"t5_2y9ql"|"t5_2vu55y"|"t5_2qnwb"|"t5_2vmoc"|"t5_3lwmq"|"t5_2qhb2"|"t5_q369p"|"t5_84a3wm",
			over_18: boolean,
			primary_color: "#373c3f"|""|"#d33a5a"|"#0c89b6"|"#94e044"|"#ff66ac"|"#3d5f7e",
			sr: "xboxinsiders"|"DisneyNews"|"ChoicesVIP"|"ADHD"|"HealthAnxiety"|"LoveIslandTV"|"Kerala"|"ArgentinaBenderStyle"|"TheNightAgentShow",
			sr_display_name_prefixed: "r/xboxinsiders"|"r/DisneyNews"|"r/ChoicesVIP"|"r/ADHD"|"r/HealthAnxiety"|"r/LoveIslandTV"|"r/Kerala"|"r/ArgentinaBenderStyle"|"r/TheNightAgentShow",
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: "/r/xboxinsiders/"|"/r/DisneyNews/"|"/r/ChoicesVIP/"|"/r/ADHD/"|"/r/HealthAnxiety/"|"/r/LoveIslandTV/"|"/r/Kerala/"|"/r/ArgentinaBenderStyle/"|"/r/TheNightAgentShow/",
			user_can_crosspost: null|boolean,
			whitelist_status: null|"all_ads",
		}, // 11/12867 (0.09%)
		subreddit_id: string,
		title: string,
	}[], // 12867/39724726 (0.03%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1991723/39724726 (5.01%)
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
		author_cakeday?: boolean, // 4650/1845659 (0.25%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 48399/135439 (35.73%)
			e: "text"|"emoji",
			t?: string, // 87040/135439 (64.27%)
			u?: string, // 48399/135439 (35.73%)
		}[], // 1654560/1845659 (89.65%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1654560/1845659 (89.65%)
		author_fullname?: string, // 1654560/1845659 (89.65%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1654560/1845659 (89.65%)
		author_premium?: boolean, // 1654560/1845659 (89.65%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 458/1845659 (0.02%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"animals"|"drawing_and_painting"|"entertainment"|"gaming"|"photography"|"videos",
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
				display_name: "xboxinsiders"|"Delaware"|"QuakeChampions",
				display_name_prefixed: "r/xboxinsiders"|"r/Delaware"|"r/QuakeChampions",
				icon_img: string,
				icon_size: number[]|null,
				key_color: "#46d160"|"#ddbd37"|"#545452",
				mod_permissions: [],
				name: "t5_3hrub"|"t5_2qy6p"|"t5_3f0ug",
				over_18: boolean,
				primary_color: "#373c3f"|"",
				sr: "xboxinsiders"|"Delaware"|"QuakeChampions",
				sr_display_name_prefixed: "r/xboxinsiders"|"r/Delaware"|"r/QuakeChampions",
				subreddit_type: "public",
				subscribers: number,
				title: "Xbox Insiders"|"Delaware"|"Quake Champions",
				url: "/r/xboxinsiders/"|"/r/Delaware/"|"/r/QuakeChampions/",
				user_can_crosspost: boolean|null,
				whitelist_status: "all_ads",
			}, // 3/1418 (0.21%)
			subreddit_id: string,
			title: string,
		}[], // 1418/1845659 (0.08%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"writing"|"diy_and_crafts"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 1/1845659 (0.00%)
		event_is_live?: boolean, // 1/1845659 (0.00%)
		event_start?: number, // 1/1845659 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 114095/723488 (15.77%)
				id: number,
				media_id: string,
				outbound_url?: string, // 20883/723488 (2.89%)
			}[],
		}|null, // 148162/1845659 (8.03%)
		gilded: number,
		gildings: {
			gid_1?: number, // 25741/1845659 (1.39%)
			gid_2?: number, // 24263/1845659 (1.31%)
			gid_3?: number, // 5978/1845659 (0.32%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 148162/1845659 (8.03%)
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
			a?: string, // 32585/255097 (12.77%)
			e: "text"|"emoji",
			t?: string, // 222512/255097 (87.23%)
			u?: string, // 32585/255097 (12.77%)
		}[],
		link_flair_template_id?: string, // 509602/1845659 (27.61%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		live_audio?: {
			is_live: boolean,
			recording_dash_url?: "", // 16/19 (84.21%)
			recording_duration_seconds?: number, // 16/19 (84.21%)
			recording_fallback_url?: "", // 16/19 (84.21%)
			recording_hls_url?: "", // 16/19 (84.21%)
			recording_status: number,
			room_id: string,
			room_status: number,
		}, // 19/1845659 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 6/641151 (0.00%)
			oembed?: {
				author_name?: string, // 110925/502352 (22.08%)
				author_url?: string, // 98827/502352 (19.67%)
				cache_age?: number, // 5658/502352 (1.13%)
				description?: string, // 17777/502352 (3.54%)
				height?: number|null, // 502344/502352 (100.00%)
				html?: string, // 502344/502352 (100.00%)
				mean_alpha?: number, // 23/502352 (0.00%)
				provider_name?: string, // 502344/502352 (100.00%)
				provider_url?: string, // 502344/502352 (100.00%)
				thumbnail_height?: number|null, // 482499/502352 (96.05%)
				thumbnail_url?: string, // 496021/502352 (98.74%)
				thumbnail_width?: number|null, // 482499/502352 (96.05%)
				title?: string, // 496637/502352 (98.86%)
				type?: "video"|"rich", // 502344/502352 (100.00%)
				url?: string, // 9301/502352 (1.85%)
				version?: "1.0", // 502344/502352 (100.00%)
				width?: number, // 502344/502352 (100.00%)
			}, // 502352/641151 (78.35%)
			reddit_video?: {
				bitrate_kbps?: number, // 138280/138793 (99.63%)
				dash_url?: string, // 138782/138793 (99.99%)
				duration?: number, // 138782/138793 (99.99%)
				fallback_url?: string, // 138782/138793 (99.99%)
				height?: number, // 138782/138793 (99.99%)
				hls_url?: string, // 138782/138793 (99.99%)
				is_gif?: boolean, // 138782/138793 (99.99%)
				scrubber_media_url?: string, // 138782/138793 (99.99%)
				transcoding_message?: string, // 11/138793 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number, // 138782/138793 (99.99%)
			}, // 138793/641151 (21.65%)
			type?: string, // 502358/641151 (78.35%)
		},
		media_embed: {
			content?: string|null, // 502358/1845659 (27.22%)
			height?: number, // 502358/1845659 (27.22%)
			scrolling?: boolean, // 502358/1845659 (27.22%)
			width?: number, // 502358/1845659 (27.22%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1268/765885 (0.17%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 765746/765885 (99.98%)
				hlsUrl?: string, // 1268/765885 (0.17%)
				id?: string, // 765746/765885 (99.98%)
				isGif?: boolean, // 1268/765885 (0.17%)
				m?: "image/jpg"|"image/png"|"image/gif", // 764478/765885 (99.82%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 527332/765885 (68.85%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 764478/765885 (99.82%)
				s?: {
					gif?: string, // 14830/764478 (1.94%)
					mp4?: string, // 14830/764478 (1.94%)
					u?: string, // 749648/764478 (98.06%)
					x: number,
					y: number,
				}, // 764478/765885 (99.82%)
				status: "valid"|"failed",
				x?: number, // 1268/765885 (0.17%)
				y?: number, // 1268/765885 (0.17%)
			},
		}|null, // 169269/1845659 (9.17%)
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
		parent_whitelist_status: null|"all_ads"|"some_ads"|"no_ads"|"house_only",
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				total_stake_amount?: number, // 118/12262 (0.96%)
				vote_count: number,
			}[],
			prediction_status: null|"RESOLVED"|"OPEN",
			resolved_option_id: null|string,
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|null, // 3746/1845659 (0.20%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video"|"gallery", // 1347681/1845659 (73.02%)
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
					}, // 93483/1347681 (6.94%)
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
					}, // 93483/1347681 (6.94%)
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
					}, // 952372/1347681 (70.67%)
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
					}, // 954907/1347681 (70.86%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 593132/593289 (99.97%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 593289/1347681 (44.02%)
		}, // 1347681/1845659 (73.02%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"content_takedown"|"author"|"automod_filtered"|"copyright_takedown"|"community_ops",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 6/641151 (0.00%)
			oembed?: {
				author_name?: string, // 110925/502352 (22.08%)
				author_url?: string, // 98827/502352 (19.67%)
				cache_age?: number, // 5658/502352 (1.13%)
				description?: string, // 17777/502352 (3.54%)
				height?: number|null, // 502344/502352 (100.00%)
				html?: string, // 502344/502352 (100.00%)
				mean_alpha?: number, // 23/502352 (0.00%)
				provider_name?: string, // 502344/502352 (100.00%)
				provider_url?: string, // 502344/502352 (100.00%)
				thumbnail_height?: number|null, // 482499/502352 (96.05%)
				thumbnail_url?: string, // 496021/502352 (98.74%)
				thumbnail_width?: number|null, // 482499/502352 (96.05%)
				title?: string, // 496637/502352 (98.86%)
				type?: "video"|"rich", // 502344/502352 (100.00%)
				url?: string, // 9301/502352 (1.85%)
				version?: "1.0", // 502344/502352 (100.00%)
				width?: number, // 502344/502352 (100.00%)
			}, // 502352/641151 (78.35%)
			reddit_video?: {
				bitrate_kbps?: number, // 138280/138793 (99.63%)
				dash_url?: string, // 138782/138793 (99.99%)
				duration?: number, // 138782/138793 (99.99%)
				fallback_url?: string, // 138782/138793 (99.99%)
				height?: number, // 138782/138793 (99.99%)
				hls_url?: string, // 138782/138793 (99.99%)
				is_gif?: boolean, // 138782/138793 (99.99%)
				scrubber_media_url?: string, // 138782/138793 (99.99%)
				transcoding_message?: string, // 11/138793 (0.01%)
				transcoding_status: "completed"|"error",
				width?: number, // 138782/138793 (99.99%)
			}, // 138793/641151 (21.65%)
			type?: string, // 502358/641151 (78.35%)
		},
		secure_media_embed: {
			content?: string|null, // 502358/1845659 (27.22%)
			height?: number, // 502358/1845659 (27.22%)
			media_domain_url?: string, // 502358/1845659 (27.22%)
			scrolling?: boolean, // 502358/1845659 (27.22%)
			width?: number, // 502358/1845659 (27.22%)
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
		subreddit_type: "public"|"restricted"|"user"|"archived",
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		tournament_data?: {
			currency: "GAME_TOKENS",
			name: "r/tories SNP leadership race"|"R/MEMES MEME QUIZ #3"|"r/PetsareAmazing Predictions Tournament",
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
			status: "LIVE",
			subreddit_id: "t5_2sh7k"|"t5_2qjpg"|"t5_2o1p36",
			theme_id: "theme_1",
			total_participants: number,
			tournament_id: string,
		}, // 4/1845659 (0.00%)
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb"|"econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1702805/1845659 (92.26%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only",
		wls: null|number,
	}[], // 1991723/39724726 (5.01%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 95107/39724726 (0.24%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 95107/39724726 (0.24%)
	embed_url?: null|string, // 95107/39724726 (0.24%)
	event_end?: number, // 11/39724726 (0.00%)
	event_is_live?: boolean, // 11/39724726 (0.00%)
	event_start?: number, // 11/39724726 (0.00%)
	events?: [], // 95107/39724726 (0.24%)
	eventsOnRender?: [], // 95107/39724726 (0.24%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Order Now"|"Download"|"Contact Us"|"Play Now"|"Install"|"Watch Now"|"Get a Quote"|"Apply Now"|"Pre-order Now"|"See Menu"|"Get Showtimes", // 13442/6306133 (0.21%)
			caption?: string, // 676879/6306133 (10.73%)
			display_url?: string, // 12867/6306133 (0.20%)
			id: number,
			media_id: string,
			outbound_url?: string, // 143272/6306133 (2.27%)
			product?: {
				description: string,
				price?: string, // 191/221 (86.43%)
				title: string,
			}, // 221/6306133 (0.00%)
		}[],
	}|null, // 2871319/39724726 (7.23%)
	gilded: number,
	gildings: {
		gid_1?: number, // 8727/39724726 (0.02%)
		gid_2?: number, // 23001/39724726 (0.06%)
		gid_3?: number, // 3739/39724726 (0.01%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 95107/39724726 (0.24%)
	id: string,
	impression_id?: null, // 95107/39724726 (0.24%)
	impression_id_str?: null, // 95107/39724726 (0.24%)
	is_blank?: boolean, // 95107/39724726 (0.24%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 2871319/39724726 (7.23%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 95107/39724726 (0.24%)
	is_video: boolean,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 588065/6808701 (8.64%)
		e: "text"|"emoji",
		t?: string, // 6220636/6808701 (91.36%)
		u?: string, // 588065/6808701 (8.64%)
	}[],
	link_flair_template_id?: string, // 13215937/39724726 (33.27%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	live_audio?: {
		is_live: boolean,
		recording_dash_url?: "", // 612/806 (75.93%)
		recording_duration_seconds?: number, // 616/806 (76.43%)
		recording_fallback_url?: string, // 612/806 (75.93%)
		recording_hls_url?: "", // 612/806 (75.93%)
		recording_status?: number, // 773/806 (95.91%)
		room_id: string,
		room_status: number,
	}, // 806/39724726 (0.00%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1alkjhymil8z2"|"1amd57g6alje4"|"1an51kot9hn7s"|"1andfmzdvdf1b"|"1aoj5v5ytvy53"|"1aq0pezhei0pa", // 44/4165294 (0.00%)
		oembed?: {
			author_name?: string, // 1055659/3143711 (33.58%)
			author_url?: string, // 1005011/3143711 (31.97%)
			cache_age?: number, // 129798/3143711 (4.13%)
			description?: string, // 304567/3143711 (9.69%)
			height?: number|null, // 3143635/3143711 (100.00%)
			html?: string, // 3143635/3143711 (100.00%)
			mean_alpha?: number, // 2896/3143711 (0.09%)
			provider_name?: string, // 3143635/3143711 (100.00%)
			provider_url?: string, // 3143635/3143711 (100.00%)
			thumbnail_height?: number|null, // 2983487/3143711 (94.90%)
			thumbnail_url?: string, // 3014199/3143711 (95.88%)
			thumbnail_width?: number|null, // 2983487/3143711 (94.90%)
			title?: string, // 3012438/3143711 (95.82%)
			type?: "video"|"rich", // 3143635/3143711 (100.00%)
			url?: string, // 280508/3143711 (8.92%)
			version?: "1.0", // 3143635/3143711 (100.00%)
			width?: number, // 3143635/3143711 (100.00%)
		}, // 3143711/4165294 (75.47%)
		reddit_video?: {
			bitrate_kbps?: number, // 1017203/1021539 (99.58%)
			dash_url?: string, // 1017203/1021539 (99.58%)
			duration?: number, // 1017203/1021539 (99.58%)
			fallback_url?: string, // 1017203/1021539 (99.58%)
			height?: number|null, // 1018084/1021539 (99.66%)
			hls_url?: string, // 1017203/1021539 (99.58%)
			is_gif?: boolean, // 1017203/1021539 (99.58%)
			scrubber_media_url?: string, // 1017203/1021539 (99.58%)
			transcoding_message?: string, // 4336/1021539 (0.42%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1018084/1021539 (99.66%)
		}, // 1021539/4165294 (24.53%)
		type?: string, // 3143755/4165294 (75.47%)
	},
	media_embed: {
		content?: string|null, // 3143755/39724726 (7.91%)
		height?: number, // 3143755/39724726 (7.91%)
		scrolling?: boolean, // 3143755/39724726 (7.91%)
		width?: number, // 3143755/39724726 (7.91%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 21750/6802912 (0.32%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 6798921/6802912 (99.94%)
			hlsUrl?: string, // 21750/6802912 (0.32%)
			id?: string, // 6798921/6802912 (99.94%)
			isGif?: boolean, // 21750/6802912 (0.32%)
			m?: "image/jpg"|"image/png"|"image/gif", // 6777171/6802912 (99.62%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 2526984/6802912 (37.15%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 6777171/6802912 (99.62%)
			s?: {
				gif?: string, // 63396/6777171 (0.94%)
				mp4?: string, // 63396/6777171 (0.94%)
				u?: string, // 6713775/6777171 (99.06%)
				x: number,
				y: number,
			}, // 6777171/6802912 (99.62%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 21750/6802912 (0.32%)
			y?: number, // 21750/6802912 (0.32%)
		},
	}|null, // 3329510/39724726 (8.38%)
	media_only: boolean,
	mobile_ad_url?: string, // 95107/39724726 (0.24%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 95107/39724726 (0.24%)
	outbound_link?: {
	}, // 95107/39724726 (0.24%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"no_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			total_stake_amount?: number, // 4431/364361 (1.22%)
			vote_count?: number, // 364358/364361 (100.00%)
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
	}|null, // 137990/39724726 (0.35%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 14415101/39724726 (36.29%)
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
				}, // 576504/14415101 (4.00%)
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
				}, // 576504/14415101 (4.00%)
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
				}, // 7457498/14415101 (51.73%)
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
				}, // 7522352/14415101 (52.18%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1527215/1527371 (99.99%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1527371/14415101 (10.60%)
	}, // 14415101/39724726 (36.29%)
	priority_id?: null, // 95107/39724726 (0.24%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 95107/39724726 (0.24%)
	promoted?: boolean, // 95107/39724726 (0.24%)
	promoted_by?: null, // 95107/39724726 (0.24%)
	promoted_display_name?: null, // 95107/39724726 (0.24%)
	promoted_url?: null, // 95107/39724726 (0.24%)
	pwls: null|number,
	quarantine: boolean,
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"author"|"community_ops"|"anti_evil_ops",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1alkjhymil8z2"|"1amd57g6alje4"|"1an51kot9hn7s"|"1andfmzdvdf1b"|"1aoj5v5ytvy53"|"1aq0pezhei0pa", // 44/4165294 (0.00%)
		oembed?: {
			author_name?: string, // 1055659/3143711 (33.58%)
			author_url?: string, // 1005011/3143711 (31.97%)
			cache_age?: number, // 129798/3143711 (4.13%)
			description?: string, // 304567/3143711 (9.69%)
			height?: number|null, // 3143635/3143711 (100.00%)
			html?: string, // 3143635/3143711 (100.00%)
			mean_alpha?: number, // 2896/3143711 (0.09%)
			provider_name?: string, // 3143635/3143711 (100.00%)
			provider_url?: string, // 3143635/3143711 (100.00%)
			thumbnail_height?: number|null, // 2983487/3143711 (94.90%)
			thumbnail_url?: string, // 3014199/3143711 (95.88%)
			thumbnail_width?: number|null, // 2983487/3143711 (94.90%)
			title?: string, // 3012438/3143711 (95.82%)
			type?: "video"|"rich", // 3143635/3143711 (100.00%)
			url?: string, // 280508/3143711 (8.92%)
			version?: "1.0", // 3143635/3143711 (100.00%)
			width?: number, // 3143635/3143711 (100.00%)
		}, // 3143711/4165294 (75.47%)
		reddit_video?: {
			bitrate_kbps?: number, // 1017203/1021539 (99.58%)
			dash_url?: string, // 1017203/1021539 (99.58%)
			duration?: number, // 1017203/1021539 (99.58%)
			fallback_url?: string, // 1017203/1021539 (99.58%)
			height?: number|null, // 1018084/1021539 (99.66%)
			hls_url?: string, // 1017203/1021539 (99.58%)
			is_gif?: boolean, // 1017203/1021539 (99.58%)
			scrubber_media_url?: string, // 1017203/1021539 (99.58%)
			transcoding_message?: string, // 4336/1021539 (0.42%)
			transcoding_status: "completed"|"error",
			width?: number|null, // 1018084/1021539 (99.66%)
		}, // 1021539/4165294 (24.53%)
		type?: string, // 3143755/4165294 (75.47%)
	},
	secure_media_embed: {
		content?: string|null, // 3143755/39724726 (7.91%)
		height?: number, // 3143755/39724726 (7.91%)
		media_domain_url?: string, // 3143755/39724726 (7.91%)
		scrolling?: boolean, // 3143755/39724726 (7.91%)
		width?: number, // 3143755/39724726 (7.91%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 95107/39724726 (0.24%)
	sk_ad_network_data?: null, // 95107/39724726 (0.24%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 1588/39724726 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"qa"|"confidence"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 95107/39724726 (0.24%)
	third_party_tracking?: null, // 95107/39724726 (0.24%)
	third_party_tracking_2?: null, // 95107/39724726 (0.24%)
	thumbnail: string,
	thumbnail_height?: number|null, // 39722411/39724726 (99.99%)
	thumbnail_width?: number|null, // 39722411/39724726 (99.99%)
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	tournament_data?: {
		currency: "GAME_TOKENS",
		name: string,
		predictions?: {
			body: string,
			created_at: number,
			id: string,
			is_nsfw: boolean,
			is_rtjson: boolean,
			is_spoiler: boolean,
			options: {
				id: string,
				image_url: null|"https://google.com",
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
		}[], // 81/88 (92.05%)
		status: "CLOSED"|"LIVE",
		subreddit_id: string,
		theme_id: "theme_1"|"theme_6"|"theme_2"|"theme_4"|"theme_5"|"theme_8"|"theme_7"|"theme_3",
		total_participants: number,
		tournament_id: string,
	}, // 88/39724726 (0.00%)
	treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 26476402/39724726 (66.65%)
	view_count: null,
	whitelist_status: null|"all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all",
	wls: null|number,
}