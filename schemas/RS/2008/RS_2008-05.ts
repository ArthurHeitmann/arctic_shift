interface RedditPost {
	approved?: boolean, // 4450/177022 (2.51%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 819/177022 (0.46%)
	author_flair_background_color: null|"",
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		e: "text",
		t: string,
	}[], // 146378/177022 (82.69%)
	author_flair_text: null|string,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text"|"richtext", // 146378/177022 (82.69%)
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
	ignore_reports?: boolean, // 4450/177022 (2.51%)
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_background_color?: "", // 1/177022 (0.00%)
	link_flair_css_class: null|"Not an Image"|"notappropriate"|"official",
	link_flair_richtext: {
		e: "text",
		t: "Not an Image"|"Blogging Platform"|"Official Source",
	}[],
	link_flair_text: null|"Not an Image"|"Blogging Platform"|"Official Source",
	link_flair_text_color: "dark",
	link_flair_type: "text"|"richtext",
	locked: boolean,
	media: null|{
		oembed: {
			author_name: "mafoisabo"|"kayaness1",
			author_url: "https://www.youtube.com/user/mafoisabo"|"https://www.youtube.com/user/kayaness1",
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "spanking the cat 2"|"Hand Han Solo - Boob Grope",
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 2/177022 (0.00%)
		height?: number, // 2/177022 (0.00%)
		media_domain_url?: string, // 2/177022 (0.00%)
		scrolling?: boolean, // 2/177022 (0.00%)
		width?: number, // 2/177022 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_specified"|"promo_adult_nsfw"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
	permalink: string,
	post_hint?: "link"|"image", // 70/177022 (0.04%)
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
				}, // 2/70 (2.86%)
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
				}, // 2/70 (2.86%)
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
				}, // 3/70 (4.29%)
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
				}, // 3/70 (4.29%)
			},
		}[],
	}, // 70/177022 (0.04%)
	removed?: boolean, // 4450/177022 (2.51%)
	retrieved_on: number,
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			author_name: "mafoisabo"|"kayaness1",
			author_url: "https://www.youtube.com/user/mafoisabo"|"https://www.youtube.com/user/kayaness1",
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "https://www.youtube.com/",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			title: "spanking the cat 2"|"Hand Han Solo - Boob Grope",
			type: "video",
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 2/177022 (0.00%)
		height?: number, // 2/177022 (0.00%)
		media_domain_url?: string, // 2/177022 (0.00%)
		scrolling?: boolean, // 2/177022 (0.00%)
		width?: number, // 2/177022 (0.00%)
	},
	selftext: ""|"[deleted]"|"[removed]",
	send_replies: boolean,
	spam?: boolean, // 4450/177022 (2.51%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new"|"top",
	thumbnail: string,
	thumbnail_height?: null|number, // 177016/177022 (100.00%)
	thumbnail_width?: null|number, // 177016/177022 (100.00%)
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|"promo_specified"|"promo_adult"|"no_ads"|"promo_all"|"house_only"|null,
}