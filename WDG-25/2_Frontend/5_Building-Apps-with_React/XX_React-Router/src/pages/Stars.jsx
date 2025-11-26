import { useOutletContext } from "react-router";
import Card from "../components/Card.jsx";

const Stars = () => {
  // useOutletContext holt sich Daten vom Parent-Layout (MainLayout) aus dem 'context'-Prop
  const stars = useOutletContext();
  if (!stars) return <p className="message--loading">Loading...</p>;

  return (
    <>
      <div className="grid">
        <title>Stars Gallery</title>
        {stars?.map((star) => (
          <Card star={star} key={star.id} />
        ))}
      </div>
      <span className="scroll-thingy" role="img" aria-label="Scroll Thingy Rocket"></span>
    </>
  );
};

export default Stars;
