"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = {
	// Path Variables
	path: {
		documentation: 'Create links to other templates.',
	},
	route: {
		documentation: 'Generate paths based on your defined template route instead of the default URL structure.',
	},
	// Preload Text Replacements
	preload_replace: {
		documentation: 'Assign text to be replaced prior to a template being parsed.',
	},
	// Standard Global Variables
	app_build: {
		documentation: 'The build date of ExpressionEngine that you are using.',
	},
	app_version: {
		documentation: 'The version of ExpressionEngine that you are using (2.2.0, 2.3.0, etc.).',
	},
	charset: {
		documentation: 'This variable will be substituted for the global character set.',
	},
	cp_session_id: {
		documentation: 'The session id for the control panel.',
	},
	cp_url: {
		documentation: 'The URL to the control panel for this site.',
	},
	csrf_token: {
		documentation: 'This variable is a required value for the hidden form field "csrf_token".',
	},
	current_path: {
		documentation: 'This variable outputs the current URI path relative to your ExpressionEngine installation.',
	},
	current_time: {
		documentation: 'This variable displays the current server time localized to each user’s particular setting.',
	},
	current_query_string: {
		documentation: 'This variable displays the current security-filtered query string.',
	},
	current_url: {
		documentation: 'This variable displays the full current URL.',
	},
	debug_mode: {
		documentation: 'This variable will be substituted with either "on" or "off" based on your debug mode settings.',
	},
	doc_url: {
		documentation: 'This variable will be substituted with the user guide URL.',
	},
	elapsed_time: {
		documentation: 'The amount of time, in seconds, it took ExpressionEngine to render the current page.',
	},
	embed: {
		documentation: 'This variable allows you to embed one Template within another.',
	},
	encode: {
		documentation: 'This variable will encode the specified email address using javascript and HTML entities.',
	},
	gzip_mode: {
		documentation: 'This variable will be substituted with either "on" or "off" based on your output compression settings mode settings.',
	},
	hits: {
		documentation: 'This variable will be substituted with the number of hits that any given template containing the variable has received.',
	},
	homepage: {
		documentation: 'This variable will be substituted with the URL to the root directory of your site.',
	},
	is_ajax_request: {
		documentation: 'Boolean (TRUE/FALSE) variable representing whether or not the template is being accessed via an Ajax request.',
	},
	lang: {
		documentation: 'This variable will be substituted for the Default XML Language.',
	},
	layout: {
		documentation: 'This variable allows you to wrap a Template in another.',
	},
	"layout:contents": {
		documentation: 'Output the template contents in its layout.',
	},
	"layout:set": {
		documentation: 'Set a variable in your templates that can later be used in your layouts.',
		hasClosingTag: true
	},
	"layout:set:append": {
		documentation: 'Create a list in a variable and append new values.',
		hasClosingTag: true
	},
	"layout:set:prepend": {
		documentation: 'Create a list in a variable and prepend new values.',
		hasClosingTag: true
	},
	member_group: {
		documentation: 'The Member Group ID number for the currently logged-in user.',
	},
	member_profile_link: {
		documentation: 'This variable will be substituted with a link to the public profile page for the currently logged in user.',
	},
	password_max_length: {
		documentation: 'This variable is used the maxlength property of password inputs on login forms.',
	},
	redirect: {
		documentation: 'This variable allows you redirect the visitor to another template.',
	},
	site_description: {
		documentation: 'Available to MSM sites only, this variable will be substituted with your site’s description.',
	},
	site_name: {
		documentation: 'This variable will be substituted with your site name.',
	},
	site_url: {
		documentation: 'This variable will be substituted with your site URL.',
	},
	template_name: {
		documentation: 'This variable displays the name of the template currently being processed.',
	},
	template_group: {
		documentation: 'This variable displays the name of the template group for the template currently being processed.',
	},
	template_id: {
		documentation: 'This variable displays the numeric ID of the template currently being processed.',
	},
	template_type: {
		documentation: 'This variable displays the type of the template currently being processed (e.g. "webpage", "rss", "xml", etc.).',
	},
	template_edit_date: {
		documentation: 'This variable displays the localized time for when the template was last updated.',
	},
	theme_folder_url: {
		documentation: 'The URL to your theme folder.',
	},
	total_queries: {
		documentation: 'The total number of database queries used to generate the current page.',
	},
	webmaster_email: {
		documentation: 'The email address for the site, as specified in Email Configuration.',
	},
	// Member Variables
	logged_in_email: {
		documentation: 'The email address for the currently logged-in user.',
	},
	logged_in_group_description: {
		documentation: 'The Member Group description for the currently logged-in user.',
	},
	logged_in_group_id: {
		documentation: 'The Member Group ID number for the currently logged-in user.',
	},
	logged_in_group_title: {
		documentation: 'The title of the member group for the currently logged-in user.',
	},
	logged_in_ip_address: {
		documentation: 'This variable will be substituted with the IP address of the currently logged in user.',
	},
	logged_in_location: {
		documentation: 'The location (as entered in their profile) for the currently logged-in user.',
	},
	logged_in_member_id: {
		documentation: 'The Member ID for the currently logged-in user.',
	},
	logged_in_private_messages: {
		documentation: 'The number of unread private messages for the currently logged-in user.',
	},
	logged_in_screen_name: {
		documentation: 'The screen name for the currently logged-in user.',
	},
	logged_in_total_comments: {
		documentation: 'The total number of comments posted by the currently logged-in user.',
	},
	logged_in_total_entries: {
		documentation: 'The total number of entries posted by the currently logged-in user.',
	},
	logged_in_total_forum_posts: {
		documentation: 'The total number of forum posts made by the currently logged-in user.',
	},
	logged_in_total_forum_replies: {
		documentation: 'The total number of replies to forum posts by the currently logged-in user.',
	},
	logged_in_total_forum_topics: {
		documentation: 'The total number of forum topics made by the currently logged-in user.',
	},
	logged_in_username: {
		documentation: 'The username for the currently logged-in user.',
	},
	// Linking to Stylesheets
	stylesheet: {
		documentation: 'Meant for generating URLs for use when linking to stylesheets.',
	},
	// URL Segment Variables
	segment: {
		documentation: 'Access a segment name defined in Template Routes.',
	},
	segment_1: {
		documentation: 'URL segment 1.',
	},
	segment_2: {
		documentation: 'URL segment 2.',
	},
	segment_3: {
		documentation: 'URL segment 3.',
	},
	segment_4: {
		documentation: 'URL segment 4.',
	},
	segment_5: {
		documentation: 'URL segment 5.',
	},
	segment_6: {
		documentation: 'URL segment 6.',
	},
	segment_7: {
		documentation: 'URL segment 7.',
	},
	segment_8: {
		documentation: 'URL segment 8.',
	},
	segment_9: {
		documentation: 'URL segment 9.',
	},
	last_segment: {
		documentation: 'Gives you the last segment of your URL when the number of URI segments is unknown.',
	},
	// Date Formatting Constants
	DATE_ATOM: {
		documentation: '',
	},
	DATE_COOKIE: {
		documentation: '',
	},
	DATE_ISO8601: {
		documentation: '',
	},
	DATE_RFC822: {
		documentation: '',
	},
	DATE_RFC850: {
		documentation: '',
	},
	DATE_RFC1036: {
		documentation: '',
	},
	DATE_RFC1123: {
		documentation: '',
	},
	DATE_RFC2822: {
		documentation: '',
	},
	DATE_RSS: {
		documentation: '',
	},
	DATE_W3C: {
		documentation: '',
	},
};
