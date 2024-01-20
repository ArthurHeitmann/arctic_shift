interface RedditPost {
	adserver_click_url?: null, // 30177/19456493 (0.16%)
	adserver_imp_pixel?: null, // 30177/19456493 (0.16%)
	all_awardings: {
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
		name: string,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		subreddit_id: null|"t5_2rjz2"|"t5_2qo4s"|"t5_3hx3r"|"t5_2tk95"|"t5_mouw"|"t5_2wb7y",
	}[],
	archived?: boolean, // 19162194/19456493 (98.49%)
	author: string,
	author_cakeday?: boolean, // 37626/19456493 (0.19%)
	author_created_utc?: number|null, // 19456486/19456493 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 346776/1198295 (28.94%)
		e: "text"|"emoji",
		t?: string, // 851519/1198295 (71.06%)
		u?: string, // 346776/1198295 (28.94%)
	}[], // 15949612/19456493 (81.98%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 15949612/19456493 (81.98%)
	author_fullname?: string|null, // 19456486/19456493 (100.00%)
	author_id?: string|null, // 30177/19456493 (0.16%)
	author_patreon_flair?: boolean, // 15949612/19456493 (81.98%)
	call_to_action?: "Play Now"|"Install"|"Learn More"|"Sign Up"|"Shop Now"|"View More"|"Download"|"Apply Now"|"Watch Now"|"Contact Us"|"Get Showtimes"|"Get a Quote"|"See Menu", // 27507/19456493 (0.14%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"videos"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"animals"|"music"|"memes"|""|"food"|"funny",
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
		sr_detail?: {
			banner_img: string,
			banner_size: number[],
			community_icon: string,
			icon_img: string,
			icon_size: number[],
			key_color: "#7e53c1",
			mod_permissions: [],
			name: "t5_3oeyf",
			over_18: boolean,
			primary_color: "#a964db",
			sr: "FortNiteBR",
			sr_display_name_prefixed: "r/FortNiteBR",
			subreddit_type: "public",
			subscribers: number,
			title: "Fortnite: Battle Royale",
			url: "/r/FortNiteBR/",
			user_can_crosspost: null,
			whitelist_status: "all_ads",
		}, // 1/4151 (0.02%)
		subreddit_id: string,
		title: string,
	}[], // 4151/19456493 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 714601/19456493 (3.67%)
	crosspost_parent_list?: {
		all_awardings: {
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
			name: string,
			resized_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			subreddit_id: null|"t5_2rjz2"|"t5_2qo4s"|"t5_3hx3r"|"t5_mouw"|"t5_2tk95",
		}[],
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 1425/708505 (0.20%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 15007/51092 (29.37%)
			e: "text"|"emoji",
			t?: string, // 36085/51092 (70.63%)
			u?: string, // 15007/51092 (29.37%)
		}[], // 648033/708505 (91.46%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 648033/708505 (91.46%)
		author_fullname?: string, // 648033/708505 (91.46%)
		author_patreon_flair?: boolean, // 648033/708505 (91.46%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|""|"entertainment"|"diy_and_crafts"|"videos"|"memes"|"music"|"food"|"writing",
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
		}[], // 410/708505 (0.06%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 279/708505 (0.04%)
		event_is_live?: boolean, // 279/708505 (0.04%)
		event_start?: number, // 279/708505 (0.04%)
		gilded: number,
		gildings: {
			gid_1?: number, // 70590/708505 (9.96%)
			gid_2?: number, // 48952/708505 (6.91%)
			gid_3?: number, // 13820/708505 (1.95%)
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
			a?: string, // 1807/66340 (2.72%)
			e: "text"|"emoji",
			t?: string, // 64533/66340 (97.28%)
			u?: string, // 1807/66340 (2.72%)
		}[],
		link_flair_template_id?: string, // 124580/708505 (17.58%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 1/190750 (0.00%)
			event_id?: "12wmi9wmjbn0h"|"131brzvnna7zv"|"12rlf8yuehc5k"|"12vwx3xt01smn", // 6/190750 (0.00%)
			height?: number, // 1/190750 (0.00%)
			oembed?: {
				author_name?: string, // 19331/122601 (15.77%)
				author_url?: string, // 19310/122601 (15.75%)
				cache_age?: number, // 8/122601 (0.01%)
				description?: string, // 105103/122601 (85.73%)
				height: number,
				html: string,
				mean_alpha?: number, // 52/122601 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 122069/122601 (99.57%)
				thumbnail_url?: string, // 122452/122601 (99.88%)
				thumbnail_width?: number, // 122069/122601 (99.57%)
				title?: string, // 122387/122601 (99.83%)
				type: "video"|"rich",
				url?: string, // 6627/122601 (5.41%)
				version: "1.0",
				width: number,
			}, // 122601/190750 (64.27%)
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
			}, // 68142/190750 (35.72%)
			type?: string, // 122608/190750 (64.28%)
			width?: number, // 1/190750 (0.00%)
		},
		media_embed: {
			content?: string, // 122608/708505 (17.31%)
			height?: number, // 122608/708505 (17.31%)
			scrolling?: boolean, // 122608/708505 (17.31%)
			width?: number, // 122608/708505 (17.31%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 199/7879 (2.53%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 7868/7879 (99.86%)
				hlsUrl?: string, // 199/7879 (2.53%)
				id?: string, // 7868/7879 (99.86%)
				isGif?: boolean, // 199/7879 (2.53%)
				m?: "image/jpg"|"image/png"|"image/gif", // 7669/7879 (97.33%)
				s?: {
					gif?: string, // 129/7669 (1.68%)
					mp4?: string, // 129/7669 (1.68%)
					u?: string, // 7540/7669 (98.32%)
					x: number,
					y: number,
				}, // 7669/7879 (97.33%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 199/7879 (2.53%)
				y?: number, // 199/7879 (2.53%)
			},
		}|null, // 4295/708505 (0.61%)
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
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 549671/708505 (77.58%)
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
					}, // 103737/549671 (18.87%)
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
					}, // 103737/549671 (18.87%)
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
					}, // 195688/549671 (35.60%)
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
					}, // 198924/549671 (36.19%)
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
			}, // 102985/549671 (18.74%)
		}, // 549671/708505 (77.58%)
		previous_visits?: number[], // 3/708505 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 1/190750 (0.00%)
			event_id?: "12wmi9wmjbn0h"|"131brzvnna7zv"|"12rlf8yuehc5k"|"12vwx3xt01smn", // 6/190750 (0.00%)
			height?: number, // 1/190750 (0.00%)
			oembed?: {
				author_name?: string, // 19331/122601 (15.77%)
				author_url?: string, // 19310/122601 (15.75%)
				cache_age?: number, // 8/122601 (0.01%)
				description?: string, // 105103/122601 (85.73%)
				height: number,
				html: string,
				mean_alpha?: number, // 52/122601 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 122069/122601 (99.57%)
				thumbnail_url?: string, // 122452/122601 (99.88%)
				thumbnail_width?: number, // 122069/122601 (99.57%)
				title?: string, // 122387/122601 (99.83%)
				type: "video"|"rich",
				url?: string, // 6627/122601 (5.41%)
				version: "1.0",
				width: number,
			}, // 122601/190750 (64.27%)
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
			}, // 68142/190750 (35.72%)
			type?: string, // 122608/190750 (64.28%)
			width?: number, // 1/190750 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 122608/708505 (17.31%)
			height?: number, // 122608/708505 (17.31%)
			media_domain_url?: string, // 122608/708505 (17.31%)
			scrolling?: boolean, // 122608/708505 (17.31%)
			width?: number, // 122608/708505 (17.31%)
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
	}[], // 714601/19456493 (3.67%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 30177/19456493 (0.16%)
	edited: boolean|number,
	embed_type?: null|"iframe", // 30177/19456493 (0.16%)
	embed_url?: null|string, // 30177/19456493 (0.16%)
	event_end?: number, // 1507/19456493 (0.01%)
	event_is_live?: boolean, // 1507/19456493 (0.01%)
	event_start?: number, // 1507/19456493 (0.01%)
	events?: [], // 30177/19456493 (0.16%)
	eventsOnRender?: [], // 30177/19456493 (0.16%)
	gilded: number,
	gildings: {
		gid_1?: number, // 46846/19456493 (0.24%)
		gid_2?: number, // 29001/19456493 (0.15%)
		gid_3?: number, // 6424/19456493 (0.03%)
	},
	hidden: boolean,
	href_url?: string, // 30177/19456493 (0.16%)
	id: string,
	is_blank?: boolean, // 30177/19456493 (0.16%)
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
		a?: string, // 48435/2177413 (2.22%)
		e: "text"|"emoji",
		t?: string, // 2128978/2177413 (97.78%)
		u?: string, // 48435/2177413 (2.22%)
	}[],
	link_flair_template_id?: string, // 3326915/19456493 (17.10%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 535/1573554 (0.03%)
		height?: null, // 2/1573554 (0.00%)
		oembed?: {
			author_name?: string, // 891753/1237432 (72.06%)
			author_url?: string, // 890956/1237432 (72.00%)
			cache_age?: number, // 453/1237432 (0.04%)
			description?: string, // 539422/1237432 (43.59%)
			height: number|null,
			html: string,
			marginheight?: number, // 5/1237432 (0.00%)
			marginwidth?: number, // 5/1237432 (0.00%)
			mean_alpha?: number, // 3394/1237432 (0.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1233004/1237432 (99.64%)
			thumbnail_url?: string, // 1234592/1237432 (99.77%)
			thumbnail_width?: number, // 1233004/1237432 (99.64%)
			title?: string, // 1233762/1237432 (99.70%)
			type: "video"|"rich",
			url?: string, // 260863/1237432 (21.08%)
			version?: "1.0", // 1237427/1237432 (100.00%)
			width: number,
		}, // 1237432/1573554 (78.64%)
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
		}, // 335585/1573554 (21.33%)
		type?: string, // 1237969/1573554 (78.67%)
		width?: number, // 2/1573554 (0.00%)
	},
	media_embed: {
		content?: string, // 1237965/19456493 (6.36%)
		height?: number, // 1237965/19456493 (6.36%)
		scrolling?: boolean, // 1237965/19456493 (6.36%)
		width?: number, // 1237965/19456493 (6.36%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 5994/234613 (2.55%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 234087/234613 (99.78%)
			hlsUrl?: string, // 5994/234613 (2.55%)
			id?: string, // 234087/234613 (99.78%)
			isGif?: boolean, // 5994/234613 (2.55%)
			m?: "image/jpg"|"image/png"|"image/gif", // 228093/234613 (97.22%)
			s?: {
				gif?: string, // 2056/228093 (0.90%)
				mp4?: string, // 2056/228093 (0.90%)
				u?: string, // 226037/228093 (99.10%)
				x: number,
				y: number,
			}, // 228093/234613 (97.22%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 5994/234613 (2.55%)
			y?: number, // 5994/234613 (2.55%)
		},
	}|null, // 229728/19456493 (1.18%)
	media_only: boolean,
	mobile_ad_url?: string, // 30177/19456493 (0.16%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 30177/19456493 (0.16%)
	outbound_link?: {
		created?: number|null, // 531/30177 (1.76%)
		expiration?: number|null, // 531/30177 (1.76%)
		url?: string, // 531/30177 (1.76%)
	}, // 30177/19456493 (0.16%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7819808/19456493 (40.19%)
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
				}, // 257695/7819808 (3.30%)
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
				}, // 257695/7819808 (3.30%)
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
				}, // 1010541/7819808 (12.92%)
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
				}, // 1066319/7819808 (13.64%)
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
		}, // 222450/7819808 (2.84%)
	}, // 7819808/19456493 (40.19%)
	priority_id?: null, // 30177/19456493 (0.16%)
	promoted?: boolean, // 30177/19456493 (0.16%)
	promoted_by?: null, // 30177/19456493 (0.16%)
	promoted_display_name?: null, // 30177/19456493 (0.16%)
	promoted_url?: null, // 30177/19456493 (0.16%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 535/1573554 (0.03%)
		height?: null, // 2/1573554 (0.00%)
		oembed?: {
			author_name?: string, // 891753/1237432 (72.06%)
			author_url?: string, // 890956/1237432 (72.00%)
			cache_age?: number, // 453/1237432 (0.04%)
			description?: string, // 539422/1237432 (43.59%)
			height: number|null,
			html: string,
			marginheight?: number, // 5/1237432 (0.00%)
			marginwidth?: number, // 5/1237432 (0.00%)
			mean_alpha?: number, // 3394/1237432 (0.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1233004/1237432 (99.64%)
			thumbnail_url?: string, // 1234592/1237432 (99.77%)
			thumbnail_width?: number, // 1233004/1237432 (99.64%)
			title?: string, // 1233762/1237432 (99.70%)
			type: "video"|"rich",
			url?: string, // 260863/1237432 (21.08%)
			version?: "1.0", // 1237427/1237432 (100.00%)
			width: number,
		}, // 1237432/1573554 (78.64%)
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
		}, // 335585/1573554 (21.33%)
		type?: string, // 1237969/1573554 (78.67%)
		width?: number, // 2/1573554 (0.00%)
	},
	secure_media_embed: {
		content?: string, // 1237965/19456493 (6.36%)
		height?: number, // 1237965/19456493 (6.36%)
		media_domain_url?: string, // 1237965/19456493 (6.36%)
		scrolling?: boolean, // 1237965/19456493 (6.36%)
		width?: number, // 1237965/19456493 (6.36%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 30177/19456493 (0.16%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[], // 30177/19456493 (0.16%)
	third_party_tracking?: null, // 30177/19456493 (0.16%)
	third_party_tracking_2?: null, // 30177/19456493 (0.16%)
	thumbnail: string,
	thumbnail_height?: number|null, // 19456315/19456493 (100.00%)
	thumbnail_width?: number|null, // 19456315/19456493 (100.00%)
	title: string,
	total_awards_received: number,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}