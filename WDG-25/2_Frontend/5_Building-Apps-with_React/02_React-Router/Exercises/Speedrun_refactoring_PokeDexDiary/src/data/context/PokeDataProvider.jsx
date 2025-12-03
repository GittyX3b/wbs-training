import { createContext, useState } from "react";

const PokeDataCtx = createContext(null);

const initialPokeData = {
  sanity: "pokedata data - ok",
};

const PokeDataProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState(initialPokeData);

  const fetchPreviousPage = () => {
    console.log("PokeDataProvider: fetchPreviousPage()");
  };

  const fetchNextPage = () => {
    console.log("PokeDataProvider: fetchNextPage()");
  };

  return (
    <PokeDataCtx value={[pokeData, fetchPreviousPage, fetchNextPage]}>
      {children}
    </PokeDataCtx>
  );
};

export { PokeDataCtx, PokeDataProvider };
