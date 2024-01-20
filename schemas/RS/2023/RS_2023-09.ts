interface RedditPost {
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "MarvelsGrantMan136"|"AdministrativeBuy105"|"justinator5"|"koryuR"|"ChiefLeef22"|"Dismal-Location1901"|"damagedgoodz99824"|"lawrencedun2002"|"Kushwayne"|"Rough-Purpose6499"|"mnggames"|"kittehgoesmeow"|"AbeliousAugustus"|"GroundbreakingSet187"|"impeccabletim",
		author_flair_background_color: null|""|"#ff8717",
		author_flair_css_class: null|"SHIELD1"|"TheLeague1"|"OrphanBlack1",
		author_flair_richtext: {
			e: "text",
			t: "r/Movies contributor"|"Good Burger > The Godfather"|"Soldier Boy",
		}[],
		author_flair_template_id: null|"66b3f46e-e504-11ec-8d13-b62c49a90266"|"057ebf7c-3c90-11e5-97b8-0e5e8c172733"|"5661551c-3c90-11e5-9c8e-0ec07e44b9c3"|"57feaae2-3c8f-11e5-95f4-0ee61c357d3b",
		author_flair_text: null|"r/Movies contributor"|"Good Burger > The Godfather"|"Soldier Boy"|"Agents of S.H.I.E.L.D."|"The League"|"Orphan Black",
		author_flair_text_color: null|"dark",
		author_flair_type: "text"|"richtext",
		author_fullname: "t2_5adwlxvn"|"t2_8j6hhfzd"|"t2_z0ugx"|"t2_s5yx4"|"t2_7a7qkhpq"|"t2_8344i8um"|"t2_7e9fps7i"|"t2_578lnma4"|"t2_uc9yezz"|"t2_cr1hidqh"|"t2_fkexs3w6"|"t2_z2shc"|"t2_i35ira24q"|"t2_7uabnis9"|"t2_ni0nr",
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
		domain: "i.redd.it"|"reddit.com"|"self.GalaxyFold"|"self.TMNT"|"deadline.com"|"youtu.be"|"variety.com"|"collider.com",
		downs: number,
		edited: boolean,
		gallery_data?: {
			items: {
				id: number,
				media_id: "51dbv2ewhrnb1"|"iaod43ewhrnb1"|"llczi3ewhrnb1"|"malh78ewhrnb1"|"jbr08j10hpmb1"|"kucpzi50hpmb1",
			}[],
		}, // 6/42 (14.29%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 6/42 (14.29%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: "#7193ff"|"#0dd3bb"|"#007373"|"#0aa18f"|"#373c3f"|""|"#ccac2b"|"#dadada",
		link_flair_css_class: ""|"news"|"poster"|null,
		link_flair_richtext: {
			e: "text",
			t: "GenV"|"News"|"Poster",
		}[],
		link_flair_template_id?: "2beb0598-68bd-11ec-8dcf-262f3f49151c"|"dab2bec8-22f1-11e4-a89b-12313b0e827d"|"f1e002ac-0459-11ed-923a-5209d059a7fe"|"2b89defa-381e-11e2-8c5e-12313d28169d"|"99b256d4-639e-11e9-a8a7-0e59f8963c5e"|"c9bd900c-68bc-11ec-8cdf-0a0874b8cade"|"953714ce-22f2-11e4-a7a1-12313d14361a"|"046c0942-c9ae-11e3-8e8b-12313d056e4a"|"0f4a8fba-2641-11ee-8745-eedfb1ddaca4", // 39/42 (92.86%)
		link_flair_text: "Results"|"[Movie]"|"GenV"|"News"|"Review"|"Parlay"|"[Spoiler]"|"Poster"|"Misc"|null,
		link_flair_text_color: "dark"|"light",
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
			content?: string, // 2/42 (4.76%)
			height?: number, // 2/42 (4.76%)
			scrolling?: boolean, // 2/42 (4.76%)
			width?: number, // 2/42 (4.76%)
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "51dbv2ewhrnb1"|"iaod43ewhrnb1"|"llczi3ewhrnb1"|"malh78ewhrnb1"|"jbr08j10hpmb1"|"kucpzi50hpmb1",
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
		}, // 6/42 (14.29%)
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
		post_hint?: "image"|"link"|"self"|"rich:video", // 32/42 (76.19%)
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
					}, // 2/32 (6.25%)
				},
			}[],
		}, // 32/42 (76.19%)
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
			content?: string, // 2/42 (4.76%)
			height?: number, // 2/42 (4.76%)
			media_domain_url?: string, // 2/42 (4.76%)
			scrolling?: boolean, // 2/42 (4.76%)
			width?: number, // 2/42 (4.76%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allow_chat_post_creation: boolean,
			allowed_media_in_comments: ("expression"|"static"|"giphy"|"animated")[],
			banner_img: string,
			banner_size: null|number[],
			community_icon: string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "sportsbetting"|"TMNT"|"movies"|"GalaxyFold"|"TheBoys"|"television",
			display_name_prefixed: "r/sportsbetting"|"r/TMNT"|"r/movies"|"r/GalaxyFold"|"r/TheBoys"|"r/television",
			free_form_reports: boolean,
			header_img: string|null,
			header_size: number[]|null,
			icon_color: "",
			icon_img: string,
			icon_size: null|number[],
			is_chat_post_feature_enabled: boolean,
			key_color: ""|"#545452"|"#ea0027",
			link_flair_enabled: boolean,
			link_flair_position: "left"|"right",
			name: "t5_2s443"|"t5_2scgh"|"t5_2qh3s"|"t5_stiwr"|"t5_2t2xg"|"t5_2qh6e",
			over_18: boolean,
			previous_names: [],
			primary_color: ""|"#349e48"|"#ffb000"|"#000000"|"#780000"|"#ffffff",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: ""|"Submit link",
			submit_text_label: ""|"Submit text",
			subreddit_type: "public",
			subscribers: number,
			title: "The Sports Betting Forum at Reddit"|"Anything Teenage Mutant Ninja Turtles"|"Movie News and Discussion"|"Samsung Galaxy Fold"|"The Boys"|"📺 Television Discussion and News",
			url: "/r/sportsbetting/"|"/r/TMNT/"|"/r/movies/"|"/r/GalaxyFold/"|"/r/TheBoys/"|"/r/television/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "sportsbetting"|"TMNT"|"movies"|"GalaxyFold"|"TheBoys"|"television",
		subreddit_id: "t5_2s443"|"t5_2scgh"|"t5_2qh3s"|"t5_stiwr"|"t5_2t2xg"|"t5_2qh6e",
		subreddit_name_prefixed: "r/sportsbetting"|"r/TMNT"|"r/movies"|"r/GalaxyFold"|"r/TheBoys"|"r/television",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null|"confidence",
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
		url_overridden_by_dest?: string, // 35/42 (83.33%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 95079/42870662 (0.22%)
	ad_supplementary_text_md?: null|string, // 95079/42870662 (0.22%)
	adserver_click_url?: null, // 95079/42870662 (0.22%)
	adserver_imp_pixel?: null, // 95079/42870662 (0.22%)
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
		giver_coin_reward: null,
		icon_format: "PNG"|"APNG"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null,
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
		subreddit_id: null|"t5_2qmg3"|"t5_2tx47"|"t5_43zwn1",
		tiers_by_required_awardings: null,
	}[],
	allow_live_comments: boolean,
	app_store_data?: null, // 95079/42870662 (0.22%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 98395/42870662 (0.23%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 752960/2042143 (36.87%)
		e: "text"|"emoji",
		t?: string, // 1289183/2042143 (63.13%)
		u?: string, // 752960/2042143 (36.87%)
	}[], // 42640218/42870662 (99.46%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 42640218/42870662 (99.46%)
	author_fullname?: string, // 42640218/42870662 (99.46%)
	author_id?: string|null, // 95079/42870662 (0.22%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 42640218/42870662 (99.46%)
	author_premium?: boolean, // 42640218/42870662 (99.46%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Apply Now"|"Download"|"View More"|"Install"|"Play Now"|"Order Now"|"Watch Now"|"Contact Us"|"Pre-order Now"|"Get Showtimes"|"Get a Quote"|"See Menu", // 77488/42870662 (0.18%)
	campaign_id?: null, // 95079/42870662 (0.22%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"gaming"|"animals"|"photography"|"memes",
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
			key_color: ""|"#222222"|"#24a0ed"|"#0079d3"|"#a5a4a4"|"#ea0027"|"#46d160"|"#ddbd37"|"#ff66ac"|"#ff8717"|"#25b79f"|"#7e53c1"|"#0dd3bb",
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
		}, // 88/6335 (1.39%)
		subreddit_id: string,
		title: string,
	}[], // 6335/42870662 (0.01%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1290202/42870662 (3.01%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR"|"GROUP",
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
		author_cakeday?: boolean, // 3489/1290136 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 37210/98347 (37.84%)
			e: "text"|"emoji",
			t?: string, // 61137/98347 (62.16%)
			u?: string, // 37210/98347 (37.84%)
		}[], // 1281518/1290136 (99.33%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1281518/1290136 (99.33%)
		author_fullname?: string, // 1281518/1290136 (99.33%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1281518/1290136 (99.33%)
		author_premium?: boolean, // 1281518/1290136 (99.33%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "", // 81/1290136 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|""|"diy_and_crafts"|"drawing_and_painting"|"photography"|"funny"|"animals"|"gaming",
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
				display_name: "F1DataAnalysis"|"LivroseBibliasGratis"|"straponfun"|"CompetitiveApex"|"TheDefenceHorizon"|"books"|"shiascholar",
				display_name_prefixed: "r/F1DataAnalysis"|"r/LivroseBibliasGratis"|"r/straponfun"|"r/CompetitiveApex"|"r/TheDefenceHorizon"|"r/books"|"r/shiascholar",
				icon_img: string,
				icon_size: null|number[],
				key_color: ""|"#ea0027"|"#46d160",
				mod_permissions: [],
				name: "t5_5o1r4x"|"t5_75o8ty"|"t5_98g3e9"|"t5_vz6gk"|"t5_6ru8z8"|"t5_2qh4i"|"t5_8x59e8",
				over_18: boolean,
				primary_color: "#212121"|""|"#f278e2"|"#373c3f"|"#080808"|"#a1887f"|"#146623",
				sr: "F1DataAnalysis"|"LivroseBibliasGratis"|"straponfun"|"CompetitiveApex"|"TheDefenceHorizon"|"books"|"shiascholar",
				sr_display_name_prefixed: "r/F1DataAnalysis"|"r/LivroseBibliasGratis"|"r/straponfun"|"r/CompetitiveApex"|"r/TheDefenceHorizon"|"r/books"|"r/shiascholar",
				subreddit_type: "public"|"restricted",
				subscribers: number,
				title: "Formula Data Analysis (@FDataAnalysis)"|"LivroseBibliasGratis"|"straponfun"|"Competitive Apex Legends Subreddit"|"TheDefenceHorizon"|"So many books, so little time"|"Islam Original",
				url: "/r/F1DataAnalysis/"|"/r/LivroseBibliasGratis/"|"/r/straponfun/"|"/r/CompetitiveApex/"|"/r/TheDefenceHorizon/"|"/r/books/"|"/r/shiascholar/",
				user_can_crosspost: boolean|null,
				whitelist_status: "all_ads"|null,
			}, // 10/818 (1.22%)
			subreddit_id: string,
			title: string,
		}[], // 818/1290136 (0.06%)
		content_categories: null|("photography"|"drawing_and_painting"|"writing"|"comics"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 2/1290136 (0.00%)
		event_is_live?: boolean, // 2/1290136 (0.00%)
		event_start?: number, // 2/1290136 (0.00%)
		gallery_data?: {
			items: {
				caption?: string, // 45611/1043717 (4.37%)
				id: number,
				media_id: string,
				outbound_url?: string, // 18983/1043717 (1.82%)
			}[],
		}|null, // 161475/1290136 (12.52%)
		gilded: number,
		gildings: {
			gid_1?: number, // 4725/1290136 (0.37%)
			gid_2?: number, // 5447/1290136 (0.42%)
			gid_3?: number, // 2132/1290136 (0.17%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 161475/1290136 (12.52%)
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
			a?: string, // 33091/189166 (17.49%)
			e: "text"|"emoji",
			t?: string, // 156075/189166 (82.51%)
			u?: string, // 33091/189166 (17.49%)
		}[],
		link_flair_template_id?: string, // 404816/1290136 (31.38%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 1/400564 (0.00%)
			oembed?: {
				author_name?: string, // 34033/302124 (11.26%)
				author_url?: string, // 33527/302124 (11.10%)
				cache_age?: number, // 2278/302124 (0.75%)
				description?: string, // 2299/302124 (0.76%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 44/302124 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number|null, // 277405/302124 (91.82%)
				thumbnail_url?: string, // 299622/302124 (99.17%)
				thumbnail_width?: number|null, // 277405/302124 (91.82%)
				title?: string, // 299821/302124 (99.24%)
				type: "video"|"rich",
				url?: string, // 3096/302124 (1.02%)
				version: "1.0",
				width: number,
			}, // 302124/400564 (75.42%)
			reddit_video?: {
				bitrate_kbps?: number, // 98212/98439 (99.77%)
				dash_url?: string, // 98437/98439 (100.00%)
				duration?: number, // 98437/98439 (100.00%)
				fallback_url?: string, // 98437/98439 (100.00%)
				has_audio?: boolean, // 11240/98439 (11.42%)
				height: number|null,
				hls_url?: string, // 98437/98439 (100.00%)
				is_gif?: boolean, // 98437/98439 (100.00%)
				scrubber_media_url?: string, // 98437/98439 (100.00%)
				transcoding_message?: string, // 2/98439 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 98439/400564 (24.58%)
			type?: string, // 302125/400564 (75.42%)
		},
		media_embed: {
			content?: string, // 302125/1290136 (23.42%)
			height?: number, // 302125/1290136 (23.42%)
			scrolling?: boolean, // 302125/1290136 (23.42%)
			width?: number, // 302125/1290136 (23.42%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1135/1086990 (0.10%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1078084/1086990 (99.18%)
				hlsUrl?: string, // 1135/1086990 (0.10%)
				id?: string, // 1078084/1086990 (99.18%)
				isGif?: boolean, // 1135/1086990 (0.10%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1076949/1086990 (99.08%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 820844/1086990 (75.52%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1076949/1086990 (99.08%)
				s?: {
					gif?: string, // 18892/1076949 (1.75%)
					mp4?: string, // 18892/1076949 (1.75%)
					u?: string, // 1058057/1076949 (98.25%)
					x: number,
					y: number,
				}, // 1076949/1086990 (99.08%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1135/1086990 (0.10%)
				y?: number, // 1135/1086990 (0.10%)
			},
		}|null, // 182066/1290136 (14.11%)
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
				total_stake_amount?: number, // 6/8631 (0.07%)
				vote_count?: number, // 365/8631 (4.23%)
			}[],
			prediction_status: null|"RESOLVED",
			resolved_option_id: null|"19317664",
			total_stake_amount: null|number,
			total_vote_count: number,
			tournament_id: null|string,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}, // 2151/1290136 (0.17%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 996425/1290136 (77.23%)
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
					}, // 100911/996425 (10.13%)
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
					}, // 100911/996425 (10.13%)
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
					}, // 700888/996425 (70.34%)
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
					}, // 702753/996425 (70.53%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 331705/331746 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 331746/996425 (33.29%)
		}, // 996425/1290136 (77.23%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"moderator"|"deleted"|"copyright_takedown"|"content_takedown"|"author"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 1/400564 (0.00%)
			oembed?: {
				author_name?: string, // 34033/302124 (11.26%)
				author_url?: string, // 33527/302124 (11.10%)
				cache_age?: number, // 2278/302124 (0.75%)
				description?: string, // 2299/302124 (0.76%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 44/302124 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number|null, // 277405/302124 (91.82%)
				thumbnail_url?: string, // 299622/302124 (99.17%)
				thumbnail_width?: number|null, // 277405/302124 (91.82%)
				title?: string, // 299821/302124 (99.24%)
				type: "video"|"rich",
				url?: string, // 3096/302124 (1.02%)
				version: "1.0",
				width: number,
			}, // 302124/400564 (75.42%)
			reddit_video?: {
				bitrate_kbps?: number, // 98212/98439 (99.77%)
				dash_url?: string, // 98437/98439 (100.00%)
				duration?: number, // 98437/98439 (100.00%)
				fallback_url?: string, // 98437/98439 (100.00%)
				has_audio?: boolean, // 11240/98439 (11.42%)
				height: number|null,
				hls_url?: string, // 98437/98439 (100.00%)
				is_gif?: boolean, // 98437/98439 (100.00%)
				scrubber_media_url?: string, // 98437/98439 (100.00%)
				transcoding_message?: string, // 2/98439 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 98439/400564 (24.58%)
			type?: string, // 302125/400564 (75.42%)
		},
		secure_media_embed: {
			content?: string, // 302125/1290136 (23.42%)
			height?: number, // 302125/1290136 (23.42%)
			media_domain_url?: string, // 302125/1290136 (23.42%)
			scrolling?: boolean, // 302125/1290136 (23.42%)
			width?: number, // 302125/1290136 (23.42%)
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
		top_awarded_type: null|"ACTIVE"|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:lottie:sunny2"|"econ:render:lottie:redstar"|"econ:render:lottie:bulb")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1146605/1290136 (88.87%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1290202/42870662 (3.01%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 95079/42870662 (0.22%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 95079/42870662 (0.22%)
	embed_url?: null|string, // 95079/42870662 (0.22%)
	event_end?: number, // 88/42870662 (0.00%)
	event_is_live?: boolean, // 88/42870662 (0.00%)
	event_start?: number, // 88/42870662 (0.00%)
	events?: [], // 95079/42870662 (0.22%)
	eventsOnRender?: [], // 95079/42870662 (0.22%)
	gallery_data?: {
		items: {
			call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Install"|"Play Now"|"Download"|"Order Now"|"Apply Now"|"Watch Now"|"Get Showtimes"|"Contact Us"|"Get a Quote"|"Pre-order Now"|"See Menu", // 16849/11333254 (0.15%)
			caption?: string, // 432423/11333254 (3.82%)
			display_url?: string, // 18753/11333254 (0.17%)
			id: number,
			media_id: string,
			outbound_url?: string, // 125310/11333254 (1.11%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 675/11333254 (0.01%)
		}[],
	}|null, // 3259119/42870662 (7.60%)
	gilded: number,
	gildings: {
		gid_1?: number, // 4/42870662 (0.00%)
		gid_2?: number, // 32/42870662 (0.00%)
		gid_3?: number, // 12/42870662 (0.00%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 95079/42870662 (0.22%)
	id: string,
	impression_id?: null, // 95079/42870662 (0.22%)
	impression_id_str?: null, // 95079/42870662 (0.22%)
	is_blank?: boolean, // 95079/42870662 (0.22%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3259119/42870662 (7.60%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 95079/42870662 (0.22%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 713462/6536221 (10.92%)
		e: "text"|"emoji",
		t?: string, // 5822759/6536221 (89.08%)
		u?: string, // 713462/6536221 (10.92%)
	}[],
	link_flair_template_id?: string, // 12759442/42870662 (29.76%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 2052/3689874 (0.06%)
		oembed?: {
			author_name?: string, // 827475/3010090 (27.49%)
			author_url?: string, // 825267/3010090 (27.42%)
			cache_age?: number, // 79190/3010090 (2.63%)
			description?: string, // 108591/3010090 (3.61%)
			height?: number|null, // 3010071/3010090 (100.00%)
			html?: string, // 3010071/3010090 (100.00%)
			mean_alpha?: number, // 2120/3010090 (0.07%)
			provider_name?: string, // 3010071/3010090 (100.00%)
			provider_url?: string, // 3010071/3010090 (100.00%)
			thumbnail_height?: number, // 2802573/3010090 (93.11%)
			thumbnail_url?: string, // 2931167/3010090 (97.38%)
			thumbnail_width?: number, // 2802573/3010090 (93.11%)
			title?: string, // 2929862/3010090 (97.33%)
			type?: "video"|"rich", // 3010071/3010090 (100.00%)
			url?: string, // 124138/3010090 (4.12%)
			version?: "1.0", // 3010071/3010090 (100.00%)
			width?: number, // 3010071/3010090 (100.00%)
		}, // 3010090/3689874 (81.58%)
		reddit_video?: {
			bitrate_kbps?: number, // 674962/677732 (99.59%)
			dash_url?: string, // 674962/677732 (99.59%)
			duration?: number, // 674962/677732 (99.59%)
			fallback_url?: string, // 674962/677732 (99.59%)
			height: number|null,
			hls_url?: string, // 674962/677732 (99.59%)
			is_gif?: boolean, // 674962/677732 (99.59%)
			scrubber_media_url?: string, // 674962/677732 (99.59%)
			transcoding_message?: string, // 2770/677732 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 677732/3689874 (18.37%)
		type?: string, // 3012142/3689874 (81.63%)
	},
	media_embed: {
		content?: string|null, // 3012142/42870662 (7.03%)
		height?: number, // 3012142/42870662 (7.03%)
		scrolling?: boolean, // 3012142/42870662 (7.03%)
		width?: number, // 3012142/42870662 (7.03%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17400/11870166 (0.15%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 11516554/11870166 (97.02%)
			hlsUrl?: string, // 17400/11870166 (0.15%)
			id?: string, // 11516554/11870166 (97.02%)
			isGif?: boolean, // 17400/11870166 (0.15%)
			m?: "image/jpg"|"image/png"|"image/gif", // 11499154/11870166 (96.87%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 5869040/11870166 (49.44%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 11499154/11870166 (96.87%)
			s?: {
				gif?: string, // 131592/11499154 (1.14%)
				mp4?: string, // 131592/11499154 (1.14%)
				u?: string, // 11367562/11499154 (98.86%)
				x: number,
				y: number,
			}, // 11499154/11870166 (96.87%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 17400/11870166 (0.15%)
			y?: number, // 17400/11870166 (0.15%)
		},
	}|null, // 3682747/42870662 (8.59%)
	media_only: boolean,
	mobile_ad_url?: string, // 95079/42870662 (0.22%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 95079/42870662 (0.22%)
	outbound_link?: {
	}, // 95079/42870662 (0.22%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
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
	}|null, // 129546/42870662 (0.30%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video"|"gallery", // 21880357/42870662 (51.04%)
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
				}, // 1166719/21880357 (5.33%)
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
				}, // 1166719/21880357 (5.33%)
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
				}, // 12237821/21880357 (55.93%)
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
				}, // 12322038/21880357 (56.32%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2397739/2397779 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 2397779/21880357 (10.96%)
	}, // 21880357/42870662 (51.04%)
	priority_id?: null, // 95079/42870662 (0.22%)
	product_ids?: [], // 95079/42870662 (0.22%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 95079/42870662 (0.22%)
	promoted?: boolean, // 95079/42870662 (0.22%)
	promoted_by?: null, // 95079/42870662 (0.22%)
	promoted_display_name?: null, // 95079/42870662 (0.22%)
	promoted_url?: null, // 95079/42870662 (0.22%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"content_takedown"|"author",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 2052/3689874 (0.06%)
		oembed?: {
			author_name?: string, // 827475/3010090 (27.49%)
			author_url?: string, // 825267/3010090 (27.42%)
			cache_age?: number, // 79190/3010090 (2.63%)
			description?: string, // 108591/3010090 (3.61%)
			height?: number|null, // 3010071/3010090 (100.00%)
			html?: string, // 3010071/3010090 (100.00%)
			mean_alpha?: number, // 2120/3010090 (0.07%)
			provider_name?: string, // 3010071/3010090 (100.00%)
			provider_url?: string, // 3010071/3010090 (100.00%)
			thumbnail_height?: number, // 2802573/3010090 (93.11%)
			thumbnail_url?: string, // 2931167/3010090 (97.38%)
			thumbnail_width?: number, // 2802573/3010090 (93.11%)
			title?: string, // 2929862/3010090 (97.33%)
			type?: "video"|"rich", // 3010071/3010090 (100.00%)
			url?: string, // 124138/3010090 (4.12%)
			version?: "1.0", // 3010071/3010090 (100.00%)
			width?: number, // 3010071/3010090 (100.00%)
		}, // 3010090/3689874 (81.58%)
		reddit_video?: {
			bitrate_kbps?: number, // 674962/677732 (99.59%)
			dash_url?: string, // 674962/677732 (99.59%)
			duration?: number, // 674962/677732 (99.59%)
			fallback_url?: string, // 674962/677732 (99.59%)
			height: number|null,
			hls_url?: string, // 674962/677732 (99.59%)
			is_gif?: boolean, // 674962/677732 (99.59%)
			scrubber_media_url?: string, // 674962/677732 (99.59%)
			transcoding_message?: string, // 2770/677732 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 677732/3689874 (18.37%)
		type?: string, // 3012142/3689874 (81.63%)
	},
	secure_media_embed: {
		content?: string|null, // 3012142/42870662 (7.03%)
		height?: number, // 3012142/42870662 (7.03%)
		media_domain_url?: string, // 3012142/42870662 (7.03%)
		scrolling?: boolean, // 3012142/42870662 (7.03%)
		width?: number, // 3012142/42870662 (7.03%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 95079/42870662 (0.22%)
	sk_ad_network_data?: null, // 95079/42870662 (0.22%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 110/42870662 (0.00%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 95079/42870662 (0.22%)
	third_party_tracking?: null, // 95079/42870662 (0.22%)
	third_party_tracking_2?: null, // 95079/42870662 (0.22%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 42870160/42870662 (100.00%)
	thumbnail_width?: number|null, // 42870160/42870662 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 1/42870662 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 25764428/42870662 (60.10%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_adult_nsfw"|"promo_all",
	wls: null|number,
}