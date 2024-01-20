interface RedditPost {
	adserver_click_url?: null, // 9/357107 (0.00%)
	adserver_imp_pixel?: null, // 9/357107 (0.00%)
	approved?: boolean, // 5362/357107 (1.50%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 2577/357107 (0.72%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 290506/357107 (81.35%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 290506/357107 (81.35%)
	author_id?: "t2_1wh0", // 9/357107 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator",
	domain: string,
	domain_override?: null, // 9/357107 (0.00%)
	edited: boolean|number,
	embed_type?: null, // 9/357107 (0.00%)
	embed_url?: null, // 9/357107 (0.00%)
	events?: [], // 9/357107 (0.00%)
	eventsOnRender?: [], // 9/357107 (0.00%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 9/357107 (0.00%)
	id: string,
	ignore_reports?: boolean, // 5362/357107 (1.50%)
	is_blank?: boolean, // 9/357107 (0.00%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 2/357107 (0.00%)
	link_flair_css_class: null|"nine"|"criticism"|"nonwhitelistedchannel"|""|"twentytwo"|"normal"|"parenting"|"env"|"deceased"|"removed",
	link_flair_richtext: {
		e: "text",
		t: "Physics"|"Criticism"|"Non-whitelisted Youtube Channel"|"(R.6c) Title"|"Technology"|"Not News"|"Parenting"|"[atheism]"|"Environment"|"[reddit.com]"|"Found Deceased"|"Rule 4",
	}[],
	link_flair_text: null|"Physics"|"Criticism"|"Non-whitelisted Youtube Channel"|"(R.6c) Title"|"Technology"|"Not News"|"Parenting"|"[atheism]"|"Environment"|"[reddit.com]"|"Found Deceased"|"Rule 4",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "tariq786khan"|"Kucinich2008"|"Zenta"|"naomileib"|"xorandor"|"MVerstappen"|"Miao Haixing"|"bigdogeatchild"|"fiveawesomegirls"|"bd594"|"Kevin Yamazaki",
			author_url: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 11/357107 (0.00%)
		height?: number, // 11/357107 (0.00%)
		media_domain_url?: string, // 11/357107 (0.00%)
		scrolling?: boolean, // 11/357107 (0.00%)
		width?: number, // 11/357107 (0.00%)
	},
	mobile_ad_url?: "", // 9/357107 (0.00%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 9/357107 (0.00%)
	outbound_link?: {
		created?: number, // 1/9 (11.11%)
		expiration?: number, // 1/9 (11.11%)
		url?: string, // 1/9 (11.11%)
	}, // 9/357107 (0.00%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 157/357107 (0.04%)
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
				}, // 1/157 (0.64%)
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
				}, // 1/157 (0.64%)
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
				}, // 8/157 (5.10%)
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
				}, // 8/157 (5.10%)
			},
		}[],
	}, // 157/357107 (0.04%)
	priority_id?: null, // 9/357107 (0.00%)
	promoted?: boolean, // 9/357107 (0.00%)
	promoted_by?: number, // 9/357107 (0.00%)
	promoted_display_name?: null, // 9/357107 (0.00%)
	promoted_url?: null, // 9/357107 (0.00%)
	removed?: boolean, // 5362/357107 (1.50%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "tariq786khan"|"Kucinich2008"|"Zenta"|"naomileib"|"xorandor"|"MVerstappen"|"Miao Haixing"|"bigdogeatchild"|"fiveawesomegirls"|"bd594"|"Kevin Yamazaki",
			author_url: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 11/357107 (0.00%)
		height?: number, // 11/357107 (0.00%)
		media_domain_url?: string, // 11/357107 (0.00%)
		scrolling?: boolean, // 11/357107 (0.00%)
		width?: number, // 11/357107 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 5362/357107 (1.50%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old",
	third_party_trackers?: [], // 9/357107 (0.00%)
	third_party_tracking?: null, // 9/357107 (0.00%)
	third_party_tracking_2?: null, // 9/357107 (0.00%)
	thumbnail: string,
	thumbnail_height?: null|number, // 238293/357107 (66.73%)
	thumbnail_width?: null|number, // 238293/357107 (66.73%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}