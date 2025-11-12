let y = 1;
let url = `https://dog.ceo/api/breeds/image/random`;

async function fetchDog(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data; // { message: "image_url", status: "success" }
  } catch (error) {
    console.error("Error fetching dog:", error);
  }
}

const body = document.body;
body.innerHTML = "";
body.style.display = "grid";
body.style.gridTemplateColumns = "150px 150px 150px 150px 150px 150px";
body.style.gridTemplateRows = "150px 150px 150px 150px 150px 150px";

function addImage(path) {
  const html = `<img src="${path}" style="width:200px; margin:5px; aspect-ratio: auto; height:100%"/>`;
  body.insertAdjacentHTML("beforeend", html);
}

const z = setInterval(async () => {
  const data = await fetchDog(url);
  if (data && data.message) addImage(data.message);
  if (y++ >= 30) clearInterval(z);
}, 1000);
