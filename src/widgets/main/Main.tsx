import React from 'react';
import logo from '../../app/logo.svg';
import { useTranslation } from 'react-i18next';

export default function Main() {
  const { t } = useTranslation();

  return (
    <main className="container">
      <div className="row justify-content-center">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="text-left fs-3">
          <li> {t(`key1`)}</li>
          <li>{t(`key2`)}</li>
          <li> {t(`key3`)}</li>
          <li>{t(`key4`)}</li>
        </ul>
      </div>
    </main>
  );
}
