interface RedditPost {
	_meta?: {
		corrupted_selftext?: string, // 1/43938768 (0.00%)
		edited_title?: string, // 51803/43938768 (0.12%)
		is_edited?: boolean, // 1566402/43938768 (3.56%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 9293075/43938768 (21.15%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 8456522/43938768 (19.25%)
		was_initially_deleted?: boolean, // 836553/43938768 (1.90%)
	}, // 43938768/44170194 (99.48%)
	ad_business?: null, // 237111/44170194 (0.54%)
	ad_promoted_user_posts?: null, // 237111/44170194 (0.54%)
	ad_supplementary_text_md?: null|string, // 237111/44170194 (0.54%)
	ad_user_targeting?: null, // 237111/44170194 (0.54%)
	adserver_click_url?: null, // 237111/44170194 (0.54%)
	adserver_imp_pixel?: null, // 237111/44170194 (0.54%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 237111/44170194 (0.54%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 123593/44170194 (0.28%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1073952/2972442 (36.13%)
		e: "text"|"emoji",
		t?: string, // 1898490/2972442 (63.87%)
		u?: string, // 1073952/2972442 (36.13%)
	}[], // 43837142/44170194 (99.25%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 43837142/44170194 (99.25%)
	author_fullname?: string, // 43837142/44170194 (99.25%)
	author_id?: string, // 237111/44170194 (0.54%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 43837142/44170194 (99.25%)
	author_premium?: boolean, // 43837142/44170194 (99.25%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 191623/44170194 (0.43%)
	campaign_id?: null, // 237111/44170194 (0.54%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"writing"|"comics"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 2648070/44170194 (6.00%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 7836/2647671 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 66452/175908 (37.78%)
			e: "text"|"emoji",
			t?: string, // 109456/175908 (62.22%)
			u?: string, // 66452/175908 (37.78%)
		}[], // 2634778/2647671 (99.51%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 2634778/2647671 (99.51%)
		author_fullname?: string, // 2634778/2647671 (99.51%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 2634778/2647671 (99.51%)
		author_premium?: boolean, // 2634778/2647671 (99.51%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"music",
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
				caption?: string, // 1000097/2907329 (34.40%)
				id: number,
				media_id: string,
				outbound_url?: string, // 12113/2907329 (0.42%)
			}[],
		}|null, // 531929/2647671 (20.09%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 531929/2647671 (20.09%)
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
			a?: string, // 62892/478868 (13.13%)
			e: "text"|"emoji",
			t?: string, // 415976/478868 (86.87%)
			u?: string, // 62892/478868 (13.13%)
		}[],
		link_flair_template_id?: string, // 1099415/2647671 (41.52%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 1/543510 (0.00%)
			oembed?: {
				author_name?: string, // 29983/352169 (8.51%)
				author_url?: string, // 29927/352169 (8.50%)
				cache_age?: number, // 11/352169 (0.00%)
				description?: string, // 1707/352169 (0.48%)
				height?: number|null, // 352153/352169 (100.00%)
				html: string,
				mean_alpha?: number, // 7/352169 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 340506/352169 (96.69%)
				thumbnail_url?: string, // 352083/352169 (99.98%)
				thumbnail_width?: number, // 340506/352169 (96.69%)
				title?: string, // 352145/352169 (99.99%)
				type: "video"|"rich",
				url?: string, // 365/352169 (0.10%)
				version: "1.0",
				width?: number, // 352153/352169 (100.00%)
			}, // 352169/543510 (64.80%)
			reddit_video?: {
				bitrate_kbps?: number, // 191120/191340 (99.89%)
				dash_url?: string, // 191269/191340 (99.96%)
				duration?: number, // 191269/191340 (99.96%)
				fallback_url?: string, // 191269/191340 (99.96%)
				has_audio?: boolean, // 190325/191340 (99.47%)
				height: number|null,
				hls_url?: string, // 191269/191340 (99.96%)
				is_gif?: boolean, // 191269/191340 (99.96%)
				scrubber_media_url?: string, // 191269/191340 (99.96%)
				transcoding_message?: string, // 71/191340 (0.04%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 191340/543510 (35.20%)
			type?: string, // 352170/543510 (64.80%)
		},
		media_embed: {
			content?: string, // 352154/2647671 (13.30%)
			height?: number, // 352154/2647671 (13.30%)
			scrolling?: boolean, // 352154/2647671 (13.30%)
			width?: number, // 352154/2647671 (13.30%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1832/2947187 (0.06%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 2942266/2947187 (99.83%)
				hlsUrl?: string, // 1832/2947187 (0.06%)
				id?: string, // 2942266/2947187 (99.83%)
				isGif?: boolean, // 1832/2947187 (0.06%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 2940434/2947187 (99.77%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1910376/2947187 (64.82%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 2940434/2947187 (99.77%)
				s?: {
					gif?: string, // 96687/2940434 (3.29%)
					mp4?: string, // 96687/2940434 (3.29%)
					u?: string, // 2843747/2940434 (96.71%)
					x: number,
					y: number,
				}, // 2940434/2947187 (99.77%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1832/2947187 (0.06%)
				y?: number, // 1832/2947187 (0.06%)
			},
		}|null, // 548948/2647671 (20.73%)
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
				vote_count?: number, // 294/10844 (2.71%)
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
		}|null, // 2814/2647671 (0.11%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1503066/2647671 (56.77%)
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
					}, // 55277/1503066 (3.68%)
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
					}, // 55277/1503066 (3.68%)
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
					}, // 845349/1503066 (56.24%)
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
					}, // 850735/1503066 (56.60%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 319940/319949 (100.00%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 319949/1503066 (21.29%)
		}, // 1503066/2647671 (56.77%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 1/543510 (0.00%)
			oembed?: {
				author_name?: string, // 29983/352169 (8.51%)
				author_url?: string, // 29927/352169 (8.50%)
				cache_age?: number, // 11/352169 (0.00%)
				description?: string, // 1707/352169 (0.48%)
				height?: number|null, // 352153/352169 (100.00%)
				html: string,
				mean_alpha?: number, // 7/352169 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 340506/352169 (96.69%)
				thumbnail_url?: string, // 352083/352169 (99.98%)
				thumbnail_width?: number, // 340506/352169 (96.69%)
				title?: string, // 352145/352169 (99.99%)
				type: "video"|"rich",
				url?: string, // 365/352169 (0.10%)
				version: "1.0",
				width?: number, // 352153/352169 (100.00%)
			}, // 352169/543510 (64.80%)
			reddit_video?: {
				bitrate_kbps?: number, // 191120/191340 (99.89%)
				dash_url?: string, // 191269/191340 (99.96%)
				duration?: number, // 191269/191340 (99.96%)
				fallback_url?: string, // 191269/191340 (99.96%)
				has_audio?: boolean, // 190325/191340 (99.47%)
				height: number|null,
				hls_url?: string, // 191269/191340 (99.96%)
				is_gif?: boolean, // 191269/191340 (99.96%)
				scrubber_media_url?: string, // 191269/191340 (99.96%)
				transcoding_message?: string, // 71/191340 (0.04%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 191340/543510 (35.20%)
			type?: string, // 352170/543510 (64.80%)
		},
		secure_media_embed: {
			content?: string, // 352154/2647671 (13.30%)
			height?: number, // 352154/2647671 (13.30%)
			media_domain_url?: string, // 352154/2647671 (13.30%)
			scrolling?: boolean, // 352154/2647671 (13.30%)
			width?: number, // 352154/2647671 (13.30%)
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
		url_overridden_by_dest?: string, // 2034288/2647671 (76.83%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 2648070/44170194 (6.00%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 237111/44170194 (0.54%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 237111/44170194 (0.54%)
	embed_url?: null|string, // 237111/44170194 (0.54%)
	events?: [], // 237111/44170194 (0.54%)
	eventsOnRender?: [], // 237111/44170194 (0.54%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 71209/19712960 (0.36%)
			caption?: string, // 6583572/19712960 (33.40%)
			display_url?: string, // 77078/19712960 (0.39%)
			id: number,
			media_id: string,
			outbound_url?: string, // 106204/19712960 (0.54%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 17870/19712960 (0.09%)
		}[],
	}|null, // 5315647/44170194 (12.03%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 237111/44170194 (0.54%)
	id: string,
	impression_id?: null, // 237111/44170194 (0.54%)
	impression_id_str?: null, // 237111/44170194 (0.54%)
	is_blank?: boolean, // 237111/44170194 (0.54%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5315647/44170194 (12.03%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 237111/44170194 (0.54%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1159062/10339177 (11.21%)
		e: "text"|"emoji",
		t?: string, // 9180115/10339177 (88.79%)
		u?: string, // 1159062/10339177 (11.21%)
	}[],
	link_flair_template_id?: string, // 20757616/44170194 (46.99%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1fjrssowl5y6u"|"1fkqwvj65bhgr"|"1fmbsn5qglq4z", // 36/4386477 (0.00%)
		oembed?: {
			author_name?: string, // 654250/3043766 (21.49%)
			author_url?: string, // 653976/3043766 (21.49%)
			cache_age?: number, // 288/3043766 (0.01%)
			description?: string, // 22929/3043766 (0.75%)
			height?: number|null, // 3043718/3043766 (100.00%)
			html?: string, // 3043765/3043766 (100.00%)
			mean_alpha?: number, // 69/3043766 (0.00%)
			provider_name?: string, // 3043765/3043766 (100.00%)
			provider_url?: string, // 3043765/3043766 (100.00%)
			thumbnail_height?: number, // 3006661/3043766 (98.78%)
			thumbnail_url?: string, // 3043743/3043766 (100.00%)
			thumbnail_width?: number, // 3006661/3043766 (98.78%)
			title?: string, // 3043451/3043766 (99.99%)
			type?: "video"|"rich", // 3043765/3043766 (100.00%)
			url?: string, // 7743/3043766 (0.25%)
			version?: "1.0", // 3043765/3043766 (100.00%)
			width?: number, // 3043718/3043766 (100.00%)
		}, // 3043766/4386477 (69.39%)
		reddit_video?: {
			bitrate_kbps?: number, // 1333959/1342675 (99.35%)
			dash_url?: string, // 1333959/1342675 (99.35%)
			duration?: number, // 1333959/1342675 (99.35%)
			fallback_url?: string, // 1333959/1342675 (99.35%)
			has_audio?: boolean, // 1333954/1342675 (99.35%)
			height: number|null,
			hls_url?: string, // 1333959/1342675 (99.35%)
			is_gif?: boolean, // 1333959/1342675 (99.35%)
			scrubber_media_url?: string, // 1333959/1342675 (99.35%)
			transcoding_message?: string, // 8716/1342675 (0.65%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1342675/4386477 (30.61%)
		type?: string, // 3043802/4386477 (69.39%)
	},
	media_embed: {
		content?: string, // 669729/44170194 (1.52%)
		height?: number, // 669729/44170194 (1.52%)
		scrolling?: boolean, // 669729/44170194 (1.52%)
		width?: number, // 669729/44170194 (1.52%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 22032/20340283 (0.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 20067951/20340283 (98.66%)
			hlsUrl?: string, // 22032/20340283 (0.11%)
			id?: string, // 20067951/20340283 (98.66%)
			isGif?: boolean, // 22032/20340283 (0.11%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 20045919/20340283 (98.55%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 9672311/20340283 (47.55%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 20045919/20340283 (98.55%)
			s?: {
				gif?: string, // 359675/20045919 (1.79%)
				mp4?: string, // 359675/20045919 (1.79%)
				u?: string, // 19686244/20045919 (98.21%)
				x: number,
				y: number,
			}, // 20045919/20340283 (98.55%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 22032/20340283 (0.11%)
			y?: number, // 22032/20340283 (0.11%)
		},
	}|null, // 5795611/44170194 (13.12%)
	media_only: boolean,
	mobile_ad_url?: string, // 237111/44170194 (0.54%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 237111/44170194 (0.54%)
	outbound_link?: {
	}, // 237111/44170194 (0.54%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 17129/146886 (11.66%)
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
	}|null, // 45296/44170194 (0.10%)
	post_hint?: "image"|"hosted:video"|"link"|"rich:video"|"self"|"gallery"|"video", // 16947052/44170194 (38.37%)
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
				}, // 564268/19712346 (2.86%)
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
				}, // 564268/19712346 (2.86%)
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
				}, // 10197896/19712346 (51.73%)
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
				}, // 10296121/19712346 (52.23%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1922530/1922539 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1922539/19712346 (9.75%)
	}, // 19712346/44170194 (44.63%)
	priority_id?: null, // 237111/44170194 (0.54%)
	product_ids?: [], // 237111/44170194 (0.54%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 237111/44170194 (0.54%)
	promoted?: boolean, // 237111/44170194 (0.54%)
	promoted_by?: null, // 237111/44170194 (0.54%)
	promoted_display_name?: null, // 237111/44170194 (0.54%)
	promoted_url?: null, // 237111/44170194 (0.54%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1fjrssowl5y6u"|"1fkqwvj65bhgr"|"1fmbsn5qglq4z", // 36/4386477 (0.00%)
		oembed?: {
			author_name?: string, // 654250/3043766 (21.49%)
			author_url?: string, // 653976/3043766 (21.49%)
			cache_age?: number, // 288/3043766 (0.01%)
			description?: string, // 22929/3043766 (0.75%)
			height?: number|null, // 3043718/3043766 (100.00%)
			html?: string, // 3043765/3043766 (100.00%)
			mean_alpha?: number, // 69/3043766 (0.00%)
			provider_name?: string, // 3043765/3043766 (100.00%)
			provider_url?: string, // 3043765/3043766 (100.00%)
			thumbnail_height?: number, // 3006661/3043766 (98.78%)
			thumbnail_url?: string, // 3043743/3043766 (100.00%)
			thumbnail_width?: number, // 3006661/3043766 (98.78%)
			title?: string, // 3043451/3043766 (99.99%)
			type?: "video"|"rich", // 3043765/3043766 (100.00%)
			url?: string, // 7743/3043766 (0.25%)
			version?: "1.0", // 3043765/3043766 (100.00%)
			width?: number, // 3043718/3043766 (100.00%)
		}, // 3043766/4386477 (69.39%)
		reddit_video?: {
			bitrate_kbps?: number, // 1333959/1342675 (99.35%)
			dash_url?: string, // 1333959/1342675 (99.35%)
			duration?: number, // 1333959/1342675 (99.35%)
			fallback_url?: string, // 1333959/1342675 (99.35%)
			has_audio?: boolean, // 1333954/1342675 (99.35%)
			height: number|null,
			hls_url?: string, // 1333959/1342675 (99.35%)
			is_gif?: boolean, // 1333959/1342675 (99.35%)
			scrubber_media_url?: string, // 1333959/1342675 (99.35%)
			transcoding_message?: string, // 8716/1342675 (0.65%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1342675/4386477 (30.61%)
		type?: string, // 3043802/4386477 (69.39%)
	},
	secure_media_embed: {
		content?: string, // 669729/44170194 (1.52%)
		height?: number, // 669729/44170194 (1.52%)
		media_domain_url?: string, // 669729/44170194 (1.52%)
		scrolling?: boolean, // 669729/44170194 (1.52%)
		width?: number, // 669729/44170194 (1.52%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 237111/44170194 (0.54%)
	sk_ad_network_data?: null, // 237111/44170194 (0.54%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 9403/44170194 (0.02%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 237111/44170194 (0.54%)
	third_party_tracking?: null, // 237111/44170194 (0.54%)
	third_party_tracking_2?: null, // 237111/44170194 (0.54%)
	thumbnail: string,
	thumbnail_height?: null|number, // 44169475/44170194 (100.00%)
	thumbnail_width?: null|number, // 44169475/44170194 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 27002648/44170194 (61.13%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}