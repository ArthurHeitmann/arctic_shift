interface RedditPost {
	adserver_click_url?: null, // 4762/5757886 (0.08%)
	adserver_imp_pixel?: null, // 4762/5757886 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4762/5757886 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 5753124/5757886 (99.92%)
	from_id?: null, // 5753124/5757886 (99.92%)
	from_kind?: null, // 5753124/5757886 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4762/5757886 (0.08%)
	id: string,
	imp_pixel?: null, // 4762/5757886 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 163/493249 (0.03%)
		oembed?: {
			author_name?: string, // 327380/493086 (66.39%)
			author_url?: string, // 326846/493086 (66.29%)
			cache_age?: number, // 1821/493086 (0.37%)
			description?: string, // 452451/493086 (91.76%)
			height: number,
			html: string,
			mean_alpha?: number, // 8208/493086 (1.66%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 492790/493086 (99.94%)
			thumbnail_url: string,
			thumbnail_width?: number, // 492790/493086 (99.94%)
			title?: string, // 493053/493086 (99.99%)
			type: "video"|"rich",
			url?: string, // 295609/493086 (59.95%)
			version: "1.0",
			width: number,
		}, // 493086/493249 (99.97%)
		type: string,
	},
	media_embed: {
		content?: string, // 493249/5757886 (8.57%)
		height?: number, // 493249/5757886 (8.57%)
		scrolling?: boolean, // 493249/5757886 (8.57%)
		width?: number, // 493249/5757886 (8.57%)
	},
	mobile_ad_url?: string, // 4762/5757886 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"image"|"rich:video"|"video", // 1716730/5757886 (29.82%)
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
	}, // 1716730/5757886 (29.82%)
	promoted?: boolean, // 4762/5757886 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 163/324132 (0.05%)
		oembed?: {
			author_name?: string, // 321309/323969 (99.18%)
			author_url?: string, // 321309/323969 (99.18%)
			cache_age?: number, // 1659/323969 (0.51%)
			description?: string, // 322911/323969 (99.67%)
			height: number,
			html: string,
			mean_alpha?: number, // 28/323969 (0.01%)
			provider_name: "YouTube"|"SoundCloud"|"Vimeo"|"Vine"|"SlideShare"|"Imgur"|"Wistia, Inc."|"gfycat"|"Streamable",
			provider_url: "http://www.youtube.com/"|"http://soundcloud.com"|"https://vimeo.com/"|"http://youtube.com"|"https://vine.co/"|"http://www.slideshare.net"|"https://vimeo.com"|"https://www.youtube.com/"|"http://imgur.com"|"http://wistia.com"|"http://gfycat.com"|"http://www.streamable.com",
			thumbnail_height?: number, // 323799/323969 (99.95%)
			thumbnail_url: string,
			thumbnail_width?: number, // 323799/323969 (99.95%)
			title?: string, // 323946/323969 (99.99%)
			type: "video"|"rich",
			url?: string, // 291949/323969 (90.12%)
			version: "1.0",
			width: number,
		}, // 323969/324132 (99.95%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 324132/5757886 (5.63%)
		height?: number, // 324132/5757886 (5.63%)
		scrolling?: boolean, // 324132/5757886 (5.63%)
		width?: number, // 324132/5757886 (5.63%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 5753124/5757886 (99.92%)
	subreddit_id?: string, // 5753124/5757886 (99.92%)
	third_party_tracking?: null|string, // 4762/5757886 (0.08%)
	third_party_tracking_2?: null|"https://ebay.com"|"http://zeantsoi.com"|"https://google.com", // 4762/5757886 (0.08%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}