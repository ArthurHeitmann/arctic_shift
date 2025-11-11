interface RedditPost {
	_meta?: {
		edited_title?: string, // 2419428/43647661 (5.54%)
		is_edited?: boolean, // 1541528/43647661 (3.53%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8782275/43647661 (20.12%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 8029723/43647661 (18.40%)
		was_initially_deleted?: boolean, // 752553/43647661 (1.72%)
	}, // 43647661/43919437 (99.38%)
	ad_business?: null, // 355554/43919437 (0.81%)
	ad_promoted_user_posts?: null, // 355554/43919437 (0.81%)
	ad_supplementary_text_md?: null|string, // 355554/43919437 (0.81%)
	ad_user_targeting?: null, // 355554/43919437 (0.81%)
	adserver_click_url?: null, // 355554/43919437 (0.81%)
	adserver_imp_pixel?: null, // 355554/43919437 (0.81%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 355554/43919437 (0.81%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 130091/43919437 (0.30%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1044375/2853578 (36.60%)
		e: "text"|"emoji",
		t?: string, // 1809203/2853578 (63.40%)
		u?: string, // 1044375/2853578 (36.60%)
	}[], // 43597554/43919437 (99.27%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 43597554/43919437 (99.27%)
	author_fullname?: string, // 43597554/43919437 (99.27%)
	author_id?: string|null, // 355554/43919437 (0.81%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 43597554/43919437 (99.27%)
	author_premium?: boolean, // 43597554/43919437 (99.27%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 285961/43919437 (0.65%)
	campaign_id?: null, // 355554/43919437 (0.81%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 2716470/43919437 (6.19%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 7492/2715826 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 69946/183368 (38.15%)
			e: "text"|"emoji",
			t?: string, // 113422/183368 (61.85%)
			u?: string, // 69946/183368 (38.15%)
		}[], // 2703499/2715826 (99.55%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 2703499/2715826 (99.55%)
		author_fullname?: string, // 2703499/2715826 (99.55%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 2703499/2715826 (99.55%)
		author_premium?: boolean, // 2703499/2715826 (99.55%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"photography"|"drawing_and_painting"|"memes",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"diy_and_crafts"|"entertainment"|"music"|"writing"|"videos")[],
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
				caption?: string, // 1093034/3125027 (34.98%)
				id: number,
				media_id: string,
				outbound_url?: string, // 11052/3125027 (0.35%)
			}[],
		}|null, // 561050/2715826 (20.66%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 561050/2715826 (20.66%)
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
			a?: string, // 62514/490418 (12.75%)
			e: "text"|"emoji",
			t?: string, // 427904/490418 (87.25%)
			u?: string, // 62514/490418 (12.75%)
		}[],
		link_flair_template_id?: string, // 1152417/2715826 (42.43%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 33222/375655 (8.84%)
				author_url?: string, // 33198/375655 (8.84%)
				cache_age?: number, // 23/375655 (0.01%)
				description?: string, // 2378/375655 (0.63%)
				height?: number|null, // 375651/375655 (100.00%)
				html: string,
				mean_alpha?: number, // 1/375655 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 366117/375655 (97.46%)
				thumbnail_url?: string, // 375562/375655 (99.98%)
				thumbnail_width?: number, // 366117/375655 (97.46%)
				title?: string, // 375605/375655 (99.99%)
				type: "video"|"rich",
				url?: string, // 310/375655 (0.08%)
				version: "1.0",
				width?: number, // 375651/375655 (100.00%)
			}, // 375655/584897 (64.23%)
			reddit_video?: {
				bitrate_kbps?: number, // 209067/209242 (99.92%)
				dash_url?: string, // 209191/209242 (99.98%)
				duration?: number, // 209191/209242 (99.98%)
				fallback_url?: string, // 209191/209242 (99.98%)
				has_audio?: boolean, // 208356/209242 (99.58%)
				height: number|null,
				hls_url?: string, // 209191/209242 (99.98%)
				is_gif?: boolean, // 209191/209242 (99.98%)
				scrubber_media_url?: string, // 209191/209242 (99.98%)
				transcoding_message?: string, // 51/209242 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 209242/584897 (35.77%)
			type?: string, // 375655/584897 (64.23%)
		},
		media_embed: {
			content?: string, // 375651/2715826 (13.83%)
			height?: number, // 375651/2715826 (13.83%)
			scrolling?: boolean, // 375651/2715826 (13.83%)
			width?: number, // 375651/2715826 (13.83%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1926/3168139 (0.06%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 3161109/3168139 (99.78%)
				hlsUrl?: string, // 1926/3168139 (0.06%)
				id?: string, // 3161109/3168139 (99.78%)
				isGif?: boolean, // 1926/3168139 (0.06%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 3159183/3168139 (99.72%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2059950/3168139 (65.02%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 3159183/3168139 (99.72%)
				s?: {
					gif?: string, // 120726/3159183 (3.82%)
					mp4?: string, // 120726/3159183 (3.82%)
					u?: string, // 3038457/3159183 (96.18%)
					x: number,
					y: number,
				}, // 3159183/3168139 (99.72%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 1926/3168139 (0.06%)
				y?: number, // 1926/3168139 (0.06%)
			},
		}|null, // 580026/2715826 (21.36%)
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
				vote_count?: number, // 213/7880 (2.70%)
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
		}|boolean|null, // 2608/2715826 (0.10%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1535560/2715826 (56.54%)
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
					}, // 54526/1535560 (3.55%)
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
					}, // 54526/1535560 (3.55%)
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
					}, // 854588/1535560 (55.65%)
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
					}, // 859827/1535560 (55.99%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 340646/340663 (100.00%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 340663/1535560 (22.18%)
		}, // 1535560/2715826 (56.54%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 33222/375655 (8.84%)
				author_url?: string, // 33198/375655 (8.84%)
				cache_age?: number, // 23/375655 (0.01%)
				description?: string, // 2378/375655 (0.63%)
				height?: number|null, // 375651/375655 (100.00%)
				html: string,
				mean_alpha?: number, // 1/375655 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 366117/375655 (97.46%)
				thumbnail_url?: string, // 375562/375655 (99.98%)
				thumbnail_width?: number, // 366117/375655 (97.46%)
				title?: string, // 375605/375655 (99.99%)
				type: "video"|"rich",
				url?: string, // 310/375655 (0.08%)
				version: "1.0",
				width?: number, // 375651/375655 (100.00%)
			}, // 375655/584897 (64.23%)
			reddit_video?: {
				bitrate_kbps?: number, // 209067/209242 (99.92%)
				dash_url?: string, // 209191/209242 (99.98%)
				duration?: number, // 209191/209242 (99.98%)
				fallback_url?: string, // 209191/209242 (99.98%)
				has_audio?: boolean, // 208356/209242 (99.58%)
				height: number|null,
				hls_url?: string, // 209191/209242 (99.98%)
				is_gif?: boolean, // 209191/209242 (99.98%)
				scrubber_media_url?: string, // 209191/209242 (99.98%)
				transcoding_message?: string, // 51/209242 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 209242/584897 (35.77%)
			type?: string, // 375655/584897 (64.23%)
		},
		secure_media_embed: {
			content?: string, // 375651/2715826 (13.83%)
			height?: number, // 375651/2715826 (13.83%)
			media_domain_url?: string, // 375651/2715826 (13.83%)
			scrolling?: boolean, // 375651/2715826 (13.83%)
			width?: number, // 375651/2715826 (13.83%)
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
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 2715351/2715826 (99.98%)
		thumbnail_width?: number|null, // 2715351/2715826 (99.98%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2097200/2715826 (77.22%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 2716470/43919437 (6.19%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 355554/43919437 (0.81%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 355554/43919437 (0.81%)
	embed_url?: null|string, // 355554/43919437 (0.81%)
	events?: [], // 355554/43919437 (0.81%)
	eventsOnRender?: [], // 355554/43919437 (0.81%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 98642/19587202 (0.50%)
			caption?: string, // 6474917/19587202 (33.06%)
			display_url?: string, // 106681/19587202 (0.54%)
			id: number,
			media_id: string,
			outbound_url?: string, // 132002/19587202 (0.67%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 22021/19587202 (0.11%)
		}[],
	}|null, // 5251394/43919437 (11.96%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 355554/43919437 (0.81%)
	id: string,
	impression_id?: null, // 355554/43919437 (0.81%)
	impression_id_str?: null, // 355554/43919437 (0.81%)
	is_blank?: boolean, // 355554/43919437 (0.81%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5251394/43919437 (11.96%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 355554/43919437 (0.81%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1164867/9780119 (11.91%)
		e: "text"|"emoji",
		t?: string, // 8615252/9780119 (88.09%)
		u?: string, // 1164867/9780119 (11.91%)
	}[],
	link_flair_template_id?: string, // 21315741/43919437 (48.53%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1ftv2bxhjtdnv"|"1fsb9bpkxayw7"|"1fsi57k0qsf10"|"1ft1qqorgconz"|"1fp79213lyxo5"|"1fvudy6eve6hw"|"1fwgqwld0hmo4"|"1fulzgtgkiilf"|"1eqyw5qwwa80r"|"1fx8i26o8nvev"|"1fxm2k2wpmk2j"|"1fxu1s3zh7x6h", // 45/4348121 (0.00%)
		oembed?: {
			author_name?: string, // 620003/3016907 (20.55%)
			author_url?: string, // 619828/3016907 (20.55%)
			cache_age?: number, // 152/3016907 (0.01%)
			description?: string, // 23855/3016907 (0.79%)
			height?: number|null, // 3016734/3016907 (99.99%)
			html: string,
			mean_alpha?: number, // 36/3016907 (0.00%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2988578/3016907 (99.06%)
			thumbnail_url?: string, // 3016903/3016907 (100.00%)
			thumbnail_width?: number, // 2988578/3016907 (99.06%)
			title?: string, // 3016244/3016907 (99.98%)
			type: "video"|"rich",
			url?: string, // 8945/3016907 (0.30%)
			version: "1.0",
			width?: number, // 3016734/3016907 (99.99%)
		}, // 3016907/4348121 (69.38%)
		reddit_video?: {
			bitrate_kbps?: number, // 1324581/1331169 (99.51%)
			dash_url?: string, // 1324581/1331169 (99.51%)
			duration?: number, // 1324581/1331169 (99.51%)
			fallback_url?: string, // 1324581/1331169 (99.51%)
			has_audio?: boolean, // 1324568/1331169 (99.50%)
			height: number|null,
			hls_url?: string, // 1324581/1331169 (99.51%)
			is_gif?: boolean, // 1324581/1331169 (99.51%)
			scrubber_media_url?: string, // 1324581/1331169 (99.51%)
			transcoding_message?: string, // 6588/1331169 (0.49%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1331169/4348121 (30.61%)
		type?: string, // 3016952/4348121 (69.39%)
	},
	media_embed: {
		content?: string, // 1007049/43919437 (2.29%)
		height?: number, // 1007049/43919437 (2.29%)
		scrolling?: boolean, // 1007049/43919437 (2.29%)
		width?: number, // 1007049/43919437 (2.29%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20275/20017168 (0.10%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 19625762/20017168 (98.04%)
			hlsUrl?: string, // 20275/20017168 (0.10%)
			id?: string, // 19625762/20017168 (98.04%)
			isGif?: boolean, // 20275/20017168 (0.10%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 19605487/20017168 (97.94%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 9734855/20017168 (48.63%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 19605487/20017168 (97.94%)
			s?: {
				gif?: string, // 379649/19605487 (1.94%)
				mp4?: string, // 379649/19605487 (1.94%)
				u?: string, // 19225838/19605487 (98.06%)
				x: number,
				y: number,
			}, // 19605487/20017168 (97.94%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 20275/20017168 (0.10%)
			y?: number, // 20275/20017168 (0.10%)
		},
	}|null, // 5689345/43919437 (12.95%)
	media_only: boolean,
	mobile_ad_url?: string, // 355554/43919437 (0.81%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 355554/43919437 (0.81%)
	outbound_link?: {
	}, // 355554/43919437 (0.81%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 19404/142633 (13.60%)
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
	}|null, // 2653556/43919437 (6.04%)
	post_hint?: "image"|"hosted:video"|"link"|"rich:video"|"self"|"gallery"|"video", // 16549626/43919437 (37.68%)
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
				}, // 577950/19010488 (3.04%)
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
				}, // 577950/19010488 (3.04%)
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
				}, // 9911798/19010488 (52.14%)
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
				}, // 10012284/19010488 (52.67%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2048160/2048177 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 2048177/19010488 (10.77%)
	}, // 19010488/43919437 (43.28%)
	priority_id?: null, // 355554/43919437 (0.81%)
	product_ids?: [], // 355554/43919437 (0.81%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 355554/43919437 (0.81%)
	promoted?: boolean, // 355554/43919437 (0.81%)
	promoted_by?: null, // 355554/43919437 (0.81%)
	promoted_display_name?: null, // 355554/43919437 (0.81%)
	promoted_url?: null, // 355554/43919437 (0.81%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1ftv2bxhjtdnv"|"1fsb9bpkxayw7"|"1fsi57k0qsf10"|"1ft1qqorgconz"|"1fp79213lyxo5"|"1fvudy6eve6hw"|"1fwgqwld0hmo4"|"1fulzgtgkiilf"|"1eqyw5qwwa80r"|"1fx8i26o8nvev"|"1fxm2k2wpmk2j"|"1fxu1s3zh7x6h", // 45/4348121 (0.00%)
		oembed?: {
			author_name?: string, // 620003/3016907 (20.55%)
			author_url?: string, // 619828/3016907 (20.55%)
			cache_age?: number, // 152/3016907 (0.01%)
			description?: string, // 23855/3016907 (0.79%)
			height?: number|null, // 3016734/3016907 (99.99%)
			html: string,
			mean_alpha?: number, // 36/3016907 (0.00%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2988578/3016907 (99.06%)
			thumbnail_url?: string, // 3016903/3016907 (100.00%)
			thumbnail_width?: number, // 2988578/3016907 (99.06%)
			title?: string, // 3016244/3016907 (99.98%)
			type: "video"|"rich",
			url?: string, // 8945/3016907 (0.30%)
			version: "1.0",
			width?: number, // 3016734/3016907 (99.99%)
		}, // 3016907/4348121 (69.38%)
		reddit_video?: {
			bitrate_kbps?: number, // 1324581/1331169 (99.51%)
			dash_url?: string, // 1324581/1331169 (99.51%)
			duration?: number, // 1324581/1331169 (99.51%)
			fallback_url?: string, // 1324581/1331169 (99.51%)
			has_audio?: boolean, // 1324568/1331169 (99.50%)
			height: number|null,
			hls_url?: string, // 1324581/1331169 (99.51%)
			is_gif?: boolean, // 1324581/1331169 (99.51%)
			scrubber_media_url?: string, // 1324581/1331169 (99.51%)
			transcoding_message?: string, // 6588/1331169 (0.49%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1331169/4348121 (30.61%)
		type?: string, // 3016952/4348121 (69.39%)
	},
	secure_media_embed: {
		content?: string, // 1007049/43919437 (2.29%)
		height?: number, // 1007049/43919437 (2.29%)
		media_domain_url?: string, // 1007049/43919437 (2.29%)
		scrolling?: boolean, // 1007049/43919437 (2.29%)
		width?: number, // 1007049/43919437 (2.29%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 355554/43919437 (0.81%)
	sk_ad_network_data?: null, // 355554/43919437 (0.81%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 10172/43919437 (0.02%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 355554/43919437 (0.81%)
	third_party_tracking?: null, // 355554/43919437 (0.81%)
	third_party_tracking_2?: null, // 355554/43919437 (0.81%)
	thumbnail: string|null,
	thumbnail_height?: null|number, // 43646561/43919437 (99.38%)
	thumbnail_width?: null|number, // 43646561/43919437 (99.38%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 26386683/43919437 (60.08%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}