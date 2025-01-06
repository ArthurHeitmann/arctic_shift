interface RedditPost {
	_meta?: {
		corrupted_selftext?: "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\r\n", // 1/37858755 (0.00%)
		edited_title?: string, // 57722/37858755 (0.15%)
		is_edited?: boolean, // 1479886/37858755 (3.91%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 7568163/37858755 (19.99%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 6814250/37858755 (18.00%)
		was_initially_deleted?: boolean, // 753913/37858755 (1.99%)
	}, // 37858755/38188278 (99.14%)
	ad_business?: null, // 143009/38188278 (0.37%)
	ad_promoted_user_posts?: null|[], // 143009/38188278 (0.37%)
	ad_supplementary_text_md?: null|string, // 143009/38188278 (0.37%)
	ad_user_targeting?: null, // 143009/38188278 (0.37%)
	adserver_click_url?: null, // 143009/38188278 (0.37%)
	adserver_imp_pixel?: null, // 143009/38188278 (0.37%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 143009/38188278 (0.37%)
	approved?: boolean, // 3/38188278 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 104454/38188278 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1038621/2740011 (37.91%)
		e: "text"|"emoji",
		t?: string, // 1701390/2740011 (62.09%)
		u?: string, // 1038621/2740011 (37.91%)
	}[], // 37757851/38188278 (98.87%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 37757851/38188278 (98.87%)
	author_fullname?: string, // 37757851/38188278 (98.87%)
	author_id?: string|null, // 143009/38188278 (0.37%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 37757851/38188278 (98.87%)
	author_premium?: boolean, // 37757851/38188278 (98.87%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Apply Now"|"Order Now"|"Contact Us"|"Watch Now"|"Get Showtimes"|"Get a Quote"|"Pre-order Now"|"See Menu", // 112683/38188278 (0.30%)
	campaign_id?: null, // 143009/38188278 (0.37%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment"|"gaming",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1258160/38188278 (3.29%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3898/1258037 (0.31%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 41108/109678 (37.48%)
			e: "text"|"emoji",
			t?: string, // 68570/109678 (62.52%)
			u?: string, // 41108/109678 (37.48%)
		}[], // 1248310/1258037 (99.23%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1248310/1258037 (99.23%)
		author_fullname?: string, // 1248310/1258037 (99.23%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1248310/1258037 (99.23%)
		author_premium?: boolean, // 1248310/1258037 (99.23%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"entertainment",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 376001/1360712 (27.63%)
				id: number,
				media_id: string,
				outbound_url?: string, // 24411/1360712 (1.79%)
			}[],
		}|null, // 216191/1258037 (17.18%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 216191/1258037 (17.18%)
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
			a?: string, // 33993/224066 (15.17%)
			e: "text"|"emoji",
			t?: string, // 190073/224066 (84.83%)
			u?: string, // 33993/224066 (15.17%)
		}[],
		link_flair_template_id?: string, // 493218/1258037 (39.21%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 16489/265705 (6.21%)
				author_url?: string, // 16462/265705 (6.20%)
				cache_age?: number, // 614/265705 (0.23%)
				description?: string, // 1943/265705 (0.73%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 112/265705 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 252348/265705 (94.97%)
				thumbnail_url?: string, // 265068/265705 (99.76%)
				thumbnail_width?: number, // 252348/265705 (94.97%)
				title?: string, // 265137/265705 (99.79%)
				type: "video"|"rich",
				url?: string, // 1172/265705 (0.44%)
				version: "1.0",
				width: number,
			}, // 265705/389536 (68.21%)
			reddit_video?: {
				bitrate_kbps?: number, // 123650/123831 (99.85%)
				dash_url?: string, // 123820/123831 (99.99%)
				duration?: number, // 123820/123831 (99.99%)
				fallback_url?: string, // 123820/123831 (99.99%)
				has_audio?: boolean, // 121845/123831 (98.40%)
				height: number|null,
				hls_url?: string, // 123820/123831 (99.99%)
				is_gif?: boolean, // 123820/123831 (99.99%)
				scrubber_media_url?: string, // 123820/123831 (99.99%)
				transcoding_message?: string, // 11/123831 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 123831/389536 (31.79%)
			type?: string, // 265705/389536 (68.21%)
		},
		media_embed: {
			content?: string, // 265705/1258037 (21.12%)
			height?: number, // 265705/1258037 (21.12%)
			scrolling?: boolean, // 265705/1258037 (21.12%)
			width?: number, // 265705/1258037 (21.12%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1324/1394647 (0.09%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1393978/1394647 (99.95%)
				hlsUrl?: string, // 1324/1394647 (0.09%)
				id?: string, // 1393978/1394647 (99.95%)
				isGif?: boolean, // 1324/1394647 (0.09%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 1392654/1394647 (99.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 930946/1394647 (66.75%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1392654/1394647 (99.86%)
				s?: {
					gif?: string, // 73998/1392654 (5.31%)
					mp4?: string, // 73998/1392654 (5.31%)
					u?: string, // 1318656/1392654 (94.69%)
					x: number,
					y: number,
				}, // 1392654/1394647 (99.86%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1324/1394647 (0.09%)
				y?: number, // 1324/1394647 (0.09%)
			},
		}|null, // 229701/1258037 (18.26%)
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
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 174/4038 (4.31%)
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
		}|null, // 1068/1258037 (0.08%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 905856/1258037 (72.01%)
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
					}, // 47197/905856 (5.21%)
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
					}, // 47197/905856 (5.21%)
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
					}, // 532831/905856 (58.82%)
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
					}, // 535072/905856 (59.07%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 254705/254726 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 254726/905856 (28.12%)
		}, // 905856/1258037 (72.01%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"copyright_takedown"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 16489/265705 (6.21%)
				author_url?: string, // 16462/265705 (6.20%)
				cache_age?: number, // 614/265705 (0.23%)
				description?: string, // 1943/265705 (0.73%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 112/265705 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 252348/265705 (94.97%)
				thumbnail_url?: string, // 265068/265705 (99.76%)
				thumbnail_width?: number, // 252348/265705 (94.97%)
				title?: string, // 265137/265705 (99.79%)
				type: "video"|"rich",
				url?: string, // 1172/265705 (0.44%)
				version: "1.0",
				width: number,
			}, // 265705/389536 (68.21%)
			reddit_video?: {
				bitrate_kbps?: number, // 123650/123831 (99.85%)
				dash_url?: string, // 123820/123831 (99.99%)
				duration?: number, // 123820/123831 (99.99%)
				fallback_url?: string, // 123820/123831 (99.99%)
				has_audio?: boolean, // 121845/123831 (98.40%)
				height: number|null,
				hls_url?: string, // 123820/123831 (99.99%)
				is_gif?: boolean, // 123820/123831 (99.99%)
				scrubber_media_url?: string, // 123820/123831 (99.99%)
				transcoding_message?: string, // 11/123831 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 123831/389536 (31.79%)
			type?: string, // 265705/389536 (68.21%)
		},
		secure_media_embed: {
			content?: string, // 265705/1258037 (21.12%)
			height?: number, // 265705/1258037 (21.12%)
			media_domain_url?: string, // 265705/1258037 (21.12%)
			scrolling?: boolean, // 265705/1258037 (21.12%)
			width?: number, // 265705/1258037 (21.12%)
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
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"live"|"controversial"|"random",
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
		url_overridden_by_dest?: string, // 1109687/1258037 (88.21%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 1258160/38188278 (3.29%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 143009/38188278 (0.37%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 143009/38188278 (0.37%)
	embed_url?: null|string, // 143009/38188278 (0.37%)
	events?: [], // 143009/38188278 (0.37%)
	eventsOnRender?: [], // 143009/38188278 (0.37%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"View More"|"Sign Up"|"Download"|"Install"|"Order Now"|"Play Now"|"Contact Us"|"Get a Quote"|"Apply Now"|"Watch Now"|"Get Showtimes"|"Pre-order Now"|"See Menu", // 58354/15298565 (0.38%)
			caption?: string, // 5232780/15298565 (34.20%)
			display_url?: string, // 63512/15298565 (0.42%)
			id: number,
			media_id: string,
			outbound_url?: string, // 95242/15298565 (0.62%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 9264/15298565 (0.06%)
		}[],
	}|null, // 4121413/38188278 (10.79%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 143009/38188278 (0.37%)
	id: string,
	ignore_reports?: boolean, // 3/38188278 (0.00%)
	impression_id?: null, // 143009/38188278 (0.37%)
	impression_id_str?: null, // 143009/38188278 (0.37%)
	is_blank?: boolean, // 143009/38188278 (0.37%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 4121413/38188278 (10.79%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 143009/38188278 (0.37%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1093548/8948200 (12.22%)
		e: "text"|"emoji",
		t?: string, // 7854652/8948200 (87.78%)
		u?: string, // 1093548/8948200 (12.22%)
	}[],
	link_flair_template_id?: string, // 16987418/38188278 (44.48%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1bsso361afr0r"|"1e5evsmozli6m"|"ta535s1hq2je"|"1e686vf2nf2pv"|"1e6zomj1wdx3q"|"1dryfenlsj724"|"1e8dq2j8xm9q4", // 43/3688295 (0.00%)
		oembed?: {
			author_name?: string, // 693750/2527397 (27.45%)
			author_url?: string, // 693178/2527397 (27.43%)
			cache_age?: number, // 21329/2527397 (0.84%)
			description?: string, // 77382/2527397 (3.06%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2170/2527397 (0.09%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2469080/2527397 (97.69%)
			thumbnail_url?: string, // 2507084/2527397 (99.20%)
			thumbnail_width?: number, // 2469080/2527397 (97.69%)
			title?: string, // 2506605/2527397 (99.18%)
			type: "video"|"rich",
			url?: string, // 50472/2527397 (2.00%)
			version: "1.0",
			width: number,
		}, // 2527397/3688295 (68.52%)
		reddit_video?: {
			bitrate_kbps?: number, // 1156065/1160855 (99.59%)
			dash_url?: string, // 1156065/1160855 (99.59%)
			duration?: number, // 1156065/1160855 (99.59%)
			fallback_url?: string, // 1156065/1160855 (99.59%)
			has_audio?: boolean, // 1156045/1160855 (99.59%)
			height: number|null,
			hls_url?: string, // 1156065/1160855 (99.59%)
			is_gif?: boolean, // 1156065/1160855 (99.59%)
			scrubber_media_url?: string, // 1156065/1160855 (99.59%)
			transcoding_message?: string, // 4790/1160855 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1160855/3688295 (31.47%)
		type?: string, // 2527440/3688295 (68.53%)
	},
	media_embed: {
		content?: string, // 2497548/38188278 (6.54%)
		height?: number, // 2497548/38188278 (6.54%)
		scrolling?: boolean, // 2497548/38188278 (6.54%)
		width?: number, // 2497548/38188278 (6.54%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 22566/15988723 (0.14%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 15914573/15988723 (99.54%)
			hlsUrl?: string, // 22566/15988723 (0.14%)
			id?: string, // 15914573/15988723 (99.54%)
			isGif?: boolean, // 22566/15988723 (0.14%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 15892007/15988723 (99.40%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6952686/15988723 (43.48%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 15892007/15988723 (99.40%)
			s?: {
				gif?: string, // 286680/15892007 (1.80%)
				mp4?: string, // 286680/15892007 (1.80%)
				u?: string, // 15605327/15892007 (98.20%)
				x: number,
				y: number,
			}, // 15892007/15988723 (99.40%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 22566/15988723 (0.14%)
			y?: number, // 22566/15988723 (0.14%)
		},
	}|null, // 4652494/38188278 (12.18%)
	media_only: boolean,
	mobile_ad_url?: string, // 143009/38188278 (0.37%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 143009/38188278 (0.37%)
	outbound_link?: {
	}, // 143009/38188278 (0.37%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 16983/205664 (8.26%)
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
	}|null, // 62136/38188278 (0.16%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 18481505/38188278 (48.40%)
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
				}, // 563995/18564311 (3.04%)
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
				}, // 563995/18564311 (3.04%)
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
				}, // 9165495/18564311 (49.37%)
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
				}, // 9247973/18564311 (49.82%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1679689/1679710 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1679710/18564311 (9.05%)
	}, // 18564311/38188278 (48.61%)
	priority_id?: null, // 143009/38188278 (0.37%)
	product_ids?: [], // 143009/38188278 (0.37%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 143009/38188278 (0.37%)
	promoted?: boolean, // 143009/38188278 (0.37%)
	promoted_by?: null, // 143009/38188278 (0.37%)
	promoted_display_name?: null, // 143009/38188278 (0.37%)
	promoted_url?: null, // 143009/38188278 (0.37%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 3/38188278 (0.00%)
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1bsso361afr0r"|"1e5evsmozli6m"|"ta535s1hq2je"|"1e686vf2nf2pv"|"1e6zomj1wdx3q"|"1dryfenlsj724"|"1e8dq2j8xm9q4", // 43/3688295 (0.00%)
		oembed?: {
			author_name?: string, // 693750/2527397 (27.45%)
			author_url?: string, // 693178/2527397 (27.43%)
			cache_age?: number, // 21329/2527397 (0.84%)
			description?: string, // 77382/2527397 (3.06%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2170/2527397 (0.09%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2469080/2527397 (97.69%)
			thumbnail_url?: string, // 2507084/2527397 (99.20%)
			thumbnail_width?: number, // 2469080/2527397 (97.69%)
			title?: string, // 2506605/2527397 (99.18%)
			type: "video"|"rich",
			url?: string, // 50472/2527397 (2.00%)
			version: "1.0",
			width: number,
		}, // 2527397/3688295 (68.52%)
		reddit_video?: {
			bitrate_kbps?: number, // 1156065/1160855 (99.59%)
			dash_url?: string, // 1156065/1160855 (99.59%)
			duration?: number, // 1156065/1160855 (99.59%)
			fallback_url?: string, // 1156065/1160855 (99.59%)
			has_audio?: boolean, // 1156045/1160855 (99.59%)
			height: number|null,
			hls_url?: string, // 1156065/1160855 (99.59%)
			is_gif?: boolean, // 1156065/1160855 (99.59%)
			scrubber_media_url?: string, // 1156065/1160855 (99.59%)
			transcoding_message?: string, // 4790/1160855 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1160855/3688295 (31.47%)
		type?: string, // 2527440/3688295 (68.53%)
	},
	secure_media_embed: {
		content?: string, // 2497548/38188278 (6.54%)
		height?: number, // 2497548/38188278 (6.54%)
		media_domain_url?: string, // 2497548/38188278 (6.54%)
		scrolling?: boolean, // 2497548/38188278 (6.54%)
		width?: number, // 2497548/38188278 (6.54%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 143009/38188278 (0.37%)
	sk_ad_network_data?: null, // 143009/38188278 (0.37%)
	spam?: boolean, // 3/38188278 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 3753/38188278 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 143009/38188278 (0.37%)
	third_party_tracking?: null, // 143009/38188278 (0.37%)
	third_party_tracking_2?: null, // 143009/38188278 (0.37%)
	thumbnail: string,
	thumbnail_height?: number|null, // 38187312/38188278 (100.00%)
	thumbnail_width?: number|null, // 38187312/38188278 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22850367/38188278 (59.84%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}