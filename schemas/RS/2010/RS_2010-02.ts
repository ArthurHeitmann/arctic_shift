interface RedditPost {
	adserver_click_url?: null, // 179/506868 (0.04%)
	adserver_imp_pixel?: null, // 179/506868 (0.04%)
	approved?: boolean, // 6042/506868 (1.19%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 922/506868 (0.18%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 401257/506868 (79.16%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 401257/506868 (79.16%)
	author_id?: string|null, // 179/506868 (0.04%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 179/506868 (0.04%)
	edited: boolean|number,
	embed_type?: null, // 179/506868 (0.04%)
	embed_url?: null, // 179/506868 (0.04%)
	events?: [], // 179/506868 (0.04%)
	eventsOnRender?: [], // 179/506868 (0.04%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 179/506868 (0.04%)
	id: string,
	ignore_reports?: boolean, // 6042/506868 (1.19%)
	is_blank?: boolean, // 179/506868 (0.04%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 3/506868 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "88b11314-1752-11e8-a0b8-0e034171235a", // 1/506868 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 79/80 (98.75%)
			author_url?: string, // 79/80 (98.75%)
			cache_age?: number, // 3/80 (3.75%)
			description?: string, // 7/80 (8.75%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"TED"|"Google Maps"|"Scribd",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://ted.com"|"http://google.com/maps"|"https://www.scribd.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 3/80 (3.75%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"ted.com"|"maps.google.com"|"scribd.com",
	},
	media_embed: {
		content?: string, // 80/506868 (0.02%)
		height?: number, // 80/506868 (0.02%)
		media_domain_url?: string, // 80/506868 (0.02%)
		scrolling?: boolean, // 80/506868 (0.02%)
		width?: number, // 80/506868 (0.02%)
	},
	mobile_ad_url?: "", // 179/506868 (0.04%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 179/506868 (0.04%)
	outbound_link?: {
	}, // 179/506868 (0.04%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 638/506868 (0.13%)
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
				}, // 11/638 (1.72%)
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
				}, // 11/638 (1.72%)
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
				}, // 42/638 (6.58%)
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
				}, // 42/638 (6.58%)
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
		}, // 8/638 (1.25%)
	}, // 638/506868 (0.13%)
	priority_id?: null, // 179/506868 (0.04%)
	promoted?: boolean, // 179/506868 (0.04%)
	promoted_by?: null, // 179/506868 (0.04%)
	promoted_display_name?: null, // 179/506868 (0.04%)
	promoted_url?: null, // 179/506868 (0.04%)
	removed?: boolean, // 6042/506868 (1.19%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 79/80 (98.75%)
			author_url?: string, // 79/80 (98.75%)
			cache_age?: number, // 3/80 (3.75%)
			description?: string, // 7/80 (8.75%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"TED"|"Google Maps"|"Scribd",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://ted.com"|"http://google.com/maps"|"https://www.scribd.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 3/80 (3.75%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"ted.com"|"maps.google.com"|"scribd.com",
	},
	secure_media_embed: {
		content?: string, // 80/506868 (0.02%)
		height?: number, // 80/506868 (0.02%)
		media_domain_url?: string, // 80/506868 (0.02%)
		scrolling?: boolean, // 80/506868 (0.02%)
		width?: number, // 80/506868 (0.02%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 6042/506868 (1.19%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"old"|"controversial",
	third_party_trackers?: [], // 179/506868 (0.04%)
	third_party_tracking?: null, // 179/506868 (0.04%)
	third_party_tracking_2?: null, // 179/506868 (0.04%)
	thumbnail: string,
	thumbnail_height?: null|number, // 414311/506868 (81.74%)
	thumbnail_width?: null|number, // 414311/506868 (81.74%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}