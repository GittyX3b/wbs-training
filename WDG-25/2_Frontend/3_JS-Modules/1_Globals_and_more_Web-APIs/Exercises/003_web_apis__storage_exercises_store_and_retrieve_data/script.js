const key = "Notes";

function displayNotes() {
  const storedNotes = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];
  document.querySelector("ul").innerHTML = "";
  storedNotes.map((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    document.querySelector("ul").append(li);
  });
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  try {
    const formData = new FormData(e.target);
    const newNote = formData.get("UserText").trim();
    if (!newNote) throw new Error("Imput is empty");
    const storedData = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : [];
    const newData = [newNote, ...storedData];
    localStorage.setItem(key, JSON.stringify(newData));
    displayNotes();
  } catch (error) {
    console.log(error);
  }
});

window.addEventListener("DOMContentLoaded", displayNotes);

document
  .querySelector("#reload")
  .addEventListener("click", () => window.location.reload());
