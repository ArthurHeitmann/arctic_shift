interface RedditPost {
	adserver_click_url?: null, // 4/362805 (0.00%)
	adserver_imp_pixel?: null, // 4/362805 (0.00%)
	approved?: boolean, // 5505/362805 (1.52%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 379/362805 (0.10%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 294223/362805 (81.10%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 294223/362805 (81.10%)
	author_id?: "t2_1wh0"|null, // 4/362805 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator",
	domain: string,
	domain_override?: null, // 4/362805 (0.00%)
	edited: boolean|number,
	embed_type?: null, // 4/362805 (0.00%)
	embed_url?: null, // 4/362805 (0.00%)
	events?: [], // 4/362805 (0.00%)
	eventsOnRender?: [], // 4/362805 (0.00%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: "http://scifi.reddit.com"|"http://nonprofit.reddit.com"|"http://store.xkcd.com/reddit?win", // 4/362805 (0.00%)
	id: string,
	ignore_reports?: boolean, // 5505/362805 (1.52%)
	is_blank?: boolean, // 4/362805 (0.00%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 2/362805 (0.00%)
	link_flair_css_class: null|"parenting"|""|"criticism"|"football"|"three"|"purple"|"normal"|"vod"|"twentytwo"|"loc-us"|"research",
	link_flair_richtext: {
		e: "text",
		t: "Parenting"|"Video"|"Criticism"|"Football"|"Economics"|"Article"|"[reddit.com]"|"Image Gallery"|"Not Appropriate Subreddit"|"Technology"|"[wtf]"|"US Only"|"Research",
	}[],
	link_flair_text: null|"Parenting"|"Video"|"Criticism"|"Football"|"Economics"|"Article"|"[reddit.com]"|"Image Gallery"|"Not Appropriate Subreddit"|"Technology"|"[wtf]"|"US Only"|"Research",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 20/21 (95.24%)
			author_url?: string, // 20/21 (95.24%)
			cache_age?: number, // 1/21 (4.76%)
			description?: string, // 2/21 (9.52%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Scribd",
			provider_url: "https://www.youtube.com/"|"https://www.scribd.com/"|"http://scribd.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"scribd.com",
	},
	media_embed: {
		content?: string, // 21/362805 (0.01%)
		height?: number, // 21/362805 (0.01%)
		media_domain_url?: string, // 21/362805 (0.01%)
		scrolling?: boolean, // 21/362805 (0.01%)
		width?: number, // 21/362805 (0.01%)
	},
	mobile_ad_url?: "", // 4/362805 (0.00%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 4/362805 (0.00%)
	outbound_link?: {
		created?: null, // 1/4 (25.00%)
		expiration?: null, // 1/4 (25.00%)
		url?: "http://scifi.reddit.com", // 1/4 (25.00%)
	}, // 4/362805 (0.00%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 171/362805 (0.05%)
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
				}, // 3/171 (1.75%)
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
				}, // 3/171 (1.75%)
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
				}, // 7/171 (4.09%)
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
				}, // 7/171 (4.09%)
			},
		}[],
	}, // 171/362805 (0.05%)
	priority_id?: null, // 4/362805 (0.00%)
	promoted?: boolean, // 4/362805 (0.00%)
	promoted_by?: number, // 4/362805 (0.00%)
	promoted_display_name?: null, // 4/362805 (0.00%)
	promoted_url?: null, // 4/362805 (0.00%)
	removed?: boolean, // 5505/362805 (1.52%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 20/21 (95.24%)
			author_url?: string, // 20/21 (95.24%)
			cache_age?: number, // 1/21 (4.76%)
			description?: string, // 2/21 (9.52%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Scribd",
			provider_url: "https://www.youtube.com/"|"https://www.scribd.com/"|"http://scribd.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"scribd.com",
	},
	secure_media_embed: {
		content?: string, // 21/362805 (0.01%)
		height?: number, // 21/362805 (0.01%)
		media_domain_url?: string, // 21/362805 (0.01%)
		scrolling?: boolean, // 21/362805 (0.01%)
		width?: number, // 21/362805 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5505/362805 (1.52%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old",
	third_party_trackers?: [], // 4/362805 (0.00%)
	third_party_tracking?: null, // 4/362805 (0.00%)
	third_party_tracking_2?: null, // 4/362805 (0.00%)
	thumbnail: string,
	thumbnail_height?: null|number, // 242629/362805 (66.88%)
	thumbnail_width?: null|number, // 242629/362805 (66.88%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}