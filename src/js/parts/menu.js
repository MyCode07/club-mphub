const menu = document.querySelector('.menu');
const burger = document.querySelector('.menu-open');
const menuLinks = document.querySelectorAll('.menu nav li a');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.add('_open');
    })
}

if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            menu.classList.remove('_open');
        })
    })
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('menu') || targetEl.classList.contains('menu-close')) {
        menu.classList.remove('_open');
    }
})




const burgerActiveHeigth = 250;
const stickyBurger = () => {
    if (window.scrollY > burgerActiveHeigth) {
        burger.classList.add('_active')
    }
    else {
        burger.classList.remove('_active')
    }
}

stickyBurger();
window.addEventListener('scroll', stickyBurger);