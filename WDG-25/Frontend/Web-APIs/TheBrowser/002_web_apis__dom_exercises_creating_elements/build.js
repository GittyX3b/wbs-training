/* SITE CREATION */
// creating header > nav div > ul > 4 li
header.append(nav);
nav.classList.add("nav");
nav.append(navList);
navList.classList.add("nav-list");
navList.append(...DOM.createListItem(CONFIG.HEAD_NAV.length, ["nav-item"])); // ...(Spread-Operator) separates elemnents of returned HTMLCollection

// creating text anchor in li elements
[...navList.children].forEach((item, i) => {
  let conf = CONFIG.HEAD_NAV[i];
  let link = DOM.createTextLink(conf.text, conf.url);
  item.append(link);
});

// TODO: create the hero section

document.body.prepend(header);
console.log(header);
