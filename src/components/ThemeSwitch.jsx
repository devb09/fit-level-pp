import React from 'react';
import './ThemeSwitch.css'; 

const ThemeSwitch= ({ theme, toggleTheme }) => {
  return (
    <div className={`theme-switch ${theme}`} onClick={toggleTheme}>
      {/* <div className={`switch-thumb ${theme}`}></div> */}
      <span className="icon sun">☀️</span>
      <span className="icon moon">🌙</span>
    </div>
  );
};

export default ThemeSwitch;
