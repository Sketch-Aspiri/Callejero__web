const menuCheckbox = document.getElementById('open-menu');

menuCheckbox.addEventListener('change', () => {
if (menuCheckbox.checked) {
    document.body.classList.add('no-scroll');
} else {
    document.body.classList.remove('no-scroll');
}
});

const navLinks = document.querySelectorAll('.header__nav a');

navLinks.forEach(link => {
link.addEventListener('click', () => {
    menuCheckbox.checked = false;
    document.body.classList.remove('no-scroll');
});
});