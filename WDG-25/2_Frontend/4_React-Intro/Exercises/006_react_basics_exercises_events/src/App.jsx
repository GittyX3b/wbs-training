import "./index.css";

let errors = [];
const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const userName = data.get("userName").trim();
  const userAge = data.get("userAge").trim();
  const userColor = data.get("userColor").trim();
  const userRem = data.get("userRecomend") ? "yes" : "no";

  errors = [];
  if (!userName) errors.push("no username given");
  if (userName.length <= 2)
    errors.push("username should have at least 2 chars");
  if (!userAge) errors.push("no userage given");
  if (userAge < 5) errors.push("user have tob at least 5 years old");
  if (userAge > 120) errors.push("users older than 120 years are not allowed");
  if (!userColor) errors.push("no favorite color chosen");

  // console.log("Form submitted", errors);
};

// TODO: display Errors

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
    <input
      type="text"
      id="userColor"
      name="userColor"
      list="color-list"
      className="bg-zinc-100"
    />
    <datalist id="color-list">
      <option value="rot" />
      <option value="grün" />
      <option value="gelb" />
      <option value="blau" />
      <option value="pink" />
    </datalist>

    <label htmlFor="userRecomend" className="-mb-6">
      Recommend?
    </label>
    <input type="checkbox" name="userRecomend" id="userRecomend" />

    <button className="bg-green-400 rounded shadow">Submit</button>
  </form>
);

export default App;
