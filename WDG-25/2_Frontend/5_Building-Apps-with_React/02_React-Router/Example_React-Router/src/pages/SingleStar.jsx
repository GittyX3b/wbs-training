import { Link, useOutletContext, useParams } from "react-router";

export default function SingleStar() {
  // Seiten für eine dynamische Detail-Ansicht
  // können entweder ihre Daten selbst fetchen...
  // const [star, setStar] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await starsLoader();
  //     console.log(data);
  //     const s = data.find((star) => star.id === Number(id));
  //     setStar(s);
  //   };
  //   fetchData();
  // }, [id]);

  // ... oder aus dem Outlet-Context beziehen.

  // useParams extrahiert URL-Parameter (hier :slug aus /star/:slug)
  const { slug } = useParams();
  // useOutletContext holt Daten vom Parent-Layout
  const stars = useOutletContext();
  const star = stars.find((s) => s.slug === slug);

  return (
    star && (
      // Link für Client-Side Navigation zurück zur Startseite
      <Link to="/">
        <article className="star">
          <img src={star.url} alt={star.heading} className="star__img" />
          <h1 className="star__heading">{star.heading}</h1>
          <p className="star__description">{star.description}</p>
        </article>
      </Link>
    )
  );
}
