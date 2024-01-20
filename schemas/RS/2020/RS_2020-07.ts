interface RedditPost {
	adserver_click_url?: null, // 19759/28436736 (0.07%)
	adserver_imp_pixel?: null, // 19759/28436736 (0.07%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
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
		resized_static_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
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
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 113564/28436736 (0.40%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 822800/2286839 (35.98%)
		e: "text"|"emoji",
		t?: string, // 1464039/2286839 (64.02%)
		u?: string, // 822800/2286839 (35.98%)
	}[], // 19665953/28436736 (69.16%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 19665953/28436736 (69.16%)
	author_fullname?: string, // 19665953/28436736 (69.16%)
	author_id?: string|null, // 19759/28436736 (0.07%)
	author_patreon_flair?: boolean, // 19665953/28436736 (69.16%)
	author_premium?: boolean, // 19665953/28436736 (69.16%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"Install"|"View More"|"Play Now"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"See Menu"|""|"Get Showtimes", // 17783/28436736 (0.06%)
	can_gild: boolean,
	category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|""|"diy_and_crafts"|"videos"|"memes"|"food"|"music"|"writing",
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
		subreddit_id: string,
		title: string,
	}[], // 5272/28436736 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1327376/28436736 (4.67%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"PREMIUM"|"APPRECIATION"|"GROUP"|"COMMUNITY"|"MODERATOR",
			award_type: "global"|"community"|"moderator",
			awardings_required_to_grant_benefits: null|number,
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
			resized_static_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			start_date: null|number,
			static_icon_height: number,
			static_icon_url: string,
			static_icon_width: number,
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
		author_cakeday?: boolean, // 6020/1166208 (0.52%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 47288/121112 (39.04%)
			e: "text"|"emoji",
			t?: string, // 73824/121112 (60.96%)
			u?: string, // 47288/121112 (39.04%)
		}[], // 953488/1166208 (81.76%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 953488/1166208 (81.76%)
		author_fullname?: string, // 953488/1166208 (81.76%)
		author_patreon_flair?: boolean, // 953488/1166208 (81.76%)
		author_premium?: boolean, // 953488/1166208 (81.76%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"Shop Now"|"Install"|"Download"|"Play Now"|"View More"|"Sign Up"|"Watch Now"|"Apply Now", // 117/1166208 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"animals"|"gaming"|"diy_and_crafts"|"entertainment"|"photography"|"videos"|"food"|"memes",
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
		}[], // 934/1166208 (0.08%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 296/1166208 (0.03%)
		event_is_live?: boolean, // 296/1166208 (0.03%)
		event_start?: number, // 296/1166208 (0.03%)
		gallery_data?: {
			items: {
				caption?: string, // 2776/20563 (13.50%)
				id: number,
				media_id: string,
				outbound_url?: string, // 801/20563 (3.90%)
			}[],
		}|null, // 7727/1166208 (0.66%)
		gilded: number,
		gildings: {
			gid_1?: number, // 66475/1166208 (5.70%)
			gid_2?: number, // 67398/1166208 (5.78%)
			gid_3?: number, // 16627/1166208 (1.43%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 7727/1166208 (0.66%)
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
			a?: string, // 9985/156693 (6.37%)
			e: "text"|"emoji",
			t?: string, // 146708/156693 (93.63%)
			u?: string, // 9985/156693 (6.37%)
		}[],
		link_flair_template_id?: string, // 286260/1166208 (24.55%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "15awtpyx5kuc8"|"1584wax35o93q", // 3/331669 (0.00%)
			oembed?: {
				author_name?: string, // 59015/205465 (28.72%)
				author_url?: string, // 36920/205465 (17.97%)
				cache_age?: number, // 5211/205465 (2.54%)
				description?: string, // 33199/205465 (16.16%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 55/205465 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 64049/205465 (31.17%)
				thumbnail_url?: string, // 64127/205465 (31.21%)
				thumbnail_width?: number, // 64049/205465 (31.17%)
				title?: string, // 200012/205465 (97.35%)
				type: "video"|"rich",
				url?: string, // 13294/205465 (6.47%)
				version: "1.0",
				width: number,
			}, // 205465/331669 (61.95%)
			reddit_video?: {
				dash_url?: string, // 126195/126201 (100.00%)
				duration?: number, // 126195/126201 (100.00%)
				fallback_url?: string, // 126195/126201 (100.00%)
				height?: number, // 126195/126201 (100.00%)
				hls_url?: string, // 126195/126201 (100.00%)
				is_gif?: boolean, // 126195/126201 (100.00%)
				scrubber_media_url?: string, // 126195/126201 (100.00%)
				transcoding_message?: "No tasks are completed", // 6/126201 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 126195/126201 (100.00%)
			}, // 126201/331669 (38.05%)
			type?: string, // 205468/331669 (61.95%)
		},
		media_embed: {
			content?: string, // 205468/1166208 (17.62%)
			height?: number, // 205468/1166208 (17.62%)
			scrolling?: boolean, // 205468/1166208 (17.62%)
			width?: number, // 205468/1166208 (17.62%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 409/38100 (1.07%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 38075/38100 (99.93%)
				hlsUrl?: string, // 409/38100 (1.07%)
				id?: string, // 38075/38100 (99.93%)
				isGif?: boolean, // 409/38100 (1.07%)
				m?: "image/jpg"|"image/png"|"image/gif", // 37666/38100 (98.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 7452/38100 (19.56%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 37666/38100 (98.86%)
				s?: {
					gif?: string, // 394/37666 (1.05%)
					mp4?: string, // 394/37666 (1.05%)
					u?: string, // 37272/37666 (98.95%)
					x: number,
					y: number,
				}, // 37666/38100 (98.86%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 409/38100 (1.07%)
				y?: number, // 409/38100 (1.07%)
			},
		}|null, // 15407/1166208 (1.32%)
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
		parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count: number,
			}[],
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			voting_end_timestamp: number,
		}|null, // 2348/1166208 (0.20%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 826064/1166208 (70.83%)
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
					}, // 19607/826064 (2.37%)
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
					}, // 19607/826064 (2.37%)
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
					}, // 364133/826064 (44.08%)
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
					}, // 366554/826064 (44.37%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 60597/144203 (42.02%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 144203/826064 (17.46%)
		}, // 826064/1166208 (70.83%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"author"|"copyright_takedown"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 225/1166208 (0.02%)
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "15awtpyx5kuc8"|"1584wax35o93q", // 3/331669 (0.00%)
			oembed?: {
				author_name?: string, // 59015/205465 (28.72%)
				author_url?: string, // 36920/205465 (17.97%)
				cache_age?: number, // 5211/205465 (2.54%)
				description?: string, // 33199/205465 (16.16%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 55/205465 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 64049/205465 (31.17%)
				thumbnail_url?: string, // 64127/205465 (31.21%)
				thumbnail_width?: number, // 64049/205465 (31.17%)
				title?: string, // 200012/205465 (97.35%)
				type: "video"|"rich",
				url?: string, // 13294/205465 (6.47%)
				version: "1.0",
				width: number,
			}, // 205465/331669 (61.95%)
			reddit_video?: {
				dash_url?: string, // 126195/126201 (100.00%)
				duration?: number, // 126195/126201 (100.00%)
				fallback_url?: string, // 126195/126201 (100.00%)
				height?: number, // 126195/126201 (100.00%)
				hls_url?: string, // 126195/126201 (100.00%)
				is_gif?: boolean, // 126195/126201 (100.00%)
				scrubber_media_url?: string, // 126195/126201 (100.00%)
				transcoding_message?: "No tasks are completed", // 6/126201 (0.00%)
				transcoding_status: "completed"|"error",
				width?: number, // 126195/126201 (100.00%)
			}, // 126201/331669 (38.05%)
			type?: string, // 205468/331669 (61.95%)
		},
		secure_media_embed: {
			content?: string, // 205468/1166208 (17.62%)
			height?: number, // 205468/1166208 (17.62%)
			media_domain_url?: string, // 205468/1166208 (17.62%)
			scrolling?: boolean, // 205468/1166208 (17.62%)
			width?: number, // 205468/1166208 (17.62%)
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
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		top_awarded_type: null|"INACTIVE",
		total_awards_received: number,
		treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie")[],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 1080615/1166208 (92.66%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 1327376/28436736 (4.67%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 19759/28436736 (0.07%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 19759/28436736 (0.07%)
	embed_url?: null|string, // 19759/28436736 (0.07%)
	event_end?: number, // 1856/28436736 (0.01%)
	event_is_live?: boolean, // 1856/28436736 (0.01%)
	event_start?: number, // 1856/28436736 (0.01%)
	events?: [], // 19759/28436736 (0.07%)
	eventsOnRender?: [], // 19759/28436736 (0.07%)
	gallery_data?: {
		items: {
			caption?: string, // 47764/443880 (10.76%)
			id: number,
			media_id: string,
			outbound_url?: string, // 11223/443880 (2.53%)
		}[],
	}|null, // 265921/28436736 (0.94%)
	gilded: number,
	gildings: {
		gid_1?: number, // 44796/28436736 (0.16%)
		gid_2?: number, // 46242/28436736 (0.16%)
		gid_3?: number, // 8353/28436736 (0.03%)
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 19759/28436736 (0.07%)
	id: string,
	impression_id?: null, // 19759/28436736 (0.07%)
	impression_id_str?: null, // 19759/28436736 (0.07%)
	is_blank?: boolean, // 19759/28436736 (0.07%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 265921/28436736 (0.94%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 259162/5573327 (4.65%)
		e: "text"|"emoji",
		t?: string, // 5314165/5573327 (95.35%)
		u?: string, // 259162/5573327 (4.65%)
	}[],
	link_flair_template_id?: string, // 8153826/28436736 (28.67%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 21/3230184 (0.00%)
		oembed?: {
			author_name?: string, // 1620265/2347039 (69.03%)
			author_url?: string, // 1541903/2347039 (65.70%)
			cache_age?: number, // 278713/2347039 (11.88%)
			description?: string, // 426286/2347039 (18.16%)
			height?: number|null, // 2346995/2347039 (100.00%)
			html?: string, // 2346995/2347039 (100.00%)
			marginheight?: number, // 17/2347039 (0.00%)
			marginwidth?: number, // 17/2347039 (0.00%)
			mean_alpha?: number, // 6484/2347039 (0.28%)
			provider_name?: string, // 2346995/2347039 (100.00%)
			provider_url?: string, // 2346995/2347039 (100.00%)
			thumbnail_height?: number, // 1643021/2347039 (70.00%)
			thumbnail_url?: string, // 1644219/2347039 (70.06%)
			thumbnail_width?: number, // 1643021/2347039 (70.00%)
			title?: string, // 2063047/2347039 (87.90%)
			type?: "video"|"rich", // 2346995/2347039 (100.00%)
			url?: string, // 474593/2347039 (20.22%)
			version?: "1.0", // 2346978/2347039 (100.00%)
			width?: number, // 2346995/2347039 (100.00%)
		}, // 2347039/3230184 (72.66%)
		reddit_video?: {
			dash_url?: string, // 871448/883124 (98.68%)
			duration?: number, // 871448/883124 (98.68%)
			fallback_url?: string, // 871448/883124 (98.68%)
			height?: number, // 871448/883124 (98.68%)
			hls_url?: string, // 871448/883124 (98.68%)
			is_gif?: boolean, // 871448/883124 (98.68%)
			scrubber_media_url?: string, // 871448/883124 (98.68%)
			transcoding_message?: string, // 11676/883124 (1.32%)
			transcoding_status: "completed"|"error",
			width?: number, // 871448/883124 (98.68%)
		}, // 883124/3230184 (27.34%)
		type?: string, // 2347060/3230184 (72.66%)
	},
	media_embed: {
		content?: string|null, // 2347060/28436736 (8.25%)
		height?: number, // 2347060/28436736 (8.25%)
		scrolling?: boolean, // 2347060/28436736 (8.25%)
		width?: number, // 2347060/28436736 (8.25%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 13328/734443 (1.81%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 733573/734443 (99.88%)
			hlsUrl?: string, // 13328/734443 (1.81%)
			id?: string, // 733573/734443 (99.88%)
			isGif?: boolean, // 13328/734443 (1.81%)
			m?: "image/jpg"|"image/png"|"image/gif", // 720245/734443 (98.07%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 88174/734443 (12.01%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 720245/734443 (98.07%)
			s?: {
				gif?: string, // 3836/720245 (0.53%)
				mp4?: string, // 3836/720245 (0.53%)
				u?: string, // 716409/720245 (99.47%)
				x: number,
				y: number,
			}, // 720245/734443 (98.07%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 13328/734443 (1.81%)
			y?: number, // 13328/734443 (1.81%)
		},
	}|null, // 580802/28436736 (2.04%)
	media_only: boolean,
	mobile_ad_url?: string, // 19759/28436736 (0.07%)
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 19759/28436736 (0.07%)
	outbound_link?: {
	}, // 19759/28436736 (0.07%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count: number,
		}[],
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		voting_end_timestamp: number,
	}|null, // 157428/28436736 (0.55%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 10103519/28436736 (35.53%)
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
				}, // 71811/10103519 (0.71%)
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
				}, // 71811/10103519 (0.71%)
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
				}, // 1963735/10103519 (19.44%)
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
				}, // 2014732/10103519 (19.94%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 85313/323557 (26.37%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 323557/10103519 (3.20%)
	}, // 10103519/28436736 (35.53%)
	priority_id?: null, // 19759/28436736 (0.07%)
	promoted?: boolean, // 19759/28436736 (0.07%)
	promoted_by?: null, // 19759/28436736 (0.07%)
	promoted_display_name?: null, // 19759/28436736 (0.07%)
	promoted_url?: null, // 19759/28436736 (0.07%)
	pwls: number|null,
	quarantine: boolean,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_utc: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 47568/28436736 (0.17%)
	score: number,
	secure_media: null|{
		event_id?: string, // 21/3230184 (0.00%)
		oembed?: {
			author_name?: string, // 1620265/2347039 (69.03%)
			author_url?: string, // 1541903/2347039 (65.70%)
			cache_age?: number, // 278713/2347039 (11.88%)
			description?: string, // 426286/2347039 (18.16%)
			height?: number|null, // 2346995/2347039 (100.00%)
			html?: string, // 2346995/2347039 (100.00%)
			marginheight?: number, // 17/2347039 (0.00%)
			marginwidth?: number, // 17/2347039 (0.00%)
			mean_alpha?: number, // 6484/2347039 (0.28%)
			provider_name?: string, // 2346995/2347039 (100.00%)
			provider_url?: string, // 2346995/2347039 (100.00%)
			thumbnail_height?: number, // 1643021/2347039 (70.00%)
			thumbnail_url?: string, // 1644219/2347039 (70.06%)
			thumbnail_width?: number, // 1643021/2347039 (70.00%)
			title?: string, // 2063047/2347039 (87.90%)
			type?: "video"|"rich", // 2346995/2347039 (100.00%)
			url?: string, // 474593/2347039 (20.22%)
			version?: "1.0", // 2346978/2347039 (100.00%)
			width?: number, // 2346995/2347039 (100.00%)
		}, // 2347039/3230184 (72.66%)
		reddit_video?: {
			dash_url?: string, // 871448/883124 (98.68%)
			duration?: number, // 871448/883124 (98.68%)
			fallback_url?: string, // 871448/883124 (98.68%)
			height?: number, // 871448/883124 (98.68%)
			hls_url?: string, // 871448/883124 (98.68%)
			is_gif?: boolean, // 871448/883124 (98.68%)
			scrubber_media_url?: string, // 871448/883124 (98.68%)
			transcoding_message?: string, // 11676/883124 (1.32%)
			transcoding_status: "completed"|"error",
			width?: number, // 871448/883124 (98.68%)
		}, // 883124/3230184 (27.34%)
		type?: string, // 2347060/3230184 (72.66%)
	},
	secure_media_embed: {
		content?: string|null, // 2347060/28436736 (8.25%)
		height?: number, // 2347060/28436736 (8.25%)
		media_domain_url?: string, // 2347060/28436736 (8.25%)
		scrolling?: boolean, // 2347060/28436736 (8.25%)
		width?: number, // 2347060/28436736 (8.25%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 19759/28436736 (0.07%)
	sk_ad_network_data?: null, // 19759/28436736 (0.07%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 19759/28436736 (0.07%)
	third_party_tracking?: null, // 19759/28436736 (0.07%)
	third_party_tracking_2?: null, // 19759/28436736 (0.07%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	top_awarded_type: null|"INACTIVE",
	total_awards_received: number,
	treatment_tags: ("econ:render:glow:ff0000"|"econ:render:bubble:flame"|"econ:render:lottie:redstar"|"econ:render:lottie:cutie"|"econ:render:lottie:heartbeat")[],
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 18047920/28436736 (63.47%)
	whitelist_status: "all_ads"|"no_ads"|"some_ads"|"promo_adult_nsfw"|"house_only"|"promo_all"|null,
	wls: number|null,
}