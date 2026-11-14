interface RedditPost {
	_meta?: {
		edited_title?: string, // 3273166/38091755 (8.59%)
		is_edited?: boolean, // 2118094/38091755 (5.56%)
		removal_type?: "deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 7213251/38091755 (18.94%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 6454910/38091755 (16.95%)
		was_initially_deleted?: boolean, // 758348/38091755 (1.99%)
	}, // 38091755/42117701 (90.44%)
	ad_business?: null, // 424971/42117701 (1.01%)
	ad_promoted_user_posts?: null, // 424971/42117701 (1.01%)
	ad_supplementary_text_md?: null|string, // 424971/42117701 (1.01%)
	ad_user_targeting?: null, // 424971/42117701 (1.01%)
	adserver_click_url?: null, // 424971/42117701 (1.01%)
	adserver_imp_pixel?: null, // 424971/42117701 (1.01%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 424971/42117701 (1.01%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 54295/42117701 (0.13%)
	author_flair_background_color: null|string,
	author_flair_css_class?: null|string, // 29909142/42117701 (71.01%)
	author_flair_richtext?: {
		a?: string, // 1113125/2953047 (37.69%)
		e: "text"|"emoji",
		t?: string, // 1839922/2953047 (62.31%)
		u?: string, // 1113125/2953047 (37.69%)
	}[], // 41714241/42117701 (99.04%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 41714241/42117701 (99.04%)
	author_fullname?: string, // 41710952/42117701 (99.03%)
	author_id?: string|null, // 424971/42117701 (1.01%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 41714241/42117701 (99.04%)
	author_premium?: boolean, // 41714241/42117701 (99.04%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 373732/42117701 (0.89%)
	campaign_id?: null, // 424971/42117701 (1.01%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories?: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"comics"|"writing"|"music"|"videos")[], // 29909142/42117701 (71.01%)
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 4223233/42117701 (10.03%)
	crosspost_parent_id?: string, // 135622/42117701 (0.32%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string|null,
		author_cakeday?: boolean, // 5427/4221973 (0.13%)
		author_flair_background_color: null|string,
		author_flair_css_class?: null|string, // 2203268/4221973 (52.19%)
		author_flair_richtext?: {
			a?: string, // 101146/267397 (37.83%)
			e: "text"|"emoji",
			t?: string, // 166251/267397 (62.17%)
			u?: string, // 101146/267397 (37.83%)
		}[], // 4212760/4221973 (99.78%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 4212760/4221973 (99.78%)
		author_fullname?: string, // 4207998/4221973 (99.67%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 4212760/4221973 (99.78%)
		author_premium?: boolean, // 4212760/4221973 (99.78%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts",
		clicked: boolean,
		content_categories?: null|("gaming"|"drawing_and_painting"|"comics"|"photography"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[], // 2203268/4221973 (52.19%)
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
				caption?: string, // 364776/5459417 (6.68%)
				id: number,
				is_deleted: boolean,
				media_id: string,
				outbound_url?: string, // 6180/5459417 (0.11%)
			}[],
		}|null, // 922946/4221973 (21.86%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 922946/4221973 (21.86%)
		is_meta: boolean,
		is_original_content?: boolean, // 2203268/4221973 (52.19%)
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string|null,
		link_flair_css_class?: null|string, // 2203268/4221973 (52.19%)
		link_flair_richtext: {
			a?: string, // 125242/864823 (14.48%)
			e: "text"|"emoji",
			t?: string, // 739581/864823 (85.52%)
			u?: string, // 125242/864823 (14.48%)
		}[],
		link_flair_template_id?: string, // 1969294/4221973 (46.64%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat?: null|number, // 1860847/4221973 (44.08%)
		location_long?: null|number, // 1860847/4221973 (44.08%)
		location_name?: null|"Costa Rica"|"Bogotá", // 1860847/4221973 (44.08%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 69061/447859 (15.42%)
				author_url?: string, // 69047/447859 (15.42%)
				cache_age?: number, // 7/447859 (0.00%)
				description?: string, // 1385/447859 (0.31%)
				height?: number|null, // 447826/447859 (99.99%)
				html: string,
				mean_alpha?: number, // 2/447859 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 445869/447859 (99.56%)
				thumbnail_url?: string, // 447592/447859 (99.94%)
				thumbnail_width?: number, // 445869/447859 (99.56%)
				title?: string, // 447833/447859 (99.99%)
				type: "video"|"rich",
				url?: string, // 18/447859 (0.00%)
				version: "1.0",
				width?: number, // 447812/447859 (99.99%)
			}, // 447859/732625 (61.13%)
			reddit_video?: {
				bitrate_kbps?: null|number, // 284637/284766 (99.95%)
				dash_url?: string|null, // 284762/284766 (100.00%)
				duration?: number|null, // 284762/284766 (100.00%)
				fallback_url?: string, // 284762/284766 (100.00%)
				has_audio?: null|boolean, // 284182/284766 (99.79%)
				height: number|null,
				hls_url?: string|null, // 284762/284766 (100.00%)
				is_gif?: boolean, // 284762/284766 (100.00%)
				scrubber_media_url?: string|null, // 284762/284766 (100.00%)
				transcoding_message?: string, // 4/284766 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 284766/732625 (38.87%)
			type?: string, // 228576/732625 (31.20%)
		},
		media_embed: {
			content?: string, // 447826/4221973 (10.61%)
			height?: number, // 447826/4221973 (10.61%)
			scrolling?: boolean, // 447826/4221973 (10.61%)
			width?: number, // 447812/4221973 (10.61%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string|null, // 3231/5538180 (0.06%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 5536863/5538180 (99.98%)
				hlsUrl?: string|null, // 3231/5538180 (0.06%)
				id?: string, // 5536863/5538180 (99.98%)
				isGif?: boolean, // 3231/5538180 (0.06%)
				m?: "image/jpg"|"image/jpeg"|"image/png"|"image/gif"|"image/webp", // 5533632/5538180 (99.92%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1530414/5538180 (27.63%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 5533632/5538180 (99.92%)
				s?: {
					gif?: string, // 262452/5533632 (4.74%)
					mp4?: string, // 114868/5533632 (2.08%)
					u?: string|null, // 5271180/5533632 (95.26%)
					x: number|null,
					y: number|null,
				}, // 5533632/5538180 (99.92%)
				status: "valid"|"failed"|"unprocessed",
				x?: number|null, // 3231/5538180 (0.06%)
				y?: number|null, // 3231/5538180 (0.06%)
			},
		}|null, // 960425/4221973 (22.75%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts?: number, // 2203268/4221973 (52.19%)
		num_reports: null,
		outbound_link?: {
			created: null|number,
			expiration: null|number,
			url: string,
		}, // 2886174/4221973 (68.36%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 228/17407 (1.31%)
			}[],
			prediction_status: null,
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: null|number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|boolean|null, // 6887/4221973 (0.16%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery", // 2000983/4221973 (47.39%)
		preview?: {
			enabled?: boolean, // 2019735/2019802 (100.00%)
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
					}, // 6092/2019802 (0.30%)
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
					}, // 6092/2019802 (0.30%)
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
					}, // 486377/2019802 (24.08%)
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
					}, // 488768/2019802 (24.20%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number|null, // 189929/189937 (100.00%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				has_audio?: boolean|null, // 186901/189937 (98.40%)
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 189937/2019802 (9.40%)
		}, // 2019802/4221973 (47.84%)
		profile_img?: string|null, // 1823478/4221973 (43.19%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by?: null, // 2203268/4221973 (52.19%)
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"copyright_takedown"|"author"|"community_ops",
		report_reasons: null,
		retrieved_on?: number, // 2333004/4221973 (55.26%)
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 69061/447859 (15.42%)
				author_url?: string, // 69047/447859 (15.42%)
				cache_age?: number, // 7/447859 (0.00%)
				description?: string, // 1385/447859 (0.31%)
				height?: number|null, // 447826/447859 (99.99%)
				html: string,
				mean_alpha?: number, // 2/447859 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 445869/447859 (99.56%)
				thumbnail_url?: string, // 447592/447859 (99.94%)
				thumbnail_width?: number, // 445869/447859 (99.56%)
				title?: string, // 447833/447859 (99.99%)
				type: "video"|"rich",
				url?: string, // 18/447859 (0.00%)
				version: "1.0",
				width?: number, // 447812/447859 (99.99%)
			}, // 447859/732625 (61.13%)
			reddit_video?: {
				bitrate_kbps?: null|number, // 284637/284766 (99.95%)
				dash_url?: string|null, // 284762/284766 (100.00%)
				duration?: number|null, // 284762/284766 (100.00%)
				fallback_url?: string, // 284762/284766 (100.00%)
				has_audio?: null|boolean, // 284182/284766 (99.79%)
				height: number|null,
				hls_url?: string|null, // 284762/284766 (100.00%)
				is_gif?: boolean, // 284762/284766 (100.00%)
				scrubber_media_url?: string|null, // 284762/284766 (100.00%)
				transcoding_message?: string, // 4/284766 (0.00%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 284766/732625 (38.87%)
			type?: string, // 228576/732625 (31.20%)
		},
		secure_media_embed: {
			content?: string, // 447826/4221973 (10.61%)
			height?: number, // 447826/4221973 (10.61%)
			media_domain_url?: string, // 228543/4221973 (5.41%)
			scrolling?: boolean, // 447826/4221973 (10.61%)
			width?: number, // 447812/4221973 (10.61%)
		},
		selftext: string,
		selftext_html?: string|null, // 3330601/4221973 (78.89%)
		send_replies: boolean,
		spoiler: boolean,
		stickied: boolean,
		subreddit?: string, // 4221927/4221973 (100.00%)
		subreddit_id?: string, // 4221927/4221973 (100.00%)
		subreddit_name_prefixed?: string, // 4221927/4221973 (100.00%)
		subreddit_subscribers?: number, // 4221927/4221973 (100.00%)
		subreddit_type?: "public"|"user"|"restricted"|"archived", // 4221927/4221973 (100.00%)
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 4219553/4221973 (99.94%)
		thumbnail_width?: number|null, // 4219553/4221973 (99.94%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2904906/4221973 (68.80%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url?: string, // 1860847/4221973 (44.08%)
		wls: null|number,
	}[], // 4223233/42117701 (10.03%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 424971/42117701 (1.01%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 424971/42117701 (1.01%)
	embed_url?: null|string, // 424971/42117701 (1.01%)
	events?: [], // 424971/42117701 (1.01%)
	eventsOnRender?: [], // 424971/42117701 (1.01%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 109639/21858678 (0.50%)
			caption?: string, // 1326004/21858678 (6.07%)
			display_url?: string, // 108004/21858678 (0.49%)
			id: number,
			is_deleted: boolean,
			media_id: string,
			outbound_url?: string, // 124927/21858678 (0.57%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 64713/21858678 (0.30%)
		}[],
	}|null, // 5621650/42117701 (13.35%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 424971/42117701 (1.01%)
	id: string,
	impression_id?: null, // 424971/42117701 (1.01%)
	impression_id_str?: null, // 424971/42117701 (1.01%)
	is_blank?: boolean, // 424971/42117701 (1.01%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5621650/42117701 (13.35%)
	is_meta: boolean,
	is_original_content?: boolean, // 29909142/42117701 (71.01%)
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 424971/42117701 (1.01%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class?: null|string, // 29909142/42117701 (71.01%)
	link_flair_richtext: {
		a?: string, // 1421996/9742037 (14.60%)
		e: "text"|"emoji",
		t?: string, // 8320041/9742037 (85.40%)
		u?: string, // 1421996/9742037 (14.60%)
	}[],
	link_flair_template_id?: string, // 20062773/42117701 (47.64%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat?: null, // 18966070/42117701 (45.03%)
	location_long?: null, // 18966070/42117701 (45.03%)
	location_name?: null, // 18966070/42117701 (45.03%)
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 683340/2433792 (28.08%)
			author_url?: string, // 683320/2433792 (28.08%)
			cache_age?: number, // 80/2433792 (0.00%)
			description?: string, // 10808/2433792 (0.44%)
			height?: number, // 2433473/2433792 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2428326/2433792 (99.78%)
			thumbnail_url?: string, // 2432289/2433792 (99.94%)
			thumbnail_width?: number, // 2428326/2433792 (99.78%)
			title?: string, // 2433330/2433792 (99.98%)
			type: "video"|"rich",
			url?: string, // 839/2433792 (0.03%)
			version: "1.0",
			width?: number, // 2433400/2433792 (99.98%)
		}, // 2433792/4128416 (58.95%)
		reddit_video?: {
			bitrate_kbps?: null|number, // 1692843/1694624 (99.89%)
			dash_url?: string|null, // 1692843/1694624 (99.89%)
			duration?: number|null, // 1692843/1694624 (99.89%)
			fallback_url?: string, // 1692843/1694624 (99.89%)
			has_audio?: null|boolean, // 1692838/1694624 (99.89%)
			height: number|null,
			hls_url?: string|null, // 1692843/1694624 (99.89%)
			is_gif?: boolean, // 1692843/1694624 (99.89%)
			scrubber_media_url?: string|null, // 1692843/1694624 (99.89%)
			transcoding_message?: string, // 1781/1694624 (0.11%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1694624/4128416 (41.05%)
		type?: string, // 1309898/4128416 (31.73%)
	},
	media_embed: {
		content?: string, // 2414925/42117701 (5.73%)
		height?: number, // 2414925/42117701 (5.73%)
		scrolling?: boolean, // 2414925/42117701 (5.73%)
		width?: number, // 2414853/42117701 (5.73%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string|null, // 17140/22338651 (0.08%)
			e?: "Image"|"AnimatedImage"|"RedditVideo"|"Video", // 22291325/22338651 (99.79%)
			hlsUrl?: string|null, // 17140/22338651 (0.08%)
			id?: string, // 22291325/22338651 (99.79%)
			isGif?: boolean, // 17140/22338651 (0.08%)
			m?: "image/jpg"|"image/jpeg"|"image/png"|"image/gif"|"image/webp"|"image/bmp"|"video/mp4", // 22274185/22338651 (99.71%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 5153161/22338651 (23.07%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 22274185/22338651 (99.71%)
			s?: {
				gif?: string, // 477023/22274185 (2.14%)
				mp4?: string, // 215501/22274185 (0.97%)
				u?: string|null, // 21797162/22274185 (97.86%)
				x: number|null,
				y: number|null,
			}, // 22274185/22338651 (99.71%)
			status: "valid"|"unprocessed"|"failed",
			x?: number|null, // 17140/22338651 (0.08%)
			y?: number|null, // 17140/22338651 (0.08%)
		},
	}|null, // 5933012/42117701 (14.09%)
	media_only: boolean,
	mobile_ad_url?: string, // 424971/42117701 (1.01%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts?: number, // 29909142/42117701 (71.01%)
	num_duplicates?: number, // 863864/42117701 (2.05%)
	num_reports: null,
	original_link?: null, // 424971/42117701 (1.01%)
	outbound_link?: {
		created?: null|number, // 25655343/26080310 (98.37%)
		expiration?: null|number, // 25655343/26080310 (98.37%)
		url?: string, // 25655343/26080310 (98.37%)
	}, // 26080310/42117701 (61.92%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 24813/177311 (13.99%)
		}[],
		prediction_status: null,
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number|null,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 1163188/42117701 (2.76%)
	post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video"|"gallery", // 19314592/42117701 (45.86%)
	preview?: {
		enabled?: boolean, // 16618725/16618854 (100.00%)
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
				}, // 140957/16618854 (0.85%)
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
				}, // 140957/16618854 (0.85%)
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
				}, // 3668222/16618854 (22.07%)
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
				}, // 3708081/16618854 (22.31%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number|null, // 980081/980179 (99.99%)
			dash_url?: string, // 980089/980179 (99.99%)
			duration?: number, // 980089/980179 (99.99%)
			fallback_url?: string, // 980089/980179 (99.99%)
			has_audio?: boolean|null, // 977059/980179 (99.68%)
			height: number|null,
			hls_url?: string, // 980089/980179 (99.99%)
			is_gif?: boolean, // 980089/980179 (99.99%)
			scrubber_media_url?: string, // 980089/980179 (99.99%)
			transcoding_message?: string, // 90/980179 (0.01%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 980179/16618854 (5.90%)
	}, // 16618854/42117701 (39.46%)
	priority_id?: null, // 424971/42117701 (1.01%)
	product_ids?: [], // 424971/42117701 (1.01%)
	profile_img?: string|null, // 25381758/42117701 (60.26%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 424971/42117701 (1.01%)
	promoted?: boolean, // 424971/42117701 (1.01%)
	promoted_by?: null, // 424971/42117701 (1.01%)
	promoted_display_name?: null, // 424971/42117701 (1.01%)
	promoted_url?: null, // 424971/42117701 (1.01%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by?: null, // 29909142/42117701 (71.01%)
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 683340/2433792 (28.08%)
			author_url?: string, // 683320/2433792 (28.08%)
			cache_age?: number, // 80/2433792 (0.00%)
			description?: string, // 10808/2433792 (0.44%)
			height?: number, // 2433473/2433792 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2428326/2433792 (99.78%)
			thumbnail_url?: string, // 2432289/2433792 (99.94%)
			thumbnail_width?: number, // 2428326/2433792 (99.78%)
			title?: string, // 2433330/2433792 (99.98%)
			type: "video"|"rich",
			url?: string, // 839/2433792 (0.03%)
			version: "1.0",
			width?: number, // 2433400/2433792 (99.98%)
		}, // 2433792/4128416 (58.95%)
		reddit_video?: {
			bitrate_kbps?: null|number, // 1692843/1694624 (99.89%)
			dash_url?: string|null, // 1692843/1694624 (99.89%)
			duration?: number|null, // 1692843/1694624 (99.89%)
			fallback_url?: string, // 1692843/1694624 (99.89%)
			has_audio?: null|boolean, // 1692838/1694624 (99.89%)
			height: number|null,
			hls_url?: string|null, // 1692843/1694624 (99.89%)
			is_gif?: boolean, // 1692843/1694624 (99.89%)
			scrubber_media_url?: string|null, // 1692843/1694624 (99.89%)
			transcoding_message?: string, // 1781/1694624 (0.11%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1694624/4128416 (41.05%)
		type?: string, // 1309898/4128416 (31.73%)
	},
	secure_media_embed: {
		content?: string, // 2414925/42117701 (5.73%)
		height?: number, // 2414925/42117701 (5.73%)
		media_domain_url?: string, // 1305181/42117701 (3.10%)
		scrolling?: boolean, // 2414925/42117701 (5.73%)
		width?: number, // 2414853/42117701 (5.73%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 424971/42117701 (1.01%)
	sk_ad_network_data?: null, // 424971/42117701 (1.01%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 12750/42117701 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 424971/42117701 (1.01%)
	third_party_tracking?: null, // 424971/42117701 (1.01%)
	third_party_tracking_2?: null, // 424971/42117701 (1.01%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 41999752/42117701 (99.72%)
	thumbnail_width?: number|null, // 41999752/42117701 (99.72%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 26083110/42117701 (61.93%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url?: string, // 18966070/42117701 (45.03%)
	wls: null|number,
}