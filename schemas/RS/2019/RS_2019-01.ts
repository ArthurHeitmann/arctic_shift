interface RedditPost {
	adserver_click_url?: null, // 15978/16445391 (0.10%)
	adserver_imp_pixel?: null, // 15978/16445391 (0.10%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 49020/16445391 (0.30%)
	author_created_utc?: number|null, // 16445140/16445391 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 182479/826694 (22.07%)
		e: "text"|"emoji",
		t?: string, // 644215/826694 (77.93%)
		u?: string, // 182479/826694 (22.07%)
	}[], // 13090493/16445391 (79.60%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 13090493/16445391 (79.60%)
	author_fullname?: string|null, // 16445140/16445391 (100.00%)
	author_id?: string|null, // 15978/16445391 (0.10%)
	author_patreon_flair?: boolean, // 13090493/16445391 (79.60%)
	call_to_action?: "Learn More"|"Shop Now"|"Sign Up"|"View More"|"Download"|"Watch Now"|"Play Now"|"Apply Now"|"Install"|"Contact Us"|"Get a Quote"|"Get Showtimes"|"See Menu"|null, // 12252/16445391 (0.07%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"videos"|"drawing_and_painting"|"gaming"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"animals"|"music"|"memes"|"food"|"funny",
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
	}[], // 215/16445391 (0.00%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"videos"|"diy_and_crafts"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 628166/16445391 (3.82%)
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 1746/619856 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 9449/34300 (27.55%)
			e: "text"|"emoji",
			t?: string, // 24851/34300 (72.45%)
			u?: string, // 9449/34300 (27.55%)
		}[], // 554352/619856 (89.43%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 554352/619856 (89.43%)
		author_fullname?: string, // 554352/619856 (89.43%)
		author_patreon_flair?: boolean, // 554352/619856 (89.43%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"memes"|"food"|"funny"|"pics_and_gifs",
		clicked: boolean,
		collections?: {
			author_id: "t2_zvwma"|"t2_4x3vt"|"t2_f82y4"|"t2_5niui"|"t2_zmjf4",
			author_name: "ShuichiRL"|"ijm8710"|"Haveireddit"|"SirBuckeye"|"Racer_77",
			collection_id: "0587828b-73ae-4a18-8a21-67f82e732a4c"|"58fa04ed-259a-403e-a31e-01a38f68ce54"|"3d0a0c07-796e-4e7b-a6fa-d3ed6dfd2335"|"f121c87c-eb16-4452-8447-09fd62c1e503"|"cfec472b-90ae-423d-aa5f-1fa154e1e717",
			created_at_utc: number,
			description: ""|null,
			display_layout: null,
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: "t5_39cf6"|"t5_2rmtr"|"t5_2t7hh"|"t5_2r1ox"|"t5_3aobb",
			title: "WSOE 4 Main Event"|"Changelogs for Android and iOS"|"Posts By Epic"|"r/kpop AMAs"|"Modposts",
		}[], // 7/619856 (0.00%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"videos"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 5/619856 (0.00%)
		event_is_live?: boolean, // 5/619856 (0.00%)
		event_start?: number, // 5/619856 (0.00%)
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
			a?: string, // 1228/45722 (2.69%)
			e: "text"|"emoji",
			t?: string, // 44494/45722 (97.31%)
			u?: string, // 1228/45722 (2.69%)
		}[],
		link_flair_template_id: null|string,
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			content?: string, // 2/153077 (0.00%)
			event_id?: "129aakvppieqt"|"12agd2t5r3zs4", // 2/153077 (0.00%)
			height?: number, // 2/153077 (0.00%)
			oembed?: {
				author_name?: string, // 17558/89946 (19.52%)
				author_url?: string, // 17550/89946 (19.51%)
				cache_age?: number, // 5/89946 (0.01%)
				description?: string, // 74131/89946 (82.42%)
				height: number,
				html: string,
				mean_alpha?: number, // 36/89946 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 89384/89946 (99.38%)
				thumbnail_url?: string, // 89927/89946 (99.98%)
				thumbnail_width?: number, // 89384/89946 (99.38%)
				title?: string, // 89873/89946 (99.92%)
				type: "video"|"rich",
				url?: string, // 9838/89946 (10.94%)
				version: "1.0",
				width: number,
			}, // 89946/153077 (58.76%)
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
			}, // 63127/153077 (41.24%)
			type?: string, // 89950/153077 (58.76%)
			width?: number, // 2/153077 (0.00%)
		},
		media_embed: {
			content?: string, // 89950/619856 (14.51%)
			height?: number, // 89950/619856 (14.51%)
			scrolling?: boolean, // 89950/619856 (14.51%)
			width?: number, // 89950/619856 (14.51%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 173/4631 (3.74%)
				e?: "Image"|"RedditVideo", // 4629/4631 (99.96%)
				hlsUrl?: string, // 173/4631 (3.74%)
				id?: string, // 4629/4631 (99.96%)
				isGif?: boolean, // 173/4631 (3.74%)
				m?: "image/png"|"image/jpg"|"image/gif", // 4456/4631 (96.22%)
				s?: {
					u: string,
					x: number,
					y: number,
				}, // 4456/4631 (96.22%)
				status: "valid"|"failed",
				x?: number, // 173/4631 (3.74%)
				y?: number, // 173/4631 (3.74%)
			},
		}|null, // 2521/619856 (0.41%)
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
		post_hint?: "image"|"link"|"rich:video"|"hosted:video"|"self"|"video", // 473202/619856 (76.34%)
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
					}, // 72247/473202 (15.27%)
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
					}, // 63231/473202 (13.36%)
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
					}, // 144246/473202 (30.48%)
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
					}, // 145704/473202 (30.79%)
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
			}, // 76479/473202 (16.16%)
		}, // 473202/619856 (76.34%)
		previous_visits?: number[], // 1/619856 (0.00%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			content?: string, // 2/153077 (0.00%)
			event_id?: "129aakvppieqt"|"12agd2t5r3zs4", // 2/153077 (0.00%)
			height?: number, // 2/153077 (0.00%)
			oembed?: {
				author_name?: string, // 17558/89946 (19.52%)
				author_url?: string, // 17550/89946 (19.51%)
				cache_age?: number, // 5/89946 (0.01%)
				description?: string, // 74131/89946 (82.42%)
				height: number,
				html: string,
				mean_alpha?: number, // 36/89946 (0.04%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 89384/89946 (99.38%)
				thumbnail_url?: string, // 89927/89946 (99.98%)
				thumbnail_width?: number, // 89384/89946 (99.38%)
				title?: string, // 89873/89946 (99.92%)
				type: "video"|"rich",
				url?: string, // 9838/89946 (10.94%)
				version: "1.0",
				width: number,
			}, // 89946/153077 (58.76%)
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
			}, // 63127/153077 (41.24%)
			type?: string, // 89950/153077 (58.76%)
			width?: number, // 2/153077 (0.00%)
		},
		secure_media_embed: {
			content?: string, // 89950/619856 (14.51%)
			height?: number, // 89950/619856 (14.51%)
			media_domain_url?: string, // 89950/619856 (14.51%)
			scrolling?: boolean, // 89950/619856 (14.51%)
			width?: number, // 89950/619856 (14.51%)
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
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"controversial"|"old"|"random"|"live",
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
	}[], // 628166/16445391 (3.82%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 15978/16445391 (0.10%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 15978/16445391 (0.10%)
	embed_url?: null|string, // 15978/16445391 (0.10%)
	event_end?: number, // 163/16445391 (0.00%)
	event_is_live?: boolean, // 163/16445391 (0.00%)
	event_start?: number, // 163/16445391 (0.00%)
	events?: [], // 15978/16445391 (0.10%)
	eventsOnRender?: [], // 15978/16445391 (0.10%)
	gilded: number,
	gildings: {
		gid_1: number,
		gid_2: number,
		gid_3: number,
	},
	hidden: boolean,
	href_url?: string, // 15978/16445391 (0.10%)
	id: string,
	is_blank?: boolean, // 15978/16445391 (0.10%)
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
		a?: string, // 32467/1705240 (1.90%)
		e: "text"|"emoji",
		t?: string, // 1672773/1705240 (98.10%)
		u?: string, // 32467/1705240 (1.90%)
	}[],
	link_flair_template_id: null|string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 36/1546170 (0.00%)
		oembed?: {
			author_name?: string, // 882784/1303202 (67.74%)
			author_url?: string, // 882303/1303202 (67.70%)
			cache_age?: number, // 357/1303202 (0.03%)
			description?: string, // 618520/1303202 (47.46%)
			height: number,
			html: string,
			marginheight?: number, // 1/1303202 (0.00%)
			marginwidth?: number, // 1/1303202 (0.00%)
			mean_alpha?: number, // 3420/1303202 (0.26%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1300799/1303202 (99.82%)
			thumbnail_url?: string, // 1303133/1303202 (99.99%)
			thumbnail_width?: number, // 1300799/1303202 (99.82%)
			title?: string, // 1301750/1303202 (99.89%)
			type: "video"|"rich",
			url?: string, // 372700/1303202 (28.60%)
			version?: "1.0", // 1303201/1303202 (100.00%)
			width: number,
		}, // 1303202/1546170 (84.29%)
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
		}, // 242932/1546170 (15.71%)
		type?: string, // 1303238/1546170 (84.29%)
	},
	media_embed: {
		content?: string, // 1303238/16445391 (7.92%)
		height?: number, // 1303238/16445391 (7.92%)
		scrolling?: boolean, // 1303238/16445391 (7.92%)
		width?: number, // 1303238/16445391 (7.92%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 5275/174235 (3.03%)
			e?: "Image"|"RedditVideo", // 174093/174235 (99.92%)
			hlsUrl?: string, // 5275/174235 (3.03%)
			id?: string, // 174093/174235 (99.92%)
			isGif?: boolean, // 5275/174235 (3.03%)
			m?: "image/jpg"|"image/png"|"image/gif", // 168818/174235 (96.89%)
			s?: {
				u: string,
				x: number,
				y: number,
			}, // 168818/174235 (96.89%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 5275/174235 (3.03%)
			y?: number, // 5275/174235 (3.03%)
		},
	}|null, // 181327/16445391 (1.10%)
	media_only: boolean,
	mobile_ad_url?: string, // 15978/16445391 (0.10%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 15978/16445391 (0.10%)
	outbound_link?: {
	}, // 15978/16445391 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 6553496/16445391 (39.85%)
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
				}, // 199759/6553496 (3.05%)
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
				}, // 199759/6553496 (3.05%)
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
				}, // 796692/6553496 (12.16%)
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
				}, // 825249/6553496 (12.59%)
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
		}, // 172747/6553496 (2.64%)
	}, // 6553496/16445391 (39.85%)
	priority_id?: null, // 15978/16445391 (0.10%)
	promoted?: boolean, // 15978/16445391 (0.10%)
	promoted_by?: null, // 15978/16445391 (0.10%)
	promoted_display_name?: null, // 15978/16445391 (0.10%)
	promoted_url?: null, // 15978/16445391 (0.10%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 36/1546170 (0.00%)
		oembed?: {
			author_name?: string, // 882784/1303202 (67.74%)
			author_url?: string, // 882303/1303202 (67.70%)
			cache_age?: number, // 357/1303202 (0.03%)
			description?: string, // 618520/1303202 (47.46%)
			height: number,
			html: string,
			marginheight?: number, // 1/1303202 (0.00%)
			marginwidth?: number, // 1/1303202 (0.00%)
			mean_alpha?: number, // 3420/1303202 (0.26%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1300799/1303202 (99.82%)
			thumbnail_url?: string, // 1303133/1303202 (99.99%)
			thumbnail_width?: number, // 1300799/1303202 (99.82%)
			title?: string, // 1301750/1303202 (99.89%)
			type: "video"|"rich",
			url?: string, // 372700/1303202 (28.60%)
			version?: "1.0", // 1303201/1303202 (100.00%)
			width: number,
		}, // 1303202/1546170 (84.29%)
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
		}, // 242932/1546170 (15.71%)
		type?: string, // 1303238/1546170 (84.29%)
	},
	secure_media_embed: {
		content?: string, // 1303238/16445391 (7.92%)
		height?: number, // 1303238/16445391 (7.92%)
		media_domain_url?: string, // 1303238/16445391 (7.92%)
		scrolling?: boolean, // 1303238/16445391 (7.92%)
		width?: number, // 1303238/16445391 (7.92%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 15978/16445391 (0.10%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[]|null, // 15978/16445391 (0.10%)
	third_party_tracking?: null, // 15978/16445391 (0.10%)
	third_party_tracking_2?: null, // 15978/16445391 (0.10%)
	thumbnail: string,
	thumbnail_height: number|null,
	thumbnail_width: number|null,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"house_only"|"no_ads"|"promo_all"|null,
	wls: number|null,
}