// ==UserScript==
// @name         Hide New Contributor Indicator
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Hides the annoying "New Contributor Indicator" so that you don't see it
// @author       WELZ
// @match       *://*.askubuntu.com/*
// @match       *://*.mathoverflow.net/*
// @match       *://*.serverfault.com/*
// @match       *://*.stackapps.com/*
// @match       *://*.stackexchange.com/*
// @match       *://*.stackoverflow.com/*
// @match       *://*.superuser.com/*
// @grant        none
// ==/UserScript==

$(".new-contributor-indicator").css({ "display" : "none" });
