// ==UserScript==
// @name         Unblur Jija's images
// @namespace    https://vk.com/id85442235
// @version      0.1
// @description  Убирает замыливание с изображений жидкостей на сайте tmn.zenmod.ru
// @author       Satorlous
// @connect      zenmod.ru
// @connect      *.zenmod.ru
// @include     http://*
// @include     https://*
// @grant        none
// ==/UserScript==

(function() {
    removeBlur();
    function removeBlur() {
        let jijaBlocks = document.querySelectorAll('.has_nicotine');
        for(let i = 0; i < jijaBlocks.length; i++) {
            jijaBlocks[i].classList.remove("has_nicotine");
        }
    }
    setInterval(removeBlur, 1000);
})();
