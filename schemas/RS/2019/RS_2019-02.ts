interface RedditPost {
	adserver_click_url?: null, // 13984/15743620 (0.09%)
	adserver_imp_pixel?: null, // 13984/15743620 (0.09%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 58447/15743620 (0.37%)
	author_created_utc?: number|null, // 15743218/15743620 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 205272/846688 (24.24%)
		e: "text"|"emoji",
		t?: string, // 641416/846688 (75.76%)
		u?: string, // 205272/846688 (24.24%)
	}[], // 12794599/15743620 (81.27%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 12794599/15743620 (81.27%)
	author_fullname?: string|null, // 15743218/15743620 (100.00%)
	author_id?: string|null, // 13984/15743620 (0.09%)
	author_patreon_flair?: boolean, // 12794599/15743620 (81.27%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"Install"|"View More"|"Download"|"Play Now"|"Watch Now"|"Apply Now"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|null, // 11541/15743620 (0.07%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"videos"|"gaming"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"animals"|"music"|"memes"|"food"|"funny",
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description: string|null,
		display_layout: null,
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		subreddit_id: string,
		title: string,
	}[], // 289/15743620 (0.00%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 605476/15743620 (3.85%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 1605/600892 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 9572/36646 (26.12%)
			e: "text"|"emoji",
			t?: string, // 27074/36646 (73.88%)
			u?: string, // 9572/36646 (26.12%)
		}[], // 547000/600892 (91.03%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 547000/600892 (91.03%)
		author_fullname?: string, // 547000/600892 (91.03%)
		author_patreon_flair?: boolean, // 547000/600892 (91.03%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"memes"|"videos"|"diy_and_crafts"|"music",
		clicked: boolean,
		collections?: {
			author_id: "t2_xrnc7wf"|"t2_czene"|"t2_ryprsip"|"t2_3rgg2"|"t2_4x3vt"|"t2_17aq3ltt"|"t2_d5h4t"|"t2_jv2kx"|"t2_fpdxd"|"t2_16iwg5"|"t2_zvwma",
			author_name: "KpKrunal"|"LordKeren"|"RLMatchThreads"|"Musely"|"ijm8710"|"kp-krunal"|"optimalg"|"BWPhoenix"|"J4ckrh"|"jeypiti"|"ShuichiRL",
			collection_id: "790a7573-e0d2-4f50-9d7a-648eeafcd10d"|"add336da-7c4d-4c92-ab95-7c320cbe625b"|"0a864da0-78b5-4423-b94e-700523cd9e60"|"58fa04ed-259a-403e-a31e-01a38f68ce54"|"4b67944c-9786-44c5-b6ea-dadbd71f46e2"|"c8a469ae-ab49-4962-b6e9-19a519deea51"|"e7542cc6-f3ea-49cd-b90f-a4f8b46ed07a"|"70c3900c-bc8a-45e5-b562-52226c5756e3"|"6be90d4b-f3c2-4d94-8afc-d9f10666bec5"|"8279e5f4-fac5-4215-89ba-d9a802323b09"|"23052cbb-6416-4abe-ad62-1f9480687b5d"|"e4ce1d5e-f745-4786-af7f-0e74674a4ef1"|"cec61ee3-cf8e-40cd-8d63-9f15ff28440e"|"24d05075-90f8-4fb5-8f9c-58748c1fe436",
			created_at_utc: number,
			description: string|null,
			display_layout: null,
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: "t5_kpka5"|"t5_2t1bl"|"t5_39cf6"|"t5_3lspr"|"t5_2rmtr"|"t5_2cneq"|"t5_2rjz2"|"t5_2qhqt",
			title: string,
		}[], // 25/600892 (0.00%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"videos"|"writing"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 18/600892 (0.00%)
		event_is_live?: boolean, // 18/600892 (0.00%)
		event_start?: number, // 18/600892 (0.00%)
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
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 1266/51101 (2.48%)
			e: "text"|"emoji",
			t?: string, // 49835/51101 (97.52%)
			u?: string, // 1266/51101 (2.48%)
		}[],
		link_flair_template_id?: null|string, // 225817/600892 (37.58%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 1/152455 (0.00%)
			event_id?: "12gelelgq88lv"|"12ijtbxjwkt66", // 2/152455 (0.00%)
			height?: number, // 1/152455 (0.00%)
			oembed?: {
				author_name?: string, // 18623/91834 (20.28%)
				author_url?: string, // 18620/91834 (20.28%)
				cache_age?: number, // 10/91834 (0.01%)
				description?: string, // 75188/91834 (81.87%)
				height: number,
				html: string,
				mean_alpha?: number, // 57/91834 (0.06%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 91483/91834 (99.62%)
				thumbnail_url?: string, // 91830/91834 (100.00%)
				thumbnail_width?: number, // 91483/91834 (99.62%)
				title?: string, // 91773/91834 (99.93%)
				type: "video"|"rich",
				url?: string, // 9069/91834 (9.88%)
				version: "1.0",
				width: number,
			}, // 91834/152455 (60.24%)
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
			}, // 60618/152455 (39.76%)
			type?: string, // 91837/152455 (60.24%)
			width?: number, // 1/152455 (0.00%)
		},
		media_embed: {
			content?: string, // 91837/600892 (15.28%)
			height?: number, // 91837/600892 (15.28%)
			scrolling?: boolean, // 91837/600892 (15.28%)
			width?: number, // 91837/600892 (15.28%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 198/5044 (3.93%)
				e?: "Image"|"RedditVideo", // 5037/5044 (99.86%)
				hlsUrl?: string, // 198/5044 (3.93%)
				id?: string, // 5037/5044 (99.86%)
				isGif?: boolean, // 198/5044 (3.93%)
				m?: "image/jpg"|"image/png"|"image/gif", // 4839/5044 (95.94%)
				s?: {
					u: string,
					x: number,
					y: number,
				}, // 4839/5044 (95.94%)
				status: "valid"|"failed",
				x?: number, // 198/5044 (3.93%)
				y?: number, // 198/5044 (3.93%)
			},
		}|null, // 2647/600892 (0.44%)
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
		parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
		permalink: string,
		pinned: boolean,
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 457017/600892 (76.06%)
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
					}, // 71320/457017 (15.61%)
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
					}, // 67670/457017 (14.81%)
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
					}, // 138007/457017 (30.20%)
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
					}, // 139458/457017 (30.51%)
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
			}, // 75207/457017 (16.46%)
		}, // 457017/600892 (76.06%)
		previous_visits?: number[], // 2/600892 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 1/152455 (0.00%)
			event_id?: "12gelelgq88lv"|"12ijtbxjwkt66", // 2/152455 (0.00%)
			height?: number, // 1/152455 (0.00%)
			oembed?: {
				author_name?: string, // 18623/91834 (20.28%)
				author_url?: string, // 18620/91834 (20.28%)
				cache_age?: number, // 10/91834 (0.01%)
				description?: string, // 75188/91834 (81.87%)
				height: number,
				html: string,
				mean_alpha?: number, // 57/91834 (0.06%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 91483/91834 (99.62%)
				thumbnail_url?: string, // 91830/91834 (100.00%)
				thumbnail_width?: number, // 91483/91834 (99.62%)
				title?: string, // 91773/91834 (99.93%)
				type: "video"|"rich",
				url?: string, // 9069/91834 (9.88%)
				version: "1.0",
				width: number,
			}, // 91834/152455 (60.24%)
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
			}, // 60618/152455 (39.76%)
			type?: string, // 91837/152455 (60.24%)
			width?: number, // 1/152455 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 91837/600892 (15.28%)
			height?: number, // 91837/600892 (15.28%)
			media_domain_url?: string, // 91837/600892 (15.28%)
			scrolling?: boolean, // 91837/600892 (15.28%)
			width?: number, // 91837/600892 (15.28%)
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
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
		wls: number|null,
	}[], // 605476/15743620 (3.85%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 13984/15743620 (0.09%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 13984/15743620 (0.09%)
	embed_url?: null|string, // 13984/15743620 (0.09%)
	event_end?: number, // 325/15743620 (0.00%)
	event_is_live?: boolean, // 333/15743620 (0.00%)
	event_start?: number, // 333/15743620 (0.00%)
	events?: [], // 13984/15743620 (0.09%)
	eventsOnRender?: [], // 13984/15743620 (0.09%)
	gilded: number,
	gildings: {
		gid_1: number,
		gid_2: number,
		gid_3: number,
	},
	hidden: boolean,
	href_url?: string, // 13984/15743620 (0.09%)
	id: string,
	is_blank?: boolean, // 13984/15743620 (0.09%)
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
		a?: string, // 31745/1633089 (1.94%)
		e: "text"|"emoji",
		t?: string, // 1601344/1633089 (98.06%)
		u?: string, // 31745/1633089 (1.94%)
	}[],
	link_flair_template_id?: null|string, // 5713444/15743620 (36.29%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 61/1516973 (0.00%)
		oembed?: {
			author_name?: string, // 864014/1252858 (68.96%)
			author_url?: string, // 863509/1252858 (68.92%)
			cache_age?: number, // 303/1252858 (0.02%)
			description?: string, // 583095/1252858 (46.54%)
			height: number,
			html: string,
			marginheight?: number, // 5/1252858 (0.00%)
			marginwidth?: number, // 5/1252858 (0.00%)
			mean_alpha?: number, // 2994/1252858 (0.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1250792/1252858 (99.84%)
			thumbnail_url?: string, // 1252785/1252858 (99.99%)
			thumbnail_width?: number, // 1250792/1252858 (99.84%)
			title?: string, // 1251551/1252858 (99.90%)
			type: "video"|"rich",
			url?: string, // 347097/1252858 (27.70%)
			version?: "1.0", // 1252853/1252858 (100.00%)
			width: number,
		}, // 1252858/1516973 (82.59%)
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
		}, // 264054/1516973 (17.41%)
		type?: string, // 1252919/1516973 (82.59%)
	},
	media_embed: {
		content?: string, // 1252919/15743620 (7.96%)
		height?: number, // 1252919/15743620 (7.96%)
		scrolling?: boolean, // 1252919/15743620 (7.96%)
		width?: number, // 1252919/15743620 (7.96%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 5296/169593 (3.12%)
			e?: "Image"|"RedditVideo", // 169421/169593 (99.90%)
			hlsUrl?: string, // 5296/169593 (3.12%)
			id?: string, // 169421/169593 (99.90%)
			isGif?: boolean, // 5296/169593 (3.12%)
			m?: "image/jpg"|"image/png"|"image/gif", // 164125/169593 (96.78%)
			s?: {
				u: string,
				x: number,
				y: number,
			}, // 164125/169593 (96.78%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 5296/169593 (3.12%)
			y?: number, // 5296/169593 (3.12%)
		},
	}|null, // 176385/15743620 (1.12%)
	media_only: boolean,
	mobile_ad_url?: string, // 13984/15743620 (0.09%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 13984/15743620 (0.09%)
	outbound_link?: {
	}, // 13984/15743620 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 6537914/15743620 (41.53%)
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
				}, // 193425/6537914 (2.96%)
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
				}, // 193425/6537914 (2.96%)
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
				}, // 769168/6537914 (11.76%)
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
				}, // 796030/6537914 (12.18%)
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
		}, // 168760/6537914 (2.58%)
	}, // 6537914/15743620 (41.53%)
	priority_id?: null, // 13984/15743620 (0.09%)
	promoted?: boolean, // 13984/15743620 (0.09%)
	promoted_by?: null, // 13984/15743620 (0.09%)
	promoted_display_name?: null, // 13984/15743620 (0.09%)
	promoted_url?: null, // 13984/15743620 (0.09%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 61/1516973 (0.00%)
		oembed?: {
			author_name?: string, // 864014/1252858 (68.96%)
			author_url?: string, // 863509/1252858 (68.92%)
			cache_age?: number, // 303/1252858 (0.02%)
			description?: string, // 583095/1252858 (46.54%)
			height: number,
			html: string,
			marginheight?: number, // 5/1252858 (0.00%)
			marginwidth?: number, // 5/1252858 (0.00%)
			mean_alpha?: number, // 2994/1252858 (0.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1250792/1252858 (99.84%)
			thumbnail_url?: string, // 1252785/1252858 (99.99%)
			thumbnail_width?: number, // 1250792/1252858 (99.84%)
			title?: string, // 1251551/1252858 (99.90%)
			type: "video"|"rich",
			url?: string, // 347097/1252858 (27.70%)
			version?: "1.0", // 1252853/1252858 (100.00%)
			width: number,
		}, // 1252858/1516973 (82.59%)
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
		}, // 264054/1516973 (17.41%)
		type?: string, // 1252919/1516973 (82.59%)
	},
	secure_media_embed: {
		content?: string, // 1252919/15743620 (7.96%)
		height?: number, // 1252919/15743620 (7.96%)
		media_domain_url?: string, // 1252919/15743620 (7.96%)
		scrolling?: boolean, // 1252919/15743620 (7.96%)
		width?: number, // 1252919/15743620 (7.96%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 13984/15743620 (0.09%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null, // 13984/15743620 (0.09%)
	third_party_tracking?: null, // 13984/15743620 (0.09%)
	third_party_tracking_2?: null, // 13984/15743620 (0.09%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
	wls: number|null,
}