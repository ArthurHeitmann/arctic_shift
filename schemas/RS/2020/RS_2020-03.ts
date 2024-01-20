interface RedditPost {
	adserver_click_url?: null, // 20797/26577226 (0.08%)
	adserver_imp_pixel?: null, // 20797/26577226 (0.08%)
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
	author_cakeday?: boolean, // 68256/26577226 (0.26%)
	author_created_utc?: number|null, // 21224604/26577226 (79.86%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 514495/1679359 (30.64%)
		e: "text"|"emoji",
		t?: string, // 1164864/1679359 (69.36%)
		u?: string, // 514495/1679359 (30.64%)
	}[], // 21224604/26577226 (79.86%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 21224604/26577226 (79.86%)
	author_fullname?: string, // 21224604/26577226 (79.86%)
	author_id?: string|null, // 20797/26577226 (0.08%)
	author_patreon_flair?: boolean, // 21224604/26577226 (79.86%)
	author_premium?: boolean, // 21224604/26577226 (79.86%)
	awarders: [],
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Apply Now"|"Watch Now"|"Contact Us"|"Get a Quote"|""|"Get Showtimes"|"See Menu", // 18787/26577226 (0.07%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|""|"diy_and_crafts"|"videos"|"memes"|"food"|"funny"|"music",
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
			banner_img: "",
			banner_size: null,
			community_icon: string,
			created: number,
			created_utc: number,
			icon_img: string,
			icon_size: number[],
			key_color: "",
			mod_permissions: [],
			name: "t5_2s4tv",
			over_18: boolean,
			primary_color: "#666666",
			sr: "JoeRogan",
			sr_display_name_prefixed: "r/JoeRogan",
			subreddit_type: "public",
			subscribers: number,
			title: "Joe Rogan Experience",
			url: "/r/JoeRogan/",
			user_can_crosspost: boolean,
			whitelist_status: "some_ads",
		}, // 1/5027 (0.02%)
		subreddit_id: string,
		title: string,
	}[], // 5027/26577226 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 1278382/26577226 (4.81%)
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
		author_cakeday?: boolean, // 4982/1265735 (0.39%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 32896/103972 (31.64%)
			e: "text"|"emoji",
			t?: string, // 71076/103972 (68.36%)
			u?: string, // 32896/103972 (31.64%)
		}[], // 1139535/1265735 (90.03%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1139535/1265735 (90.03%)
		author_fullname?: string, // 1139535/1265735 (90.03%)
		author_patreon_flair?: boolean, // 1139535/1265735 (90.03%)
		author_premium?: boolean, // 1139535/1265735 (90.03%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Play Now"|"View More"|"Install"|"Watch Now", // 89/1265735 (0.01%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"photography"|"gaming"|"drawing_and_painting"|""|"animals"|"diy_and_crafts"|"entertainment"|"food"|"music",
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
		}[], // 1450/1265735 (0.11%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 243/1265735 (0.02%)
		event_is_live?: boolean, // 243/1265735 (0.02%)
		event_start?: number, // 243/1265735 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 101634/1265735 (8.03%)
			gid_2?: number, // 71474/1265735 (5.65%)
			gid_3?: number, // 17457/1265735 (1.38%)
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
			a?: string, // 6235/123562 (5.05%)
			e: "text"|"emoji",
			t?: string, // 117327/123562 (94.95%)
			u?: string, // 6235/123562 (5.05%)
		}[],
		link_flair_template_id?: string, // 247317/1265735 (19.54%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 274110/289814 (94.58%)
				author_url?: string, // 39005/289814 (13.46%)
				cache_age?: number, // 7460/289814 (2.57%)
				description?: string, // 250515/289814 (86.44%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 82/289814 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 280794/289814 (96.89%)
				thumbnail_url?: string, // 282223/289814 (97.38%)
				thumbnail_width?: number, // 280794/289814 (96.89%)
				title?: string, // 282133/289814 (97.35%)
				type: "video"|"rich",
				url?: string, // 15558/289814 (5.37%)
				version: "1.0",
				width: number,
			}, // 289814/400189 (72.42%)
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
			}, // 110375/400189 (27.58%)
			type?: string, // 289814/400189 (72.42%)
		},
		media_embed: {
			content?: string, // 289814/1265735 (22.90%)
			height?: number, // 289814/1265735 (22.90%)
			scrolling?: boolean, // 289814/1265735 (22.90%)
			width?: number, // 289814/1265735 (22.90%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 625/15506 (4.03%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 15470/15506 (99.77%)
				hlsUrl?: string, // 625/15506 (4.03%)
				id?: string, // 15470/15506 (99.77%)
				isGif?: boolean, // 625/15506 (4.03%)
				m?: "image/jpg"|"image/png"|"image/gif", // 14845/15506 (95.74%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 14845/15506 (95.74%)
				s?: {
					gif?: string, // 150/14845 (1.01%)
					mp4?: string, // 150/14845 (1.01%)
					u?: string, // 14695/14845 (98.99%)
					x: number,
					y: number,
				}, // 14845/15506 (95.74%)
				status: "valid"|"failed",
				x?: number, // 625/15506 (4.03%)
				y?: number, // 625/15506 (4.03%)
			},
		}|null, // 7348/1265735 (0.58%)
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
				vote_count: number,
			}[],
			total_vote_count: number,
			user_selection: null,
			voting_end_timestamp: number,
		}|null, // 659/1265735 (0.05%)
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 996110/1265735 (78.70%)
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
					}, // 239283/996110 (24.02%)
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
					}, // 239283/996110 (24.02%)
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
					}, // 481425/996110 (48.33%)
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
					}, // 484613/996110 (48.65%)
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
			}, // 237229/996110 (23.82%)
		}, // 996110/1265735 (78.70%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"author"|"automod_filtered"|"anti_evil_ops"|"content_takedown"|"community_ops",
		report_reasons: null,
		rpan_video?: {
			hls_url: string,
			scrubber_media_url: string,
		}, // 65/1265735 (0.01%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 274110/289814 (94.58%)
				author_url?: string, // 39005/289814 (13.46%)
				cache_age?: number, // 7460/289814 (2.57%)
				description?: string, // 250515/289814 (86.44%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 82/289814 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 280794/289814 (96.89%)
				thumbnail_url?: string, // 282223/289814 (97.38%)
				thumbnail_width?: number, // 280794/289814 (96.89%)
				title?: string, // 282133/289814 (97.35%)
				type: "video"|"rich",
				url?: string, // 15558/289814 (5.37%)
				version: "1.0",
				width: number,
			}, // 289814/400189 (72.42%)
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
			}, // 110375/400189 (27.58%)
			type?: string, // 289814/400189 (72.42%)
		},
		secure_media_embed: {
			content?: string, // 289814/1265735 (22.90%)
			height?: number, // 289814/1265735 (22.90%)
			media_domain_url?: string, // 289814/1265735 (22.90%)
			scrolling?: boolean, // 289814/1265735 (22.90%)
			width?: number, // 289814/1265735 (22.90%)
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
		subreddit_type: "public"|"restricted"|"user"|"archived"|"gold_restricted",
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial"|"random"|"live",
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
	}[], // 1278382/26577226 (4.81%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 20797/26577226 (0.08%)
	edited: boolean|number,
	embed_type?: null, // 20797/26577226 (0.08%)
	embed_url?: null, // 20797/26577226 (0.08%)
	event_end?: number, // 2143/26577226 (0.01%)
	event_is_live?: boolean, // 2143/26577226 (0.01%)
	event_start?: number, // 2143/26577226 (0.01%)
	events?: [], // 20797/26577226 (0.08%)
	eventsOnRender?: [], // 20797/26577226 (0.08%)
	gilded: number,
	gildings: {
		gid_1?: number, // 56810/26577226 (0.21%)
		gid_2?: number, // 36634/26577226 (0.14%)
		gid_3?: number, // 6064/26577226 (0.02%)
	},
	hidden: boolean,
	href_url?: string, // 20797/26577226 (0.08%)
	id: string,
	is_blank?: boolean, // 20797/26577226 (0.08%)
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
		a?: string, // 154252/4034435 (3.82%)
		e: "text"|"emoji",
		t?: string, // 3880183/4034435 (96.18%)
		u?: string, // 154252/4034435 (3.82%)
	}[],
	link_flair_template_id?: string, // 5950568/26577226 (22.39%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 1957275/2349887 (83.29%)
			author_url?: string, // 1428482/2349887 (60.79%)
			cache_age?: number, // 279651/2349887 (11.90%)
			description?: string, // 963127/2349887 (40.99%)
			height?: number|null, // 2349866/2349887 (100.00%)
			html?: string, // 2349866/2349887 (100.00%)
			mean_alpha?: number, // 4199/2349887 (0.18%)
			provider_name?: string, // 2349866/2349887 (100.00%)
			provider_url?: string, // 2349866/2349887 (100.00%)
			thumbnail_height?: number, // 2061911/2349887 (87.75%)
			thumbnail_url?: string, // 2069752/2349887 (88.08%)
			thumbnail_width?: number, // 2061911/2349887 (87.75%)
			title?: string, // 2068562/2349887 (88.03%)
			type?: "video"|"rich", // 2349866/2349887 (100.00%)
			url?: string, // 459233/2349887 (19.54%)
			version?: "1.0", // 2349866/2349887 (100.00%)
			width?: number, // 2349866/2349887 (100.00%)
		}, // 2349887/3004381 (78.22%)
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
		}, // 654494/3004381 (21.78%)
		type?: string, // 2349887/3004381 (78.22%)
	},
	media_embed: {
		content?: string|null, // 2349887/26577226 (8.84%)
		height?: number, // 2349887/26577226 (8.84%)
		scrolling?: boolean, // 2349887/26577226 (8.84%)
		width?: number, // 2349887/26577226 (8.84%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 9390/262693 (3.57%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 262284/262693 (99.84%)
			hlsUrl?: string, // 9390/262693 (3.57%)
			id?: string, // 262284/262693 (99.84%)
			isGif?: boolean, // 9390/262693 (3.57%)
			m?: "image/jpg"|"image/png"|"image/gif", // 252894/262693 (96.27%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 252894/262693 (96.27%)
			s?: {
				gif?: string, // 1749/252894 (0.69%)
				mp4?: string, // 1749/252894 (0.69%)
				u?: string, // 251145/252894 (99.31%)
				x: number,
				y: number,
			}, // 252894/262693 (96.27%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 9390/262693 (3.57%)
			y?: number, // 9390/262693 (3.57%)
		},
	}|null, // 268809/26577226 (1.01%)
	media_only: boolean,
	mobile_ad_url?: string, // 20797/26577226 (0.08%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 20797/26577226 (0.08%)
	outbound_link?: {
	}, // 20797/26577226 (0.08%)
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
	}|null, // 35355/26577226 (0.13%)
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 10522292/26577226 (39.59%)
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
				}, // 491257/10522292 (4.67%)
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
				}, // 491257/10522292 (4.67%)
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
				}, // 2010268/10522292 (19.10%)
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
				}, // 2058572/10522292 (19.56%)
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
		}, // 440020/10522292 (4.18%)
	}, // 10522292/26577226 (39.59%)
	priority_id?: null, // 20797/26577226 (0.08%)
	promoted?: boolean, // 20797/26577226 (0.08%)
	promoted_by?: null, // 20797/26577226 (0.08%)
	promoted_display_name?: null, // 20797/26577226 (0.08%)
	promoted_url?: null, // 20797/26577226 (0.08%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"moderator"|"reddit"|"automod_filtered"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops",
	retrieved_on: number,
	rpan_video?: {
		hls_url: string,
		scrubber_media_url: string,
	}, // 37868/26577226 (0.14%)
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 1957275/2349887 (83.29%)
			author_url?: string, // 1428482/2349887 (60.79%)
			cache_age?: number, // 279651/2349887 (11.90%)
			description?: string, // 963127/2349887 (40.99%)
			height?: number|null, // 2349866/2349887 (100.00%)
			html?: string, // 2349866/2349887 (100.00%)
			mean_alpha?: number, // 4199/2349887 (0.18%)
			provider_name?: string, // 2349866/2349887 (100.00%)
			provider_url?: string, // 2349866/2349887 (100.00%)
			thumbnail_height?: number, // 2061911/2349887 (87.75%)
			thumbnail_url?: string, // 2069752/2349887 (88.08%)
			thumbnail_width?: number, // 2061911/2349887 (87.75%)
			title?: string, // 2068562/2349887 (88.03%)
			type?: "video"|"rich", // 2349866/2349887 (100.00%)
			url?: string, // 459233/2349887 (19.54%)
			version?: "1.0", // 2349866/2349887 (100.00%)
			width?: number, // 2349866/2349887 (100.00%)
		}, // 2349887/3004381 (78.22%)
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
		}, // 654494/3004381 (21.78%)
		type?: string, // 2349887/3004381 (78.22%)
	},
	secure_media_embed: {
		content?: string|null, // 2349887/26577226 (8.84%)
		height?: number, // 2349887/26577226 (8.84%)
		media_domain_url?: string, // 2349887/26577226 (8.84%)
		scrolling?: boolean, // 2349887/26577226 (8.84%)
		width?: number, // 2349887/26577226 (8.84%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 20797/26577226 (0.08%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 20797/26577226 (0.08%)
	third_party_tracking?: null, // 20797/26577226 (0.08%)
	third_party_tracking_2?: null, // 20797/26577226 (0.08%)
	thumbnail: string,
	thumbnail_height?: number|null, // 26576076/26577226 (100.00%)
	thumbnail_width?: number|null, // 26576076/26577226 (100.00%)
	title: string,
	total_awards_received: number,
	treatment_tags?: [], // 26577224/26577226 (100.00%)
	url: string,
	whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}