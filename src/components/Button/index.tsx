import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, TextButton, Loading, VariantProps } from './styles';

type ButtonProps = RectButtonProps & {
  children: string;
  variant?: VariantProps;
  loading?: boolean;
};

export function Button({
  children,
  variant = 'primary',
  loading = false,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container enabled={!loading} variant={variant} {...rest}>
      {loading ? <Loading /> : <TextButton>{children}</TextButton>}
    </Container>
  );
}
