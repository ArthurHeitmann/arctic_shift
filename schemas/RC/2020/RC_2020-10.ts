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
		award_sub_type: "GLOBAL"|"PREMIUM"|"GROUP"|"COMMUNITY"|"APPRECIATION"|"MODERATOR",
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
		subreddit_id: null|"t5_2dptrd"|"t5_32g3v"|"t5_2dptgf"|"t5_2dptqa"|"t5_2dpsxy"|"t5_2htmve"|"t5_2ry83"|"t5_2dpthm"|"t5_2r7gr"|"t5_2set6"|"t5_2q0682"|"t5_2qhh7"|"t5_2vh7th"|"t5_2fqotw"|"t5_2tmxc",
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
	author_cakeday?: boolean, // 637947/186583890 (0.34%)
	author_created_utc: null|number,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 18021875/42320311 (42.58%)
		e: "text"|"emoji",
		t?: string, // 24298436/42320311 (57.42%)
		u?: string, // 18021875/42320311 (42.58%)
	}[], // 166029511/186583890 (88.98%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 166029511/186583890 (88.98%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 166029511/186583890 (88.98%)
	author_premium?: boolean, // 166029511/186583890 (88.98%)
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
	editable?: boolean, // 13264/186583890 (0.01%)
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 81961/186583890 (0.04%)
		gid_2?: number, // 39595/186583890 (0.02%)
		gid_3?: number, // 3801/186583890 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string, // 4636/7835 (59.17%)
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 4636/7835 (59.17%)
			s: {
				gif: string,
				mp4?: string, // 4636/7835 (59.17%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "giphy"|"emoji"|"sticker",
		},
	}, // 7458/186583890 (0.00%)
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
	treatment_tags: ("econ:render:lottie:redstar"|"econ:render:lottie:heartbeat"|"econ:render:lottie:bulb"|"econ:render:lottie:cutie"|"econ:render:lottie:sunny2"|"econ:render:lottie:sunny"|"econ:render:lottie:halloween2020")[],
}