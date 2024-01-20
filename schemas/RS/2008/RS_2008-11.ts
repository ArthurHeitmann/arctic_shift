interface RedditPost {
	adserver_click_url?: null, // 3/272505 (0.00%)
	adserver_imp_pixel?: null, // 3/272505 (0.00%)
	approved?: boolean, // 4805/272505 (1.76%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 391/272505 (0.14%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 220201/272505 (80.81%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 220201/272505 (80.81%)
	author_id?: "t2_3aa9x"|"t2_1wh0"|null, // 3/272505 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator",
	domain: string,
	domain_override?: null, // 3/272505 (0.00%)
	edited: boolean,
	embed_type?: null, // 3/272505 (0.00%)
	embed_url?: null, // 3/272505 (0.00%)
	events?: [], // 3/272505 (0.00%)
	eventsOnRender?: [], // 3/272505 (0.00%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 3/272505 (0.00%)
	id: string,
	ignore_reports?: boolean, // 4805/272505 (1.76%)
	is_blank?: boolean, // 3/272505 (0.00%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 2/272505 (0.00%)
	link_flair_css_class: null|"nonwhitelistedchannel"|""|"normal"|"legal"|"notappropriate",
	link_flair_richtext: {
		e: "text",
		t: "Non-whitelisted Youtube Channel"|"Old News"|"Uninteresting Pic undescriptive title"|"Image Gallery"|"Legal"|"Video"|"Not Appropriate",
	}[],
	link_flair_text: null|"Non-whitelisted Youtube Channel"|"Old News"|"Uninteresting Pic undescriptive title"|"Image Gallery"|"Legal"|"Video"|"Not Appropriate",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "harvardlawgrad"|"KelliBanks"|"M. Eric Carr"|"reelman64"|"lundkvist"|"aclu"|"BalloonShop"|"JasonOnEarth"|"The Young Turks"|"DiamondChick"|"byseb"|"jimmycokes",
			author_url: string,
			description?: string, // 2/13 (15.38%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 2/13 (15.38%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"ca.youtube.com"|"uk.youtube.com",
	},
	media_embed: {
		content?: string, // 13/272505 (0.00%)
		height?: number, // 13/272505 (0.00%)
		media_domain_url?: string, // 13/272505 (0.00%)
		scrolling?: boolean, // 13/272505 (0.00%)
		width?: number, // 13/272505 (0.00%)
	},
	mobile_ad_url?: "", // 3/272505 (0.00%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 3/272505 (0.00%)
	outbound_link?: {
		created?: number, // 1/3 (33.33%)
		expiration?: number, // 1/3 (33.33%)
		url?: string, // 1/3 (33.33%)
	}, // 3/272505 (0.00%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|"no_ads"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"rich:video"|"image", // 120/272505 (0.04%)
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
				}, // 1/120 (0.83%)
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
				}, // 1/120 (0.83%)
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
				}, // 6/120 (5.00%)
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
				}, // 6/120 (5.00%)
			},
		}[],
	}, // 120/272505 (0.04%)
	priority_id?: null, // 3/272505 (0.00%)
	promoted?: boolean, // 3/272505 (0.00%)
	promoted_by?: null|number, // 3/272505 (0.00%)
	promoted_display_name?: null, // 3/272505 (0.00%)
	promoted_url?: null, // 3/272505 (0.00%)
	removed?: boolean, // 4805/272505 (1.76%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "harvardlawgrad"|"KelliBanks"|"M. Eric Carr"|"reelman64"|"lundkvist"|"aclu"|"BalloonShop"|"JasonOnEarth"|"The Young Turks"|"DiamondChick"|"byseb"|"jimmycokes",
			author_url: string,
			description?: string, // 2/13 (15.38%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 2/13 (15.38%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"ca.youtube.com"|"uk.youtube.com",
	},
	secure_media_embed: {
		content?: string, // 13/272505 (0.00%)
		height?: number, // 13/272505 (0.00%)
		media_domain_url?: string, // 13/272505 (0.00%)
		scrolling?: boolean, // 13/272505 (0.00%)
		width?: number, // 13/272505 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4805/272505 (1.76%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old",
	third_party_trackers?: [], // 3/272505 (0.00%)
	third_party_tracking?: null, // 3/272505 (0.00%)
	third_party_tracking_2?: null, // 3/272505 (0.00%)
	thumbnail: string,
	thumbnail_height?: null|number, // 180399/272505 (66.20%)
	thumbnail_width?: null|number, // 180399/272505 (66.20%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|"no_ads"|"house_only"|null,
}