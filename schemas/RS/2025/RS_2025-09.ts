interface RedditPost {
	_meta?: {
		edited_title?: string, // 1882196/42124225 (4.47%)
		is_edited?: boolean, // 1546326/42124225 (3.67%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8657682/42124225 (20.55%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7871802/42124225 (18.69%)
		was_initially_deleted?: boolean, // 785883/42124225 (1.87%)
	}, // 42124225/42368178 (99.42%)
	ad_business?: null, // 269213/42368178 (0.64%)
	ad_promoted_user_posts?: null, // 269213/42368178 (0.64%)
	ad_supplementary_text_md?: null|string, // 269213/42368178 (0.64%)
	ad_user_targeting?: null, // 269213/42368178 (0.64%)
	adserver_click_url?: null, // 269213/42368178 (0.64%)
	adserver_imp_pixel?: null, // 269213/42368178 (0.64%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 269213/42368178 (0.64%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 109892/42368178 (0.26%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1022501/2778091 (36.81%)
		e: "text"|"emoji",
		t?: string, // 1755590/2778091 (63.19%)
		u?: string, // 1022501/2778091 (36.81%)
	}[], // 42014409/42368178 (99.17%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 42014409/42368178 (99.17%)
	author_fullname?: string, // 42014409/42368178 (99.17%)
	author_id?: string|null, // 269213/42368178 (0.64%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 42014409/42368178 (99.17%)
	author_premium?: boolean, // 42014409/42368178 (99.17%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 218532/42368178 (0.52%)
	campaign_id?: null, // 269213/42368178 (0.64%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 2645752/42368178 (6.24%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 7175/2645084 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 68332/177955 (38.40%)
			e: "text"|"emoji",
			t?: string, // 109623/177955 (61.60%)
			u?: string, // 68332/177955 (38.40%)
		}[], // 2631496/2645084 (99.49%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 2631496/2645084 (99.49%)
		author_fullname?: string, // 2631496/2645084 (99.49%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 2631496/2645084 (99.49%)
		author_premium?: boolean, // 2631496/2645084 (99.49%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"entertainment",
		clicked: boolean,
		content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"comics"|"diy_and_crafts"|"entertainment"|"music"|"writing"|"videos")[],
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
				caption?: string, // 1045143/2992665 (34.92%)
				id: number,
				media_id: string,
				outbound_url?: string, // 10800/2992665 (0.36%)
			}[],
		}|null, // 542310/2645084 (20.50%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 542310/2645084 (20.50%)
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
			a?: string, // 63615/483091 (13.17%)
			e: "text"|"emoji",
			t?: string, // 419476/483091 (86.83%)
			u?: string, // 63615/483091 (13.17%)
		}[],
		link_flair_template_id?: string, // 1104509/2645084 (41.76%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 32710/359019 (9.11%)
				author_url?: string, // 32670/359019 (9.10%)
				cache_age?: number, // 26/359019 (0.01%)
				description?: string, // 1863/359019 (0.52%)
				height?: number|null, // 359016/359019 (100.00%)
				html: string,
				mean_alpha?: number, // 4/359019 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 348119/359019 (96.96%)
				thumbnail_url?: string, // 358923/359019 (99.97%)
				thumbnail_width?: number, // 348119/359019 (96.96%)
				title?: string, // 358985/359019 (99.99%)
				type: "video"|"rich",
				url?: string, // 417/359019 (0.12%)
				version: "1.0",
				width?: number, // 359016/359019 (100.00%)
			}, // 359019/552047 (65.03%)
			reddit_video?: {
				bitrate_kbps?: number, // 192862/193028 (99.91%)
				dash_url?: string, // 192984/193028 (99.98%)
				duration?: number, // 192984/193028 (99.98%)
				fallback_url?: string, // 192984/193028 (99.98%)
				has_audio?: boolean, // 192124/193028 (99.53%)
				height: number|null,
				hls_url?: string, // 192984/193028 (99.98%)
				is_gif?: boolean, // 192984/193028 (99.98%)
				scrubber_media_url?: string, // 192984/193028 (99.98%)
				transcoding_message?: string, // 44/193028 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 193028/552047 (34.97%)
			type?: string, // 359019/552047 (65.03%)
		},
		media_embed: {
			content?: string, // 359016/2645084 (13.57%)
			height?: number, // 359016/2645084 (13.57%)
			scrolling?: boolean, // 359016/2645084 (13.57%)
			width?: number, // 359016/2645084 (13.57%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1808/3034559 (0.06%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 3030720/3034559 (99.87%)
				hlsUrl?: string, // 1808/3034559 (0.06%)
				id?: string, // 3030720/3034559 (99.87%)
				isGif?: boolean, // 1808/3034559 (0.06%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 3028912/3034559 (99.81%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1964091/3034559 (64.72%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 3028912/3034559 (99.81%)
				s?: {
					gif?: string, // 118021/3028912 (3.90%)
					mp4?: string, // 118021/3028912 (3.90%)
					u?: string, // 2910891/3028912 (96.10%)
					x: number,
					y: number,
				}, // 3028912/3034559 (99.81%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1808/3034559 (0.06%)
				y?: number, // 1808/3034559 (0.06%)
			},
		}|null, // 560108/2645084 (21.18%)
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
				vote_count?: number, // 234/9541 (2.45%)
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
		}|boolean|null, // 3281/2645084 (0.12%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1501706/2645084 (56.77%)
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
					}, // 53224/1501706 (3.54%)
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
					}, // 53224/1501706 (3.54%)
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
					}, // 827449/1501706 (55.10%)
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
					}, // 833533/1501706 (55.51%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 325556/325569 (100.00%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 325569/1501706 (21.68%)
		}, // 1501706/2645084 (56.77%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 32710/359019 (9.11%)
				author_url?: string, // 32670/359019 (9.10%)
				cache_age?: number, // 26/359019 (0.01%)
				description?: string, // 1863/359019 (0.52%)
				height?: number|null, // 359016/359019 (100.00%)
				html: string,
				mean_alpha?: number, // 4/359019 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 348119/359019 (96.96%)
				thumbnail_url?: string, // 358923/359019 (99.97%)
				thumbnail_width?: number, // 348119/359019 (96.96%)
				title?: string, // 358985/359019 (99.99%)
				type: "video"|"rich",
				url?: string, // 417/359019 (0.12%)
				version: "1.0",
				width?: number, // 359016/359019 (100.00%)
			}, // 359019/552047 (65.03%)
			reddit_video?: {
				bitrate_kbps?: number, // 192862/193028 (99.91%)
				dash_url?: string, // 192984/193028 (99.98%)
				duration?: number, // 192984/193028 (99.98%)
				fallback_url?: string, // 192984/193028 (99.98%)
				has_audio?: boolean, // 192124/193028 (99.53%)
				height: number|null,
				hls_url?: string, // 192984/193028 (99.98%)
				is_gif?: boolean, // 192984/193028 (99.98%)
				scrubber_media_url?: string, // 192984/193028 (99.98%)
				transcoding_message?: string, // 44/193028 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 193028/552047 (34.97%)
			type?: string, // 359019/552047 (65.03%)
		},
		secure_media_embed: {
			content?: string, // 359016/2645084 (13.57%)
			height?: number, // 359016/2645084 (13.57%)
			media_domain_url?: string, // 359016/2645084 (13.57%)
			scrolling?: boolean, // 359016/2645084 (13.57%)
			width?: number, // 359016/2645084 (13.57%)
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
		thumbnail_height?: number|null, // 2644378/2645084 (99.97%)
		thumbnail_width?: number|null, // 2644378/2645084 (99.97%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2042905/2645084 (77.23%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 2645752/42368178 (6.24%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 269213/42368178 (0.64%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 269213/42368178 (0.64%)
	embed_url?: null|string, // 269213/42368178 (0.64%)
	events?: [], // 269213/42368178 (0.64%)
	eventsOnRender?: [], // 269213/42368178 (0.64%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 85773/18881062 (0.45%)
			caption?: string, // 6274218/18881062 (33.23%)
			display_url?: string, // 92009/18881062 (0.49%)
			id: number,
			media_id: string,
			outbound_url?: string, // 120025/18881062 (0.64%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 25870/18881062 (0.14%)
		}[],
	}|null, // 5073266/42368178 (11.97%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 269213/42368178 (0.64%)
	id: string,
	impression_id?: null, // 269213/42368178 (0.64%)
	impression_id_str?: null, // 269213/42368178 (0.64%)
	is_blank?: boolean, // 269213/42368178 (0.64%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5073266/42368178 (11.97%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 269213/42368178 (0.64%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1156997/9660909 (11.98%)
		e: "text"|"emoji",
		t?: string, // 8503912/9660909 (88.02%)
		u?: string, // 1156997/9660909 (11.98%)
	}[],
	link_flair_template_id?: string, // 19905889/42368178 (46.98%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1fmty2l8svq0c"|"1fpj7sb9ytfkt"|"1fqi5roqawodj"|"1frnrjvykeism", // 35/4250887 (0.00%)
		oembed?: {
			author_name?: string, // 609521/2969160 (20.53%)
			author_url?: string, // 609319/2969160 (20.52%)
			cache_age?: number, // 235/2969160 (0.01%)
			description?: string, // 21488/2969160 (0.72%)
			height?: number|null, // 2969145/2969160 (100.00%)
			html?: string, // 2969159/2969160 (100.00%)
			mean_alpha?: number, // 93/2969160 (0.00%)
			provider_name?: string, // 2969159/2969160 (100.00%)
			provider_url?: string, // 2969159/2969160 (100.00%)
			thumbnail_height?: number, // 2935824/2969160 (98.88%)
			thumbnail_url?: string, // 2969144/2969160 (100.00%)
			thumbnail_width?: number, // 2935824/2969160 (98.88%)
			title?: string, // 2968849/2969160 (99.99%)
			type?: "video"|"rich", // 2969159/2969160 (100.00%)
			url?: string, // 7119/2969160 (0.24%)
			version?: "1.0", // 2969159/2969160 (100.00%)
			width?: number, // 2969145/2969160 (100.00%)
		}, // 2969160/4250887 (69.85%)
		reddit_video?: {
			bitrate_kbps?: number, // 1274388/1281692 (99.43%)
			dash_url?: string, // 1274388/1281692 (99.43%)
			duration?: number, // 1274388/1281692 (99.43%)
			fallback_url?: string, // 1274388/1281692 (99.43%)
			has_audio?: boolean, // 1274369/1281692 (99.43%)
			height: number|null,
			hls_url?: string, // 1274388/1281692 (99.43%)
			is_gif?: boolean, // 1274388/1281692 (99.43%)
			scrubber_media_url?: string, // 1274388/1281692 (99.43%)
			transcoding_message?: string, // 7304/1281692 (0.57%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1281692/4250887 (30.15%)
		type?: string, // 2969195/4250887 (69.85%)
	},
	media_embed: {
		content?: string, // 833551/42368178 (1.97%)
		height?: number, // 833551/42368178 (1.97%)
		scrolling?: boolean, // 833551/42368178 (1.97%)
		width?: number, // 833551/42368178 (1.97%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 21190/19465303 (0.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 19201025/19465303 (98.64%)
			hlsUrl?: string, // 21190/19465303 (0.11%)
			id?: string, // 19201025/19465303 (98.64%)
			isGif?: boolean, // 21190/19465303 (0.11%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 19179835/19465303 (98.53%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 9413535/19465303 (48.36%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 19179835/19465303 (98.53%)
			s?: {
				gif?: string, // 363494/19179835 (1.90%)
				mp4?: string, // 363494/19179835 (1.90%)
				u?: string, // 18816341/19179835 (98.10%)
				x: number,
				y: number,
			}, // 19179835/19465303 (98.53%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 21190/19465303 (0.11%)
			y?: number, // 21190/19465303 (0.11%)
		},
	}|null, // 5528252/42368178 (13.05%)
	media_only: boolean,
	mobile_ad_url?: string, // 269213/42368178 (0.64%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 269213/42368178 (0.64%)
	outbound_link?: {
	}, // 269213/42368178 (0.64%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 16344/143465 (11.39%)
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
	}|null, // 2053877/42368178 (4.85%)
	post_hint?: "image"|"hosted:video"|"link"|"rich:video"|"self"|"gallery"|"video", // 16236362/42368178 (38.32%)
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
				}, // 542213/18837866 (2.88%)
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
				}, // 542213/18837866 (2.88%)
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
				}, // 9800473/18837866 (52.03%)
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
				}, // 9927235/18837866 (52.70%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2002163/2002176 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 2002176/18837866 (10.63%)
	}, // 18837866/42368178 (44.46%)
	priority_id?: null, // 269213/42368178 (0.64%)
	product_ids?: [], // 269213/42368178 (0.64%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 269213/42368178 (0.64%)
	promoted?: boolean, // 269213/42368178 (0.64%)
	promoted_by?: null, // 269213/42368178 (0.64%)
	promoted_display_name?: null, // 269213/42368178 (0.64%)
	promoted_url?: null, // 269213/42368178 (0.64%)
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
		event_id?: "18hnzysb1elcs"|"1fmty2l8svq0c"|"1fpj7sb9ytfkt"|"1fqi5roqawodj"|"1frnrjvykeism", // 35/4250887 (0.00%)
		oembed?: {
			author_name?: string, // 609521/2969160 (20.53%)
			author_url?: string, // 609319/2969160 (20.52%)
			cache_age?: number, // 235/2969160 (0.01%)
			description?: string, // 21488/2969160 (0.72%)
			height?: number|null, // 2969145/2969160 (100.00%)
			html?: string, // 2969159/2969160 (100.00%)
			mean_alpha?: number, // 93/2969160 (0.00%)
			provider_name?: string, // 2969159/2969160 (100.00%)
			provider_url?: string, // 2969159/2969160 (100.00%)
			thumbnail_height?: number, // 2935824/2969160 (98.88%)
			thumbnail_url?: string, // 2969144/2969160 (100.00%)
			thumbnail_width?: number, // 2935824/2969160 (98.88%)
			title?: string, // 2968849/2969160 (99.99%)
			type?: "video"|"rich", // 2969159/2969160 (100.00%)
			url?: string, // 7119/2969160 (0.24%)
			version?: "1.0", // 2969159/2969160 (100.00%)
			width?: number, // 2969145/2969160 (100.00%)
		}, // 2969160/4250887 (69.85%)
		reddit_video?: {
			bitrate_kbps?: number, // 1274388/1281692 (99.43%)
			dash_url?: string, // 1274388/1281692 (99.43%)
			duration?: number, // 1274388/1281692 (99.43%)
			fallback_url?: string, // 1274388/1281692 (99.43%)
			has_audio?: boolean, // 1274369/1281692 (99.43%)
			height: number|null,
			hls_url?: string, // 1274388/1281692 (99.43%)
			is_gif?: boolean, // 1274388/1281692 (99.43%)
			scrubber_media_url?: string, // 1274388/1281692 (99.43%)
			transcoding_message?: string, // 7304/1281692 (0.57%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1281692/4250887 (30.15%)
		type?: string, // 2969195/4250887 (69.85%)
	},
	secure_media_embed: {
		content?: string, // 833551/42368178 (1.97%)
		height?: number, // 833551/42368178 (1.97%)
		media_domain_url?: string, // 833551/42368178 (1.97%)
		scrolling?: boolean, // 833551/42368178 (1.97%)
		width?: number, // 833551/42368178 (1.97%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 269213/42368178 (0.64%)
	sk_ad_network_data?: null, // 269213/42368178 (0.64%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 8830/42368178 (0.02%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 269213/42368178 (0.64%)
	third_party_tracking?: null, // 269213/42368178 (0.64%)
	third_party_tracking_2?: null, // 269213/42368178 (0.64%)
	thumbnail: string|null,
	thumbnail_height?: null|number, // 42162791/42368178 (99.52%)
	thumbnail_width?: null|number, // 42162791/42368178 (99.52%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 25890497/42368178 (61.11%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}