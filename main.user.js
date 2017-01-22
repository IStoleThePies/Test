// ==UserScript==
// @name         Astronomy SE design
// @version      1
// @author       Sir Cumference
// @namespace    https://github.com/IStoleThePies/Test
// @match        https://astronomy.stackexchange.com/*
// @grant        none
// @downloadURL  https://rawgit.com/IStoleThePies/Test/test/main.user.js
// @updateURL    https://rawgit.com/IStoleThePies/Test/test/main.user.js
// ==/UserScript==

(function() {
    $('body').css({"background": "url(https://i.imgur.com/teddPuM.png)"});
    $('.container').css("box-shadow", "#EBF2F5 0 0px 0 inset");
    $('.envelope-on, .envelope-off, .vote-up-off, .vote-up-on, .vote-down-off, .vote-down-on, .star-on, .star-off, .comment-up-off, .comment-up-on, .comment-flag, .comment-flag-off, .comment-flag-on, .edited-yes, .feed-icon, .vote-accepted-off, .vote-accepted-on, .vote-accepted-bounty, .badge-earned-check, .delete-tag, .grippie, .expander-arrow-hide, .expander-arrow-show, .expander-arrow-small-hide, .expander-arrow-small-show, .anonymous-gravatar, .badge1, .badge2, .badge3').css("background-image", "url('https://cdn.rawgit.com/IStoleThePies/0c56554efd73dab75025e2019b330c57/raw/9e9b752c8478e7fe0cd99a845a44243ce587039e/Astronomy.svg'),none");
    $('#hlogo a').css({"background": "transparent url('https://cdn.rawgit.com/IStoleThePies/0c56554efd73dab75025e2019b330c57/raw/676bf382757e8f7e038f7e048e92d58a91c2616e/Astronomy.svg') no-repeat left top", "text-indent": "10em", "color": "transparent", "margin-top": "-10px"});
    $('.nav a').not('.nav li.youarehere a').css("color", "white");
    $('#footer').css({"color": "transparent", "background": "url(https://b.thumbs.redditmedia.com/OHfYgROyNMImNFXNFM2JVuj5k--vXKhUHDya3GAZbHM.png) no-repeat bottom center"});
    $('#hlogo a .beta-title').css('color', 'transparent');
    $('#header').css('background-image', 'url(https://cdn.tutsplus.com/vector/uploads/legacy/tuts/54_Vector_Aurora/final_large.jpg)');

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://i.imgur.com/yohbpH4.png';
    document.getElementsByTagName('head')[0].appendChild(link);

    document.styleSheets[0].addRule('.nav a:after','content: ""');
    document.styleSheets[0].addRule('.nav a:after','display: block');
    document.styleSheets[0].addRule('.nav a:after','margin: auto');
    document.styleSheets[0].addRule('.nav a:after','height: 2px');
    document.styleSheets[0].addRule('.nav a:after','width: 0px');
    document.styleSheets[0].addRule('.nav a:after','transition: width .3s ease, background-color .3s ease');
    document.styleSheets[0].addRule('.nav a:hover:after','width: 100%');
    document.styleSheets[0].addRule('.nav a:hover:after','background: #F35D5F');

    new MutationObserver(function() {
        $('body').css({"background": "url(https://i.imgur.com/teddPuM.png)"});
    }).observe(document.body, {attributes: true});
})();
