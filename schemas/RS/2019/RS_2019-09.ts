interface RedditPost {
	adserver_click_url?: null, // 23624/20713273 (0.11%)
	adserver_imp_pixel?: null, // 23624/20713273 (0.11%)
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
		icon_format: null|"JPG"|"PNG"|"APNG",
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
	author_cakeday?: boolean, // 67468/20713273 (0.33%)
	author_created_utc?: number|null, // 16090667/20713273 (77.68%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 456202/1441427 (31.65%)
		e: "text"|"emoji",
		t?: string, // 985225/1441427 (68.35%)
		u?: string, // 456202/1441427 (31.65%)
	}[], // 16090667/20713273 (77.68%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 16090667/20713273 (77.68%)
	author_fullname?: string, // 16090667/20713273 (77.68%)
	author_id?: string|null, // 23624/20713273 (0.11%)
	author_patreon_flair?: boolean, // 16090667/20713273 (77.68%)
	author_premium?: boolean, // 16090667/20713273 (77.68%)
	awarders: [],
	call_to_action?: "Learn More"|"Sign Up"|"Play Now"|"Shop Now"|"View More"|"Download"|"Install"|"Watch Now"|"Apply Now"|"Contact Us"|"Get Showtimes"|"Get a Quote"|""|"See Menu", // 21025/20713273 (0.10%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"videos"|"photography"|"entertainment"|"music"|"diy_and_crafts"|"animals"|"writing"|"memes"|""|"food"|"funny",
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
	}[], // 3920/20713273 (0.02%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"music"|"videos"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 800246/20713273 (3.86%)
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
			icon_format: null|"JPG"|"PNG"|"APNG",
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
		author_cakeday?: boolean, // 3896/777339 (0.50%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 24597/74902 (32.84%)
			e: "text"|"emoji",
			t?: string, // 50305/74902 (67.16%)
			u?: string, // 24597/74902 (32.84%)
		}[], // 670475/777339 (86.25%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 670475/777339 (86.25%)
		author_fullname?: string, // 670475/777339 (86.25%)
		author_patreon_flair?: boolean, // 670475/777339 (86.25%)
		author_premium?: boolean, // 670475/777339 (86.25%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		call_to_action?: "Sign Up", // 1/777339 (0.00%)
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"gaming"|"photography"|"animals"|"entertainment"|"memes"|"videos"|"diy_and_crafts"|""|"music"|"food",
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
		}[], // 530/777339 (0.07%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 154/777339 (0.02%)
		event_is_live?: boolean, // 154/777339 (0.02%)
		event_start?: number, // 154/777339 (0.02%)
		gilded: number,
		gildings: {
			gid_1?: number, // 76683/777339 (9.86%)
			gid_2?: number, // 49863/777339 (6.41%)
			gid_3?: number, // 13873/777339 (1.78%)
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
			a?: string, // 2584/86691 (2.98%)
			e: "text"|"emoji",
			t?: string, // 84107/86691 (97.02%)
			u?: string, // 2584/86691 (2.98%)
		}[],
		link_flair_template_id?: string, // 154011/777339 (19.81%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 140977/153823 (91.65%)
				author_url?: string, // 27418/153823 (17.82%)
				cache_age?: number, // 5072/153823 (3.30%)
				description?: string, // 126990/153823 (82.56%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 30/153823 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 147639/153823 (95.98%)
				thumbnail_url?: string, // 148544/153823 (96.57%)
				thumbnail_width?: number, // 147639/153823 (95.98%)
				title?: string, // 148486/153823 (96.53%)
				type: "video"|"rich",
				url?: string, // 9792/153823 (6.37%)
				version: "1.0",
				width: number,
			}, // 153823/234969 (65.47%)
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
			}, // 81146/234969 (34.53%)
			type?: string, // 153823/234969 (65.47%)
		},
		media_embed: {
			content?: string, // 153823/777339 (19.79%)
			height?: number, // 153823/777339 (19.79%)
			scrolling?: boolean, // 153823/777339 (19.79%)
			width?: number, // 153823/777339 (19.79%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 270/12717 (2.12%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 12702/12717 (99.88%)
				hlsUrl?: string, // 270/12717 (2.12%)
				id?: string, // 12702/12717 (99.88%)
				isGif?: boolean, // 270/12717 (2.12%)
				m?: "image/jpg"|"image/png"|"image/gif", // 12432/12717 (97.76%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 12432/12717 (97.76%)
				s?: {
					gif?: string, // 106/12432 (0.85%)
					mp4?: string, // 106/12432 (0.85%)
					u?: string, // 12326/12432 (99.15%)
					x: number,
					y: number,
				}, // 12432/12717 (97.76%)
				status: "valid"|"failed",
				x?: number, // 270/12717 (2.12%)
				y?: number, // 270/12717 (2.12%)
			},
		}|null, // 4953/777339 (0.64%)
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
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 576990/777339 (74.23%)
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
					}, // 118816/576990 (20.59%)
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
					}, // 118816/576990 (20.59%)
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
					}, // 200452/576990 (34.74%)
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
					}, // 202114/576990 (35.03%)
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
			}, // 117282/576990 (20.33%)
		}, // 576990/777339 (74.23%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"copyright_takedown"|"author"|"anti_evil_ops"|"content_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 140977/153823 (91.65%)
				author_url?: string, // 27418/153823 (17.82%)
				cache_age?: number, // 5072/153823 (3.30%)
				description?: string, // 126990/153823 (82.56%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 30/153823 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 147639/153823 (95.98%)
				thumbnail_url?: string, // 148544/153823 (96.57%)
				thumbnail_width?: number, // 147639/153823 (95.98%)
				title?: string, // 148486/153823 (96.53%)
				type: "video"|"rich",
				url?: string, // 9792/153823 (6.37%)
				version: "1.0",
				width: number,
			}, // 153823/234969 (65.47%)
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
			}, // 81146/234969 (34.53%)
			type?: string, // 153823/234969 (65.47%)
		},
		secure_media_embed: {
			content?: string, // 153823/777339 (19.79%)
			height?: number, // 153823/777339 (19.79%)
			media_domain_url?: string, // 153823/777339 (19.79%)
			scrolling?: boolean, // 153823/777339 (19.79%)
			width?: number, // 153823/777339 (19.79%)
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
		treatment_tags?: [], // 685/777339 (0.09%)
		ups: number,
		upvote_ratio?: number, // 685/777339 (0.09%)
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"some_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 800246/20713273 (3.86%)
	discussion_type: null|"CHAT",
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 23624/20713273 (0.11%)
	edited: boolean|number,
	embed_type?: null|"iframe"|"scrape", // 23624/20713273 (0.11%)
	embed_url?: null|string, // 23624/20713273 (0.11%)
	event_end?: number, // 1342/20713273 (0.01%)
	event_is_live?: boolean, // 1342/20713273 (0.01%)
	event_start?: number, // 1342/20713273 (0.01%)
	events?: [], // 23624/20713273 (0.11%)
	eventsOnRender?: [], // 23624/20713273 (0.11%)
	gilded: number,
	gildings: {
		gid_1?: number, // 49005/20713273 (0.24%)
		gid_2?: number, // 27804/20713273 (0.13%)
		gid_3?: number, // 5827/20713273 (0.03%)
	},
	hidden: boolean,
	href_url?: string, // 23624/20713273 (0.11%)
	id: string,
	is_blank?: boolean, // 23624/20713273 (0.11%)
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
		a?: string, // 77194/2712047 (2.85%)
		e: "text"|"emoji",
		t?: string, // 2634853/2712047 (97.15%)
		u?: string, // 77194/2712047 (2.85%)
	}[],
	link_flair_template_id?: string, // 3784597/20713273 (18.27%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 1205135/1359405 (88.65%)
			author_url?: string, // 1009616/1359405 (74.27%)
			cache_age?: number, // 149684/1359405 (11.01%)
			description?: string, // 404790/1359405 (29.78%)
			height?: number|null, // 1359399/1359405 (100.00%)
			html?: string, // 1359399/1359405 (100.00%)
			marginheight?: number, // 69/1359405 (0.01%)
			marginwidth?: number, // 69/1359405 (0.01%)
			mean_alpha?: number, // 1781/1359405 (0.13%)
			provider_name?: string, // 1359399/1359405 (100.00%)
			provider_url?: string, // 1359399/1359405 (100.00%)
			thumbnail_height?: number, // 1188467/1359405 (87.43%)
			thumbnail_url?: string, // 1206667/1359405 (88.76%)
			thumbnail_width?: number, // 1188467/1359405 (87.43%)
			title?: string, // 1206235/1359405 (88.73%)
			type?: "video"|"rich", // 1359399/1359405 (100.00%)
			url?: string, // 263852/1359405 (19.41%)
			version?: "1.0", // 1359330/1359405 (99.99%)
			width?: number, // 1359399/1359405 (100.00%)
		}, // 1359405/1753702 (77.52%)
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
		}, // 394297/1753702 (22.48%)
		type?: string, // 1359405/1753702 (77.52%)
	},
	media_embed: {
		content?: string|null, // 1359405/20713273 (6.56%)
		height?: number, // 1359405/20713273 (6.56%)
		scrolling?: boolean, // 1359405/20713273 (6.56%)
		width?: number, // 1359405/20713273 (6.56%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 6621/215845 (3.07%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 214767/215845 (99.50%)
			hlsUrl?: string, // 6621/215845 (3.07%)
			id?: string, // 214767/215845 (99.50%)
			isGif?: boolean, // 6621/215845 (3.07%)
			m?: "image/jpg"|"image/png"|"image/gif", // 208146/215845 (96.43%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 208146/215845 (96.43%)
			s?: {
				gif?: string, // 1279/208146 (0.61%)
				mp4?: string, // 1279/208146 (0.61%)
				u?: string, // 206867/208146 (99.39%)
				x: number,
				y: number,
			}, // 208146/215845 (96.43%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 6621/215845 (3.07%)
			y?: number, // 6621/215845 (3.07%)
		},
	}|null, // 222538/20713273 (1.07%)
	media_only: boolean,
	mobile_ad_url?: string, // 23624/20713273 (0.11%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 23624/20713273 (0.11%)
	outbound_link?: {
	}, // 23624/20713273 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7276959/20713273 (35.13%)
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
				}, // 275204/7276959 (3.78%)
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
				}, // 275204/7276959 (3.78%)
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
				}, // 969228/7276959 (13.32%)
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
				}, // 1004575/7276959 (13.80%)
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
		}, // 245244/7276959 (3.37%)
	}, // 7276959/20713273 (35.13%)
	priority_id?: null, // 23624/20713273 (0.11%)
	promoted?: boolean, // 23624/20713273 (0.11%)
	promoted_by?: null, // 23624/20713273 (0.11%)
	promoted_display_name?: null, // 23624/20713273 (0.11%)
	promoted_url?: null, // 23624/20713273 (0.11%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"deleted"|"reddit"|"moderator"|"author"|"copyright_takedown"|"anti_evil_ops"|"content_takedown"|"automod_filtered",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 1205135/1359405 (88.65%)
			author_url?: string, // 1009616/1359405 (74.27%)
			cache_age?: number, // 149684/1359405 (11.01%)
			description?: string, // 404790/1359405 (29.78%)
			height?: number|null, // 1359399/1359405 (100.00%)
			html?: string, // 1359399/1359405 (100.00%)
			marginheight?: number, // 69/1359405 (0.01%)
			marginwidth?: number, // 69/1359405 (0.01%)
			mean_alpha?: number, // 1781/1359405 (0.13%)
			provider_name?: string, // 1359399/1359405 (100.00%)
			provider_url?: string, // 1359399/1359405 (100.00%)
			thumbnail_height?: number, // 1188467/1359405 (87.43%)
			thumbnail_url?: string, // 1206667/1359405 (88.76%)
			thumbnail_width?: number, // 1188467/1359405 (87.43%)
			title?: string, // 1206235/1359405 (88.73%)
			type?: "video"|"rich", // 1359399/1359405 (100.00%)
			url?: string, // 263852/1359405 (19.41%)
			version?: "1.0", // 1359330/1359405 (99.99%)
			width?: number, // 1359399/1359405 (100.00%)
		}, // 1359405/1753702 (77.52%)
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
		}, // 394297/1753702 (22.48%)
		type?: string, // 1359405/1753702 (77.52%)
	},
	secure_media_embed: {
		content?: string|null, // 1359405/20713273 (6.56%)
		height?: number, // 1359405/20713273 (6.56%)
		media_domain_url?: string, // 1359405/20713273 (6.56%)
		scrolling?: boolean, // 1359405/20713273 (6.56%)
		width?: number, // 1359405/20713273 (6.56%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 23624/20713273 (0.11%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"gold_restricted",
	suggested_sort: null|"top"|"qa"|"confidence"|"new"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: string[], // 23624/20713273 (0.11%)
	third_party_tracking?: null, // 23624/20713273 (0.11%)
	third_party_tracking_2?: null, // 23624/20713273 (0.11%)
	thumbnail: string,
	thumbnail_height?: number|null, // 20712496/20713273 (100.00%)
	thumbnail_width?: number|null, // 20712496/20713273 (100.00%)
	title: string,
	total_awards_received: number,
	treatment_tags?: [], // 20878/20713273 (0.10%)
	upvote_ratio?: number, // 20878/20713273 (0.10%)
	url: string,
	whitelist_status: "all_ads"|"some_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}