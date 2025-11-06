// You can work here or download the template
const form = document.getElementById("contact-form");
const iName = document.getElementById("name");
const iEmail = document.getElementById("email");
const iMessage = document.getElementById("message");
const btnSubmit = document.getElementsByTagName("button")[0];
const paragraph = document.getElementById("output");

const isEmpty = (ref) => {
  return !ref.value ? true : false;
};
const displayError = (message) => {
  paragraph.querySelector("ul").remove();
  paragraph.style.background = "rebeccapurple";
  paragraph.style.fontSize = "3rem";
  paragraph.textContent = message;
};
const resetParagraph = () => {
  paragraph.textContent = "";
  paragraph.style.background = "";
};

// BUTTON CLICK
btnSubmit.addEventListener("mouseup", (e) => {
  let out = [];
  let error = [];

  // check if form fields empty
  !isEmpty(iName) ? out.push(iName.value) : error.push("no name");
  !isEmpty(iEmail) ? out.push(iEmail.value) : error.push("no email");
  !isEmpty(iMessage) ? out.push(iMessage.value) : error.push("no message");

  resetParagraph();

  // check if #output contains ul element => create or clear
  !paragraph.querySelector("ul")
    ? paragraph.append(document.createElement("ul"))
    : paragraph.querySelector("ul").replaceChildren();

  // write to list if formdata given
  if (out.length >= 3) {
    console.log(`form data: ${out}`);

    out.forEach((ele) => {
      let tempItem = document.createElement("li");
      tempItem.textContent = ele;
      // creating random font color for fun
      tempItem.style.color = `rgb(
      ${Math.random() * 255},
      ${Math.random() * 255},
      ${Math.random() * 255}
      )`;

      paragraph.querySelector("ul").append(tempItem);
    });
  } else {
    displayError(error);
  }
});
