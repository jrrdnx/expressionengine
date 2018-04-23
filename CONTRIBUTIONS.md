# Contributions

* [Open an issue](https://github.com/jrrdnx/expressionengine/issues) if there's a third party addon you'd like to see included here, or (better yet!) contact the original developer to see if they'd be willing to submit a pull request for their addon(s).

## Instructions

Submit a [pull request](https://github.com/jrrdnx/expressionengine/pulls) with additions/changes using these guidelines:

* For each third party addon, create a new directory under `/main/third_party`. *The directory name must match the addon directory as installed in `system/user/addons`*
* Only include definition files if necessary:
  * **globals.js**:
    * Define an `exports.variables` object
    * Each property in this object is an object representing an addon method, with the key being the *full* tag (including the `exp:` prefix). Globals with colons must be enclosed in quotes. Multiple addon methods will require separate properties.
    * For each property, include a `documentation` property with a short description describing the use of the tag.
    * If your tag has a closing tag, add a `hasClosingTag` property with a value of **true**. If not, you can set this value to **false** or exclude it completely.

        ```javascript
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.variables = {
          current_time: {
            documentation: 'current_time tag description...',
            hasClosingTag: true,
          },
          "layout:set": {
            documentation: 'layout:set tag description...',
            hasClosingTag: true,
          },
        };
        ```

  * **parameters.js**:
    * Define a `module.exports` object
    * Each property in this object is an object representing an addon method, with the key being the *full* tag (including the `exp:` prefix). Tags with colons must be enclosed in quotes. Multiple addon methods will require separate properties.
    * Each of the properties in this object is an object representing a parameter.
    * For each property, include a `documentation` property with a short description describing the use of the parameter.
    * For best results, also include a `detail` property with quick information regarding the type of value it's looking for, whether or not it's required, default value(s), etc. Newlines can be forced using "\n": `detail: 'Type: string|list\nValues: \'desc|asc\'\nDefault: \'desc\'',`

        ```javascript
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        module.exports = {
          "exp:channel:categories": {
            backspace: {
              documentation: 'backspace parameter description...',
              detail: 'Type: number',
            },
            category_group: {
              documentation: 'category_group parameter description...',
              detail: 'Type: number|list',
            },
            ...
          },
          "exp:channel:entries": {
            author_id: {
              documentation: 'author_id parameter description...',
              detail: 'Type: number',
            },
            ...
          }
        };
        ```

  * **tags.js**
    * Define a `exports.exptags` object
    * Each property in this object is an object representing an addon method, with the key being the *full* tag (including the `exp:` prefix). Tags with colons must be enclosed in quotes. Multiple addon methods will require separate properties.
    * For each property, include a `documentation` property with a short description describing the use of the tag.
    * If your tag has a closing tag, add a `hasClosingTag` property with a value of **true**. If not, you can set this value to **false** or exclude it completely.

        ```javascript
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.exptags = {
          "exp:channel:entries": {
            documentation: 'channel:entries tag description...',
            hasClosingTag: true,
          },
          "exp:channel:categories": {
            documentation: 'channel:categories tag description...',
            hasClosingTag: true,
          },
        };
        ```

## Need help?

* Refer to any existing third party addon definition files, or any of the `/main/expressionEngineGlobals.js`, `/main/expressionEngineParameters.js`, or `/main/expressionEngineTags.js` files for examples, or
* [Open an issue](https://github.com/jrrdnx/expressionengine/issues) (or comment on an existing one)