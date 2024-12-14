import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootState } from 'src/features/store/store';

interface IProtectedRouteAdmin {
  children: React.ReactElement;
}

export const ProtectedRouteAdmin = ({ children }: IProtectedRouteAdmin) => {
  const user = useSelector((s: RootState) => s.user);

  if (!user.userData?.jwt) return <Navigate to="/login" />;
  if (!user.userData?.profile?.isAdmin) return <Navigate to="/login" />;

  return children;
};

