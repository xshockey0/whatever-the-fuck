// ==UserScript==
// @name         bridges color change
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://addons.opera.com/en/extensions/details/tampermonkey-beta/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=opera.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

const oldColorNormalized = 'rgb(170,212,109)'
const newColor = 'rgb(203 255 241)'

document.querySelectorAll('*').forEach(el => {
    if (getComputedStyle(el).color === oldColorNormalized) {
        el.style.color = newColor
    }
})
})();