interface RedditPost_2015 {
	adserver_click_url?: null,
	adserver_imp_pixel?: null,
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created?: number,
	created_utc: string|number,
	disable_comments?: boolean,
	distinguished: null|"moderator"|"admin"|"special",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null,
	from_id?: null,
	from_kind?: null,
	gilded: number,
	hide_score: boolean,
	href_url?: string,
	id: string,
	imp_pixel?: null,
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked?: boolean,
	media: null|{
		content?: string,
		event_id?: string,
		height?: number,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height: number,
			html: string,
			mean_alpha?: number,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number,
			thumbnail_url?: string,
			thumbnail_width?: number,
			title?: string,
			type: "video"|"rich",
			url?: string,
			version?: "1.0",
			width: number,
		},
		type: string,
		width?: number,
	},
	media_embed: {
		content?: string,
		height?: number,
		scrolling?: boolean,
		width?: number,
	},
	mobile_ad_url?: string,
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "self"|"link"|"rich:video"|"image"|"video",
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
	},
	promoted?: boolean,
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		content?: string,
		event_id?: string,
		height?: number,
		oembed?: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height: number,
			html: string,
			mean_alpha?: number,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number,
			thumbnail_url?: string,
			thumbnail_width?: number,
			title?: string,
			type: "video"|"rich",
			url?: string,
			version?: "1.0",
			width: number,
		},
		type: string,
		width?: number,
	},
	secure_media_embed: {
		content?: string,
		height?: number,
		scrolling?: boolean,
		width?: number,
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string,
	subreddit_id?: string,
	third_party_tracking?: null|string,
	third_party_tracking_2?: null|"https://www.yahoo.com/"|"https://ebay.com"|"http://zeantsoi.com"|"https://google.com",
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}
