interface RedditPost {
	approved?: boolean, // 3971/190682 (2.08%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 997/190682 (0.52%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 155321/190682 (81.46%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 155321/190682 (81.46%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	edited: boolean|number,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	id: string,
	ignore_reports?: boolean, // 3971/190682 (2.08%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null|"twentytwo"|"seventeen"|"two"|""|"ten"|"nine",
	link_flair_richtext: {
		e: "text",
		t: "Technology"|"Mathematics"|"Linguistics"|"please move to megathread"|"Psychology"|"Physics",
	}[],
	link_flair_text: null|"Technology"|"Mathematics"|"Linguistics"|"please move to megathread"|"Psychology"|"Physics",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: "yourweek"|"discofrisko"|"boburnham", // 8/9 (88.89%)
			author_url?: "https://www.youtube.com/user/yourweek"|"https://www.youtube.com/user/discofrisko"|"https://www.youtube.com/user/boburnham", // 8/9 (88.89%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"maps.google.com",
	},
	media_embed: {
		content?: string, // 9/190682 (0.00%)
		height?: number, // 9/190682 (0.00%)
		media_domain_url?: string, // 9/190682 (0.00%)
		scrolling?: boolean, // 9/190682 (0.00%)
		width?: number, // 9/190682 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"rich:video"|"image", // 94/190682 (0.05%)
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
				}, // 4/94 (4.26%)
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
				}, // 4/94 (4.26%)
			},
		}[],
	}, // 94/190682 (0.05%)
	removed?: boolean, // 3971/190682 (2.08%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: "yourweek"|"discofrisko"|"boburnham", // 8/9 (88.89%)
			author_url?: "https://www.youtube.com/user/yourweek"|"https://www.youtube.com/user/discofrisko"|"https://www.youtube.com/user/boburnham", // 8/9 (88.89%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"maps.google.com",
	},
	secure_media_embed: {
		content?: string, // 9/190682 (0.00%)
		height?: number, // 9/190682 (0.00%)
		media_domain_url?: string, // 9/190682 (0.00%)
		scrolling?: boolean, // 9/190682 (0.00%)
		width?: number, // 9/190682 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 3971/190682 (2.08%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top",
	thumbnail: string,
	thumbnail_height: null|number,
	thumbnail_width: null|number,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}