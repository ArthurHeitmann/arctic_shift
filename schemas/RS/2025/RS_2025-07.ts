interface RedditPost {
	_meta?: {
		edited_title?: string, // 49728/42313717 (0.12%)
		is_edited?: boolean, // 1556747/42313717 (3.68%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8886894/42313717 (21.00%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 8046810/42313717 (19.02%)
		was_initially_deleted?: boolean, // 840084/42313717 (1.99%)
	}, // 42313717/42900690 (98.63%)
	ad_business?: null, // 236744/42900690 (0.55%)
	ad_promoted_user_posts?: null, // 236744/42900690 (0.55%)
	ad_supplementary_text_md?: null|string, // 236744/42900690 (0.55%)
	ad_user_targeting?: null, // 236744/42900690 (0.55%)
	adserver_click_url?: null, // 236744/42900690 (0.55%)
	adserver_imp_pixel?: null, // 236744/42900690 (0.55%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 236744/42900690 (0.55%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 123974/42900690 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1025759/2857862 (35.89%)
		e: "text"|"emoji",
		t?: string, // 1832103/2857862 (64.11%)
		u?: string, // 1025759/2857862 (35.89%)
	}[], // 42495359/42900690 (99.06%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 42495359/42900690 (99.06%)
	author_fullname?: string, // 42495359/42900690 (99.06%)
	author_id?: string|null, // 236744/42900690 (0.55%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 42495359/42900690 (99.06%)
	author_premium?: boolean, // 42495359/42900690 (99.06%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 185211/42900690 (0.43%)
	campaign_id?: null, // 236744/42900690 (0.55%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"writing"|"comics"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 2253873/42900690 (5.25%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 6697/2253552 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 61846/162833 (37.98%)
			e: "text"|"emoji",
			t?: string, // 100987/162833 (62.02%)
			u?: string, // 61846/162833 (37.98%)
		}[], // 2239506/2253552 (99.38%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 2239506/2253552 (99.38%)
		author_fullname?: string, // 2239506/2253552 (99.38%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 2239506/2253552 (99.38%)
		author_premium?: boolean, // 2239506/2253552 (99.38%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"animals"|"videos"|"photography",
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
				caption?: string, // 855246/2487585 (34.38%)
				id: number,
				media_id: string,
				outbound_url?: string, // 10808/2487585 (0.43%)
			}[],
		}|null, // 449296/2253552 (19.94%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 449296/2253552 (19.94%)
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
			a?: string, // 59349/414887 (14.30%)
			e: "text"|"emoji",
			t?: string, // 355538/414887 (85.70%)
			u?: string, // 59349/414887 (14.30%)
		}[],
		link_flair_template_id?: string, // 929769/2253552 (41.26%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 25762/337447 (7.63%)
				author_url?: string, // 25736/337447 (7.63%)
				cache_age?: number, // 69/337447 (0.02%)
				description?: string, // 1758/337447 (0.52%)
				height?: number|null, // 337444/337447 (100.00%)
				html?: string, // 337446/337447 (100.00%)
				mean_alpha?: number, // 15/337447 (0.00%)
				provider_name?: string, // 337446/337447 (100.00%)
				provider_url?: string, // 337446/337447 (100.00%)
				thumbnail_height?: number, // 326003/337447 (96.61%)
				thumbnail_url?: string, // 337332/337447 (99.97%)
				thumbnail_width?: number, // 326003/337447 (96.61%)
				title?: string, // 337372/337447 (99.98%)
				type?: "video"|"rich", // 337446/337447 (100.00%)
				url?: string, // 412/337447 (0.12%)
				version?: "1.0", // 337446/337447 (100.00%)
				width?: number, // 337444/337447 (100.00%)
			}, // 337447/514877 (65.54%)
			reddit_video?: {
				bitrate_kbps?: number, // 177241/177430 (99.89%)
				dash_url?: string, // 177398/177430 (99.98%)
				duration?: number, // 177398/177430 (99.98%)
				fallback_url?: string, // 177398/177430 (99.98%)
				has_audio?: boolean, // 176266/177430 (99.34%)
				height: number|null,
				hls_url?: string, // 177398/177430 (99.98%)
				is_gif?: boolean, // 177398/177430 (99.98%)
				scrubber_media_url?: string, // 177398/177430 (99.98%)
				transcoding_message?: string, // 32/177430 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 177430/514877 (34.46%)
			type?: string, // 337447/514877 (65.54%)
		},
		media_embed: {
			content?: string|null, // 337445/2253552 (14.97%)
			height?: number, // 337445/2253552 (14.97%)
			scrolling?: boolean, // 337445/2253552 (14.97%)
			width?: number, // 337445/2253552 (14.97%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1349/2522879 (0.05%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 2519872/2522879 (99.88%)
				hlsUrl?: string, // 1349/2522879 (0.05%)
				id?: string, // 2519872/2522879 (99.88%)
				isGif?: boolean, // 1349/2522879 (0.05%)
				m?: "image/jpg"|"image/png"|"image/gif", // 2518523/2522879 (99.83%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1645274/2522879 (65.21%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 2518523/2522879 (99.83%)
				s?: {
					gif?: string, // 86415/2518523 (3.43%)
					mp4?: string, // 86415/2518523 (3.43%)
					u?: string, // 2432108/2518523 (96.57%)
					x: number,
					y: number,
				}, // 2518523/2522879 (99.83%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1349/2522879 (0.05%)
				y?: number, // 1349/2522879 (0.05%)
			},
		}|null, // 464321/2253552 (20.60%)
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
				vote_count?: number, // 258/7358 (3.51%)
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
		}|null, // 2116/2253552 (0.09%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1332898/2253552 (59.15%)
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
					}, // 49194/1332898 (3.69%)
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
					}, // 49194/1332898 (3.69%)
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
					}, // 761372/1332898 (57.12%)
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
					}, // 767003/1332898 (57.54%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 310586/310601 (100.00%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 310601/1332898 (23.30%)
		}, // 1332898/2253552 (59.15%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 25762/337447 (7.63%)
				author_url?: string, // 25736/337447 (7.63%)
				cache_age?: number, // 69/337447 (0.02%)
				description?: string, // 1758/337447 (0.52%)
				height?: number|null, // 337444/337447 (100.00%)
				html?: string, // 337446/337447 (100.00%)
				mean_alpha?: number, // 15/337447 (0.00%)
				provider_name?: string, // 337446/337447 (100.00%)
				provider_url?: string, // 337446/337447 (100.00%)
				thumbnail_height?: number, // 326003/337447 (96.61%)
				thumbnail_url?: string, // 337332/337447 (99.97%)
				thumbnail_width?: number, // 326003/337447 (96.61%)
				title?: string, // 337372/337447 (99.98%)
				type?: "video"|"rich", // 337446/337447 (100.00%)
				url?: string, // 412/337447 (0.12%)
				version?: "1.0", // 337446/337447 (100.00%)
				width?: number, // 337444/337447 (100.00%)
			}, // 337447/514877 (65.54%)
			reddit_video?: {
				bitrate_kbps?: number, // 177241/177430 (99.89%)
				dash_url?: string, // 177398/177430 (99.98%)
				duration?: number, // 177398/177430 (99.98%)
				fallback_url?: string, // 177398/177430 (99.98%)
				has_audio?: boolean, // 176266/177430 (99.34%)
				height: number|null,
				hls_url?: string, // 177398/177430 (99.98%)
				is_gif?: boolean, // 177398/177430 (99.98%)
				scrubber_media_url?: string, // 177398/177430 (99.98%)
				transcoding_message?: string, // 32/177430 (0.02%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 177430/514877 (34.46%)
			type?: string, // 337447/514877 (65.54%)
		},
		secure_media_embed: {
			content?: string|null, // 337445/2253552 (14.97%)
			height?: number, // 337445/2253552 (14.97%)
			media_domain_url?: string, // 337445/2253552 (14.97%)
			scrolling?: boolean, // 337445/2253552 (14.97%)
			width?: number, // 337445/2253552 (14.97%)
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
		url_overridden_by_dest?: string, // 1768946/2253552 (78.50%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 2253873/42900690 (5.25%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 236744/42900690 (0.55%)
	downs: number,
	edited: boolean|number,
	embed_type?: null, // 236744/42900690 (0.55%)
	embed_url?: null, // 236744/42900690 (0.55%)
	events?: [], // 236744/42900690 (0.55%)
	eventsOnRender?: [], // 236744/42900690 (0.55%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 74345/19669485 (0.38%)
			caption?: string, // 6520734/19669485 (33.15%)
			display_url?: string, // 79942/19669485 (0.41%)
			id: number,
			media_id: string,
			outbound_url?: string, // 113963/19669485 (0.58%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 13000/19669485 (0.07%)
		}[],
	}|null, // 5306140/42900690 (12.37%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 236744/42900690 (0.55%)
	id: string,
	impression_id?: null, // 236744/42900690 (0.55%)
	impression_id_str?: null, // 236744/42900690 (0.55%)
	is_blank?: boolean, // 236744/42900690 (0.55%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5306140/42900690 (12.37%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 236744/42900690 (0.55%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1181444/10013322 (11.80%)
		e: "text"|"emoji",
		t?: string, // 8831878/10013322 (88.20%)
		u?: string, // 1181444/10013322 (11.80%)
	}[],
	link_flair_template_id?: string, // 19771988/42900690 (46.09%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1fb2btt1xv92k"|"1fbckdo1ufukc", // 32/4297624 (0.00%)
		oembed?: {
			author_name?: string, // 665937/2926500 (22.76%)
			author_url?: string, // 665578/2926500 (22.74%)
			cache_age?: number, // 7984/2926500 (0.27%)
			description?: string, // 24622/2926500 (0.84%)
			height?: number|null, // 2926461/2926500 (100.00%)
			html?: string, // 2926497/2926500 (100.00%)
			mean_alpha?: number, // 94/2926500 (0.00%)
			provider_name?: string, // 2926497/2926500 (100.00%)
			provider_url?: string, // 2926497/2926500 (100.00%)
			thumbnail_height?: number, // 2881617/2926500 (98.47%)
			thumbnail_url?: string, // 2918779/2926500 (99.74%)
			thumbnail_width?: number, // 2881617/2926500 (98.47%)
			title?: string, // 2918464/2926500 (99.73%)
			type?: "video"|"rich", // 2926497/2926500 (100.00%)
			url?: string, // 16284/2926500 (0.56%)
			version?: "1.0", // 2926497/2926500 (100.00%)
			width?: number, // 2926461/2926500 (100.00%)
		}, // 2926500/4297624 (68.10%)
		reddit_video?: {
			bitrate_kbps?: number, // 1365025/1371092 (99.56%)
			dash_url?: string, // 1365025/1371092 (99.56%)
			duration?: number, // 1365025/1371092 (99.56%)
			fallback_url?: string, // 1365025/1371092 (99.56%)
			has_audio?: boolean, // 1365014/1371092 (99.56%)
			height: number|null,
			hls_url?: string, // 1365025/1371092 (99.56%)
			is_gif?: boolean, // 1365025/1371092 (99.56%)
			scrubber_media_url?: string, // 1365025/1371092 (99.56%)
			transcoding_message?: string, // 6067/1371092 (0.44%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1371092/4297624 (31.90%)
		type?: string, // 2926532/4297624 (68.10%)
	},
	media_embed: {
		content?: string, // 830526/42900690 (1.94%)
		height?: number, // 830526/42900690 (1.94%)
		scrolling?: boolean, // 830526/42900690 (1.94%)
		width?: number, // 830526/42900690 (1.94%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 22189/20275780 (0.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 20021338/20275780 (98.75%)
			hlsUrl?: string, // 22189/20275780 (0.11%)
			id?: string, // 20021338/20275780 (98.75%)
			isGif?: boolean, // 22189/20275780 (0.11%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 19999149/20275780 (98.64%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 9529476/20275780 (47.00%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 19999149/20275780 (98.64%)
			s?: {
				gif?: string, // 347470/19999149 (1.74%)
				mp4?: string, // 347470/19999149 (1.74%)
				u?: string, // 19651679/19999149 (98.26%)
				x: number,
				y: number,
			}, // 19999149/20275780 (98.64%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 22189/20275780 (0.11%)
			y?: number, // 22189/20275780 (0.11%)
		},
	}|null, // 5779570/42900690 (13.47%)
	media_only: boolean,
	mobile_ad_url?: string, // 236744/42900690 (0.55%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 236744/42900690 (0.55%)
	outbound_link?: {
	}, // 236744/42900690 (0.55%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 16585/139205 (11.91%)
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
	}|null, // 42693/42900690 (0.10%)
	post_hint?: "image"|"hosted:video"|"link"|"rich:video"|"self"|"gallery"|"video", // 16693663/42900690 (38.91%)
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
				}, // 513948/19167650 (2.68%)
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
				}, // 513948/19167650 (2.68%)
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
				}, // 9832044/19167650 (51.29%)
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
				}, // 9935965/19167650 (51.84%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1860173/1860188 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1860188/19167650 (9.70%)
	}, // 19167650/42900690 (44.68%)
	priority_id?: null, // 236744/42900690 (0.55%)
	product_ids?: [], // 236744/42900690 (0.55%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 236744/42900690 (0.55%)
	promoted?: boolean, // 236744/42900690 (0.55%)
	promoted_by?: null, // 236744/42900690 (0.55%)
	promoted_display_name?: null, // 236744/42900690 (0.55%)
	promoted_url?: null, // 236744/42900690 (0.55%)
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
		event_id?: "18hnzysb1elcs"|"1fb2btt1xv92k"|"1fbckdo1ufukc", // 32/4297624 (0.00%)
		oembed?: {
			author_name?: string, // 665937/2926500 (22.76%)
			author_url?: string, // 665578/2926500 (22.74%)
			cache_age?: number, // 7984/2926500 (0.27%)
			description?: string, // 24622/2926500 (0.84%)
			height?: number|null, // 2926461/2926500 (100.00%)
			html?: string, // 2926497/2926500 (100.00%)
			mean_alpha?: number, // 94/2926500 (0.00%)
			provider_name?: string, // 2926497/2926500 (100.00%)
			provider_url?: string, // 2926497/2926500 (100.00%)
			thumbnail_height?: number, // 2881617/2926500 (98.47%)
			thumbnail_url?: string, // 2918779/2926500 (99.74%)
			thumbnail_width?: number, // 2881617/2926500 (98.47%)
			title?: string, // 2918464/2926500 (99.73%)
			type?: "video"|"rich", // 2926497/2926500 (100.00%)
			url?: string, // 16284/2926500 (0.56%)
			version?: "1.0", // 2926497/2926500 (100.00%)
			width?: number, // 2926461/2926500 (100.00%)
		}, // 2926500/4297624 (68.10%)
		reddit_video?: {
			bitrate_kbps?: number, // 1365025/1371092 (99.56%)
			dash_url?: string, // 1365025/1371092 (99.56%)
			duration?: number, // 1365025/1371092 (99.56%)
			fallback_url?: string, // 1365025/1371092 (99.56%)
			has_audio?: boolean, // 1365014/1371092 (99.56%)
			height: number|null,
			hls_url?: string, // 1365025/1371092 (99.56%)
			is_gif?: boolean, // 1365025/1371092 (99.56%)
			scrubber_media_url?: string, // 1365025/1371092 (99.56%)
			transcoding_message?: string, // 6067/1371092 (0.44%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1371092/4297624 (31.90%)
		type?: string, // 2926532/4297624 (68.10%)
	},
	secure_media_embed: {
		content?: string, // 830526/42900690 (1.94%)
		height?: number, // 830526/42900690 (1.94%)
		media_domain_url?: string, // 830526/42900690 (1.94%)
		scrolling?: boolean, // 830526/42900690 (1.94%)
		width?: number, // 830526/42900690 (1.94%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 236744/42900690 (0.55%)
	sk_ad_network_data?: null, // 236744/42900690 (0.55%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 9651/42900690 (0.02%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 236744/42900690 (0.55%)
	third_party_tracking?: null, // 236744/42900690 (0.55%)
	third_party_tracking_2?: null, // 236744/42900690 (0.55%)
	thumbnail: string,
	thumbnail_height?: null|number, // 42899922/42900690 (100.00%)
	thumbnail_width?: null|number, // 42899922/42900690 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 26303809/42900690 (61.31%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}