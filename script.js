document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-list");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
  });
});
