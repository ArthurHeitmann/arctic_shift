interface RedditPost {
	_meta?: {
		edited_title?: string, // 3054589/43014624 (7.10%)
		is_edited?: boolean, // 1969686/43014624 (4.58%)
		removal_type?: "deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown"|"community_ops", // 10282511/43014624 (23.90%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 9586542/43014624 (22.29%)
		was_initially_deleted?: boolean, // 695974/43014624 (1.62%)
	}, // 43014624/43793706 (98.22%)
	ad_business?: null, // 901510/43793706 (2.06%)
	ad_promoted_user_posts?: null, // 901510/43793706 (2.06%)
	ad_supplementary_text_md?: null|string, // 901510/43793706 (2.06%)
	ad_user_targeting?: null, // 901510/43793706 (2.06%)
	adserver_click_url?: null, // 901510/43793706 (2.06%)
	adserver_imp_pixel?: null, // 901510/43793706 (2.06%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 901510/43793706 (2.06%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 108250/43793706 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1086595/2882659 (37.69%)
		e: "text"|"emoji",
		t?: string, // 1796064/2882659 (62.31%)
		u?: string, // 1086595/2882659 (37.69%)
	}[], // 43019925/43793706 (98.23%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 43019925/43793706 (98.23%)
	author_fullname?: string, // 43019925/43793706 (98.23%)
	author_id?: string|null, // 901510/43793706 (2.06%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 43019925/43793706 (98.23%)
	author_premium?: boolean, // 43019925/43793706 (98.23%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 794161/43793706 (1.81%)
	campaign_id?: null, // 901510/43793706 (2.06%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3724553/43793706 (8.50%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 10419/3722197 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 87954/230649 (38.13%)
			e: "text"|"emoji",
			t?: string, // 142695/230649 (61.87%)
			u?: string, // 87954/230649 (38.13%)
		}[], // 3706637/3722197 (99.58%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 3706637/3722197 (99.58%)
		author_fullname?: string, // 3706637/3722197 (99.58%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3706637/3722197 (99.58%)
		author_premium?: boolean, // 3706637/3722197 (99.58%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"comics"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 1387684/4706752 (29.48%)
				id: number,
				is_deleted: boolean,
				media_id: string,
				outbound_url?: string, // 9723/4706752 (0.21%)
			}[],
		}|null, // 816745/3722197 (21.94%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 816745/3722197 (21.94%)
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
			a?: string, // 106021/731496 (14.49%)
			e: "text"|"emoji",
			t?: string, // 625475/731496 (85.51%)
			u?: string, // 106021/731496 (14.49%)
		}[],
		link_flair_template_id?: string, // 1678696/3722197 (45.10%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat: null|number,
		location_long: null|number,
		location_name: null|"France"|"London, Greater London"|"Columbus"|"London, England",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 54355/415481 (13.08%)
				author_url?: string, // 54337/415481 (13.08%)
				cache_age?: number, // 9/415481 (0.00%)
				description?: string, // 2442/415481 (0.59%)
				height?: number|null, // 415422/415481 (99.99%)
				html?: string, // 415480/415481 (100.00%)
				mean_alpha?: number, // 1/415481 (0.00%)
				provider_name?: string, // 415480/415481 (100.00%)
				provider_url?: string, // 415480/415481 (100.00%)
				thumbnail_height?: number, // 411082/415481 (98.94%)
				thumbnail_url?: string, // 415413/415481 (99.98%)
				thumbnail_width?: number, // 411082/415481 (98.94%)
				title?: string, // 415437/415481 (99.99%)
				type?: "video"|"rich", // 415480/415481 (100.00%)
				url?: string, // 49/415481 (0.01%)
				version?: "1.0", // 415480/415481 (100.00%)
				width?: number, // 415422/415481 (99.99%)
			}, // 415481/646755 (64.24%)
			reddit_video?: {
				bitrate_kbps?: number, // 230899/231274 (99.84%)
				dash_url?: string, // 231261/231274 (99.99%)
				duration?: number, // 231261/231274 (99.99%)
				fallback_url?: string, // 231261/231274 (99.99%)
				has_audio?: boolean, // 230038/231274 (99.47%)
				height: number|null,
				hls_url?: string, // 231261/231274 (99.99%)
				is_gif?: boolean, // 231261/231274 (99.99%)
				scrubber_media_url?: string, // 231261/231274 (99.99%)
				transcoding_message?: string, // 13/231274 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 231274/646755 (35.76%)
			type?: string, // 415481/646755 (64.24%)
		},
		media_embed: {
			content?: string|null, // 415423/3722197 (11.16%)
			height?: number, // 415423/3722197 (11.16%)
			scrolling?: boolean, // 415423/3722197 (11.16%)
			width?: number, // 415423/3722197 (11.16%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 2685/4779330 (0.06%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 4777095/4779330 (99.95%)
				hlsUrl?: string, // 2685/4779330 (0.06%)
				id?: string, // 4777095/4779330 (99.95%)
				isGif?: boolean, // 2685/4779330 (0.06%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 4774410/4779330 (99.90%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 3078090/4779330 (64.40%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 4774410/4779330 (99.90%)
				s?: {
					gif?: string, // 215122/4774410 (4.51%)
					mp4?: string, // 215122/4774410 (4.51%)
					u?: string, // 4559288/4774410 (95.49%)
					x: number,
					y: number,
				}, // 4774410/4779330 (99.90%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 2685/4779330 (0.06%)
				y?: number, // 2685/4779330 (0.06%)
			},
		}|null, // 848141/3722197 (22.79%)
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
		outbound_link?: {
			created: null|number,
			expiration: null|number,
			url: string,
		}, // 2611593/3722197 (70.16%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 389/12969 (3.00%)
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
		}|boolean|null, // 6590/3722197 (0.18%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1825975/3722197 (49.06%)
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
					}, // 12323/1825975 (0.67%)
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
					}, // 12323/1825975 (0.67%)
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
					}, // 909436/1825975 (49.81%)
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
					}, // 914363/1825975 (50.08%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 357215/357231 (100.00%)
				dash_url?: string, // 357226/357231 (100.00%)
				duration?: number, // 357226/357231 (100.00%)
				fallback_url?: string, // 357226/357231 (100.00%)
				has_audio?: boolean, // 349762/357231 (97.91%)
				height: number|null,
				hls_url?: string, // 357226/357231 (100.00%)
				is_gif?: boolean, // 357226/357231 (100.00%)
				scrubber_media_url?: string, // 357226/357231 (100.00%)
				transcoding_message?: string, // 5/357231 (0.00%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 357231/1825975 (19.56%)
		}, // 1825975/3722197 (49.06%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"author"|"automod_filtered"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 54355/415481 (13.08%)
				author_url?: string, // 54337/415481 (13.08%)
				cache_age?: number, // 9/415481 (0.00%)
				description?: string, // 2442/415481 (0.59%)
				height?: number|null, // 415422/415481 (99.99%)
				html?: string, // 415480/415481 (100.00%)
				mean_alpha?: number, // 1/415481 (0.00%)
				provider_name?: string, // 415480/415481 (100.00%)
				provider_url?: string, // 415480/415481 (100.00%)
				thumbnail_height?: number, // 411082/415481 (98.94%)
				thumbnail_url?: string, // 415413/415481 (99.98%)
				thumbnail_width?: number, // 411082/415481 (98.94%)
				title?: string, // 415437/415481 (99.99%)
				type?: "video"|"rich", // 415480/415481 (100.00%)
				url?: string, // 49/415481 (0.01%)
				version?: "1.0", // 415480/415481 (100.00%)
				width?: number, // 415422/415481 (99.99%)
			}, // 415481/646755 (64.24%)
			reddit_video?: {
				bitrate_kbps?: number, // 230899/231274 (99.84%)
				dash_url?: string, // 231261/231274 (99.99%)
				duration?: number, // 231261/231274 (99.99%)
				fallback_url?: string, // 231261/231274 (99.99%)
				has_audio?: boolean, // 230038/231274 (99.47%)
				height: number|null,
				hls_url?: string, // 231261/231274 (99.99%)
				is_gif?: boolean, // 231261/231274 (99.99%)
				scrubber_media_url?: string, // 231261/231274 (99.99%)
				transcoding_message?: string, // 13/231274 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 231274/646755 (35.76%)
			type?: string, // 415481/646755 (64.24%)
		},
		secure_media_embed: {
			content?: string|null, // 415423/3722197 (11.16%)
			height?: number, // 415423/3722197 (11.16%)
			media_domain_url?: string, // 415423/3722197 (11.16%)
			scrolling?: boolean, // 415423/3722197 (11.16%)
			width?: number, // 415423/3722197 (11.16%)
		},
		selftext: string,
		selftext_html: string|null,
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
		thumbnail_height?: number|null, // 3719098/3722197 (99.92%)
		thumbnail_width?: number|null, // 3719098/3722197 (99.92%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2611292/3722197 (70.15%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url: string,
		wls: null|number,
	}[], // 3724553/43793706 (8.50%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 901510/43793706 (2.06%)
	downs: number,
	edited: boolean|number,
	embed_type?: null, // 901510/43793706 (2.06%)
	embed_url?: null, // 901510/43793706 (2.06%)
	events?: [], // 901510/43793706 (2.06%)
	eventsOnRender?: [], // 901510/43793706 (2.06%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 198761/22757955 (0.87%)
			caption?: string, // 7039137/22757955 (30.93%)
			display_url?: string, // 199462/22757955 (0.88%)
			id: number,
			is_deleted: boolean,
			media_id: string,
			outbound_url?: string, // 233763/22757955 (1.03%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 108499/22757955 (0.48%)
		}[],
	}|null, // 6663063/43793706 (15.21%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 901510/43793706 (2.06%)
	id: string,
	impression_id?: null, // 901510/43793706 (2.06%)
	impression_id_str?: null, // 901510/43793706 (2.06%)
	is_blank?: boolean, // 901510/43793706 (2.06%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 6663063/43793706 (15.21%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 901510/43793706 (2.06%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1435978/10036630 (14.31%)
		e: "text"|"emoji",
		t?: string, // 8600652/10036630 (85.69%)
		u?: string, // 1435978/10036630 (14.31%)
	}[],
	link_flair_template_id?: string, // 20213369/43793706 (46.16%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat: null,
	location_long: null,
	location_name: null,
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 620445/2635374 (23.54%)
			author_url?: string, // 620445/2635374 (23.54%)
			cache_age?: number, // 179/2635374 (0.01%)
			description?: string, // 20407/2635374 (0.77%)
			height?: number, // 2634784/2635374 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2626020/2635374 (99.65%)
			thumbnail_url: string,
			thumbnail_width?: number, // 2626020/2635374 (99.65%)
			title?: string, // 2634809/2635374 (99.98%)
			type: "video"|"rich",
			url?: string, // 1382/2635374 (0.05%)
			version: "1.0",
			width?: number, // 2634784/2635374 (99.98%)
		}, // 2635374/4086156 (64.50%)
		reddit_video?: {
			bitrate_kbps?: number, // 1447824/1450782 (99.80%)
			dash_url?: string, // 1447824/1450782 (99.80%)
			duration?: number, // 1447824/1450782 (99.80%)
			fallback_url?: string, // 1447824/1450782 (99.80%)
			has_audio?: boolean, // 1447816/1450782 (99.80%)
			height: number|null,
			hls_url?: string, // 1447824/1450782 (99.80%)
			is_gif?: boolean, // 1447824/1450782 (99.80%)
			scrubber_media_url?: string, // 1447824/1450782 (99.80%)
			transcoding_message?: string, // 2958/1450782 (0.20%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1450782/4086156 (35.50%)
		type?: string, // 2635374/4086156 (64.50%)
	},
	media_embed: {
		content?: string, // 2633516/43793706 (6.01%)
		height?: number, // 2633516/43793706 (6.01%)
		scrolling?: boolean, // 2633516/43793706 (6.01%)
		width?: number, // 2633516/43793706 (6.01%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 14623/23220234 (0.06%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 23110601/23220234 (99.53%)
			hlsUrl?: string, // 14623/23220234 (0.06%)
			id?: string, // 23110601/23220234 (99.53%)
			isGif?: boolean, // 14623/23220234 (0.06%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 23095978/23220234 (99.46%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 12663875/23220234 (54.54%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 23095978/23220234 (99.46%)
			s?: {
				gif?: string, // 442022/23095978 (1.91%)
				mp4?: string, // 442022/23095978 (1.91%)
				u?: string, // 22653956/23095978 (98.09%)
				x: number,
				y: number,
			}, // 23095978/23220234 (99.46%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 14623/23220234 (0.06%)
			y?: number, // 14623/23220234 (0.06%)
		},
	}|null, // 6994939/43793706 (15.97%)
	media_only: boolean,
	mobile_ad_url?: string, // 901510/43793706 (2.06%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 901510/43793706 (2.06%)
	outbound_link?: {
		created?: null|number, // 26640029/27541539 (96.73%)
		expiration?: null|number, // 26640029/27541539 (96.73%)
		url?: string, // 26640029/27541539 (96.73%)
	}, // 27541539/43793706 (62.89%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 17021/169001 (10.07%)
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
	}|null, // 2706394/43793706 (6.18%)
	post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video", // 18443309/43793706 (42.11%)
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
				}, // 322570/18525729 (1.74%)
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
				}, // 322570/18525729 (1.74%)
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
				}, // 8429025/18525729 (45.50%)
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
				}, // 8512438/18525729 (45.95%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1967083/1967310 (99.99%)
			dash_url?: string, // 1967094/1967310 (99.99%)
			duration?: number, // 1967094/1967310 (99.99%)
			fallback_url?: string, // 1967094/1967310 (99.99%)
			has_audio?: boolean, // 1959628/1967310 (99.61%)
			height: number|null,
			hls_url?: string, // 1967094/1967310 (99.99%)
			is_gif?: boolean, // 1967094/1967310 (99.99%)
			scrubber_media_url?: string, // 1967094/1967310 (99.99%)
			transcoding_message?: string, // 216/1967310 (0.01%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 1967310/18525729 (10.62%)
	}, // 18525729/43793706 (42.30%)
	priority_id?: null, // 901510/43793706 (2.06%)
	product_ids?: [], // 901510/43793706 (2.06%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 901510/43793706 (2.06%)
	promoted?: boolean, // 901510/43793706 (2.06%)
	promoted_by?: null, // 901510/43793706 (2.06%)
	promoted_display_name?: null, // 901510/43793706 (2.06%)
	promoted_url?: null, // 901510/43793706 (2.06%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 620445/2635374 (23.54%)
			author_url?: string, // 620445/2635374 (23.54%)
			cache_age?: number, // 179/2635374 (0.01%)
			description?: string, // 20407/2635374 (0.77%)
			height?: number, // 2634784/2635374 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2626020/2635374 (99.65%)
			thumbnail_url: string,
			thumbnail_width?: number, // 2626020/2635374 (99.65%)
			title?: string, // 2634809/2635374 (99.98%)
			type: "video"|"rich",
			url?: string, // 1382/2635374 (0.05%)
			version: "1.0",
			width?: number, // 2634784/2635374 (99.98%)
		}, // 2635374/4086156 (64.50%)
		reddit_video?: {
			bitrate_kbps?: number, // 1447824/1450782 (99.80%)
			dash_url?: string, // 1447824/1450782 (99.80%)
			duration?: number, // 1447824/1450782 (99.80%)
			fallback_url?: string, // 1447824/1450782 (99.80%)
			has_audio?: boolean, // 1447816/1450782 (99.80%)
			height: number|null,
			hls_url?: string, // 1447824/1450782 (99.80%)
			is_gif?: boolean, // 1447824/1450782 (99.80%)
			scrubber_media_url?: string, // 1447824/1450782 (99.80%)
			transcoding_message?: string, // 2958/1450782 (0.20%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1450782/4086156 (35.50%)
		type?: string, // 2635374/4086156 (64.50%)
	},
	secure_media_embed: {
		content?: string, // 2633516/43793706 (6.01%)
		height?: number, // 2633516/43793706 (6.01%)
		media_domain_url?: string, // 2633516/43793706 (6.01%)
		scrolling?: boolean, // 2633516/43793706 (6.01%)
		width?: number, // 2633516/43793706 (6.01%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 901510/43793706 (2.06%)
	sk_ad_network_data?: null, // 901510/43793706 (2.06%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 17979/43793706 (0.04%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 901510/43793706 (2.06%)
	third_party_tracking?: null, // 901510/43793706 (2.06%)
	third_party_tracking_2?: null, // 901510/43793706 (2.06%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 43416421/43793706 (99.14%)
	thumbnail_width?: number|null, // 43416421/43793706 (99.14%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 27493190/43793706 (62.78%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url: string,
	wls: null|number,
}