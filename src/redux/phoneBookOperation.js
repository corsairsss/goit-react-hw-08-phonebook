import axios from 'axios';

import phoneBookAction from './phoneBookActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = ({ name, phone }) => async dispatch => {
  dispatch(phoneBookAction.addContactRequest());
  try {
    const { data } = await axios.post('/contacts', { name, phone });
    dispatch(phoneBookAction.addContactSuccess(data));
  } catch (error) {
    dispatch(phoneBookAction.addContactError(error));
  }
};

const fetchContact = () => async dispatch => {
  dispatch(phoneBookAction.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(phoneBookAction.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phoneBookAction.fetchContactsError(error));
  }
};

const removeContact = id => async dispatch => {
  dispatch(phoneBookAction.removeContactsRequest());
  try {
    axios.delete(`/contacts/${id}`);
    dispatch(phoneBookAction.removeContactsSuccess(id));
  } catch (error) {
    dispatch(phoneBookAction.removeContactsError(error));
  }
};

export default {
  addContact,
  fetchContact,
  removeContact,
};
