const MobileMenuIcon = document.querySelector('.hamburger-icon')
MobileMenuIcon.addEventListener('click', showMobileMenu)
const heroWrapper = document.querySelector('.hero-wrapper')
const mobileMenu = document.querySelector('.main-nav')
const links = document.querySelectorAll('.main-nav a')
links.forEach(link => {
    link.addEventListener('click', hideMobileMenu)
})

function showMobileMenu() {
    mobileMenu.classList.toggle('display')
    heroWrapper.classList.toggle('hide')
}

function hideMobileMenu() {
    heroWrapper.classList.toggle('hide')
    mobileMenu.classList.toggle('display')
}

let scroll = new SmoothScroll('a[href*="#"]');