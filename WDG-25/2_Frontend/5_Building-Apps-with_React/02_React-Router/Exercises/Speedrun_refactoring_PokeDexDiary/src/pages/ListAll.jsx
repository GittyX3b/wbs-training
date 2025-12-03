import { usePokeData } from "@context";

const ListAll = () => {
  const [pokeData, fetchPreviousPage, fetchNextPage] = usePokeData();

  console.log("ListAll pokeData: ", pokeData);

  return (
    <div id="ListAll">
      <title>All Pokemons</title>
    </div>
  );
};

export { ListAll };
