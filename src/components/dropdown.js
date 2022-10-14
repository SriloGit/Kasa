import PropTypes from "prop-types";
import { useState } from "react";

function Dropdown({ title, description }) {
  const [show, setShow] = useState(false);
  const [arrowClass, setArrowClass] = useState("arrow_down");

  function switchContent() {
    //Manage the arrow and to show or not the content of the dropdown
    setShow(!show);
    setArrowClass(show ? "arrow_down" : "arrow_up");
  }

  return (
    <article className="component dropdown">
      <h2 className={`dropdown_title ` + arrowClass} onClick={switchContent}>
        {title}
      </h2>
      <div
        className="dropdown_content"
        style={{ display: show ? "block" : "none" }}
      >
        {description}
      </div>
    </article>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Dropdown;