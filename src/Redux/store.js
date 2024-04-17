import { configureStore } from '@reduxjs/toolkit';

import daysReducer from './slices/days';

export const store = configureStore({
  reducer: {
    days: daysReducer,
  },
});
