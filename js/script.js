//Scroll smoothly to sections when clicking on nav links.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


//Hambuger icon.
document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});
    

//Set back-to-top arrow to show when the user has scrolled upto 2050 pixels.
window.addEventListener('scroll', function () {
    const arrow = document.querySelector('.back-to-top');
    if (window.scrollY > 2050) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
});


//Smooth scrolling when back to top arrow is clicked.
document.querySelector('.back-to-top a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
});