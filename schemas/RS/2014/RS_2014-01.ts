interface RedditPost {
	adserver_click_url?: null, // 2915/4145541 (0.07%)
	adserver_imp_pixel?: null, // 2915/4145541 (0.07%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 2915/4145541 (0.07%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4142626/4145541 (99.93%)
	from_id?: null, // 4142626/4145541 (99.93%)
	from_kind?: null, // 4142626/4145541 (99.93%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 2915/4145541 (0.07%)
	id: string,
	imp_pixel?: null, // 2915/4145541 (0.07%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 42/419371 (0.01%)
		height?: number, // 42/419371 (0.01%)
		oembed?: {
			author_name?: string, // 314207/419329 (74.93%)
			author_url?: string, // 314251/419329 (74.94%)
			cache_age?: number, // 675/419329 (0.16%)
			description?: string, // 416938/419329 (99.43%)
			height: number,
			html: string,
			mean_alpha?: number, // 4711/419329 (1.12%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 415498/419329 (99.09%)
			thumbnail_url?: string, // 415498/419329 (99.09%)
			thumbnail_width?: number, // 415498/419329 (99.09%)
			title?: string, // 418168/419329 (99.72%)
			type: "video"|"rich",
			url?: string, // 280423/419329 (66.87%)
			version: "1.0",
			width: number,
		}, // 419329/419371 (99.99%)
		type: string,
		width?: number, // 42/419371 (0.01%)
	},
	media_embed: {
		content?: string, // 419371/4145541 (10.12%)
		height?: number, // 419371/4145541 (10.12%)
		scrolling?: boolean, // 419371/4145541 (10.12%)
		width?: number, // 419371/4145541 (10.12%)
	},
	mobile_ad_url?: "", // 2915/4145541 (0.07%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image"|"rich:video", // 84/4145541 (0.00%)
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
	}, // 84/4145541 (0.00%)
	promoted?: boolean, // 2915/4145541 (0.07%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 306038/308242 (99.28%)
			author_url?: string, // 306038/308242 (99.28%)
			description?: string, // 307824/308242 (99.86%)
			height: number,
			html: string,
			mean_alpha?: number, // 1/308242 (0.00%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare"|"Imgur"|"Wistia",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://wistia.com"|"http://imgur.com"|"https://www.youtube.com/",
			thumbnail_height?: number, // 308205/308242 (99.99%)
			thumbnail_url?: string, // 308205/308242 (99.99%)
			thumbnail_width?: number, // 308205/308242 (99.99%)
			title?: string, // 308221/308242 (99.99%)
			type: "video"|"rich",
			url?: string, // 278558/308242 (90.37%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string, // 308242/4145541 (7.44%)
		height?: number, // 308242/4145541 (7.44%)
		scrolling?: boolean, // 308242/4145541 (7.44%)
		width?: number, // 308242/4145541 (7.44%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4142626/4145541 (99.93%)
	subreddit_id?: string, // 4142626/4145541 (99.93%)
	third_party_tracking?: null, // 2915/4145541 (0.07%)
	third_party_tracking_2?: null, // 2915/4145541 (0.07%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}