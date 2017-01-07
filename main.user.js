// ==UserScript==
// @name         Astronomy SE design
// @version      0.1
// @author       Sir Cumference
// @namespace    https://github.com/IStoleThePies/Test
// @match        https://astronomy.stackexchange.com/*
// @downloadURL  https://rawgit.com/IStoleThePies/Test/test/main.user.js
// @updateURL    https://rawgit.com/IStoleThePies/Test/test/main.user.js
// ==/UserScript==

(function() {
    $('body').css({"background": "url(https://i.imgur.com/teddPuM.png)"});
    $('.container').css("box-shadow", "#EBF2F5 0 0px 0 inset");
    $('.envelope-on, .envelope-off, .vote-up-off, .vote-up-on, .vote-down-off, .vote-down-on, .star-on, .star-off, .comment-up-off, .comment-up-on, .comment-flag, .comment-flag-off, .comment-flag-on, .edited-yes, .feed-icon, .vote-accepted-off, .vote-accepted-on, .vote-accepted-bounty, .badge-earned-check, .delete-tag, .grippie, .expander-arrow-hide, .expander-arrow-show, .expander-arrow-small-hide, .expander-arrow-small-show, .anonymous-gravatar, .badge1, .badge2, .badge3').css("background-image", "url('https://cdn.rawgit.com/IStoleThePies/0c56554efd73dab75025e2019b330c57/raw/3e5d103dcaca42017aacea500121edfccb850578/Astronomy.svg'),none");
    $('#hlogo a').css({"background": "transparent url('https://cdn.rawgit.com/IStoleThePies/0c56554efd73dab75025e2019b330c57/raw/58623741d435a4819fde8d6d29c9bcb57d9b17fb/Astronomy.svg') no-repeat left top", "text-indent": "10em", "color": "transparent"});
    $('.nav a').css("color", "white");
    $('#footer').css({"color": "transparent", "background": "url(https://b.thumbs.redditmedia.com/OHfYgROyNMImNFXNFM2JVuj5k--vXKhUHDya3GAZbHM.png) no-repeat bottom center"});
})();
