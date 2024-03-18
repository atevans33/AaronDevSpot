"use strict";

//update svgs on scroll
window.addEventListener('scroll', function () {
    //check each svg to see if it's in view
    Object.entries(poemPaths).forEach((poem) => {
        let el = document.getElementById(poem[0]);
        if (ElementInView(el)) {
            fillSVGPaths(el);
            return;
        }
    });
});

// key value pairs (poem.id | svg paths)
const poemPaths = {};
const poemStanzas = {};

function fillSVGPaths(poem) {
    //get scroll percentage of current poem
    const scrollPercentage = () => {
        return (Math.abs(poem.getBoundingClientRect().top
            - window.innerHeight) / (poem.offsetHeight - window.innerHeight));
    }

    //scroll percentage
    let scrollP = scrollPercentage();

    //iterate through poem paths
    for (let i = 0; i < poemPaths[poem.id].length; i++) {
        let path = poemPaths[poem.id][i];

        //get total path length
        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        //get drawLength (can't go over 100% draw length)
        let drawLength = (scrollP >= 1) ? pathLength : pathLength * scrollP;

        //shift path stroke to match scroll percentage of poem
        path.style.strokeDashoffset = pathLength - drawLength;
    }

    //make stanzas visible
    [...poemStanzas[poem.id]].forEach((stanza) => {
        //if stanza isn't already faded in
        if(stanza.classList.contains('fade-in')) {
            //blank - skip iteration
        } else {
            if(scrollP > stanza.getAttribute('percentage')) {
                stanza.classList.add('fade-in');
            }
        }
    });
};

//check if element in view of viewport 
function ElementInView(el) {
    const { top, bottom } = el.getBoundingClientRect();
    const { innerHeight } = window;

    return ((top <= innerHeight) && bottom >= innerHeight);
}

window.addEventListener('load', function () {
    let poetry = document.getElementById("poetry-region").querySelectorAll('li');

    for (let i = 0; i < poetry.length; i++) {
        //save svg paths for each poem | 2d array | key-value
        poemPaths[poetry[i].id] = poetry[i].querySelectorAll('path');
        //save poetry stanzas for each poem | 2d array | key-value
        poemStanzas[poetry[i].id] = poetry[i].querySelectorAll('.stanza');

        let percentage = 0.0;
        for(let j = 0; j < poemStanzas[poetry[i].id].length; j++) {
            poemStanzas[poetry[i].id][j].setAttribute('percentage', percentage);
            percentage = percentage + (1 / poemStanzas[poetry[i].id].length);
        }
    }

    [...(document.getElementById("poetry-region").querySelectorAll('path'))].forEach((path) => {
        if(!path.classList.contains('js-ignore')) {
            path.style.strokeDasharray = path.getTotalLength();
            path.style.strokeDashoffset = path.getTotalLength();
        }
    });
});