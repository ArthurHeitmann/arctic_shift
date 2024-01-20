interface RedditPost {
	adserver_click_url?: null, // 66/427135 (0.02%)
	adserver_imp_pixel?: null, // 66/427135 (0.02%)
	approved?: boolean, // 5874/427135 (1.38%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1405/427135 (0.33%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 350268/427135 (82.00%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 350268/427135 (82.00%)
	author_id?: "t2_1ed7b"|"t2_1wh0"|"t2_ormx"|null, // 66/427135 (0.02%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 66/427135 (0.02%)
	edited: boolean|number,
	embed_type?: null, // 66/427135 (0.02%)
	embed_url?: null, // 66/427135 (0.02%)
	events?: [], // 66/427135 (0.02%)
	eventsOnRender?: [], // 66/427135 (0.02%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 66/427135 (0.02%)
	id: string,
	ignore_reports?: boolean, // 5874/427135 (1.38%)
	is_blank?: boolean, // 66/427135 (0.02%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 2/427135 (0.00%)
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
			author_name?: string, // 31/32 (96.88%)
			author_url?: string, // 31/32 (96.88%)
			description?: string, // 1/32 (3.12%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Trailer Addict",
			provider_url: "https://www.youtube.com/"|"https://www.traileraddict.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"traileraddict.com",
	},
	media_embed: {
		content?: string, // 32/427135 (0.01%)
		height?: number, // 32/427135 (0.01%)
		media_domain_url?: string, // 32/427135 (0.01%)
		scrolling?: boolean, // 32/427135 (0.01%)
		width?: number, // 32/427135 (0.01%)
	},
	mobile_ad_url?: "", // 66/427135 (0.02%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 66/427135 (0.02%)
	outbound_link?: {
		created?: number, // 3/66 (4.55%)
		expiration?: number, // 3/66 (4.55%)
		url?: string, // 3/66 (4.55%)
	}, // 66/427135 (0.02%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 270/427135 (0.06%)
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
				}, // 5/270 (1.85%)
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
				}, // 5/270 (1.85%)
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
				}, // 10/270 (3.70%)
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
				}, // 10/270 (3.70%)
			},
		}[],
	}, // 270/427135 (0.06%)
	priority_id?: null, // 66/427135 (0.02%)
	promoted?: boolean, // 66/427135 (0.02%)
	promoted_by?: number, // 66/427135 (0.02%)
	promoted_display_name?: null, // 66/427135 (0.02%)
	promoted_url?: null, // 66/427135 (0.02%)
	removed?: boolean, // 5874/427135 (1.38%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 31/32 (96.88%)
			author_url?: string, // 31/32 (96.88%)
			description?: string, // 1/32 (3.12%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Trailer Addict",
			provider_url: "https://www.youtube.com/"|"https://www.traileraddict.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"traileraddict.com",
	},
	secure_media_embed: {
		content?: string, // 32/427135 (0.01%)
		height?: number, // 32/427135 (0.01%)
		media_domain_url?: string, // 32/427135 (0.01%)
		scrolling?: boolean, // 32/427135 (0.01%)
		width?: number, // 32/427135 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5874/427135 (1.38%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"old",
	third_party_trackers?: [], // 66/427135 (0.02%)
	third_party_tracking?: null, // 66/427135 (0.02%)
	third_party_tracking_2?: null, // 66/427135 (0.02%)
	thumbnail: string,
	thumbnail_height?: null|number, // 303338/427135 (71.02%)
	thumbnail_width?: null|number, // 303338/427135 (71.02%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}