interface RedditPost {
	adserver_click_url?: null, // 4426/5948530 (0.07%)
	adserver_imp_pixel?: null, // 4426/5948530 (0.07%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4426/5948530 (0.07%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 5944104/5948530 (99.93%)
	from_id?: null, // 5944104/5948530 (99.93%)
	from_kind?: null, // 5944104/5948530 (99.93%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4426/5948530 (0.07%)
	id: string,
	imp_pixel?: null, // 4426/5948530 (0.07%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 104/585909 (0.02%)
		oembed?: {
			author_name?: string, // 411371/585805 (70.22%)
			author_url?: string, // 410884/585805 (70.14%)
			cache_age?: number, // 1629/585805 (0.28%)
			description?: string, // 539464/585805 (92.09%)
			height: number,
			html: string,
			mean_alpha?: number, // 8518/585805 (1.45%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 585728/585805 (99.99%)
			thumbnail_url: string,
			thumbnail_width?: number, // 585728/585805 (99.99%)
			title?: string, // 585786/585805 (100.00%)
			type: "video"|"rich",
			url?: string, // 380351/585805 (64.93%)
			version: "1.0",
			width: number,
		}, // 585805/585909 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 585909/5948530 (9.85%)
		height?: number, // 585909/5948530 (9.85%)
		scrolling?: boolean, // 585909/5948530 (9.85%)
		width?: number, // 585909/5948530 (9.85%)
	},
	mobile_ad_url?: string, // 4426/5948530 (0.07%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 1786047/5948530 (30.03%)
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
	}, // 1786047/5948530 (30.03%)
	promoted?: boolean, // 4426/5948530 (0.07%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 104/443919 (0.02%)
		oembed?: {
			author_name?: string, // 406011/443815 (91.48%)
			author_url?: string, // 405948/443815 (91.47%)
			cache_age?: number, // 1460/443815 (0.33%)
			description?: string, // 431341/443815 (97.19%)
			height: number,
			html: string,
			mean_alpha?: number, // 1281/443815 (0.29%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 443766/443815 (99.99%)
			thumbnail_url: string,
			thumbnail_width?: number, // 443766/443815 (99.99%)
			title?: string, // 443805/443815 (100.00%)
			type: "video"|"rich",
			url?: string, // 377245/443815 (85.00%)
			version: "1.0",
			width: number,
		}, // 443815/443919 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 443919/5948530 (7.46%)
		height?: number, // 443919/5948530 (7.46%)
		scrolling?: boolean, // 443919/5948530 (7.46%)
		width?: number, // 443919/5948530 (7.46%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 5944104/5948530 (99.93%)
	subreddit_id?: string, // 5944104/5948530 (99.93%)
	third_party_tracking?: null|string, // 4426/5948530 (0.07%)
	third_party_tracking_2?: null, // 4426/5948530 (0.07%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}