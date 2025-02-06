import { createBrowserRouter } from 'react-router-dom';
import Layout from 'src/shared/ui/layouts/Layout';
import { UserProfilePage } from 'src/pages/profile/UserProfilePage';
import { ErrorPage } from 'src/pages/error/ErrorPage';
import { ProductPage } from 'src/pages/product/ProductPage';
import { AddProductModal } from 'src/shared/ui/modals/modal/AddProductModal';
import { RequireAuth } from 'src/routes/helpers/RequireAuth';
import React from 'react';
import { Login } from 'src/pages/AuthScreen/SingInBlock/Login';
import { ProtectedRouteAdmin } from './helpers/ProtectedRouteAdmin';
import { CartPage } from 'src/pages/cart/CartPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/userProfile',
        element: (
          <RequireAuth>
            <UserProfilePage />
          </RequireAuth>
        ),
      },
      {
        path: '/cart',
        Component: CartPage,
      },
      {
        path: '/listProduct',
        Component: ProductPage,
      },
      {
        path: '/listProduct/add',
        element: (
          <ProtectedRouteAdmin>
            <AddProductModal />
          </ProtectedRouteAdmin>
        ),
      },
    ],
  },
  { path: '/login', Component: Login },
  {
    path: '*',
    Component: ErrorPage,
  },
]);
