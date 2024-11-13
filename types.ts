import { Dayjs } from 'dayjs';
import { Rule } from 'antd/es/form';  


// Common types
export interface Option {
  label: string;
  value: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: number;
}

// Employee Data Types
export interface EmployeeFormValues extends Address {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
}

export interface DataType extends Address {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
}

// UI Component Props
export interface ButtonUIProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface LabelUIProps {
  text: string;
  htmlFor?: string;
}

export interface InputUIProps {
  name: string;
  rules?: Rule[];
  type?: "text" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string | number;
}

export interface DatePickerUIProps {
  value?: Dayjs | null;
  onChange: (date: Dayjs | null, dateString: string | string[]) => void;
}

export interface SelectUIProps {
  options: Option[];
  onChange?: (value: string) => void;
  defaultValue?: string;
}

// Form Field Props
export interface DatePickerFieldProps extends DatePickerUIProps {
  label: string;
  name: string;
  error?: string;
}

export interface InputFieldProps extends InputUIProps {
  label: string;
  error?: string;
}

export interface SelectFieldProps extends SelectUIProps {
  label: string;
  value: string;
}

// Table & Pagination Props
export interface TableUIProps {
  data: DataType[];
}

export interface EmployeeTableHeaderProps {
  searchString: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEntriesChange: (value: string | number) => void;
  options: Option[];
}

export interface PaginationInfoProps {
  startIndex: number;
  endIndex: number;
  totalEntries: number;
}

export interface PaginationControlsProps {
  currentPage: number;
  totalEntries: number;
  entriesPerPage: number;
  onPrevious: () => void;
  onNext: () => void;
}

// Search and Select
export interface SearchFieldProps {
  searchString: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface EntriesSelectorProps {
  options: Option[];
  onEntriesChange: (value: string | number) => void;
}

// Redux States
export interface DepartmentState {
  departments: string[];
}

export interface State {
  name: string;
  abbreviation: string;
}

export interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  zipCode: string;
  department: string;
  state: string;
}
