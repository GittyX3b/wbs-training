const DOM = {
  header: {
    counter: document.getElementById("header-counter"),
  },
  controller: {
    container: document.getElementById("card-control-form"),
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
    limitMax: undefined,
  },
  fetchData: async function () {
    try {
      let tailoredURL = `${this.url}?offset=${this.pointer.offset}&limit=${this.pointer.limit}`;

      const res = await fetch(tailoredURL);
      if (!res.ok) throw new error(`list data not found - ${res.status}`);
      const list = await res.json();
      const results = list.results;

      const listPromises = results.map(async function (item) {
        const pokeRes = await fetch(item.url);
        if (!pokeRes.ok)
          throw new error(`item data [${item.name}] not found - ${res.status}`);
        const pokeData = await pokeRes.json();
        item.data = pokeData;
        return item;
      });

      this.list = await Promise.all(listPromises);

      this.pointer.limitMax = list.count;
    } catch (error) {
      alert(error);
    }
  },
};

// TODO: match card numbers to controller clicks
const VIEW = {
  header: {
    refreshCounter: () =>
      (DOM.header.counter.textContent = DATA.pointer.limitMax),
  },
  controller: {
    init: function () {
      DOM.controller.offset.value.textContent = DATA.pointer.offset;
      DOM.controller.limit.value.textContent = DATA.pointer.limit;
    },
    buttons: {
      on: function () {
        DOM.controller.offset.buttonUp.addEventListener(
          "mouseup",
          this.init.offset.btnUp
        );
        DOM.controller.offset.buttonDwn.addEventListener(
          "mouseup",
          this.init.offset.btnDwn
        );
        DOM.controller.limit.buttonUp.addEventListener(
          "mouseup",
          this.init.limit.btnUp
        );
        DOM.controller.limit.buttonDwn.addEventListener(
          "mouseup",
          this.init.limit.btnDwn
        );
        DOM.controller.container.classList.remove("bg-red-200");
      },
      off: function () {
        DOM.controller.offset.buttonUp.removeEventListener(
          "mouseup",
          this.init.offset.btnUp
        );
        DOM.controller.offset.buttonDwn.removeEventListener(
          "mouseup",
          this.init.offset.btnDwn
        );
        DOM.controller.limit.buttonUp.removeEventListener(
          "mouseup",
          this.init.limit.btnUp
        );
        DOM.controller.limit.buttonDwn.removeEventListener(
          "mouseup",
          this.init.limit.btnDwn
        );
        DOM.controller.container.classList.add("bg-red-200");
      },
      init: {
        offset: {
          btnUp: function () {
            if (DATA.pointer.offset < DATA.pointer.limitMax) {
              DOM.controller.offset.value.textContent = ++DATA.pointer.offset;
              VIEW.cards.refresh();
            }
          },
          btnDwn: function () {
            if (DATA.pointer.offset > 0) {
              DOM.controller.offset.value.textContent = --DATA.pointer.offset;
              VIEW.cards.refresh();
            }
          },
        },
        limit: {
          btnUp: function () {
            if (DATA.pointer.limit < DATA.pointer.limitMax - 100) {
              DATA.pointer.limit += 10;
              DOM.controller.limit.value.textContent = DATA.pointer.limit;
              VIEW.cards.refresh();
            }
          },
          btnDwn: function () {
            if (DATA.pointer.limit > 1) {
              DATA.pointer.limit -= 10;
              DOM.controller.limit.value.textContent = DATA.pointer.limit;
              VIEW.cards.refresh();
            }
          },
        },
      },
    },
  },
  cards: {
    refresh: async function () {
      VIEW.controller.buttons.off();
      DOM.cards.container.replaceChildren();
      await DATA.fetchData();
      DATA.list.map((pokemon) => {
        this.createCard(pokemon);
      });
      VIEW.header.refreshCounter();
      VIEW.controller.buttons.on();
    },
    createCard: function (item) {
      let link = document.createElement("a");
      let card = document.createElement("card");
      let p_img = document.createElement("img");
      let cardText = document.createElement("div");
      let p_name = document.createElement("h3");
      let p_type = document.createElement("span");

      link.setAttribute("href", item.url);
      link.setAttribute("target", "_blank");
      p_img.setAttribute(
        "src",
        item.data.sprites.other.dream_world.front_default
      );
      p_name.textContent = item.name.toUpperCase();
      p_type.textContent = item.data.types.map((i) => i.type.name);

      link.className = "flex cursor-pointer";
      card.className =
        "grow flex flex-col justify-around justify-between items-center h-72 p-5 rounded shadow-lg bg-yellow-200 outline-5 outline-yellow-400 hover:bg-yellow-300 hover:outline-yellow-500";
      p_img.className = "p-7 grow max-h-48 bg-zinc-100 rounded-xl";
      cardText.className = "flex flex-col justify-center items-center p-1";
      p_name.className = "text-lg font-bold p-1";
      p_type.className = "italic pb-1";

      // TODO: fetch and display pokemon data
      cardText.append(p_name, p_type);
      card.append(p_img, cardText);
      link.append(card);
      DOM.cards.container.append(link);
    },
  },
};

/* PROGRAMM SCHEDULE ===================================== */

VIEW.cards.refresh();
VIEW.controller.init();
