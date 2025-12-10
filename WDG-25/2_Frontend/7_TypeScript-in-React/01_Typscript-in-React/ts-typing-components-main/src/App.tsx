import Container from "./layouts/Container";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Status from "./components/Status";
import ProfileCard from "./components/ProfileCard";
import Alert from "./components/Alert";
import ProductList from "./components/ProductList";
import Toggle from "./components/Toggle";
import Avatar from "./components/Avatar";
import { useState } from "react";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Avatar
        url="https://img.icons8.com/color/1200/avatar.jpg"
        altText="Alternative text for Golom"
      />
      <Greeting name="Jane" />
      <Counter initialCount={0} />
      <Status status="success" />
      <ProfileCard user={{ name: "Ada", age: 32 }} />
      <Alert message="example message string, ahu." type="info" />
      <ProductList
        products={[
          { id: 1, title: "Book" },
          { id: 2, title: "Pen" },
        ]}
      />
      <Toggle isOn={isOn} onToggle={setIsOn} />
    </Container>
  );
};

export default App;
