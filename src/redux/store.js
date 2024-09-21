import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './features/stateSlice';
import cityReducer from './features/citySlice';
import warehouseReducer from './features/warehouseSlice';

const store = configureStore({
  reducer: {
    state: stateReducer,
    city: cityReducer,
    warehouse: warehouseReducer,
  },
});

export default store;
