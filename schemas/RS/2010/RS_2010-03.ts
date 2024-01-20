interface RedditPost {
	adserver_click_url?: null, // 319/602586 (0.05%)
	adserver_imp_pixel?: null, // 319/602586 (0.05%)
	approved?: boolean, // 6084/602586 (1.01%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1132/602586 (0.19%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 483519/602586 (80.24%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 483519/602586 (80.24%)
	author_id?: string|null, // 319/602586 (0.05%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 319/602586 (0.05%)
	edited: boolean|number,
	embed_type?: null, // 319/602586 (0.05%)
	embed_url?: null, // 319/602586 (0.05%)
	events?: [], // 319/602586 (0.05%)
	eventsOnRender?: [], // 319/602586 (0.05%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 319/602586 (0.05%)
	id: string,
	ignore_reports?: boolean, // 6084/602586 (1.01%)
	is_blank?: boolean, // 319/602586 (0.05%)
	is_crosspostable: boolean,
	is_original_content?: boolean, // 52/602586 (0.01%)
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 11/602586 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "390a84ee-3096-11e5-8982-0ee61c357d3b", // 1/602586 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 154/157 (98.09%)
			author_url?: string, // 154/157 (98.09%)
			cache_age?: number, // 3/157 (1.91%)
			description?: string, // 16/157 (10.19%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"TED"|"SoundCloud"|"Spotify"|"BandCamp"|"Fox"|"Funny Or Die"|"SlideShare",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://ted.com"|"http://soundcloud.com"|"https://www.spotify.com"|"http://bandcamp.com"|"http://www.foxnews.com/"|"http://www.funnyordie.com"|"https://www.slideshare.net/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 4/157 (2.55%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"ted.com"|"soundcloud.com"|"open.spotify.com"|"cssc.bandcamp.com"|"video.foxnews.com"|"funnyordie.com"|"slideshare.net",
	},
	media_embed: {
		content?: string, // 157/602586 (0.03%)
		height?: number, // 157/602586 (0.03%)
		media_domain_url?: string, // 157/602586 (0.03%)
		scrolling?: boolean, // 157/602586 (0.03%)
		width?: number, // 157/602586 (0.03%)
	},
	mobile_ad_url?: "", // 319/602586 (0.05%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 319/602586 (0.05%)
	outbound_link?: {
	}, // 319/602586 (0.05%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 1211/602586 (0.20%)
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
				}, // 21/1211 (1.73%)
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
				}, // 21/1211 (1.73%)
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
				}, // 76/1211 (6.28%)
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
				}, // 76/1211 (6.28%)
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
		}, // 17/1211 (1.40%)
	}, // 1211/602586 (0.20%)
	priority_id?: null, // 319/602586 (0.05%)
	promoted?: boolean, // 319/602586 (0.05%)
	promoted_by?: null, // 319/602586 (0.05%)
	promoted_display_name?: null, // 319/602586 (0.05%)
	promoted_url?: null, // 319/602586 (0.05%)
	removed?: boolean, // 6084/602586 (1.01%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 154/157 (98.09%)
			author_url?: string, // 154/157 (98.09%)
			cache_age?: number, // 3/157 (1.91%)
			description?: string, // 16/157 (10.19%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"TED"|"SoundCloud"|"Spotify"|"BandCamp"|"Fox"|"Funny Or Die"|"SlideShare",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://ted.com"|"http://soundcloud.com"|"https://www.spotify.com"|"http://bandcamp.com"|"http://www.foxnews.com/"|"http://www.funnyordie.com"|"https://www.slideshare.net/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 4/157 (2.55%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"ted.com"|"soundcloud.com"|"open.spotify.com"|"cssc.bandcamp.com"|"video.foxnews.com"|"funnyordie.com"|"slideshare.net",
	},
	secure_media_embed: {
		content?: string, // 157/602586 (0.03%)
		height?: number, // 157/602586 (0.03%)
		media_domain_url?: string, // 157/602586 (0.03%)
		scrolling?: boolean, // 157/602586 (0.03%)
		width?: number, // 157/602586 (0.03%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 6084/602586 (1.01%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"top"|"new"|"controversial"|"old"|"qa",
	third_party_trackers?: [], // 319/602586 (0.05%)
	third_party_tracking?: null, // 319/602586 (0.05%)
	third_party_tracking_2?: null, // 319/602586 (0.05%)
	thumbnail: string,
	thumbnail_height?: null|number, // 489282/602586 (81.20%)
	thumbnail_width?: null|number, // 489282/602586 (81.20%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}