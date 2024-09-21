
import { createSlice } from '@reduxjs/toolkit';

const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState: {
    warehouses: [],
  },
  reducers: {
    addWarehouse: (state, action) => {
      state.warehouses.push(action.payload);
    },
    removeWarehouse: (state, action) => {
      state.warehouses = state.warehouses.filter(warehouse => warehouse.id !== action.payload);
    },
    updateWarehouse: (state, action) => {
      const index = state.warehouses.findIndex(warehouse => warehouse.id === action.payload.id);
      if (index !== -1) {
        state.warehouses[index] = action.payload;
      }
    },
  },
});

export const { addWarehouse, removeWarehouse, updateWarehouse } = warehouseSlice.actions;
export default warehouseSlice.reducer;
