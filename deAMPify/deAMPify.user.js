// ==UserScript==
// @name			deAMPify
// @namespace		deAMPify
// @version			2020.06.02.1422
// @author			[Ross Zilligen](https://github.com/ross-zilligen)
// @include			http://*ampshare=*
// @include			https://*ampshare=*
// @include			https://*.ampproject.org/*
// @run-at			document-start
// @grant			none
// @description		I really hate AMP (Accelerated Mobile Pages) for a variety of reasons including the long,
//					obfuscated links and the inability to use dynamic page elements. This script is designed
//					to detect an AMP-link, then determine and load the non-AMP version of the page instead.
//					I use it on my phone by loading links from Google News into the Kiwi browser to deAMPify
//					them before sharing.
//
//					To use this on an Android Phone, you will need:
//
//					1) Kiwi Browser, which is Chrome-based *AND* allows you to use add-ons:
//						https://play.google.com/store/apps/details?id=com.kiwibrowser.browser
//
//					2) Tampermonkey Extension from the Chrome web store:
//						https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
//
// ==/UserScript==
/*

SAMPLE 001:
https://www-zdnet-com.cdn.ampproject.org/v/s/www.zdnet.com/
       google-amp/pictures/linux-gaming-made-easy-the-
       fastest-way-to-get-up-and-running/
       ?usqp=mq331AQCKAE%
       3D&amp_js_v=0.1#referrer=https%3A%2F%2Fwww.google.com
       &amp_tf=From%20%251%24s
       &ampshare=https%3A%2F%2Fwww.zdnet.com%2Fpictures%2F
       linux-gaming-made-easy-the-fastest-way-to-get-up-and-
       running%2F

*/

var ampAddr = String(window.location);
if (! /.*ampshare.*/gi.test(ampAddr)) {
    return;
}
var cleanAddr = ampAddr.replace(/^.*[?&]ampshare=([^&]+).*$/g, '$1');
cleanAddr = decodeURI(cleanAddr);
cleanAddr = decodeURIComponent(cleanAddr);
window.location = cleanAddr;
