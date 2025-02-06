import React, { FC } from 'react';
import { withTranslation } from 'react-i18next';
import Logo from '../logo/Logo';
import { LangSwitcher } from 'src/features/LangSwitcher/LangSwitcher';
import { logout } from 'src/features/store/user.slice';
import { Link, NavLink, useLocation } from 'react-router';
import { clsx as cn } from 'clsx';
import { ChangeThemeButton } from '../changeThemeButton/ChangeThemeButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from 'src/features/store/store';

export const HeaderOrigin: FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const count = useSelector((s: RootState) => s.rootReducer.cart?.items.length);
  const isAuth = !!useSelector((s: RootState) => s.rootReducer.user?.jwt);
  const isAdmin = !!useSelector((s: RootState) => s.rootReducer.user?.profile?.isAdmin);
  const location = useLocation();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const loginLink = (
    <Link to="/login" className="nav-link">
      Вход
    </Link>
  );
  const logoutLink = (
    <Link to="/login" className="nav-link" onClick={logoutHandler}>
      Выход
    </Link>
  );

  return (
    <nav className={`${cn('navbar navbar-expand-sm border-bottom  fixed-top px-3 ')}`}>
      <ul className="navbar-nav justify-content-end w-40">
        <li className="nav-item align-self-center">
          <NavLink className="nav-link" to="/">
            Список товаров
          </NavLink>
        </li>
        {isAdmin && (
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/category">
              Список категорий
            </NavLink>
          </li>
        )}
        {!isAdmin && (
          <li className="nav-item align-self-center">
            <NavLink className="nav-link position-relative" to="/cart">
              Корзина <span className="badge text-bg-light">{count === 0 ? null : count}</span>
            </NavLink>
          </li>
        )}
      </ul>
      <div className="mx-auto align-self-center">
        <NavLink className="nav-link" to="/">
          <Logo />
        </NavLink>
      </div>
      <ul className="navbar-nav  w-40">
        {isAdmin && (
          <>
            <li className="nav-item align-self-center">
              <NavLink className="nav-link" to="/add" state={{ previousLocation: location }}>
                Добавить товар
              </NavLink>
            </li>
            <li className="nav-item align-self-center">
              <NavLink className="nav-link" to="/addCategory" state={{ previousLocation: location }}>
                Добавить категорию
              </NavLink>
            </li>
          </>
        )}
        <li className="nav-item align-self-center">
          <ChangeThemeButton />
        </li>
        <li className="nav-item alig-self-center">
          <LangSwitcher />
        </li>
        {isAuth && (
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/userProfile">
              Профиль
            </NavLink>
          </li>
        )}
        <li className="nav-item alig-self-center">{isAuth ? logoutLink : loginLink}</li>
      </ul>
    </nav>
  );
};
HeaderOrigin.displayName = 'HeaderOrigin';
export const Header = withTranslation()(HeaderOrigin);
