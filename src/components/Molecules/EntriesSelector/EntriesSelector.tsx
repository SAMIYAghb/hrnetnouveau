import React from "react";
import LabelUI from "../../Atoms/Label/LabelUI";
import SelectUI from "../../Atoms/Select/SelectUI";
import { EntriesSelectorProps } from "../../../../types";


const EntriesSelector: React.FC<EntriesSelectorProps> = React.memo(({ options, onEntriesChange }) => (
  <div className="entries">
    <LabelUI text="Show" htmlFor="entries" />
    <SelectUI defaultValue={options[0]?.value} onChange={onEntriesChange} options={options} />
    <LabelUI text="entries" htmlFor="entries" />
  </div>
));

export default EntriesSelector;
