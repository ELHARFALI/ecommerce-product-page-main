const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const shopIcon = document.querySelector(".shop-icon");
let num = document.querySelector('.num');
const shoping = document.querySelector(".shoping");
const mines = document.querySelector(".mines");
const plus = document.querySelector(".plus");
const btn = document.querySelector(".btn");
let number = document.querySelector(".number p");


let count = 0;

plus.addEventListener('click', function () {
    count++;
    number.textContent = count;
})

mines.addEventListener("click", function () {

    if (count === 0) {
        count === 0;
        number.textContent = count;
    } else {
        count--;
        number.textContent = count;
    }
});

btn.addEventListener('click', function () {
    
    if (count == 0) {
        num.textContent = ''
    } else {
        num.classList.toggle("active");
    }

    num.textContent = count;
})






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

shopIcon.addEventListener('click', function () {
    shoping.classList.toggle('is-active')
})

num.addEventListener("click", function () {
    shoping.classList.toggle("is-active");
});