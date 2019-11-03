ember-number-fns
[![npm version](https://badge.fury.io/js/ember-number-fns.svg)](https://badge.fury.io/js/ember-number-fns)
[![Build Status](https://travis-ci.com/robert-allan-frank/ember-number-fns.svg?branch=develop)](https://travis-ci.com/robert-allan-frank/ember-number-fns)
[![codecov](https://codecov.io/gh/robert-allan-frank/ember-number-fns/branch/develop/graph/badge.svg)](https://codecov.io/gh/robert-allan-frank/ember-number-fns)
==============================================================================
This addon provides number helpers for Ember templates and components.

To install:

```sh
ember install ember-number-fns
```

Usage
------------------------------------------------------------------------------
* [`number-is-even`](#number-is-even)
* [`number-is-nan`](#number-is-nan)
* [`number-is-odd`](#number-is-odd)
* [`number-parse-float`](#number-parse-float)
* [`number-parse-int`](#number-parse-int)
* [`number-to-fixed`](#number-to-fixed)


#### `number-is-even`
Returns true if value is even.

```hbs
{{number-is-even 4}}
{{number-is-even iterator}}
```

#### `number-is-nan`
Returns true if a value is NaN. See [Number.isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) for details on the Number.isNaN function.

```hbs
{{number-is-nan 0}}
{{number-is-nan taxRate}}
```

#### `number-is-odd`
Returns true if value is odd.

```hbs
{{number-is-odd 3}}
{{number-is-odd iterator}}
```

#### `number-parse-float`
Parse a string into a float. See [Number.parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) for details on the Number.parseFloat function.

```hbs
{{number-parse-float '3.14'}}
{{number-parse-float pi}}
```

#### `number-parse-int`
Parse a string into an integer. See [Number.parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) for details on the Number.parseInt function.

```hbs
{{number-parse-int '132'}}
{{number-parse-int streetNumber}}
```

#### `number-toFixed`
Format a number to a fixed decimal string equivalent. See [Number.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) for details on the Number.toFixed function.

```hbs
{{number-to-fixed 3.1415 2}}
{{number-to-fixed pi 2}}
```

Compatibility
------------------------------------------------------------------------------
* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above

Related Addons
------------------------------------------------------------------------------
* See [ember-array-fns](https://github.com/robert-allan-frank/ember-array-fns) for array based helpers.
* See [ember-datetime-fns](https://github.com/robert-allan-frank/ember-datetime-fns) for date and time based helpers.
* See [ember-intl-fns](https://github.com/robert-allan-frank/ember-intl-fns) for internationalization based helpers.
* See [ember-math-fns](https://github.com/robert-allan-frank/ember-math-fns) for math based helpers.
* See [ember-string-fns](https://github.com/robert-allan-frank/ember-string-fns) for string based helpers.


Contributing
------------------------------------------------------------------------------
See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------
This project is licensed under the [MIT License](LICENSE.md).
