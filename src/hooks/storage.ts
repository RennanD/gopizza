import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import storageConfig from '../config/storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T = unknown>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState<T>(() => {
    const storaged = localStorage.getItem(`${storageConfig.app_key}:${key}`);

    return storaged ? JSON.parse(storaged) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(
      `${storageConfig.app_key}:${key}`,
      JSON.stringify(state),
    );
  }, [key, state]);

  return [state, setState];
}
