import React, { FC, useContext, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import Logo from '../logo/Logo';
import { LangSwitcher } from 'src/features/LangSwitcher/LangSwitcher';

import { Link, NavLink, useNavigate } from 'react-router';
import { ThemeContext } from 'src/context/themeContext';
import { clsx as cn } from 'clsx';
import { ChangeThemeButton } from '../changeThemeButton/ChangeThemeButton';
import { useDispatch } from 'react-redux';
import { AppDispath } from 'src/features/store/store';
import { userActions } from 'src/features/store/user.slice';

export const HeaderOrigin: FC = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispath>();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(userActions.logout());
    navigate('/login');
  };

  return (
    <header>
      <nav className={`${cn('navbar navbar-expand-sm justify-content-center fixed-top px-3 ')}`}>
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
            <Link className="nav-link" to="/listProduct/add">
              Добавить товар
            </Link>
          </li>
          <li className="nav-item align-self-center">
            <NavLink className="nav-link " to="/listProduct/edit">
              Редактировать товар
            </NavLink>
          </li>

          <li className="nav-item align-self-center">
            <ChangeThemeButton />
          </li>
          <li className="nav-item alig-self-center">
            <LangSwitcher />
          </li>
          <li className="nav-item alig-self-center">
            <Link to="#" className="nav-link" onClick={logout}>
              Выход
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
HeaderOrigin.displayName = 'HeaderOrigin';
export const Header = withTranslation()(HeaderOrigin);
