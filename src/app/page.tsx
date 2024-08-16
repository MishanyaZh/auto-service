import React, { Suspense } from 'react';
import Content from '@/components/Content';
import Loading from './loading';

export default function HomePage(props: any) {
  return (
    <Suspense fallback={<Loading />}>
      <Content {...props} />
    </Suspense>
  );
}
