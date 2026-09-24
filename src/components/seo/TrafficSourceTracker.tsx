'use client';

import { useEffect } from 'react';
import { logTrafficSourceEvent } from '@/lib/analytics';

export function TrafficSourceTracker() {
  useEffect(() => {
    // Delay slightly to ensure GA4 script has initialized
    const timer = setTimeout(() => {
      logTrafficSourceEvent();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
