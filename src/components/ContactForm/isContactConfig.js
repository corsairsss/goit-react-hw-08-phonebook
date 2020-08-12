const isContact = (contacts, phone) =>
  contacts.find(contact => contact.phone === phone);

export default isContact;
