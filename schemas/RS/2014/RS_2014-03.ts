interface RedditPost {
	adserver_click_url?: null, // 3614/4209109 (0.09%)
	adserver_imp_pixel?: null, // 3614/4209109 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 3614/4209109 (0.09%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4205495/4209109 (99.91%)
	from_id?: null, // 4205495/4209109 (99.91%)
	from_kind?: null, // 4205495/4209109 (99.91%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 3614/4209109 (0.09%)
	id: string,
	imp_pixel?: null, // 3614/4209109 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 34/423062 (0.01%)
		event_id?: "3rgnbke2rai6hen7ciytwcxadi"|"nawsz3vn7ui6hdsgciytwcxadi"|"kynwvlvdlmi6hgctciytwamw3a"|"3vk7bgfttmi6hcogciytwcxadi"|"sw7bubeycai6hey4ciytwamw3a"|"m5n42gvbpyi6hdisciytwamw3a", // 21/423062 (0.00%)
		height?: number, // 34/423062 (0.01%)
		oembed?: {
			author_name?: string, // 357525/423007 (84.52%)
			author_url?: string, // 357518/423007 (84.52%)
			cache_age?: number, // 667/423007 (0.16%)
			description?: string, // 421132/423007 (99.56%)
			height: number,
			html: string,
			mean_alpha?: number, // 4606/423007 (1.09%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 418524/423007 (98.94%)
			thumbnail_url?: string, // 418525/423007 (98.94%)
			thumbnail_width?: number, // 418524/423007 (98.94%)
			title?: string, // 421924/423007 (99.74%)
			type: "video"|"rich",
			url?: string, // 286987/423007 (67.84%)
			version: "1.0",
			width: number,
		}, // 423007/423062 (99.99%)
		type: string,
		width?: number, // 34/423062 (0.01%)
	},
	media_embed: {
		content?: string, // 423062/4209109 (10.05%)
		height?: number, // 423062/4209109 (10.05%)
		scrolling?: boolean, // 423062/4209109 (10.05%)
		width?: number, // 423062/4209109 (10.05%)
	},
	mobile_ad_url?: "", // 3614/4209109 (0.09%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"rich:video", // 71/4209109 (0.00%)
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
	}, // 71/4209109 (0.00%)
	promoted?: boolean, // 3614/4209109 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "3rgnbke2rai6hen7ciytwcxadi"|"nawsz3vn7ui6hdsgciytwcxadi"|"kynwvlvdlmi6hgctciytwamw3a"|"3vk7bgfttmi6hcogciytwcxadi"|"sw7bubeycai6hey4ciytwamw3a"|"m5n42gvbpyi6hdisciytwamw3a", // 21/316728 (0.01%)
		oembed?: {
			author_name?: string, // 314355/316707 (99.26%)
			author_url?: string, // 314355/316707 (99.26%)
			description?: string, // 316041/316707 (99.79%)
			height: number,
			html: string,
			mean_alpha?: number, // 1/316707 (0.00%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Wistia, Inc."|"Slideshare",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://wistia.com"|"https://www.youtube.com/",
			thumbnail_height?: number, // 314575/316707 (99.33%)
			thumbnail_url?: string, // 314576/316707 (99.33%)
			thumbnail_width?: number, // 314575/316707 (99.33%)
			title?: string, // 316640/316707 (99.98%)
			type: "video"|"rich",
			url?: string, // 285462/316707 (90.13%)
			version: "1.0",
			width: number,
		}, // 316707/316728 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 316728/4209109 (7.52%)
		height?: number, // 316728/4209109 (7.52%)
		scrolling?: boolean, // 316728/4209109 (7.52%)
		width?: number, // 316728/4209109 (7.52%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4205495/4209109 (99.91%)
	subreddit_id?: string, // 4205495/4209109 (99.91%)
	third_party_tracking?: null, // 3614/4209109 (0.09%)
	third_party_tracking_2?: null, // 3614/4209109 (0.09%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}