Extends Object with .hasOwnProperties – an array version of .hasOwnProperty.

Returns boolean `true` if every specified property is found.

## Usage:

[![Greenkeeper badge](https://badges.greenkeeper.io/EirikBirkeland/has-own-properties.svg)](https://greenkeeper.io/)

```js
const dog = {tail: 1, fur: 1}

console.log(
    dog.hasOwnProperties(['tail', 'fur'])
)
// true
```

## Alternative(s) to using this library:

```js
const dog = {tail: 1, fur: 1}

console.log(
    ['tail', 'fur'].every(ele=>dog.hasOwnProperty(ele))
)
// true
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)