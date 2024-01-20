interface RedditPost {
	approved?: boolean, // 4141/147834 (2.80%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 88/147834 (0.06%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 119054/147834 (80.53%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 119054/147834 (80.53%)
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
	ignore_reports?: boolean, // 4141/147834 (2.80%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/147834 (0.00%)
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
			author_name: "My Damn Channel"|"☢ ᴅᴠᴅ ᴘʟᴀʏᴀ ☣"|"Robert Batina"|"TheNewPatriot"|"Loteskie Kiamco",
			author_url: string,
			description?: "found this via some links on wikipedia", // 1/5 (20.00%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/5 (20.00%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 5/147834 (0.00%)
		height?: number, // 5/147834 (0.00%)
		media_domain_url?: string, // 5/147834 (0.00%)
		scrolling?: boolean, // 5/147834 (0.00%)
		width?: number, // 5/147834 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"promo_adult"|"house_only"|"promo_all"|null,
	permalink: string,
	post_hint?: "link"|"image"|"rich:video", // 41/147834 (0.03%)
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
				}, // 1/41 (2.44%)
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
				}, // 1/41 (2.44%)
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
				}, // 3/41 (7.32%)
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
				}, // 3/41 (7.32%)
			},
		}[],
	}, // 41/147834 (0.03%)
	removed?: boolean, // 4141/147834 (2.80%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "My Damn Channel"|"☢ ᴅᴠᴅ ᴘʟᴀʏᴀ ☣"|"Robert Batina"|"TheNewPatriot"|"Loteskie Kiamco",
			author_url: string,
			description?: "found this via some links on wikipedia", // 1/5 (20.00%)
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: string,
			type: "video",
			url?: string, // 1/5 (20.00%)
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 5/147834 (0.00%)
		height?: number, // 5/147834 (0.00%)
		media_domain_url?: string, // 5/147834 (0.00%)
		scrolling?: boolean, // 5/147834 (0.00%)
		width?: number, // 5/147834 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4141/147834 (2.80%)
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
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"no_ads"|"promo_adult"|"house_only"|"promo_all"|null,
}