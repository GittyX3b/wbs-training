import "./index.css";

let errors = [];
const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const userName = data.get("userName").trim();
  const userAge = data.get("userAge").trim();
  const userColor = data.get("userColor");
  const userRem = data.get("userRecomend") ? "yes" : "no";

  errors = [];
  if (!userName) errors.push("<li>no username given</li>");
  if (userName.length <= 2)
    errors.push("<li>username should have at least 2 chars</li>");
  if (!userAge) errors.push("<li>no userage given</li>");
  if (userAge < 5) errors.push("<li>user have tob at least 5 years old</li>");
  if (userAge > 120)
    errors.push("<li>users older than 120 years are not allowed</li>");
  if (!userColor) errors.push("<li>no favorite color chosen</li>");

  const err = document.querySelector("#error-messages");
  if (errors.length > 0) {
    err.innerHTML = errors.join("");
  } else {
    err.innerHTML = "";
    console.log({
      name: userName,
      age: userAge,
      color: userColor,
      rem: userRem,
    });
  }
};

const App = () => (
  <form
    className="bg-zinc-200 flex flex-col gap-10 m-auto w-60 p-5"
    onSubmit={handleSubmit}
  >
    <label htmlFor="userName" className="-mb-6">
      Name:
    </label>
    <input type="text" id="userName" name="userName" className="bg-zinc-100" />

    <label htmlFor="userAge" className="-mb-6">
      Age:
    </label>
    <input type="number" id="userAge" name="userAge" className="bg-zinc-100" />

    <label htmlFor="userColor" className="-mb-6">
      Color:
    </label>
    <select
      id="userColor"
      name="userColor"
      className="bg-zinc-100"
      defaultValue=""
    >
      <option value="" disabled></option>
      <option value="rot">rot</option>
      <option value="grün">grün</option>
      <option value="gelb">gelb</option>
      <option value="blau">blau</option>
      <option value="pink">pink</option>
    </select>

    <label htmlFor="userRecomend" className="-mb-6">
      Recommend?
    </label>
    <input type="checkbox" name="userRecomend" id="userRecomend" />

    <ul
      id="error-messages"
      className="bg-white pl-6 text-red-400 list-disc text-xs rounded-2xl"
    ></ul>

    <button className="bg-green-400 rounded shadow">Submit</button>
  </form>
);

export default App;
