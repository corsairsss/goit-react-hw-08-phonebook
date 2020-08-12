import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Notification from '../Notification/Notification.js';

import defaultState from './defaultState.js';
import phoneBookSelectors from '../../redux/phoneBookSelectors.js';
import phoneBookOperation from '../../redux/phoneBookOperation.js';

import isContactConfig from './isContactConfig.js';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = defaultState;

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contacts = this.props.contacts;
    const phone = this.state.phone;
    const isPhoneInContacts = isContactConfig(contacts, phone);
    if (isPhoneInContacts || phone === '') {
      this.setState({ isContact: true });
      setTimeout(() => this.setState({ isContact: false }), 2000);
      return;
    }

    const { onAddContact } = this.props;
    onAddContact(this.state);
    this.setState(defaultState);
  };

  render() {
    return (
      <>
        <CSSTransition
          in={this.state.isContact}
          unmountOnExit
          classNames={s}
          timeout={350}
        >
          <Notification />
        </CSSTransition>

        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.form__label}>
            Name:
            <input
              className={s.form__input}
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </label>

          <label className={s.form__label}>
            Number:
            <input
              className={s.form__input}
              type="number"
              value={this.state.phone}
              onChange={this.handleChange}
              name="phone"
              placeholder="in format: 0XXXXXXXXX"
            />
          </label>

          <button type="submit" className={s.form__btn}>
            Add Contact
          </button>
        </form>
      </>
    );
  }
}
const mSTP = state => {
  return {
    contacts: phoneBookSelectors.getContacts(state),
  };
};

const mDTP = {
  onAddContact: phoneBookOperation.addContact,
};

export default connect(mSTP, mDTP)(ContactForm);
