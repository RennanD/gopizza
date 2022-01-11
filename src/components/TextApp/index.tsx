import React from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

type TextProps = {
  children: string;
};

export function TextApp({ children }: TextProps): JSX.Element {
  return <Text>{children}</Text>;
}
