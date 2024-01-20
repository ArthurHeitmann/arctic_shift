interface RedditPost {
	adserver_click_url?: null, // 4230/4162070 (0.10%)
	adserver_imp_pixel?: null, // 4230/4162070 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4230/4162070 (0.10%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4157840/4162070 (99.90%)
	from_id?: null, // 4157840/4162070 (99.90%)
	from_kind?: null, // 4157840/4162070 (99.90%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4230/4162070 (0.10%)
	id: string,
	imp_pixel?: null, // 4230/4162070 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 27/426545 (0.01%)
		event_id?: "pkean5g2zei6hic2ciytwcxadi"|"osi4z6wqsui6hp7nciytwamw3a"|"7wfpeiw2dmi6hglfciytwamw3a"|"bewvtcwmz4i6hctbciytwamw3a"|"m2s2qlw3gqi6he27ciytwamw3a"|"6p6msbgpzai6hfj4ciytwamw3a", // 11/426545 (0.00%)
		height?: number, // 27/426545 (0.01%)
		oembed?: {
			author_name?: string, // 408372/426507 (95.75%)
			author_url?: string, // 408402/426507 (95.76%)
			cache_age?: number, // 723/426507 (0.17%)
			description?: string, // 423986/426507 (99.41%)
			height: number,
			html: string,
			mean_alpha?: number, // 5122/426507 (1.20%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 423086/426507 (99.20%)
			thumbnail_url?: string, // 423078/426507 (99.20%)
			thumbnail_width?: number, // 423086/426507 (99.20%)
			title?: string, // 425733/426507 (99.82%)
			type: "video"|"rich",
			url?: string, // 293770/426507 (68.88%)
			version?: "1.0", // 426506/426507 (100.00%)
			width: number,
		}, // 426507/426545 (99.99%)
		type: string,
		width?: number, // 27/426545 (0.01%)
	},
	media_embed: {
		content?: string, // 426545/4162070 (10.25%)
		height?: number, // 426545/4162070 (10.25%)
		scrolling?: boolean, // 426545/4162070 (10.25%)
		width?: number, // 426545/4162070 (10.25%)
	},
	mobile_ad_url?: "", // 4230/4162070 (0.10%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image", // 91/4162070 (0.00%)
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
	}, // 91/4162070 (0.00%)
	promoted?: boolean, // 4230/4162070 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "pkean5g2zei6hic2ciytwcxadi"|"osi4z6wqsui6hp7nciytwamw3a"|"7wfpeiw2dmi6hglfciytwamw3a"|"lp3jvpwmuii6hctbciytwamw3a"|"bewvtcwmz4i6hctbciytwamw3a"|"m2s2qlw3gqi6he27ciytwamw3a"|"6p6msbgpzai6hfj4ciytwamw3a", // 12/321454 (0.00%)
		oembed?: {
			author_name?: string, // 319008/321442 (99.24%)
			author_url?: string, // 319008/321442 (99.24%)
			description?: string, // 320955/321442 (99.85%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare"|"redditgifts",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://wistia.com"|"http://www.redditgifts.com/",
			thumbnail_height?: number, // 319008/321442 (99.24%)
			thumbnail_url?: string, // 318999/321442 (99.24%)
			thumbnail_width?: number, // 319008/321442 (99.24%)
			title?: string, // 321431/321442 (100.00%)
			type: "video"|"rich",
			url?: string, // 292076/321442 (90.86%)
			version?: "1.0", // 321441/321442 (100.00%)
			width: number,
		}, // 321442/321454 (100.00%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 321454/4162070 (7.72%)
		height?: number, // 321454/4162070 (7.72%)
		scrolling?: boolean, // 321454/4162070 (7.72%)
		width?: number, // 321454/4162070 (7.72%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4157840/4162070 (99.90%)
	subreddit_id?: string, // 4157840/4162070 (99.90%)
	third_party_tracking?: null, // 4230/4162070 (0.10%)
	third_party_tracking_2?: null, // 4230/4162070 (0.10%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}