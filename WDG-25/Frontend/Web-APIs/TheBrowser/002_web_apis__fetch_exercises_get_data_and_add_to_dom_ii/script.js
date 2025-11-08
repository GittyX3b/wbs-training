const DOM = {
  controller: {
    offset: {
      buttonUp: document.getElementById("offset-counter-up"),
      buttonDwn: document.getElementById("offset-counter-dwn"),
      value: document.getElementById("offset-counter"),
    },
    limit: {
      buttonUp: document.getElementById("limit-counter-up"),
      buttonDwn: document.getElementById("limit-counter-dwn"),
      value: document.getElementById("limit-counter"),
    },
  },
  cards: {
    container: document.getElementById("pokemon-container"),
  },
};

const DATA = {
  url: `https://pokeapi.co/api/v2/pokemon/`,
  list: [],
  pointer: {
    offset: 0,
    limit: 150,
    limtMax: undefined,
  },
  fetchAsync: async function () {
    let tailoredURL = `${this.url}?offset=${this.pointer.offset}&limit=${this.pointer.limit}`;

    const res = await fetch(tailoredURL);
    this.list = await res.json();
    this.pointer.limitMax = this.list.count;
  },
  controller: {
    init: function () {},
  },
};

const VIEW = {
  controller: {
    refresh: function () {
      DOM.controller.offset.value.textContent = DATA.pointer.offset;
      DOM.controller.limit.value.textContent = DATA.pointer.limit;
    },
  },
  cards: {
    refresh: function () {
      DATA.list.results.map((pokemon) => {
        this.createCard(pokemon);
      });
    },
    createCard: function ({ name, url }) {
      let card = document.createElement("card");
      card.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
      // TODO: fetch and display pokemon data
      DOM.cards.container.append(card);
    },
  },
};

/* PROGRAMM SCHEDULE ===================================== */
(async () => {
  await DATA.fetchAsync(); // <-- CRITICAL: Use await here

  VIEW.controller.refresh();
  VIEW.cards.refresh();
})();
