/*
    Author: Aaron Evans
    Desc: Handler for sitewide interaction, include:
        nav menu
*/

"use strict";

/* Open and Close nav menu */
var menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    //open menu
    if(menu.getAttribute('aria-expanded') === 'false') {
        menu.setAttribute('aria-expanded', 'true');
        document.getElementById('nav-list').classList.add('open');
        document.getElementById('nav').classList.add('open');
    }
    //close menu
    else {
        menu.setAttribute('aria-expanded', 'false');
        document.getElementById('nav-list').classList.remove('open');
        document.getElementById('nav').classList.remove('open')
    }
})
