import { TextInput } from '@components/Forms/TextInput';
import React from 'react';

import { Container } from './styles';

export function SingIn(): JSX.Element {
  return (
    <Container>
      <TextInput
        placeholder="E-mail"
        variant="secundary"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        placeholder="Senha"
        variant="secundary"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
    </Container>
  );
}
