import PropTypes from "prop-types";

function TagList({ listOfTags, logementId }) {
  return (
    <div className="component tagList">
      {listOfTags.map((tag) => (
        <div className="component tag">{tag}</div>
      ))}
    </div>
  );
}

TagList.propTypes = {
  listOfTags: PropTypes.array.isRequired,
  logementId: PropTypes.string.isRequired,
};

export default TagList;