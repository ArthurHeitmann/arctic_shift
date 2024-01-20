interface RedditPost {
	adserver_click_url?: null, // 15567/21989643 (0.07%)
	adserver_imp_pixel?: null, // 15567/21989643 (0.07%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"APPRECIATION"|"COMMUNITY"|"MODERATOR"|"PREMIUM",
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
	author_cakeday?: boolean, // 67986/21989643 (0.31%)
	author_created_utc?: number|null, // 17148100/21989643 (77.98%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 494333/1561565 (31.66%)
		e: "text"|"emoji",
		t?: string, // 1067232/1561565 (68.34%)
		u?: string, // 494333/1561565 (31.66%)
	}[], // 17148100/21989643 (77.98%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 17148100/21989643 (77.98%)
	author_fullname?: string, // 17148100/21989643 (77.98%)
	author_id?: string|null, // 15567/21989643 (0.07%)
	author_patreon_flair?: boolean, // 17148100/21989643 (77.98%)
	author_premium?: boolean, // 17148100/21989643 (77.98%)
	awarders: [],
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Download"|"View More"|"Play Now"|"Apply Now"|"Install"|"Watch Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|"", // 13589/21989643 (0.06%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"photography"|"entertainment"|"gaming"|"animals"|"diy_and_crafts"|"videos"|""|"memes"|"writing"|"food"|"funny"|"music",
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
	}[], // 4070/21989643 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1062399/21989643 (4.83%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"APPRECIATION"|"COMMUNITY"|"MODERATOR"|"PREMIUM",
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
		author_cakeday?: boolean, // 3244/1039450 (0.31%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 28717/89597 (32.05%)
			e: "text"|"emoji",
			t?: string, // 60880/89597 (67.95%)
			u?: string, // 28717/89597 (32.05%)
		}[], // 918764/1039450 (88.39%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 918764/1039450 (88.39%)
		author_fullname?: string, // 918764/1039450 (88.39%)
		author_patreon_flair?: boolean, // 918764/1039450 (88.39%)
		author_premium?: boolean, // 918764/1039450 (88.39%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"View More"|"Play Now"|"Shop Now"|"Sign Up"|"Apply Now"|"Download"|"Watch Now"|"Install", // 60/1039450 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"animals"|"entertainment"|"drawing_and_painting"|"gaming"|"photography"|"diy_and_crafts"|""|"funny"|"videos"|"memes"|"art",
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
		}[], // 554/1039450 (0.05%)
		content_categories: null|("photography"|"drawing_and_painting"|"entertainment"|"gaming"|"diy_and_crafts"|"comics"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 204/1039450 (0.02%)
		event_is_live?: boolean, // 204/1039450 (0.02%)
		event_start?: number, // 204/1039450 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 146509/1039450 (14.09%)
			gid_2?: number, // 69405/1039450 (6.68%)
			gid_3?: number, // 15757/1039450 (1.52%)
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
			a?: string, // 4822/108610 (4.44%)
			e: "text"|"emoji",
			t?: string, // 103788/108610 (95.56%)
			u?: string, // 4822/108610 (4.44%)
		}[],
		link_flair_template_id?: string, // 200780/1039450 (19.32%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 203508/219178 (92.85%)
				author_url?: string, // 32468/219178 (14.81%)
				cache_age?: number, // 6156/219178 (2.81%)
				description?: string, // 187084/219178 (85.36%)
				height?: number|null, // 219177/219178 (100.00%)
				html?: string, // 219177/219178 (100.00%)
				mean_alpha?: number, // 50/219178 (0.02%)
				provider_name?: string, // 219177/219178 (100.00%)
				provider_url?: string, // 219177/219178 (100.00%)
				thumbnail_height?: number, // 211758/219178 (96.61%)
				thumbnail_url?: string, // 212788/219178 (97.08%)
				thumbnail_width?: number, // 211758/219178 (96.61%)
				title?: string, // 212703/219178 (97.05%)
				type?: "video"|"rich", // 219177/219178 (100.00%)
				url?: string, // 15371/219178 (7.01%)
				version?: "1.0", // 219177/219178 (100.00%)
				width?: number, // 219177/219178 (100.00%)
			}, // 219178/319034 (68.70%)
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
			}, // 99856/319034 (31.30%)
			type?: string, // 219178/319034 (68.70%)
		},
		media_embed: {
			content?: string|null, // 219178/1039450 (21.09%)
			height?: number, // 219178/1039450 (21.09%)
			scrolling?: boolean, // 219178/1039450 (21.09%)
			width?: number, // 219178/1039450 (21.09%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 619/13695 (4.52%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 13688/13695 (99.95%)
				hlsUrl?: string, // 619/13695 (4.52%)
				id?: string, // 13688/13695 (99.95%)
				isGif?: boolean, // 619/13695 (4.52%)
				m?: "image/jpg"|"image/png"|"image/gif", // 13069/13695 (95.43%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 13069/13695 (95.43%)
				s?: {
					gif?: string, // 187/13069 (1.43%)
					mp4?: string, // 187/13069 (1.43%)
					u?: string, // 12882/13069 (98.57%)
					x: number,
					y: number,
				}, // 13069/13695 (95.43%)
				status: "valid"|"failed",
				x?: number, // 619/13695 (4.52%)
				y?: number, // 619/13695 (4.52%)
			},
		}|null, // 6152/1039450 (0.59%)
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
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 796212/1039450 (76.60%)
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
					}, // 173798/796212 (21.83%)
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
					}, // 173798/796212 (21.83%)
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
					}, // 331975/796212 (41.69%)
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
					}, // 334172/796212 (41.97%)
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
			}, // 173012/796212 (21.73%)
		}, // 796212/1039450 (76.60%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"author"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 203508/219178 (92.85%)
				author_url?: string, // 32468/219178 (14.81%)
				cache_age?: number, // 6156/219178 (2.81%)
				description?: string, // 187084/219178 (85.36%)
				height?: number|null, // 219177/219178 (100.00%)
				html?: string, // 219177/219178 (100.00%)
				mean_alpha?: number, // 50/219178 (0.02%)
				provider_name?: string, // 219177/219178 (100.00%)
				provider_url?: string, // 219177/219178 (100.00%)
				thumbnail_height?: number, // 211758/219178 (96.61%)
				thumbnail_url?: string, // 212788/219178 (97.08%)
				thumbnail_width?: number, // 211758/219178 (96.61%)
				title?: string, // 212703/219178 (97.05%)
				type?: "video"|"rich", // 219177/219178 (100.00%)
				url?: string, // 15371/219178 (7.01%)
				version?: "1.0", // 219177/219178 (100.00%)
				width?: number, // 219177/219178 (100.00%)
			}, // 219178/319034 (68.70%)
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
			}, // 99856/319034 (31.30%)
			type?: string, // 219178/319034 (68.70%)
		},
		secure_media_embed: {
			content?: string|null, // 219178/1039450 (21.09%)
			height?: number, // 219178/1039450 (21.09%)
			media_domain_url?: string, // 219178/1039450 (21.09%)
			scrolling?: boolean, // 219178/1039450 (21.09%)
			width?: number, // 219178/1039450 (21.09%)
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
		subreddit_type: "public"|"restricted"|"user"|"archived"|"employees_only",
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
	}[], // 1062399/21989643 (4.83%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 15567/21989643 (0.07%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 15567/21989643 (0.07%)
	embed_url?: null|string, // 15567/21989643 (0.07%)
	event_end?: number, // 1923/21989643 (0.01%)
	event_is_live?: boolean, // 1923/21989643 (0.01%)
	event_start?: number, // 1923/21989643 (0.01%)
	events?: [], // 15567/21989643 (0.07%)
	eventsOnRender?: [], // 15567/21989643 (0.07%)
	gilded: number,
	gildings: {
		gid_1?: number, // 99061/21989643 (0.45%)
		gid_2?: number, // 36651/21989643 (0.17%)
		gid_3?: number, // 5914/21989643 (0.03%)
	},
	hidden: boolean,
	href_url?: string, // 15567/21989643 (0.07%)
	id: string,
	is_blank?: boolean, // 15567/21989643 (0.07%)
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
		a?: string, // 110562/3131538 (3.53%)
		e: "text"|"emoji",
		t?: string, // 3020976/3131538 (96.47%)
		u?: string, // 110562/3131538 (3.53%)
	}[],
	link_flair_template_id?: string, // 4526249/21989643 (20.58%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 1512830/1742288 (86.83%)
			author_url?: string, // 1156720/1742288 (66.39%)
			cache_age?: number, // 199066/1742288 (11.43%)
			description?: string, // 641664/1742288 (36.83%)
			height?: number|null, // 1742262/1742288 (100.00%)
			html?: string, // 1742262/1742288 (100.00%)
			marginheight?: number, // 11/1742288 (0.00%)
			marginwidth?: number, // 11/1742288 (0.00%)
			mean_alpha?: number, // 3518/1742288 (0.20%)
			provider_name?: string, // 1742262/1742288 (100.00%)
			provider_url?: string, // 1742262/1742288 (100.00%)
			thumbnail_height?: number, // 1530823/1742288 (87.86%)
			thumbnail_url?: string, // 1540457/1742288 (88.42%)
			thumbnail_width?: number, // 1530823/1742288 (87.86%)
			title?: string, // 1539489/1742288 (88.36%)
			type?: "video"|"rich", // 1742262/1742288 (100.00%)
			url?: string, // 379488/1742288 (21.78%)
			version?: "1.0", // 1742251/1742288 (100.00%)
			width?: number, // 1742262/1742288 (100.00%)
		}, // 1742288/2241939 (77.71%)
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
		}, // 499651/2241939 (22.29%)
		type?: string, // 1742288/2241939 (77.71%)
	},
	media_embed: {
		content?: string|null, // 1742288/21989643 (7.92%)
		height?: number, // 1742288/21989643 (7.92%)
		scrolling?: boolean, // 1742288/21989643 (7.92%)
		width?: number, // 1742288/21989643 (7.92%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 6980/223452 (3.12%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 223028/223452 (99.81%)
			hlsUrl?: string, // 6980/223452 (3.12%)
			id?: string, // 223028/223452 (99.81%)
			isGif?: boolean, // 6980/223452 (3.12%)
			m?: "image/jpg"|"image/png"|"image/gif", // 216048/223452 (96.69%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 216048/223452 (96.69%)
			s?: {
				gif?: string, // 2015/216048 (0.93%)
				mp4?: string, // 2015/216048 (0.93%)
				u?: string, // 214033/216048 (99.07%)
				x: number,
				y: number,
			}, // 216048/223452 (96.69%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 6980/223452 (3.12%)
			y?: number, // 6980/223452 (3.12%)
		},
	}|null, // 219291/21989643 (1.00%)
	media_only: boolean,
	mobile_ad_url?: string, // 15567/21989643 (0.07%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 15567/21989643 (0.07%)
	outbound_link?: {
	}, // 15567/21989643 (0.07%)
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
	}|null, // 64/21989643 (0.00%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 8636208/21989643 (39.27%)
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
				}, // 375643/8636208 (4.35%)
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
				}, // 375643/8636208 (4.35%)
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
				}, // 1445857/8636208 (16.74%)
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
				}, // 1482840/8636208 (17.17%)
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
		}, // 334919/8636208 (3.88%)
	}, // 8636208/21989643 (39.27%)
	priority_id?: null, // 15567/21989643 (0.07%)
	promoted?: boolean, // 15567/21989643 (0.07%)
	promoted_by?: null, // 15567/21989643 (0.07%)
	promoted_display_name?: null, // 15567/21989643 (0.07%)
	promoted_url?: null, // 15567/21989643 (0.07%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 1512830/1742288 (86.83%)
			author_url?: string, // 1156720/1742288 (66.39%)
			cache_age?: number, // 199066/1742288 (11.43%)
			description?: string, // 641664/1742288 (36.83%)
			height?: number|null, // 1742262/1742288 (100.00%)
			html?: string, // 1742262/1742288 (100.00%)
			marginheight?: number, // 11/1742288 (0.00%)
			marginwidth?: number, // 11/1742288 (0.00%)
			mean_alpha?: number, // 3518/1742288 (0.20%)
			provider_name?: string, // 1742262/1742288 (100.00%)
			provider_url?: string, // 1742262/1742288 (100.00%)
			thumbnail_height?: number, // 1530823/1742288 (87.86%)
			thumbnail_url?: string, // 1540457/1742288 (88.42%)
			thumbnail_width?: number, // 1530823/1742288 (87.86%)
			title?: string, // 1539489/1742288 (88.36%)
			type?: "video"|"rich", // 1742262/1742288 (100.00%)
			url?: string, // 379488/1742288 (21.78%)
			version?: "1.0", // 1742251/1742288 (100.00%)
			width?: number, // 1742262/1742288 (100.00%)
		}, // 1742288/2241939 (77.71%)
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
		}, // 499651/2241939 (22.29%)
		type?: string, // 1742288/2241939 (77.71%)
	},
	secure_media_embed: {
		content?: string|null, // 1742288/21989643 (7.92%)
		height?: number, // 1742288/21989643 (7.92%)
		media_domain_url?: string, // 1742288/21989643 (7.92%)
		scrolling?: boolean, // 1742288/21989643 (7.92%)
		width?: number, // 1742288/21989643 (7.92%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 15567/21989643 (0.07%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted"|"employees_only"|"archived",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 15567/21989643 (0.07%)
	third_party_tracking?: null, // 15567/21989643 (0.07%)
	third_party_tracking_2?: null, // 15567/21989643 (0.07%)
	thumbnail: string,
	thumbnail_height?: number|null, // 21988481/21989643 (99.99%)
	thumbnail_width?: number|null, // 21988481/21989643 (99.99%)
	title: string,
	total_awards_received: number,
	treatment_tags?: [], // 21989642/21989643 (100.00%)
	url: string,
	whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}