import React, { FC, useState } from 'react';

const ChangeThemeButton: FC = () => {
  const [theme, setTheme] = useState('primary');

  const hadleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'primary' ? 'danger' : 'primary'));
  };
  return (
    <button className={`btn btn-outline-${theme} `} onClick={hadleTheme}>
      Переключить цвет
    </button>
  );
};
export default ChangeThemeButton;
