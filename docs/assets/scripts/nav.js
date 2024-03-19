/*
    Author: Aaron Evans
    Description: javascript for navigation menu and events
*/

/*
    Nav Menu Button
*/
var menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', function() {
    //if not expanded, expand menu
    if(menuBtn.getAttribute('aria-expanded') === "false") {
        menuBtn.setAttribute('aria-expanded', 'true');
        document.getElementById('menu-list').classList.add('display-menu');
        return;
    }
    
    //else, contract menu
    document.getElementById('menu-list').classList.remove('display-menu');
    menuBtn.setAttribute('aria-expanded', 'false');
});

/*
    Nav Menu Links
*/
//link1
document.getElementById('navlink1').addEventListener('click', function() {
    //close out nav menu if clicked
    if(window.innerWidth <= 736) {
        document.getElementById('menu-list').classList.remove('display-menu');
        document.getElementById('menu').setAttribute('aria-expanded', 'false');
    }
});
//link2
document.getElementById('navlink2').addEventListener('click', function() {
    //close out nav menu if clicked
    if(window.innerWidth <= 736) {
        document.getElementById('menu-list').classList.remove('display-menu');
        document.getElementById('menu').setAttribute('aria-expanded', 'false');
    }
});
//link3
document.getElementById('navlink3').addEventListener('click', function() {
    //close out nav menu if clicked
    if(window.innerWidth <= 736) {
        document.getElementById('menu-list').classList.remove('display-menu');
        document.getElementById('menu').setAttribute('aria-expanded', 'false');
    }
});
