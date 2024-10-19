import React, { useState } from 'react';

import './App.css';
import { Theme, ThemeContext } from 'src/context/themeContext';
import { LocalizationInitiator } from 'src/localization/LocalizationInitiator';
import Layout from 'src/components/layouts/Layout';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/localization/settings';
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
          <div className={`App ${theme} border border-bottom-dark`}>
            <Layout />
            <Main />
          </div>
        </ThemeContext.Provider>
      </I18nextProvider>
    </>
  );
}

export default App;
