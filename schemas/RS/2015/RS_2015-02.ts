interface RedditPost {
	adserver_click_url?: null, // 4319/5069813 (0.09%)
	adserver_imp_pixel?: null, // 4319/5069813 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4319/5069813 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 5065494/5069813 (99.91%)
	from_id?: null, // 5065494/5069813 (99.91%)
	from_kind?: null, // 5065494/5069813 (99.91%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4319/5069813 (0.09%)
	id: string,
	imp_pixel?: null, // 4319/5069813 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 143/505328 (0.03%)
		oembed?: {
			author_name?: string, // 371549/505185 (73.55%)
			author_url?: string, // 371353/505185 (73.51%)
			cache_age?: number, // 288/505185 (0.06%)
			description?: string, // 444978/505185 (88.08%)
			height: number,
			html: string,
			mean_alpha?: number, // 7005/505185 (1.39%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 495231/505185 (98.03%)
			thumbnail_url?: string, // 495362/505185 (98.06%)
			thumbnail_width?: number, // 495231/505185 (98.03%)
			title?: string, // 503499/505185 (99.67%)
			type: "video"|"rich",
			url?: string, // 341287/505185 (67.56%)
			version: "1.0",
			width: number,
		}, // 505185/505328 (99.97%)
		type: string,
	},
	media_embed: {
		content?: string, // 505328/5069813 (9.97%)
		height?: number, // 505328/5069813 (9.97%)
		scrolling?: boolean, // 505328/5069813 (9.97%)
		width?: number, // 505328/5069813 (9.97%)
	},
	mobile_ad_url?: "", // 4319/5069813 (0.09%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"rich:video"|"image", // 775/5069813 (0.02%)
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
	}, // 775/5069813 (0.02%)
	promoted?: boolean, // 4319/5069813 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 143/368154 (0.04%)
		oembed?: {
			author_name?: string, // 364723/368011 (99.11%)
			author_url?: string, // 364728/368011 (99.11%)
			description?: string, // 349109/368011 (94.86%)
			height: number,
			html: string,
			mean_alpha?: number, // 2/368011 (0.00%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Wistia, Inc."|"Imgur",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"https://vimeo.com"|"https://soundcloud.com"|"http://vimeo.com"|"http://wistia.com"|"http://imgur.com",
			thumbnail_height?: number, // 360231/368011 (97.89%)
			thumbnail_url?: string, // 360322/368011 (97.91%)
			thumbnail_width?: number, // 360231/368011 (97.89%)
			title?: string, // 367202/368011 (99.78%)
			type: "video"|"rich",
			url?: string, // 338436/368011 (91.96%)
			version: "1.0",
			width: number,
		}, // 368011/368154 (99.96%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 368154/5069813 (7.26%)
		height?: number, // 368154/5069813 (7.26%)
		scrolling?: boolean, // 368154/5069813 (7.26%)
		width?: number, // 368154/5069813 (7.26%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 5065494/5069813 (99.91%)
	subreddit_id?: string, // 5065494/5069813 (99.91%)
	third_party_tracking?: null, // 4319/5069813 (0.09%)
	third_party_tracking_2?: null, // 4319/5069813 (0.09%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}