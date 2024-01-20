interface RedditPost {
	adserver_click_url?: null, // 17282/13975028 (0.12%)
	adserver_imp_pixel?: null, // 17282/13975028 (0.12%)
	archived?: boolean, // 13973784/13975028 (99.99%)
	author: string,
	author_cakeday?: boolean, // 32599/13975028 (0.23%)
	author_created_utc?: number|null, // 13974242/13975028 (99.99%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 95985/540867 (17.75%)
		e: "text"|"emoji",
		t?: string, // 444882/540867 (82.25%)
		u?: string, // 95985/540867 (17.75%)
	}[], // 11538790/13975028 (82.57%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 11538790/13975028 (82.57%)
	author_fullname?: string|null, // 13974242/13975028 (99.99%)
	author_id?: string|null, // 17282/13975028 (0.12%)
	author_patreon_flair?: boolean, // 11535091/13975028 (82.54%)
	call_to_action?: "Learn More"|"Shop Now"|"View More"|"Sign Up"|"Download"|"Play Now"|"Install"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|null, // 13434/13975028 (0.10%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"videos"|"drawing_and_painting"|"gaming"|"photography"|"writing"|"entertainment"|"diy_and_crafts"|"music"|"animals"|"memes"|"food"|"funny",
	collections?: {
		author_id: "t2_xrnc7wf"|"t2_ryprsip"|"t2_9eisf"|"t2_9qf0f"|"t2_tkm12"|"t2_17aq3ltt"|"t2_nimfq"|"t2_10q8f9"|"t2_zvwma"|"t2_5uijg"|"t2_240rydgk"|"t2_7nuof"|"t2_d5h4t"|"t2_cf7aq"|"t2_5g3tq",
		author_name: "KpKrunal"|"RLMatchThreads"|"Chtorrr"|"NicholasCajun"|"RSurvivorMods"|"kp-krunal"|"Vino_7s"|"Rocked03"|"ShuichiRL"|"listn2moremetal"|"lss_ev1"|"ZoomBoingDing"|"optimalg"|"dmziggy"|"Jankinator",
		collection_id: string,
		created_at_utc: number,
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		subreddit_id: "t5_kpka5"|"t5_39cf6"|"t5_2r61s"|"t5_2qh6e"|"t5_2qhu3"|"t5_2r40o"|"t5_2rjz2"|"t5_3c2d7"|"t5_2cneq"|"t5_3aobb",
		title: string,
	}[], // 268/13975028 (0.00%)
	content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"videos"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 401625/13975028 (2.87%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 1123/399673 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 4996/24443 (20.44%)
			e: "text"|"emoji",
			t?: string, // 19447/24443 (79.56%)
			u?: string, // 4996/24443 (20.44%)
		}[], // 370069/399673 (92.59%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 370069/399673 (92.59%)
		author_fullname?: string, // 370069/399673 (92.59%)
		author_patreon_flair?: boolean, // 370001/399673 (92.58%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean|null,
		can_mod_post: boolean,
		category: null|"photography"|"drawing_and_painting"|"animals"|"gaming"|"videos"|"entertainment"|"music"|"memes"|"diy_and_crafts"|"funny"|"art"|"food",
		clicked: boolean,
		collections?: {
			author_id: "t2_xrnc7wf"|"t2_ryprsip"|"t2_9eisf"|"t2_zvwma"|"t2_17aq3ltt"|"t2_10q8f9"|"t2_nimfq",
			author_name: "KpKrunal"|"RLMatchThreads"|"Chtorrr"|"ShuichiRL"|"kp-krunal"|"Rocked03"|"Vino_7s",
			collection_id: string,
			created_at_utc: number,
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: "t5_kpka5"|"t5_39cf6"|"t5_2r61s"|"t5_2r40o",
			title: string,
		}[], // 29/399673 (0.01%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"videos"|"writing"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 15/399673 (0.00%)
		event_is_live?: boolean, // 15/399673 (0.00%)
		event_start?: number, // 15/399673 (0.00%)
		gilded: number,
		gildings: {
			gid_1: number,
			gid_2: number,
			gid_3: number,
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable?: boolean, // 399605/399673 (99.98%)
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 911/31630 (2.88%)
			e: "text"|"emoji",
			t?: string, // 30719/31630 (97.12%)
			u?: string, // 911/31630 (2.88%)
		}[],
		link_flair_template_id: null|string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 1/90500 (0.00%)
			event_id?: "11rbnq7t2r4va"|"11rsxhjgoudvk"|"11rxg29r48krc", // 3/90500 (0.00%)
			height?: number, // 1/90500 (0.00%)
			oembed?: {
				author_name?: string, // 16162/47270 (34.19%)
				author_url?: string, // 16159/47270 (34.18%)
				cache_age?: number, // 3/47270 (0.01%)
				description?: string, // 33723/47270 (71.34%)
				height: number,
				html: string,
				mean_alpha?: number, // 51/47270 (0.11%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 47234/47270 (99.92%)
				thumbnail_url?: string, // 47258/47270 (99.97%)
				thumbnail_width?: number, // 47234/47270 (99.92%)
				title?: string, // 47250/47270 (99.96%)
				type: "video"|"rich",
				url?: string, // 1847/47270 (3.91%)
				version: "1.0",
				width: number,
			}, // 47270/90500 (52.23%)
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
			}, // 43226/90500 (47.76%)
			type?: string, // 47274/90500 (52.24%)
			width?: number, // 1/90500 (0.00%)
		},
		media_embed: {
			content?: string, // 47274/399673 (11.83%)
			height?: number, // 47274/399673 (11.83%)
			scrolling?: boolean, // 47274/399673 (11.83%)
			width?: number, // 47274/399673 (11.83%)
		},
		media_metadata?: null, // 2578/399673 (0.65%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 309666/399673 (77.48%)
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
					}, // 38510/309666 (12.44%)
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
					}, // 38510/309666 (12.44%)
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
					}, // 59886/309666 (19.34%)
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
					}, // 60967/309666 (19.69%)
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
			}, // 41710/309666 (13.47%)
		}, // 309666/399673 (77.48%)
		previous_visits?: number[], // 4/399673 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 1/90500 (0.00%)
			event_id?: "11rbnq7t2r4va"|"11rsxhjgoudvk"|"11rxg29r48krc", // 3/90500 (0.00%)
			height?: number, // 1/90500 (0.00%)
			oembed?: {
				author_name?: string, // 16162/47270 (34.19%)
				author_url?: string, // 16159/47270 (34.18%)
				cache_age?: number, // 3/47270 (0.01%)
				description?: string, // 33723/47270 (71.34%)
				height: number,
				html: string,
				mean_alpha?: number, // 51/47270 (0.11%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 47234/47270 (99.92%)
				thumbnail_url?: string, // 47258/47270 (99.97%)
				thumbnail_width?: number, // 47234/47270 (99.92%)
				title?: string, // 47250/47270 (99.96%)
				type: "video"|"rich",
				url?: string, // 1847/47270 (3.91%)
				version: "1.0",
				width: number,
			}, // 47270/90500 (52.23%)
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
			}, // 43226/90500 (47.76%)
			type?: string, // 47274/90500 (52.24%)
			width?: number, // 1/90500 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 47274/399673 (11.83%)
			height?: number, // 47274/399673 (11.83%)
			media_domain_url?: string, // 47274/399673 (11.83%)
			scrolling?: boolean, // 47274/399673 (11.83%)
			width?: number, // 47274/399673 (11.83%)
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
		suggested_sort: null|"confidence"|"qa"|"top"|"new"|"old"|"controversial"|"random",
		thumbnail: string,
		thumbnail_height: number|null,
		thumbnail_width: number|null,
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|null,
		wls: number|null,
	}[], // 401625/13975028 (2.87%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 17282/13975028 (0.12%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 17282/13975028 (0.12%)
	embed_url?: null|string, // 17282/13975028 (0.12%)
	event_end?: number, // 166/13975028 (0.00%)
	event_is_live?: boolean, // 166/13975028 (0.00%)
	event_start?: number, // 166/13975028 (0.00%)
	events?: [], // 17282/13975028 (0.12%)
	eventsOnRender?: [], // 17282/13975028 (0.12%)
	gilded: number,
	gildings: {
		gid_1: number,
		gid_2: number,
		gid_3: number,
	},
	hidden: boolean,
	href_url?: string, // 17282/13975028 (0.12%)
	id: string,
	is_blank?: boolean, // 17282/13975028 (0.12%)
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable?: boolean, // 13971276/13975028 (99.97%)
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 15931/1301694 (1.22%)
		e: "text"|"emoji",
		t?: string, // 1285763/1301694 (98.78%)
		u?: string, // 15931/1301694 (1.22%)
	}[],
	link_flair_template_id: null|string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 52/1278462 (0.00%)
		oembed?: {
			author_name?: string, // 818342/1076508 (76.02%)
			author_url?: string, // 817794/1076508 (75.97%)
			cache_age?: number, // 354/1076508 (0.03%)
			description?: string, // 450483/1076508 (41.85%)
			height: number,
			html: string,
			marginheight?: number, // 6/1076508 (0.00%)
			marginwidth?: number, // 6/1076508 (0.00%)
			mean_alpha?: number, // 4175/1076508 (0.39%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1075663/1076508 (99.92%)
			thumbnail_url?: string, // 1076466/1076508 (100.00%)
			thumbnail_width?: number, // 1075663/1076508 (99.92%)
			title?: string, // 1075863/1076508 (99.94%)
			type: "video"|"rich",
			url?: string, // 126321/1076508 (11.73%)
			version?: "1.0", // 1076502/1076508 (100.00%)
			width: number,
		}, // 1076508/1278462 (84.20%)
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
		}, // 201902/1278462 (15.79%)
		type?: string, // 1076560/1278462 (84.21%)
	},
	media_embed: {
		content?: string, // 1076560/13975028 (7.70%)
		height?: number, // 1076560/13975028 (7.70%)
		scrolling?: boolean, // 1076560/13975028 (7.70%)
		width?: number, // 1076560/13975028 (7.70%)
	},
	media_metadata?: null, // 152831/13975028 (1.09%)
	media_only: boolean,
	mobile_ad_url?: string, // 17282/13975028 (0.12%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 17282/13975028 (0.12%)
	outbound_link?: {
	}, // 17282/13975028 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"house_only"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"promo_specified"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 5610719/13975028 (40.15%)
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
				}, // 138503/5610719 (2.47%)
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
				}, // 138503/5610719 (2.47%)
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
				}, // 533524/5610719 (9.51%)
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
				}, // 556269/5610719 (9.91%)
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
		}, // 117538/5610719 (2.09%)
	}, // 5610719/13975028 (40.15%)
	priority_id?: null, // 17282/13975028 (0.12%)
	promoted?: boolean, // 17282/13975028 (0.12%)
	promoted_by?: null, // 17282/13975028 (0.12%)
	promoted_display_name?: null, // 17282/13975028 (0.12%)
	promoted_url?: null, // 17282/13975028 (0.12%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	rte_mode?: "markdown", // 1/13975028 (0.00%)
	score: number,
	secure_media: null|{
		event_id?: string, // 52/1278462 (0.00%)
		oembed?: {
			author_name?: string, // 818342/1076508 (76.02%)
			author_url?: string, // 817794/1076508 (75.97%)
			cache_age?: number, // 354/1076508 (0.03%)
			description?: string, // 450483/1076508 (41.85%)
			height: number,
			html: string,
			marginheight?: number, // 6/1076508 (0.00%)
			marginwidth?: number, // 6/1076508 (0.00%)
			mean_alpha?: number, // 4175/1076508 (0.39%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1075663/1076508 (99.92%)
			thumbnail_url?: string, // 1076466/1076508 (100.00%)
			thumbnail_width?: number, // 1075663/1076508 (99.92%)
			title?: string, // 1075863/1076508 (99.94%)
			type: "video"|"rich",
			url?: string, // 126321/1076508 (11.73%)
			version?: "1.0", // 1076502/1076508 (100.00%)
			width: number,
		}, // 1076508/1278462 (84.20%)
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
		}, // 201902/1278462 (15.79%)
		type?: string, // 1076560/1278462 (84.21%)
	},
	secure_media_embed: {
		content?: string, // 1076560/13975028 (7.70%)
		height?: number, // 1076560/13975028 (7.70%)
		media_domain_url?: string, // 1076560/13975028 (7.70%)
		scrolling?: boolean, // 1076560/13975028 (7.70%)
		width?: number, // 1076560/13975028 (7.70%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 17282/13975028 (0.12%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 17282/13975028 (0.12%)
	third_party_tracking?: null, // 17282/13975028 (0.12%)
	third_party_tracking_2?: null, // 17282/13975028 (0.12%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|null,
	wls: number|null,
}