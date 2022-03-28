import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import storageConfig from '../config/storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T = unknown>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState<T>({} as T);

  useEffect(() => {
    async function loadingState() {
      const storaged = await AsyncStorage.getItem(
        `${storageConfig.app_key}:${key}`,
      );

      setState(storaged ? JSON.parse(storaged) : initialState);
    }
    loadingState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function setData() {
      await AsyncStorage.setItem(
        `${storageConfig.app_key}:${key}`,
        JSON.stringify(state),
      );
    }

    setData();
  }, [key, state]);

  return [state, setState];
}
