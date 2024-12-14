import React from 'react';
import { Outlet } from 'react-router';
import './Layout.css';
import { Header } from '../header';

function Layout() {
  return (
    <>
      <Header />
      <div className="" style={{ marginTop: '55px' }}>
        <hr className="mt-0" />
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
