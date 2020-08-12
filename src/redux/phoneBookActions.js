import { createAction } from '@reduxjs/toolkit';

// --------------------------------------------------------------------------------------

const addContactRequest = createAction('phoneBook/addRequest');
const addContactSuccess = createAction('phoneBook/addSuccess');
const addContactError = createAction('phoneBook/addError');

const fetchContactsRequest = createAction('phoneBook/fetchRequest');
const fetchContactsSuccess = createAction('phoneBook/fetchSuccess');
const fetchContactsError = createAction('phoneBook/fetchError');

const removeContactsRequest = createAction('phoneBook/removeRequest');
const removeContactsSuccess = createAction('phoneBook/removeSuccess');
const removeContactsError = createAction('phoneBook/removeError');

const changeFilter = createAction('phoneBook/changeFilter');

const changeTheme = createAction('phoneBook/changeTheme');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  //
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  //
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  //
  changeFilter,
  changeTheme,
};
