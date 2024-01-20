interface RedditPost {
	adserver_click_url?: null, // 4427/6877510 (0.06%)
	adserver_imp_pixel?: null, // 4427/6877510 (0.06%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 4427/6877510 (0.06%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 6873083/6877510 (99.94%)
	from_id?: null, // 6873083/6877510 (99.94%)
	from_kind?: null, // 6873083/6877510 (99.94%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 4427/6877510 (0.06%)
	id: string,
	imp_pixel?: null, // 4427/6877510 (0.06%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 104/791290 (0.01%)
		oembed?: {
			author_name?: string, // 568623/791186 (71.87%)
			author_url?: string, // 567530/791186 (71.73%)
			cache_age?: number, // 1857/791186 (0.23%)
			description?: string, // 772401/791186 (97.63%)
			height: number,
			html: string,
			mean_alpha?: number, // 5178/791186 (0.65%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 790872/791186 (99.96%)
			thumbnail_url: string,
			thumbnail_width?: number, // 790872/791186 (99.96%)
			title?: string, // 789770/791186 (99.82%)
			type: "video"|"rich",
			url?: string, // 515758/791186 (65.19%)
			version: "1.0",
			width: number,
		}, // 791186/791290 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 791290/6877510 (11.51%)
		height?: number, // 791290/6877510 (11.51%)
		scrolling?: boolean, // 791290/6877510 (11.51%)
		width?: number, // 791290/6877510 (11.51%)
	},
	mobile_ad_url?: string, // 4427/6877510 (0.06%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2143448/6877510 (31.17%)
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
	}, // 2143448/6877510 (31.17%)
	promoted?: boolean, // 4427/6877510 (0.06%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 104/761107 (0.01%)
		oembed?: {
			author_name?: string, // 545230/761003 (71.65%)
			author_url?: string, // 544870/761003 (71.60%)
			cache_age?: number, // 1786/761003 (0.23%)
			description?: string, // 742364/761003 (97.55%)
			height: number,
			html: string,
			mean_alpha?: number, // 2081/761003 (0.27%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 760685/761003 (99.96%)
			thumbnail_url?: string, // 760999/761003 (100.00%)
			thumbnail_width?: number, // 760685/761003 (99.96%)
			title?: string, // 759620/761003 (99.82%)
			type: "video"|"rich",
			url?: string, // 515112/761003 (67.69%)
			version: "1.0",
			width: number,
		}, // 761003/761107 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 761107/6877510 (11.07%)
		height?: number, // 761107/6877510 (11.07%)
		scrolling?: boolean, // 761107/6877510 (11.07%)
		width?: number, // 761107/6877510 (11.07%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 6873083/6877510 (99.94%)
	subreddit_id?: string, // 6873083/6877510 (99.94%)
	third_party_tracking?: null, // 4427/6877510 (0.06%)
	third_party_tracking_2?: null, // 4427/6877510 (0.06%)
	thumbnail: string,
	title: string,
	ups: number,
	url: string,
}