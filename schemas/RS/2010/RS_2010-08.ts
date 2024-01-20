interface RedditPost {
	adserver_click_url?: null, // 654/537480 (0.12%)
	adserver_imp_pixel?: null, // 654/537480 (0.12%)
	approved?: boolean, // 4819/537480 (0.90%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 1172/537480 (0.22%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 1/11183 (0.01%)
		e: "text"|"emoji",
		t?: string, // 11182/11183 (99.99%)
		u?: string, // 1/11183 (0.01%)
	}[], // 392302/537480 (72.99%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 392302/537480 (72.99%)
	author_id?: string|null, // 654/537480 (0.12%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 654/537480 (0.12%)
	edited: boolean|number,
	embed_type?: null, // 654/537480 (0.12%)
	embed_url?: null, // 654/537480 (0.12%)
	events?: [], // 654/537480 (0.12%)
	eventsOnRender?: [], // 654/537480 (0.12%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 654/537480 (0.12%)
	id: string,
	ignore_reports?: boolean, // 4819/537480 (0.90%)
	is_blank?: boolean, // 654/537480 (0.12%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 70/537480 (0.01%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "8fc8c9fe-ec13-11e7-a109-0ed8d186392c"|"92f7c828-ec13-11e7-a213-0e55a4ea24ae"|"efd5e3e0-ec13-11e7-a322-0e7f57890812"|"b8779ea2-ec13-11e7-a4e4-0e25c549a0b4"|"3a6e8d08-ec14-11e7-970f-0e4abc07fb78"|"820e08ba-ec13-11e7-9b1b-0ede872df4be"|"008e9afc-f0a5-11e7-b923-0ef524d5ca18"|"9ea3bbb4-ec13-11e7-8976-0e082e1a0288"|"983d9952-ec13-11e7-b558-0e3992e3a2be"|"8541b540-ec13-11e7-8ef6-0ed10d4305e4"|"b6f7a02a-74a6-11e7-8ebf-0e76a733d78a", // 48/537480 (0.01%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 424/442 (95.93%)
			author_url?: string, // 424/442 (95.93%)
			cache_age?: number, // 3/442 (0.68%)
			description?: string, // 45/442 (10.18%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Imgur"|"Vimeo"|"SoundCloud"|"Funny Or Die"|"TED"|"Ustream.tv"|"Scribd"|"Kickstarter"|"SlideShare"|"Tumblr",
			provider_url: "https://www.youtube.com/"|"http://imgur.com"|"https://vimeo.com/"|"http://soundcloud.com"|"http://www.funnyordie.com"|"http://ted.com"|"http://www.youtube.com/"|"http://ustream.tv"|"https://www.scribd.com/"|"https://www.kickstarter.com/"|"https://www.slideshare.net/"|"http://tumblr.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 4/442 (0.90%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"imgur.com"|"vimeo.com"|"soundcloud.com"|"funnyordie.com"|"ted.com"|"ustream.tv"|"scribd.com"|"kickstarter.com"|"slideshare.net"|"christiannightmares.tumblr.com",
	},
	media_embed: {
		content?: string, // 442/537480 (0.08%)
		height?: number, // 442/537480 (0.08%)
		media_domain_url?: string, // 442/537480 (0.08%)
		scrolling?: boolean, // 442/537480 (0.08%)
		width?: number, // 442/537480 (0.08%)
	},
	mobile_ad_url?: "", // 654/537480 (0.12%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 654/537480 (0.12%)
	outbound_link?: {
	}, // 654/537480 (0.12%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 2743/537480 (0.51%)
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
				}, // 41/2743 (1.49%)
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
				}, // 41/2743 (1.49%)
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
				}, // 103/2743 (3.76%)
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
				}, // 103/2743 (3.76%)
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
		}, // 19/2743 (0.69%)
	}, // 2743/537480 (0.51%)
	priority_id?: null, // 654/537480 (0.12%)
	promoted?: boolean, // 654/537480 (0.12%)
	promoted_by?: null, // 654/537480 (0.12%)
	promoted_display_name?: null, // 654/537480 (0.12%)
	promoted_url?: null, // 654/537480 (0.12%)
	removed?: boolean, // 4819/537480 (0.90%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 424/442 (95.93%)
			author_url?: string, // 424/442 (95.93%)
			cache_age?: number, // 3/442 (0.68%)
			description?: string, // 45/442 (10.18%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Imgur"|"Vimeo"|"SoundCloud"|"Funny Or Die"|"TED"|"Ustream.tv"|"Scribd"|"Kickstarter"|"SlideShare"|"Tumblr",
			provider_url: "https://www.youtube.com/"|"http://imgur.com"|"https://vimeo.com/"|"http://soundcloud.com"|"http://www.funnyordie.com"|"http://ted.com"|"http://www.youtube.com/"|"http://ustream.tv"|"https://www.scribd.com/"|"https://www.kickstarter.com/"|"https://www.slideshare.net/"|"http://tumblr.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 4/442 (0.90%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"imgur.com"|"vimeo.com"|"soundcloud.com"|"funnyordie.com"|"ted.com"|"ustream.tv"|"scribd.com"|"kickstarter.com"|"slideshare.net"|"christiannightmares.tumblr.com",
	},
	secure_media_embed: {
		content?: string, // 442/537480 (0.08%)
		height?: number, // 442/537480 (0.08%)
		media_domain_url?: string, // 442/537480 (0.08%)
		scrolling?: boolean, // 442/537480 (0.08%)
		width?: number, // 442/537480 (0.08%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 4819/537480 (0.90%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted"|"gold_only",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"old"|"controversial",
	third_party_trackers?: [], // 654/537480 (0.12%)
	third_party_tracking?: null, // 654/537480 (0.12%)
	third_party_tracking_2?: null, // 654/537480 (0.12%)
	thumbnail: string,
	thumbnail_height?: null|number, // 400643/537480 (74.54%)
	thumbnail_width?: null|number, // 400643/537480 (74.54%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}