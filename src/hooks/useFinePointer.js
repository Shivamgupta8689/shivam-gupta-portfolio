import { useState, useEffect } from 'react';

export function useFinePointer() {
  const [isFine, setIsFine] = useState(() =>
    window.matchMedia('(pointer: fine)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const handler = e => setIsFine(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isFine;
}
