import React from "react";
import LabelUI from "../../Atoms/Label/LabelUI";
import InputUI from "../../Atoms/Input/InputUI";
import { InputFieldProps } from "../../../../types";


const InputField: React.FC<InputFieldProps> = React.memo(({ label, name, type, value, onChange, onBlur,error }) => (
  <div className="input_item">
    <LabelUI text={label} htmlFor={name} />
    <InputUI name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} />
    {error && <div className="error-message">{error}</div>}
  </div>
));

export default InputField;