import React from 'react';
import { connect } from 'react-redux';

import s from './IconClose.module.css';

const IconClose = state => {
  const theme = state.PhBookTheme.theme;
  return (
    <svg
      className={theme === 'light' ? s.svgLightTheme : s.svgDarkTheme}
      width="25"
      height="25"
      viewBox="0 0 32 32"
    >
      <title>delete-contact</title>
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
      <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
    </svg>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(IconClose);
