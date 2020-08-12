import { configureStore } from '@reduxjs/toolkit';

import phoneBookReducer from './phoneBookReducer.js';
import PBThemeReducer from './PBThemeReducer.js';

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
    PhBookTheme: PBThemeReducer,
  },
});

export default store;
