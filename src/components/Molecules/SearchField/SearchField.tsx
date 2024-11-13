import React from "react";
import LabelUI from "../../Atoms/Label/LabelUI";
import InputUI from "../../Atoms/Input/InputUI";
import { SearchFieldProps } from "../../../../types";


const SearchField: React.FC<SearchFieldProps> =  React.memo(({ searchString, onSearchChange }) => (
  <div className="search">
    <LabelUI text="Search:" htmlFor="search" />
    <InputUI name="search" type="text" value={searchString} onChange={onSearchChange} />
  </div>
));

export default SearchField;
