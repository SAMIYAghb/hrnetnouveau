import { Select } from "antd";
import React from "react";
import { SelectUIProps } from "../../../../types";


const SelectUI: React.FC<SelectUIProps> = React.memo(({ options, onChange }) => (
    <Select
      defaultValue ={options[0]?.value}
      onChange={onChange}
      options={options} // Pass options directly
      style={{ width: "100%" }}
    />

  ));


export default SelectUI;
