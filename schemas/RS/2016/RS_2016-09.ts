interface RedditPost {
	adserver_click_url?: null, // 6768/7437862 (0.09%)
	adserver_imp_pixel?: null, // 6768/7437862 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 6768/7437862 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 6768/7437862 (0.09%)
	id: string,
	imp_pixel?: null, // 6768/7437862 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 130/890350 (0.01%)
		oembed?: {
			author_name?: string, // 651119/890220 (73.14%)
			author_url?: string, // 650807/890220 (73.11%)
			cache_age?: number, // 1158/890220 (0.13%)
			description?: string, // 368387/890220 (41.38%)
			height: number,
			html: string,
			mean_alpha?: number, // 5057/890220 (0.57%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 890213/890220 (100.00%)
			thumbnail_url?: string, // 890213/890220 (100.00%)
			thumbnail_width?: number, // 890213/890220 (100.00%)
			title?: string, // 889897/890220 (99.96%)
			type: "video"|"rich",
			url?: string, // 93493/890220 (10.50%)
			version?: "1.0", // 890213/890220 (100.00%)
			width: number,
		}, // 890220/890350 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 890350/7437862 (11.97%)
		height?: number, // 890350/7437862 (11.97%)
		scrolling?: boolean, // 890350/7437862 (11.97%)
		width?: number, // 890350/7437862 (11.97%)
	},
	mobile_ad_url?: string, // 6768/7437862 (0.09%)
	name: string,
	num_comments: number,
	original_link?: null|"t3_2c2twn"|"t3_4u6ezl"|"t3_4u6hw6"|"t3_4umgxn"|"t3_50fwbm"|"t3_50hxfx"|"t3_51mbwo"|"t3_50tp3x"|"t3_51lwqh"|"t3_50ur9r"|"t3_54xi3e"|"t3_53tf43", // 6768/7437862 (0.09%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2471378/7437862 (33.23%)
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
				}, // 39674/2471378 (1.61%)
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
				}, // 39674/2471378 (1.61%)
			},
		}[],
	}, // 2471378/7437862 (33.23%)
	promoted?: boolean, // 6768/7437862 (0.09%)
	promoted_by?: null, // 6768/7437862 (0.09%)
	promoted_display_name?: null|"BlairWitchMovie"|"eBayOfficial"|"hiredinc"|"Motherboard"|"promoter_walkingegg"|"BeTheMatchOfficial", // 6768/7437862 (0.09%)
	promoted_url?: null|string, // 6768/7437862 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 130/877047 (0.01%)
		oembed?: {
			author_name?: string, // 644169/876917 (73.46%)
			author_url?: string, // 643893/876917 (73.43%)
			cache_age?: number, // 832/876917 (0.09%)
			description?: string, // 355502/876917 (40.54%)
			height: number,
			html: string,
			mean_alpha?: number, // 2083/876917 (0.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 876907/876917 (100.00%)
			thumbnail_url?: string, // 876907/876917 (100.00%)
			thumbnail_width?: number, // 876907/876917 (100.00%)
			title?: string, // 876830/876917 (99.99%)
			type: "video"|"rich",
			url?: string, // 92424/876917 (10.54%)
			version?: "1.0", // 876910/876917 (100.00%)
			width: number,
		}, // 876917/877047 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 877047/7437862 (11.79%)
		height?: number, // 877047/7437862 (11.79%)
		scrolling?: boolean, // 877047/7437862 (11.79%)
		width?: number, // 877047/7437862 (11.79%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 7431094/7437862 (99.91%)
	subreddit_id?: string, // 7431094/7437862 (99.91%)
	third_party_tracking?: null|string, // 6768/7437862 (0.09%)
	third_party_tracking_2?: null|string, // 6768/7437862 (0.09%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}