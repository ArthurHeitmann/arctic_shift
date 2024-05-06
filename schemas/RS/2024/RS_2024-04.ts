interface RedditPost {
	_meta: {
		is_edited?: boolean, // 1035815/40701692 (2.54%)
		note?: "no_2nd_retrieval"|"initially_unavailable", // 1787624/40701692 (4.39%)
		removal_type?: "deleted"|"reddit"|"moderator"|"automod_filtered"|"content_takedown"|"copyright_takedown"|"author"|"community_ops"|"anti_evil_ops", // 8992331/40701692 (22.09%)
		retrieved_2nd_on?: number, // 38914068/40701692 (95.61%)
		was_deleted_later?: boolean, // 8225354/40701692 (20.21%)
		was_initially_deleted?: boolean, // 766977/40701692 (1.88%)
	},
	ad_business?: null, // 180920/40701692 (0.44%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "MarvelsGrantMan136"|"MaxgamingThe3rd"|"indig0sixalpha",
		author_flair_background_color: null|"#dadada",
		author_flair_css_class: null|"108"|"TheLeague1",
		author_flair_richtext: {
			a?: ":108:", // 2/4 (50.00%)
			e: "emoji"|"text",
			t?: " Gary?", // 2/4 (50.00%)
			u?: string, // 2/4 (50.00%)
		}[],
		author_flair_template_id: null|"fd9a0198-1b0d-11e5-875d-0e29e4c0cc07"|"5661551c-3c90-11e5-9c8e-0ec07e44b9c3",
		author_flair_text: null|":108: Gary?"|"The League",
		author_flair_text_color: null|"dark",
		author_flair_type: "text"|"richtext",
		author_fullname: "t2_5adwlxvn"|"t2_68jt95sp"|"t2_ht9gq",
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
		domain: "i.redd.it"|"v.redd.it"|"youtube.com"|"theguardian.com",
		downs: number,
		edited: boolean,
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "1b8vh2k"|"1b5ld62"|"1b68et2"|"1bilmyv"|"1b8vhw6"|"1brgg3m",
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
		link_flair_css_class: ""|"vid"|null,
		link_flair_richtext: {
			e: "text",
			t: "Fallout TV"|"Video",
		}[],
		link_flair_template_id?: "353292ee-6487-11ed-9fbe-86361f04b9cc"|"af4f4b74-4e16-11e5-92a7-0e49b4de90e1", // 6/9 (66.67%)
		link_flair_text: "Fallout TV"|"Video"|null,
		link_flair_text_color: "dark",
		link_flair_type: "richtext"|"text",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name: "Prime Video",
				author_url: "https://www.youtube.com/@PrimeVideo",
				height: number,
				html: string,
				provider_name: "YouTube",
				provider_url: "https://www.youtube.com/",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: "Fallout - First Scene | Prime Video"|"Fallout - Official Trailer | Prime Video",
				type: "video",
				version: "1.0",
				width: number,
			}, // 2/4 (50.00%)
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				has_audio: boolean,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 2/4 (50.00%)
			type?: "youtube.com", // 2/4 (50.00%)
		},
		media_embed: {
			content?: string, // 2/9 (22.22%)
			height?: number, // 2/9 (22.22%)
			scrolling?: boolean, // 2/9 (22.22%)
			width?: number, // 2/9 (22.22%)
		},
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_1b8vh2k"|"t3_1b5ld62"|"t3_1b68et2"|"t3_1bilmyv"|"t3_1b8vhw6"|"t3_1brgg3m",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint: "image"|"hosted:video"|"rich:video"|"link",
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
			oembed?: {
				author_name: "Prime Video",
				author_url: "https://www.youtube.com/@PrimeVideo",
				height: number,
				html: string,
				provider_name: "YouTube",
				provider_url: "https://www.youtube.com/",
				thumbnail_height: number,
				thumbnail_url: string,
				thumbnail_width: number,
				title: "Fallout - First Scene | Prime Video"|"Fallout - Official Trailer | Prime Video",
				type: "video",
				version: "1.0",
				width: number,
			}, // 2/4 (50.00%)
			reddit_video?: {
				bitrate_kbps: number,
				dash_url: string,
				duration: number,
				fallback_url: string,
				has_audio: boolean,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 2/4 (50.00%)
			type?: "youtube.com", // 2/4 (50.00%)
		},
		secure_media_embed: {
			content?: string, // 2/9 (22.22%)
			height?: number, // 2/9 (22.22%)
			media_domain_url?: string, // 2/9 (22.22%)
			scrolling?: boolean, // 2/9 (22.22%)
			width?: number, // 2/9 (22.22%)
		},
		selftext: "",
		selftext_html: null,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allowed_media_in_comments: [],
			banner_img: string,
			banner_size: number[]|null,
			community_icon: null|string,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "Fallout"|"television",
			display_name_prefixed: "r/Fallout"|"r/television",
			free_form_reports: boolean,
			header_img: string,
			header_size: number[],
			icon_color: "",
			icon_img: string,
			icon_size: number[],
			key_color: "#222222"|"#545452",
			link_flair_enabled: boolean,
			link_flair_position: "left",
			name: "t5_2qnzu"|"t5_2qh6e",
			over_18: boolean,
			previous_names: [],
			primary_color: "#0c0c0c"|"#ffffff",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "new terminal link"|"",
			submit_text_label: "new log entry"|"",
			subreddit_type: "public",
			subscribers: number,
			title: "Fallout | Reddit"|"📺 Television Discussion and News",
			url: "/r/Fallout/"|"/r/television/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "Fallout"|"television",
		subreddit_id: "t5_2qnzu"|"t5_2qh6e",
		subreddit_name_prefixed: "r/Fallout"|"r/television",
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
	}[], // 180920/40701692 (0.44%)
	ad_supplementary_text_md?: null|string, // 180920/40701692 (0.44%)
	ad_user_targeting?: null, // 180920/40701692 (0.44%)
	adserver_click_url?: null, // 180920/40701692 (0.44%)
	adserver_imp_pixel?: null, // 180920/40701692 (0.44%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 180920/40701692 (0.44%)
	approved?: boolean, // 1/40701692 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 100227/40701692 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 809891/2193797 (36.92%)
		e: "text"|"emoji",
		t?: string, // 1383906/2193797 (63.08%)
		u?: string, // 809891/2193797 (36.92%)
	}[], // 40251686/40701692 (98.89%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 40251686/40701692 (98.89%)
	author_fullname?: string, // 40251686/40701692 (98.89%)
	author_id?: string|null, // 180920/40701692 (0.44%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 40251686/40701692 (98.89%)
	author_premium?: boolean, // 40251686/40701692 (98.89%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Shop Now"|"Learn More"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Order Now"|"Apply Now"|"Contact Us"|"Watch Now"|"Get Showtimes"|"Get a Quote"|"Pre-order Now"|"See Menu", // 157080/40701692 (0.39%)
	campaign_id?: null, // 180920/40701692 (0.44%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment"|"memes"|"animals"|"photography",
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
			display_name: "MeditationHub"|"TaylorSwift"|"survivor"|"mesostealthy"|"PenguVirtualPet"|"xboxinsiders"|"forextweet"|"ShowMeHistory"|"On9CrazyClips"|"DoWeKnowThemPodcast"|"Magnitudes"|"team_fortress_1850",
			display_name_prefixed: "r/MeditationHub"|"r/TaylorSwift"|"r/survivor"|"r/mesostealthy"|"r/PenguVirtualPet"|"r/xboxinsiders"|"r/forextweet"|"r/ShowMeHistory"|"r/On9CrazyClips"|"r/DoWeKnowThemPodcast"|"r/Magnitudes"|"r/team_fortress_1850",
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#222222"|"#0dd3bb"|"#46d160",
			mod_permissions: [],
			name: "t5_aixyzg"|"t5_2rlwe"|"t5_2qhu3"|"t5_63cyqu"|"t5_asyel4"|"t5_3hrub"|"t5_147qk3"|"t5_98vsbh"|"t5_b5mdlt"|"t5_72lmt7"|"t5_bcpq1d"|"t5_beao33",
			over_18: boolean,
			primary_color: ""|"#3801fe"|"#414141"|"#0a2255"|"#373c3f"|"#0c04fb"|"#a137c8",
			sr: "MeditationHub"|"TaylorSwift"|"survivor"|"mesostealthy"|"PenguVirtualPet"|"xboxinsiders"|"forextweet"|"ShowMeHistory"|"On9CrazyClips"|"DoWeKnowThemPodcast"|"Magnitudes"|"team_fortress_1850",
			sr_display_name_prefixed: "r/MeditationHub"|"r/TaylorSwift"|"r/survivor"|"r/mesostealthy"|"r/PenguVirtualPet"|"r/xboxinsiders"|"r/forextweet"|"r/ShowMeHistory"|"r/On9CrazyClips"|"r/DoWeKnowThemPodcast"|"r/Magnitudes"|"r/team_fortress_1850",
			subreddit_type: "public"|"restricted",
			subscribers: number,
			title: string,
			url: "/r/MeditationHub/"|"/r/TaylorSwift/"|"/r/survivor/"|"/r/mesostealthy/"|"/r/PenguVirtualPet/"|"/r/xboxinsiders/"|"/r/forextweet/"|"/r/ShowMeHistory/"|"/r/On9CrazyClips/"|"/r/DoWeKnowThemPodcast/"|"/r/Magnitudes/"|"/r/team_fortress_1850/",
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads",
		}, // 18/5567 (0.32%)
		subreddit_id: string,
		title: string,
	}[], // 5567/40701692 (0.01%)
	content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1231845/40701692 (3.03%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3326/1228883 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 37451/100765 (37.17%)
			e: "text"|"emoji",
			t?: string, // 63314/100765 (62.83%)
			u?: string, // 37451/100765 (37.17%)
		}[], // 1216405/1228883 (98.98%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1216405/1228883 (98.98%)
		author_fullname?: string, // 1216405/1228883 (98.98%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1216405/1228883 (98.98%)
		author_premium?: boolean, // 1216405/1228883 (98.98%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"photography",
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
				display_name: "TheOriginOfTheSongs"|"StarFlorks",
				display_name_prefixed: "r/TheOriginOfTheSongs"|"r/StarFlorks",
				icon_img: "",
				icon_size: null,
				key_color: "",
				mod_permissions: [],
				name: "t5_aukdxj"|"t5_azc5i4",
				over_18: boolean,
				primary_color: "#808080"|"",
				sr: "TheOriginOfTheSongs"|"StarFlorks",
				sr_display_name_prefixed: "r/TheOriginOfTheSongs"|"r/StarFlorks",
				subreddit_type: "public",
				subscribers: number,
				title: string,
				url: "/r/TheOriginOfTheSongs/"|"/r/StarFlorks/",
				user_can_crosspost: boolean,
				whitelist_status: null|"all_ads",
			}, // 2/375 (0.53%)
			subreddit_id: string,
			title: string,
		}[], // 375/1228883 (0.03%)
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"diy_and_crafts"|"writing"|"entertainment"|"music"|"videos")[],
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
				caption?: string, // 38421/1179666 (3.26%)
				id: number,
				media_id: string,
				outbound_url?: string, // 20371/1179666 (1.73%)
			}[],
		}|null, // 192220/1228883 (15.64%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 192220/1228883 (15.64%)
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
			a?: string, // 30744/207349 (14.83%)
			e: "text"|"emoji",
			t?: string, // 176605/207349 (85.17%)
			u?: string, // 30744/207349 (14.83%)
		}[],
		link_flair_template_id?: string, // 448185/1228883 (36.47%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "1bsso361afr0r"|"18hnzysb1elcs", // 6/376497 (0.00%)
			oembed?: {
				author_name?: string, // 22487/271856 (8.27%)
				author_url?: string, // 22393/271856 (8.24%)
				cache_age?: number, // 3713/271856 (1.37%)
				description?: string, // 1880/271856 (0.69%)
				height?: number|null, // 271823/271856 (99.99%)
				html?: string, // 271823/271856 (99.99%)
				mean_alpha?: number, // 54/271856 (0.02%)
				provider_name?: string, // 271823/271856 (99.99%)
				provider_url?: string, // 271823/271856 (99.99%)
				thumbnail_height?: number, // 251645/271856 (92.57%)
				thumbnail_url?: string, // 267895/271856 (98.54%)
				thumbnail_width?: number, // 251645/271856 (92.57%)
				title?: string, // 268088/271856 (98.61%)
				type?: "video"|"rich", // 271823/271856 (99.99%)
				url?: string, // 4252/271856 (1.56%)
				version?: "1.0", // 271823/271856 (99.99%)
				width?: number, // 271823/271856 (99.99%)
			}, // 271856/376497 (72.21%)
			reddit_video?: {
				bitrate_kbps?: number, // 104447/104635 (99.82%)
				dash_url?: string, // 104621/104635 (99.99%)
				duration?: number, // 104621/104635 (99.99%)
				fallback_url?: string, // 104621/104635 (99.99%)
				has_audio?: boolean, // 102027/104635 (97.51%)
				height: number|null,
				hls_url?: string, // 104621/104635 (99.99%)
				is_gif?: boolean, // 104621/104635 (99.99%)
				scrubber_media_url?: string, // 104621/104635 (99.99%)
				transcoding_message?: string, // 14/104635 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 104635/376497 (27.79%)
			type?: string, // 271862/376497 (72.21%)
		},
		media_embed: {
			content?: string|null, // 271862/1228883 (22.12%)
			height?: number, // 271862/1228883 (22.12%)
			scrolling?: boolean, // 271862/1228883 (22.12%)
			width?: number, // 271862/1228883 (22.12%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1388/1215781 (0.11%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1214699/1215781 (99.91%)
				hlsUrl?: string, // 1388/1215781 (0.11%)
				id?: string, // 1214699/1215781 (99.91%)
				isGif?: boolean, // 1388/1215781 (0.11%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1213311/1215781 (99.80%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 885855/1215781 (72.86%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1213311/1215781 (99.80%)
				s?: {
					gif?: string, // 41931/1213311 (3.46%)
					mp4?: string, // 41931/1213311 (3.46%)
					u?: string, // 1171380/1213311 (96.54%)
					x: number,
					y: number,
				}, // 1213311/1215781 (99.80%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 1388/1215781 (0.11%)
				y?: number, // 1388/1215781 (0.11%)
			},
		}|null, // 206217/1228883 (16.78%)
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
				vote_count?: number, // 320/8118 (3.94%)
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
		}|null, // 2133/1228883 (0.17%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 907848/1228883 (73.88%)
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
					}, // 64426/907848 (7.10%)
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
					}, // 64426/907848 (7.10%)
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
					}, // 580737/907848 (63.97%)
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
					}, // 582783/907848 (64.19%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 274806/274862 (99.98%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 274862/907848 (30.28%)
		}, // 907848/1228883 (73.88%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"deleted"|"reddit"|"automod_filtered"|"copyright_takedown"|"author"|"content_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "1bsso361afr0r"|"18hnzysb1elcs", // 6/376497 (0.00%)
			oembed?: {
				author_name?: string, // 22487/271856 (8.27%)
				author_url?: string, // 22393/271856 (8.24%)
				cache_age?: number, // 3713/271856 (1.37%)
				description?: string, // 1880/271856 (0.69%)
				height?: number|null, // 271823/271856 (99.99%)
				html?: string, // 271823/271856 (99.99%)
				mean_alpha?: number, // 54/271856 (0.02%)
				provider_name?: string, // 271823/271856 (99.99%)
				provider_url?: string, // 271823/271856 (99.99%)
				thumbnail_height?: number, // 251645/271856 (92.57%)
				thumbnail_url?: string, // 267895/271856 (98.54%)
				thumbnail_width?: number, // 251645/271856 (92.57%)
				title?: string, // 268088/271856 (98.61%)
				type?: "video"|"rich", // 271823/271856 (99.99%)
				url?: string, // 4252/271856 (1.56%)
				version?: "1.0", // 271823/271856 (99.99%)
				width?: number, // 271823/271856 (99.99%)
			}, // 271856/376497 (72.21%)
			reddit_video?: {
				bitrate_kbps?: number, // 104447/104635 (99.82%)
				dash_url?: string, // 104621/104635 (99.99%)
				duration?: number, // 104621/104635 (99.99%)
				fallback_url?: string, // 104621/104635 (99.99%)
				has_audio?: boolean, // 102027/104635 (97.51%)
				height: number|null,
				hls_url?: string, // 104621/104635 (99.99%)
				is_gif?: boolean, // 104621/104635 (99.99%)
				scrubber_media_url?: string, // 104621/104635 (99.99%)
				transcoding_message?: string, // 14/104635 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 104635/376497 (27.79%)
			type?: string, // 271862/376497 (72.21%)
		},
		secure_media_embed: {
			content?: string|null, // 271862/1228883 (22.12%)
			height?: number, // 271862/1228883 (22.12%)
			media_domain_url?: string, // 271862/1228883 (22.12%)
			scrolling?: boolean, // 271862/1228883 (22.12%)
			width?: number, // 271862/1228883 (22.12%)
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
		url_overridden_by_dest?: string, // 1088006/1228883 (88.54%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1231845/40701692 (3.03%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 180920/40701692 (0.44%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 180920/40701692 (0.44%)
	embed_url?: null|string, // 180920/40701692 (0.44%)
	events?: [], // 180920/40701692 (0.44%)
	eventsOnRender?: [], // 180920/40701692 (0.44%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"Order Now"|"View More"|"Download"|"Install"|"Play Now"|"Apply Now"|"Contact Us"|"Watch Now"|"Get a Quote"|"Pre-order Now"|"See Menu"|"Get Showtimes", // 172003/14522018 (1.18%)
			caption?: string, // 401797/14522018 (2.77%)
			display_url?: string, // 175261/14522018 (1.21%)
			id: number,
			media_id: string,
			outbound_url?: string, // 248314/14522018 (1.71%)
			product?: {
				description: string,
				price?: string, // 111187/126936 (87.59%)
				title: string,
			}, // 126936/14522018 (0.87%)
		}[],
	}|null, // 3746873/40701692 (9.21%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 180920/40701692 (0.44%)
	id: string,
	ignore_reports?: boolean, // 1/40701692 (0.00%)
	impression_id?: null, // 180920/40701692 (0.44%)
	impression_id_str?: null, // 180920/40701692 (0.44%)
	is_blank?: boolean, // 180920/40701692 (0.44%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3746873/40701692 (9.21%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 180920/40701692 (0.44%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 887231/8129305 (10.91%)
		e: "text"|"emoji",
		t?: string, // 7242074/8129305 (89.09%)
		u?: string, // 887231/8129305 (10.91%)
	}[],
	link_flair_template_id?: string, // 15737947/40701692 (38.67%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 450/3223725 (0.01%)
		oembed?: {
			author_name?: string, // 698210/2209733 (31.60%)
			author_url?: string, // 697020/2209733 (31.54%)
			cache_age?: number, // 40297/2209733 (1.82%)
			description?: string, // 73763/2209733 (3.34%)
			height?: number|null, // 2208566/2209733 (99.95%)
			html?: string, // 2208566/2209733 (99.95%)
			marginheight?: number, // 1/2209733 (0.00%)
			marginwidth?: number, // 1/2209733 (0.00%)
			mean_alpha?: number, // 2246/2209733 (0.10%)
			provider_name?: string, // 2208566/2209733 (99.95%)
			provider_url?: string, // 2208566/2209733 (99.95%)
			thumbnail_height?: number, // 2109774/2209733 (95.48%)
			thumbnail_url?: string, // 2168499/2209733 (98.13%)
			thumbnail_width?: number, // 2109774/2209733 (95.48%)
			title?: string, // 2167762/2209733 (98.10%)
			type?: "video"|"rich", // 2208566/2209733 (99.95%)
			url?: string, // 64177/2209733 (2.90%)
			version?: "1.0", // 2208565/2209733 (99.95%)
			width?: number, // 2208566/2209733 (99.95%)
		}, // 2209733/3223725 (68.55%)
		reddit_video?: {
			bitrate_kbps?: number, // 1009687/1013542 (99.62%)
			dash_url?: string, // 1009688/1013542 (99.62%)
			duration?: number, // 1009688/1013542 (99.62%)
			fallback_url?: string, // 1009688/1013542 (99.62%)
			has_audio?: boolean, // 1008996/1013542 (99.55%)
			height: number|null,
			hls_url?: string, // 1009688/1013542 (99.62%)
			is_gif?: boolean, // 1009688/1013542 (99.62%)
			scrubber_media_url?: string, // 1009688/1013542 (99.62%)
			transcoding_message?: string, // 3854/1013542 (0.38%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1013542/3223725 (31.44%)
		type?: string, // 2210183/3223725 (68.56%)
	},
	media_embed: {
		content?: string|null, // 2210183/40701692 (5.43%)
		height?: number, // 2210183/40701692 (5.43%)
		scrolling?: boolean, // 2210183/40701692 (5.43%)
		width?: number, // 2210183/40701692 (5.43%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 17361/15151250 (0.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 15067956/15151250 (99.45%)
			hlsUrl?: string, // 17361/15151250 (0.11%)
			id?: string, // 15067956/15151250 (99.45%)
			isGif?: boolean, // 17361/15151250 (0.11%)
			m?: "image/jpg"|"image/png"|"image/gif", // 15050595/15151250 (99.34%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6902943/15151250 (45.56%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 15050595/15151250 (99.34%)
			s?: {
				gif?: string, // 177959/15050595 (1.18%)
				mp4?: string, // 177959/15050595 (1.18%)
				u?: string, // 14872636/15050595 (98.82%)
				x: number,
				y: number,
			}, // 15050595/15151250 (99.34%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 17361/15151250 (0.11%)
			y?: number, // 17361/15151250 (0.11%)
		},
	}|null, // 4205474/40701692 (10.33%)
	media_only: boolean,
	mobile_ad_url?: string, // 180920/40701692 (0.44%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 180920/40701692 (0.44%)
	outbound_link?: {
	}, // 180920/40701692 (0.44%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 21436/249321 (8.60%)
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
	}|null, // 89650/40701692 (0.22%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"gallery"|"video", // 19979358/40701692 (49.09%)
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
				}, // 915568/19979358 (4.58%)
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
				}, // 915568/19979358 (4.58%)
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
				}, // 11143844/19979358 (55.78%)
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
				}, // 11223093/19979358 (56.17%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1391796/1391851 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1391851/19979358 (6.97%)
	}, // 19979358/40701692 (49.09%)
	priority_id?: null, // 180920/40701692 (0.44%)
	product_ids?: [], // 180920/40701692 (0.44%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 180920/40701692 (0.44%)
	promoted?: boolean, // 180920/40701692 (0.44%)
	promoted_by?: null, // 180920/40701692 (0.44%)
	promoted_display_name?: null, // 180920/40701692 (0.44%)
	promoted_url?: null, // 180920/40701692 (0.44%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 1/40701692 (0.00%)
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 450/3223725 (0.01%)
		oembed?: {
			author_name?: string, // 698210/2209733 (31.60%)
			author_url?: string, // 697020/2209733 (31.54%)
			cache_age?: number, // 40297/2209733 (1.82%)
			description?: string, // 73763/2209733 (3.34%)
			height?: number|null, // 2208566/2209733 (99.95%)
			html?: string, // 2208566/2209733 (99.95%)
			marginheight?: number, // 1/2209733 (0.00%)
			marginwidth?: number, // 1/2209733 (0.00%)
			mean_alpha?: number, // 2246/2209733 (0.10%)
			provider_name?: string, // 2208566/2209733 (99.95%)
			provider_url?: string, // 2208566/2209733 (99.95%)
			thumbnail_height?: number, // 2109774/2209733 (95.48%)
			thumbnail_url?: string, // 2168499/2209733 (98.13%)
			thumbnail_width?: number, // 2109774/2209733 (95.48%)
			title?: string, // 2167762/2209733 (98.10%)
			type?: "video"|"rich", // 2208566/2209733 (99.95%)
			url?: string, // 64177/2209733 (2.90%)
			version?: "1.0", // 2208565/2209733 (99.95%)
			width?: number, // 2208566/2209733 (99.95%)
		}, // 2209733/3223725 (68.55%)
		reddit_video?: {
			bitrate_kbps?: number, // 1009687/1013542 (99.62%)
			dash_url?: string, // 1009688/1013542 (99.62%)
			duration?: number, // 1009688/1013542 (99.62%)
			fallback_url?: string, // 1009688/1013542 (99.62%)
			has_audio?: boolean, // 1008996/1013542 (99.55%)
			height: number|null,
			hls_url?: string, // 1009688/1013542 (99.62%)
			is_gif?: boolean, // 1009688/1013542 (99.62%)
			scrubber_media_url?: string, // 1009688/1013542 (99.62%)
			transcoding_message?: string, // 3854/1013542 (0.38%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1013542/3223725 (31.44%)
		type?: string, // 2210183/3223725 (68.56%)
	},
	secure_media_embed: {
		content?: string|null, // 2210183/40701692 (5.43%)
		height?: number, // 2210183/40701692 (5.43%)
		media_domain_url?: string, // 2210183/40701692 (5.43%)
		scrolling?: boolean, // 2210183/40701692 (5.43%)
		width?: number, // 2210183/40701692 (5.43%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 180920/40701692 (0.44%)
	sk_ad_network_data?: null, // 180920/40701692 (0.44%)
	spam?: boolean, // 1/40701692 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 14966/40701692 (0.04%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 180920/40701692 (0.44%)
	third_party_tracking?: null, // 180920/40701692 (0.44%)
	third_party_tracking_2?: null, // 180920/40701692 (0.44%)
	thumbnail: string,
	thumbnail_height?: number|null, // 40701306/40701692 (100.00%)
	thumbnail_width?: number|null, // 40701306/40701692 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23895916/40701692 (58.71%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wls: null|number,
}