Schedule a fetch request
========================

**Objective:** Use `setInterval` to schedule a fetch request to the Pokémon API and increment a counter. For every request, output an object with the name of the Pokémon and its ID.

**Instructions:**

*   Create a variable `counter` and set it to 1.
*   Use `setInterval` to schedule a fetch request to the Pokémon API every second.
*   The fetch request URL should be `https://pokeapi.co/api/v2/pokemon/` followed by the current value of `counter`.
*   Fetch the data and extract the Pokémon's name and ID.
*   Output an object with the Pokémon's name and ID to the console.
*   Increment the counter after each fetch request.
*   Stop the interval after 150 requests. We only want the OG Pokémon! :D