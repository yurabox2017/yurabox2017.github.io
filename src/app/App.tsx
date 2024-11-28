import React, { useState } from 'react';
import './App.css';
import { Theme, ThemeContext } from 'src/context/themeContext';
import { LocalizationInitiator } from 'src/localization/LocalizationInitiator';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/localization/settings';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import { routes } from 'src/routes/routes.data';
import Layout from 'src/shared/ui/layouts/Layout';
import UserProfile from 'src/shared/ui/profile/UserProfile';
import TrashProduct from 'src/shared/ui/trashProduct/TrashProduct';
import ListProductPage from 'src/pages/ListProduct/ListProductPage';
import { EditProductModal } from 'src/shared/ui/modals/modal/EditProductModal';
import { AddProductModal } from 'src/shared/ui/modals/modal/AddProductModal';
import Error from 'src/pages/error/Error';
import Main from 'src/widgets/main/Main';

function App() {
  let [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <LocalizationInitiator />
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className={`App bg-${theme} border border-bottom-dark`}>
            <RouterProvider router={routes} />
          </div>
        </ThemeContext.Provider>
      </I18nextProvider>
    </>
  );
}

export default App;
