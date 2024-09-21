import { createSlice } from '@reduxjs/toolkit';

const citySlice = createSlice({
  name: 'city',
  initialState: {
    cities: [],
  },
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(city => city.code !== action.payload);
    },
    updateCity: (state, action) => {
      const index = state.cities.findIndex(city => city.code === action.payload.code);
      if (index !== -1) {
        state.cities[index] = action.payload;
      }
    },
  },
});

export const { addCity, removeCity, updateCity } = citySlice.actions;
export default citySlice.reducer;
