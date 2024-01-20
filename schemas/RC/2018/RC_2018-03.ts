interface RedditComment {
	approved_by?: null, // 34739723/96490262 (36.00%)
	author: string,
	author_cakeday?: boolean, // 315532/96490262 (0.33%)
	author_flair_css_class: null|string,
	author_flair_template_id?: null|string, // 50711548/96490262 (52.56%)
	author_flair_text: null|string,
	banned_by?: null, // 34739723/96490262 (36.00%)
	body: string,
	body_html?: string, // 34739723/96490262 (36.00%)
	can_gild: boolean,
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	edited: boolean|number,
	gilded: number,
	id: string,
	is_submitter: boolean,
	likes?: null, // 34739723/96490262 (36.00%)
	link_id: string,
	mod_reports?: [], // 34739723/96490262 (36.00%)
	no_follow: boolean,
	num_reports?: null, // 34739723/96490262 (36.00%)
	parent_id: string,
	permalink: string,
	removal_reason?: null|"legal", // 34741847/96490262 (36.01%)
	replies?: "", // 34741847/96490262 (36.01%)
	report_reasons?: null, // 34739723/96490262 (36.00%)
	retrieved_on?: number, // 96488138/96490262 (100.00%)
	saved?: boolean, // 34739723/96490262 (36.00%)
	score: number,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_type: "public"|"restricted"|"user"|"archived"|"gold_restricted",
	user_reports?: [], // 34739723/96490262 (36.00%)
}