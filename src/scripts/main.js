const headerBtn = document.querySelector('.header__burger');

headerBtn.addEventListener('click', () => {
    const headerMenu = document.querySelector('.header .menu__list');
    const burgerOpen = document.querySelector('.burger__open');
    const burgerClose = document.querySelector('.burger__close');

    headerMenu.classList.toggle('menu__list--active');
    burgerOpen.classList.toggle('burger__open--active');
    burgerClose.classList.toggle('burger__close--active');
})