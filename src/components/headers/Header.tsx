import React, { FC } from 'react';
import { withTranslation } from 'react-i18next';

import Logo from '../logo/Logo';
import { LangSwitcher } from 'src/features/LangSwitcher/LangSwitcher';
import ChangeThemeButton from '../buttons/ChangeThemeButton';

export const HeaderOrigin: FC = () => {
  return (
    <header>
      <div className="row  border-mute border-bottom py-1 mx-0 sticky-top">
        <div className="col text-center offset-4">
          <Logo />
        </div>
        <div className="col align-self-center">
          <ChangeThemeButton />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};
HeaderOrigin.displayName = 'HeaderOrigin';
export const Header = withTranslation()(HeaderOrigin);
