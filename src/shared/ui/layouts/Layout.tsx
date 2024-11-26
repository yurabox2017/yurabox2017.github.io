import React from 'react';
import { Outlet } from 'react-router';
import './Layout.css';
import { Header } from '../header';

function Layout() {
  return (
    <>
      <Header />
      <div className="" style={{ marginTop: '70px' }}>
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
