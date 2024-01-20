interface RedditPost {
	adserver_click_url?: null, // 6630/8286759 (0.08%)
	adserver_imp_pixel?: null, // 6630/8286759 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 6630/8286759 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 6630/8286759 (0.08%)
	id: string,
	imp_pixel?: null, // 6630/8286759 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 125/940947 (0.01%)
		oembed?: {
			author_name?: string, // 705324/940822 (74.97%)
			author_url?: string, // 704861/940822 (74.92%)
			cache_age?: number, // 1198/940822 (0.13%)
			description?: string, // 382268/940822 (40.63%)
			height: number,
			html: string,
			mean_alpha?: number, // 5342/940822 (0.57%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 940739/940822 (99.99%)
			thumbnail_url?: string, // 940739/940822 (99.99%)
			thumbnail_width?: number, // 940739/940822 (99.99%)
			title?: string, // 940409/940822 (99.96%)
			type: "video"|"rich",
			url?: string, // 103558/940822 (11.01%)
			version?: "1.0", // 940739/940822 (99.99%)
			width: number,
		}, // 940822/940947 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 940947/8286759 (11.35%)
		height?: number, // 940947/8286759 (11.35%)
		scrolling?: boolean, // 940947/8286759 (11.35%)
		width?: number, // 940947/8286759 (11.35%)
	},
	mobile_ad_url?: string, // 6630/8286759 (0.08%)
	name: string,
	num_comments: number,
	original_link?: null|"t3_55q9ra"|"t3_55qms7"|"t3_55r4yr"|"t3_575w7l"|"t3_574a4k"|"t3_575yod"|"t3_57hs7j", // 6630/8286759 (0.08%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"rich:video"|"self"|"image"|"video", // 2702827/8286759 (32.62%)
	preview?: {
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
				}, // 40126/2702827 (1.48%)
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
				}, // 40126/2702827 (1.48%)
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
				}, // 518/2702827 (0.02%)
			},
		}[],
	}, // 2702827/8286759 (32.62%)
	promoted?: boolean, // 6630/8286759 (0.08%)
	promoted_by?: null, // 6630/8286759 (0.08%)
	promoted_display_name?: null|"promoted_by_user"|"walkingeggg"|"p_egg"|"eBayOfficial", // 6630/8286759 (0.08%)
	promoted_url?: null|string, // 6630/8286759 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 125/927201 (0.01%)
		oembed?: {
			author_name?: string, // 698290/927076 (75.32%)
			author_url?: string, // 697858/927076 (75.28%)
			cache_age?: number, // 928/927076 (0.10%)
			description?: string, // 368906/927076 (39.79%)
			height: number,
			html: string,
			mean_alpha?: number, // 2430/927076 (0.26%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 926991/927076 (99.99%)
			thumbnail_url?: string, // 926991/927076 (99.99%)
			thumbnail_width?: number, // 926991/927076 (99.99%)
			title?: string, // 926905/927076 (99.98%)
			type: "video"|"rich",
			url?: string, // 102436/927076 (11.05%)
			version?: "1.0", // 926993/927076 (99.99%)
			width: number,
		}, // 927076/927201 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 927201/8286759 (11.19%)
		height?: number, // 927201/8286759 (11.19%)
		scrolling?: boolean, // 927201/8286759 (11.19%)
		width?: number, // 927201/8286759 (11.19%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 8280129/8286759 (99.92%)
	subreddit_id?: string, // 8280129/8286759 (99.92%)
	third_party_tracking?: null|string, // 6630/8286759 (0.08%)
	third_party_tracking_2?: null|string, // 6630/8286759 (0.08%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}