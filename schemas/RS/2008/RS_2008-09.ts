interface RedditPost {
	adserver_click_url?: null, // 18/256268 (0.01%)
	adserver_imp_pixel?: null, // 18/256268 (0.01%)
	approved?: boolean, // 4178/256268 (1.63%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 811/256268 (0.32%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 205451/256268 (80.17%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 205451/256268 (80.17%)
	author_id?: "t2_1vdi"|"t2_34hzo"|"t2_300dx"|"t2_20z8g"|"t2_32hb1"|"t2_37ac3"|"t2_36de2"|"t2_8uj6"|"t2_fs4o"|"t2_35wpy"|"t2_1wjm"|"t2_1w72"|"t2_1vkf"|"t2_1wh0"|null, // 18/256268 (0.01%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	domain_override?: null, // 18/256268 (0.01%)
	edited: boolean|number,
	embed_type?: null, // 18/256268 (0.01%)
	embed_url?: null, // 18/256268 (0.01%)
	events?: [], // 18/256268 (0.01%)
	eventsOnRender?: [], // 18/256268 (0.01%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 18/256268 (0.01%)
	id: string,
	ignore_reports?: boolean, // 4178/256268 (1.63%)
	is_blank?: boolean, // 18/256268 (0.01%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 8/256268 (0.00%)
	link_flair_css_class: null|"nonwhitelistedchannel"|""|"ten"|"puretech"|"news"|"Sports"|"removed"|"three"|"red"|"faq"|"twentytwo",
	link_flair_richtext: {
		e: "text",
		t: "Non-whitelisted Youtube Channel"|"👎 shitpost"|"Psychology"|"Pure Tech"|"News"|"Sports"|"Rule 4"|"👍 Seal of Approval"|"Real Life"|"R1: Political"|"FAQ"|"Technology",
	}[],
	link_flair_template_id?: "61a5ce90-74a5-11e7-a4de-0e5517db016e"|"b6f7a02a-74a6-11e7-8ebf-0e76a733d78a", // 2/256268 (0.00%)
	link_flair_text: null|"Non-whitelisted Youtube Channel"|"👎 shitpost"|"Psychology"|"Pure Tech"|"News"|"Sports"|"Rule 4"|"👍 Seal of Approval"|"Real Life"|"R1: Political"|"FAQ"|"Technology",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "BarackObamadotcom"|"nektracom"|"sk8rgrrrl"|"crooksandliars"|"bangulo2012"|"floatingcapital"|"Thunderf00t",
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
		content?: string, // 8/256268 (0.00%)
		height?: number, // 8/256268 (0.00%)
		media_domain_url?: string, // 8/256268 (0.00%)
		scrolling?: boolean, // 8/256268 (0.00%)
		width?: number, // 8/256268 (0.00%)
	},
	mobile_ad_url?: "", // 18/256268 (0.01%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 18/256268 (0.01%)
	outbound_link?: {
	}, // 18/256268 (0.01%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_all"|"promo_adult"|"no_ads"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 103/256268 (0.04%)
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
				}, // 2/103 (1.94%)
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
				}, // 2/103 (1.94%)
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
				}, // 2/103 (1.94%)
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
				}, // 2/103 (1.94%)
			},
		}[],
	}, // 103/256268 (0.04%)
	priority_id?: null, // 18/256268 (0.01%)
	promoted?: boolean, // 18/256268 (0.01%)
	promoted_by?: null, // 18/256268 (0.01%)
	promoted_display_name?: null, // 18/256268 (0.01%)
	promoted_url?: null, // 18/256268 (0.01%)
	removed?: boolean, // 4178/256268 (1.63%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "BarackObamadotcom"|"nektracom"|"sk8rgrrrl"|"crooksandliars"|"bangulo2012"|"floatingcapital"|"Thunderf00t",
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
		content?: string, // 8/256268 (0.00%)
		height?: number, // 8/256268 (0.00%)
		media_domain_url?: string, // 8/256268 (0.00%)
		scrolling?: boolean, // 8/256268 (0.00%)
		width?: number, // 8/256268 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4178/256268 (1.63%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"old"|"top"|"controversial",
	third_party_trackers?: [], // 18/256268 (0.01%)
	third_party_tracking?: null, // 18/256268 (0.01%)
	third_party_tracking_2?: null, // 18/256268 (0.01%)
	thumbnail: string,
	thumbnail_height?: null|number, // 169726/256268 (66.23%)
	thumbnail_width?: null|number, // 169726/256268 (66.23%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_all"|"promo_adult"|"no_ads"|"house_only"|null,
}