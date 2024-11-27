import { createBrowserRouter } from 'react-router-dom';
import Layout from 'src/shared/ui/layouts/Layout';
import Main from 'src/widgets/main/Main';
import UserProfile from 'src/shared/ui/profile/UserProfile';
import Error from 'src/pages/error/Error';
import ListProductPage from 'src/pages/ListProduct/ListProductPage';
import TrashProduct from 'src/shared/ui/trashProduct/TrashProduct';
import { AddProductModal } from 'src/shared/ui/modals/modal/AddProductModal';
import { EditProductModal } from 'src/shared/ui/modals/modal/EditProductModal';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Main,
      },
      {
        path: '/userProfile',
        Component: UserProfile,
      },
      {
        path: '/trash',
        Component: TrashProduct,
      },
      {
        path: '/listProduct',
        Component: ListProductPage,
      },
      {
        path: '/listProduct/edit',
        Component: EditProductModal,
      },
      {
        path: '/listProduct/add',
        Component: AddProductModal,
      },
    ],
  },
  {
    path: '*',
    Component: Error,
  },
]);
