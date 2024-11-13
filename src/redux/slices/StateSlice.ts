import { createSlice } from "@reduxjs/toolkit";
import state from "../../data/state.ts";
import { State } from "../../../types.ts";

interface StatesState {
    states: State[]; // Un tableau d'objets de type State
}

/**
 * Initial state for the states slice.
 * @type {StatesState}
 */
const initialState: StatesState = {
    states: state, 
};

/**
 * Redux slice for managing state data.
 */
const statesSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
      // ajoute d'autres reducers ici si nécessaire
    },
  });
  
// Export the reducer to be included in the Redux store.
  export default statesSlice.reducer;
  
/**
 * Selector to retrieve the list of states from the Redux state.
 * @param {Object} state - The root state of the Redux store.
 * @returns {State[]} - Array of state objects.
 */
  export const selectStates = (state: { states: StatesState }) => state.states.states;