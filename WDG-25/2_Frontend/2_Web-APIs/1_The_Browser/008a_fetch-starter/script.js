// TASK: display random comic on button click
// Source: https://xkcd-api-ridvanaltun.vercel.app/api/comics/random

const comicContainer = document.getElementById("comic-container");
const comicImage = document.getElementById("comic-image");
const comicTitle = document.getElementById("comic-title");
const comicDate = document.getElementById("comic-date");
const btnGetComic = document.getElementById("get-comic");

const renderComic = ({ img, alt, title, day, month, year }) => {
  comicContainer.classList.add("hidden");
  const date = new Date(year, month, day);
  const formattedDate = Intl.DateTimeFormat("de-DE").format(date);

  comicImage.setAttribute("src", img);
  comicImage.setAttribute("alt", alt);
  comicTitle.textContent = title;
  comicDate.setAttribute("datetime", year + "-" + month + "-" + day);
  comicDate.textContent = formattedDate;

  comicContainer.classList.remove("hidden");
};

/* getComic mit method chaining */
// const getComic = () => {
//   fetch("https://xkcd-api-ridvanaltun.vercel.app/api/comics/random")
//     .then((response) => response.json())
//     .then((data) => renderComic(data))
//     .catch((err) => console.log(err));
// };

/* getComic() mit async await */
const getComic = async () => {
  try {
    const response = await fetch(
      "https://xkcd-api-ridvanaltun.vercel.app/api/comics/random"
    );
    if (!response.ok) throw new Error("Nicht OK. Versuch es nochmal.");
    const data = await response.json();
    renderComic(data);
  } catch (error) {
    console.log(error);
  }
};

btnGetComic.addEventListener("click", () => getComic());
getComic();
//
//
//

// TUTORIAL: eigene Promise bauen:

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("timer abgelaufen");
//     Math.random() < 0.5 ? resolve("Erfolg") : reject("Fehlschlag");
//   }, 2000);
// });

// myPromise
//   .then((data) => {
//     console.log("resolve: " + data);
//   })
//   .catch((err) => {
//     console.log("err: " + err);
//   });
