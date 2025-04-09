interface RedditPost {
	_meta?: {
		corrupted_selftext?: string, // 1/39141923 (0.00%)
		edited_title?: string, // 46369/39141923 (0.12%)
		is_edited?: boolean, // 1556285/39141923 (3.98%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8072171/39141923 (20.62%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7226245/39141923 (18.46%)
		was_initially_deleted?: boolean, // 845926/39141923 (2.16%)
	}, // 39141923/39637989 (98.75%)
	ad_business?: null, // 202853/39637989 (0.51%)
	ad_promoted_user_posts?: null, // 202853/39637989 (0.51%)
	ad_supplementary_text_md?: null|string, // 202853/39637989 (0.51%)
	ad_user_targeting?: null, // 202853/39637989 (0.51%)
	adserver_click_url?: null, // 202853/39637989 (0.51%)
	adserver_imp_pixel?: null, // 202853/39637989 (0.51%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 202853/39637989 (0.51%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 106873/39637989 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1051885/2852158 (36.88%)
		e: "text"|"emoji",
		t?: string, // 1800273/2852158 (63.12%)
		u?: string, // 1051885/2852158 (36.88%)
	}[], // 39277788/39637989 (99.09%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 39277788/39637989 (99.09%)
	author_fullname?: string, // 39277788/39637989 (99.09%)
	author_id?: string|null, // 202853/39637989 (0.51%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 39277788/39637989 (99.09%)
	author_premium?: boolean, // 39277788/39637989 (99.09%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 165560/39637989 (0.42%)
	campaign_id?: null, // 202853/39637989 (0.51%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment"|"drawing_and_painting",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1424804/39637989 (3.59%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4023/1424618 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 45168/122766 (36.79%)
			e: "text"|"emoji",
			t?: string, // 77598/122766 (63.21%)
			u?: string, // 45168/122766 (36.79%)
		}[], // 1413823/1424618 (99.24%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1413823/1424618 (99.24%)
		author_fullname?: string, // 1413823/1424618 (99.24%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1413823/1424618 (99.24%)
		author_premium?: boolean, // 1413823/1424618 (99.24%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts",
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
				caption?: string, // 547171/1638159 (33.40%)
				id: number,
				media_id: string,
				outbound_url?: string, // 16285/1638159 (0.99%)
			}[],
		}|null, // 260999/1424618 (18.32%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 260999/1424618 (18.32%)
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
			a?: string, // 38482/260362 (14.78%)
			e: "text"|"emoji",
			t?: string, // 221880/260362 (85.22%)
			u?: string, // 38482/260362 (14.78%)
		}[],
		link_flair_template_id?: string, // 588203/1424618 (41.29%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 1/439735 (0.00%)
			oembed?: {
				author_name?: string, // 20679/297486 (6.95%)
				author_url?: string, // 20592/297486 (6.92%)
				cache_age?: number, // 286/297486 (0.10%)
				description?: string, // 3097/297486 (1.04%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 79/297486 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 287516/297486 (96.65%)
				thumbnail_url?: string, // 297325/297486 (99.95%)
				thumbnail_width?: number, // 287516/297486 (96.65%)
				title?: string, // 297388/297486 (99.97%)
				type: "video"|"rich",
				url?: string, // 1390/297486 (0.47%)
				version: "1.0",
				width: number,
			}, // 297486/439735 (67.65%)
			reddit_video?: {
				bitrate_kbps?: number, // 142073/142248 (99.88%)
				dash_url?: string, // 142240/142248 (99.99%)
				duration?: number, // 142240/142248 (99.99%)
				fallback_url?: string, // 142240/142248 (99.99%)
				has_audio?: boolean, // 141041/142248 (99.15%)
				height: number|null,
				hls_url?: string, // 142240/142248 (99.99%)
				is_gif?: boolean, // 142240/142248 (99.99%)
				scrubber_media_url?: string, // 142240/142248 (99.99%)
				transcoding_message?: string, // 8/142248 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 142248/439735 (32.35%)
			type?: string, // 297487/439735 (67.65%)
		},
		media_embed: {
			content?: string, // 297487/1424618 (20.88%)
			height?: number, // 297487/1424618 (20.88%)
			scrolling?: boolean, // 297487/1424618 (20.88%)
			width?: number, // 297487/1424618 (20.88%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1008/1671138 (0.06%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1670370/1671138 (99.95%)
				hlsUrl?: string, // 1008/1671138 (0.06%)
				id?: string, // 1670370/1671138 (99.95%)
				isGif?: boolean, // 1008/1671138 (0.06%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 1669362/1671138 (99.89%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1148506/1671138 (68.73%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1669362/1671138 (99.89%)
				s?: {
					gif?: string, // 78078/1669362 (4.68%)
					mp4?: string, // 78078/1669362 (4.68%)
					u?: string, // 1591284/1669362 (95.32%)
					x: number,
					y: number,
				}, // 1669362/1671138 (99.89%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1008/1671138 (0.06%)
				y?: number, // 1008/1671138 (0.06%)
			},
		}|null, // 273440/1424618 (19.19%)
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
				vote_count?: number, // 244/5132 (4.75%)
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
		}|null, // 1437/1424618 (0.10%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 996152/1424618 (69.92%)
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
					}, // 40241/996152 (4.04%)
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
					}, // 40241/996152 (4.04%)
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
					}, // 560101/996152 (56.23%)
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
					}, // 563052/996152 (56.52%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 279458/279474 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 279474/996152 (28.06%)
		}, // 996152/1424618 (69.92%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"automod_filtered"|"content_takedown"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 1/439735 (0.00%)
			oembed?: {
				author_name?: string, // 20679/297486 (6.95%)
				author_url?: string, // 20592/297486 (6.92%)
				cache_age?: number, // 286/297486 (0.10%)
				description?: string, // 3097/297486 (1.04%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 79/297486 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 287516/297486 (96.65%)
				thumbnail_url?: string, // 297325/297486 (99.95%)
				thumbnail_width?: number, // 287516/297486 (96.65%)
				title?: string, // 297388/297486 (99.97%)
				type: "video"|"rich",
				url?: string, // 1390/297486 (0.47%)
				version: "1.0",
				width: number,
			}, // 297486/439735 (67.65%)
			reddit_video?: {
				bitrate_kbps?: number, // 142073/142248 (99.88%)
				dash_url?: string, // 142240/142248 (99.99%)
				duration?: number, // 142240/142248 (99.99%)
				fallback_url?: string, // 142240/142248 (99.99%)
				has_audio?: boolean, // 141041/142248 (99.15%)
				height: number|null,
				hls_url?: string, // 142240/142248 (99.99%)
				is_gif?: boolean, // 142240/142248 (99.99%)
				scrubber_media_url?: string, // 142240/142248 (99.99%)
				transcoding_message?: string, // 8/142248 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 142248/439735 (32.35%)
			type?: string, // 297487/439735 (67.65%)
		},
		secure_media_embed: {
			content?: string, // 297487/1424618 (20.88%)
			height?: number, // 297487/1424618 (20.88%)
			media_domain_url?: string, // 297487/1424618 (20.88%)
			scrolling?: boolean, // 297487/1424618 (20.88%)
			width?: number, // 297487/1424618 (20.88%)
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
		url_overridden_by_dest?: string, // 1241936/1424618 (87.18%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 1424804/39637989 (3.59%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 202853/39637989 (0.51%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 202853/39637989 (0.51%)
	embed_url?: null|string, // 202853/39637989 (0.51%)
	events?: [], // 202853/39637989 (0.51%)
	eventsOnRender?: [], // 202853/39637989 (0.51%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 85366/17578014 (0.49%)
			caption?: string, // 5948569/17578014 (33.84%)
			display_url?: string, // 92753/17578014 (0.53%)
			id: number,
			media_id: string,
			outbound_url?: string, // 121791/17578014 (0.69%)
			product?: {
				description: string,
				price?: string, // 13940/13944 (99.97%)
				title: string,
			}, // 13944/17578014 (0.08%)
		}[],
	}|null, // 4780882/39637989 (12.06%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 202853/39637989 (0.51%)
	id: string,
	impression_id?: null, // 202853/39637989 (0.51%)
	impression_id_str?: null, // 202853/39637989 (0.51%)
	is_blank?: boolean, // 202853/39637989 (0.51%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 4780882/39637989 (12.06%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 202853/39637989 (0.51%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1172427/9411777 (12.46%)
		e: "text"|"emoji",
		t?: string, // 8239350/9411777 (87.54%)
		u?: string, // 1172427/9411777 (12.46%)
	}[],
	link_flair_template_id?: string, // 18253582/39637989 (46.05%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1em1ot9fmqm9h"|"1emodsfdspirp"|"1enfflxkaqx9w"|"1eo8vw1ss83o3"|"1ersqmg5rq6m7", // 49/3807399 (0.00%)
		oembed?: {
			author_name?: string, // 666965/2557890 (26.07%)
			author_url?: string, // 666443/2557890 (26.05%)
			cache_age?: number, // 20824/2557890 (0.81%)
			description?: string, // 77100/2557890 (3.01%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2710/2557890 (0.11%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2516724/2557890 (98.39%)
			thumbnail_url?: string, // 2539493/2557890 (99.28%)
			thumbnail_width?: number, // 2516724/2557890 (98.39%)
			title?: string, // 2538966/2557890 (99.26%)
			type: "video"|"rich",
			url?: string, // 51460/2557890 (2.01%)
			version: "1.0",
			width: number,
		}, // 2557890/3807399 (67.18%)
		reddit_video?: {
			bitrate_kbps?: number, // 1245668/1249460 (99.70%)
			dash_url?: string, // 1245673/1249460 (99.70%)
			duration?: number, // 1245673/1249460 (99.70%)
			fallback_url?: string, // 1245673/1249460 (99.70%)
			has_audio?: boolean, // 1245641/1249460 (99.69%)
			height: number|null,
			hls_url?: string, // 1245673/1249460 (99.70%)
			is_gif?: boolean, // 1245673/1249460 (99.70%)
			scrubber_media_url?: string, // 1245673/1249460 (99.70%)
			transcoding_message?: string, // 3787/1249460 (0.30%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1249460/3807399 (32.82%)
		type?: string, // 2557939/3807399 (67.18%)
	},
	media_embed: {
		content?: string, // 2510078/39637989 (6.33%)
		height?: number, // 2510078/39637989 (6.33%)
		scrolling?: boolean, // 2510078/39637989 (6.33%)
		width?: number, // 2510078/39637989 (6.33%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 18298/18194257 (0.10%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 17975661/18194257 (98.80%)
			hlsUrl?: string, // 18298/18194257 (0.10%)
			id?: string, // 17975661/18194257 (98.80%)
			isGif?: boolean, // 18298/18194257 (0.10%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 17957363/18194257 (98.70%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 8027537/18194257 (44.12%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 17957363/18194257 (98.70%)
			s?: {
				gif?: string, // 346484/17957363 (1.93%)
				mp4?: string, // 346484/17957363 (1.93%)
				u?: string, // 17610879/17957363 (98.07%)
				x: number,
				y: number,
			}, // 17957363/18194257 (98.70%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 18298/18194257 (0.10%)
			y?: number, // 18298/18194257 (0.10%)
		},
	}|null, // 5266079/39637989 (13.29%)
	media_only: boolean,
	mobile_ad_url?: string, // 202853/39637989 (0.51%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 202853/39637989 (0.51%)
	outbound_link?: {
	}, // 202853/39637989 (0.51%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 18105/181135 (10.00%)
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
	}|null, // 57476/39637989 (0.15%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 18547465/39637989 (46.79%)
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
				}, // 484810/18652591 (2.60%)
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
				}, // 484810/18652591 (2.60%)
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
				}, // 8829032/18652591 (47.33%)
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
				}, // 8930126/18652591 (47.88%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1754149/1754165 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1754165/18652591 (9.40%)
	}, // 18652591/39637989 (47.06%)
	priority_id?: null, // 202853/39637989 (0.51%)
	product_ids?: [], // 202853/39637989 (0.51%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 202853/39637989 (0.51%)
	promoted?: boolean, // 202853/39637989 (0.51%)
	promoted_by?: null, // 202853/39637989 (0.51%)
	promoted_display_name?: null, // 202853/39637989 (0.51%)
	promoted_url?: null, // 202853/39637989 (0.51%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"community_ops"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1em1ot9fmqm9h"|"1emodsfdspirp"|"1enfflxkaqx9w"|"1eo8vw1ss83o3"|"1ersqmg5rq6m7", // 49/3807399 (0.00%)
		oembed?: {
			author_name?: string, // 666965/2557890 (26.07%)
			author_url?: string, // 666443/2557890 (26.05%)
			cache_age?: number, // 20824/2557890 (0.81%)
			description?: string, // 77100/2557890 (3.01%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2710/2557890 (0.11%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2516724/2557890 (98.39%)
			thumbnail_url?: string, // 2539493/2557890 (99.28%)
			thumbnail_width?: number, // 2516724/2557890 (98.39%)
			title?: string, // 2538966/2557890 (99.26%)
			type: "video"|"rich",
			url?: string, // 51460/2557890 (2.01%)
			version: "1.0",
			width: number,
		}, // 2557890/3807399 (67.18%)
		reddit_video?: {
			bitrate_kbps?: number, // 1245668/1249460 (99.70%)
			dash_url?: string, // 1245673/1249460 (99.70%)
			duration?: number, // 1245673/1249460 (99.70%)
			fallback_url?: string, // 1245673/1249460 (99.70%)
			has_audio?: boolean, // 1245641/1249460 (99.69%)
			height: number|null,
			hls_url?: string, // 1245673/1249460 (99.70%)
			is_gif?: boolean, // 1245673/1249460 (99.70%)
			scrubber_media_url?: string, // 1245673/1249460 (99.70%)
			transcoding_message?: string, // 3787/1249460 (0.30%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1249460/3807399 (32.82%)
		type?: string, // 2557939/3807399 (67.18%)
	},
	secure_media_embed: {
		content?: string, // 2510078/39637989 (6.33%)
		height?: number, // 2510078/39637989 (6.33%)
		media_domain_url?: string, // 2510078/39637989 (6.33%)
		scrolling?: boolean, // 2510078/39637989 (6.33%)
		width?: number, // 2510078/39637989 (6.33%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 202853/39637989 (0.51%)
	sk_ad_network_data?: null, // 202853/39637989 (0.51%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 5398/39637989 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 202853/39637989 (0.51%)
	third_party_tracking?: null, // 202853/39637989 (0.51%)
	third_party_tracking_2?: null, // 202853/39637989 (0.51%)
	thumbnail: string,
	thumbnail_height?: number|null, // 39636916/39637989 (100.00%)
	thumbnail_width?: number|null, // 39636916/39637989 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23578842/39637989 (59.49%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}