# Change Log

## 0.2.6

* Improve parameter suggestions with required flags, type, values, and defaults

## 0.2.5

* Limit closing tag suggestions to only those that have closing tags

## 0.2.4

* Enable parameter suggestions for multi-line tags (triggered on new lines and spaces)
* Fix parameter suggestion descriptions

## 0.2.3

* Added disclaimer

## 0.2.2

* Update icon and Marketplace banner color

## 0.2.1

* Fix missing require() necessary for tag parameter suggestions (oops!)
* Add parameter suggestions for `layout:set` variables
* Update .vscodeignore

## 0.2.0

* Enable suggestions for parameters for tags when space character is typed (i.e. `channel`, `limit`, `disable`, etc. for `exp:channel:entries`)
  * Currently requires the cursor to be positioned on the same line as the tag, support for multi-line tags is planned

## 0.1.3

* Allow `layout:set`, `layout:set:append`, and `layout:set:prepend` to show in closing tag suggestions

## 0.1.2

* Now prevents suggestions for Angular expressions
* Enable suggestions for closing tags/variables (when `{/` has been typed)

## 0.1.1

* Limit current completion items to trigger only on ‘{‘ character

## 0.1.0

* Added completionProvider (suggestions)
* Added `expressionengine.suggest.basic` user/workspace setting to control suggestions

## 0.0.8

* Make spaces around keyword operators optional

## 0.0.7

* Add support for tags with unknown number of segments

## 0.0.6

* Add support for value-less parameters

## 0.0.5

* Update README with color override instructions/example

## 0.0.4

* Overhaul syntax to fix several highlighting issues
* Skip patch number to fix accidental increment in VS Marketplace

## 0.0.2

* Remove space from name

## 0.0.1

* Initial release