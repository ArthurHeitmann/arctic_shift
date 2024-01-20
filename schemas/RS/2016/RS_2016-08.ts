interface RedditPost {
	adserver_click_url?: null, // 7384/7591689 (0.10%)
	adserver_imp_pixel?: null, // 7384/7591689 (0.10%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	created_utc: number,
	disable_comments?: boolean, // 7384/7591689 (0.10%)
	distinguished: null|"moderator"|"admin",
	domain: string,
	downs: number,
	edited: boolean|number,
	from?: null, // 7584305/7591689 (99.90%)
	from_id?: null, // 7584305/7591689 (99.90%)
	from_kind?: null, // 7584305/7591689 (99.90%)
	gilded: number,
	hide_score: boolean,
	href_url?: string, // 7384/7591689 (0.10%)
	id: string,
	imp_pixel?: null, // 7384/7591689 (0.10%)
	is_self: boolean,
	link_flair_css_class: null|string,
	link_flair_text: null|string,
	locked: boolean,
	media: null|{
		event_id?: string, // 127/900693 (0.01%)
		oembed?: {
			author_name?: string, // 645951/900566 (71.73%)
			author_url?: string, // 645325/900566 (71.66%)
			cache_age?: number, // 1308/900566 (0.15%)
			description?: string, // 382868/900566 (42.51%)
			height: number,
			html: string,
			mean_alpha?: number, // 5412/900566 (0.60%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 900408/900566 (99.98%)
			thumbnail_url?: string, // 900551/900566 (100.00%)
			thumbnail_width?: number, // 900408/900566 (99.98%)
			title?: string, // 900185/900566 (99.96%)
			type: "video"|"rich",
			url?: string, // 88341/900566 (9.81%)
			version?: "1.0", // 900551/900566 (100.00%)
			width: number,
		}, // 900566/900693 (99.99%)
		type: string,
	},
	media_embed: {
		content?: string, // 900693/7591689 (11.86%)
		height?: number, // 900693/7591689 (11.86%)
		scrolling?: boolean, // 900693/7591689 (11.86%)
		width?: number, // 900693/7591689 (11.86%)
	},
	mobile_ad_url?: string, // 7384/7591689 (0.10%)
	name: string,
	num_comments: number,
	over_18: boolean,
	permalink: string,
	post_hint?: "link"|"self"|"rich:video"|"image"|"video", // 2511094/7591689 (33.08%)
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
				}, // 39214/2511094 (1.56%)
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
				}, // 39214/2511094 (1.56%)
			},
		}[],
	}, // 2511094/7591689 (33.08%)
	promoted?: boolean, // 7384/7591689 (0.10%)
	quarantine: boolean,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: string, // 127/885885 (0.01%)
		oembed?: {
			author_name?: string, // 637615/885758 (71.99%)
			author_url?: string, // 637305/885758 (71.95%)
			cache_age?: number, // 1002/885758 (0.11%)
			description?: string, // 368446/885758 (41.60%)
			height: number,
			html: string,
			mean_alpha?: number, // 1938/885758 (0.22%)
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 885613/885758 (99.98%)
			thumbnail_url?: string, // 885742/885758 (100.00%)
			thumbnail_width?: number, // 885613/885758 (99.98%)
			title?: string, // 885651/885758 (99.99%)
			type: "video"|"rich",
			url?: string, // 87339/885758 (9.86%)
			version?: "1.0", // 885743/885758 (100.00%)
			width: number,
		}, // 885758/885885 (99.99%)
		type: string,
	},
	secure_media_embed: {
		content?: string, // 885885/7591689 (11.67%)
		height?: number, // 885885/7591689 (11.67%)
		scrolling?: boolean, // 885885/7591689 (11.67%)
		width?: number, // 885885/7591689 (11.67%)
	},
	selftext: string,
	stickied: boolean,
	subreddit?: string, // 7584305/7591689 (99.90%)
	subreddit_id?: string, // 7584305/7591689 (99.90%)
	third_party_tracking?: null|string, // 7384/7591689 (0.10%)
	third_party_tracking_2?: null, // 7384/7591689 (0.10%)
	thumbnail: string|null,
	title: string,
	ups: number,
	url: string,
}