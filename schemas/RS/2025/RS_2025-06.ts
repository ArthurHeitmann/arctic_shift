interface RedditPost {
	_meta?: {
		edited_title?: string, // 50678/40198950 (0.13%)
		is_edited?: boolean, // 1526953/40198950 (3.80%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops", // 8572064/40198950 (21.32%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7691887/40198950 (19.13%)
		was_initially_deleted?: boolean, // 880177/40198950 (2.19%)
	}, // 40198950/40417850 (99.46%)
	ad_business?: null, // 229537/40417850 (0.57%)
	ad_promoted_user_posts?: null, // 229537/40417850 (0.57%)
	ad_supplementary_text_md?: null|string, // 229537/40417850 (0.57%)
	ad_user_targeting?: null, // 229537/40417850 (0.57%)
	adserver_click_url?: null, // 229537/40417850 (0.57%)
	adserver_imp_pixel?: null, // 229537/40417850 (0.57%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 229537/40417850 (0.57%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 105540/40417850 (0.26%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1026039/2812189 (36.49%)
		e: "text"|"emoji",
		t?: string, // 1786150/2812189 (63.51%)
		u?: string, // 1026039/2812189 (36.49%)
	}[], // 40129019/40417850 (99.29%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 40129019/40417850 (99.29%)
	author_fullname?: string, // 40129018/40417850 (99.29%)
	author_id?: string|null, // 229537/40417850 (0.57%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 40129019/40417850 (99.29%)
	author_premium?: boolean, // 40129019/40417850 (99.29%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 185616/40417850 (0.46%)
	campaign_id?: null, // 229537/40417850 (0.57%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1528941/40417850 (3.78%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4269/1528740 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 48360/127380 (37.97%)
			e: "text"|"emoji",
			t?: string, // 79020/127380 (62.03%)
			u?: string, // 48360/127380 (37.97%)
		}[], // 1516324/1528740 (99.19%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1516324/1528740 (99.19%)
		author_fullname?: string, // 1516324/1528740 (99.19%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1516324/1528740 (99.19%)
		author_premium?: boolean, // 1516324/1528740 (99.19%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"photography"|"entertainment",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"diy_and_crafts"|"gaming"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 595906/1752221 (34.01%)
				id: number,
				media_id: string,
				outbound_url?: string, // 12516/1752221 (0.71%)
			}[],
		}|null, // 291050/1528740 (19.04%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 291050/1528740 (19.04%)
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
			a?: string, // 40944/278413 (14.71%)
			e: "text"|"emoji",
			t?: string, // 237469/278413 (85.29%)
			u?: string, // 40944/278413 (14.71%)
		}[],
		link_flair_template_id?: string, // 629742/1528740 (41.19%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "1f6c5t0liqj9c", // 2/460097 (0.00%)
			oembed?: {
				author_name?: string, // 18240/298704 (6.11%)
				author_url?: string, // 18217/298704 (6.10%)
				cache_age?: number, // 152/298704 (0.05%)
				description?: string, // 2048/298704 (0.69%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 27/298704 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 287271/298704 (96.17%)
				thumbnail_url?: string, // 298522/298704 (99.94%)
				thumbnail_width?: number, // 287271/298704 (96.17%)
				title?: string, // 298580/298704 (99.96%)
				type: "video"|"rich",
				url?: string, // 687/298704 (0.23%)
				version: "1.0",
				width: number,
			}, // 298704/460097 (64.92%)
			reddit_video?: {
				bitrate_kbps?: number, // 161249/161391 (99.91%)
				dash_url?: string, // 161385/161391 (100.00%)
				duration?: number, // 161385/161391 (100.00%)
				fallback_url?: string, // 161385/161391 (100.00%)
				has_audio?: boolean, // 160400/161391 (99.39%)
				height: number|null,
				hls_url?: string, // 161385/161391 (100.00%)
				is_gif?: boolean, // 161385/161391 (100.00%)
				scrubber_media_url?: string, // 161385/161391 (100.00%)
				transcoding_message?: string, // 6/161391 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 161391/460097 (35.08%)
			type?: string, // 298706/460097 (64.92%)
		},
		media_embed: {
			content?: string, // 298706/1528740 (19.54%)
			height?: number, // 298706/1528740 (19.54%)
			scrolling?: boolean, // 298706/1528740 (19.54%)
			width?: number, // 298706/1528740 (19.54%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 926/1778215 (0.05%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1776612/1778215 (99.91%)
				hlsUrl?: string, // 926/1778215 (0.05%)
				id?: string, // 1776612/1778215 (99.91%)
				isGif?: boolean, // 926/1778215 (0.05%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1775686/1778215 (99.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1221810/1778215 (68.71%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1775686/1778215 (99.86%)
				s?: {
					gif?: string, // 71565/1775686 (4.03%)
					mp4?: string, // 71565/1775686 (4.03%)
					u?: string, // 1704121/1775686 (95.97%)
					x: number,
					y: number,
				}, // 1775686/1778215 (99.86%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 926/1778215 (0.05%)
				y?: number, // 926/1778215 (0.05%)
			},
		}|null, // 301874/1528740 (19.75%)
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
				vote_count?: number, // 140/4860 (2.88%)
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
		}, // 1294/1528740 (0.08%)
		post_hint?: "image"|"rich:video"|"gallery"|"hosted:video"|"link"|"self"|"video", // 1187077/1528740 (77.65%)
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
					}, // 46498/1187077 (3.92%)
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
					}, // 46498/1187077 (3.92%)
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
					}, // 686356/1187077 (57.82%)
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
					}, // 690153/1187077 (58.14%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 280658/280667 (100.00%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 280667/1187077 (23.64%)
		}, // 1187077/1528740 (77.65%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"copyright_takedown"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "1f6c5t0liqj9c", // 2/460097 (0.00%)
			oembed?: {
				author_name?: string, // 18240/298704 (6.11%)
				author_url?: string, // 18217/298704 (6.10%)
				cache_age?: number, // 152/298704 (0.05%)
				description?: string, // 2048/298704 (0.69%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 27/298704 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 287271/298704 (96.17%)
				thumbnail_url?: string, // 298522/298704 (99.94%)
				thumbnail_width?: number, // 287271/298704 (96.17%)
				title?: string, // 298580/298704 (99.96%)
				type: "video"|"rich",
				url?: string, // 687/298704 (0.23%)
				version: "1.0",
				width: number,
			}, // 298704/460097 (64.92%)
			reddit_video?: {
				bitrate_kbps?: number, // 161249/161391 (99.91%)
				dash_url?: string, // 161385/161391 (100.00%)
				duration?: number, // 161385/161391 (100.00%)
				fallback_url?: string, // 161385/161391 (100.00%)
				has_audio?: boolean, // 160400/161391 (99.39%)
				height: number|null,
				hls_url?: string, // 161385/161391 (100.00%)
				is_gif?: boolean, // 161385/161391 (100.00%)
				scrubber_media_url?: string, // 161385/161391 (100.00%)
				transcoding_message?: string, // 6/161391 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 161391/460097 (35.08%)
			type?: string, // 298706/460097 (64.92%)
		},
		secure_media_embed: {
			content?: string, // 298706/1528740 (19.54%)
			height?: number, // 298706/1528740 (19.54%)
			media_domain_url?: string, // 298706/1528740 (19.54%)
			scrolling?: boolean, // 298706/1528740 (19.54%)
			width?: number, // 298706/1528740 (19.54%)
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
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"live"|"controversial"|"random",
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
		url_overridden_by_dest?: string, // 1311837/1528740 (85.81%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 1528941/40417850 (3.78%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 229537/40417850 (0.57%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 229537/40417850 (0.57%)
	embed_url?: null|string, // 229537/40417850 (0.57%)
	events?: [], // 229537/40417850 (0.57%)
	eventsOnRender?: [], // 229537/40417850 (0.57%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 68079/18466168 (0.37%)
			caption?: string, // 6174281/18466168 (33.44%)
			display_url?: string, // 75751/18466168 (0.41%)
			id: number,
			media_id: string,
			outbound_url?: string, // 105774/18466168 (0.57%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 13924/18466168 (0.08%)
		}[],
	}|null, // 4981218/40417850 (12.32%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 229537/40417850 (0.57%)
	id: string,
	impression_id?: null, // 229537/40417850 (0.57%)
	impression_id_str?: null, // 229537/40417850 (0.57%)
	is_blank?: boolean, // 229537/40417850 (0.57%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 4981218/40417850 (12.32%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 229537/40417850 (0.57%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1164509/9651802 (12.07%)
		e: "text"|"emoji",
		t?: string, // 8487293/9651802 (87.93%)
		u?: string, // 1164509/9651802 (12.07%)
	}[],
	link_flair_template_id?: string, // 18756562/40417850 (46.41%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1f6c5t0liqj9c"|"1f8946wbbea1x", // 46/4110218 (0.00%)
		oembed?: {
			author_name?: string, // 654918/2772449 (23.62%)
			author_url?: string, // 654514/2772449 (23.61%)
			cache_age?: number, // 11668/2772449 (0.42%)
			description?: string, // 44408/2772449 (1.60%)
			height?: number|null, // 2772431/2772449 (100.00%)
			html: string,
			mean_alpha?: number, // 905/2772449 (0.03%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2731739/2772449 (98.53%)
			thumbnail_url?: string, // 2761571/2772449 (99.61%)
			thumbnail_width?: number, // 2731739/2772449 (98.53%)
			title?: string, // 2761272/2772449 (99.60%)
			type: "video"|"rich",
			url?: string, // 29206/2772449 (1.05%)
			version: "1.0",
			width?: number, // 2772431/2772449 (100.00%)
		}, // 2772449/4110218 (67.45%)
		reddit_video?: {
			bitrate_kbps?: number, // 1330577/1337723 (99.47%)
			dash_url?: string, // 1330577/1337723 (99.47%)
			duration?: number, // 1330577/1337723 (99.47%)
			fallback_url?: string, // 1330577/1337723 (99.47%)
			has_audio?: boolean, // 1330570/1337723 (99.47%)
			height: number|null,
			hls_url?: string, // 1330577/1337723 (99.47%)
			is_gif?: boolean, // 1330577/1337723 (99.47%)
			scrubber_media_url?: string, // 1330577/1337723 (99.47%)
			transcoding_message?: string, // 7146/1337723 (0.53%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1337723/4110218 (32.55%)
		type?: string, // 2772495/4110218 (67.45%)
	},
	media_embed: {
		content?: string, // 1291111/40417850 (3.19%)
		height?: number, // 1291111/40417850 (3.19%)
		scrolling?: boolean, // 1291111/40417850 (3.19%)
		width?: number, // 1291111/40417850 (3.19%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 18260/19026595 (0.10%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 18759905/19026595 (98.60%)
			hlsUrl?: string, // 18260/19026595 (0.10%)
			id?: string, // 18759905/19026595 (98.60%)
			isGif?: boolean, // 18260/19026595 (0.10%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 18741645/19026595 (98.50%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 8845833/19026595 (46.49%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 18741645/19026595 (98.50%)
			s?: {
				gif?: string, // 320490/18741645 (1.71%)
				mp4?: string, // 320490/18741645 (1.71%)
				u?: string, // 18421155/18741645 (98.29%)
				x: number,
				y: number,
			}, // 18741645/19026595 (98.50%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 18260/19026595 (0.10%)
			y?: number, // 18260/19026595 (0.10%)
		},
	}|null, // 5443384/40417850 (13.47%)
	media_only: boolean,
	mobile_ad_url?: string, // 229537/40417850 (0.57%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 229537/40417850 (0.57%)
	outbound_link?: {
	}, // 229537/40417850 (0.57%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 15330/127717 (12.00%)
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
	}|null, // 39803/40417850 (0.10%)
	post_hint?: "image"|"gallery"|"hosted:video"|"link"|"rich:video"|"self"|"video", // 19874825/40417850 (49.17%)
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
				}, // 517993/21710209 (2.39%)
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
				}, // 517993/21710209 (2.39%)
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
				}, // 10878345/21710209 (50.11%)
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
				}, // 11001566/21710209 (50.67%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1733024/1733034 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1733034/21710209 (7.98%)
	}, // 21710209/40417850 (53.71%)
	priority_id?: null, // 229537/40417850 (0.57%)
	product_ids?: [], // 229537/40417850 (0.57%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 229537/40417850 (0.57%)
	promoted?: boolean, // 229537/40417850 (0.57%)
	promoted_by?: null, // 229537/40417850 (0.57%)
	promoted_display_name?: null, // 229537/40417850 (0.57%)
	promoted_url?: null, // 229537/40417850 (0.57%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1f6c5t0liqj9c"|"1f8946wbbea1x", // 46/4110218 (0.00%)
		oembed?: {
			author_name?: string, // 654918/2772449 (23.62%)
			author_url?: string, // 654514/2772449 (23.61%)
			cache_age?: number, // 11668/2772449 (0.42%)
			description?: string, // 44408/2772449 (1.60%)
			height?: number|null, // 2772431/2772449 (100.00%)
			html: string,
			mean_alpha?: number, // 905/2772449 (0.03%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2731739/2772449 (98.53%)
			thumbnail_url?: string, // 2761571/2772449 (99.61%)
			thumbnail_width?: number, // 2731739/2772449 (98.53%)
			title?: string, // 2761272/2772449 (99.60%)
			type: "video"|"rich",
			url?: string, // 29206/2772449 (1.05%)
			version: "1.0",
			width?: number, // 2772431/2772449 (100.00%)
		}, // 2772449/4110218 (67.45%)
		reddit_video?: {
			bitrate_kbps?: number, // 1330577/1337723 (99.47%)
			dash_url?: string, // 1330577/1337723 (99.47%)
			duration?: number, // 1330577/1337723 (99.47%)
			fallback_url?: string, // 1330577/1337723 (99.47%)
			has_audio?: boolean, // 1330570/1337723 (99.47%)
			height: number|null,
			hls_url?: string, // 1330577/1337723 (99.47%)
			is_gif?: boolean, // 1330577/1337723 (99.47%)
			scrubber_media_url?: string, // 1330577/1337723 (99.47%)
			transcoding_message?: string, // 7146/1337723 (0.53%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1337723/4110218 (32.55%)
		type?: string, // 2772495/4110218 (67.45%)
	},
	secure_media_embed: {
		content?: string, // 1291111/40417850 (3.19%)
		height?: number, // 1291111/40417850 (3.19%)
		media_domain_url?: string, // 1291111/40417850 (3.19%)
		scrolling?: boolean, // 1291111/40417850 (3.19%)
		width?: number, // 1291111/40417850 (3.19%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 229537/40417850 (0.57%)
	sk_ad_network_data?: null, // 229537/40417850 (0.57%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 9538/40417850 (0.02%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 229537/40417850 (0.57%)
	third_party_tracking?: null, // 229537/40417850 (0.57%)
	third_party_tracking_2?: null, // 229537/40417850 (0.57%)
	thumbnail: string,
	thumbnail_height?: null|number, // 40417079/40417850 (100.00%)
	thumbnail_width?: null|number, // 40417079/40417850 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 24577522/40417850 (60.81%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}