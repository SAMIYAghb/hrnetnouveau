import React from 'react';
import { DatePickerFieldProps } from '../../../../types';
import DatePickerUI from '../../Atoms/DatePicker/DatePickerUI';
import LabelUI from '../../Atoms/Label/LabelUI';


const DatePickerField: React.FC<DatePickerFieldProps> = React.memo(({ label, name, value, onChange, error }) => {
  return (
    <div className="input_item">
      <LabelUI text={label} htmlFor={name} />
      <DatePickerUI value={value} onChange={onChange} />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
});

export default DatePickerField;



