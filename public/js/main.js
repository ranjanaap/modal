(function() {
    'use strict';

    var trigger = document.getElementById('trigger');
    var close = document.getElementsByClassName('close')[0];
    var overlay = document.getElementsByClassName('overlay')[0];
    trigger.onclick = function() {
        overlay.classList.add('is-open');
    };

    close.onclick =  function(){
	   overlay.classList.remove('is-open');
    };

    overlay.onclick = function(e)  {
        if( e.target != this ) {
            return;
        }

	   overlay.classList.remove('is-open');
    };

}());
