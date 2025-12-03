import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="h-15 bg-color-1 text-white border-b-1 shadow-xl fixed w-full">
      <div className="app-maxwidth m-auto  h-full justify-between px-10 flex items-center">
        <div className="text-2xl">PokeDexDiary</div>
        <div className="flex gap-5">
          <NavLink to="/">All</NavLink>
          <NavLink to="favorites">Favorites</NavLink>
        </div>
      </div>
    </header>
  );
};

export { Header };
