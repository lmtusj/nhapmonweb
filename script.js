"use strict";

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

const navLinks = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");

function linkAction() {
  navMenu.classList.remove("show");
}

navLinks.forEach(link => link.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);

window.addEventListener("scroll", () => {
  const nav = document.getElementById("header");
  if (window.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
});
