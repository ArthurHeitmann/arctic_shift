interface RedditPost {
	adserver_click_url?: null, // 40/443037 (0.01%)
	adserver_imp_pixel?: null, // 40/443037 (0.01%)
	approved?: boolean, // 5213/443037 (1.18%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1074/443037 (0.24%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 355957/443037 (80.34%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 355957/443037 (80.34%)
	author_id?: "t2_1ed7b"|"t2_1wh0"|null, // 40/443037 (0.01%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 40/443037 (0.01%)
	edited: boolean|number,
	embed_type?: null, // 40/443037 (0.01%)
	embed_url?: null, // 40/443037 (0.01%)
	events?: [], // 40/443037 (0.01%)
	eventsOnRender?: [], // 40/443037 (0.01%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 40/443037 (0.01%)
	id: string,
	ignore_reports?: boolean, // 5213/443037 (1.18%)
	is_blank?: boolean, // 40/443037 (0.01%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 3/443037 (0.00%)
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
			author_name: string,
			author_url: string,
			description?: string, // 3/45 (6.67%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare",
			provider_url: "https://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"https://www.slideshare.net/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"soundcloud.com"|"vimeo.com"|"slideshare.net",
	},
	media_embed: {
		content?: string, // 45/443037 (0.01%)
		height?: number, // 45/443037 (0.01%)
		media_domain_url?: string, // 45/443037 (0.01%)
		scrolling?: boolean, // 45/443037 (0.01%)
		width?: number, // 45/443037 (0.01%)
	},
	mobile_ad_url?: "", // 40/443037 (0.01%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 40/443037 (0.01%)
	outbound_link?: {
	}, // 40/443037 (0.01%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 262/443037 (0.06%)
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
				}, // 1/262 (0.38%)
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
				}, // 1/262 (0.38%)
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
				}, // 18/262 (6.87%)
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
				}, // 18/262 (6.87%)
			},
		}[],
	}, // 262/443037 (0.06%)
	priority_id?: null, // 40/443037 (0.01%)
	promoted?: boolean, // 40/443037 (0.01%)
	promoted_by?: null, // 40/443037 (0.01%)
	promoted_display_name?: null, // 40/443037 (0.01%)
	promoted_url?: null, // 40/443037 (0.01%)
	removed?: boolean, // 5213/443037 (1.18%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			description?: string, // 3/45 (6.67%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare",
			provider_url: "https://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"https://www.slideshare.net/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"soundcloud.com"|"vimeo.com"|"slideshare.net",
	},
	secure_media_embed: {
		content?: string, // 45/443037 (0.01%)
		height?: number, // 45/443037 (0.01%)
		media_domain_url?: string, // 45/443037 (0.01%)
		scrolling?: boolean, // 45/443037 (0.01%)
		width?: number, // 45/443037 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5213/443037 (1.18%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"top"|"new",
	third_party_trackers?: [], // 40/443037 (0.01%)
	third_party_tracking?: null, // 40/443037 (0.01%)
	third_party_tracking_2?: null, // 40/443037 (0.01%)
	thumbnail: string,
	thumbnail_height?: null|number, // 370788/443037 (83.69%)
	thumbnail_width?: null|number, // 370788/443037 (83.69%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}