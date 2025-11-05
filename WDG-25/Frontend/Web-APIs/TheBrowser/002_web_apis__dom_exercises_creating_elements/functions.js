/* FUNCTIONS DOM MANIPUALTION */
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
};
