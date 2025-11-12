const div = document.createElement("div");
div.textContent = "20% off, if you subscribe to our Newsletter !!!";
div.className =
  "opacity-0 bg-red-200 hover:bg-red-700 p-4 rounded w-1/2 mx-auto text-xl font-bold text-green-800 hover:text-green-200 select-none";

const messageContainer = document.querySelector("#message-container");
messageContainer.append(div);

setTimeout(() => {
  div.classList.remove("opacity-0");
}, 3000);
