interface RedditPost_2017 {
	adserver_click_url?: null,
	adserver_imp_pixel?: null,
	approved_at_utc?: null,
	archived?: boolean,
	author: string,
	author_cakeday?: boolean,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	author_id?: string|null,
	banned_at_utc?: null,
	brand_safe: boolean,
	can_gild?: boolean,
	can_mod_post?: boolean,
	contest_mode: boolean,
	created_utc: number,
	crosspost_parent?: string,
	crosspost_parent_list?: {
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean,
		author_flair_css_class: null|string,
		author_flair_text: null|string,
		banned_at_utc: null,
		banned_by: null,
		brand_safe: boolean,
		can_gild: boolean,
		can_mod_post: boolean,
		clicked: boolean,
		contest_mode: boolean,
		created: number,
		created_utc: number,
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		gilded: number,
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_crosspostable: boolean,
		is_reddit_media_domain?: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_css_class: null|string,
		link_flair_text: null|string,
		locked: boolean,
		media: null|{
			event_id?: "z6u1s2kx4swc"|"zbttfot73znr",
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height: number,
				html: string,
				mean_alpha?: number,
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number,
				thumbnail_url?: string,
				thumbnail_width?: number,
				title?: string,
				type: "video"|"rich",
				url?: string,
				version: "1.0",
				width: number,
			},
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
			},
			type?: string,
		},
		media_embed: {
			content?: string,
			height?: number,
			scrolling?: boolean,
			width?: number,
		},
		mod_note?: null,
		mod_reason_by?: null,
		mod_reason_title?: null,
		mod_reports: [],
		name: string,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		over_18: boolean,
		parent_whitelist_status: "all_ads"|"promo_specified"|"no_ads"|"house_only"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|null,
		permalink: string,
		pinned?: boolean,
		post_hint?: "image"|"link"|"rich:video"|"self"|"hosted:video"|"video",
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
					},
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
					},
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
					},
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
					},
				},
			}[],
		},
		quarantine: boolean,
		removal_reason: null|"legal",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "z6u1s2kx4swc"|"zbttfot73znr",
			oembed?: {
				author_name?: string,
				author_url?: string,
				cache_age?: number,
				description?: string,
				height: number,
				html: string,
				mean_alpha?: number,
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number,
				thumbnail_url?: string,
				thumbnail_width?: number,
				title?: string,
				type: "video"|"rich",
				url?: string,
				version: "1.0",
				width: number,
			},
			type: string,
		},
		secure_media_embed: {
			content?: string,
			height?: number,
			media_domain_url?: string,
			scrolling?: boolean,
			width?: number,
		},
		selftext: string,
		selftext_html: null|string,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"confidence"|"qa"|"new"|"top"|"controversial"|"old"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null,
		thumbnail_width?: number|null,
		title: string,
		ups: number,
		url: string,
		user_reports: [],
		view_count: null,
		visited: boolean,
		whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"no_ads"|"house_only"|"promo_adult"|"promo_all"|null,
	}[],
	disable_comments?: boolean,
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	domain_override?: null|string,
	edited: boolean|number,
	embed_type?: null|"scrape"|"iframe",
	embed_url?: null|string,
	gilded: number,
	hidden: boolean,
	hide_score?: boolean,
	href_url?: string,
	id: string,
	imp_pixel?: null,
	is_crosspostable?: boolean,
	is_reddit_media_domain?: boolean,
	is_self: boolean,
	is_video?: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height: number,
			html: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number,
			thumbnail_url?: string,
			thumbnail_width?: number,
			title?: string,
			type: "video"|"rich",
			url?: string,
			version?: "1.0",
			width: number,
		},
		reddit_video?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif?: boolean,
			poster_url?: string,
			scrubber_media_url: string,
			thumbnail_url?: string,
			transcoding_status: "completed",
			width: number,
		},
		reddit_videos?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		},
		type?: string,
	},
	media_embed: {
		content?: string,
		height?: number,
		scrolling?: boolean,
		width?: number,
	},
	mobile_ad_url?: string,
	mod_note?: null,
	mod_reason_by?: null,
	mod_reason_title?: null,
	num_comments: number,
	num_crossposts?: number,
	original_link?: null|string,
	over_18: boolean,
	parent_whitelist_status?: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"promo_adult"|"house_only"|"promo_all"|null,
	permalink: string,
	pinned?: boolean,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video"|"hosted:video",
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
				},
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
				},
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
				},
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
				},
			},
		}[],
	},
	promoted?: boolean,
	promoted_by?: null,
	promoted_display_name?: null|string,
	promoted_url?: null|string,
	quarantine?: boolean,
	retrieved_on: number,
	score: number|null,
	secure_media: null|{
		event_id?: string,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height: number,
			html: string,
			marginheight?: number,
			marginwidth?: number,
			mean_alpha?: number,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number,
			thumbnail_url?: string,
			thumbnail_width?: number,
			title?: string,
			type: "video"|"rich",
			url?: string,
			version?: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string,
		height?: number,
		media_domain_url?: string,
		scrolling?: boolean,
		width?: number,
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string,
	subreddit_id: string|null,
	subreddit_type?: "public"|"restricted"|"user"|"gold_restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random"|"live",
	third_party_trackers?: null|string[],
	third_party_tracking?: null|string,
	third_party_tracking_2?: null|string,
	thumbnail: string|null,
	thumbnail_height?: number|null,
	thumbnail_width?: number|null,
	title: string,
	url: string,
	view_count?: null,
	whitelist_status?: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"promo_adult"|"house_only"|"promo_all"|null,
}
