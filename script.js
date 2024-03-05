"use strict";
const hamburguer = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLogo = document.querySelector(".nav-logo");

hamburguer.addEventListener("click", function () {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
  navLogo.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", function () {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    navLogo.classList.remove("active");
  })
);
