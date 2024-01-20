interface RedditPost {
	adserver_click_url?: null, // 4752/6113675 (0.08%)
	adserver_imp_pixel?: null, // 4752/6113675 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4752/6113675 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 6108923/6113675 (99.92%)
	from_id?: null, // 6108923/6113675 (99.92%)
	from_kind?: null, // 6108923/6113675 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4752/6113675 (0.08%)
	id: string,
	imp_pixel?: null, // 4752/6113675 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 163/690128 (0.02%)
		oembed?: {
			author_name?: string, // 506080/689965 (73.35%)
			author_url?: string, // 504991/689965 (73.19%)
			cache_age?: number, // 1805/689965 (0.26%)
			description?: string, // 673902/689965 (97.67%)
			height: number,
			html: string,
			mean_alpha?: number, // 3937/689965 (0.57%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 689865/689965 (99.99%)
			thumbnail_url: string,
			thumbnail_width?: number, // 689865/689965 (99.99%)
			title?: string, // 689866/689965 (99.99%)
			type: "video"|"rich",
			url?: string, // 470518/689965 (68.19%)
			version: "1.0",
			width: number,
		}, // 689965/690128 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 690128/6113675 (11.29%)
		height?: number, // 690128/6113675 (11.29%)
		scrolling?: boolean, // 690128/6113675 (11.29%)
		width?: number, // 690128/6113675 (11.29%)
	},
	mobile_ad_url?: string, // 4752/6113675 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"rich:video"|"self"|"image"|"video", // 1840085/6113675 (30.10%)
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
	}, // 1840085/6113675 (30.10%)
	promoted?: boolean, // 4752/6113675 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 163/664970 (0.02%)
		oembed?: {
			author_name?: string, // 501026/664807 (75.36%)
			author_url?: string, // 500643/664807 (75.31%)
			cache_age?: number, // 1724/664807 (0.26%)
			description?: string, // 648839/664807 (97.60%)
			height: number,
			html: string,
			mean_alpha?: number, // 1854/664807 (0.28%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 664709/664807 (99.99%)
			thumbnail_url?: string, // 664806/664807 (100.00%)
			thumbnail_width?: number, // 664709/664807 (99.99%)
			title?: string, // 664743/664807 (99.99%)
			type: "video"|"rich",
			url?: string, // 470303/664807 (70.74%)
			version: "1.0",
			width: number,
		}, // 664807/664970 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 664970/6113675 (10.88%)
		height?: number, // 664970/6113675 (10.88%)
		scrolling?: boolean, // 664970/6113675 (10.88%)
		width?: number, // 664970/6113675 (10.88%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 6108923/6113675 (99.92%)
	subreddit_id?: string, // 6108923/6113675 (99.92%)
	third_party_tracking?: null, // 4752/6113675 (0.08%)
	third_party_tracking_2?: null, // 4752/6113675 (0.08%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}