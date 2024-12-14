import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootState } from 'src/features/store/store';

interface IProtectedRouteAdmin {
  children: React.ReactElement;
  role: string;
}

export const ProtectedRouteAdmin = ({ role, children }: IProtectedRouteAdmin) => {
  const user = useSelector((s: RootState) => s.user);

  if (!user.userData?.jwt) return <Navigate to="/login" />;

  if (user.userData?.profile?.role !== role) return <Navigate to="/login" />;

  return children;
};

