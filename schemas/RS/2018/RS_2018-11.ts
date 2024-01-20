interface RedditPost {
	adserver_click_url?: null, // 19503/13862155 (0.14%)
	adserver_imp_pixel?: null, // 19503/13862155 (0.14%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 39005/13862155 (0.28%)
	author_created_utc?: number|null, // 13862075/13862155 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 141929/654193 (21.70%)
		e: "text"|"emoji",
		t?: string, // 512264/654193 (78.30%)
		u?: string, // 141929/654193 (21.70%)
	}[], // 11153257/13862155 (80.46%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 11153257/13862155 (80.46%)
	author_fullname?: string|null, // 13862075/13862155 (100.00%)
	author_id?: string|null, // 19503/13862155 (0.14%)
	author_patreon_flair?: boolean, // 11153257/13862155 (80.46%)
	call_to_action?: "Shop Now"|"Learn More"|"View More"|"Sign Up"|"Download"|"Install"|"Play Now"|"Apply Now"|"Watch Now"|"Contact Us"|"Get Showtimes"|"Get a Quote"|"See Menu"|null, // 14708/13862155 (0.11%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"videos"|"drawing_and_painting"|"gaming"|"photography"|"writing"|"entertainment"|"diy_and_crafts"|"music"|"animals"|"memes"|"food"|"funny",
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description?: null|"", // 340/406 (83.74%)
		display_layout?: null, // 340/406 (83.74%)
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		subreddit_id: string,
		title: string,
	}[], // 406/13862155 (0.00%)
	content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"entertainment"|"videos"|"diy_and_crafts"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 416923/13862155 (3.01%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 1216/413356 (0.29%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 6716/25545 (26.29%)
			e: "text"|"emoji",
			t?: string, // 18829/25545 (73.71%)
			u?: string, // 6716/25545 (26.29%)
		}[], // 372746/413356 (90.18%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 372746/413356 (90.18%)
		author_fullname?: string, // 372746/413356 (90.18%)
		author_patreon_flair?: boolean, // 372746/413356 (90.18%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"animals"|"photography"|"drawing_and_painting"|"gaming"|"entertainment"|"memes"|"diy_and_crafts"|"music"|"videos"|"funny"|"food"|"art"|"writing",
		clicked: boolean,
		collections?: {
			author_id: "t2_xrnc7wf"|"t2_f82y4"|"t2_6cj5r"|"t2_br8tu"|"t2_17aq3ltt"|"t2_jv2kx"|"t2_ryprsip"|"t2_zvwma"|"t2_nimfq"|"t2_9if8x"|"t2_y7whojl",
			author_name: "KpKrunal"|"Haveireddit"|"picflute"|"BurlsteinBurl"|"kp-krunal"|"BWPhoenix"|"RLMatchThreads"|"ShuichiRL"|"Vino_7s"|"xfile345"|"0perspective",
			collection_id: string,
			created_at_utc: number,
			description?: null|"", // 37/42 (88.10%)
			display_layout?: null, // 37/42 (88.10%)
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: "t5_kpka5"|"t5_2t7hh"|"t5_39cf6"|"t5_2rfxx"|"t5_3oeyf"|"t5_2rjz2"|"t5_2qs08"|"t5_pfqef",
			title: string,
		}[], // 42/413356 (0.01%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"videos"|"writing"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 10/413356 (0.00%)
		event_is_live?: boolean, // 10/413356 (0.00%)
		event_start?: number, // 10/413356 (0.00%)
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
			a?: string, // 740/33646 (2.20%)
			e: "text"|"emoji",
			t?: string, // 32906/33646 (97.80%)
			u?: string, // 740/33646 (2.20%)
		}[],
		link_flair_template_id: null|string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 2/95891 (0.00%)
			event_id?: "11wigida425cw"|"11wkri0ln3v7i"|"11ws9z9r8t1qc"|"11zxhvvwwmb6j", // 5/95891 (0.01%)
			height?: number, // 2/95891 (0.00%)
			oembed?: {
				author_name?: string, // 16505/49515 (33.33%)
				author_url?: string, // 16499/49515 (33.32%)
				cache_age?: number, // 6/49515 (0.01%)
				description?: string, // 35500/49515 (71.70%)
				height: number,
				html: string,
				mean_alpha?: number, // 44/49515 (0.09%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 49325/49515 (99.62%)
				thumbnail_url?: string, // 49490/49515 (99.95%)
				thumbnail_width?: number, // 49325/49515 (99.62%)
				title?: string, // 49479/49515 (99.93%)
				type: "video"|"rich",
				url?: string, // 1917/49515 (3.87%)
				version: "1.0",
				width: number,
			}, // 49515/95891 (51.64%)
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
			}, // 46369/95891 (48.36%)
			type?: string, // 49522/95891 (51.64%)
			width?: number, // 2/95891 (0.00%)
		},
		media_embed: {
			content?: string, // 49522/413356 (11.98%)
			height?: number, // 49522/413356 (11.98%)
			scrolling?: boolean, // 49522/413356 (11.98%)
			width?: number, // 49522/413356 (11.98%)
		},
		media_metadata?: null, // 2543/413356 (0.62%)
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
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 312497/413356 (75.60%)
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
					}, // 38361/312497 (12.28%)
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
					}, // 3305/312497 (1.06%)
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
					}, // 65898/312497 (21.09%)
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
					}, // 67169/312497 (21.49%)
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
			}, // 42607/312497 (13.63%)
		}, // 312497/413356 (75.60%)
		previous_visits?: number[], // 4/413356 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 2/95891 (0.00%)
			event_id?: "11wigida425cw"|"11wkri0ln3v7i"|"11ws9z9r8t1qc"|"11zxhvvwwmb6j", // 5/95891 (0.01%)
			height?: number, // 2/95891 (0.00%)
			oembed?: {
				author_name?: string, // 16505/49515 (33.33%)
				author_url?: string, // 16499/49515 (33.32%)
				cache_age?: number, // 6/49515 (0.01%)
				description?: string, // 35500/49515 (71.70%)
				height: number,
				html: string,
				mean_alpha?: number, // 44/49515 (0.09%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 49325/49515 (99.62%)
				thumbnail_url?: string, // 49490/49515 (99.95%)
				thumbnail_width?: number, // 49325/49515 (99.62%)
				title?: string, // 49479/49515 (99.93%)
				type: "video"|"rich",
				url?: string, // 1917/49515 (3.87%)
				version: "1.0",
				width: number,
			}, // 49515/95891 (51.64%)
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
			}, // 46369/95891 (48.36%)
			type?: string, // 49522/95891 (51.64%)
			width?: number, // 2/95891 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 49522/413356 (11.98%)
			height?: number, // 49522/413356 (11.98%)
			media_domain_url?: string, // 49522/413356 (11.98%)
			scrolling?: boolean, // 49522/413356 (11.98%)
			width?: number, // 49522/413356 (11.98%)
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
	}[], // 416923/13862155 (3.01%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	domain_override?: string|null, // 19503/13862155 (0.14%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 19503/13862155 (0.14%)
	embed_url?: null|string, // 19503/13862155 (0.14%)
	event_end?: number, // 196/13862155 (0.00%)
	event_is_live?: boolean, // 196/13862155 (0.00%)
	event_start?: number, // 196/13862155 (0.00%)
	events?: [], // 19503/13862155 (0.14%)
	eventsOnRender?: [], // 19503/13862155 (0.14%)
	gilded: number,
	gildings: {
		gid_1: number,
		gid_2: number,
		gid_3: number,
	},
	hidden: boolean,
	href_url?: string, // 19503/13862155 (0.14%)
	id: string,
	is_blank?: boolean, // 19503/13862155 (0.14%)
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
		a?: string, // 17261/1440928 (1.20%)
		e: "text"|"emoji",
		t?: string, // 1423667/1440928 (98.80%)
		u?: string, // 17261/1440928 (1.20%)
	}[],
	link_flair_template_id: null|string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 92/1241282 (0.01%)
		oembed?: {
			author_name?: string, // 778136/1048542 (74.21%)
			author_url?: string, // 777681/1048542 (74.17%)
			cache_age?: number, // 330/1048542 (0.03%)
			description?: string, // 450036/1048542 (42.92%)
			height: number,
			html: string,
			marginheight?: number, // 5/1048542 (0.00%)
			marginwidth?: number, // 5/1048542 (0.00%)
			mean_alpha?: number, // 4549/1048542 (0.43%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1046238/1048542 (99.78%)
			thumbnail_url?: string, // 1048487/1048542 (99.99%)
			thumbnail_width?: number, // 1046238/1048542 (99.78%)
			title?: string, // 1047435/1048542 (99.89%)
			type: "video"|"rich",
			url?: string, // 115349/1048542 (11.00%)
			version?: "1.0", // 1048537/1048542 (100.00%)
			width: number,
		}, // 1048542/1241282 (84.47%)
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
		}, // 192648/1241282 (15.52%)
		type?: string, // 1048634/1241282 (84.48%)
	},
	media_embed: {
		content?: string, // 1048634/13862155 (7.56%)
		height?: number, // 1048634/13862155 (7.56%)
		scrolling?: boolean, // 1048634/13862155 (7.56%)
		width?: number, // 1048634/13862155 (7.56%)
	},
	media_metadata?: null|{
		[key: string]: {
			e: "Image"|"AnimatedImage",
			id: string,
			m: "image/jpg"|"image/png"|"image/gif",
			s: {
				gif?: "https://i.redd.it/1jb76jalx0121.gif", // 1/21 (4.76%)
				mp4?: string, // 1/21 (4.76%)
				u?: string, // 20/21 (95.24%)
				x: number,
				y: number,
			},
			status: "valid",
		},
	}, // 149062/13862155 (1.08%)
	media_only: boolean,
	mobile_ad_url?: string, // 19503/13862155 (0.14%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 19503/13862155 (0.14%)
	outbound_link?: {
	}, // 19503/13862155 (0.14%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 5376192/13862155 (38.78%)
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
				}, // 134595/5376192 (2.50%)
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
				}, // 12865/5376192 (0.24%)
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
				}, // 542850/5376192 (10.10%)
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
				}, // 570219/5376192 (10.61%)
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
		}, // 114731/5376192 (2.13%)
	}, // 5376192/13862155 (38.78%)
	priority_id?: null, // 19503/13862155 (0.14%)
	promoted?: boolean, // 19503/13862155 (0.14%)
	promoted_by?: null, // 19503/13862155 (0.14%)
	promoted_display_name?: null, // 19503/13862155 (0.14%)
	promoted_url?: null, // 19503/13862155 (0.14%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 92/1241282 (0.01%)
		oembed?: {
			author_name?: string, // 778136/1048542 (74.21%)
			author_url?: string, // 777681/1048542 (74.17%)
			cache_age?: number, // 330/1048542 (0.03%)
			description?: string, // 450036/1048542 (42.92%)
			height: number,
			html: string,
			marginheight?: number, // 5/1048542 (0.00%)
			marginwidth?: number, // 5/1048542 (0.00%)
			mean_alpha?: number, // 4549/1048542 (0.43%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1046238/1048542 (99.78%)
			thumbnail_url?: string, // 1048487/1048542 (99.99%)
			thumbnail_width?: number, // 1046238/1048542 (99.78%)
			title?: string, // 1047435/1048542 (99.89%)
			type: "video"|"rich",
			url?: string, // 115349/1048542 (11.00%)
			version?: "1.0", // 1048537/1048542 (100.00%)
			width: number,
		}, // 1048542/1241282 (84.47%)
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
		}, // 192648/1241282 (15.52%)
		type?: string, // 1048634/1241282 (84.48%)
	},
	secure_media_embed: {
		content?: string, // 1048634/13862155 (7.56%)
		height?: number, // 1048634/13862155 (7.56%)
		media_domain_url?: string, // 1048634/13862155 (7.56%)
		scrolling?: boolean, // 1048634/13862155 (7.56%)
		width?: number, // 1048634/13862155 (7.56%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 19503/13862155 (0.14%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null, // 19503/13862155 (0.14%)
	third_party_tracking?: null, // 19503/13862155 (0.14%)
	third_party_tracking_2?: null, // 19503/13862155 (0.14%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
	wls: number|null,
}