import { useState, useEffect, useCallback } from 'react';

import { store } from '../store';
import { createUseStore } from './helper';

export const useStore = createUseStore(store);

export function useIsOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const onlineListener = useCallback(() => {
    setIsOnline(true);
  }, []);
  const offlineListener = useCallback(() => {
    setIsOnline(false);
  }, [setIsOnline]);
  useEffect(() => {
    window.addEventListener('online', onlineListener);
    window.addEventListener('offline', offlineListener);
    return () => {
      window.removeEventListener('online', onlineListener);
      window.removeEventListener('offline', offlineListener);
    };
  }, [setIsOnline, onlineListener, offlineListener]);
  return isOnline;
}

export const foo = 'oo';
