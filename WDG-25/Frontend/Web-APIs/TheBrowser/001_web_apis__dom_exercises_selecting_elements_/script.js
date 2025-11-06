// You can work here or download the template
const h1 = document.querySelector(`h1`);
console.log(h1);
const aTags = document.querySelectorAll(`a`);
console.log(aTags);
const btn = document.querySelector(`.btn`);
console.log(btn);

const header = document.querySelector(`.header`);
header.style.background = "#b5651d";

const heroContent = document.querySelector(".hero-content");
heroContent.children[0].style.fontSize = "3rem";

const navList = document.querySelector(`.nav-list`);
const navLinks = navList.querySelectorAll(`a`);
navLinks.forEach((link) => {
  link.style.color = "#faf0e6";
});

const newPara = document.createElement("p");
newPara.textContent = "Open daily from 7 AM to 9 PM.";
heroContent.appendChild(newPara);
