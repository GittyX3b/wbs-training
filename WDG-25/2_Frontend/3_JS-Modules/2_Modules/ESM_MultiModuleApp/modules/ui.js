// Functions related to creating and manipulating DOM elements
import { PRODUCTS } from "./variables.js";

function sortProducts(fetchedDataArr) {
  const data = fetchedDataArr;

  PRODUCTS.categories = [...new Set(data.map((item) => item.category))].sort();
  for (const cat of PRODUCTS.categories) {
    PRODUCTS[cat] = data.filter((item) => item.category === cat);
  }
  delete PRODUCTS.categories;
}

function renderSite(objFetchedProducts) {
  console.log(PRODUCTS);
  console.log("ui.renderSite() called", objFetchedProducts);
}

export default {
  renderSite,
  sortProducts,
};
