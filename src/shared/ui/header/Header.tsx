import React, { FC, useContext, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import Logo from '../logo/Logo';
import { LangSwitcher } from 'src/features/LangSwitcher/LangSwitcher';
import { ChangeThemeButton } from '../ChangeThemeButton';
import UserProfile from '../profile/UserProfile';
import { NavLink } from 'react-router';
import { ThemeContext } from 'src/context/themeContext';
import { clsx as cn } from 'clsx';

export const HeaderOrigin: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <header>
      <nav className={`${cn('navbar navbar-expand-sm justify-content-center fixed-top ß', `bg-${theme.theme}`)}`}>
        <ul className="navbar-nav">
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/">
              Главная
            </NavLink>
          </li>
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/listProduct">
              Список товаров
            </NavLink>
          </li>
          <li className="nav-item align-self-center">
            <a className="nav-link" href="#">
              <Logo />
            </a>
          </li>
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/trash">
              Корзина
            </NavLink>
          </li>
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/userProfile">
              Профиль
            </NavLink>
          </li>
          <li className="nav-item align-self-center">
            <ChangeThemeButton />
            <LangSwitcher />
          </li>
        </ul>
      </nav>

      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <Logo />
                </NavLink>
              </li>
              <li></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/trash">
                  Корзина
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userProfile">
                  Профиль
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      {/* <div className="row  border-mute border-bottom py-1 mx-0 sticky-top">
        <div className="col text-center offset-4">
          <Logo />
        </div>
        <div className="col align-self-center">
          <ChangeThemeButton />
          <LangSwitcher />
          <NavLink to="/userProfile">Профиль</NavLink>
        </div>
      </div> */}
    </header>
  );
};
HeaderOrigin.displayName = 'HeaderOrigin';
export const Header = withTranslation()(HeaderOrigin);
