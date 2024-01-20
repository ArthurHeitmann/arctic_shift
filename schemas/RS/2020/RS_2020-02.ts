interface RedditPost {
	adserver_click_url?: null, // 16848/22242008 (0.08%)
	adserver_imp_pixel?: null, // 16848/22242008 (0.08%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"APPRECIATION"|"COMMUNITY"|"PREMIUM"|"MODERATOR",
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
	author_cakeday?: boolean, // 56821/22242008 (0.26%)
	author_created_utc?: number|null, // 17526878/22242008 (78.80%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 483585/1508993 (32.05%)
		e: "text"|"emoji",
		t?: string, // 1025408/1508993 (67.95%)
		u?: string, // 483585/1508993 (32.05%)
	}[], // 17526878/22242008 (78.80%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 17526878/22242008 (78.80%)
	author_fullname?: string, // 17526878/22242008 (78.80%)
	author_id?: string|null, // 16848/22242008 (0.08%)
	author_patreon_flair?: boolean, // 17526878/22242008 (78.80%)
	author_premium?: boolean, // 17526878/22242008 (78.80%)
	awarders: [],
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"View More"|"Play Now"|"Install"|"Apply Now"|"Watch Now"|"Get a Quote"|"Contact Us"|""|"Get Showtimes"|"See Menu", // 14228/22242008 (0.06%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"photography"|"entertainment"|"animals"|"gaming"|"diy_and_crafts"|""|"videos"|"memes"|"food"|"funny",
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
	}[], // 4784/22242008 (0.02%)
	content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1098372/22242008 (4.94%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"APPRECIATION"|"COMMUNITY"|"PREMIUM"|"MODERATOR",
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
		author_cakeday?: boolean, // 3390/1080662 (0.31%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 29702/92320 (32.17%)
			e: "text"|"emoji",
			t?: string, // 62618/92320 (67.83%)
			u?: string, // 29702/92320 (32.17%)
		}[], // 960428/1080662 (88.87%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 960428/1080662 (88.87%)
		author_fullname?: string, // 960428/1080662 (88.87%)
		author_patreon_flair?: boolean, // 960428/1080662 (88.87%)
		author_premium?: boolean, // 960428/1080662 (88.87%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"Install"|"Play Now"|"Shop Now"|"Download"|"View More"|"Sign Up"|"Get a Quote"|"Watch Now"|"Apply Now", // 77/1080662 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"animals"|"drawing_and_painting"|"photography"|"gaming"|"entertainment"|""|"diy_and_crafts"|"funny"|"food",
		clicked: boolean,
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
		}[], // 1636/1080662 (0.15%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 198/1080662 (0.02%)
		event_is_live?: boolean, // 198/1080662 (0.02%)
		event_start?: number, // 198/1080662 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 109289/1080662 (10.11%)
			gid_2?: number, // 56370/1080662 (5.22%)
			gid_3?: number, // 13387/1080662 (1.24%)
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
			a?: string, // 4205/108318 (3.88%)
			e: "text"|"emoji",
			t?: string, // 104113/108318 (96.12%)
			u?: string, // 4205/108318 (3.88%)
		}[],
		link_flair_template_id?: string, // 206109/1080662 (19.07%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 220255/233785 (94.21%)
				author_url?: string, // 32285/233785 (13.81%)
				cache_age?: number, // 5676/233785 (2.43%)
				description?: string, // 201405/233785 (86.15%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 35/233785 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 226714/233785 (96.98%)
				thumbnail_url?: string, // 227904/233785 (97.48%)
				thumbnail_width?: number, // 226714/233785 (96.98%)
				title?: string, // 227787/233785 (97.43%)
				type: "video"|"rich",
				url?: string, // 12537/233785 (5.36%)
				version: "1.0",
				width: number,
			}, // 233785/331590 (70.50%)
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
			}, // 97805/331590 (29.50%)
			type?: string, // 233785/331590 (70.50%)
		},
		media_embed: {
			content?: string, // 233785/1080662 (21.63%)
			height?: number, // 233785/1080662 (21.63%)
			scrolling?: boolean, // 233785/1080662 (21.63%)
			width?: number, // 233785/1080662 (21.63%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 358/13346 (2.68%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 13336/13346 (99.93%)
				hlsUrl?: string, // 358/13346 (2.68%)
				id?: string, // 13336/13346 (99.93%)
				isGif?: boolean, // 358/13346 (2.68%)
				m?: "image/jpg"|"image/png"|"image/gif", // 12978/13346 (97.24%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 12978/13346 (97.24%)
				s?: {
					gif?: string, // 98/12978 (0.76%)
					mp4?: string, // 98/12978 (0.76%)
					u?: string, // 12880/12978 (99.24%)
					x: number,
					y: number,
				}, // 12978/13346 (97.24%)
				status: "valid"|"failed",
				x?: number, // 358/13346 (2.68%)
				y?: number, // 358/13346 (2.68%)
			},
		}|null, // 6063/1080662 (0.56%)
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
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self", // 834280/1080662 (77.20%)
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
					}, // 188721/834280 (22.62%)
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
					}, // 188721/834280 (22.62%)
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
					}, // 366938/834280 (43.98%)
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
					}, // 368890/834280 (44.22%)
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
			}, // 190481/834280 (22.83%)
		}, // 834280/1080662 (77.20%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"author"|"anti_evil_ops"|"automod_filtered"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 35/1080662 (0.00%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 220255/233785 (94.21%)
				author_url?: string, // 32285/233785 (13.81%)
				cache_age?: number, // 5676/233785 (2.43%)
				description?: string, // 201405/233785 (86.15%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 35/233785 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 226714/233785 (96.98%)
				thumbnail_url?: string, // 227904/233785 (97.48%)
				thumbnail_width?: number, // 226714/233785 (96.98%)
				title?: string, // 227787/233785 (97.43%)
				type: "video"|"rich",
				url?: string, // 12537/233785 (5.36%)
				version: "1.0",
				width: number,
			}, // 233785/331590 (70.50%)
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
			}, // 97805/331590 (29.50%)
			type?: string, // 233785/331590 (70.50%)
		},
		secure_media_embed: {
			content?: string, // 233785/1080662 (21.63%)
			height?: number, // 233785/1080662 (21.63%)
			media_domain_url?: string, // 233785/1080662 (21.63%)
			scrolling?: boolean, // 233785/1080662 (21.63%)
			width?: number, // 233785/1080662 (21.63%)
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
	}[], // 1098372/22242008 (4.94%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 16848/22242008 (0.08%)
	edited: boolean|number,
	embed_type?: null|"iframe", // 16848/22242008 (0.08%)
	embed_url?: null|string, // 16848/22242008 (0.08%)
	event_end?: number, // 1902/22242008 (0.01%)
	event_is_live?: boolean, // 1902/22242008 (0.01%)
	event_start?: number, // 1902/22242008 (0.01%)
	events?: [], // 16848/22242008 (0.08%)
	eventsOnRender?: [], // 16848/22242008 (0.08%)
	gilded: number,
	gildings: {
		gid_1?: number, // 65247/22242008 (0.29%)
		gid_2?: number, // 29370/22242008 (0.13%)
		gid_3?: number, // 5307/22242008 (0.02%)
	},
	hidden: boolean,
	href_url?: string, // 16848/22242008 (0.08%)
	id: string,
	is_blank?: boolean, // 16848/22242008 (0.08%)
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
		a?: string, // 121373/3151118 (3.85%)
		e: "text"|"emoji",
		t?: string, // 3029745/3151118 (96.15%)
		u?: string, // 121373/3151118 (3.85%)
	}[],
	link_flair_template_id?: string, // 4607612/22242008 (20.72%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 1661528/1936813 (85.79%)
			author_url?: string, // 1217829/1936813 (62.88%)
			cache_age?: number, // 228574/1936813 (11.80%)
			description?: string, // 758954/1936813 (39.19%)
			height?: number|null, // 1936783/1936813 (100.00%)
			html?: string, // 1936783/1936813 (100.00%)
			marginheight?: number, // 14/1936813 (0.00%)
			marginwidth?: number, // 14/1936813 (0.00%)
			mean_alpha?: number, // 3436/1936813 (0.18%)
			provider_name?: string, // 1936783/1936813 (100.00%)
			provider_url?: string, // 1936783/1936813 (100.00%)
			thumbnail_height?: number, // 1698666/1936813 (87.70%)
			thumbnail_url?: string, // 1706384/1936813 (88.10%)
			thumbnail_width?: number, // 1698666/1936813 (87.70%)
			title?: string, // 1705274/1936813 (88.05%)
			type?: "video"|"rich", // 1936783/1936813 (100.00%)
			url?: string, // 368019/1936813 (19.00%)
			version?: "1.0", // 1936769/1936813 (100.00%)
			width?: number, // 1936783/1936813 (100.00%)
		}, // 1936813/2453498 (78.94%)
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
		}, // 516685/2453498 (21.06%)
		type?: string, // 1936813/2453498 (78.94%)
	},
	media_embed: {
		content?: string|null, // 1936813/22242008 (8.71%)
		height?: number, // 1936813/22242008 (8.71%)
		scrolling?: boolean, // 1936813/22242008 (8.71%)
		width?: number, // 1936813/22242008 (8.71%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 7789/227990 (3.42%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 227632/227990 (99.84%)
			hlsUrl?: string, // 7789/227990 (3.42%)
			id?: string, // 227632/227990 (99.84%)
			isGif?: boolean, // 7789/227990 (3.42%)
			m?: "image/jpg"|"image/png"|"image/gif", // 219843/227990 (96.43%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 219843/227990 (96.43%)
			s?: {
				gif?: string, // 1444/219843 (0.66%)
				mp4?: string, // 1444/219843 (0.66%)
				u?: string, // 218399/219843 (99.34%)
				x: number,
				y: number,
			}, // 219843/227990 (96.43%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 7789/227990 (3.42%)
			y?: number, // 7789/227990 (3.42%)
		},
	}|null, // 224313/22242008 (1.01%)
	media_only: boolean,
	mobile_ad_url?: string, // 16848/22242008 (0.08%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 16848/22242008 (0.08%)
	outbound_link?: {
	}, // 16848/22242008 (0.08%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		options: {
			id: string,
			text: string,
			vote_count: number,
		}[],
		total_vote_count: number,
		user_selection: null,
		voting_end_timestamp: number,
	}|null, // 31/22242008 (0.00%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 8837461/22242008 (39.73%)
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
				}, // 405202/8837461 (4.59%)
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
				}, // 405202/8837461 (4.59%)
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
				}, // 1565278/8837461 (17.71%)
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
				}, // 1600943/8837461 (18.12%)
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
		}, // 364569/8837461 (4.13%)
	}, // 8837461/22242008 (39.73%)
	priority_id?: null, // 16848/22242008 (0.08%)
	promoted?: boolean, // 16848/22242008 (0.08%)
	promoted_by?: null, // 16848/22242008 (0.08%)
	promoted_display_name?: null, // 16848/22242008 (0.08%)
	promoted_url?: null, // 16848/22242008 (0.08%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 9209/22242008 (0.04%)
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 1661528/1936813 (85.79%)
			author_url?: string, // 1217829/1936813 (62.88%)
			cache_age?: number, // 228574/1936813 (11.80%)
			description?: string, // 758954/1936813 (39.19%)
			height?: number|null, // 1936783/1936813 (100.00%)
			html?: string, // 1936783/1936813 (100.00%)
			marginheight?: number, // 14/1936813 (0.00%)
			marginwidth?: number, // 14/1936813 (0.00%)
			mean_alpha?: number, // 3436/1936813 (0.18%)
			provider_name?: string, // 1936783/1936813 (100.00%)
			provider_url?: string, // 1936783/1936813 (100.00%)
			thumbnail_height?: number, // 1698666/1936813 (87.70%)
			thumbnail_url?: string, // 1706384/1936813 (88.10%)
			thumbnail_width?: number, // 1698666/1936813 (87.70%)
			title?: string, // 1705274/1936813 (88.05%)
			type?: "video"|"rich", // 1936783/1936813 (100.00%)
			url?: string, // 368019/1936813 (19.00%)
			version?: "1.0", // 1936769/1936813 (100.00%)
			width?: number, // 1936783/1936813 (100.00%)
		}, // 1936813/2453498 (78.94%)
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
		}, // 516685/2453498 (21.06%)
		type?: string, // 1936813/2453498 (78.94%)
	},
	secure_media_embed: {
		content?: string|null, // 1936813/22242008 (8.71%)
		height?: number, // 1936813/22242008 (8.71%)
		media_domain_url?: string, // 1936813/22242008 (8.71%)
		scrolling?: boolean, // 1936813/22242008 (8.71%)
		width?: number, // 1936813/22242008 (8.71%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 16848/22242008 (0.08%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 16848/22242008 (0.08%)
	third_party_tracking?: null, // 16848/22242008 (0.08%)
	third_party_tracking_2?: null, // 16848/22242008 (0.08%)
	thumbnail: string,
	thumbnail_height?: number|null, // 22241019/22242008 (100.00%)
	thumbnail_width?: number|null, // 22241019/22242008 (100.00%)
	title: string,
	total_awards_received: number,
	treatment_tags: [],
	url: string,
	whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}