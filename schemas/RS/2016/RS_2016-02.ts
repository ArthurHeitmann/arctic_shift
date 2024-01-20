interface RedditPost {
	adserver_click_url?: null, // 5575/7146932 (0.08%)
	adserver_imp_pixel?: null, // 5575/7146932 (0.08%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 5575/7146932 (0.08%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 7141357/7146932 (99.92%)
	from_id?: null, // 7141357/7146932 (99.92%)
	from_kind?: null, // 7141357/7146932 (99.92%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 5575/7146932 (0.08%)
	id: string,
	imp_pixel?: null, // 5575/7146932 (0.08%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 158/785643 (0.02%)
		oembed?: {
			author_name?: string, // 566512/785485 (72.12%)
			author_url?: string, // 565445/785485 (71.99%)
			cache_age?: number, // 1581/785485 (0.20%)
			description?: string, // 769413/785485 (97.95%)
			height: number,
			html: string,
			mean_alpha?: number, // 4709/785485 (0.60%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 785028/785485 (99.94%)
			thumbnail_url?: string, // 785484/785485 (100.00%)
			thumbnail_width?: number, // 785028/785485 (99.94%)
			title?: string, // 782652/785485 (99.64%)
			type: "video"|"rich",
			url?: string, // 512657/785485 (65.27%)
			version?: "1.0", // 785484/785485 (100.00%)
			width: number,
		}, // 785485/785643 (99.98%)
		type: string,
	},
	media_embed: {
		content?: string, // 785643/7146932 (10.99%)
		height?: number, // 785643/7146932 (10.99%)
		scrolling?: boolean, // 785643/7146932 (10.99%)
		width?: number, // 785643/7146932 (10.99%)
	},
	mobile_ad_url?: string, // 5575/7146932 (0.08%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2097993/7146932 (29.36%)
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
	}, // 2097993/7146932 (29.36%)
	promoted?: boolean, // 5575/7146932 (0.08%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 158/756254 (0.02%)
		oembed?: {
			author_name?: string, // 542826/756096 (71.79%)
			author_url?: string, // 542419/756096 (71.74%)
			cache_age?: number, // 1502/756096 (0.20%)
			description?: string, // 740177/756096 (97.89%)
			height: number,
			html: string,
			mean_alpha?: number, // 1831/756096 (0.24%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 755634/756096 (99.94%)
			thumbnail_url?: string, // 756088/756096 (100.00%)
			thumbnail_width?: number, // 755634/756096 (99.94%)
			title?: string, // 753270/756096 (99.63%)
			type: "video"|"rich",
			url?: string, // 511509/756096 (67.65%)
			version?: "1.0", // 756095/756096 (100.00%)
			width: number,
		}, // 756096/756254 (99.98%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 756254/7146932 (10.58%)
		height?: number, // 756254/7146932 (10.58%)
		scrolling?: boolean, // 756254/7146932 (10.58%)
		width?: number, // 756254/7146932 (10.58%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 7141357/7146932 (99.92%)
	subreddit_id?: string, // 7141357/7146932 (99.92%)
	third_party_tracking?: null|"http://example.com/1x1.gif"|"https://example.com/i.gif", // 5575/7146932 (0.08%)
	third_party_tracking_2?: null|"https://example.com/i.gif?v=2", // 5575/7146932 (0.08%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}