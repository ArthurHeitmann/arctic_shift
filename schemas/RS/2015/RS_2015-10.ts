interface RedditPost {
	adserver_click_url?: null, // 5429/6310673 (0.09%)
	adserver_imp_pixel?: null, // 5429/6310673 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 5429/6310673 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 6305244/6310673 (99.91%)
	from_id?: null, // 6305244/6310673 (99.91%)
	from_kind?: null, // 6305244/6310673 (99.91%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 5429/6310673 (0.09%)
	id: string,
	imp_pixel?: null, // 5429/6310673 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 141/675211 (0.02%)
		oembed?: {
			author_name?: string, // 524596/675070 (77.71%)
			author_url?: string, // 523578/675070 (77.56%)
			cache_age?: number, // 2077/675070 (0.31%)
			description?: string, // 659121/675070 (97.64%)
			height: number,
			html: string,
			mean_alpha?: number, // 1969/675070 (0.29%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 674982/675070 (99.99%)
			thumbnail_url?: string, // 675066/675070 (100.00%)
			thumbnail_width?: number, // 674982/675070 (99.99%)
			title?: string, // 674970/675070 (99.99%)
			type: "video"|"rich",
			url?: string, // 488754/675070 (72.40%)
			version?: "1.0", // 675066/675070 (100.00%)
			width: number,
		}, // 675070/675211 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 675211/6310673 (10.70%)
		height?: number, // 675211/6310673 (10.70%)
		scrolling?: boolean, // 675211/6310673 (10.70%)
		width?: number, // 675211/6310673 (10.70%)
	},
	mobile_ad_url?: string, // 5429/6310673 (0.09%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 1954187/6310673 (30.97%)
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
	}, // 1954187/6310673 (30.97%)
	promoted?: boolean, // 5429/6310673 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 141/666558 (0.02%)
		oembed?: {
			author_name?: string, // 519323/666417 (77.93%)
			author_url?: string, // 518434/666417 (77.79%)
			cache_age?: number, // 2007/666417 (0.30%)
			description?: string, // 650571/666417 (97.62%)
			height: number,
			html: string,
			mean_alpha?: number, // 1857/666417 (0.28%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 666329/666417 (99.99%)
			thumbnail_url?: string, // 666413/666417 (100.00%)
			thumbnail_width?: number, // 666329/666417 (99.99%)
			title?: string, // 666391/666417 (100.00%)
			type: "video"|"rich",
			url?: string, // 488541/666417 (73.31%)
			version?: "1.0", // 666413/666417 (100.00%)
			width: number,
		}, // 666417/666558 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 666558/6310673 (10.56%)
		height?: number, // 666558/6310673 (10.56%)
		scrolling?: boolean, // 666558/6310673 (10.56%)
		width?: number, // 666558/6310673 (10.56%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 6305244/6310673 (99.91%)
	subreddit_id?: string, // 6305244/6310673 (99.91%)
	third_party_tracking?: null, // 5429/6310673 (0.09%)
	third_party_tracking_2?: null, // 5429/6310673 (0.09%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}