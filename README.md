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

## Contributions

See the [CONTRIBUTIONS](./CONTRIBUTIONS.md)

## Attributions

Many thanks to [@adrum](https://github.com/adrum) for help in debugging the initial parameter suggestions and the third party addon suggestions, as well as continued help with all things Node/npm

## Disclaimer

The ExpressionEngine mark is owned and may be registered by EllisLab, Inc. This VS Code extension is an independent project and has not been authorized, sponsored, or otherwise approved by EllisLab, Inc.