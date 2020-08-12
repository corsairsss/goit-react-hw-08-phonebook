import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phoneBookActions from './phoneBookActions.js';

const onAddContact = (state, { payload }) => [...state, payload];

const onRemoveContact = (state, { payload }) =>
  state.filter(item => item.id !== payload);

const items = createReducer([], {
  [phoneBookActions.addContactSuccess]: onAddContact,
  [phoneBookActions.fetchContactsSuccess]: (state, { payload }) => payload,
  [phoneBookActions.removeContactsSuccess]: onRemoveContact,
});

const filter = createReducer('', {
  [phoneBookActions.changeFilter]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [phoneBookActions.addContactRequest]: () => true,
  [phoneBookActions.addContactSuccess]: () => false,
  [phoneBookActions.addContactError]: () => false,
  [phoneBookActions.fetchContactsRequest]: () => true,
  [phoneBookActions.fetchContactsSuccess]: () => false,
  [phoneBookActions.fetchContactsError]: () => false,
  [phoneBookActions.removeContactsRequest]: () => true,
  [phoneBookActions.removeContactsSuccess]: () => false,
  [phoneBookActions.removeContactsError]: () => false,
});

export default combineReducers({ items, filter, loading });
