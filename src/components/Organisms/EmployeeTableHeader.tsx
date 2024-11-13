import React from "react";
import SearchField from "../Molecules/SearchField/SearchField";
import EntriesSelector from "../Molecules/EntriesSelector/EntriesSelector";
import { EmployeeTableHeaderProps } from "../../../types";


const EmployeeTableHeader: React.FC<EmployeeTableHeaderProps> = React.memo(({
  searchString,
  onSearchChange,
  onEntriesChange,
  options,
}) => (
  <div className="table_head">
    <EntriesSelector options={options} onEntriesChange={onEntriesChange} />
    <SearchField searchString={searchString} onSearchChange={onSearchChange} />
  </div>
));

export default EmployeeTableHeader;
