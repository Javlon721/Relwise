"use strict";

const iconBerg = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".header__logo");
iconBerg.addEventListener("click", function (e) {
	menu.classList.toggle("active");
	iconBerg.classList.toggle("active");
	logo.classList.toggle("active");
    document.body.classList.toggle('lock');
});
