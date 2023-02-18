const menu = document.querySelector(".menu_icon");
const menu_close = document.querySelector(".menu_icon_close");
const nav_bar = document.querySelector(".nav_bar");
const container = document.querySelector(".container");

menu.addEventListener("click", () => {
  nav_bar.classList.add("mobile_nav");
  container.classList.add("mobile_nav");
});

menu_close.addEventListener("click", () => {
  nav_bar.classList.remove("mobile_nav");
  container.classList.remove("mobile_nav");
});
