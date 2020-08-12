import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phoneBookActions from './phoneBookActions.js';

const theme = createReducer('light', {
  [phoneBookActions.changeTheme]: (state, { payload }) => payload,
});

export default combineReducers({ theme });
