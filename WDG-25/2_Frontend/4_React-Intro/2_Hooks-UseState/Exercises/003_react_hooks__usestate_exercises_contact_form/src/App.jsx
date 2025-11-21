import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    usermail: "",
    userphone: "",
    usermessage: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username && form.usermail && form.userphone && form.usermessage)
      console.log("Submitted data: ", form);
  };

  return (
    <form
      className="m-auto w-1/3 rounded-2xl bg-neutral-200 p-5 shadow-2xl"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <summary className="list-none pb-3 text-2xl font-bold">
          Contact From
        </summary>
        <label
          htmlFor="username"
          className="flex w-full items-center justify-between py-2"
        >
          Name:
          <input
            type="text"
            id="username"
            name="username"
            value={form.name}
            className="ml-3 w-3/4 rounded border-1 border-zinc-300 bg-zinc-100 p-1 text-sm text-gray-700 placeholder:text-sm"
            placeholder="Your name here..."
            onChange={handleChange}
            required
          />
        </label>
        <label
          htmlFor="usermail"
          className="flex w-full items-center justify-between py-2"
        >
          Email:
          <input
            type="email"
            id="usermail"
            name="usermail"
            value={form.mail}
            className="ml-3 w-3/4 rounded border-1 border-zinc-300 bg-zinc-100 p-1 text-sm text-gray-700 placeholder:text-sm"
            placeholder="Your email here..."
            onChange={handleChange}
            required
          />
        </label>
        <label
          htmlFor="userphone"
          className="flex w-full items-center justify-between py-2"
        >
          Phone:
          <input
            type="tel"
            id="userphone"
            name="userphone"
            value={form.phone}
            className="ml-3 w-3/4 rounded border-1 border-zinc-300 bg-zinc-100 p-1 text-sm text-gray-700 placeholder:text-sm"
            placeholder="Your phone number here..."
            onChange={handleChange}
            required
          />
        </label>
        <label
          htmlFor="usermessage"
          className="flex w-full justify-between py-2"
        >
          Message:
          <textarea
            id="usermessage"
            name="usermessage"
            value={form.message}
            rows={6}
            className="ml-3 w-3/4 rounded border-1 border-zinc-300 bg-zinc-100 p-1 text-sm text-gray-700 placeholder:text-sm"
            placeholder="Your message here..."
            onChange={handleChange}
            required
          />
        </label>
        <button className="mt-5 w-full rounded border-1 border-green-400 bg-green-500 px-6 py-1 shadow">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

const App = () => {
  return (
    <div id="wrapper" className="h-screen w-full bg-neutral-600 p-5">
      <Form />
    </div>
  );
};

export default App;
