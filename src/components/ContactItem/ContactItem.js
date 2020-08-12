import React from 'react';
import { connect } from 'react-redux';

import IconClose from '../assets/Svg/IconClose.js';
import phoneBookOperation from '../../redux/phoneBookOperation';
import phoneBookSelectors from '../../redux/phoneBookSelectors.js';

import s from './ContactListItem.module.css';

const ContactItem = ({ phone, name, id, theme, removeContact }) => {
  const href = `tel:+38${phone}`;
  return (
    <li key={id} className={s.list__item}>
      <span>{name}:</span>
      <a href={href} className={theme === 'light' ? s.dark : s.light}>
        {phone}
      </a>
      <button className={s.btn_delete} type="button" onClick={removeContact}>
        <IconClose />
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...phoneBookSelectors.getContactItem(state, ownProps.id),
    theme: phoneBookSelectors.getTheme(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(phoneBookOperation.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
