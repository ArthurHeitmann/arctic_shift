interface RedditPost {
	adserver_click_url?: null, // 4421/4502441 (0.10%)
	adserver_imp_pixel?: null, // 4421/4502441 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4421/4502441 (0.10%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4498020/4502441 (99.90%)
	from_id?: null, // 4498020/4502441 (99.90%)
	from_kind?: null, // 4498020/4502441 (99.90%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4421/4502441 (0.10%)
	id: string,
	imp_pixel?: null, // 4421/4502441 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 22/444616 (0.00%)
		event_id?: string, // 608/444616 (0.14%)
		height?: number, // 22/444616 (0.00%)
		oembed?: {
			author_name?: string, // 341537/443986 (76.93%)
			author_url?: string, // 341567/443986 (76.93%)
			cache_age?: number, // 722/443986 (0.16%)
			description?: string, // 441111/443986 (99.35%)
			height: number,
			html: string,
			mean_alpha?: number, // 5906/443986 (1.33%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 440663/443986 (99.25%)
			thumbnail_url?: string, // 440661/443986 (99.25%)
			thumbnail_width?: number, // 440663/443986 (99.25%)
			title?: string, // 442685/443986 (99.71%)
			type: "video"|"rich",
			url?: string, // 304455/443986 (68.57%)
			version: "1.0",
			width: number,
		}, // 443986/444616 (99.86%)
		type: string,
		width?: number, // 22/444616 (0.00%)
	},
	media_embed: {
		content?: string, // 444616/4502441 (9.87%)
		height?: number, // 444616/4502441 (9.87%)
		scrolling?: boolean, // 444616/4502441 (9.87%)
		width?: number, // 444616/4502441 (9.87%)
	},
	mobile_ad_url?: "", // 4421/4502441 (0.10%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image"|"rich:video", // 185/4502441 (0.00%)
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
	}, // 185/4502441 (0.00%)
	promoted?: boolean, // 4421/4502441 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 608/332586 (0.18%)
		oembed?: {
			author_name?: string, // 329855/331978 (99.36%)
			author_url?: string, // 329855/331978 (99.36%)
			description?: string, // 331559/331978 (99.87%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://wistia.com"|"https://www.youtube.com/",
			thumbnail_height?: number, // 330017/331978 (99.41%)
			thumbnail_url?: string, // 330012/331978 (99.41%)
			thumbnail_width?: number, // 330017/331978 (99.41%)
			title?: string, // 331876/331978 (99.97%)
			type: "video"|"rich",
			url?: string, // 303446/331978 (91.41%)
			version: "1.0",
			width: number,
		}, // 331978/332586 (99.82%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 332586/4502441 (7.39%)
		height?: number, // 332586/4502441 (7.39%)
		scrolling?: boolean, // 332586/4502441 (7.39%)
		width?: number, // 332586/4502441 (7.39%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4498020/4502441 (99.90%)
	subreddit_id?: string, // 4498020/4502441 (99.90%)
	third_party_tracking?: null, // 4421/4502441 (0.10%)
	third_party_tracking_2?: null, // 4421/4502441 (0.10%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}