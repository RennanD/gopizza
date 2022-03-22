import React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

import { Container, VariantProps } from './styles';

type TextInputProps = RNTextInputProps & {
  variant?: VariantProps;
};

export function TextInput({
  variant = 'primary',
  ...rest
}: TextInputProps): JSX.Element {
  return <Container {...rest} variant={variant} />;
}
