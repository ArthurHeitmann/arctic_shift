interface RedditPost {
	adserver_click_url?: null, // 16104/13107215 (0.12%)
	adserver_imp_pixel?: null, // 16104/13107215 (0.12%)
	archived?: boolean, // 12958989/13107215 (98.87%)
	author: string,
	author_cakeday?: boolean, // 41552/13107215 (0.32%)
	author_created_utc?: number|null, // 13107077/13107215 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 63593/486042 (13.08%)
		e: "text"|"emoji",
		t?: string, // 422449/486042 (86.92%)
		u?: string, // 63593/486042 (13.08%)
	}[], // 10831307/13107215 (82.64%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 10831307/13107215 (82.64%)
	author_fullname?: string|null, // 13107077/13107215 (100.00%)
	author_id?: string|null, // 16104/13107215 (0.12%)
	author_patreon_flair?: boolean, // 10682213/13107215 (81.50%)
	call_to_action?: "Learn More"|"Shop Now"|"View More"|"Sign Up"|"Download"|"Install"|"Watch Now"|"Apply Now"|"Play Now"|"Get a Quote"|"Contact Us"|"Get Showtimes"|"See Menu", // 12809/13107215 (0.10%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"videos"|"drawing_and_painting"|"gaming"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"music"|"animals"|"memes"|"food"|"funny",
	collections?: {
		author_id: "t2_xrnc7wf"|"t2_240rydgk",
		author_name: "KpKrunal"|"lss_ev1",
		collection_id: "45655ba2-0baa-468a-b8f9-a443381c15b4"|"ae841be6-c163-4dc1-8656-a23b8973dd35"|"2f23ec07-cbca-4eff-ab4b-00e0e4bfe6c5"|"ae9cdb06-24e7-40a5-a09e-6fa7b48e3bf0"|"e58b0a7f-8b7f-4ba4-94c8-961e8c752fea"|"00215223-88d0-4326-b19b-9cb9e15cc25a"|"ab52d33f-497d-4bfb-bc47-ec74e19f01dd"|"c3ac1ba3-cc96-485c-a63c-b2eafcd58ef7"|"c77c2d24-e672-4336-9e65-e2abf979d952"|"1013cf77-cf0a-4b8a-963a-635bb03f1276"|"cda86efb-d27f-4024-bdc8-f48acd425701"|"84058501-22f8-4de5-9afc-3b9306eaa656"|"e7542cc6-f3ea-49cd-b90f-a4f8b46ed07a"|"5e084a52-b40e-4aa1-b717-c5d17f1afa5f"|"51e73dec-6089-4a43-aa86-58d58dd2902c",
		created_at_utc: number,
		last_update_utc: number,
		link_ids: string[],
		subreddit_id: "t5_kpka5",
		title: string,
	}[], // 67/13107215 (0.00%)
	content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"videos"|"entertainment"|"diy_and_crafts"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 353695/13107215 (2.70%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 842/351418 (0.24%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 3577/19235 (18.60%)
			e: "text"|"emoji",
			t?: string, // 15658/19235 (81.40%)
			u?: string, // 3577/19235 (18.60%)
		}[], // 320565/351418 (91.22%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 320565/351418 (91.22%)
		author_fullname?: string, // 320565/351418 (91.22%)
		author_patreon_flair?: boolean, // 319418/351418 (90.89%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"photography"|"drawing_and_painting"|"gaming"|"videos"|"entertainment"|"animals"|"music"|"diy_and_crafts"|"memes"|"food"|"writing",
		clicked: boolean,
		content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"comics"|"entertainment"|"videos"|"diy_and_crafts"|"music"|"writing")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 3/351418 (0.00%)
		event_is_live?: boolean, // 3/351418 (0.00%)
		event_start?: number, // 3/351418 (0.00%)
		gilded: number,
		gildings?: {
			gid_1: number,
			gid_2: number,
			gid_3: number,
		}, // 351385/351418 (99.99%)
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_crosspostable: boolean,
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable?: boolean, // 350037/351418 (99.61%)
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 667/26532 (2.51%)
			e: "text"|"emoji",
			t?: string, // 25865/26532 (97.49%)
			u?: string, // 667/26532 (2.51%)
		}[],
		link_flair_template_id: null|string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 2/75289 (0.00%)
			event_id?: "11l3t97134mrj"|"11lut8ktlyx8l"|"11jzk8dih8xvq"|"11m3mq5sovx2h"|"11mj8o1vhs24v", // 7/75289 (0.01%)
			height?: number, // 2/75289 (0.00%)
			oembed?: {
				author_name?: string, // 14574/41752 (34.91%)
				author_url?: string, // 14567/41752 (34.89%)
				cache_age?: number, // 8/41752 (0.02%)
				description?: string, // 29918/41752 (71.66%)
				height: number,
				html: string,
				mean_alpha?: number, // 23/41752 (0.06%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 41724/41752 (99.93%)
				thumbnail_url?: string, // 41737/41752 (99.96%)
				thumbnail_width?: number, // 41724/41752 (99.93%)
				title?: string, // 41740/41752 (99.97%)
				type: "video"|"rich",
				url?: string, // 2021/41752 (4.84%)
				version: "1.0",
				width: number,
			}, // 41752/75289 (55.46%)
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
			}, // 33528/75289 (44.53%)
			type?: string, // 41761/75289 (55.47%)
			width?: number, // 2/75289 (0.00%)
		},
		media_embed: {
			content?: string, // 41761/351418 (11.88%)
			height?: number, // 41761/351418 (11.88%)
			scrolling?: boolean, // 41761/351418 (11.88%)
			width?: number, // 41761/351418 (11.88%)
		},
		media_metadata?: null, // 2331/351418 (0.66%)
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
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 266008/351418 (75.70%)
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
					}, // 34846/266008 (13.10%)
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
					}, // 34846/266008 (13.10%)
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
					}, // 50925/266008 (19.14%)
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
					}, // 51837/266008 (19.49%)
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
			}, // 39092/266008 (14.70%)
		}, // 266008/351418 (75.70%)
		previous_visits?: number[], // 173/351418 (0.05%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 2/75289 (0.00%)
			event_id?: "11l3t97134mrj"|"11lut8ktlyx8l"|"11jzk8dih8xvq"|"11m3mq5sovx2h"|"11mj8o1vhs24v", // 7/75289 (0.01%)
			height?: number, // 2/75289 (0.00%)
			oembed?: {
				author_name?: string, // 14574/41752 (34.91%)
				author_url?: string, // 14567/41752 (34.89%)
				cache_age?: number, // 8/41752 (0.02%)
				description?: string, // 29918/41752 (71.66%)
				height: number,
				html: string,
				mean_alpha?: number, // 23/41752 (0.06%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 41724/41752 (99.93%)
				thumbnail_url?: string, // 41737/41752 (99.96%)
				thumbnail_width?: number, // 41724/41752 (99.93%)
				title?: string, // 41740/41752 (99.97%)
				type: "video"|"rich",
				url?: string, // 2021/41752 (4.84%)
				version: "1.0",
				width: number,
			}, // 41752/75289 (55.46%)
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
			}, // 33528/75289 (44.53%)
			type?: string, // 41761/75289 (55.47%)
			width?: number, // 2/75289 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 41761/351418 (11.88%)
			height?: number, // 41761/351418 (11.88%)
			media_domain_url?: string, // 41761/351418 (11.88%)
			scrolling?: boolean, // 41761/351418 (11.88%)
			width?: number, // 41761/351418 (11.88%)
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
	}[], // 353695/13107215 (2.70%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 16104/13107215 (0.12%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 16104/13107215 (0.12%)
	embed_url?: null|string, // 16104/13107215 (0.12%)
	event_end?: number, // 136/13107215 (0.00%)
	event_is_live?: boolean, // 136/13107215 (0.00%)
	event_start?: number, // 136/13107215 (0.00%)
	events?: [], // 16104/13107215 (0.12%)
	eventsOnRender?: [], // 16104/13107215 (0.12%)
	gilded: number,
	gildings?: {
		gid_1: number,
		gid_2: number,
		gid_3: number,
	}, // 13100837/13107215 (99.95%)
	hidden: boolean,
	href_url?: string, // 16104/13107215 (0.12%)
	id: string,
	is_blank?: boolean, // 16104/13107215 (0.12%)
	is_crosspostable: boolean,
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable?: boolean, // 12952611/13107215 (98.82%)
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color: string,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 12420/1112763 (1.12%)
		e: "text"|"emoji",
		t?: string, // 1100343/1112763 (98.88%)
		u?: string, // 12420/1112763 (1.12%)
	}[],
	link_flair_template_id: null|string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 56/1204502 (0.00%)
		oembed?: {
			author_name?: string, // 788718/1035399 (76.18%)
			author_url?: string, // 788209/1035399 (76.13%)
			cache_age?: number, // 346/1035399 (0.03%)
			description?: string, // 429532/1035399 (41.48%)
			height: number,
			html: string,
			marginheight?: number, // 1/1035399 (0.00%)
			marginwidth?: number, // 1/1035399 (0.00%)
			mean_alpha?: number, // 3579/1035399 (0.35%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1034644/1035399 (99.93%)
			thumbnail_url?: string, // 1035369/1035399 (100.00%)
			thumbnail_width?: number, // 1034644/1035399 (99.93%)
			title?: string, // 1034898/1035399 (99.95%)
			type: "video"|"rich",
			url?: string, // 122582/1035399 (11.84%)
			version?: "1.0", // 1035398/1035399 (100.00%)
			width: number,
		}, // 1035399/1204502 (85.96%)
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
		}, // 169047/1204502 (14.03%)
		type?: string, // 1035455/1204502 (85.97%)
	},
	media_embed: {
		content?: string, // 1035455/13107215 (7.90%)
		height?: number, // 1035455/13107215 (7.90%)
		scrolling?: boolean, // 1035455/13107215 (7.90%)
		width?: number, // 1035455/13107215 (7.90%)
	},
	media_metadata?: null, // 128990/13107215 (0.98%)
	media_only: boolean,
	mobile_ad_url?: string, // 16104/13107215 (0.12%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 16104/13107215 (0.12%)
	outbound_link?: {
	}, // 16104/13107215 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 5167021/13107215 (39.42%)
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
				}, // 130790/5167021 (2.53%)
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
				}, // 130790/5167021 (2.53%)
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
				}, // 476458/5167021 (9.22%)
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
				}, // 499551/5167021 (9.67%)
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
		}, // 111863/5167021 (2.16%)
	}, // 5167021/13107215 (39.42%)
	priority_id?: null, // 16104/13107215 (0.12%)
	promoted?: boolean, // 16104/13107215 (0.12%)
	promoted_by?: null, // 16104/13107215 (0.12%)
	promoted_display_name?: null, // 16104/13107215 (0.12%)
	promoted_url?: null, // 16104/13107215 (0.12%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 56/1204502 (0.00%)
		oembed?: {
			author_name?: string, // 788718/1035399 (76.18%)
			author_url?: string, // 788209/1035399 (76.13%)
			cache_age?: number, // 346/1035399 (0.03%)
			description?: string, // 429532/1035399 (41.48%)
			height: number,
			html: string,
			marginheight?: number, // 1/1035399 (0.00%)
			marginwidth?: number, // 1/1035399 (0.00%)
			mean_alpha?: number, // 3579/1035399 (0.35%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1034644/1035399 (99.93%)
			thumbnail_url?: string, // 1035369/1035399 (100.00%)
			thumbnail_width?: number, // 1034644/1035399 (99.93%)
			title?: string, // 1034898/1035399 (99.95%)
			type: "video"|"rich",
			url?: string, // 122582/1035399 (11.84%)
			version?: "1.0", // 1035398/1035399 (100.00%)
			width: number,
		}, // 1035399/1204502 (85.96%)
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
		}, // 169047/1204502 (14.03%)
		type?: string, // 1035455/1204502 (85.97%)
	},
	secure_media_embed: {
		content?: string, // 1035455/13107215 (7.90%)
		height?: number, // 1035455/13107215 (7.90%)
		media_domain_url?: string, // 1035455/13107215 (7.90%)
		scrolling?: boolean, // 1035455/13107215 (7.90%)
		width?: number, // 1035455/13107215 (7.90%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 16104/13107215 (0.12%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 16104/13107215 (0.12%)
	third_party_tracking?: null, // 16104/13107215 (0.12%)
	third_party_tracking_2?: null, // 16104/13107215 (0.12%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|"promo_specified"|"promo_adult"|null,
	wls: number|null,
}