/*
 * index.js
 * MIT © Eirik Birkeland
 */
'use strict'

/*  eslint no-extend-native: ["error", { "exceptions": ["Object"] }] */
/**
 *
 * @param keys {string[]} - an array of key names
 */
Object.prototype.hasOwnProperties = function (keys) {
    // "When checking for Array instance, Array.isArray is preferred over instanceof because it works through iframes."
  keys = Array.isArray(keys) ? keys : [keys]

  keys.forEach(ele => {
    if (!this.hasOwnProperty(ele)) {
      return false
    }
  })
  return true
}
