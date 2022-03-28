import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { usePersistedState } from './storage';

type SignInData = {
  email: string;
  password: string;
};

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextData = {
  isLogging: boolean;
  user: User;
  singIn: (data: SignInData) => Promise<void>;
  singOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type Profile = {
  name: string;
  isAdmin: boolean;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = usePersistedState<User>('user', {} as User);

  async function handleSignIn({ email, password }: SignInData) {
    setIsLogging(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(account => {
        firestore()
          .collection('users')
          .doc(account.user.uid)
          .get()
          .then(profile => {
            const { name, isAdmin } = profile.data() as unknown as Profile;

            const userData = {
              id: account.user.uid,
              name,
              isAdmin,
            };

            setUser(userData);
          })
          .catch(() =>
            Alert.alert(
              'Login',
              'Não foi possível acessar os dados do usuário',
            ),
          );

        setIsLogging(false);
      })
      .catch(error => {
        const { code } = error;

        setIsLogging(false);

        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          Alert.alert('Login', 'Credenciais inválidas');
        } else {
          Alert.alert('Login', 'Não foi possível realizar o login');
        }
      });
  }

  async function handleSignOut() {
    await auth().signOut();
    setUser({} as User);
  }

  async function handleForgotPassword(email: string) {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert('Redefinir Senha', 'Enviamos um link para seu e-mail'),
      )
      .catch(() =>
        Alert.alert(
          'Redefinir Senha',
          'Não foi possível enviar o e-mail de redefinição de senha',
        ),
      );
  }

  return (
    <AuthContext.Provider
      value={{
        isLogging,
        forgotPassword: handleForgotPassword,
        singIn: handleSignIn,
        singOut: handleSignOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
