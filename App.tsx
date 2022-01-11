import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SingIn } from '@screens/SingIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <SingIn />
    </View>
  );
}
