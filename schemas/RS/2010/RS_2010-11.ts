interface RedditPost {
	adserver_click_url?: null, // 640/674615 (0.09%)
	adserver_imp_pixel?: null, // 640/674615 (0.09%)
	approved?: boolean, // 4784/674615 (0.71%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 2711/674615 (0.40%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 475813/674615 (70.53%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 475813/674615 (70.53%)
	author_id?: string|null, // 640/674615 (0.09%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|"ibm.com"|"parentsconnect.com", // 640/674615 (0.09%)
	edited: boolean|number,
	embed_type?: null, // 640/674615 (0.09%)
	embed_url?: null, // 640/674615 (0.09%)
	events?: [], // 640/674615 (0.09%)
	eventsOnRender?: [], // 640/674615 (0.09%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 640/674615 (0.09%)
	id: string,
	ignore_reports?: boolean, // 4784/674615 (0.71%)
	is_blank?: boolean, // 640/674615 (0.09%)
	is_crosspostable: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 41/674615 (0.01%)
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
			author_name?: string, // 862/895 (96.31%)
			author_url?: string, // 862/895 (96.31%)
			cache_age?: number, // 14/895 (1.56%)
			description?: string, // 93/895 (10.39%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"Imgur"|"SoundCloud"|"TED"|"BandCamp"|"Kickstarter"|"Hulu"|"Scribd"|"Trailer Addict"|"Funny Or Die"|"Ustream.tv"|"Tumblr"|"Video Detective"|"Fox",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://imgur.com"|"http://soundcloud.com"|"http://ted.com"|"http://bandcamp.com"|"https://www.kickstarter.com/"|"//www.hulu.com/"|"https://www.scribd.com/"|"https://www.traileraddict.com"|"http://www.funnyordie.com"|"http://ustream.tv"|"http://tumblr.com"|"https://www.videodetective.com/"|"http://www.foxnews.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 8/895 (0.89%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	media_embed: {
		content?: string, // 895/674615 (0.13%)
		height?: number, // 895/674615 (0.13%)
		media_domain_url?: string, // 895/674615 (0.13%)
		scrolling?: boolean, // 895/674615 (0.13%)
		width?: number, // 895/674615 (0.13%)
	},
	mobile_ad_url?: "", // 640/674615 (0.09%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 640/674615 (0.09%)
	outbound_link?: {
	}, // 640/674615 (0.09%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 5175/674615 (0.77%)
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
				}, // 82/5175 (1.58%)
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
				}, // 82/5175 (1.58%)
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
				}, // 179/5175 (3.46%)
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
				}, // 179/5175 (3.46%)
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
		}, // 39/5175 (0.75%)
	}, // 5175/674615 (0.77%)
	priority_id?: null, // 640/674615 (0.09%)
	promoted?: boolean, // 640/674615 (0.09%)
	promoted_by?: null, // 640/674615 (0.09%)
	promoted_display_name?: null, // 640/674615 (0.09%)
	promoted_url?: null, // 640/674615 (0.09%)
	removed?: boolean, // 4784/674615 (0.71%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 862/895 (96.31%)
			author_url?: string, // 862/895 (96.31%)
			cache_age?: number, // 14/895 (1.56%)
			description?: string, // 93/895 (10.39%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Vimeo"|"Imgur"|"SoundCloud"|"TED"|"BandCamp"|"Kickstarter"|"Hulu"|"Scribd"|"Trailer Addict"|"Funny Or Die"|"Ustream.tv"|"Tumblr"|"Video Detective"|"Fox",
			provider_url: "https://www.youtube.com/"|"https://vimeo.com/"|"http://imgur.com"|"http://soundcloud.com"|"http://ted.com"|"http://bandcamp.com"|"https://www.kickstarter.com/"|"//www.hulu.com/"|"https://www.scribd.com/"|"https://www.traileraddict.com"|"http://www.funnyordie.com"|"http://ustream.tv"|"http://tumblr.com"|"https://www.videodetective.com/"|"http://www.foxnews.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 8/895 (0.89%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string, // 895/674615 (0.13%)
		height?: number, // 895/674615 (0.13%)
		media_domain_url?: string, // 895/674615 (0.13%)
		scrolling?: boolean, // 895/674615 (0.13%)
		width?: number, // 895/674615 (0.13%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 4784/674615 (0.71%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted"|"gold_only",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"old"|"controversial",
	third_party_trackers?: [], // 640/674615 (0.09%)
	third_party_tracking?: null, // 640/674615 (0.09%)
	third_party_tracking_2?: null, // 640/674615 (0.09%)
	thumbnail: string|null,
	thumbnail_height?: null|number, // 497917/674615 (73.81%)
	thumbnail_width?: null|number, // 497917/674615 (73.81%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"house_only"|null,
}