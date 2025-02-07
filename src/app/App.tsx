import React, { useEffect, useState } from 'react';
import './App.css';
import { Theme, ThemeContext } from 'src/context/themeContext';
import { LocalizationInitiator } from 'src/localization/LocalizationInitiator';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/localization/settings';
import { CustomRoutes } from 'src/routes/customRoutes';

function App() {
  const [theme, setTheme] = useState<Theme>(() => 'light');

  const setHtmlAttribute = () => {
    const html = document.querySelector('html');
    if (html) html.setAttribute('data-bs-theme', theme);
  };

  useEffect(() => {
    setHtmlAttribute();
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <LocalizationInitiator />
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className={`App border border-bottom-dark`}>
            <CustomRoutes />
          </div>
        </ThemeContext.Provider>
      </I18nextProvider>
    </>
  );
}

export default App;
