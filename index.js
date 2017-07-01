/*
 * index.js
 * MIT © Eirik Birkeland
 */
"use strict"

/**
 *
 * @param keys {string[]} - an array of key names
 */
Object.prototype.hasOwnProperties = function (keys) {
    keys = keys instanceof Array ? keys : [keys]

    keys.forEach(ele => {
       if (!this.hasOwnProperty(ele)) {
            return false
        }
    })
    return true
}
