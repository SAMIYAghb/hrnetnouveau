import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../../types';

interface EmployeeState {
  employees: Employee[];
}

/**
 * Initial state for the employee slice.
 * @type {EmployeeState}
 */
const initialState: EmployeeState = {
  employees: [],
};

/**
 * Redux slice for employee data management.
 * Provides actions to add a single employee or set multiple employees.
 */
const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {

    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },

    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
  },
});
// Export the actions to be used in components.

export const { addEmployee, setEmployees } = employeeSlice.actions;
// Export the reducer to be included in the Redux store.
export default employeeSlice.reducer;



// PayloadAction : Il s'agit d'un type TypeScript fourni par Redux Toolkit qui représente une action avec une payload typée. Cela garantit que la donnée transmise dans l'action est du bon type.


// reducers : Cette section définit les actions (ou "réducteurs") associées à ce slice. Ici, il y a une seule action addEmployee.

// addEmployee : Cette action prend un Employee comme payload et l'ajoute au tableau employees. state.employees.push(action.payload); ajoute l'employé fourni dans l'action (action.payload) au tableau des employés. En utilisant createSlice, cette mutation directe de l'état est possible car Redux Toolkit utilise Immer pour gérer immuablement l'état sous le capot.


// addEmployee : L'action addEmployee est exportée pour être utilisée dans les composants, permettant d'ajouter un nouvel employé.
// employeeSlice.reducer : Le reducer généré est exporté comme valeur par défaut, ce qui permet à ce slice d'être inclus dans le store Redux global.