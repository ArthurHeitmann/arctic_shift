interface RedditPost {
	adserver_click_url?: null, // 20540/21243315 (0.10%)
	adserver_imp_pixel?: null, // 20540/21243315 (0.10%)
	all_awardings: {
		award_sub_type: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION"|"PREMIUM",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null|number,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG"|"JPG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	}[],
	allow_live_comments: boolean,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 65988/21243315 (0.31%)
	author_created_utc?: number|null, // 16678347/21243315 (78.51%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 472545/1477335 (31.99%)
		e: "text"|"emoji",
		t?: string, // 1004790/1477335 (68.01%)
		u?: string, // 472545/1477335 (31.99%)
	}[], // 16678347/21243315 (78.51%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 16678347/21243315 (78.51%)
	author_fullname?: string, // 16678347/21243315 (78.51%)
	author_id?: string|null, // 20540/21243315 (0.10%)
	author_patreon_flair?: boolean, // 16678347/21243315 (78.51%)
	author_premium?: boolean, // 16678347/21243315 (78.51%)
	awarders: [],
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Play Now"|"Download"|"Install"|"Watch Now"|"Apply Now"|"Get Showtimes"|"Contact Us"|"Get a Quote"|""|"See Menu", // 18125/21243315 (0.09%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"videos"|"entertainment"|"diy_and_crafts"|"memes"|"music"|""|"food"|"writing"|"funny",
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description: string|null,
		display_layout: null|"GALLERY"|"TIMELINE",
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		subreddit_id: string,
		title: string,
	}[], // 5018/21243315 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 889406/21243315 (4.19%)
	crosspost_parent_list?: {
		all_awardings: {
			award_sub_type: "GLOBAL"|"COMMUNITY"|"MODERATOR"|"APPRECIATION"|"PREMIUM",
			award_type: "global"|"community"|"moderator",
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number,
			days_of_premium: number,
			description: string,
			end_date: null|number,
			giver_coin_reward: null|number,
			icon_format: null|"PNG"|"JPG"|"APNG",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			is_new: boolean,
			name: string,
			penny_donate: null|number,
			penny_price: null|number,
			resized_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			start_date: null|number,
			subreddit_coin_reward: number,
			subreddit_id: null|string,
		}[],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4060/866158 (0.47%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 23608/76124 (31.01%)
			e: "text"|"emoji",
			t?: string, // 52516/76124 (68.99%)
			u?: string, // 23608/76124 (31.01%)
		}[], // 745123/866158 (86.03%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 745123/866158 (86.03%)
		author_fullname?: string, // 745123/866158 (86.03%)
		author_patreon_flair?: boolean, // 745123/866158 (86.03%)
		author_premium?: boolean, // 745123/866158 (86.03%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Learn More"|"Download"|"Sign Up"|"Shop Now"|"Install"|"See Menu", // 21/866158 (0.00%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|"memes"|"videos"|"diy_and_crafts"|""|"music",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string|null,
			display_layout: null|"GALLERY"|"TIMELINE",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 727/866158 (0.08%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 175/866158 (0.02%)
		event_is_live?: boolean, // 175/866158 (0.02%)
		event_start?: number, // 175/866158 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 90548/866158 (10.45%)
			gid_2?: number, // 51576/866158 (5.95%)
			gid_3?: number, // 15409/866158 (1.78%)
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 3397/90038 (3.77%)
			e: "text"|"emoji",
			t?: string, // 86641/90038 (96.23%)
			u?: string, // 3397/90038 (3.77%)
		}[],
		link_flair_template_id?: string, // 166845/866158 (19.26%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 169150/181511 (93.19%)
				author_url?: string, // 27372/181511 (15.08%)
				cache_age?: number, // 4833/181511 (2.66%)
				description?: string, // 154498/181511 (85.12%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 39/181511 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 175627/181511 (96.76%)
				thumbnail_url?: string, // 176488/181511 (97.23%)
				thumbnail_width?: number, // 175627/181511 (96.76%)
				title?: string, // 176402/181511 (97.19%)
				type: "video"|"rich",
				url?: string, // 10592/181511 (5.84%)
				version: "1.0",
				width: number,
			}, // 181511/274459 (66.13%)
			reddit_video?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 92948/274459 (33.87%)
			type?: string, // 181511/274459 (66.13%)
		},
		media_embed: {
			content?: string, // 181511/866158 (20.96%)
			height?: number, // 181511/866158 (20.96%)
			scrolling?: boolean, // 181511/866158 (20.96%)
			width?: number, // 181511/866158 (20.96%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 630/13543 (4.65%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 13533/13543 (99.93%)
				hlsUrl?: string, // 630/13543 (4.65%)
				id?: string, // 13533/13543 (99.93%)
				isGif?: boolean, // 630/13543 (4.65%)
				m?: "image/jpg"|"image/png"|"image/gif", // 12903/13543 (95.27%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 12903/13543 (95.27%)
				s?: {
					gif?: string, // 155/12903 (1.20%)
					mp4?: string, // 155/12903 (1.20%)
					u?: string, // 12748/12903 (98.80%)
					x: number,
					y: number,
				}, // 12903/13543 (95.27%)
				status: "valid"|"failed",
				x?: number, // 630/13543 (4.65%)
				y?: number, // 630/13543 (4.65%)
			},
		}|null, // 6243/866158 (0.72%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 653267/866158 (75.42%)
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
					}, // 142513/653267 (21.82%)
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
					}, // 142513/653267 (21.82%)
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
					}, // 262736/653267 (40.22%)
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
					}, // 264681/653267 (40.52%)
				},
			}[],
			reddit_video_preview?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 139919/653267 (21.42%)
		}, // 653267/866158 (75.42%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"moderator"|"reddit"|"copyright_takedown"|"author"|"anti_evil_ops"|"content_takedown"|"community_ops"|"automod_filtered",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 169150/181511 (93.19%)
				author_url?: string, // 27372/181511 (15.08%)
				cache_age?: number, // 4833/181511 (2.66%)
				description?: string, // 154498/181511 (85.12%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 39/181511 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 175627/181511 (96.76%)
				thumbnail_url?: string, // 176488/181511 (97.23%)
				thumbnail_width?: number, // 175627/181511 (96.76%)
				title?: string, // 176402/181511 (97.19%)
				type: "video"|"rich",
				url?: string, // 10592/181511 (5.84%)
				version: "1.0",
				width: number,
			}, // 181511/274459 (66.13%)
			reddit_video?: {
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 92948/274459 (33.87%)
			type?: string, // 181511/274459 (66.13%)
		},
		secure_media_embed: {
			content?: string, // 181511/866158 (20.96%)
			height?: number, // 181511/866158 (20.96%)
			media_domain_url?: string, // 181511/866158 (20.96%)
			scrolling?: boolean, // 181511/866158 (20.96%)
			width?: number, // 181511/866158 (20.96%)
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
		subreddit_type: "public"|"restricted"|"user"|"archived",
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 889406/21243315 (4.19%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 20540/21243315 (0.10%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 20540/21243315 (0.10%)
	embed_url?: null|string, // 20540/21243315 (0.10%)
	event_end?: number, // 2187/21243315 (0.01%)
	event_is_live?: boolean, // 2187/21243315 (0.01%)
	event_start?: number, // 2187/21243315 (0.01%)
	events?: [], // 20540/21243315 (0.10%)
	eventsOnRender?: [], // 20540/21243315 (0.10%)
	gilded: number,
	gildings: {
		gid_1?: number, // 58166/21243315 (0.27%)
		gid_2?: number, // 27910/21243315 (0.13%)
		gid_3?: number, // 5983/21243315 (0.03%)
	},
	hidden: boolean,
	href_url?: string, // 20540/21243315 (0.10%)
	id: string,
	is_blank?: boolean, // 20540/21243315 (0.10%)
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 89483/2873761 (3.11%)
		e: "text"|"emoji",
		t?: string, // 2784278/2873761 (96.89%)
		u?: string, // 89483/2873761 (3.11%)
	}[],
	link_flair_template_id?: string, // 4025485/21243315 (18.95%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 1255180/1424430 (88.12%)
			author_url?: string, // 1015064/1424430 (71.26%)
			cache_age?: number, // 155093/1424430 (10.89%)
			description?: string, // 460846/1424430 (32.35%)
			height?: number|null, // 1424419/1424430 (100.00%)
			html?: string, // 1424419/1424430 (100.00%)
			marginheight?: number, // 53/1424430 (0.00%)
			marginwidth?: number, // 53/1424430 (0.00%)
			mean_alpha?: number, // 3246/1424430 (0.23%)
			provider_name?: string, // 1424419/1424430 (100.00%)
			provider_url?: string, // 1424419/1424430 (100.00%)
			thumbnail_height?: number, // 1256704/1424430 (88.23%)
			thumbnail_url?: string, // 1265862/1424430 (88.87%)
			thumbnail_width?: number, // 1256704/1424430 (88.23%)
			title?: string, // 1265138/1424430 (88.82%)
			type?: "video"|"rich", // 1424419/1424430 (100.00%)
			url?: string, // 282094/1424430 (19.80%)
			version?: "1.0", // 1424366/1424430 (100.00%)
			width?: number, // 1424419/1424430 (100.00%)
		}, // 1424430/1852004 (76.91%)
		reddit_video?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 427574/1852004 (23.09%)
		type?: string, // 1424430/1852004 (76.91%)
	},
	media_embed: {
		content?: string|null, // 1424430/21243315 (6.71%)
		height?: number, // 1424430/21243315 (6.71%)
		scrolling?: boolean, // 1424430/21243315 (6.71%)
		width?: number, // 1424430/21243315 (6.71%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 6589/224058 (2.94%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 223594/224058 (99.79%)
			hlsUrl?: string, // 6589/224058 (2.94%)
			id?: string, // 223594/224058 (99.79%)
			isGif?: boolean, // 6589/224058 (2.94%)
			m?: "image/jpg"|"image/png"|"image/gif", // 217005/224058 (96.85%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 217005/224058 (96.85%)
			s?: {
				gif?: string, // 1898/217005 (0.87%)
				mp4?: string, // 1898/217005 (0.87%)
				u?: string, // 215107/217005 (99.13%)
				x: number,
				y: number,
			}, // 217005/224058 (96.85%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 6589/224058 (2.94%)
			y?: number, // 6589/224058 (2.94%)
		},
	}|null, // 225488/21243315 (1.06%)
	media_only: boolean,
	mobile_ad_url?: string, // 20540/21243315 (0.10%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 20540/21243315 (0.10%)
	outbound_link?: {
	}, // 20540/21243315 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7322214/21243315 (34.47%)
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
				}, // 317157/7322214 (4.33%)
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
				}, // 317157/7322214 (4.33%)
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
				}, // 1146382/7322214 (15.66%)
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
				}, // 1184935/7322214 (16.18%)
			},
		}[],
		reddit_video_preview?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 282437/7322214 (3.86%)
	}, // 7322214/21243315 (34.47%)
	priority_id?: null, // 20540/21243315 (0.10%)
	promoted?: boolean, // 20540/21243315 (0.10%)
	promoted_by?: null, // 20540/21243315 (0.10%)
	promoted_display_name?: null, // 20540/21243315 (0.10%)
	promoted_url?: null, // 20540/21243315 (0.10%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"moderator"|"reddit"|"deleted"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"community_ops"|"automod_filtered",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 1255180/1424430 (88.12%)
			author_url?: string, // 1015064/1424430 (71.26%)
			cache_age?: number, // 155093/1424430 (10.89%)
			description?: string, // 460846/1424430 (32.35%)
			height?: number|null, // 1424419/1424430 (100.00%)
			html?: string, // 1424419/1424430 (100.00%)
			marginheight?: number, // 53/1424430 (0.00%)
			marginwidth?: number, // 53/1424430 (0.00%)
			mean_alpha?: number, // 3246/1424430 (0.23%)
			provider_name?: string, // 1424419/1424430 (100.00%)
			provider_url?: string, // 1424419/1424430 (100.00%)
			thumbnail_height?: number, // 1256704/1424430 (88.23%)
			thumbnail_url?: string, // 1265862/1424430 (88.87%)
			thumbnail_width?: number, // 1256704/1424430 (88.23%)
			title?: string, // 1265138/1424430 (88.82%)
			type?: "video"|"rich", // 1424419/1424430 (100.00%)
			url?: string, // 282094/1424430 (19.80%)
			version?: "1.0", // 1424366/1424430 (100.00%)
			width?: number, // 1424419/1424430 (100.00%)
		}, // 1424430/1852004 (76.91%)
		reddit_video?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 427574/1852004 (23.09%)
		type?: string, // 1424430/1852004 (76.91%)
	},
	secure_media_embed: {
		content?: string|null, // 1424430/21243315 (6.71%)
		height?: number, // 1424430/21243315 (6.71%)
		media_domain_url?: string, // 1424430/21243315 (6.71%)
		scrolling?: boolean, // 1424430/21243315 (6.71%)
		width?: number, // 1424430/21243315 (6.71%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 20540/21243315 (0.10%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	suggested_sort: null|"qa"|"top"|"confidence"|"new"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: string[], // 20540/21243315 (0.10%)
	third_party_tracking?: null, // 20540/21243315 (0.10%)
	third_party_tracking_2?: null, // 20540/21243315 (0.10%)
	thumbnail: string,
	thumbnail_height?: number|null, // 21242302/21243315 (100.00%)
	thumbnail_width?: number|null, // 21242302/21243315 (100.00%)
	title: string,
	total_awards_received: number,
	treatment_tags: [],
	url: string,
	whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}