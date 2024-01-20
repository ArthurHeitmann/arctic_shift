interface RedditPost {
	adserver_click_url?: null, // 7068/8588120 (0.08%)
	adserver_imp_pixel?: null, // 7068/8588120 (0.08%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 11413/8588120 (0.13%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	brand_safe: boolean,
	contest_mode: boolean,
	created_utc: number,
	disable_comments?: boolean, // 7068/8588120 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	edited: boolean|number,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 7068/8588120 (0.08%)
	id: string,
	imp_pixel?: null, // 7068/8588120 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 72/980306 (0.01%)
		oembed?: {
			author_name?: string, // 713402/980234 (72.78%)
			author_url?: string, // 712631/980234 (72.70%)
			cache_age?: number, // 1138/980234 (0.12%)
			description?: string, // 430466/980234 (43.91%)
			height: number,
			html: string,
			marginheight?: number, // 32/980234 (0.00%)
			marginwidth?: number, // 32/980234 (0.00%)
			mean_alpha?: number, // 3578/980234 (0.37%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 979941/980234 (99.97%)
			thumbnail_url?: string, // 979944/980234 (99.97%)
			thumbnail_width?: number, // 979941/980234 (99.97%)
			title?: string, // 979840/980234 (99.96%)
			type: "video"|"rich",
			url?: string, // 103961/980234 (10.61%)
			version?: "1.0", // 980202/980234 (100.00%)
			width: number,
		}, // 980234/980306 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 980306/8588120 (11.41%)
		height?: number, // 980306/8588120 (11.41%)
		scrolling?: boolean, // 980306/8588120 (11.41%)
		width?: number, // 980306/8588120 (11.41%)
	},
	mobile_ad_url?: string, // 7068/8588120 (0.08%)
	num_comments: number,
	original_link?: null|"t3_5rit1m"|"t3_5rifph"|"t3_5rj43l"|"t3_5rnpfg"|"t3_5rnq4z"|"t3_5rgtva"|"t3_5ra8aq"|"t3_5sa4s4"|"t3_5sapal"|"t3_5sadyc"|"t3_5sbo03"|"t3_5ru8fj"|"t3_5duwrm"|"t3_5rgne8"|"t3_5u7wtc", // 7068/8588120 (0.08%)
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 3223985/8588120 (37.54%)
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
				}, // 87897/3223985 (2.73%)
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
				}, // 87897/3223985 (2.73%)
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
				}, // 262290/3223985 (8.14%)
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
				}, // 272973/3223985 (8.47%)
			},
		}[],
	}, // 3223985/8588120 (37.54%)
	promoted?: boolean, // 7068/8588120 (0.08%)
	promoted_by?: null, // 7068/8588120 (0.08%)
	promoted_display_name?: null|"RedditAds"|"OfficialLoganMovie"|"Bethesda Software"|"TheExpanse_Syfy"|"ty"|"who cares"|"ToyotaUSA", // 7068/8588120 (0.08%)
	promoted_url?: null|string, // 7068/8588120 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	score: number,
	secure_media: null|{
		event_id?: string, // 72/966172 (0.01%)
		oembed?: {
			author_name?: string, // 706790/966100 (73.16%)
			author_url?: string, // 706306/966100 (73.11%)
			cache_age?: number, // 1045/966100 (0.11%)
			description?: string, // 416601/966100 (43.12%)
			height: number,
			html: string,
			marginheight?: number, // 32/966100 (0.00%)
			marginwidth?: number, // 32/966100 (0.00%)
			mean_alpha?: number, // 2378/966100 (0.25%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 965808/966100 (99.97%)
			thumbnail_url?: string, // 965810/966100 (99.97%)
			thumbnail_width?: number, // 965808/966100 (99.97%)
			title?: string, // 965836/966100 (99.97%)
			type: "video"|"rich",
			url?: string, // 103276/966100 (10.69%)
			version?: "1.0", // 966068/966100 (100.00%)
			width: number,
		}, // 966100/966172 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 966172/8588120 (11.25%)
		height?: number, // 966172/8588120 (11.25%)
		scrolling?: boolean, // 966172/8588120 (11.25%)
		width?: number, // 966172/8588120 (11.25%)
	},
	selftext: string,
	spoiler: boolean,
	stickied: boolean,
	subreddit?: string, // 8581052/8588120 (99.92%)
	subreddit_id: string|null,
	suggested_sort: null|"confidence"|"new"|"top"|"qa"|"old"|"controversial"|"random"|"live",
	third_party_tracking?: null|string, // 7068/8588120 (0.08%)
	third_party_tracking_2?: null|string, // 7068/8588120 (0.08%)
	thumbnail: string|null,
	title: string,
	url: string,
}