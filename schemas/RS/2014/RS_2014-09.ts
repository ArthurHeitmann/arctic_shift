interface RedditPost {
	adserver_click_url?: null, // 4633/4567136 (0.10%)
	adserver_imp_pixel?: null, // 4633/4567136 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4633/4567136 (0.10%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4562503/4567136 (99.90%)
	from_id?: null, // 4562503/4567136 (99.90%)
	from_kind?: null, // 4562503/4567136 (99.90%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4633/4567136 (0.10%)
	id: string,
	imp_pixel?: null, // 4633/4567136 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 143/425306 (0.03%)
		oembed?: {
			author_name?: string, // 327187/425163 (76.96%)
			author_url?: string, // 327086/425163 (76.93%)
			cache_age?: number, // 655/425163 (0.15%)
			description?: string, // 422064/425163 (99.27%)
			height: number,
			html: string,
			mean_alpha?: number, // 5478/425163 (1.29%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 423612/425163 (99.64%)
			thumbnail_url?: string, // 423626/425163 (99.64%)
			thumbnail_width?: number, // 423612/425163 (99.64%)
			title?: string, // 423834/425163 (99.69%)
			type: "video"|"rich",
			url?: string, // 297813/425163 (70.05%)
			version: "1.0",
			width: number,
		}, // 425163/425306 (99.97%)
		type: string,
	},
	media_embed: {
		content?: string, // 425306/4567136 (9.31%)
		height?: number, // 425306/4567136 (9.31%)
		scrolling?: boolean, // 425306/4567136 (9.31%)
		width?: number, // 425306/4567136 (9.31%)
	},
	mobile_ad_url?: "", // 4633/4567136 (0.10%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image", // 170/4567136 (0.00%)
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
	}, // 170/4567136 (0.00%)
	promoted?: boolean, // 4633/4567136 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 143/324374 (0.04%)
		oembed?: {
			author_name?: string, // 322117/324231 (99.35%)
			author_url?: string, // 322117/324231 (99.35%)
			description?: string, // 323826/324231 (99.88%)
			height: number,
			html: string,
			mean_alpha?: number, // 2/324231 (0.00%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare"|"Imgur",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"https://soundcloud.com"|"http://wistia.com"|"http://imgur.com",
			thumbnail_height?: number, // 324042/324231 (99.94%)
			thumbnail_url?: string, // 324054/324231 (99.95%)
			thumbnail_width?: number, // 324042/324231 (99.94%)
			title?: string, // 324101/324231 (99.96%)
			type: "video"|"rich",
			url?: string, // 296749/324231 (91.52%)
			version: "1.0",
			width: number,
		}, // 324231/324374 (99.96%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 324374/4567136 (7.10%)
		height?: number, // 324374/4567136 (7.10%)
		scrolling?: boolean, // 324374/4567136 (7.10%)
		width?: number, // 324374/4567136 (7.10%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4562503/4567136 (99.90%)
	subreddit_id?: string, // 4562503/4567136 (99.90%)
	third_party_tracking?: null, // 4633/4567136 (0.10%)
	third_party_tracking_2?: null, // 4633/4567136 (0.10%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}