interface RedditPost {
	adserver_click_url?: null, // 5018/5465910 (0.09%)
	adserver_imp_pixel?: null, // 5018/5465910 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 5018/5465910 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 5460892/5465910 (99.91%)
	from_id?: null, // 5460892/5465910 (99.91%)
	from_kind?: null, // 5460892/5465910 (99.91%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 5018/5465910 (0.09%)
	id: string,
	imp_pixel?: null, // 5018/5465910 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 147/519130 (0.03%)
		oembed?: {
			author_name?: string, // 391242/518983 (75.39%)
			author_url?: string, // 391098/518983 (75.36%)
			cache_age?: number, // 636/518983 (0.12%)
			description?: string, // 501212/518983 (96.58%)
			height: number,
			html: string,
			mean_alpha?: number, // 7428/518983 (1.43%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 512701/518983 (98.79%)
			thumbnail_url?: string, // 512812/518983 (98.81%)
			thumbnail_width?: number, // 512701/518983 (98.79%)
			title?: string, // 517457/518983 (99.71%)
			type: "video"|"rich",
			url?: string, // 358652/518983 (69.11%)
			version: "1.0",
			width: number,
		}, // 518983/519130 (99.97%)
		type: string,
	},
	media_embed: {
		content?: string, // 519130/5465910 (9.50%)
		height?: number, // 519130/5465910 (9.50%)
		scrolling?: boolean, // 519130/5465910 (9.50%)
		width?: number, // 519130/5465910 (9.50%)
	},
	mobile_ad_url?: "", // 5018/5465910 (0.09%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"rich:video"|"image"|"video", // 646/5465910 (0.01%)
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
	}, // 646/5465910 (0.01%)
	promoted?: boolean, // 5018/5465910 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 147/387350 (0.04%)
		oembed?: {
			author_name?: string, // 383928/387203 (99.15%)
			author_url?: string, // 383928/387203 (99.15%)
			description?: string, // 370144/387203 (95.59%)
			height: number,
			html: string,
			mean_alpha?: number, // 31/387203 (0.01%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Google Maps"|"Slideshare"|"Streamable",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"https://soundcloud.com"|"http://vimeo.com"|"https://vimeo.com"|"http://wistia.com"|"http://google.com/maps"|"http://www.streamable.com",
			thumbnail_height?: number, // 381852/387203 (98.62%)
			thumbnail_url?: string, // 381924/387203 (98.64%)
			thumbnail_width?: number, // 381852/387203 (98.62%)
			title?: string, // 386273/387203 (99.76%)
			type: "video"|"rich",
			url?: string, // 355829/387203 (91.90%)
			version: "1.0",
			width: number,
		}, // 387203/387350 (99.96%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 387350/5465910 (7.09%)
		height?: number, // 387350/5465910 (7.09%)
		scrolling?: boolean, // 387350/5465910 (7.09%)
		width?: number, // 387350/5465910 (7.09%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 5460892/5465910 (99.91%)
	subreddit_id?: string, // 5460892/5465910 (99.91%)
	third_party_tracking?: null, // 5018/5465910 (0.09%)
	third_party_tracking_2?: null, // 5018/5465910 (0.09%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}