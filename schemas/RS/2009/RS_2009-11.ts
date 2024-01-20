interface RedditPost {
	adserver_click_url?: null, // 173/452320 (0.04%)
	adserver_imp_pixel?: null, // 173/452320 (0.04%)
	approved?: boolean, // 5168/452320 (1.14%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 436/452320 (0.10%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":illuminati:", // 1/3373 (0.03%)
		e: "text"|"emoji",
		t?: string, // 3372/3373 (99.97%)
		u?: string, // 1/3373 (0.03%)
	}[], // 366169/452320 (80.95%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 366169/452320 (80.95%)
	author_id?: string|null, // 173/452320 (0.04%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 173/452320 (0.04%)
	edited: boolean|number,
	embed_type?: null, // 173/452320 (0.04%)
	embed_url?: null, // 173/452320 (0.04%)
	events?: [], // 173/452320 (0.04%)
	eventsOnRender?: [], // 173/452320 (0.04%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 173/452320 (0.04%)
	id: string,
	ignore_reports?: boolean, // 5168/452320 (1.14%)
	is_blank?: boolean, // 173/452320 (0.04%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 8/452320 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "5fcc47d2-2ebf-11e8-8a11-0e9586a0d81c", // 3/452320 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: string,
			author_url?: string, // 30/31 (96.77%)
			cache_age?: number, // 1/31 (3.23%)
			description?: string, // 1/31 (3.23%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Hulu",
			provider_url: "https://www.youtube.com/"|"//www.hulu.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"hulu.com",
	},
	media_embed: {
		content?: string, // 31/452320 (0.01%)
		height?: number, // 31/452320 (0.01%)
		media_domain_url?: string, // 31/452320 (0.01%)
		scrolling?: boolean, // 31/452320 (0.01%)
		width?: number, // 31/452320 (0.01%)
	},
	mobile_ad_url?: "", // 173/452320 (0.04%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 173/452320 (0.04%)
	outbound_link?: {
	}, // 173/452320 (0.04%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 256/452320 (0.06%)
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
				}, // 3/256 (1.17%)
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
				}, // 3/256 (1.17%)
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
				}, // 8/256 (3.12%)
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
				}, // 8/256 (3.12%)
			},
		}[],
	}, // 256/452320 (0.06%)
	priority_id?: null, // 173/452320 (0.04%)
	promoted?: boolean, // 173/452320 (0.04%)
	promoted_by?: null, // 173/452320 (0.04%)
	promoted_display_name?: null, // 173/452320 (0.04%)
	promoted_url?: null, // 173/452320 (0.04%)
	removed?: boolean, // 5168/452320 (1.14%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: string,
			author_url?: string, // 30/31 (96.77%)
			cache_age?: number, // 1/31 (3.23%)
			description?: string, // 1/31 (3.23%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Hulu",
			provider_url: "https://www.youtube.com/"|"//www.hulu.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"hulu.com",
	},
	secure_media_embed: {
		content?: string, // 31/452320 (0.01%)
		height?: number, // 31/452320 (0.01%)
		media_domain_url?: string, // 31/452320 (0.01%)
		scrolling?: boolean, // 31/452320 (0.01%)
		width?: number, // 31/452320 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5168/452320 (1.14%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"top"|"new"|"old"|"qa"|"controversial",
	third_party_trackers?: [], // 173/452320 (0.04%)
	third_party_tracking?: null, // 173/452320 (0.04%)
	third_party_tracking_2?: null, // 173/452320 (0.04%)
	thumbnail: string,
	thumbnail_height?: null|number, // 376122/452320 (83.15%)
	thumbnail_width?: null|number, // 376122/452320 (83.15%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}