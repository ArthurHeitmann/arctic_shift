interface RedditPost {
	adserver_click_url?: null, // 716/729840 (0.10%)
	adserver_imp_pixel?: null, // 716/729840 (0.10%)
	approved?: boolean, // 4577/729840 (0.63%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 2587/729840 (0.35%)
	author_flair_background_color: null|""|"#edeff1",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: ":bastok:", // 2/17357 (0.01%)
		e: "text"|"emoji",
		t?: string, // 17355/17357 (99.99%)
		u?: string, // 2/17357 (0.01%)
	}[], // 509887/729840 (69.86%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 509887/729840 (69.86%)
	author_id?: string|null, // 716/729840 (0.10%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null, // 716/729840 (0.10%)
	edited: boolean|number,
	embed_type?: null, // 716/729840 (0.10%)
	embed_url?: null, // 716/729840 (0.10%)
	events?: [], // 716/729840 (0.10%)
	eventsOnRender?: [], // 716/729840 (0.10%)
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 716/729840 (0.10%)
	id: string,
	ignore_reports?: boolean, // 4577/729840 (0.63%)
	is_blank?: boolean, // 716/729840 (0.10%)
	is_crosspostable: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 56/729840 (0.01%)
	link_flair_css_class: null|string,
	link_flair_richtext: {
		e: "text",
		t: string,
	}[],
	link_flair_template_id?: "a6c1ba7a-b172-11e7-b8e9-0e102f425a32"|"0d95094c-7d51-11e7-8289-0ec462855064"|"ee671dc6-e304-11e1-98d6-12313b0c247a"|"084a5ff8-6806-11e5-9958-12c8a3890827"|"85f81fd4-87ee-11e3-a1b2-12313d18400c"|"01858ec6-884d-11e3-aa71-12313d224170"|"94b74222-74a6-11e7-aedf-0e8c0cb73d02", // 10/729840 (0.00%)
	link_flair_text: null|string,
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: string, // 879/920 (95.54%)
			author_url?: string, // 881/920 (95.76%)
			cache_age?: number, // 6/920 (0.65%)
			description?: string, // 91/920 (9.89%)
			height: number,
			html: string,
			mean_alpha?: number, // 2/920 (0.22%)
			provider_name: string,
			provider_url: string,
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 11/920 (1.20%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	media_embed: {
		content?: string, // 920/729840 (0.13%)
		height?: number, // 920/729840 (0.13%)
		media_domain_url?: string, // 920/729840 (0.13%)
		scrolling?: boolean, // 920/729840 (0.13%)
		width?: number, // 920/729840 (0.13%)
	},
	mobile_ad_url?: "", // 716/729840 (0.10%)
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	original_link?: null, // 716/729840 (0.10%)
	outbound_link?: {
	}, // 716/729840 (0.10%)
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video"|"self", // 5504/729840 (0.75%)
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
				}, // 58/5504 (1.05%)
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
				}, // 58/5504 (1.05%)
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
				}, // 212/5504 (3.85%)
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
				}, // 212/5504 (3.85%)
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
		}, // 27/5504 (0.49%)
	}, // 5504/729840 (0.75%)
	priority_id?: null, // 716/729840 (0.10%)
	promoted?: boolean, // 716/729840 (0.10%)
	promoted_by?: null, // 716/729840 (0.10%)
	promoted_display_name?: null, // 716/729840 (0.10%)
	promoted_url?: null, // 716/729840 (0.10%)
	removed?: boolean, // 4577/729840 (0.63%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: string, // 879/920 (95.54%)
			author_url?: string, // 881/920 (95.76%)
			cache_age?: number, // 6/920 (0.65%)
			description?: string, // 91/920 (9.89%)
			height: number,
			html: string,
			mean_alpha?: number, // 2/920 (0.22%)
			provider_name: string,
			provider_url: string,
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			url?: string, // 11/920 (1.20%)
			version: "1.0",
			width: number,
		},
		type: string,
	},
	secure_media_embed: {
		content?: string, // 920/729840 (0.13%)
		height?: number, // 920/729840 (0.13%)
		media_domain_url?: string, // 920/729840 (0.13%)
		scrolling?: boolean, // 920/729840 (0.13%)
		width?: number, // 920/729840 (0.13%)
	},
	selftext: string,
	send_replies: boolean,
	spam?: boolean, // 4577/729840 (0.63%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted"|"gold_only",
	suggested_sort: null|"confidence"|"top"|"new"|"qa"|"controversial"|"old",
	third_party_trackers?: [], // 716/729840 (0.10%)
	third_party_tracking?: null, // 716/729840 (0.10%)
	third_party_tracking_2?: null, // 716/729840 (0.10%)
	thumbnail: string,
	thumbnail_height?: null|number, // 538092/729840 (73.73%)
	thumbnail_width?: null|number, // 538092/729840 (73.73%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult"|"promo_adult_nsfw"|"no_ads"|"promo_all"|"house_only"|null,
}