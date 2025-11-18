import Navigation from "./Navigation";

const Header = () => (
  <div className="bg-zinc-200 flex flex-col items-center fixed w-full z-50">
    <h1 className="text-[6rem] font-bold p-5 font-serif">Romanov Artworks</h1>
    <Navigation />
  </div>
);

export default Header;
