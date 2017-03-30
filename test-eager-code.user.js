// ==UserScript==
// @name         EagerCode update
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://test.eager-code.eu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let reserv = document.getElementById('reservation');
    let d = new Date();
    d.setHours(d.getHours() - 2);
    reserv.value = d.toISOString();

    setInterval(function(){
        let reserv = document.getElementById('reservation');
        let d = new Date();
        d.setHours(d.getHours() - 2);
        reserv.value = d.toISOString();
    }, 5 * 60 * 1000);
})();