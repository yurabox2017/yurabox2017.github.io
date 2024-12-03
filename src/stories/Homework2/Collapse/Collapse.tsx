import React, { FC } from 'react';
import s from './Collapse.module.sass';
import cn from 'clsx';

export type CollapseProps = {
  className?: string;
  children: React.ReactNode;
  opened: boolean;
};

export const Collapse: FC<CollapseProps> = ({ className, opened, children }) => {
  return (
    <>
      <div className={cn(!opened && s.collapse, opened && s.collapsing, className)} id="collapseExample">
        <div className="card card-body">{children}</div>
      </div>
    </>
  );
};
