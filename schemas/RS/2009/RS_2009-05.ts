interface RedditPost {
	adserver_click_url?: null, // 35/355193 (0.01%)
	adserver_imp_pixel?: null, // 35/355193 (0.01%)
	approved?: boolean, // 5855/355193 (1.65%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1347/355193 (0.38%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 289744/355193 (81.57%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 289744/355193 (81.57%)
	author_id?: "t2_1wh0"|"t2_1ed7b"|"t2_3gycq", // 35/355193 (0.01%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	domain_override?: null, // 35/355193 (0.01%)
	edited: boolean|number,
	embed_type?: null, // 35/355193 (0.01%)
	embed_url?: null, // 35/355193 (0.01%)
	events?: [], // 35/355193 (0.01%)
	eventsOnRender?: [], // 35/355193 (0.01%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 35/355193 (0.01%)
	id: string,
	ignore_reports?: boolean, // 5855/355193 (1.65%)
	is_blank?: boolean, // 35/355193 (0.01%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/355193 (0.00%)
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
			description?: string, // 3/19 (15.79%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"Funny Or Die",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://www.funnyordie.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"funnyordie.com",
	},
	media_embed: {
		content?: string, // 19/355193 (0.01%)
		height?: number, // 19/355193 (0.01%)
		media_domain_url?: string, // 19/355193 (0.01%)
		scrolling?: boolean, // 19/355193 (0.01%)
		width?: number, // 19/355193 (0.01%)
	},
	mobile_ad_url?: "", // 35/355193 (0.01%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 35/355193 (0.01%)
	outbound_link?: {
	}, // 35/355193 (0.01%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 177/355193 (0.05%)
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
				}, // 3/177 (1.69%)
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
				}, // 3/177 (1.69%)
			},
		}[],
	}, // 177/355193 (0.05%)
	priority_id?: null, // 35/355193 (0.01%)
	promoted?: boolean, // 35/355193 (0.01%)
	promoted_by?: number, // 35/355193 (0.01%)
	promoted_display_name?: null, // 35/355193 (0.01%)
	promoted_url?: null, // 35/355193 (0.01%)
	removed?: boolean, // 5855/355193 (1.65%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: string,
			author_url: string,
			description?: string, // 3/19 (15.79%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"Funny Or Die",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://www.funnyordie.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"funnyordie.com",
	},
	secure_media_embed: {
		content?: string, // 19/355193 (0.01%)
		height?: number, // 19/355193 (0.01%)
		media_domain_url?: string, // 19/355193 (0.01%)
		scrolling?: boolean, // 19/355193 (0.01%)
		width?: number, // 19/355193 (0.01%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5855/355193 (1.65%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"old"|"qa",
	third_party_trackers?: [], // 35/355193 (0.01%)
	third_party_tracking?: null, // 35/355193 (0.01%)
	third_party_tracking_2?: null, // 35/355193 (0.01%)
	thumbnail: string,
	thumbnail_height?: null|number, // 255843/355193 (72.03%)
	thumbnail_width?: null|number, // 255843/355193 (72.03%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}