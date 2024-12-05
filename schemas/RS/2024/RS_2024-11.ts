interface RedditPost {
	_meta?: {
		edited_title?: string, // 67430/37695427 (0.18%)
		is_edited?: boolean, // 1479576/37695427 (3.93%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 7529982/37695427 (19.98%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 6769639/37695427 (17.96%)
		was_initially_deleted?: boolean, // 760343/37695427 (2.02%)
	}, // 37695427/38022413 (99.14%)
	ad_business?: null, // 174228/38022413 (0.46%)
	ad_promoted_user_posts?: null|[], // 174228/38022413 (0.46%)
	ad_supplementary_text_md?: null|string, // 174228/38022413 (0.46%)
	ad_user_targeting?: null, // 174228/38022413 (0.46%)
	adserver_click_url?: null, // 174228/38022413 (0.46%)
	adserver_imp_pixel?: null, // 174228/38022413 (0.46%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 174228/38022413 (0.46%)
	approved?: boolean, // 3/38022413 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 101813/38022413 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1012487/2741544 (36.93%)
		e: "text"|"emoji",
		t?: string, // 1729057/2741544 (63.07%)
		u?: string, // 1012487/2741544 (36.93%)
	}[], // 37575625/38022413 (98.82%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 37575625/38022413 (98.82%)
	author_fullname?: string, // 37575625/38022413 (98.82%)
	author_id?: string|null, // 174228/38022413 (0.46%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 37575625/38022413 (98.82%)
	author_premium?: boolean, // 37575625/38022413 (98.82%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Apply Now"|"Order Now"|"Contact Us"|"Watch Now"|"Get a Quote"|"Get Showtimes"|"Pre-order Now"|"See Menu", // 134603/38022413 (0.35%)
	campaign_id?: null, // 174228/38022413 (0.46%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment"|"photography",
	clicked: boolean,
	content_categories: null|("gaming"|"photography"|"drawing_and_painting"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1205726/38022413 (3.17%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3356/1205570 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 39106/104702 (37.35%)
			e: "text"|"emoji",
			t?: string, // 65596/104702 (62.65%)
			u?: string, // 39106/104702 (37.35%)
		}[], // 1195691/1205570 (99.18%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1195691/1205570 (99.18%)
		author_fullname?: string, // 1195691/1205570 (99.18%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1195691/1205570 (99.18%)
		author_premium?: boolean, // 1195691/1205570 (99.18%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("photography"|"comics"|"drawing_and_painting"|"gaming"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 281226/1169041 (24.06%)
				id: number,
				media_id: string,
				outbound_url?: string, // 30936/1169041 (2.65%)
			}[],
		}|null, // 187011/1205570 (15.51%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 187011/1205570 (15.51%)
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
			a?: string, // 29096/211939 (13.73%)
			e: "text"|"emoji",
			t?: string, // 182843/211939 (86.27%)
			u?: string, // 29096/211939 (13.73%)
		}[],
		link_flair_template_id?: string, // 473719/1205570 (39.29%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "1db9knzhqzdfp"|"18hnzysb1elcs", // 5/386209 (0.00%)
			oembed?: {
				author_name?: string, // 16527/267317 (6.18%)
				author_url?: string, // 16501/267317 (6.17%)
				cache_age?: number, // 681/267317 (0.25%)
				description?: string, // 2172/267317 (0.81%)
				height?: number|null, // 267316/267317 (100.00%)
				html?: string, // 267316/267317 (100.00%)
				mean_alpha?: number, // 53/267317 (0.02%)
				provider_name?: string, // 267316/267317 (100.00%)
				provider_url?: string, // 267316/267317 (100.00%)
				thumbnail_height?: number, // 254277/267317 (95.12%)
				thumbnail_url?: string, // 266538/267317 (99.71%)
				thumbnail_width?: number, // 254277/267317 (95.12%)
				title?: string, // 266625/267317 (99.74%)
				type?: "video"|"rich", // 267316/267317 (100.00%)
				url?: string, // 1368/267317 (0.51%)
				version?: "1.0", // 267316/267317 (100.00%)
				width?: number, // 267316/267317 (100.00%)
			}, // 267317/386209 (69.22%)
			reddit_video?: {
				bitrate_kbps?: number, // 118665/118887 (99.81%)
				dash_url?: string, // 118871/118887 (99.99%)
				duration?: number, // 118871/118887 (99.99%)
				fallback_url?: string, // 118871/118887 (99.99%)
				has_audio?: boolean, // 116833/118887 (98.27%)
				height: number|null,
				hls_url?: string, // 118871/118887 (99.99%)
				is_gif?: boolean, // 118871/118887 (99.99%)
				scrubber_media_url?: string, // 118871/118887 (99.99%)
				transcoding_message?: string, // 16/118887 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 118887/386209 (30.78%)
			type?: string, // 267322/386209 (69.22%)
		},
		media_embed: {
			content?: string|null, // 267322/1205570 (22.17%)
			height?: number, // 267322/1205570 (22.17%)
			scrolling?: boolean, // 267322/1205570 (22.17%)
			width?: number, // 267322/1205570 (22.17%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1360/1203342 (0.11%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1202529/1203342 (99.93%)
				hlsUrl?: string, // 1360/1203342 (0.11%)
				id?: string, // 1202529/1203342 (99.93%)
				isGif?: boolean, // 1360/1203342 (0.11%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1201169/1203342 (99.82%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 781344/1203342 (64.93%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1201169/1203342 (99.82%)
				s?: {
					gif?: string, // 63560/1201169 (5.29%)
					mp4?: string, // 63560/1201169 (5.29%)
					u?: string, // 1137609/1201169 (94.71%)
					x: number,
					y: number,
				}, // 1201169/1203342 (99.82%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1360/1203342 (0.11%)
				y?: number, // 1360/1203342 (0.11%)
			},
		}|null, // 201191/1205570 (16.69%)
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
				vote_count?: number, // 207/4379 (4.73%)
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
		}, // 1151/1205570 (0.10%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery", // 889588/1205570 (73.79%)
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
					}, // 50968/889588 (5.73%)
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
					}, // 50968/889588 (5.73%)
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
					}, // 526498/889588 (59.18%)
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
					}, // 528920/889588 (59.46%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 256733/256747 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 256747/889588 (28.86%)
		}, // 889588/1205570 (73.79%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"automod_filtered"|"copyright_takedown"|"content_takedown"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "1db9knzhqzdfp"|"18hnzysb1elcs", // 5/386209 (0.00%)
			oembed?: {
				author_name?: string, // 16527/267317 (6.18%)
				author_url?: string, // 16501/267317 (6.17%)
				cache_age?: number, // 681/267317 (0.25%)
				description?: string, // 2172/267317 (0.81%)
				height?: number|null, // 267316/267317 (100.00%)
				html?: string, // 267316/267317 (100.00%)
				mean_alpha?: number, // 53/267317 (0.02%)
				provider_name?: string, // 267316/267317 (100.00%)
				provider_url?: string, // 267316/267317 (100.00%)
				thumbnail_height?: number, // 254277/267317 (95.12%)
				thumbnail_url?: string, // 266538/267317 (99.71%)
				thumbnail_width?: number, // 254277/267317 (95.12%)
				title?: string, // 266625/267317 (99.74%)
				type?: "video"|"rich", // 267316/267317 (100.00%)
				url?: string, // 1368/267317 (0.51%)
				version?: "1.0", // 267316/267317 (100.00%)
				width?: number, // 267316/267317 (100.00%)
			}, // 267317/386209 (69.22%)
			reddit_video?: {
				bitrate_kbps?: number, // 118665/118887 (99.81%)
				dash_url?: string, // 118871/118887 (99.99%)
				duration?: number, // 118871/118887 (99.99%)
				fallback_url?: string, // 118871/118887 (99.99%)
				has_audio?: boolean, // 116833/118887 (98.27%)
				height: number|null,
				hls_url?: string, // 118871/118887 (99.99%)
				is_gif?: boolean, // 118871/118887 (99.99%)
				scrubber_media_url?: string, // 118871/118887 (99.99%)
				transcoding_message?: string, // 16/118887 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 118887/386209 (30.78%)
			type?: string, // 267322/386209 (69.22%)
		},
		secure_media_embed: {
			content?: string|null, // 267322/1205570 (22.17%)
			height?: number, // 267322/1205570 (22.17%)
			media_domain_url?: string, // 267322/1205570 (22.17%)
			scrolling?: boolean, // 267322/1205570 (22.17%)
			width?: number, // 267322/1205570 (22.17%)
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
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
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
		url_overridden_by_dest?: string, // 1063232/1205570 (88.19%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 1205726/38022413 (3.17%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 174228/38022413 (0.46%)
	downs: number,
	edited: boolean|number,
	embed_type?: null, // 174228/38022413 (0.46%)
	embed_url?: null, // 174228/38022413 (0.46%)
	events?: [], // 174228/38022413 (0.46%)
	eventsOnRender?: [], // 174228/38022413 (0.46%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"View More"|"Order Now"|"Sign Up"|"Download"|"Play Now"|"Contact Us"|"Install"|"Apply Now"|"Watch Now"|"Get a Quote"|"Get Showtimes"|"Pre-order Now"|"See Menu", // 70437/14153308 (0.50%)
			caption?: string, // 5065322/14153308 (35.79%)
			display_url?: string, // 77714/14153308 (0.55%)
			id: number,
			media_id: string,
			outbound_url?: string, // 111606/14153308 (0.79%)
			product?: {
				description: string,
				price?: string, // 11520/11526 (99.95%)
				title: string,
			}, // 11526/14153308 (0.08%)
		}[],
	}|null, // 3838028/38022413 (10.09%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 174228/38022413 (0.46%)
	id: string,
	ignore_reports?: boolean, // 3/38022413 (0.00%)
	impression_id?: null, // 174228/38022413 (0.46%)
	impression_id_str?: null, // 174228/38022413 (0.46%)
	is_blank?: boolean, // 174228/38022413 (0.46%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3838028/38022413 (10.09%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 174228/38022413 (0.46%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1011390/8993915 (11.25%)
		e: "text"|"emoji",
		t?: string, // 7982525/8993915 (88.75%)
		u?: string, // 1011390/8993915 (11.25%)
	}[],
	link_flair_template_id?: string, // 17071418/38022413 (44.90%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1db9knzhqzdfp"|"1bsso361afr0r"|"1dxvueu5xr6li"|"1e10o36cfheg0"|"1dyuz6oa6heze"|"1dz4fdkz1m8h3"|"1dz397r8z9job"|"1dyyftlys1r7w"|"1dzu7w4jeag7b"|"1e2m3qnvdowd6"|"1e3g8vtbgtlb6"|"1e40yhyvjcv11", // 66/3689362 (0.00%)
		oembed?: {
			author_name?: string, // 668453/2565838 (26.05%)
			author_url?: string, // 667918/2565838 (26.03%)
			cache_age?: number, // 11577/2565838 (0.45%)
			description?: string, // 79881/2565838 (3.11%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2083/2565838 (0.08%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2513298/2565838 (97.95%)
			thumbnail_url?: string, // 2554570/2565838 (99.56%)
			thumbnail_width?: number, // 2513298/2565838 (97.95%)
			title?: string, // 2554175/2565838 (99.55%)
			type: "video"|"rich",
			url?: string, // 40568/2565838 (1.58%)
			version: "1.0",
			width: number,
		}, // 2565838/3689362 (69.55%)
		reddit_video?: {
			bitrate_kbps?: number, // 1118575/1123458 (99.57%)
			dash_url?: string, // 1118575/1123458 (99.57%)
			duration?: number, // 1118575/1123458 (99.57%)
			fallback_url?: string, // 1118575/1123458 (99.57%)
			has_audio?: boolean, // 1118535/1123458 (99.56%)
			height: number|null,
			hls_url?: string, // 1118575/1123458 (99.57%)
			is_gif?: boolean, // 1118575/1123458 (99.57%)
			scrubber_media_url?: string, // 1118575/1123458 (99.57%)
			transcoding_message?: string, // 4883/1123458 (0.43%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1123458/3689362 (30.45%)
		type?: string, // 2565904/3689362 (69.55%)
	},
	media_embed: {
		content?: string, // 2524070/38022413 (6.64%)
		height?: number, // 2524070/38022413 (6.64%)
		scrolling?: boolean, // 2524070/38022413 (6.64%)
		width?: number, // 2524070/38022413 (6.64%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 23624/14861910 (0.16%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 14774605/14861910 (99.41%)
			hlsUrl?: string, // 23624/14861910 (0.16%)
			id?: string, // 14774605/14861910 (99.41%)
			isGif?: boolean, // 23624/14861910 (0.16%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 14750981/14861910 (99.25%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 6302587/14861910 (42.41%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14750981/14861910 (99.25%)
			s?: {
				gif?: string, // 261757/14750981 (1.77%)
				mp4?: string, // 261757/14750981 (1.77%)
				u?: string, // 14489224/14750981 (98.23%)
				x: number,
				y: number,
			}, // 14750981/14861910 (99.25%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 23624/14861910 (0.16%)
			y?: number, // 23624/14861910 (0.16%)
		},
	}|null, // 4375237/38022413 (11.51%)
	media_only: boolean,
	mobile_ad_url?: string, // 174228/38022413 (0.46%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 174228/38022413 (0.46%)
	outbound_link?: {
	}, // 174228/38022413 (0.46%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 18705/216781 (8.63%)
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
	}|null, // 65988/38022413 (0.17%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 18410352/38022413 (48.42%)
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
				}, // 623676/18511209 (3.37%)
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
				}, // 623676/18511209 (3.37%)
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
				}, // 9300981/18511209 (50.25%)
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
				}, // 9389596/18511209 (50.72%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1727885/1727899 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1727899/18511209 (9.33%)
	}, // 18511209/38022413 (48.68%)
	priority_id?: null, // 174228/38022413 (0.46%)
	product_ids?: [], // 174228/38022413 (0.46%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 174228/38022413 (0.46%)
	promoted?: boolean, // 174228/38022413 (0.46%)
	promoted_by?: null, // 174228/38022413 (0.46%)
	promoted_display_name?: null, // 174228/38022413 (0.46%)
	promoted_url?: null, // 174228/38022413 (0.46%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 3/38022413 (0.00%)
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1db9knzhqzdfp"|"1bsso361afr0r"|"1dxvueu5xr6li"|"1e10o36cfheg0"|"1dyuz6oa6heze"|"1dz4fdkz1m8h3"|"1dz397r8z9job"|"1dyyftlys1r7w"|"1dzu7w4jeag7b"|"1e2m3qnvdowd6"|"1e3g8vtbgtlb6"|"1e40yhyvjcv11", // 66/3689362 (0.00%)
		oembed?: {
			author_name?: string, // 668453/2565838 (26.05%)
			author_url?: string, // 667918/2565838 (26.03%)
			cache_age?: number, // 11577/2565838 (0.45%)
			description?: string, // 79881/2565838 (3.11%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2083/2565838 (0.08%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2513298/2565838 (97.95%)
			thumbnail_url?: string, // 2554570/2565838 (99.56%)
			thumbnail_width?: number, // 2513298/2565838 (97.95%)
			title?: string, // 2554175/2565838 (99.55%)
			type: "video"|"rich",
			url?: string, // 40568/2565838 (1.58%)
			version: "1.0",
			width: number,
		}, // 2565838/3689362 (69.55%)
		reddit_video?: {
			bitrate_kbps?: number, // 1118575/1123458 (99.57%)
			dash_url?: string, // 1118575/1123458 (99.57%)
			duration?: number, // 1118575/1123458 (99.57%)
			fallback_url?: string, // 1118575/1123458 (99.57%)
			has_audio?: boolean, // 1118535/1123458 (99.56%)
			height: number|null,
			hls_url?: string, // 1118575/1123458 (99.57%)
			is_gif?: boolean, // 1118575/1123458 (99.57%)
			scrubber_media_url?: string, // 1118575/1123458 (99.57%)
			transcoding_message?: string, // 4883/1123458 (0.43%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1123458/3689362 (30.45%)
		type?: string, // 2565904/3689362 (69.55%)
	},
	secure_media_embed: {
		content?: string, // 2524070/38022413 (6.64%)
		height?: number, // 2524070/38022413 (6.64%)
		media_domain_url?: string, // 2524070/38022413 (6.64%)
		scrolling?: boolean, // 2524070/38022413 (6.64%)
		width?: number, // 2524070/38022413 (6.64%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 174228/38022413 (0.46%)
	sk_ad_network_data?: null, // 174228/38022413 (0.46%)
	spam?: boolean, // 3/38022413 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 4913/38022413 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 174228/38022413 (0.46%)
	third_party_tracking?: null, // 174228/38022413 (0.46%)
	third_party_tracking_2?: null, // 174228/38022413 (0.46%)
	thumbnail: string,
	thumbnail_height?: number|null, // 38021475/38022413 (100.00%)
	thumbnail_width?: number|null, // 38021475/38022413 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22658158/38022413 (59.59%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}