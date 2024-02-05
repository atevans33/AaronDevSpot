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

/*
    Play Portfolio site video/image on hover
*/
// Targeting video element  
let clips = document.querySelectorAll(".video");
clips.forEach(clip => {
    //play clip on hover
    clip.addEventListener("mouseover", function (e) {
        clip.play();
    })

    //stop clip on hover exit
    clip.addEventListener("mouseout", function (e) {
        clip.pause();
        clip.currentTime = 0;
    })
});

/* 
    Buttons for Digital Accessibility Accordion
*/
var examplePrevious = document.getElementById('508');
var btnPrevious = document.getElementById('508-btn');
var fileBtn = document.getElementById('open-file');
var contactBtn = document.getElementById('contact2');
//section 508 button
var btn508 = document.getElementById('508-btn');
btn508?.addEventListener('click', function () {
    examplePrevious.classList.remove('display');
    examplePrevious = document.getElementById('508');
    examplePrevious.classList.add('display');

    //set aria
    if (btnPrevious != null) {
        btnPrevious.setAttribute('aria-expanded', 'false');
    }
    btnPrevious = btn508;
    btnPrevious.setAttribute('aria-expanded', 'true');

    //scroll element into view if on mobile
    if (window.innerWidth <= 1479) {
        document.getElementById(
            btnPrevious.getAttribute('aria-controls')).
            scrollIntoView({ behavior: "smooth", block: "end" });
    }
});

//pdf button
var btnPDF = document.getElementById('pdf-btn');
btnPDF?.addEventListener('click', function() {
    examplePrevious.classList.remove('display');
    examplePrevious = document.getElementById('adobe');
    examplePrevious.classList.add('display');

    //set aria
    if(btnPrevious != null) {
        btnPrevious.setAttribute('aria-expanded', 'false');
    }
    btnPrevious = document.getElementById('pdf-btn');
    btnPrevious.setAttribute('aria-expanded', 'true');

    //scroll element into view if on mobile
    if (window.innerWidth <= 1479) {
        document.getElementById(
            btnPrevious.getAttribute('aria-controls')).
            scrollIntoView({ behavior: "smooth", block: "end"});
    }
});

//Word button
var btnWord = document.getElementById('word-btn');
btnWord?.addEventListener('click', function() {
    examplePrevious.classList.remove('display');
    examplePrevious = document.getElementById('word');
    examplePrevious.classList.add('display');

    //set aria
    if (btnPrevious != null) {
        btnPrevious.setAttribute('aria-expanded', 'false');
    }
    btnPrevious = btnWord;
    btnPrevious.setAttribute('aria-expanded', 'true');

    //scroll element into view if on mobile
    if (window.innerWidth <= 1479) {
        document.getElementById(
            btnPrevious.getAttribute('aria-controls')).
            scrollIntoView({ behavior: "smooth", block: "end"});
    }
});

//Powerpoint button
var btnPPT = document.getElementById('ppt-btn');
btnPPT?.addEventListener('click', function() {
    examplePrevious.classList.remove('display');
    examplePrevious = document.getElementById('ppt');
    examplePrevious.classList.add('display');

    //set aria
    if (btnPrevious != null) {
        btnPrevious.setAttribute('aria-expanded', 'false');
    }
    btnPrevious = btnPPT;
    btnPrevious.setAttribute('aria-expanded', 'true');

    //scroll element into view if on mobile
    if (window.innerWidth <= 1479) {
        document.getElementById(
            btnPrevious.getAttribute('aria-controls')).
            scrollIntoView({ behavior: "smooth", block: "end"});
    }
});

//video button
var btnVid = document.getElementById('vid-btn');
btnVid?.addEventListener('click', function() {
    examplePrevious.classList.remove('display');
    examplePrevious = document.getElementById('video');
    examplePrevious.classList.add('display');

    //set aria
    if (btnPrevious != null) {
        btnPrevious.setAttribute('aria-expanded', 'false');
    }
    btnPrevious = btnVid;
    btnPrevious.setAttribute('aria-expanded', 'true');

    //scroll element into view if on mobile
    if (window.innerWidth <= 1479) {
        document.getElementById(
            btnPrevious.getAttribute('aria-controls')).
            scrollIntoView({ behavior: "smooth", block: "end"});
    }
});

/*
    contact button for file remediation
*/
var contact_buttons = document.querySelectorAll('.contact');
contact_buttons.forEach( element => {
    element.addEventListener('click', function() {
        document.getElementById('contact-dialog').classList.add('display');
    });
});

/*
    Exit buttons for modal dialogs
*/
//contact modal
var modal1_exit = document.getElementById('dialog1-exit');
modal1_exit?.addEventListener('click', function() {
    document.getElementById('contact-dialog').classList.remove('display');
});
var modal1_backdrop = document.getElementById('dialog1-backdrop');
modal1_backdrop?.addEventListener('click', function() {
    document.getElementById('contact-dialog').classList.remove('display');
});

