// ==UserScript==
// @name         Hide New Contributor Indicator
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides the "New Contributor Indicator" for those who'd rather not see it.
// @author       WELZ
// @match        *://*.askubuntu.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://*.serverfault.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/WELZ-gh/userscripts/master/hidenci.user.js
// ==/UserScript==

$(".new-contributor-indicator").css({ "display" : "none" });
