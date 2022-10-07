import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Thumb({ title, id, cover }) {
  return (
    <li className="component thumb">
      <article>
        <Link to={`/logement/${id}`}>
          <img src={cover} alt={title} />
          <h2>{title}</h2>
        </Link>
      </article>
    </li>
  );
}

Thumb.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Thumb;