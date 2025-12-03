import { Route, Routes } from "react-router";

import { MainLayout } from "@layouts/MainLayout";

import { PokeDataProvider } from "@context";
import { ListAll, ListFavorites, PokeView } from "@pages";

function App() {
  return (
    <>
      <title>app.jsx</title>
      <PokeDataProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<ListAll />} />
            <Route path="favorites" element={<ListFavorites />} />
            <Route path=":slug" element={<PokeView />} />
          </Route>
        </Routes>
      </PokeDataProvider>
    </>
  );
}

export default App;
