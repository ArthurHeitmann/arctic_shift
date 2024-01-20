interface RedditPost {
	adserver_click_url?: null, // 4444/5945498 (0.07%)
	adserver_imp_pixel?: null, // 4444/5945498 (0.07%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4444/5945498 (0.07%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 5941054/5945498 (99.93%)
	from_id?: null, // 5941054/5945498 (99.93%)
	from_kind?: null, // 5941054/5945498 (99.93%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4444/5945498 (0.07%)
	id: string,
	imp_pixel?: null, // 4444/5945498 (0.07%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 164/591248 (0.03%)
		oembed?: {
			author_name?: string, // 408081/591084 (69.04%)
			author_url?: string, // 407523/591084 (68.95%)
			cache_age?: number, // 1710/591084 (0.29%)
			description?: string, // 543054/591084 (91.87%)
			height: number,
			html: string,
			mean_alpha?: number, // 8443/591084 (1.43%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 590978/591084 (99.98%)
			thumbnail_url: string,
			thumbnail_width?: number, // 590978/591084 (99.98%)
			title?: string, // 591074/591084 (100.00%)
			type: "video"|"rich",
			url?: string, // 377480/591084 (63.86%)
			version: "1.0",
			width: number,
		}, // 591084/591248 (99.97%)
		type: string,
	},
	media_embed: {
		content?: string, // 591248/5945498 (9.94%)
		height?: number, // 591248/5945498 (9.94%)
		scrolling?: boolean, // 591248/5945498 (9.94%)
		width?: number, // 591248/5945498 (9.94%)
	},
	mobile_ad_url?: string, // 4444/5945498 (0.07%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 1815063/5945498 (30.53%)
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
	}, // 1815063/5945498 (30.53%)
	promoted?: boolean, // 4444/5945498 (0.07%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 164/580269 (0.03%)
		oembed?: {
			author_name?: string, // 404889/580105 (69.80%)
			author_url?: string, // 404418/580105 (69.71%)
			cache_age?: number, // 1633/580105 (0.28%)
			description?: string, // 532184/580105 (91.74%)
			height: number,
			html: string,
			mean_alpha?: number, // 6632/580105 (1.14%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 579999/580105 (99.98%)
			thumbnail_url: string,
			thumbnail_width?: number, // 579999/580105 (99.98%)
			title?: string, // 580099/580105 (100.00%)
			type: "video"|"rich",
			url?: string, // 377427/580105 (65.06%)
			version: "1.0",
			width: number,
		}, // 580105/580269 (99.97%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 580269/5945498 (9.76%)
		height?: number, // 580269/5945498 (9.76%)
		scrolling?: boolean, // 580269/5945498 (9.76%)
		width?: number, // 580269/5945498 (9.76%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 5941054/5945498 (99.93%)
	subreddit_id?: string, // 5941054/5945498 (99.93%)
	third_party_tracking?: null|string, // 4444/5945498 (0.07%)
	third_party_tracking_2?: null, // 4444/5945498 (0.07%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}