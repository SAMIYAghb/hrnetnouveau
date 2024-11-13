import React from "react";
import { LabelUIProps } from "../../../../types";


const LabelUI: React.FC<LabelUIProps> = ({ text, htmlFor }) => (
  <label
  className="label"
   htmlFor={htmlFor}>{text}</label>
);

export default LabelUI;