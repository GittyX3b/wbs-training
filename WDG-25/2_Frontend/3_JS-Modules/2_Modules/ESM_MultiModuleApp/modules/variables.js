// VAR DECLARATIONS ============================

export const PRODUCTS = {};

export const STORAGE = {
  key: "MuMoApp", // key for localStorage
  cartArray: [], // stored product id's
};

// DOM REFFERENCES ==============================
const cartCounter = document.querySelector("#cart-counter");
const main = document.querySelector("main");

export default {
  cartCounter,
  main,
};
