const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', function () {
    nav.classList.toggle('active')
    overlay.classList.toggle('overlay-active')
})

close.addEventListener("click", function () {
    nav.classList.toggle("active");
    overlay.classList.toggle("overlay-active");
});

overlay.addEventListener('click', function () {
    nav.classList.toggle("active");
    overlay.classList.toggle("overlay-active");
})