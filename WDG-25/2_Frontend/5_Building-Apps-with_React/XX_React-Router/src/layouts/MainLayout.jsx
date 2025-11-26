import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header.jsx";
import { starsLoader } from "../data/loaders.js";

export default function MainLayout() {
  const [stars, setStars] = useState(null);

  // Auf allen Seiten verfügbare Daten können wir auch hier 'global' fetchen
  useEffect(() => {
    const fetchData = async () => {
      const data = await starsLoader();
      console.log(data);
      setStars(data);
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <Header />
      {/* Outlet rendert die Child-Routes an dieser Stelle */}
      {/* context prop übergibt Daten an alle Child-Components */}
      <Outlet context={stars} />
      <footer>&copy; footerbla</footer>
    </div>
  );
}
