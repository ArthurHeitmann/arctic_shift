interface RedditPost {
	adserver_click_url?: null, // 4578/4115035 (0.11%)
	adserver_imp_pixel?: null, // 4578/4115035 (0.11%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4578/4115035 (0.11%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4110457/4115035 (99.89%)
	from_id?: null, // 4110457/4115035 (99.89%)
	from_kind?: null, // 4110457/4115035 (99.89%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4578/4115035 (0.11%)
	id: string,
	imp_pixel?: null, // 4578/4115035 (0.11%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 27/414649 (0.01%)
		event_id?: "d4oe7yv2yui6houqciytwamw3a"|"3rgnbke2rai6hen7ciytwcxadi"|"bewvtcwmz4i6hctbciytwamw3a", // 3/414649 (0.00%)
		height?: number, // 27/414649 (0.01%)
		oembed?: {
			author_name?: string, // 397484/414619 (95.87%)
			author_url?: string, // 397462/414619 (95.86%)
			cache_age?: number, // 639/414619 (0.15%)
			description?: string, // 412071/414619 (99.39%)
			height: number,
			html: string,
			mean_alpha?: number, // 4665/414619 (1.13%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 410928/414619 (99.11%)
			thumbnail_url?: string, // 410928/414619 (99.11%)
			thumbnail_width?: number, // 410928/414619 (99.11%)
			title?: string, // 413403/414619 (99.71%)
			type: "video"|"rich",
			url?: string, // 283888/414619 (68.47%)
			version: "1.0",
			width: number,
		}, // 414619/414649 (99.99%)
		type: string,
		width?: number, // 27/414649 (0.01%)
	},
	media_embed: {
		content?: string, // 414649/4115035 (10.08%)
		height?: number, // 414649/4115035 (10.08%)
		scrolling?: boolean, // 414649/4115035 (10.08%)
		width?: number, // 414649/4115035 (10.08%)
	},
	mobile_ad_url?: "", // 4578/4115035 (0.11%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image", // 83/4115035 (0.00%)
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
	}, // 83/4115035 (0.00%)
	promoted?: boolean, // 4578/4115035 (0.11%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "d4oe7yv2yui6houqciytwamw3a", // 1/311118 (0.00%)
		oembed?: {
			author_name?: string, // 309249/311117 (99.40%)
			author_url?: string, // 309249/311117 (99.40%)
			description?: string, // 310663/311117 (99.85%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://wistia.com",
			thumbnail_height?: number, // 308894/311117 (99.29%)
			thumbnail_url?: string, // 308891/311117 (99.28%)
			thumbnail_width?: number, // 308894/311117 (99.29%)
			title?: string, // 311104/311117 (100.00%)
			type: "video"|"rich",
			url?: string, // 282244/311117 (90.72%)
			version: "1.0",
			width: number,
		}, // 311117/311118 (100.00%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 311118/4115035 (7.56%)
		height?: number, // 311118/4115035 (7.56%)
		scrolling?: boolean, // 311118/4115035 (7.56%)
		width?: number, // 311118/4115035 (7.56%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4110457/4115035 (99.89%)
	subreddit_id?: string, // 4110457/4115035 (99.89%)
	third_party_tracking?: null, // 4578/4115035 (0.11%)
	third_party_tracking_2?: null, // 4578/4115035 (0.11%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}