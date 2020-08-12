import React from 'react';
import { connect } from 'react-redux';

import phoneBookActions from '../../redux/phoneBookActions.js';

import s from './Button.module.css';

const Button = ({ changeTheme }) => {
  return (
    <div className={s.footer}>
      <button
        className={s.footer__btn}
        onClick={() => changeTheme('light')}
        type="button"
      >
        Light
      </button>

      <button
        className={s.footer__btn}
        onClick={() => changeTheme('dark')}
        type="button"
      >
        Dark
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  changeTheme: phoneBookActions.changeTheme,
};

export default connect(null, mapDispatchToProps)(Button);
