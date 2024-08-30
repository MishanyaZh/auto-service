import React, { ReactNode } from 'react';

type Props = { children: ReactNode; bg: boolean };

const IconBox = ({ children, bg }: Props) => {
  return <div className={`icon-box ${bg && 'icon-box-bg'}`}>{children}</div>;
};

export default IconBox;
