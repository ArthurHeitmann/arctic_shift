interface RedditPost {
	adserver_click_url?: null, // 5/282974 (0.00%)
	adserver_imp_pixel?: null, // 5/282974 (0.00%)
	approved?: boolean, // 4608/282974 (1.63%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 419/282974 (0.15%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 1/1204 (0.08%)
		e: "text"|"emoji",
		t?: string, // 1203/1204 (99.92%)
		u?: string, // 1/1204 (0.08%)
	}[], // 227486/282974 (80.39%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 227486/282974 (80.39%)
	author_id?: "t2_1wh0"|"t2_1wnj"|"t2_7onf", // 5/282974 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	domain_override?: null, // 5/282974 (0.00%)
	edited: boolean|number,
	embed_type?: null, // 5/282974 (0.00%)
	embed_url?: null, // 5/282974 (0.00%)
	events?: [], // 5/282974 (0.00%)
	eventsOnRender?: [], // 5/282974 (0.00%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 5/282974 (0.00%)
	id: string,
	ignore_reports?: boolean, // 4608/282974 (1.63%)
	is_blank?: boolean, // 5/282974 (0.00%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 3/282974 (0.00%)
	link_flair_css_class: null|""|"nonwhitelistedchannel"|"red"|"five"|"legal",
	link_flair_richtext: {
		e: "text",
		t: "Non-whitelisted Youtube Channel"|"Video"|"R1: Political"|"Politics"|"FIRST POST"|"Legal"|"Meta",
	}[],
	link_flair_text: null|"Non-whitelisted Youtube Channel"|"Video"|"R1: Political"|"Politics"|"FIRST POST"|"Legal"|"Meta",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "PhilDeCarolis"|"prattleon"|"anyusmoon1"|"newsjunkie002"|"Michael McIntee"|"Mark Gervais"|"geraldcz"|"fiveawesomegirls"|"scbabj"|"woodbulb"|"bjarrett99"|"TRUEFORMPICTURES"|"Qcco",
			author_url: string,
			description?: string, // 1/14 (7.14%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/14 (7.14%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"au.youtube.com",
	},
	media_embed: {
		content?: string, // 14/282974 (0.00%)
		height?: number, // 14/282974 (0.00%)
		media_domain_url?: string, // 14/282974 (0.00%)
		scrolling?: boolean, // 14/282974 (0.00%)
		width?: number, // 14/282974 (0.00%)
	},
	mobile_ad_url?: "", // 5/282974 (0.00%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 5/282974 (0.00%)
	outbound_link?: {
	}, // 5/282974 (0.00%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|"no_ads"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"rich:video"|"image", // 115/282974 (0.04%)
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
				}, // 5/115 (4.35%)
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
				}, // 5/115 (4.35%)
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
				}, // 5/115 (4.35%)
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
				}, // 5/115 (4.35%)
			},
		}[],
	}, // 115/282974 (0.04%)
	priority_id?: null, // 5/282974 (0.00%)
	promoted?: boolean, // 5/282974 (0.00%)
	promoted_by?: null, // 5/282974 (0.00%)
	promoted_display_name?: null, // 5/282974 (0.00%)
	promoted_url?: null, // 5/282974 (0.00%)
	removed?: boolean, // 4608/282974 (1.63%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "PhilDeCarolis"|"prattleon"|"anyusmoon1"|"newsjunkie002"|"Michael McIntee"|"Mark Gervais"|"geraldcz"|"fiveawesomegirls"|"scbabj"|"woodbulb"|"bjarrett99"|"TRUEFORMPICTURES"|"Qcco",
			author_url: string,
			description?: string, // 1/14 (7.14%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/14 (7.14%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"au.youtube.com",
	},
	secure_media_embed: {
		content?: string, // 14/282974 (0.00%)
		height?: number, // 14/282974 (0.00%)
		media_domain_url?: string, // 14/282974 (0.00%)
		scrolling?: boolean, // 14/282974 (0.00%)
		width?: number, // 14/282974 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4608/282974 (1.63%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"old",
	third_party_trackers?: [], // 5/282974 (0.00%)
	third_party_tracking?: null, // 5/282974 (0.00%)
	third_party_tracking_2?: null, // 5/282974 (0.00%)
	thumbnail: string,
	thumbnail_height?: null|number, // 181644/282974 (64.19%)
	thumbnail_width?: null|number, // 181644/282974 (64.19%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"promo_all"|"no_ads"|"house_only"|null,
}