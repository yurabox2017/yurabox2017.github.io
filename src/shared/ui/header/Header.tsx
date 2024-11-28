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
      <nav className={`${cn('navbar navbar-expand-sm justify-content-center fixed-top px-3 ', `bg-${theme.theme}`)}`}>
        <ul className="navbar-nav ms-auto">
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
            <NavLink className="nav-link" to="/trash">
              Корзина
            </NavLink>
          </li>
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/userProfile">
              Профиль
            </NavLink>
          </li>
        </ul>
        <div className="mx-auto align-self-center">
          <NavLink className="nav-link" to="/">
            <Logo />
          </NavLink>
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/listProduct/add">
              Добавить товар
            </NavLink>
          </li>
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/listProduct/edit">
              Редактировать товар
            </NavLink>
          </li>

          <li className="nav-item align-self-center">
            <ChangeThemeButton />
            <LangSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};
HeaderOrigin.displayName = 'HeaderOrigin';
export const Header = withTranslation()(HeaderOrigin);
