"use strict";

const DATA = {
  url: "https://jsonplaceholder.typicode.com/todos",
  list: [],
};

const USER_ID = 1;

const head = document.getElementsByTagName("head")[0];
const todoList = document.getElementById("todo-list");

/* FETCHING DATA =============================================*/
async function fetchData() {
  try {
    const res = await fetch(DATA.url);
    if (res.ok) {
      DATA.list = await res.json();
      refreshView();
    } else {
      console.log("response was not ok, probably NetworkError");
    }
  } catch (error) {
    console.log(error);
  }
}

// function fetchData() {
//   fetch(DATA.url)
//     .then((res) => res.json())
//     .then((data) => {
//       DATA.list = data;
//       refreshView();
//     })
//     .catch((err) => console.log(err));
// }

/* FUNCTIONS =============================================== */
function refreshView() {
  //console.log(DATA.list);
  DATA.list.map(({ title, completed, id, userId }) => {
    if (userId === USER_ID) {
      let item = document.createElement("li");
      let taskState = document.createElement("input");
      let taskTitle = document.createElement("span");

      item.setAttribute("ID", id);
      taskState.setAttribute("type", "checkbox");
      taskState.checked = completed;
      taskTitle.textContent = title;

      item.append(taskState, taskTitle);
      todoList.append(item);
    }
  });
}

function stylePage() {
  const styleHead = document.createElement("style");
  styleHead.append(`
        body { 
            background: lightgrey;
        }
        #todo-list {
            padding: 2rem;
            list-style: none;

            li {
            border: 1px solid gray;
            background: whitesmoke;
            border-radius: 0.3rem;
            padding: 0.5em 1rem;
            margin: 0.2rem;

                input {
                    margin-right: 0.5rem;
                    cursor: pointer;
                }

                &:has(input:checked) {
                    background:green;
                    color: white;
                    opacity: 30%;
                }
            }                
        }
        `);
  head.append(styleHead);
}

/* PROGRAMM SCHEDULE =====================================*/
fetchData();
refreshView();
stylePage();
