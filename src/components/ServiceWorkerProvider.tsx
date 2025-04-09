'use client';

import { useEffect } from 'react';

export default function ServiceWorkerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        console.log('Service Worker is ready:', registration);
      });
    }
  }, []);

  return <>{children}</>;
} 