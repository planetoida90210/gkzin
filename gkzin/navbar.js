const burgerBar = document.getElementById('burger-menu');
const closeNav = document.querySelector('.sidebarmenu-togle span');
const sideNav = document.querySelector('nav');
const fixedNav = document.querySelector('div.navbar-container');
const fixedLogo = document.querySelector('div.gklogo');


window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        fixedNav.classList.add('nav-color');
        fixedLogo.style.backgroundImage = `url(images/gk-logo.png)`;
    } else {
        fixedNav.classList.remove('nav-color');
        fixedLogo.style.backgroundImage = `url(images/gk-logowhite.png)`;
    }
})

burgerBar.addEventListener('click', function () {
    sideNav.classList.add('active')
})

closeNav.addEventListener('click', function () {
    sideNav.classList.remove('active');
})