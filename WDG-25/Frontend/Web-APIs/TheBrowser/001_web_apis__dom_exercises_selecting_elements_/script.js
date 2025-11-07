// You can work here or download the template
const header = document.querySelector(`.header`);
const navLinks = document.querySelectorAll(`.nav-list a`);
const heroContent = document.querySelector(`.hero-content`);
const heroHeading = document.querySelector(`.hero-content h1`);
const heroButton = document.querySelector(`.btn`);

console.log(heroHeading);
console.log(navLinks);
console.log(heroButton);

header.style.background = "#b5651d";

heroHeading.style.fontSize = "3rem";

navLinks.forEach((link) => {
  link.style.color = "#faf0e6";
});

const heroText = document.createElement("p");
heroText.textContent = "Open daily from 7 AM to 9 PM.";
heroContent.append(heroText);
