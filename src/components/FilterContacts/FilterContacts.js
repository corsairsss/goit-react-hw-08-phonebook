import React from 'react';
import { connect } from 'react-redux';

import phoneBookSelectors from '../../redux/phoneBookSelectors.js';
import phoneBookAction from '../../redux/phoneBookActions.js';

import s from './FilterContacts.module.css';

function FilterContacts({ value, onChangeFilter }) {
  return (
    <div className={s.findContact}>
      <p className={s.filterTitle}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={({ target }) => onChangeFilter(target.value)}
        className={s.filterInput}
        placeholder="Search..."
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: phoneBookSelectors.getFilter(state),
  };
};

const mapDispatchToProps = {
  onChangeFilter: phoneBookAction.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
