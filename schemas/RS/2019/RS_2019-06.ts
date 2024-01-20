interface RedditPost {
	adserver_click_url?: null, // 22293/19731676 (0.11%)
	adserver_imp_pixel?: null, // 22293/19731676 (0.11%)
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
		subreddit_coin_reward?: number, // 83904/84050 (99.83%)
		subreddit_id: null|string,
	}[],
	allow_live_comments?: boolean, // 19189038/19731676 (97.25%)
	archived?: boolean, // 19189289/19731676 (97.25%)
	author: string,
	author_cakeday?: boolean, // 48040/19731676 (0.24%)
	author_created_utc?: number|null, // 19731636/19731676 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 365034/1181857 (30.89%)
		e: "text"|"emoji",
		t?: string, // 816823/1181857 (69.11%)
		u?: string, // 365034/1181857 (30.89%)
	}[], // 15888201/19731676 (80.52%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 15888201/19731676 (80.52%)
	author_fullname?: string|null, // 19731636/19731676 (100.00%)
	author_id?: string|null, // 22293/19731676 (0.11%)
	author_patreon_flair?: boolean, // 15888201/19731676 (80.52%)
	call_to_action?: "Sign Up"|"Learn More"|"Play Now"|"Shop Now"|"Install"|"View More"|"Download"|"Watch Now"|"Apply Now"|"Get a Quote"|"Contact Us"|"Get Showtimes"|"See Menu"|"", // 20043/19731676 (0.10%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"videos"|"photography"|"writing"|"entertainment"|"animals"|"diy_and_crafts"|"music"|"memes"|""|"food"|"funny",
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
	}[], // 4226/19731676 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 721975/19731676 (3.66%)
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
			subreddit_coin_reward?: number, // 139461/140794 (99.05%)
			subreddit_id: null|string,
		}[],
		allow_live_comments?: boolean, // 702464/714511 (98.31%)
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 2101/714511 (0.29%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 15962/48197 (33.12%)
			e: "text"|"emoji",
			t?: string, // 32235/48197 (66.88%)
			u?: string, // 15962/48197 (33.12%)
		}[], // 639537/714511 (89.51%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 639537/714511 (89.51%)
		author_fullname?: string, // 639537/714511 (89.51%)
		author_patreon_flair?: boolean, // 639537/714511 (89.51%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|"diy_and_crafts"|"memes"|"videos"|"music"|""|"food"|"funny",
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
		}[], // 300/714511 (0.04%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type?: null, // 702481/714511 (98.32%)
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 253/714511 (0.04%)
		event_is_live?: boolean, // 253/714511 (0.04%)
		event_start?: number, // 253/714511 (0.04%)
		gilded: number,
		gildings: {
			gid_1?: number, // 75636/714511 (10.59%)
			gid_2?: number, // 50796/714511 (7.11%)
			gid_3?: number, // 12534/714511 (1.75%)
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
			a?: string, // 1574/67929 (2.32%)
			e: "text"|"emoji",
			t?: string, // 66355/67929 (97.68%)
			u?: string, // 1574/67929 (2.32%)
		}[],
		link_flair_template_id?: string, // 130231/714511 (18.23%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "132etn6ke3o0g"|"1335xnipi5wdj", // 3/191018 (0.00%)
			oembed?: {
				author_name?: string, // 18823/125692 (14.98%)
				author_url?: string, // 18533/125692 (14.74%)
				cache_age?: number, // 16/125692 (0.01%)
				description?: string, // 108698/125692 (86.48%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 48/125692 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 124995/125692 (99.45%)
				thumbnail_url?: string, // 125510/125692 (99.86%)
				thumbnail_width?: number, // 124995/125692 (99.45%)
				title?: string, // 125361/125692 (99.74%)
				type: "video"|"rich",
				url?: string, // 5586/125692 (4.44%)
				version: "1.0",
				width: number,
			}, // 125692/191018 (65.80%)
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
			}, // 65323/191018 (34.20%)
			type?: string, // 125695/191018 (65.80%)
		},
		media_embed: {
			content?: string, // 125695/714511 (17.59%)
			height?: number, // 125695/714511 (17.59%)
			scrolling?: boolean, // 125695/714511 (17.59%)
			width?: number, // 125695/714511 (17.59%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 177/8464 (2.09%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 8434/8464 (99.65%)
				hlsUrl?: string, // 177/8464 (2.09%)
				id?: string, // 8434/8464 (99.65%)
				isGif?: boolean, // 177/8464 (2.09%)
				m?: "image/jpg"|"image/png"|"image/gif", // 8257/8464 (97.55%)
				s?: {
					gif?: string, // 175/8257 (2.12%)
					mp4?: string, // 175/8257 (2.12%)
					u?: string, // 8082/8257 (97.88%)
					x: number,
					y: number,
				}, // 8257/8464 (97.55%)
				status: "valid"|"failed",
				x?: number, // 177/8464 (2.09%)
				y?: number, // 177/8464 (2.09%)
			},
		}|null, // 4115/714511 (0.58%)
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
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 540779/714511 (75.69%)
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
					}, // 103796/540779 (19.19%)
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
					}, // 103796/540779 (19.19%)
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
					}, // 200202/540779 (37.02%)
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
					}, // 201742/540779 (37.31%)
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
			}, // 104678/540779 (19.36%)
		}, // 540779/714511 (75.69%)
		previous_visits?: number[], // 3/714511 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "132etn6ke3o0g"|"1335xnipi5wdj", // 3/191018 (0.00%)
			oembed?: {
				author_name?: string, // 18823/125692 (14.98%)
				author_url?: string, // 18533/125692 (14.74%)
				cache_age?: number, // 16/125692 (0.01%)
				description?: string, // 108698/125692 (86.48%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 48/125692 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 124995/125692 (99.45%)
				thumbnail_url?: string, // 125510/125692 (99.86%)
				thumbnail_width?: number, // 124995/125692 (99.45%)
				title?: string, // 125361/125692 (99.74%)
				type: "video"|"rich",
				url?: string, // 5586/125692 (4.44%)
				version: "1.0",
				width: number,
			}, // 125692/191018 (65.80%)
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
			}, // 65323/191018 (34.20%)
			type?: string, // 125695/191018 (65.80%)
		},
		secure_media_embed: {
			content?: string, // 125695/714511 (17.59%)
			height?: number, // 125695/714511 (17.59%)
			media_domain_url?: string, // 125695/714511 (17.59%)
			scrolling?: boolean, // 125695/714511 (17.59%)
			width?: number, // 125695/714511 (17.59%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		steward_reports?: [], // 10/714511 (0.00%)
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"restricted"|"user"|"archived",
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
	}[], // 721975/19731676 (3.66%)
	discussion_type?: null, // 19189544/19731676 (97.25%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 22293/19731676 (0.11%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 22293/19731676 (0.11%)
	embed_url?: null|string, // 22293/19731676 (0.11%)
	event_end?: number, // 1296/19731676 (0.01%)
	event_is_live?: boolean, // 1296/19731676 (0.01%)
	event_start?: number, // 1296/19731676 (0.01%)
	events?: [], // 22293/19731676 (0.11%)
	eventsOnRender?: [], // 22293/19731676 (0.11%)
	gilded: number,
	gildings: {
		gid_1?: number, // 48238/19731676 (0.24%)
		gid_2?: number, // 28716/19731676 (0.15%)
		gid_3?: number, // 5924/19731676 (0.03%)
	},
	hidden: boolean,
	href_url?: string, // 22293/19731676 (0.11%)
	id: string,
	is_blank?: boolean, // 22293/19731676 (0.11%)
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
		a?: string, // 53538/2266943 (2.36%)
		e: "text"|"emoji",
		t?: string, // 2213405/2266943 (97.64%)
		u?: string, // 53538/2266943 (2.36%)
	}[],
	link_flair_template_id?: string, // 3405569/19731676 (17.26%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 82/1549370 (0.01%)
		oembed?: {
			author_name?: string, // 862402/1199144 (71.92%)
			author_url?: string, // 861786/1199144 (71.87%)
			cache_age?: number, // 414/1199144 (0.03%)
			description?: string, // 516790/1199144 (43.10%)
			height: number|null,
			html: string,
			marginheight?: number, // 6/1199144 (0.00%)
			marginwidth?: number, // 6/1199144 (0.00%)
			mean_alpha?: number, // 3181/1199144 (0.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1193074/1199144 (99.49%)
			thumbnail_url?: string, // 1194738/1199144 (99.63%)
			thumbnail_width?: number, // 1193074/1199144 (99.49%)
			title?: string, // 1193958/1199144 (99.57%)
			type: "video"|"rich",
			url?: string, // 230393/1199144 (19.21%)
			version?: "1.0", // 1199138/1199144 (100.00%)
			width: number,
		}, // 1199144/1549370 (77.40%)
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
		}, // 350144/1549370 (22.60%)
		type?: string, // 1199226/1549370 (77.40%)
	},
	media_embed: {
		content?: string, // 1199226/19731676 (6.08%)
		height?: number, // 1199226/19731676 (6.08%)
		scrolling?: boolean, // 1199226/19731676 (6.08%)
		width?: number, // 1199226/19731676 (6.08%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 6028/221957 (2.72%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 221346/221957 (99.72%)
			hlsUrl?: string, // 6028/221957 (2.72%)
			id?: string, // 221346/221957 (99.72%)
			isGif?: boolean, // 6028/221957 (2.72%)
			m?: "image/jpg"|"image/png"|"image/gif", // 215318/221957 (97.01%)
			s?: {
				gif?: string, // 1402/215318 (0.65%)
				mp4?: string, // 1402/215318 (0.65%)
				u?: string, // 213916/215318 (99.35%)
				x: number,
				y: number,
			}, // 215318/221957 (97.01%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 6028/221957 (2.72%)
			y?: number, // 6028/221957 (2.72%)
		},
	}|null, // 217391/19731676 (1.10%)
	media_only: boolean,
	mobile_ad_url?: string, // 22293/19731676 (0.11%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 22293/19731676 (0.11%)
	outbound_link?: {
	}, // 22293/19731676 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7583924/19731676 (38.44%)
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
				}, // 259979/7583924 (3.43%)
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
				}, // 259979/7583924 (3.43%)
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
				}, // 1015124/7583924 (13.39%)
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
				}, // 1046936/7583924 (13.80%)
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
		}, // 226824/7583924 (2.99%)
	}, // 7583924/19731676 (38.44%)
	priority_id?: null, // 22293/19731676 (0.11%)
	promoted?: boolean, // 22293/19731676 (0.11%)
	promoted_by?: null, // 22293/19731676 (0.11%)
	promoted_display_name?: null, // 22293/19731676 (0.11%)
	promoted_url?: null, // 22293/19731676 (0.11%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 82/1549370 (0.01%)
		oembed?: {
			author_name?: string, // 862402/1199144 (71.92%)
			author_url?: string, // 861786/1199144 (71.87%)
			cache_age?: number, // 414/1199144 (0.03%)
			description?: string, // 516790/1199144 (43.10%)
			height: number|null,
			html: string,
			marginheight?: number, // 6/1199144 (0.00%)
			marginwidth?: number, // 6/1199144 (0.00%)
			mean_alpha?: number, // 3181/1199144 (0.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1193074/1199144 (99.49%)
			thumbnail_url?: string, // 1194738/1199144 (99.63%)
			thumbnail_width?: number, // 1193074/1199144 (99.49%)
			title?: string, // 1193958/1199144 (99.57%)
			type: "video"|"rich",
			url?: string, // 230393/1199144 (19.21%)
			version?: "1.0", // 1199138/1199144 (100.00%)
			width: number,
		}, // 1199144/1549370 (77.40%)
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
		}, // 350144/1549370 (22.60%)
		type?: string, // 1199226/1549370 (77.40%)
	},
	secure_media_embed: {
		content?: string, // 1199226/19731676 (6.08%)
		height?: number, // 1199226/19731676 (6.08%)
		media_domain_url?: string, // 1199226/19731676 (6.08%)
		scrolling?: boolean, // 1199226/19731676 (6.08%)
		width?: number, // 1199226/19731676 (6.08%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 22293/19731676 (0.11%)
	spoiler: boolean,
	steward_reports?: [], // 104/19731676 (0.00%)
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"gold_restricted"|"private",
	suggested_sort: null|"qa"|"top"|"confidence"|"new"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[], // 22293/19731676 (0.11%)
	third_party_tracking?: null, // 22293/19731676 (0.11%)
	third_party_tracking_2?: null, // 22293/19731676 (0.11%)
	thumbnail: string,
	thumbnail_height?: number|null, // 19731434/19731676 (100.00%)
	thumbnail_width?: number|null, // 19731434/19731676 (100.00%)
	title: string,
	total_awards_received: number,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}