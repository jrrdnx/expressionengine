# ExpressionEngine language features for VS Code

* Enables syntax highlighting for tags, variables, comments, conditionals, and strings without overwriting HTML and PHP code syntax highlighting
* Adds code completion (suggestions) for tags, global variables, and tag parameters including third party addons!
* Auto-closing tags and variables

![feature X](./example.png)

## Settings

* `expressionengine.suggest.basic`: enable/disable language suggestions (tags and variables). Default: **true**
* `expressionengine.autoClosingTags`: enable/disable auto closing ExpressionEngine tags and variables. Default: **true**
* `expressionengine.thirdPartyAddonPath`: path to your third party extensions directory. Default: **${rootPath}/httpdocs/system/user/addons/**
  * Include a `${rootPath}` variable to be substituted with the file path of the workspace (e.g. `${rootPath}/httpdocs/system/user/addons/` becomes `/Users/Development/Project/httpdocs/system/user/addons/`)

## Customizing Colors

To add or override your current theme's colors, add an `editor.tokenColorCustomizations` rule to your User Settings. E.g.

```json
{
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "entity.name.tag.expressionengine",
        "settings": {
          "foreground": "#70adec"
        }
      },
      {
        "scope": "keyword.operator.expressionengine",
        "settings": {
          "foreground": "#f16060"
        }
      },
      {
        "scope": "variable.parameter.expressionengine",
        "settings": {
          "foreground": "#d19a66"
        }
      }
    ]
  }
}
```

As of **v0.0.4** the following naming conventions are used:

* **entity.name.tag.expressionengine**: any tag beginning with `{exp:`
* **variable.parameter.expressionengine**: tag parameters such as `channel` or `entry_id` used with channel entries tags, `name` for layout tags, etc.
* **variable.other.expressionengine**: variable-type tags such as `{layout:set}`, `{embed}`, `{current_time}`, etc.
* **comment.block.expressionengine**: comment blocks (`{!-- --}`)
* **keyword.control.expressionengine**: `{if}` conditionals
* **keyword.operator.expressionengine**: all conditional operators defined in the [Template Language documentation](https://docs.expressionengine.com/latest/templates/conditionals.html#operators)
* **string.quoted.single.expressionengine**: single-quoted strings
* **string.quoted.double.expressionengine**: double-quoted strings

## Release Notes

See the [CHANGELOG](./CHANGELOG.md)

## Third party addon suggestions

In order for third party addon suggestions to be included, each addon must include an `addon.json` file in its root folder. While other information can be included, the completion provider is looking specifically for a `tags` property and a `variables` property:

```json
{
  "tags": {
    "exp:channel:entries": {
      "documentation": "Short tag description...",
      "hasClosingTag": true,
      "parameters": {
        "name": {
          "documentation": "Short parameter description...",
          "detail": "Type: string",
        },
        "path": {
          "documentation": "Short parameter description...",
          "detail": "Type: string",
        }
      }
    }
  },
  "variables": {
    "current_time": {
      "documentation": "Short variable description...",
      "parameters": {
        "format": {
          "documentation": "Short parameter description...",
          "detail": "Type: string",
        }
      }
    }
  },
}
```

* The `tags` and `variables` properties are both objects
* Each tag/variable is a property of that respective object, with its value also an object
* The `documentation` property is a string with a short description of that tag/variable
* If the tag/variable has a closing tag, include the `hasClosingTag` property with a value of **true**. This enables the auto-closing tag feature (if the `expressionengine.autoClosingTags` setting is set to **true**). If there is no closing tag, this can be set to **false** or excluded completely.
* If the tag/variable has any parameters, include a `parameters` property
* Each parameter is a property of the `parameters` property, with its own `documentation` property featuring a short description
* Parameters may also include a `detail` property with shorthand information regarding the type of value it's looking for, whether or not it's required, default value(s), etc. Newlines can be forced using "\n":
  * `"detail": "Type: string|list\nValues: 'desc|asc'\nDefault: 'desc'",`

## Attributions

Many thanks to [@adrum](https://github.com/adrum) for help in debugging the initial parameter suggestions and the third party addon suggestions, as well as continued help with all things Node/npm

## Disclaimer

The ExpressionEngine mark is owned and may be registered by EllisLab, Inc. This VS Code extension is an independent project and has not been authorized, sponsored, or otherwise approved by EllisLab, Inc.