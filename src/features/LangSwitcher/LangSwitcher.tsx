import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Locale } from 'src/localization/settings';
import { Link } from 'react-router';

export type ThemeSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<ThemeSwitcherProps> = () => {
  const { i18n } = useTranslation();

  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;
  return (
    <Link to="#" className="nav-link" onClick={() => i18n.changeLanguage(lang)}>
      {lang}
    </Link>
  );
};
