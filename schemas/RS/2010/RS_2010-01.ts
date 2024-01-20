interface RedditPost {
	adserver_click_url?: null, // 251/549007 (0.05%)
	adserver_imp_pixel?: null, // 251/549007 (0.05%)
	approved?: boolean, // 6126/549007 (1.12%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 626/549007 (0.11%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 436496/549007 (79.51%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 436496/549007 (79.51%)
	author_id?: string|null, // 251/549007 (0.05%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 251/549007 (0.05%)
	edited: boolean|number,
	embed_type?: null, // 251/549007 (0.05%)
	embed_url?: null, // 251/549007 (0.05%)
	events?: [], // 251/549007 (0.05%)
	eventsOnRender?: [], // 251/549007 (0.05%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 251/549007 (0.05%)
	id: string,
	ignore_reports?: boolean, // 6126/549007 (1.12%)
	is_blank?: boolean, // 251/549007 (0.05%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 8/549007 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "4e637a5a-13a9-11e8-8663-0ea878bfb0c6"|"85f81fd4-87ee-11e3-a1b2-12313d18400c", // 2/549007 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 56/57 (98.25%)
			author_url?: string, // 56/57 (98.25%)
			cache_age?: number, // 1/57 (1.75%)
			description?: string, // 4/57 (7.02%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"TED",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://youtube.com"|"http://ted.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/57 (1.75%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"ted.com",
	},
	media_embed: {
		content?: string, // 57/549007 (0.01%)
		height?: number, // 57/549007 (0.01%)
		media_domain_url?: string, // 57/549007 (0.01%)
		scrolling?: boolean, // 57/549007 (0.01%)
		width?: number, // 57/549007 (0.01%)
	},
	mobile_ad_url?: "", // 251/549007 (0.05%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 251/549007 (0.05%)
	outbound_link?: {
	}, // 251/549007 (0.05%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 526/549007 (0.10%)
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
				}, // 8/526 (1.52%)
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
				}, // 8/526 (1.52%)
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
				}, // 36/526 (6.84%)
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
				}, // 36/526 (6.84%)
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
		}, // 4/526 (0.76%)
	}, // 526/549007 (0.10%)
	priority_id?: null, // 251/549007 (0.05%)
	promoted?: boolean, // 251/549007 (0.05%)
	promoted_by?: null, // 251/549007 (0.05%)
	promoted_display_name?: null, // 251/549007 (0.05%)
	promoted_url?: null, // 251/549007 (0.05%)
	removed?: boolean, // 6126/549007 (1.12%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 56/57 (98.25%)
			author_url?: string, // 56/57 (98.25%)
			cache_age?: number, // 1/57 (1.75%)
			description?: string, // 4/57 (7.02%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"TED",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://youtube.com"|"http://ted.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/57 (1.75%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"ted.com",
	},
	secure_media_embed: {
		content?: string, // 57/549007 (0.01%)
		height?: number, // 57/549007 (0.01%)
		media_domain_url?: string, // 57/549007 (0.01%)
		scrolling?: boolean, // 57/549007 (0.01%)
		width?: number, // 57/549007 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 6126/549007 (1.12%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"old",
	third_party_trackers?: [], // 251/549007 (0.05%)
	third_party_tracking?: null, // 251/549007 (0.05%)
	third_party_tracking_2?: null, // 251/549007 (0.05%)
	thumbnail: string,
	thumbnail_height?: null|number, // 457578/549007 (83.35%)
	thumbnail_width?: null|number, // 457578/549007 (83.35%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}