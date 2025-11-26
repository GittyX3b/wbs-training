import { Link } from "react-router";

const Card = ({ star }) => {
  const { url, heading, description, id, slug } = star;

  return (
    <Link className="star" to={`/star/${slug}`}>
      {/* Link kann gesamtes Element umspannen oder auch einfachen Text */}
      {/* <article className="star"> */}
      <div>
        <img src={url} alt={heading} className="star__img" />
      </div>
      <h2 className="star__heading">{heading}</h2>
      <p className="star__description">{description}</p>
      {/* </article> */}
    </Link>
  );
};

export default Card;
