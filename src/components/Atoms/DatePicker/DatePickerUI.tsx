import { DatePicker } from 'antd';
import React from 'react';
import { DatePickerUIProps } from '../../../../types';



const DatePickerUI: React.FC<DatePickerUIProps> = ({ value, onChange }) => (
  <DatePicker
    value={value} // Ant Design gère automatiquement Dayjs
    onChange={onChange} // Cela fonctionnera maintenant avec le bon type
    style={{ width: '100%' }}
  />
);

export default DatePickerUI;
