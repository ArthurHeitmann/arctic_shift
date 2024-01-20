interface RedditPost {
	adserver_click_url?: null, // 4604/6176407 (0.07%)
	adserver_imp_pixel?: null, // 4604/6176407 (0.07%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4604/6176407 (0.07%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 6171803/6176407 (99.93%)
	from_id?: null, // 6171803/6176407 (99.93%)
	from_kind?: null, // 6171803/6176407 (99.93%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4604/6176407 (0.07%)
	id: string,
	imp_pixel?: null, // 4604/6176407 (0.07%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 88/592694 (0.01%)
		oembed?: {
			author_name?: string, // 439177/592606 (74.11%)
			author_url?: string, // 438382/592606 (73.98%)
			cache_age?: number, // 1908/592606 (0.32%)
			description?: string, // 563285/592606 (95.05%)
			height: number,
			html: string,
			mean_alpha?: number, // 4504/592606 (0.76%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 592500/592606 (99.98%)
			thumbnail_url?: string, // 592605/592606 (100.00%)
			thumbnail_width?: number, // 592500/592606 (99.98%)
			title?: string, // 592576/592606 (99.99%)
			type: "video"|"rich",
			url?: string, // 403875/592606 (68.15%)
			version?: "1.0", // 592605/592606 (100.00%)
			width: number,
		}, // 592606/592694 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 592694/6176407 (9.60%)
		height?: number, // 592694/6176407 (9.60%)
		scrolling?: boolean, // 592694/6176407 (9.60%)
		width?: number, // 592694/6176407 (9.60%)
	},
	mobile_ad_url?: string, // 4604/6176407 (0.07%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 1935980/6176407 (31.34%)
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
	}, // 1935980/6176407 (31.34%)
	promoted?: boolean, // 4604/6176407 (0.07%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 88/584463 (0.02%)
		oembed?: {
			author_name?: string, // 434177/584375 (74.30%)
			author_url?: string, // 433419/584375 (74.17%)
			cache_age?: number, // 1861/584375 (0.32%)
			description?: string, // 555172/584375 (95.00%)
			height: number,
			html: string,
			mean_alpha?: number, // 4421/584375 (0.76%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 584269/584375 (99.98%)
			thumbnail_url?: string, // 584374/584375 (100.00%)
			thumbnail_width?: number, // 584269/584375 (99.98%)
			title?: string, // 584365/584375 (100.00%)
			type: "video"|"rich",
			url?: string, // 403688/584375 (69.08%)
			version?: "1.0", // 584374/584375 (100.00%)
			width: number,
		}, // 584375/584463 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 584463/6176407 (9.46%)
		height?: number, // 584463/6176407 (9.46%)
		scrolling?: boolean, // 584463/6176407 (9.46%)
		width?: number, // 584463/6176407 (9.46%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 6171803/6176407 (99.93%)
	subreddit_id?: string, // 6171803/6176407 (99.93%)
	third_party_tracking?: null, // 4604/6176407 (0.07%)
	third_party_tracking_2?: null, // 4604/6176407 (0.07%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}