interface Subreddit {
	_meta: {
		earliest_comment_at: null|number,
		earliest_post_at: number|null,
		num_comments: number,
		num_comments_updated_at: null|number,
		num_posts: number,
		num_posts_updated_at: number|null,
	},
	accept_followers: boolean|null,
	accounts_active: null,
	accounts_active_is_fuzzed: boolean|null,
	active_user_count: null,
	advertiser_category: ""|"Lifestyles"|"Sports"|"Technology"|"Games"|"Automotive"|"Entertainment"|"College / University"|"Local"|"Health"|"Business / Finance"|"Family & Youth"|"Retail"|"Travel"|null,
	all_original_content: boolean|null,
	allow_discovery: boolean|null,
	allow_galleries: boolean|null,
	allow_images: boolean|null,
	allow_polls: boolean|null,
	allow_prediction_contributors: boolean,
	allow_predictions: boolean,
	allow_predictions_tournament: boolean,
	allow_talks: boolean,
	allow_videogifs: boolean,
	allow_videos: boolean,
	allowed_media_in_comments: ("giphy"|"static"|"animated"|"expression")[],
	banner_background_color: string|null,
	banner_background_image: string,
	banner_img: string|null,
	banner_size: null|number[],
	can_assign_link_flair: boolean,
	can_assign_user_flair: boolean,
	collapse_deleted_comments: boolean|null,
	comment_contribution_settings: {
		allowed_media_types?: null|("giphy"|"static"|"animated"|"expression")[],
	},
	comment_score_hide_mins: number|null,
	community_icon: string,
	community_reviewed: boolean|null,
	content_category?: "photography"|"drawing_and_painting"|"gaming"|"entertainment"|"videos"|"animals"|"food"|"music"|"diy_and_crafts"|"memes"|"funny"|"writing",
	created: number,
	created_utc: number,
	description: string|null,
	disable_contributor_requests: boolean|null,
	display_name: string,
	display_name_prefixed: string,
	emojis_custom_size: null|number[],
	emojis_enabled: boolean,
	free_form_reports: boolean|null,
	has_menu_widget: boolean,
	header_img: null|string,
	header_size: null|number[],
	header_title: string|null,
	hide_ads: boolean|null,
	icon_img: string|null,
	icon_size: null|number[],
	id: string,
	interstitial_warning_message?: string,
	is_crosspostable_subreddit: boolean|null,
	is_default_banner?: boolean,
	is_default_icon?: boolean[],
	is_enrolled_in_new_modmail: null,
	key_color: string|null,
	lang: string|null,
	link_flair_enabled: boolean|null,
	link_flair_position: ""|"right"|"left"|null,
	mobile_banner_image: string|null,
	name: string,
	notification_level: null|"low",
	original_content_tag_enabled: boolean|null,
	over18: boolean|null,
	prediction_leaderboard_entry_type: number|null,
	primary_color: string|null,
	public_description: string,
	public_traffic: boolean|null,
	quarantine: boolean|null,
	quarantine_message?: string,
	quarantine_message_html?: string,
	quarantine_permissions?: {
		crossposts: boolean,
		galleries: boolean,
		images: boolean,
		media: boolean,
		polls: boolean,
		sharing: boolean,
		sr_images: boolean,
		styles: boolean,
		subscriber_count: boolean,
		videos: boolean,
	},
	restrict_commenting: boolean|null,
	restrict_posting: boolean|null,
	retrieved_on: number,
	should_archive_posts: boolean|null,
	should_show_media_in_comments_setting: boolean,
	show_media: boolean|null,
	show_media_preview: boolean|null,
	spoilers_enabled: boolean|null,
	submission_type: "any"|"self"|"link"|null,
	submit_link_label: string|null,
	submit_text: string|null,
	submit_text_html: null|string,
	submit_text_label: string|null,
	subreddit_type: "user"|"public"|"restricted"|"private"|"employees_only"|"archived"|"gold_only",
	subscribers: number|null,
	suggested_comment_sort: "qa"|"new"|"confidence"|"top"|"blank"|"old"|"controversial"|"live"|"random"|null,
	title: string,
	url: string,
	user_can_flair_in_sr: null,
	user_flair_background_color: null,
	user_flair_css_class: null,
	user_flair_enabled_in_sr: boolean|null,
	user_flair_position: "right"|"left"|""|null,
	user_flair_richtext: [],
	user_flair_template_id: null|string,
	user_flair_text: null,
	user_flair_text_color: null|string,
	user_flair_type: "text"|"richtext",
	user_has_favorited: null|boolean,
	user_is_banned: null|boolean,
	user_is_contributor: null|boolean,
	user_is_moderator: null|boolean,
	user_is_muted: null|boolean,
	user_is_subscriber: null|boolean,
	user_sr_flair_enabled: null,
	user_sr_theme_enabled: boolean|null,
	videostream_links_count?: number,
	whitelist_status: null|"all_ads"|"some_ads"|"house_only"|"promo_all"|"promo_adult_nsfw",
	wiki_enabled: null|boolean,
	wls: null|number,
}
