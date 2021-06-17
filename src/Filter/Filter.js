import React from "react";
import PropTypes from "prop-types";
import { Label, Input } from "./styled";

const Filter = ({ value, onFilter }) => (
  <Label>
    {" "}
    Find contacts by name
    <Input
      type="text"
      name="filter"
      value={value}
      autoComplete="off"
      onChange={onFilter}
    />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
export default Filter;
