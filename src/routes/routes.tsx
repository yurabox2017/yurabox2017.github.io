import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, useLocation } from 'react-router';
import { routes } from 'src/routes/routes.data';
import { EditProductModal } from 'src/shared/ui/modals/modal/EditProductModal';
import Layout from 'src/shared/ui/layouts/Layout';
import Main from 'src/widgets/main/Main';
import { ListProduct } from 'src/shared/ui/listProduct';
import ListProductPage from 'src/pages/ListProduct/ListProductPage';
import { ProtectedRouteAdmin } from 'src/routes/helpers/ProtectedRouteAdmin';
import { RequireAuth } from 'src/routes/helpers/RequireAuth';
import UserProfile from 'src/pages/profile/UserProfile';
import CartProduct from 'src/shared/ui/cartProduct/CartProduct';
import Error from 'src/pages/error/Error';
import { AddProductModal } from 'src/shared/ui/modals/modal/AddProductModal';
import Login from 'src/pages/AuthScreen/SingInBlock/Login';
import { Register } from 'src/pages/AuthScreen/SingUpBlock/Register';

export const CustomRoutes = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={Main}></Route>
          <Route
            path="/userProfile"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
          <Route path="/trash" Component={CartProduct}></Route>
          <Route path="/listProduct" Component={ListProductPage} />
          <Route path="*" Component={Error}></Route>
     
        </Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
      </Routes>
      {previousLocation && (
        <Routes>
          <Route
            path="/listProduct/add"
            element={
              <ProtectedRouteAdmin >
                <AddProductModal />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/listProduct/edit"
            element={
              <ProtectedRouteAdmin >
                <EditProductModal />
              </ProtectedRouteAdmin>
            }
          />
        </Routes>
      )}
    </>
  );
};
