/*
 * test.js
 * MIT © Eirik Birkeland
 */
"use strict"

const test = require('ava')
require('./index.js')

const object = {a: 1, b: 1}

test('properties should be present', t => {
    t.is(true, object.hasOwnProperties(['a', 'b']))
})