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

//init tabs
window.addEventListener('load', function () {
    const elements = document.querySelectorAll('.nav .link');

    elements.forEach((el) => {
        el.addEventListener('click', CloseMenu());
    })
});

//close out nav menu during mobile
function CloseMenu() {
    //if mobile / tablet, close menu
    if(window.innerWidth <= 736) {
        document.getElementById('menu-list').classList.remove('display-menu');
        document.getElementById('menu').setAttribute('aria-expanded', 'false');
    }
}