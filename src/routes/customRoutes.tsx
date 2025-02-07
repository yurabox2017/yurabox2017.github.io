import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Layout from 'src/shared/ui/layouts/Layout';
import { ProtectedRouteAdmin } from 'src/routes/helpers/ProtectedRouteAdmin';
import { RequireAuth } from 'src/routes/helpers/RequireAuth';
import { ErrorPage } from 'src/pages/error/ErrorPage';
import { AddProductModal } from 'src/shared/ui/modals/modal/AddProductModal';
import { RegisterThunkPage } from 'src/pages/AuthScreen/SingUpBlock/RegisterThunkPage';
import { CartPage } from 'src/pages/cart/CartPage';
import { RegisterRtkPage } from 'src/pages/AuthScreen/SingUpBlock/RegisterRtkPage';
import { ProductPage } from 'src/pages/product/ProductPage';
import { Login } from 'src/pages/AuthScreen/SingInBlock/Login';
import { UserProfilePage } from 'src/pages/profile/UserProfilePage';
import { CategoryPage } from 'src/pages/category/CategoryPage';
import { AddCategoryModal } from 'src/shared/ui/modals/modal/AddCategoryModal';

export const CustomRoutes = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" Component={Layout}>
          <Route
            path="/userProfile"
            element={
              <RequireAuth>
                <UserProfilePage />
              </RequireAuth>
            }
          />
          <Route path="/cart" Component={CartPage}></Route>
          <Route path="/" Component={ProductPage} />
          <Route path="/login" Component={Login}></Route>
          <Route path="/register-rtk" Component={RegisterRtkPage}></Route>
          <Route path="/register-thunk" Component={RegisterThunkPage}></Route>
          <Route path="*" Component={CategoryPage}></Route>
          <Route path="*" Component={ErrorPage}></Route>
        </Route>
      </Routes>
      {previousLocation && (
        <Routes>
          <Route
            path="/add"
            element={
              <ProtectedRouteAdmin>
                <AddProductModal />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/addCategory"
            element={
              <ProtectedRouteAdmin>
                <AddCategoryModal />
              </ProtectedRouteAdmin>
            }
          />
        </Routes>
      )}
    </>
  );
};
