interface RedditComment {
	author: string,
	author_cakeday?: boolean, // 289984/84965681 (0.34%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	body: string,
	can_gild?: boolean, // 84955852/84965681 (99.99%)
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	id: string,
	is_submitter: boolean,
	link_id: string,
	mod_note?: null, // 5039025/84965681 (5.93%)
	mod_reason_by?: null, // 5039025/84965681 (5.93%)
	mod_reason_title?: null, // 5039025/84965681 (5.93%)
	parent_id: string,
	permalink: string,
	retrieved_on: number,
	score: number|null,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_type?: "public"|"restricted"|"user", // 84955852/84965681 (99.99%)
}