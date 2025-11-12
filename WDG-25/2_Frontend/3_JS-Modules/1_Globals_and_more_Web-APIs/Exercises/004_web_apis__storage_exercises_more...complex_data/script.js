const key = "Tasks";

function getStorage(k) {
  return JSON.parse(localStorage.getItem(k));
}
function addToLocalStorage(k, arrEle) {
  try {
    if (!arrEle) throw new Error("arrEle argument is missing");
    const storedArr = JSON.parse(localStorage.getItem(k));
    const newArr = storedArr ? [arrEle, ...storedArr] : [arrEle];
    localStorage.setItem(k, JSON.stringify(newArr));
  } catch (error) {
    console.log(error);
  }
}
function deleteFromLocalStorage(k, taskId) {
  try {
    const storedList = JSON.parse(localStorage.getItem(k));
    if (!storedList) throw new Error("no storedList found");
    const newList = storedList.filter((entry) => entry.id != taskId);
    if (!newList) throw new Error("problems getting newList");
    localStorage.setItem(key, JSON.stringify(newList));
  } catch (error) {
    console.log(error);
  }
}
function deleteTask(id) {
  if (id) {
    deleteFromLocalStorage(key, id);
    refreshTaskList();
  }
}

function refreshTaskList() {
  let taskArr = JSON.parse(localStorage.getItem(key));
  if (!taskArr) taskArr = [];
  document.querySelector("ul").innerHTML = "";
  taskArr.map((task) => {
    const li = document.createElement("li");
    const txt = document.createElement("div");
    const btn = document.createElement("button");

    li.setAttribute("id", task.id);
    txt.textContent = task.content;
    btn.textContent = "Delete";

    li.className =
      "bg-green-200 rounded flex justify-between items-center px-5 py-2 mb-1 select-none";
    txt.className = "font-bold text-sm";
    btn.className =
      "bg-red-500 px-2 py-1 rounded-2xl text-xs text-white cursor-pointer";

    li.append(txt, btn);
    document.querySelector("ul").append(li);
  });
}

document.querySelector("form").addEventListener("submit", function (e) {
  // e.preventDefault();
  try {
    const input = document.querySelector("#userInput").value.trim();
    if (!input) throw new Error("input is empty");
    let uuid = `task-${self.crypto.randomUUID().replaceAll("-", "")}`;
    const task = {
      id: uuid,
      content: input,
    };
    addToLocalStorage(key, task);
    refreshTaskList();
  } catch (error) {
    console.log(error);
  }
});

document.querySelector("ul").addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    deleteTask(e.target.parentElement.id);
  }
});

document
  .getElementById("reload")
  .addEventListener("click", () => window.location.reload());

window.addEventListener("load", refreshTaskList);
