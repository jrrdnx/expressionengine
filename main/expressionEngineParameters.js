"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
	"exp:channel:month_links": {
		channel: {
			documentation: 'The name of the channel you want to limit the query to.',
			detail: 'Type: string',
		},
		limit: {
			documentation: 'The number of rows to return.',
			detail: 'Type: number',
		},
		sort: {
			documentation: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
			detail: 'Type: string\nValues: \'desc|asc\'\nDefault: \'desc\'',
		},
		show_expired: {
			documentation: 'You can determine whether you wish for entries that have "expired" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		show_future_entries: {
			documentation: 'You can determine whether you wish for entries dated in the "future" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		status: {
			documentation: 'Restrict to categories with a particular status. Default is to show only categories with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		}
	},
	"exp:channel:calendar": {
		leading_zeroes: {
			documentation: 'Setting this parameter to "yes" will display the {day_number} variable as a two-digit, zero-padded number, e.g.: 01, 02, 03, etc. The default setting is "no".',
			detail: 'Type: string\nValues: \'yes|no\'Default: \'no\'',
		},
		month: {
			documentation: 'Hardcode the month to display for the calendar.',
			detail: 'Type: number',
		},
		year: {
			documentation: 'Hardcode the year to display for the calendar.',
			detail: 'Type: number',
		},
		show_future_entries: {
			documentation: 'Determine whether you wish for entries dated in the "future" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		start_day: {
			documentation: 'Define the day of the week on which your week starts.',
			detail: 'Type: string\nValues: \'sunday|monday|tuesday|wednesday|thursday|friday|saturday\'',
		},
		switch: {
			documentation: 'Lets you define two states: the "today" state and "all other" states.',
			detail: 'Type: string',
		},
	},
	"exp:channel:categories": {
		backspace: {
			documentation: 'Removes characters, including spaces and line breaks, from the last iteration of the tag pair.',
			detail: 'Type: number',
		},
		category_group: {
			documentation: 'Limit/exclude results by category group IDs.',
			detail: 'Type: number|list',
		},
		channel: {
			documentation: 'The name (short name) of the channel that the categories are assigned to.',
			detail: 'Required: if more than one channel\nType: string',
		},
		class: {
			documentation: 'When using the "nested" style of display (see the "style" parameter), this lets you specify the value of the "class" attribute in the opening <ul> tag.',
			detail: 'Type: string',
		},
		disable: {
			documentation: 'Allows you to turn off aspects of the tag that you might not be using in order to improve performance.',
			detail: 'Type: string|list',
		},
		id: {
			documentation: 'When using the "nested" style of display (see the "style" parameter), this lets you specify the value of the "id" attribute in the opening <ul> tag.',
			detail: 'Type: string',
		},
		parent_only: {
			documentation: 'Limit the category display to only "parent" categories.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		restrict_channel: {
			documentation: 'When "restrict_channel" is set to "no", the show_empty parameter will display categories that have no entries from all channels.',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		show: {
			documentation: 'Specify which categories will be included in the list.',
			detail: 'Type: number|list',
		},
		show_empty: {
			documentation: 'Determines whether or not categories that contain no entries for the specific channel are displayed.',
			detail: 'Type: string\nValues: \'no\'',
		},
		show_expired: {
			documentation: 'Determines whether expired entries are included when calculating whether a category has entries when the "show_empty" parameter is set to not show empty categories.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		show_future_entries: {
			documentation: 'Determines whether entries dated in the "future" to are included when calculating whether a category has entries when the "show_empty" parameter is set to not show empty categories.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		status: {
			documentation: 'Restrict to categories with a particular status. Default is to show only categories with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		},
		style: {
			documentation: 'Use "nested" to display parent/child hierarchy using unordered list HTML. Use "linear" to show pure list without HTML.',
			detail: 'Type: string\nValues: \'nested|linear\'\nDefault: \'nested\'',
		},
	},
	"exp:channel:category_archive": {
		backspace: {
			documentation: 'Removes characters (including spaces and line breaks) from the last iteration of the loop.',
			detail: 'Type: number',
		},
		channel: {
			documentation: 'The name of the channel that the categories are assigned to.',
			detail: 'Required: if more than one channel\nType: string',
		},
		class: {
			documentation: 'When using the "nested" style of display (see the "style" parameter), this lets you specify the value of the "class" attribute in the opening <ul> tag.',
			detail: 'Type: string',
		},
		disable: {
			documentation: 'Allows you to turn off aspects of the tag that you might not be using in order to improve performance. ',
			detail: 'Type: string|list',
		},
		id: {
			documentation: 'When using the "nested" style of display (see the "style" parameter), this lets you specify the value of the "id" attribute in the opening <ul> tag.',
			detail: 'Type: string',
		},
		orderby: {
			documentation: 'Sets the display order of the entries.',
			detail: 'Type: string\nValues: \'date|title|comment|most_recent_comment\'\nDefault: \'title\'',
		},
		show: {
			documentation: 'Specify which categories will be included in the list.',
			detail: 'Type: number|list',
		},
		show_empty: {
			documentation: 'Determines whether or not categories that contain no entries are displayed.',
			detail: 'Type: string\nValues: \'no\'',
		},
		show_future_entries: {
			documentation: 'Determine whether you wish for entries dated in the "future" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		sort: {
			documentation: 'Sort ascending ("asc") or descending ("desc"). Defaults to descending.',
			detail: 'Type: string\nValues: \'desc|asc\'\nDefault: \'desc\'',
		},
		status: {
			documentation: 'Restrict to categories with a particular status. Default is to show only categories with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		},
		style: {
			documentation: 'Use "nested" to display parent/child hierarchy using unordered list HTML. Use "linear" to show pure list without HTML.',
			detail: 'Type: string',
		},
	},
	"exp:channel:category_heading": {
		disable: {
			documentation: 'Allows you to turn off aspects of the tag that you might not be using in order to improve performance.',
			detail: 'Type: string|list',
		},
		relaxed_categories: {
			documentation: 'Allows you use the category indicator in your URLs with an entries tag specifying multiple channels that do not share category groups.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		channel: {
			documentation: 'The name (short name) of the channel that the categories are assigned to.',
			detail: 'Type: string',
		},
	},
	"exp:channel:entries": {
		author_id: {
			documentation: 'Will limit the returned entries to the specified Member ID.',
			detail: 'Type: number',
		},
		backspace: {
			documentation: 'Will remove characters, including spaces and line breaks, from the last iteration of the tag pair.',
			detail: 'Type: number',
		},
		cache: {
			documentation: 'This parameter enables tag caching. Used with the "refresh" parameter.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		refresh: {
			documentation: 'Refresh is the number of minutes between cache refreshes.',
			detail: 'Type: number',
		},
		cat_limit: {
			documentation: 'Lets you set a different limit for the category display than the regular display.',
			detail: 'Type: number',
		},
		category: {
			documentation: 'Limit/exclude results by category IDs.',
			detail: 'Type: number|list',
		},
		category_group: {
			documentation: 'Limit/exclude results by category group IDs.',
			detail: 'Type: number|list',
		},
		channel: {
			documentation: 'From which channel to show the entries.',
			detail: 'Type: string|list',
		},
		disable: {
			documentation: 'Turn off aspects of the tag that you might not be using in order to improve performance.',
			detail: 'Type: string|list',
		},
		display_by: {
			documentation: 'Limit the display of your entries by "month" or "week". Default is "number".',
			detail: 'Type: string\nValues: \'month|day|week\'\nDefault: \'number\'',
		},
		dynamic: {
			documentation: 'Override the dynamic nature of the channel tag based on what is in the URL.',
			detail: 'Type: string\nValues: \'no\'',
		},
		dynamic_parameters: {
			documentation: 'Permits a tag\'s parameters to be set "on the fly" using POST data submitted via a form.',
			detail: 'Type: string|list',
		},
		dynamic_start: {
			documentation: 'Allows ExpressionEngine to dynamically provide a starting date for the feed (only when used in an RSS/Atom feed, otherwise has no effect).',
			detail: 'Type: string\nValues: \'yes\'',
		},
		entry_id: {
			documentation: 'Hard code the channel tag to show a specific channel entry.',
			detail: 'Type: number|list',
		},
		entry_id_from: {
			documentation: 'Used together with "entry_id_to" to designate a range of entries to display.',
			detail: 'Type: number',
		},
		entry_id_to: {
			documentation: 'Used together with "entry_id_from" to designate a range of entries to display.',
			detail: 'Type: number',
		},
		fixed_order: {
			documentation: 'Hard code the channel entries tag to show entries in a specific order based on their entry ids.',
			detail: 'Type: number|list',
		},
		group_id: {
			documentation: 'Designate from which Member Groups (by specifying the group ID) you wish entries to be shown.',
			detail: 'Type: number|list',
		},
		limit: {
			documentation: 'Limits the number of entries on any given page.',
			detail: 'Type: number',
		},
		month_limit: {
			documentation: 'Lets you set a different limit for the month display than the regular display.',
			detail: 'Type: number',
		},
		offset: {
			documentation: 'Offsets the display by X number of entries.',
			detail: 'Type: number',
		},
		orderby: {
			documentation: 'Sets the display order of the entries.',
			detail: 'Type: string|list\nValues: \'comment_total|date|edit_date|entry_id|expiration_date|most_recent_comment|random|screen_name|status|title|url_title|username|view_count_one|view_count_two|view_count_three|view_count_four|CHANNEL_FIELD\'',
		},
		paginate: {
			documentation: 'Determines where the pagination code will appear for your channel entries.',
			detail: 'Type: string\nValues: \'top|bottom|both\'\nDefault: \'bottom\'',
		},
		paginate_base: {
			documentation: 'Override the normal pagination link locations and point instead to the explicitly stated template group and template.',
			detail: 'Type: string',
		},
		paginate_type: {
			documentation: 'Tells ExpressionEngine to function in "pagination" mode for your channel entry fields so that you can automatically have an entry span multiple pages.',
			detail: 'Type: string',
		},
		related_categories_mode: {
			documentation: 'Alters the behavior of the tag, causing it to ignore the entry ID or URL title found in the URL, and instead show a list of entries that are in the same category as the entry specified in the URL.',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		relaxed_categories: {
			documentation: 'Allows you to use the category indicator in your URLs with an entries tag specifying multiple channels that do not share category groups.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		require_entry: {
			documentation: 'Tells the channel tag that it should expect the URL to contain a valid entry ID or a valid URL title.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		"search:": {
			documentation: 'Allows you to constrain Channel Entries output based on content within your fields. Specify which field to search by using the field\'s short name immediately after "search:".',
			detail: 'Type: string|operator|constant',
		},
		show_current_week: {
			documentation: 'Requires use of the "display_by=\'week\'" parameter. When set to "yes", it displays the current week by default.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		show_expired: {
			documentation: 'Include, exclude, or show only expired entries by using "yes", "no", or "only".',
			detail: 'Type: string\nValues: \'yes|no|only\'\nDefault: \'no\'',
		},
		show_future_entries: {
			documentation: 'Determine whether you wish for entries dated in the "future" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		show_pages: {
			documentation: 'Whether to show those entries that have been used to create pages with the Pages module.',
			detail: 'Type: string\nValues: \'yes|no|only\'\nDefault: \'yes\'',
		},
		sort: {
			documentation: 'Sort ascending ("asc") or descending ("desc"). Defaults to descending.',
			detail: 'Type: string|list\nValues: \'desc|asc\'\nDefault: \'desc\'',
		},
		start_day: {
			documentation: 'Requires use of the "display_by=\'week\'" parameter. Allows you to choose whether the week starts on Monday or Sunday. Sunday is the default.',
			detail: 'Type: string\nValues: \'Sunday|Monday\'\nDefault: \'Sunday\'',
		},
		start_on: {
			documentation: 'Specify a particular date/time on which to start the entries.',
			detail: 'Type: date',
		},
		status: {
			documentation: 'Restrict to entries with a particular status. Default is to show only entries with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		},
		stop_before: {
			documentation: 'Specify a particular date/time on which to end the entries.',
			detail: 'Type: date',
		},
		sticky: {
			documentation: 'Sticky topics forced to top of the page, ordered normally, or show only sticky topics by using "yes", "no", or "only".',
			detail: 'Type: string\nValues: \'yes|no|only\'\nDefault: \'yes\'',
		},
		track_views: {
			documentation: 'Track how many times a channel entry has been "viewed" on a particular page.',
			detail: 'Type: string',
		},
		uncategorized_entries: {
			documentation: 'Set to "no" to not show entries that don\'t have categories assigned.',
			detail: 'Type: string\nValues: \'no\'',
		},
		url_title: {
			documentation: 'Limits the query by an entry\'s url_title.',
			detail: 'Type: string|list',
		},
		username: {
			documentation: 'Limits the query by username.',
			detail: 'Type: string|list',
		},
		week_sort: {
			documentation: 'Requires the "display_by=\'week\'" parameter. Changes the sort order of the weeks so that you can either have the weeks displayed by most recent first or oldest first.',
			detail: 'Type: string\nValues: \'desc|asc\'\nDefault: \'asc\'',
		},
		year: {
			documentation: 'Limit queries by year.',
			detail: 'Type: number',
		},
		month: {
			documentation: 'Limit queries by month.',
			detail: 'Type: number',
		},
		day: {
			documentation: 'Limit queries by day.',
			detail: 'Type: number',
		},
	},
	"exp:channel:info": {
		channel: {
			documentation: 'The name (short name) of the channel. This is a required parameter.',
			detail: 'Required: yes\'Type: string',
		},
	},
	"exp:channel:next_entry": {
		category: {
			documentation: 'Limit/exclude results by category IDs.',
			detail: 'Type: number|list',
		},
		category_group: {
			documentation: 'Limit/exclude results by category group IDs.',
			detail: 'Type: number|list',
		},
		channel: {
			documentation: 'Restrict to a specific channel.',
			detail: 'Type: string|list',
		},
		entry_id: {
			documentation: 'Limit the tag to specific entries, or more practically, you can ommit specific entries from showing up in the cycle, by using "not".',
			detail: 'Type: number|list',
		},
		show_expired: {
			documentation: 'Determine whether you wish for entries that have "expired" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		show_future_entries: {
			documentation: 'Determine whether you wish for entries dated in the "future" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		status: {
			documentation: 'Restrict to entries with a particular status. Default is to show only entries with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		},
		url_title: {
			documentation: 'Specify the URL title in which the module uses as a reference for next and previous entries.',
			detail: 'Type: string',
		},
	},
	"exp:channel:prev_entry": {
		category: {
			documentation: 'Limit/exclude results by category IDs.',
			detail: 'Type: number|list',
		},
		category_group: {
			documentation: 'Limit/exclude results by category group IDs.',
			detail: 'Type: number|list',
		},
		channel: {
			documentation: 'Restrict to a specific channel.',
			detail: 'Type: string|list',
		},
		entry_id: {
			documentation: 'Limit the tag to specific entries, or more practically, you can ommit specific entries from showing up in the cycle, by using "not".',
			detail: 'Type: number|list',
		},
		show_expired: {
			documentation: 'Determine whether you wish for entries that have "expired" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		show_future_entries: {
			documentation: 'Determine whether you wish for entries dated in the "future" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		status: {
			documentation: 'Restrict to entries with a particular status. Default is to show only entries with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		},
		url_title: {
			documentation: 'Specify the URL title in which the module uses as a reference for next and previous entries.',
			detail: 'Type: string',
		},
	},
	"exp:channel:form": {
		allow_comments: {
			documentation: 'Force the allow comments value for the submitted entry, for both new entries and edits.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		author_only: {
			documentation: 'Only allow the author of the entry to edit the entry. Defaults to "no".',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		category: {
			documentation: 'If you don\'t wish to include the form option on the page then you can set any categories that you wish to assign the entry to via this parameter.',
			detail: 'Type: number|list',
		},
		channel: {
			documentation: 'Required. The short name of the channel.',
			detail: 'Required: yes\nType: string',
		},
		class: {
			documentation: 'Specify the CSS class.',
			detail: 'Type: string',
		},
		datepicker: {
			documentation: 'Adds the datepicker to your date fields. Defaults to "yes".',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'yes\'',
		},
		dynamic_title: {
			documentation: 'Dynamically set the title of your entry based on your entry\'s data.',
			detail: 'Type: string',
		},
		entry_id: {
			documentation: 'The entry_id of the channel entry you wish to edit.',
			detail: 'Type: number',
		},
		error_handling: {
			documentation: 'Choose to display error messages inline.',
			detail: 'Type: string\nValues: \'inline\'',
		},
		id: {
			documentation: 'Specify the CSS id.',
			detail: 'Type: string',
		},
		include_assets: {
			documentation: 'Adds necessary Javascript and CSS to your form.',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'yes\'',
		},
		include_jquery: {
			documentation: 'Includes jQuery automatically. Defaults to "yes".',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'yes\'',
		},
		json: {
			documentation: 'Output your results in JSON format, instead of performing a redirect.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		logged_out_member_id: {
			documentation: 'In order to allow logged out users to use the entry form, you must specify a member_id which will be used as the author of the entry.',
			detail: 'Type: number',
		},
		require_entry: {
			documentation: 'Require an entry to edit via the entry_id or url_title parameters. Disables new entries. Defaults to "no".',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		return: {
			documentation: 'Required. Specify a path to redirect the user to after an entry submission. You may use the constants ENTRY_ID and URL_TITLE, which will be replaced with the entry\'s entry_id or url_title, respectively.',
			detail: 'Required: yes\nType: string',
		},
		return_X: {
			documentation: 'Specify a path to redirect the user to after an entry submission, based on the user\'s member group. Replace X with the group_id of the member group.',
			detail: 'Type: string',
		},
		"rules:": {
			documentation: 'Add additional validation rules to your fields. Specify which field to validate by using the field\'s short name immediately after "rules:". Separate multiple rules with the pipe | character. You may use any of these rules: (required, matches, min_length, max_length, exact_length, alpha, alpha_numeric, alpha_dash, numeric, integer, is_natural, is_natural_no_zero, valid_ee_date, valid_email, valid_emails, valid_ip, valid_base64).',
			detail: 'Type: string|list',
		},
		rte_selector: {
			documentation: 'This parameter will automatically load ExpressionEngine\'s Rich Text Editor and apply it to the element(s) matching the jQuery selector you specify. Any valid jQuery selector is acceptable.',
			detail: 'Type: string',
		},
		rte_toolset_id: {
			documentation: 'The ID of the Rich Text Editor toolset to use.',
			detail: 'Type: number',
		},
		secure_action: {
			documentation: 'Forces the form to use https as its action. Defaults to "no".',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		secure_return: {
			documentation: 'Force the form to return to https. Defaults to "no".',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		site: {
			documentation: 'Specify the site short name of another site on your MSM installation to add/edit entries for that site.',
			detail: 'Type: string',
		},
		show_fields: {
			documentation: 'Specify which entry fields to display in the custom field loop, by specifying a pipe separated list of field short names.',
			detail: 'Type: string|list',
		},
		unique_url_title: {
			documentation: 'When set to "yes", will ensure the URL title of the entry will be unique so there is no risk of creating an entry with a duplicate URL title.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		url_title: {
			documentation: 'The url_title of the channel entry you wish to edit.',
			detail: 'Type: string',
		},
		use_live_url: {
			documentation: 'This will disable the url_title from being created automatically based on the title. Use this when you\'ve opted to disable channel_form_assets. Defaults to "yes".',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'yes\'',
		},
	},
	"exp:member:login_form": {
		action: {
			documentation: 'Allows you to specify the action attribute of the <form> tag.',
			detail: 'Type: string',
		},
		form_class: {
			documentation: 'Allows you to specify the class attribute for the <form> tag.',
			detail: 'Type: string',
		},
		form_id: {
			documentation: 'Allows you to specify the id attribute for the <form> tag.',
			detail: 'Type: string',
		},
		form_name: {
			documentation: 'Allows you to specify a name attribute for the <form> tag.',
			detail: 'Type: string',
		},
		return: {
			documentation: 'Allows you to define where the user will be returned after successfully logging in.',
			detail: 'Type: string',
		},
	},
	"exp:member:custom_profile_data": {
		member_id: {
			documentation: 'Specifies a particular member\'s information to display. Defaults to the currently logged-in member.',
			detail: 'Type: number',
		}
	},
	"exp:member:ignore_list": {
		member_id: {
			documentation: 'Specifies a particular member\'s information to display. Defaults to the currently logged-in member.',
			detail: 'Type: number',
		}
	},
	"exp:query": {
		sql: {
			documentation: 'SQL query to be used (only SELECT statements; it will not process UPDATE or DELETE queries).',
			detail: 'Type: string',
		},
		backspace: {
			documentation: 'Will remove characters, including spaces and line breaks, from the last iteration of the loop.',
			detail: 'Type: number',
		},
	},
	"exp:email:contact_form": {
		charset: {
			documentation: 'Allows you to set the character set of the email being sent.',
			detail: 'Type: string',
		},
		name: {
			documentation: 'Allows you to set a "name" attribute for the form.',
			detail: 'Type: string',
		},
		recipients: {
			documentation: 'Optional parameter allows you to specify an email address to receive the email.',
			detail: 'Type: string|list',
		},
		redirect: {
			documentation: 'Determine how long ExpressionEngine should display the success message.',
			detail: 'Type: number|string\nValues: number|\'none\'',
		},
		replyto: {
			documentation: 'If set to "yes", then the address sending the email will be put into the Reply-To field and the site\'s webmaster email will be put in the From header.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		return: {
			documentation: 'Lets you specify a path (or full URL) where the user should be directed after the form is submitted.',
			detail: 'Type: string',
		},
		preview: {
			documentation: 'Specify a URL where the user can preview their message before sending it.',
			detail: 'Type: string',
		},
		markdown: {
			documentation: 'Optionally enable Markdown processing for message of the contact form.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		user_recipients: {
			documentation: 'Specifies whether or not the form will accept having the user input recipients via a "to" field in the form.',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		form_class: {
			documentation: 'Allows you to specify the class attribute for the <form> tag.',
			detail: 'Type: string',
		},
		form_id: {
			documentation: 'Allows you to specify the id attribute for the <form> tag. Default is "contact_form".',
			detail: 'Type: string',
		},
	},
	"exp:email:tell_a_friend": {
		allow_html: {
			documentation: 'Allows you the choice of whether to keep the HTML in the form fields, allow only certain HTML tags (by specifying the tags as a comma-separated list), or allow no HTML to remain.',
			detail: 'Type: string|list\nValues: \'yes|no\'|comma-separated html tags',
		},
		charset: {
			documentation: 'Allows you to set the character set of the email being sent.',
			detail: 'Type: string',
		},
		recipients: {
			documentation: 'Optional parameter allows you to specify an email address to receive the email.',
			detail: 'Type: string|list',
		},
		redirect: {
			documentation: 'Determine how long ExpressionEngine should display the success message.',
			detail: 'Type: number|string\nValues: number|\'none\'',
		},
		replyto: {
			documentation: 'If set to "yes", then the address sending the email will be put into the Reply-To field and the site\'s webmaster email will be put in the From header.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		return: {
			documentation: 'Lets you specify a path (or full URL) where the user should be directed after the form is submitted.',
			detail: 'Type: string',
		},
		status: {
			documentation: 'Restrict to entries with a particular status. Default is to show only entries with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		},
		channel: {
			documentation: 'Specify from which channel you would like to allow Tell-a-Friend emails to be sent.',
			detail: 'Type: string',
		},
		preview: {
			documentation: 'Specify a URL where the user can preview their message before sending it.',
			detail: 'Type: string',
		},
		markdown: {
			documentation: 'Optionally enable Markdown processing for message of the contact form.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		form_class: {
			documentation: 'Allows you to specify the class attribute for the <form> tag.',
			detail: 'Type: string',
		},
		form_id: {
			documentation: 'Allows you to specify the id attribute for the <form> tag. Default is "contact_form".',
			detail: 'Type: string',
		},
	},
	"exp:emoticon": {
		columns: {
			documentation: 'Allows you to specify how many columns of smilies the table will show.',
			detail: 'Type: number',
		},
	},
	"exp:file:entries": {
		category: {
			documentation: 'Limit/exclude results by category IDs.',
			detail: 'Type: number|list',
		},
		category_group: {
			documentation: 'Limit/exclude results by category group IDs.',
			detail: 'Type: number|list',
		},
		directory_id: {
			documentation: 'From which file upload directory to show the files (will show files from any directory if none is specified).',
			detail: 'Type: number|list',
		},
		disable: {
			documentation: 'Allows you to turn off aspects of the tag that you might not be using in order to improve performance.',
			detail: 'Type: string|list',
		},
		dynamic: {
			documentation: 'Override the dynamic nature of the channel tag based on what is in the URL.',
			detail: 'Type: string\nValues: \'no\'',
		},
		file_id: {
			documentation: 'Hard code to show specific files.',
			detail: 'Type: number|list',
		},
		limit: {
			documentation: 'Allows you to limit the number of files.',
			detail: 'Type: number',
		},
		orderby: {
			documentation: 'Sets the display order of the files.',
			detail: 'Type: string\nValues: \'date|random\'',
		},
		relaxed_categories: {
			documentation: 'Allows you to use the category indicator in your URLs with an entries tag specifying multiple channels that do not share category groups.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		sort: {
			documentation: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
			detail: 'Type: string|list\nValues: \'desc|asc\'\nDefault: \'desc\'',
		},
		uncategorized_entries: {
			documentation: 'Set to "no" to not show entries that don\'t have categories assigned.',
			detail: 'Type: string\nValues: \'no\'',
		},
	},
	"exp:forum:forum_helper": {
		boards: {
			documentation: 'Allows you to specify which boards to pull topics from by Board ID number.',
			detail: 'Type: number|list',
		},
		orderby: {
			documentation: 'Sets the display order of the forum topics.',
			detail: 'Type: string\nValues: \'post_date|recent_post|title\'',
		},
		sort: {
			documentation: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
			detail: 'Type: string|list\nValues: \'desc|asc\'\nDefault: \'desc\'',
		},
		status: {
			documentation: 'Allows you to specify the statuses to include. The default will be "new" if a value is not specified.',
			detail: 'Type: string|list\nDefault: \'new\'',
		},
	},
	"exp:forum:topic_titles": {
		boards: {
			documentation: 'Allows you to specify which boards to pull topics from by Board ID number.',
			detail: 'Type: number|list',
		},
		forums: {
			documentation: 'Allows you to specify which forums to pull topics from by Forum ID number.',
			detail: 'Type: number|list',
		},
		limit: {
			documentation: 'Allows you to limit the number of topics displayed.',
			detail: 'Type: number',
		},
		orderby: {
			documentation: 'Sets the display order of the forum topics.',
			detail: 'Type: string\nValues: \'post_date|recent_post|title\'',
		},
		sort: {
			documentation: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
			detail: 'Type: string|list\nValues: \'desc|asc\'\nDefault: \'desc\'',
		},
	},
	"exp:http_header": {
		access_control_allow_credentials: {
			documentation: 'Corresponding HTTP Header: Access-Control-Allow-Credentials',
			detail: 'Type: string',
		},
		access_control_allow_headers: {
			documentation: 'Corresponding HTTP Header: Access-Control-Allow-Headers',
			detail: 'Type: string',
		},
		access_control_allow_methods: {
			documentation: 'Corresponding HTTP Header: Access-Control-Allow-Methods',
			detail: 'Type: string',
		},
		access_control_allow_origin: {
			documentation: 'Corresponding HTTP Header: Access-Control-Allow-Origin',
			detail: 'Type: string',
		},
		access_control_expose_headers: {
			documentation: 'Corresponding HTTP Header: Access-Control-Expose-Headers',
			detail: 'Type: string',
		},
		access_control_max_age: {
			documentation: 'Corresponding HTTP Header: Access-Control-Max-Age',
			detail: 'Type: string',
		},
		alt_svc: {
			documentation: 'Corresponding HTTP Header: Alt-Svc',
			detail: 'Type: string',
		},
		cache_control: {
			documentation: 'Corresponding HTTP Header: Cache-Control',
			detail: 'Type: string',
		},
		charset: {
			documentation: 'charset to use with the content_type parameter.',
			detail: 'Type: string',
		},
		content_disposition: {
			documentation: 'Corresponding HTTP Header: Content-Disposition - You can manually write out the full header value (i.e.attachment; filename: { "example.txt"), or just use a value of "attachment" and use the filename= parameter.',
			detail: 'Type: string',
		},
		content_encoding: {
			documentation: 'Corresponding HTTP Header: Content-Encoding',
			detail: 'Type: string',
		},
		content_language: {
			documentation: 'Corresponding HTTP Header: Content-Language',
			detail: 'Type: string',
		},
		content_length: {
			documentation: 'Corresponding HTTP Header: Content-Length',
			detail: 'Type: number',
		},
		content_location: {
			documentation: 'Corresponding HTTP Header: Content-Location',
			detail: 'Type: string',
		},
		content_md5: {
			documentation: 'Corresponding HTTP Header: Content-MD5',
			detail: 'Type: string',
		},
		content_range: {
			documentation: 'Corresponding HTTP Header: Content-Range',
			detail: 'Type: string',
		},
		content_type: {
			documentation: 'Corresponding HTTP Header: Content-Type - You can manually write out the full header value (i.e.text/html; charset=UTF-8) or you can simply specify the type and use the charset= parameter.',
			detail: 'Type: string',
		},
		etag: {
			documentation: 'Corresponding HTTP Header: ETag',
			detail: 'Type: string',
		},
		expires: {
			documentation: 'Corresponding HTTP Header: Expires - You can use relative date such as "+ 1 day"',
			detail: 'Type: string',
		},
		filename: {
			documentation: 'When content_disposition is set to attachment, this sets the filename.',
			detail: 'Type: string',
		},
		last_modified: {
			documentation: 'Corresponding HTTP Header: Last-Modified - You can use relative date such as "+ 1 day"',
			detail: 'Type: string',
		},
		link: {
			documentation: 'Corresponding HTTP Header: Link',
			detail: 'Type: string',
		},
		location: {
			documentation: 'Corresponding HTTP Header: Location',
			detail: 'Type: string',
		},
		pragma: {
			documentation: 'Corresponding HTTP Header: Pragma',
			detail: 'Type: string',
		},
		refresh: {
			documentation: 'Corresponding HTTP Header: Refresh - You can manually write out the full header value (i.e. 5; url=https://example.com/), or just set the refresh value in seconds and use the url= parameter.',
			detail: 'Type: number|string',
		},
		retry_after: {
			documentation: 'Corresponding HTTP Header: Retry-After - You can either specify a number of seconds or use relative dates(i.e."+ 90 mins").',
			detail: 'Type: number|string',
		},
		status: {
			documentation: 'Corresponding HTTP Header: Status',
			detail: 'Type: string',
		},
		tk: {
			documentation: 'Corresponding HTTP Header: Tk',
			detail: 'Type: string',
		},
		url: {
			documentation: 'URL to use in the refresh parameter.',
			detail: 'Type: string',
		},
		vary: {
			documentation: 'Corresponding HTTP Header: Vary',
			detail: 'Type: string',
		},
		via: {
			documentation: 'Corresponding HTTP Header: Via',
			detail: 'Type: string',
		},
		warning: {
			documentation: 'Corresponding HTTP Header: Warning',
			detail: 'Type: string',
		},
		x_content_duration: {
			documentation: 'Corresponding HTTP Header: X-Content-Duration',
			detail: 'Type: string',
		},
		x_content_type_options: {
			documentation: 'Corresponding HTTP Header: X-Content-Type-Options',
			detail: 'Type: string',
		},
		x_frame_options: {
			documentation: 'Corresponding HTTP Header: X-Frame-Options',
			detail: 'Type: string',
		},
		x_ua_compatible: {
			documentation: 'Corresponding HTTP Header: X-UA-Compatible',
			detail: 'Type: string',
		},
	},
	"exp:ip_to_nation:world_flags": {
		image_url: {
			documentation: 'URL to your "world_flags" folder.',
			detail: 'Type: string',
		},
		type: {
			documentation: 'Optionally set the tag to output the name of the country as text by setting this to "text".',
			detail: 'Type: string\nValues: \'text\'',
		},
	},
	"exp:jquery:script_tag": {
		plugin: {
			documentation: 'Name of the requested plugin.',
			detail: 'Type: string',
		},
		ui: {
			documentation: 'Name of the requested UI Widget/Interaction.',
			detail: 'Type: string',
		},
		effect: {
			documentation: 'Name of the requested UI Effect.',
			detail: 'Type: string',
		},
		file: {
			documentation: 'Name of the requested non-jQuery file.',
			detail: 'Type: string',
		},
	},
	"exp:jquery:script_src": {
		plugin: {
			documentation: 'Name of the requested plugin.',
			detail: 'Type: string',
		},
		ui: {
			documentation: 'Name of the requested UI Widget/Interaction.',
			detail: 'Type: string',
		},
		effect: {
			documentation: 'Name of the requested UI Effect.',
			detail: 'Type: string',
		},
		file: {
			documentation: 'Name of the requested non-jQuery file.',
			detail: 'Type: string',
		},
	},
	"exp:jquery:output_javascript": {
		plugin: {
			documentation: 'Name of the requested plugin.',
			detail: 'Type: string',
		},
		ui: {
			documentation: 'Name of the requested UI Widget/Interaction.',
			detail: 'Type: string',
		},
		effect: {
			documentation: 'Name of the requested UI Effect.',
			detail: 'Type: string',
		},
		file: {
			documentation: 'Name of the requested non-jQuery file.',
			detail: 'Type: string',
		},
	},
	"exp:moblog:check": {
		silent: {
			documentation: 'Specify whether or not you want messages about the Moblog Check to be seen.',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'yes\'',
		},
		which: {
			documentation: 'Specify which Moblog or Moblogs you wish to check.',
			detail: 'Type: string|list',
		},
	},
	"exp:pages:load_site_pages": {
		site: {
			documentation: 'Required. Short name of site(s) to show pages from.',
			detail: 'Type: string|list',
		},
	},
	"exp:rss:feed": {
		channel: {
			documentation: 'Required. From which channel to show the meta data information.',
			detail: 'Required: yes\nType: string',
		},
		show_expired: {
			documentation: 'Determine whether you wish for entries that have "expired" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		show_future_entries: {
			documentation: 'Determine whether you wish for entries dated in the "future" to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		status: {
			documentation: 'Restrict to categories with a particular status.Default is to show only categories with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		},
		username: {
			documentation: 'Limits the query by username.',
			detail: 'Type: string|list',
		},
	},
	"exp:rss_parser": {
		url: {
			documentation: 'The URL of the RSS or Atom feed',
			detail: 'Type: string',
		},
		limit: {
			documentation: 'Number of items to display from the feed',
			detail: 'Type: number',
		},
		offset: {
			documentation: 'Number of items to skip from the feed',
			detail: 'Type: number',
		},
		refresh: {
			documentation: 'How long you want the feed to be cached (default cache length is three hours)',
			detail: 'Type: number',
		},
	},
	"exp:rte:script_url": {
		include_jquery: {
			documentation: 'If you are already loading these libraries separately, you may set this to "no".',
			detail: 'Type: string\nValues: \'no\'',
		},
		selector: {
			documentation: 'The jQuery selector that determines which element(s) the RTE will be applied to.',
			detail: 'Type: string',
		},
		toolset_id: {
			documentation: 'The id of the toolset to use.',
			detail: 'Type: number',
		},
	},
	"exp:search:advanced_form": {
		category: {
			documentation: 'Specify which categories should be shown in the multiple select list.',
			detail: 'Type: number|list',
		},
		cat_style: {
			documentation: 'With this parameter, you can specify whether the categories should be displayed in a nested, hierarchical format or displayed linearly. Available values are "nested" and "linear".',
			detail: 'Type: string\nValues: \'nested|linear\'\nDefault: \'nested\'',
		},
		name: {
			documentation: 'Specify the name attribute for the <form> tag.',
			detail: 'Type: string',
		},
		no_result_page: {
			documentation: 'Specify a particular Template to display in the case when there are no results.',
			detail: 'Type: string',
		},
		result_page: {
			documentation: 'The Template_Group/Template you would like the search results to be shown in.',
			detail: 'Type: string',
		},
		results: {
			documentation: 'The number of results to show per page on the search results.',
			detail: 'Type: number',
		},
		show_expired: {
			documentation: 'Specify whether or not expired entries will be included in search results.',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		show_future_entries: {
			documentation: 'Specify whether or not entries with the date set in the future will be included in search results.',
			detail: 'Type: string\nValues: \'yes|no\'\nDefault: \'no\'',
		},
		site: {
			documentation: 'Include sites other than the current site in search results. Use the pipe character to include multiple sites.',
			detail: 'Type: string|list',
		},
		status: {
			documentation: 'Restrict to categories with a particular status.Default is to show only categories with a status of "open".',
			detail: 'Type: string|list\nDefault: \'open\'',
		},
		channel: {
			documentation: 'From which channel(s) to search the entries.',
			detail: 'Type: string|list',
		},
		form_class: {
			documentation: 'Specify the css class you want the form to have.',
			detail: 'Type: string',
		},
		form_id: {
			documentation: 'Specify the css id you want the form to have.',
			detail: 'Type: string',
		},
	},
	"exp:search:search_results": {
		backspace: {
			documentation: 'Removes characters (including spaces and line breaks) from the last iteration of the loop.',
			detail: 'Type: number',
		},
		search_id: {
			documentation: 'A 32 character ID number automatically included in search URLs and used to retrieve cached search results. Manually specify via parameter in cases where the URL does not follow the standard template_group/template pattern.',
			detail: 'Type: string',
		},
	},
	"exp:search:keywords": {
		search_id: {
			documentation: 'A 32 character ID number automatically included in search URLs and used to retrieve cached search results. Manually specify via parameter in cases where the URL does not follow the standard template_group/template pattern.',
			detail: 'Type: string',
		},
	},
	"exp:search:total_results": {
		search_id: {
			documentation: 'A 32 character ID number automatically included in search URLs and used to retrieve cached search results. Manually specify via parameter in cases where the URL does not follow the standard template_group/template pattern.',
			detail: 'Type: string',
		},
	},
	"exp:search:simple_form": {
		name: {
			documentation: 'Specify the name attribute for the <form> tag.',
			detail: 'Type: string',
		},
		no_result_page: {
			documentation: 'Specify a particular Template to display in the case when there are no results.',
			detail: 'Type: string',
		},
		result_page: {
			documentation: 'The Template_Group/Template you would like the search results to be shown in.',
			detail: 'Type: string',
		},
		results: {
			documentation: 'The number of results to show per page on the search results.',
			detail: 'Type: number',
		},
		search_in: {
			documentation: 'Specifies which fields you would like to include in the searching: "entries", "everywhere", or "titles".',
			detail: 'Type: string\nValues: \'entries|everywhere|titles\'\nDefault: \'titles\'',
		},
		show_expired: {
			documentation: 'Specify whether or not expired entries will be included in search results.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		show_future_entries: {
			documentation: 'Specify whether or not entries with the date set in the future will be included in search results.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		site: {
			documentation: 'Include sites other than the current site in search results. Use the pipe character to include multiple sites.',
			detail: 'Type: string|list',
		},
		status: {
			documentation: 'Restrict to categories with a particular status.Default is to show only categories with a status of "open".',
			detail: 'Type: string|list\nValues: \'open\'',
		},
		channel: {
			documentation: 'From which channel(s) to search the entries.',
			detail: 'Type: string|list',
		},
		where: {
			documentation: 'Allows you to specify how matching in searches are performed. The options are: "any", "all", "word", or "exact".',
			detail: 'Type: string\nValues: \'any|all|word|exact\'\nDefault: \'all\'',
		},
		form_class: {
			documentation: 'Specify the css class you want the form to have.',
			detail: 'Type: string',
		},
		form_id: {
			documentation: 'Specify the css id you want the form to have.',
			detail: 'Type: string',
		},
	},
	"exp:simple_commerce:purchase": {
		cancel: {
			documentation: 'Specify a particular Template to display if a purchase is cancelled mid-transaction.',
			detail: 'Type: string',
		},
		country_code: {
			documentation: 'Controls the language that will be used on the initial PayPal shopping cart / log in screen when someone makes a purchase from your store.',
			detail: 'Type: string',
		},
		currency: {
			documentation: 'Three letter representation of the currency for the item prices in the store, using the ISO 4217 standard. Default is "USD" (U.S. Dollars).',
			detail: 'Type: string',
		},
		decimal: {
			documentation: 'Change the decimal separator for display.',
			detail: 'Type: string',
		},
		entry_id: {
			documentation: 'Required. As the Simple Commerce Purchase tag is designed to be used inside a Channel Entries tag, the {entry_id} variable of the Channel Entries tag will normally be used to provide the value.',
			detail: 'Required: yes\nType: number',
		},
		show_disabled: {
			documentation: 'Allows the Simple Commerce Purchase tag to output information for store items that are not enabled.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		success: {
			documentation: 'Required. You must specify a particular Template to display after a successful purchase transaction.',
			detail: 'Required: yes\nType: string',
		},
	},
	"exp:stats": {
		site: {
			documentation: 'Used to restrict the statistics reporting to specific sites when using the Multiple Site Manager.',
			detail: 'Type: string|list',
		},
		channel: {
			documentation: 'Used to restrict the statistics reporting to specific channels.',
			detail: 'Type: string|list',
		},
	},
	"exp:comment:entries": {
		dynamic: {
			documentation: 'Override the dynamic nature of the tag based on what is in the URL.',
			detail: 'Type: string\nValues: \'no\'',
		},
		entry_id: {
			documentation: 'Hard code the comment entries tag to show comments for a specific channel entry by its entry ID.',
			detail: 'Type: number|list',
		},
		comment_id: {
			documentation: 'Hard code the comment entries tag to show specific comments.',
			detail: 'Type: number|list',
		},
		limit: {
			documentation: 'Allows you to limit the number of comments.',
			detail: 'Type: number',
		},
		orderby: {
			documentation: 'Sets the display order of the comments.',
			detail: 'Type: string\nValues: \'date|email|location|name|url|random\'',
		},
		paginate: {
			documentation: 'Determines where the pagination code will appear for your comments: "top", "bottom", "both", or "inline". Defaults to "bottom".',
			detail: 'Type: string\nValues: \'top|bottom|both|inline\'\nDefault: \'bottom\'',
		},
		paginate_base: {
			documentation: 'Tells ExpressionEngine to override the normal pagination link locations and point instead to the explicitly stated template group and template.',
			detail: 'Type: string',
		},
		show_expired: {
			documentation: 'Determine whether you wish for comments on "expired" entries to be included.',
			detail: 'Type: string\nValues: \'yes\'',
		},
		sort: {
			documentation: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
			detail: 'Type: string|list\nValues: \'desc|asc\'\nDefault: \'desc\'',
		},
		url_title: {
			documentation: 'Hard code the comment entries tag to show comments for a specific channel entry by its URL title.',
			detail: 'Type: string',
		},
		channel: {
			documentation: 'From which channel to show the comments (will show comments from any channel if no channel is specified).',
			detail: 'Type: string|list',
		},
		entry_status: {
			documentation: '',
			detail: 'Type: string',
		},
		status: {
			documentation: '',
			detail: 'Type: string',
		},
		author_id: {
			documentation: '',
			detail: 'Type: number',
		},
	},
	"exp:comment:subscriber_list": {
		entry_id: {
			documentation: 'Hard code the comment subscriber list tag to show subscribers for a specific channel entry by its entry ID.',
			detail: 'Type: number',
		},
		exclude_guests: {
			documentation: 'Set to "yes" to exclude guest comments from the list and totals.',
			detail: 'Type: string\nValues: \'yes\'',
		},
	},
	"exp:comment:form": {
		entry_id: {
			documentation: 'Hard code the comment form tag to display a comment form for a specific channel entry by its entry ID.',
			detail: 'Type: number',
		},
		preview: {
			documentation: 'Required parameter if you are using comment previews indicating which template should be used for comment previews.',
			detail: 'Required: if using comment previews\nType: string',
		},
		url_title: {
			documentation: 'Hard code the comment for tag to display a comment form for a specific channel entry by its URL title.',
			detail: 'Type: string',
		},
		channel: {
			documentation: 'Specify exactly which channel you want the submitted comment associated to.',
			detail: 'Type: string',
		},
		form_class: {
			documentation: 'Specify the css class you want the form to have.',
			detail: 'Type: string',
		},
		form_id: {
			documentation: 'Specify the css id you want the form to have.',
			detail: 'Type: string',
		},
		return: {
			documentation: 'Allows you to define where the user will be returned after submitting a comment.',
			detail: 'Type: string',
		},
	},
	"layout:set": {
		name: {
			documentation: 'Specify the name of the layout variable.',
			detail: 'Type: string',
		}
	},
	"layout:set:append": {
		name: {
			documentation: 'Specify the name of the layout variable.',
			detail: 'Type: string',
		}
	},
	"layout:set:prepend": {
		name: {
			documentation: 'Specify the name of the layout variable.',
			detail: 'Type: string',
		}
	},
};