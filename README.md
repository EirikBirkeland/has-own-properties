Extends Object with .hasOwnProperties – an array version of .hasOwnProperty.

Usage:

``` js
const myObject = {happyKey: 1, sadKey: 1}

console.log(
    myObject.hasOwnProperties(['happyKey', 'sadKey'])
)
```