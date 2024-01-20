interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"PREMIUM"|"GROUP"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null|number,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG"|"JPG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "APNG"|"PNG",
					height: number,
					url: string,
					width: number,
				},
				resized_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				resized_static_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		},
	}[],
	associated_award: null|{
		award_sub_type: "GLOBAL"|"PREMIUM"|"GROUP"|"APPRECIATION"|"COMMUNITY"|"MODERATOR",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits: null|number,
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height: number,
		static_icon_url: string,
		static_icon_width: number,
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null|"t5_2dptrd"|"t5_32g3v"|"t5_2dptgf"|"t5_2dpsxy"|"t5_2dptqa"|"t5_2htmve"|"t5_2set6"|"t5_2r7gr"|"t5_2dpthm"|"t5_2ry83"|"t5_2q0682"|"t5_2tmxc"|"t5_2qhh7"|"t5_2fqotw",
		tiers_by_required_awardings: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "APNG"|"PNG",
					height: number,
					url: string,
					width: number,
				},
				resized_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				resized_static_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		},
	},
	author: string,
	author_cakeday?: boolean, // 631050/186083723 (0.34%)
	author_created_utc: null|number,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 17236663/41288899 (41.75%)
		e: "text"|"emoji",
		t?: string, // 24052236/41288899 (58.25%)
		u?: string, // 17236663/41288899 (41.75%)
	}[], // 164982086/186083723 (88.66%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 164982086/186083723 (88.66%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 164982086/186083723 (88.66%)
	author_premium?: boolean, // 164982086/186083723 (88.66%)
	awarders: [],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	comment_type: null|"PREDICTION",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	editable?: boolean, // 27605/186083723 (0.01%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 96399/186083723 (0.05%)
		gid_2?: number, // 38353/186083723 (0.02%)
		gid_3?: number, // 4192/186083723 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string, // 13479/20116 (67.01%)
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 13479/20116 (67.01%)
			s: {
				gif: string,
				mp4?: string, // 13479/20116 (67.01%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "giphy"|"emoji"|"sticker",
		},
	}, // 19204/186083723 (0.01%)
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:heartbeat"|"econ:render:lottie:bulb"|"econ:render:lottie:cutie"|"econ:render:lottie:sunny2"|"econ:render:lottie:halloween2020"|"econ:render:lottie:champagne")[],
}