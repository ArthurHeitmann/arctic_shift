interface SubredditWikiPage {
	content: string,
	path: string,
	retrieved_on: string,
	revision_author: string|null,
	revision_author_id: string|null,
	revision_date: string,
	revision_reason: null|string,
}
