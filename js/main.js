// Toogle Navbar 
let menuIcon = document.querySelector('#menu-icon') /*kata kunci buat bikin variabel*/
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    // remove toogle icon
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}

// Typed js
const typed = new Typed('.multiple-text', {
    strings: ['Student at IDN Boarding School', 'Software Engineer', 'Product Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});
