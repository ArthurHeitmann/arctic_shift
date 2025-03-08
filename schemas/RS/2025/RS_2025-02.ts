interface RedditPost {
	_meta?: {
		edited_title?: string, // 44223/34963978 (0.13%)
		is_edited?: boolean, // 1411361/34963978 (4.04%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 7235695/34963978 (20.69%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 6502315/34963978 (18.60%)
		was_initially_deleted?: boolean, // 733380/34963978 (2.10%)
	}, // 34963978/36173238 (96.66%)
	ad_business?: null, // 156843/36173238 (0.43%)
	ad_promoted_user_posts?: null, // 156843/36173238 (0.43%)
	ad_supplementary_text_md?: null|string, // 156843/36173238 (0.43%)
	ad_user_targeting?: null, // 156843/36173238 (0.43%)
	adserver_click_url?: null, // 156843/36173238 (0.43%)
	adserver_imp_pixel?: null, // 156843/36173238 (0.43%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 156843/36173238 (0.43%)
	approved?: boolean, // 1/36173238 (0.00%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 97405/36173238 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 974892/2620907 (37.20%)
		e: "text"|"emoji",
		t?: string, // 1646015/2620907 (62.80%)
		u?: string, // 974892/2620907 (37.20%)
	}[], // 35814136/36173238 (99.01%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 35814136/36173238 (99.01%)
	author_fullname?: string, // 35814132/36173238 (99.01%)
	author_id?: string|null, // 156843/36173238 (0.43%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 35814136/36173238 (99.01%)
	author_premium?: boolean, // 35814136/36173238 (99.01%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 126414/36173238 (0.35%)
	campaign_id?: null, // 156843/36173238 (0.43%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"comics"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 1331719/36173238 (3.68%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 4019/1331496 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 45695/119601 (38.21%)
			e: "text"|"emoji",
			t?: string, // 73906/119601 (61.79%)
			u?: string, // 45695/119601 (38.21%)
		}[], // 1321180/1331496 (99.23%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 1321180/1331496 (99.23%)
		author_fullname?: string, // 1321180/1331496 (99.23%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 1321180/1331496 (99.23%)
		author_premium?: boolean, // 1321180/1331496 (99.23%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"comics"|"gaming"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 489536/1519658 (32.21%)
				id: number,
				media_id: string,
				outbound_url?: string, // 15280/1519658 (1.01%)
			}[],
		}|null, // 239215/1331496 (17.97%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 239215/1331496 (17.97%)
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
			a?: string, // 35833/245159 (14.62%)
			e: "text"|"emoji",
			t?: string, // 209326/245159 (85.38%)
			u?: string, // 35833/245159 (14.62%)
		}[],
		link_flair_template_id?: string, // 532038/1331496 (39.96%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 17312/265065 (6.53%)
				author_url?: string, // 17251/265065 (6.51%)
				cache_age?: number, // 289/265065 (0.11%)
				description?: string, // 2601/265065 (0.98%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 45/265065 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 255737/265065 (96.48%)
				thumbnail_url?: string, // 264890/265065 (99.93%)
				thumbnail_width?: number, // 255737/265065 (96.48%)
				title?: string, // 264960/265065 (99.96%)
				type: "video"|"rich",
				url?: string, // 1300/265065 (0.49%)
				version: "1.0",
				width: number,
			}, // 265065/400253 (66.22%)
			reddit_video?: {
				bitrate_kbps?: number, // 135018/135188 (99.87%)
				dash_url?: string, // 135175/135188 (99.99%)
				duration?: number, // 135175/135188 (99.99%)
				fallback_url?: string, // 135175/135188 (99.99%)
				has_audio?: boolean, // 134038/135188 (99.15%)
				height: number|null,
				hls_url?: string, // 135175/135188 (99.99%)
				is_gif?: boolean, // 135175/135188 (99.99%)
				scrubber_media_url?: string, // 135175/135188 (99.99%)
				transcoding_message?: string, // 13/135188 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 135188/400253 (33.78%)
			type?: string, // 265065/400253 (66.22%)
		},
		media_embed: {
			content?: string, // 265065/1331496 (19.91%)
			height?: number, // 265065/1331496 (19.91%)
			scrolling?: boolean, // 265065/1331496 (19.91%)
			width?: number, // 265065/1331496 (19.91%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 969/1553315 (0.06%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 1552620/1553315 (99.96%)
				hlsUrl?: string, // 969/1553315 (0.06%)
				id?: string, // 1552620/1553315 (99.96%)
				isGif?: boolean, // 969/1553315 (0.06%)
				m?: "image/jpg"|"image/png"|"image/gif", // 1551651/1553315 (99.89%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 1074501/1553315 (69.17%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 1551651/1553315 (99.89%)
				s?: {
					gif?: string, // 79303/1551651 (5.11%)
					mp4?: string, // 79303/1551651 (5.11%)
					u?: string, // 1472348/1551651 (94.89%)
					x: number,
					y: number,
				}, // 1551651/1553315 (99.89%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 969/1553315 (0.06%)
				y?: number, // 969/1553315 (0.06%)
			},
		}|null, // 252019/1331496 (18.93%)
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
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 160/4605 (3.47%)
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
		}|null, // 1272/1331496 (0.10%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video"|"gallery", // 930696/1331496 (69.90%)
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
					}, // 39230/930696 (4.22%)
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
					}, // 39230/930696 (4.22%)
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
					}, // 513107/930696 (55.13%)
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
					}, // 515624/930696 (55.40%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 251783/251805 (99.99%)
				dash_url: string,
				duration: number,
				fallback_url: string,
				height: number,
				hls_url: string,
				is_gif: boolean,
				scrubber_media_url: string,
				transcoding_status: "completed",
				width: number,
			}, // 251805/930696 (27.06%)
		}, // 930696/1331496 (69.90%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"automod_filtered"|"copyright_takedown"|"content_takedown"|"author",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 17312/265065 (6.53%)
				author_url?: string, // 17251/265065 (6.51%)
				cache_age?: number, // 289/265065 (0.11%)
				description?: string, // 2601/265065 (0.98%)
				height: number|null,
				html: string,
				mean_alpha?: number, // 45/265065 (0.02%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 255737/265065 (96.48%)
				thumbnail_url?: string, // 264890/265065 (99.93%)
				thumbnail_width?: number, // 255737/265065 (96.48%)
				title?: string, // 264960/265065 (99.96%)
				type: "video"|"rich",
				url?: string, // 1300/265065 (0.49%)
				version: "1.0",
				width: number,
			}, // 265065/400253 (66.22%)
			reddit_video?: {
				bitrate_kbps?: number, // 135018/135188 (99.87%)
				dash_url?: string, // 135175/135188 (99.99%)
				duration?: number, // 135175/135188 (99.99%)
				fallback_url?: string, // 135175/135188 (99.99%)
				has_audio?: boolean, // 134038/135188 (99.15%)
				height: number|null,
				hls_url?: string, // 135175/135188 (99.99%)
				is_gif?: boolean, // 135175/135188 (99.99%)
				scrubber_media_url?: string, // 135175/135188 (99.99%)
				transcoding_message?: string, // 13/135188 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 135188/400253 (33.78%)
			type?: string, // 265065/400253 (66.22%)
		},
		secure_media_embed: {
			content?: string, // 265065/1331496 (19.91%)
			height?: number, // 265065/1331496 (19.91%)
			media_domain_url?: string, // 265065/1331496 (19.91%)
			scrolling?: boolean, // 265065/1331496 (19.91%)
			width?: number, // 265065/1331496 (19.91%)
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
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"live"|"controversial"|"random",
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
		url_overridden_by_dest?: string, // 1154821/1331496 (86.73%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		wls: null|number,
	}[], // 1331719/36173238 (3.68%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 156843/36173238 (0.43%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 156843/36173238 (0.43%)
	embed_url?: null|"https://www.reddit.com", // 156843/36173238 (0.43%)
	events?: [], // 156843/36173238 (0.43%)
	eventsOnRender?: [], // 156843/36173238 (0.43%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 49998/15480434 (0.32%)
			caption?: string, // 5290970/15480434 (34.18%)
			display_url?: string, // 56924/15480434 (0.37%)
			id: number,
			media_id: string,
			outbound_url?: string, // 82875/15480434 (0.54%)
			product?: {
				description: string,
				price?: string, // 6541/6543 (99.97%)
				title: string,
			}, // 6543/15480434 (0.04%)
		}[],
	}|null, // 4196455/36173238 (11.60%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 156843/36173238 (0.43%)
	id: string,
	ignore_reports?: boolean, // 1/36173238 (0.00%)
	impression_id?: null, // 156843/36173238 (0.43%)
	impression_id_str?: null, // 156843/36173238 (0.43%)
	is_blank?: boolean, // 156843/36173238 (0.43%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 4196455/36173238 (11.60%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 156843/36173238 (0.43%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1098544/8602189 (12.77%)
		e: "text"|"emoji",
		t?: string, // 7503645/8602189 (87.23%)
		u?: string, // 1098544/8602189 (12.77%)
	}[],
	link_flair_template_id?: string, // 16494678/36173238 (45.60%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1eghw017em4fs"|"1ehvmyywoskvn"|"1eiiqm1yen1eb"|"1ej9pi0zkftqo"|"1ek317796cevr"|"1ekodx5arfval", // 41/3400954 (0.00%)
		oembed?: {
			author_name?: string, // 624911/2307470 (27.08%)
			author_url?: string, // 624336/2307470 (27.06%)
			cache_age?: number, // 19919/2307470 (0.86%)
			description?: string, // 87676/2307470 (3.80%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2445/2307470 (0.11%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2267595/2307470 (98.27%)
			thumbnail_url?: string, // 2290079/2307470 (99.25%)
			thumbnail_width?: number, // 2267595/2307470 (98.27%)
			title?: string, // 2289689/2307470 (99.23%)
			type: "video"|"rich",
			url?: string, // 47018/2307470 (2.04%)
			version: "1.0",
			width: number,
		}, // 2307470/3400954 (67.85%)
		reddit_video?: {
			bitrate_kbps?: number, // 1089407/1093443 (99.63%)
			dash_url?: string, // 1089407/1093443 (99.63%)
			duration?: number, // 1089407/1093443 (99.63%)
			fallback_url?: string, // 1089407/1093443 (99.63%)
			has_audio?: boolean, // 1089390/1093443 (99.63%)
			height: number|null,
			hls_url?: string, // 1089407/1093443 (99.63%)
			is_gif?: boolean, // 1089407/1093443 (99.63%)
			scrubber_media_url?: string, // 1089407/1093443 (99.63%)
			transcoding_message?: string, // 4036/1093443 (0.37%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1093443/3400954 (32.15%)
		type?: string, // 2307511/3400954 (67.85%)
	},
	media_embed: {
		content?: string, // 2283841/36173238 (6.31%)
		height?: number, // 2283841/36173238 (6.31%)
		scrolling?: boolean, // 2283841/36173238 (6.31%)
		width?: number, // 2283841/36173238 (6.31%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 18050/16078516 (0.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 15999655/16078516 (99.51%)
			hlsUrl?: string, // 18050/16078516 (0.11%)
			id?: string, // 15999655/16078516 (99.51%)
			isGif?: boolean, // 18050/16078516 (0.11%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 15981605/16078516 (99.40%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 7114309/16078516 (44.25%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 15981605/16078516 (99.40%)
			s?: {
				gif?: string, // 302826/15981605 (1.89%)
				mp4?: string, // 302826/15981605 (1.89%)
				u?: string, // 15678779/15981605 (98.11%)
				x: number,
				y: number,
			}, // 15981605/16078516 (99.40%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 18050/16078516 (0.11%)
			y?: number, // 18050/16078516 (0.11%)
		},
	}|null, // 4669619/36173238 (12.91%)
	media_only: boolean,
	mobile_ad_url?: string, // 156843/36173238 (0.43%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 156843/36173238 (0.43%)
	outbound_link?: {
	}, // 156843/36173238 (0.43%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: {
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 15683/203259 (7.72%)
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
	}|null, // 67475/36173238 (0.19%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"gallery"|"video", // 16964061/36173238 (46.90%)
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
				}, // 451826/17037909 (2.65%)
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
				}, // 451826/17037909 (2.65%)
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
				}, // 7962702/17037909 (46.74%)
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
				}, // 8047740/17037909 (47.23%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 1510167/1510189 (100.00%)
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 1510189/17037909 (8.86%)
	}, // 17037909/36173238 (47.10%)
	priority_id?: null, // 156843/36173238 (0.43%)
	product_ids?: [], // 156843/36173238 (0.43%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 156843/36173238 (0.43%)
	promoted?: boolean, // 156843/36173238 (0.43%)
	promoted_by?: null, // 156843/36173238 (0.43%)
	promoted_display_name?: null, // 156843/36173238 (0.43%)
	promoted_url?: null, // 156843/36173238 (0.43%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed?: boolean, // 1/36173238 (0.00%)
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"author"|"content_takedown"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1eghw017em4fs"|"1ehvmyywoskvn"|"1eiiqm1yen1eb"|"1ej9pi0zkftqo"|"1ek317796cevr"|"1ekodx5arfval", // 41/3400954 (0.00%)
		oembed?: {
			author_name?: string, // 624911/2307470 (27.08%)
			author_url?: string, // 624336/2307470 (27.06%)
			cache_age?: number, // 19919/2307470 (0.86%)
			description?: string, // 87676/2307470 (3.80%)
			height: number|null,
			html: string,
			mean_alpha?: number, // 2445/2307470 (0.11%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2267595/2307470 (98.27%)
			thumbnail_url?: string, // 2290079/2307470 (99.25%)
			thumbnail_width?: number, // 2267595/2307470 (98.27%)
			title?: string, // 2289689/2307470 (99.23%)
			type: "video"|"rich",
			url?: string, // 47018/2307470 (2.04%)
			version: "1.0",
			width: number,
		}, // 2307470/3400954 (67.85%)
		reddit_video?: {
			bitrate_kbps?: number, // 1089407/1093443 (99.63%)
			dash_url?: string, // 1089407/1093443 (99.63%)
			duration?: number, // 1089407/1093443 (99.63%)
			fallback_url?: string, // 1089407/1093443 (99.63%)
			has_audio?: boolean, // 1089390/1093443 (99.63%)
			height: number|null,
			hls_url?: string, // 1089407/1093443 (99.63%)
			is_gif?: boolean, // 1089407/1093443 (99.63%)
			scrubber_media_url?: string, // 1089407/1093443 (99.63%)
			transcoding_message?: string, // 4036/1093443 (0.37%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1093443/3400954 (32.15%)
		type?: string, // 2307511/3400954 (67.85%)
	},
	secure_media_embed: {
		content?: string, // 2283841/36173238 (6.31%)
		height?: number, // 2283841/36173238 (6.31%)
		media_domain_url?: string, // 2283841/36173238 (6.31%)
		scrolling?: boolean, // 2283841/36173238 (6.31%)
		width?: number, // 2283841/36173238 (6.31%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 156843/36173238 (0.43%)
	sk_ad_network_data?: null, // 156843/36173238 (0.43%)
	spam?: boolean, // 1/36173238 (0.00%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 3092/36173238 (0.01%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"confidence"|"new"|"qa"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 156843/36173238 (0.43%)
	third_party_tracking?: null, // 156843/36173238 (0.43%)
	third_party_tracking_2?: null, // 156843/36173238 (0.43%)
	thumbnail: string,
	thumbnail_height?: number|null, // 36172336/36173238 (100.00%)
	thumbnail_width?: number|null, // 36172336/36173238 (100.00%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 21429338/36173238 (59.24%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	wls: null|number,
}