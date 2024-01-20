interface RedditPost {
	adserver_click_url?: null, // 66/461702 (0.01%)
	adserver_imp_pixel?: null, // 66/461702 (0.01%)
	approved?: boolean, // 5822/461702 (1.26%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 748/461702 (0.16%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 373004/461702 (80.79%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 373004/461702 (80.79%)
	author_id?: "t2_1ed7b"|"t2_1wh0"|null, // 66/461702 (0.01%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 66/461702 (0.01%)
	edited: boolean|number,
	embed_type?: null, // 66/461702 (0.01%)
	embed_url?: null, // 66/461702 (0.01%)
	events?: [], // 66/461702 (0.01%)
	eventsOnRender?: [], // 66/461702 (0.01%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 66/461702 (0.01%)
	id: string,
	ignore_reports?: boolean, // 5822/461702 (1.26%)
	is_blank?: boolean, // 66/461702 (0.01%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 6/461702 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "5fcc47d2-2ebf-11e8-8a11-0e9586a0d81c", // 2/461702 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 37/38 (97.37%)
			author_url?: string, // 37/38 (97.37%)
			description?: string, // 2/38 (5.26%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Ustream.tv"|"Vimeo",
			provider_url: "https://www.youtube.com/"|"http://ustream.tv"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"ustream.tv"|"vimeo.com",
	},
	media_embed: {
		content?: string, // 38/461702 (0.01%)
		height?: number, // 38/461702 (0.01%)
		media_domain_url?: string, // 38/461702 (0.01%)
		scrolling?: boolean, // 38/461702 (0.01%)
		width?: number, // 38/461702 (0.01%)
	},
	mobile_ad_url?: "", // 66/461702 (0.01%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 66/461702 (0.01%)
	outbound_link?: {
	}, // 66/461702 (0.01%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 281/461702 (0.06%)
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
				}, // 9/281 (3.20%)
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
				}, // 9/281 (3.20%)
			},
		}[],
	}, // 281/461702 (0.06%)
	priority_id?: null, // 66/461702 (0.01%)
	promoted?: boolean, // 66/461702 (0.01%)
	promoted_by?: null, // 66/461702 (0.01%)
	promoted_display_name?: null, // 66/461702 (0.01%)
	promoted_url?: null, // 66/461702 (0.01%)
	removed?: boolean, // 5822/461702 (1.26%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 37/38 (97.37%)
			author_url?: string, // 37/38 (97.37%)
			description?: string, // 2/38 (5.26%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Ustream.tv"|"Vimeo",
			provider_url: "https://www.youtube.com/"|"http://ustream.tv"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"ustream.tv"|"vimeo.com",
	},
	secure_media_embed: {
		content?: string, // 38/461702 (0.01%)
		height?: number, // 38/461702 (0.01%)
		media_domain_url?: string, // 38/461702 (0.01%)
		scrolling?: boolean, // 38/461702 (0.01%)
		width?: number, // 38/461702 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5822/461702 (1.26%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"old",
	third_party_trackers?: [], // 66/461702 (0.01%)
	third_party_tracking?: null, // 66/461702 (0.01%)
	third_party_tracking_2?: null, // 66/461702 (0.01%)
	thumbnail: string,
	thumbnail_height?: null|number, // 387097/461702 (83.84%)
	thumbnail_width?: null|number, // 387097/461702 (83.84%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}