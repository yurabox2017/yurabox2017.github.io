import React, { FC, useContext } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';

import s from './LangSwitcher.sass';
import { Locale } from 'src/localization/settings';
import { ThemeContext } from 'src/context/themeContext';

export type ThemeSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const theme = useContext(ThemeContext);

  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;
  return (
    <button
      type="button"
      className={cn(s.root, className, `text-${theme.theme === 'dark' ? 'light' : 'dark'}`)}
      onClick={() => i18n.changeLanguage(lang)}
    >
      {lang}
    </button>
  );
};
