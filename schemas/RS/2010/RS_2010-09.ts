interface RedditPost {
	adserver_click_url?: null, // 782/600209 (0.13%)
	adserver_imp_pixel?: null, // 782/600209 (0.13%)
	approved?: boolean, // 5198/600209 (0.87%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1313/600209 (0.22%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":Waterloo-sm:"|":bastok:", // 2/12768 (0.02%)
		e: "text"|"emoji",
		t?: string, // 12766/12768 (99.98%)
		u?: string, // 2/12768 (0.02%)
	}[], // 431147/600209 (71.83%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 431147/600209 (71.83%)
	author_id?: string|null, // 782/600209 (0.13%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|"youtube.com"|"http://www.civilization5.com/"|"reviews.cnet.com", // 782/600209 (0.13%)
	edited: boolean|number,
	embed_type?: null, // 782/600209 (0.13%)
	embed_url?: null, // 782/600209 (0.13%)
	events?: [], // 782/600209 (0.13%)
	eventsOnRender?: [], // 782/600209 (0.13%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 782/600209 (0.13%)
	id: string,
	ignore_reports?: boolean, // 5198/600209 (0.87%)
	is_blank?: boolean, // 782/600209 (0.13%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 39/600209 (0.01%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "92f7c828-ec13-11e7-a213-0e55a4ea24ae"|"8fc8c9fe-ec13-11e7-a109-0ed8d186392c"|"983d9952-ec13-11e7-b558-0e3992e3a2be"|"efd5e3e0-ec13-11e7-a322-0e7f57890812"|"3a6e8d08-ec14-11e7-970f-0e4abc07fb78"|"9ea3bbb4-ec13-11e7-8976-0e082e1a0288"|"390a84ee-3096-11e5-8982-0ee61c357d3b", // 12/600209 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 529/546 (96.89%)
			author_url?: string, // 529/546 (96.89%)
			description?: string, // 44/546 (8.06%)
			height: number,
			html: string,
			mean_alpha?: number, // 1/546 (0.18%)
			provider_name: "YouTube"|"Vimeo"|"Imgur"|"SoundCloud"|"Ustream.tv"|"Funny Or Die"|"Google Maps"|"Libsyn"|"BandCamp"|"Trailer Addict"|"Kickstarter",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://imgur.com"|"http://soundcloud.com"|"http://ustream.tv"|"http://www.funnyordie.com"|"http://google.com/maps"|"https://www.libsyn.com"|"http://bandcamp.com"|"https://www.traileraddict.com"|"http://www.youtube.com/"|"https://www.kickstarter.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 1/546 (0.18%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"imgur.com"|"soundcloud.com"|"ustream.tv"|"funnyordie.com"|"maps.google.com"|"radarhead.libsyn.com"|"traileraddict.com"|"waitwhat.bandcamp.com"|"magicks.bandcamp.com"|"kickstarter.com",
	},
	media_embed: {
		content?: string, // 546/600209 (0.09%)
		height?: number, // 546/600209 (0.09%)
		media_domain_url?: string, // 546/600209 (0.09%)
		scrolling?: boolean, // 546/600209 (0.09%)
		width?: number, // 546/600209 (0.09%)
	},
	mobile_ad_url?: "", // 782/600209 (0.13%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 782/600209 (0.13%)
	outbound_link?: {
	}, // 782/600209 (0.13%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 3805/600209 (0.63%)
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
				}, // 58/3805 (1.52%)
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
				}, // 58/3805 (1.52%)
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
				}, // 248/3805 (6.52%)
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
				}, // 248/3805 (6.52%)
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
		}, // 34/3805 (0.89%)
	}, // 3805/600209 (0.63%)
	priority_id?: null, // 782/600209 (0.13%)
	promoted?: boolean, // 782/600209 (0.13%)
	promoted_by?: null, // 782/600209 (0.13%)
	promoted_display_name?: null, // 782/600209 (0.13%)
	promoted_url?: null, // 782/600209 (0.13%)
	removed?: boolean, // 5198/600209 (0.87%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 529/546 (96.89%)
			author_url?: string, // 529/546 (96.89%)
			description?: string, // 44/546 (8.06%)
			height: number,
			html: string,
			mean_alpha?: number, // 1/546 (0.18%)
			provider_name: "YouTube"|"Vimeo"|"Imgur"|"SoundCloud"|"Ustream.tv"|"Funny Or Die"|"Google Maps"|"Libsyn"|"BandCamp"|"Trailer Addict"|"Kickstarter",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://imgur.com"|"http://soundcloud.com"|"http://ustream.tv"|"http://www.funnyordie.com"|"http://google.com/maps"|"https://www.libsyn.com"|"http://bandcamp.com"|"https://www.traileraddict.com"|"http://www.youtube.com/"|"https://www.kickstarter.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 1/546 (0.18%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"vimeo.com"|"imgur.com"|"soundcloud.com"|"ustream.tv"|"funnyordie.com"|"maps.google.com"|"radarhead.libsyn.com"|"traileraddict.com"|"waitwhat.bandcamp.com"|"magicks.bandcamp.com"|"kickstarter.com",
	},
	secure_media_embed: {
		content?: string, // 546/600209 (0.09%)
		height?: number, // 546/600209 (0.09%)
		media_domain_url?: string, // 546/600209 (0.09%)
		scrolling?: boolean, // 546/600209 (0.09%)
		width?: number, // 546/600209 (0.09%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5198/600209 (0.87%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted"|"gold_only",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"old"|"controversial",
	third_party_trackers?: [], // 782/600209 (0.13%)
	third_party_tracking?: null, // 782/600209 (0.13%)
	third_party_tracking_2?: null, // 782/600209 (0.13%)
	thumbnail: string,
	thumbnail_height?: null|number, // 446489/600209 (74.39%)
	thumbnail_width?: null|number, // 446489/600209 (74.39%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}