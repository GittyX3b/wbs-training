import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => (
  <div id="wrapper">
    <Header />
    <main>
      <Hero />
      <Services />
    </main>
    <Footer />
  </div>
);

export default App;
