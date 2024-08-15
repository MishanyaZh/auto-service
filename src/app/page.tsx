import React, { Suspense } from 'react';
import Content from '@/components/Content';

export default function HomePage() {
  return (
    <Suspense fallback="Loading...">
      <Content />
    </Suspense>
  );
}
