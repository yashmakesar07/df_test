// src/redux/slices/stateSlice.js
import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data.json';

const initialState = {
  states: data.states, // Initialize with data from JSON
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
      // Action to remove a state by code
      const stateCode = action.payload;
      state.states = state.states.filter((st) => st.code !== stateCode);
    },
    updateState: (state, action) => {
      // Action to update a state's information
      const index = state.states.findIndex((st) => st.code === action.payload.code);
      if (index !== -1) {
        state.states[index] = { ...state.states[index], ...action.payload };
      }
    },
    removeWarehouse: (state, action) => {
      // Action to remove a warehouse by code
      const warehouseCode = action.payload;
      state.states.forEach((stateItem) => {
        stateItem.cities.forEach((city) => {
          city.warehouses = city.warehouses.filter((wh) => wh.code !== warehouseCode);
        });
      });
    },
    // Similarly, add addWarehouse and updateWarehouse if needed
  },
});

// Export actions
export const { addState, removeState, updateState, removeWarehouse } = stateSlice.actions;

// Export the reducer
export default stateSlice.reducer;
