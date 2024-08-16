import Image from 'next/image';
import React from 'react';
import { spinnerUrl } from './constants';

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex justify-center mt-16">
      <Image
        height={200}
        width={200}
        src={spinnerUrl}
        alt="loading..."
        priority={true}
      />
    </div>
  );
};

export default Loading;
