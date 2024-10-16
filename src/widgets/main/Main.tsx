import React, { useState } from 'react';
import logo from '../../app/logo.svg';
import { useTranslation } from 'react-i18next';
import Modal from '../modal/Modal';

export default function Main() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(true);
  };
  const onClosed = () => {
    setVisible(false);
  };

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
        <button className="btn btn-primary w-50" onClick={onOpen}>
          Открыть модальное окно
        </button>
        <Modal visible={visible} header="" onClose={onClosed}>
          <h1>Привет мир!</h1>
        </Modal>
      </div>
    </main>
  );
}
