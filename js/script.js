const words = [
  "desainer grafis",
  "Electronic Engineer",
  "Software Developer",
  "Data Analyst",
  "Machine Learning Engineer",
  "Data Scientist",
  "Cybersecurity Specialist",
];
function scrollReveal() {
  if (window.innerWidth <= 450) {
    ScrollReveal().reveal(".skill-card", {
      origin: "left",
      distance: "300px",
      duration: 500,
      delay: 100,
      easing: "ease-in-out",
      reset: false,
      interval: 100,
    });
  } else {
    ScrollReveal().reveal(".skill-card", {
      origin: "bottom",
      distance: "150px",
      duration: 500,
      delay: 100,
      easing: "ease-in-out",
      reset: false,
      interval: 100,
      // beforeReveal: (el) => {
      //   el.classList.add("reveal")
      // }
    });
  }
}
document.addEventListener("DOMContentLoaded", scrollReveal);

const span = document.getElementById("randomtext");
let random = () => {
  let acak = setInterval(() => {
    const randomText = Math.floor(Math.random() * words.length);
    span.textContent = words[randomText];
  }, 15);
  setTimeout(() => {
    clearInterval(acak);
  }, 1000);
  setTimeout(() => {
    random();
  }, 2000);
};
random();
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle");
  const navMenu = document.querySelector("nav");

  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
let spanToggle = document.getElementById("toggle");
spanToggle.addEventListener("click", () => {
  document.getElementById("span").classList.toggle("active");
});
