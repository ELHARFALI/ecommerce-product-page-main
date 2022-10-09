const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const shopIcon = document.querySelector(".shop-icon");
let num = document.querySelector('.num');
const shoping = document.querySelector(".shoping");
const mines = document.querySelector(".mines");
const plus = document.querySelector(".plus");
const btn = document.querySelector(".btn-main");
let number = document.querySelector(".number p");
const shop_container = document.querySelector(".shop__container");


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

const card__prix = document.querySelector('.card__prix span')
let number__card = document.querySelector('.number__card')
let equal_number = document.querySelector('.equal .equal__num')




btn.addEventListener('click', function () {
    
    if (count !== 0) {
        num.classList.add("active");
        content.classList.add("active");
    }

    num.textContent = count;

    number__card.textContent = count;

    equal_number.textContent = 125 * count;
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
    shop_container.classList.toggle('active')
})

num.addEventListener("click", function () {
    shoping.classList.toggle("is-active");
});



const delete_products = document.querySelector('.delete')
const content = document.querySelector(".content");

delete_products.addEventListener('click', function () {
        content.classList.toggle("active");
    
})