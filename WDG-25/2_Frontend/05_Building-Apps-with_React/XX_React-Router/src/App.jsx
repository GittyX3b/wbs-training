import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import AlphaCentauri from "./pages/AlphaCentauri.jsx";
import SingleStar from "./pages/SingleStar.jsx";
import Stars from "./pages/Stars.jsx";

function App() {
  return (
    <Routes>
      {/* Routes-Container definiert alle verfügbaren Routen */}
      {/* Parent-Route mit MainLayout als Wrapper */}
      <Route path="/" element={<MainLayout />}>
        {/* index-Route wird bei exakt "/" angezeigt */}
        <Route index element={<Stars />} />
        {/* Statische Route für Alpha Centauri */}
        <Route path="/alpha-centauri" element={<AlphaCentauri />} />
        {/* Dynamische Route mit Parameter :slug */}
        <Route path="/star/:slug" element={<SingleStar />} />
        {/* Catch-all Route für nicht existierende Pfade */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
