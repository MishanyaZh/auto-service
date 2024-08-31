import React, { ReactNode } from 'react';

type Props = { children: ReactNode; bg?: boolean; animation?: boolean };

const IconBox = ({ children, bg, animation }: Props) => {
  return (
    <>
      <div
        className={`icon-box ${bg && 'icon-box-bg'} ${
          animation && 'icon-box-animation'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default IconBox;
