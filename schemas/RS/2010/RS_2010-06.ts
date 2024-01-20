interface RedditPost {
	adserver_click_url?: null, // 581/478396 (0.12%)
	adserver_imp_pixel?: null, // 581/478396 (0.12%)
	approved?: boolean, // 4795/478396 (1.00%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1850/478396 (0.39%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 2/8886 (0.02%)
		e: "text"|"emoji",
		t?: string, // 8884/8886 (99.98%)
		u?: string, // 2/8886 (0.02%)
	}[], // 350354/478396 (73.24%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 350354/478396 (73.24%)
	author_id?: string|null, // 581/478396 (0.12%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 581/478396 (0.12%)
	edited: boolean|number,
	embed_type?: null, // 581/478396 (0.12%)
	embed_url?: null, // 581/478396 (0.12%)
	events?: [], // 581/478396 (0.12%)
	eventsOnRender?: [], // 581/478396 (0.12%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 581/478396 (0.12%)
	id: string,
	ignore_reports?: boolean, // 4795/478396 (1.00%)
	is_blank?: boolean, // 581/478396 (0.12%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 10/478396 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "85f81fd4-87ee-11e3-a1b2-12313d18400c"|"fd1a3246-c141-11e3-9c65-12313b0e88c2", // 2/478396 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 185/191 (96.86%)
			author_url?: string, // 184/191 (96.34%)
			cache_age?: number, // 2/191 (1.05%)
			description?: string, // 16/191 (8.38%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Imgur"|"Vimeo"|"Funny Or Die"|"TED"|"Ustream.tv"|"Hulu",
			provider_url: "https://www.youtube.com/"|"http://imgur.com"|"https://vimeo.com/"|"http://www.funnyordie.com"|"http://ted.com"|"http://ustream.tv"|"//www.hulu.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 3/191 (1.57%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"imgur.com"|"vimeo.com"|"funnyordie.com"|"ted.com"|"ustream.tv"|"hulu.com",
	},
	media_embed: {
		content?: string, // 191/478396 (0.04%)
		height?: number, // 191/478396 (0.04%)
		media_domain_url?: string, // 191/478396 (0.04%)
		scrolling?: boolean, // 191/478396 (0.04%)
		width?: number, // 191/478396 (0.04%)
	},
	mobile_ad_url?: "", // 581/478396 (0.12%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 581/478396 (0.12%)
	outbound_link?: {
	}, // 581/478396 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 1402/478396 (0.29%)
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
				}, // 21/1402 (1.50%)
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
				}, // 21/1402 (1.50%)
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
				}, // 88/1402 (6.28%)
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
				}, // 88/1402 (6.28%)
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
		}, // 15/1402 (1.07%)
	}, // 1402/478396 (0.29%)
	priority_id?: null, // 581/478396 (0.12%)
	promoted?: boolean, // 581/478396 (0.12%)
	promoted_by?: null, // 581/478396 (0.12%)
	promoted_display_name?: null, // 581/478396 (0.12%)
	promoted_url?: null, // 581/478396 (0.12%)
	removed?: boolean, // 4795/478396 (1.00%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 185/191 (96.86%)
			author_url?: string, // 184/191 (96.34%)
			cache_age?: number, // 2/191 (1.05%)
			description?: string, // 16/191 (8.38%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Imgur"|"Vimeo"|"Funny Or Die"|"TED"|"Ustream.tv"|"Hulu",
			provider_url: "https://www.youtube.com/"|"http://imgur.com"|"https://vimeo.com/"|"http://www.funnyordie.com"|"http://ted.com"|"http://ustream.tv"|"//www.hulu.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 3/191 (1.57%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"imgur.com"|"vimeo.com"|"funnyordie.com"|"ted.com"|"ustream.tv"|"hulu.com",
	},
	secure_media_embed: {
		content?: string, // 191/478396 (0.04%)
		height?: number, // 191/478396 (0.04%)
		media_domain_url?: string, // 191/478396 (0.04%)
		scrolling?: boolean, // 191/478396 (0.04%)
		width?: number, // 191/478396 (0.04%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 4795/478396 (1.00%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"controversial"|"qa"|"old",
	third_party_trackers?: [], // 581/478396 (0.12%)
	third_party_tracking?: null, // 581/478396 (0.12%)
	third_party_tracking_2?: null, // 581/478396 (0.12%)
	thumbnail: string|null,
	thumbnail_height?: null|number, // 339836/478396 (71.04%)
	thumbnail_width?: null|number, // 339836/478396 (71.04%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}