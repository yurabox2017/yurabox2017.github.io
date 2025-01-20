import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { EditProductModal } from 'src/shared/ui/modals/modal/EditProductModal';
import Layout from 'src/shared/ui/layouts/Layout';
import Main from 'src/widgets/main/Main';
import ListProductPage from 'src/pages/Product/ProductPage';
import { ProtectedRouteAdmin } from 'src/routes/helpers/ProtectedRouteAdmin';
import { RequireAuth } from 'src/routes/helpers/RequireAuth';
import UserProfile from 'src/pages/profile/UserProfile';
import Error from 'src/pages/error/Error';
import { AddProductModal } from 'src/shared/ui/modals/modal/AddProductModal';
import Login from 'src/pages/AuthScreen/SingInBlock/Login';
import { RegisterThunkPage } from 'src/pages/AuthScreen/SingUpBlock/RegisterThunkPage';
import CartPage from 'src/pages/Cart/CartPage';
import { RegisterRtkPage } from 'src/pages/AuthScreen/SingUpBlock/RegisterRtkPage';


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
          <Route path="/cart" Component={CartPage}></Route>
          <Route path="/listProduct" Component={ListProductPage} />
          <Route path="*" Component={Error}></Route>
        </Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register-rtk" Component={RegisterRtkPage}></Route>
        <Route path="/register-thunk" Component={RegisterThunkPage}></Route>
      </Routes>
      {previousLocation && (
        <Routes>
          <Route
            path="/listProduct/add"
            element={
              <ProtectedRouteAdmin>
                <AddProductModal />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/listProduct/edit"
            element={
              <ProtectedRouteAdmin>
                <EditProductModal />
              </ProtectedRouteAdmin>
            }
          />
        </Routes>
      )}
    </>
  );
};
