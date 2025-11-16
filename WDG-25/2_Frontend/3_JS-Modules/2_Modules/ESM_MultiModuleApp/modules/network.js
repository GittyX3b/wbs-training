// Functions related to fetching data from the API

import { STORAGE } from "./variables.js";
import { getStorage } from "./storage.js";
import ui from "./ui.js";

const baseURL = "https://fakestoreapi.com/products";

(() => {
  try {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        getStorage();
        ui.refreshCartCounter();
        ui.sortProducts(data);
        ui.renderCategories();
      })
      .catch(console.error);
  } catch (error) {
    console.log(error);
  }
})();
