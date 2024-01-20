interface RedditPost {
	adserver_click_url?: null, // 664/630298 (0.11%)
	adserver_imp_pixel?: null, // 664/630298 (0.11%)
	approved?: boolean, // 5357/630298 (0.85%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1366/630298 (0.22%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 1/13775 (0.01%)
		e: "text"|"emoji",
		t?: string, // 13774/13775 (99.99%)
		u?: string, // 1/13775 (0.01%)
	}[], // 452660/630298 (71.82%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 452660/630298 (71.82%)
	author_id?: string|null, // 664/630298 (0.11%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|"fordvehicles.com"|"youtube.com"|"thefordstory.com"|"usatoday.com"|"esquire.com"|"autoblog.com"|"appdeveloper.intel.com"|"freep.com"|"techland.com"|"facebook.com"|"secure.syncmyride.com", // 664/630298 (0.11%)
	edited: boolean|number,
	embed_type?: null, // 664/630298 (0.11%)
	embed_url?: null, // 664/630298 (0.11%)
	events?: [], // 664/630298 (0.11%)
	eventsOnRender?: [], // 664/630298 (0.11%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 664/630298 (0.11%)
	id: string,
	ignore_reports?: boolean, // 5357/630298 (0.85%)
	is_blank?: boolean, // 664/630298 (0.11%)
	is_crosspostable: boolean,
	is_original_content?: boolean, // 146462/630298 (23.24%)
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: ""|"#e9987b", // 36/630298 (0.01%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "390a84ee-3096-11e5-8982-0ee61c357d3b"|"1893432e-2eec-11e4-ad9f-12313d14828c", // 2/630298 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 692/722 (95.84%)
			author_url?: string, // 691/722 (95.71%)
			cache_age?: number, // 1/722 (0.14%)
			description?: string, // 64/722 (8.86%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Imgur"|"Vimeo"|"Funny Or Die"|"SoundCloud"|"BandCamp"|"SlideShare"|"Google Maps"|"Trailer Addict"|"ABC News"|"Kickstarter"|"Hulu"|"Ustream.tv",
			provider_url: "https://www.youtube.com/"|"http://imgur.com"|"https://vimeo.com/"|"http://www.funnyordie.com"|"http://bandcamp.com"|"http://soundcloud.com"|"https://www.slideshare.net/"|"http://google.com/maps"|"https://www.traileraddict.com"|"http://abcnews.go.com/"|"https://www.kickstarter.com/"|"https://soundcloud.com"|"//www.hulu.com/"|"http://ustream.tv",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 3/722 (0.42%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	media_embed: {
		content?: string, // 722/630298 (0.11%)
		height?: number, // 722/630298 (0.11%)
		media_domain_url?: string, // 722/630298 (0.11%)
		scrolling?: boolean, // 722/630298 (0.11%)
		width?: number, // 722/630298 (0.11%)
	},
	mobile_ad_url?: "", // 664/630298 (0.11%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 664/630298 (0.11%)
	outbound_link?: {
	}, // 664/630298 (0.11%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 4457/630298 (0.71%)
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
				}, // 66/4457 (1.48%)
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
				}, // 66/4457 (1.48%)
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
				}, // 145/4457 (3.25%)
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
				}, // 145/4457 (3.25%)
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
		}, // 30/4457 (0.67%)
	}, // 4457/630298 (0.71%)
	priority_id?: null, // 664/630298 (0.11%)
	promoted?: boolean, // 664/630298 (0.11%)
	promoted_by?: null, // 664/630298 (0.11%)
	promoted_display_name?: null, // 664/630298 (0.11%)
	promoted_url?: null, // 664/630298 (0.11%)
	removed?: boolean, // 5357/630298 (0.85%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 692/722 (95.84%)
			author_url?: string, // 691/722 (95.71%)
			cache_age?: number, // 1/722 (0.14%)
			description?: string, // 64/722 (8.86%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Imgur"|"Vimeo"|"Funny Or Die"|"SoundCloud"|"BandCamp"|"SlideShare"|"Google Maps"|"Trailer Addict"|"ABC News"|"Kickstarter"|"Hulu"|"Ustream.tv",
			provider_url: "https://www.youtube.com/"|"http://imgur.com"|"https://vimeo.com/"|"http://www.funnyordie.com"|"http://bandcamp.com"|"http://soundcloud.com"|"https://www.slideshare.net/"|"http://google.com/maps"|"https://www.traileraddict.com"|"http://abcnews.go.com/"|"https://www.kickstarter.com/"|"https://soundcloud.com"|"//www.hulu.com/"|"http://ustream.tv",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 3/722 (0.42%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string, // 722/630298 (0.11%)
		height?: number, // 722/630298 (0.11%)
		media_domain_url?: string, // 722/630298 (0.11%)
		scrolling?: boolean, // 722/630298 (0.11%)
		width?: number, // 722/630298 (0.11%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 5357/630298 (0.85%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted"|"gold_only",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"old"|"controversial",
	third_party_trackers?: [], // 664/630298 (0.11%)
	third_party_tracking?: null, // 664/630298 (0.11%)
	third_party_tracking_2?: null, // 664/630298 (0.11%)
	thumbnail: string,
	thumbnail_height?: null|number, // 464733/630298 (73.73%)
	thumbnail_width?: null|number, // 464733/630298 (73.73%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"house_only"|null,
}