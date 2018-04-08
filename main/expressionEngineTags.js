"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exptags = {
	"exp:channel:month_links": {
		description: 'Displays a list of links for any months that contain Channel Entries.',
		hasClosingTag: true,
	},
	"exp:channel:calendar": {
		description: 'Display a calendar which contains links based on entries in your channel.',
		hasClosingTag: true,
	},
	"exp:channel:categories": {
		description: 'Enables you to show your Categories in a list.',
		hasClosingTag: true,
	},
	"exp:channel:category_archive": {
		description: 'List all of your channel entries and have them organized by category.',
		hasClosingTag: true,
	},
	"exp:channel:category_heading": {
		description: 'Show the currently viewed Category as a heading.',
		hasClosingTag: true,
	},
	"exp:channel:entries": {
		description: 'Primary tag used to show the content you create and edit via your Control Panel\'s Create or Edit section.',
		hasClosingTag: true,
	},
	"exp:channel:info": {
		description: 'Display general information about the specified Channel.',
		hasClosingTag: true,
	},
	"exp:channel:next_entry": {
		description: 'Generate links to the next entry, based on the date of the entry.',
		hasClosingTag: true,
	},
	"exp:channel:prev_entry": {
		description: 'Generate links to the previous entry, based on the date of the entry.',
		hasClosingTag: true,
	},
	"exp:channel:form": {
		description: 'Add and edit entries from outside of the Control Panel using a regular form inside a template.',
		hasClosingTag: true,
	},
	"exp:member:login_form": {
		description: 'Place a login form in any template you choose, so that site members can log in.',
		hasClosingTag: true,
	},
	"exp:member:custom_profile_data": {
		description: 'Display member profile information in your Templates.',
		hasClosingTag: true,
	},
	"exp:member:ignore_list": {
		description: 'Display member profile information for members in a member\'s Ignore List.',
		hasClosingTag: true,
	},
	"exp:query": {
		description: 'Allows you to perform SQL queries, returning results from your database without having to use PHP.',
		hasClosingTag: true,
	},
	"exp:email:contact_form": {
		description: 'Create a contact form on one of your pages that your users can use to send you email.',
		hasClosingTag: true,
	},
	"exp:email:tell_a_friend": {
		description: 'Display a form used to share an entry with someone by sending them an email about it.',
		hasClosingTag: true,
	},
	"exp:emoji:emoji_list": {
		description: 'Outputs a list of all cataloged emoji.',
		hasClosingTag: true,
	},
	"exp:emoji:parse_shorthand": {
		description: 'Convert emoji shorthand code to an HTML entity which the browser will render.',
		hasClosingTag: true,
	},
	"exp:emoticon": {
		hasClosingTag: true,
	},
	"exp:file:entries": {
		description: 'Allows you to display files and their associated meta-data on the frontend.',
		hasClosingTag: true,
	},
	"exp:forum:forum_helper": {
		description: 'Display the status of recent support forum posts in your standard Templates.',
		hasClosingTag: true,
	},
	"exp:forum:topic_titles": {
		description: 'Display a simple list of recent forum topics in your standard Templates',
		hasClosingTag: true,
	},
	"exp:http_header": {
		description: 'Allows you to set HTTP headers in your templates.',
		hasClosingTag: false,
	},
	"exp:ip_to_nation:world_flags": {
		description: 'Enables you to determine which country an IP address is associated with.',
		hasClosingTag: true,
	},
	"exp:jquery:script_tag": {
		description: 'outputs a full script tag to the requested jQuery resource.',
		hasClosingTag: false,
	},
	"exp:jquery:script_src": {
		description: 'Outputs a URL to the requested jQuery resource.',
		hasClosingTag: false,
	},
	"exp:jquery:output_javascript": {
		description: 'Outputs the actual script to the browser, with proper headers.',
		hasClosingTag: false,
	},
	"exp:moblog:check": {
		description: 'Allows you to submit Channel Entries to ExpressionEngine via email.',
		hasClosingTag: false,
	},
	"exp:pages:load_site_pages": {
		description: 'Show the {page_uri} or {page_url} for an entry from a different site.',
		hasClosingTag: false,
	},
	"exp:rss:feed": {
		description: 'Render the top portion of the feed containing the name of the author, the character encoding, etc.',
		hasClosingTag: true,
	},
	"exp:rss_parser": {
		description: 'Provides RSS parsing tags for your templates.',
		hasClosingTag: true,
	},
	"exp:rte:script_url": {
		description: 'Output the URL of the RTE\'s JavaScript and apply it to the desired elements.',
		hasClosingTag: false,
	},
	"exp:search:advanced_form": {
		description: 'display a detailed search form that will allow your users to make "power searches" to find the information they need.',
		hasClosingTag: true,
	},
	"exp:search:search_results": {
		description: 'Display results from your searches.',
		hasClosingTag: true,
	},
	"exp:search:keywords": {
		description: 'Display the keywords used to perform a search.',
		hasClosingTag: false,
	},
	"exp:search:total_results": {
		description: 'Display the total number of results found during a search.',
		hasClosingTag: true,
	},
	"exp:search:simple_form": {
		description: 'Add a single-form search field to your site.',
		hasClosingTag: true,
	},
	"exp:simple_commerce:purchase": {
		description: 'Display information about items in your store.',
		hasClosingTag: true,
	},
	"exp:stats": {
		description: 'Tracks a number of system statistics.',
		hasClosingTag: true,
	},
	"exp:comment:entries": {
		description: 'Show the user-submitted comments associated with your entries.',
		hasClosingTag: true,
	},
	"exp:comment:notification_links": {
		description: 'Allow members to subscribe to an entry without commenting via a simple link.',
		hasClosingTag: true,
	},
	"exp:comment:subscriber_list": {
		description: 'Display the members who have subscribed to comment notifications for a particular entry.',
		hasClosingTag: true,
	},
	"exp:comment:form": {
		description: 'Display a comment submission form.',
		hasClosingTag: true,
	},
	"exp:comment:preview": {
		description: 'Preview a comment submission.',
		hasClosingTag: true,
	},
	"exp:comment:edit_comment_script": {
		description: 'Outputs a script tag that will include the necessary JavaScript for your comment editor.',
		hasClosingTag: false,
	},
	"exp:comment:ajax_edit_url": {
		description: 'Outputs an action url that links to a method that processes the submitted data.',
		hasClosingTag: false,
	},
};