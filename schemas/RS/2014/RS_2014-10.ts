interface RedditPost {
	adserver_click_url?: null, // 4979/4831580 (0.10%)
	adserver_imp_pixel?: null, // 4979/4831580 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4979/4831580 (0.10%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4826601/4831580 (99.90%)
	from_id?: null, // 4826601/4831580 (99.90%)
	from_kind?: null, // 4826601/4831580 (99.90%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4979/4831580 (0.10%)
	id: string,
	imp_pixel?: null, // 4979/4831580 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 101/452250 (0.02%)
		oembed?: {
			author_name?: string, // 344804/452149 (76.26%)
			author_url?: string, // 344602/452149 (76.21%)
			cache_age?: number, // 536/452149 (0.12%)
			description?: string, // 449468/452149 (99.41%)
			height: number,
			html: string,
			mean_alpha?: number, // 5415/452149 (1.20%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 450308/452149 (99.59%)
			thumbnail_url?: string, // 450367/452149 (99.61%)
			thumbnail_width?: number, // 450308/452149 (99.59%)
			title?: string, // 450912/452149 (99.73%)
			type: "video"|"rich",
			url?: string, // 315085/452149 (69.69%)
			version: "1.0",
			width: number,
		}, // 452149/452250 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 452250/4831580 (9.36%)
		height?: number, // 452250/4831580 (9.36%)
		scrolling?: boolean, // 452250/4831580 (9.36%)
		width?: number, // 452250/4831580 (9.36%)
	},
	mobile_ad_url?: "", // 4979/4831580 (0.10%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image"|"rich:video", // 281/4831580 (0.01%)
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
	}, // 281/4831580 (0.01%)
	promoted?: boolean, // 4979/4831580 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 101/341998 (0.03%)
		oembed?: {
			author_name?: string, // 339068/341897 (99.17%)
			author_url?: string, // 339068/341897 (99.17%)
			description?: string, // 340986/341897 (99.73%)
			height: number,
			html: string,
			mean_alpha?: number, // 3/341897 (0.00%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Imgur"|"Slideshare"|"Facebook",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"https://soundcloud.com"|"http://vimeo.com"|"https://vimeo.com"|"http://wistia.com"|"https://www.youtube.com/"|"http://imgur.com"|"http://www.facebook.com",
			thumbnail_height?: number, // 341218/341897 (99.80%)
			thumbnail_url?: string, // 341268/341897 (99.82%)
			thumbnail_width?: number, // 341218/341897 (99.80%)
			title?: string, // 341660/341897 (99.93%)
			type: "video"|"rich",
			url?: string, // 312806/341897 (91.49%)
			version: "1.0",
			width: number,
		}, // 341897/341998 (99.97%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 341998/4831580 (7.08%)
		height?: number, // 341998/4831580 (7.08%)
		scrolling?: boolean, // 341998/4831580 (7.08%)
		width?: number, // 341998/4831580 (7.08%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4826601/4831580 (99.90%)
	subreddit_id?: string, // 4826601/4831580 (99.90%)
	third_party_tracking?: null, // 4979/4831580 (0.10%)
	third_party_tracking_2?: null, // 4979/4831580 (0.10%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}