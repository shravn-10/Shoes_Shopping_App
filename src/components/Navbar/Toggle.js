// Toggle Button functionality

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("nav-toggle");
});
