interface RedditPost {
	_meta?: {
		edited_title?: string, // 44208/38553158 (0.11%)
		is_edited?: boolean, // 1482395/38553158 (3.85%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 7901123/38553158 (20.49%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7076330/38553158 (18.35%)
		was_initially_deleted?: boolean, // 824793/38553158 (2.14%)
	}, // 38553158/38776405 (99.42%)
	ad_business?: null, // 201196/38776405 (0.52%)
	ad_promoted_user_posts?: null, // 201196/38776405 (0.52%)
	ad_supplementary_text_md?: null|string, // 201196/38776405 (0.52%)
	ad_user_targeting?: null, // 201196/38776405 (0.52%)
	adserver_click_url?: null, // 201196/38776405 (0.52%)
	adserver_imp_pixel?: null, // 201196/38776405 (0.52%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 201196/38776405 (0.52%)
	approved?: boolean, // 1/38776405 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 108840/38776405 (0.28%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 999333/2733777 (36.56%)
		e: "text"|"emoji",
		t?: string, // 1734444/2733777 (63.44%)
		u?: string, // 999333/2733777 (36.56%)
	}[], // 38367067/38776405 (98.94%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 38367067/38776405 (98.94%)
	author_fullname?: string, // 38367067/38776405 (98.94%)
	author_id?: string|null, // 201196/38776405 (0.52%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 38367067/38776405 (98.94%)
	author_premium?: boolean, // 38367067/38776405 (98.94%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 162701/38776405 (0.42%)
	campaign_id?: null, // 201196/38776405 (0.52%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment"|"memes",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"writing"|"comics"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1417966/38776405 (3.66%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4269/1417766 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 44871/118022 (38.02%)
			e: "text"|"emoji",
			t?: string, // 73151/118022 (61.98%)
			u?: string, // 44871/118022 (38.02%)
		}[], // 1406460/1417766 (99.20%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1406460/1417766 (99.20%)
		author_fullname?: string, // 1406460/1417766 (99.20%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1406460/1417766 (99.20%)
		author_premium?: boolean, // 1406460/1417766 (99.20%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("photography"|"comics"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
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
				caption?: string, // 530513/1637805 (32.39%)
				id: number,
				media_id: string,
				outbound_url?: string, // 16773/1637805 (1.02%)
			}[],
		}|null, // 264608/1417766 (18.66%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 264608/1417766 (18.66%)
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
			a?: string, // 37161/249607 (14.89%)
			e: "text"|"emoji",
			t?: string, // 212446/249607 (85.11%)
			u?: string, // 37161/249607 (14.89%)
		}[],
		link_flair_template_id?: string, // 591116/1417766 (41.69%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 4/438583 (0.00%)
			oembed?: {
				author_name?: string, // 17224/294042 (5.86%)
				author_url?: string, // 17198/294042 (5.85%)
				cache_age?: number, // 183/294042 (0.06%)
				description?: string, // 2342/294042 (0.80%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 49/294042 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 284000/294042 (96.58%)
				thumbnail_url?: string, // 293887/294042 (99.95%)
				thumbnail_width?: number, // 284000/294042 (96.58%)
				title?: string, // 293965/294042 (99.97%)
				type: "video"|"rich",
				url?: string, // 937/294042 (0.32%)
				version: "1.0",
				width: number,
			}, // 294042/438583 (67.04%)
			reddit_video?: {
				bitrate_kbps?: number, // 144399/144537 (99.90%)
				dash_url?: string, // 144525/144537 (99.99%)
				duration?: number, // 144525/144537 (99.99%)
				fallback_url?: string, // 144525/144537 (99.99%)
				has_audio?: boolean, // 143477/144537 (99.27%)
				height: number|null,
				hls_url?: string, // 144525/144537 (99.99%)
				is_gif?: boolean, // 144525/144537 (99.99%)
				scrubber_media_url?: string, // 144525/144537 (99.99%)
				transcoding_message?: string, // 12/144537 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 144537/438583 (32.96%)
			type?: string, // 294046/438583 (67.04%)
		},
		media_embed: {
			content?: string, // 294046/1417766 (20.74%)
			height?: number, // 294046/1417766 (20.74%)
			scrolling?: boolean, // 294046/1417766 (20.74%)
			width?: number, // 294046/1417766 (20.74%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 787/1663517 (0.05%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1662616/1663517 (99.95%)
				hlsUrl?: string, // 787/1663517 (0.05%)
				id?: string, // 1662616/1663517 (99.95%)
				isGif?: boolean, // 787/1663517 (0.05%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1661829/1663517 (99.90%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1171380/1663517 (70.42%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1661829/1663517 (99.90%)
				s?: {
					gif?: string, // 82619/1661829 (4.97%)
					mp4?: string, // 82619/1661829 (4.97%)
					u?: string, // 1579210/1661829 (95.03%)
					x: number,
					y: number,
				}, // 1661829/1663517 (99.90%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 787/1663517 (0.05%)
				y?: number, // 787/1663517 (0.05%)
			},
		}|null, // 274874/1417766 (19.39%)
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
				vote_count?: number, // 130/3846 (3.38%)
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
		}|null, // 1107/1417766 (0.08%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 973619/1417766 (68.67%)
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
					}, // 39414/973619 (4.05%)
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
					}, // 39414/973619 (4.05%)
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
					}, // 562907/973619 (57.82%)
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
					}, // 565763/973619 (58.11%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 281301/281314 (100.00%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 281314/973619 (28.89%)
		}, // 973619/1417766 (68.67%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"copyright_takedown"|"automod_filtered"|"author"|"content_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 4/438583 (0.00%)
			oembed?: {
				author_name?: string, // 17224/294042 (5.86%)
				author_url?: string, // 17198/294042 (5.85%)
				cache_age?: number, // 183/294042 (0.06%)
				description?: string, // 2342/294042 (0.80%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 49/294042 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 284000/294042 (96.58%)
				thumbnail_url?: string, // 293887/294042 (99.95%)
				thumbnail_width?: number, // 284000/294042 (96.58%)
				title?: string, // 293965/294042 (99.97%)
				type: "video"|"rich",
				url?: string, // 937/294042 (0.32%)
				version: "1.0",
				width: number,
			}, // 294042/438583 (67.04%)
			reddit_video?: {
				bitrate_kbps?: number, // 144399/144537 (99.90%)
				dash_url?: string, // 144525/144537 (99.99%)
				duration?: number, // 144525/144537 (99.99%)
				fallback_url?: string, // 144525/144537 (99.99%)
				has_audio?: boolean, // 143477/144537 (99.27%)
				height: number|null,
				hls_url?: string, // 144525/144537 (99.99%)
				is_gif?: boolean, // 144525/144537 (99.99%)
				scrubber_media_url?: string, // 144525/144537 (99.99%)
				transcoding_message?: string, // 12/144537 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 144537/438583 (32.96%)
			type?: string, // 294046/438583 (67.04%)
		},
		secure_media_embed: {
			content?: string, // 294046/1417766 (20.74%)
			height?: number, // 294046/1417766 (20.74%)
			media_domain_url?: string, // 294046/1417766 (20.74%)
			scrolling?: boolean, // 294046/1417766 (20.74%)
			width?: number, // 294046/1417766 (20.74%)
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
		url_overridden_by_dest?: string, // 1238437/1417766 (87.35%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 1417966/38776405 (3.66%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 201196/38776405 (0.52%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 201196/38776405 (0.52%)
	embed_url?: null|string, // 201196/38776405 (0.52%)
	events?: [], // 201196/38776405 (0.52%)
	eventsOnRender?: [], // 201196/38776405 (0.52%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 63895/17274990 (0.37%)
			caption?: string, // 5837810/17274990 (33.79%)
			display_url?: string, // 70336/17274990 (0.41%)
			id: number,
			media_id: string,
			outbound_url?: string, // 96585/17274990 (0.56%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 11595/17274990 (0.07%)
		}[],
	}|null, // 4739156/38776405 (12.22%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 201196/38776405 (0.52%)
	id: string,
	ignore_reports?: boolean, // 1/38776405 (0.00%)
	impression_id?: null, // 201196/38776405 (0.52%)
	impression_id_str?: null, // 201196/38776405 (0.52%)
	is_blank?: boolean, // 201196/38776405 (0.52%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 4739156/38776405 (12.22%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 201196/38776405 (0.52%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1125034/9121401 (12.33%)
		e: "text"|"emoji",
		t?: string, // 7996367/9121401 (87.67%)
		u?: string, // 1125034/9121401 (12.33%)
	}[],
	link_flair_template_id?: string, // 17736452/38776405 (45.74%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1es9d44xh2kwf"|"1eseysjzdpdtz"|"1esyv5xh2lvpx"|"1etl6l44xesm5"|"1etrwcwnqnhm9"|"1ett32ynwntya"|"1euzppwvtnjhu"|"1evge4iia942t"|"1evyop75f5ucd"|"1ex4snn0j54bf"|"1exc1fhvfrhdp", // 47/3791013 (0.00%)
		oembed?: {
			author_name?: string, // 628325/2541173 (24.73%)
			author_url?: string, // 627797/2541173 (24.71%)
			cache_age?: number, // 16949/2541173 (0.67%)
			description?: string, // 80137/2541173 (3.15%)
			height?: number|null, // 2541172/2541173 (100.00%)
			html?: string, // 2541172/2541173 (100.00%)
			mean_alpha?: number, // 2356/2541173 (0.09%)
			provider_name?: string, // 2541172/2541173 (100.00%)
			provider_url?: string, // 2541172/2541173 (100.00%)
			thumbnail_height?: number, // 2501842/2541173 (98.45%)
			thumbnail_url?: string, // 2526068/2541173 (99.41%)
			thumbnail_width?: number, // 2501842/2541173 (98.45%)
			title?: string, // 2525652/2541173 (99.39%)
			type?: "video"|"rich", // 2541172/2541173 (100.00%)
			url?: string, // 44773/2541173 (1.76%)
			version?: "1.0", // 2541172/2541173 (100.00%)
			width?: number, // 2541172/2541173 (100.00%)
		}, // 2541173/3791013 (67.03%)
		reddit_video?: {
			bitrate_kbps?: number, // 1245948/1249793 (99.69%)
			dash_url?: string, // 1245948/1249793 (99.69%)
			duration?: number, // 1245948/1249793 (99.69%)
			fallback_url?: string, // 1245948/1249793 (99.69%)
			has_audio?: boolean, // 1245943/1249793 (99.69%)
			height: number|null,
			hls_url?: string, // 1245948/1249793 (99.69%)
			is_gif?: boolean, // 1245948/1249793 (99.69%)
			scrubber_media_url?: string, // 1245948/1249793 (99.69%)
			transcoding_message?: string, // 3845/1249793 (0.31%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1249793/3791013 (32.97%)
		type?: string, // 2541220/3791013 (67.03%)
	},
	media_embed: {
		content?: string, // 2381737/38776405 (6.14%)
		height?: number, // 2381737/38776405 (6.14%)
		scrolling?: boolean, // 2381737/38776405 (6.14%)
		width?: number, // 2381737/38776405 (6.14%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 15656/17761944 (0.09%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 17587595/17761944 (99.02%)
			hlsUrl?: string, // 15656/17761944 (0.09%)
			id?: string, // 17587595/17761944 (99.02%)
			isGif?: boolean, // 15656/17761944 (0.09%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 17571939/17761944 (98.93%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 8159764/17761944 (45.94%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 17571939/17761944 (98.93%)
			s?: {
				gif?: string, // 328996/17571939 (1.87%)
				mp4?: string, // 328996/17571939 (1.87%)
				u?: string, // 17242943/17571939 (98.13%)
				x: number,
				y: number,
			}, // 17571939/17761944 (98.93%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 15656/17761944 (0.09%)
			y?: number, // 15656/17761944 (0.09%)
		},
	}|null, // 5132163/38776405 (13.24%)
	media_only: boolean,
	mobile_ad_url?: string, // 201196/38776405 (0.52%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 201196/38776405 (0.52%)
	outbound_link?: {
	}, // 201196/38776405 (0.52%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 17001/136390 (12.46%)
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
	}|null, // 42512/38776405 (0.11%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 18105476/38776405 (46.69%)
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
				}, // 465285/18334984 (2.54%)
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
				}, // 465285/18334984 (2.54%)
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
				}, // 8827156/18334984 (48.14%)
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
				}, // 8923212/18334984 (48.67%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1736812/1736825 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1736825/18334984 (9.47%)
	}, // 18334984/38776405 (47.28%)
	priority_id?: null, // 201196/38776405 (0.52%)
	product_ids?: [], // 201196/38776405 (0.52%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 201196/38776405 (0.52%)
	promoted?: boolean, // 201196/38776405 (0.52%)
	promoted_by?: null, // 201196/38776405 (0.52%)
	promoted_display_name?: null, // 201196/38776405 (0.52%)
	promoted_url?: null, // 201196/38776405 (0.52%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 1/38776405 (0.00%)
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"community_ops"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1es9d44xh2kwf"|"1eseysjzdpdtz"|"1esyv5xh2lvpx"|"1etl6l44xesm5"|"1etrwcwnqnhm9"|"1ett32ynwntya"|"1euzppwvtnjhu"|"1evge4iia942t"|"1evyop75f5ucd"|"1ex4snn0j54bf"|"1exc1fhvfrhdp", // 47/3791013 (0.00%)
		oembed?: {
			author_name?: string, // 628325/2541173 (24.73%)
			author_url?: string, // 627797/2541173 (24.71%)
			cache_age?: number, // 16949/2541173 (0.67%)
			description?: string, // 80137/2541173 (3.15%)
			height?: number|null, // 2541172/2541173 (100.00%)
			html?: string, // 2541172/2541173 (100.00%)
			mean_alpha?: number, // 2356/2541173 (0.09%)
			provider_name?: string, // 2541172/2541173 (100.00%)
			provider_url?: string, // 2541172/2541173 (100.00%)
			thumbnail_height?: number, // 2501842/2541173 (98.45%)
			thumbnail_url?: string, // 2526068/2541173 (99.41%)
			thumbnail_width?: number, // 2501842/2541173 (98.45%)
			title?: string, // 2525652/2541173 (99.39%)
			type?: "video"|"rich", // 2541172/2541173 (100.00%)
			url?: string, // 44773/2541173 (1.76%)
			version?: "1.0", // 2541172/2541173 (100.00%)
			width?: number, // 2541172/2541173 (100.00%)
		}, // 2541173/3791013 (67.03%)
		reddit_video?: {
			bitrate_kbps?: number, // 1245948/1249793 (99.69%)
			dash_url?: string, // 1245948/1249793 (99.69%)
			duration?: number, // 1245948/1249793 (99.69%)
			fallback_url?: string, // 1245948/1249793 (99.69%)
			has_audio?: boolean, // 1245943/1249793 (99.69%)
			height: number|null,
			hls_url?: string, // 1245948/1249793 (99.69%)
			is_gif?: boolean, // 1245948/1249793 (99.69%)
			scrubber_media_url?: string, // 1245948/1249793 (99.69%)
			transcoding_message?: string, // 3845/1249793 (0.31%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1249793/3791013 (32.97%)
		type?: string, // 2541220/3791013 (67.03%)
	},
	secure_media_embed: {
		content?: string, // 2381737/38776405 (6.14%)
		height?: number, // 2381737/38776405 (6.14%)
		media_domain_url?: string, // 2381737/38776405 (6.14%)
		scrolling?: boolean, // 2381737/38776405 (6.14%)
		width?: number, // 2381737/38776405 (6.14%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 201196/38776405 (0.52%)
	sk_ad_network_data?: null, // 201196/38776405 (0.52%)
	spam?: boolean, // 1/38776405 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 4827/38776405 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 201196/38776405 (0.52%)
	third_party_tracking?: null, // 201196/38776405 (0.52%)
	third_party_tracking_2?: null, // 201196/38776405 (0.52%)
	thumbnail: string,
	thumbnail_height?: number|null, // 38775442/38776405 (100.00%)
	thumbnail_width?: number|null, // 38775442/38776405 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23336386/38776405 (60.18%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}