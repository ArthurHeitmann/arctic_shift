interface RedditPost {
	adserver_click_url?: null, // 648/504098 (0.13%)
	adserver_imp_pixel?: null, // 648/504098 (0.13%)
	approved?: boolean, // 4667/504098 (0.93%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1249/504098 (0.25%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 2/10218 (0.02%)
		e: "text"|"emoji",
		t?: string, // 10216/10218 (99.98%)
		u?: string, // 2/10218 (0.02%)
	}[], // 368713/504098 (73.14%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 368713/504098 (73.14%)
	author_id?: string|null, // 648/504098 (0.13%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 648/504098 (0.13%)
	edited: boolean|number,
	embed_type?: null, // 648/504098 (0.13%)
	embed_url?: null, // 648/504098 (0.13%)
	events?: [], // 648/504098 (0.13%)
	eventsOnRender?: [], // 648/504098 (0.13%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 648/504098 (0.13%)
	id: string,
	ignore_reports?: boolean, // 4667/504098 (0.93%)
	is_blank?: boolean, // 648/504098 (0.13%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 18/504098 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "92f7c828-ec13-11e7-a213-0e55a4ea24ae"|"820e08ba-ec13-11e7-9b1b-0ede872df4be"|"b8779ea2-ec13-11e7-a4e4-0e25c549a0b4"|"8fc8c9fe-ec13-11e7-a109-0ed8d186392c", // 8/504098 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 182/186 (97.85%)
			author_url?: string, // 182/186 (97.85%)
			description?: string, // 9/186 (4.84%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"Funny Or Die"|"Imgur"|"Ustream.tv"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://www.funnyordie.com"|"http://imgur.com"|"http://ustream.tv"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 1/186 (0.54%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"funnyordie.com"|"imgur.com"|"ustream.tv"|"il.youtube.com"|"maps.google.com",
	},
	media_embed: {
		content?: string, // 186/504098 (0.04%)
		height?: number, // 186/504098 (0.04%)
		media_domain_url?: string, // 186/504098 (0.04%)
		scrolling?: boolean, // 186/504098 (0.04%)
		width?: number, // 186/504098 (0.04%)
	},
	mobile_ad_url?: "", // 648/504098 (0.13%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 648/504098 (0.13%)
	outbound_link?: {
	}, // 648/504098 (0.13%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 1385/504098 (0.27%)
	preview?: {
		enabled: boolean,
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
				}, // 26/1385 (1.88%)
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
				}, // 26/1385 (1.88%)
				nsfw?: {
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
				}, // 107/1385 (7.73%)
				obfuscated?: {
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
				}, // 107/1385 (7.73%)
			},
		}[],
		reddit_video_preview?: {
			dash_url: string,
			duration: number,
			fallback_url: string,
			height: number,
			hls_url: string,
			is_gif: boolean,
			scrubber_media_url: string,
			transcoding_status: "completed",
			width: number,
		}, // 13/1385 (0.94%)
	}, // 1385/504098 (0.27%)
	priority_id?: null, // 648/504098 (0.13%)
	promoted?: boolean, // 648/504098 (0.13%)
	promoted_by?: null, // 648/504098 (0.13%)
	promoted_display_name?: null, // 648/504098 (0.13%)
	promoted_url?: null, // 648/504098 (0.13%)
	removed?: boolean, // 4667/504098 (0.93%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 182/186 (97.85%)
			author_url?: string, // 182/186 (97.85%)
			description?: string, // 9/186 (4.84%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"Funny Or Die"|"Imgur"|"Ustream.tv"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://www.funnyordie.com"|"http://imgur.com"|"http://ustream.tv"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 1/186 (0.54%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"funnyordie.com"|"imgur.com"|"ustream.tv"|"il.youtube.com"|"maps.google.com",
	},
	secure_media_embed: {
		content?: string, // 186/504098 (0.04%)
		height?: number, // 186/504098 (0.04%)
		media_domain_url?: string, // 186/504098 (0.04%)
		scrolling?: boolean, // 186/504098 (0.04%)
		width?: number, // 186/504098 (0.04%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 4667/504098 (0.93%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted"|"gold_only",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"controversial"|"old",
	third_party_trackers?: [], // 648/504098 (0.13%)
	third_party_tracking?: null, // 648/504098 (0.13%)
	third_party_tracking_2?: null, // 648/504098 (0.13%)
	thumbnail: string,
	thumbnail_height?: null|number, // 368595/504098 (73.12%)
	thumbnail_width?: null|number, // 368595/504098 (73.12%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}