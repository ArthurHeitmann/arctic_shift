interface RedditPost {
	adserver_click_url?: null, // 6932/6922510 (0.10%)
	adserver_imp_pixel?: null, // 6932/6922510 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 6932/6922510 (0.10%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 6915578/6922510 (99.90%)
	from_id?: null, // 6915578/6922510 (99.90%)
	from_kind?: null, // 6915578/6922510 (99.90%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 6932/6922510 (0.10%)
	id: string,
	imp_pixel?: null, // 6932/6922510 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 265/825940 (0.03%)
		oembed?: {
			author_name?: string, // 609629/825675 (73.83%)
			author_url?: string, // 608781/825675 (73.73%)
			cache_age?: number, // 1333/825675 (0.16%)
			description?: string, // 318061/825675 (38.52%)
			height: number,
			html: string,
			mean_alpha?: number, // 3048/825675 (0.37%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 825199/825675 (99.94%)
			thumbnail_url: string,
			thumbnail_width?: number, // 825199/825675 (99.94%)
			title?: string, // 825412/825675 (99.97%)
			type: "video"|"rich",
			url?: string, // 63282/825675 (7.66%)
			version: "1.0",
			width: number,
		}, // 825675/825940 (99.97%)
		type: string,
	},
	media_embed: {
		content?: string, // 825940/6922510 (11.93%)
		height?: number, // 825940/6922510 (11.93%)
		scrolling?: boolean, // 825940/6922510 (11.93%)
		width?: number, // 825940/6922510 (11.93%)
	},
	mobile_ad_url?: string, // 6932/6922510 (0.10%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2275692/6922510 (32.87%)
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
	}, // 2275692/6922510 (32.87%)
	promoted?: boolean, // 6932/6922510 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 265/808428 (0.03%)
		oembed?: {
			author_name?: string, // 597537/808163 (73.94%)
			author_url?: string, // 597292/808163 (73.91%)
			cache_age?: number, // 1284/808163 (0.16%)
			description?: string, // 300824/808163 (37.22%)
			height: number,
			html: string,
			mean_alpha?: number, // 615/808163 (0.08%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 807687/808163 (99.94%)
			thumbnail_url?: string, // 808162/808163 (100.00%)
			thumbnail_width?: number, // 807687/808163 (99.94%)
			title?: string, // 808103/808163 (99.99%)
			type: "video"|"rich",
			url?: string, // 62105/808163 (7.68%)
			version: "1.0",
			width: number,
		}, // 808163/808428 (99.97%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 808428/6922510 (11.68%)
		height?: number, // 808428/6922510 (11.68%)
		scrolling?: boolean, // 808428/6922510 (11.68%)
		width?: number, // 808428/6922510 (11.68%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 6915578/6922510 (99.90%)
	subreddit_id?: string, // 6915578/6922510 (99.90%)
	third_party_tracking?: null|string, // 6932/6922510 (0.10%)
	third_party_tracking_2?: null|"http://dhunten.com", // 6932/6922510 (0.10%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}