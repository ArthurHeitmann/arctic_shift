interface RedditComment {
	approved_by?: null, // 623760/48342747 (1.29%)
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	banned_by?: null, // 623760/48342747 (1.29%)
	body: string,
	body_html?: string|null, // 623760/48342747 (1.29%)
	controversiality: number,
	created?: number|null, // 623760/48342747 (1.29%)
	created_utc: string|number,
	distinguished: null|"moderator"|"admin"|"special",
	downs: number,
	edited: boolean|number,
	gilded: number,
	id: string,
	likes?: null, // 623760/48342747 (1.29%)
	link_id: string,
	mod_reports?: []|null, // 623760/48342747 (1.29%)
	name: string,
	num_reports?: null, // 623760/48342747 (1.29%)
	parent_id: string,
	replies?: ""|null, // 623760/48342747 (1.29%)
	report_reasons?: null, // 623760/48342747 (1.29%)
	retrieved_on?: number, // 43146718/48342747 (89.25%)
	saved?: boolean|null, // 623760/48342747 (1.29%)
	score: number,
	score_hidden: boolean,
	subreddit: string,
	subreddit_id: string,
	ups: number,
	user_reports?: []|null, // 623760/48342747 (1.29%)
}