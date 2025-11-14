// Functions related to creating and manipulating DOM elements
import DOM, { PRODUCTS } from "./variables.js";

// sorting fetched data to objects-object {category1: [product1, product2,...], category2: [...]}
function sortProducts(fetchedObjArr) {
  PRODUCTS.categories = [
    ...new Set(fetchedObjArr.map((item) => item.category)),
  ].sort();

  for (const cat of PRODUCTS.categories)
    PRODUCTS[cat] = fetchedObjArr.filter((item) => item.category === cat);

  delete PRODUCTS.categories;
}

const renderCategories = (arrOfCatStrings) => {
  for (const cat of arrOfCatStrings || Object.keys(PRODUCTS))
    applyCatContainer(cat);
};

const applyCatContainer = (catName) => {
  const cat = catName.trim();

  const catContainer = document.createElement("section");
  catContainer.setAttribute("product-category", cat);
  catContainer.className = "category-container bg-red-200 ";

  const catHeading = document.createElement("h2");
  catHeading.textContent = cat;
  catHeading.className = "category-heading bg-zinc-200 capitalize";

  const productContainer = document.createElement("div");
  productContainer.className = "product-container bg-orange-200 flex wrap";

  catContainer.append(catHeading, productContainer);
  DOM.main.append(catContainer);

  for (const product of PRODUCTS[catName]) applyProductCard(cat, product);
};

const applyProductCard = (catName, dataObj) => {
  const cat = catName;
  const item = dataObj;

  const card = document.createElement("article");
  card.setAttribute("product-id", item.id);
  card.className = "product-card bg-teal-100";

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = item.title;
  cardTitle.className = "card-title border-1";

  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", item.image);
  cardImg.setAttribute("alt", item.title);
  cardImg.ClassName = "card-image";

  const btnBuy = document.createElement("button");
  btnBuy.textContent = "buy";
  btnBuy.setAttribute("card-id", item.id);
  btnBuy.className = "btn-buy bg-sky-500 ";

  const cardText = document.createElement("p");
  cardText.textContent = item.description;
  cardText.className = "card-description border-1 text-xs";

  const cardRating = document.createElement("div");
  cardRating.innerHTML = `Rating: <span rate>${item.rating.rate}</span> <span count>(${item.rating.count})</span>`;
  cardRating.className = "card-rating text-xs";

  const cardPrice = document.createElement("div");
  cardPrice.textContent = `${item.price} €`;
  cardPrice.className = "card-price font-bold";

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer border-1 flex justify-between";

  cardFooter.append(cardRating, cardPrice);
  card.append(cardTitle, cardImg, btnBuy, cardText, cardFooter);
  document
    .querySelector(`[product-category="${cat}"] .product-container`)
    .append(card);
  console.log(item);
};

console.log(PRODUCTS);

export default {
  renderCategories,
  sortProducts,
};
