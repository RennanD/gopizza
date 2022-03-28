import React from 'react';
import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SingIn } from '@screens/SingIn';
import { ThemeProvider } from 'styled-components/native';

import { AppProvider } from '@hooks/index';
import theme from './src/styles/theme';

export default function App() {
  const [fonstLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <AppProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SingIn />
        </GestureHandlerRootView>
      </AppProvider>
    </ThemeProvider>
  );
}
