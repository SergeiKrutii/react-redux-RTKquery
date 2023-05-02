import PropTypes from "prop-types";

const Filter = ({ onChangeFilter, filter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        type="text"
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
