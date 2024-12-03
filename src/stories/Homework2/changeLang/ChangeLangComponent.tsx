import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

function ChangeLangComponent() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ru' ? 'en' : 'ru';

  return (
    <>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <div className="vstack w-25">
          <span>{t(`teststorybook`)}</span>
          <button className="btn btn-primary" onClick={() => i18n.changeLanguage(lang)}>
            {lang}
          </button>
        </div>
      </I18nextProvider>
    </>
  );
}
export default ChangeLangComponent;
