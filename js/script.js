//Scroll smoothly to sections when clicking on nav links.

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (task) {
        task.preventDefault();

        const target_id = this.getAttribute('href').substring(1);
        const target_element = document.getElementById(target_id);

        window.scrollTo({
            top: target_element.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});


const gallery = document.querySelector('.gallery');
let scroll_interval;

function start_auto_scroll() {
    scroll_interval = setInterval(() => {
        const current_scroll_left = gallery.scrollLeft;
        const item_width = gallery.querySelector('.service').offsetWidth;
        const next_scroll_left = current_scroll_left + item_width;

        if (next_scroll_left >= gallery.scrollWidth) {
            gallery.scrollLeft = next_scroll_left;
        }

    }, 3000);
}

function stop_auto_scroll() {
    clearInterval(scroll_interval);
}

start_auto_scroll();

gallery.addEventListener('mouseenter', stop_auto_scroll);
gallery.addEventListener('mouseleave', start_auto_scroll);


document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });