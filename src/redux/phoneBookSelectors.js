import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getTheme = state => state.PhBookTheme.theme;

const getConatctList = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  },
);

const getContactItem = createSelector(
  [(_, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find(contact => contact.id === contactId),
);

// const getContactItem = (state, contactId) => {
//   const contacts = getContacts(state);

//   return contacts.find(contact => contact.id === contactId);
// };

export default {
  getContacts,
  getFilter,
  getLoading,
  getTheme,
  getConatctList,
  getContactItem,
};
