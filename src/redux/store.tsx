import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from './slices/DepatementSlice';
import stateReducer from './slices/StateSlice'
import employeeReducer from './slices/EmployeeSlice'

const store = configureStore({
    reducer: {
    department : departmentReducer,
    states : stateReducer,
    employees: employeeReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// RootState : Il s'agit d'un type TypeScript qui déduit le type de l'état global. ReturnType est une utilité TypeScript qui obtient le type de retour d'une fonction ; ici, store.getState retourne l'état global, donc RootState est le type de cet état.

// AppDispatch : Ce type représente le type de la fonction dispatch du store. Cela permet de typé correctement les dispatch des actions Redux dans les composants ou les thunks.