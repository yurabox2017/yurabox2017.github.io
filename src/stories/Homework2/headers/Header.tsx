import React, { FC } from 'react';
import Logo from '../Logo/Logo';


export const Header: FC = () => {
  return (
    <header>
      <div className="row  border-mute border-bottom py-1 mx-0 sticky-top">
        <div className="col text-center">
          <Logo />
        </div>
      </div>
    </header>
  );
};
