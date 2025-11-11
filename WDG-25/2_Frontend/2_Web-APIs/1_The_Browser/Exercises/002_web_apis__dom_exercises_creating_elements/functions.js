/* GENERAL DOM MANIPUALTION */
const DOM = {
  createListItem: (counter, classesArray) => {
    let temp = document.createElement("div");
    if (!counter) counter = 1;
    while (counter--) {
      const item = document.createElement("li");
      if (classesArray) item.classList.add(classesArray);
      temp.append(item);
    }
    return temp.children;

    // creates [counter] li-tags
    // adds classes, if [classesArray] given
    // function call with spread operator !!! => f.e. navbar(...createListItems(3, ["color-red", "text-lg"]))
  },
  createTextLink: (text, url) => {
    let temp = document.createElement("a");
    if (text) temp.textContent = text;
    if (url) temp.setAttribute("href", url);
    return temp;

    // creates an a-tag
  },
  emptyElement: (ref) => {
    const ele = document.querySelector(ref);
    ele.innerHTML = "";
  },
  events: {
    hero: {
      button: function () {
        heroButton.addEventListener("mouseover", () => {
          heroButton.style.background = "#555";
        });
        heroButton.addEventListener("mouseout", () => {
          heroButton.style.background = "#333";
        });
      },
    },
  },
};

/* BUILDING BLOCKS */
const BUILD = {
  header: () => {
    header.append(nav);
    nav.append(logo, navList);
    logo.classList.add("logo");
    logo.textContent = CONFIG.HEADER.LOGO.text;
    navList.classList.add("nav-list");
    navList.append(
      ...DOM.createListItem(CONFIG.HEADER.NAVIGATION.length, ["nav-item"])
    ); // ...(Spread-Operator) separates elemnents of returned HTMLCollection

    [...navList.children].forEach((item, i) => {
      let conf = CONFIG.HEADER.NAVIGATION[i];
      let link = DOM.createTextLink(conf.text, conf.url);
      item.append(link);
    });
  },
  heroSection: () => {
    hero.append(heroContent);
    heroContent.append(heroHeading, heroParagraph, heroButton);
    hero.classList.add("hero");
    heroContent.classList.add("hero-content");
    heroButton.classList.add("btn");
    heroHeading.textContent = CONFIG.HERO.HEADING;
    heroParagraph.textContent = CONFIG.HERO.TEXT;
    heroButton.textContent = CONFIG.HERO.BUTTON.text;
  },
  footer: () => {
    footer.classList.add("footer");
    footer.append(footerParagraph);
    footerParagraph.textContent = CONFIG.FOOTER.TEXT;
  },
};

/* STYLING BLOCKS */
const STYLE = {
  header: () => {
    header.style.background = "#fff";
    header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1";
    header.style.padding = "1rem 0";

    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
    nav.style.maxWidth = "1200px";
    nav.style.margin = "0 auto";
    nav.style.padding = "0 1rem";

    logo.style.fontSize = "1.5rem";
    logo.style.fontWeight = "bold";
    logo.style.color = "#333";
    logo.style.textDecoration = "none";

    navList.style.display = "flex";
    navList.style.listStyle = "none";

    let navItems = navList.children;
    [...navItems].forEach((ele) => {
      ele.style.margin = "1.5rem";
      let a = ele.firstChild;
      a.style.textDecoration = "none";
      a.style.color = "#333";
      a.style.fontWeight = "bold";
    });
  },
  heroSection: () => {
    hero.style.height = "560px";
    hero.style.background =
      "url(https://shorturl.at/vDOYd) no-repeat center center / cover";
    hero.style.color = "#fff";

    heroContent.style.width = "600px";
    heroContent.style.height = "100%";
    heroContent.style.display = "flex";
    heroContent.style.flexDirection = "column";
    heroContent.style.justifyContent = "space-around";
    heroContent.style.alignItems = "center";
    heroContent.style.textAlign = "center";

    heroHeading.style.fontSize = "2.5rem";
    heroHeading.style.marginBottom = "1rem";

    heroParagraph.style.fontSize = "1.2rem";
    heroParagraph.style.marginBottom = "2rem";

    heroButton.style.background = "#333";
    heroButton.style.cursor = "pointer";
    heroButton.style.color = "#fff";
    heroButton.style.padding = "0.75rem 1.5rem";
    heroButton.style.textDecoration = "none";
    heroButton.style.borderRadius = "5px";
    heroButton.style.transition = "background-color 0.3s ease";
  },
  footer: () => {
    footer.style.background = "#333";
    footer.style.color = "#fff";
    footer.style.textAlign = "center";
    footer.style.padding = "1rem";
    footer.style.marginTop = "auto";
  },
};

/* RENDERING BLOCKS */
const RENDER = {
  header: () => document.body.append(header),
  heroSection: () => document.body.append(hero),
  footer: () => document.body.append(footer),
};
