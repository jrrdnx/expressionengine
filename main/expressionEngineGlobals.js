"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = {
	// Path Variables
	path: {
		description: 'Create links to other templates.',
    },
    route: {
		description: 'Generate paths based on your defined template route instead of the default URL structure.',
	},
	// Preload Text Replacements
	preload_replace: {
		description: 'Assign text to be replaced prior to a template being parsed.',
	},
	// Standard Global Variables
	app_build: {
		description: 'The build date of ExpressionEngine that you are using.',
	},
	app_version: {
		description: 'The version of ExpressionEngine that you are using (2.2.0, 2.3.0, etc.).',
	},
	charset: {
		description: 'This variable will be substituted for the global character set.',
	},
	cp_session_id: {
		description: 'The session id for the control panel.',
	},
	cp_url: {
		description: 'The URL to the control panel for this site.',
	},
	csrf_token: {
		description: 'This variable is a required value for the hidden form field "csrf_token".',
	},
	current_path: {
		description: 'This variable outputs the current URI path relative to your ExpressionEngine installation.',
	},
	current_time: {
		description: 'This variable displays the current server time localized to each user’s particular setting.',
	},
	current_query_string: {
		description: 'This variable displays the current security-filtered query string.',
	},
	current_url: {
		description: 'This variable displays the full current URL.',
	},
	debug_mode: {
		description: 'This variable will be substituted with either "on" or "off" based on your debug mode settings.',
	},
	doc_url: {
		description: 'This variable will be substituted with the user guide URL.',
	},
	elapsed_time: {
		description: 'The amount of time, in seconds, it took ExpressionEngine to render the current page.',
	},
	embed: {
		description: 'This variable allows you to embed one Template within another.',
	},
	encode: {
		description: 'This variable will encode the specified email address using javascript and HTML entities.',
	},
	gzip_mode: {
		description: 'This variable will be substituted with either "on" or "off" based on your output compression settings mode settings.',
	},
	hits: {
		description: 'This variable will be substituted with the number of hits that any given template containing the variable has received.',
	},
	homepage: {
		description: 'This variable will be substituted with the URL to the root directory of your site.',
	},
	is_ajax_request: {
		description: 'Boolean (TRUE/FALSE) variable representing whether or not the template is being accessed via an Ajax request.',
	},
	lang: {
		description: 'This variable will be substituted for the Default XML Language.',
	},
	layout: {
		description: 'This variable allows you to wrap a Template in another.',
	},
	"layout:contents": {
		description: 'Output the template contents in its layout.',
	},
	"layout:set": {
		description: 'Set a variable in your templates that can later be used in your layouts.',
	},
	"layout:set:append": {
		description: 'Create a list in a variable and append new values.',
	},
	"layout:set:prepend": {
		description: 'Create a list in a variable and prepend new values.',
	},
	member_group: {
		description: 'The Member Group ID number for the currently logged-in user.',
	},
	member_profile_link: {
		description: 'This variable will be substituted with a link to the public profile page for the currently logged in user.',
	},
	password_max_length: {
		description: 'This variable is used the maxlength property of password inputs on login forms.',
	},
	redirect: {
		description: 'This variable allows you redirect the visitor to another template.',
	},
	site_description: {
		description: 'Available to MSM sites only, this variable will be substituted with your site’s description.',
	},
	site_name: {
		description: 'This variable will be substituted with your site name.',
	},
	site_url: {
		description: 'This variable will be substituted with your site URL.',
	},
	template_name: {
		description: 'This variable displays the name of the template currently being processed.',
	},
	template_group: {
		description: 'This variable displays the name of the template group for the template currently being processed.',
	},
	template_id: {
		description: 'This variable displays the numeric ID of the template currently being processed.',
	},
	template_type: {
		description: 'This variable displays the type of the template currently being processed (e.g. "webpage", "rss", "xml", etc.).',
	},
	template_edit_date: {
		description: 'This variable displays the localized time for when the template was last updated.',
	},
	theme_folder_url: {
		description: 'The URL to your theme folder.',
	},
	total_queries: {
		description: 'The total number of database queries used to generate the current page.',
	},
	webmaster_email: {
		description: 'The email address for the site, as specified in Email Configuration.',
	},
	// Member Variables
	logged_in_email: {
		description: 'The email address for the currently logged-in user.',
	},
	logged_in_group_description: {
		description: 'The Member Group description for the currently logged-in user.',
	},
	logged_in_group_id: {
		description: 'The Member Group ID number for the currently logged-in user.',
	},
	logged_in_group_title: {
		description: 'The title of the member group for the currently logged-in user.',
	},
	logged_in_ip_address: {
		description: 'This variable will be substituted with the IP address of the currently logged in user.',
	},
	logged_in_location: {
		description: 'The location (as entered in their profile) for the currently logged-in user.',
	},
	logged_in_member_id: {
		description: 'The Member ID for the currently logged-in user.',
	},
	logged_in_private_messages: {
		description: 'The number of unread private messages for the currently logged-in user.',
	},
	logged_in_screen_name: {
		description: 'The screen name for the currently logged-in user.',
	},
	logged_in_total_comments: {
		description: 'The total number of comments posted by the currently logged-in user.',
	},
	logged_in_total_entries: {
		description: 'The total number of entries posted by the currently logged-in user.',
	},
	logged_in_total_forum_posts: {
		description: 'The total number of forum posts made by the currently logged-in user.',
	},
	logged_in_total_forum_replies: {
		description: 'The total number of replies to forum posts by the currently logged-in user.',
	},
	logged_in_total_forum_topics: {
		description: 'The total number of forum topics made by the currently logged-in user.',
	},
	logged_in_username: {
		description: 'The username for the currently logged-in user.',
	},
	// Linking to Stylesheets
	stylesheet: {
		description: 'Meant for generating URLs for use when linking to stylesheets.',
	},
	// URL Segment Variables
	segment: {
		description: 'Access a segment name defined in Template Routes.',
	},
	segment_1: {
		description: 'URL segment 1.',
	},
	segment_2: {
		description: 'URL segment 2.',
	},
	segment_3: {
		description: 'URL segment 3.',
	},
	segment_4: {
		description: 'URL segment 4.',
	},
	segment_5: {
		description: 'URL segment 5.',
	},
	segment_6: {
		description: 'URL segment 6.',
	},
	segment_7: {
		description: 'URL segment 7.',
	},
	segment_8: {
		description: 'URL segment 8.',
	},
	segment_9: {
		description: 'URL segment 9.',
	},
	last_segment: {
		description: 'Gives you the last segment of your URL when the number of URI segments is unknown.',
	},
	// Date Formatting Constants
	DATE_ATOM: {
		description: '',
	},
	DATE_COOKIE: {
		description: '',
	},
	DATE_ISO8601: {
		description: '',
	},
	DATE_RFC822: {
		description: '',
	},
	DATE_RFC850: {
		description: '',
	},
	DATE_RFC1036: {
		description: '',
	},
	DATE_RFC1123: {
		description: '',
	},
	DATE_RFC2822: {
		description: '',
	},
	DATE_RSS: {
		description: '',
	},
	DATE_W3C: {
		description: '',
	},
};
