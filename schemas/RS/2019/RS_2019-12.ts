interface RedditPost {
	adserver_click_url?: null, // 15156/21217847 (0.07%)
	adserver_imp_pixel?: null, // 15156/21217847 (0.07%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"COMMUNITY"|"APPRECIATION"|"MODERATOR"|"PREMIUM",
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
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 78284/21217847 (0.37%)
	author_created_utc?: number|null, // 16364609/21217847 (77.13%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 506470/1558920 (32.49%)
		e: "text"|"emoji",
		t?: string, // 1052450/1558920 (67.51%)
		u?: string, // 506470/1558920 (32.49%)
	}[], // 16364609/21217847 (77.13%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 16364609/21217847 (77.13%)
	author_fullname?: string, // 16364609/21217847 (77.13%)
	author_id?: string|null, // 15156/21217847 (0.07%)
	author_patreon_flair?: boolean, // 16364609/21217847 (77.13%)
	author_premium?: boolean, // 16364609/21217847 (77.13%)
	awarders: [],
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"View More"|"Play Now"|"Install"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|""|"See Menu", // 13161/21217847 (0.06%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|"videos"|"diy_and_crafts"|"memes"|""|"music"|"food"|"funny"|"writing",
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
	}[], // 3944/21217847 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"entertainment"|"gaming"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 990419/21217847 (4.67%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"COMMUNITY"|"APPRECIATION"|"MODERATOR"|"PREMIUM",
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
		author_cakeday?: boolean, // 3412/961777 (0.35%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 27710/86368 (32.08%)
			e: "text"|"emoji",
			t?: string, // 58658/86368 (67.92%)
			u?: string, // 27710/86368 (32.08%)
		}[], // 839696/961777 (87.31%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 839696/961777 (87.31%)
		author_fullname?: string, // 839696/961777 (87.31%)
		author_patreon_flair?: boolean, // 839696/961777 (87.31%)
		author_premium?: boolean, // 839696/961777 (87.31%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"Download"|"Shop Now"|"Play Now"|"View More"|"Watch Now"|"Get Showtimes"|"", // 56/961777 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"animals"|"photography"|"entertainment"|""|"videos"|"memes"|"diy_and_crafts"|"music"|"funny",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string|null,
			display_layout: null|"TIMELINE"|"GALLERY",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 882/961777 (0.09%)
		content_categories: null|("photography"|"drawing_and_painting"|"entertainment"|"gaming"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 161/961777 (0.02%)
		event_is_live?: boolean, // 161/961777 (0.02%)
		event_start?: number, // 161/961777 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 125093/961777 (13.01%)
			gid_2?: number, // 65779/961777 (6.84%)
			gid_3?: number, // 15851/961777 (1.65%)
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
			a?: string, // 3659/102558 (3.57%)
			e: "text"|"emoji",
			t?: string, // 98899/102558 (96.43%)
			u?: string, // 3659/102558 (3.57%)
		}[],
		link_flair_template_id?: string, // 185526/961777 (19.29%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 184369/200179 (92.10%)
				author_url?: string, // 28218/200179 (14.10%)
				cache_age?: number, // 5001/200179 (2.50%)
				description?: string, // 172006/200179 (85.93%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 18/200179 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 193629/200179 (96.73%)
				thumbnail_url?: string, // 194825/200179 (97.33%)
				thumbnail_width?: number, // 193629/200179 (96.73%)
				title?: string, // 194717/200179 (97.27%)
				type: "video"|"rich",
				url?: string, // 12696/200179 (6.34%)
				version: "1.0",
				width: number,
			}, // 200179/295015 (67.85%)
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
			}, // 94836/295015 (32.15%)
			type?: string, // 200179/295015 (67.85%)
		},
		media_embed: {
			content?: string, // 200179/961777 (20.81%)
			height?: number, // 200179/961777 (20.81%)
			scrolling?: boolean, // 200179/961777 (20.81%)
			width?: number, // 200179/961777 (20.81%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 623/13557 (4.60%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 13532/13557 (99.82%)
				hlsUrl?: string, // 623/13557 (4.60%)
				id?: string, // 13532/13557 (99.82%)
				isGif?: boolean, // 623/13557 (4.60%)
				m?: "image/jpg"|"image/png"|"image/gif", // 12909/13557 (95.22%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 12909/13557 (95.22%)
				s?: {
					gif?: string, // 174/12909 (1.35%)
					mp4?: string, // 174/12909 (1.35%)
					u?: string, // 12735/12909 (98.65%)
					x: number,
					y: number,
				}, // 12909/13557 (95.22%)
				status: "valid"|"failed",
				x?: number, // 623/13557 (4.60%)
				y?: number, // 623/13557 (4.60%)
			},
		}|null, // 6431/961777 (0.67%)
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
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 736915/961777 (76.62%)
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
					}, // 161303/736915 (21.89%)
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
					}, // 161303/736915 (21.89%)
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
					}, // 306748/736915 (41.63%)
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
					}, // 309062/736915 (41.94%)
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
			}, // 163792/736915 (22.23%)
		}, // 736915/961777 (76.62%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"author"|"anti_evil_ops"|"content_takedown"|"automod_filtered"|"community_ops",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 184369/200179 (92.10%)
				author_url?: string, // 28218/200179 (14.10%)
				cache_age?: number, // 5001/200179 (2.50%)
				description?: string, // 172006/200179 (85.93%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 18/200179 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 193629/200179 (96.73%)
				thumbnail_url?: string, // 194825/200179 (97.33%)
				thumbnail_width?: number, // 193629/200179 (96.73%)
				title?: string, // 194717/200179 (97.27%)
				type: "video"|"rich",
				url?: string, // 12696/200179 (6.34%)
				version: "1.0",
				width: number,
			}, // 200179/295015 (67.85%)
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
			}, // 94836/295015 (32.15%)
			type?: string, // 200179/295015 (67.85%)
		},
		secure_media_embed: {
			content?: string, // 200179/961777 (20.81%)
			height?: number, // 200179/961777 (20.81%)
			media_domain_url?: string, // 200179/961777 (20.81%)
			scrolling?: boolean, // 200179/961777 (20.81%)
			width?: number, // 200179/961777 (20.81%)
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
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 990419/21217847 (4.67%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 15156/21217847 (0.07%)
	edited: boolean|number,
	embed_type?: null|"iframe", // 15156/21217847 (0.07%)
	embed_url?: null|string, // 15156/21217847 (0.07%)
	event_end?: number, // 1737/21217847 (0.01%)
	event_is_live?: boolean, // 1737/21217847 (0.01%)
	event_start?: number, // 1737/21217847 (0.01%)
	events?: [], // 15156/21217847 (0.07%)
	eventsOnRender?: [], // 15156/21217847 (0.07%)
	gilded: number,
	gildings: {
		gid_1?: number, // 89308/21217847 (0.42%)
		gid_2?: number, // 38232/21217847 (0.18%)
		gid_3?: number, // 7177/21217847 (0.03%)
	},
	hidden: boolean,
	href_url?: string, // 15156/21217847 (0.07%)
	id: string,
	is_blank?: boolean, // 15156/21217847 (0.07%)
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
		a?: string, // 95473/3044163 (3.14%)
		e: "text"|"emoji",
		t?: string, // 2948690/3044163 (96.86%)
		u?: string, // 95473/3044163 (3.14%)
	}[],
	link_flair_template_id?: string, // 4305919/21217847 (20.29%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 1192711/1375055 (86.74%)
			author_url?: string, // 982195/1375055 (71.43%)
			cache_age?: number, // 117093/1375055 (8.52%)
			description?: string, // 437236/1375055 (31.80%)
			height?: number|null, // 1375041/1375055 (100.00%)
			html?: string, // 1375041/1375055 (100.00%)
			marginheight?: number, // 13/1375055 (0.00%)
			marginwidth?: number, // 13/1375055 (0.00%)
			mean_alpha?: number, // 2988/1375055 (0.22%)
			provider_name?: string, // 1375041/1375055 (100.00%)
			provider_url?: string, // 1375041/1375055 (100.00%)
			thumbnail_height?: number, // 1245125/1375055 (90.55%)
			thumbnail_url?: string, // 1253346/1375055 (91.15%)
			thumbnail_width?: number, // 1245125/1375055 (90.55%)
			title?: string, // 1252485/1375055 (91.09%)
			type?: "video"|"rich", // 1375041/1375055 (100.00%)
			url?: string, // 253349/1375055 (18.42%)
			version?: "1.0", // 1375028/1375055 (100.00%)
			width?: number, // 1375041/1375055 (100.00%)
		}, // 1375055/1825761 (75.31%)
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
		}, // 450706/1825761 (24.69%)
		type?: string, // 1375055/1825761 (75.31%)
	},
	media_embed: {
		content?: string|null, // 1375055/21217847 (6.48%)
		height?: number, // 1375055/21217847 (6.48%)
		scrolling?: boolean, // 1375055/21217847 (6.48%)
		width?: number, // 1375055/21217847 (6.48%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 7011/216763 (3.23%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 216427/216763 (99.84%)
			hlsUrl?: string, // 7011/216763 (3.23%)
			id?: string, // 216427/216763 (99.84%)
			isGif?: boolean, // 7011/216763 (3.23%)
			m?: "image/jpg"|"image/png"|"image/gif", // 209416/216763 (96.61%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 209416/216763 (96.61%)
			s?: {
				gif?: string, // 2406/209416 (1.15%)
				mp4?: string, // 2406/209416 (1.15%)
				u?: string, // 207010/209416 (98.85%)
				x: number,
				y: number,
			}, // 209416/216763 (96.61%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 7011/216763 (3.23%)
			y?: number, // 7011/216763 (3.23%)
		},
	}|null, // 212655/21217847 (1.00%)
	media_only: boolean,
	mobile_ad_url?: string, // 15156/21217847 (0.07%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 15156/21217847 (0.07%)
	outbound_link?: {
	}, // 15156/21217847 (0.07%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: null, // 1/21217847 (0.00%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7822870/21217847 (36.87%)
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
				}, // 338606/7822870 (4.33%)
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
				}, // 338606/7822870 (4.33%)
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
				}, // 1308764/7822870 (16.73%)
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
				}, // 1351341/7822870 (17.27%)
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
		}, // 310926/7822870 (3.97%)
	}, // 7822870/21217847 (36.87%)
	priority_id?: null, // 15156/21217847 (0.07%)
	promoted?: boolean, // 15156/21217847 (0.07%)
	promoted_by?: null, // 15156/21217847 (0.07%)
	promoted_display_name?: null, // 15156/21217847 (0.07%)
	promoted_url?: null, // 15156/21217847 (0.07%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 1192711/1375055 (86.74%)
			author_url?: string, // 982195/1375055 (71.43%)
			cache_age?: number, // 117093/1375055 (8.52%)
			description?: string, // 437236/1375055 (31.80%)
			height?: number|null, // 1375041/1375055 (100.00%)
			html?: string, // 1375041/1375055 (100.00%)
			marginheight?: number, // 13/1375055 (0.00%)
			marginwidth?: number, // 13/1375055 (0.00%)
			mean_alpha?: number, // 2988/1375055 (0.22%)
			provider_name?: string, // 1375041/1375055 (100.00%)
			provider_url?: string, // 1375041/1375055 (100.00%)
			thumbnail_height?: number, // 1245125/1375055 (90.55%)
			thumbnail_url?: string, // 1253346/1375055 (91.15%)
			thumbnail_width?: number, // 1245125/1375055 (90.55%)
			title?: string, // 1252485/1375055 (91.09%)
			type?: "video"|"rich", // 1375041/1375055 (100.00%)
			url?: string, // 253349/1375055 (18.42%)
			version?: "1.0", // 1375028/1375055 (100.00%)
			width?: number, // 1375041/1375055 (100.00%)
		}, // 1375055/1825761 (75.31%)
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
		}, // 450706/1825761 (24.69%)
		type?: string, // 1375055/1825761 (75.31%)
	},
	secure_media_embed: {
		content?: string|null, // 1375055/21217847 (6.48%)
		height?: number, // 1375055/21217847 (6.48%)
		media_domain_url?: string, // 1375055/21217847 (6.48%)
		scrolling?: boolean, // 1375055/21217847 (6.48%)
		width?: number, // 1375055/21217847 (6.48%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 15156/21217847 (0.07%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"gold_restricted"|"archived",
	suggested_sort: null|"qa"|"top"|"confidence"|"new"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 15156/21217847 (0.07%)
	third_party_tracking?: null, // 15156/21217847 (0.07%)
	third_party_tracking_2?: null, // 15156/21217847 (0.07%)
	thumbnail: string,
	thumbnail_height?: number|null, // 21216900/21217847 (100.00%)
	thumbnail_width?: number|null, // 21216900/21217847 (100.00%)
	title: string,
	total_awards_received: number,
	treatment_tags: [],
	url: string,
	whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}