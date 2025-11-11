// GET data and add to DOM II
// ==========================

// **Objective:**

// Learn how to fetch data from an API and display it on a webpage using JavaScript and Tailwind CSS by creating cards for the first 150 Pokémon.

// **Instructions:**

// *   **Fetch Data:** Write JavaScript to fetch data for the first 150 Pokémon from the Pokémon API. [More info can be found here](https://pokeapi.co)
// *   **Display Data**: Populate the DOM with the fetched Pokémon data as styled cards. Show us the name, image and type. The grid is already set up in the HTML file.

// **Pokémon API:** A free API that provides information about Pokémon.

// Container-Element aus dem DOM holen
const pokeContainer = document.querySelector("#pokemon-container");

// Funktion zum Rendern einer Pokemon-Karte
function renderPokeCard(data) {
  const html = `
         <article class="bg-teal-900 text-stone-100 flex flex-col items-center rounded-xl shadow">
          <img src="${data.sprites.other.dream_world.front_default}" alt="" class="max-h-48 grow p-10">
          <h2 class="font-semibold capitalize text-2xl pb-5">${data.name}</h2>
          <div class="flex gap-2 items-center justify-between w-full px-3">
            <label for="hp">HP</label>
            <meter value="${data.stats[0].base_stat}" max="100" id="hp">HP</meter>
          </div>
          <div class="flex gap-2 items-center justify-between w-full px-3">
            <label for="attack">Attack</label>
            <meter class="[&::-webkit-meter-optimum-value]:bg-red-500" value="${data.stats[1].base_stat}" max="100" id="attack">Attack</meter>
          </div>
          <div class="flex gap-2 items-center justify-between w-full px-3 pb-3">
            <label for="defense">Defense</label>
            <meter class="[&::-webkit-meter-optimum-value]:bg-blue-500" value="${data.stats[2].base_stat}" max="100"
              id="defense">Defense</meter>
          </div>
        </article>`;

  // Einfachste Möglichkeit, HTML dem DOM hinzuzufügen
  // pokeContainer.innerHTML += html;

  // Etwas mehr Kontrolle
  pokeContainer.insertAdjacentHTML("beforeend", html);
}

// const pokeId = Math.floor(Math.random() * 150);

// Fetch mit .then()-Method Chaining
// fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
//   .then((res) => res.json())  // Response in JSON umwandeln
//   .then((data) => renderPokeCard(data));  // Daten verarbeiten

// Mehrere Fetches mit .then() in einer Schleife
// for (let i = 1; i < 10; i++) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//     .then((res) => res.json())  // Response zu JSON konvertieren
//     .then((data) => renderPokeCard(data))  // Erfolgsfall
//     .catch((err) => console.log(err))  // Fehlerbehandlung
//     .finally(() => console.log('Läuft immer, ob Fehler oder nicht'));  // Wird immer ausgeführt
// }

// Async/Await-Variante - modernerer Ansatz für Fetch
async function fetchPokeData(pokeId) {
  try {
    // Fetch-Aufruf mit await - wartet auf die Response
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    // Prüfen, ob die Response erfolgreich war (Status 200-299)
    if (!res.ok) throw new Error("Fetch failed");
    // Response in JSON umwandeln (auch asynchron)
    const data = await res.json();
    renderPokeCard(data);
  } catch (error) {
    // Fehlerbehandlung für Fetch-Fehler oder nicht-erfolgreiche Responses
    console.log("Da lief etwas schief");
  }
}

// Mehrere Pokemon gleichzeitig fetchen (parallel)
for (let i = 1; i < 10; i++) {
  fetchPokeData(i);
}
