import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  bg?: boolean;
  animation?: boolean;
  onClick?: () => void;
};

const IconBox = ({ children, bg, animation, onClick }: Props) => {
  return (
    <>
      <div
        onClick={onClick}
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
