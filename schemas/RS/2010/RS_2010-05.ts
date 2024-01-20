interface RedditPost {
	adserver_click_url?: null, // 794/515637 (0.15%)
	adserver_imp_pixel?: null, // 794/515637 (0.15%)
	approved?: boolean, // 5308/515637 (1.03%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 3243/515637 (0.63%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 4/7811 (0.05%)
		e: "text"|"emoji",
		t?: string, // 7807/7811 (99.95%)
		u?: string, // 4/7811 (0.05%)
	}[], // 393459/515637 (76.31%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 393459/515637 (76.31%)
	author_id?: string|null, // 794/515637 (0.15%)
	ban_note?: null, // 5/515637 (0.00%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 794/515637 (0.15%)
	edited: boolean|number,
	embed_type?: null, // 794/515637 (0.15%)
	embed_url?: null, // 794/515637 (0.15%)
	events?: [], // 794/515637 (0.15%)
	eventsOnRender?: [], // 794/515637 (0.15%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 794/515637 (0.15%)
	id: string,
	ignore_reports?: boolean, // 5308/515637 (1.03%)
	is_blank?: boolean, // 794/515637 (0.15%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 20/515637 (0.00%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 263/267 (98.50%)
			author_url?: string, // 262/267 (98.13%)
			cache_age?: number, // 2/267 (0.75%)
			description?: string, // 15/267 (5.62%)
			height: number,
			html: string,
			mean_alpha?: number, // 1/267 (0.37%)
			provider_name: "YouTube"|"Vimeo"|"Google Maps"|"BandCamp"|"Hulu"|"Ustream.tv"|"TED"|"ABC News"|"SoundCloud",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://google.com/maps"|"http://bandcamp.com"|"//www.hulu.com/"|"http://ustream.tv"|"http://ted.com"|"http://abcnews.go.com/"|"http://soundcloud.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: "https://www.ted.com/talks/william_li", // 1/267 (0.37%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"maps.google.com"|"danreeder.bandcamp.com"|"hulu.com"|"ustream.tv"|"ted.com"|"abcnews.go.com"|"soundcloud.com",
	},
	media_embed: {
		content?: string, // 267/515637 (0.05%)
		height?: number, // 267/515637 (0.05%)
		media_domain_url?: string, // 267/515637 (0.05%)
		scrolling?: boolean, // 267/515637 (0.05%)
		width?: number, // 267/515637 (0.05%)
	},
	mobile_ad_url?: "", // 794/515637 (0.15%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 794/515637 (0.15%)
	outbound_link?: {
	}, // 794/515637 (0.15%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 1946/515637 (0.38%)
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
				}, // 25/1946 (1.28%)
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
				}, // 25/1946 (1.28%)
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
				}, // 95/1946 (4.88%)
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
				}, // 95/1946 (4.88%)
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
		}, // 16/1946 (0.82%)
	}, // 1946/515637 (0.38%)
	priority_id?: null, // 794/515637 (0.15%)
	promoted?: boolean, // 794/515637 (0.15%)
	promoted_by?: null, // 794/515637 (0.15%)
	promoted_display_name?: null, // 794/515637 (0.15%)
	promoted_url?: null, // 794/515637 (0.15%)
	removed?: boolean, // 5308/515637 (1.03%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 263/267 (98.50%)
			author_url?: string, // 262/267 (98.13%)
			cache_age?: number, // 2/267 (0.75%)
			description?: string, // 15/267 (5.62%)
			height: number,
			html: string,
			mean_alpha?: number, // 1/267 (0.37%)
			provider_name: "YouTube"|"Vimeo"|"Google Maps"|"BandCamp"|"Hulu"|"Ustream.tv"|"TED"|"ABC News"|"SoundCloud",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://google.com/maps"|"http://bandcamp.com"|"//www.hulu.com/"|"http://ustream.tv"|"http://ted.com"|"http://abcnews.go.com/"|"http://soundcloud.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: "https://www.ted.com/talks/william_li", // 1/267 (0.37%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"maps.google.com"|"danreeder.bandcamp.com"|"hulu.com"|"ustream.tv"|"ted.com"|"abcnews.go.com"|"soundcloud.com",
	},
	secure_media_embed: {
		content?: string, // 267/515637 (0.05%)
		height?: number, // 267/515637 (0.05%)
		media_domain_url?: string, // 267/515637 (0.05%)
		scrolling?: boolean, // 267/515637 (0.05%)
		width?: number, // 267/515637 (0.05%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5308/515637 (1.03%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"top"|"new"|"old"|"qa",
	third_party_trackers?: [], // 794/515637 (0.15%)
	third_party_tracking?: null, // 794/515637 (0.15%)
	third_party_tracking_2?: null, // 794/515637 (0.15%)
	thumbnail: string,
	thumbnail_height?: null|number, // 386864/515637 (75.03%)
	thumbnail_width?: null|number, // 386864/515637 (75.03%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}