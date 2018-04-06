"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
	"exp:channel:month_links": {
		channel: {
			description: 'The name of the channel you want to limit the query to.',
		},
		limit: {
			description: 'The number of rows to return.',
		},
		sort: {
			description: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
		},
		show_expired: {
			description: 'You can determine whether you wish for entries that have "expired" to be included.',
		},
		show_future_entries: {
			description: 'You can determine whether you wish for entries dated in the "future" to be included.',
		},
		status: {
			description: 'Restrict to categories with a particular status.Default is to show only categories with a status of "open".',
		}
	},
	"exp:channel:calendar": {
		leading_zeroes: {
			description: 'Setting this parameter to "yes" will display the {day_number} variable as a two-digit, zero-padded number, e.g.: 01, 02, 03, etc. The default setting is "no".',
		},
		month: {
			description: 'Hardcode the month to display for the calendar.',
		},
		year: {
			description: 'Hardcode the year to display for the calendar.',
		},
		show_future_entries: {
			description: 'Determine whether you wish for entries dated in the "future" to be included.',
		},
		start_day: {
			description: 'Define the day of the week on which your week starts.',
		},
		switch: {
			description: 'Lets you define two states: the "today" state and "all other" states.',
		},
	},
	"exp:channel:categories": {
		backspace: {
			description: 'Removes characters, including spaces and line breaks, from the last iteration of the tag pair.',
		},
		category_group: {
			description: 'Limit/exclude results by category group IDs.'
		},
		channel: {
			description: 'The name (short name) of the channel that the categories are assigned to.',
		},
		class: {
			description: 'When using the "nested" style of display (see the "style" parameter), this lets you specify the value of the "class" attribute in the opening <ul> tag.',
		},
		disable: {
			description: 'Allows you to turn off aspects of the tag that you might not be using in order to improve performance.',
		},
		id: {
			description: 'When using the "nested" style of display (see the "style" parameter), this lets you specify the value of the "id" attribute in the opening <ul> tag.',
		},
		parent_only: {
			description: 'Limit the category display to only "parent" categories.',
		},
		restrict_channel: {
			description: 'When "restrict_channel" is set to "no", the show_empty parameter will display categories that have no entries from all channels.',
		},
		show: {
			description: 'Specify which categories will be included in the list.',
		},
		show_empty: {
			description: 'Determines whether or not categories that contain no entries for the specific channel are displayed.',
		},
		show_expired: {
			description: 'Determines whether expired entries are included when calculating whether a category has entries when the "show_empty" parameter is set to not show empty categories.',
		},
		show_future_entries: {
			description: 'Determines whether entries dated in the "future" to are included when calculating whether a category has entries when the "show_empty" parameter is set to not show empty categories.',
		},
		status: {
			description: 'Restrict to categories with a particular status. Default is to show only categories with a status of "open".',
		},
		style: {
			description: 'Use "nested" to display parent/child hierarchy using unordered list HTML. Use "linear" to show pure list without HTML.',
		},
	},
	"exp:channel:category_archive": {
		backspace: {
			description: 'Removes characters (including spaces and line breaks) from the last iteration of the loop.',
		},
		channel: {
			description: 'The name of the channel that the categories are assigned to.',
		},
		class: {
			description: 'When using the "nested" style of display (see the "style" parameter), this lets you specify the value of the "class" attribute in the opening <ul> tag.',
		},
		disable: {
			description: 'Allows you to turn off aspects of the tag that you might not be using in order to improve performance. ',
		},
		id: {
			description: 'When using the "nested" style of display (see the "style" parameter), this lets you specify the value of the "id" attribute in the opening <ul> tag.',
		},
		orderby: {
			description: 'Sets the display order of the entries.',
		},
		show: {
			description: 'Specify which categories will be included in the list.',
		},
		show_empty: {
			description: 'Determines whether or not categories that contain no entries are displayed.',
		},
		show_future_entries: {
			description: 'Determine whether you wish for entries dated in the "future" to be included.',
		},
		sort: {
			description: 'Sort ascending ("asc") or descending ("desc"). Defaults to descending.',
		},
		status: {
			description: 'Restrict to categories with a particular status. Default is to show only categories with a status of "open".',
		},
		style: {
			description: 'Use "nested" to display parent/child hierarchy using unordered list HTML. Use "linear" to show pure list without HTML.',
		},
	},
	"exp:channel:category_heading": {
		disable: {
			description: 'Allows you to turn off aspects of the tag that you might not be using in order to improve performance.',
		},
		relaxed_categories: {
			description: 'Allows you use the category indicator in your URLs with an entries tag specifying multiple channels that do not share category groups.',
		},
		channel: {
			description: 'The name (short name) of the channel that the categories are assigned to.',
		},
	},
	"exp:channel:entries": {
		author_id: {
			description: 'Will limit the returned entries to the specified Member ID.',
		},
		backspace: {
			description: 'Will remove characters, including spaces and line breaks, from the last iteration of the tag pair.',
		},
		cache: {
			description: 'This parameter enables tag caching. Used with the "refresh" parameter.',
		},
		refresh: {
			description: 'Refresh is the number of minutes between cache refreshes.',
		},
		cat_limit: {
			description: 'Lets you set a different limit for the category display than the regular display.',
		},
		category: {
			description: 'Limit/exclude results by category IDs.',
		},
		category_group: {
			description: 'Limit/exclude results by category group IDs.',
		},
		channel: {
			description: 'From which channel to show the entries.',
		},
		disable: {
			description: 'Turn off aspects of the tag that you might not be using in order to improve performance.',
		},
		display_by: {
			description: 'Limit the display of your entries by "month" or "week". Default is "number".',
		},
		dynamic: {
			description: 'Override the dynamic nature of the channel tag based on what is in the URL.',
		},
		dynamic_parameters: {
			description: 'Permits a tag\'s parameters to be set "on the fly" using POST data submitted via a form.',
		},
		dynamic_start: {
			description: 'Allows ExpressionEngine to dynamically provide a starting date for the feed (only when used in an RSS/Atom feed, otherwise has no effect).',
		},
		entry_id: {
			description: 'Hard code the channel tag to show a specific channel entry.',
		},
		entry_id_from: {
			description: 'Used together with "entry_id_to" to designate a range of entries to display.',
		},
		entry_id_to: {
			description: 'Used together with "entry_id_from" to designate a range of entries to display.',
		},
		fixed_order: {
			description: 'Hard code the channel entries tag to show entries in a specific order based on their entry ids.',
		},
		group_id: {
			description: 'Designate from which Member Groups (by specifying the group ID) you wish entries to be shown.',
		},
		limit: {
			description: 'Limits the number of entries on any given page.',
		},
		month_limit: {
			description: 'Lets you set a different limit for the month display than the regular display.',
		},
		offset: {
			description: 'Offsets the display by X number of entries.',
		},
		orderby: {
			description: 'Sets the display order of the entries.',
		},
		paginate: {
			description: 'Determines where the pagination code will appear for your channel entries.',
		},
		paginate_base: {
			description: 'Override the normal pagination link locations and point instead to the explicitly stated template group and template.',
		},
		paginate_type: {
			description: 'Tells ExpressionEngine to function in "pagination" mode for your channel entry fields so that you can automatically have an entry span multiple pages.',
		},
		related_categories_mode: {
			description: 'Alters the behavior of the tag, causing it to ignore the entry ID or URL title found in the URL, and instead show a list of entries that are in the same category as the entry specified in the URL.',
		},
		relaxed_categories: {
			description: 'Allows you to use the category indicator in your URLs with an entries tag specifying multiple channels that do not share category groups.',
		},
		require_entry: {
			description: 'Tells the channel tag that it should expect the URL to contain a valid entry ID or a valid URL title.',
		},
		"search:": {
			description: 'Allows you to constrain Channel Entries output based on content within your fields. Specify which field to search by using the field\'s short name immediately after "search:".',
		},
		show_current_week: {
			description: 'Requires use of the "display_by=\'week\'" parameter. When set to "yes", it displays the current week by default.',
		},
		show_expired: {
			description: 'Include, exclude, or show only expired entries by using "yes", "no", or "only".',
		},
		show_future_entries: {
			description: 'Determine whether you wish for entries dated in the "future" to be included.',
		},
		show_pages: {
			description: 'Whether to show those entries that have been used to create pages with the Pages module.',
		},
		sort: {
			description: 'Sort ascending ("asc") or descending ("desc"). Defaults to descending.',
		},
		start_day: {
			description: 'Requires use of the "display_by=\'week\'" parameter. Allows you to choose whether the week starts on Monday or Sunday. Sunday is the default.',
		},
		start_on: {
			description: 'Specify a particular date/time on which to start the entries.',
		},
		status: {
			description: 'Restrict to entries with a particular status. Default is to show only entries with a status of "open".',
		},
		stop_before: {
			description: 'Specify a particular date/time on which to end the entries.',
		},
		sticky: {
			description: 'Sticky topics forced to top of the page, ordered normally, or show only sticky topics by using "yes", "no", or "only".',
		},
		track_views: {
			description: 'Track how many times a channel entry has been "viewed" on a particular page.',
		},
		uncategorized_entries: {
			description: 'Set to "no" to not show entries that don\'t have categories assigned.',
		},
		url_title: {
			description: 'Limits the query by an entry\'s url_title.',
		},
		username: {
			description: 'Limits the query by username.',
		},
		week_sort: {
			description: 'Requires the "display_by=\'week\'" parameter. Changes the sort order of the weeks so that you can either have the weeks displayed by most recent first or oldest first.',
		},
		year: {
			description: 'Limit queries by year.',
		},
		month: {
			description: 'Limit queries by month.',
		},
		day: {
			description: 'Limit queries by day.',
		},
	},
	"exp:channel:info": {
		channel: {
			description: 'The name (short name) of the channel. This is a required parameter.',
		},
	},
	"exp:channel:next_entry": {
		category: {
			description: 'Limit/exclude results by category IDs.',
		},
		category_group: {
			description: 'Limit/exclude results by category group IDs.',
		},
		channel: {
			description: 'Restrict to a specific channel.',
		},
		entry_id: {
			description: 'Limit the tag to specific entries, or more practically, you can ommit specific entries from showing up in the cycle, by using "not".',
		},
		show_expired: {
			description: 'Determine whether you wish for entries that have "expired" to be included.',
		},
		show_future_entries: {
			description: 'Determine whether you wish for entries dated in the "future" to be included.',
		},
		status: {
			description: 'Restrict to entries with a particular status. Default is to show only entries with a status of "open".',
		},
		url_title: {
			description: 'Specify the URL title in which the module uses as a reference for next and previous entries.',
		},
	},
	"exp:channel:prev_entry": {
		category: {
			description: 'Limit/exclude results by category IDs.',
		},
		category_group: {
			description: 'Limit/exclude results by category group IDs.',
		},
		channel: {
			description: 'Restrict to a specific channel.',
		},
		entry_id: {
			description: 'Limit the tag to specific entries, or more practically, you can ommit specific entries from showing up in the cycle, by using "not".',
		},
		show_expired: {
			description: 'Determine whether you wish for entries that have "expired" to be included.',
		},
		show_future_entries: {
			description: 'Determine whether you wish for entries dated in the "future" to be included.',
		},
		status: {
			description: 'Restrict to entries with a particular status. Default is to show only entries with a status of "open".',
		},
		url_title: {
			description: 'Specify the URL title in which the module uses as a reference for next and previous entries.',
		},
	},
	"exp:channel:form": {
		allow_comments: {
			description: 'Force the allow comments value for the submitted entry, for both new entries and edits.',
		},
		author_only: {
			description: 'Only allow the author of the entry to edit the entry. Defaults to "no".',
		},
		category: {
			description: 'If you don\'t wish to include the form option on the page then you can set any categories that you wish to assign the entry to via this parameter.',
		},
		channel: {
			description: 'Required. The short name of the channel.',
		},
		class: {
			description: 'Specify the CSS class.',
		},
		datepicker: {
			description: 'Adds the datepicker to your date fields. Defaults to "yes".',
		},
		dynamic_title: {
			description: 'Dynamically set the title of your entry based on your entry\'s data.',
		},
		entry_id: {
			description: 'The entry_id of the channel entry you wish to edit.',
		},
		error_handling: {
			description: 'Choose to display error messages inline.',
		},
		id: {
			description: 'Specify the CSS id.',
		},
		include_assets: {
			description: 'Adds necessary Javascript and CSS to your form.',
		},
		include_jquery: {
			description: 'Includes jQuery automatically. Defaults to "yes".',
		},
		json: {
			description: 'Output your results in JSON format, instead of performing a redirect.',
		},
		logged_out_member_id: {
			description: 'In order to allow logged out users to use the entry form, you must specify a member_id which will be used as the author of the entry.',
		},
		require_entry: {
			description: 'Require an entry to edit via the entry_id or url_title parameters. Disables new entries. Defaults to "no".',
		},
		return: {
			description: 'Required. Specify a path to redirect the user to after an entry submission. You may use the constants ENTRY_ID and URL_TITLE, which will be replaced with the entry\'s entry_id or url_title, respectively.',
		},
		return_X: {
			description: 'Specify a path to redirect the user to after an entry submission, based on the user\'s member group. Replace X with the group_id of the member group.',
		},
		"rules:": {
			description: 'Add additional validation rules to your fields. Specify which field to validate by using the field\'s short name immediately after "rules:". Separate multiple rules with the pipe | character. You may use any of these rules: (required, matches, min_length, max_length, exact_length, alpha, alpha_numeric, alpha_dash, numeric, integer, is_natural, is_natural_no_zero, valid_ee_date, valid_email, valid_emails, valid_ip, valid_base64).',
		},
		rte_selector: {
			description: 'This parameter will automatically load ExpressionEngine\'s Rich Text Editor and apply it to the element(s) matching the jQuery selector you specify. Any valid jQuery selector is acceptable.',
		},
		rte_toolset_id: {
			description: 'The ID of the Rich Text Editor toolset to use.',
		},
		secure_action: {
			description: 'Forces the form to use https as its action. Defaults to "no".',
		},
		secure_return: {
			description: 'Force the form to return to https. Defaults to "no".',
		},
		site: {
			description: 'Specify the site short name of another site on your MSM installation to add/edit entries for that site.',
		},
		show_fields: {
			description: 'Specify which entry fields to display in the custom field loop, by specifying a pipe separated list of field short names.',
		},
		unique_url_title: {
			description: 'When set to "yes", will ensure the URL title of the entry will be unique so there is no risk of creating an entry with a duplicate URL title.',
		},
		url_title: {
			description: 'The url_title of the channel entry you wish to edit.',
		},
		use_live_url: {
			description: 'This will disable the url_title from being created automatically based on the title. Use this when you\'ve opted to disable channel_form_assets. Defaults to "yes".',
		},
	},
	"exp:member:login_form": {
		action: {
			description: 'Allows you to specify the action attribute of the <form> tag.',
		},
		form_class: {
			description: 'Allows you to specify the class attribute for the <form> tag.',
		},
		form_id: {
			description: 'Allows you to specify the id attribute for the <form> tag.',
		},
		form_name: {
			description: 'Allows you to specify a name attribute for the <form> tag.',
		},
		return: {
			description: 'Allows you to define where the user will be returned after successfully logging in.',
		},
	},
	"exp:member:custom_profile_data": {
		member_id: {
			description: 'Specifies a particular member\'s information to display. Defaults to the currently logged-in member.',
		}
	},
	"exp:member:ignore_list": {
		member_id: {
			description: 'Specifies a particular member\'s information to display. Defaults to the currently logged-in member.',
		}
	},
	"exp:query": {
		sql: {
			description: 'SQL query to be used (only SELECT statements; it will not process UPDATE or DELETE queries).',
		},
		backspace: {
			description: 'Will remove characters, including spaces and line breaks, from the last iteration of the loop.',
		},
	},
	"exp:email:contact_form": {
		charset: {
			description: 'Allows you to set the character set of the email being sent.',
		},
		name: {
			description: 'Allows you to set a "name" attribute for the form.',
		},
		recipients: {
			description: 'Optional parameter allows you to specify an email address to receive the email.',
		},
		redirect: {
			description: 'Determine how long ExpressionEngine should display the success message.',
		},
		replyto: {
			description: 'If set to "yes", then the address sending the email will be put into the Reply-To field and the site\'s webmaster email will be put in the From header.',
		},
		return: {
			description: 'Lets you specify a path (or full URL) where the user should be directed after the form is submitted.',
		},
		preview: {
			description: 'Specify a URL where the user can preview their message before sending it.',
		},
		markdown: {
			description: 'Optionally enable Markdown processing for message of the contact form.',
		},
		user_recipients: {
			description: 'Specifies whether or not the form will accept having the user input recipients via a "to" field in the form.',
		},
		form_class: {
			description: 'Allows you to specify the class attribute for the <form> tag.',
		},
		form_id: {
			description: 'Allows you to specify the id attribute for the <form> tag. Default is "contact_form".',
		},
	},
	"exp:email:tell_a_friend": {
		allow_html: {
			description: 'Allows you the choice of whether to keep the HTML in the form fields, allow only certain HTML tags (by specifying the tags as a comma-separated list), or allow no HTML to remain.',
		},
		charset: {
			description: 'Allows you to set the character set of the email being sent.',
		},
		recipients: {
			description: 'Optional parameter allows you to specify an email address to receive the email.',
		},
		redirect: {
			description: 'Determine how long ExpressionEngine should display the success message.',
		},
		replyto: {
			description: 'If set to "yes", then the address sending the email will be put into the Reply-To field and the site\'s webmaster email will be put in the From header.',
		},
		return: {
			description: 'Lets you specify a path (or full URL) where the user should be directed after the form is submitted.',
		},
		status: {
			description: 'Restrict to entries with a particular status. Default is to show only entries with a status of "open".',
		},
		channel: {
			description: 'Specify from which channel you would like to allow Tell-a-Friend emails to be sent.',
		},
		preview: {
			description: 'Specify a URL where the user can preview their message before sending it.',
		},
		markdown: {
			description: 'Optionally enable Markdown processing for message of the contact form.',
		},
		form_class: {
			description: 'Allows you to specify the class attribute for the <form> tag.',
		},
		form_id: {
			description: 'Allows you to specify the id attribute for the <form> tag. Default is "contact_form".',
		},
	},
	"exp:emoticon": {
		columns: {
			description: 'Allows you to specify how many columns of smilies the table will show.',
		},
	},
	"exp:file:entries": {
		category: {
			description: 'Limit/exclude results by category IDs.',
		},
		category_group: {
			description: 'Limit/exclude results by category group IDs.',
		},
		directory_id: {
			description: 'From which file upload directory to show the files (will show files from any directory if none is specified).',
		},
		disable: {
			description: 'Allows you to turn off aspects of the tag that you might not be using in order to improve performance.',
		},
		dynamic: {
			description: 'Override the dynamic nature of the channel tag based on what is in the URL.',
		},
		file_id: {
			description: 'Hard code to show specific files.',
		},
		limit: {
			description: 'Allows you to limit the number of files.',
		},
		orderby: {
			description: 'Sets the display order of the files.',
		},
		relaxed_categories: {
			description: 'Allows you to use the category indicator in your URLs with an entries tag specifying multiple channels that do not share category groups.',
		},
		sort: {
			description: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
		},
		uncategorized_entries: {
			description: 'Set to "no" to not show entries that don\'t have categories assigned.',
		},
	},
	"exp:forum:forum_helper": {
		boards: {
			description: 'Allows you to specify which boards to pull topics from by Board ID number.',
		},
		orderby: {
			description: 'Sets the display order of the forum topics.',
		},
		sort: {
			description: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
		},
		status: {
			description: 'Allows you to specify the statuses to include. The default will be "new" if a value is not specified.',
		},
	},
	"exp:forum:topic_titles": {
		boards: {
			description: 'Allows you to specify which boards to pull topics from by Board ID number.',
		},
		forums: {
			description: 'Allows you to specify which forums to pull topics from by Forum ID number.',
		},
		limit: {
			description: 'Allows you to limit the number of topics displayed.',
		},
		orderby: {
			description: 'Sets the display order of the forum topics.',
		},
		sort: {
			description: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
		},
	},
	"exp:http_header": {
		access_control_allow_credentials: {
			description: 'Corresponding HTTP Header: Access-Control-Allow-Credentials',
		},
		access_control_allow_headers: {
			description: 'Corresponding HTTP Header: Access-Control-Allow-Headers',
		},
		access_control_allow_methods: {
			description: 'Corresponding HTTP Header: Access-Control-Allow-Methods',
		},
		access_control_allow_origin: {
			description: 'Corresponding HTTP Header: Access-Control-Allow-Origin',
		},
		access_control_expose_headers: {
			description: 'Corresponding HTTP Header: Access-Control-Expose-Headers',
		},
		access_control_max_age: {
			description: 'Corresponding HTTP Header: Access-Control-Max-Age',
		},
		alt_svc: {
			description: 'Corresponding HTTP Header: Alt-Svc',
		},
		cache_control: {
			description: 'Corresponding HTTP Header: Cache-Control',
		},
		charset: {
			description: 'charset to use with the content_type parameter.',
		},
		content_disposition: {
			description: 'Corresponding HTTP Header: Content-Disposition - You can manually write out the full header value (i.e.attachment; filename: { "example.txt"), or just use a value of "attachment" and use the filename= parameter.',
		},
		content_encoding: {
			description: 'Corresponding HTTP Header: Content-Encoding',
		},
		content_language: {
			description: 'Corresponding HTTP Header: Content-Language',
		},
		content_length: {
			description: 'Corresponding HTTP Header: Content-Length',
		},
		content_location: {
			description: 'Corresponding HTTP Header: Content-Location',
		},
		content_md5: {
			description: 'Corresponding HTTP Header: Content-MD5',
		},
		content_range: {
			description: 'Corresponding HTTP Header: Content-Range',
		},
		content_type: {
			description: 'Corresponding HTTP Header: Content-Type - You can manually write out the full header value (i.e.text / html; charset=UTF-8) or you can simply specify the type and use the charset= parameter.',
		},
		etag: {
			description: 'Corresponding HTTP Header: ETag',
		},
		expires: {
			description: 'Corresponding HTTP Header: Expires - You can use relative date such as "+ 1 day"',
		},
		filename: {
			description: 'When content_disposition is set to attachment, this sets the filename.',
		},
		last_modified: {
			description: 'Corresponding HTTP Header: Last-Modified - You can use relative date such as "+ 1 day"',
		},
		link: {
			description: 'Corresponding HTTP Header: Link',
		},
		location: {
			description: 'Corresponding HTTP Header: Location',
		},
		pragma: {
			description: 'Corresponding HTTP Header: Pragma',
		},
		refresh: {
			description: 'Corresponding HTTP Header: Refresh - You can manually write out the full header value (i.e. 5; url=https://example.com/), or just set the refresh value in seconds and use the url= parameter.',
		},
		retry_after: {
			description: 'Corresponding HTTP Header: Retry-After - You can either specify a number of seconds or use relative dates(i.e."+ 90 mins").',
		},
		status: {
			description: 'Corresponding HTTP Header: Status',
		},
		tk: {
			description: 'Corresponding HTTP Header: Tk',
		},
		url: {
			description: 'URL to use in the refresh parameter.',
		},
		vary: {
			description: 'Corresponding HTTP Header: Vary',
		},
		via: {
			description: 'Corresponding HTTP Header: Via',
		},
		warning: {
			description: 'Corresponding HTTP Header: Warning',
		},
		x_content_duration: {
			description: 'Corresponding HTTP Header: X-Content-Duration',
		},
		x_content_type_options: {
			description: 'Corresponding HTTP Header: X-Content-Type-Options',
		},
		x_frame_options: {
			description: 'Corresponding HTTP Header: X-Frame-Options',
		},
		x_ua_compatible: {
			description: 'Corresponding HTTP Header: X-UA-Compatible',
		},
	},
	"exp:ip_to_nation:world_flags": {
		image_url: {
			description: 'URL to your "world_flags" folder.',
		},
		type: {
			description: 'Optionally set the tag to output the name of the country as text by setting this to "text".',
		},
	},
	"exp:jquery:script_tag": {
		plugin: {
			description: 'Name of the requested plugin.',
		},
		ui: {
			description: 'Name of the requested UI Widget/Interaction.',
		},
		effect: {
			description: 'Name of the requested UI Effect.',
		},
		file: {
			description: 'Name of the requested non-jQuery file.',
		},
	},
	"exp:jquery:script_src": {
		plugin: {
			description: 'Name of the requested plugin.',
		},
		ui: {
			description: 'Name of the requested UI Widget/Interaction.',
		},
		effect: {
			description: 'Name of the requested UI Effect.',
		},
		file: {
			description: 'Name of the requested non-jQuery file.',
		},
	},
	"exp:jquery:output_javascript": {
		plugin: {
			description: 'Name of the requested plugin.',
		},
		ui: {
			description: 'Name of the requested UI Widget/Interaction.',
		},
		effect: {
			description: 'Name of the requested UI Effect.',
		},
		file: {
			description: 'Name of the requested non-jQuery file.',
		},
	},
	"exp:moblog:check": {
		silent: {
			description: 'Specify whether or not you want messages about the Moblog Check to be seen.',
		},
		which: {
			description: 'Specify which Moblog or Moblogs you wish to check.',
		},
	},
	"exp:pages:load_site_pages": {
		site: {
			description: 'Required. Short name of site(s) to show pages from.',
		},
	},
	"exp:rss:feed": {
		channel: {
			description: 'Required. From which channel to show the meta data information.',
		},
		show_expired: {
			description: 'Determine whether you wish for entries that have "expired" to be included.',
		},
		show_future_entries: {
			description: 'Determine whether you wish for entries dated in the "future" to be included.',
		},
		status: {
			description: 'Restrict to categories with a particular status.Default is to show only categories with a status of "open".',
		},
		username: {
			description: 'Limits the query by username.',
		},
	},
	"exp:rss_parser": {
		url: {
			description: 'The URL of the RSS or Atom feed',
		},
		limit: {
			description: 'Number of items to display from the feed',
		},
		offset: {
			description: 'Number of items to skip from the feed',
		},
		refresh: {
			description: 'How long you want the feed to be cached (default cache length is three hours)',
		},
	},
	"exp:rte:script_url": {
		include_jquery: {
			description: 'If you are already loading these libraries separately, you may set this to "no".',
		},
		selector: {
			description: 'The jQuery selector that determines which element(s) the RTE will be applied to.',
		},
		toolset_id: {
			description: 'The id of the toolset to use.',
		},
	},
	"exp:search:advanced_form": {
		category: {
			description: 'Specify which categories should be shown in the multiple select list.',
		},
		cat_style: {
			description: 'With this parameter, you can specify whether the categories should be displayed in a nested, hierarchical format or displayed linearly. Available values are "nested" and "linear".',
		},
		name: {
			description: 'Specify the name attribute for the <form> tag.',
		},
		no_result_page: {
			description: 'Specify a particular Template to display in the case when there are no results.',
		},
		result_page: {
			description: 'The Template_Group/Template you would like the search results to be shown in.',
		},
		results: {
			description: 'The number of results to show per page on the search results.',
		},
		show_expired: {
			description: 'Specify whether or not expired entries will be included in search results.',
		},
		show_future_entries: {
			description: 'Specify whether or not entries with the date set in the future will be included in search results.',
		},
		site: {
			description: 'Include sites other than the current site in search results. Use the pipe character to include multiple sites.',
		},
		status: {
			description: 'Restrict to categories with a particular status.Default is to show only categories with a status of "open".',
		},
		channel: {
			description: 'From which channel(s) to search the entries.',
		},
		form_class: {
			description: 'Specify the css class you want the form to have.',
		},
		form_id: {
			description: 'Specify the css id you want the form to have.',
		},
	},
	"exp:search:search_results": {
		backspace: {
			description: 'Removes characters (including spaces and line breaks) from the last iteration of the loop.',
		},
		search_id: {
			description: 'A 32 character ID number automatically included in search URLs and used to retrieve cached search results. Manually specify via parameter in cases where the URL does not follow the standard template_group/template pattern.',
		},
	},
	"exp:search:keywords": {
		search_id: {
			description: 'A 32 character ID number automatically included in search URLs and used to retrieve cached search results. Manually specify via parameter in cases where the URL does not follow the standard template_group/template pattern.',
		},
	},
	"exp:search:total_results": {
		search_id: {
			description: 'A 32 character ID number automatically included in search URLs and used to retrieve cached search results. Manually specify via parameter in cases where the URL does not follow the standard template_group/template pattern.',
		},
	},
	"exp:search:simple_form": {
		name: {
			description: 'Specify the name attribute for the <form> tag.',
		},
		no_result_page: {
			description: 'Specify a particular Template to display in the case when there are no results.',
		},
		result_page: {
			description: 'The Template_Group/Template you would like the search results to be shown in.',
		},
		results: {
			description: 'The number of results to show per page on the search results.',
		},
		search_in: {
			description: 'Specifies which fields you would like to include in the searching: "entries", "everywhere", or "titles".',
		},
		show_expired: {
			description: 'Specify whether or not expired entries will be included in search results.',
		},
		show_future_entries: {
			description: 'Specify whether or not entries with the date set in the future will be included in search results.',
		},
		site: {
			description: 'Include sites other than the current site in search results. Use the pipe character to include multiple sites.',
		},
		status: {
			description: 'Restrict to categories with a particular status.Default is to show only categories with a status of "open".',
		},
		channel: {
			description: 'From which channel(s) to search the entries.',
		},
		where: {
			description: 'allows you to specify how matching in searches are performed. The options are: "any", "all", "word", or "exact".',
		},
		form_class: {
			description: 'Specify the css class you want the form to have.',
		},
		form_id: {
			description: 'Specify the css id you want the form to have.',
		},
	},
	"exp:simple_commerce:purchase": {
		cancel: {
			description: 'Specify a particular Template to display if a purchase is cancelled mid-transaction.',
		},
		country_code: {
			description: 'Controls the language that will be used on the initial PayPal shopping cart / log in screen when someone makes a purchase from your store.',
		},
		currency: {
			description: 'Three letter representation of the currency for the item prices in the store, using the ISO 4217 standard. Default is "USD" (U.S. Dollars).',
		},
		decimal: {
			description: 'Change the decimal separator for display.',
		},
		entry_id: {
			description: 'Required. As the Simple Commerce Purchase tag is designed to be used inside a Channel Entries tag, the {entry_id} variable of the Channel Entries tag will normally be used to provide the value.',
		},
		show_disabled: {
			description: 'Allows the Simple Commerce Purchase tag to output information for store items that are not enabled.',
		},
		success: {
			description: 'Required. You must specify a particular Template to display after a successful purchase transaction.',
		},
	},
	"exp:stats": {
		site: {
			description: 'Used to restrict the statistics reporting to specific sites when using the Multiple Site Manager.',
		},
		channel: {
			description: 'Used to restrict the statistics reporting to specific channels.',
		},
	},
	"exp:comment:entries": {
		dynamic: {
			description: 'Override the dynamic nature of the tag based on what is in the URL.',
		},
		entry_id: {
			description: 'Hard code the comment entries tag to show comments for a specific channel entry by its entry ID.',
		},
		comment_id: {
			description: 'Hard code the comment entries tag to show specific comments.',
		},
		limit: {
			description: 'Allows you to limit the number of comments.',
		},
		orderby: {
			description: 'Sets the display order of the comments.',
		},
		paginate: {
			description: 'Determines where the pagination code will appear for your comments: "top", "bottom", "both", or "inline". Defaults to "bottom".',
		},
		paginate_base: {
			description: 'Tells ExpressionEngine to override the normal pagination link locations and point instead to the explicitly stated template group and template.',
		},
		show_expired: {
			description: 'Determine whether you wish for comments on "expired" entries to be included.',
		},
		sort: {
			description: 'The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.',
		},
		url_title: {
			description: 'Hard code the comment entries tag to show comments for a specific channel entry by its URL title.',
		},
		channel: {
			description: 'From which channel to show the comments (will show comments from any channel if no channel is specified).',
		},
		entry_status: {
			description: '',
		},
		status: {
			description: '',
		},
		author_id: {
			description: '',
		},
	},
	"exp:comment:subscriber_list": {
		entry_id: {
			description: 'Hard code the comment subscriber list tag to show subscribers for a specific channel entry by its entry ID.',
		},
		exclude_guests: {
			description: 'Set to "yes" to exclude guest comments from the list and totals.',
		},
	},
	"exp:comment:form": {
		entry_id: {
			description: 'Hard code the comment form tag to display a comment form for a specific channel entry by its entry ID.',
		},
		preview: {
			description: 'Required parameter if you are using comment previews indicating which template should be used for comment previews.',
		},
		url_title: {
			description: 'Hard code the comment for tag to display a comment form for a specific channel entry by its URL title.',
		},
		channel: {
			description: 'Specify exactly which channel you want the submitted comment associated to.',
		},
		form_class: {
			description: 'Specify the css class you want the form to have.',
		},
		form_id: {
			description: 'Specify the css id you want the form to have.',
		},
		return: {
			description: 'Allows you to define where the user will be returned after submitting a comment.',
		},
	},
	"layout:set": {
		name: {
			description: 'Specify the name of the layout variable.',
		}
	},
	"layout:set:append": {
		name: {
			description: 'Specify the name of the layout variable.',
		}
	},
	"layout:set:prepend": {
		name: {
			description: 'Specify the name of the layout variable.',
		}
	},
};