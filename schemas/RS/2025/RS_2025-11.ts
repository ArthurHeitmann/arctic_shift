interface RedditPost {
	_meta?: {
		edited_title?: string, // 2291229/42111699 (5.44%)
		is_edited?: boolean, // 1472722/42111699 (3.50%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8515063/42111699 (20.22%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7819287/42111699 (18.57%)
		was_initially_deleted?: boolean, // 695777/42111699 (1.65%)
	}, // 42111699/42567338 (98.93%)
	ad_business?: null, // 389671/42567338 (0.92%)
	ad_promoted_user_posts?: null, // 389671/42567338 (0.92%)
	ad_supplementary_text_md?: null|string, // 389671/42567338 (0.92%)
	ad_user_targeting?: null, // 389671/42567338 (0.92%)
	adserver_click_url?: null, // 389671/42567338 (0.92%)
	adserver_imp_pixel?: null, // 389671/42567338 (0.92%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 389671/42567338 (0.92%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 120858/42567338 (0.28%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1148356/3037699 (37.80%)
		e: "text"|"emoji",
		t?: string, // 1889343/3037699 (62.20%)
		u?: string, // 1148356/3037699 (37.80%)
	}[], // 41965337/42567338 (98.59%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 41965337/42567338 (98.59%)
	author_fullname?: string, // 41965337/42567338 (98.59%)
	author_id?: string|null, // 389671/42567338 (0.92%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 41965337/42567338 (98.59%)
	author_premium?: boolean, // 41965337/42567338 (98.59%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 333034/42567338 (0.78%)
	campaign_id?: null, // 389671/42567338 (0.92%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"entertainment"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 2934671/42567338 (6.89%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 8280/2933373 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 70791/188626 (37.53%)
			e: "text"|"emoji",
			t?: string, // 117835/188626 (62.47%)
			u?: string, // 70791/188626 (37.53%)
		}[], // 2913359/2933373 (99.32%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 2913359/2933373 (99.32%)
		author_fullname?: string, // 2913359/2933373 (99.32%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 2913359/2933373 (99.32%)
		author_premium?: boolean, // 2913359/2933373 (99.32%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"entertainment",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 1069344/3374263 (31.69%)
				id: number,
				media_id: string,
				outbound_url?: string, // 14334/3374263 (0.42%)
			}[],
		}|null, // 606457/2933373 (20.67%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 606457/2933373 (20.67%)
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
			a?: string, // 66861/528322 (12.66%)
			e: "text"|"emoji",
			t?: string, // 461461/528322 (87.34%)
			u?: string, // 66861/528322 (12.66%)
		}[],
		link_flair_template_id?: string, // 1227701/2933373 (41.85%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 34112/405812 (8.41%)
				author_url?: string, // 34068/405812 (8.40%)
				cache_age?: number, // 9/405812 (0.00%)
				description?: string, // 2636/405812 (0.65%)
				height?: number|null, // 405798/405812 (100.00%)
				html?: string, // 405811/405812 (100.00%)
				mean_alpha?: number, // 4/405812 (0.00%)
				provider_name?: string, // 405811/405812 (100.00%)
				provider_url?: string, // 405811/405812 (100.00%)
				thumbnail_height?: number, // 395270/405812 (97.40%)
				thumbnail_url?: string, // 405701/405812 (99.97%)
				thumbnail_width?: number, // 395270/405812 (97.40%)
				title?: string, // 405746/405812 (99.98%)
				type?: "video"|"rich", // 405811/405812 (100.00%)
				url?: string, // 457/405812 (0.11%)
				version?: "1.0", // 405811/405812 (100.00%)
				width?: number, // 405798/405812 (100.00%)
			}, // 405812/605419 (67.03%)
			reddit_video?: {
				bitrate_kbps?: number, // 199446/199606 (99.92%)
				dash_url?: string, // 199576/199606 (99.98%)
				duration?: number, // 199576/199606 (99.98%)
				fallback_url?: string, // 199576/199606 (99.98%)
				has_audio?: boolean, // 198472/199606 (99.43%)
				height: number|null,
				hls_url?: string, // 199576/199606 (99.98%)
				is_gif?: boolean, // 199576/199606 (99.98%)
				scrubber_media_url?: string, // 199576/199606 (99.98%)
				transcoding_message?: string, // 30/199606 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 199606/605419 (32.97%)
			type?: string, // 405813/605419 (67.03%)
		},
		media_embed: {
			content?: string|null, // 405799/2933373 (13.83%)
			height?: number, // 405799/2933373 (13.83%)
			scrolling?: boolean, // 405799/2933373 (13.83%)
			width?: number, // 405799/2933373 (13.83%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 2838/3444041 (0.08%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 3439510/3444041 (99.87%)
				hlsUrl?: string, // 2838/3444041 (0.08%)
				id?: string, // 3439510/3444041 (99.87%)
				isGif?: boolean, // 2838/3444041 (0.08%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 3436672/3444041 (99.79%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2254598/3444041 (65.46%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 3436672/3444041 (99.79%)
				s?: {
					gif?: string, // 125407/3436672 (3.65%)
					mp4?: string, // 125407/3436672 (3.65%)
					u?: string, // 3311265/3436672 (96.35%)
					x: number,
					y: number,
				}, // 3436672/3444041 (99.79%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 2838/3444041 (0.08%)
				y?: number, // 2838/3444041 (0.08%)
			},
		}|null, // 640053/2933373 (21.82%)
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
		poll_data?: boolean|{
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 226/9369 (2.41%)
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
		}|null, // 5406/2933373 (0.18%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1593019/2933373 (54.31%)
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
					}, // 56125/1593019 (3.52%)
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
					}, // 56125/1593019 (3.52%)
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
					}, // 908768/1593019 (57.05%)
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
					}, // 914840/1593019 (57.43%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 370174/370194 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				has_audio?: boolean, // 19/370194 (0.01%)
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 370194/1593019 (23.24%)
		}, // 1593019/2933373 (54.31%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 34112/405812 (8.41%)
				author_url?: string, // 34068/405812 (8.40%)
				cache_age?: number, // 9/405812 (0.00%)
				description?: string, // 2636/405812 (0.65%)
				height?: number|null, // 405798/405812 (100.00%)
				html?: string, // 405811/405812 (100.00%)
				mean_alpha?: number, // 4/405812 (0.00%)
				provider_name?: string, // 405811/405812 (100.00%)
				provider_url?: string, // 405811/405812 (100.00%)
				thumbnail_height?: number, // 395270/405812 (97.40%)
				thumbnail_url?: string, // 405701/405812 (99.97%)
				thumbnail_width?: number, // 395270/405812 (97.40%)
				title?: string, // 405746/405812 (99.98%)
				type?: "video"|"rich", // 405811/405812 (100.00%)
				url?: string, // 457/405812 (0.11%)
				version?: "1.0", // 405811/405812 (100.00%)
				width?: number, // 405798/405812 (100.00%)
			}, // 405812/605419 (67.03%)
			reddit_video?: {
				bitrate_kbps?: number, // 199446/199606 (99.92%)
				dash_url?: string, // 199576/199606 (99.98%)
				duration?: number, // 199576/199606 (99.98%)
				fallback_url?: string, // 199576/199606 (99.98%)
				has_audio?: boolean, // 198472/199606 (99.43%)
				height: number|null,
				hls_url?: string, // 199576/199606 (99.98%)
				is_gif?: boolean, // 199576/199606 (99.98%)
				scrubber_media_url?: string, // 199576/199606 (99.98%)
				transcoding_message?: string, // 30/199606 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 199606/605419 (32.97%)
			type?: string, // 405813/605419 (67.03%)
		},
		secure_media_embed: {
			content?: string|null, // 405799/2933373 (13.83%)
			height?: number, // 405799/2933373 (13.83%)
			media_domain_url?: string, // 405799/2933373 (13.83%)
			scrolling?: boolean, // 405799/2933373 (13.83%)
			width?: number, // 405799/2933373 (13.83%)
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
		thumbnail_height?: number|null, // 2930454/2933373 (99.90%)
		thumbnail_width?: number|null, // 2930454/2933373 (99.90%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2207611/2933373 (75.26%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 2934671/42567338 (6.89%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 389671/42567338 (0.92%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 389671/42567338 (0.92%)
	embed_url?: null|string, // 389671/42567338 (0.92%)
	events?: [], // 389671/42567338 (0.92%)
	eventsOnRender?: [], // 389671/42567338 (0.92%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 105830/19302767 (0.55%)
			caption?: string, // 6327322/19302767 (32.78%)
			display_url?: string, // 112772/19302767 (0.58%)
			id: number,
			media_id: string,
			outbound_url?: string, // 133727/19302767 (0.69%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 34703/19302767 (0.18%)
		}[],
	}|null, // 5156744/42567338 (12.11%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 389671/42567338 (0.92%)
	id: string,
	impression_id?: null, // 389671/42567338 (0.92%)
	impression_id_str?: null, // 389671/42567338 (0.92%)
	is_blank?: boolean, // 389671/42567338 (0.92%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5156744/42567338 (12.11%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 389671/42567338 (0.92%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1142237/9803444 (11.65%)
		e: "text"|"emoji",
		t?: string, // 8661207/9803444 (88.35%)
		u?: string, // 1142237/9803444 (11.65%)
	}[],
	link_flair_template_id?: string, // 19917515/42567338 (46.79%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1fz8rjjcxv7v9"|"1fzg85lgmueoj"|"1g0uez8yw06gr"|"1fzztp7huxr0g"|"1g0jk37ava5mu"|"1g2rq7dvenssb"|"1g3en5ou91c2q"|"1g46khsnltmth", // 43/4362463 (0.00%)
		oembed?: {
			author_name?: string, // 589034/3053779 (19.29%)
			author_url?: string, // 588786/3053779 (19.28%)
			cache_age?: number, // 41/3053779 (0.00%)
			description?: string, // 23614/3053779 (0.77%)
			height?: number, // 3053480/3053779 (99.99%)
			html: string,
			mean_alpha?: number, // 56/3053779 (0.00%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3021149/3053779 (98.93%)
			thumbnail_url?: string, // 3053777/3053779 (100.00%)
			thumbnail_width?: number, // 3021149/3053779 (98.93%)
			title?: string, // 3053081/3053779 (99.98%)
			type: "video"|"rich",
			url?: string, // 8086/3053779 (0.26%)
			version: "1.0",
			width?: number, // 3053480/3053779 (99.99%)
		}, // 3053779/4362463 (70.00%)
		reddit_video?: {
			bitrate_kbps?: number, // 1301987/1308641 (99.49%)
			dash_url?: string, // 1301987/1308641 (99.49%)
			duration?: number, // 1301987/1308641 (99.49%)
			fallback_url?: string, // 1301987/1308641 (99.49%)
			has_audio?: boolean, // 1301981/1308641 (99.49%)
			height: number|null,
			hls_url?: string, // 1301987/1308641 (99.49%)
			is_gif?: boolean, // 1301987/1308641 (99.49%)
			scrubber_media_url?: string, // 1301987/1308641 (99.49%)
			transcoding_message?: string, // 6654/1308641 (0.51%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1308641/4362463 (30.00%)
		type?: string, // 3053822/4362463 (70.00%)
	},
	media_embed: {
		content?: string, // 682924/42567338 (1.60%)
		height?: number, // 682924/42567338 (1.60%)
		scrolling?: boolean, // 682924/42567338 (1.60%)
		width?: number, // 682924/42567338 (1.60%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 21662/19917780 (0.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 19580168/19917780 (98.30%)
			hlsUrl?: string, // 21662/19917780 (0.11%)
			id?: string, // 19580168/19917780 (98.30%)
			isGif?: boolean, // 21662/19917780 (0.11%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 19558506/19917780 (98.20%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 9828441/19917780 (49.35%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 19558506/19917780 (98.20%)
			s?: {
				gif?: string, // 386168/19558506 (1.97%)
				mp4?: string, // 386168/19558506 (1.97%)
				u?: string, // 19172338/19558506 (98.03%)
				x: number,
				y: number,
			}, // 19558506/19917780 (98.20%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 21662/19917780 (0.11%)
			y?: number, // 21662/19917780 (0.11%)
		},
	}|null, // 5618085/42567338 (13.20%)
	media_only: boolean,
	mobile_ad_url?: string, // 389671/42567338 (0.92%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 389671/42567338 (0.92%)
	outbound_link?: {
	}, // 389671/42567338 (0.92%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 17492/128348 (13.63%)
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
	}|null, // 2730170/42567338 (6.41%)
	post_hint?: "image"|"hosted:video"|"link"|"rich:video"|"self"|"gallery"|"video", // 15971369/42567338 (37.52%)
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
				}, // 566558/18717861 (3.03%)
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
				}, // 566558/18717861 (3.03%)
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
				}, // 9886933/18717861 (52.82%)
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
				}, // 9984207/18717861 (53.34%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2130012/2130033 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			has_audio?: boolean, // 1502/2130033 (0.07%)
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 2130033/18717861 (11.38%)
	}, // 18717861/42567338 (43.97%)
	priority_id?: null, // 389671/42567338 (0.92%)
	product_ids?: [], // 389671/42567338 (0.92%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 389671/42567338 (0.92%)
	promoted?: boolean, // 389671/42567338 (0.92%)
	promoted_by?: null, // 389671/42567338 (0.92%)
	promoted_display_name?: null, // 389671/42567338 (0.92%)
	promoted_url?: null, // 389671/42567338 (0.92%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1fz8rjjcxv7v9"|"1fzg85lgmueoj"|"1g0uez8yw06gr"|"1fzztp7huxr0g"|"1g0jk37ava5mu"|"1g2rq7dvenssb"|"1g3en5ou91c2q"|"1g46khsnltmth", // 43/4362463 (0.00%)
		oembed?: {
			author_name?: string, // 589034/3053779 (19.29%)
			author_url?: string, // 588786/3053779 (19.28%)
			cache_age?: number, // 41/3053779 (0.00%)
			description?: string, // 23614/3053779 (0.77%)
			height?: number, // 3053480/3053779 (99.99%)
			html: string,
			mean_alpha?: number, // 56/3053779 (0.00%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3021149/3053779 (98.93%)
			thumbnail_url?: string, // 3053777/3053779 (100.00%)
			thumbnail_width?: number, // 3021149/3053779 (98.93%)
			title?: string, // 3053081/3053779 (99.98%)
			type: "video"|"rich",
			url?: string, // 8086/3053779 (0.26%)
			version: "1.0",
			width?: number, // 3053480/3053779 (99.99%)
		}, // 3053779/4362463 (70.00%)
		reddit_video?: {
			bitrate_kbps?: number, // 1301987/1308641 (99.49%)
			dash_url?: string, // 1301987/1308641 (99.49%)
			duration?: number, // 1301987/1308641 (99.49%)
			fallback_url?: string, // 1301987/1308641 (99.49%)
			has_audio?: boolean, // 1301981/1308641 (99.49%)
			height: number|null,
			hls_url?: string, // 1301987/1308641 (99.49%)
			is_gif?: boolean, // 1301987/1308641 (99.49%)
			scrubber_media_url?: string, // 1301987/1308641 (99.49%)
			transcoding_message?: string, // 6654/1308641 (0.51%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1308641/4362463 (30.00%)
		type?: string, // 3053822/4362463 (70.00%)
	},
	secure_media_embed: {
		content?: string, // 682924/42567338 (1.60%)
		height?: number, // 682924/42567338 (1.60%)
		media_domain_url?: string, // 682924/42567338 (1.60%)
		scrolling?: boolean, // 682924/42567338 (1.60%)
		width?: number, // 682924/42567338 (1.60%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 389671/42567338 (0.92%)
	sk_ad_network_data?: null, // 389671/42567338 (0.92%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 12115/42567338 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 389671/42567338 (0.92%)
	third_party_tracking?: null, // 389671/42567338 (0.92%)
	third_party_tracking_2?: null, // 389671/42567338 (0.92%)
	thumbnail: string|null,
	thumbnail_height?: null|number, // 42129950/42567338 (98.97%)
	thumbnail_width?: null|number, // 42129950/42567338 (98.97%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 26481318/42567338 (62.21%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}