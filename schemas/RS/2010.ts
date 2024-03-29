interface RedditPost_2010 {
	adserver_click_url?: null,
	adserver_imp_pixel?: null,
	approved?: boolean,
	archived: boolean,
	author: string,
	author_cakeday?: boolean,
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:"|":Waterloo-sm:",
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext",
	author_id?: string|null,
	ban_note?: null,
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|"youtube.com"|"http://www.civilization5.com/"|"reviews.cnet.com"|"fordvehicles.com"|"thefordstory.com"|"usatoday.com"|"esquire.com"|"autoblog.com"|"appdeveloper.intel.com"|"freep.com"|"techland.com"|"facebook.com"|"secure.syncmyride.com"|"ibm.com"|"parentsconnect.com",
	edited: boolean|number,
	embed_type?: null,
	embed_url?: null,
	events?: [],
	eventsOnRender?: [],
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string,
	id: string,
	ignore_reports?: boolean,
	is_blank?: boolean,
	is_crosspostable: boolean,
	is_original_content?: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: ""|"#e9987b",
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: string,
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height: number,
			html: string,
			mean_alpha?: number,
			provider_name: string,
			provider_url: string,
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string,
			version: "1.0",
			width: number,
		},
		type: string,
	},
	media_embed: {
		content?: string,
		height?: number,
		media_domain_url?: string,
		scrolling?: boolean,
		width?: number,
	},
	mobile_ad_url?: "",
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null,
	outbound_link?: {
	},
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self",
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
				},
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
				},
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
				},
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
				},
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
		},
	},
	priority_id?: null,
	promoted?: boolean,
	promoted_by?: null,
	promoted_display_name?: null,
	promoted_url?: null,
	removed?: boolean,
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string,
			author_url?: string,
			cache_age?: number,
			description?: string,
			height: number,
			html: string,
			mean_alpha?: number,
			provider_name: string,
			provider_url: string,
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string,
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string,
		height?: number,
		media_domain_url?: string,
		scrolling?: boolean,
		width?: number,
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean,
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted"|"gold_only",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"old"|"controversial",
	third_party_trackers?: [],
	third_party_tracking?: null,
	third_party_tracking_2?: null,
	thumbnail: string|null,
	thumbnail_height?: null|number,
	thumbnail_width?: null|number,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}
