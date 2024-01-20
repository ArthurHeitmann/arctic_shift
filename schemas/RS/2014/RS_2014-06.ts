interface RedditPost {
	adserver_click_url?: null, // 3838/4092661 (0.09%)
	adserver_imp_pixel?: null, // 3838/4092661 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 3838/4092661 (0.09%)
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 4088823/4092661 (99.91%)
	from_id?: null, // 4088823/4092661 (99.91%)
	from_kind?: null, // 4088823/4092661 (99.91%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 3838/4092661 (0.09%)
	id: string,
	imp_pixel?: null, // 3838/4092661 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		content?: string, // 30/406398 (0.01%)
		event_id?: "aedewsxsiui6hkl7ciyt2isn6u"|"wpu63hhgwei6hdzaciytwamw3a"|"jxn2iewlcui6hbwuciytwamw3a"|"lzqllthp6mi6hkuiciytwcxadi"|"bxaa2cxqaqi6ha7aciytwcxadi"|"7nc7jmhci4i6hiqkciytwamw3a"|"aulcp6hvpmi6hlmociyt2isn6u"|"sw7bubeycai6hey4ciytwamw3a", // 12/406398 (0.00%)
		height?: number, // 30/406398 (0.01%)
		oembed?: {
			author_name?: string, // 389440/406356 (95.84%)
			author_url?: string, // 389510/406356 (95.85%)
			cache_age?: number, // 710/406356 (0.17%)
			description?: string, // 403215/406356 (99.23%)
			height: number,
			html: string,
			mean_alpha?: number, // 5030/406356 (1.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 402216/406356 (98.98%)
			thumbnail_url?: string, // 402214/406356 (98.98%)
			thumbnail_width?: number, // 402216/406356 (98.98%)
			title?: string, // 405042/406356 (99.68%)
			type: "video"|"rich",
			url?: string, // 281827/406356 (69.35%)
			version: "1.0",
			width: number,
		}, // 406356/406398 (99.99%)
		type: string,
		width?: number, // 30/406398 (0.01%)
	},
	media_embed: {
		content?: string, // 406398/4092661 (9.93%)
		height?: number, // 406398/4092661 (9.93%)
		scrolling?: boolean, // 406398/4092661 (9.93%)
		width?: number, // 406398/4092661 (9.93%)
	},
	mobile_ad_url?: "", // 3838/4092661 (0.09%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"image"|"link", // 102/4092661 (0.00%)
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
	}, // 102/4092661 (0.00%)
	promoted?: boolean, // 3838/4092661 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "aedewsxsiui6hkl7ciyt2isn6u"|"wpu63hhgwei6hdzaciytwamw3a"|"jxn2iewlcui6hbwuciytwamw3a"|"lzqllthp6mi6hkuiciytwcxadi"|"bxaa2cxqaqi6ha7aciytwcxadi"|"7nc7jmhci4i6hiqkciytwamw3a"|"aulcp6hvpmi6hlmociyt2isn6u"|"sw7bubeycai6hey4ciytwamw3a", // 12/307405 (0.00%)
		oembed?: {
			author_name?: string, // 305521/307393 (99.39%)
			author_url?: string, // 305521/307393 (99.39%)
			description?: string, // 306867/307393 (99.83%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"SlideShare"|"Soundcloud"|"ABC News"|"Wistia, Inc."|"Slideshare",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"http://www.slideshare.net"|"http://vimeo.com"|"http://abcnews.go.com/"|"http://wistia.com",
			thumbnail_height?: number, // 304784/307393 (99.15%)
			thumbnail_url?: string, // 304781/307393 (99.15%)
			thumbnail_width?: number, // 304784/307393 (99.15%)
			title?: string, // 307353/307393 (99.99%)
			type: "video"|"rich",
			url?: string, // 280522/307393 (91.26%)
			version: "1.0",
			width: number,
		}, // 307393/307405 (100.00%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 307405/4092661 (7.51%)
		height?: number, // 307405/4092661 (7.51%)
		scrolling?: boolean, // 307405/4092661 (7.51%)
		width?: number, // 307405/4092661 (7.51%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 4088823/4092661 (99.91%)
	subreddit_id?: string, // 4088823/4092661 (99.91%)
	third_party_tracking?: null, // 3838/4092661 (0.09%)
	third_party_tracking_2?: null, // 3838/4092661 (0.09%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}