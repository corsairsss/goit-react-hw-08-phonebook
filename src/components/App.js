import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import phoneBookOperation from '../redux/phoneBookOperation';
import phoneBookSelectors from '../redux/phoneBookSelectors.js';

import Section from './Section/Section.js';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import FilterContacts from './FilterContacts/FilterContacts.js';
import Button from './Button/Button.js';
import Spinner from './Spinner/Spinner.js';

import s from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const loading = this.props.loading;
    const isContacts = this.props.contacts.length;
    const isShowFindCOntact = isContacts >= 2;
    const isShowContactList = isContacts !== 0;

    return (
      <>
        <Section title={'Phonebook'}>
          <Button />
          {loading && <Spinner />}
          <ContactForm />
          <CSSTransition
            in={isShowFindCOntact}
            timeout={250}
            unmountOnExit
            classNames={s}
          >
            <FilterContacts />
          </CSSTransition>

          {isShowContactList && <ContactList />}
        </Section>
      </>
    );
  }
}

const mapStateToprops = state => {
  return {
    loading: phoneBookSelectors.getLoading(state),
    contacts: phoneBookSelectors.getContacts(state),
  };
};
const mapDispatchToProps = {
  onFetchContacts: phoneBookOperation.fetchContact,
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
