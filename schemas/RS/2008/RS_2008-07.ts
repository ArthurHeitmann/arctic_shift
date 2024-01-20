interface RedditPost {
	approved?: boolean, // 4124/218092 (1.89%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 993/218092 (0.46%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 179997/218092 (82.53%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 179997/218092 (82.53%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	edited: boolean,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	id: string,
	ignore_reports?: boolean, // 4124/218092 (1.89%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/218092 (0.00%)
	link_flair_css_class: null|"seventeen"|"twenty"|"red"|"darkred"|"nonwhitelistedchannel",
	link_flair_richtext: {
		e: "text",
		t: "Mathematics"|"Law"|"R1: Political"|"reject: bad topic"|"Non-whitelisted Youtube Channel",
	}[],
	link_flair_text: null|"Mathematics"|"Law"|"R1: Political"|"reject: bad topic"|"Non-whitelisted Youtube Channel",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "Armenuhi Ivanyan"|"VIVI CHEN"|"kissabi"|"ColdFusion0617"|"Robert Abraham"|"Dave Fayram"|"BroncoABQ"|"Color Of Change",
			author_url: string,
			description?: string, // 3/9 (33.33%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SlideShare"|"Vimeo",
			provider_url: "https://www.youtube.com/"|"https://www.slideshare.net/"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"slideshare.net"|"vimeo.com",
	},
	media_embed: {
		content?: string, // 9/218092 (0.00%)
		height?: number, // 9/218092 (0.00%)
		media_domain_url?: string, // 9/218092 (0.00%)
		scrolling?: boolean, // 9/218092 (0.00%)
		width?: number, // 9/218092 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"no_ads"|"promo_adult"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"rich:video"|"image", // 85/218092 (0.04%)
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
				}, // 2/85 (2.35%)
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
				}, // 2/85 (2.35%)
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
				}, // 1/85 (1.18%)
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
				}, // 1/85 (1.18%)
			},
		}[],
	}, // 85/218092 (0.04%)
	removed?: boolean, // 4124/218092 (1.89%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "Armenuhi Ivanyan"|"VIVI CHEN"|"kissabi"|"ColdFusion0617"|"Robert Abraham"|"Dave Fayram"|"BroncoABQ"|"Color Of Change",
			author_url: string,
			description?: string, // 3/9 (33.33%)
			height: number,
			html: string,
			provider_name: "YouTube"|"SlideShare"|"Vimeo",
			provider_url: "https://www.youtube.com/"|"https://www.slideshare.net/"|"https://vimeo.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video"|"rich",
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"slideshare.net"|"vimeo.com",
	},
	secure_media_embed: {
		content?: string, // 9/218092 (0.00%)
		height?: number, // 9/218092 (0.00%)
		media_domain_url?: string, // 9/218092 (0.00%)
		scrolling?: boolean, // 9/218092 (0.00%)
		width?: number, // 9/218092 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4124/218092 (1.89%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"archived"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top",
	thumbnail: string,
	thumbnail_height?: null|number, // 150867/218092 (69.18%)
	thumbnail_width?: null|number, // 150867/218092 (69.18%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"no_ads"|"promo_adult"|"promo_all"|"house_only"|null,
}