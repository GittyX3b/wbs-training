// Functions related to creating and manipulating DOM elements
import DOM, { PRODUCTS, STORAGE } from "./variables.js";
import { getStorage, setStorage } from "./storage.js";

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
  catContainer.className = "category-container";

  const catHeading = document.createElement("h2");
  catHeading.textContent = cat;
  catHeading.className =
    "category-heading bg-neutral-500 capitalize p-5 px-15 text-white text-2xl italic text-blue-900 font-bold";

  const productContainer = document.createElement("div");
  productContainer.className =
    "product-container bg-zinc-100 flex flex-wrap gap-5 p-5 pb-15";

  catContainer.append(catHeading, productContainer);
  DOM.main.append(catContainer);

  for (const product of PRODUCTS[catName]) applyProductCard(cat, product);
};

const applyProductCard = (catName, dataObj) => {
  const cat = catName;
  const item = dataObj;

  const card = document.createElement("article");
  card.setAttribute("product-id", item.id);
  card.className =
    "product-card bg-white w-[15rem] max-w-[40rem] min-h-200 flex-grow grid grid-rows-[min-content_auto_min-content_min-content_min-content] gap-4 rounded-2xl shadow p-5  select-none";

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = item.title;
  cardTitle.className = "card-title text-center text-md font-bold";

  const cardImg = document.createElement("img");
  const preload = new Image();
  preload.src = item.image;
  preload.onload = () => cardImg.setAttribute("src", item.image);
  cardImg.setAttribute("alt", item.title);
  cardImg.className = "card-image m-auto max-h-[15rem]";

  const btnBuy = document.createElement("button");
  btnBuy.setAttribute("card-id", item.id);
  btnBuy.className = "btn m-auto rounded shadow";
  STORAGE.cartArray.includes(item.id)
    ? btnBuy.classList.add("btn-remove")
    : btnBuy.classList.add("btn-buy");
  btnBuy.addEventListener("click", handleBuyBtn);

  const cardText = document.createElement("p");
  cardText.textContent = item.description;
  cardText.className = "card-description bg-zinc-100 rounded-2xl p-3 text-xs";

  const cardRating = document.createElement("div");
  cardRating.innerHTML = `Rating: <span rate>${item.rating.rate}</span> <span count>(${item.rating.count})</span>`;
  cardRating.className = "card-rating text-xs";

  const cardPrice = document.createElement("div");
  cardPrice.textContent = `${item.price} €`;
  cardPrice.className = "card-price font-bold";

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer flex justify-between";

  cardFooter.append(cardRating, cardPrice);
  card.append(cardTitle, cardImg, btnBuy, cardText, cardFooter);
  document
    .querySelector(`[product-category="${cat}"] .product-container`)
    .append(card);

  function handleBuyBtn() {
    const itemID = Number(btnBuy.getAttribute("card-id"));
    switch (btnBuy.classList.contains("btn-buy")) {
      case true:
        getStorage();
        STORAGE.cartArray.push(itemID);
        setStorage();

        btnBuy.classList.add("btn-remove");
        btnBuy.classList.remove("btn-buy");

        refreshCartCounter();
        break;

      default:
        getStorage();
        const arr = STORAGE.cartArray;
        if (arr.includes(itemID)) {
          arr.splice(arr.indexOf(itemID), 1);
          setStorage();

          btnBuy.classList.add("btn-buy");
          btnBuy.classList.remove("btn-remove");

          refreshCartCounter();
        }
        break;
    }
  }
};

const refreshCartCounter = () => {
  DOM.cartCounter.textContent = STORAGE.cartArray.length;
};

export default {
  refreshCartCounter,
  renderCategories,
  sortProducts,
};
