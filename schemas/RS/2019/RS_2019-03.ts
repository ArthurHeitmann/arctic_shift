interface RedditPost {
	adserver_click_url?: null, // 17778/18412519 (0.10%)
	adserver_imp_pixel?: null, // 17778/18412519 (0.10%)
	all_awardings?: {
		award_type: "global"|"community",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: "Silver Award"|"Gold Award"|"Platinum Award"|null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		name: "Silver"|"Gold"|"Platinum"|"sadasdasdasd"|"11"|"6"|"4"|"16"|" communauté",
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		subreddit_id: null|"t5_m1n8r",
	}[], // 18208353/18412519 (98.89%)
	archived?: boolean, // 18209427/18412519 (98.90%)
	author: string,
	author_cakeday?: boolean, // 58179/18412519 (0.32%)
	author_created_utc?: number|null, // 18412462/18412519 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 328941/1146421 (28.69%)
		e: "text"|"emoji",
		t?: string, // 817480/1146421 (71.31%)
		u?: string, // 328941/1146421 (28.69%)
	}[], // 14653886/18412519 (79.59%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 14653886/18412519 (79.59%)
	author_fullname?: string|null, // 18412462/18412519 (100.00%)
	author_id?: string|null, // 17778/18412519 (0.10%)
	author_patreon_flair?: boolean, // 14653886/18412519 (79.59%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Install"|"View More"|"Download"|"Play Now"|"Watch Now"|"Apply Now"|"Get a Quote"|"Contact Us"|"Get Showtimes"|"See Menu"|null, // 14890/18412519 (0.08%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"videos"|"gaming"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"animals"|"music"|"memes"|"food"|"funny"|"",
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
	}[], // 913/18412519 (0.00%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 675322/18412519 (3.67%)
	crosspost_parent_list?: {
		all_awardings?: {
			award_type: "global",
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number,
			days_of_premium: number,
			description: "Silver Award"|"Gold Award"|"Platinum Award",
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: "gid_1"|"gid_2"|"gid_3",
			is_enabled: boolean,
			name: "Silver"|"Gold"|"Platinum",
			resized_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			subreddit_id: null,
		}[], // 658258/669296 (98.35%)
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 2431/669296 (0.36%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 13485/46690 (28.88%)
			e: "text"|"emoji",
			t?: string, // 33205/46690 (71.12%)
			u?: string, // 13485/46690 (28.88%)
		}[], // 597869/669296 (89.33%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 597869/669296 (89.33%)
		author_fullname?: string, // 597869/669296 (89.33%)
		author_patreon_flair?: boolean, // 597869/669296 (89.33%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"memes"|"diy_and_crafts"|"videos"|"writing"|"music"|"funny"|"art"|"pics_and_gifs"|"food",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string|null,
			display_layout: null|"GALLERY",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 105/669296 (0.02%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 32/669296 (0.00%)
		event_is_live?: boolean, // 32/669296 (0.00%)
		event_start?: number, // 32/669296 (0.00%)
		gilded: number,
		gildings: {
			gid_1?: number, // 75911/669296 (11.34%)
			gid_2?: number, // 57050/669296 (8.52%)
			gid_3?: number, // 22529/669296 (3.37%)
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
			a?: string, // 1332/59594 (2.24%)
			e: "text"|"emoji",
			t?: string, // 58262/59594 (97.76%)
			u?: string, // 1332/59594 (2.24%)
		}[],
		link_flair_template_id?: string, // 113667/669296 (16.98%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 1/176671 (0.00%)
			event_id?: "12mv09tb5s3l3"|"12of8upvbytlw"|"12ogeb0zm4q79", // 4/176671 (0.00%)
			height?: number, // 1/176671 (0.00%)
			oembed?: {
				author_name?: string, // 19601/111687 (17.55%)
				author_url?: string, // 19592/111687 (17.54%)
				cache_age?: number, // 2/111687 (0.00%)
				description?: string, // 94093/111687 (84.25%)
				height: number,
				html: string,
				mean_alpha?: number, // 46/111687 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 111195/111687 (99.56%)
				thumbnail_url?: string, // 111648/111687 (99.97%)
				thumbnail_width?: number, // 111195/111687 (99.56%)
				title?: string, // 111550/111687 (99.88%)
				type: "video"|"rich",
				url?: string, // 8703/111687 (7.79%)
				version: "1.0",
				width: number,
			}, // 111687/176671 (63.22%)
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
			}, // 64979/176671 (36.78%)
			type?: string, // 111692/176671 (63.22%)
			width?: number, // 1/176671 (0.00%)
		},
		media_embed: {
			content?: string, // 111692/669296 (16.69%)
			height?: number, // 111692/669296 (16.69%)
			scrolling?: boolean, // 111692/669296 (16.69%)
			width?: number, // 111692/669296 (16.69%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 134/5411 (2.48%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 5395/5411 (99.70%)
				hlsUrl?: string, // 134/5411 (2.48%)
				id?: string, // 5395/5411 (99.70%)
				isGif?: boolean, // 134/5411 (2.48%)
				m?: "image/jpg"|"image/png"|"image/gif", // 5261/5411 (97.23%)
				s?: {
					gif?: string, // 157/5261 (2.98%)
					mp4?: string, // 157/5261 (2.98%)
					u?: string, // 5104/5261 (97.02%)
					x: number,
					y: number,
				}, // 5261/5411 (97.23%)
				status: "valid"|"failed",
				x?: number, // 134/5411 (2.48%)
				y?: number, // 134/5411 (2.48%)
			},
		}|null, // 3250/669296 (0.49%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 502733/669296 (75.11%)
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
					}, // 88084/502733 (17.52%)
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
					}, // 88084/502733 (17.52%)
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
					}, // 164918/502733 (32.80%)
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
					}, // 166590/502733 (33.14%)
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
			}, // 89537/502733 (17.81%)
		}, // 502733/669296 (75.11%)
		previous_visits?: number[], // 1/669296 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 1/176671 (0.00%)
			event_id?: "12mv09tb5s3l3"|"12of8upvbytlw"|"12ogeb0zm4q79", // 4/176671 (0.00%)
			height?: number, // 1/176671 (0.00%)
			oembed?: {
				author_name?: string, // 19601/111687 (17.55%)
				author_url?: string, // 19592/111687 (17.54%)
				cache_age?: number, // 2/111687 (0.00%)
				description?: string, // 94093/111687 (84.25%)
				height: number,
				html: string,
				mean_alpha?: number, // 46/111687 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 111195/111687 (99.56%)
				thumbnail_url?: string, // 111648/111687 (99.97%)
				thumbnail_width?: number, // 111195/111687 (99.56%)
				title?: string, // 111550/111687 (99.88%)
				type: "video"|"rich",
				url?: string, // 8703/111687 (7.79%)
				version: "1.0",
				width: number,
			}, // 111687/176671 (63.22%)
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
			}, // 64979/176671 (36.78%)
			type?: string, // 111692/176671 (63.22%)
			width?: number, // 1/176671 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 111692/669296 (16.69%)
			height?: number, // 111692/669296 (16.69%)
			media_domain_url?: string, // 111692/669296 (16.69%)
			scrolling?: boolean, // 111692/669296 (16.69%)
			width?: number, // 111692/669296 (16.69%)
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
		subreddit_type: "public"|"user"|"restricted"|"archived"|"gold_restricted",
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"random"|"live",
		thumbnail: string,
		thumbnail_height?: number|null, // 668903/669296 (99.94%)
		thumbnail_width?: number|null, // 668903/669296 (99.94%)
		title: string,
		total_awards_received?: number, // 658258/669296 (98.35%)
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 675322/18412519 (3.67%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 17778/18412519 (0.10%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 17778/18412519 (0.10%)
	embed_url?: null|string, // 17778/18412519 (0.10%)
	event_end?: number, // 339/18412519 (0.00%)
	event_is_live?: boolean, // 339/18412519 (0.00%)
	event_start?: number, // 339/18412519 (0.00%)
	events?: [], // 17778/18412519 (0.10%)
	eventsOnRender?: [], // 17778/18412519 (0.10%)
	gilded: number,
	gildings: {
		gid_1?: number, // 243618/18412519 (1.32%)
		gid_2?: number, // 230170/18412519 (1.25%)
		gid_3?: number, // 209039/18412519 (1.14%)
	},
	hidden: boolean,
	href_url?: string, // 17778/18412519 (0.10%)
	id: string,
	is_blank?: boolean, // 17778/18412519 (0.10%)
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
		a?: string, // 39236/2107642 (1.86%)
		e: "text"|"emoji",
		t?: string, // 2068406/2107642 (98.14%)
		u?: string, // 39236/2107642 (1.86%)
	}[],
	link_flair_template_id?: string, // 3108051/18412519 (16.88%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 73/1664367 (0.00%)
		oembed?: {
			author_name?: string, // 952131/1352282 (70.41%)
			author_url?: string, // 951406/1352282 (70.36%)
			cache_age?: number, // 339/1352282 (0.03%)
			description?: string, // 625670/1352282 (46.27%)
			height: number,
			html: string,
			mean_alpha?: number, // 2642/1352282 (0.20%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1349729/1352282 (99.81%)
			thumbnail_url?: string, // 1351517/1352282 (99.94%)
			thumbnail_width?: number, // 1349729/1352282 (99.81%)
			title?: string, // 1350467/1352282 (99.87%)
			type: "video"|"rich",
			url?: string, // 353071/1352282 (26.11%)
			version: "1.0",
			width: number,
		}, // 1352282/1664367 (81.25%)
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
		}, // 312012/1664367 (18.75%)
		type?: string, // 1352355/1664367 (81.25%)
	},
	media_embed: {
		content?: string, // 1352355/18412519 (7.34%)
		height?: number, // 1352355/18412519 (7.34%)
		scrolling?: boolean, // 1352355/18412519 (7.34%)
		width?: number, // 1352355/18412519 (7.34%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 5765/202084 (2.85%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 201858/202084 (99.89%)
			hlsUrl?: string, // 5765/202084 (2.85%)
			id?: string, // 201858/202084 (99.89%)
			isGif?: boolean, // 5765/202084 (2.85%)
			m?: "image/jpg"|"image/png"|"image/gif", // 196093/202084 (97.04%)
			s?: {
				gif?: string, // 1828/196093 (0.93%)
				mp4?: string, // 1828/196093 (0.93%)
				u?: string, // 194265/196093 (99.07%)
				x: number,
				y: number,
			}, // 196093/202084 (97.04%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 5765/202084 (2.85%)
			y?: number, // 5765/202084 (2.85%)
		},
	}|null, // 207765/18412519 (1.13%)
	media_only: boolean,
	mobile_ad_url?: string, // 17778/18412519 (0.10%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 17778/18412519 (0.10%)
	outbound_link?: {
	}, // 17778/18412519 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7428149/18412519 (40.34%)
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
				}, // 229661/7428149 (3.09%)
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
				}, // 229661/7428149 (3.09%)
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
				}, // 879942/7428149 (11.85%)
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
				}, // 912394/7428149 (12.28%)
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
		}, // 199144/7428149 (2.68%)
	}, // 7428149/18412519 (40.34%)
	priority_id?: null, // 17778/18412519 (0.10%)
	promoted?: boolean, // 17778/18412519 (0.10%)
	promoted_by?: null, // 17778/18412519 (0.10%)
	promoted_display_name?: null, // 17778/18412519 (0.10%)
	promoted_url?: null, // 17778/18412519 (0.10%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 73/1664367 (0.00%)
		oembed?: {
			author_name?: string, // 952131/1352282 (70.41%)
			author_url?: string, // 951406/1352282 (70.36%)
			cache_age?: number, // 339/1352282 (0.03%)
			description?: string, // 625670/1352282 (46.27%)
			height: number,
			html: string,
			mean_alpha?: number, // 2642/1352282 (0.20%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1349729/1352282 (99.81%)
			thumbnail_url?: string, // 1351517/1352282 (99.94%)
			thumbnail_width?: number, // 1349729/1352282 (99.81%)
			title?: string, // 1350467/1352282 (99.87%)
			type: "video"|"rich",
			url?: string, // 353071/1352282 (26.11%)
			version: "1.0",
			width: number,
		}, // 1352282/1664367 (81.25%)
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
		}, // 312012/1664367 (18.75%)
		type?: string, // 1352355/1664367 (81.25%)
	},
	secure_media_embed: {
		content?: string, // 1352355/18412519 (7.34%)
		height?: number, // 1352355/18412519 (7.34%)
		media_domain_url?: string, // 1352355/18412519 (7.34%)
		scrolling?: boolean, // 1352355/18412519 (7.34%)
		width?: number, // 1352355/18412519 (7.34%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 17778/18412519 (0.10%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private"|"gold_restricted"|"archived",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[], // 17778/18412519 (0.10%)
	third_party_tracking?: null, // 17778/18412519 (0.10%)
	third_party_tracking_2?: null, // 17778/18412519 (0.10%)
	thumbnail: string,
	thumbnail_height?: number|null, // 18407242/18412519 (99.97%)
	thumbnail_width?: number|null, // 18407242/18412519 (99.97%)
	title: string,
	total_awards_received?: number, // 18208353/18412519 (98.89%)
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}