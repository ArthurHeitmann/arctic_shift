interface RedditPost {
	_meta?: {
		edited_title?: string, // 2572091/45563718 (5.65%)
		is_edited?: boolean, // 1633169/45563718 (3.58%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 9664104/45563718 (21.21%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 8874414/45563718 (19.48%)
		was_initially_deleted?: boolean, // 789690/45563718 (1.73%)
	}, // 45563718/46094846 (98.85%)
	ad_business?: null, // 365471/46094846 (0.79%)
	ad_promoted_user_posts?: null, // 365471/46094846 (0.79%)
	ad_supplementary_text_md?: null|string, // 365471/46094846 (0.79%)
	ad_user_targeting?: null, // 365471/46094846 (0.79%)
	adserver_click_url?: null, // 365471/46094846 (0.79%)
	adserver_imp_pixel?: null, // 365471/46094846 (0.79%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 365471/46094846 (0.79%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 131425/46094846 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1153344/3114522 (37.03%)
		e: "text"|"emoji",
		t?: string, // 1961178/3114522 (62.97%)
		u?: string, // 1153344/3114522 (37.03%)
	}[], // 45530022/46094846 (98.77%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 45530022/46094846 (98.77%)
	author_fullname?: string, // 45530022/46094846 (98.77%)
	author_id?: string|null, // 365471/46094846 (0.79%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 45530022/46094846 (98.77%)
	author_premium?: boolean, // 45530022/46094846 (98.77%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 300233/46094846 (0.65%)
	campaign_id?: null, // 365471/46094846 (0.79%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("entertainment"|"gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3203923/46094846 (6.95%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 9871/3202683 (0.31%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 77871/205054 (37.98%)
			e: "text"|"emoji",
			t?: string, // 127183/205054 (62.02%)
			u?: string, // 77871/205054 (37.98%)
		}[], // 3188343/3202683 (99.55%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 3188343/3202683 (99.55%)
		author_fullname?: string, // 3188343/3202683 (99.55%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3188343/3202683 (99.55%)
		author_premium?: boolean, // 3188343/3202683 (99.55%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"entertainment",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"entertainment"|"comics"|"gaming"|"diy_and_crafts"|"writing"|"music"|"videos")[],
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
				caption?: string, // 1243147/4027931 (30.86%)
				id: number,
				media_id: string,
				outbound_url?: string, // 11140/4027931 (0.28%)
			}[],
		}|null, // 713142/3202683 (22.27%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 713142/3202683 (22.27%)
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
			a?: string, // 74502/581291 (12.82%)
			e: "text"|"emoji",
			t?: string, // 506789/581291 (87.18%)
			u?: string, // 74502/581291 (12.82%)
		}[],
		link_flair_template_id?: string, // 1342943/3202683 (41.93%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "1gb1jdg62n0id", // 1/525503 (0.00%)
			oembed?: {
				author_name?: string, // 36697/267356 (13.73%)
				author_url?: string, // 36687/267356 (13.72%)
				cache_age?: number, // 13/267356 (0.00%)
				description?: string, // 1717/267356 (0.64%)
				height?: number|null, // 267315/267356 (99.98%)
				html: string,
				mean_alpha?: number, // 3/267356 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 261220/267356 (97.70%)
				thumbnail_url?: string, // 267298/267356 (99.98%)
				thumbnail_width?: number, // 261220/267356 (97.70%)
				title?: string, // 267276/267356 (99.97%)
				type: "video"|"rich",
				url?: string, // 67/267356 (0.03%)
				version: "1.0",
				width?: number, // 267315/267356 (99.98%)
			}, // 267356/525503 (50.88%)
			reddit_video?: {
				bitrate_kbps?: number, // 257913/258146 (99.91%)
				dash_url?: string, // 258124/258146 (99.99%)
				duration?: number, // 258124/258146 (99.99%)
				fallback_url?: string, // 258124/258146 (99.99%)
				has_audio?: boolean, // 256838/258146 (99.49%)
				height: number|null,
				hls_url?: string, // 258124/258146 (99.99%)
				is_gif?: boolean, // 258124/258146 (99.99%)
				scrubber_media_url?: string, // 258124/258146 (99.99%)
				transcoding_message?: string, // 22/258146 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 258146/525503 (49.12%)
			type?: string, // 267357/525503 (50.88%)
		},
		media_embed: {
			content?: string, // 267316/3202683 (8.35%)
			height?: number, // 267316/3202683 (8.35%)
			scrolling?: boolean, // 267316/3202683 (8.35%)
			width?: number, // 267316/3202683 (8.35%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3437/4107441 (0.08%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 4098740/4107441 (99.79%)
				hlsUrl?: string, // 3437/4107441 (0.08%)
				id?: string, // 4098740/4107441 (99.79%)
				isGif?: boolean, // 3437/4107441 (0.08%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 4095303/4107441 (99.70%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2770602/4107441 (67.45%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 4095303/4107441 (99.70%)
				s?: {
					gif?: string, // 167760/4095303 (4.10%)
					mp4?: string, // 167760/4095303 (4.10%)
					u?: string, // 3927543/4095303 (95.90%)
					x: number,
					y: number,
				}, // 4095303/4107441 (99.70%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 3437/4107441 (0.08%)
				y?: number, // 3437/4107441 (0.08%)
			},
		}|null, // 752041/3202683 (23.48%)
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
				vote_count?: number, // 185/8793 (2.10%)
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
		}|boolean|null, // 3723/3202683 (0.12%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1648730/3202683 (51.48%)
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
					}, // 16754/1648730 (1.02%)
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
					}, // 16754/1648730 (1.02%)
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
					}, // 830958/1648730 (50.40%)
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
					}, // 836775/1648730 (50.75%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 229013/229058 (99.98%)
				dash_url?: string, // 229022/229058 (99.98%)
				duration?: number, // 229022/229058 (99.98%)
				fallback_url?: string, // 229022/229058 (99.98%)
				has_audio?: boolean, // 201693/229058 (88.05%)
				height: number|null,
				hls_url?: string, // 229022/229058 (99.98%)
				is_gif?: boolean, // 229022/229058 (99.98%)
				scrubber_media_url?: string, // 229022/229058 (99.98%)
				transcoding_message?: string, // 36/229058 (0.02%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 229058/1648730 (13.89%)
		}, // 1648730/3202683 (51.48%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "1gb1jdg62n0id", // 1/525503 (0.00%)
			oembed?: {
				author_name?: string, // 36697/267356 (13.73%)
				author_url?: string, // 36687/267356 (13.72%)
				cache_age?: number, // 13/267356 (0.00%)
				description?: string, // 1717/267356 (0.64%)
				height?: number|null, // 267315/267356 (99.98%)
				html: string,
				mean_alpha?: number, // 3/267356 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 261220/267356 (97.70%)
				thumbnail_url?: string, // 267298/267356 (99.98%)
				thumbnail_width?: number, // 261220/267356 (97.70%)
				title?: string, // 267276/267356 (99.97%)
				type: "video"|"rich",
				url?: string, // 67/267356 (0.03%)
				version: "1.0",
				width?: number, // 267315/267356 (99.98%)
			}, // 267356/525503 (50.88%)
			reddit_video?: {
				bitrate_kbps?: number, // 257913/258146 (99.91%)
				dash_url?: string, // 258124/258146 (99.99%)
				duration?: number, // 258124/258146 (99.99%)
				fallback_url?: string, // 258124/258146 (99.99%)
				has_audio?: boolean, // 256838/258146 (99.49%)
				height: number|null,
				hls_url?: string, // 258124/258146 (99.99%)
				is_gif?: boolean, // 258124/258146 (99.99%)
				scrubber_media_url?: string, // 258124/258146 (99.99%)
				transcoding_message?: string, // 22/258146 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 258146/525503 (49.12%)
			type?: string, // 267357/525503 (50.88%)
		},
		secure_media_embed: {
			content?: string, // 267316/3202683 (8.35%)
			height?: number, // 267316/3202683 (8.35%)
			media_domain_url?: string, // 267316/3202683 (8.35%)
			scrolling?: boolean, // 267316/3202683 (8.35%)
			width?: number, // 267316/3202683 (8.35%)
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
		thumbnail_height?: number|null, // 3201310/3202683 (99.96%)
		thumbnail_width?: number|null, // 3201310/3202683 (99.96%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2364338/3202683 (73.82%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 3203923/46094846 (6.95%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 365471/46094846 (0.79%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 365471/46094846 (0.79%)
	embed_url?: null|string, // 365471/46094846 (0.79%)
	events?: [], // 365471/46094846 (0.79%)
	eventsOnRender?: [], // 365471/46094846 (0.79%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 86594/21799476 (0.40%)
			caption?: string, // 7278893/21799476 (33.39%)
			display_url?: string, // 99467/21799476 (0.46%)
			id: number,
			media_id: string,
			outbound_url?: string, // 116848/21799476 (0.54%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 24084/21799476 (0.11%)
		}[],
	}|null, // 5800262/46094846 (12.58%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 365471/46094846 (0.79%)
	id: string,
	impression_id?: null, // 365471/46094846 (0.79%)
	impression_id_str?: null, // 365471/46094846 (0.79%)
	is_blank?: boolean, // 365471/46094846 (0.79%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5800262/46094846 (12.58%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 365471/46094846 (0.79%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1352799/10584626 (12.78%)
		e: "text"|"emoji",
		t?: string, // 9231827/10584626 (87.22%)
		u?: string, // 1352799/10584626 (12.78%)
	}[],
	link_flair_template_id?: string, // 21225475/46094846 (46.05%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1gb1jdg62n0id"|"1gcc3eo5tbnyg"|"1gd4b1ehygx4q"|"1gdvgrjqc0f6h"|"1geii69dhjn3m"|"1gfa9d82waui0"|"1gfcnzlyj8xam"|"1gfx58033m6nz"|"1gg3isch9dxpn", // 42/4716890 (0.00%)
		oembed?: {
			author_name?: string, // 609617/3305787 (18.44%)
			author_url?: string, // 609616/3305787 (18.44%)
			cache_age?: number, // 49/3305787 (0.00%)
			description?: string, // 15739/3305787 (0.48%)
			height?: number|null, // 3305242/3305787 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3277814/3305787 (99.15%)
			thumbnail_url?: string, // 3305784/3305787 (100.00%)
			thumbnail_width?: number, // 3277814/3305787 (99.15%)
			title?: string, // 3305004/3305787 (99.98%)
			type: "video"|"rich",
			url?: string, // 1986/3305787 (0.06%)
			version: "1.0",
			width?: number, // 3305242/3305787 (99.98%)
		}, // 3305787/4716890 (70.08%)
		reddit_video?: {
			bitrate_kbps?: number, // 1404249/1411061 (99.52%)
			dash_url?: string, // 1404249/1411061 (99.52%)
			duration?: number, // 1404249/1411061 (99.52%)
			fallback_url?: string, // 1404249/1411061 (99.52%)
			has_audio?: boolean, // 1404236/1411061 (99.52%)
			height: number|null,
			hls_url?: string, // 1404249/1411061 (99.52%)
			is_gif?: boolean, // 1404249/1411061 (99.52%)
			scrubber_media_url?: string, // 1404249/1411061 (99.52%)
			transcoding_message?: string, // 6812/1411061 (0.48%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1411061/4716890 (29.92%)
		type?: string, // 3305829/4716890 (70.08%)
	},
	media_embed: {
		content?: string, // 674983/46094846 (1.46%)
		height?: number, // 674983/46094846 (1.46%)
		scrolling?: boolean, // 674983/46094846 (1.46%)
		width?: number, // 674983/46094846 (1.46%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 25278/22441891 (0.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 21972899/22441891 (97.91%)
			hlsUrl?: string, // 25278/22441891 (0.11%)
			id?: string, // 21972899/22441891 (97.91%)
			isGif?: boolean, // 25278/22441891 (0.11%)
			m?: "image/jpg"|"image/png"|"image/jpeg"|"image/gif", // 21947621/22441891 (97.80%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 11169684/22441891 (49.77%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 21947621/22441891 (97.80%)
			s?: {
				gif?: string, // 464971/21947621 (2.12%)
				mp4?: string, // 464971/21947621 (2.12%)
				u?: string, // 21482650/21947621 (97.88%)
				x: number,
				y: number,
			}, // 21947621/22441891 (97.80%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 25278/22441891 (0.11%)
			y?: number, // 25278/22441891 (0.11%)
		},
	}|null, // 6284547/46094846 (13.63%)
	media_only: boolean,
	mobile_ad_url?: string, // 365471/46094846 (0.79%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 365471/46094846 (0.79%)
	outbound_link?: {
	}, // 365471/46094846 (0.79%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 16182/120963 (13.38%)
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
	}|null, // 2920998/46094846 (6.34%)
	post_hint?: "image"|"hosted:video"|"link"|"rich:video"|"self"|"gallery"|"video", // 17109784/46094846 (37.12%)
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
				}, // 480112/20319029 (2.36%)
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
				}, // 480112/20319029 (2.36%)
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
				}, // 10653774/20319029 (52.43%)
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
				}, // 10743234/20319029 (52.87%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2341191/2343366 (99.91%)
			dash_url?: string, // 2341204/2343366 (99.91%)
			duration?: number, // 2341204/2343366 (99.91%)
			fallback_url?: string, // 2341204/2343366 (99.91%)
			has_audio?: boolean, // 2310893/2343366 (98.61%)
			height: number|null,
			hls_url?: string, // 2341204/2343366 (99.91%)
			is_gif?: boolean, // 2341204/2343366 (99.91%)
			scrubber_media_url?: string, // 2341204/2343366 (99.91%)
			transcoding_message?: string, // 2162/2343366 (0.09%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 2343366/20319029 (11.53%)
	}, // 20319029/46094846 (44.08%)
	priority_id?: null, // 365471/46094846 (0.79%)
	product_ids?: [], // 365471/46094846 (0.79%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 365471/46094846 (0.79%)
	promoted?: boolean, // 365471/46094846 (0.79%)
	promoted_by?: null, // 365471/46094846 (0.79%)
	promoted_display_name?: null, // 365471/46094846 (0.79%)
	promoted_url?: null, // 365471/46094846 (0.79%)
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
		event_id?: "18hnzysb1elcs"|"1gb1jdg62n0id"|"1gcc3eo5tbnyg"|"1gd4b1ehygx4q"|"1gdvgrjqc0f6h"|"1geii69dhjn3m"|"1gfa9d82waui0"|"1gfcnzlyj8xam"|"1gfx58033m6nz"|"1gg3isch9dxpn", // 42/4716890 (0.00%)
		oembed?: {
			author_name?: string, // 609617/3305787 (18.44%)
			author_url?: string, // 609616/3305787 (18.44%)
			cache_age?: number, // 49/3305787 (0.00%)
			description?: string, // 15739/3305787 (0.48%)
			height?: number|null, // 3305242/3305787 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3277814/3305787 (99.15%)
			thumbnail_url?: string, // 3305784/3305787 (100.00%)
			thumbnail_width?: number, // 3277814/3305787 (99.15%)
			title?: string, // 3305004/3305787 (99.98%)
			type: "video"|"rich",
			url?: string, // 1986/3305787 (0.06%)
			version: "1.0",
			width?: number, // 3305242/3305787 (99.98%)
		}, // 3305787/4716890 (70.08%)
		reddit_video?: {
			bitrate_kbps?: number, // 1404249/1411061 (99.52%)
			dash_url?: string, // 1404249/1411061 (99.52%)
			duration?: number, // 1404249/1411061 (99.52%)
			fallback_url?: string, // 1404249/1411061 (99.52%)
			has_audio?: boolean, // 1404236/1411061 (99.52%)
			height: number|null,
			hls_url?: string, // 1404249/1411061 (99.52%)
			is_gif?: boolean, // 1404249/1411061 (99.52%)
			scrubber_media_url?: string, // 1404249/1411061 (99.52%)
			transcoding_message?: string, // 6812/1411061 (0.48%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1411061/4716890 (29.92%)
		type?: string, // 3305829/4716890 (70.08%)
	},
	secure_media_embed: {
		content?: string, // 674983/46094846 (1.46%)
		height?: number, // 674983/46094846 (1.46%)
		media_domain_url?: string, // 674983/46094846 (1.46%)
		scrolling?: boolean, // 674983/46094846 (1.46%)
		width?: number, // 674983/46094846 (1.46%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 365471/46094846 (0.79%)
	sk_ad_network_data?: null, // 365471/46094846 (0.79%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 12747/46094846 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 365471/46094846 (0.79%)
	third_party_tracking?: null, // 365471/46094846 (0.79%)
	third_party_tracking_2?: null, // 365471/46094846 (0.79%)
	thumbnail: string|null,
	thumbnail_height?: null|number, // 45731423/46094846 (99.21%)
	thumbnail_width?: null|number, // 45731423/46094846 (99.21%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 29106657/46094846 (63.15%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}