interface RedditPost {
	adserver_click_url?: null, // 6013/7188762 (0.08%)
	adserver_imp_pixel?: null, // 6013/7188762 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 6013/7188762 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 7182749/7188762 (99.92%)
	from_id?: null, // 7182749/7188762 (99.92%)
	from_kind?: null, // 7182749/7188762 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 6013/7188762 (0.08%)
	id: string,
	imp_pixel?: null, // 6013/7188762 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 168/857050 (0.02%)
		oembed?: {
			author_name?: string, // 626789/856882 (73.15%)
			author_url?: string, // 625939/856882 (73.05%)
			cache_age?: number, // 1224/856882 (0.14%)
			description?: string, // 342100/856882 (39.92%)
			height: number,
			html: string,
			mean_alpha?: number, // 3842/856882 (0.45%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 856627/856882 (99.97%)
			thumbnail_url?: string, // 856874/856882 (100.00%)
			thumbnail_width?: number, // 856627/856882 (99.97%)
			title?: string, // 856600/856882 (99.97%)
			type: "video"|"rich",
			url?: string, // 67876/856882 (7.92%)
			version?: "1.0", // 856874/856882 (100.00%)
			width: number,
		}, // 856882/857050 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 857050/7188762 (11.92%)
		height?: number, // 857050/7188762 (11.92%)
		scrolling?: boolean, // 857050/7188762 (11.92%)
		width?: number, // 857050/7188762 (11.92%)
	},
	mobile_ad_url?: string, // 6013/7188762 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2394392/7188762 (33.31%)
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
				}, // 20022/2394392 (0.84%)
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
				}, // 20022/2394392 (0.84%)
			},
		}[],
	}, // 2394392/7188762 (33.31%)
	promoted?: boolean, // 6013/7188762 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 168/843193 (0.02%)
		oembed?: {
			author_name?: string, // 618069/843025 (73.32%)
			author_url?: string, // 617909/843025 (73.30%)
			cache_age?: number, // 1207/843025 (0.14%)
			description?: string, // 328472/843025 (38.96%)
			height: number,
			html: string,
			mean_alpha?: number, // 1433/843025 (0.17%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 842770/843025 (99.97%)
			thumbnail_url?: string, // 843017/843025 (100.00%)
			thumbnail_width?: number, // 842770/843025 (99.97%)
			title?: string, // 842954/843025 (99.99%)
			type: "video"|"rich",
			url?: string, // 66916/843025 (7.94%)
			version?: "1.0", // 843017/843025 (100.00%)
			width: number,
		}, // 843025/843193 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 843193/7188762 (11.73%)
		height?: number, // 843193/7188762 (11.73%)
		scrolling?: boolean, // 843193/7188762 (11.73%)
		width?: number, // 843193/7188762 (11.73%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 7182749/7188762 (99.92%)
	subreddit_id?: string, // 7182749/7188762 (99.92%)
	third_party_tracking?: null|string, // 6013/7188762 (0.08%)
	third_party_tracking_2?: null|string, // 6013/7188762 (0.08%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}