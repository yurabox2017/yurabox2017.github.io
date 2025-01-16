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


export const HeaderOrigin: FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const count = useSelector((s: RootState) => s.rootReducer.cart?.items.length);
  const navigate = useNavigate();

  const logoutHandler = () => {
     dispatch(logout());

   };
  const location = useLocation();
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
            <NavLink className="nav-link position-relative" to="/cart">
              Корзина <span className="badge text-bg-light">{count === 0 ? null : count}</span>
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
            <NavLink className="nav-link" to="/listProduct/add" state={{ previousLocation: location }}>
              Добавить товар
            </NavLink>
          </li>
          <li className="nav-item align-self-center">
            <NavLink className="nav-link " to="/listProduct/edit" state={{ previousLocation: location }}>
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
            <Link to="/login" className="nav-link" onClick={logoutHandler}>
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
