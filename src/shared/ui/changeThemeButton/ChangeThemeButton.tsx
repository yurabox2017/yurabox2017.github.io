import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useContext } from 'react';
import { Link } from 'react-router';
import { ThemeContext } from 'src/context/themeContext';

export const ChangeThemeButton: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Link to='#' className="nav-link" onClick={toggleTheme}>
      {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </Link>
  );
};
