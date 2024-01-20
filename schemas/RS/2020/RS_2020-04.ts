interface RedditPost {
	adserver_click_url?: null, // 20625/28501627 (0.07%)
	adserver_imp_pixel?: null, // 20625/28501627 (0.07%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
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
		start_date: null|number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	}[],
	allow_live_comments: boolean,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 70061/28501627 (0.25%)
	author_created_utc?: number|null, // 23770219/28501627 (83.40%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 563700/1805954 (31.21%)
		e: "text"|"emoji",
		t?: string, // 1242254/1805954 (68.79%)
		u?: string, // 563700/1805954 (31.21%)
	}[], // 23770219/28501627 (83.40%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 23770219/28501627 (83.40%)
	author_fullname?: string, // 23770219/28501627 (83.40%)
	author_id?: string|null, // 20625/28501627 (0.07%)
	author_patreon_flair?: boolean, // 23770219/28501627 (83.40%)
	author_premium?: boolean, // 23770219/28501627 (83.40%)
	awarders: [],
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Play Now"|"View More"|"Install"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"See Menu"|""|"Get Showtimes", // 17809/28501627 (0.06%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"photography"|"entertainment"|"gaming"|"animals"|""|"diy_and_crafts"|"videos"|"memes"|"food"|"music",
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description: string|null,
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
			icon_img: string,
			icon_size: null|number[],
			key_color: ""|"#24a0ed",
			mod_permissions: [],
			name: "t5_2qpoa"|"t5_323oy",
			over_18: boolean,
			primary_color: "#014980"|"#2c404a",
			sr: "chloe"|"CasualConversation",
			sr_display_name_prefixed: "r/chloe"|"r/CasualConversation",
			subreddit_type: "public",
			subscribers: number,
			title: "Chloe"|"The friendlier part of Reddit.",
			url: "/r/chloe/"|"/r/CasualConversation/",
			user_can_crosspost: boolean|null,
			whitelist_status: null|"all_ads",
		}, // 2/6310 (0.03%)
		subreddit_id: string,
		title: string,
	}[], // 6310/28501627 (0.02%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1277486/28501627 (4.48%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
			award_type: "global"|"community"|"moderator",
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number,
			days_of_premium: number,
			description: string,
			end_date: null|number,
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
			start_date: null|number,
			subreddit_coin_reward: number,
			subreddit_id: null|string,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3132/1272549 (0.25%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 32170/88595 (36.31%)
			e: "text"|"emoji",
			t?: string, // 56425/88595 (63.69%)
			u?: string, // 32170/88595 (36.31%)
		}[], // 1192956/1272549 (93.75%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1192956/1272549 (93.75%)
		author_fullname?: string, // 1192956/1272549 (93.75%)
		author_patreon_flair?: boolean, // 1192956/1272549 (93.75%)
		author_premium?: boolean, // 1192956/1272549 (93.75%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"Shop Now"|"Install"|"Download"|"Play Now"|"View More"|"Watch Now"|"Sign Up", // 76/1272549 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"animals"|"entertainment"|"diy_and_crafts"|"gaming"|""|"videos"|"art"|"memes",
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
			subreddit_id: string,
			title: string,
		}[], // 916/1272549 (0.07%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"diy_and_crafts"|"comics"|"entertainment"|"music"|"writing"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 159/1272549 (0.01%)
		event_is_live?: boolean, // 159/1272549 (0.01%)
		event_start?: number, // 159/1272549 (0.01%)
		gilded: number,
		gildings: {
			gid_1?: number, // 67974/1272549 (5.34%)
			gid_2?: number, // 65512/1272549 (5.15%)
			gid_3?: number, // 14422/1272549 (1.13%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 7378/125824 (5.86%)
			e: "text"|"emoji",
			t?: string, // 118446/125824 (94.14%)
			u?: string, // 7378/125824 (5.86%)
		}[],
		link_flair_template_id?: string, // 258128/1272549 (20.28%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 286042/302033 (94.71%)
				author_url?: string, // 38362/302033 (12.70%)
				cache_age?: number, // 4202/302033 (1.39%)
				description?: string, // 263546/302033 (87.26%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 140/302033 (0.05%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 296089/302033 (98.03%)
				thumbnail_url?: string, // 297679/302033 (98.56%)
				thumbnail_width?: number, // 296089/302033 (98.03%)
				title?: string, // 297536/302033 (98.51%)
				type: "video"|"rich",
				url?: string, // 14381/302033 (4.76%)
				version: "1.0",
				width: number,
			}, // 302033/421423 (71.67%)
			reddit_video?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 119390/421423 (28.33%)
			type?: string, // 302033/421423 (71.67%)
		},
		media_embed: {
			content?: string, // 302033/1272549 (23.73%)
			height?: number, // 302033/1272549 (23.73%)
			scrolling?: boolean, // 302033/1272549 (23.73%)
			width?: number, // 302033/1272549 (23.73%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 550/14226 (3.87%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 14216/14226 (99.93%)
				hlsUrl?: string, // 550/14226 (3.87%)
				id?: string, // 14216/14226 (99.93%)
				isGif?: boolean, // 550/14226 (3.87%)
				m?: "image/jpg"|"image/png"|"image/gif", // 13666/14226 (96.06%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 13666/14226 (96.06%)
				s?: {
					gif?: string, // 145/13666 (1.06%)
					mp4?: string, // 145/13666 (1.06%)
					u?: string, // 13521/13666 (98.94%)
					x: number,
					y: number,
				}, // 13666/14226 (96.06%)
				status: "valid"|"failed",
				x?: number, // 550/14226 (3.87%)
				y?: number, // 550/14226 (3.87%)
			},
		}|null, // 6148/1272549 (0.48%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			options: {
				id: string,
				text: string,
				vote_count?: number, // 3294/4460 (73.86%)
			}[],
			total_vote_count: number,
			user_selection: null,
			voting_end_timestamp: number,
		}|null, // 1402/1272549 (0.11%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 1067465/1272549 (83.88%)
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
					}, // 260742/1067465 (24.43%)
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
					}, // 260742/1067465 (24.43%)
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
					}, // 550299/1067465 (51.55%)
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
					}, // 552405/1067465 (51.75%)
				},
			}[],
			reddit_video_preview?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 257317/1067465 (24.11%)
		}, // 1067465/1272549 (83.88%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"moderator"|"deleted"|"reddit"|"author"|"automod_filtered"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 205/1272549 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 286042/302033 (94.71%)
				author_url?: string, // 38362/302033 (12.70%)
				cache_age?: number, // 4202/302033 (1.39%)
				description?: string, // 263546/302033 (87.26%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 140/302033 (0.05%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 296089/302033 (98.03%)
				thumbnail_url?: string, // 297679/302033 (98.56%)
				thumbnail_width?: number, // 296089/302033 (98.03%)
				title?: string, // 297536/302033 (98.51%)
				type: "video"|"rich",
				url?: string, // 14381/302033 (4.76%)
				version: "1.0",
				width: number,
			}, // 302033/421423 (71.67%)
			reddit_video?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 119390/421423 (28.33%)
			type?: string, // 302033/421423 (71.67%)
		},
		secure_media_embed: {
			content?: string, // 302033/1272549 (23.73%)
			height?: number, // 302033/1272549 (23.73%)
			media_domain_url?: string, // 302033/1272549 (23.73%)
			scrolling?: boolean, // 302033/1272549 (23.73%)
			width?: number, // 302033/1272549 (23.73%)
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
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		total_awards_received: number,
		treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame")[],
		ups: number,
		upvote_ratio?: number, // 55479/1272549 (4.36%)
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1277486/28501627 (4.48%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 20625/28501627 (0.07%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 20625/28501627 (0.07%)
	embed_url?: null|string, // 20625/28501627 (0.07%)
	event_end?: number, // 2120/28501627 (0.01%)
	event_is_live?: boolean, // 2120/28501627 (0.01%)
	event_start?: number, // 2120/28501627 (0.01%)
	events?: [], // 20625/28501627 (0.07%)
	eventsOnRender?: [], // 20625/28501627 (0.07%)
	gilded: number,
	gildings: {
		gid_1?: number, // 38039/28501627 (0.13%)
		gid_2?: number, // 34636/28501627 (0.12%)
		gid_3?: number, // 5350/28501627 (0.02%)
	},
	hidden: boolean,
	href_url?: string, // 20625/28501627 (0.07%)
	id: string,
	is_blank?: boolean, // 20625/28501627 (0.07%)
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 217977/4801342 (4.54%)
		e: "text"|"emoji",
		t?: string, // 4583365/4801342 (95.46%)
		u?: string, // 217977/4801342 (4.54%)
	}[],
	link_flair_template_id?: string, // 7197620/28501627 (25.25%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 2275808/2648858 (85.92%)
			author_url?: string, // 1653466/2648858 (62.42%)
			cache_age?: number, // 265177/2648858 (10.01%)
			description?: string, // 1046993/2648858 (39.53%)
			height?: number|null, // 2648855/2648858 (100.00%)
			html?: string, // 2648855/2648858 (100.00%)
			marginheight?: number, // 8/2648858 (0.00%)
			marginwidth?: number, // 8/2648858 (0.00%)
			mean_alpha?: number, // 5935/2648858 (0.22%)
			provider_name?: string, // 2648855/2648858 (100.00%)
			provider_url?: string, // 2648855/2648858 (100.00%)
			thumbnail_height?: number, // 2372248/2648858 (89.56%)
			thumbnail_url?: string, // 2382211/2648858 (89.93%)
			thumbnail_width?: number, // 2372248/2648858 (89.56%)
			title?: string, // 2380686/2648858 (89.88%)
			type?: "video"|"rich", // 2648855/2648858 (100.00%)
			url?: string, // 502165/2648858 (18.96%)
			version?: "1.0", // 2648847/2648858 (100.00%)
			width?: number, // 2648855/2648858 (100.00%)
		}, // 2648858/3408762 (77.71%)
		reddit_video?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 759904/3408762 (22.29%)
		type?: string, // 2648858/3408762 (77.71%)
	},
	media_embed: {
		content?: string|null, // 2648858/28501627 (9.29%)
		height?: number, // 2648858/28501627 (9.29%)
		scrolling?: boolean, // 2648858/28501627 (9.29%)
		width?: number, // 2648858/28501627 (9.29%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 11879/302548 (3.93%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 301822/302548 (99.76%)
			hlsUrl?: string, // 11879/302548 (3.93%)
			id?: string, // 301822/302548 (99.76%)
			isGif?: boolean, // 11879/302548 (3.93%)
			m?: "image/jpg"|"image/png"|"image/gif", // 289943/302548 (95.83%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 289943/302548 (95.83%)
			s?: {
				gif?: string, // 1645/289943 (0.57%)
				mp4?: string, // 1645/289943 (0.57%)
				u?: string, // 288298/289943 (99.43%)
				x: number,
				y: number,
			}, // 289943/302548 (95.83%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 11879/302548 (3.93%)
			y?: number, // 11879/302548 (3.93%)
		},
	}|null, // 307978/28501627 (1.08%)
	media_only: boolean,
	mobile_ad_url?: string, // 20625/28501627 (0.07%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 20625/28501627 (0.07%)
	outbound_link?: {
	}, // 20625/28501627 (0.07%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		options: {
			id: string,
			text: string,
			vote_count?: number, // 247977/326389 (75.98%)
		}[],
		total_vote_count: number,
		user_selection: null,
		voting_end_timestamp: number,
	}|null, // 151328/28501627 (0.53%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 11842555/28501627 (41.55%)
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
				}, // 567893/11842555 (4.80%)
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
				}, // 567893/11842555 (4.80%)
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
				}, // 2491505/11842555 (21.04%)
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
				}, // 2541364/11842555 (21.46%)
			},
		}[],
		reddit_video_preview?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 508948/11842555 (4.30%)
	}, // 11842555/28501627 (41.55%)
	priority_id?: null, // 20625/28501627 (0.07%)
	promoted?: boolean, // 20625/28501627 (0.07%)
	promoted_by?: null, // 20625/28501627 (0.07%)
	promoted_display_name?: null, // 20625/28501627 (0.07%)
	promoted_url?: null, // 20625/28501627 (0.07%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops"|"content_takedown",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 55525/28501627 (0.19%)
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 2275808/2648858 (85.92%)
			author_url?: string, // 1653466/2648858 (62.42%)
			cache_age?: number, // 265177/2648858 (10.01%)
			description?: string, // 1046993/2648858 (39.53%)
			height?: number|null, // 2648855/2648858 (100.00%)
			html?: string, // 2648855/2648858 (100.00%)
			marginheight?: number, // 8/2648858 (0.00%)
			marginwidth?: number, // 8/2648858 (0.00%)
			mean_alpha?: number, // 5935/2648858 (0.22%)
			provider_name?: string, // 2648855/2648858 (100.00%)
			provider_url?: string, // 2648855/2648858 (100.00%)
			thumbnail_height?: number, // 2372248/2648858 (89.56%)
			thumbnail_url?: string, // 2382211/2648858 (89.93%)
			thumbnail_width?: number, // 2372248/2648858 (89.56%)
			title?: string, // 2380686/2648858 (89.88%)
			type?: "video"|"rich", // 2648855/2648858 (100.00%)
			url?: string, // 502165/2648858 (18.96%)
			version?: "1.0", // 2648847/2648858 (100.00%)
			width?: number, // 2648855/2648858 (100.00%)
		}, // 2648858/3408762 (77.71%)
		reddit_video?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 759904/3408762 (22.29%)
		type?: string, // 2648858/3408762 (77.71%)
	},
	secure_media_embed: {
		content?: string|null, // 2648858/28501627 (9.29%)
		height?: number, // 2648858/28501627 (9.29%)
		media_domain_url?: string, // 2648858/28501627 (9.29%)
		scrolling?: boolean, // 2648858/28501627 (9.29%)
		width?: number, // 2648858/28501627 (9.29%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 20625/28501627 (0.07%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"gold_restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 20625/28501627 (0.07%)
	third_party_tracking?: null, // 20625/28501627 (0.07%)
	third_party_tracking_2?: null, // 20625/28501627 (0.07%)
	thumbnail: string,
	thumbnail_height?: number|null, // 28500206/28501627 (100.00%)
	thumbnail_width?: number|null, // 28500206/28501627 (100.00%)
	title: string,
	total_awards_received: number,
	treatment_tags?: ("econ:render:glow:ff0000"|"econ:render:bubble:flame")[], // 28501625/28501627 (100.00%)
	upvote_ratio?: number, // 1287269/28501627 (4.52%)
	url: string,
	whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}