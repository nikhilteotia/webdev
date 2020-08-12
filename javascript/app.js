const navToggle = document.querySelector(".toggle-nav");
const navLinks = document.querySelectorAll(".nav_link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav_open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
  });
});
