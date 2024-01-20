interface RedditPost {
	adserver_click_url?: null, // 26498/18310157 (0.14%)
	adserver_imp_pixel?: null, // 26498/18310157 (0.14%)
	all_awardings?: {
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
		subreddit_id: null|"t5_2rjz2"|"t5_2qo4s"|"t5_3hx3r",
	}[], // 17963428/18310157 (98.11%)
	archived?: boolean, // 17899770/18310157 (97.76%)
	author: string,
	author_cakeday?: boolean, // 58271/18310157 (0.32%)
	author_created_utc?: number|null, // 18310125/18310157 (100.00%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 331611/1173771 (28.25%)
		e: "text"|"emoji",
		t?: string, // 842160/1173771 (71.75%)
		u?: string, // 331611/1173771 (28.25%)
	}[], // 14704180/18310157 (80.31%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 14704180/18310157 (80.31%)
	author_fullname?: string|null, // 18310125/18310157 (100.00%)
	author_id?: string|null, // 26498/18310157 (0.14%)
	author_patreon_flair?: boolean, // 14704180/18310157 (80.31%)
	call_to_action?: "Install"|"Learn More"|"Sign Up"|"Shop Now"|"Play Now"|"Download"|"View More"|"Watch Now"|"Apply Now"|"Get a Quote"|"Contact Us"|"Get Showtimes"|"See Menu"|""|null, // 23083/18310157 (0.13%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"drawing_and_painting"|"gaming"|"videos"|"photography"|"entertainment"|"writing"|"diy_and_crafts"|"animals"|"music"|"memes"|"food"|"funny",
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
	}[], // 2078/18310157 (0.01%)
	content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"diy_and_crafts"|"videos"|"music"|"writing"|"comics")[],
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string, // 702842/18310157 (3.84%)
	crosspost_parent_list?: {
		all_awardings?: {
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
			name: "Silver"|"Gold"|"Platinum"|"Crown"|"Greenseer"|"Lemon Cake"|"Hand of the Queen"|"Iron Coin"|"A Perfect Murder"|"Crying MJ"|"Tinfoil"|"Perfect Murder"|"Most Valuable"|"Historic Highlight"|"Quality OC",
			resized_icons: {
				height: number,
				url: string,
				width: number,
			}[],
			subreddit_id: null|"t5_2rjz2"|"t5_2qo4s"|"t5_3hx3r",
		}[], // 682448/696585 (97.97%)
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 1822/696585 (0.26%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 14093/48442 (29.09%)
			e: "text"|"emoji",
			t?: string, // 34349/48442 (70.91%)
			u?: string, // 14093/48442 (29.09%)
		}[], // 628364/696585 (90.21%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 628364/696585 (90.21%)
		author_fullname?: string, // 628364/696585 (90.21%)
		author_patreon_flair?: boolean, // 628364/696585 (90.21%)
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"drawing_and_painting"|"photography"|"gaming"|"animals"|"entertainment"|"diy_and_crafts"|"memes"|"videos"|"music"|"food"|"funny"|"art",
		clicked: boolean,
		collections?: {
			author_id: string,
			author_name: string,
			collection_id: string,
			created_at_utc: number,
			description: string,
			display_layout: null|"GALLERY",
			last_update_utc: number,
			link_ids: string[],
			permalink: string,
			subreddit_id: string,
			title: string,
		}[], // 149/696585 (0.02%)
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"entertainment"|"comics"|"diy_and_crafts"|"videos"|"writing"|"music")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		event_end?: number, // 67/696585 (0.01%)
		event_is_live?: boolean, // 76/696585 (0.01%)
		event_start?: number, // 76/696585 (0.01%)
		gilded: number,
		gildings: {
			gid_1?: number, // 78880/696585 (11.32%)
			gid_2?: number, // 59919/696585 (8.60%)
			gid_3?: number, // 25423/696585 (3.65%)
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
			a?: string, // 1818/61216 (2.97%)
			e: "text"|"emoji",
			t?: string, // 59398/61216 (97.03%)
			u?: string, // 1818/61216 (2.97%)
		}[],
		link_flair_template_id?: string, // 117006/696585 (16.80%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light",
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			event_id?: "12s2oqta0wy8x"|"12ttjxuozdq7p"|"12va428vk0ssg"|"12vdsthc0q3rm", // 5/176064 (0.00%)
			oembed?: {
				author_name?: string, // 19282/113407 (17.00%)
				author_url?: string, // 19253/113407 (16.98%)
				cache_age?: number, // 11/113407 (0.01%)
				description?: string, // 96184/113407 (84.81%)
				height: number,
				html: string,
				mean_alpha?: number, // 37/113407 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 112882/113407 (99.54%)
				thumbnail_url?: string, // 113294/113407 (99.90%)
				thumbnail_width?: number, // 112882/113407 (99.54%)
				title?: string, // 113248/113407 (99.86%)
				type: "video"|"rich",
				url?: string, // 7526/113407 (6.64%)
				version: "1.0",
				width: number,
			}, // 113407/176064 (64.41%)
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
			}, // 62652/176064 (35.58%)
			type?: string, // 113412/176064 (64.42%)
		},
		media_embed: {
			content?: string, // 113412/696585 (16.28%)
			height?: number, // 113412/696585 (16.28%)
			scrolling?: boolean, // 113412/696585 (16.28%)
			width?: number, // 113412/696585 (16.28%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 145/7859 (1.85%)
				e?: "Image"|"RedditVideo"|"AnimatedImage", // 7851/7859 (99.90%)
				hlsUrl?: string, // 145/7859 (1.85%)
				id?: string, // 7851/7859 (99.90%)
				isGif?: boolean, // 145/7859 (1.85%)
				m?: "image/jpg"|"image/png"|"image/gif", // 7706/7859 (98.05%)
				s?: {
					gif?: string, // 144/7706 (1.87%)
					mp4?: string, // 144/7706 (1.87%)
					u?: string, // 7562/7706 (98.13%)
					x: number,
					y: number,
				}, // 7706/7859 (98.05%)
				status: "valid"|"failed",
				x?: number, // 145/7859 (1.85%)
				y?: number, // 145/7859 (1.85%)
			},
		}|null, // 4270/696585 (0.61%)
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
		post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 526886/696585 (75.64%)
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
					}, // 102730/526886 (19.50%)
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
					}, // 102730/526886 (19.50%)
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
					}, // 180592/526886 (34.28%)
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
					}, // 183045/526886 (34.74%)
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
			}, // 93249/526886 (17.70%)
		}, // 526886/696585 (75.64%)
		pwls: number|null,
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "12s2oqta0wy8x"|"12ttjxuozdq7p"|"12va428vk0ssg"|"12vdsthc0q3rm", // 5/176064 (0.00%)
			oembed?: {
				author_name?: string, // 19282/113407 (17.00%)
				author_url?: string, // 19253/113407 (16.98%)
				cache_age?: number, // 11/113407 (0.01%)
				description?: string, // 96184/113407 (84.81%)
				height: number,
				html: string,
				mean_alpha?: number, // 37/113407 (0.03%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 112882/113407 (99.54%)
				thumbnail_url?: string, // 113294/113407 (99.90%)
				thumbnail_width?: number, // 112882/113407 (99.54%)
				title?: string, // 113248/113407 (99.86%)
				type: "video"|"rich",
				url?: string, // 7526/113407 (6.64%)
				version: "1.0",
				width: number,
			}, // 113407/176064 (64.41%)
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
			}, // 62652/176064 (35.58%)
			type?: string, // 113412/176064 (64.42%)
		},
		secure_media_embed: {
			content?: string, // 113412/696585 (16.28%)
			height?: number, // 113412/696585 (16.28%)
			media_domain_url?: string, // 113412/696585 (16.28%)
			scrolling?: boolean, // 113412/696585 (16.28%)
			width?: number, // 113412/696585 (16.28%)
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
		subreddit_type: "public"|"archived"|"user"|"restricted",
		suggested_sort: null|"confidence"|"top"|"qa"|"new"|"old"|"controversial"|"random"|"live",
		thumbnail: string,
		thumbnail_height?: number|null, // 696581/696585 (100.00%)
		thumbnail_width?: number|null, // 696581/696585 (100.00%)
		title: string,
		total_awards_received?: number, // 682448/696585 (97.97%)
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
		wls: number|null,
	}[], // 702842/18310157 (3.84%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 26498/18310157 (0.14%)
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe", // 26498/18310157 (0.14%)
	embed_url?: null|string, // 26498/18310157 (0.14%)
	event_end?: number, // 587/18310157 (0.00%)
	event_is_live?: boolean, // 588/18310157 (0.00%)
	event_start?: number, // 588/18310157 (0.00%)
	events?: [], // 26498/18310157 (0.14%)
	eventsOnRender?: [], // 26498/18310157 (0.14%)
	gilded: number,
	gildings: {
		gid_1?: number, // 390181/18310157 (2.13%)
		gid_2?: number, // 373667/18310157 (2.04%)
		gid_3?: number, // 352677/18310157 (1.93%)
	},
	hidden: boolean,
	href_url?: string, // 26498/18310157 (0.14%)
	id: string,
	is_blank?: boolean, // 26498/18310157 (0.14%)
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
		a?: string, // 42741/2106854 (2.03%)
		e: "text"|"emoji",
		t?: string, // 2064113/2106854 (97.97%)
		u?: string, // 42741/2106854 (2.03%)
	}[],
	link_flair_template_id?: string, // 3138309/18310157 (17.14%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: string, // 410/1588202 (0.03%)
		oembed?: {
			author_name?: string, // 902410/1258571 (71.70%)
			author_url?: string, // 901549/1258571 (71.63%)
			cache_age?: number, // 529/1258571 (0.04%)
			description?: string, // 564903/1258571 (44.88%)
			height: number,
			html: string,
			marginheight?: number, // 1/1258571 (0.00%)
			marginwidth?: number, // 1/1258571 (0.00%)
			mean_alpha?: number, // 2088/1258571 (0.17%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1254960/1258571 (99.71%)
			thumbnail_url?: string, // 1256658/1258571 (99.85%)
			thumbnail_width?: number, // 1254960/1258571 (99.71%)
			title?: string, // 1255743/1258571 (99.78%)
			type: "video"|"rich",
			url?: string, // 295177/1258571 (23.45%)
			version?: "1.0", // 1258570/1258571 (100.00%)
			width: number,
		}, // 1258571/1588202 (79.25%)
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
		}, // 329221/1588202 (20.73%)
		type?: string, // 1258981/1588202 (79.27%)
	},
	media_embed: {
		content?: string, // 1258981/18310157 (6.88%)
		height?: number, // 1258981/18310157 (6.88%)
		scrolling?: boolean, // 1258981/18310157 (6.88%)
		width?: number, // 1258981/18310157 (6.88%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 5806/218448 (2.66%)
			e?: "Image"|"RedditVideo"|"AnimatedImage", // 218282/218448 (99.92%)
			hlsUrl?: string, // 5806/218448 (2.66%)
			id?: string, // 218282/218448 (99.92%)
			isGif?: boolean, // 5806/218448 (2.66%)
			m?: "image/jpg"|"image/png"|"image/gif", // 212476/218448 (97.27%)
			s?: {
				gif?: string, // 2038/212476 (0.96%)
				mp4?: string, // 2038/212476 (0.96%)
				u?: string, // 210438/212476 (99.04%)
				x: number,
				y: number,
			}, // 212476/218448 (97.27%)
			status: "valid"|"failed"|"unprocessed",
			x?: number, // 5806/218448 (2.66%)
			y?: number, // 5806/218448 (2.66%)
		},
	}|null, // 215302/18310157 (1.18%)
	media_only: boolean,
	mobile_ad_url?: string, // 26498/18310157 (0.14%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 26498/18310157 (0.14%)
	outbound_link?: {
	}, // 26498/18310157 (0.14%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned: boolean,
	post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video", // 7573428/18310157 (41.36%)
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
				}, // 292486/7573428 (3.86%)
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
				}, // 292486/7573428 (3.86%)
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
				}, // 940321/7573428 (12.42%)
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
				}, // 981645/7573428 (12.96%)
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
		}, // 211517/7573428 (2.79%)
	}, // 7573428/18310157 (41.36%)
	priority_id?: null, // 26498/18310157 (0.14%)
	promoted?: boolean, // 26498/18310157 (0.14%)
	promoted_by?: null, // 26498/18310157 (0.14%)
	promoted_display_name?: null, // 26498/18310157 (0.14%)
	promoted_url?: null, // 26498/18310157 (0.14%)
	pwls: number|null,
	quarantine: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 410/1588202 (0.03%)
		oembed?: {
			author_name?: string, // 902410/1258571 (71.70%)
			author_url?: string, // 901549/1258571 (71.63%)
			cache_age?: number, // 529/1258571 (0.04%)
			description?: string, // 564903/1258571 (44.88%)
			height: number,
			html: string,
			marginheight?: number, // 1/1258571 (0.00%)
			marginwidth?: number, // 1/1258571 (0.00%)
			mean_alpha?: number, // 2088/1258571 (0.17%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 1254960/1258571 (99.71%)
			thumbnail_url?: string, // 1256658/1258571 (99.85%)
			thumbnail_width?: number, // 1254960/1258571 (99.71%)
			title?: string, // 1255743/1258571 (99.78%)
			type: "video"|"rich",
			url?: string, // 295177/1258571 (23.45%)
			version?: "1.0", // 1258570/1258571 (100.00%)
			width: number,
		}, // 1258571/1588202 (79.25%)
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
		}, // 329221/1588202 (20.73%)
		type?: string, // 1258981/1588202 (79.27%)
	},
	secure_media_embed: {
		content?: string, // 1258981/18310157 (6.88%)
		height?: number, // 1258981/18310157 (6.88%)
		media_domain_url?: string, // 1258981/18310157 (6.88%)
		scrolling?: boolean, // 1258981/18310157 (6.88%)
		width?: number, // 1258981/18310157 (6.88%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 26498/18310157 (0.14%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"archived"|"private"|"gold_restricted",
	suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: string[], // 26498/18310157 (0.14%)
	third_party_tracking?: null, // 26498/18310157 (0.14%)
	third_party_tracking_2?: null, // 26498/18310157 (0.14%)
	thumbnail: string,
	thumbnail_height?: number|null, // 18308931/18310157 (99.99%)
	thumbnail_width?: number|null, // 18308931/18310157 (99.99%)
	title: string,
	total_awards_received?: number, // 17963428/18310157 (98.11%)
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_all"|null,
	wls: number|null,
}