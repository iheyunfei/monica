// import {
//   useRef,
// } from 'react';
import {
  useState, useEffect, useCallback, useRef,
} from 'react';

// import { store } from '../store';
// import { createUseStore } from './helper';

// export const useStore = createUseStore(store);

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


export function useHasBeenTrued(status) {
  const initialStausRef = useRef(status);
  if (status) initialStausRef.current = status;
  return initialStausRef.current;
}

// export function useIsMounted() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     return () => setIsMounted(false);
//   }, [setIsMounted]);

//   return isMounted;
// }

export function useForceUpdate() {
  const [, setUpdateCount] = useState(0);
  const forceUpdate = useCallback(() => {
    setUpdateCount(prevCount => prevCount + 1);
  }, [setUpdateCount]);
  return forceUpdate;
}

export const foo = 'oo';
