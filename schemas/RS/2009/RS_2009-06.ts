interface RedditPost {
	adserver_click_url?: null, // 79/383969 (0.02%)
	adserver_imp_pixel?: null, // 79/383969 (0.02%)
	approved?: boolean, // 5366/383969 (1.40%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1400/383969 (0.36%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 314249/383969 (81.84%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 314249/383969 (81.84%)
	author_id?: "t2_1ed7b"|"t2_1wh0"|"t2_3gycq"|null, // 79/383969 (0.02%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 79/383969 (0.02%)
	edited: boolean|number,
	embed_type?: null, // 79/383969 (0.02%)
	embed_url?: null, // 79/383969 (0.02%)
	events?: [], // 79/383969 (0.02%)
	eventsOnRender?: [], // 79/383969 (0.02%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 79/383969 (0.02%)
	id: string,
	ignore_reports?: boolean, // 5366/383969 (1.40%)
	is_blank?: boolean, // 79/383969 (0.02%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 4/383969 (0.00%)
	link_flair_css_class: null|""|"discussion"|"1850s"|"twentyone"|"artwork"|"psychedelic"|"nine"|"heavy"|"seventeen"|"nonwhitelistedchannel"|"diving"|"img"|"twentytwo"|"parenting",
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "7e7097c8-87ee-11e3-86f5-22000a0b8292", // 1/383969 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 22/23 (95.65%)
			author_url?: string, // 22/23 (95.65%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"maps.google.com",
	},
	media_embed: {
		content?: string, // 23/383969 (0.01%)
		height?: number, // 23/383969 (0.01%)
		media_domain_url?: string, // 23/383969 (0.01%)
		scrolling?: boolean, // 23/383969 (0.01%)
		width?: number, // 23/383969 (0.01%)
	},
	mobile_ad_url?: "", // 79/383969 (0.02%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 79/383969 (0.02%)
	outbound_link?: {
		created?: number|null, // 8/79 (10.13%)
		expiration?: number|null, // 8/79 (10.13%)
		url?: string, // 8/79 (10.13%)
	}, // 79/383969 (0.02%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"rich:video"|"image", // 205/383969 (0.05%)
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
				}, // 1/205 (0.49%)
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
				}, // 1/205 (0.49%)
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
				}, // 8/205 (3.90%)
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
				}, // 8/205 (3.90%)
			},
		}[],
	}, // 205/383969 (0.05%)
	priority_id?: null, // 79/383969 (0.02%)
	promoted?: boolean, // 79/383969 (0.02%)
	promoted_by?: number, // 79/383969 (0.02%)
	promoted_display_name?: null, // 79/383969 (0.02%)
	promoted_url?: null, // 79/383969 (0.02%)
	removed?: boolean, // 5366/383969 (1.40%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 22/23 (95.65%)
			author_url?: string, // 22/23 (95.65%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"maps.google.com",
	},
	secure_media_embed: {
		content?: string, // 23/383969 (0.01%)
		height?: number, // 23/383969 (0.01%)
		media_domain_url?: string, // 23/383969 (0.01%)
		scrolling?: boolean, // 23/383969 (0.01%)
		width?: number, // 23/383969 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5366/383969 (1.40%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"old"|"qa",
	third_party_trackers?: [], // 79/383969 (0.02%)
	third_party_tracking?: null, // 79/383969 (0.02%)
	third_party_tracking_2?: null, // 79/383969 (0.02%)
	thumbnail: string,
	thumbnail_height?: null|number, // 302328/383969 (78.74%)
	thumbnail_width?: null|number, // 302328/383969 (78.74%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}