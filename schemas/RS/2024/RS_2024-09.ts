interface RedditPost {
	_meta?: {
		edited_title?: string, // 101865/38049813 (0.27%)
		is_edited?: boolean, // 1473622/38049813 (3.87%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 7867753/38049813 (20.68%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7145175/38049813 (18.78%)
		was_initially_deleted?: boolean, // 722578/38049813 (1.90%)
	}, // 38049813/38596941 (98.58%)
	ad_business?: null, // 154493/38596941 (0.40%)
	ad_promoted_user_posts?: null|[], // 154493/38596941 (0.40%)
	ad_supplementary_text_md?: null|string, // 154493/38596941 (0.40%)
	ad_user_targeting?: null, // 154493/38596941 (0.40%)
	adserver_click_url?: null, // 154493/38596941 (0.40%)
	adserver_imp_pixel?: null, // 154493/38596941 (0.40%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 154493/38596941 (0.40%)
	approved?: boolean, // 5/38596941 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 97277/38596941 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 940328/2480049 (37.92%)
		e: "text"|"emoji",
		t?: string, // 1539721/2480049 (62.08%)
		u?: string, // 940328/2480049 (37.92%)
	}[], // 38136725/38596941 (98.81%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 38136725/38596941 (98.81%)
	author_fullname?: string, // 38136725/38596941 (98.81%)
	author_id?: string|null, // 154493/38596941 (0.40%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 38136725/38596941 (98.81%)
	author_premium?: boolean, // 38136725/38596941 (98.81%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Apply Now"|"Order Now"|"Contact Us"|"Watch Now"|"Get a Quote"|"Get Showtimes"|"Pre-order Now"|"See Menu", // 120445/38596941 (0.31%)
	campaign_id?: null, // 154493/38596941 (0.40%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment"|"photography",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"music"|"comics"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1274669/38596941 (3.30%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3801/1274493 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 38833/107311 (36.19%)
			e: "text"|"emoji",
			t?: string, // 68478/107311 (63.81%)
			u?: string, // 38833/107311 (36.19%)
		}[], // 1262891/1274493 (99.09%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1262891/1274493 (99.09%)
		author_fullname?: string, // 1262891/1274493 (99.09%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1262891/1274493 (99.09%)
		author_premium?: boolean, // 1262891/1274493 (99.09%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"animals"|"photography"|"entertainment",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
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
				caption?: string, // 477291/1308891 (36.47%)
				id: number,
				media_id: string,
				outbound_url?: string, // 44296/1308891 (3.38%)
			}[],
		}|null, // 206656/1274493 (16.21%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 206656/1274493 (16.21%)
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
			a?: string, // 27938/216445 (12.91%)
			e: "text"|"emoji",
			t?: string, // 188507/216445 (87.09%)
			u?: string, // 27938/216445 (12.91%)
		}[],
		link_flair_template_id?: string, // 492550/1274493 (38.65%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "1bsso361afr0r"|"18hnzysb1elcs"|"t8jnufucss07", // 4/371999 (0.00%)
			oembed?: {
				author_name?: string, // 18170/247371 (7.35%)
				author_url?: string, // 18106/247371 (7.32%)
				cache_age?: number, // 575/247371 (0.23%)
				description?: string, // 2080/247371 (0.84%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 73/247371 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 236376/247371 (95.56%)
				thumbnail_url?: string, // 246611/247371 (99.69%)
				thumbnail_width?: number, // 236376/247371 (95.56%)
				title?: string, // 246778/247371 (99.76%)
				type: "video"|"rich",
				url?: string, // 1320/247371 (0.53%)
				version: "1.0",
				width: number,
			}, // 247371/371999 (66.50%)
			reddit_video?: {
				bitrate_kbps?: number, // 124352/124624 (99.78%)
				dash_url?: string, // 124613/124624 (99.99%)
				duration?: number, // 124613/124624 (99.99%)
				fallback_url?: string, // 124613/124624 (99.99%)
				has_audio?: boolean, // 121965/124624 (97.87%)
				height: number|null,
				hls_url?: string, // 124613/124624 (99.99%)
				is_gif?: boolean, // 124613/124624 (99.99%)
				scrubber_media_url?: string, // 124613/124624 (99.99%)
				transcoding_message?: string, // 11/124624 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 124624/371999 (33.50%)
			type?: string, // 247375/371999 (66.50%)
		},
		media_embed: {
			content?: string, // 247375/1274493 (19.41%)
			height?: number, // 247375/1274493 (19.41%)
			scrolling?: boolean, // 247375/1274493 (19.41%)
			width?: number, // 247375/1274493 (19.41%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1535/1342102 (0.11%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1341430/1342102 (99.95%)
				hlsUrl?: string, // 1535/1342102 (0.11%)
				id?: string, // 1341430/1342102 (99.95%)
				isGif?: boolean, // 1535/1342102 (0.11%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1339895/1342102 (99.84%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 929380/1342102 (69.25%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1339895/1342102 (99.84%)
				s?: {
					gif?: string, // 71496/1339895 (5.34%)
					mp4?: string, // 71496/1339895 (5.34%)
					u?: string, // 1268399/1339895 (94.66%)
					x: number,
					y: number,
				}, // 1339895/1342102 (99.84%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1535/1342102 (0.11%)
				y?: number, // 1535/1342102 (0.11%)
			},
		}|null, // 220642/1274493 (17.31%)
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
		parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 204/5182 (3.94%)
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
		}|null, // 1411/1274493 (0.11%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 930662/1274493 (73.02%)
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
					}, // 59846/930662 (6.43%)
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
					}, // 59846/930662 (6.43%)
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
					}, // 553358/930662 (59.46%)
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
					}, // 555319/930662 (59.67%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 237694/237722 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 237722/930662 (25.54%)
		}, // 930662/1274493 (73.02%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "1bsso361afr0r"|"18hnzysb1elcs"|"t8jnufucss07", // 4/371999 (0.00%)
			oembed?: {
				author_name?: string, // 18170/247371 (7.35%)
				author_url?: string, // 18106/247371 (7.32%)
				cache_age?: number, // 575/247371 (0.23%)
				description?: string, // 2080/247371 (0.84%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 73/247371 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 236376/247371 (95.56%)
				thumbnail_url?: string, // 246611/247371 (99.69%)
				thumbnail_width?: number, // 236376/247371 (95.56%)
				title?: string, // 246778/247371 (99.76%)
				type: "video"|"rich",
				url?: string, // 1320/247371 (0.53%)
				version: "1.0",
				width: number,
			}, // 247371/371999 (66.50%)
			reddit_video?: {
				bitrate_kbps?: number, // 124352/124624 (99.78%)
				dash_url?: string, // 124613/124624 (99.99%)
				duration?: number, // 124613/124624 (99.99%)
				fallback_url?: string, // 124613/124624 (99.99%)
				has_audio?: boolean, // 121965/124624 (97.87%)
				height: number|null,
				hls_url?: string, // 124613/124624 (99.99%)
				is_gif?: boolean, // 124613/124624 (99.99%)
				scrubber_media_url?: string, // 124613/124624 (99.99%)
				transcoding_message?: string, // 11/124624 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 124624/371999 (33.50%)
			type?: string, // 247375/371999 (66.50%)
		},
		secure_media_embed: {
			content?: string, // 247375/1274493 (19.41%)
			height?: number, // 247375/1274493 (19.41%)
			media_domain_url?: string, // 247375/1274493 (19.41%)
			scrolling?: boolean, // 247375/1274493 (19.41%)
			width?: number, // 247375/1274493 (19.41%)
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
		url_overridden_by_dest?: string, // 1120881/1274493 (87.95%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: null|"all_ads"|"some_ads"|"house_only",
		wls: null|number,
	}[], // 1274669/38596941 (3.30%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 154493/38596941 (0.40%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 154493/38596941 (0.40%)
	embed_url?: null|string, // 154493/38596941 (0.40%)
	events?: [], // 154493/38596941 (0.40%)
	eventsOnRender?: [], // 154493/38596941 (0.40%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Download"|"Sign Up"|"View More"|"Play Now"|"Install"|"Order Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"Pre-order Now"|"Apply Now"|"Watch Now"|"See Menu", // 62146/13519841 (0.46%)
			caption?: string, // 4786191/13519841 (35.40%)
			display_url?: string, // 68340/13519841 (0.51%)
			id: number,
			media_id: string,
			outbound_url?: string, // 98504/13519841 (0.73%)
			product?: {
				description: string,
				price?: string, // 10307/11212 (91.93%)
				title: string,
			}, // 11212/13519841 (0.08%)
		}[],
	}|null, // 3687078/38596941 (9.55%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 154493/38596941 (0.40%)
	id: string,
	ignore_reports?: boolean, // 5/38596941 (0.00%)
	impression_id?: null, // 154493/38596941 (0.40%)
	impression_id_str?: null, // 154493/38596941 (0.40%)
	is_blank?: boolean, // 154493/38596941 (0.40%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3687078/38596941 (9.55%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 154493/38596941 (0.40%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 920337/8467671 (10.87%)
		e: "text"|"emoji",
		t?: string, // 7547334/8467671 (89.13%)
		u?: string, // 920337/8467671 (10.87%)
	}[],
	link_flair_template_id?: string, // 16640708/38596941 (43.11%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 448/3482151 (0.01%)
		oembed?: {
			author_name?: string, // 667013/2370804 (28.13%)
			author_url?: string, // 666347/2370804 (28.11%)
			cache_age?: number, // 15512/2370804 (0.65%)
			description?: string, // 82695/2370804 (3.49%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2336/2370804 (0.10%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2321208/2370804 (97.91%)
			thumbnail_url?: string, // 2355502/2370804 (99.35%)
			thumbnail_width?: number, // 2321208/2370804 (97.91%)
			title?: string, // 2354979/2370804 (99.33%)
			type: "video"|"rich",
			url?: string, // 45443/2370804 (1.92%)
			version: "1.0",
			width: number,
		}, // 2370804/3482151 (68.08%)
		reddit_video?: {
			bitrate_kbps?: number, // 1106394/1110899 (99.59%)
			dash_url?: string, // 1106395/1110899 (99.59%)
			duration?: number, // 1106395/1110899 (99.59%)
			fallback_url?: string, // 1106395/1110899 (99.59%)
			has_audio?: boolean, // 1106377/1110899 (99.59%)
			height: number|null,
			hls_url?: string, // 1106395/1110899 (99.59%)
			is_gif?: boolean, // 1106395/1110899 (99.59%)
			scrubber_media_url?: string, // 1106395/1110899 (99.59%)
			transcoding_message?: string, // 4504/1110899 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1110899/3482151 (31.90%)
		type?: string, // 2371252/3482151 (68.10%)
	},
	media_embed: {
		content?: string, // 2348047/38596941 (6.08%)
		height?: number, // 2348047/38596941 (6.08%)
		scrolling?: boolean, // 2348047/38596941 (6.08%)
		width?: number, // 2348047/38596941 (6.08%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 20880/14204029 (0.15%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 14135397/14204029 (99.52%)
			hlsUrl?: string, // 20880/14204029 (0.15%)
			id?: string, // 14135397/14204029 (99.52%)
			isGif?: boolean, // 20880/14204029 (0.15%)
			m?: "image/jpg"|"image/png"|"image/gif", // 14114517/14204029 (99.37%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 5832712/14204029 (41.06%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14114517/14204029 (99.37%)
			s?: {
				gif?: string, // 242293/14114517 (1.72%)
				mp4?: string, // 242293/14114517 (1.72%)
				u?: string, // 13872224/14114517 (98.28%)
				x: number,
				y: number,
			}, // 14114517/14204029 (99.37%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 20880/14204029 (0.15%)
			y?: number, // 20880/14204029 (0.15%)
		},
	}|null, // 4186380/38596941 (10.85%)
	media_only: boolean,
	mobile_ad_url?: string, // 154493/38596941 (0.40%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 154493/38596941 (0.40%)
	outbound_link?: {
	}, // 154493/38596941 (0.40%)
	over_18: boolean,
	parent_whitelist_status: null|"all_ads"|"some_ads"|"house_only",
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 18590/226631 (8.20%)
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
	}|null, // 69946/38596941 (0.18%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 18447451/38596941 (47.80%)
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
				}, // 660477/18528312 (3.56%)
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
				}, // 660477/18528312 (3.56%)
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
				}, // 9445784/18528312 (50.98%)
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
				}, // 9523380/18528312 (51.40%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1543782/1543810 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1543810/18528312 (8.33%)
	}, // 18528312/38596941 (48.00%)
	priority_id?: null, // 154493/38596941 (0.40%)
	product_ids?: [], // 154493/38596941 (0.40%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 154493/38596941 (0.40%)
	promoted?: boolean, // 154493/38596941 (0.40%)
	promoted_by?: null, // 154493/38596941 (0.40%)
	promoted_display_name?: null, // 154493/38596941 (0.40%)
	promoted_url?: null, // 154493/38596941 (0.40%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 5/38596941 (0.00%)
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 448/3482151 (0.01%)
		oembed?: {
			author_name?: string, // 667013/2370804 (28.13%)
			author_url?: string, // 666347/2370804 (28.11%)
			cache_age?: number, // 15512/2370804 (0.65%)
			description?: string, // 82695/2370804 (3.49%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2336/2370804 (0.10%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2321208/2370804 (97.91%)
			thumbnail_url?: string, // 2355502/2370804 (99.35%)
			thumbnail_width?: number, // 2321208/2370804 (97.91%)
			title?: string, // 2354979/2370804 (99.33%)
			type: "video"|"rich",
			url?: string, // 45443/2370804 (1.92%)
			version: "1.0",
			width: number,
		}, // 2370804/3482151 (68.08%)
		reddit_video?: {
			bitrate_kbps?: number, // 1106394/1110899 (99.59%)
			dash_url?: string, // 1106395/1110899 (99.59%)
			duration?: number, // 1106395/1110899 (99.59%)
			fallback_url?: string, // 1106395/1110899 (99.59%)
			has_audio?: boolean, // 1106377/1110899 (99.59%)
			height: number|null,
			hls_url?: string, // 1106395/1110899 (99.59%)
			is_gif?: boolean, // 1106395/1110899 (99.59%)
			scrubber_media_url?: string, // 1106395/1110899 (99.59%)
			transcoding_message?: string, // 4504/1110899 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1110899/3482151 (31.90%)
		type?: string, // 2371252/3482151 (68.10%)
	},
	secure_media_embed: {
		content?: string, // 2348047/38596941 (6.08%)
		height?: number, // 2348047/38596941 (6.08%)
		media_domain_url?: string, // 2348047/38596941 (6.08%)
		scrolling?: boolean, // 2348047/38596941 (6.08%)
		width?: number, // 2348047/38596941 (6.08%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 154493/38596941 (0.40%)
	sk_ad_network_data?: null, // 154493/38596941 (0.40%)
	spam?: boolean, // 5/38596941 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 3736/38596941 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 154493/38596941 (0.40%)
	third_party_tracking?: null, // 154493/38596941 (0.40%)
	third_party_tracking_2?: null, // 154493/38596941 (0.40%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 38595964/38596941 (100.00%)
	thumbnail_width?: number|null, // 38595964/38596941 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 4/38596941 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 22560066/38596941 (58.45%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only",
	wls: null|number,
}