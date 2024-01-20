interface RedditPost {
	adserver_click_url?: null, // 4983/4735396 (0.11%)
	adserver_imp_pixel?: null, // 4983/4735396 (0.11%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4983/4735396 (0.11%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4730413/4735396 (99.89%)
	from_id?: null, // 4730413/4735396 (99.89%)
	from_kind?: null, // 4730413/4735396 (99.89%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4983/4735396 (0.11%)
	id: string,
	imp_pixel?: null, // 4983/4735396 (0.11%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 117/445478 (0.03%)
		oembed?: {
			author_name?: string, // 338809/445361 (76.08%)
			author_url?: string, // 338645/445361 (76.04%)
			cache_age?: number, // 638/445361 (0.14%)
			description?: string, // 443164/445361 (99.51%)
			height: number,
			html: string,
			mean_alpha?: number, // 5807/445361 (1.30%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 442043/445361 (99.25%)
			thumbnail_url?: string, // 442126/445361 (99.27%)
			thumbnail_width?: number, // 442043/445361 (99.25%)
			title?: string, // 444316/445361 (99.77%)
			type: "video"|"rich",
			url?: string, // 310841/445361 (69.80%)
			version?: "1.0", // 445356/445361 (100.00%)
			width: number,
		}, // 445361/445478 (99.97%)
		type: string,
	},
	media_embed: {
		content?: string, // 445478/4735396 (9.41%)
		height?: number, // 445478/4735396 (9.41%)
		scrolling?: boolean, // 445478/4735396 (9.41%)
		width?: number, // 445478/4735396 (9.41%)
	},
	mobile_ad_url?: "", // 4983/4735396 (0.11%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link", // 328/4735396 (0.01%)
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
	}, // 328/4735396 (0.01%)
	promoted?: boolean, // 4983/4735396 (0.11%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 117/336545 (0.03%)
		oembed?: {
			author_name?: string, // 333039/336428 (98.99%)
			author_url?: string, // 333039/336428 (98.99%)
			description?: string, // 334904/336428 (99.55%)
			height: number,
			html: string,
			mean_alpha?: number, // 32/336428 (0.01%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Google Maps"|"Wistia, Inc."|"redditgifts"|"Slideshare"|"Wistia",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"https://soundcloud.com"|"http://vimeo.com"|"https://vimeo.com"|"http://google.com/maps"|"http://wistia.com"|"http://www.redditgifts.com/",
			thumbnail_height?: number, // 333858/336428 (99.24%)
			thumbnail_url?: string, // 333924/336428 (99.26%)
			thumbnail_width?: number, // 333858/336428 (99.24%)
			title?: string, // 335956/336428 (99.86%)
			type: "video"|"rich",
			url?: string, // 308295/336428 (91.64%)
			version?: "1.0", // 336423/336428 (100.00%)
			width: number,
		}, // 336428/336545 (99.97%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 336545/4735396 (7.11%)
		height?: number, // 336545/4735396 (7.11%)
		scrolling?: boolean, // 336545/4735396 (7.11%)
		width?: number, // 336545/4735396 (7.11%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4730413/4735396 (99.89%)
	subreddit_id?: string, // 4730413/4735396 (99.89%)
	third_party_tracking?: null, // 4983/4735396 (0.11%)
	third_party_tracking_2?: null, // 4983/4735396 (0.11%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}