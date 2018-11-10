var scrollbar = true;

function toggleScroll() {
    if (scrollbar == true) {
        document.getElementById('scrollLock').innerHTML = 'Toggle Scroll Lock <br> Scroll Lock: On';
        document.body.style.overflow = 'hidden';
        scrollbar = false;
    } else {
        document.getElementById('scrollLock').innerHTML = 'Toggle Scroll Lock <br> Scroll Lock: Off';
        document.body.style.overflow = 'visible';
        scrollbar = true;
    }
}
