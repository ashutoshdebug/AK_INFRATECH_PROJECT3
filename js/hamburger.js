// Hamburger logic for responsiveness
const hamburger = document.querySelector(".hamburger");
const sideNav = document.getElementById("side-nav");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  sideNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideNav.classList.remove("active");
});
