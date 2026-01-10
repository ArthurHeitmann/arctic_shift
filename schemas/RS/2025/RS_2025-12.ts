interface RedditPost {
	_meta?: {
		edited_title?: string, // 2281887/41042319 (5.56%)
		is_edited?: boolean, // 1455167/41042319 (3.55%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops"|"trademark_takedown", // 8601131/41042319 (20.96%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7924125/41042319 (19.31%)
		was_initially_deleted?: boolean, // 677008/41042319 (1.65%)
	}, // 41042319/42861083 (95.76%)
	ad_business?: null, // 313024/42861083 (0.73%)
	ad_promoted_user_posts?: null, // 313024/42861083 (0.73%)
	ad_supplementary_text_md?: null|string, // 313024/42861083 (0.73%)
	ad_user_targeting?: null, // 313024/42861083 (0.73%)
	adserver_click_url?: null, // 313024/42861083 (0.73%)
	adserver_imp_pixel?: null, // 313024/42861083 (0.73%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 313024/42861083 (0.73%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 115008/42861083 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1164731/3100898 (37.56%)
		e: "text"|"emoji",
		t?: string, // 1936167/3100898 (62.44%)
		u?: string, // 1164731/3100898 (37.56%)
	}[], // 42344573/42861083 (98.79%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 42344573/42861083 (98.79%)
	author_fullname?: string, // 42344573/42861083 (98.79%)
	author_id?: string|null, // 313024/42861083 (0.73%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 42344573/42861083 (98.79%)
	author_premium?: boolean, // 42344573/42861083 (98.79%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 258746/42861083 (0.60%)
	campaign_id?: null, // 313024/42861083 (0.73%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("entertainment"|"gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 2860696/42861083 (6.67%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 8015/2859608 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 69992/184728 (37.89%)
			e: "text"|"emoji",
			t?: string, // 114736/184728 (62.11%)
			u?: string, // 69992/184728 (37.89%)
		}[], // 2846390/2859608 (99.54%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 2846390/2859608 (99.54%)
		author_fullname?: string, // 2846390/2859608 (99.54%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 2846390/2859608 (99.54%)
		author_premium?: boolean, // 2846390/2859608 (99.54%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"entertainment"|"drawing_and_painting"|"gaming",
		clicked: boolean,
		content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"videos")[],
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
				caption?: string, // 1136510/3601864 (31.55%)
				id: number,
				media_id: string,
				outbound_url?: string, // 12800/3601864 (0.36%)
			}[],
		}|null, // 631824/2859608 (22.09%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 631824/2859608 (22.09%)
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
			a?: string, // 68368/519023 (13.17%)
			e: "text"|"emoji",
			t?: string, // 450655/519023 (86.83%)
			u?: string, // 68368/519023 (13.17%)
		}[],
		link_flair_template_id?: string, // 1199298/2859608 (41.94%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 1/462164 (0.00%)
			oembed?: {
				author_name?: string, // 32526/258444 (12.59%)
				author_url?: string, // 32520/258444 (12.58%)
				cache_age?: number, // 15/258444 (0.01%)
				description?: string, // 1742/258444 (0.67%)
				height?: number|null, // 258403/258444 (99.98%)
				html: string,
				mean_alpha?: number, // 1/258444 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 252339/258444 (97.64%)
				thumbnail_url?: string, // 258390/258444 (99.98%)
				thumbnail_width?: number, // 252339/258444 (97.64%)
				title?: string, // 258379/258444 (99.97%)
				type: "video"|"rich",
				url?: string, // 88/258444 (0.03%)
				version: "1.0",
				width?: number, // 258403/258444 (99.98%)
			}, // 258444/462164 (55.92%)
			reddit_video?: {
				bitrate_kbps?: number, // 203478/203719 (99.88%)
				dash_url?: string, // 203701/203719 (99.99%)
				duration?: number, // 203701/203719 (99.99%)
				fallback_url?: string, // 203701/203719 (99.99%)
				has_audio?: boolean, // 202444/203719 (99.37%)
				height: number|null,
				hls_url?: string, // 203701/203719 (99.99%)
				is_gif?: boolean, // 203701/203719 (99.99%)
				scrubber_media_url?: string, // 203701/203719 (99.99%)
				transcoding_message?: string, // 18/203719 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 203719/462164 (44.08%)
			type?: string, // 258445/462164 (55.92%)
		},
		media_embed: {
			content?: string, // 258404/2859608 (9.04%)
			height?: number, // 258404/2859608 (9.04%)
			scrolling?: boolean, // 258404/2859608 (9.04%)
			width?: number, // 258404/2859608 (9.04%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3166/3675945 (0.09%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 3671381/3675945 (99.88%)
				hlsUrl?: string, // 3166/3675945 (0.09%)
				id?: string, // 3671381/3675945 (99.88%)
				isGif?: boolean, // 3166/3675945 (0.09%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 3668215/3675945 (99.79%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2528277/3675945 (68.78%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 3668215/3675945 (99.79%)
				s?: {
					gif?: string, // 131469/3668215 (3.58%)
					mp4?: string, // 131469/3668215 (3.58%)
					u?: string, // 3536746/3668215 (96.42%)
					x: number,
					y: number,
				}, // 3668215/3675945 (99.79%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 3166/3675945 (0.09%)
				y?: number, // 3166/3675945 (0.09%)
			},
		}|null, // 667715/2859608 (23.35%)
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
				vote_count?: number, // 171/8812 (1.94%)
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
		}|boolean|null, // 3786/2859608 (0.13%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery", // 1476126/2859608 (51.62%)
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
					}, // 32494/1476126 (2.20%)
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
					}, // 32494/1476126 (2.20%)
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
					}, // 794460/1476126 (53.82%)
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
					}, // 800324/1476126 (54.22%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 224580/224607 (99.99%)
				dash_url?: string, // 224590/224607 (99.99%)
				duration?: number, // 224590/224607 (99.99%)
				fallback_url?: string, // 224590/224607 (99.99%)
				has_audio?: boolean, // 138349/224607 (61.60%)
				height: number|null,
				hls_url?: string, // 224590/224607 (99.99%)
				is_gif?: boolean, // 224590/224607 (99.99%)
				scrubber_media_url?: string, // 224590/224607 (99.99%)
				transcoding_message?: string, // 17/224607 (0.01%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 224607/1476126 (15.22%)
		}, // 1476126/2859608 (51.62%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"author"|"automod_filtered"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 1/462164 (0.00%)
			oembed?: {
				author_name?: string, // 32526/258444 (12.59%)
				author_url?: string, // 32520/258444 (12.58%)
				cache_age?: number, // 15/258444 (0.01%)
				description?: string, // 1742/258444 (0.67%)
				height?: number|null, // 258403/258444 (99.98%)
				html: string,
				mean_alpha?: number, // 1/258444 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 252339/258444 (97.64%)
				thumbnail_url?: string, // 258390/258444 (99.98%)
				thumbnail_width?: number, // 252339/258444 (97.64%)
				title?: string, // 258379/258444 (99.97%)
				type: "video"|"rich",
				url?: string, // 88/258444 (0.03%)
				version: "1.0",
				width?: number, // 258403/258444 (99.98%)
			}, // 258444/462164 (55.92%)
			reddit_video?: {
				bitrate_kbps?: number, // 203478/203719 (99.88%)
				dash_url?: string, // 203701/203719 (99.99%)
				duration?: number, // 203701/203719 (99.99%)
				fallback_url?: string, // 203701/203719 (99.99%)
				has_audio?: boolean, // 202444/203719 (99.37%)
				height: number|null,
				hls_url?: string, // 203701/203719 (99.99%)
				is_gif?: boolean, // 203701/203719 (99.99%)
				scrubber_media_url?: string, // 203701/203719 (99.99%)
				transcoding_message?: string, // 18/203719 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 203719/462164 (44.08%)
			type?: string, // 258445/462164 (55.92%)
		},
		secure_media_embed: {
			content?: string, // 258404/2859608 (9.04%)
			height?: number, // 258404/2859608 (9.04%)
			media_domain_url?: string, // 258404/2859608 (9.04%)
			scrolling?: boolean, // 258404/2859608 (9.04%)
			width?: number, // 258404/2859608 (9.04%)
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
		thumbnail: string|null,
		thumbnail_height?: number|null, // 2858142/2859608 (99.95%)
		thumbnail_width?: number|null, // 2858142/2859608 (99.95%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2111578/2859608 (73.84%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 2860696/42861083 (6.67%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 313024/42861083 (0.73%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 313024/42861083 (0.73%)
	embed_url?: null|"https://doblenacionalidadexpress.com/", // 313024/42861083 (0.73%)
	events?: [], // 313024/42861083 (0.73%)
	eventsOnRender?: [], // 313024/42861083 (0.73%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 86706/20218402 (0.43%)
			caption?: string, // 6762962/20218402 (33.45%)
			display_url?: string, // 96942/20218402 (0.48%)
			id: number,
			media_id: string,
			outbound_url?: string, // 116543/20218402 (0.58%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 32676/20218402 (0.16%)
		}[],
	}|null, // 5341309/42861083 (12.46%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 313024/42861083 (0.73%)
	id: string,
	impression_id?: null, // 313024/42861083 (0.73%)
	impression_id_str?: null, // 313024/42861083 (0.73%)
	is_blank?: boolean, // 313024/42861083 (0.73%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5341309/42861083 (12.46%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 313024/42861083 (0.73%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1225263/9974829 (12.28%)
		e: "text"|"emoji",
		t?: string, // 8749566/9974829 (87.72%)
		u?: string, // 1225263/9974829 (12.28%)
	}[],
	link_flair_template_id?: string, // 19976979/42861083 (46.61%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1g6nc2pj0s7hf"|"1g4smpqnmxlvk"|"1g4u68fxfkr1n"|"1g5b9w8ievrxn"|"1g5reh9jueuhf"|"1g6dor4e3fw17"|"1g74ph9sb7nin"|"1g7rgz21rbg14"|"1g865dyypuh97"|"1g879ruhv8b5u"|"ta535s1hq2je", // 45/4279703 (0.00%)
		oembed?: {
			author_name?: string, // 547272/2977690 (18.38%)
			author_url?: string, // 547276/2977690 (18.38%)
			cache_age?: number, // 41/2977690 (0.00%)
			description?: string, // 15707/2977690 (0.53%)
			height?: number|null, // 2977159/2977690 (99.98%)
			html: string,
			mean_alpha?: number, // 5/2977690 (0.00%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2951559/2977690 (99.12%)
			thumbnail_url?: string, // 2977687/2977690 (100.00%)
			thumbnail_width?: number, // 2951559/2977690 (99.12%)
			title?: string, // 2976943/2977690 (99.97%)
			type: "video"|"rich",
			url?: string, // 2321/2977690 (0.08%)
			version: "1.0",
			width?: number, // 2977159/2977690 (99.98%)
		}, // 2977690/4279703 (69.58%)
		reddit_video?: {
			bitrate_kbps?: number, // 1295394/1301968 (99.50%)
			dash_url?: string, // 1295394/1301968 (99.50%)
			duration?: number, // 1295394/1301968 (99.50%)
			fallback_url?: string, // 1295394/1301968 (99.50%)
			has_audio?: boolean, // 1295385/1301968 (99.49%)
			height: number|null,
			hls_url?: string, // 1295394/1301968 (99.50%)
			is_gif?: boolean, // 1295394/1301968 (99.50%)
			scrubber_media_url?: string, // 1295394/1301968 (99.50%)
			transcoding_message?: string, // 6574/1301968 (0.50%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1301968/4279703 (30.42%)
		type?: string, // 2977735/4279703 (69.58%)
	},
	media_embed: {
		content?: string, // 613495/42861083 (1.43%)
		height?: number, // 613495/42861083 (1.43%)
		scrolling?: boolean, // 613495/42861083 (1.43%)
		width?: number, // 613495/42861083 (1.43%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 25612/20851844 (0.12%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 20421209/20851844 (97.93%)
			hlsUrl?: string, // 25612/20851844 (0.12%)
			id?: string, // 20421209/20851844 (97.93%)
			isGif?: boolean, // 25612/20851844 (0.12%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 20395597/20851844 (97.81%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 10535231/20851844 (50.52%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 20395597/20851844 (97.81%)
			s?: {
				gif?: string, // 415256/20395597 (2.04%)
				mp4?: string, // 415256/20395597 (2.04%)
				u?: string, // 19980341/20395597 (97.96%)
				x: number,
				y: number,
			}, // 20395597/20851844 (97.81%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 25612/20851844 (0.12%)
			y?: number, // 25612/20851844 (0.12%)
		},
	}|null, // 5825451/42861083 (13.59%)
	media_only: boolean,
	mobile_ad_url?: string, // 313024/42861083 (0.73%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 313024/42861083 (0.73%)
	outbound_link?: {
	}, // 313024/42861083 (0.73%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 14836/120485 (12.31%)
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
	}|null, // 2623572/42861083 (6.12%)
	post_hint?: "image"|"hosted:video"|"link"|"rich:video"|"self"|"gallery"|"video", // 16082500/42861083 (37.52%)
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
				}, // 489035/18914366 (2.59%)
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
				}, // 489035/18914366 (2.59%)
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
				}, // 10082543/18914366 (53.31%)
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
				}, // 10176962/18914366 (53.81%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2103602/2104555 (99.95%)
			dash_url?: string, // 2103612/2104555 (99.96%)
			duration?: number, // 2103612/2104555 (99.96%)
			fallback_url?: string, // 2103612/2104555 (99.96%)
			has_audio?: boolean, // 1776190/2104555 (84.40%)
			height: number|null,
			hls_url?: string, // 2103612/2104555 (99.96%)
			is_gif?: boolean, // 2103612/2104555 (99.96%)
			scrubber_media_url?: string, // 2103612/2104555 (99.96%)
			transcoding_message?: string, // 943/2104555 (0.04%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 2104555/18914366 (11.13%)
	}, // 18914366/42861083 (44.13%)
	priority_id?: null, // 313024/42861083 (0.73%)
	product_ids?: [], // 313024/42861083 (0.73%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 313024/42861083 (0.73%)
	promoted?: boolean, // 313024/42861083 (0.73%)
	promoted_by?: null, // 313024/42861083 (0.73%)
	promoted_display_name?: null, // 313024/42861083 (0.73%)
	promoted_url?: null, // 313024/42861083 (0.73%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1g6nc2pj0s7hf"|"1g4smpqnmxlvk"|"1g4u68fxfkr1n"|"1g5b9w8ievrxn"|"1g5reh9jueuhf"|"1g6dor4e3fw17"|"1g74ph9sb7nin"|"1g7rgz21rbg14"|"1g865dyypuh97"|"1g879ruhv8b5u"|"ta535s1hq2je", // 45/4279703 (0.00%)
		oembed?: {
			author_name?: string, // 547272/2977690 (18.38%)
			author_url?: string, // 547276/2977690 (18.38%)
			cache_age?: number, // 41/2977690 (0.00%)
			description?: string, // 15707/2977690 (0.53%)
			height?: number|null, // 2977159/2977690 (99.98%)
			html: string,
			mean_alpha?: number, // 5/2977690 (0.00%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2951559/2977690 (99.12%)
			thumbnail_url?: string, // 2977687/2977690 (100.00%)
			thumbnail_width?: number, // 2951559/2977690 (99.12%)
			title?: string, // 2976943/2977690 (99.97%)
			type: "video"|"rich",
			url?: string, // 2321/2977690 (0.08%)
			version: "1.0",
			width?: number, // 2977159/2977690 (99.98%)
		}, // 2977690/4279703 (69.58%)
		reddit_video?: {
			bitrate_kbps?: number, // 1295394/1301968 (99.50%)
			dash_url?: string, // 1295394/1301968 (99.50%)
			duration?: number, // 1295394/1301968 (99.50%)
			fallback_url?: string, // 1295394/1301968 (99.50%)
			has_audio?: boolean, // 1295385/1301968 (99.49%)
			height: number|null,
			hls_url?: string, // 1295394/1301968 (99.50%)
			is_gif?: boolean, // 1295394/1301968 (99.50%)
			scrubber_media_url?: string, // 1295394/1301968 (99.50%)
			transcoding_message?: string, // 6574/1301968 (0.50%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1301968/4279703 (30.42%)
		type?: string, // 2977735/4279703 (69.58%)
	},
	secure_media_embed: {
		content?: string, // 613495/42861083 (1.43%)
		height?: number, // 613495/42861083 (1.43%)
		media_domain_url?: string, // 613495/42861083 (1.43%)
		scrolling?: boolean, // 613495/42861083 (1.43%)
		width?: number, // 613495/42861083 (1.43%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 313024/42861083 (0.73%)
	sk_ad_network_data?: null, // 313024/42861083 (0.73%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 10877/42861083 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 313024/42861083 (0.73%)
	third_party_tracking?: null, // 313024/42861083 (0.73%)
	third_party_tracking_2?: null, // 313024/42861083 (0.73%)
	thumbnail: string|null,
	thumbnail_height?: null|number, // 42515927/42861083 (99.19%)
	thumbnail_width?: null|number, // 42515927/42861083 (99.19%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 26932230/42861083 (62.84%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}