import React, { ReactNode } from 'react';
import { AuthProvider } from './auth';

// import { Container } from './styles';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}
