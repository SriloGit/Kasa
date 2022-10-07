import PropTypes from "prop-types";
import red_star from "../assets/red_star.png";
import grey_star from "../assets/grey_star.png";

function Starrate({ rating }) {
  let stars = [];
  let star = "";
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      star = red_star;
    } else {
      star = grey_star;
    }
    stars.push(<img key={"star_index_" + i} src={star} alt="" />);
  }
  return <div className="component stars">{stars}</div>;
}

Starrate.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Starrate;