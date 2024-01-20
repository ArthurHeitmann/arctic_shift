interface RedditPost {
	adserver_click_url?: null, // 4/329042 (0.00%)
	adserver_imp_pixel?: null, // 4/329042 (0.00%)
	approved?: boolean, // 5485/329042 (1.67%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 280/329042 (0.09%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 265420/329042 (80.66%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 265420/329042 (80.66%)
	author_id?: "t2_1wh0"|"t2_1ed7b", // 4/329042 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator",
	domain: string,
	domain_override?: null, // 4/329042 (0.00%)
	edited: boolean|number,
	embed_type?: null, // 4/329042 (0.00%)
	embed_url?: null, // 4/329042 (0.00%)
	events?: [], // 4/329042 (0.00%)
	eventsOnRender?: [], // 4/329042 (0.00%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 4/329042 (0.00%)
	id: string,
	ignore_reports?: boolean, // 5485/329042 (1.67%)
	is_blank?: boolean, // 4/329042 (0.00%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 5/329042 (0.00%)
	link_flair_css_class: null|""|"purple"|"science"|"ten"|"general"|"entertainment"|"politics"|"Not an Image"|"blue",
	link_flair_richtext: {
		e: "text",
		t: "Article"|"Image Gallery"|"Psychology"|"[funny]"|"Business"|"[comics]"|"Humor"|"[askreddit]"|"Video"|"Not an Image"|"Vote manipulation",
	}[],
	link_flair_template_id?: "6710b006-cc2e-11e4-b2a0-22000b3395c9", // 1/329042 (0.00%)
	link_flair_text: null|""|"Article"|"Image Gallery"|"Psychology"|"[funny]"|"Business"|"[comics]"|"Humor"|"[askreddit]"|"Video"|"Not an Image"|"Vote manipulation",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			description?: string, // 1/22 (4.55%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/22 (4.55%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"de.youtube.com",
	},
	media_embed: {
		content?: string, // 22/329042 (0.01%)
		height?: number, // 22/329042 (0.01%)
		media_domain_url?: string, // 22/329042 (0.01%)
		scrolling?: boolean, // 22/329042 (0.01%)
		width?: number, // 22/329042 (0.01%)
	},
	mobile_ad_url?: "", // 4/329042 (0.00%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 4/329042 (0.00%)
	outbound_link?: {
	}, // 4/329042 (0.00%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"rich:video"|"image", // 191/329042 (0.06%)
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
				}, // 3/191 (1.57%)
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
				}, // 3/191 (1.57%)
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
				}, // 6/191 (3.14%)
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
				}, // 6/191 (3.14%)
			},
		}[],
	}, // 191/329042 (0.06%)
	priority_id?: null, // 4/329042 (0.00%)
	promoted?: boolean, // 4/329042 (0.00%)
	promoted_by?: number, // 4/329042 (0.00%)
	promoted_display_name?: null, // 4/329042 (0.00%)
	promoted_url?: null, // 4/329042 (0.00%)
	removed?: boolean, // 5485/329042 (1.67%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			description?: string, // 1/22 (4.55%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/22 (4.55%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"de.youtube.com",
	},
	secure_media_embed: {
		content?: string, // 22/329042 (0.01%)
		height?: number, // 22/329042 (0.01%)
		media_domain_url?: string, // 22/329042 (0.01%)
		scrolling?: boolean, // 22/329042 (0.01%)
		width?: number, // 22/329042 (0.01%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 5485/329042 (1.67%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"controversial"|"old",
	third_party_trackers?: [], // 4/329042 (0.00%)
	third_party_tracking?: null, // 4/329042 (0.00%)
	third_party_tracking_2?: null, // 4/329042 (0.00%)
	thumbnail: string,
	thumbnail_height?: null|number, // 213862/329042 (65.00%)
	thumbnail_width?: null|number, // 213862/329042 (65.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}