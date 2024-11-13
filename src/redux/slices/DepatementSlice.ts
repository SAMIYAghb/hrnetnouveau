import { createSlice } from "@reduxjs/toolkit";
import department from "../../data/department.ts";
import { DepartmentState } from "../../../types.ts";

/**
 * The initial state of the department slice.
 * Contains an array of department names.
 * @type {DepartmentState}
 */

const initialState: DepartmentState = {
  departments: department,
};


/**
 * Redux slice for department data management.
 * Provides a slice of the Redux store dedicated to handling department-related data.
 * Currently has no additional reducers.
 */
const departmentSlice = createSlice({
    name: 'department',
    initialState,
    reducers: {
      // ajoute d'autres reducers ici si nécessaire
    },
  });
  
  // Exporter le reducer
  export default departmentSlice.reducer;
  
  /**
 * Selector to retrieve the departments from the Redux store.
 * @param {object} state - The Redux state object.
 * @returns {string[]} Array of department names.
 */
  export const selectDepartments = (state: { department: DepartmentState }) => state.department.departments;