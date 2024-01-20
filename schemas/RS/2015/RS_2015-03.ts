interface RedditPost {
	adserver_click_url?: null, // 4340/5611145 (0.08%)
	adserver_imp_pixel?: null, // 4340/5611145 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4340/5611145 (0.08%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 5606805/5611145 (99.92%)
	from_id?: null, // 5606805/5611145 (99.92%)
	from_kind?: null, // 5606805/5611145 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4340/5611145 (0.08%)
	id: string,
	imp_pixel?: null, // 4340/5611145 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 57/526822 (0.01%)
		oembed?: {
			author_name?: string, // 368204/526765 (69.90%)
			author_url?: string, // 368005/526765 (69.86%)
			cache_age?: number, // 1609/526765 (0.31%)
			description?: string, // 440950/526765 (83.71%)
			height: number,
			html: string,
			mean_alpha?: number, // 7422/526765 (1.41%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 521525/526765 (99.01%)
			thumbnail_url?: string, // 521698/526765 (99.04%)
			thumbnail_width?: number, // 521525/526765 (99.01%)
			title?: string, // 525307/526765 (99.72%)
			type: "video"|"rich",
			url?: string, // 335156/526765 (63.63%)
			version?: "1.0", // 526764/526765 (100.00%)
			width: number,
		}, // 526765/526822 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 526822/5611145 (9.39%)
		height?: number, // 526822/5611145 (9.39%)
		scrolling?: boolean, // 526822/5611145 (9.39%)
		width?: number, // 526822/5611145 (9.39%)
	},
	mobile_ad_url?: string, // 4340/5611145 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self"|"video", // 761840/5611145 (13.58%)
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
	}, // 761840/5611145 (13.58%)
	promoted?: boolean, // 4340/5611145 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 57/363050 (0.02%)
		oembed?: {
			author_name?: string, // 360414/362993 (99.29%)
			author_url?: string, // 360417/362993 (99.29%)
			description?: string, // 333768/362993 (91.95%)
			height: number,
			html: string,
			mean_alpha?: number, // 4/362993 (0.00%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Wistia, Inc."|"Imgur"|"Slideshare"|"iframe embed",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"https://vimeo.com"|"http://wistia.com"|"https://soundcloud.com"|"https://www.youtube.com/"|"http://imgur.com"|"https://www.reddit.com/r/thebutton",
			thumbnail_height?: number, // 358649/362993 (98.80%)
			thumbnail_url?: string, // 358768/362993 (98.84%)
			thumbnail_width?: number, // 358649/362993 (98.80%)
			title?: string, // 361935/362993 (99.71%)
			type: "video"|"rich",
			url?: string, // 331558/362993 (91.34%)
			version?: "1.0", // 362992/362993 (100.00%)
			width: number,
		}, // 362993/363050 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 363050/5611145 (6.47%)
		height?: number, // 363050/5611145 (6.47%)
		scrolling?: boolean, // 363050/5611145 (6.47%)
		width?: number, // 363050/5611145 (6.47%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 5606805/5611145 (99.92%)
	subreddit_id?: string, // 5606805/5611145 (99.92%)
	third_party_tracking?: null, // 4340/5611145 (0.08%)
	third_party_tracking_2?: null, // 4340/5611145 (0.08%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}