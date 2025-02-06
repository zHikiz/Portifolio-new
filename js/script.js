/* ====== turns the menu hamburger into a X ====== */
const menuHamburger = document.querySelector('.menu-hamburger');
menuHamburger.addEventListener('click', (e) => {
    toggleMenu();
});

function toggleMenu () {
    const nav = document.querySelector ('.nav-responsive');
    menuHamburger.classList.toggle ('charge');

    if (menuHamburger.classList.contains ('charge')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}