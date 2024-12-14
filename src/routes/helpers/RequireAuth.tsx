import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store/store';
import { Navigate } from 'react-router';

interface IProtectedRoute {
  children: React.ReactElement;
}

export const RequireAuth = ({ children }: IProtectedRoute) => {
  const jwt = useSelector((s: RootState) => s.user.userData?.jwt);
  if (!jwt) return <Navigate to="/login" />;

  return children;
};
