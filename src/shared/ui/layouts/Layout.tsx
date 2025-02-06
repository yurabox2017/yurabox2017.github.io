import React from 'react';
import { Outlet } from 'react-router';
import './Layout.css';
import { Header } from '../header';

function Layout() {
  return (
    <>
      <Header />

      <div className="container overflow-y-auto" style={{ marginTop: '4rem', height: 'calc(100vh - 7rem)' }}>
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
