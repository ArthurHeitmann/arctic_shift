interface RedditPost {
	adserver_click_url?: null, // 3280/3946491 (0.08%)
	adserver_imp_pixel?: null, // 3280/3946491 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 3280/3946491 (0.08%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 3943211/3946491 (99.92%)
	from_id?: null, // 3943211/3946491 (99.92%)
	from_kind?: null, // 3943211/3946491 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 3280/3946491 (0.08%)
	id: string,
	imp_pixel?: null, // 3280/3946491 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 28/399783 (0.01%)
		event_id?: "3rgnbke2rai6hen7ciytwcxadi"|"sw7bubeycai6hey4ciytwamw3a"|"gnkxobe3iqi6hpxzciytwamw3a", // 13/399783 (0.00%)
		height?: number, // 28/399783 (0.01%)
		oembed?: {
			author_name?: string, // 308720/399742 (77.23%)
			author_url?: string, // 308762/399742 (77.24%)
			cache_age?: number, // 625/399742 (0.16%)
			description?: string, // 397496/399742 (99.44%)
			height: number,
			html: string,
			mean_alpha?: number, // 3853/399742 (0.96%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 393303/399742 (98.39%)
			thumbnail_url?: string, // 393305/399742 (98.39%)
			thumbnail_width?: number, // 393303/399742 (98.39%)
			title?: string, // 398744/399742 (99.75%)
			type: "video"|"rich",
			url?: string, // 272243/399742 (68.10%)
			version: "1.0",
			width: number,
		}, // 399742/399783 (99.99%)
		type: string,
		width?: number, // 28/399783 (0.01%)
	},
	media_embed: {
		content?: string, // 399783/3946491 (10.13%)
		height?: number, // 399783/3946491 (10.13%)
		scrolling?: boolean, // 399783/3946491 (10.13%)
		width?: number, // 399783/3946491 (10.13%)
	},
	mobile_ad_url?: "", // 3280/3946491 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"image"|"rich:video", // 79/3946491 (0.00%)
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
	}, // 79/3946491 (0.00%)
	promoted?: boolean, // 3280/3946491 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "3rgnbke2rai6hen7ciytwcxadi"|"sw7bubeycai6hey4ciytwamw3a"|"gnkxobe3iqi6hpxzciytwamw3a", // 13/300327 (0.00%)
		oembed?: {
			author_name?: string, // 298475/300314 (99.39%)
			author_url?: string, // 298475/300314 (99.39%)
			description?: string, // 299899/300314 (99.86%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"Slideshare"|"Wistia, Inc."|"Imgur"|"Wistia",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://wistia.com"|"http://imgur.com",
			thumbnail_height?: number, // 299760/300314 (99.82%)
			thumbnail_url?: string, // 299761/300314 (99.82%)
			thumbnail_width?: number, // 299760/300314 (99.82%)
			title?: string, // 300312/300314 (100.00%)
			type: "video"|"rich",
			url?: string, // 270539/300314 (90.09%)
			version: "1.0",
			width: number,
		}, // 300314/300327 (100.00%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 300327/3946491 (7.61%)
		height?: number, // 300327/3946491 (7.61%)
		scrolling?: boolean, // 300327/3946491 (7.61%)
		width?: number, // 300327/3946491 (7.61%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 3943211/3946491 (99.92%)
	subreddit_id?: string, // 3943211/3946491 (99.92%)
	third_party_tracking?: null, // 3280/3946491 (0.08%)
	third_party_tracking_2?: null, // 3280/3946491 (0.08%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}