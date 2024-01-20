interface RedditPost {
	adserver_click_url?: null, // 4586/4984013 (0.09%)
	adserver_imp_pixel?: null, // 4586/4984013 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4586/4984013 (0.09%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4979427/4984013 (99.91%)
	from_id?: null, // 4979427/4984013 (99.91%)
	from_kind?: null, // 4979427/4984013 (99.91%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4586/4984013 (0.09%)
	id: string,
	imp_pixel?: null, // 4586/4984013 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 105/468546 (0.02%)
		oembed?: {
			author_name?: string, // 352209/468441 (75.19%)
			author_url?: string, // 352018/468441 (75.15%)
			cache_age?: number, // 607/468441 (0.13%)
			description?: string, // 457518/468441 (97.67%)
			height: number,
			html: string,
			mean_alpha?: number, // 6491/468441 (1.39%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 462928/468441 (98.82%)
			thumbnail_url?: string, // 463003/468441 (98.84%)
			thumbnail_width?: number, // 462928/468441 (98.82%)
			title?: string, // 467180/468441 (99.73%)
			type: "video"|"rich",
			url?: string, // 324198/468441 (69.21%)
			version: "1.0",
			width: number,
		}, // 468441/468546 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 468546/4984013 (9.40%)
		height?: number, // 468546/4984013 (9.40%)
		scrolling?: boolean, // 468546/4984013 (9.40%)
		width?: number, // 468546/4984013 (9.40%)
	},
	mobile_ad_url?: "", // 4586/4984013 (0.09%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image"|"rich:video", // 409/4984013 (0.01%)
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
	}, // 409/4984013 (0.01%)
	promoted?: boolean, // 4586/4984013 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 105/349819 (0.03%)
		oembed?: {
			author_name?: string, // 346526/349714 (99.09%)
			author_url?: string, // 346526/349714 (99.09%)
			description?: string, // 339619/349714 (97.11%)
			height: number,
			html: string,
			mean_alpha?: number, // 20/349714 (0.01%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare"|"Google Maps"|"Imgur",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"https://soundcloud.com"|"http://vimeo.com"|"https://vimeo.com"|"http://wistia.com"|"http://google.com/maps"|"http://fr.slideshare.net"|"http://imgur.com",
			thumbnail_height?: number, // 345125/349714 (98.69%)
			thumbnail_url?: string, // 345184/349714 (98.70%)
			thumbnail_width?: number, // 345125/349714 (98.69%)
			title?: string, // 349211/349714 (99.86%)
			type: "video"|"rich",
			url?: string, // 321555/349714 (91.95%)
			version: "1.0",
			width: number,
		}, // 349714/349819 (99.97%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 349819/4984013 (7.02%)
		height?: number, // 349819/4984013 (7.02%)
		scrolling?: boolean, // 349819/4984013 (7.02%)
		width?: number, // 349819/4984013 (7.02%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4979427/4984013 (99.91%)
	subreddit_id?: string, // 4979427/4984013 (99.91%)
	third_party_tracking?: null, // 4586/4984013 (0.09%)
	third_party_tracking_2?: null, // 4586/4984013 (0.09%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}