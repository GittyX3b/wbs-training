import "./index.css";
import { useEffect, useState } from "react";

const App = () => {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      setStatus("loading");
      try {
        const res = await fetch("https://swapi.tech/api/people", {
          signal: abortController.signal,
        });
        if (!res.ok) throw new Error("fetch response falsy");
        const json = await res.json();
        if (!json) throw new Error("res to json falsy");
        setData(json);
        setStatus("success");
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("error");
          console.error(error.message);
        }
      }
    };

    getData();
  }, []);

  return (
    <div className="items- flex min-h-screen justify-center bg-red-200">
      <div className="flex max-w-[1800px] flex-col bg-green-200">
        <h1 className="flex justify-center bg-yellow-200 p-10 text-[4rem] font-bold">
          Star Wars
        </h1>
        <div className="flex justify-center p-5 font-bold text-zinc-500 italic">
          {status === "loading" && <span>Loading...</span>}
          {status === "error" && <span>An error appeared...</span>}
        </div>
        {status === "success" && (
          <div>
            <div className="m-auto grid w-[50%] grid-cols-2 gap-5">
              <button className="grow cursor-pointer rounded border border-white bg-blue-500 py-3 font-bold text-white shadow hover:bg-blue-500">
                previous
              </button>
              <button className="grow cursor-pointer rounded border border-white bg-blue-500 py-3 font-bold text-white shadow hover:bg-blue-500">
                next
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-5 p-10">
              {data.results.map((person) => (
                <article
                  className="flex w-[400px] flex-col items-center justify-between rounded bg-white p-10 shadow"
                  key={person.uid}
                >
                  <h2>{person.name}</h2>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
