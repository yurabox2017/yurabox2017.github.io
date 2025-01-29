import React, { FC, useContext, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import Logo from '../logo/Logo';
import { LangSwitcher } from 'src/features/LangSwitcher/LangSwitcher';
import { logout } from 'src/features/store/user.slice';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { clsx as cn } from 'clsx';
import { ChangeThemeButton } from '../changeThemeButton/ChangeThemeButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from 'src/features/store/store';
import { authApi } from 'src/services/api/authApi.slice';

export const HeaderOrigin: FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const count = useSelector((s: RootState) => s.rootReducer.cart?.items.length);
  const isAuth = !!useSelector((s: RootState) => s.rootReducer.user?.jwt);
  const isAdmin = !!useSelector((s: RootState) => s.rootReducer.user?.profile?.isAdmin);
  const location = useLocation();
  const logoutHandler = () => {
    dispatch(authApi.util.resetApiState());
    dispatch(logout());
  };
  const loginHandler = () => {
    dispatch(authApi.util.resetApiState());
  };
  const loginLink = (
    <Link to="/login" className="nav-link" onClick={loginHandler}>
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
      <ul className="navbar-nav ms-auto w-25">
        <li className="nav-item align-self-center">
          <NavLink className="nav-link" to="/">
            Список товаров
          </NavLink>
        </li>
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
      <ul className="navbar-nav ms-auto w-25">
        {isAdmin && (
          <li className="nav-item align-self-center">
            <NavLink className="nav-link" to="/add" state={{ previousLocation: location }}>
              Добавить товар
            </NavLink>
          </li>
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
