import PropTypes from "prop-types";
// Create each tag of the accomodation
function TagList({ listOfTags}) {
  return (
    <div className="component tagList">
      {listOfTags.map((tag) => (
        <div className="component tag" key={tag}>{tag}</div>
      ))}
    </div>
  );
}

TagList.propTypes = {
  listOfTags: PropTypes.array.isRequired,
};

export default TagList;