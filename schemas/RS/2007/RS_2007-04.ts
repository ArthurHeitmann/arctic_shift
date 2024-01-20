interface RedditPost {
	approved?: boolean, // 1675/61544 (2.72%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 304/61544 (0.49%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|"bio"|"eng"|"   reward2"|"compsci",
	author_flair_richtext?: {
		e: "text",
		t: "BS | Zoology | Ecology and Entomology"|"PhD | Robotics"|"BS | Computer Science",
	}[], // 56958/61544 (92.55%)
	author_flair_text: null|"BS | Zoology | Ecology and Entomology"|"PhD | Robotics"|"BS | Computer Science",
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 56958/61544 (92.55%)
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
	ignore_reports?: boolean, // 1675/61544 (2.72%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null,
	link_flair_richtext: [],
	link_flair_text: null,
	link_flair_text_color: "dark",
	link_flair_type: "text",
	locked: boolean,
	media: null|{
		oembed: {
			author_name?: "sevim1987"|"Josh McAdams", // 2/3 (66.67%)
			author_url?: "https://www.youtube.com/user/sevim1987"|"http://www.youtube.com/user/Ikoniak", // 2/3 (66.67%)
			description?: string, // 1/3 (33.33%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"http://www.youtube.com/"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "kaybolan yillar klip(sevim1987)"|"How to: Magic Smoking Fingers"|"baghdad",
			type: "video"|"rich",
			url?: string, // 1/3 (33.33%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"maps.google.com",
	},
	media_embed: {
		content?: string, // 3/61544 (0.00%)
		height?: number, // 3/61544 (0.00%)
		media_domain_url?: string, // 3/61544 (0.00%)
		scrolling?: boolean, // 3/61544 (0.00%)
		width?: number, // 3/61544 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link"|"rich:video"|"image", // 19/61544 (0.03%)
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
				}, // 1/19 (5.26%)
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
				}, // 1/19 (5.26%)
			},
		}[],
	}, // 19/61544 (0.03%)
	removed?: boolean, // 1675/61544 (2.72%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name?: "sevim1987"|"Josh McAdams", // 2/3 (66.67%)
			author_url?: "https://www.youtube.com/user/sevim1987"|"http://www.youtube.com/user/Ikoniak", // 2/3 (66.67%)
			description?: string, // 1/3 (33.33%)
			height: number,
			html: string,
			provider_name: "YouTube"|"Google Maps",
			provider_url: "https://www.youtube.com/"|"http://www.youtube.com/"|"http://google.com/maps",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "kaybolan yillar klip(sevim1987)"|"How to: Magic Smoking Fingers"|"baghdad",
			type: "video"|"rich",
			url?: string, // 1/3 (33.33%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com"|"maps.google.com",
	},
	secure_media_embed: {
		content?: string, // 3/61544 (0.00%)
		height?: number, // 3/61544 (0.00%)
		media_domain_url?: string, // 3/61544 (0.00%)
		scrolling?: boolean, // 3/61544 (0.00%)
		width?: number, // 3/61544 (0.00%)
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spam?: boolean, // 1675/61544 (2.72%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new",
	thumbnail: string,
	thumbnail_height?: null|number, // 61543/61544 (100.00%)
	thumbnail_width?: null|number, // 61543/61544 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
}