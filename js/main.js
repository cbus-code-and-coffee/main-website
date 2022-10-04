//Variables
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navItem = document.querySelectorAll(".navItem");

//Event Listeners / Functions
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navItem.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
