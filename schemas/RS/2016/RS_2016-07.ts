interface RedditPost {
	adserver_click_url?: null, // 6688/7369835 (0.09%)
	adserver_imp_pixel?: null, // 6688/7369835 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 6688/7369835 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 7363147/7369835 (99.91%)
	from_id?: null, // 7363147/7369835 (99.91%)
	from_kind?: null, // 7363147/7369835 (99.91%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 6688/7369835 (0.09%)
	id: string,
	imp_pixel?: null, // 6688/7369835 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 230/831199 (0.03%)
		oembed?: {
			author_name?: string, // 609123/830969 (73.30%)
			author_url?: string, // 608171/830969 (73.19%)
			cache_age?: number, // 1162/830969 (0.14%)
			description?: string, // 329549/830969 (39.66%)
			height: number,
			html: string,
			mean_alpha?: number, // 4643/830969 (0.56%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 830821/830969 (99.98%)
			thumbnail_url?: string, // 830965/830969 (100.00%)
			thumbnail_width?: number, // 830821/830969 (99.98%)
			title?: string, // 830629/830969 (99.96%)
			type: "video"|"rich",
			url?: string, // 67344/830969 (8.10%)
			version?: "1.0", // 830965/830969 (100.00%)
			width: number,
		}, // 830969/831199 (99.97%)
		type: string,
	},
	media_embed: {
		content?: string, // 831199/7369835 (11.28%)
		height?: number, // 831199/7369835 (11.28%)
		scrolling?: boolean, // 831199/7369835 (11.28%)
		width?: number, // 831199/7369835 (11.28%)
	},
	mobile_ad_url?: string, // 6688/7369835 (0.09%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2434834/7369835 (33.04%)
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
				gif?: {
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
				}, // 35436/2434834 (1.46%)
				mp4?: {
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
				}, // 35436/2434834 (1.46%)
			},
		}[],
	}, // 2434834/7369835 (33.04%)
	promoted?: boolean, // 6688/7369835 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 230/816671 (0.03%)
		oembed?: {
			author_name?: string, // 600390/816441 (73.54%)
			author_url?: string, // 600114/816441 (73.50%)
			cache_age?: number, // 1135/816441 (0.14%)
			description?: string, // 315316/816441 (38.62%)
			height: number,
			html: string,
			mean_alpha?: number, // 1447/816441 (0.18%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 816293/816441 (99.98%)
			thumbnail_url?: string, // 816437/816441 (100.00%)
			thumbnail_width?: number, // 816293/816441 (99.98%)
			title?: string, // 816364/816441 (99.99%)
			type: "video"|"rich",
			url?: string, // 66459/816441 (8.14%)
			version?: "1.0", // 816437/816441 (100.00%)
			width: number,
		}, // 816441/816671 (99.97%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 816671/7369835 (11.08%)
		height?: number, // 816671/7369835 (11.08%)
		scrolling?: boolean, // 816671/7369835 (11.08%)
		width?: number, // 816671/7369835 (11.08%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 7363147/7369835 (99.91%)
	subreddit_id?: string, // 7363147/7369835 (99.91%)
	third_party_tracking?: null|string, // 6688/7369835 (0.09%)
	third_party_tracking_2?: null, // 6688/7369835 (0.09%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}