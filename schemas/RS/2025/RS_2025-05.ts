interface RedditPost {
	_meta?: {
		edited_title?: string, // 51618/40349572 (0.13%)
		is_edited?: boolean, // 1550957/40349572 (3.84%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8557793/40349572 (21.21%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7681194/40349572 (19.04%)
		was_initially_deleted?: boolean, // 876599/40349572 (2.17%)
	}, // 40349572/40563699 (99.47%)
	ad_business?: null, // 235643/40563699 (0.58%)
	ad_promoted_user_posts?: null, // 235643/40563699 (0.58%)
	ad_supplementary_text_md?: null|string, // 235643/40563699 (0.58%)
	ad_user_targeting?: null, // 235643/40563699 (0.58%)
	adserver_click_url?: null, // 235643/40563699 (0.58%)
	adserver_imp_pixel?: null, // 235643/40563699 (0.58%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 235643/40563699 (0.58%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 102392/40563699 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1072860/2821715 (38.02%)
		e: "text"|"emoji",
		t?: string, // 1748855/2821715 (61.98%)
		u?: string, // 1072860/2821715 (38.02%)
	}[], // 40209632/40563699 (99.13%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 40209632/40563699 (99.13%)
	author_fullname?: string, // 40209632/40563699 (99.13%)
	author_id?: string|null, // 235643/40563699 (0.58%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 40209632/40563699 (99.13%)
	author_premium?: boolean, // 40209632/40563699 (99.13%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 191269/40563699 (0.47%)
	campaign_id?: null, // 235643/40563699 (0.58%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"entertainment"|"photography"|"diy_and_crafts"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1473324/40563699 (3.63%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4275/1473102 (0.29%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 46008/122193 (37.65%)
			e: "text"|"emoji",
			t?: string, // 76185/122193 (62.35%)
			u?: string, // 46008/122193 (37.65%)
		}[], // 1459596/1473102 (99.08%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1459596/1473102 (99.08%)
		author_fullname?: string, // 1459596/1473102 (99.08%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1459596/1473102 (99.08%)
		author_premium?: boolean, // 1459596/1473102 (99.08%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
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
				caption?: string, // 567183/1727649 (32.83%)
				id: number,
				media_id: string,
				outbound_url?: string, // 15989/1727649 (0.93%)
			}[],
		}|null, // 278736/1473102 (18.92%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 278736/1473102 (18.92%)
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
			a?: string, // 38205/263856 (14.48%)
			e: "text"|"emoji",
			t?: string, // 225651/263856 (85.52%)
			u?: string, // 38205/263856 (14.48%)
		}[],
		link_flair_template_id?: string, // 602027/1473102 (40.87%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 1/462165 (0.00%)
			oembed?: {
				author_name?: string, // 19244/308271 (6.24%)
				author_url?: string, // 19220/308271 (6.23%)
				cache_age?: number, // 183/308271 (0.06%)
				description?: string, // 2796/308271 (0.91%)
				height?: number|null, // 308265/308271 (100.00%)
				html: string,
				mean_alpha?: number, // 44/308271 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 296847/308271 (96.29%)
				thumbnail_url?: string, // 308143/308271 (99.96%)
				thumbnail_width?: number, // 296847/308271 (96.29%)
				title?: string, // 308185/308271 (99.97%)
				type: "video"|"rich",
				url?: string, // 888/308271 (0.29%)
				version: "1.0",
				width?: number, // 308265/308271 (100.00%)
			}, // 308271/462165 (66.70%)
			reddit_video?: {
				bitrate_kbps?: number, // 153715/153893 (99.88%)
				dash_url?: string, // 153885/153893 (99.99%)
				duration?: number, // 153885/153893 (99.99%)
				fallback_url?: string, // 153885/153893 (99.99%)
				has_audio?: boolean, // 152812/153893 (99.30%)
				height: number|null,
				hls_url?: string, // 153885/153893 (99.99%)
				is_gif?: boolean, // 153885/153893 (99.99%)
				scrubber_media_url?: string, // 153885/153893 (99.99%)
				transcoding_message?: string, // 8/153893 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 153893/462165 (33.30%)
			type?: string, // 308272/462165 (66.70%)
		},
		media_embed: {
			content?: string, // 308266/1473102 (20.93%)
			height?: number, // 308266/1473102 (20.93%)
			scrolling?: boolean, // 308266/1473102 (20.93%)
			width?: number, // 308266/1473102 (20.93%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 820/1753408 (0.05%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1752354/1753408 (99.94%)
				hlsUrl?: string, // 820/1753408 (0.05%)
				id?: string, // 1752354/1753408 (99.94%)
				isGif?: boolean, // 820/1753408 (0.05%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 1751534/1753408 (99.89%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1235029/1753408 (70.44%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1751534/1753408 (99.89%)
				s?: {
					gif?: string, // 78121/1751534 (4.46%)
					mp4?: string, // 78121/1751534 (4.46%)
					u?: string, // 1673413/1751534 (95.54%)
					x: number,
					y: number,
				}, // 1751534/1753408 (99.89%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 820/1753408 (0.05%)
				y?: number, // 820/1753408 (0.05%)
			},
		}|null, // 288960/1473102 (19.62%)
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
				vote_count?: number, // 188/4363 (4.31%)
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
		}|null, // 1162/1473102 (0.08%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"gallery"|"link"|"self"|"video", // 1076799/1473102 (73.10%)
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
					}, // 43310/1076799 (4.02%)
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
					}, // 43310/1076799 (4.02%)
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
					}, // 630485/1076799 (58.55%)
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
					}, // 633590/1076799 (58.84%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 290567/290582 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 290582/1076799 (26.99%)
		}, // 1076799/1473102 (73.10%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"copyright_takedown"|"content_takedown"|"author"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 1/462165 (0.00%)
			oembed?: {
				author_name?: string, // 19244/308271 (6.24%)
				author_url?: string, // 19220/308271 (6.23%)
				cache_age?: number, // 183/308271 (0.06%)
				description?: string, // 2796/308271 (0.91%)
				height?: number|null, // 308265/308271 (100.00%)
				html: string,
				mean_alpha?: number, // 44/308271 (0.01%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 296847/308271 (96.29%)
				thumbnail_url?: string, // 308143/308271 (99.96%)
				thumbnail_width?: number, // 296847/308271 (96.29%)
				title?: string, // 308185/308271 (99.97%)
				type: "video"|"rich",
				url?: string, // 888/308271 (0.29%)
				version: "1.0",
				width?: number, // 308265/308271 (100.00%)
			}, // 308271/462165 (66.70%)
			reddit_video?: {
				bitrate_kbps?: number, // 153715/153893 (99.88%)
				dash_url?: string, // 153885/153893 (99.99%)
				duration?: number, // 153885/153893 (99.99%)
				fallback_url?: string, // 153885/153893 (99.99%)
				has_audio?: boolean, // 152812/153893 (99.30%)
				height: number|null,
				hls_url?: string, // 153885/153893 (99.99%)
				is_gif?: boolean, // 153885/153893 (99.99%)
				scrubber_media_url?: string, // 153885/153893 (99.99%)
				transcoding_message?: string, // 8/153893 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 153893/462165 (33.30%)
			type?: string, // 308272/462165 (66.70%)
		},
		secure_media_embed: {
			content?: string, // 308266/1473102 (20.93%)
			height?: number, // 308266/1473102 (20.93%)
			media_domain_url?: string, // 308266/1473102 (20.93%)
			scrolling?: boolean, // 308266/1473102 (20.93%)
			width?: number, // 308266/1473102 (20.93%)
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
		url_overridden_by_dest?: string, // 1280376/1473102 (86.92%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 1473324/40563699 (3.63%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 235643/40563699 (0.58%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 235643/40563699 (0.58%)
	embed_url?: null|string, // 235643/40563699 (0.58%)
	events?: [], // 235643/40563699 (0.58%)
	eventsOnRender?: [], // 235643/40563699 (0.58%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 74468/18651523 (0.40%)
			caption?: string, // 6248197/18651523 (33.50%)
			display_url?: string, // 83696/18651523 (0.45%)
			id: number,
			media_id: string,
			outbound_url?: string, // 110553/18651523 (0.59%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 13740/18651523 (0.07%)
		}[],
	}|null, // 5069338/40563699 (12.50%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 235643/40563699 (0.58%)
	id: string,
	impression_id?: null, // 235643/40563699 (0.58%)
	impression_id_str?: null, // 235643/40563699 (0.58%)
	is_blank?: boolean, // 235643/40563699 (0.58%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5069338/40563699 (12.50%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 235643/40563699 (0.58%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1255206/9843078 (12.75%)
		e: "text"|"emoji",
		t?: string, // 8587872/9843078 (87.25%)
		u?: string, // 1255206/9843078 (12.75%)
	}[],
	link_flair_template_id?: string, // 18918765/40563699 (46.64%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1ez73mze729wj"|"1f1wg30gi7mi9"|"1eyjme3l4x4vk"|"1ezvwr82crtov"|"1f03vfeyv0s1b"|"1f0kb2ludzzsz"|"1f1amojimiuc3", // 47/4040251 (0.00%)
		oembed?: {
			author_name?: string, // 648024/2704782 (23.96%)
			author_url?: string, // 647461/2704782 (23.94%)
			cache_age?: number, // 14049/2704782 (0.52%)
			description?: string, // 67353/2704782 (2.49%)
			height?: number|null, // 2704753/2704782 (100.00%)
			html?: string, // 2704781/2704782 (100.00%)
			mean_alpha?: number, // 1860/2704782 (0.07%)
			provider_name?: string, // 2704781/2704782 (100.00%)
			provider_url?: string, // 2704781/2704782 (100.00%)
			thumbnail_height?: number, // 2662396/2704782 (98.43%)
			thumbnail_url?: string, // 2692037/2704782 (99.53%)
			thumbnail_width?: number, // 2662396/2704782 (98.43%)
			title?: string, // 2691752/2704782 (99.52%)
			type?: "video"|"rich", // 2704781/2704782 (100.00%)
			url?: string, // 36923/2704782 (1.37%)
			version?: "1.0", // 2704781/2704782 (100.00%)
			width?: number, // 2704753/2704782 (100.00%)
		}, // 2704782/4040251 (66.95%)
		reddit_video?: {
			bitrate_kbps?: number, // 1331260/1335422 (99.69%)
			dash_url?: string, // 1331260/1335422 (99.69%)
			duration?: number, // 1331260/1335422 (99.69%)
			fallback_url?: string, // 1331260/1335422 (99.69%)
			has_audio?: boolean, // 1331252/1335422 (99.69%)
			height: number|null,
			hls_url?: string, // 1331260/1335422 (99.69%)
			is_gif?: boolean, // 1331260/1335422 (99.69%)
			scrubber_media_url?: string, // 1331260/1335422 (99.69%)
			transcoding_message?: string, // 4162/1335422 (0.31%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1335422/4040251 (33.05%)
		type?: string, // 2704829/4040251 (66.95%)
	},
	media_embed: {
		content?: string|null, // 2272545/40563699 (5.60%)
		height?: number, // 2272545/40563699 (5.60%)
		scrolling?: boolean, // 2272545/40563699 (5.60%)
		width?: number, // 2272545/40563699 (5.60%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14853/19125453 (0.08%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 18906097/19125453 (98.85%)
			hlsUrl?: string, // 14853/19125453 (0.08%)
			id?: string, // 18906097/19125453 (98.85%)
			isGif?: boolean, // 14853/19125453 (0.08%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 18891244/19125453 (98.78%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 8789954/19125453 (45.96%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 18891244/19125453 (98.78%)
			s?: {
				gif?: string, // 341029/18891244 (1.81%)
				mp4?: string, // 341029/18891244 (1.81%)
				u?: string, // 18550215/18891244 (98.19%)
				x: number,
				y: number,
			}, // 18891244/19125453 (98.78%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 14853/19125453 (0.08%)
			y?: number, // 14853/19125453 (0.08%)
		},
	}|null, // 5438361/40563699 (13.41%)
	media_only: boolean,
	mobile_ad_url?: string, // 235643/40563699 (0.58%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 235643/40563699 (0.58%)
	outbound_link?: {
	}, // 235643/40563699 (0.58%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 16988/139393 (12.19%)
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
	}|null, // 43200/40563699 (0.11%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"gallery"|"self"|"video", // 19770414/40563699 (48.74%)
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
				}, // 500148/20324646 (2.46%)
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
				}, // 500148/20324646 (2.46%)
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
				}, // 9938531/20324646 (48.90%)
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
				}, // 10041908/20324646 (49.41%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1825461/1825476 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1825476/20324646 (8.98%)
	}, // 20324646/40563699 (50.11%)
	priority_id?: null, // 235643/40563699 (0.58%)
	product_ids?: [], // 235643/40563699 (0.58%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 235643/40563699 (0.58%)
	promoted?: boolean, // 235643/40563699 (0.58%)
	promoted_by?: null, // 235643/40563699 (0.58%)
	promoted_display_name?: null, // 235643/40563699 (0.58%)
	promoted_url?: null, // 235643/40563699 (0.58%)
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
		event_id?: "18hnzysb1elcs"|"1ez73mze729wj"|"1f1wg30gi7mi9"|"1eyjme3l4x4vk"|"1ezvwr82crtov"|"1f03vfeyv0s1b"|"1f0kb2ludzzsz"|"1f1amojimiuc3", // 47/4040251 (0.00%)
		oembed?: {
			author_name?: string, // 648024/2704782 (23.96%)
			author_url?: string, // 647461/2704782 (23.94%)
			cache_age?: number, // 14049/2704782 (0.52%)
			description?: string, // 67353/2704782 (2.49%)
			height?: number|null, // 2704753/2704782 (100.00%)
			html?: string, // 2704781/2704782 (100.00%)
			mean_alpha?: number, // 1860/2704782 (0.07%)
			provider_name?: string, // 2704781/2704782 (100.00%)
			provider_url?: string, // 2704781/2704782 (100.00%)
			thumbnail_height?: number, // 2662396/2704782 (98.43%)
			thumbnail_url?: string, // 2692037/2704782 (99.53%)
			thumbnail_width?: number, // 2662396/2704782 (98.43%)
			title?: string, // 2691752/2704782 (99.52%)
			type?: "video"|"rich", // 2704781/2704782 (100.00%)
			url?: string, // 36923/2704782 (1.37%)
			version?: "1.0", // 2704781/2704782 (100.00%)
			width?: number, // 2704753/2704782 (100.00%)
		}, // 2704782/4040251 (66.95%)
		reddit_video?: {
			bitrate_kbps?: number, // 1331260/1335422 (99.69%)
			dash_url?: string, // 1331260/1335422 (99.69%)
			duration?: number, // 1331260/1335422 (99.69%)
			fallback_url?: string, // 1331260/1335422 (99.69%)
			has_audio?: boolean, // 1331252/1335422 (99.69%)
			height: number|null,
			hls_url?: string, // 1331260/1335422 (99.69%)
			is_gif?: boolean, // 1331260/1335422 (99.69%)
			scrubber_media_url?: string, // 1331260/1335422 (99.69%)
			transcoding_message?: string, // 4162/1335422 (0.31%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1335422/4040251 (33.05%)
		type?: string, // 2704829/4040251 (66.95%)
	},
	secure_media_embed: {
		content?: string|null, // 2272545/40563699 (5.60%)
		height?: number, // 2272545/40563699 (5.60%)
		media_domain_url?: string, // 2272545/40563699 (5.60%)
		scrolling?: boolean, // 2272545/40563699 (5.60%)
		width?: number, // 2272545/40563699 (5.60%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 235643/40563699 (0.58%)
	sk_ad_network_data?: null, // 235643/40563699 (0.58%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 8407/40563699 (0.02%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 235643/40563699 (0.58%)
	third_party_tracking?: null, // 235643/40563699 (0.58%)
	third_party_tracking_2?: null, // 235643/40563699 (0.58%)
	thumbnail: string,
	thumbnail_height?: number|null, // 40562894/40563699 (100.00%)
	thumbnail_width?: number|null, // 40562894/40563699 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 24559646/40563699 (60.55%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}