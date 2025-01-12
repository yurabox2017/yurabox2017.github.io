import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootState } from 'src/features/store/store';

interface IProtectedRouteAdmin {
  children: React.ReactElement;
}

export const ProtectedRouteAdmin = ({ children }: IProtectedRouteAdmin) => {
  const { user } = useSelector((s: RootState) => s.rootReducer);

  const isAuthenticated = user?.jwt;
  const isAdmin = user?.profile?.isAdmin;

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
};
