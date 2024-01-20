interface RedditPost {
	adserver_click_url?: null, // 14363/14894452 (0.10%)
	adserver_imp_pixel?: null, // 14363/14894452 (0.10%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 42808/14894452 (0.29%)
	author_created_utc?: number|null, // 14894416/14894452 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 140983/719106 (19.61%)
		e: "text"|"emoji",
		t?: string, // 578123/719106 (80.39%)
		u?: string, // 140983/719106 (19.61%)
	}[], // 12010529/14894452 (80.64%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 12010529/14894452 (80.64%)
	author_fullname?: string|null, // 14894416/14894452 (100.00%)
	author_id?: string|null, // 14363/14894452 (0.10%)
	author_patreon_flair?: boolean, // 12010529/14894452 (80.64%)
	call_to_action?: "Learn More"|"Shop Now"|"View More"|"Sign Up"|"Watch Now"|"Play Now"|"Download"|"Install"|"Apply Now"|"Contact Us"|"Get Showtimes"|"Get a Quote"|"See Menu"|null, // 11162/14894452 (0.07%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"videos"|"drawing_and_painting"|"gaming"|"photography"|"writing"|"entertainment"|"diy_and_crafts"|"music"|"animals"|"memes"|"food"|"funny",
	collections?: {
		author_id: string,
		author_name: string,
		collection_id: string,
		created_at_utc: number,
		description?: null|"", // 390/515 (75.73%)
		display_layout?: null, // 390/515 (75.73%)
		last_update_utc: number,
		link_ids: string[],
		permalink: string,
		subreddit_id: "t5_kpka5"|"t5_39cf6"|"t5_2t7hh"|"t5_2qhu3"|"t5_2cneq"|"t5_2rjz2"|"t5_2r40o"|"t5_2qimj"|"t5_ln5kv"|"t5_3oeyf"|"t5_2qhqt"|"t5_2qs08"|"t5_2qh6e"|"t5_pfqef",
		title: string,
	}[], // 515/14894452 (0.00%)
	content_categories: null|("photography"|"gaming"|"drawing_and_painting"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 491800/14894452 (3.30%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 1480/487659 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 7061/26710 (26.44%)
			e: "text"|"emoji",
			t?: string, // 19649/26710 (73.56%)
			u?: string, // 7061/26710 (26.44%)
		}[], // 442378/487659 (90.71%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 442378/487659 (90.71%)
		author_fullname?: string, // 442378/487659 (90.71%)
		author_patreon_flair?: boolean, // 442378/487659 (90.71%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"animals"|"gaming"|"entertainment"|"memes"|"music"|"videos"|"diy_and_crafts"|"food"|"art",
		clicked: boolean,
		collections?: {
			author_id: "t2_xrnc7wf"|"t2_j9rzqyz"|"t2_ryprsip"|"t2_is8h8ap"|"t2_f82y4"|"t2_zvwma"|"t2_17aq3ltt"|"t2_nimfq"|"t2_d5h4t",
			author_name: "KpKrunal"|"reddit_qa_lss2"|"RLMatchThreads"|"reddit_qa_lss"|"Haveireddit"|"ShuichiRL"|"kp-krunal"|"Vino_7s"|"optimalg",
			collection_id: "fc1abe07-76c2-475c-be19-5a70ffddc682"|"a8dde022-3b9c-4894-bb1a-f5713b44eb42"|"973528a8-ee44-4075-9424-0ce4eee84c10"|"4b67944c-9786-44c5-b6ea-dadbd71f46e2"|"3d0a0c07-796e-4e7b-a6fa-d3ed6dfd2335"|"6068aee8-9885-46f6-9599-4d99d8c72214"|"65a57ddb-5927-47f6-a065-c63cc0032e4d"|"cec61ee3-cf8e-40cd-8d63-9f15ff28440e"|"e58b0a7f-8b7f-4ba4-94c8-961e8c752fea"|"e7542cc6-f3ea-49cd-b90f-a4f8b46ed07a"|"ae841be6-c163-4dc1-8656-a23b8973dd35"|"8279e5f4-fac5-4215-89ba-d9a802323b09"|"0446fa73-15bb-46bb-9132-226c98b3e13e"|"00215223-88d0-4326-b19b-9cb9e15cc25a"|"c8a469ae-ab49-4962-b6e9-19a519deea51",
			created_at_utc: number,
			description?: null, // 25/31 (80.65%)
			display_layout?: null, // 25/31 (80.65%)
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: "t5_kpka5"|"t5_39cf6"|"t5_2t7hh"|"t5_2cneq",
			title: string,
		}[], // 31/487659 (0.01%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 36/487659 (0.01%)
		event_is_live?: boolean, // 36/487659 (0.01%)
		event_start?: number, // 36/487659 (0.01%)
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
			a?: string, // 813/36285 (2.24%)
			e: "text"|"emoji",
			t?: string, // 35472/36285 (97.76%)
			u?: string, // 813/36285 (2.24%)
		}[],
		link_flair_template_id: null|string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "11zxhvvwwmb6j"|"1249opztalypr", // 2/114281 (0.00%)
			oembed?: {
				author_name?: string, // 15961/62491 (25.54%)
				author_url?: string, // 15954/62491 (25.53%)
				cache_age?: number, // 4/62491 (0.01%)
				description?: string, // 48416/62491 (77.48%)
				height: number,
				html: string,
				mean_alpha?: number, // 35/62491 (0.06%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 62217/62491 (99.56%)
				thumbnail_url?: string, // 62475/62491 (99.97%)
				thumbnail_width?: number, // 62217/62491 (99.56%)
				title?: string, // 62417/62491 (99.88%)
				type: "video"|"rich",
				url?: string, // 6831/62491 (10.93%)
				version: "1.0",
				width: number,
			}, // 62491/114281 (54.68%)
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
			}, // 51788/114281 (45.32%)
			type?: string, // 62493/114281 (54.68%)
		},
		media_embed: {
			content?: string, // 62493/487659 (12.81%)
			height?: number, // 62493/487659 (12.81%)
			scrolling?: boolean, // 62493/487659 (12.81%)
			width?: number, // 62493/487659 (12.81%)
		},
		media_metadata?: null|{
			[key: string]: {
				dashUrl?: string, // 24/770 (3.12%)
				e: "Image"|"RedditVideo"|"AnimatedImage",
				hlsUrl?: string, // 24/770 (3.12%)
				id: string,
				isGif?: boolean, // 24/770 (3.12%)
				m?: "image/jpg"|"image/png"|"image/gif", // 746/770 (96.88%)
				s?: {
					gif?: string, // 18/746 (2.41%)
					mp4?: string, // 18/746 (2.41%)
					u?: string, // 728/746 (97.59%)
					x: number,
					y: number,
				}, // 746/770 (96.88%)
				status: "valid",
				x?: number, // 24/770 (3.12%)
				y?: number, // 24/770 (3.12%)
			},
		}, // 2649/487659 (0.54%)
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
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 372935/487659 (76.47%)
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
					}, // 49761/372935 (13.34%)
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
					}, // 41022/372935 (11.00%)
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
					}, // 97330/372935 (26.10%)
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
					}, // 98578/372935 (26.43%)
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
			}, // 53993/372935 (14.48%)
		}, // 372935/487659 (76.47%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "11zxhvvwwmb6j"|"1249opztalypr", // 2/114281 (0.00%)
			oembed?: {
				author_name?: string, // 15961/62491 (25.54%)
				author_url?: string, // 15954/62491 (25.53%)
				cache_age?: number, // 4/62491 (0.01%)
				description?: string, // 48416/62491 (77.48%)
				height: number,
				html: string,
				mean_alpha?: number, // 35/62491 (0.06%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 62217/62491 (99.56%)
				thumbnail_url?: string, // 62475/62491 (99.97%)
				thumbnail_width?: number, // 62217/62491 (99.56%)
				title?: string, // 62417/62491 (99.88%)
				type: "video"|"rich",
				url?: string, // 6831/62491 (10.93%)
				version: "1.0",
				width: number,
			}, // 62491/114281 (54.68%)
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
			}, // 51788/114281 (45.32%)
			type?: string, // 62493/114281 (54.68%)
		},
		secure_media_embed: {
			content?: string, // 62493/487659 (12.81%)
			height?: number, // 62493/487659 (12.81%)
			media_domain_url?: string, // 62493/487659 (12.81%)
			scrolling?: boolean, // 62493/487659 (12.81%)
			width?: number, // 62493/487659 (12.81%)
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
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"random",
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
	}[], // 491800/14894452 (3.30%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 14363/14894452 (0.10%)
	edited: boolean|number,
	embed_type?: null|"scrape", // 14363/14894452 (0.10%)
	embed_url?: null|string, // 14363/14894452 (0.10%)
	event_end?: number, // 479/14894452 (0.00%)
	event_is_live?: boolean, // 479/14894452 (0.00%)
	event_start?: number, // 479/14894452 (0.00%)
	events?: [], // 14363/14894452 (0.10%)
	eventsOnRender?: [], // 14363/14894452 (0.10%)
	gilded: number,
	gildings: {
		gid_1: number,
		gid_2: number,
		gid_3: number,
	},
	hidden: boolean,
	href_url?: string, // 14363/14894452 (0.10%)
	id: string,
	is_blank?: boolean, // 14363/14894452 (0.10%)
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
		a?: string, // 22131/1543252 (1.43%)
		e: "text"|"emoji",
		t?: string, // 1521121/1543252 (98.57%)
		u?: string, // 22131/1543252 (1.43%)
	}[],
	link_flair_template_id: null|string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 39/1375539 (0.00%)
		oembed?: {
			author_name?: string, // 795919/1159875 (68.62%)
			author_url?: string, // 795467/1159875 (68.58%)
			cache_age?: number, // 309/1159875 (0.03%)
			description?: string, // 540744/1159875 (46.62%)
			height: number,
			html: string,
			mean_alpha?: number, // 3524/1159875 (0.30%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1157887/1159875 (99.83%)
			thumbnail_url?: string, // 1159819/1159875 (100.00%)
			thumbnail_width?: number, // 1157887/1159875 (99.83%)
			title?: string, // 1158713/1159875 (99.90%)
			type: "video"|"rich",
			url?: string, // 300134/1159875 (25.88%)
			version: "1.0",
			width: number,
		}, // 1159875/1375539 (84.32%)
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
		}, // 215625/1375539 (15.68%)
		type?: string, // 1159914/1375539 (84.32%)
	},
	media_embed: {
		content?: string, // 1159914/14894452 (7.79%)
		height?: number, // 1159914/14894452 (7.79%)
		scrolling?: boolean, // 1159914/14894452 (7.79%)
		width?: number, // 1159914/14894452 (7.79%)
	},
	media_metadata?: null|{
		[key: string]: {
			dashUrl?: string, // 900/30329 (2.97%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 30296/30329 (99.89%)
			hlsUrl?: string, // 900/30329 (2.97%)
			id?: string, // 30296/30329 (99.89%)
			isGif?: boolean, // 900/30329 (2.97%)
			m?: "image/jpg"|"image/png"|"image/gif", // 29396/30329 (96.92%)
			s?: {
				gif?: string, // 366/29396 (1.25%)
				mp4?: string, // 366/29396 (1.25%)
				u?: string, // 29030/29396 (98.75%)
				x: number,
				y: number,
			}, // 29396/30329 (96.92%)
			status: "valid"|"failed",
			x?: number, // 900/30329 (2.97%)
			y?: number, // 900/30329 (2.97%)
		},
	}, // 161435/14894452 (1.08%)
	media_only: boolean,
	mobile_ad_url?: string, // 14363/14894452 (0.10%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 14363/14894452 (0.10%)
	outbound_link?: {
	}, // 14363/14894452 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 5868212/14894452 (39.40%)
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
				}, // 165528/5868212 (2.82%)
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
				}, // 165528/5868212 (2.82%)
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
				}, // 707793/5868212 (12.06%)
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
				}, // 732167/5868212 (12.48%)
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
		}, // 138421/5868212 (2.36%)
	}, // 5868212/14894452 (39.40%)
	priority_id?: null, // 14363/14894452 (0.10%)
	promoted?: boolean, // 14363/14894452 (0.10%)
	promoted_by?: null, // 14363/14894452 (0.10%)
	promoted_display_name?: null, // 14363/14894452 (0.10%)
	promoted_url?: null, // 14363/14894452 (0.10%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 39/1375539 (0.00%)
		oembed?: {
			author_name?: string, // 795919/1159875 (68.62%)
			author_url?: string, // 795467/1159875 (68.58%)
			cache_age?: number, // 309/1159875 (0.03%)
			description?: string, // 540744/1159875 (46.62%)
			height: number,
			html: string,
			mean_alpha?: number, // 3524/1159875 (0.30%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1157887/1159875 (99.83%)
			thumbnail_url?: string, // 1159819/1159875 (100.00%)
			thumbnail_width?: number, // 1157887/1159875 (99.83%)
			title?: string, // 1158713/1159875 (99.90%)
			type: "video"|"rich",
			url?: string, // 300134/1159875 (25.88%)
			version: "1.0",
			width: number,
		}, // 1159875/1375539 (84.32%)
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
		}, // 215625/1375539 (15.68%)
		type?: string, // 1159914/1375539 (84.32%)
	},
	secure_media_embed: {
		content?: string, // 1159914/14894452 (7.79%)
		height?: number, // 1159914/14894452 (7.79%)
		media_domain_url?: string, // 1159914/14894452 (7.79%)
		scrolling?: boolean, // 1159914/14894452 (7.79%)
		width?: number, // 1159914/14894452 (7.79%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 14363/14894452 (0.10%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"restricted"|"user"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"random",
	third_party_trackers?: string[]|null, // 14363/14894452 (0.10%)
	third_party_tracking?: null, // 14363/14894452 (0.10%)
	third_party_tracking_2?: null, // 14363/14894452 (0.10%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
	wls: number|null,
}