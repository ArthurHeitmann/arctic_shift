interface RedditPost {
	approved?: boolean, // 4373/168227 (2.60%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 170/168227 (0.10%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 138089/168227 (82.08%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 138089/168227 (82.08%)
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
	ignore_reports?: boolean, // 4373/168227 (2.60%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/168227 (0.00%)
	link_flair_css_class: null|""|"nonwhitelistedchannel"|"roomescape",
	link_flair_richtext: {
		e: "text",
		t: "Editorialized Title"|"Non-whitelisted Youtube Channel"|"[First Post]",
	}[],
	link_flair_text: null|"Editorialized Title"|"Non-whitelisted Youtube Channel"|"[First Post]",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "1Jarofdirt"|"American Payroll Association",
			author_url: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "Planning to Fail"|"Get Your Tax Rebate: General Taxpayers",
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 2/168227 (0.00%)
		height?: number, // 2/168227 (0.00%)
		media_domain_url?: string, // 2/168227 (0.00%)
		scrolling?: boolean, // 2/168227 (0.00%)
		width?: number, // 2/168227 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"promo_adult"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 50/168227 (0.03%)
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
				}, // 2/50 (4.00%)
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
				}, // 2/50 (4.00%)
			},
		}[],
	}, // 50/168227 (0.03%)
	removed?: boolean, // 4373/168227 (2.60%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "1Jarofdirt"|"American Payroll Association",
			author_url: string,
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "Planning to Fail"|"Get Your Tax Rebate: General Taxpayers",
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 2/168227 (0.00%)
		height?: number, // 2/168227 (0.00%)
		media_domain_url?: string, // 2/168227 (0.00%)
		scrolling?: boolean, // 2/168227 (0.00%)
		width?: number, // 2/168227 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4373/168227 (2.60%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top"|"qa",
	thumbnail: string,
	thumbnail_height?: null|number, // 168226/168227 (100.00%)
	thumbnail_width?: null|number, // 168226/168227 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"promo_adult"|"promo_all"|"house_only"|null,
}