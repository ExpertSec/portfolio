const words = [
  "desainer grafis",
  "IOT Engineer",
  "Software Developer",
  "Data Analyst",
  "Machine Learning Engineer",
  "Data Scientist",
  "Cybersecurity Specialist",
  "Web Developer",
];
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
