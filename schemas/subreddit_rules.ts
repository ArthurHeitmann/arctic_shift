interface SubredditRules {
	retrieved_on: string,
	rules: {
		created_utc: number,
		description: string|null,
		kind: "all"|"link"|"comment",
		priority: number,
		short_name: string,
		violation_reason: string,
	}[],
	subreddit: string,
}
