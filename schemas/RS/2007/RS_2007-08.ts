interface RedditPost {
	approved?: boolean, // 2322/84952 (2.73%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 222/84952 (0.26%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|"northcarolina-flag"|"newyork-flag"|"natgeo two"|"california-flag"|"eng"|"bio"|"alabama-flag"|"arkansas-flag"|"   reward2"|"colorado-flag"|"physics"|"un-flag",
	author_flair_richtext?: {
		e: "text",
		t: "North Carolina"|"New York"|"Brian Howard | Writer"|"California"|"PhD | Robotics"|"BS | Zoology | Ecology and Entomology"|"Alabama"|"Arkansas"|"Colorado"|"BS | Physics and Astronomy|Education"|"Foreign",
	}[], // 77130/84952 (90.79%)
	author_flair_text: null|"North Carolina"|"New York"|"Brian Howard | Writer"|"California"|"PhD | Robotics"|"BS | Zoology | Ecology and Entomology"|"Alabama"|"Arkansas"|"Colorado"|"BS | Physics and Astronomy|Education"|"Foreign",
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 77130/84952 (90.79%)
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
	ignore_reports?: boolean, // 2322/84952 (2.73%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/84952 (0.00%)
	link_flair_css_class: null|"nonwhitelistedchannel",
	link_flair_richtext: {
		e: "text",
		t: "Non-whitelisted Youtube Channel",
	}[],
	link_flair_text: null|"Non-whitelisted Youtube Channel",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: "CanadiansNanaimo", // 1/2 (50.00%)
			author_url?: string, // 1/2 (50.00%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://youtube.com"|"https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/2 (50.00%)
			version: "1.0",
			width: number,
		},
		type: "br.youtube.com"|"youtube.com",
	},
	media_embed: {
		content?: string, // 2/84952 (0.00%)
		height?: number, // 2/84952 (0.00%)
		media_domain_url?: string, // 2/84952 (0.00%)
		scrolling?: boolean, // 2/84952 (0.00%)
		width?: number, // 2/84952 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 32/84952 (0.04%)
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
				}, // 2/32 (6.25%)
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
				}, // 2/32 (6.25%)
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
				}, // 1/32 (3.12%)
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
				}, // 1/32 (3.12%)
			},
		}[],
	}, // 32/84952 (0.04%)
	removed?: boolean, // 2322/84952 (2.73%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: "CanadiansNanaimo", // 1/2 (50.00%)
			author_url?: string, // 1/2 (50.00%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://youtube.com"|"https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/2 (50.00%)
			version: "1.0",
			width: number,
		},
		type: "br.youtube.com"|"youtube.com",
	},
	secure_media_embed: {
		content?: string, // 2/84952 (0.00%)
		height?: number, // 2/84952 (0.00%)
		media_domain_url?: string, // 2/84952 (0.00%)
		scrolling?: boolean, // 2/84952 (0.00%)
		width?: number, // 2/84952 (0.00%)
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spam?: boolean, // 2322/84952 (2.73%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new",
	thumbnail: string,
	thumbnail_height: null|number,
	thumbnail_width: null|number,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
}