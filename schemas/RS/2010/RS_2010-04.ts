interface RedditPost {
	adserver_click_url?: null, // 634/617302 (0.10%)
	adserver_imp_pixel?: null, // 634/617302 (0.10%)
	approved?: boolean, // 5466/617302 (0.89%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 9590/617302 (1.55%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 2/7324 (0.03%)
		e: "text"|"emoji",
		t?: string, // 7322/7324 (99.97%)
		u?: string, // 2/7324 (0.03%)
	}[], // 496111/617302 (80.37%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 496111/617302 (80.37%)
	author_id?: string|null, // 634/617302 (0.10%)
	ban_note?: null, // 1/617302 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 634/617302 (0.10%)
	edited: boolean|number,
	embed_type?: null, // 634/617302 (0.10%)
	embed_url?: null, // 634/617302 (0.10%)
	events?: [], // 634/617302 (0.10%)
	eventsOnRender?: [], // 634/617302 (0.10%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 634/617302 (0.10%)
	id: string,
	ignore_reports?: boolean, // 5466/617302 (0.89%)
	is_blank?: boolean, // 634/617302 (0.10%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 28/617302 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 285/293 (97.27%)
			author_url?: string, // 285/293 (97.27%)
			cache_age?: number, // 1/293 (0.34%)
			description?: string, // 21/293 (7.17%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"Imgur"|"Funny Or Die"|"Scribd"|"Spotify"|"VEVO",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://imgur.com"|"http://www.funnyordie.com"|"https://www.scribd.com/"|"http://youtube.com"|"https://www.spotify.com"|"http://www.vevo.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"imgur.com"|"funnyordie.com"|"scribd.com"|"open.spotify.com"|"vevo.com",
	},
	media_embed: {
		content?: string, // 293/617302 (0.05%)
		height?: number, // 293/617302 (0.05%)
		media_domain_url?: string, // 293/617302 (0.05%)
		scrolling?: boolean, // 293/617302 (0.05%)
		width?: number, // 293/617302 (0.05%)
	},
	mobile_ad_url?: "", // 634/617302 (0.10%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 634/617302 (0.10%)
	outbound_link?: {
	}, // 634/617302 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 2208/617302 (0.36%)
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
				}, // 28/2208 (1.27%)
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
				}, // 28/2208 (1.27%)
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
				}, // 59/2208 (2.67%)
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
				}, // 59/2208 (2.67%)
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
		}, // 16/2208 (0.72%)
	}, // 2208/617302 (0.36%)
	priority_id?: null, // 634/617302 (0.10%)
	promoted?: boolean, // 634/617302 (0.10%)
	promoted_by?: null, // 634/617302 (0.10%)
	promoted_display_name?: null, // 634/617302 (0.10%)
	promoted_url?: null, // 634/617302 (0.10%)
	removed?: boolean, // 5466/617302 (0.89%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 285/293 (97.27%)
			author_url?: string, // 285/293 (97.27%)
			cache_age?: number, // 1/293 (0.34%)
			description?: string, // 21/293 (7.17%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"Imgur"|"Funny Or Die"|"Scribd"|"Spotify"|"VEVO",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://imgur.com"|"http://www.funnyordie.com"|"https://www.scribd.com/"|"http://youtube.com"|"https://www.spotify.com"|"http://www.vevo.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"imgur.com"|"funnyordie.com"|"scribd.com"|"open.spotify.com"|"vevo.com",
	},
	secure_media_embed: {
		content?: string, // 293/617302 (0.05%)
		height?: number, // 293/617302 (0.05%)
		media_domain_url?: string, // 293/617302 (0.05%)
		scrolling?: boolean, // 293/617302 (0.05%)
		width?: number, // 293/617302 (0.05%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5466/617302 (0.89%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old",
	third_party_trackers?: [], // 634/617302 (0.10%)
	third_party_tracking?: null, // 634/617302 (0.10%)
	third_party_tracking_2?: null, // 634/617302 (0.10%)
	thumbnail: string,
	thumbnail_height?: null|number, // 496610/617302 (80.45%)
	thumbnail_width?: null|number, // 496610/617302 (80.45%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}