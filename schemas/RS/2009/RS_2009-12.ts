interface RedditPost {
	adserver_click_url?: null, // 348/492225 (0.07%)
	adserver_imp_pixel?: null, // 348/492225 (0.07%)
	approved?: boolean, // 5774/492225 (1.17%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 455/492225 (0.09%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 2/3502 (0.06%)
		e: "text"|"emoji",
		t?: string, // 3500/3502 (99.94%)
		u?: string, // 2/3502 (0.06%)
	}[], // 394069/492225 (80.06%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 394069/492225 (80.06%)
	author_id?: string|null, // 348/492225 (0.07%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator",
	domain: string,
	domain_override?: null, // 348/492225 (0.07%)
	edited: boolean|number,
	embed_type?: null, // 348/492225 (0.07%)
	embed_url?: null, // 348/492225 (0.07%)
	events?: [], // 348/492225 (0.07%)
	eventsOnRender?: [], // 348/492225 (0.07%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 348/492225 (0.07%)
	id: string,
	ignore_reports?: boolean, // 5774/492225 (1.17%)
	is_blank?: boolean, // 348/492225 (0.07%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 10/492225 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "5fcc47d2-2ebf-11e8-8a11-0e9586a0d81c"|"85f81fd4-87ee-11e3-a1b2-12313d18400c", // 2/492225 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			cache_age?: number, // 1/58 (1.72%)
			description?: string, // 2/58 (3.45%)
			height: number,
			html: string,
			provider_name: "YouTube"|"TED"|"Vimeo",
			provider_url: "https://www.youtube.com/"|"http://ted.com"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/58 (1.72%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"ted.com"|"vimeo.com",
	},
	media_embed: {
		content?: string, // 58/492225 (0.01%)
		height?: number, // 58/492225 (0.01%)
		media_domain_url?: string, // 58/492225 (0.01%)
		scrolling?: boolean, // 58/492225 (0.01%)
		width?: number, // 58/492225 (0.01%)
	},
	mobile_ad_url?: "", // 348/492225 (0.07%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 348/492225 (0.07%)
	outbound_link?: {
	}, // 348/492225 (0.07%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 393/492225 (0.08%)
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
				}, // 8/393 (2.04%)
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
				}, // 8/393 (2.04%)
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
				}, // 28/393 (7.12%)
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
				}, // 28/393 (7.12%)
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
		}, // 3/393 (0.76%)
	}, // 393/492225 (0.08%)
	priority_id?: null, // 348/492225 (0.07%)
	promoted?: boolean, // 348/492225 (0.07%)
	promoted_by?: null, // 348/492225 (0.07%)
	promoted_display_name?: null, // 348/492225 (0.07%)
	promoted_url?: null, // 348/492225 (0.07%)
	removed?: boolean, // 5774/492225 (1.17%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			cache_age?: number, // 1/58 (1.72%)
			description?: string, // 2/58 (3.45%)
			height: number,
			html: string,
			provider_name: "YouTube"|"TED"|"Vimeo",
			provider_url: "https://www.youtube.com/"|"http://ted.com"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/58 (1.72%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"ted.com"|"vimeo.com",
	},
	secure_media_embed: {
		content?: string, // 58/492225 (0.01%)
		height?: number, // 58/492225 (0.01%)
		media_domain_url?: string, // 58/492225 (0.01%)
		scrolling?: boolean, // 58/492225 (0.01%)
		width?: number, // 58/492225 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5774/492225 (1.17%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"top"|"new"|"old"|"qa",
	third_party_trackers?: [], // 348/492225 (0.07%)
	third_party_tracking?: null, // 348/492225 (0.07%)
	third_party_tracking_2?: null, // 348/492225 (0.07%)
	thumbnail: string,
	thumbnail_height?: null|number, // 414994/492225 (84.31%)
	thumbnail_width?: null|number, // 414994/492225 (84.31%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}