Extends Object with .hasOwnProperties – an array version of .hasOwnProperty.

Returns boolean `true` if all specified properties are found.

Usage:

``` js
const dog = {tail: 1, fur: 1}

console.log(
    dog.hasOwnProperties(['tail', 'fur'])
)
// true
```

Alternative(s) to using this library:

``` js
const dog = {tail: 1, fur: 1}

console.log(
    ['tail', 'fur'].every(ele=>dog.hasOwnProperty(ele))
)
// true
```