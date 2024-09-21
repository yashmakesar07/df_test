// src/redux/slices/stateSlice.js
import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data.json';

const initialState = {
  states: data // Initialize with data from JSON
};

const stateSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {
    addState: (state, action) => {
      // Action to add a new state
      state.states.push(action.payload);
    },
    removeState: (state, action) => {
      // Action to remove a state by its code
      state.states = state.states.filter(state => state.code !== action.payload);
    },
    updateState: (state, action) => {
      // Action to update a state's information
      const index = state.states.findIndex(state => state.code === action.payload.code);
      if (index !== -1) {
        state.states[index] = action.payload;
      }
    },
  },
});

// Export actions
export const { addState, removeState, updateState } = stateSlice.actions;

// Export the reducer
export default stateSlice.reducer;
