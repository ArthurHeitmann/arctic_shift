interface RedditPost {
	_meta?: {
		edited_title?: string, // 68127/38554055 (0.18%)
		is_edited?: boolean, // 1515592/38554055 (3.93%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"anti_evil_ops"|"community_ops", // 7636751/38554055 (19.81%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 6836933/38554055 (17.73%)
		was_initially_deleted?: boolean, // 799818/38554055 (2.07%)
	}, // 38554055/38986522 (98.89%)
	ad_business?: null, // 175023/38986522 (0.45%)
	ad_promoted_user_posts?: null|{
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: "nintendoswitch_blade"|"Towndefender"|"psipolnista"|"Emotional_Stage_10"|"Western_Action_6"|"aceofspades1217"|"Hopeful_Molasses_926"|"DeathByMapleSyrup"|"KingFernando532",
		author_flair_background_color: null,
		author_flair_css_class: null|"userflair",
		author_flair_richtext: [],
		author_flair_template_id: null|"c28124e2-6dd2-11e6-a95d-0e3ced70543b",
		author_flair_text: null|"Set your own user flair",
		author_flair_text_color: null|"dark",
		author_flair_type: "text",
		author_fullname: "t2_b8r5fopu"|"t2_5tob9d4w"|"t2_6pvzupay"|"t2_gzm02288x"|"t2_tzhrc5dm3"|"t2_45x0c"|"t2_16gs7fzl1n"|"t2_ql5e6apa"|"t2_iaigrha30",
		author_is_blocked: boolean,
		author_patreon_flair: boolean,
		author_premium: boolean,
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null,
		clicked: boolean,
		content_categories: null,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null,
		distinguished: null,
		domain: "i.redd.it"|"reddit.com",
		downs: number,
		edited: boolean,
		gallery_data?: {
			items: {
				caption: "",
				id: number,
				media_id: "tkcdp8ed1qed1"|"w0o9s3jd1qed1"|"yqopvkh41tgd1"|"cm0h9cd51tgd1",
			}[],
		}, // 2/9 (22.22%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: "1eybtoi"|"1ex8sks"|"1eu4s29"|"1exwg3v"|"1ec4j1a"|"1eja3tu"|"1es8yhi"|"1ekihep"|"1emv77v",
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 2/9 (22.22%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: ""|null,
		link_flair_css_class: null|"linkflair",
		link_flair_richtext: [],
		link_flair_template_id?: "cc096bc6-f9cf-11eb-a88e-22782d314b27"|"e6e20808-1cfc-11ed-9239-9aa45e4ef7f5"|"3bc8fb40-f627-11eb-b749-ce5c02d5406f", // 4/9 (44.44%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|null,
		link_flair_type: "text",
		locked: boolean,
		media: null,
		media_embed: {
		},
		media_metadata?: {
			[key: string]: {
				e: "Image",
				id: "tkcdp8ed1qed1"|"w0o9s3jd1qed1"|"cm0h9cd51tgd1"|"yqopvkh41tgd1",
				m: "image/jpg",
				p: {
					u: string,
					x: number,
					y: number,
				}[],
				s: {
					u: string,
					x: number,
					y: number,
				},
				status: "valid",
			},
		}, // 2/9 (22.22%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: "t3_1eybtoi"|"t3_1ex8sks"|"t3_1eu4s29"|"t3_1exwg3v"|"t3_1ec4j1a"|"t3_1eja3tu"|"t3_1es8yhi"|"t3_1ekihep"|"t3_1emv77v",
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads",
		permalink: string,
		pinned: boolean,
		post_hint?: "image", // 7/9 (77.78%)
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
				},
			}[],
		}, // 7/9 (77.78%)
		pwls: number,
		quarantine: boolean,
		removal_reason: null,
		removed_by: null,
		removed_by_category: null,
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null,
		secure_media_embed: {
		},
		selftext: string,
		selftext_html: string|null,
		send_replies: boolean,
		spoiler: boolean,
		sr_detail: {
			accept_followers: boolean,
			allowed_media_in_comments: [],
			banner_img: "",
			banner_size: null,
			community_icon: null,
			created: number,
			created_utc: number,
			default_set: boolean,
			description: string,
			disable_contributor_requests: boolean,
			display_name: "StupidFood",
			display_name_prefixed: "r/StupidFood",
			free_form_reports: boolean,
			header_img: string,
			header_size: number[],
			icon_color: "",
			icon_img: "",
			icon_size: null,
			key_color: "#0079d3",
			link_flair_enabled: boolean,
			link_flair_position: "left",
			name: "t5_37se4",
			over_18: boolean,
			previous_names: [],
			primary_color: "#479dd3",
			public_description: string,
			quarantine: boolean,
			restrict_commenting: boolean,
			restrict_posting: boolean,
			show_media: boolean,
			submit_link_label: "Dish up a link!",
			submit_text_label: "Write about StupidFood",
			subreddit_type: "public",
			subscribers: number,
			title: "StupidFood : Food. Point. Laugh.",
			url: "/r/StupidFood/",
			user_is_banned: boolean,
			user_is_contributor: boolean,
			user_is_moderator: boolean,
			user_is_muted: null,
			user_is_subscriber: boolean,
		},
		stickied: boolean,
		subreddit: "StupidFood",
		subreddit_id: "t5_37se4",
		subreddit_name_prefixed: "r/StupidFood",
		subreddit_subscribers: number,
		subreddit_type: "public",
		suggested_sort: null,
		thumbnail: string,
		thumbnail_height: number,
		thumbnail_width: number,
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: "https://i.redd.it/4732fw97m5kd1.jpeg"|"https://i.redd.it/cmidggky8wjd1.jpeg"|"https://i.redd.it/f9ub0fz6e4jd1.jpeg"|"https://i.redd.it/ol2k57lz32kd1.jpeg"|"https://www.reddit.com/gallery/1ec4j1a"|"https://i.redd.it/vzhbr1fcqhgd1.jpeg"|"https://i.redd.it/fw9qhobj9oid1.jpeg"|"https://www.reddit.com/gallery/1ekihep"|"https://i.redd.it/vwko16rxuchd1.jpeg",
		url_overridden_by_dest: "https://i.redd.it/4732fw97m5kd1.jpeg"|"https://i.redd.it/cmidggky8wjd1.jpeg"|"https://i.redd.it/f9ub0fz6e4jd1.jpeg"|"https://i.redd.it/ol2k57lz32kd1.jpeg"|"https://www.reddit.com/gallery/1ec4j1a"|"https://i.redd.it/vzhbr1fcqhgd1.jpeg"|"https://i.redd.it/fw9qhobj9oid1.jpeg"|"https://www.reddit.com/gallery/1ekihep"|"https://i.redd.it/vwko16rxuchd1.jpeg",
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads",
		wls: number,
	}[], // 175023/38986522 (0.45%)
	ad_supplementary_text_md?: null|string, // 175023/38986522 (0.45%)
	ad_user_targeting?: null, // 175023/38986522 (0.45%)
	adserver_click_url?: null, // 175023/38986522 (0.45%)
	adserver_imp_pixel?: null, // 175023/38986522 (0.45%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 175023/38986522 (0.45%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 111229/38986522 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 957283/2557269 (37.43%)
		e: "text"|"emoji",
		t?: string, // 1599986/2557269 (62.57%)
		u?: string, // 957283/2557269 (37.43%)
	}[], // 38504024/38986522 (98.76%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 38504024/38986522 (98.76%)
	author_fullname?: string, // 38504013/38986522 (98.76%)
	author_id?: string|null, // 175023/38986522 (0.45%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 38504024/38986522 (98.76%)
	author_premium?: boolean, // 38504024/38986522 (98.76%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: "Learn More"|"Shop Now"|"Download"|"Sign Up"|"Install"|"View More"|"Play Now"|"Apply Now"|"Order Now"|"Contact Us"|"Watch Now"|"Pre-order Now"|"Get a Quote"|"Get Showtimes"|"See Menu", // 128567/38986522 (0.33%)
	campaign_id?: null, // 175023/38986522 (0.45%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment"|"food",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"comics"|"music"|"writing"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1314530/38986522 (3.37%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 3614/1314359 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 42208/114589 (36.83%)
			e: "text"|"emoji",
			t?: string, // 72381/114589 (63.17%)
			u?: string, // 42208/114589 (36.83%)
		}[], // 1303988/1314359 (99.21%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1303988/1314359 (99.21%)
		author_fullname?: string, // 1303988/1314359 (99.21%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1303988/1314359 (99.21%)
		author_premium?: boolean, // 1303988/1314359 (99.21%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"animals",
		clicked: boolean,
		content_categories: null|("photography"|"comics"|"drawing_and_painting"|"gaming"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 402263/1297112 (31.01%)
				id: number,
				media_id: string,
				outbound_url?: string, // 36840/1297112 (2.84%)
			}[],
		}|null, // 204249/1314359 (15.54%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 204249/1314359 (15.54%)
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
			a?: string, // 31555/228933 (13.78%)
			e: "text"|"emoji",
			t?: string, // 197378/228933 (86.22%)
			u?: string, // 31555/228933 (13.78%)
		}[],
		link_flair_template_id?: string, // 510347/1314359 (38.83%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 2/409207 (0.00%)
			oembed?: {
				author_name?: string, // 19265/275280 (7.00%)
				author_url?: string, // 19212/275280 (6.98%)
				cache_age?: number, // 675/275280 (0.25%)
				description?: string, // 2380/275280 (0.86%)
				height?: number|null, // 275279/275280 (100.00%)
				html?: string, // 275279/275280 (100.00%)
				mean_alpha?: number, // 102/275280 (0.04%)
				provider_name?: string, // 275279/275280 (100.00%)
				provider_url?: string, // 275279/275280 (100.00%)
				thumbnail_height?: number, // 259479/275280 (94.26%)
				thumbnail_url?: string, // 274474/275280 (99.71%)
				thumbnail_width?: number, // 259479/275280 (94.26%)
				title?: string, // 274584/275280 (99.75%)
				type?: "video"|"rich", // 275279/275280 (100.00%)
				url?: string, // 1519/275280 (0.55%)
				version?: "1.0", // 275279/275280 (100.00%)
				width?: number, // 275279/275280 (100.00%)
			}, // 275280/409207 (67.27%)
			reddit_video?: {
				bitrate_kbps?: number, // 133713/133925 (99.84%)
				dash_url?: string, // 133916/133925 (99.99%)
				duration?: number, // 133916/133925 (99.99%)
				fallback_url?: string, // 133916/133925 (99.99%)
				has_audio?: boolean, // 131578/133925 (98.25%)
				height: number|null,
				hls_url?: string, // 133916/133925 (99.99%)
				is_gif?: boolean, // 133916/133925 (99.99%)
				scrubber_media_url?: string, // 133916/133925 (99.99%)
				transcoding_message?: string, // 9/133925 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 133925/409207 (32.73%)
			type?: string, // 275282/409207 (67.27%)
		},
		media_embed: {
			content?: string|null, // 275282/1314359 (20.94%)
			height?: number, // 275282/1314359 (20.94%)
			scrolling?: boolean, // 275282/1314359 (20.94%)
			width?: number, // 275282/1314359 (20.94%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 1450/1330379 (0.11%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1329725/1330379 (99.95%)
				hlsUrl?: string, // 1450/1330379 (0.11%)
				id?: string, // 1329725/1330379 (99.95%)
				isGif?: boolean, // 1450/1330379 (0.11%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1328275/1330379 (99.84%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 896583/1330379 (67.39%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1328275/1330379 (99.84%)
				s?: {
					gif?: string, // 67895/1328275 (5.11%)
					mp4?: string, // 67895/1328275 (5.11%)
					u?: string, // 1260380/1328275 (94.89%)
					x: number,
					y: number,
				}, // 1328275/1330379 (99.84%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 1450/1330379 (0.11%)
				y?: number, // 1450/1330379 (0.11%)
			},
		}|null, // 218317/1314359 (16.61%)
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
		parent_whitelist_status?: null|"all_ads"|"some_ads"|"house_only", // 667954/1314359 (50.82%)
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 198/4853 (4.08%)
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
		}|null, // 1295/1314359 (0.10%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 974131/1314359 (74.11%)
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
					}, // 56619/974131 (5.81%)
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
					}, // 56619/974131 (5.81%)
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
					}, // 570548/974131 (58.57%)
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
					}, // 572936/974131 (58.82%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 262417/262442 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 262442/974131 (26.94%)
		}, // 974131/1314359 (74.11%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"automod_filtered"|"copyright_takedown"|"content_takedown"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 2/409207 (0.00%)
			oembed?: {
				author_name?: string, // 19265/275280 (7.00%)
				author_url?: string, // 19212/275280 (6.98%)
				cache_age?: number, // 675/275280 (0.25%)
				description?: string, // 2380/275280 (0.86%)
				height?: number|null, // 275279/275280 (100.00%)
				html?: string, // 275279/275280 (100.00%)
				mean_alpha?: number, // 102/275280 (0.04%)
				provider_name?: string, // 275279/275280 (100.00%)
				provider_url?: string, // 275279/275280 (100.00%)
				thumbnail_height?: number, // 259479/275280 (94.26%)
				thumbnail_url?: string, // 274474/275280 (99.71%)
				thumbnail_width?: number, // 259479/275280 (94.26%)
				title?: string, // 274584/275280 (99.75%)
				type?: "video"|"rich", // 275279/275280 (100.00%)
				url?: string, // 1519/275280 (0.55%)
				version?: "1.0", // 275279/275280 (100.00%)
				width?: number, // 275279/275280 (100.00%)
			}, // 275280/409207 (67.27%)
			reddit_video?: {
				bitrate_kbps?: number, // 133713/133925 (99.84%)
				dash_url?: string, // 133916/133925 (99.99%)
				duration?: number, // 133916/133925 (99.99%)
				fallback_url?: string, // 133916/133925 (99.99%)
				has_audio?: boolean, // 131578/133925 (98.25%)
				height: number|null,
				hls_url?: string, // 133916/133925 (99.99%)
				is_gif?: boolean, // 133916/133925 (99.99%)
				scrubber_media_url?: string, // 133916/133925 (99.99%)
				transcoding_message?: string, // 9/133925 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 133925/409207 (32.73%)
			type?: string, // 275282/409207 (67.27%)
		},
		secure_media_embed: {
			content?: string|null, // 275282/1314359 (20.94%)
			height?: number, // 275282/1314359 (20.94%)
			media_domain_url?: string, // 275282/1314359 (20.94%)
			scrolling?: boolean, // 275282/1314359 (20.94%)
			width?: number, // 275282/1314359 (20.94%)
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
		url_overridden_by_dest?: string, // 1164630/1314359 (88.61%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status?: null|"all_ads"|"some_ads"|"house_only"|"no_ads", // 667954/1314359 (50.82%)
		wls: null|number,
	}[], // 1314530/38986522 (3.37%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 175023/38986522 (0.45%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 175023/38986522 (0.45%)
	embed_url?: null|string, // 175023/38986522 (0.45%)
	events?: [], // 175023/38986522 (0.45%)
	eventsOnRender?: [], // 175023/38986522 (0.45%)
	gallery_data?: {
		items: {
			call_to_action?: "Shop Now"|"Learn More"|"Sign Up"|"View More"|"Download"|"Play Now"|"Order Now"|"Contact Us"|"Install"|"Get a Quote"|"Apply Now"|"Get Showtimes"|"See Menu"|"Watch Now"|"Pre-order Now", // 65163/14242789 (0.46%)
			caption?: string, // 4976358/14242789 (34.94%)
			display_url?: string, // 72265/14242789 (0.51%)
			id: number,
			media_id: string,
			outbound_url?: string, // 106139/14242789 (0.75%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 10282/14242789 (0.07%)
		}[],
	}|null, // 3834672/38986522 (9.84%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 175023/38986522 (0.45%)
	id: string,
	impression_id?: null, // 175023/38986522 (0.45%)
	impression_id_str?: null, // 175023/38986522 (0.45%)
	is_blank?: boolean, // 175023/38986522 (0.45%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 3834672/38986522 (9.84%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 175023/38986522 (0.45%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 969436/8944381 (10.84%)
		e: "text"|"emoji",
		t?: string, // 7974945/8944381 (89.16%)
		u?: string, // 969436/8944381 (10.84%)
	}[],
	link_flair_template_id?: string, // 17205127/38986522 (44.13%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1db9knzhqzdfp"|"1dxvueu5xr6li"|"1bsso361afr0r"|"1dszr35jaz2jr"|"1dxj5crv457xc"|"1ds5d94d4epdo"|"1dryfenlsj724"|"1dtblm7hmdqy1"|"1dview7pv8hgg"|"1dwazlui63gdq"|"1dxp85l9xdrt6", // 86/3789491 (0.00%)
		oembed?: {
			author_name?: string, // 701951/2639296 (26.60%)
			author_url?: string, // 701291/2639296 (26.57%)
			cache_age?: number, // 10935/2639296 (0.41%)
			description?: string, // 83033/2639296 (3.15%)
			height: number|null,
			html: string,
			marginheight?: number, // 2/2639296 (0.00%)
			marginwidth?: number, // 2/2639296 (0.00%)
			mean_alpha?: number, // 2441/2639296 (0.09%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2577357/2639296 (97.65%)
			thumbnail_url?: string, // 2628591/2639296 (99.59%)
			thumbnail_width?: number, // 2577357/2639296 (97.65%)
			title?: string, // 2627895/2639296 (99.57%)
			type: "video"|"rich",
			url?: string, // 42039/2639296 (1.59%)
			version?: "1.0", // 2639294/2639296 (100.00%)
			width: number,
		}, // 2639296/3789491 (69.65%)
		reddit_video?: {
			bitrate_kbps?: number, // 1145565/1150109 (99.60%)
			dash_url?: string, // 1145565/1150109 (99.60%)
			duration?: number, // 1145565/1150109 (99.60%)
			fallback_url?: string, // 1145565/1150109 (99.60%)
			has_audio?: boolean, // 1145530/1150109 (99.60%)
			height: number|null,
			hls_url?: string, // 1145565/1150109 (99.60%)
			is_gif?: boolean, // 1145565/1150109 (99.60%)
			scrubber_media_url?: string, // 1145565/1150109 (99.60%)
			transcoding_message?: string, // 4544/1150109 (0.40%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1150109/3789491 (30.35%)
		type?: string, // 2639382/3789491 (69.65%)
	},
	media_embed: {
		content?: string, // 2594625/38986522 (6.66%)
		height?: number, // 2594625/38986522 (6.66%)
		scrolling?: boolean, // 2594625/38986522 (6.66%)
		width?: number, // 2594625/38986522 (6.66%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 23434/14961978 (0.16%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 14886924/14961978 (99.50%)
			hlsUrl?: string, // 23434/14961978 (0.16%)
			id?: string, // 14886924/14961978 (99.50%)
			isGif?: boolean, // 23434/14961978 (0.16%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 14863490/14961978 (99.34%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 5952144/14961978 (39.78%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 14863490/14961978 (99.34%)
			s?: {
				gif?: string, // 247146/14863490 (1.66%)
				mp4?: string, // 247146/14863490 (1.66%)
				u?: string, // 14616344/14863490 (98.34%)
				x: number,
				y: number,
			}, // 14863490/14961978 (99.34%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 23434/14961978 (0.16%)
			y?: number, // 23434/14961978 (0.16%)
		},
	}|null, // 4363505/38986522 (11.19%)
	media_only: boolean,
	mobile_ad_url?: string, // 175023/38986522 (0.45%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 175023/38986522 (0.45%)
	outbound_link?: {
	}, // 175023/38986522 (0.45%)
	over_18: boolean,
	parent_whitelist_status?: null|"all_ads"|"some_ads"|"house_only", // 19376165/38986522 (49.70%)
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 18838/224369 (8.40%)
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
	}|null, // 69459/38986522 (0.18%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 19198211/38986522 (49.24%)
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
				}, // 677708/19307420 (3.51%)
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
				}, // 677708/19307420 (3.51%)
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
				}, // 9811912/19307420 (50.82%)
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
				}, // 9894963/19307420 (51.25%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1766623/1766648 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1766648/19307420 (9.15%)
	}, // 19307420/38986522 (49.52%)
	priority_id?: null, // 175023/38986522 (0.45%)
	product_ids?: [], // 175023/38986522 (0.45%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 175023/38986522 (0.45%)
	promoted?: boolean, // 175023/38986522 (0.45%)
	promoted_by?: null, // 175023/38986522 (0.45%)
	promoted_display_name?: null, // 175023/38986522 (0.45%)
	promoted_url?: null, // 175023/38986522 (0.45%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1db9knzhqzdfp"|"1dxvueu5xr6li"|"1bsso361afr0r"|"1dszr35jaz2jr"|"1dxj5crv457xc"|"1ds5d94d4epdo"|"1dryfenlsj724"|"1dtblm7hmdqy1"|"1dview7pv8hgg"|"1dwazlui63gdq"|"1dxp85l9xdrt6", // 86/3789491 (0.00%)
		oembed?: {
			author_name?: string, // 701951/2639296 (26.60%)
			author_url?: string, // 701291/2639296 (26.57%)
			cache_age?: number, // 10935/2639296 (0.41%)
			description?: string, // 83033/2639296 (3.15%)
			height: number|null,
			html: string,
			marginheight?: number, // 2/2639296 (0.00%)
			marginwidth?: number, // 2/2639296 (0.00%)
			mean_alpha?: number, // 2441/2639296 (0.09%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2577357/2639296 (97.65%)
			thumbnail_url?: string, // 2628591/2639296 (99.59%)
			thumbnail_width?: number, // 2577357/2639296 (97.65%)
			title?: string, // 2627895/2639296 (99.57%)
			type: "video"|"rich",
			url?: string, // 42039/2639296 (1.59%)
			version?: "1.0", // 2639294/2639296 (100.00%)
			width: number,
		}, // 2639296/3789491 (69.65%)
		reddit_video?: {
			bitrate_kbps?: number, // 1145565/1150109 (99.60%)
			dash_url?: string, // 1145565/1150109 (99.60%)
			duration?: number, // 1145565/1150109 (99.60%)
			fallback_url?: string, // 1145565/1150109 (99.60%)
			has_audio?: boolean, // 1145530/1150109 (99.60%)
			height: number|null,
			hls_url?: string, // 1145565/1150109 (99.60%)
			is_gif?: boolean, // 1145565/1150109 (99.60%)
			scrubber_media_url?: string, // 1145565/1150109 (99.60%)
			transcoding_message?: string, // 4544/1150109 (0.40%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1150109/3789491 (30.35%)
		type?: string, // 2639382/3789491 (69.65%)
	},
	secure_media_embed: {
		content?: string, // 2594625/38986522 (6.66%)
		height?: number, // 2594625/38986522 (6.66%)
		media_domain_url?: string, // 2594625/38986522 (6.66%)
		scrolling?: boolean, // 2594625/38986522 (6.66%)
		width?: number, // 2594625/38986522 (6.66%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 175023/38986522 (0.45%)
	sk_ad_network_data?: null, // 175023/38986522 (0.45%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 3745/38986522 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"new"|"confidence"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 175023/38986522 (0.45%)
	third_party_tracking?: null, // 175023/38986522 (0.45%)
	third_party_tracking_2?: null, // 175023/38986522 (0.45%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 38985578/38986522 (100.00%)
	thumbnail_width?: number|null, // 38985578/38986522 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason?: "BLOCK", // 3/38986522 (0.00%)
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 23476345/38986522 (60.22%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	whitelist_status?: null|"all_ads"|"some_ads"|"house_only", // 19376165/38986522 (49.70%)
	wls: null|number,
}