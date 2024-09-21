// src/redux/slices/stateSlice.js
import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data.json';

const initialState = data.states // Initialize with data fro



const stateSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {
    addState: (state, action) => {
      // Action to add a new state
      state.states.push(action.payload);
    },
    removeState: (state, action) => {
      console.log("Current state:", );
      console.log("Action payload:", action.payload);
      console.log("State to filter:", state.states); // Check what it logs
      if (!Array.isArray(state)) {
        console.error("States is not an array!", state.states);
      }
      console.log(state)
      state.states = state.states.find(state  => state.code !== action.payload);
    },
    
    
    updateState: (state, action) => {
      // Action to update a state's information
      const index = state.states.findIndex((state) => state.code === action.payload.code);
      if (index !== -1) {
        state.states[index] = { ...state.states[index], ...action.payload }; // Merge new data
      }
    },
  },
});

// Export actions
export const { addState, removeState, updateState } = stateSlice.actions;

// Export the reducer
export default stateSlice.reducer;
