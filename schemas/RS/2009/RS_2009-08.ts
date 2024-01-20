interface RedditPost {
	adserver_click_url?: null, // 63/435860 (0.01%)
	adserver_imp_pixel?: null, // 63/435860 (0.01%)
	approved?: boolean, // 5434/435860 (1.25%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1234/435860 (0.28%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 351367/435860 (80.61%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 351367/435860 (80.61%)
	author_id?: "t2_1ed7b"|"t2_1wh0"|"t2_ormx"|null, // 63/435860 (0.01%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 63/435860 (0.01%)
	edited: boolean|number,
	embed_type?: null, // 63/435860 (0.01%)
	embed_url?: null, // 63/435860 (0.01%)
	events?: [], // 63/435860 (0.01%)
	eventsOnRender?: [], // 63/435860 (0.01%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 63/435860 (0.01%)
	id: string,
	ignore_reports?: boolean, // 5434/435860 (1.25%)
	is_blank?: boolean, // 63/435860 (0.01%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 9/435860 (0.00%)
	link_flair_css_class: null|""|"snoo"|"solvedcase"|"dead-link"|"nonwhitelistedchannel"|"nine"|"discussion"|"meta"|"mod"|"orangered"|"video"|"REMOVED"|"g"|"hiphop"|"vod",
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "5fcc47d2-2ebf-11e8-8a11-0e9586a0d81c", // 6/435860 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			description?: string, // 1/24 (4.17%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com",
	},
	media_embed: {
		content?: string, // 24/435860 (0.01%)
		height?: number, // 24/435860 (0.01%)
		media_domain_url?: string, // 24/435860 (0.01%)
		scrolling?: boolean, // 24/435860 (0.01%)
		width?: number, // 24/435860 (0.01%)
	},
	mobile_ad_url?: "", // 63/435860 (0.01%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 63/435860 (0.01%)
	outbound_link?: {
	}, // 63/435860 (0.01%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 210/435860 (0.05%)
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
				}, // 2/210 (0.95%)
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
				}, // 2/210 (0.95%)
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
				}, // 7/210 (3.33%)
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
				}, // 7/210 (3.33%)
			},
		}[],
	}, // 210/435860 (0.05%)
	priority_id?: null, // 63/435860 (0.01%)
	promoted?: boolean, // 63/435860 (0.01%)
	promoted_by?: number|null, // 63/435860 (0.01%)
	promoted_display_name?: null, // 63/435860 (0.01%)
	promoted_url?: null, // 63/435860 (0.01%)
	removed?: boolean, // 5434/435860 (1.25%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			description?: string, // 1/24 (4.17%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com",
	},
	secure_media_embed: {
		content?: string, // 24/435860 (0.01%)
		height?: number, // 24/435860 (0.01%)
		media_domain_url?: string, // 24/435860 (0.01%)
		scrolling?: boolean, // 24/435860 (0.01%)
		width?: number, // 24/435860 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5434/435860 (1.25%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"top"|"new"|"old",
	third_party_trackers?: [], // 63/435860 (0.01%)
	third_party_tracking?: null, // 63/435860 (0.01%)
	third_party_tracking_2?: null, // 63/435860 (0.01%)
	thumbnail: string,
	thumbnail_height?: null|number, // 346815/435860 (79.57%)
	thumbnail_width?: null|number, // 346815/435860 (79.57%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}