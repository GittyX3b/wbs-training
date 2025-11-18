import "./css/index.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => (
  <div id="wrapper">
    <Header />
    <main className="max-w-[1200px] mx-auto pt-80">
      <Hero />
      <Services />
    </main>
    <Footer />
  </div>
);

export default App;
