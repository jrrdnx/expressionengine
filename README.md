# ExpressionEngine syntax highlighting

Enables syntax highlighting for ExpressionEngine's templating language, including HTML and PHP code.

![feature X](./example.png)

## Settings

* `expressionengine.suggest.basic`: enable/disable language suggestions (tags and variables). Default: **true**

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