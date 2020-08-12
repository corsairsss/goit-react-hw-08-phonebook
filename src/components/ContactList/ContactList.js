import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition,TransitionGroup } from 'react-transition-group';


import phoneBookSelectors from '../../redux/phoneBookSelectors.js';
import ContactItem from '../ContactItem/ContactItem.js';

import s from './ContactList.module.css';

const ContactList = ({ list }) => {
  return (
    <TransitionGroup component='ul' className={s.list}>
      {list.map(elem => (
        <CSSTransition key={elem.id} timeout={250} classNames={s}unmountOnExit >
          <ContactItem  id={elem.id} />
         </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mSTP = state => {
  return {
    list: phoneBookSelectors.getConatctList(state),
  };
};

export default connect(mSTP)(ContactList);
