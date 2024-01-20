interface RedditPost {
	adserver_click_url?: null, // 6643/7277166 (0.09%)
	adserver_imp_pixel?: null, // 6643/7277166 (0.09%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 6643/7277166 (0.09%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 7270523/7277166 (99.91%)
	from_id?: null, // 7270523/7277166 (99.91%)
	from_kind?: null, // 7270523/7277166 (99.91%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 6643/7277166 (0.09%)
	id: string,
	imp_pixel?: null, // 6643/7277166 (0.09%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 99/853421 (0.01%)
		oembed?: {
			author_name?: string, // 624030/853322 (73.13%)
			author_url?: string, // 623223/853322 (73.03%)
			cache_age?: number, // 1246/853322 (0.15%)
			description?: string, // 340466/853322 (39.90%)
			height: number,
			html: string,
			mean_alpha?: number, // 5949/853322 (0.70%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 852658/853322 (99.92%)
			thumbnail_url: string,
			thumbnail_width?: number, // 852658/853322 (99.92%)
			title?: string, // 852877/853322 (99.95%)
			type: "video"|"rich",
			url?: string, // 64075/853322 (7.51%)
			version: "1.0",
			width: number,
		}, // 853322/853421 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 853421/7277166 (11.73%)
		height?: number, // 853421/7277166 (11.73%)
		scrolling?: boolean, // 853421/7277166 (11.73%)
		width?: number, // 853421/7277166 (11.73%)
	},
	mobile_ad_url?: string, // 6643/7277166 (0.09%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2341592/7277166 (32.18%)
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
				}, // 401/2341592 (0.02%)
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
				}, // 401/2341592 (0.02%)
			},
		}[],
	}, // 2341592/7277166 (32.18%)
	promoted?: boolean, // 6643/7277166 (0.09%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 99/835952 (0.01%)
		oembed?: {
			author_name?: string, // 611599/835853 (73.17%)
			author_url?: string, // 611401/835853 (73.15%)
			cache_age?: number, // 1193/835853 (0.14%)
			description?: string, // 323338/835853 (38.68%)
			height: number,
			html: string,
			mean_alpha?: number, // 3614/835853 (0.43%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 835138/835853 (99.91%)
			thumbnail_url?: string, // 835802/835853 (99.99%)
			thumbnail_width?: number, // 835138/835853 (99.91%)
			title?: string, // 835715/835853 (99.98%)
			type: "video"|"rich",
			url?: string, // 62056/835853 (7.42%)
			version: "1.0",
			width: number,
		}, // 835853/835952 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 835952/7277166 (11.49%)
		height?: number, // 835952/7277166 (11.49%)
		scrolling?: boolean, // 835952/7277166 (11.49%)
		width?: number, // 835952/7277166 (11.49%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 7270523/7277166 (99.91%)
	subreddit_id?: string, // 7270523/7277166 (99.91%)
	third_party_tracking?: null|"https://example.com", // 6643/7277166 (0.09%)
	third_party_tracking_2?: null, // 6643/7277166 (0.09%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}