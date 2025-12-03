import { Outlet } from "react-router";
import { Header } from "../components/Header";

const MainLayout = () => {
  return (
    <div id="MainLayout" className="min-h-screen w-full bg-color-2">
      <Header />

      <main className="app-maxwidth border m-auto pt-20 px-10 grow min-h-screen grid grid-cols-6 gap-5">
        <Outlet />
      </main>
    </div>
  );
};

export { MainLayout };
