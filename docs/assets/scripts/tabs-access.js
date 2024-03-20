/*
    Author: Aaron Evans
    Reference: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
    
    Desc: Script for implementing tabs element into webpage
*/

'use strict';

/*
    Helper functions for Component
*/

//Select Actions
const SelectActions = {
    First: 0,
    Last: 1,
    Next: 2,
    Previous: 3,
}

//map a key press to an action
function getActionFromKey(event) {
    const {key, shiftkey} = event;

    console.log(key);

    //home and end buttons
    if (key === 'Home') {
        return SelectActions.First;
    }
    if (key === 'End') {
        return SelectActions.Last;
    }

    //prev and next buttons | escape and delete (works same as next)
    if(key === 'ArrowRight' || key === 'Escape' || key === 'Delete') {
        return SelectActions.Next;
    }
    if(key === 'ArrowLeft') {
        return SelectActions.Previous;
    }

    //shift + 10 | opens associated popup menu

    return -1;
}

//get index of item from an array
function indexOf(array, key) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === key) {
            return i;
        }
    }

    return -1;
}

//

/*
    Tablist Component Class
*/

//accepts tablist element as argument
function Tablist (el) {
    //element refs
    this.tablist = el;//tab element
    this.tabs = el.querySelectorAll('[role=tab]'); //list of tabs 
    this.tabPanels = el.querySelectorAll('[role=tabpanel]');//list of tabPanels

    //data
    this.idBase = this.tablist.id || 'tablist';
    this.firstTab = null;
    this.lastTab = null;
    this.selectedTab;

    //state
    this.index = 0;//tab index

    if(el && this.tablist && this.tabs) {
        this.init();
    }
}

//tablist initialization funciton
Tablist.prototype.init = function() {
    //set up tabs
    for (let i = 0; i < this.tabs.length; i++) {
        //hold onto current tab
        let tab = this.tabs[i];

        //add listener events
        tab.addEventListener('click', this.onClick.bind(this));
        tab.addEventListener('keydown', this.onKeydown.bind(this));

        //set first and last tabs
        if(!this.firstTab) {
            this.firstTab = tab;
        }
        this.lastTab = tab;
    }

    //set selected tab (default is first tab)
    this.selectTab(this.firstTab);
}

//on tab select
Tablist.prototype.selectTab = function(newTab) {
    let tab = this.selectedTab;

    //remove attributes from old tab
    if(tab) {
        //remove tabindex
        tab.tabIndex = -1;

        //reset aria-selected
        tab.setAttribute('aria-selected', 'false');

        //remove display from old tabpanel
        this.tabPanels[indexOf(this.tabs, this.selectedTab)].classList.remove('display');
    }

    //focus tab
    if(tab) {//only focuses if old tabs exist | aka, skips first time
        newTab.focus();
    }

    //update selected tab
    this.selectedTab = newTab;
    tab = this.selectedTab;

    /* update attributes on current tab */
    //add tabindex
    tab.tabIndex = 0;

    //update aria-selected
    tab.setAttribute('aria-selected', 'true');

    //add display class to new tabpanel
    let i = indexOf(this.tabs, this.selectedTab);
    this.tabPanels[i].classList.add('display');

    //animate right panel - depending on button chose
    switch(i) {
        case 0:
            buttonFocus_1();
            break;
        case 1:
            buttonFocus_2()
            break;
        case 2:
            buttonFocus_3()
            break;
        case 3:
            buttonFocus_4();
            break;
    }
}

//next tab function
Tablist.prototype.next = function() {
    if(this.selectedTab === this.lastTab) {
        this.selectTab(this.lastTab);
    }
    else {
        let index = indexOf(this.tabs, this.selectedTab);
        this.selectTab(this.tabs[index + 1]);
    }
}

//prev tab function
Tablist.prototype.prev = function() {
    if(this.selectedTab === this.firstTab) {
        this.selectTab(this.firstTab);
    }
    else {
        let index = indexOf(this.tabs, this.selectedTab);
        this.selectTab(this.tabs[index - 1]);
    }
}

//select firs tab
Tablist.prototype.homeTab = function() {
    this.selectTab(this.firstTab);
}

//select last tab
Tablist.prototype.endTab = function() {
    this.selectTab(this.lastTab);
}

//tab click function
Tablist.prototype.onClick = function(event) {
    this.selectTab(event.currentTarget);
}

//on key down
Tablist.prototype.onKeydown = function (event) {
    
    //get action from key pressed
    const action = getActionFromKey(event);
    console.log('here');
    //if no action found, skip function
    if(action === -1) {
        return;
    }
    
    //put action into effect
    switch(action) {
        case SelectActions.First:
            this.selectTab(this.firstTab);
            break;
        case SelectActions.Last:
            this.selectTab(this.lastTab);
            break;
        case SelectActions.Previous:
            this.prev();
            break;
        case SelectActions.Next:
            this.next();
            break;
        default:
            break;
    }

    event.stopPropagation();
    event.preventDefault();
}


//init tabs
window.addEventListener('load', function () {
    const elements = document.querySelectorAll('[role=tablist]');

    elements.forEach((el) => {
        new Tablist(el);
    })
});

/*
    Button Functions
*/

//button (1) recieves focus
function buttonFocus_1() {
    //no display all error tooltips
    document.getElementById('access-panel').classList.remove('display');

    //remove checkmark disply class
    document.querySelectorAll('.error').forEach((el) => {
        el.classList.remove('checkmark');
        el.classList.add('nocheck');
    });

    //no display gold ribbon
    document.getElementById('gold-ribbon').classList.remove('display');

    //hide right panel bottom comment
    document.getElementById('right-panel-comment').classList.remove('display');
}

//button (2) recieves focus
function buttonFocus_2() {
    //display error tooltips
    document.getElementById('access-panel').classList.add('display');

    //display checkmark tooltips
    document.querySelectorAll('.error').forEach((el) => {
        el.classList.remove('checkmark');
        el.classList.add('nocheck');
    });

    //no display gold ribbon
    document.getElementById('gold-ribbon').classList.remove('display');

    //hide right panel bottom comment
    let el = document.getElementById('right-panel-comment');
    el.classList.add('display');
    el.innerHTML = 'Hover or select errors for more details.';
};

//tabs button (3) recieves focus
function buttonFocus_3() {
    //display tooltips
    document.getElementById('access-panel').classList.add('display');

    //display checkmark tooltips
    document.querySelectorAll('.error').forEach((el) => {
        el.classList.add('checkmark');
        el.classList.remove('nocheck');
    });

    //no display gold ribbon
    document.getElementById('gold-ribbon').classList.remove('display');

    //hide right panel bottom comment
    let el = document.getElementById('right-panel-comment');
    el.classList.add('display');
    el.innerHTML = 'Hover or select checks for more details.';
};

//tabs button (4) recieves focus
function buttonFocus_4() {
    //display tooltips
    document.getElementById('access-panel').classList.add('display');

    //display checkmark tooltips
    document.querySelectorAll('.error').forEach((el) => {
        el.classList.add('checkmark');
        el.classList.remove('nocheck');
    });

    //no display gold ribbon
    document.getElementById('gold-ribbon').classList.add('display');

    //hide right panel bottom comment
    let el = document.getElementById('right-panel-comment');
    el.classList.add('display');
    el.innerHTML = 'Hover or select checks for more details.';
};