interface RedditPost {
	adserver_click_url?: null, // 4769/6173540 (0.08%)
	adserver_imp_pixel?: null, // 4769/6173540 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created: number,
	created_utc: string,
	disable_comments?: boolean, // 4769/6173540 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 6168771/6173540 (99.92%)
	from_id?: null, // 6168771/6173540 (99.92%)
	from_kind?: null, // 6168771/6173540 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4769/6173540 (0.08%)
	id: string,
	imp_pixel?: null, // 4769/6173540 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	media: null|{
		event_id?: string, // 145/609879 (0.02%)
		oembed?: {
			author_name?: string, // 425080/609734 (69.72%)
			author_url?: string, // 424433/609734 (69.61%)
			cache_age?: number, // 1635/609734 (0.27%)
			description?: string, // 560999/609734 (92.01%)
			height: number,
			html: string,
			mean_alpha?: number, // 8679/609734 (1.42%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 609552/609734 (99.97%)
			thumbnail_url: string,
			thumbnail_width?: number, // 609552/609734 (99.97%)
			title?: string, // 609680/609734 (99.99%)
			type: "video"|"rich",
			url?: string, // 391434/609734 (64.20%)
			version: "1.0",
			width: number,
		}, // 609734/609879 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 609879/6173540 (9.88%)
		height?: number, // 609879/6173540 (9.88%)
		scrolling?: boolean, // 609879/6173540 (9.88%)
		width?: number, // 609879/6173540 (9.88%)
	},
	mobile_ad_url?: string, // 4769/6173540 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 1988176/6173540 (32.20%)
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
	}, // 1988176/6173540 (32.20%)
	promoted?: boolean, // 4769/6173540 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 145/602356 (0.02%)
		oembed?: {
			author_name?: string, // 421419/602211 (69.98%)
			author_url?: string, // 420806/602211 (69.88%)
			cache_age?: number, // 1576/602211 (0.26%)
			description?: string, // 553656/602211 (91.94%)
			height: number,
			html: string,
			mean_alpha?: number, // 8332/602211 (1.38%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 602032/602211 (99.97%)
			thumbnail_url: string,
			thumbnail_width?: number, // 602032/602211 (99.97%)
			title?: string, // 602192/602211 (100.00%)
			type: "video"|"rich",
			url?: string, // 391386/602211 (64.99%)
			version: "1.0",
			width: number,
		}, // 602211/602356 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 602356/6173540 (9.76%)
		height?: number, // 602356/6173540 (9.76%)
		scrolling?: boolean, // 602356/6173540 (9.76%)
		width?: number, // 602356/6173540 (9.76%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 6168771/6173540 (99.92%)
	subreddit_id?: string, // 6168771/6173540 (99.92%)
	third_party_tracking?: null, // 4769/6173540 (0.08%)
	third_party_tracking_2?: null, // 4769/6173540 (0.08%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}