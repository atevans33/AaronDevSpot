/*

Portfolio Index Page
Author: Aaron Evans
Last Update: 12/19/2023

*/

"use strict";

//scroll event for header animations
window.addEventListener('scroll', () => {
    //only perform animation if enough space is available on screen
    if(window.innerHeight < 950) {
        return;
    }

    HeaderScrollAnims();
});


/*
    intersection observer | fade content in as scroll takes place
*/
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
}, {
    threshold: .3
});
document.querySelectorAll(".IO-el").forEach(entry => {
    observer.observe(entry);//oberve each 'IO-el' element
});

/*
    scroll event for header animations
*/
var h1 = document.getElementById('heading-lbl');
var desc1 = document.getElementById('heading-desc1');
var desc2 = document.getElementById('heading-desc2');
var decFour = document.getElementById('dec-four');
var speed = 1.4;//speed of header element movement
function HeaderScrollAnims() {
    var pos = window.scrollY;//current position

    if(pos > window.innerWidth) {
        return;//avoid pushing element further than needed
    }

    //move elements accordingly
    h1.style.transform = "TranslateX(" + (pos * speed)  + "px)";
    desc1.style.transform = "TranslateX(" + (pos * speed)  + "px)";
    desc2.style.transform = "TranslateX(" + (pos * speed * -1)  + "px)";
    decFour.style.transform = "TranslateY(" + (pos * -0.5)  + "px)";
}
