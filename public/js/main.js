(function() {
    'use strict';

    window.onload = function() {
        var overlay = document.getElementsByClassName('overlay')[0];
        console.dir(overlay.classList);
        overlay.classList.add('is-open');
    }

}());
