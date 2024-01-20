interface RedditPost {
	adserver_click_url?: null, // 6661/6901239 (0.10%)
	adserver_imp_pixel?: null, // 6661/6901239 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 6661/6901239 (0.10%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 6894578/6901239 (99.90%)
	from_id?: null, // 6894578/6901239 (99.90%)
	from_kind?: null, // 6894578/6901239 (99.90%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 6661/6901239 (0.10%)
	id: string,
	imp_pixel?: null, // 6661/6901239 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 155/813151 (0.02%)
		oembed?: {
			author_name?: string, // 605850/812996 (74.52%)
			author_url?: string, // 605039/812996 (74.42%)
			cache_age?: number, // 1480/812996 (0.18%)
			description?: string, // 742800/812996 (91.37%)
			height: number,
			html: string,
			mean_alpha?: number, // 3526/812996 (0.43%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 812466/812996 (99.93%)
			thumbnail_url?: string, // 812993/812996 (100.00%)
			thumbnail_width?: number, // 812466/812996 (99.93%)
			title?: string, // 812066/812996 (99.89%)
			type: "video"|"rich",
			url?: string, // 501003/812996 (61.62%)
			version?: "1.0", // 812993/812996 (100.00%)
			width: number,
		}, // 812996/813151 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 813151/6901239 (11.78%)
		height?: number, // 813151/6901239 (11.78%)
		scrolling?: boolean, // 813151/6901239 (11.78%)
		width?: number, // 813151/6901239 (11.78%)
	},
	mobile_ad_url?: string, // 6661/6901239 (0.10%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2195844/6901239 (31.82%)
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
			},
		}[],
	}, // 2195844/6901239 (31.82%)
	promoted?: boolean, // 6661/6901239 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 155/790894 (0.02%)
		oembed?: {
			author_name?: string, // 588712/790739 (74.45%)
			author_url?: string, // 588535/790739 (74.43%)
			cache_age?: number, // 1426/790739 (0.18%)
			description?: string, // 720700/790739 (91.14%)
			height: number,
			html: string,
			mean_alpha?: number, // 1122/790739 (0.14%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 790201/790739 (99.93%)
			thumbnail_url?: string, // 790727/790739 (100.00%)
			thumbnail_width?: number, // 790201/790739 (99.93%)
			title?: string, // 789830/790739 (99.89%)
			type: "video"|"rich",
			url?: string, // 499704/790739 (63.19%)
			version?: "1.0", // 790736/790739 (100.00%)
			width: number,
		}, // 790739/790894 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 790894/6901239 (11.46%)
		height?: number, // 790894/6901239 (11.46%)
		scrolling?: boolean, // 790894/6901239 (11.46%)
		width?: number, // 790894/6901239 (11.46%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 6894578/6901239 (99.90%)
	subreddit_id?: string, // 6894578/6901239 (99.90%)
	third_party_tracking?: null, // 6661/6901239 (0.10%)
	third_party_tracking_2?: null, // 6661/6901239 (0.10%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}