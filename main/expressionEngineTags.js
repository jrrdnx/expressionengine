"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exptags = {
	"exp:channel:month_links": {
		documentation: 'Displays a list of links for any months that contain Channel Entries.',
		hasClosingTag: true,
	},
	"exp:channel:calendar": {
		documentation: 'Display a calendar which contains links based on entries in your channel.',
		hasClosingTag: true,
	},
	"exp:channel:categories": {
		documentation: 'Enables you to show your Categories in a list.',
		hasClosingTag: true,
	},
	"exp:channel:category_archive": {
		documentation: 'List all of your channel entries and have them organized by category.',
		hasClosingTag: true,
	},
	"exp:channel:category_heading": {
		documentation: 'Show the currently viewed Category as a heading.',
		hasClosingTag: true,
	},
	"exp:channel:entries": {
		documentation: 'Primary tag used to show the content you create and edit via your Control Panel\'s Create or Edit section.',
		hasClosingTag: true,
	},
	"exp:channel:info": {
		documentation: 'Display general information about the specified Channel.',
		hasClosingTag: true,
	},
	"exp:channel:next_entry": {
		documentation: 'Generate links to the next entry, based on the date of the entry.',
		hasClosingTag: true,
	},
	"exp:channel:prev_entry": {
		documentation: 'Generate links to the previous entry, based on the date of the entry.',
		hasClosingTag: true,
	},
	"exp:channel:form": {
		documentation: 'Add and edit entries from outside of the Control Panel using a regular form inside a template.',
		hasClosingTag: true,
	},
	"exp:member:login_form": {
		documentation: 'Place a login form in any template you choose, so that site members can log in.',
		hasClosingTag: true,
	},
	"exp:member:custom_profile_data": {
		documentation: 'Display member profile information in your Templates.',
		hasClosingTag: true,
	},
	"exp:member:ignore_list": {
		documentation: 'Display member profile information for members in a member\'s Ignore List.',
		hasClosingTag: true,
	},
	"exp:query": {
		documentation: 'Allows you to perform SQL queries, returning results from your database without having to use PHP.',
		hasClosingTag: true,
	},
	"exp:email:contact_form": {
		documentation: 'Create a contact form on one of your pages that your users can use to send you email.',
		hasClosingTag: true,
	},
	"exp:email:tell_a_friend": {
		documentation: 'Display a form used to share an entry with someone by sending them an email about it.',
		hasClosingTag: true,
	},
	"exp:emoji:emoji_list": {
		documentation: 'Outputs a list of all cataloged emoji.',
		hasClosingTag: true,
	},
	"exp:emoji:parse_shorthand": {
		documentation: 'Convert emoji shorthand code to an HTML entity which the browser will render.',
		hasClosingTag: true,
	},
	"exp:emoticon": {
		hasClosingTag: true,
	},
	"exp:file:entries": {
		documentation: 'Allows you to display files and their associated meta-data on the frontend.',
		hasClosingTag: true,
	},
	"exp:forum:forum_helper": {
		documentation: 'Display the status of recent support forum posts in your standard Templates.',
		hasClosingTag: true,
	},
	"exp:forum:topic_titles": {
		documentation: 'Display a simple list of recent forum topics in your standard Templates',
		hasClosingTag: true,
	},
	"exp:http_header": {
		documentation: 'Allows you to set HTTP headers in your templates.',
		hasClosingTag: false,
	},
	"exp:ip_to_nation:world_flags": {
		documentation: 'Enables you to determine which country an IP address is associated with.',
		hasClosingTag: true,
	},
	"exp:jquery:script_tag": {
		documentation: 'outputs a full script tag to the requested jQuery resource.',
		hasClosingTag: false,
	},
	"exp:jquery:script_src": {
		documentation: 'Outputs a URL to the requested jQuery resource.',
		hasClosingTag: false,
	},
	"exp:jquery:output_javascript": {
		documentation: 'Outputs the actual script to the browser, with proper headers.',
		hasClosingTag: false,
	},
	"exp:moblog:check": {
		documentation: 'Allows you to submit Channel Entries to ExpressionEngine via email.',
		hasClosingTag: false,
	},
	"exp:pages:load_site_pages": {
		documentation: 'Show the {page_uri} or {page_url} for an entry from a different site.',
		hasClosingTag: false,
	},
	"exp:rss:feed": {
		documentation: 'Render the top portion of the feed containing the name of the author, the character encoding, etc.',
		hasClosingTag: true,
	},
	"exp:rss_parser": {
		documentation: 'Provides RSS parsing tags for your templates.',
		hasClosingTag: true,
	},
	"exp:rte:script_url": {
		documentation: 'Output the URL of the RTE\'s JavaScript and apply it to the desired elements.',
		hasClosingTag: false,
	},
	"exp:search:advanced_form": {
		documentation: 'display a detailed search form that will allow your users to make "power searches" to find the information they need.',
		hasClosingTag: true,
	},
	"exp:search:search_results": {
		documentation: 'Display results from your searches.',
		hasClosingTag: true,
	},
	"exp:search:keywords": {
		documentation: 'Display the keywords used to perform a search.',
		hasClosingTag: false,
	},
	"exp:search:total_results": {
		documentation: 'Display the total number of results found during a search.',
		hasClosingTag: true,
	},
	"exp:search:simple_form": {
		documentation: 'Add a single-form search field to your site.',
		hasClosingTag: true,
	},
	"exp:simple_commerce:purchase": {
		documentation: 'Display information about items in your store.',
		hasClosingTag: true,
	},
	"exp:stats": {
		documentation: 'Tracks a number of system statistics.',
		hasClosingTag: true,
	},
	"exp:comment:entries": {
		documentation: 'Show the user-submitted comments associated with your entries.',
		hasClosingTag: true,
	},
	"exp:comment:notification_links": {
		documentation: 'Allow members to subscribe to an entry without commenting via a simple link.',
		hasClosingTag: true,
	},
	"exp:comment:subscriber_list": {
		documentation: 'Display the members who have subscribed to comment notifications for a particular entry.',
		hasClosingTag: true,
	},
	"exp:comment:form": {
		documentation: 'Display a comment submission form.',
		hasClosingTag: true,
	},
	"exp:comment:preview": {
		documentation: 'Preview a comment submission.',
		hasClosingTag: true,
	},
	"exp:comment:edit_comment_script": {
		documentation: 'Outputs a script tag that will include the necessary JavaScript for your comment editor.',
		hasClosingTag: false,
	},
	"exp:comment:ajax_edit_url": {
		documentation: 'Outputs an action url that links to a method that processes the submitted data.',
		hasClosingTag: false,
	},
};