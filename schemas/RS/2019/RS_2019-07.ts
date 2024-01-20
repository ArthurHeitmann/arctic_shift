interface RedditPost {
	adserver_click_url?: null, // 19941/20768578 (0.10%)
	adserver_imp_pixel?: null, // 19941/20768578 (0.10%)
	all_awardings: {
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		name: string,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		subreddit_coin_reward?: number, // 87499/87572 (99.92%)
		subreddit_id: null|string,
	}[],
	allow_live_comments?: boolean, // 20755931/20768578 (99.94%)
	archived?: boolean, // 20396262/20768578 (98.21%)
	author: string,
	author_cakeday?: boolean, // 49695/20768578 (0.24%)
	author_created_utc?: number|null, // 20768521/20768578 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 389200/1257020 (30.96%)
		e: "text"|"emoji",
		t?: string, // 867820/1257020 (69.04%)
		u?: string, // 389200/1257020 (30.96%)
	}[], // 16841653/20768578 (81.09%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 16841653/20768578 (81.09%)
	author_fullname?: string|null, // 20768521/20768578 (100.00%)
	author_id?: string|null, // 19941/20768578 (0.10%)
	author_patreon_flair?: boolean, // 16841653/20768578 (81.09%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Play Now"|"Download"|"Install"|"View More"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|""|"See Menu", // 17501/20768578 (0.08%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"videos"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"animals"|"music"|""|"memes"|"food"|"funny",
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
	}[], // 4931/20768578 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"entertainment"|"gaming"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 823137/20768578 (3.96%)
	crosspost_parent_list?: {
		all_awardings: {
			award_type: "global"|"community"|"moderator",
			coin_price: number,
			coin_reward: number,
			count: number,
			days_of_drip_extension: number,
			days_of_premium: number,
			description: string|null,
			icon_height: number,
			icon_url: string,
			icon_width: number,
			id: string,
			is_enabled: boolean,
			name: string,
			resized_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			subreddit_coin_reward?: number, // 158003/159285 (99.20%)
			subreddit_id: null|string,
		}[],
		allow_live_comments?: boolean, // 813923/814360 (99.95%)
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 2466/814360 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 17599/54147 (32.50%)
			e: "text"|"emoji",
			t?: string, // 36548/54147 (67.50%)
			u?: string, // 17599/54147 (32.50%)
		}[], // 739507/814360 (90.81%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 739507/814360 (90.81%)
		author_fullname?: string, // 739507/814360 (90.81%)
		author_patreon_flair?: boolean, // 739507/814360 (90.81%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"videos"|"diy_and_crafts"|"music"|"memes"|""|"writing"|"funny",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string,
			display_layout: null|"GALLERY"|"TIMELINE",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 324/814360 (0.04%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 473/814360 (0.06%)
		event_is_live?: boolean, // 473/814360 (0.06%)
		event_start?: number, // 473/814360 (0.06%)
		gilded: number,
		gildings: {
			gid_1?: number, // 81627/814360 (10.02%)
			gid_2?: number, // 53626/814360 (6.59%)
			gid_3?: number, // 13436/814360 (1.65%)
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
			a?: string, // 2835/77200 (3.67%)
			e: "text"|"emoji",
			t?: string, // 74365/77200 (96.33%)
			u?: string, // 2835/77200 (3.67%)
		}[],
		link_flair_template_id?: string, // 151470/814360 (18.60%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "13b2tdrfoqye7"|"13b8s2wtodcn4"|"13bciwytbakvm", // 4/224671 (0.00%)
			oembed?: {
				author_name?: string, // 43632/151262 (28.85%)
				author_url?: string, // 22115/151262 (14.62%)
				cache_age?: number, // 1144/151262 (0.76%)
				description?: string, // 130960/151262 (86.58%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 47/151262 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 148358/151262 (98.08%)
				thumbnail_url?: string, // 149582/151262 (98.89%)
				thumbnail_width?: number, // 148358/151262 (98.08%)
				title?: string, // 149705/151262 (98.97%)
				type: "video"|"rich",
				url?: string, // 7402/151262 (4.89%)
				version: "1.0",
				width: number,
			}, // 151262/224671 (67.33%)
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
			}, // 73405/224671 (32.67%)
			type?: string, // 151266/224671 (67.33%)
		},
		media_embed: {
			content?: string, // 151266/814360 (18.57%)
			height?: number, // 151266/814360 (18.57%)
			scrolling?: boolean, // 151266/814360 (18.57%)
			width?: number, // 151266/814360 (18.57%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 248/10906 (2.27%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 10894/10906 (99.89%)
				hlsUrl?: string, // 248/10906 (2.27%)
				id?: string, // 10894/10906 (99.89%)
				isGif?: boolean, // 248/10906 (2.27%)
				m?: "image/png"|"image/jpg"|"image/gif", // 10646/10906 (97.62%)
				s?: {
					gif?: string, // 133/10646 (1.25%)
					mp4?: string, // 133/10646 (1.25%)
					u?: string, // 10513/10646 (98.75%)
					x: number,
					y: number,
				}, // 10646/10906 (97.62%)
				status: "valid"|"failed",
				x?: number, // 248/10906 (2.27%)
				y?: number, // 248/10906 (2.27%)
			},
		}|null, // 5041/814360 (0.62%)
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
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 633635/814360 (77.81%)
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
					}, // 126726/633635 (20.00%)
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
					}, // 126726/633635 (20.00%)
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
					}, // 248113/633635 (39.16%)
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
					}, // 249863/633635 (39.43%)
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
			}, // 129436/633635 (20.43%)
		}, // 633635/814360 (77.81%)
		previous_visits?: number[], // 2/814360 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "13b2tdrfoqye7"|"13b8s2wtodcn4"|"13bciwytbakvm", // 4/224671 (0.00%)
			oembed?: {
				author_name?: string, // 43632/151262 (28.85%)
				author_url?: string, // 22115/151262 (14.62%)
				cache_age?: number, // 1144/151262 (0.76%)
				description?: string, // 130960/151262 (86.58%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 47/151262 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 148358/151262 (98.08%)
				thumbnail_url?: string, // 149582/151262 (98.89%)
				thumbnail_width?: number, // 148358/151262 (98.08%)
				title?: string, // 149705/151262 (98.97%)
				type: "video"|"rich",
				url?: string, // 7402/151262 (4.89%)
				version: "1.0",
				width: number,
			}, // 151262/224671 (67.33%)
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
			}, // 73405/224671 (32.67%)
			type?: string, // 151266/224671 (67.33%)
		},
		secure_media_embed: {
			content?: string, // 151266/814360 (18.57%)
			height?: number, // 151266/814360 (18.57%)
			media_domain_url?: string, // 151266/814360 (18.57%)
			scrolling?: boolean, // 151266/814360 (18.57%)
			width?: number, // 151266/814360 (18.57%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		steward_reports?: [], // 27/814360 (0.00%)
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"random"|"live",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		total_awards_received: number,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 823137/20768578 (3.96%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 19941/20768578 (0.10%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 19941/20768578 (0.10%)
	embed_url?: null|string, // 19941/20768578 (0.10%)
	event_end?: number, // 1420/20768578 (0.01%)
	event_is_live?: boolean, // 1420/20768578 (0.01%)
	event_start?: number, // 1420/20768578 (0.01%)
	events?: [], // 19941/20768578 (0.10%)
	eventsOnRender?: [], // 19941/20768578 (0.10%)
	gilded: number,
	gildings: {
		gid_1?: number, // 50218/20768578 (0.24%)
		gid_2?: number, // 28376/20768578 (0.14%)
		gid_3?: number, // 5403/20768578 (0.03%)
	},
	hidden: boolean,
	href_url?: string, // 19941/20768578 (0.10%)
	id: string,
	is_blank?: boolean, // 19941/20768578 (0.10%)
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
		a?: string, // 71214/2508513 (2.84%)
		e: "text"|"emoji",
		t?: string, // 2437299/2508513 (97.16%)
		u?: string, // 71214/2508513 (2.84%)
	}[],
	link_flair_template_id?: string, // 3792054/20768578 (18.26%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 43/1698664 (0.00%)
		oembed?: {
			author_name?: string, // 988187/1300169 (76.00%)
			author_url?: string, // 944501/1300169 (72.64%)
			cache_age?: number, // 33366/1300169 (2.57%)
			description?: string, // 541499/1300169 (41.65%)
			height?: number|null, // 1300168/1300169 (100.00%)
			html?: string, // 1300168/1300169 (100.00%)
			mean_alpha?: number, // 3036/1300169 (0.23%)
			provider_name?: string, // 1300168/1300169 (100.00%)
			provider_url?: string, // 1300168/1300169 (100.00%)
			thumbnail_height?: number, // 1255073/1300169 (96.53%)
			thumbnail_url?: string, // 1262609/1300169 (97.11%)
			thumbnail_width?: number, // 1255073/1300169 (96.53%)
			title?: string, // 1261766/1300169 (97.05%)
			type?: "video"|"rich", // 1300168/1300169 (100.00%)
			url?: string, // 281810/1300169 (21.67%)
			version?: "1.0", // 1300168/1300169 (100.00%)
			width?: number, // 1300168/1300169 (100.00%)
		}, // 1300169/1698664 (76.54%)
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
		}, // 398452/1698664 (23.46%)
		type?: string, // 1300212/1698664 (76.54%)
	},
	media_embed: {
		content?: string|null, // 1300212/20768578 (6.26%)
		height?: number, // 1300212/20768578 (6.26%)
		scrolling?: boolean, // 1300212/20768578 (6.26%)
		width?: number, // 1300212/20768578 (6.26%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 7154/247885 (2.89%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 247045/247885 (99.66%)
			hlsUrl?: string, // 7154/247885 (2.89%)
			id?: string, // 247045/247885 (99.66%)
			isGif?: boolean, // 7154/247885 (2.89%)
			m?: "image/jpg"|"image/png"|"image/gif", // 239891/247885 (96.78%)
			s?: {
				gif?: string, // 1380/239891 (0.58%)
				mp4?: string, // 1380/239891 (0.58%)
				u?: string, // 238511/239891 (99.42%)
				x: number,
				y: number,
			}, // 239891/247885 (96.78%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 7154/247885 (2.89%)
			y?: number, // 7154/247885 (2.89%)
		},
	}|null, // 243917/20768578 (1.17%)
	media_only: boolean,
	mobile_ad_url?: string, // 19941/20768578 (0.10%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 19941/20768578 (0.10%)
	outbound_link?: {
	}, // 19941/20768578 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 8246109/20768578 (39.70%)
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
				}, // 294323/8246109 (3.57%)
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
				}, // 294323/8246109 (3.57%)
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
				}, // 1158085/8246109 (14.04%)
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
				}, // 1195962/8246109 (14.50%)
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
		}, // 262997/8246109 (3.19%)
	}, // 8246109/20768578 (39.70%)
	priority_id?: null, // 19941/20768578 (0.10%)
	promoted?: boolean, // 19941/20768578 (0.10%)
	promoted_by?: null, // 19941/20768578 (0.10%)
	promoted_display_name?: null, // 19941/20768578 (0.10%)
	promoted_url?: null, // 19941/20768578 (0.10%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 43/1698664 (0.00%)
		oembed?: {
			author_name?: string, // 988187/1300169 (76.00%)
			author_url?: string, // 944501/1300169 (72.64%)
			cache_age?: number, // 33366/1300169 (2.57%)
			description?: string, // 541499/1300169 (41.65%)
			height?: number|null, // 1300168/1300169 (100.00%)
			html?: string, // 1300168/1300169 (100.00%)
			mean_alpha?: number, // 3036/1300169 (0.23%)
			provider_name?: string, // 1300168/1300169 (100.00%)
			provider_url?: string, // 1300168/1300169 (100.00%)
			thumbnail_height?: number, // 1255073/1300169 (96.53%)
			thumbnail_url?: string, // 1262609/1300169 (97.11%)
			thumbnail_width?: number, // 1255073/1300169 (96.53%)
			title?: string, // 1261766/1300169 (97.05%)
			type?: "video"|"rich", // 1300168/1300169 (100.00%)
			url?: string, // 281810/1300169 (21.67%)
			version?: "1.0", // 1300168/1300169 (100.00%)
			width?: number, // 1300168/1300169 (100.00%)
		}, // 1300169/1698664 (76.54%)
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
		}, // 398452/1698664 (23.46%)
		type?: string, // 1300212/1698664 (76.54%)
	},
	secure_media_embed: {
		content?: string|null, // 1300212/20768578 (6.26%)
		height?: number, // 1300212/20768578 (6.26%)
		media_domain_url?: string, // 1300212/20768578 (6.26%)
		scrolling?: boolean, // 1300212/20768578 (6.26%)
		width?: number, // 1300212/20768578 (6.26%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 19941/20768578 (0.10%)
	spoiler: boolean,
	steward_reports?: [], // 451/20768578 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted",
	suggested_sort: null|"qa"|"top"|"confidence"|"new"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: string[], // 19941/20768578 (0.10%)
	third_party_tracking?: null, // 19941/20768578 (0.10%)
	third_party_tracking_2?: null, // 19941/20768578 (0.10%)
	thumbnail: string,
	thumbnail_height?: number|null, // 20768305/20768578 (100.00%)
	thumbnail_width?: number|null, // 20768305/20768578 (100.00%)
	title: string,
	total_awards_received: number,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}